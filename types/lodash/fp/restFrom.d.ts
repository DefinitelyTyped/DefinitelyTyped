import _ = require("../index");

declare namespace Lodash {
    interface Rest {
        /**
         * Creates a function that invokes func with the this binding of the created function and arguments from start
         * and beyond provided as an array.
         *
         * Note: This method is based on the rest parameter.
         *
         * @param func The function to apply a rest parameter to.
         * @param start The start position of the rest parameter.
         * @return Returns the new function.
         */
        (): Rest;
        /**
         * Creates a function that invokes func with the this binding of the created function and arguments from start
         * and beyond provided as an array.
         *
         * Note: This method is based on the rest parameter.
         *
         * @param func The function to apply a rest parameter to.
         * @param start The start position of the rest parameter.
         * @return Returns the new function.
         */
        (start: number): Rest1x1;
        /**
         * Creates a function that invokes func with the this binding of the created function and arguments from start
         * and beyond provided as an array.
         *
         * Note: This method is based on the rest parameter.
         *
         * @param func The function to apply a rest parameter to.
         * @param start The start position of the rest parameter.
         * @return Returns the new function.
         */
        (start: number, func: (...args: any[]) => any): (...args: any[]) => any;
    }
    interface Rest1x1 {
        /**
         * Creates a function that invokes func with the this binding of the created function and arguments from start
         * and beyond provided as an array.
         *
         * Note: This method is based on the rest parameter.
         *
         * @param func The function to apply a rest parameter to.
         * @param start The start position of the rest parameter.
         * @return Returns the new function.
         */
        (): Rest1x1;
        /**
         * Creates a function that invokes func with the this binding of the created function and arguments from start
         * and beyond provided as an array.
         *
         * Note: This method is based on the rest parameter.
         *
         * @param func The function to apply a rest parameter to.
         * @param start The start position of the rest parameter.
         * @return Returns the new function.
         */
        (func: (...args: any[]) => any): (...args: any[]) => any;
    }
}

declare const restFrom: Lodash.Rest;
export = restFrom;
