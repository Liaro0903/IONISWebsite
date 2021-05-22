import React from 'react';
import { useTranslation } from 'react-i18next/';
import './experience.css';

const techSkills = {
  'web.title': {
    'web.frontend': [
      'React', 'Redux', 'Deck.gl', 'Material-UI', 'Bootstrap', 'jQuery',
      'PlayCanvas', 'Vue', 'D3', 'GraphQL'
    ],
    'web.backend': ['Express', 'MongoDB', 'NGINX', 'Socket.io']
  },
  'lang': [
    'Java', 'Typescript', 'HTML', 'CSS', 'Python', 'MATLAB', 'C++'
  ],
  'others': [
    'Git', 'Linux', 'Figma', 'Arduino', 'Raspberry Pi', 'LaTex'
  ]
}

const Card = ({ skill }: {skill: (string | string[] | object)[]}) => {  
  const { t } = useTranslation();
  let trs = [];
  if (Array.isArray(skill[1])) {
    for (let i = 0; i < skill[1].length; i++) {
      trs.push(<tr key={skill[1][i]}><th>{skill[1][i]}</th></tr>)
    }
  } else {
    trs = Object.entries(skill[1]).map(subSkill => {
      let subtrs = [];
      for (let i = 0; i < subSkill[1].length; i += 2) {
        subtrs.push(
          <tr className='skills-frameworks' key={subSkill[1][i]}>
            <th>{subSkill[1][i]}</th>
            <th>{i !== subSkill[1].length ? subSkill[1][i+1]: ''}</th>
          </tr>
        );
      }
      return (
        <React.Fragment key={subSkill[0]}>
          <tr><td><b className='skills-front-backend'>
            {t(`Experience.skills.${subSkill[0]}`)}
          </b></td></tr>
          {subtrs}
        </React.Fragment>
      )
    })
  }
  
  return (
    <div className='card'>
      <div className='card-container'>
        <h3><b>{t(`Experience.skills.${skill[0] as string}`)}</b></h3>
        <table style={{ width: '100%'}}>
          <tbody>
            {trs}
          </tbody>
        </table>
      </div>
    </div>
  )
}

const Experiences = () => {
  const { t } = useTranslation();

  return (
    <div className='wrapper' style={{ marginBottom: 50 }}>
      <div className='row'>
        <section id='experience'>
          <h2>{t('Experience.title')}</h2>
          <article>
            <div className='space-between-wrapper'>
              <h3 className='experience-subtitle-top'>{t('Experience.rocket.title')}</h3>
              <h4 className='experience-subtitle-middle'>{t('Experience.rocket.location')}</h4>
            </div>
            <div className='space-between-wrapper'>
              <p className='experience-subtitle-middle'>{t('Experience.rocket.position')}</p>
              <h4 className='experience-subtitle-bottom'>{t('Experience.rocket.year')}</h4>
            </div>
            <div className='li-wrapper'>
              <li>{t('Experience.rocket.p.1')}</li>
              <li>{t('Experience.rocket.p.2')}</li>
              <li>{t('Experience.rocket.p.3')}</li>
            </div>
          </article>
          <article>
            <div className='space-between-wrapper'>
              <h3 className='experience-subtitle-top'>{t('Experience.fcc.title')}</h3>
              <h4 className='experience-subtitle-middle'>{t('Experience.fcc.location')}</h4>
            </div>
            <div className='space-between-wrapper'>
              <p className='experience-subtitle-middle'>{t('Experience.fcc.position')}</p>
              <h4 className='experience-subtitle-bottom'>{t('Experience.fcc.year')}</h4>
            </div>
            <div className='li-wrapper'>
              <li>{t('Experience.fcc.p.1')}</li>
              <li>{t('Experience.fcc.p.2')}</li>
            </div>
          </article>
          <article>
            <div className='space-between-wrapper'>
              <h3 className='experience-subtitle-top'>{t('Experience.gravyty.title')}</h3>
              <h4 className='experience-subtitle-middle'>{t('Experience.gravyty.location')}</h4>
            </div>
            <div className='space-between-wrapper'>
              <p className='experience-subtitle-middle'>{t('Experience.gravyty.position')}</p>
              <h4 className='experience-subtitle-bottom'>{t('Experience.gravyty.year')}</h4>
            </div>
            <div className='li-wrapper'>
              <li>{t('Experience.gravyty.p.1')}</li>
              <li>{t('Experience.gravyty.p.2')}</li>
            </div>
          </article>
          <h3 className='mid-title'>{t('Experience.awards.title')}</h3>
          <article>
            <div className='space-between-wrapper'>
              <h3 className='experience-subtitle-top'>{t('Experience.awards.code19.title')}</h3>
              <h4 className='experience-subtitle-middle'>{t('Experience.awards.code19.location')}</h4>
            </div>
            <div className='space-between-wrapper'>
              <p className='experience-subtitle-middle'>{t('Experience.awards.code19.award-title')}</p>
              <h4 className='experience-subtitle-bottom'>{t('Experience.awards.code19.year')}</h4>
            </div>
            <div style={{ marginBottom: '1em', marginTop: '1em' }}>
              <li>{t('Experience.awards.code19.p')}</li>
            </div>
          </article>
          <article>
            <div className='space-between-wrapper'>
              <h3 className='experience-subtitle-top'>{t('Experience.awards.code18.title')}</h3>
              <h4 className='experience-subtitle-middle'>{t('Experience.awards.code18.location')}</h4>
            </div>
            <div className='space-between-wrapper'>
              <p className='experience-subtitle-middle'>{t('Experience.awards.code18.award-title')}</p>
              <h4 className='experience-subtitle-bottom'>{t('Experience.awards.code18.year')}</h4>
            </div>
            <div style={{ marginBottom: '1em', marginTop: '1em' }}>
              <li>{t('Experience.awards.code18.p')}</li>
            </div>
          </article>
          <article>
            <h3 className='mid-title'>{t('Experience.skills.title')}</h3>
            {Object.entries(techSkills).map(skill => 
              <Card skill={skill} key={skill[0] as string}
            />)}
          </article>
        </section>
      </div>
    </div >
  )
}

export default Experiences;