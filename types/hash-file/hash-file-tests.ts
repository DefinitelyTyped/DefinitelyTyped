import hashFile = require('hash-file');

hashFile('tsconfig.json')
    .then((hash: string) => {

    });

var hash = hashFile.sync('tsconfig.json');






