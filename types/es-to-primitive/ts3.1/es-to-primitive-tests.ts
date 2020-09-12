// tslint:disable-next-line:no-relative-import-in-test Rule does not apply to nested typesVersions tests
import ToPrimitive = require('./');
// tslint:disable-next-line:no-relative-import-in-test Rule does not apply to nested typesVersions tests
import ToPrimitiveES5 = require('./es5');
// tslint:disable-next-line:no-relative-import-in-test Rule does not apply to nested typesVersions tests
import ToPrimitiveES6 = require('./es2015');
// tslint:disable-next-line:no-relative-import-in-test Rule does not apply to nested typesVersions tests
import ToPrimitiveES2015 = require('./es2015');

const any: unknown = undefined;

ToPrimitive.ES5(any);
ToPrimitive.ES6(any);
ToPrimitive.ES2015(any);

ToPrimitiveES5(any);
ToPrimitiveES6(any);
ToPrimitiveES2015(any);
