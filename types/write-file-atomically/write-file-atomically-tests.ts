import writeFileAtomically = require('write-file-atomically');

// @ts-expect-error
writeFileAtomically(1, '_');

import { readFileSync } from 'fs';

(() => {
    writeFileAtomically('file.txt', 'Hi!');
    readFileSync('file.txt', 'utf8');
})();
