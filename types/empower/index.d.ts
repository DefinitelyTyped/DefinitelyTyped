// Type definitions for empower 1.2
// Project: https://github.com/power-assert-js/empower
// Definitions by: vvakame <https://github.com/vvakame>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.1

import { Formatter } from 'power-assert-formatter';

declare function empower<T>(originalAssert: T, formatter: Formatter, options?: empower.Options): T;

declare namespace empower {
    interface Options {
        destructive?: boolean;
        modifyMessageOnRethrow?: boolean;
        saveContextOnRethrow?: boolean;
        patterns?: string[];
    }

    function defaultOptions(): Required<Options>;
}

export = empower;
