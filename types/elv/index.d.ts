// Type definitions for elv 2.2
// Project: https://github.com/dsfields/elv#readme
// Definitions by: Gary Parker <https://github.com/garyaparker>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function elv(val: any): boolean;

declare namespace elv {
    const behavior: {
        enableFalse: boolean
        enableNaN: boolean
        enableNull: boolean
        enableUndefined: boolean
    };
    function coalesce(...args: any[]): any;
    function ncoalesce(...args: any[]): any;
    function populated(val: any): boolean;
    function tryGet(val: ReadonlyArray<any>, index: number, def?: any): any;
}

export = elv;
