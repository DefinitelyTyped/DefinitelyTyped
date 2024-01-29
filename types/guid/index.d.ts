export = guid;

declare function guid(guid: object): object;

declare namespace guid {
    const EMPTY: string;

    const prototype: {};

    function create(): object;

    function isGuid(value: string): boolean;

    function raw(): string;
}
