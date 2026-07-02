import _ = require("./index");
declare function wrapperLodash<T>(value: T): _.LoDashImplicitWrapper<T>;
export = wrapperLodash;
