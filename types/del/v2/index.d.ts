// Type definitions for del 2.2
// Project: https://github.com/sindresorhus/del
// Definitions by: Asana <https://asana.com>, Aya Morisawa <https://github.com/AyaMorisawa>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import glob = require("glob");

declare function del(patterns: string | string[], options?: del.Options): Promise<string[]>;

declare namespace del {
    function sync(patterns: string | string[], options?: Options): string[];

    interface Options extends glob.IOptions {
        force?: boolean;
        dryRun?: boolean;
    }
}

export = del;
