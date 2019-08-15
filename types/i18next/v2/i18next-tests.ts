import i18n = require("i18next");

const translationOptions: i18n.TranslationOptions = {};

i18n.init({
    debug: true,
    resources: {
        en: {
            translation: {
                helloWorld: 'Hello, world!',
                helloWorldInterpolated: 'Hello, {{name}}!'
            }
        },
        ru: {
            translation: {
                helloWorld: 'Привет, мир!',
                helloWorldInterpolated: 'Привет, {{name}}!'
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
    missingKeyHandler: (lng: string, ns: string, key: string, fallbackValue: string) => {
        console.log(`Lng: ${lng}, ns: ${ns}, key: ${key}, fallbackValue: ${fallbackValue}`);
    },
    parseMissingKeyHandler: (key: string) => {
        console.log(key);
    },
    appendNamespaceToMissingKey: true,
    returnNull: false,
    returnEmptyString: false,
    returnObjects: false,
    returnedObjectHandler: (key: string, value: string, options: any) => {
    },
    joinArrays: '\n',
    overloadTranslationOptionHandler: (args: any[]) => {
        return translationOptions;
    },
    interpolation: { prefix: "foo-" },
    detection: null,
    backend: null,
    cache: null,
    wait: false
});

i18n.init({
    fallbackLng: ['en', 'ru'],
});

i18n.init({
    fallbackLng: {
        'de-CH': ['fr', 'it'],
        'zh-HANT': ['zh-HANS', 'en'],
        default: ['en']
    },
});

i18n.t('helloWorld', {
    defaultValue: 'default',
    count: 10
});

i18n.t('helloWorldInterpolated', {
    defaultValue: 'default',
    count: 10,
    name: "world"
});

i18n.t('helloSingleFallbackLng', {
    fallbackLng: 'en'
});

i18n.t('helloMultiFallbackLng', {
    fallbackLng: ['en', 'ru']
});

i18n.t('helloObjectFallbackLng', {
    fallbackLng: {
        'de-CH': ['fr', 'it'],
        'zh-HANT': ['zh-HANS', 'en'],
        default: ['en']
    },
});

i18n.exists("helloWorld");

const options: i18n.Options = i18n.options;
const currentLanguage: string = i18n.language;
const userLanguageCodes: string[] = i18n.languages;
