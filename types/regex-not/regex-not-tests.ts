import not = require('regex-not');

// test type exports
type Options = not.Options;

not('foo'); // $ExpectType RegExp
not('foo', { contains: true }); // $ExpectType RegExp
not('foo', { strictOpen: false }); // $ExpectType RegExp
not('foo', { strictClose: false }); // $ExpectType RegExp
not('foo', { endChar: '*' }); // $ExpectType RegExp
not('foo', { safe: true }); // $ExpectType RegExp

not.create('foo'); // $ExpectType string
not.create('foo', { contains: true }); // $ExpectType string
not.create('foo', { strictOpen: false }); // $ExpectType string
not.create('foo', { strictClose: false }); // $ExpectType string
not.create('foo', { endChar: '*' }); // $ExpectType string
not.create('foo', { safe: true }); // $ExpectType string
