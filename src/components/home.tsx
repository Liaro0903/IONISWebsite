import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';

import './home.css';

const Home = () => {
  const { t } = useTranslation();
  const [shouldLoadLinks, setShouldLoadLinks] = useState<boolean>(false);
  const { lang }: { lang: string | undefined } = useParams();

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

      <div className='ionis-title' id='I'>I</div>
      <div className='ionis-title' id='O'>O</div>
      <div className='ionis-title' id='N'>N</div>
      <div className='ionis-title' id='I2'>I</div>
      <div className='ionis-title' id='S'>S</div>
      {shouldLoadLinks && links}
    </section>
  )
}

export default Home;