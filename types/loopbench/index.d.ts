// Type definitions for loopbench 1.2
// Project: https://github.com/mcollina/loopbench#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { EventEmitter } from 'events';

export = loopbench;

/**
 * Creates a new instance of loopbench.
 */
declare function loopbench(options?: loopbench.Options): loopbench.LoopBench;

declare namespace loopbench {
    interface Options {
        /**
         * The interval at which the eventLoop should be sampled, defaults to `5`.
         */
        sampleInterval?: number;
        /**
         * The maximum amount of delay that is tolerated before `overLimit` becomes true,
         * and the `load` event is emitted, defaults to `42`.
         */
        limit?: number;
    }

    /**
     * Events:
     * - `load`, emitted when `instance.delay > instance.limit`
     * - `unload`, emitted when `overLimit` goes from `true` and `false`
     */
    interface LoopBench extends EventEmitter {
        /**
         * The delay in milliseconds (and fractions) from the expected run. It might be negative (in older nodes).
         */
        readonly delay: number;

        /**
         * The maximum amount of delay that is tolerated before `overLimit` becomes true,
         * and the `load` event is emitted.
         */
        readonly limit: number;

        /**
         * Is `true` if the `instance.delay > instance.limit`.
         */
        readonly overLimit: boolean;

        /**
         * Stops the sampling.
         */
        stop(): void;

        addListener(event: 'load' | 'unload', listener: () => void): this;
        on(event: 'load' | 'unload', listener: () => void): this;
        once(event: 'load' | 'unload', listener: () => void): this;
        removeListener(event: 'load' | 'unload', listener: () => void): this;
        off(event: 'load' | 'unload', listener: () => void): this;
        removeAllListeners(event?: 'load' | 'unload'): this;
        listeners(event: 'load' | 'unload'): Array<() => void>;
        rawListeners(event: 'load' | 'unload'): Array<() => void>;
        emit(event: 'load' | 'unload'): boolean;
        listenerCount(type: 'load' | 'unload'): number;
        prependListener(event: 'load' | 'unload', listener: () => void): this;
        prependOnceListener(event: 'load' | 'unload', listener: () => void): this;
        eventNames(): Array<'load' | 'unload'>;
    }
}
