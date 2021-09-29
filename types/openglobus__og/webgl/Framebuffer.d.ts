/**
 * Class represents framebuffer.
 * @class
 * @param {og.webgl.Handler} handler - WebGL handler.
 * @param {Object} [options] - Framebuffer options:
 * @param {number} [options.width] - Framebuffer width. Default is handler canvas width.
 * @param {number} [options.height] - Framebuffer height. Default is handler canvas height.
 * @param {number} [options.size] - Color attachment size.
 * @param {String} [options.internalFormat="RGBA"] - Specifies the color components in the texture.
 * @param {String} [options.format="RGBA"] - Specifies the format of the texel data.
 * @param {String} [options.type="UNSIGNED_BYTE"] - Specifies the data type of the texel data.
 * @param {String} [options.depthComponent="DEPTH_COMPONENT16"] - Specifies depth buffer size.
 * @param {Boolean} [options.useDepth] - Using depth buffer during the rendering.
 */
export class Framebuffer {
    static blit(sourceFramebuffer: any, destFramebuffer: any, glAttachment: any, glMask: any, glFilter: any): void;
    constructor(handler: any, options?: {});
    /**
     * WebGL handler.
     * @public
     * @type {og.webgl.Handler}
     */
    public handler: any;
    /**
     * Framebuffer object.
     * @private
     * @type {Object}
     */
    private _fbo;
    _isBare: any;
    /**
     * Renderbuffer object.
     * @private
     * @type {Object}
     */
    private _depthRenderbuffer;
    _filter: any;
    _internalFormatArr: any;
    _formatArr: any;
    _typeArr: any;
    _attachmentArr: any;
    /**
     * Framebuffer width.
     * @private
     * @type {number}
     */
    private _width;
    /**
     * Framebuffer width.
     * @private
     * @type {number}
     */
    private _height;
    _depthComponent: any;
    _useDepth: any;
    /**
     * Framebuffer activity.
     * @private
     * @type {boolean}
     */
    private _active;
    _size: any;
    /**
     * Framebuffer texture.
     * @public
     * @type {number}
     */
    public textures: number;
    destroy(): void;
    /**
     * Framebuffer initialization.
     * @private
     */
    private init;
    /**
     * Bind buffer texture.
     * @public
     * @param{Object} texture - Output texture.
     * @param {Number} [attachmentIndex=0] - color attachment index.
     */
    public bindOutputTexture(texture: any, glAttachment: any): void;
    /**
     * Sets framebuffer viewport size.
     * @public
     * @param {number} width - Framebuffer width.
     * @param {number} height - Framebuffer height.
     */
    public setSize(width: number, height: number, forceDestroy: any): void;
    /**
     * Returns framebuffer completed.
     * @public
     * @returns {boolean} -
     */
    public isComplete(): boolean;
    /**
     * Gets pixel RBGA color from framebuffer by coordinates.
     * @public
     * @param {Uint8Array} res - Normalized x - coordinate.
     * @param {number} nx - Normalized x - coordinate.
     * @param {number} ny - Normalized y - coordinate.
     * @param {number} [w=1] - Normalized width.
     * @param {number} [h=1] - Normalized height.
     * @param {Number} [attachmentIndex=0] - color attachment index.
     */
    public readPixels(res: Uint8Array, nx: number, ny: number, index?: number, w?: number, h?: number): void;
    /**
     * Reads all pixels(RGBA colors) from framebuffer.
     * @public
     * @param {Uint8Array} res - Result array.
     * @param {Number} [attachmentIndex=0] - color attachment index.
     */
    public readAllPixels(res: Uint8Array, attachmentIndex?: number): void;
    /**
     * Activate framebuffer frame to draw.
     * @public
     * @returns {og.webgl.Framebuffer} Returns Current framebuffer.
     */
    public activate(): any;
    /**
     * Deactivate framebuffer frame.
     * @public
     */
    public deactivate(): void;
    /**
     * Gets JavaScript image object that framebuffer has drawn.
     * @public
     * @returns {Object} -
     */
    public getImage(): any;
    /**
     * Open dialog window with framebuffer image.
     * @public
     */
    public openImage(): void;
}
