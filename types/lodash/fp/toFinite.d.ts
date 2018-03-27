// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

type ToFinite =
    /**
     * Converts `value` to a finite number.
     *
     * @since 4.12.0
     * @category Lang
     * @param value The value to convert.
     * @returns Returns the converted number.
     * @example
     *
     * _.toFinite(3.2);
     * // => 3.2
     *
     * _.toFinite(Number.MIN_VALUE);
     * // => 5e-324
     *
     * _.toFinite(Infinity);
     * // => 1.7976931348623157e+308
     *
     * _.toFinite('3.2');
     * // => 3.2
     */
    (value: any) => number;

declare const toFinite: ToFinite;
export = toFinite;
