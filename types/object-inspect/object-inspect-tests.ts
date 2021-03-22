import objectInspect = require('object-inspect');

// $ExpectType string
objectInspect({ foo: 'bar' });

// $ExpectType string
objectInspect({ foo: 'bar' }, {});

// $ExpectType string
objectInspect({ foo: 'bar' }, { depth: Infinity });

// $ExpectType string
objectInspect({ foo: 'bar' }, { quoteStyle: 'single' });

// $ExpectType string
objectInspect({ foo: 'bar' }, { quoteStyle: 'double' });

// $ExpectType string
objectInspect({ foo: 'bar' }, { maxStringLength: 1 });

// $ExpectType string
objectInspect({ foo: 'bar' }, { customInspect: true });

// $ExpectType string
objectInspect({ foo: 'bar' }, { indent: 2 });

// $ExpectType string
objectInspect({ foo: 'bar' }, { indent: '\t' });
