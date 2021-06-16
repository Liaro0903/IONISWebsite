import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import transEn from './english.json';
import transCh from './mandarin.json';
import transTw from './taiwanese.json';

const resources = {
  en: {
    translation: transEn,
  },
  md: {
    translation: transCh,
  },
  tw: {
    translation: transTw,
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en',

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;