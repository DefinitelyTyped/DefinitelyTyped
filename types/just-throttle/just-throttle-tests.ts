import throttle = require('just-throttle');

// returns a function that sets an interval but doesn't do anything else by
// default
throttle(() => 'foo', 200); // $ExpectType () => void
throttle(() => 'foo', 200, false); // $ExpectType () => void

// if third argument is true, the returned function will immediately apply the
// callback when called
throttle(() => 'foo', 200, true); // $ExpectType () => string
throttle((foo: string) => 42, 200, true); // $ExpectType (foo: string) => number
