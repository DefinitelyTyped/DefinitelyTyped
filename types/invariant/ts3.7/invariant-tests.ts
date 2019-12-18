import invariant = require("invariant");

// has assertion side effect
const val: {a: number} | false = null;
// $ExpectError
val.a === 1;
invariant(val, 'val must be truthy');
val.a === 1;

// will throw in dev mode (process.env.NODE_ENV !== 'production')
invariant(true);

// will pass in production (process.env.NODE_ENV === 'production')
invariant(true);

// will pass in dev mode and production mode
invariant(true, 'Error, error, read all about it');

// will throw in dev mode, and production mode
invariant(false, 'Some other error');

// will throw in dev mode, and production mode
invariant(0, 'Some other error');

// will throw in dev mode, and production mode
invariant('', 'Some other error');

// handles extra variables
invariant(true, 'Error, error, read all about it', 37, {}, 'hello');
