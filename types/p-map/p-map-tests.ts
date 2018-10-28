import pMap = require('p-map');

const sites = [
    Promise.resolve('sindresorhus'),
    true,
    1
];

const mapper = (el: number | string | boolean) => Promise.resolve(1);

let num: number;
pMap(sites, mapper, {concurrency: 2}).then(result => {
    num = result[3];
});

pMap(sites, mapper).then(result => {
    num = result[3];
});
