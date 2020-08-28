// $ExpectType Date
getDate();

// $ExpectType RegExp
getRegExp('.*');

// $ExpectError
new Date();

// $ExpectError
new RegExp('');

// $ExpectError
console.warn();

// $ExpectType number
Number.MAX_VALUE;
