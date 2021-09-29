/**
 * Usefull class for working with JS canvas object.
 * @class
 * @param {number} [width] - Canvas width. Default 256.
 * @param {number} [height] - Canvas height. Default 256.
 */
export class ImageCanvas {
    constructor(width: any, height: any);
    /**
     * Canvas object.
     * @protected
     * @type {Object}
     */
    protected _canvas: any;
    /**
     * Canvas context.
     * @protected
     * @type {Object}
     */
    protected _context: any;
    /**
     * Returns canvas object.
     * @public
     * @returns {Object}
     */
    public getCanvas(): any;
    /**
     * Returns canvas context pointer.
     * @public
     * @returns {Object}
     */
    public getContext(): any;
    /**
     * Fills canvas RGBA with zeroes.
     * @public
     */
    public fillEmpty(): void;
    /**
     * Gets canvas pixels RGBA data.
     * @public
     * @returns {Array.<number>}
     */
    public getData(): Array<number>;
    /**
     * Fill the canvas by color.
     * @public
     * @param {string} color - CSS string color.
     */
    public fillColor(color: string): void;
    /**
     * Sets RGBA pixel data.
     * @public
     * @param {Array.<number>} data - Array RGBA data.
     */
    public setData(data: Array<number>): void;
    /**
     * Resize canvas.
     * @public
     * @param {number} width - Width.
     * @param {number} height - Height.
     */
    public resize(width: number, height: number): void;
    /**
     * Draw an image on the canvas.
     * @public
     * @param {Image} img - Draw image.
     * @param {number} [x] - Left top image corner X coordinate on the canvas.
     * @param {number} [y] - Left top image corner Y coordinate on the canvas.
     * @param {number} [width] - Image width slice. Image width is default.
     * @param {number} [height] - Image height slice. Image height is default.
     */
    public drawImage(img: new (width?: number, height?: number) => HTMLImageElement, x?: number, y?: number, width?: number, height?: number): void;
    /**
     * Converts canvas to JS image object.
     * @public
     * @returns {Image}
     */
    public getImage(): new (width?: number, height?: number) => HTMLImageElement;
    /**
     * Get measured text width.
     * @public
     * @param {string} text - Measured text.
     * @returns {number}
     */
    public getTextWidth(text: string): number;
    /**
     * Draw a text on the canvas.
     * @public
     * @param {string} text - Text.
     * @param {number} [x] - Canvas X - coordinate. 0 - default.
     * @param {number} [y] - Canvas Y - coordinate. 0 - default.
     * @param {string} [font] - Font style. 'normal 14px Verdana' - is default.
     * @param {string} [color] - Css font color.
     */
    public drawText(text: string, x?: number, y?: number, font?: string, color?: string): void;
    /**
     * Gets canvas width.
     * @public
     * @returns {number}
     */
    public getWidth(): number;
    /**
     * Gets canvas height.
     * @public
     * @returns {number}
     */
    public getHeight(): number;
    /**
     * Load image to canvas.
     * @public
     * @param {string} url - Image url.
     * @pararm {imageCallback} [callback] - Image onload callback.
     */
    public load(url: string, callback: any): void;
    /**
     * Open canvas image in the new window.
     * @public
     */
    public openImage(): void;
    destroy(): void;
}
