import { TransformOptions } from 'stream';
import Utf8Stream = require('./utils/Utf8Stream');

export = Parser;

declare class Parser extends Utf8Stream {
    constructor(options?: Parser.ParserOptions);
}

declare namespace Parser {
    interface ParserOptions extends TransformOptions {
        packValues?: boolean;
        packKeys?: boolean;
        packStrings?: boolean;
        packNumbers?: boolean;
        streamValues?: boolean;
        streamKeys?: boolean;
        streamStrings?: boolean;
        streamNumbers?: boolean;
        jsonStreaming?: boolean;
    }

    function make(options?: ParserOptions): Parser;

    namespace make {
        type Constructor = Parser;
        const Constructor: typeof Parser;
    }

    function parser(options?: ParserOptions): Parser;

    namespace parser {
        type Constructor = Parser;
        const Constructor: typeof Parser;
    }
}
