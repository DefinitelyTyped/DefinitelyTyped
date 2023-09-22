// Type definitions for screenshot-desktop 1.12
// Project: https://github.com/bencevans/screenshot-desktop
// Definitions by: Usama Ahsan <https://github.com/usama8800>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export = screenshotDesktop;

declare function screenshotDesktop(options?: { format?: screenshotDesktop.ImageFormat, screen?: screenshotDesktop.DisplayID }): Promise<Buffer>;
declare function screenshotDesktop(options?: { filename: string, format?: screenshotDesktop.ImageFormat, screen?: screenshotDesktop.DisplayID }): Promise<string>;

declare namespace screenshotDesktop {
    type DisplayID = string;

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

    function listDisplays(): Promise<Array<{ id: DisplayID, name: string, top?: number, right?: number, bottom?: number, left?: number, width?: number, height?: number }>>;
    function all(): Promise<Array<{ id: DisplayID, name: string }>>;
}
