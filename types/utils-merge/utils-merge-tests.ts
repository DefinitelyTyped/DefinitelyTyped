
import merge from "utils-merge";

type Result = {a: string, b: number};

let result: Result;

result = merge<{a: string}, {b: number}, Result>({a: ''}, {b: 42});
