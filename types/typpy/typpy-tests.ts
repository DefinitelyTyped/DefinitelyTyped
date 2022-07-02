import Typpy = require('typpy');

Typpy(); // $ExpectType "undefined"
Typpy(undefined); // $ExpectType "undefined"
Typpy(null); // $ExpectType "null"
Typpy(''); // $ExpectType "string"
Typpy(true); // $ExpectType "boolean"
Typpy([]); // $ExpectType "array"
Typpy(/./); // $ExpectType "regexp"
Typpy(() => {}); // $ExpectType "function"
Typpy(1); // $ExpectType "number" | "nan"
Typpy({}); // $ExpectType string

Typpy(undefined, undefined); // $ExpectType true
Typpy(undefined, 'undefined'); // $ExpectType true
Typpy(null, null); // $ExpectType true
Typpy(null, 'null'); // $ExpectType true
Typpy('', String); // $ExpectType true
Typpy('', 'string'); // $ExpectType true
Typpy(true, Boolean); // $ExpectType true
Typpy(true, 'boolean'); // $ExpectType true
Typpy([], Array); // $ExpectType true
Typpy([], 'array'); // $ExpectType true
Typpy(/./, RegExp); // $ExpectType true
Typpy(/./, 'regexp'); // $ExpectType true
Typpy(() => {}, Function); // $ExpectType true
Typpy(() => {}, 'function'); // $ExpectType true
Typpy(1, Number); // $ExpectType boolean
Typpy(1, NaN); // $ExpectType boolean
Typpy(1, 1); // $ExpectType boolean
Typpy({}, Object); // $ExpectType boolean
Typpy({}, 'object'); // $ExpectType boolean
Typpy({}, true); // $ExpectType boolean

Typpy.is(undefined, undefined); // $ExpectType true
Typpy.is(undefined, 'undefined'); // $ExpectType true
Typpy.is(null, null); // $ExpectType true
Typpy.is(null, 'null'); // $ExpectType true
Typpy.is('', String); // $ExpectType true
Typpy.is('', 'string'); // $ExpectType true
Typpy.is(true, Boolean); // $ExpectType true
Typpy.is(true, 'boolean'); // $ExpectType true
Typpy.is([], Array); // $ExpectType true
Typpy.is([], 'array'); // $ExpectType true
Typpy.is(/./, RegExp); // $ExpectType true
Typpy.is(/./, 'regexp'); // $ExpectType true
Typpy.is(() => {}, Function); // $ExpectType true
Typpy.is(() => {}, 'function'); // $ExpectType true
Typpy.is(1, Number); // $ExpectType boolean
Typpy.is(1, NaN); // $ExpectType boolean
Typpy.is(1, 1); // $ExpectType boolean
Typpy.is({}, Object); // $ExpectType boolean
Typpy.is({}, 'object'); // $ExpectType boolean
Typpy.is({}, true); // $ExpectType boolean

Typpy.get(); // $ExpectType void
Typpy.get(undefined); // $ExpectType void
Typpy.get(null); // $ExpectType null
Typpy.get(''); // $ExpectType StringConstructor
Typpy.get(true); // $ExpectType BooleanConstructor
Typpy.get([]); // $ExpectType ArrayConstructor
Typpy.get(/./); // $ExpectType RegExpConstructor
Typpy.get(() => {}); // $ExpectType FunctionConstructor
Typpy.get(1); // $ExpectType number | NumberConstructor
Typpy.get({}); // $ExpectType ConstructorFn
Typpy.get(undefined, false); // $ExpectType void
Typpy.get(null, false); // $ExpectType null
Typpy.get('', false); // $ExpectType StringConstructor
Typpy.get(true, false); // $ExpectType BooleanConstructor
Typpy.get([], false); // $ExpectType ArrayConstructor
Typpy.get(/./, false); // $ExpectType RegExpConstructor
Typpy.get(() => {}, false); // $ExpectType FunctionConstructor
Typpy.get(1, false); // $ExpectType number | NumberConstructor
Typpy.get({}, false); // $ExpectType ConstructorFn

Typpy.get(undefined, true); // $ExpectType "undefined"
Typpy.get(null, true); // $ExpectType "null"
Typpy.get('', true); // $ExpectType "string"
Typpy.get(true, true); // $ExpectType "boolean"
Typpy.get([], true); // $ExpectType "array"
Typpy.get(/./, true); // $ExpectType "regexp"
Typpy.get(() => {}, true); // $ExpectType "function"
Typpy.get(1, true); // $ExpectType "number" | "nan"
Typpy.get({}, true); // $ExpectType string
