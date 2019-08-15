import hashFile = require('hash-file');

hashFile('tsconfig.json')
    .then((hash: string) => {
    });

const hash = hashFile.sync('tsconfig.json');
