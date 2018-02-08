// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

type IsWeakSet = 
    /**
     * Checks if value is classified as a WeakSet object.
     *
     * @param value The value to check.
     * @returns Returns true if value is correctly classified, else false.
     */
    (value: any) => value is WeakSet<object>;

declare const isWeakSet: IsWeakSet;
declare namespace isWeakSet {}
export = isWeakSet;
