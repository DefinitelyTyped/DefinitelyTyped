import ES5 = require('es-abstract/es5');

const any: unknown = undefined;
const nullableObject: string | object | null | undefined =
	Math.random() < 0.25 ? undefined : Math.random() < 0.5 ? null : Object('foo');

ES5.ToPrimitive(any); // $ExpectType string | number | boolean | symbol | null | undefined
ES5.ToBoolean(any); // $ExpectType boolean
ES5.ToNumber(any); // $ExpectType number
ES5.ToInteger(any); // $ExpectType number
ES5.ToInt32(any); // $ExpectType number
ES5.ToUint32(any); // $ExpectType number
ES5.ToUint16(any); // $ExpectType number
ES5.ToString(any); // $ExpectType string
ES5.ToObject(any); // $ExpectType unknown
ES5.CheckObjectCoercible(nullableObject); // $ExpectType string | object
