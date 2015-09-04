// Type definitions for Dojo v1.9
// Project: http://dojotoolkit.org
// Definitions by: Michael Van Sickle <https://github.com/vansimke>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module dojox {

    /**
     * Permalink: http://dojotoolkit.org/api/1.9/dojox/timing.html
     *
     * Deprecated.  Should require dojox/timing modules directly rather than trying to access them through
     * this module.
     * 
     */
    interface timing {
    }
    module timing {
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/timing/Sequence.html
         *
         * This class provides functionality to really sequentialize
         * function calls. You need to provide a list of functions and
         * some parameters for each (like: pauseBefore) and they will
         * be run one after another. This can be very useful for slideshows
         * or alike things.
         * This array will contain the sequence defines resolved, so that
         * ie. repeat:10 will result in 10 elements in the sequence, so
         * the repeat handling is easier and we don't need to handle that
         * many extra cases. Also the doneFunction, if given is added at the
         * end of the resolved-sequences.
         * 
         */
        class Sequence {
            constructor();
            /**
             * Run the passed sequence definition
             * 
             * @param defs The sequence of actions             
             * @param doneFunction               OptionalThe function to call when done             
             */
            go(defs: any[], doneFunction: Function): void;
            /**
             * Run the passed sequence definition
             * 
             * @param defs The sequence of actions             
             * @param doneFunction               OptionalThe function to call when done             
             */
            go(defs: any[], doneFunction: any[]): void;
            /**
             * This method just provides a hook from the outside, so that
             * an interrupted sequence can be continued.
             * 
             */
            goOn(): void;
            /**
             * Stop the currently running sequence.
             * This can only interrupt the sequence not the last function that
             * had been started. If the last function was i.e. a slideshow
             * that is handled inside a function that you have given as
             * one sequence item it cant be stopped, since it is not controlled
             * by this object here. In this case it would be smarter to
             * run the slideshow using a sequence object so you can also stop
             * it using this method.
             * 
             */
            stop(): void;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/timing/doLater.html
         *
         * Check if a parameter is ready, and if not,
         * "do later". doLater will ping the parameter
         * until it evaluates to something (truthy).
         * It thens calls the caller with original
         * arguments, using the supplied context or
         * window.
         * dojox.timing.doLater(conditional) is testing if the call
         * should be done later. So it returns
         * true if the param is false.
         * 
         * @param conditional Can be a property that eventually gets set, oran expression, method... anything that can beevaluated.     
         * @param context       OptionalThe namespace where the call originated.Defaults to global and anonymous functions     
         * @param interval       OptionalPoll time to check conditional in Milliseconds     
         */
        interface doLater { (conditional: any, context?: Object, interval?: number): void }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/timing/Streamer.html
         *
         * Streamer will take an input function that pushes N datapoints into a
         * queue, and will pass the next point in that queue out to an
         * output function at the passed interval; this way you can emulate
         * a constant buffered stream of data.
         * 
         * @param input the function executed when the internal queue reaches minimumSize     
         * @param output the function executed on internal tick     
         * @param interval the interval in ms at which the output function is fired.     
         * @param minimum the minimum number of elements in the internal queue.     
         * @param initialData     
         */
        interface Streamer { (input: Function, output: Function, interval: number, minimum: number, initialData: any[]): void }
        module _base {
        }

    }

}

declare module "dojox/timing" {
    var exp: dojox.timing
    export=exp;
}
declare module "dojox/timing/Sequence" {
    var exp: dojox.timing.Sequence
    export=exp;
}
declare module "dojox/timing/doLater" {
    var exp: dojox.timing.doLater
    export=exp;
}
declare module "dojox/timing/Streamer" {
    var exp: dojox.timing.Streamer
    export=exp;
}
