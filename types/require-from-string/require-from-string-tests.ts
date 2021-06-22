import requireFromString = require('require-from-string');

const moduleA1 = requireFromString('module.exports = 123');

const moduleA2 = requireFromString('module.exports = 123', { appendPaths: ['some-path'] });

const moduleB1 = requireFromString('module.exports = { a: 1, b: 2, c: 3 }', 'abc.js');

const moduleB2 = requireFromString('module.exports = { a: 1, b: 2, c: 3 }', 'abc.js', { prependPaths: ['some-path'] });
