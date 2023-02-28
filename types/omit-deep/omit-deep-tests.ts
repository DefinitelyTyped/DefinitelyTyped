import omitDeep = require('omit-deep');

const obj = { a: 'a', b: 'b', c: { b: 'b', d: { b: 'b', f: 'f' } } };
omitDeep(obj, ['b']);

const obj2 = { a: 'a', b: 'b', c: { b: 'b', d: { b: 'b', f: 'f' } } };
omitDeep(obj2, ['b', 'f']);

const obj3 = { a: 'a', b: 'b', c: { b: 'b', d: { b: 'b', f: 'f' } } };
omitDeep(obj, ['c.d.b', 'f']);
