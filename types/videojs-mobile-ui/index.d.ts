// eslint-disable-next-line @definitelytyped/no-import-default-of-export-equals
import videojs from "video.js";

/**
 * A video.js plugin.
 *
 * Adds a mobile UI for player control, and fullscreen orientation control
 */
declare function mobileUi(options?: mobileUi.Options): void;

declare namespace mobileUi {
    const VERSION: typeof videojs.VERSION;

    /**
     * Plugin options.
     */
    interface Options {
        /**
         * Enables the display regardless of user agent, for testing purposes
         * @default false
         */
        forceForTesting?: boolean | undefined;
        /**
         * Fullscreen options
         */
        fullscreen?: FullscreenOptions | undefined;
        /**
         * Touch UI options.
         */
        touchControls?: TouchControlsOptions | undefined;
    }

    interface FullscreenOptions {
        /**
         * Whether to go fullscreen when rotating to landscape
         * @default true
         */
        enterOnRotate?: boolean | undefined;
        /**
         * Whether to leave fullscreen when rotating to portrait (if not locked)
         * @default true
         */
        exitOnRotate?: boolean | undefined;
        /**
         * Whether to lock orientation when rotating to landscape
         *           Unlocked when exiting fullscreen or on 'ended'
         * @default true
         */
        lockOnRotate?: boolean | undefined;
        /**
         * Whether to disable iOS's native fullscreen so controls can work
         * @default false
         */
        iOS?: boolean | undefined;
    }

    interface TouchControlsOptions {
        /**
         * If true no touch controls are added.
         * @default false
         */
        disabled?: boolean | undefined;
        /**
         * Number of seconds to seek on double-tap
         * @default 10
         */
        seekSeconds?: number | undefined;
        /**
         * Interval in ms to be considered a doubletap
         * @default 300
         */
        tapTimeout?: number | undefined;
        /**
         * Whether to disable when the video ends (e.g., if there is an endscreen)
         *           Never shows if the endscreen plugin is present
         * @default false
         */
        disableOnEnd?: boolean | undefined;
    }
}

export = mobileUi;

declare module "video.js" {
    interface VideoJsPlayer {
        mobileUi: typeof mobileUi;
    }
}
