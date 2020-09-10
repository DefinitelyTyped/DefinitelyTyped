import CBuffer = require('CBuffer');

const cbuffer_limit = new CBuffer<object>(4);
cbuffer_limit.data; // $ExpectType ReadonlyArray<object>
cbuffer_limit.start; // $ExpectType number
cbuffer_limit.end; // $ExpectType number
cbuffer_limit.push({}); // $ExpectType number

const cbuffer_typed = new CBuffer<string>('foo', 'bar');
cbuffer_limit.length; // $ExpectType number
cbuffer_limit.size; // $ExpectType number
cbuffer_limit.overflow; // $ExpectType ((overwrittenEntry: object) => void) | null
cbuffer_typed.pop(); // $ExpectType string | undefined

const cbuffer_error = new CBuffer<any>(); // $ExpectError
