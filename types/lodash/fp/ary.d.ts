import _ = require("../index");

declare namespace Lodash {
    interface Ary {
        /**
         * Creates a function that accepts up to n arguments ignoring any additional arguments.
         *
         * @param func The function to cap arguments for.
         * @param n The arity cap.
         * @returns Returns the new function.
         */
        (): Ary;
        /**
         * Creates a function that accepts up to n arguments ignoring any additional arguments.
         *
         * @param func The function to cap arguments for.
         * @param n The arity cap.
         * @returns Returns the new function.
         */
        (n: number): Ary1x1;
        /**
         * Creates a function that accepts up to n arguments ignoring any additional arguments.
         *
         * @param func The function to cap arguments for.
         * @param n The arity cap.
         * @returns Returns the new function.
         */
        (n: number, func: (...args: any[]) => any): (...args: any[]) => any;
    }
    interface Ary1x1 {
        /**
         * Creates a function that accepts up to n arguments ignoring any additional arguments.
         *
         * @param func The function to cap arguments for.
         * @param n The arity cap.
         * @returns Returns the new function.
         */
        (): Ary1x1;
        /**
         * Creates a function that accepts up to n arguments ignoring any additional arguments.
         *
         * @param func The function to cap arguments for.
         * @param n The arity cap.
         * @returns Returns the new function.
         */
        (func: (...args: any[]) => any): (...args: any[]) => any;
    }
}

declare const ary: Lodash.Ary;
export = ary;
