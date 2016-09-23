// Type definitions for del v2.2.0
// Project: https://github.com/sindresorhus/del
// Definitions by: Asana <https://asana.com>, Aya Morisawa <https://github.com/AyaMorisawa>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="glob" />

import glob = require("glob");

declare function Del(pattern: string): Promise<string[]>;
declare function Del(pattern: string, options: Del.Options): Promise<string[]>;

declare function Del(patterns: string[]): Promise<string[]>;
declare function Del(patterns: string[], options: Del.Options): Promise<string[]>;

declare namespace Del {
    function sync(pattern: string, options?: Options): string[];
    function sync(patterns: string[], options?: Options): string[];

    interface Options extends glob.IOptions {
        force?: boolean;
        dryRun?: boolean;
    }
}

export = Del;
