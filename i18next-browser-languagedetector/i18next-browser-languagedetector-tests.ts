/// <reference path="../i18next/i18next-2.0.17.d.ts"/>
/// <reference path="i18next-browser-languagedetector.d.ts"/>

import * as i18next from 'i18next';
import LngDetector from 'i18next-browser-languagedetector';

var options = {
    // order and from where user language should be detected
    order: ['querystring', 'cookie', 'localStorage', 'navigator'],

    // keys or params to lookup language from
    lookupQuerystring: 'lng',
    lookupCookie: 'i18next',
    lookupLocalStorage: 'i18nextLng',

    // cache user language on
    caches: ['localStorage', 'cookie'],

    // optional expire and domain for set cookie
    cookieMinutes: 10,
    cookieDomain: 'myDomain'
};
var myDetector = {
    name: 'myDetectorsName',

    lookup(options: Object) {
        // options -> are passed in options
        return 'en';
    },

    cacheUserLanguage(lng: string, options: Object) {
        // options -> are passed in options
        // lng -> current language, will be called after init and on changeLanguage

        // store it
    }
};

i18next.use(LngDetector).init({
    detection: options
});

const lngDetector = new LngDetector(null, options);
lngDetector.init(options);
lngDetector.addDetector(myDetector);
