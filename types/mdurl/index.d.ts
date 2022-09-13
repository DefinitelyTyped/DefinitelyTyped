// Type definitions for mdurl 1.0
// Project: https://github.com/markdown-it/mdurl#readme
// Definitions by: Junyoung Choi <https://github.com/rokt33r>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
import encode = require('./encode');
import decode = require('./decode');
import parse = require('./parse');
import format = require('./format');

export interface Url {
    protocol: string;
    slashes: string;
    auth: string;
    port: string;
    hostname: string;
    hash: string;
    search: string;
    pathname: string;
}

export {
    encode,
    decode,
    parse,
    format
};
