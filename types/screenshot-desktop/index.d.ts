declare interface ScreenshotDesktop {
    (options?: { format?: ImageFormat, screen?: DisplayID }): Promise<Buffer>;
    (options?: { filename: string, format?: ImageFormat, screen?: DisplayID }): Promise<string>;
    listDisplays(): Promise<{ id: DisplayID, name: string }[]>;
    all(): Promise<Buffer[]>;
}

declare const screenshotDesktop: ScreenshotDesktop;

declare module 'screenshot-desktop' {
    export = screenshotDesktop;
}

type DisplayID = number;

type ImageFormat =
    'bmp' |
    'emf' |
    'exif' |
    'jpg' |
    'jpeg' |
    'gif' |
    'png' |
    'tiff' |
    'wmf';
