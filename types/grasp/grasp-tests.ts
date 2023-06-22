import fs = require("fs");
import grasp = require("grasp");

// @ts-expect-error
grasp();
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

// @ts-expect-error
grasp({ args: [], textFormat: { cyan: "cyan" } });

// $ExpectType string
grasp.VERSION;

// @ts-expect-error
const fooquery = grasp.search("fooquery");
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
