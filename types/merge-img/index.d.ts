// Type definitions for merge-img 2.1
// Project: https://github.com/preco21/merge-img#readme
// Definitions by: Piotr Błażejewicz (Peter Blazejewicz) <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import Jimp = require('jimp');

/**
 * Merges given images into a single image in right order.
 * This will be helpful in a situation when you have to generate a preview of multiple images into a single image.
 * This module is based on Jimp for image processing.
 */
export default function mergeImg(
    images: Array<string | ImageDescriptor | Buffer | Jimp>,
    options?: Options,
): Promise<Jimp>;

export interface ImageDescriptor {
    /**
     * A single image source to concat
     */
    src: string | Buffer;
    /**
     * x offset to affect this image
     * @default 0
     */
    offsetX?: number;
    /**
     * y offset to affect this image
     * @default 0
     */
    offsetY?: number;
}

export interface Options {
    /**
     * Direction of the merged image. If this value is true, the images will be merged vertically (column).
     * Otherwise, the images will be merged horizontally (row)
     * @default false
     */
    direction?: boolean;
    /**
     * Default background color represented by RGBA hex value.
     * @default 0x00000000
     */
    color?: number;
    /**
     * Aligning of given images. If the images are not all the same size, images will be sorted to largest image
     * @default 'start'
     */
    align?: 'start' | 'center' | 'end';
    /**
     * Offset in pixels between each image
     * @default 0
     */
    offset?: number;
    /**
     * Margin of the result image.
     * If `number` or `string` is passed, it will be considered as standard
     * css shorthand properties (e.g. '40 40 0 10')
     */
    margin?: number | string | MarginOptions;
}

export interface MarginOptions {
    /**
     * Margin on top side of result image
     * @default 0
     */
    top?: number;
    /**
     * Margin on right side of result image
     * @default 0
     */
    right?: number;
    /**
     * Margin on bottom side of result image
     * @default 0
     */
    bottom?: number;
    /**
     * Margin on left side of result image
     * @default 0
     */
    left?: number;
}
