import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import { Controller, Scene } from 'react-scrollmagic'

import Home from './components/home';
import Begin from './components/begin';
import About from './components/about';
import Projects from './components/projects';
import Experiences from './components/experience';
import './components/info.css';
import './components/svg-logo.css';
import './locales/i18n';

const svgLogo = (
  <div className='svg-logo'>
    {/* <svg width='870' height='700' viewBox='0 0 870 700' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <line id='bottom-right' x2='869.278' y2='697.917' x1='434.612' y1='581.449' stroke='white' strokeWidth='3' />
      <line id='bottom-left' x1='435.388' y1='581.449' x2='0.721613' y2='697.917' stroke='white' strokeWidth='3' />
      <line id='middle' x1='435' y1='119' x2='435' y2='581' stroke='white' strokeWidth='3' />
      <line x1='435' y1='270' x2='435' y2='440' stroke='black' strokeWidth='4' />
      <line id='top-right' x2='434.612' y2='118.551' x1='869.278' y1='2.08255' stroke='white' strokeWidth='3' />
      <line id='top-left' x1='0.718307' y1='2.08114' x2='435.385' y2='118.55' stroke='white' strokeWidth='3' />
    </svg> */}
    <Scene
      triggerElement='#trigger'
      classToggle='svg-logo-right-after'
      indicators={true}
      reverse={true}
    >
      <svg id='svg-logo-right' className='svg-logo-right' width='410' height='462' viewBox='0 0 410 462' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <line id='top-right' x1='410' y1='0' x2='0' y2='0' stroke='white' stroke-width='4' />
        <line id='middle' x1='0' y1='0' x2='0' y2='462' stroke='white' stroke-width='4' />
        <line id='bottom-right' x1='0' y1='462' x2='410' y2='462' stroke='white' stroke-width='3' />
      </svg>
    </Scene>
    <Scene
      triggerElement='#trigger'
      classToggle='svg-logo-left-after'
      indicators={true}
      reverse={true}
    >
      <svg id='svg-logo-left' className='svg-logo-left' width='410' height='462' viewBox='0 0 410 462' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <line id='top-left' x1='0' y1='0' x2='410' y2='0' stroke='white' stroke-width='4' />
        <line id='middle' x1='410' y1='0' x2='410' y2='462' stroke='white' stroke-width='4' />
        <line id='bottom-left' x1='410' y1='462' x2='0' y2='462' stroke='white' stroke-width='3' />
      </svg>
    </Scene>
  </div>
)

const LangRoute = () => {
  let { lang } = useParams<'lang'>(); // I'm not sure what I did, but it works lol
  const { i18n } = useTranslation();
  const [firstTime, setFirstTime] = useState<boolean>(true);

  // Runs only first time, needs to be before render/mount hence cannot use useEffect
  if (firstTime) {
    switch (lang) {
      case undefined:
        break;
      case 'zh':
        i18n.changeLanguage('md');
        break;
    }
    setFirstTime(false);
  }

  // Runs on componentDidUpdate with when lang changes, like when link is clicked at Home component
  // Has to be run in componentDidUpdate, or else will show 'Cannot update a component ()`Home`) while rendering a difference component (`LangRoute`)' warning
  useEffect(() => {
    switch (lang) {
      case undefined:
        i18n.changeLanguage('en');
        break;
      case 'zh':
        i18n.changeLanguage('md');
        break;
    }
  }, [lang, i18n])

  if (lang === undefined || lang === 'zh') {
    return (
      <React.Fragment>
        {/* <Home /> */}
        <Begin />
        <About />
        <Projects />
        <Experiences />
      </React.Fragment>
    )
  } else {
    return <Navigate replace to='/' />
  }

}

function App() {

  return (
    <BrowserRouter>
      <div className='App'>
        <Controller>
          {svgLogo}
          <Routes>
            <Route path='/:lang' element={<LangRoute />} />
            <Route path='/' element={<LangRoute />} /> {/* React router 6 doesn't support optional paramter apparently */}
          </Routes>
        </Controller>
      </div>
    </BrowserRouter>
  );
}

export default App;
