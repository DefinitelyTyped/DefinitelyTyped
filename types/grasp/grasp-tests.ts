import fs = require("fs");
import * as grasp from "grasp";

grasp(); // $ExpectError
grasp({ args: [] }); // $ExpectType void

// $ExpectType void
grasp({
    args: [],
    error: console.error,
    callback: console.log,
    exit: process.exit,
    console,
    stdin: process.stdin,
    fs,
    input: "foo bar"
});

// $ExpectError
grasp({
    args: [],
    textFormat: { cyan: "cyan" }
});

// $ExpectType string
grasp.VERSION;

const fooquery = grasp.search("fooquery"); // $ExpectError
const equery = grasp.search("equery");
const squery = grasp.search("squery");

// $ExpectType Node[]
grasp.search("equery", "pattern", "input");

// $ExpectType Node[]
equery("pattern")("input");

// $ExpectType (input: string) => Node[]
squery("pattern");

const replacer = grasp.replace("equery", "pattern");

// $ExpectType string
replacer("replacement", "input");

// $ExpectType string
replacer((getRaw, node, query, named) => {
    getRaw(node); // $ExpectType string
    return "foo";
}, "input");
