import isPrimitive = require('es-abstract/helpers/isPrimitive');

const any: unknown = undefined;

isPrimitive(any); // $ExpectType boolean

if (isPrimitive(any)) {
	any; // $ExpectType string | number | bigint | boolean | symbol | null | undefined
}
