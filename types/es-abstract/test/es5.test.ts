import ES5 = require('es-abstract/es5');
import { expectType } from './index.test';

declare const any: unknown;
const nullableObject: string | object | null | undefined =
    Math.random() < 0.5 ? (Math.random() < 0.5 ? undefined : null) : Object('foo');

const nullableMaybePromise =
    Math.random() < 0.5
        ? Math.random() < 0.5
            ? undefined
            : null
        : Math.random() < 0.5
        ? ('bar' as string)
        : Promise.resolve('baz');

ES5.Type(undefined); // $ExpectType "Undefined"
ES5.Type(null); // $ExpectType "Null"
ES5.Type('foo'); // $ExpectType "String"
ES5.Type(123); // $ExpectType "Number"
ES5.Type(true); // $ExpectType "Boolean"
ES5.Type(false); // $ExpectType "Boolean"
ES5.Type({}); // $ExpectType "Object"
ES5.Type([]); // $ExpectType "Object"

// Can't use '$ExpectType' due to union type ordering weirdness:
expectType<'String' | 'Number' | 'Boolean' | 'Null' | 'Undefined' | 'Object' | undefined>(ES5.Type(any));
expectType<'String' | 'Number' | 'Boolean' | 'Null' | 'Undefined' | 'Object' | undefined>(ES5.Type<any>(any));

ES5.ToPrimitive(any); // $ExpectType string | number | bigint | boolean | symbol | null | undefined
ES5.ToBoolean(any); // $ExpectType boolean
ES5.ToNumber(any); // $ExpectType number
ES5.ToInteger(any); // $ExpectType number
ES5.ToInt32(any); // $ExpectType number
ES5.ToUint32(any); // $ExpectType number
ES5.ToUint16(any); // $ExpectType number
ES5.ToString(any); // $ExpectType string

ES5.ToObject(any); // $ExpectType object
ES5.ToObject({}); // $ExpectType {}
ES5.ToObject(1); // $ExpectType Number
ES5.ToObject('1'); // $ExpectType String
ES5.ToObject(true); // $ExpectType Boolean
ES5.ToObject(false); // $ExpectType Boolean
ES5.ToObject(BigInt('9007199254740991')); // $ExpectType BigInt
ES5.ToObject(Symbol.iterator); // $ExpectType Symbol
ES5.ToObject(Promise.resolve()); // $ExpectType Promise<void>
ES5.ToObject(nullableObject); // $ExpectType object | String
ES5.ToObject(nullableMaybePromise); // $ExpectType String | Promise<string>

ES5.CheckObjectCoercible(nullableObject!); // $ExpectType string | object
// @ts-expect-error
ES5.CheckObjectCoercible(any);

ES5.ToPropertyDescriptor({ value: 123 }); // $ExpectType PropertyDescriptor<number>
ES5.FromPropertyDescriptor({ "[[Value]]": '456' }); // $ExpectType TypedPropertyDescriptor<string>
