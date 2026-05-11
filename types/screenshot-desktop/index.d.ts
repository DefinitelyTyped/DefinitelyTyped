/// <reference types="node" />

export = screenshotDesktop;

declare function screenshotDesktop(
    options?: screenshotDesktop.ScreenshotOptionsWithoutFilename,
): Promise<NonSharedBuffer>;
declare function screenshotDesktop(
    options?: screenshotDesktop.ScreenshotOptionsWithFilename,
): Promise<string>;

declare namespace screenshotDesktop {
    interface ScreenshotOptions {
        filename?: string;
        format?: ImageFormat;
        screen?: DisplayID;
        linuxLibrary?: "scrot" | "imagemagick";
    }

    interface ScreenshotOptionsWithFilename extends ScreenshotOptions {
        filename: string;
    }

    interface ScreenshotOptionsWithoutFilename extends ScreenshotOptions {
        filename?: "";
    }

    interface Display {
        id: number | string;
        name: string;
    }

    type DisplayID = Display["id"];

    type ImageFormat = "jpg" | "png";

    function listDisplays(): Promise<Array<Display>>;
    function all(): Promise<Array<NonSharedBuffer>>;
}
