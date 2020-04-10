// Type definitions for pdf-thumbnail 1.0
// Project: https://github.com/nicoFuccella/pdf-thumbnail#readme
// Definitions by: Kirill Koshil <https://github.com/koshilki>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference types="node" />

export enum Operations {
    compress = 'compress',
    crop = 'crop',
    resize = 'resize',
}

export interface CompressParams {
    type?: string;
    quality?: number;
}

export interface CropParams {
    width: number;
    height: number;
    x: number;
    y: number;
    ratio?: boolean;
}

export interface ResizeParams {
    width?: number;
    height?: number;
}

export interface OperationsParams {
    compress: CompressParams;
    crop: CropParams;
    resize: ResizeParams;
}

export type PDFThumbnailOptions = {
    [op in keyof typeof Operations]?: OperationsParams[op];
};

export default function pdf(body: NodeJS.ReadableStream | Buffer | string, options?: PDFThumbnailOptions): Promise<NodeJS.ReadableStream>;
