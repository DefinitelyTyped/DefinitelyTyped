// Type definitions for i3dh-ios-bridge 1.0
// Project: https://git.threedy.io/misc/realitybenchmark_suite/
// Definitions by: Tim Lâm <https://github.com/TimGeronimoLam>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export namespace i3dh {
    enum ResolutionProfile {
        NATIVE = 'native',
        LOW_RES = 'lowRes',
    }

    /* tslint:disable:no-redundant-jsdoc-2 */
    /**
     * Config for ARKit
     */
    interface ARKitConfig {
        /// Config received from the API.
        /// The rate at which ARKit frames are processed.
        /// Value ranges from 1-60
        arkitFps?: number;

        // Compression quality which is used when compressing jpeg. Value Range 0.1 .. 1.0
        jpegCompression?: number;

        // Resolution Profile selection. Options are native and lowRes
        // Use Resolution Profile string enum for input
        resolutionProfile?: string;
    }

    /**
     * The i3dhIOSBridge allows webapplications to control and receive data from ARKit.
     * ARKit can be configured and started by calling startARKit(config).
     * Data can be received by registering a callback with registerCallback...
     */
    /* tslint:disable:interface-name */
    interface IOSBridge {
        /**
         * Init the ARKit on the native side with arkitConfig
         * Start the transmission of the Image and Pose Data to the webcontext,
         * by Initializing the ARKit on the native side with the given arkitConfig.
         *
         * @param arkitConfig - optional parameter. Can be set to override default config.
         * If omitted, defaults are set which are {arkitFps : 25, jpegCompression: 0.75, }
         * @returns Promise resolve if started, Promise reject on error or unsuccessful
         */
        startARKit(arkitConfig?: ARKitConfig): Promise<void>;

        /**
         * Init the ARKit on the native side with arkitConfig
         * @returns Promise resolve if started, Promise reject on error or unsuccessful
         */
        stopARKit(): Promise<void>;

        /**
         * Get current image data
         * @returns ArrayBuffer if new data is available or undefined if either ARKit is
         * not init or no new data is available.
         */
        getSlamData(): ArrayBuffer | undefined;

        /**
         * Sets a new ARKitConfig
         * @param arkitConfig input ARKitConfig
         */
        setConfig(arkitConfig: ARKitConfig): Promise<void>;

        /**
         * Requests a screenshot from the native side
         * @returns ArrayBuffer - base64 encoded string of the webview screen el
         */
        takeScreenshot(): ArrayBuffer | undefined;

        /**
         * Start ARKit on the Native side and start recording ARKit frames locally.
         * The current active config of the ARKit is taken for recording.
         * @return {Promise<void>}
         */
        startRecording(): Promise<void>;

        /**
         * Stop ARKit and save the recorded ARKit frames locally.
         * @returns {Promise<void>}
         */
        stopRecording(): Promise<void>;
    }
}
