// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

type Spread =
    /**
     * Creates a function that invokes func with the this binding of the created function and an array of arguments
     * much like Function#apply.
     *
     * Note: This method is based on the spread operator.
     *
     * @param func The function to spread arguments over.
     * @return Returns the new function.
     */
    <TResult>(func: (...args: any[]) => TResult) => (...args: any[]) => TResult;

declare const apply: Spread;
export = apply;
