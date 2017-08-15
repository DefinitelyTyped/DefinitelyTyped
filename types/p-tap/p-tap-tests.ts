import pTap = require('p-tap');

Promise.resolve('unicorn')
    .then(pTap<string>(val => {
        let str: string = val;
        return 1;
    }))
    .then(val => {
        let str: string = val;
    });

Promise.resolve('unicorn')
    .then(pTap<string>(val => {
        let str: string = val;
        return Promise.resolve(1);
    }))
    .then(val => {
        let str: string = val;
    });

Promise.reject(new Error())
    .catch(pTap.catch(val => {
        const num: number = val;
    }))
    .then(() => 1)
    .catch(() => {});
