/// <reference types="node" />

export = GCProfiler;

/**
 * A cross-platform (tested on Linux, Windows, and OSX) profiler for the v8 garbage collector
 * running inside Node.js. It will emit an event after every GC cycle providing you information
 * about the duration and type of cycle.
 *
 * @example
 * import * as profiler from 'gc-profiler';
 * profiler.on('gc', (info) => {
 *   console.log(info);
 * });
 */
declare const GCProfiler: GCProfiler.GCProfiler;

declare namespace GCProfiler {
    interface GCProfiler extends NodeJS.EventEmitter {
        readonly GCCallbackFlags: {
            readonly kNoGCCallbackFlags: 0;
            readonly kGCCallbackFlagCompacted: 1;
            readonly kGCCallbackFlagConstructRetainedObjectInfos: 2;
            readonly kGCCallbackFlagForced: 4;
        };

        addListener(eventName: "gc", listener: (info: GCInfo) => void): this;
        addListener(eventName: string | symbol, listener: (...args: any[]) => void): this;
        on(eventName: "gc", listener: (info: GCInfo) => void): this;
        on(eventName: string | symbol, listener: (...args: any[]) => void): this;
        once(eventName: "gc", listener: (info: GCInfo) => void): this;
        once(eventName: string | symbol, listener: (...args: any[]) => void): this;
        removeListener(eventName: "gc", listener: (info: GCInfo) => void): this;
        removeListener(eventName: string | symbol, listener: (...args: any[]) => void): this;
        off(eventName: "gc", listener: (info: GCInfo) => void): this;
        off(eventName: string | symbol, listener: (...args: any[]) => void): this;
        emit(eventName: "gc", info: GCInfo): boolean;
        emit(eventName: string | symbol, ...args: any[]): boolean;
        prependListener(eventName: "gc", listener: (info: GCInfo) => void): this;
        prependListener(eventName: string | symbol, listener: (...args: any[]) => void): this;
        prependOnceListener(eventName: "gc", listener: (info: GCInfo) => void): this;
        prependOnceListener(eventName: string | symbol, listener: (...args: any[]) => void): this;
    }

    interface GCInfo {
        /**
         * The approximate start time of the GC cycle. This uses the c++ time library internally,
         * which only has one-second resolution.
         */
        date: Date;
        /**
         * The duration of the GC cycle in milliseconds.
         */
        duration: number;
        /**
         * The type of GC cycle.
         */
        type: GCType;
        /**
         * `true` for a forced cycle.
         */
        forced: boolean;
        /**
         * The raw GCCallbackFlags provided from v8.
         */
        flags: number;
    }

    type GCType = "Scavenge" | "MarkSweepCompact" | "IncrementalMarking" | "ProcessWeakCallbacks" | "All";
}
