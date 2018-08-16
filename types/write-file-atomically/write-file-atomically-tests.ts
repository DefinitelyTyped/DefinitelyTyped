import writeFileAtomically = require('write-file-atomically');

writeFileAtomically(1, '_');    // $ExpectError

import { readFileSync } from 'fs';

(() => {
    writeFileAtomically('file.txt', 'Hi!');
    readFileSync('file.txt', 'utf8');
})();
