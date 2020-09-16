// Type definitions for iferr 1.0
// Project: https://github.com/shesek/iferr
// Definitions by: segayuu <https://github.com/segayuu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type nodeCallback<T> = (err: Error | null, ...a: T[]) => any;

// Delegates to `succ` on sucecss or to `fail` on error
// ex: Thing.load(123, iferr(cb, thing => ...))
declare function iferr<T>(fail: (err: Error) => void, succ: (...result: T[]) => void): nodeCallback<T>;

declare namespace iferr {
    // Delegates to `succ` on sucecss or to `fail` on error
    // ex: Thing.load(123, iferr(cb, thing => ...))
    function iferr<T>(fail: (err: Error) => void, succ: (...result: T[]) => void): nodeCallback<T>;

    // Like iferr, but also catches errors thrown from `succ` and passes to `fail`
    function tiferr<T>(fail: (err: Error) => void, succ: (...result: T[]) => void): nodeCallback<T>;

    // Delegate to the success function on success, throws the error otherwise
    // ex: Thing.load(123, throwerr(thing => ...))
    function throwerr<T>(succ: (...result: T[]) => void): nodeCallback<T>;

    // Prints errors when one is passed, or does nothing otherwise
    // ex: Thing.load(123, printerr)
    function printerr(): nodeCallback<any>;
}

export = iferr;
