/// <reference types="sinon" />
/// <reference types="mocha" />
/// <reference types="expect.js" />
/// <reference types="jquery" />

import i18n = require("i18next");

i18n.init({
    debug: true,
    resources: {
        en: {
            translation: {
                helloWorld: 'Hello, world!'
            }
        },
        ru: {
            translation: {
                helloWorld: 'Привет, мир!'
            }
        }
    },
    lng: 'en',
    fallbackLng: 'ru',
    ns: 'translation',
    defaultNS: 'translation',
    fallbackNS: 'translation',
    whitelist: ['en'],
    lowerCaseLng: false,
    load: 'languageOnly',
    preload: ['ru', 'en'],
    keySeparator: '.',
    nsSeparator: ':',
    pluralSeparator: '_',
    contextSeparator: '_',
    saveMissing: true,
    saveMissingTo: 'all',
    missingKeyHandler: (lng:string, ns:string, key:string, fallbackValue:string) => {
        console.log('Lng: ' + lng + ', ns: ' + ns + ', key' + key + ', fallbackValue: ' + fallbackValue);
    },
    parseMissingKeyHandler: (key:string) => {
        console.log(key);
    },
    appendNamespaceToMissingKey: true,
    returnNull: false,
    returnEmptyString: false,
    returnObjects: false,
    returnedObjectHandler: (key:string, value:string, options:any) => {
    },
    joinArrays: '\n',
    overloadTranslationOptionHandler: (args:any[]) => {
        return <i18n.TranslationOptions>{}
    },
    interpolation: <i18n.InterpolationOptions>{},
    detection: null,
    backend: null,
    cache: null
});

i18n.t('helloWorld', <i18n.TranslationOptions> {
    defaultValue: 'default',
    count: 10
});

const options:i18n.Options = i18n.options;
const currentLanguage:string = i18n.language;
const userLanguageCodes:string[] = i18n.languages;
