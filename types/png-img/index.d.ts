// Type definitions for png-img 2.3
// Project: https://github.com/gemini-testing/png-img
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare class PngImg {
    /**
     * Create PngImg object from passed buffer with image
     */
    constructor(buffer: Buffer);

    /**
     * Get image size as an object.
     */
    size(): Size;

    /**
     * Get pixel color and alpha.
     */
    get(x: number, y: number): Color;

    /**
     * Fill region with passed color. Modifies current image.
     * Color can be {r,g,b,a} object or as a '#XXXXXX' string
     */
    fill(offsetX: number, offsetY: number, width: number, height: number, color: Color | string): this;

    /**
     * Same as fill(x, y, 1, 1, color)
     * (shorthand)
     */
    set(x: number, y: number, color: Color | string): this;

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
    save(file: string, callback: (error: Error) => void): void;
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

export = PngImg;
