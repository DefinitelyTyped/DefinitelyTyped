// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

type Attempt =
    /**
     * Attempts to invoke func, returning either the result or the caught error object. Any additional arguments
     * are provided to func when it’s invoked.
     *
     * @param func The function to attempt.
     * @return Returns the func result or error object.
     */
    <TResult>(func: (...args: any[]) => TResult) => TResult|Error;

declare const attempt: Attempt;
export = attempt;
