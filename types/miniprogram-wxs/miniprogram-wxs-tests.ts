// $ExpectType Date
getDate();

// $ExpectType RegExp
getRegExp('.*');

// @ts-expect-error
new Date();

// @ts-expect-error
new RegExp('');

// @ts-expect-error
console.warn();

// $ExpectType number
Number.MAX_VALUE;
