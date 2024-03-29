import React, { Fragment } from 'react';

import { IconButton } from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import { useTranslation } from 'react-i18next';

import './info.css';

const About = () => {
  const { t } = useTranslation();

  return (
    <Fragment> 
      <div className='row'>
        <section id='about'>
          <div>
            <h2>{t('About.title')}</h2>
            <p>{t('About.p.1')}</p>
            <p>{t('About.p.2')}</p>
            <p>{t('About.p.3')}</p>
            <p>{t('About.p.4')}</p>
            <p>{t('About.p.5')}</p>
            <IconButton className='white-icon' href='https://github.com/Liaro0903' target='_blank'>
              <GitHubIcon />
            </IconButton>
            <IconButton className='white-icon' href='https://www.linkedin.com/in/ian880903/' target='_blank'>
              <LinkedInIcon />
            </IconButton>
            <IconButton className='white-icon' href='mailto:ian880903@gmail.com'>
              <MailIcon />
            </IconButton>
          </div>
        </section>
      </div>
    </Fragment>
  )
}

export default About;