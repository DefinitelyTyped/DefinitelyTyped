// Type definitions for touch
// Project: https://github.com/isaacs/node-touch
// Definitions by: Mizunashi Mana <https://github.com/mizunashi-mana>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function touch(filename: string, cb: (err: any) => any): void;
declare function touch(filename: string, opts: touch.Options, cb: (err: any) => any): void;

declare namespace touch {
    export interface Options {
        force?: boolean;
        time?: Date | string | number;
        atime?: boolean | Date;
        mtime?: boolean | Date;
        ref?: string;
        nocreate?: boolean;
    }

    export function sync(filename: string, opts?: touch.Options): void;

    export function ftouch(fd: number, cb: (err: any) => any): void;
    export function ftouch(fd: number, opts: touch.Options, cb: (err: any) => any): void;

    export namespace ftouch {
        export function sync(fd: number, opts?: touch.Options): void;
    }

    export const ftouchSync: typeof ftouch.sync;
}

export = touch;
