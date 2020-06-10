// Type definitions for wyt 1.3
// Project: https://github.com/maxkueng/wyt
// Definitions by: Emily Marigold Klassen <https://github.com/forivall>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

export = wyt;

/**
 * @param turnsPerInterval The number of turns that can be taken within a
 * certain interval.
 * @param interval The interval within which `turnsPerInterval` can be executed.
 *
 * @returns a function `(turns?: number) => Promise<number>` that can be called
 * before before requesting a rate-limited resource (i.e. wait for its turn) in
 * order to not exceed the limit.
 */
declare function wyt(turnsPerInterval: number, interval: number): wyt.WaitTurn;

declare namespace wyt {
    /**
     * @param turns (default=1) The number of turns that will be taken at the
     * same time. You can not await more turns at the same time as
     * `turnsPerInterval`.
     *
     * @returns a promise `Promise<number>` that will resolve with the time
     * waited as soon as another turn can be taken. If more than
     * `turnsPerInterval` are requested at the same time the promise will
     * reject.
     */

    type WaitTurn = (turns?: number) => Promise<number>;
}
