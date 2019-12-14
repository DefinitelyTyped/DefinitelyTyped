import 'setimmediate';

// $ExpectType number
const i = setImmediate((...args) => {
	args; // $ExpectType any[]
});

clearImmediate(i);

// Errors:
setImmediate(); // $ExpectError

clearImmediate(); // $ExpectError
clearImmediate(null); // $ExpectError
clearImmediate(undefined); // $ExpectError
clearImmediate('string'); // $ExpectError
clearImmediate(Symbol.iterator); // $ExpectError
clearImmediate(true); // $ExpectError
clearImmediate(false); // $ExpectError
clearImmediate({}); // $ExpectError
clearImmediate(Function); // $ExpectError
