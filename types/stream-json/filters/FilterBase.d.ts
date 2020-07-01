import { Transform, TransformOptions } from 'stream';

export = FilterBase;

declare class FilterBase extends Transform {
    constructor(options: FilterBase.FilterOptions);
}

declare namespace FilterBase {
    type Stack = ReadonlyArray<number | string | null>;

    interface Token {
        readonly name: string;
        readonly value?: string | null | boolean;
    }

    type FilterFunction = (stack: Stack, token: Token) => boolean;
    type ReplacementFunction = (stack: Stack, token: Token) => Token[];

    interface FilterOptions extends TransformOptions {
        filter: string | RegExp | FilterFunction;
        once?: boolean;
        pathSeparator?: string;
        streamValues?: boolean;
        streamKeys?: boolean;
        replacement?: ReadonlyArray<Token> | ReplacementFunction;
        allowEmptyReplacement?: boolean;
    }
}
