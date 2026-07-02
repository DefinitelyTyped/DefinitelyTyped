import _ = require("./index");
declare function wrapperAt<T>(this: _.LoDashWrapper<T>, ...paths: Array<_.Many<string | number> | ReadonlyArray<_.Many<string | number>>>): _.LoDashExplicitWrapper<any>;
export = wrapperAt;
