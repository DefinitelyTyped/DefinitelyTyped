/**
 * Represents basic quad billboard image.
 * @class
 * @extends {og.BaseBillboard}
 * @param {Object} [options] - Options:
 * @param {og.Vec3|Array.<number>} [options.position] - Billboard spatial position.
 * @param {number} [options.rotation] - Screen angle rotaion.
 * @param {og.Vec4|string|Array.<number>} [options.color] - Billboard color.
 * @param {og.Vec3|Array.<number>} [options.alignedAxis] - Billboard aligned vector.
 * @param {og.Vec3|Array.<number>} [options.offset] - Billboard center screen offset.
 * @param {boolean} [options.visibility] - Visibility.
 * @param {string} [options.src] - Billboard image url source.
 * @param {Image} [options.image] - Billboard image object.
 * @param {number} [options.width] - Screen width.
 * @param {number} [options.height] - Screen height.
 * @param {number} [options.scale] - Billboard scale.
 */
export class Billboard {
    constructor(options: any);
    /**
     * Image src.
     * @protected
     * @type {string}
     */
    protected _src: string;
    /**
     * Image object.
     * @protected
     * @type {Object}
     */
    protected _image: any;
    _scale: number;
    /**
     * Billboard screen width.
     * @protected
     * @type {number}
     */
    protected _width: number;
    /**
     * Billboard screen height.
     * @protected
     * @type {number}
     */
    protected _height: number;
    /**
     * Sets billboard image url source.
     * @public
     * @param {string} src - Image url.
     */
    public setSrc(src: string): void;
    /**
     * Sets image object.
     * @public
     * @param {Object} image - JavaScript image object.
     */
    public setImage(image: any): void;
    /**
     * Sets billboard screen size in pixels.
     * @public
     * @param {number} width - Billboard width.
     * @param {number} height - Billboard height.
     */
    public setSize(width: number, height: number): void;
    /**
     * Returns billboard screen size.
     * @public
     * @returns {Object}
     */
    public getSize(): any;
    /**
     * Sets billboard screen width.
     * @public
     * @param {number} width - Width.
     */
    public setWidth(width: number): void;
    /**
     * Gets billboard screen width.
     * @public
     * @returns {number}
     */
    public getWidth(): number;
    /**
     * Sets billboard screen heigh.
     * @public
     * @param {number} height - Height.
     */
    public setHeight(height: number): void;
    /**
     * Gets billboard screen height.
     * @public
     * @returns {number}
     */
    public getHeight(): number;
}
