// Type definitions for stream-json 1.7
// Project: http://github.com/uhop/stream-json
// Definitions by: Eugene Lazutkin <https://github.com/uhop>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import Parser = require('./Parser');

export = make;

declare function make(options?: Parser.ParserOptions): Parser;

type ParserClass = Parser;
type ParserType = typeof Parser;

declare namespace make {
    type Parser = ParserClass;
    const Parser: ParserType;
    function parser(options?: Parser.ParserOptions): Parser;
}
