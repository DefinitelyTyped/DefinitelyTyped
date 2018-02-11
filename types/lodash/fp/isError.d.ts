// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

type IsError =
    /**
     * Checks if value is an Error, EvalError, RangeError, ReferenceError, SyntaxError, TypeError, or URIError
     * object.
     *
     * @param value The value to check.
     * @return Returns true if value is an error object, else false.
     */
    (value: any) => value is Error;

declare const isError: IsError;
export = isError;
