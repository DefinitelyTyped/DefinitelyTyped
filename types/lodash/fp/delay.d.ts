// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

interface Delay {
    /**
     * Invokes func after wait milliseconds. Any additional arguments are provided to func when it’s invoked.
     *
     * @param func The function to delay.
     * @param wait The number of milliseconds to delay invocation.
     * @param args The arguments to invoke the function with.
     * @return Returns the timer id.
     */
    (): Delay;
    /**
     * Invokes func after wait milliseconds. Any additional arguments are provided to func when it’s invoked.
     *
     * @param func The function to delay.
     * @param wait The number of milliseconds to delay invocation.
     * @param args The arguments to invoke the function with.
     * @return Returns the timer id.
     */
    (wait: number): Delay1x1;
    /**
     * Invokes func after wait milliseconds. Any additional arguments are provided to func when it’s invoked.
     *
     * @param func The function to delay.
     * @param wait The number of milliseconds to delay invocation.
     * @param args The arguments to invoke the function with.
     * @return Returns the timer id.
     */
    (wait: number, func: (...args: any[]) => any): number;
}
interface Delay1x1 {
    /**
     * Invokes func after wait milliseconds. Any additional arguments are provided to func when it’s invoked.
     *
     * @param func The function to delay.
     * @param wait The number of milliseconds to delay invocation.
     * @param args The arguments to invoke the function with.
     * @return Returns the timer id.
     */
    (): Delay1x1;
    /**
     * Invokes func after wait milliseconds. Any additional arguments are provided to func when it’s invoked.
     *
     * @param func The function to delay.
     * @param wait The number of milliseconds to delay invocation.
     * @param args The arguments to invoke the function with.
     * @return Returns the timer id.
     */
    (func: (...args: any[]) => any): number;
}

declare const delay: Delay;
declare namespace delay {}
export = delay;
