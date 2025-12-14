import isStringOrUndefined = require("es-abstract/helpers/isStringOrUndefined");

declare const any: unknown;

isStringOrUndefined(any); // $ExpectType boolean

if (isStringOrUndefined(any)) {
    any; // $ExpectType string | undefined
}
