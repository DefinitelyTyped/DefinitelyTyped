import _ = require("../index");

declare namespace Lodash {
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
        (args: any[]): PartialRight1x1;
        /**
        * This method is like _.partial except that partial arguments are appended to those provided
        * to the new function.
        * @param func The function to partially apply arguments to.
        * @param args Arguments to be partially applied.
        * @return The new partially applied function.
        **/
        (args: any[], func: (...args: any[]) => any): (...args: any[]) => any;
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
}

declare const partialRight: Lodash.PartialRight;
export = partialRight;
