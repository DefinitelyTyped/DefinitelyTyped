// Type definitions for stream-json 1.0
// Project: http://github.com/uhop/stream-json
// Definitions by: Eugene Lazutkin <https://github.com/uhop>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import * as Assembler from './Assembler';
import * as Emitter from './Emitter';
import * as Parser from './Parser';
import * as Stringer from './Stringer';

import * as FilterBase from './filters/FilterBase';
import * as Pick from './filters/Pick';
import * as Replace from './filters/Replace';
import * as Ignore from './filters/Ignore';
import * as Filter from './filters/Filter';

import * as StreamArray from './streamers/StreamArray';
import * as StreamObject from './streamers/StreamObject';
import * as StreamValues from './streamers/StreamValues';

import * as emit from './utils/emit';
import * as withParser from './utils/withParser';

export = make;

declare function make(options?: Parser.ParserOptions): Parser;

type ParserClass = Parser;
type ParserType = typeof Parser;

declare namespace make {
    type Parser = ParserClass;
    const Parser: ParserType;
    function parser(options?: Parser.ParserOptions): Parser;
}
