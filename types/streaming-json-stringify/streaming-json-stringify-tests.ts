import Stringify = require('streaming-json-stringify');
import express = require('express');

const app = express();

app.get('/things', (req, res) => {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');

    process.stdin
        .pipe(Stringify())
        .pipe(res);
});

const replacer: Stringify.Replacer = () => {};

let stringify = Stringify();
stringify = new Stringify();
stringify.replacer = replacer;
stringify.space = 2;
stringify.opener = '[';
stringify.seperator = ',';
stringify.closer = ']';
stringify.stringifier = JSON.stringify;

Stringify({replacer() {}});
Stringify({space: 2});
Stringify({opener: '['});
Stringify({seperator: ','});
Stringify({closer: ']'});
Stringify({stringifier: JSON.stringify});
