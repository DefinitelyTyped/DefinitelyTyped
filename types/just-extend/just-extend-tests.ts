import extend = require("just-extend");

// Pass single `object`.
extend({}); // $ExpectType object
extend([]); // $ExpectType object
extend(() => {}); // $ExpectType object

// Pass single `object`, then `any`.
extend({}, 0); // $ExpectType object
extend({}, ""); // $ExpectType object
extend({}, false); // $ExpectType object
extend({}, null); // $ExpectType object
extend({}, undefined); // $ExpectType object
extend({}, {}); // $ExpectType object
extend({}, []); // $ExpectType object
extend({}, () => {}); // $ExpectType object

// Pass variadic args.
extend({}, 0, "", false, null, undefined, {}, [], () => {}); // $ExpectType object

// Pass `boolean`, then single `object`.
extend(true, {}); // $ExpectType object
extend(true, []); // $ExpectType object
extend(true, () => {}); // $ExpectType object

// Pass `boolean`, single `object`, then `any`.
extend(true, {}, 0); // $ExpectType object
extend(true, {}, ""); // $ExpectType object
extend(true, {}, false); // $ExpectType object
extend(true, {}, null); // $ExpectType object
extend(true, {}, undefined); // $ExpectType object
extend(true, {}, {}); // $ExpectType object
extend(true, {}, []); // $ExpectType object
extend(true, {}, () => {}); // $ExpectType object

// Pass `boolean`, then variadic args.
extend(true, {}, 0, "", false, null, undefined, {}, [], () => {}); // $ExpectType object

// Incorrect extendee `object`.
extend(); // $ExpectError
extend(0); // $ExpectError
extend(""); // $ExpectError
extend(false); // $ExpectError
extend(null); // $ExpectError
extend(undefined); // $ExpectError

// Pass `boolean` with incorrect extendee `object`.
extend(true, 0); // $ExpectError
extend(true, ""); // $ExpectError
extend(true, false); // $ExpectError
extend(true, null); // $ExpectError
extend(true, undefined); // $ExpectError
