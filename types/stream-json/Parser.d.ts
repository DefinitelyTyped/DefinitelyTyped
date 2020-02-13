import { Transform, TransformOptions } from 'stream';

export = Parser;

declare class Parser extends Transform {
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
