import pMapSeries = require('p-map-series');

const keywords = [
    Promise.resolve('foo'),
    'rainbow',
    'pony'
];

const keywordSet = new Set(keywords);

pMapSeries(keywords, (keyword, idx) => Promise.resolve({keyword, idx})).then(result => {
    result; // $ExpectType { keyword: string; idx: number; }[]
    const res1: { keyword: string; idx: number; } = result[0];
});

pMapSeries(keywordSet, (keyword) => Promise.resolve({keyword})).then(result => {
    result; // $ExpectType { keyword: string; }[]
    const res1: { keyword: string; } = result[0];
});
