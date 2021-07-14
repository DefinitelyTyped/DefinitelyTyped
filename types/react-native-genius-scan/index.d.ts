// Type definitions for @thegrizzlylabs/react-native-genius-scan
// Project: https://geniusscansdk.com/
// Definitions by:  Maxime Le Bonniec <https://github.com/Maxime-lbc> as IzyCardio
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped/types/react-native-genius-scan
// TypeScript Version: 4.4.0

declare module '@thegrizzlylabs/react-native-genius-scan' {
    /**
     * @description scanWithConfiguration method options
     */
    export interface ScanConfiguration {
        /**
         * @description If you want to import an existing image use "image" or use "camera" to let the use take an image
         * @default 'camera'
         */
        source?: 'image' | 'camera';
        /**
         * @description an absolute image url, required if source is image. Example: "file:///var/…/image.png"
         */
        sourceImageUrl?: string;
        /**
         * @description If true, after a page is scanned, a prompt to scan another page will be displayed. If false, a single page will be scanned.
         * @default true
         */
        multiPage?: boolean;
        /**
         * @description By default, the filter is chosen automatically
         */
        defaultFilter?: 'none' | 'blackAndWhite' | 'photo' | 'color';
        /**
         * @default 'fit'
         */
        pdfPageSize?: 'fit' | 'a4' | 'letter';
        /**
         * @description max dimension in pixels when images are scaled before PDF generation, for example 2000 to fit both height and width within 2000px. Defaults to 0, which means no scaling is performed.
         * @default 0
         */
        pdfMaxScanDimension?: number;
        /**
         * @description JPEG quality used to compress captured images. Between 0 and 100, 100 being the best quality.
         * @default 60
         */
        jpegQuality?: number;
        /**
         * @description an array with the desired actions to display during the post processing screen (defaults to all actions).
         **/
        postProcessingActions?: 'rotate' | 'editFilter';
        /**
         * @default false
         */
        flashButtonHidden?: boolean;
        /**
         * @default 'off'
         */
        defaultFlashMode?: 'auto' | 'on' | 'off';
        /**
         * @description Must start with a #  example: #ffffff
         */
        foregroundColor?: string;
        /**
         * @description Must start with a #  example: #ffffff
         */
        backgroundColor?: string;
        /**
         * @description Must start with a #  example: #ffffff
         */
        highlightColor?: string;
        /**
         * @description Must start with a #  example: #ffffff
         */
        menuColor?: string;
    }

    export interface Scan {
        /**
         * @description The original file as scanned from the camera. "file://.jpeg"
         */
        originalUrl: string;
        /**
         * @description The cropped and enhanced file, as processed by the SDK. "file://.{jpeg|png}"
         */
        enhancedUrl: string;
    }

    export interface Result {
        /**
         * @description A PDF file of the scanned pages (example: "file://.pdf")"
         */
        pdfUrl: string;
        /**
         * @description an array of scan objects"
         */
        scans: Scan[];
    }

    /**
     * @description Initialize the SDK with a valid licence key
     * @param {string} key - The valid licence key to initialize the SDK
     */
    export function setLicenceKey(key: string): Promise<void>;

    /**
     * @description Main method of the library. The method scanWithConfiguration takes a configuration
     * @param {ScanConfiguration} configuration - Configuration object
     * @return {Promise<Result>} Result
     */
    export function scanWithConfiguration(configuration: ScanConfiguration): Promise<Result>;
}
