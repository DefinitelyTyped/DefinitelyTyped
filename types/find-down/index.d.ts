// Type definitions for find-down 0.1
// Project: https://github.com/sholladay/find-down
// Definitions by: Florian Keller <https://github.com/ffflorian>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace findDown {
    interface Options {
        /** Directory to end with. Default: `process.cwd()` */
        cwd?: string;
    }
}

declare function findDown(filename: string | string[], options?: findDown.Options): Promise<string | null>;

export = findDown;
