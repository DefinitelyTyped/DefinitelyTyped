import pLocate = require('p-locate');

const files = [
    'unicorn.png',
    'rainbow.png',
    'pony.png'
];

let str: string | undefined;
pLocate(files, file => Promise.resolve(file === 'rainbow.png')).then(foundPath => {
    str = foundPath;
});

pLocate(files, file => Promise.resolve(file === 'rainbow.png'), {concurrency: 2, preserveOrder: false});
