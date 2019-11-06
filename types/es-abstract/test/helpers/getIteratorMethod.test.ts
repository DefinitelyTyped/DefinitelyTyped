import getIteratorMethod = require('es-abstract/helpers/getIteratorMethod');
import ES2015 = require('es-abstract/es2015');

const any: unknown = undefined;
const never: never = undefined as never;

getIteratorMethod(ES2015, [1]); // $ExpectType () => Iterator<number, any, undefined>
getIteratorMethod(ES2015, ['2']); // $ExpectType () => Iterator<string, any, undefined>
getIteratorMethod(ES2015, [1, '2']); // $ExpectType () => Iterator<string | number, any, undefined>
getIteratorMethod(ES2015, '2'); // $ExpectType () => Iterator<string, any, undefined>

getIteratorMethod(ES2015, undefined); // $ExpectType undefined
getIteratorMethod(ES2015, {}); // $ExpectType undefined
getIteratorMethod<any>(ES2015, any); // $ExpectType (() => Iterator<unknown, any, undefined>) | undefined
getIteratorMethod(ES2015, never); // $ExpectType never
