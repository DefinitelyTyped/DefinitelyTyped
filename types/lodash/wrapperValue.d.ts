import _ = require("./index");
declare function wrapperValue<T>(this: _.LoDashImplicitWrapper<T>): T;
export = wrapperValue;
