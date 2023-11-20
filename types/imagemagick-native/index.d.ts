/// <reference types="node" />

import stream = require("stream");
export declare namespace streams {
    export function convert(options: IStreamConvertOptions): stream.Transform;
}

declare function convert(options: IConvertOptions): Buffer;
declare function convert(options: IConvertOptions, callback: (err: any, result: Buffer) => void): void;
declare function identify(options: IIdentifyOptions): IIdentifyResult;
declare function identify(options: IIdentifyOptions, callback: (err: any, result: IIdentifyResult) => void): void;
declare function quantizeColors(options: IQuantizeColorsOptions): IQuantizeColorsItem[];
declare function composite(options: ICompositeOptions): Buffer;
declare function composite(options: ICompositeOptions, callback: (err: any, result: Buffer) => void): void;
declare function getConstPixels(options: IConstPixelsOptions): IConstPixelsItem[];
declare function quantumDepth(): number;
declare function version(): string;

export interface IStreamConvertOptions {
    srcFormat?: string | undefined;
    quality?: number | undefined;
    trim?: boolean | undefined;
    trimFuzz?: number | undefined;
    width?: number | undefined;
    height?: number | undefined;
    density?: number | undefined;
    resizeStyle?: string | undefined;
    gravity?: string | undefined;
    format?: string | undefined;
    filter?: string | undefined;
    blur?: number | undefined;
    strip?: boolean | undefined;
    rotate?: number | undefined;
    flip?: boolean | undefined;
    debug?: boolean | undefined;
    ignoreWarnings?: boolean | undefined;
}
export interface IConvertOptions {
    srcData: Buffer;
    srcFormat?: string | undefined;
    quality?: number | undefined;
    trim?: boolean | undefined;
    trimFuzz?: number | undefined;
    width?: number | undefined;
    height?: number | undefined;
    density?: number | undefined;
    resizeStyle?: string | undefined;
    gravity?: string | undefined;
    format?: string | undefined;
    filter?: string | undefined;
    blur?: number | undefined;
    strip?: boolean | undefined;
    rotate?: number | undefined;
    flip?: boolean | undefined;
    debug?: boolean | undefined;
    ignoreWarnings?: boolean | undefined;
}
export interface IIdentifyOptions {
    srcData: Buffer;
    debug?: boolean | undefined;
    ignoreWarnings?: boolean | undefined;
}
export interface IIdentifyResult {
    format: string;
    width: number;
    height: number;
    depth: number;
    density: {
        width: number;
        height: number;
    };
    exif: {
        orientation: number; // 0 if none exists or e.g. 3 (portrait iPad pictures)
    };
}
export interface IQuantizeColorsOptions {
    srcData: Buffer;
    colors: number;
    debug?: boolean | undefined;
    ignoreWarnings?: boolean | undefined;
}
export interface IQuantizeColorsItem {
    r: number;
    g: number;
    b: number;
    hex: string;
}
export interface ICompositeOptions {
    srcData: Buffer;
    compositeData: Buffer;
    gravity?: string | undefined;
    debug?: boolean | undefined;
    ignoreWarnings?: boolean | undefined;
}
export interface IConstPixelsOptions {
    srcData: Buffer;
    x: number;
    y: number;
    columns: number;
    rows: number;
}
export interface IConstPixelsItem {
    red: number;
    green: number;
    blue: number;
    opacity: number;
}
