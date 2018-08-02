import * as i18next from "i18next";
import * as LngDetector from "i18next-browser-languagedetector";

const options: LngDetector.DetectorOptions = {
    // order and from where user language should be detected
    order: ["querystring", "cookie", "localStorage", "navigator", "htmlTag"],

    // keys or params to lookup language from
    lookupQuerystring: "lng",
    lookupCookie: "i18next",
    lookupLocalStorage: "i18nextLng",

    // cache user language on
    caches: ["localStorage", "cookie"],
    excludeCacheFor: ["cimode"], // languages to not persist (cookie, localStorage)

    // optional expire and domain for set cookie
    cookieMinutes: 10,
    cookieDomain: "myDomain",

    // optional htmlTag with lang attribute, the default is:
    htmlTag: document.documentElement!
};

i18next.use(LngDetector).init({
    detection: options
});

const customDetector: LngDetector.CustomDetector = {
    name: "myDetectorsName",

    lookup(options: LngDetector.DetectorOptions) {
        // options -> are passed in options
        return "en";
    },

    cacheUserLanguage(lng: string, options: LngDetector.DetectorOptions) {
        // options -> are passed in options
        // lng -> current language, will be called after init and on changeLanguage

        // store it
    }
};

const customDetector2: LngDetector.CustomDetector = {
    name: "myDetectorsName",
    lookup(options: LngDetector.DetectorOptions) {
        return undefined;
    }
};

const lngDetector = new LngDetector(null, options);

lngDetector.init(options);
lngDetector.addDetector(customDetector);

i18next
    .use(lngDetector)
    .init({
        detection: options
    });
