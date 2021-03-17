/**
 * Test suite created by Maxime LUCE <https://github.com/SomaticIT>
 * Updated by FindQ for version 0.8 of i18n-node
 *
 * Created by using code samples from https://github.com/mashpie/i18n-node.
 */

import express = require("express");
import i18n = require("i18n");
import { I18n } from "i18n";
import { Request } from "express-serve-static-core";

const app = express();
declare const req: Express.Request & Request;

/**
 * Configuration
 * https://github.com/mashpie/i18n-node#configure
 */
i18n.configure({
    locales: ['en', 'de'],
    directory: __dirname + '/locales'
});

i18n.configure({
    // setup some locales - other locales default to en silently
    locales: [ 'en', 'de' ],

    // fall back from Dutch to German
    fallbacks: { nl: 'de' },

    // you may alter a site wide default locale
    defaultLocale: 'de',

    // will return translation from defaultLocale in case current locale doesn't provide it
    retryInDefaultLocale: false,

    // sets a custom cookie name to parse locale settings from - defaults to NULL
    cookie: 'yourcookiename',

    // sets a custom header name to read the language preference from - accept-language header by default
    header: 'accept-language',

    // query parameter to switch locale (ie. /home?lang=ch) - defaults to NULL
    queryParameter: 'lang',

    // where to store json files - defaults to './locales' relative to modules directory
    directory: './mylocales',

    // control mode on directory creation - defaults to NULL which defaults to umask of process user. Setting has no effect on win.
    directoryPermissions: '755',

    // watch for changes in JSON files to reload locale on updates - defaults to false
    autoReload: true,

    // whether to write new locale information to disk - defaults to true
    updateFiles: false,

    // sync locale information across all files - defaults to false
    syncFiles: false,

    // what to use as the indentation unit - defaults to "\t"
    indent: "\t",

    // setting extension of json files - defaults to '.json' (you might want to set this to '.js' according to webtranslateit)
    extension: '.js',

    // setting prefix of json files name - default to none '' (in case you use different locale files naming scheme (webapp-en.json), rather then just en.json)
    prefix: 'webapp-',

    // enable object notation
    objectNotation: false,

    // setting of log level DEBUG - default to require('debug')('i18n:debug')
    logDebugFn: (msg) => {
        console.log('debug', msg);
    },

    // setting of log level WARN - default to require('debug')('i18n:warn')
    logWarnFn: (msg) => {
        console.log('warn', msg);
    },

    // setting of log level ERROR - default to require('debug')('i18n:error')
    logErrorFn: (msg) => {
        console.log('error', msg);
    },

    // Function to provide missing translations.
    missingKeyFn: (locale, value) => {
        return `Translation for "${value}" is missing for locale "${locale}"!`;
    },

    // object or [obj1, obj2] to bind the i18n api and current locale to - defaults to null
    register: global,

    // hash to specify different aliases for i18n's internal methods to apply on the request/response objects (method -> alias).
    // note that this will *not* overwrite existing properties with the same name
    api: {
      __: 't',  // now req.__ becomes req.t
      __n: 'tn' // and req.__n can be called as req.tn
    },

    // Downcase locale when passed on queryParam; e.g. lang=en-US becomes
    // en-us.  When set to false, the queryParam value will be used as passed;
    // e.g. lang=en-US remains en-US.
    preserveLegacyCase: true,

    // Static translation catalog. Setting this option overrides `locales`
    staticCatalog: {
        'en-US': {
            no: 'No',
            ok: 'Ok',
            yes: 'Yes',
        },
        'nl-NL': {
            no: 'Nee',
            ok: 'Oké',
            yes: 'Ja',
        },
    },

    // use mustache with customTags (https://www.npmjs.com/package/mustache#custom-delimiters) or disable mustache entirely
    mustacheConfig: {
        tags: ['{{', '}}'],
        disable: false,
    },
});

/**
 * Usage in global scope
 * https://github.com/mashpie/i18n-node#example-usage-in-global-scope
 */
const greeting = i18n.__('Hello');

/**
 * Usage in Express
 * https://github.com/mashpie/i18n-node#example-usage-in-expressjs
 */
// Configuration
// default: using 'accept-language' header to guess language settings
app.use(i18n.init);

app.get('/de', (_req: Express.Request, res: Express.Response) => {
    const greeting = res.__('Hello');
});

/**
 * __()
 * https://github.com/mashpie/i18n-node#__
 */
// global (this.locale == 'de')
i18n.__('Hello'); // Hallo
i18n.__('Hello %s', 'Marcus'); // Hallo Marcus
i18n.__('Hello {{name}}', { name: 'Marcus' }); // Hallo Marcus

// scoped via req object (req.locale == 'de')
req.__('Hello'); // Hallo
req.__('Hello %s', 'Marcus'); // Hallo Marcus
req.__('Hello {{name}}', { name: 'Marcus' }); // Hallo Marcus

// passing specific locale
i18n.__({ phrase: 'Hello', locale: 'fr' }); // Salut
i18n.__({ phrase: 'Hello %s', locale: 'fr' }, 'Marcus'); // Salut Marcus
i18n.__({ phrase: 'Hello {{name}}', locale: 'fr' }, { name: 'Marcus' }); // Salut Marcus

/**
 * __n()
 * https://github.com/mashpie/i18n-node#__n
 */
// short syntax
// global (this.locale == 'de')
i18n.__n("%s cat", 1); // 1 Katze
i18n.__n("%s cat", 3); // 3 Katzen

// scoped via req object (req.locale == 'de')
req.__n("%s cat", 1); // 1 Katze
req.__n("%s cat", 3); // 3 Katzen

// long syntax
// global (this.locale == 'de')
i18n.__n("%s cat", "%s cats", 1); // 1 Katze
i18n.__n("%s cat", "%s cats", 3); // 3 Katzen

// scoped via req object (req.locale == 'de')
req.__n("%s cat", "%s cats", 1); // 1 Katze
req.__n("%s cat", "%s cats", 3); // 3 Katzen

// passing specific locale
i18n.__n({ singular: "%s cat", plural: "%s cats", locale: "fr" }, 1); // 1 chat
i18n.__n({ singular: "%s cat", plural: "%s cats", locale: "fr" }, 3); // 3 chat
i18n.__n({ singular: "%s cat", plural: "%s cats", locale: "fr", count: 1 }); // 1 chat
i18n.__n({ singular: "%s cat", plural: "%s cats", locale: "fr", count: 3 }); // 3 chat

/**
 * __mf()
 * https://github.com/mashpie/i18n-node#i18n__mf
 */
app.get('/de', (_req: Express.Request, res: i18n.Response) => {
    // assume res is set to german
    res.setLocale('de');

    // start simple
    res.__mf('Hello'); // --> Hallo

    // can replace too
    res.__mf('Hello {name}', { name: 'Marcus' }); // --> Hallo Marcus

    // and combines with sprintf
    res.__mf('Hello {name}, how was your %s?', 'test', { name: 'Marcus' }); // --> Hallo Marcus, wie war dein test?

    // now check out a plural rule
    res.__mf('{N, plural, one{# cat} few{# cats} many{# cats} others{# cats}}', {N: 1});
});

/**
 * __l()
 * https://github.com/mashpie/i18n-node#i18n__l
 */
i18n.__l('Hello'); // --> [ 'Hallo', 'Hello' ]

/**
 * __h()
 * https://github.com/mashpie/i18n-node#i18n__h
 */
i18n.__h('Hello'); // --> [ { de: 'Hallo' }, { en: 'Hello' } ]

/**
 * setLocale()
 * https://github.com/mashpie/i18n-node#setlocale
 */
i18n.setLocale('de');
i18n.setLocale(req, 'de');
req.setLocale('de');

app.get('/ar', (_req: Express.Request, res: i18n.Response) => {
    i18n.setLocale(req, 'ar');
    i18n.setLocale(res, 'ar');
    i18n.setLocale(res.locals, 'ar');

    i18n.setLocale([req, res.locals], req.params.lang);
    i18n.setLocale(res, 'ar', true);
});

/**
 * getLocale()
 * https://github.com/mashpie/i18n-node#getlocale
 */
i18n.getLocale(); // --> de
i18n.getLocale(req); // --> de
req.getLocale(); // --> de

/**
 * getLocales()
 * https://github.com/mashpie/i18n-node#i18ngetlocales
 */
i18n.getLocales(); // --> ['en', 'de', 'en-GB']

i18n.addLocale('de'); // adds locale
i18n.removeLocale('de'); // removes locale

/**
 * getCatalog()
 * https://github.com/mashpie/i18n-node#getcatalog
 */
i18n.getCatalog(); // returns all locales
i18n.getCatalog('de'); // returns just 'de'

i18n.getCatalog(req); // returns all locales
i18n.getCatalog(req, 'de'); // returns just 'de'

req.getCatalog(); // returns all locales
req.getCatalog('de'); // returns just 'de'

const i18nInstance = new I18n(); // creates new instance of i18n

i18nInstance.configure({
    locales: ['en', 'de'],
    directory: __dirname + '/locales'
});
