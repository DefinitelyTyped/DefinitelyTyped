// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

type Defer = 
    /**
     * Defers invoking the func until the current call stack has cleared. Any additional arguments are provided to
     * func when it’s invoked.
     *
     * @param func The function to defer.
     * @param args The arguments to invoke the function with.
     * @return Returns the timer id.
     */
    (func: (...args: any[]) => any, ...args: any[]) => number;

declare const defer: Defer;
declare namespace defer {}
export = defer;
