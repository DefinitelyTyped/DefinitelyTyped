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
        framerate?: number | undefined;
        /**
         * Super-sampling of frames to create a motion-blurred frame (0 or 1 make no effect)
         */
        motionBlurFrames?: number | undefined;
        format: "webm" | "gif" | "png" | "jpg" | "ffmpegserver";
        /**
         * Quality for webm/jpg
         */
        quality?: number | undefined;
        /**
         * Name of the files to be exported. if no name is provided, a GUID will be generated
         */
        name?: string | undefined;
        /**
         * Dumps info on the console
         */
        verbose?: boolean | undefined;
        /**
         * Adds a widget with capturing info
         */
        display?: boolean | undefined;
        /**
         * Automatically stops and downloads when reaching that time (seconds).
         * Very convenient for long captures: set it and forget it (remember autoSaveTime!)
         */
        timeLimit?: number | undefined;
        /**
         * It will automatically download the captured data every n seconds (only available for webm/png/jpg)
         */
        autoSaveTime?: number | undefined;
        /**
         * Skip to that mark (seconds)
         */
        startTime?: number | undefined;
        /**
         * Path to the gif worker script
         */
        workersPath?: string | undefined;
    }
}
