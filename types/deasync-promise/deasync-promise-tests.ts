import deasyncPromise = require('deasync-promise');

declare function promisify<T>(result: T): Promise<T>;
declare const emptyString: '';

deasyncPromise(promisify('asd')); // $ExpectType string
deasyncPromise(promisify(123)); // $ExpectType number
deasyncPromise(promisify('asd' as const)); // $ExpectType "asd"
deasyncPromise(promisify(123 as const)); // $ExpectType 123
deasyncPromise(promisify(emptyString)); // $ExpectType ""
