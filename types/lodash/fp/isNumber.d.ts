// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

type IsNumber =
    /**
     * Checks if value is classified as a Number primitive or object.
     *
     * Note: To exclude Infinity, -Infinity, and NaN, which are classified as numbers, use the _.isFinite method.
     *
     * @param value The value to check.
     * @return Returns true if value is correctly classified, else false.
     */
    (value: any) => value is number;

declare const isNumber: IsNumber;
export = isNumber;
