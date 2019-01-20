import * as isFunction from "is-function";

const a: boolean = isFunction("string");
const b: boolean = isFunction(true);
const c: boolean = isFunction((a: number) => a * a);
const d: boolean = isFunction({ type: "number" });
const e: boolean = isFunction(() => {
    return "I am anounymous!";
});
