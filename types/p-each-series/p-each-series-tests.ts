import pEachSeries = require('p-each-series');

const keywords = [
    Promise.resolve('foo'),
    'rainbow',
    'pony'
];

const keywordSet = new Set(keywords);

pEachSeries(keywords, el => Promise.resolve(el)).then(result => {
    result; // $ExpectType string[]
    const str: string = result[0];
});

pEachSeries(keywordSet, (el, idx) => Promise.resolve(idx)).then(result => {
    result; // $ExpectType string[]
    const str: string = result[0];
});
