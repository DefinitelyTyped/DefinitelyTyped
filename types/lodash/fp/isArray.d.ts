// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

interface IsArray {
    /**
     * Checks if value is classified as an Array object.
     * @param value The value to check.
     *
     * @return Returns true if value is correctly classified, else false.
     */
    (value: any): value is any[];
    /**
     * Checks if value is classified as an Array object.
     * @param value The value to check.
     *
     * @return Returns true if value is correctly classified, else false.
     */
    <T>(value: any): value is any[];
}

declare const isArray: IsArray;
declare namespace isArray {}
export = isArray;
