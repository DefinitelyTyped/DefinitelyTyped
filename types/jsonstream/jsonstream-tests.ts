import json = require("jsonstream");

export function foo(read: NodeJS.ReadableStream) {
    read = read.pipe(json.parse("*"));
    read = read.pipe(json.parse(["foo/*", "bar/*"]));

    read = json.stringify();
    read = json.stringify(false);
    read = json.stringify("{", ",", "}");

    read = json.stringifyObject();
    read = json.stringifyObject("{", ",", "}");
}
