import http = require('http');
import express = require('express');
import locale = require('locale');

////// README.md //////

// Examples
// --------

// ### For the node.js HTTP module
{
    const supported = new locale.Locales(['en', 'en_US', 'ja']);

    http.createServer((req, res) => {
        const locales = new locale.Locales(req.headers['accept-language']);
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(
            `You asked for: ${req.headers['accept-language']}
We support: ${supported}
Our default is: ${locale.Locale['default']}
The best match is: ${locales.best(supported)}
`,
        );
    }).listen(8000);
}

// API
// ---

// ### For Connect/Express
{
    const supported = ['en', 'en_US', 'ja'];
    const dephault = 'en';
    const app = express();

    app.use(locale(supported, dephault));

    app.get('/', (req, res) => {
        res.header('Content-Type', 'text/plain');
        res.send(
            `You asked for: ${req.headers['accept-language']}
We support: ${supported}
Our default is: ${locale.Locale['default']}
The best match is: ${req.locale}
`,
        );
    });

    app.listen(8000);
}

// ### locales.best([supportedLocales])
{
    const supported = new locale.Locales(['en', 'en_US'], 'en');
    new locale.Locales('en').best(supported).toString(); // 'en'
    new locale.Locales('en_GB').best(supported).toString(); // 'en'
    new locale.Locales('en_US').best(supported).toString(); // 'en_US'
    new locale.Locales('jp').best(supported); // supported.default || locale.Locale["default"]
}

// #### Locale object API

// For example:
{
    const l = new locale.Locale('pt-BR');

    console.log(l);
    // {
    //   code: 'pt-BR',
    //   language: 'pt',
    //   country: 'BR',
    //   normalized: 'pt_BR',
    // }
}

////// end README.md //////
