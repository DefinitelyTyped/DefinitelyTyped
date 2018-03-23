// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

interface Throttle {
    /**
     * Creates a throttled function that only invokes func at most once per every wait milliseconds. The throttled
     * function comes with a cancel method to cancel delayed invocations and a flush method to immediately invoke
     * them. Provide an options object to indicate that func should be invoked on the leading and/or trailing edge
     * of the wait timeout. Subsequent calls to the throttled function return the result of the last func call.
     *
     * Note: If leading and trailing options are true, func is invoked on the trailing edge of the timeout only if
     * the the throttled function is invoked more than once during the wait timeout.
     *
     * @param func The function to throttle.
     * @param wait The number of milliseconds to throttle invocations to.
     * @param options The options object.
     * @param options.leading Specify invoking on the leading edge of the timeout.
     * @param options.trailing Specify invoking on the trailing edge of the timeout.
     * @return Returns the new throttled function.
     */
    (): Throttle;
    /**
     * Creates a throttled function that only invokes func at most once per every wait milliseconds. The throttled
     * function comes with a cancel method to cancel delayed invocations and a flush method to immediately invoke
     * them. Provide an options object to indicate that func should be invoked on the leading and/or trailing edge
     * of the wait timeout. Subsequent calls to the throttled function return the result of the last func call.
     *
     * Note: If leading and trailing options are true, func is invoked on the trailing edge of the timeout only if
     * the the throttled function is invoked more than once during the wait timeout.
     *
     * @param func The function to throttle.
     * @param wait The number of milliseconds to throttle invocations to.
     * @param options The options object.
     * @param options.leading Specify invoking on the leading edge of the timeout.
     * @param options.trailing Specify invoking on the trailing edge of the timeout.
     * @return Returns the new throttled function.
     */
    (wait: number): Throttle1x1;
    /**
     * Creates a throttled function that only invokes func at most once per every wait milliseconds. The throttled
     * function comes with a cancel method to cancel delayed invocations and a flush method to immediately invoke
     * them. Provide an options object to indicate that func should be invoked on the leading and/or trailing edge
     * of the wait timeout. Subsequent calls to the throttled function return the result of the last func call.
     *
     * Note: If leading and trailing options are true, func is invoked on the trailing edge of the timeout only if
     * the the throttled function is invoked more than once during the wait timeout.
     *
     * @param func The function to throttle.
     * @param wait The number of milliseconds to throttle invocations to.
     * @param options The options object.
     * @param options.leading Specify invoking on the leading edge of the timeout.
     * @param options.trailing Specify invoking on the trailing edge of the timeout.
     * @return Returns the new throttled function.
     */
    <T extends (...args: any[]) => any>(wait: number, func: T): T & _.Cancelable;
}
interface Throttle1x1 {
    /**
     * Creates a throttled function that only invokes func at most once per every wait milliseconds. The throttled
     * function comes with a cancel method to cancel delayed invocations and a flush method to immediately invoke
     * them. Provide an options object to indicate that func should be invoked on the leading and/or trailing edge
     * of the wait timeout. Subsequent calls to the throttled function return the result of the last func call.
     *
     * Note: If leading and trailing options are true, func is invoked on the trailing edge of the timeout only if
     * the the throttled function is invoked more than once during the wait timeout.
     *
     * @param func The function to throttle.
     * @param wait The number of milliseconds to throttle invocations to.
     * @param options The options object.
     * @param options.leading Specify invoking on the leading edge of the timeout.
     * @param options.trailing Specify invoking on the trailing edge of the timeout.
     * @return Returns the new throttled function.
     */
    (): Throttle1x1;
    /**
     * Creates a throttled function that only invokes func at most once per every wait milliseconds. The throttled
     * function comes with a cancel method to cancel delayed invocations and a flush method to immediately invoke
     * them. Provide an options object to indicate that func should be invoked on the leading and/or trailing edge
     * of the wait timeout. Subsequent calls to the throttled function return the result of the last func call.
     *
     * Note: If leading and trailing options are true, func is invoked on the trailing edge of the timeout only if
     * the the throttled function is invoked more than once during the wait timeout.
     *
     * @param func The function to throttle.
     * @param wait The number of milliseconds to throttle invocations to.
     * @param options The options object.
     * @param options.leading Specify invoking on the leading edge of the timeout.
     * @param options.trailing Specify invoking on the trailing edge of the timeout.
     * @return Returns the new throttled function.
     */
    <T extends (...args: any[]) => any>(func: T): T & _.Cancelable;
}

declare const throttle: Throttle;
export = throttle;
