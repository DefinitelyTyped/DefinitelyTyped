import nanoid = require('nanoid');
import format = require('nanoid/format');
import generate = require('nanoid/generate');
import random = require('nanoid/random');
import randomBrowser = require('nanoid/random-browser');
import url = require('nanoid/url');
import nanoidAsync = require('nanoid/async');
import nanoidAsyncBrowser = require('nanoid/async-browser');

const _random = (size: number) => [1, 2, 3, 4];

nanoid();
nanoid(10);
format(_random, "abcdef", 5);
generate('0123456789абвгдеё', 5);
random(10);
randomBrowser(10);
nanoidAsync().then((id) => console.log(id));
nanoidAsync(10).then((id) => console.log(id));
nanoidAsync(null, (error, id) => {
  console.log(error, id);
});
nanoidAsyncBrowser().then((id) => console.log(id));
nanoidAsyncBrowser(10).then((id) => console.log(id));

console.log(url);
