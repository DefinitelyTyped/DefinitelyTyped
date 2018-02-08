// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

interface Partial {
    /**
    * Creates a function that, when called, invokes func with any additional partial arguments
    * prepended to those provided to the new function. This method is similar to _.bind except
    * it does not alter the this binding.
    * @param func The function to partially apply arguments to.
    * @param args Arguments to be partially applied.
    * @return The new partially applied function.
    **/
    (): Partial;
    /**
    * Creates a function that, when called, invokes func with any additional partial arguments
    * prepended to those provided to the new function. This method is similar to _.bind except
    * it does not alter the this binding.
    * @param func The function to partially apply arguments to.
    * @param args Arguments to be partially applied.
    * @return The new partially applied function.
    **/
    (args: ReadonlyArray<any>): Partial1x1;
    /**
    * Creates a function that, when called, invokes func with any additional partial arguments
    * prepended to those provided to the new function. This method is similar to _.bind except
    * it does not alter the this binding.
    * @param func The function to partially apply arguments to.
    * @param args Arguments to be partially applied.
    * @return The new partially applied function.
    **/
    (args: ReadonlyArray<any>, func: (...args: any[]) => any): (...args: any[]) => any;
}
interface Partial1x1 {
    /**
    * Creates a function that, when called, invokes func with any additional partial arguments
    * prepended to those provided to the new function. This method is similar to _.bind except
    * it does not alter the this binding.
    * @param func The function to partially apply arguments to.
    * @param args Arguments to be partially applied.
    * @return The new partially applied function.
    **/
    (): Partial1x1;
    /**
    * Creates a function that, when called, invokes func with any additional partial arguments
    * prepended to those provided to the new function. This method is similar to _.bind except
    * it does not alter the this binding.
    * @param func The function to partially apply arguments to.
    * @param args Arguments to be partially applied.
    * @return The new partially applied function.
    **/
    (func: (...args: any[]) => any): (...args: any[]) => any;
}

declare const partial: Partial;
declare namespace partial {}
export = partial;
