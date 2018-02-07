import pSeries = require('p-series');
import got = require('got');

pSeries<got.Response<string> | number | boolean>([
    () => got('sindresorhus.com'),
    () => Promise.resolve(1),
    () => true
]).then(result => {
    result[0]; // $ExpectType number | boolean | Response<string>
});

pSeries<got.Response<string> | number | boolean>(new Set<(() => Promise<got.Response<string>>) | (() => Promise<number>) | (() => Promise<boolean>)>([
    () => got('sindresorhus.com'),
    () => Promise.resolve(1),
    () => Promise.resolve(true)
])).then(result => {
    result[0]; // $ExpectType number | boolean | Response<string>
});
