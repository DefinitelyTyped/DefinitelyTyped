// Type definitions for stream-csv-as-json 1.0
// Project: https://github.com/uhop/stream-csv-as-json#readme
// Definitions by: Eugene Lazutkin <https://github.com/uhop>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare module 'stream-csv-as-json' {
    import * as Parser from 'stream-csv-as-json/Parser';

    export = make;

    function make(options?: Parser.ParserOptions): Parser;

    type ParserClass = Parser;
    type ParserType = typeof Parser;

    namespace make {
        type Parser = ParserClass;
        const Parser: ParserType;
        const parser: (options?: Parser.ParserOptions) => Parser;
    }
}

declare module 'stream-csv-as-json/AsObjects' {
    import { TransformOptions, Transform } from 'stream';
    import * as Chain from 'stream-chain';

    export = AsObjects;

    class AsObjects extends Transform {
        constructor(options?: AsObjects.AsObjectOptions);
    }

    namespace AsObjects {
        interface AsObjectOptions extends TransformOptions {
            packValues?: boolean;
            packStrings?: boolean;
            streamValues?: boolean;
            streamStrings?: boolean;
            useValues?: boolean;
            useStringValues?: boolean;
            fieldPrefix?: string;
        }

        function make(options?: AsObjects.AsObjectOptions): AsObjects;

        namespace make {
            type Constructor = AsObjects;
            const Constructor: typeof AsObjects;
        }

        function asObjects(options?: AsObjects.AsObjectOptions): AsObjects;

        namespace asObjects {
            type Constructor = AsObjects;
            const Constructor: typeof AsObjects;
        }

        function withParser(options?: AsObjects.AsObjectOptions): Chain;
    }
}

declare module 'stream-csv-as-json/Parser' {
    import { Transform, TransformOptions } from 'stream';

    export = Parser;

    class Parser extends Transform {
        constructor(options?: Parser.ParserOptions);
    }

    namespace Parser {
        interface ParserOptions extends TransformOptions {
            packValues?: boolean;
            packStrings?: boolean;
            streamValues?: boolean;
            streamStrings?: boolean;
            separator?: string;
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
}

declare module 'stream-csv-as-json/Stringer' {
    import { Transform, TransformOptions } from 'stream';

    export = Stringer;

    class Stringer extends Transform {
        constructor(options?: Stringer.StringerOptions);
    }

    namespace Stringer {
        interface StringerOptions extends TransformOptions {
            useValues?: boolean;
            useStringValues?: boolean;
            separator?: string;
        }

        function make(options?: StringerOptions): Stringer;

        namespace make {
            type Constructor = Stringer;
            const Constructor: typeof Stringer;
        }

        function stringer(options?: StringerOptions): Stringer;

        namespace stringer {
            type Constructor = Stringer;
            const Constructor: typeof Stringer;
        }
    }
}
