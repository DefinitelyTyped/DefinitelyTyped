import ES5 = require('es-abstract/es5');

declare const any: unknown;
// tslint:disable-next-line: no-null-undefined-union
const nullableObject: string | object | null | undefined =
	Math.random() < 0.25 ? undefined : Math.random() < 0.5 ? null : Object('foo');

const nullableMaybePromise =
	Math.random() < 0.25
		? undefined
		: Math.random() < 0.5
		? null
		: Math.random() < 0.75
		? ('bar' as string)
		: Promise.resolve('baz');

ES5.ToPrimitive(any); // $ExpectType string | number | boolean | symbol | null | undefined
ES5.ToBoolean(any); // $ExpectType boolean
ES5.ToNumber(any); // $ExpectType number
ES5.ToInteger(any); // $ExpectType number
ES5.ToInt32(any); // $ExpectType number
ES5.ToUint32(any); // $ExpectType number
ES5.ToUint16(any); // $ExpectType number
ES5.ToString(any); // $ExpectType string

ES5.ToObject(any); // $ExpectType object
ES5.ToObject({}); // $ExpectType {}
ES5.ToObject(1); // $ExpectType object
ES5.ToObject('1'); // $ExpectType object
ES5.ToObject(true); // $ExpectType object
ES5.ToObject(false); // $ExpectType object
ES5.ToObject(BigInt('9007199254740991')); // $ExpectType object
ES5.ToObject(Symbol.iterator); // $ExpectType object
ES5.ToObject(Promise.resolve()); // $ExpectType Promise<void>
ES5.ToObject(nullableObject); // $ExpectType object
ES5.ToObject(nullableMaybePromise); // $ExpectType object | Promise<string>

ES5.CheckObjectCoercible(nullableObject); // $ExpectType string | object
ES5.CheckObjectCoercible(any); // $ExpectType unknown
