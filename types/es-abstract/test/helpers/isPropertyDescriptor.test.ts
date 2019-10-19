import ES5 = require('es-abstract/es5');
import isPropertyDescriptor = require('es-abstract/helpers/isPropertyDescriptor');

const any: unknown = undefined;

if (isPropertyDescriptor(ES5, any)) {
	any; // $ExpectType PropertyDescriptor
}
