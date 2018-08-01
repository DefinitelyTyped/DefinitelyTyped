import pLog = require('p-log');

Promise.resolve('unicorn')
    .then(pLog())
    .then(val => {
        val; // $ExpectType string
    });

Promise.resolve()
    .then(() => {
        throw new Error('pony');
    })
    .catch(pLog.catch())
    .catch(error => {
    });
