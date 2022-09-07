import React, { Fragment, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import { Scene } from 'react-scrollmagic'

import './home.css';

const Home = () => {
  const { t } = useTranslation();
  const [shouldLoadLinks, setShouldLoadLinks] = useState<boolean>(false);
  const [inTransition, setInTransition] = useState<boolean>(false);
  const { lang } = useParams<'lang'>();

  const links = (
    <div className='home'>
      <a className='wall left-wall' href='#projects'>
        <div className='wall-title left-wall-title'>{t('Projects.title')}</div>
      </a>
      <a className='wall right-wall' href='#experience'>
        <div className='wall-title right-wall-title'>{t('Experience.title')}</div>
      </a>
      <Link className='wall top-wall' to={lang === undefined ? '/zh' : '/'}>
        <div className='wall-title top-wall-title'>{t('Language.title')}</div>
      </Link>
      <a className='wall bottom-wall' href='#about'>
        <div className='wall-title bottom-wall-title'>{t('About.title')}</div>
      </a>
    </div>
  )

  const openILinks = (
    <Fragment>
      <div className='openI-wall-position openI-wall-position-left'>
        <div className='openI-wall-flex openI-wall-flex-left'>
          <a className='openI-wall-item openI-wall-item-left' href='#about'>{t('About.title')}</a>
          <a className='openI-wall-item openI-wall-item-left' href='#projects'>{t('Projects.title')}</a>
        </div> 
      </div>
      <div className='openI-wall-position openI-wall-position-right'>
        <div className='openI-wall-flex openI-wall-flex-right'>
          <a className='openI-wall-item openI-wall-item-right' href='#skills'>{t('Skills.title')}</a>
          <a className='openI-wall-item openI-wall-item-right' href='#experience'>{t('Experience.title')}</a>
          <Link className='openI-wall-item openI-wall_item-left' to={lang === undefined ? '/zh' : '/'}>{t('Language.title')}</Link>
        </div> 
      </div>
    </Fragment>
  )

  // Timer to be run at the beginning when things are loading
  setTimeout(() => {
    setShouldLoadLinks(true);
  }, 3500);

  return (
    <section className='home-row'>
      {/*<svg className='svg-logo-middle' width='870' height='700' viewBox='0 0 870 700' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <line x1='435' y1='270' x2='435' y2='440' stroke='black' strokeWidth='10' />
      </svg>*/}

      {/*<svg className='svg-logo-middle' width='870' height='700' viewBox='0 0 870 700' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <rect x='401' y='270' width='68' height='170' fill='black'/>
    </svg>*/}
      <Scene
        triggerElement='#trigger'
        reverse={true}
      >
        {(progress: number, event: any) => {
          // console.log(event.type);
          if (event.type === 'start') {
            setInTransition(false);
            return <Fragment>{openILinks}</Fragment>;
          } else if (event.type === 'leave') {
            if (inTransition === false) {
              setInTransition(true);
              setShouldLoadLinks(false);
              setTimeout(() => {
                setShouldLoadLinks(true);
              }, 700)
            }
            return (
              <Fragment>{shouldLoadLinks && links}</Fragment>
            )
          } else {
            return <Fragment>{shouldLoadLinks && links}</Fragment>
          }
        }}
      </Scene>
    </section>
  )
}

export default Home;