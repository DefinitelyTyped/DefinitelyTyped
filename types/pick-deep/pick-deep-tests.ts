import pick = require('pick-deep');

pick({ a: { b: ['c', 'd'], e: 'f' } }, 'a.b');
pick({ a: { b: ['c', 'd'], e: 'f' } }, ['a.b']);
pick({ a: { b: ['c', 'd'], e: 'f' } }, [['a', 'b']]);

pick({ a: { b: ['c', 'd'], e: 'f' }, j: { k: 'l' }, q: { r: ['s', 't'], u: 'w' }}, [['a', 'b'], 'j', 'q.u']);

pick({ a: { b: 'c' } }, 'a.b.c.d');

pick({ a: { b: 'c' } }, 'a:b', ':');

const obj = {
    a: {
        b: {
            c: 'foo', d: false, e: { f: ['baz'] }, g: { h: 'wat', i: null, j: undefined }
        },
        k: 0,
        l: '',
        m: {},
        n: []
    }
};
const item: {} = pick(obj, [
  'a.b.c',
  'a.b.d',
  'a.b.e',
  'a.m',
  'x.y.z',
  'a.q.u.a',
]);
