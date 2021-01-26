import React from 'react';
import './home.css';

const Home = () => {
  return (
    <section className='home'>
      <svg className='svg-logo' width='870' height='700' viewBox='0 0 870 700' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <line id='bottom-right' x2='869.278' y2='697.917' x1='434.612' y1='581.449' stroke='white' stroke-width='3' />
        <line id='bottom-left' x1='435.388' y1='581.449' x2='0.721613' y2='697.917' stroke='white' stroke-width='3' />
        <line id='middle' x1='435' y1='119' x2='435' y2='581' stroke='white' stroke-width='3' />
        <line x1='435' y1='270' x2='435' y2='440' stroke='black' stroke-width='4' />
        <line id='top-right' x2='434.612' y2='118.551' x1='869.278' y1='2.08255' stroke='white' stroke-width='3' />
        <line id='top-left' x1='0.718307' y1='2.08114' x2='435.385' y2='118.55' stroke='white' stroke-width='3' />
      </svg>
      <div className='title' id='I'>I</div>
      <div className='title' id='O'>O</div>
      <div className='title' id='N'>N</div>
      <div className='title' id='I2'>I</div>
      <div className='title' id='S'>S</div>
      <div className='left-wall'>
        <div className='left-wall-title'>Projects</div>
      </div>
      <div className='right-wall'>
        <div className='right-wall-title'>Experience</div>
      </div>
      <div className='top-wall'>
        <div className='top-wall-title'>Language</div>
      </div>
      <div className='bottom-wall'>
        <div className='bottom-wall-title'>About</div>
      </div>
    </section>
  )
}

export default Home;