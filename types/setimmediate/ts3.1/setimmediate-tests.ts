import 'setimmediate';

// $ExpectType number
const i1 = setImmediate((...args) => {
	args; // $ExpectType []
});

// $ExpectType number
const i2 = setImmediate((...args) => {
	args; // $ExpectType [number]
}, 1);

// $ExpectType number
const i3 = setImmediate((foo, bar, baz) => {
	foo; // $ExpectType number
	bar; // $ExpectType string
	baz; // $ExpectType boolean
}, 1, 'a', true);

clearImmediate(i1);
clearImmediate(i2);
clearImmediate(i3);

// Errors:
setImmediate(); // $ExpectError
setImmediate((foo: unknown) => {}); // $ExpectError

clearImmediate(); // $ExpectError
clearImmediate(null); // $ExpectError
clearImmediate(undefined); // $ExpectError
clearImmediate('string'); // $ExpectError
clearImmediate(Symbol.iterator); // $ExpectError
clearImmediate(true); // $ExpectError
clearImmediate(false); // $ExpectError
clearImmediate({}); // $ExpectError
clearImmediate(Function); // $ExpectError
