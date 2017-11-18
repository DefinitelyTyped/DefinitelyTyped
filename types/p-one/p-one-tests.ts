import pOne = require('p-one');

const places = [
    Promise.resolve('Norway'),
    'Bangkok, Thailand',
    'Berlin, Germany',
    'Tokyo, Japan'
];

pOne(places, x => Promise.resolve(true)).then(result => {
    const bool: boolean = result;
});

const places2 = [
    Promise.resolve('Norway'),
    'Bangkok, Thailand',
    'Berlin, Germany',
    5
];

pOne<string | number>(places2, x => {
    const strnum: string | number = x;
    return Promise.resolve(true);
}, {concurrency: 2}).then(result => {
    const bool: boolean = result;
});
