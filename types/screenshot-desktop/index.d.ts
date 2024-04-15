/// <reference types="node" />

export = screenshotDesktop;

declare function screenshotDesktop(
    options?: { format?: screenshotDesktop.ImageFormat; screen?: screenshotDesktop.DisplayID },
): Promise<Buffer>;
declare function screenshotDesktop(
    options?: { filename: string; format?: screenshotDesktop.ImageFormat; screen?: screenshotDesktop.DisplayID },
): Promise<string>;

declare namespace screenshotDesktop {
    type DisplayID = number;

    type ImageFormat =
        | "bmp"
        | "emf"
        | "exif"
        | "jpg"
        | "jpeg"
        | "gif"
        | "png"
        | "tiff"
        | "wmf";

    function listDisplays(): Promise<Array<{ id: DisplayID; name: string }>>;
    function all(): Promise<Array<{ id: DisplayID; name: string }>>;
}
