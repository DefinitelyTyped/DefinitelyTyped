import pEvery = require('p-every');

const places = [
    Promise.resolve('Norway'),
    'Bangkok, Thailand',
    'Berlin, Germany',
    'Tokyo, Japan'
];

pEvery(places, x => Promise.resolve(true)).then(result => {
    const bool: boolean = result;
});

const places2 = [
    Promise.resolve('Norway'),
    'Bangkok, Thailand',
    'Berlin, Germany',
    5
];

pEvery<string | number>(places2, x => {
    const strnum: string | number = x;
    return Promise.resolve(true);
}, {concurrency: 2}).then(result => {
    const bool: boolean = result;
});
