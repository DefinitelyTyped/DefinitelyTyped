import { negotiateLanguages } from 'fluent-langneg';

const supportedLocales = negotiateLanguages(
  ['en-US', 'pl'],       // requested locales
  ['de', 'en-US', 'pl'],     // available locales
  { defaultLocale: 'en-US' }
);
