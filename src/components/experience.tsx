import React from 'react';
import { useTranslation } from 'react-i18next/';

const Experiences = () => {
  const { t } = useTranslation();

  return (
    <div className='wrapper'>
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
              <h4 className='experience-subtitle-bottom'>{t('Experience.awards.code19.year')}</h4>
            </div>
            <div style={{ marginBottom: '1em', marginTop: '1em' }}>
              <li>{t('Experience.awards.code18.p')}</li>
            </div>
          </article>
          <article>
            <h3 className='mid-title'>Skills</h3>
            <ul>
              <li>Web Frameworks
            <ul>
                  <li>
                    Frontend: React + Redux, Deck.gl, Material-UI, Bootstrap, JQuery, PlayCanvas, Vue, D3, GraphQL, Carbon Components, Pixi.js
              </li>
                  <li>
                    Backend: Express, MongoDB, Socket.io, Restful API, NGINX
              </li>
                </ul>
              </li>
              <li>
                Languages: Java, Typescript, HTML, CSS, Python, MATLAB, C++
          </li>
              <li>
                Others: Git, Linux, Figma, Arduino, Raspberry Pi
          </li>
            </ul>
          </article>
        </section>
      </div>
    </div >
  )
}

export default Experiences;