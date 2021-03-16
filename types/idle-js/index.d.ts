// Type definitions for idle-js 1.2
// Project: https://github.com/soixantecircuits/idle-js
// Definitions by: Jeff Peirson <https://github.com/jpeirson>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare class IdleJs {
    /**
     * Creates a new unstarted idle tracking instance.
     *
     * @param options Initial options
     * @throws
     */
    constructor(options?: IdleJs.Options);

    /**
     * Starts tracking idle state.
     *
     * @returns this instance for call chaining
     */
    start(): IdleJs;

    /**
     * Stops all tracking.
     *
     * @returns this instance for call chaining
     */
    stop(): IdleJs;

    /**
     * Reset visible and idle state.
     *
     * @param idle The new idle state, or undefined to use the existing state.
     * @param visible The new visibility state, or undefined to use the existing state.
     * @returns this instance for call chaining
     */
    reset(idle?: boolean, visible?: boolean): IdleJs;

    /**
     * Updates idle tracking options.
     */
    set(options?: IdleJs.Options): void;
}

declare namespace IdleJs {
    /**
     * Idle tracking options.
     */
    interface Options {
        /**
         * Idle time in ms. The default is 10000ms.
         */
        idle?: number;
        /**
         * Events that will trigger the idle resetter.
         */
        events?: string[];
        /**
         * Callback function to be executed after idle time.
         */
        onIdle?: () => void;
        /**
         * Callback function to be executed after back form idleness.
         */
        onActive?: () => void;
        /**
         * Callback function to be executed when window become hidden.
         */
        onHide?: () => void;
        /**
         * Callback function to be executed when window become visible.
         */
        onShow?: () => void;
        /**
         * Set it to false of you want to track only once.
         */
        keepTracking?: boolean;
        /**
         * Set it to true if you want to start in the idle state.
         */
        startAtIdle?: boolean;
        /**
         * Set it to true if you want `onIdle` to be raised each time the idle period elapses, not just on idle state changes;
         * i.e.; set to true for `setInterval()` behavior, otherwise for `setTimeout()` behavior.
         */
        recurIdleCall?: boolean;
    }
}

export default IdleJs;
