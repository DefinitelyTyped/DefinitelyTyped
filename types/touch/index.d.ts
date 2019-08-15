// Type definitions for touch 3.1
// Project: https://github.com/isaacs/node-touch
// Definitions by: Mizunashi Mana <https://github.com/mizunashi-mana>
//                 BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node" />

declare function touch<T = void>(filename: string, cb?: (err?: NodeJS.ErrnoException) => T): Promise<T>;
declare function touch<T = void>(filename: string, options?: touch.Options, cb?: (err?: NodeJS.ErrnoException) => T): Promise<T>;

declare namespace touch {
    interface Options {
        force?: boolean;
        time?: Date | string | number;
        atime?: boolean | Date;
        mtime?: boolean | Date;
        ref?: string;
        nocreate?: boolean;
        closeAfter?: boolean;
    }

    function sync(filename: string, options?: Options): void;

    function ftouch<T = void>(fd: number, cb?: (err?: NodeJS.ErrnoException) => T): Promise<T>;
    function ftouch<T = void>(fd: number, options?: Options, cb?: (err?: NodeJS.ErrnoException) => T): Promise<T>;

    function ftouchSync(fd: number, options?: Options): void;
}

export = touch;
