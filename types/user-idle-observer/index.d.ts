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
        idleTime?: number | undefined;
        /**
         * callback that will triger after opts.idleTime of user's IDLE
         * @default console.log
         */
        cb?: Callback | undefined;
        /**
         * @default ["mousemove", "mousedown", "keydown", "scroll", "touchstart", "resize", "visibilitychange"]
         */
        listeners?: Array<keyof WindowEventMap> | undefined;
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
