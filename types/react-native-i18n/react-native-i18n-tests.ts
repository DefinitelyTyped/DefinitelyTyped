import I18n, { getLanguages } from 'react-native-i18n';

getLanguages().then(languages => languages[0]);

I18n.defaultLocale = 'en';
I18n.fallbacks = true;
I18n.translations = {};
I18n.locale = 'fr';

const currentLocale: string = I18n.currentLocale();
