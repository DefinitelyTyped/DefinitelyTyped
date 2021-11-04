import express = require('express');
import sharpie = require('sharpie');

const app = express();
const sharpieMiddleware = sharpie({
    param: 'url',
    q: 90,
    rs: 'w:320,h:240,max',
    format: 'jpeg',
    bg: 'white',
    crop: 'center',
    flatten: true,
    hostnames: false,
    ratio: 'minXMinY',
    sizes: '64,32,16',
    im: '/usr/bin/convert',
    signs: {
        assignment: ':',
        separator: ',',
    },
});

app.get('/param:url(*)', sharpieMiddleware);
app.get('/query', sharpieMiddleware);
app.listen(8080);

sharpie.formats; // $ExpectType SharpieFormats
sharpie.sharp; // $ExpectType typeof sharp
