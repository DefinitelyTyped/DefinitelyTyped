// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

declare namespace Lodash {
    interface Defer {
        /**
         * Defers invoking the func until the current call stack has cleared. Any additional arguments are provided to
         * func when it’s invoked.
         *
         * @param func The function to defer.
         * @param args The arguments to invoke the function with.
         * @return Returns the timer id.
         */
        (): Defer;
        /**
         * Defers invoking the func until the current call stack has cleared. Any additional arguments are provided to
         * func when it’s invoked.
         *
         * @param func The function to defer.
         * @param args The arguments to invoke the function with.
         * @return Returns the timer id.
         */
        (func: (...args: any[]) => any): Defer1x1;
        /**
         * Defers invoking the func until the current call stack has cleared. Any additional arguments are provided to
         * func when it’s invoked.
         *
         * @param func The function to defer.
         * @param args The arguments to invoke the function with.
         * @return Returns the timer id.
         */
        (func: (...args: any[]) => any, args: any): Defer1x2;
        /**
         * Defers invoking the func until the current call stack has cleared. Any additional arguments are provided to
         * func when it’s invoked.
         *
         * @param func The function to defer.
         * @param args The arguments to invoke the function with.
         * @return Returns the timer id.
         */
        (func: (...args: any[]) => any, args: any, args2: any): Defer1x3;
        /**
         * Defers invoking the func until the current call stack has cleared. Any additional arguments are provided to
         * func when it’s invoked.
         *
         * @param func The function to defer.
         * @param args The arguments to invoke the function with.
         * @return Returns the timer id.
         */
        (func: (...args: any[]) => any, args: any, args2: any, args3: any): number;
    }
    interface Defer1x1 {
        /**
         * Defers invoking the func until the current call stack has cleared. Any additional arguments are provided to
         * func when it’s invoked.
         *
         * @param func The function to defer.
         * @param args The arguments to invoke the function with.
         * @return Returns the timer id.
         */
        (): Defer1x1;
        /**
         * Defers invoking the func until the current call stack has cleared. Any additional arguments are provided to
         * func when it’s invoked.
         *
         * @param func The function to defer.
         * @param args The arguments to invoke the function with.
         * @return Returns the timer id.
         */
        (args: any): Defer1x2;
        /**
         * Defers invoking the func until the current call stack has cleared. Any additional arguments are provided to
         * func when it’s invoked.
         *
         * @param func The function to defer.
         * @param args The arguments to invoke the function with.
         * @return Returns the timer id.
         */
        (args: any, args2: any): Defer1x3;
        /**
         * Defers invoking the func until the current call stack has cleared. Any additional arguments are provided to
         * func when it’s invoked.
         *
         * @param func The function to defer.
         * @param args The arguments to invoke the function with.
         * @return Returns the timer id.
         */
        (args: any, args2: any, args3: any): number;
    }
    interface Defer1x2 {
        /**
         * Defers invoking the func until the current call stack has cleared. Any additional arguments are provided to
         * func when it’s invoked.
         *
         * @param func The function to defer.
         * @param args The arguments to invoke the function with.
         * @return Returns the timer id.
         */
        (): Defer1x2;
        /**
         * Defers invoking the func until the current call stack has cleared. Any additional arguments are provided to
         * func when it’s invoked.
         *
         * @param func The function to defer.
         * @param args The arguments to invoke the function with.
         * @return Returns the timer id.
         */
        (args2: any): Defer1x3;
        /**
         * Defers invoking the func until the current call stack has cleared. Any additional arguments are provided to
         * func when it’s invoked.
         *
         * @param func The function to defer.
         * @param args The arguments to invoke the function with.
         * @return Returns the timer id.
         */
        (args2: any, args3: any): number;
    }
    interface Defer1x3 {
        /**
         * Defers invoking the func until the current call stack has cleared. Any additional arguments are provided to
         * func when it’s invoked.
         *
         * @param func The function to defer.
         * @param args The arguments to invoke the function with.
         * @return Returns the timer id.
         */
        (): Defer1x3;
        /**
         * Defers invoking the func until the current call stack has cleared. Any additional arguments are provided to
         * func when it’s invoked.
         *
         * @param func The function to defer.
         * @param args The arguments to invoke the function with.
         * @return Returns the timer id.
         */
        (args3: any): number;
    }
}

declare const defer: Lodash.Defer;
export = defer;
