import express = require("express");
import * as i18next from "i18next";
import middleware = require("i18next-express-middleware");

function requestObjectTest() {
    var i18nextOptions = {};
    i18next
        .use(middleware.LanguageDetector)
        .init(i18nextOptions);

    var app = express();
    app.use(middleware.handle(i18next, {
        ignoreRoutes: ["/foo"],
        removeLngFromUrl: false
    }));
}

function detectorOptionsTest() {
    var options = {
        // order and from where user language should be detected
        order: [/*'path', 'session', */ 'querystring', 'cookie', 'header'],

        // keys or params to lookup language from
        lookupQuerystring: 'lng',
        lookupCookie: 'i18next',
        lookupSession: 'lng',
        lookupFromPathIndex: 0,

        // cache user language
        caches: false, // ['cookie']

        // optional expire and domain for set cookie
        cookieExpirationDate: new Date(),
        cookieDomain: 'myDomain'
    };

    i18next
        .use(middleware.LanguageDetector)
        .init({
            detection: options
        });

    var lngDetector = new middleware.LanguageDetector(null, options);
    lngDetector.init(options);
}
