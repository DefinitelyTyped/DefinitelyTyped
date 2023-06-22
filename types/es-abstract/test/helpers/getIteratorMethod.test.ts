import getIteratorMethod = require('es-abstract/helpers/getIteratorMethod');
import ES5 = require('es-abstract/es5');
import ES2015 = require('es-abstract/es2015');

declare const unknown: unknown;
declare const never: never;

getIteratorMethod(ES2015, [1]); // $ExpectType () => Iterator<number, any, any>
getIteratorMethod(ES2015, ['2']); // $ExpectType () => Iterator<string, any, any>
getIteratorMethod(ES2015, [1, '2']); // $ExpectType () => Iterator<string | number, any, any>
getIteratorMethod(ES2015, '2'); // $ExpectType () => Iterator<string, any, any>

getIteratorMethod(ES2015, undefined); // $ExpectType undefined
getIteratorMethod(ES2015, {}); // $ExpectType undefined
// $ExpectType (() => Iterator<any, any, any>) | undefined || (() => Iterator<unknown, any, any>) | undefined
getIteratorMethod<any>(ES2015, unknown);
getIteratorMethod(ES2015, never); // $ExpectType never

// @ts-expect-error
getIteratorMethod(ES5, [1]);
