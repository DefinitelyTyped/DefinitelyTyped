import ToPrimitive = require('es-to-primitive');
import ToPrimitiveES5 = require('es-to-primitive/es5');
import ToPrimitiveES6 = require('es-to-primitive/es2015');
import ToPrimitiveES2015 = require('es-to-primitive/es2015');

const any: any = undefined;

ToPrimitive.ES5(any);
ToPrimitive.ES6(any);
ToPrimitive.ES2015(any);

ToPrimitiveES5(any);
ToPrimitiveES6(any);
ToPrimitiveES2015(any);
