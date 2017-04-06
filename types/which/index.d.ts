// Type definitions for which 1.0.8
// Project: https://github.com/isaacs/node-which
// Definitions by: vvakame <https://github.com/vvakame>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


declare function when(cmd: string, cb: (err: Error, path: string) => void): void;
declare namespace when {
    function sync(cmd: string): string;
}

export = when;
