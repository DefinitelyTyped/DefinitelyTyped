// Type definitions for pdf-thumbnail 1.0
// Project: https://github.com/nicoFuccella/pdf-thumbnail#readme
// Definitions by: Kirill Koshil <https://github.com/koshilki>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference types="node" />

declare namespace pdf {
    type Operations = 'compress' | 'crop' | 'resize';

    interface CompressParams {
        type?: string;
        quality?: number;
    }

    interface CropParams {
        width: number;
        height: number;
        x: number;
        y: number;
        ratio?: boolean;
    }

    interface ResizeParams {
        width?: number;
        height?: number;
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
