/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */

declare function emptyFunction(): void;

declare namespace emptyFunction {
    var thatReturns: <T>(arg: T) => (...args: Array<any>) => T;
    var thatReturnsFalse: () => false;
    var thatReturnsTrue: () => true;
    var thatReturnsNull: () => null;
    var thatReturnsThis: () => any;
    var thatReturnsArgument: (arg) => any;
}

export = emptyFunction;
