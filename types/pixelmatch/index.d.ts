// Type definitions for pixelmatch 5.2
// Project: https://github.com/mapbox/pixelmatch#readme
// Definitions by: Oleg Repin <https://github.com/iamolegga>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
//                 Damian Frizzi <https://github.com/damianfrizzi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare function Pixelmatch(
    /** Image data of the first image to compare. Note: image dimensions must be equal. */
    img1: Buffer | Uint8Array | Uint8ClampedArray,
    /** Image data of the second image to compare. Note: image dimensions must be equal. */
    img2: Buffer | Uint8Array | Uint8ClampedArray,
    /** Image data to write the diff to, or null if don't need a diff image. */
    output: Buffer | Uint8Array | Uint8ClampedArray | null,
    /** Width of the images. Note that all three images need to have the same dimensions. */
    width: number,
    /** Height of the images. Note that all three images need to have the same dimensions. */
    height: number,
    /** Options. */
    options?: Pixelmatch.PixelmatchOptions,
): number;

declare namespace Pixelmatch {
    type RGBTuple = [number, number, number];

    interface PixelmatchOptions {
        /**
         * Matching threshold, ranges from 0 to 1. Smaller values make the comparison more sensitive.
         * @default 0.1
         */
        readonly threshold?: number;
        /**
         * If true, disables detecting and ignoring anti-aliased pixels.
         * @default false
         */
        readonly includeAA?: boolean;
        /**
         * Blending factor of unchanged pixels in the diff output.
         * Ranges from 0 for pure white to 1 for original brightness
         * @default 0.1
         */
        alpha?: number;
        /**
         * The color of anti-aliased pixels in the diff output.
         * @default [255, 255, 0]
         */
        aaColor?: RGBTuple;
        /**
         * The color of differing pixels in the diff output.
         * @default [255, 0, 0]
         */
        diffColor?: RGBTuple;
        /**
         * An alternative color to use for dark on light differences to differentiate between "added" and "removed" parts.
         * If not provided, all differing pixels use the color specified by `diffColor`.
         * @default null
         */
        diffColorAlt?: RGBTuple;
        /**
         * Draw the diff over a transparent background (a mask), rather than over the original image.
         * Will not draw anti-aliased pixels (if detected)
         * @default false
         */
        diffMask?: boolean;
    }
}

export = Pixelmatch;
