import * as i18n from 'i18n-abide';

const emptyAbideOptions: i18n.AbideOptions = {};
const fullAbideOptions: i18n.AbideOptions = {
    gettext_alias: 'gettext',
    supported_languages: ['en-US'],
    default_lang: 'en-US',
    debug_lang: 'it-CH',
    disable_locale_check: false,
    translation_directory: 'l18n/',
    logger: { warn(msg: string) {}, error(msg: string) {} },
};

i18n.abide(); // $ExpectType RequestHandler
i18n.abide(emptyAbideOptions); // $ExpectType RequestHandler
i18n.abide(fullAbideOptions); // $ExpectType RequestHandler

i18n.parseAcceptLanguage(""); // $ExpectType { lang: string; quality: number; }[]

i18n.bestLanguage([{lang: 'en-US', quality: 1.0}], ['en-US'], 'en-US'); // $ExpectType string

i18n.localeFrom(); // $ExpectType string
i18n.localeFrom(""); // $ExpectType string

i18n.languageFrom(); // $ExpectType string
i18n.languageFrom(""); // $ExpectType string

i18n.normalizeLanguage(); // $ExpectType string
i18n.normalizeLanguage(""); // $ExpectType string

i18n.normalizeLocale(); // $ExpectType string
i18n.normalizeLocale(""); // $ExpectType string

i18n.format(""); // $ExpectType string
i18n.format("", {}); // $ExpectType string
i18n.format("", {}, false); // $ExpectType string

i18n.getLocales(); // $ExpectType string[]
