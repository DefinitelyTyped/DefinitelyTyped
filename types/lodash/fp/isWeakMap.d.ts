// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

type IsWeakMap = 
    /**
     * Checks if value is classified as a WeakMap object.
     *
     * @param value The value to check.
     * @returns Returns true if value is correctly classified, else false.
     */
    (value: any) => value is WeakMap<object, any>;

declare const isWeakMap: IsWeakMap;
declare namespace isWeakMap {}
export = isWeakMap;
