// Type definitions for guid 1.0
// Project: https://github.com/dandean/guid
// Definitions by: Marc-Andre Roy <https://github.com/maroy1986>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

export = guid;

declare function guid(guid: object): object;

declare namespace guid {
    const EMPTY: string;

    const prototype: {
    };

    function create(): object;

    function isGuid(value: string): boolean;

    function raw(): string;
}
