import express = require('express');
import locale = require('express-simple-locale');

const localeMiddlewareOptions = {
    key: 'userLocale',
    supportedLocales: ['en', 'fr', 'it', 'es', 'de'],
    defaultLocale: 'en',
    cookieName: 'c00ki3z',
    queryParams: ['locale', 'lang'],
};

express()
    .use(locale())
    .use(locale({}))
    .use(locale(localeMiddlewareOptions))
    .use((request, response, next) => {
        request.userLocale; // $ExpectType string
        next();
    });
