import * as jsonic from "jsonic";

jsonic("a:x, b:y z");
jsonic.stringify(
    { a: "a", b: "b", c: { c1: "c1" } },
    { depth: 1, omit: ["a"], exclude: ["b"] }
);
