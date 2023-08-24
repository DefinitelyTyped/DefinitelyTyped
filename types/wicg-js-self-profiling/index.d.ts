// Type definitions for non-npm package JS Self-Profiling API API 2022.03
// Project: https://github.com/WICG/js-self-profiling, https://wicg.github.io/js-self-profiling/
// Definitions by: Tiger Oakes <https://github.com/NotWoods>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type ProfilerResource = string;

interface ProfilerEventMap {
    samplebufferfull: Event;
}

declare global {
    interface ProfilerTrace {
        resources: ProfilerResource[];
        frames: ProfilerFrame[];
        stacks: ProfilerStack[];
        samples: ProfilerSample[];
    }

    interface ProfilerSample {
        timestamp: number;
        stackId?: number;
    }

    interface ProfilerStack {
        parentId?: number;
        frameId: number;
    }

    interface ProfilerFrame {
        name: string;
        resourceId?: number;
        line?: string;
        column?: string;
    }

    interface ProfilerInitOptions {
        /**
         * The application's desired sample interval. Must be greater than or equal to 0.
         */
        sampleInterval: number;
        /**
         * The desired sample buffer size limit, in samples.
         */
        maxBufferSize: number;
    }

    class Profiler extends EventTarget {
        readonly sampleInterval: number;
        readonly stopped: boolean;

        constructor(options: ProfilerInitOptions);

        stop(): Promise<ProfilerTrace>;

        onsamplebufferfull: ((this: Profiler, ev: Event) => any) | null;
        addEventListener<K extends keyof ProfilerEventMap>(
            type: K,
            listener: (this: Profiler, ev: ProfilerEventMap[K]) => any,
            options?: boolean | AddEventListenerOptions,
        ): void;
        addEventListener(
            type: string,
            listener: EventListenerOrEventListenerObject,
            options?: boolean | AddEventListenerOptions,
        ): void;
    }
}

export {};
