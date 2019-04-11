import I18n from 'ex-react-native-i18n';

I18n.defaultLocale = 'en';
I18n.fallbacks = true;
I18n.translations = {};
I18n.locale = 'zh';

const deviceLocale: string = I18n.locale;
