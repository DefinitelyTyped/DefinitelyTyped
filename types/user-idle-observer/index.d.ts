// Type definitions for user-idle-observer 1.0
// Project: https://github.com/vladagurets/user-idle-observer#readme
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace userIDLEObserver;

/**
 * This lib allows you to track user inactivity time.
 */
declare function userIDLEObserver(opts?: userIDLEObserver.Options): userIDLEObserver.UserIDLEObserver;

declare namespace userIDLEObserver {
    /**
     * observer options
     */
    interface Options {
        /**
         * fire callback on user inactivity time in ms
         * @default 3_000
         */
        idleTime?: number;
        /**
         * callback that will triger after opts.idleTime of user's IDLE
         * @default console.log
         */
        cb?: Callback;
        /**
         * @default ["mousemove", "mousedown", "keydown", "scroll", "touchstart", "resize", "visibilitychange"]
         */
        listeners?: Array<keyof WindowEventMap>;
    }

    interface UserIDLEObserver {
        /**
         * destroy observer instance
         */
        destroy(): void;
    }

    type Callback = (time: number) => void;
}

export = userIDLEObserver;
