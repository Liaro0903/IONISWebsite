import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next/';

enum Card_position {
  left = 'left',
  right = 'right',
}

interface ISkill {
  id: string;
  skills: string[];
  position: Card_position;
  height: number;
  height0: number;
}

const skills: ISkill[] = [
  {
    id: 'webfrontend',
    skills: [
      'React', 'Redux', 'Deck.gl', 'Material-UI', 'Bootstrap', 'jQuery', 'PlayCanvas', 'Vue', 'D3', 'GraphQL', 'Pixi.js'
    ],
    position: Card_position.left,
    height: 270,
    height0: 270,
  },
  {
    id: 'webbackend',
    skills: ['NodeJS', 'Express', 'Socket.io', 'MongoDB', 'SQL'],
    position: Card_position.right,
    height: 270,
    height0: 270,
  },
  {
    id: 'ml',
    skills: ['Pytorch + CUDA', 'Numpy', 'Pandas', 'Matplotlib', 'Scikit-learn', 'Scipy', 'CNN'],
    position: Card_position.left,
    height: 250,
    height0: 250,
  },
  {
    id: 'lang',
    skills: ['Java', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Python', 'MATLAB', 'Racket Scheme', 'C++'],
    position: Card_position.right,
    height: 250,
    height0: 250,
  },
  {
    id: 'deploy',
    skills: ['Linux', 'Git', 'Docker', 'NGINX', 'PM2'],
    position: Card_position.left,
    height: 250,
    height0: 250,
  },
  {
    id: 'others',
    skills: ['Figma', 'Arduino', 'Raspberry Pi', 'LaTeX', 'Upgrade PC parts'],
    position: Card_position.right,
    height: 250,
    height0: 250,
  }
];

const courses: ISkill[] = [
  {
    id: 'relcourses.comp',
    skills: [
      'Frontend Web Development with React', 'Neural Networks and Deep Learning', 'Data Management for Data Science', 'Artificial Intelligence', 'Data Structure', 'Operating Systems'
    ],
    position: Card_position.left,
    height: 350,
    height0: 430,
  },
  {
    id: 'relcourses.neuro',
    skills: ['Computational Neuroscience', 'Principles of Neuroscience', 'Neurobiology of Somatosensation', 'Introduction to Behavior Neuroscience', 'Neurobiology of Human Disease'],
    position: Card_position.right,
    height: 350,
    height0: 430,
  },
  {
    id: 'relcourses.math',
    skills: ['Linear Algebra', 'Multivariable Calculus', 'Differential Equations', 'Probability'],
    position: Card_position.left,
    height: 220,
    height0: 280,
  },
  {
    id: 'relcourses.phys',
    skills: ['Mechanics', 'Electricity and Magnetism', 'Waves and Oscillations', 'Electronics Laboratory'],
    position: Card_position.right,
    height: 220,
    height0: 280,
  },
  {
    id: 'relcourses.ling',
    skills: ['Syntactic Theory', 'Semantics', 'Natural Language Processing'],
    position: Card_position.left,
    height: 210,
    height0: 210,
  }
];

const Card = ({ skill }: { skill: ISkill }) => {
  const { t } = useTranslation();

  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  let trs = [];

  if (skill.id.includes('relcourses')) {
    for (let i = 0; i < skill.skills.length; i++) {
      trs.push(
        <tr key={skill.skills[i]}>
          <td><li></li></td>
          <td>{skill.skills[i]}</td>
        </tr>
      )
    }
  } else {
    if (skill.skills.length >= 7) {
      for (let i = 0; i < skill.skills.length; i += 2) {
        trs.push(
          <tr style={{ textAlign: 'center' }} key={skill.skills[i]}>
            <td>{skill.skills[i]}</td>
            <td>{skill.skills[i + 1]}</td>
          </tr>
        )
      }
    } else {
      for (let i = 0; i < skill.skills.length; i++) {
        trs.push(
          <tr style={{ textAlign: 'center' }} key={skill.skills[i]}>
            <td>{skill.skills[i]}</td>
          </tr>
        )
      }
    }
  }

  return (
    <div
      className={`card ${skill.position}`}
      style={{
        height: windowSize.width >= 1536
        ? skill.height
        : windowSize.width >= 992
          ? (skill.height - skill.height0) / 544 * (windowSize.width - 992) + skill.height0 // see my notes for how this is calculated
          : window.innerWidth > 768
            ? skill.height
            : 'auto'
      }}
    >
      <div className='card-container'>
        <h3><b>{t(`Skills.${skill.id}`)}</b></h3>
        <table>
          <tbody>
            {trs}
          </tbody>
        </table>
      </div>
    </div>
  )
}

const Skills = () => {
  const { t } = useTranslation();

  return (
    <div className='row'>
      <section id='skills'>
        <h2>{t('Skills.title')}</h2>
        {
          skills.map(skill => (
            <Card skill={skill} key={skill.id} />
          ))
        }

        <h3>{t('Skills.relcourses.title')}</h3>
        <p>{t('Skills.relcourses.description')}</p>
        {
          courses.map(course => (
            <Card skill={course} key={course.id} />
          ))
        }
      </section>
    </div>
  )
}

export default Skills;