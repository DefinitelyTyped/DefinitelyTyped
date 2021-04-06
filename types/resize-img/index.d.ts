// Type definitions for resize-img 2.0
// Project: https://github.com/kevva/resize-img#readme
// Definitions by: Yusuke Higuchi <https://github.com/higuri>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference types="node" />

declare function ResizeImg(input: Buffer, options?: ResizeImg.ResizeImgOptions): Promise<Buffer>;

declare namespace ResizeImg {
    interface ResizeImgOptions {
        width?: number;
        height?: number;
        format?: Formats;
    }

    type Formats = "bmp" | "jpg" | "png";
}

export = ResizeImg;
