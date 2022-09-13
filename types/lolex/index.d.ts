// Type definitions for lolex 5.1
// Project: https://github.com/sinonjs/lolex
// Definitions by: Wim Looman <https://github.com/Nemo157>
//                 Rogier Schouten <https://github.com/rogierschouten>
//                 Yishai Zehavi <https://github.com/zyishai>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/**
 * Names of clock methods that may be faked by install.
 */
type FakeMethod =
    | 'setTimeout'
    | 'clearTimeout'
    | 'setImmediate'
    | 'clearImmediate'
    | 'setInterval'
    | 'clearInterval'
    | 'Date'
    | 'nextTick'
    | 'hrtime'
    | 'requestAnimationFrame'
    | 'cancelAnimationFrame'
    | 'requestIdleCallback'
    | 'cancelIdleCallback';

/**
 * Global methods avaliable to every clock and also as standalone methods (inside `timers` global object).
 */
export interface GlobalTimers<TTimerId extends TimerId> {
    /**
     * Schedules a callback to be fired once timeout milliseconds have ticked by.
     *
     * @param callback   Callback to be fired.
     * @param timeout   How many ticks to wait to run the callback.
     * @param args   Any extra arguments to pass to the callback.
     * @returns Time identifier for cancellation.
     */
    setTimeout: (callback: () => void, timeout: number, ...args: any[]) => TTimerId;

    /**
     * Clears a timer, as long as it was created using setTimeout.
     *
     * @param id   Timer ID or object.
     */
    clearTimeout: (id: TimerId) => void;

    /**
     * Schedules a callback to be fired every time timeout milliseconds have ticked by.
     *
     * @param callback   Callback to be fired.
     * @param timeout   How many ticks to wait between callbacks.
     * @param args   Any extra arguments to pass to the callback.
     * @returns Time identifier for cancellation.
     */
    setInterval: (callback: () => void, timeout: number, ...args: any[]) => TTimerId;

    /**
     * Clears a timer, as long as it was created using setInterval.
     *
     * @param id   Timer ID or object.
     */
    clearInterval: (id: TTimerId) => void;

    /**
     * Schedules the callback to be fired once 0 milliseconds have ticked by.
     *
     * @param callback   Callback to be fired.
     * @remarks You'll still have to call clock.tick() for the callback to fire.
     * @remarks If called during a tick the callback won't fire until 1 millisecond has ticked by.
     */
    setImmediate: (callback: () => void) => TTimerId;

    /**
     * Clears a timer, as long as it was created using setImmediate.
     *
     * @param id   Timer ID or object.
     */
    clearImmediate: (id: TTimerId) => void;

    /**
     * Implements the Date object but using this clock to provide the correct time.
     */
    Date: typeof Date;
}

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
 * Controls the flow of time.
 */
export interface LolexClock<TTimerId extends TimerId> extends GlobalTimers<TTimerId> {
    /**
     * Current clock time.
     */
    now: number;

    /**
     * Don't know what this prop is for, but it was included in the clocks that `createClock` or
     * `install` return (it is never used in the code, for now).
     */
    timeouts: {};

    /**
     * Maximum number of timers that will be run when calling runAll().
     */
    loopLimit: number;

    /**
     * Schedule callback to run in the next animation frame.
     *
     * @param callback   Callback to be fired.
     * @returns Request id.
     */
    requestAnimationFrame: (callback: (time: number) => void) => TTimerId;

    /**
     * Cancel animation frame request.
     *
     * @param id   The id returned from requestAnimationFrame method.
     */
    cancelAnimationFrame: (id: TTimerId) => void;

    /**
     * Queues the callback to be fired during idle periods to perform background and low priority work on the main event loop.
     *
     * @param callback   Callback to be fired.
     * @param timeout   The maximum number of ticks before the callback must be fired.
     * @remarks Callbacks which have a timeout option will be fired no later than time in milliseconds.
     */
    requestIdleCallback: (callback: () => void, timeout?: number) => TTimerId;

    /**
     * Clears a timer, as long as it was created using requestIdleCallback.
     *
     * @param id   Timer ID or object.
     */
    cancelIdleCallback: (id: TTimerId) => void;

    /**
     * Get the number of waiting timers.
     *
     * @returns number of waiting timers.
     */
    countTimers: () => number;

    /**
     * Advances the clock to the the moment of the first scheduled timer, firing it.
     */
    next: () => void;

    /**
     * Advances the clock to the the moment of the first scheduled timer, firing it.
     *
     * Also breaks the event loop, allowing any scheduled promise callbacks to execute _before_ running the timers.
     */
    nextAsync: () => Promise<void>;

    /**
     * Advance the clock, firing callbacks if necessary.
     *
     * @param time   How many ticks to advance by.
     */
    tick: (time: number | string) => void;

    /**
     * Advance the clock, firing callbacks if necessary.
     *
     * Also breaks the event loop, allowing any scheduled promise callbacks to execute _before_ running the timers.
     *
     * @param time   How many ticks to advance by.
     */
    tickAsync: (time: number | string) => Promise<void>;

    /**
     * Removes all timers and tick without firing them and restore now to its original value.
     */
    reset: () => void;

    /**
     * Runs all pending timers until there are none remaining.
     *
     * @remarks  If new timers are added while it is executing they will be run as well.
     */
    runAll: () => void;

    /**
     * Runs all pending timers until there are none remaining.
     *
     * Also breaks the event loop, allowing any scheduled promise callbacks to execute _before_ running the timers.
     *
     * @remarks  If new timers are added while it is executing they will be run as well.
     */
    runAllAsync: () => Promise<void>;

    /**
     * Advanced the clock to the next animation frame while firing all scheduled callbacks.
     */
    runToFrame: () => void;

    /**
     * Takes note of the last scheduled timer when it is run, and advances the clock to
     * that time firing callbacks as necessary.
     */
    runToLast: () => void;

    /**
     * Takes note of the last scheduled timer when it is run, and advances the clock to
     * that time firing callbacks as necessary.
     *
     * Also breaks the event loop, allowing any scheduled promise callbacks to execute _before_ running the timers.
     */
    runToLastAsync: () => Promise<void>;

    /**
     * Simulates a user changing the system clock.
     *
     * @param now   New system time.
     * @remarks This affects the current time but it does not in itself cause timers to fire.
     */
    setSystemTime: (now?: number | Date) => void;
}

/**
 * Lolex clock for a browser environment.
 */
type BrowserClock = LolexClock<number> & {
    /**
     * Mimics performance.now().
     */
    performance: {
        now: () => number;
    };
};

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

    /**
     * Mimics process.nextTick() explicitly dropping additional arguments.
     */
    queueMicrotask: (callback: () => void) => void;

    /**
     * Simulates process.nextTick().
     */
    nextTick: (callback: () => void) => void;

    /**
     * Run all pending microtasks scheduled with nextTick.
     */
    runMicrotasks: () => void;
};

/**
 * Clock object created by lolex.
 */
type Clock = BrowserClock | NodeClock;

/**
 * Additional methods that installed clock have.
 */
type InstalledMethods = {
    /**
     * Restores the original methods on the context that was passed to lolex.install,
     * or the native timers if no context was given.
     */
    uninstall: () => void;

    methods: FakeMethod[];
};

/**
 * Clock object created by calling `install();`.
 *
 * @type TClock   type of base clock (e.g BrowserClock).
 */
type InstalledClock<TClock extends Clock = Clock> = TClock & InstalledMethods;

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
export declare function createClock<TClock extends Clock = Clock>(now?: number | Date, loopLimit?: number): TClock;

export interface LolexInstallOpts {
    /**
     * Installs lolex onto the specified target context (default: global)
     */
    target?: any;

    /**
     * Installs lolex with the specified unix epoch (default: 0)
     */
    now?: number | Date | undefined;

    /**
     * An array with explicit function names to hijack. When not set, lolex will automatically fake all methods except nextTick
     * e.g., lolex.install({ toFake: ["setTimeout", "nextTick"]}) will fake only setTimeout and nextTick
     */
    toFake?: FakeMethod[] | undefined;

    /**
     * The maximum number of timers that will be run when calling runAll() (default: 1000)
     */
    loopLimit?: number | undefined;

    /**
     * Tells lolex to increment mocked time automatically based on the real system time shift (e.g. the mocked time will be incremented by
     * 20ms for every 20ms change in the real system time) (default: false)
     */
    shouldAdvanceTime?: boolean | undefined;

    /**
     * Relevant only when using with shouldAdvanceTime: true. increment mocked time by advanceTimeDelta ms every advanceTimeDelta ms change
     * in the real system time (default: 20)
     */
    advanceTimeDelta?: number | undefined;
}

/**
 * Creates a clock and installs it globally.
 *
 * @param now   Current time for the clock, as with lolex.createClock().
 * @param toFake   Names of methods that should be faked.
 * @type TClock   Type of clock to create.
 */
export declare function install<TClock extends Clock = Clock>(opts?: LolexInstallOpts): InstalledClock<TClock>;

export interface LolexWithContext {
    timers: GlobalTimers<TimerId>;
    createClock: <TClock extends Clock = Clock>(now?: number | Date, loopLimit?: number) => TClock;
    install: <TClock extends Clock = Clock>(opts?: LolexInstallOpts) => InstalledClock<TClock>;
    withGlobal: (global: Object) => LolexWithContext;
}

/**
 * Apply new context to lolex.
 *
 * @param global   New context to apply like `window` (in browsers) or `global` (in node).
 */
export declare function withGlobal(global: Object): LolexWithContext;

export declare const timers: GlobalTimers<TimerId>;
