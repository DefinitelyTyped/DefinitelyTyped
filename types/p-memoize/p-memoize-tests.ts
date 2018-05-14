import pMemoize = require('p-memoize');
import { Cache } from 'p-memoize';

const a = pMemoize(async () => Promise.resolve('Hello world!'));

const b = pMemoize(async () => Promise.resolve(1), {
    maxAge: 1000,
    cache: new Map()
});

a();

b();
