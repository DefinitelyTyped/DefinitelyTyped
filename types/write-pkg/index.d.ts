// Type definitions for write-pkg 3.1
// Project: https://github.com/sindresorhus/write-pkg#readme
// Definitions by: Aleh Zasypkin <https://github.com/azasypkin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

interface WritePkg {
    (path: string, data: { [k: string]: any }): Promise<void>;
    (data: { [k: string]: any }): Promise<void>;
    sync(path: string, data: { [k: string]: any }): void;
    sync(data: { [k: string]: any }): void;
}

declare const writePkg: WritePkg;

export = writePkg;
