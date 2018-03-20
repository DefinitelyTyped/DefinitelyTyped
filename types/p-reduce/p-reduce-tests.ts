import pReduce = require('p-reduce');

const names = [
    Promise.resolve('sindresorhus'),
    'Addy Osmani',
    'Pascal Hartig',
    'Stephen Sawchuk'
];

pReduce(names, (total, name) => {
    return Promise.resolve(total + 1);
}, 0).then(count => {
    const num: number = count;
});

const names2 = [
    Promise.resolve('sindresorhus'),
    'Addy Osmani',
    'Pascal Hartig',
    5
];

pReduce<string | number, string>(names2, (allNames, name) => {
    return Promise.resolve(`${allNames},${name}`);
}, '').then(allNames => {
    const str: string = allNames;
});
