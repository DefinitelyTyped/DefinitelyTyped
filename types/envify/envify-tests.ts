

import browserify = require('browserify');
import envify = require('envify/custom');
import fs = require('fs');


var b = browserify('main.js')
    , output = fs.createWriteStream('bundle.js');

b.transform(envify({
    NODE_ENV: 'development'
}));
b.bundle().pipe(output);

b.transform(envify({
    _: 'purge'
    , NODE_ENV: 'development'
}));

