import express = require('express');
import kraken = require('kraken-js');
import * as http from 'http';
import * as https from 'https';
import { readFile } from 'fs';

const app = express() as kraken.Kraken;

// $ExpectType Express
kraken();

// $ExpectType Express
kraken('path/to/options');

// $ExpectType Express
kraken({
    basedir: __dirname,
    onconfig(config, next) {
        config.get('view engines:js:renderer:arguments').push(app);
        config.set('some:string', '/foo');
        config.set('some:complex:type', [{
            uncaughtException(error: Error) {
                next(error);
            }
        }]);
        next(null, config);
    },
    protocols: {
        file(value: string, callback: any) {
            readFile(value, 'utf8', callback);
        }
    },
    startupHeaders: {
        'Custom-Header1': 'Header1',
        'Custom-Header2': 'Header2'
    },
    uncaughtException(err) {
        console.error(err);
    }
});

// $ExpectType Kraken
app.use(kraken());

// $ExpectType Kraken
app.use(kraken(__dirname));

// $ExpectType Kraken
app.use(kraken({
    configdir: 'config',
    protocols: {
        custom(value: any) {
            return `Hello, ${ value }!`;
        }
    }
}));

app.listen(8080, (err?: Error) => {
    console.log('[%s] Listening on http://localhost:%d', app.settings.env, 8080);
});

new Promise(resolve => {
    // $ExpectType Kraken
    app.once('event', resolve);
});

// $ExpectType any
app.kraken.get('configProp');

http.createServer(app);

https.createServer({}, app);
