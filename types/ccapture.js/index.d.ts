// Type definitions for ccapture.js 1.1
// Project: https://github.com/spite/ccapture.js#readme
// Definitions by: Sam Alexander <https://github.com/samalexander>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare class CCapture {
    constructor(settings: CCapture.Settings);

    start(): void;

    capture(canvas: HTMLElement): void;

    stop(): void;

    save(cb?: (blob: Blob) => void): void;
}

declare namespace CCapture {
    interface Settings {
        /**
         * Target framerate for the capture
         */
        framerate?: number;
        /**
         * Super-sampling of frames to create a motion-blurred frame (0 or 1 make no effect)
         */
        motionBlurFrames?: number;
        format: "webm" | "gif" | "png" | "jpg" | "ffmpegserver";
        /**
         * Quality for webm/jpg
         */
        quality?: number;
        /**
         * Name of the files to be exported. if no name is provided, a GUID will be generated
         */
        name?: string;
        /**
         * Dumps info on the console
         */
        verbose?: boolean;
        /**
         * Adds a widget with capturing info
         */
        display?: boolean;
        /**
         * Automatically stops and downloads when reaching that time (seconds).
         * Very convenient for long captures: set it and forget it (remember autoSaveTime!)
         */
        timeLimit?: number;
        /**
         * It will automatically download the captured data every n seconds (only available for webm/png/jpg)
         */
        autoSaveTime?: number;
        /**
         * Skip to that mark (seconds)
         */
        startTime?: number;
        /**
         * Path to the gif worker script
         */
        workersPath?: string;
    }
}
