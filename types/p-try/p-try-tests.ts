import pTry = require('p-try');

function throws(): never {
    throw new Error('foo');
}

let str: string;
pTry(() => 'foo').then(value => {
    str = value;
});
pTry(() => Promise.resolve('foo')).then(value => {
    str = value;
});
pTry(throws).then(value => {
    str = value;
});
