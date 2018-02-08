// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

type Unary = 
    /**
     * Creates a function that accepts up to one argument, ignoring any
     * additional arguments.
     *
     * @category Function
     * @param func The function to cap arguments for.
     * @returns Returns the new function.
     * @example
     *
     * _.map(['6', '8', '10'], _.unary(parseInt));
     * // => [6, 8, 10]
     */
    <T, TResult>(func: (arg1: T, ...args: any[]) => TResult) => (arg1: T) => TResult;

declare const unary: Unary;
declare namespace unary {}
export = unary;
