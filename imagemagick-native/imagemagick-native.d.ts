// Type definitions for imagemagick-native 1.7.0
// Project: https://www.npmjs.org/package/imagemagick-native
// Definitions by: Hiroki Horiuchi <https://github.com/horiuchi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare module "imagemagick-native" {

    import stream = require('stream');
    export module streams {
        export function convert(options: IStreamConvertOptions): stream.Transform;
    }

    function convert(options: IConvertOptions): Buffer;
    function convert(options: IConvertOptions, callback: (err: any, result: Buffer) => void): void;
    function identify(options: IIdentifyOptions): IIdentifyResult;
    function identify(options: IIdentifyOptions, callback: (err: any, result: IIdentifyResult) => void): void;
    function quantizeColors(options: IQuantizeColorsOptions): IQuantizeColorsItem[];
    function composite(options: ICompositeOptions): Buffer;
    function composite(options: ICompositeOptions, callback: (err: any, result: Buffer) => void): void;
    function getConstPixels(options: IConstPixelsOptions): IConstPixelsItem[];
    function quantumDepth(): number;
    function version(): string;

    export interface IStreamConvertOptions {
        srcFormat?: string;
        quality?: number;
        trim?: boolean;
        trimFuzz?: number;
        width?: number;
        height?: number;
        density?: number;
        resizeStyle?: string;
        gravity?: string;
        format?: string;
        filter?: string;
        blur?: number;
        strip?: boolean;
        rotate?: number;
        flip?: boolean;
        debug?: boolean;
        ignoreWarnings?: boolean;
    }
    export interface IConvertOptions {
        srcData: Buffer;
        srcFormat?: string;
        quality?: number;
        trim?: boolean;
        trimFuzz?: number;
        width?: number;
        height?: number;
        density?: number;
        resizeStyle?: string;
        gravity?: string;
        format?: string;
        filter?: string;
        blur?: number;
        strip?: boolean;
        rotate?: number;
        flip?: boolean;
        debug?: boolean;
        ignoreWarnings?: boolean;
    }
    export interface IIdentifyOptions {
        srcData: Buffer;
        debug?: boolean;
        ignoreWarnings?: boolean;
    }
    export interface IIdentifyResult {
        format: string;
        width: number;
        height: number;
        depth: number;
        density : {
            width : number;
            height : number;
        };
        exif: {
            orientation: number; // 0 if none exists or e.g. 3 (portrait iPad pictures)
        };
    }
    export interface IQuantizeColorsOptions {
        srcData: Buffer;
        colors: number;
        debug?: boolean;
        ignoreWarnings?: boolean;
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
        gravity?: string;
        debug?: boolean;
        ignoreWarnings?: boolean;
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

}

