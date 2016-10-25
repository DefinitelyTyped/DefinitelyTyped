/// <reference path="../sinon/sinon.d.ts" />
/// <reference path="../mocha/mocha.d.ts" />
/// <reference path="../expect.js/expect.js.d.ts" />
/// <reference path="../js-fixtures/fixtures.d.ts" />
/// <reference path="../jquery/jquery.d.ts" />
/// <reference path="i18next.d.ts" />

import * as i18n from 'i18next';

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
        return <I18next.TranslationOptions>{}
    },
    interpolation: <I18next.InterpolationOptions>{},
    detection: null,
    backend: null,
    cache: null
});

i18n.t('helloWorld', <I18next.TranslationOptions> {
    defaultValue: 'default',
    count: 10
});
const currentLanguage:string = i18n.language;
const userLanguageCodes:string[] = i18n.languages;
