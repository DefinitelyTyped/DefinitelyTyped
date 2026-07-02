import _ = require("./index");
declare function commit<T>(this: _.LoDashImplicitWrapper<T> | _.LoDashExplicitWrapper<T>): _.LoDashExplicitWrapper<T>;
export = commit;
