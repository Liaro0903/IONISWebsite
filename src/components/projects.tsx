import React from 'react';
import { useTranslation } from 'react-i18next/';

import { IconButton } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LaunchIcon from '@material-ui/icons/Launch';
/* @ts-ignore */
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import './info.css';

const Projects = () => {
  const { t } = useTranslation();

  return (
    <div className='wrapper' style={{
      backgroundColor: 'rgba(30, 30, 30, 1)',
      color: 'white'
    }}>
      <div className='row'>
        <section id='projects'>
          <h2>{t('Projects.title')}</h2>
          <article>
            <div className='space-between-wrapper'>
              <h3>{t('Projects.mathcal.title')}</h3>
              <h4>{t('Projects.mathcal.year')}</h4>
            </div>
            <div className='slide-wrapper'>
              <img src='img/mathcal1.png' alt='Soccer Shooter In Game' className='slide' />
            </div>
            <IconButton className='projects-icon' href='https://mathcal.ionis-hg.com'>
              <LaunchIcon />
            </IconButton>
            <IconButton className='projects-icon' href='https://github.com/Liaro0903/MathCalendar'>
              <GitHubIcon />
            </IconButton>
            <p>{t('Projects.mathcal.p')}</p>
            <p>{t('Projects.used-tech')}: HTML, CSS, Javascript</p>
          </article>
          <article>
            <div className='space-between-wrapper'>
              <h3>{t('Projects.socshoot.title')}</h3>
              <h4>{t('Projects.socshoot.year')}</h4>
            </div>
            <div className='slide-wrapper'>
              <Slide easing='ease' className='slide'>
                <div className='each-slide'>
                  <div style={{ 'backgroundImage': `url(img/socshoot1.png)` }} />
                </div>
                <div className='each-slide'>
                  <div style={{ 'backgroundImage': `url(img/socshoot2.png)` }} />
                </div>
              </Slide>
            </div>
            <IconButton className='projects-icon' href='https://playcanv.as/p/h9FzL0Ep/'>
              <LaunchIcon />
            </IconButton>
            <IconButton className='projects-icon' href='https://github.com/Liaro0903/SoccerShooter'>
              <GitHubIcon />
            </IconButton>
            <p>{t('Projects.socshoot.p')}</p>
            <p>{t('Projects.used-tech')}: Playcanvas, Cannon.js, Socket.io, Typescript, Express, HTML, CSS, Javascript</p>
          </article>
          <article>
            <div className='space-between-wrapper'>
              <h3>{t('Projects.raspTV.title')}</h3>
              <h4>{t('Projects.raspTV.year')}</h4>
            </div>
            <div className='slide-wrapper'>
              <img src='img/raspTV.gif' alt='Soccer Shooter In Game' className='slide' />
            </div>
            <IconButton className='projects-icon' href='https://github.com/Liaro0903/RaspTV'>
              <GitHubIcon />
            </IconButton>
            <p>{t('Projects.raspTV.p')}</p>
            <p>{t('Projects.used-tech')}: Socket.io, React, Express, Material-UI, Typescript</p>
          </article>
          <article>
            <div className='space-between-wrapper'>
              <h3>{t('Projects.bang.title')}</h3>
              <h4>{t('Projects.bang.year')}</h4>
            </div>
            <IconButton
              className='projects-icon projects-icon-no-pic'
              href='https://github.com/bang-with-friends/bang-with-friends'>
              <GitHubIcon />
            </IconButton>
            <p>{t('Projects.bang.p')}</p>
            <p>{t('Projects.used-tech')}: Pixi.js, React, Typescript, Socket.io, Express</p>
          </article>
          <h3 className='mid-title'>{t('Projects.hack.title')}</h3>
          <article>
            <div className='space-between-wrapper'>
              <h3>{t('Projects.hack.hackmap.title')}</h3>
              <h4>{t('Projects.hack.hackmap.year')}</h4>
            </div>
            <IconButton
              className='projects-icon projects-icon-no-pic'
              href='https://github.com/hackmapp/hackmapp'>
              <GitHubIcon />
            </IconButton>
            <p>{t('Projects.hack.hackmap.p')}</p>
            <p>{t('Projects.used-tech')}: D3.js, Typescript, Express</p>
          </article>
          <article>
            <div className='space-between-wrapper'>
              <h3>{t('Projects.hack.wikiwhere.title')}</h3>
              <h4>{t('Projects.hack.wikiwhere.year')}</h4>
            </div>
            <IconButton
              className='projects-icon projects-icon-no-pic'
              href='https://github.com/wikiwhere/wikiwhere'>
              <GitHubIcon />
            </IconButton>
            <p>{t('Projects.hack.wikiwhere.p')}</p>
            <p>{t('Projects.used-tech')}: D3.js, C++</p>
          </article>
        </section>
      </div>
    </div>
  )
}

export default Projects;