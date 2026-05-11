import merge from "utils-merge";

type Result = { a: string; b: number };

// $ExpectType Result
merge<{ a: string }, { b: number }, Result>({ a: "" }, { b: 42 });
