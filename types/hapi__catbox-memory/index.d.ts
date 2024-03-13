import { ClientApi, ClientOptions } from "@hapi/catbox";

interface Engine<T> extends ClientApi<T> {}

// tslint:disable-next-line:no-unnecessary-class
declare class Engine<T> implements ClientApi<T> {
    constructor(options?: Engine.Options);
}

declare namespace Engine {
    interface Options extends ClientOptions {
        /**
         * Sets an upper limit on the number of bytes that can be stored in the cache.
         * Once this limit is reached no additional items will be added to the cache until some expire.
         * The utilized memory calculation is a rough approximation and must not be relied on.
         * @default 104857600 (100MB).
         */
        maxByteSize?: number | undefined;
        /**
         * The minimum number of milliseconds in between each cache cleanup.
         * @default 1000 (1 second)
         */
        minCleanupIntervalMsec?: number | undefined;
        /**
         * by default, buffers stored in the cache with allowMixedContent set to true are copied when they are set but not when they are retrieved.
         * This means a change to the buffer returned by a get() will change the value in the cache. To prevent this,
         * set cloneBuffersOnGet to true to always return a copy of the cached buffer.
         * @default false
         */
        cloneBuffersOnGet?: boolean | undefined;
    }
}

export { Engine };
