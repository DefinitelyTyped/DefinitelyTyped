// Type definitions for stream-json 1.0
// Project: http://github.com/uhop/stream-json
// Definitions by: Eugene Lazutkin <https://github.com/uhop>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare module 'stream-json' {
    import * as Parser from 'stream-json/Parser';

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

declare module 'stream-json/Assembler' {
    import { EventEmitter } from 'events';
    import { Readable } from 'stream';

    export = Assembler;

    type Token = {
        name: string;
        value?: string;
    };

    class Assembler extends EventEmitter {
        constructor();

        connectTo(stream: Readable): this;
        consume(chunk: Token): this;
        dropToLevel(level: number): this;

        current: any;
        key: string | null;
        stack: Array<number | string | null>;
        readonly done: boolean;

        readonly depth: number;
        readonly path: string;

        // events
        addListener(event: 'done', listener: (asm: Assembler) => void): this;
        on(event: 'done', listener: (asm: Assembler) => void): this;
        once(event: 'done', listener: (asm: Assembler) => void): this;
        prependListener(event: 'done', listener: (asm: Assembler) => void): this;
        prependOnceListener(event: 'done', listener: (asm: Assembler) => void): this;
        removeListener(event: 'done', listener: (asm: Assembler) => void): this;
    }

    namespace Assembler {
        function connectTo(stream: Readable): Assembler;
    }
}

declare module 'stream-json/Emitter' {
    import { Writable, WritableOptions } from 'stream';

    export = Emitter;

    class Emitter extends Writable {
        constructor(options?: WritableOptions);
    }

    namespace Emitter {
        function make(options?: WritableOptions): Emitter;

        namespace make {
            type Constructor = Emitter;
            const Constructor: typeof Emitter;
        }

        function emitter(options?: WritableOptions): Emitter;

        namespace emitter {
            type Constructor = Emitter;
            const Constructor: typeof Emitter;
        }
    }
}

declare module 'stream-json/Parser' {
    import { Transform, TransformOptions } from 'stream';

    export = Parser;

    class Parser extends Transform {
        constructor(options?: Parser.ParserOptions);
    }

    namespace Parser {
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
}

declare module 'stream-json/Stringer' {
    import { Transform, TransformOptions } from 'stream';

    export = Stringer;

    class Stringer extends Transform {
        constructor(options?: Stringer.StringerOptions);
    }

    namespace Stringer {
        interface StringerOptions extends TransformOptions {
            useValues?: boolean;
            useKeyValues?: boolean;
            useStringValues?: boolean;
            useNumberValues?: boolean;
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

declare module 'stream-json/filters/FilterBase' {
    import { Transform, TransformOptions } from 'stream';

    export = FilterBase;

    class FilterBase extends Transform {
        constructor(options: FilterBase.FilterOptions);
    }

    namespace FilterBase {
        type Stack = ReadonlyArray<number | string | null>;
        type Token = { readonly name: string; readonly value?: ReadonlyArray<string | null | true | false> };

        interface IFilterFunction {
            (stack: Stack, token: Token): boolean;
        }

        interface IReplacementFunction {
            (stack: Stack, token: Token): Token[];
        }

        interface FilterOptions extends TransformOptions {
            filter: string | RegExp | IFilterFunction;
            once?: boolean;
            pathSeparator?: string;
            streamValues?: boolean;
            streamKeys?: boolean;
            replacement?: ReadonlyArray<Token> | IReplacementFunction;
            allowEmptyReplacement?: boolean;
        }
    }
}

declare module 'stream-json/filters/Pick' {
    import * as Chain from 'stream-chain';
    import * as FilterBase from 'stream-json/filters/FilterBase';

    export = Pick;

    class Pick extends FilterBase {
        constructor(options: FilterBase.FilterOptions);
    }

    namespace Pick {
        function make(options: FilterBase.FilterOptions): Pick;

        namespace make {
            type Constructor = Pick;
            const Constructor: typeof Pick;
        }

        function pick(options: FilterBase.FilterOptions): Pick;

        namespace pick {
            type Constructor = Pick;
            const Constructor: typeof Pick;
        }

        function withParser(options: FilterBase.FilterOptions): Chain;
    }
}

declare module 'stream-json/filters/Replace' {
    import * as Chain from 'stream-chain';
    import * as FilterBase from 'stream-json/filters/FilterBase';

    export = Replace;

    class Replace extends FilterBase {
        constructor(options: FilterBase.FilterOptions);
    }

    namespace Replace {
        function make(options: FilterBase.FilterOptions): Replace;

        namespace make {
            type Constructor = Replace;
            const Constructor: typeof Replace;
        }

        function replace(options: FilterBase.FilterOptions): Replace;

        namespace replace {
            type Constructor = Replace;
            const Constructor: typeof Replace;
        }

        function withParser(options: FilterBase.FilterOptions): Chain;
    }
}

declare module 'stream-json/filters/Ignore' {
    import * as Chain from 'stream-chain';
    import * as FilterBase from 'stream-json/filters/FilterBase';

    export = Ignore;

    class Ignore extends FilterBase {
        constructor(options: FilterBase.FilterOptions);
    }

    namespace Ignore {
        function make(options: FilterBase.FilterOptions): Ignore;

        namespace make {
            type Constructor = Ignore;
            const Constructor: typeof Ignore;
        }

        function ignore(options: FilterBase.FilterOptions): Ignore;

        namespace ignore {
            type Constructor = Ignore;
            const Constructor: typeof Ignore;
        }

        function withParser(options: FilterBase.FilterOptions): Chain;
    }
}

declare module 'stream-json/filters/Filter' {
    import * as Chain from 'stream-chain';
    import * as FilterBase from 'stream-json/filters/FilterBase';

    export = Filter;

    class Filter extends FilterBase {
        constructor(options: FilterBase.FilterOptions);
    }

    namespace Filter {
        function make(options: FilterBase.FilterOptions): Filter;

        namespace make {
            type Constructor = Filter;
            const Constructor: typeof Filter;
        }

        function filter(options: FilterBase.FilterOptions): Filter;

        namespace filter {
            type Constructor = Filter;
            const Constructor: typeof Filter;
        }

        function withParser(options: FilterBase.FilterOptions): Chain;
    }
}

declare module 'stream-json/streamers/StreamBase' {
    import { Transform, TransformOptions } from 'stream';
    import * as Assembler from 'stream-json/Assembler';

    export = StreamBase;

    class StreamBase extends Transform {
        constructor(options?: StreamBase.StreamOptions);
    }

    namespace StreamBase {
        interface IObjectFilterFunction {
            (asm: Readonly<Assembler>): boolean | undefined;
        }

        interface StreamOptions extends TransformOptions {
            objectFilter?: IObjectFilterFunction;
            includeUndecided?: boolean;
        }
    }
}

declare module 'stream-json/streamers/StreamArray' {
    import * as Chain from 'stream-chain';
    import * as StreamBase from 'stream-json/streamers/StreamBase';

    export = StreamArray;

    class StreamArray extends StreamBase {
        constructor(options?: StreamBase.StreamOptions);
    }

    namespace StreamArray {
        function make(options?: StreamBase.StreamOptions): StreamArray;

        namespace make {
            type Constructor = StreamArray;
            const Constructor: typeof StreamArray;
        }

        function streamArray(options?: StreamBase.StreamOptions): StreamArray;

        namespace streamArray {
            type Constructor = StreamArray;
            const Constructor: typeof StreamArray;
        }

        function withParser(options?: StreamBase.StreamOptions): Chain;
    }
}

declare module 'stream-json/streamers/StreamObject' {
    import * as Chain from 'stream-chain';
    import * as StreamBase from 'stream-json/streamers/StreamBase';

    export = StreamObject;

    class StreamObject extends StreamBase {
        constructor(options?: StreamBase.StreamOptions);
    }

    namespace StreamObject {
        function make(options?: StreamBase.StreamOptions): StreamObject;

        namespace make {
            type Constructor = StreamObject;
            const Constructor: typeof StreamObject;
        }

        function streamObject(options?: StreamBase.StreamOptions): StreamObject;

        namespace streamObject {
            type Constructor = StreamObject;
            const Constructor: typeof StreamObject;
        }

        function withParser(options?: StreamBase.StreamOptions): Chain;
    }
}

declare module 'stream-json/streamers/StreamValues' {
    import * as Chain from 'stream-chain';
    import * as StreamBase from 'stream-json/streamers/StreamBase';

    export = StreamValues;

    class StreamValues extends StreamBase {
        constructor(options?: StreamBase.StreamOptions);
    }

    namespace StreamValues {
        function make(options?: StreamBase.StreamOptions): StreamValues;

        namespace make {
            type Constructor = StreamValues;
            const Constructor: typeof StreamValues;
        }

        function streamValues(options?: StreamBase.StreamOptions): StreamValues;

        namespace streamValues {
            type Constructor = StreamValues;
            const Constructor: typeof StreamValues;
        }

        function withParser(options?: StreamBase.StreamOptions): Chain;
    }
}

declare module 'stream-json/utils/emit' {
    import { Writable, Duplex, Transform } from 'stream';

    export = emit;

    function emit<Stream extends Writable | Duplex | Transform>(stream: Stream): Stream;

    namespace emit {

    }
}

declare module 'stream-json/utils/withParser' {
    import { Writable, WritableOptions, Duplex, DuplexOptions, Transform, TransformOptions } from 'stream';
    import * as Chain from 'stream-chain';
    import * as Parser from 'stream-json/Parser';
    import * as FilterBase from 'stream-json/filters/FilterBase';
    import * as StreamBase from 'stream-json/streamers/StreamBase';

    export = withParser;

    function withParser<Stream extends FilterBase>(
        fn: (options: FilterBase.FilterOptions) => Stream,
        options?: withParser.FilterOptions
    ): Chain;

    function withParser<Stream extends StreamBase>(
        fn: (options?: StreamBase.StreamOptions) => Stream,
        options?: withParser.StreamOptions
    ): Chain;

    function withParser(fn: (options?: TransformOptions) => Transform, options?: Parser.ParserOptions): Chain;

    namespace withParser {
        interface FilterOptions extends FilterBase.FilterOptions {
            // copied from ParserOptions
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

        interface StreamOptions extends StreamBase.StreamOptions {
            // copied from ParserOptions
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
    }
}
