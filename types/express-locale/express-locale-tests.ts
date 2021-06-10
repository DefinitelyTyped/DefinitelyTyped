import express = require('express');
import createLocaleMiddleware = require('express-locale');

express()
    .use(createLocaleMiddleware())
    .use(createLocaleMiddleware({}))
    .use(
        createLocaleMiddleware({
            priority: ['accept-language', 'default', 'custom', 'query'],
            default: 'en-GB',
            allowed: ['en-GB'],
            hostname: { '127.0.0.1': 'nl-BE' },
            cookie: { name: 'lang' },
            lookups: {
                custom: () => 'fr-FR',
            },
            map: { en: 'en-CA', fr: 'fr-CA' },
            query: { name: 'l' },
            requestProperty: 'locale',
        }),
    )
    .use((req, res) => {
        res.end(`Request locale: ${req.locale}`);
    })
    .listen(3000);
