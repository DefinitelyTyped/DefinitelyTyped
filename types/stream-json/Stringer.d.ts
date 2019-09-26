import { Transform, TransformOptions } from 'stream';

export = Stringer;

declare class Stringer extends Transform {
    constructor(options?: Stringer.StringerOptions);
}

declare namespace Stringer {
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
