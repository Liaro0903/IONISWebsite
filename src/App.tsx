import React, { Fragment, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import { Controller, Scene } from 'react-scrollmagic'

import SvgLogo from './components/svg-logo';
import Home from './components/home';
import Begin from './components/begin';
import About from './components/about';
import Projects from './components/projects';
import Skills from './components/skills';
import Experiences from './components/experience';
import Footer from './components/footer';
import './components/info.css';
import './components/svg-logo.css';
import './locales/i18n';

const LangRoute = () => {
  let { lang } = useParams<'lang'>(); // I'm not sure what I did, but it works lol
  const { i18n } = useTranslation();
  const [firstTime, setFirstTime] = useState<boolean>(true);
  const [shouldLoadPages, setShouldLoadPages] = useState<boolean>(false);

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

  setTimeout(() => {
    setShouldLoadPages(true);
  }, 3500);

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
      <Fragment>
        <Home />
        <Begin />
        {shouldLoadPages && (
          <Fragment>
            <About />
            <Projects />
            <Skills />
            <Experiences />
            <Footer />
          </Fragment>
        )}
      </Fragment>
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
          <SvgLogo />
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
