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

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export const changeLanguage = (lng: string) => {
  i18n.changeLanguage(lng);
}

export default i18n;