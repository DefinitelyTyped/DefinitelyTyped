/**
 * Class represents multisample framebuffer.
 * @class
 * @param {og.webgl.Handler} handler - WebGL handler.
 * @param {Object} [options] - Framebuffer options:
 * @param {number} [options.width] - Framebuffer width. Default is handler canvas width.
 * @param {number} [options.height] - Framebuffer height. Default is handler canvas height.
 * @param {Object} [options.texture] - Texture to render.
 * @param {String} [options.depthComponent="DEPTH_COMPONENT16"] - Specifies depth buffer size.
 * @param {Boolean} [options.useDepth] - Using depth buffer during the rendering.
 */
export class Multisample {
    constructor(handler: any, options: any);
    /**
     * WebGL handler.
     * @public
     * @type {og.webgl.Handler}
     */
    public handler: any;
    _internalFormat: any;
    /**
     * Framebuffer object.
     * @private
     * @type {Object}
     */
    private _fbo;
    /**
     * Renderbuffer object.
     * @private
     * @type {Object}
     */
    private _depthRenderbuffer;
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
    _msaa: any;
    _useDepth: any;
    _depthComponent: any;
    /**
     * Framebuffer activity.
     * @private
     * @type {boolean}
     */
    private _active;
    _size: any;
    _filter: any;
    _glFilter: any;
    renderbuffers: any[];
    destroy(): void;
    /**
     * Framebuffer initialization.
     * @private
     */
    private init;
    blitTo(framebuffer: any, attachmentIndex?: number): void;
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
}
