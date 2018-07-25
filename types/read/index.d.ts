// Type definitions for read
// Project: https://github.com/isaacs/read
// Definitions by: Tim JK <https://github.com/timjk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


declare function Read(options: Read.Options, callback: (error: any, result: string, isDefault: boolean) => any): void;

declare namespace Read {
    interface Options {
        prompt?: string;
        silent?: boolean;
        replace?: string;
        timeout?: number;
        default?: string;
        edit?: boolean;
        terminal?: boolean;
        input?: any;
        output?: any;
    }
}

export = Read;
