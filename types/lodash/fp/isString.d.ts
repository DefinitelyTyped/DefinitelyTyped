// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

type IsString =
    /**
     * Checks if value is classified as a String primitive or object.
     *
     * @param value The value to check.
     * @return Returns true if value is correctly classified, else false.
     */
    (value: any) => value is string;

declare const isString: IsString;
export = isString;
