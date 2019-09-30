import throttle = require('just-throttle');

// returns a function that sets interval but doesn't do anything else by default
throttle(() => 'foo', 200); // $ExpectType () => void
throttle(() => 'foo', 200, false); // $ExpectType () => void

// immediately applies provided callback if third argument is true
throttle(() => 'foo', 200, true); // $ExpectType () => string
throttle((foo: string) => 42, 200, true); // $ExpectType (foo: string) => number
