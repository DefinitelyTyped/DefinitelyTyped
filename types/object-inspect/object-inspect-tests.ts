import objectInspect = require('object-inspect');

// $ExpectType string
objectInspect({foo: "bar"});

// $ExpectType string
objectInspect({foo: "bar"}, {});

// $ExpectType string
objectInspect({foo: "bar"}, {depth: Infinity});
