import PLazy = require('p-lazy');

const lazyPromise = new PLazy<string>(resolve => {
    resolve('foo');
});

let str: string;

lazyPromise.then(result => str = result);

Promise.resolve()
    .then(() => lazyPromise)
    .then(value => str = value);

let num: number;
PLazy.from(() => Promise.resolve(1))
    .then(value => num = value);
PLazy.from(() => 1)
    .then(value => num = value);
