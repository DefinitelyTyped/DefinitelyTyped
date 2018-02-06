// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

declare namespace Lodash {
    interface Debounce {
        /**
         * Creates a debounced function that delays invoking func until after wait milliseconds have elapsed since
         * the last time the debounced function was invoked. The debounced function comes with a cancel method to
         * cancel delayed invocations and a flush method to immediately invoke them. Provide an options object to
         * indicate that func should be invoked on the leading and/or trailing edge of the wait timeout. Subsequent
         * calls to the debounced function return the result of the last func invocation.
         *
         * Note: If leading and trailing options are true, func is invoked on the trailing edge of the timeout only
         * if the the debounced function is invoked more than once during the wait timeout.
         *
         * See David Corbacho’s article for details over the differences between _.debounce and _.throttle.
         *
         * @param func The function to debounce.
         * @param wait The number of milliseconds to delay.
         * @param options The options object.
         * @param options.leading Specify invoking on the leading edge of the timeout.
         * @param options.maxWait The maximum time func is allowed to be delayed before it’s invoked.
         * @param options.trailing Specify invoking on the trailing edge of the timeout.
         * @return Returns the new debounced function.
         */
        (): Debounce;
        /**
         * Creates a debounced function that delays invoking func until after wait milliseconds have elapsed since
         * the last time the debounced function was invoked. The debounced function comes with a cancel method to
         * cancel delayed invocations and a flush method to immediately invoke them. Provide an options object to
         * indicate that func should be invoked on the leading and/or trailing edge of the wait timeout. Subsequent
         * calls to the debounced function return the result of the last func invocation.
         *
         * Note: If leading and trailing options are true, func is invoked on the trailing edge of the timeout only
         * if the the debounced function is invoked more than once during the wait timeout.
         *
         * See David Corbacho’s article for details over the differences between _.debounce and _.throttle.
         *
         * @param func The function to debounce.
         * @param wait The number of milliseconds to delay.
         * @param options The options object.
         * @param options.leading Specify invoking on the leading edge of the timeout.
         * @param options.maxWait The maximum time func is allowed to be delayed before it’s invoked.
         * @param options.trailing Specify invoking on the trailing edge of the timeout.
         * @return Returns the new debounced function.
         */
        (wait: number): Debounce1x1;
        /**
         * Creates a debounced function that delays invoking func until after wait milliseconds have elapsed since
         * the last time the debounced function was invoked. The debounced function comes with a cancel method to
         * cancel delayed invocations and a flush method to immediately invoke them. Provide an options object to
         * indicate that func should be invoked on the leading and/or trailing edge of the wait timeout. Subsequent
         * calls to the debounced function return the result of the last func invocation.
         *
         * Note: If leading and trailing options are true, func is invoked on the trailing edge of the timeout only
         * if the the debounced function is invoked more than once during the wait timeout.
         *
         * See David Corbacho’s article for details over the differences between _.debounce and _.throttle.
         *
         * @param func The function to debounce.
         * @param wait The number of milliseconds to delay.
         * @param options The options object.
         * @param options.leading Specify invoking on the leading edge of the timeout.
         * @param options.maxWait The maximum time func is allowed to be delayed before it’s invoked.
         * @param options.trailing Specify invoking on the trailing edge of the timeout.
         * @return Returns the new debounced function.
         */
        <T extends (...args: any[]) => any>(wait: number, func: T): T & _.Cancelable;
    }
    interface Debounce1x1 {
        /**
         * Creates a debounced function that delays invoking func until after wait milliseconds have elapsed since
         * the last time the debounced function was invoked. The debounced function comes with a cancel method to
         * cancel delayed invocations and a flush method to immediately invoke them. Provide an options object to
         * indicate that func should be invoked on the leading and/or trailing edge of the wait timeout. Subsequent
         * calls to the debounced function return the result of the last func invocation.
         *
         * Note: If leading and trailing options are true, func is invoked on the trailing edge of the timeout only
         * if the the debounced function is invoked more than once during the wait timeout.
         *
         * See David Corbacho’s article for details over the differences between _.debounce and _.throttle.
         *
         * @param func The function to debounce.
         * @param wait The number of milliseconds to delay.
         * @param options The options object.
         * @param options.leading Specify invoking on the leading edge of the timeout.
         * @param options.maxWait The maximum time func is allowed to be delayed before it’s invoked.
         * @param options.trailing Specify invoking on the trailing edge of the timeout.
         * @return Returns the new debounced function.
         */
        (): Debounce1x1;
        /**
         * Creates a debounced function that delays invoking func until after wait milliseconds have elapsed since
         * the last time the debounced function was invoked. The debounced function comes with a cancel method to
         * cancel delayed invocations and a flush method to immediately invoke them. Provide an options object to
         * indicate that func should be invoked on the leading and/or trailing edge of the wait timeout. Subsequent
         * calls to the debounced function return the result of the last func invocation.
         *
         * Note: If leading and trailing options are true, func is invoked on the trailing edge of the timeout only
         * if the the debounced function is invoked more than once during the wait timeout.
         *
         * See David Corbacho’s article for details over the differences between _.debounce and _.throttle.
         *
         * @param func The function to debounce.
         * @param wait The number of milliseconds to delay.
         * @param options The options object.
         * @param options.leading Specify invoking on the leading edge of the timeout.
         * @param options.maxWait The maximum time func is allowed to be delayed before it’s invoked.
         * @param options.trailing Specify invoking on the trailing edge of the timeout.
         * @return Returns the new debounced function.
         */
        <T extends (...args: any[]) => any>(func: T): T & _.Cancelable;
    }
}

declare const debounce: Lodash.Debounce;
export = debounce;
