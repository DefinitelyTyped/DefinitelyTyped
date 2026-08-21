import isPropertyKey = require("es-abstract/helpers/isPropertyKey");

declare const any: unknown;

isPropertyKey(any); // $ExpectType boolean

if (isPropertyKey(any)) {
    any; // $ExpectType PropertyKey
}
