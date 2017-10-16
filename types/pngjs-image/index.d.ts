// Type definitions for pngjs-image
// Project: https://github.com/yahoo/pngjs-image
// Definitions by: Ryan Cavanaugh <RyanCavanaugh>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = pngjs_image;
declare namespace pngjs_image {
    export type Color = {
        red: number,
        green: number,
        blue: number,
        alpha: number
    };
}
declare class pngjs_image {
    private constructor();
    applyFilters(filters: any, returnResult: any): any;
    clip(x: number, y: number, width: number, height: number): void;
    fillRect(x: number, y: number, width: number, height: number, color: pngjs_image.Color): void;
    getAlpha(idx: number): number;
    getAt(x: number, y: number): number;
    getAtIndex(idx: number): number;
    getBlob(): any;
    getBlue(idx: number): number;
    getBlurPixel(x: number, y: number, funcName: any): number;
    getBlurPixelAtIndex(idx: number, funcName: any): number;
    getColor(x: number, y: number): number;
    getColorAtIndex(idx: number): number;
    getGrayScale(x: number, y: number): number;
    getGrayScaleAtIndex(idx: number): number;
    getGreen(idx: number): number;
    getHeight(): number;
    getImage(): any;
    getIndex(x: number, y: number): any;
    getLightness(x: number, y: number): number;
    getLightnessAtIndex(idx: number): number;
    getLuma(x: number, y: number): number;
    getLumaAtIndex(idx: number): number;
    getLuminosity(x: number, y: number): number;
    getLuminosityAtIndex(idx: number): number;
    getPixel(x: number, y: number): pngjs_image.Color;
    getRed(idx: number): number;
    getSepia(x: number, y: number): number;
    getSepiaAtIndex(idx: number): number;
    getWidth(): number;
    getYIQ(x: number, y: number): number;
    getYIQAtIndex(idx: number): number;
    // Undocumented: rotateCCW(): any;
    // Undocumented: rotateCW(): any;
    setAlpha(idx: number, value: number, opacity: number): void;
    setAt(x: number, y: number, color: pngjs_image.Color): void;
    setAtIndex(idx: number, color: pngjs_image.Color): void;
    setBlue(idx: number, value: number, opacity: number): void;
    setGreen(idx: number, value: number, opacity: number): void;
    setPixel(x: number, y: number, color: pngjs_image.Color): void;
    setRed(idx: number, value: number, opacity: number): void;
    toBlob(fn: (exported_data: any) => void): void;
    toBlobSync(options: any): any;
    writeImage(filename: string, done: (err: any) => void): void;
    writeImageSync(filename: string): void;
    static copyImage(image: pngjs_image): pngjs_image;
    static createImage(width: number, height: number): pngjs_image;
    static instrument(): void;
    static loadImage(blob: any, done: (img: pngjs_image) => void): void;
    static loadImageSync(blob: any): pngjs_image;
    static readImage(path: string, done: (err: any, img: pngjs_image) => void): void;
    static readImageSync(filename: string): pngjs_image;
    static setFilter(key: number, fn: any): void;
    static version: string;
}
declare namespace pngjs_image {
    /* Undocumented
    class Decoder {
        constructor();
        decode(buffer: any, options: any): any;
        getChunkData(): any;
    }
    class Encoder {
        constructor();
        encode(image: any, width: any, height: any, options: any): any;
        getChunkData(): any;
    }
    End Undocumented */

    namespace filters {
        function blur(image: pngjs_image, options?: any): pngjs_image;
        function grayScale(image: pngjs_image, options?: any): pngjs_image;
        function lightness(image: pngjs_image, options?: any): pngjs_image;
        function luma(image: pngjs_image, options?: any): pngjs_image;
        function luminosity(image: pngjs_image, options?: any): pngjs_image;
        function sepia(image: pngjs_image, options?: any): pngjs_image;
    }
}
