import isFunction = require("is-function");

const a: boolean = isFunction("string");
const b: boolean = isFunction(true);
const c: boolean = isFunction((x: number) => x * x);
const d: boolean = isFunction({ type: "number" });
const e: boolean = isFunction(() => {
    return "I am anounymous!";
});
