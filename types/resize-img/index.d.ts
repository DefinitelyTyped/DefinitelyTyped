// Type definitions for resize-img 1.1
// Project: https://github.com/kevva/resize-img#readme
// Definitions by: Yusuke Higuchi <https://github.com/higuri>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export = ResizeImg;

declare function ResizeImg(
    input: Buffer,
    options: ResizeImg.ResizeImgOptions): Promise<Buffer>;

declare namespace ResizeImg {
    interface ResizeImgOptions {
        width?: number;
        height?: number;
    }
}
