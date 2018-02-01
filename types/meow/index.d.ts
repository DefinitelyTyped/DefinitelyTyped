// Type definitions for meow 4.x
// Project: https://github.com/sindresorhus/meow
// Definitions by: KnisterPeter <https://github.com/KnisterPeter>, Lindsey Smith <https://github.com/praxxis>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import buildOptions = require("minimist-options");

declare function meow(helpMessage: string | string[], options: meow.Options): meow.Result;
declare function meow(options: string | string[] | meow.Options): meow.Result;
declare namespace meow {
    interface Options {
        description?: string | boolean;
        help?: string | boolean;
        version?: string | boolean;
        pkg?: any;
        argv?: string[];
        inferType?: boolean;
        flags?: buildOptions.Options;
        autoHelp?: boolean;
        autoVersion?: boolean;
    }

    interface Result {
        input: string[];
        flags: { [name: string]: any };
        pkg: object;
        help: string;
        showHelp(code?: number): void;
        showVersion(): void;
    }
}

export = meow;
