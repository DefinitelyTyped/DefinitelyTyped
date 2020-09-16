import omit = require('object.omit');

const a = {a: 'a', b: 'b', c: 'c'};
const b = omit(a, ['a', 'c']);
