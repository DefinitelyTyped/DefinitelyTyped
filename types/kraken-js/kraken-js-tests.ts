import express = require('express');
import kraken = require('kraken-js');
import * as http from 'http';
import * as https from 'https';

const app = express() as kraken.Kraken;

// $ExpectType Express
kraken();

// $ExpectType Express
kraken('path/to/options');

// $ExpectType Express
kraken({
    onconfig: (config, next) => {
        next(null, config);
    }
});

// $ExpectType Kraken
app.use(kraken());

// $ExpectType void
app.once('event', (err, result) => {});

// $ExpectType any
app.kraken.get('configProp');

http.createServer(app);

https.createServer({}, app);
