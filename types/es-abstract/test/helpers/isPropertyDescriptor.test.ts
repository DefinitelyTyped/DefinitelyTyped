import ES5 = require('es-abstract/es5');
import isPropertyDescriptor = require('es-abstract/helpers/isPropertyDescriptor');

declare const any: unknown;
declare const optPropDesc: ES5.PropertyDescriptor<string> | null;

if (isPropertyDescriptor(ES5, any)) {
    any; // $ExpectType PropertyDescriptor<unknown>
}

if (isPropertyDescriptor(ES5, optPropDesc)) {
    optPropDesc; // $ExpectType PropertyDescriptor<string>
}
