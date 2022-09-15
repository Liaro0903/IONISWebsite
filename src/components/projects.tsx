import React from 'react';
import { useTranslation } from 'react-i18next/';
import { Scene } from 'react-scrollmagic';

import { IconButton } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LaunchIcon from '@material-ui/icons/Launch';
/* @ts-ignore */
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import './info.css';

interface IProjectsData {
  id: string;
  images: string[];
  launch?: string;
  github: string;
  usedTech: string;
}

const projectsData: IProjectsData[] = [
  {
    id: 'highk',
    images: ['img/highk1.png', 'img/highk2.gif'],
    github: 'https://github.com/Liaro0903/HighK-Marder',
    usedTech: 'MATLAB, parallel programming, C++'
  },
  {
    id: 'socshoot',
    images: ['img/socshoot1.png', 'img/socshoot2.png'],
    launch: 'https://playcanv.as/p/h9FzL0Ep/',
    github: 'https://github.com/Liaro0903/SoccerShooter',
    usedTech: 'Playcanvas, Cannon.js, Socket.io, Typescript, Express, HTML, CSS, Javascript',
  },
  {
    id: 'mathcal',
    images: ['img/mathcal1.png'],
    launch: 'https://mathcal.ionis-hg.com',
    github: 'https://github.com/Liaro0903/MathCalendar',
    usedTech: 'HTML, CSS, Javascript',
  },
  {
    id: '115959',
    images: ['img/115959.png'],
    launch: 'https://115959.ionis-hg.com',
    github: 'https://github.com/Liaro0903/115959',
    usedTech: 'Vue, Express, Typescript'
  },
  {
    id: 'raspTV',
    images: ['img/raspTV.gif'],
    github: 'https://github.com/Liaro0903/RaspTV',
    usedTech: 'Socket.io, React, Express, Material-UI, Typescript',
  },
  {
    id: 'bang',
    images: [],
    github: 'https://github.com/bang-with-friends/bang-with-friends',
    usedTech: 'Pixi.js, React, Typescript, Socket.io, Express',
  }
]

const hackProjectsData: IProjectsData[] = [
  {
    id: 'hack.hackmap',
    images: [],
    github: 'https://github.com/hackmapp/hackmapp',
    usedTech: 'D3.js, Typescript, Express'
  },
  {
    id: 'hack.wikiwhere',
    images: [],
    github: 'https://github.com/wikiwhere/wikiwhere',
    usedTech: 'D3.js, C++'
  }
]

const Projects = () => {
  
  const { t } = useTranslation();

  const Card = ({ d }: {d: IProjectsData}) => {
    let image_element = <></>;
    if (d.images.length > 1) {
      image_element = (
        <div className='slide-wrapper'>
          <Slide easing='ease' className='slide'>
            { 
              d.images.map(image => (
                <div className='each-slide' key={image}>
                  <div style={{ 'backgroundImage': `url(${image})` }} />
                </div>
              ))
            }
          </Slide>
        </div>
      );
    } else if (d.images.length > 0) { // if only 1 image
      image_element = (
        <div className='slide-wrapper'>
          <img src={d.images[0]} alt={d.images[0]} className='slide' />
        </div>
      );
    }

    return (
      <>
        <div className='space-between-wrapper'>
          <a href={d.launch ? d.launch : d.github} target='_blank' style={{ color: 'white'}}>
            <h3>{t(`Projects.${d.id}.title`)}</h3>
          </a>
          <h4>{t(`Projects.${d.id}.year`)}</h4>
        </div>
        { image_element }
        { d.launch && 
          <IconButton className='white-icon' href={d.launch} target='_blank'>
            <LaunchIcon />
          </IconButton>
        }
        <IconButton className='white-icon' href={d.github} target='_blank'>
          <GitHubIcon />
        </IconButton>
        <p>{t(`Projects.${d.id}.p`)}</p>
        <p>{t('Projects.used-tech')}: {d.usedTech}</p>
      </>
    )
  };

  return (
    <div className='row'>
      <section id='projects'>
        <h2>{t('Projects.title')}</h2>
        {
          projectsData.map(project => (
            <Scene
              triggerElement={`#_${project.id}`}
              classToggle='scroll-reveal'
              reverse={true}
              offset={-300}
              key={project.id}
            >
              {/* An underscore was added because it wouldn't understand 115959 I think */}
              <article id={`_${project.id}`}>
                <Card d={project} />
              </article>
            </Scene>
          ))
        }
        <h3 className='mid-title'>{t('Projects.hack.title')}</h3>
        {
          hackProjectsData.map(project => (
            <Scene
              triggerElement={`#${project.id.replace('hack.', '')}`}
              classToggle='scroll-reveal'
              reverse={true}
              offset={-300}
              key={project.id}
            >
              {/* We want to get rid of the . or else it will not detect */}
              <article id={`${project.id.replace('hack.', '')}`}>
                <Card d={project} />
              </article>
            </Scene>
          ))
        }
      </section>
    </div>
  )
}

export default Projects;