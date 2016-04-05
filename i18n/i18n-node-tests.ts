/**  
 * Test suite created by Maxime LUCE <https://github.com/SomaticIT>  
 *   
 * Created by using code samples from https://github.com/mashpie/i18n-node.
 */

/// <reference path="../node/node.d.ts" />
/// <reference path="../express/express.d.ts" />
/// <reference path="i18n-node.d.ts" />

import express = require("express");
import i18n = require("i18n");

var app = express();
var req: express.Request;

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
    locales: ['en', 'de'],

    // you may alter a site wide default locale
    defaultLocale: 'de',

    // sets a custom cookie name to parse locale settings from  - defaults to NULL
    cookie: 'yourcookiename',

    // where to store json files - defaults to './locales' relative to modules directory
    directory: './mylocales',

    // whether to write new locale information to disk - defaults to true
    updateFiles: false,

    // what to use as the indentation unit - defaults to "\t"
    indent: "\t",

    // setting extension of json files - defaults to '.json' (you might want to set this to '.js' according to webtranslateit)
    extension: '.js',

    // setting prefix of json files name - default to none '' (in case you use different locale files naming scheme (webapp-en.json), rather then just en.json)
    prefix: 'webapp-',

    // enable object notation
    objectNotation: false
});

/**
 * Usage in global scope
 * https://github.com/mashpie/i18n-node#example-usage-in-global-scope
 */
var greeting = i18n.__('Hello');

/**
 * Usage in Express
 * https://github.com/mashpie/i18n-node#example-usage-in-expressjs
 */
// Configuration
app.configure(function () {
    // default: using 'accept-language' header to guess language settings
    app.use(i18n.init);
});

app.get('/de', function (_req, res) {
    var greeting = res.__('Hello');
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
 * setLocale()
 * https://github.com/mashpie/i18n-node#setlocale
 */
i18n.setLocale('de');
i18n.setLocale(req, 'de');
req.setLocale('de');

/**
 * getLocale()
 * https://github.com/mashpie/i18n-node#getlocale
 */
i18n.getLocale(); // --> de
i18n.getLocale(req); // --> de
req.getLocale(); // --> de

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

