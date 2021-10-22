/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */

declare function emptyFunction(): void;

declare namespace emptyFunction {
    function thatReturns<T>(arg: T): (...args: any[]) => T;
    function thatReturnsFalse(): false;
    function thatReturnsTrue(): true;
    function thatReturnsNull(): null;
    function thatReturnsThis(): any;
    function thatReturnsArgument<T>(arg: T): T;
}

export = emptyFunction;
