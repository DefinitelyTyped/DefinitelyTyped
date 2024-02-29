/// <reference types="node" />

declare function ResizeImg(input: Buffer, options?: ResizeImg.ResizeImgOptions): Promise<Buffer>;

declare namespace ResizeImg {
    interface ResizeImgOptions {
        width?: number | undefined;
        height?: number | undefined;
        format?: Formats | undefined;
    }

    type Formats = "bmp" | "jpg" | "png";
}

export = ResizeImg;
