import keys = require('object-keys');

keys({ A: 1, B: 2, C: 3 });
// => string[]

keys.shim();
// typeof keys

keys([ 0, 1, 2, 3 ]);
// => string[]

keys(() => 0);
// => string[]

function testArguments() {
    keys(arguments);
}
