import React from 'react';
import Home from './components/home';
import About from './components/about';
import Projects from './components/projects';
import Experiences from './components/experience';
import './components/info.css';

function App() {
  return (
    <div>
      <div className='svg-logo'>
        <svg width='870' height='700' viewBox='0 0 870 700' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <line id='bottom-right' x2='869.278' y2='697.917' x1='434.612' y1='581.449' stroke='white' strokeWidth='3' />
          <line id='bottom-left' x1='435.388' y1='581.449' x2='0.721613' y2='697.917' stroke='white' strokeWidth='3' />
          <line id='middle' x1='435' y1='119' x2='435' y2='581' stroke='white' strokeWidth='3' />
          <line x1='435' y1='270' x2='435' y2='440' stroke='black' strokeWidth='4' />
          <line id='top-right' x2='434.612' y2='118.551' x1='869.278' y1='2.08255' stroke='white' strokeWidth='3' />
          <line id='top-left' x1='0.718307' y1='2.08114' x2='435.385' y2='118.55' stroke='white' strokeWidth='3' />
        </svg>
      </div>
      <Home />
      <About />
      <Projects />
      <Experiences />
    </div>
  );
}

export default App;
