// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

type IsFunction = 
    /**
     * Checks if value is a callable function.
     *
     * @param value The value to check.
     * @return Returns true if value is correctly classified, else false.
     */
    (value: any) => value is (...args: any[]) => any;

declare const isFunction: IsFunction;
declare namespace isFunction {}
export = isFunction;
