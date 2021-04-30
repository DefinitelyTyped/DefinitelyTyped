import merge = require("just-merge");

// Single argument
merge({}); // $ExpectType object
merge({ a: 1 }); // $ExpectType object
merge([]); // $ExpectType object
merge(() => {}); // $ExpectType object
merge(new Map()); // $ExpectType object
merge(new Set()); // $ExpectType object
merge(); // $ExpectError
merge(0); // $ExpectError
merge(""); // $ExpectError
merge(false); // $ExpectError
merge(null); // $ExpectError
merge(undefined); // $ExpectError
merge(Symbol()); // $ExpectError

// multiple arguments
merge({}, {}); // $ExpectType object
merge({}, { a: 1 }); // $ExpectType object
merge({}, []); // $ExpectType object
merge({}, new Map()); // $ExpectType object
merge({}, new Set()); // $ExpectType object
merge({}, () => {}); // $ExpectType object
merge({}, 0); // $ExpectError
merge({}, ""); // $ExpectError
merge({}, false); // $ExpectError
merge({}, null); // $ExpectError
merge({}, undefined); // $ExpectError
merge({}, Symbol()); // $ExpectError
merge({}, { a: 1 }, { a: 2, b: 3 }); // $ExpectType object
merge({}, 0, "", false, null, undefined); // $ExpectError
