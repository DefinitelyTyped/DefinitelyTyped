// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

type IsSymbol = 
    /**
     * Checks if `value` is classified as a `Symbol` primitive or object.
     *
     * @category Lang
     * @param value The value to check.
     * @returns Returns `true` if `value` is correctly classified, else `false`.
     * @example
     *
     * _.isSymbol(Symbol.iterator);
     * // => true
     *
     * _.isSymbol('abc');
     * // => false
     */
    (value: any) => boolean;

declare const isSymbol: IsSymbol;
declare namespace isSymbol {}
export = isSymbol;
