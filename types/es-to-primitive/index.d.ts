import ES5 = require("./es5");
import ES6 = require("./es6");
import ES2015 = require("./es2015");

declare const ToPrimitive: typeof ES2015 & {
    readonly ES5: typeof ES5;
    /** @deprecated */
    readonly ES6: typeof ES6;
    readonly ES2015: typeof ES2015;
};
export = ToPrimitive;
