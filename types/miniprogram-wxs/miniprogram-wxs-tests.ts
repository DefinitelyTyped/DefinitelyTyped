// $ExpectType Date
getDate();

// $ExpectType RegExp
getRegExp('.*');

// $ExpectType never
new Date();

// $ExpectType never
new RegExp('');

// $ExpectError
console.warn();
