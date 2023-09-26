// Type definitions for pdf-thumbnail 1.0
// Project: https://github.com/nicoFuccella/pdf-thumbnail#readme
// Definitions by: Kirill Koshil <https://github.com/koshilki>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference types="node" />

declare namespace pdf {
    type Operations = "compress" | "crop" | "resize";

    interface CompressParams {
        type?: string | undefined;
        quality?: number | undefined;
    }

    interface CropParams {
        width: number;
        height: number;
        x: number;
        y: number;
        ratio?: boolean | undefined;
    }

    interface ResizeParams {
        width?: number | undefined;
        height?: number | undefined;
    }

    interface OperationsParams {
        compress: CompressParams;
        crop: CropParams;
        resize: ResizeParams;
    }

    type PDFThumbnailOptions = {
        [op in Operations]?: OperationsParams[op];
    };
}

declare function pdf(
    body: NodeJS.ReadableStream | Buffer | string,
    options?: pdf.PDFThumbnailOptions,
): Promise<NodeJS.ReadableStream>;

export = pdf;
