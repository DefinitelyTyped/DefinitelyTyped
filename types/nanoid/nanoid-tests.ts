import asyncFormat = require('nanoid/async/format');
import asyncGenerate = require('nanoid/async/generate');
import asyncRandom = require('nanoid/async/random');
import asyncRandomBrowser = require('nanoid/async/random-browser');
import nanoid = require('nanoid');
import nanoidBrowser = require('nanoid/index-browser');
import format = require('nanoid/format');
import generate = require('nanoid/generate');
import random = require('nanoid/random');
import randomBrowser = require('nanoid/random-browser');
import url = require('nanoid/url');
import nanoidAsync = require('nanoid/async/index');
import nanoidAsyncBrowser = require('nanoid/async/index-browser');
import nanoidAsyncRandomRN = require('nanoid/async/random-rn');
import nanoidNonSecure = require('nanoid/non-secure');
import generateNonSecure = require('nanoid/non-secure/generate');

const _random = (size: number) => [1, 2, 3, 4];
const _asyncRandom = (size: number) => Promise.resolve([1, 2, 3, 4]);

asyncFormat(_asyncRandom, 'abcdef', 5).then(id => console.log(id));
asyncGenerate('0123456789абвгдеё', 5).then(id => console.log(id));
asyncRandom(10).then(id => console.log(id));
asyncRandomBrowser(10).then(id => console.log(id));
nanoid();
nanoid(10);
nanoidBrowser(12);
format(_random, 'abcdef', 5);
generate('0123456789абвгдеё', 5);
random(10);
randomBrowser(10);
nanoidAsync().then(id => console.log(id));
nanoidAsync(10).then(id => console.log(id));
nanoidAsync(null, (error, id) => {
    console.log(error, id);
});
nanoidAsyncBrowser().then(id => console.log(id));
nanoidAsyncBrowser(10).then(id => console.log(id));
nanoidAsyncRandomRN(10).then(buf => console.log(buf));
nanoidNonSecure();
nanoidNonSecure(10);
generateNonSecure('0123456789абвгдеё', 5);
generateNonSecure('0123456789абвгдеё');

console.log(url);
