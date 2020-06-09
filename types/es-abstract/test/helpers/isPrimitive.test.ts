import isPrimitive = require('es-abstract/helpers/isPrimitive');

declare const any: unknown;

isPrimitive(any); // $ExpectType boolean

if (isPrimitive(any)) {
    any; // $ExpectType string | number | bigint | boolean | symbol | null | undefined
}
