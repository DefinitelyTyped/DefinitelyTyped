// Type definitions for meow 3.6
// Project: https://github.com/sindresorhus/meow
// Definitions by: KnisterPeter <https://github.com/KnisterPeter>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as minimist from 'minimist';

declare function meow(options: string | string[] | meow.Options, minimistOptions?: minimist.Opts): meow.Result;
declare namespace meow {
    interface Options {
        description?: string | boolean;
        help?: string | boolean;
        version?: string | boolean;
        pkg?: any;
        argv?: string[];
        inferType?: boolean;
    }

    interface Result {
        input: string[];
        flags: { [name: string]: any };
        pkg: any;
        help: string;
        showHelp(code?: number): void;
    }
}

export = meow;
