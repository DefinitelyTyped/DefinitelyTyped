// Type definitions for read 2.0
// Project: https://github.com/isaacs/read
// Definitions by: Tim JK <https://github.com/timjk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


declare function Read(options: Read.Options): Promise<string>;

declare namespace Read {
    interface Options {
        prompt?: string | undefined;
        silent?: boolean | undefined;
        replace?: string | undefined;
        timeout?: number | undefined;
        default?: string | undefined;
        edit?: boolean | undefined;
        terminal?: boolean | undefined;
        input?: any;
        output?: any;
    }
}

export = Read;
