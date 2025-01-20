import json = require("jsonstream-next");

export function foo(read: NodeJS.ReadableStream) {
    read = read.pipe(json.parse("*"));
    read = read.pipe(json.parse(["foo/*", "bar/*"]));

    read = json.stringify();
    read = json.stringify(false);
    read = json.stringify("{", ",", "}");

    read = json.stringifyObject();
    read = json.stringifyObject("{", ",", "}");
}

{
    const transform = json.parse("*");
    const oldFlush = (cb: (e: Error | null | undefined) => void) => transform._flush(cb);
    const newFlush: typeof oldFlush = cb => {
        oldFlush(err => {
            if (err) {
                console.error("Parse error: " + err.message);
            }
            cb(err);
        });
    };
    transform._flush = newFlush;
}
