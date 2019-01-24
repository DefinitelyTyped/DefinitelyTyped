// Type definitions for copy 0.3
// Project: https://github.com/jonschlinkert/copy
// Definitions by: Florian Keller <https://github.com/ffflorian>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import File = require('vinyl');

declare namespace copy {
    function each(files: string[], dir: string, options: Options, callback: Callback): void;
    function each(files: string[], dir: string, callback: Callback): void;
    function one(pattern: string | object, dir: string, options: Options, callback: Callback): void;
    function one(pattern: string | object, dir: string, callback: Callback): void;

    type Callback = (error: Error | null, files?: File[]) => void;

    interface Options {
        cwd?: string;
        srcBase?: string;
    }
}

declare function copy(
    patterns: string | object | string[],
    dir: string,
    options: copy.Options,
    callback: copy.Callback,
): void;
declare function copy(patterns: string | object | string[], dir: string, callback: copy.Callback): void;

export = copy;
