import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Translation() {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <section>IONIS</section>
      <section>
        <h1>About Me</h1>
          <p>My name is Ian Huang, and I'm  currently a junior at Brandeis University</p>
        <h1>Projects</h1>
        <h1>{t('Welcome to React')}</h1>
        {/* @ts-ignore */}
        <p><ruby><rb>我</rb><rp>(</rp><rt>Góa</rt><rp>)</rp></ruby></p>
        <button onClick={() => i18n.changeLanguage('en')}>EN</button>
        <button onClick={() => i18n.changeLanguage('md')}>MD</button>
        <button onClick={() => i18n.changeLanguage('tw')}>TW</button>
      </section>
    </div>
  );
}
