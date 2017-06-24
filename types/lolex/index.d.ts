// Type definitions for lolex 1.5
// Project: https://github.com/sinonjs/lolex
// Definitions by: Wim Looman <https://github.com/Nemo157>, Josh Goldberg <https://github.com/joshuakgoldberg>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Timer object used in node.
 */
export interface NodeTimer {
    /**
     * Stub method call. Does nothing.
     */
    ref(): void;

    /**
     * Stub method call. Does nothing.
     */
    unref(): void;
}

/**
 * Timer identifier for clock scheduling.
 */
export type TimerId = number | NodeTimer;

/**
 * Lolex clock for a browser environment.
 */
type BrowserClock = LolexClock<number>;

/**
 * Lolex clock for a Node environment.
 */
type NodeClock = LolexClock<NodeTimer> & {
    /**
     * Mimicks process.hrtime().
     * 
     * @param prevTime   Previous system time to calculate time elapsed.
     * @returns High resolution real time as [seconds, nanoseconds].
     */
    hrtime(prevTime?: [number, number]): [number, number];
};

/**
 * Clock object created by lolex.
 */
type Clock = BrowserClock | NodeClock;

/**
 * Names of clock methods that may be faked by install.
 */
type FakeMethod = "setTimeout" | "clearTimeout" | "setImmediate" | "clearImmediate" | "setInterval" | "clearInterval" | "Date";

/**
 * Controls the flow of time.
 */
export interface LolexClock<TTimerId extends TimerId> {
    /**
     * Current clock time.
     */
    now: number;

    /**
     * Implements the Date object but using this clock to provide the correct time.
     */
    Date: typeof Date;

    /**
     * Schedules a callback to be fired once timeout milliseconds have ticked by.
     * 
     * @param callback   Callback to be fired.
     * @param timeout   How many ticks to wait to run the callback.
     * @returns Time identifier for cancellation.
     */
    setTimeout(callback: () => any, timeout: number): TTimerId;

    /**
     * Clears a timer, as long as it was created using setTimeout.
     * 
     * @param id   Timer ID or object.
     */
    clearTimeout(id: TTimerId): void;

    /**
     * Schedules a callback to be fired every time timeout milliseconds have ticked by.
     * 
     * @param callback   Callback to be fired.
     * @param timeout   How many ticks to wait between callbacks.
     * @returns Time identifier for cancellation.
     */
    setInterval(callback: () => any, timeout: number): TTimerId;

    /**
     * Clears a timer, as long as it was created using setInterval.
     * 
     * @param id   Timer ID or object.
     */
    clearInterval(id: TTimerId): void;

    /**
     * Schedules the callback to be fired once 0 milliseconds have ticked by.
     * 
     * @param callback   Callback to be fired.
     * @remarks You'll still have to call clock.tick() for the callback to fire.
     * @remarks If called during a tick the callback won't fire until 1 millisecond has ticked by.
     */
    setImmediate(callback: () => any): TTimerId;

    /**
     * Clears a timer, as long as it was created using setImmediate.
     * 
     * @param id   Timer ID or object.
     */
    clearImmediate(id: TTimerId): void;

    /**
     * Advances the clock to the the moment of the first scheduled timer, firing it.
     */
    next(): void;

    /**
     * Advance the clock, firing callbacks if necessary.
     * 
     * @param time   How many ticks to advance by.
     */
    tick(time: number | string): void;

    /**
     * Runs all pending timers until there are none remaining.
     * 
     * @remarks  If new timers are added while it is executing they will be run as well.
     */
    runAll(): void;

    /**
     * Takes note of the last scheduled timer when it is run, and advances the clock to
     * that time firing callbacks as necessary.
     */
    runToLast(): void;

    /**
     * Simulates a user changing the system clock.
     * 
     * @param now   New system time.
     * @remarks This affects the current time but it does not in itself cause timers to fire.
     */
    setSystemTime(now?: number | Date): void;

    /**
     * Restores the original methods on the context that was passed to lolex.install,
     * or the native timers if no context was given.
     */
    uninstall(): void;
}

/**
 * Creates a clock.
 * 
 * @param now   Current time for the clock.
 * @param loopLimit    Maximum number of timers that will be run when calling runAll()
 *                     before assuming that we have an infinite loop and throwing an error
 *                     (by default, 1000).
 * @type TClock   Type of clock to create.
 * @remarks The default epoch is 0.
 */
export declare function createClock<TClock extends Clock>(now?: number | Date, loopLimit?: number): TClock;

/**
 * Creates a clock and installs it globally.
 * 
 * @param now   Current time for the clock, as with lolex.createClock().
 * @param toFake   Names of methods that should be faked.
 * @type TClock   Type of clock to create.
 * @usage lolex.install(["setTimeout", "clearTimeout"]);
 */
export declare function install<TClock extends Clock>(now?: number | Date, toFake?: FakeMethod[]): TClock;

/**
 * Creates a clock and installs it onto the context object.
 * 
 * @param context   Context to install the clock onto.
 * @param now   Current time for the clock, as with lolex.createClock().
 * @param toFake   Names of methods that should be faked.
 * @type TClock   Type of clock to create.
 * @usage lolex.install(context, ["setTimeout", "clearTimeout"]);
 */
export declare function install<TClock extends Clock>(context?: any, now?: number | Date, toFake?: FakeMethod[]): TClock;
