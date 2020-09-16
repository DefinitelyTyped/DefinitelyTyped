import get = require('@strikeentco/get');

get({ a: { b: 'c' } }, 'a.b');
get({ a: { b: ['c', 'd'] } }, 'a.b.1');
get({ a: { b: ['c', 'd'] } }, ['a', 'b']);
get({ a: { b: 'c' } }, 'a.b.c.d');
get({ a: { b: 'c' } }, 'a:b', ':');
