// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

interface Times {
    /**
     * Invokes the iteratee function n times, returning an array of the results of each invocation. The iteratee
     * is invoked with one argument; (index).
     *
     * @param n The number of times to invoke iteratee.
     * @param iteratee The function invoked per iteration.
     * @return Returns the array of results.
     */
    (): Times;
    /**
     * Invokes the iteratee function n times, returning an array of the results of each invocation. The iteratee
     * is invoked with one argument; (index).
     *
     * @param n The number of times to invoke iteratee.
     * @param iteratee The function invoked per iteration.
     * @return Returns the array of results.
     */
    <TResult>(iteratee: (num: number) => TResult): Times1x1<TResult>;
    /**
     * Invokes the iteratee function n times, returning an array of the results of each invocation. The iteratee
     * is invoked with one argument; (index).
     *
     * @param n The number of times to invoke iteratee.
     * @param iteratee The function invoked per iteration.
     * @return Returns the array of results.
     */
    <TResult>(iteratee: (num: number) => TResult, n: number): TResult[];
}
interface Times1x1<TResult> {
    /**
     * Invokes the iteratee function n times, returning an array of the results of each invocation. The iteratee
     * is invoked with one argument; (index).
     *
     * @param n The number of times to invoke iteratee.
     * @param iteratee The function invoked per iteration.
     * @return Returns the array of results.
     */
    (): Times1x1<TResult>;
    /**
     * Invokes the iteratee function n times, returning an array of the results of each invocation. The iteratee
     * is invoked with one argument; (index).
     *
     * @param n The number of times to invoke iteratee.
     * @param iteratee The function invoked per iteration.
     * @return Returns the array of results.
     */
    (n: number): TResult[];
}

declare const times: Times;
declare namespace times {}
export = times;
