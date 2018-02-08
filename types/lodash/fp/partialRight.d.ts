// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

interface PartialRight {
    /**
    * This method is like _.partial except that partial arguments are appended to those provided
    * to the new function.
    * @param func The function to partially apply arguments to.
    * @param args Arguments to be partially applied.
    * @return The new partially applied function.
    **/
    (): PartialRight;
    /**
    * This method is like _.partial except that partial arguments are appended to those provided
    * to the new function.
    * @param func The function to partially apply arguments to.
    * @param args Arguments to be partially applied.
    * @return The new partially applied function.
    **/
    (args: ReadonlyArray<any>): PartialRight1x1;
    /**
    * This method is like _.partial except that partial arguments are appended to those provided
    * to the new function.
    * @param func The function to partially apply arguments to.
    * @param args Arguments to be partially applied.
    * @return The new partially applied function.
    **/
    (args: ReadonlyArray<any>, func: (...args: any[]) => any): (...args: any[]) => any;
}
interface PartialRight1x1 {
    /**
    * This method is like _.partial except that partial arguments are appended to those provided
    * to the new function.
    * @param func The function to partially apply arguments to.
    * @param args Arguments to be partially applied.
    * @return The new partially applied function.
    **/
    (): PartialRight1x1;
    /**
    * This method is like _.partial except that partial arguments are appended to those provided
    * to the new function.
    * @param func The function to partially apply arguments to.
    * @param args Arguments to be partially applied.
    * @return The new partially applied function.
    **/
    (func: (...args: any[]) => any): (...args: any[]) => any;
}

declare const partialRight: PartialRight;
declare namespace partialRight {}
export = partialRight;
