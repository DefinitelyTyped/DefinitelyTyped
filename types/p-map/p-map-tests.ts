import pMap = require('p-map');

const sites: [Promise<string>, boolean, number] = [
    Promise.resolve('sindresorhus'),
    true,
    1
];

const mapper = (el: number) => Promise.resolve(1);

let num: number;
pMap<Promise<string>, boolean, number, number>(sites, mapper, {concurrency: 2}).then(result => {
    num = result[3];
});

pMap<Promise<string>, boolean, number, number>(sites, mapper).then(result => {
    num = result[3];
});
