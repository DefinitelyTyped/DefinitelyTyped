// Type definitions for png-img 3.0
// Project: https://github.com/gemini-testing/png-img
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference types="node" />

/**
 * Lite self-contained png image processing library for macOS and Linux.
 */
declare class PngImg {
    /**
     * Create PngImg object from passed buffer with image
     */
    constructor(buffer: Buffer);

    /**
     * Get image size as an object.
     */
    size(): PngImg.Size;

    /**
     * Get pixel color and alpha.
     * @param x x coordinate (left to right)
     * @param y y coordinate (top to bottom)
     */
    get(x: number, y: number): PngImg.Color;

    /**
     * Fill region with passed color. Modifies current image.
     * @param x x coordinate (left to right)
     * @param y y coordinate (top to bottom)
     * @param color color as rgb object or as a '#XXXXXX' string
     */
    fill(x: number, y: number, width: number, height: number, color: PngImg.Color | string): this;

    /**
     * Set pixel color
     * Same as fill(x, y, 1, 1, color)
     * (shorthand)
     * @param x x coordinate (left to right)
     * @param y y coordinate (top to bottom)
     * @param color color as rgb object or as a '#XXXXXX' string
     */
    set(x: number, y: number, color: PngImg.Color | string): this;

    /**
     * Crop image. Modifies current image.
     * Throws if new image is not inside the current image.
     */
    crop(offsetX: number, offsetY: number, width: number, height: number): this;

    /**
     * Sets new image size. Modifies current image.
     * If new size is less or equal than current size, than crop will be performed.
     */
    setSize(width: number, height: number): this;

    /**
     * Inserts image into specified place.
     * @param img image to insert
     *
     */
    insert(img: PngImg, offsetX: number, offsetY: number): this;

    /**
     * Rotates image 90 degrees clockwise
     */
    rotateRight(): this;

    /**
     * Rotates image 90 degress counterclockwise
     */
    rotateLeft(): this;

    /**
     * Save image to file. Asynchronous operation.
     * @param file - path to file to save image
     * @param callback - will be called after save operation finish or on error
     */
    save(file: string, callback: PngImg.SaveCallback): void;
}

declare namespace PngImg {
    interface SaveCallback {
        /**
         * @param error error message in case of fail
         */
        (error: string): void;
    }

    interface Size {
        width: number;
        height: number;
    }

    interface Color {
        r: number;
        g: number;
        b: number;
        a: number;
    }
}

export = PngImg;
