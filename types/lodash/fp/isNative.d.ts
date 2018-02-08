// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

type IsNative = 
    /**
     * Checks if value is a native function.
     * @param value The value to check.
     *
     * @retrun Returns true if value is a native function, else false.
     */
    (value: any) => value is (...args: any[]) => any;

declare const isNative: IsNative;
declare namespace isNative {}
export = isNative;
