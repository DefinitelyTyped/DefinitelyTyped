// Type definitions for non-npm package Node.js 12.19
// Project: http://nodejs.org/
// Definitions by: Microsoft TypeScript <https://github.com/Microsoft>
//                 DefinitelyTyped <https://github.com/DefinitelyTyped>
//                 Alberto Schiabel <https://github.com/jkomyno>
//                 Alexander T. <https://github.com/a-tarasyuk>
//                 Alvis HT Tang <https://github.com/alvis>
//                 Andrew Makarov <https://github.com/r3nya>
//                 Benjamin Toueg <https://github.com/btoueg>
//                 Bruno Scheufler <https://github.com/brunoscheufler>
//                 Chigozirim C. <https://github.com/smac89>
//                 David Junger <https://github.com/touffy>
//                 Deividas Bakanas <https://github.com/DeividasBakanas>
//                 Eugene Y. Q. Shen <https://github.com/eyqs>
//                 Flarna <https://github.com/Flarna>
//                 Hannes Magnusson <https://github.com/Hannes-Magnusson-CK>
//                 Hoàng Văn Khải <https://github.com/KSXGitHub>
//                 Huw <https://github.com/hoo29>
//                 Kelvin Jin <https://github.com/kjin>
//                 Klaus Meinhardt <https://github.com/ajafff>
//                 Lishude <https://github.com/islishude>
//                 Mariusz Wiktorczyk <https://github.com/mwiktorczyk>
//                 Mohsen Azimi <https://github.com/mohsen1>
//                 Nicolas Even <https://github.com/n-e>
//                 Nikita Galkin <https://github.com/galkin>
//                 Parambir Singh <https://github.com/parambirs>
//                 Sebastian Silbermann <https://github.com/eps1lon>
//                 Simon Schick <https://github.com/SimonSchick>
//                 Thomas den Hollander <https://github.com/ThomasdenH>
//                 Wilco Bakker <https://github.com/WilcoBakker>
//                 wwwy3y3 <https://github.com/wwwy3y3>
//                 Zane Hannan AU <https://github.com/ZaneHannanAU>
//                 Samuel Ainsworth <https://github.com/samuela>
//                 Kyle Uehlein <https://github.com/kuehlein>
//                 Jordi Oliveras Rovira <https://github.com/j-oliveras>
//                 Thanik Bhongbhibhat <https://github.com/bhongy>
//                 Marcin Kopacz <https://github.com/chyzwar>
//                 Trivikram Kamat <https://github.com/trivikr>
//                 Minh Son Nguyen <https://github.com/nguymin4>
//                 Junxiao Shi <https://github.com/yoursunny>
//                 Ilia Baryshnikov <https://github.com/qwelias>
//                 ExE Boss <https://github.com/ExE-Boss>
//                 Jason Kwok <https://github.com/JasonHK>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { AsyncResource } from 'async_hooks';

export {};

export interface PerformanceEntry {
    /**
     * The total number of milliseconds elapsed for this entry.
     * This value will not be meaningful for all Performance Entry types.
     */
    readonly duration: number;

    /**
     * The name of the performance entry.
     */
    readonly name: string;

    /**
     * The high resolution millisecond timestamp marking the starting time of the Performance Entry.
     */
    readonly startTime: number;

    /**
     * The type of the performance entry.
     * Currently it may be one of: 'node', 'mark', 'measure', 'gc', or 'function'.
     */
    readonly entryType: string;

    /**
     * When performanceEntry.entryType is equal to 'gc', the performance.kind property identifies
     * the type of garbage collection operation that occurred.
     * The value may be one of perf_hooks.constants.
     */
    readonly kind?: number;
}

export interface PerformanceNodeTiming extends PerformanceEntry {
    /**
     * The high resolution millisecond timestamp at which the Node.js process completed bootstrap.
     * If bootstrapping has not yet finished, the property has the value of -1.
     */
    readonly bootstrapComplete: number;

    /**
     * The high resolution millisecond timestamp at which the Node.js process completed bootstrapping.
     * If bootstrapping has not yet finished, the property has the value of -1.
     */
    readonly environment: number;

    /**
     * The high resolution millisecond timestamp at which the Node.js environment was initialized.
     */
    readonly idleTime: number;

    /**
     * The high resolution millisecond timestamp at which the Node.js event loop exited.
     * If the event loop has not yet exited, the property has the value of -1.
     * It can only have a value of not -1 in a handler of the 'exit' event.
     */
    readonly loopExit: number;

    /**
     * The high resolution millisecond timestamp at which the Node.js event loop started.
     * If the event loop has not yet started (e.g., in the first tick of the main script), the property has the value of -1.
     */
    readonly loopStart: number;

    /**
     * The high resolution millisecond timestamp at which the Node.js process was initialized.
     */
    readonly nodeStart: number;

    /**
     * The high resolution millisecond timestamp at which the V8 platform was initialized.
     */
    readonly v8Start: number;
}

export interface EventLoopUtilization {
    idle: number;
    active: number;
    utilization: number;
}

export interface Performance {
    /**
     * If name is not provided, removes all PerformanceMark objects from the Performance Timeline.
     * If name is provided, removes only the named mark.
     * @param name
     */
    clearMarks(name?: string): void;

    /**
     * Creates a new PerformanceMark entry in the Performance Timeline.
     * A PerformanceMark is a subclass of PerformanceEntry whose performanceEntry.entryType is always 'mark',
     * and whose performanceEntry.duration is always 0.
     * Performance marks are used to mark specific significant moments in the Performance Timeline.
     * @param name
     */
    mark(name?: string): void;

    /**
     * Creates a new PerformanceMeasure entry in the Performance Timeline.
     * A PerformanceMeasure is a subclass of PerformanceEntry whose performanceEntry.entryType is always 'measure',
     * and whose performanceEntry.duration measures the number of milliseconds elapsed since startMark and endMark.
     *
     * The startMark argument may identify any existing PerformanceMark in the the Performance Timeline, or may identify
     * any of the timestamp properties provided by the PerformanceNodeTiming class. If the named startMark does not exist,
     * then startMark is set to timeOrigin by default.
     *
     * The endMark argument must identify any existing PerformanceMark in the the Performance Timeline or any of the timestamp
     * properties provided by the PerformanceNodeTiming class. If the named endMark does not exist, an error will be thrown.
     * @param name
     * @param startMark
     * @param endMark
     */
    measure(name: string, startMark: string, endMark: string): void;

    /**
     * An instance of the PerformanceNodeTiming class that provides performance metrics for specific Node.js operational milestones.
     */
    readonly nodeTiming: PerformanceNodeTiming;

    /**
     * @return the current high resolution millisecond timestamp
     */
    now(): number;

    /**
     * The timeOrigin specifies the high resolution millisecond timestamp from which all performance metric durations are measured.
     */
    readonly timeOrigin: number;

    /**
     * Wraps a function within a new function that measures the running time of the wrapped function.
     * A PerformanceObserver must be subscribed to the 'function' event type in order for the timing details to be accessed.
     * @param fn
     */
    timerify<T extends (...optionalParams: any[]) => any>(fn: T): T;

    /**
     * eventLoopUtilization is similar to CPU utilization except that it is calculated using high precision wall-clock time.
     * It represents the percentage of time the event loop has spent outside the event loop's event provider (e.g. epoll_wait).
     * No other CPU idle time is taken into consideration.
     *
     * @param util1 The result of a previous call to eventLoopUtilization()
     * @param util2 The result of a previous call to eventLoopUtilization() prior to util1
     */
    eventLoopUtilization(util1?: EventLoopUtilization, util2?: EventLoopUtilization): EventLoopUtilization;
}

export interface PerformanceObserverEntryList {
    /**
     * @return a list of PerformanceEntry objects in chronological order with respect to performanceEntry.startTime.
     */
    getEntries(): PerformanceEntry[];

    /**
     * @return a list of PerformanceEntry objects in chronological order with respect to performanceEntry.startTime
     * whose performanceEntry.name is equal to name, and optionally, whose performanceEntry.entryType is equal to type.
     */
    getEntriesByName(name: string, type?: string): PerformanceEntry[];

    /**
     * @return Returns a list of PerformanceEntry objects in chronological order with respect to performanceEntry.startTime
     * whose performanceEntry.entryType is equal to type.
     */
    getEntriesByType(type: string): PerformanceEntry[];
}

export type PerformanceObserverCallback = (list: PerformanceObserverEntryList, observer: PerformanceObserver) => void;

export class PerformanceObserver extends AsyncResource {
    constructor(callback: PerformanceObserverCallback);

    /**
     * Disconnects the PerformanceObserver instance from all notifications.
     */
    disconnect(): void;

    /**
     * Subscribes the PerformanceObserver instance to notifications of new PerformanceEntry instances identified by options.entryTypes.
     * When options.buffered is false, the callback will be invoked once for every PerformanceEntry instance.
     * Property buffered defaults to false.
     * @param options
     */
    observe(options: { entryTypes: ReadonlyArray<string>, buffered?: boolean }): void;
}

export namespace constants {
    const NODE_PERFORMANCE_GC_MAJOR: number;
    const NODE_PERFORMANCE_GC_MINOR: number;
    const NODE_PERFORMANCE_GC_INCREMENTAL: number;
    const NODE_PERFORMANCE_GC_WEAKCB: number;
}

export const performance: Performance;

export interface EventLoopMonitorOptions {
    /**
     * The sampling rate in milliseconds.
     * Must be greater than zero.
     * @default 10
     */
    resolution?: number;
}

export interface EventLoopDelayMonitor {
    /**
     * Enables the event loop delay sample timer. Returns `true` if the timer was started, `false` if it was already started.
     */
    enable(): boolean;
    /**
     * Disables the event loop delay sample timer. Returns `true` if the timer was stopped, `false` if it was already stopped.
     */
    disable(): boolean;

    /**
     * Resets the collected histogram data.
     */
    reset(): void;

    /**
     * Returns the value at the given percentile.
     * @param percentile A percentile value between 1 and 100.
     */
    percentile(percentile: number): number;

    /**
     * A `Map` object detailing the accumulated percentile distribution.
     */
    readonly percentiles: Map<number, number>;

    /**
     * The number of times the event loop delay exceeded the maximum 1 hour eventloop delay threshold.
     */
    readonly exceeds: number;

    /**
     * The minimum recorded event loop delay.
     */
    readonly min: number;

    /**
     * The maximum recorded event loop delay.
     */
    readonly max: number;

    /**
     * The mean of the recorded event loop delays.
     */
    readonly mean: number;

    /**
     * The standard deviation of the recorded event loop delays.
     */
    readonly stddev: number;
}

export function monitorEventLoopDelay(options?: EventLoopMonitorOptions): EventLoopDelayMonitor;
