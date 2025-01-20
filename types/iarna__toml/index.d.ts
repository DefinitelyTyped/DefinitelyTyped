import parseAsync = require("./parse-async");
import parseStream = require("./parse-stream");

export import stringify = require("./stringify");

/** Synchronously parse a TOML string and return an object. */
export function parse(str: string): Record<string, any>;
export namespace parse {
    export { parseAsync as async, parseStream as stream };
}
