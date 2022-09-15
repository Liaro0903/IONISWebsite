import React from 'react';
import { IconButton } from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './footer.css';

const Footer = () => {

  return (
    <div className='row'>
      <div className='foot_style'>
        <p style={{ marginBottom: '0px' }}>© 2022 Ian Huang </p>
        <div>
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
      </div>
    </div>
  )
}

export default Footer;