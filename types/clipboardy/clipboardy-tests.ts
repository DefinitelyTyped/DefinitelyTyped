import clipboardy = require('clipboardy');

clipboardy.writeSync('🦄');
clipboardy.write('🦄').then(() => {});

let str: string;
str = clipboardy.readSync();
clipboardy.read().then(toPaste => {
    str = toPaste;
});
