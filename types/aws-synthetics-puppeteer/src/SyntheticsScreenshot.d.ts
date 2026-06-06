// js installs to root of node_modules
// eslint-disable-next-line @definitelytyped/no-single-declare-module
declare module "SyntheticsScreenshot" {
    function _exports(dir?: string): SyntheticsScreenshot;
    export = _exports;
    /**
     * Class to help facilitate taking numbered Puppeteer Screenshots with specified, optional stepNames and suffixes.
     * Defaults to storing the screen shots in the /tmp/ folder.
     */
    class SyntheticsScreenshot {
        constructor(dir?: string, startingNumber?: number, zeroFill?: number);
        _dir: string;
        _startingNumber: number;
        _count: number;
        _screenshots: {};
        _zeroFill: number;
        _uploader: any;
        setUploader(uploader: any): void;
        reset(): void;
        zerofill(num: any, numlen: any): string;
        take(page: any, stepName?: string, suffix?: string): Promise<ScreenshotResult>;
        /**
         *  Adds screenshot result to map {StepName: [ScreenshotResults]} and
         *  @returns fileName and page url of screenshot
         */
        addScreenshotResult(stepName: any, fileName: any, pageUrl: any): ScreenshotResult;
        /**
         * Get all screenshots captured during the execution of this step.
         * If two steps have same name, it will get screenshots for both of them.
         * @param stepName
         */
        getScreenshotResult(stepName: any): ScreenshotResult[];
    }
    import * as ScreenshotResult_1 from "SyntheticsReport";
    import ScreenshotResult = ScreenshotResult_1.ScreenshotResult;
}
