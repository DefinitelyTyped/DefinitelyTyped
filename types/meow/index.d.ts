// Type definitions for meow 5.x
// Project: https://github.com/sindresorhus/meow
// Definitions by: KnisterPeter <https://github.com/KnisterPeter>
//                 Lindsey Smith <https://github.com/praxxis>
//                 Jason Dreyzehner <https://github.com/bitjson>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import * as buildOptions from 'minimist-options';

declare function meow(
    helpMessage: string | ReadonlyArray<string>,
    options: meow.Options
): meow.Result;
declare function meow(
    options: string | ReadonlyArray<string> | meow.Options
): meow.Result;
declare namespace meow {
    interface Options {
        description?: string | boolean;
        help?: string | boolean;
        version?: string | boolean;
        pkg?: any;
        argv?: ReadonlyArray<string>;
        inferType?: boolean;
        flags?: buildOptions.Options;
        autoHelp?: boolean;
        autoVersion?: boolean;
        /**
         * Caution: Explicitly specifying undefined for booleanDefault
         * has different meaning from omitting key itself.
         */
        booleanDefault?: boolean | null;
    }

    interface Result {
        input: string[];
        flags: { [name: string]: any };
        pkg: any;
        help: string;
        showHelp(code?: number): void;
        showVersion(): void;
    }
}

export = meow;
