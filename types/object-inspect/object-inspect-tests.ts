import objectInspect = require('object-inspect');

// $ExpectType string
objectInspect({foo: "bar"});

// $ExpectType string
objectInspect({foo: "bar"}, {});

// $ExpectType string
objectInspect({foo: "bar"}, {depth: Infinity});

// $ExpectType string
objectInspect({foo: "bar"}, {quoteStyle: 'single'});

// $ExpectType string
objectInspect({foo: "bar"}, {quoteStyle: 'double'});
