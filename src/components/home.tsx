import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';

import Begin from './begin';
import About from './about';

import './home.css';

const Home = () => {
  const { t } = useTranslation();
  const [shouldLoadLinks, setShouldLoadLinks] = useState<boolean>(false);
  const { lang } = useParams<'lang'>();

  const svgLogo = (
    <div className='svg-logo'>
      <svg id='svg-svg-logo' width="410" height="462" viewBox="0 0 410 462" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* <rect width="870" height="700" fill="#230E0E"/> */}
        <rect x="0" y="0" width="410" height="462" stroke="black" stroke-width="4"/>
      </svg>
    </div>
  )

  const links = (
    <React.Fragment>
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
      {/*<div className='wall test-wall'></div>*/}
    </React.Fragment>
  )

  setTimeout(() => {
    setShouldLoadLinks(true);
  }, 3500);

  return (
    <section className='home'>
      {/*<svg className='svg-logo-middle' width='870' height='700' viewBox='0 0 870 700' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <line x1='435' y1='270' x2='435' y2='440' stroke='black' strokeWidth='10' />
      </svg>*/}

      {/*<svg className='svg-logo-middle' width='870' height='700' viewBox='0 0 870 700' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <rect x='401' y='270' width='68' height='170' fill='black'/>
    </svg>*/}


      {shouldLoadLinks && links}
    </section>
  )
}

export default Home;