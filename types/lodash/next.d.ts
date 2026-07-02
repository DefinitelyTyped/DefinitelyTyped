import _ = require("./index");
declare function next<T>(this: _.LoDashWrapper<T>): { done: boolean; value: any };
export = next;
