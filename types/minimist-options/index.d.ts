// Type definitions for minimist-options 3.0
// Project: https://github.com/vadimdemedes/minimist-options
// Definitions by: Ika <https://github.com/ikatyang>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

import * as minimist from 'minimist';

declare function build(options?: build.Options): minimist.Opts;

declare namespace build {
    type Type = 'string' | 'boolean';

    interface Option {
        type?: Type;
        alias?: string | string[];
        default?: any;
    }

    type Options = {
        [key: string]: Type | Option;
    } & {
        [K in 'stopEarly' | 'unknown' | '--']?: minimist.Opts[K];
    };
}

export = build;
