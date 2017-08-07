import pLog = require('p-log');

Promise.resolve('unicorn')
    .then(pLog<string>())
    .then(val => {
        let str: string = val;
    });

Promise.resolve()
    .then(() => {
        throw new Error('pony');
    })
    .catch(pLog.catch())
    .catch(error => {
    });
