// Type definitions for blueimp-load-image 2.23
// Project: https://github.com/blueimp/JavaScript-Load-Image
// Definitions by: Evan Kesten <https://github.com/ebk46>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export type LoadImageCallback = (canvas: HTMLCanvasElement) => void;

export interface BasicOptions {
    maxWidth?: number; maxHeight?: number;
    minWidth?: number; minHeight?: number;
    contain?: boolean; cover?: boolean;
    crossOrigin?: string;
    noRevoke?: boolean;
}

export type Orientation = number | boolean;
export type AspectRatio = number;

// Some options are only valid if 'canvas' is true.
// In addition, if 'crop' is true or 'orientation' is set,
// it automatically enables 'canvas' so in those cases,
// 'canvas' cannot be false
export interface CanvasTrueOptions {
    canvas: true; sourceWidth?: number; sourceHeight?: number;
    top?: number; right?: number; bottom?: number; left?: number;
    pixelRatio?: number; downsamplingRatio?: number;
    orientation?: Orientation; crop?: boolean;
}
export interface CanvasFalseOptions { canvas?: false; }
export type CanvasOptions = CanvasTrueOptions | CanvasFalseOptions;

// Setting 'aspectRatio' automatically enables 'crop', so setting 'crop' to
// 'false' in that case is not valid
export interface CropTrueOptions { crop?: true; aspectRatio?: AspectRatio; }
export interface CropFalseOptions { crop?: false; }
export type CropOptions = CanvasTrueOptions | CropFalseOptions;

// Setting 'orientation' automatically sets 'meta' to true
// so setting it to false is not valid in that case
export interface MetaTrueOptions { meta?: true; orientation: Orientation; }
export interface MetaFalseOptions { meta?: false; }
export type MetaOptions = MetaTrueOptions | MetaFalseOptions;

export type LoadImageOptions = BasicOptions & CanvasOptions & CropOptions & MetaOptions;
export default function loadImage(
    file: File | Blob | string, callback: LoadImageCallback, options: LoadImageOptions
): HTMLImageElement | FileReader | false;
