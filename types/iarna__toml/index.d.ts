// Type definitions for @iarna/toml 2.0
// Project: https://github.com/iarna/iarna-toml#readme
// Definitions by: Klaus Meinhardt <https://github.com/ajafff>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import parseAsync = require('./parse-async');
import parseStream = require('./parse-stream');

export import stringify = require('./stringify');

/** Synchronously parse a TOML string and return an object. */
export function parse(str: string): Record<string, any>;
export namespace parse {
    export {
        parseAsync as async,
        parseStream as stream,
    };
}
