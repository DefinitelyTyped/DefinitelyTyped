/// <reference types="node" />

import fs = require('fs');
import * as junk from 'junk';

junk.is('foo'); // $ExpectType boolean
junk.not('foo'); // $ExpectType boolean
junk.regex; // $ExpectType RegExp

fs.readdir('some/path', (err, files) => {
    files.filter(junk.not);
});
