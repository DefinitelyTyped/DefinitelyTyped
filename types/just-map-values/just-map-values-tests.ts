import map = require("just-map-values");

const obj = {foo: {bar: []}};

map(obj, (value) => value); // $ExpectType {}
map(obj, (value, key, object) => ''); // $ExpectType {}

// Incorrect argument
map(); // $ExpectError
map(obj); // $ExpectError
map(obj, ''); // $ExpectError
