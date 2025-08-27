import ES5 = require("es-abstract/es5");
import isPropertyDescriptor = require("es-abstract/helpers/isPropertyDescriptor");

declare const unknown: unknown;
declare const optPropDesc: ES5.PropertyDescriptor<string> | null;

if (isPropertyDescriptor(ES5, unknown)) {
    unknown; // $ExpectType PropertyDescriptor<unknown> || PropertyDescriptor
}

if (isPropertyDescriptor(ES5, optPropDesc)) {
    optPropDesc; // $ExpectType PropertyDescriptor<string> || AccessorDescriptor<string> | DataDescriptor<string>
}
