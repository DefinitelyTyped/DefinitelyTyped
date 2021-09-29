/**
 * Texture atlas stores images in one texture. Each image has its own
 * atlas texture coordinates.
 * @class
 * @param {number} [width] - Texture atlas width, if it hasn't 1024 default.
 * @param {number} [height] - Texture atlas height, if it hasn't 1024 default..
 */
export class TextureAtlas {
    constructor(width: any, height: any);
    /**
     * Atlas nodes where input images store. It can be access by image.__nodeIndex.
     * @public
     * @type {Array.<og.utils.TextureAtlasNode >}
     */
    public nodes: Array<any>;
    /**
     * Created gl texture.
     * @public
     */
    public texture: any;
    /**
     * Atlas canvas.
     * @public
     * @type {canvas}
     */
    public canvas: any;
    _handler: any;
    _images: any[];
    _btree: TextureAtlasNode;
    _imagesCacheManager: ImagesCacheManager;
    borderSize: number;
    /**
     * Returns atlas javascript image object.
     * @public
     * @returns {Object} -
     */
    public getImage(): any;
    /**
     * Returns canvas object.
     * @public
     * @returns {Object} -
     */
    public getCanvas(): any;
    /**
     * Clear atlas with black.
     * @public
     */
    public clearCanvas(): void;
    /**
     * Sets openglobus gl handler that creates gl texture.
     * @public
     * @param {og.webgl.Handler} handler - WebGL handler.
     */
    public assignHandler(handler: any): void;
    /**
     * Returns image diagonal size.
     * @param {Object} image - JavaSript image object.
     * @returns {number} -
     */
    getDiagonal(image: any): number;
    /**
     * Adds image to the atlas and returns creted node with texture coordinates of the stored image.
     * @public
     * @param {Object} image - Input javascript image object.
     * @param {boolean} [fastInsert] - If it's true atlas doesnt restore all images again
     * and store image in the curent atlas sheme.
     * @returns {og.utils.TextureAtlasNode} -
     */
    public addImage(image: any, fastInsert?: boolean): any;
    _completeNode(nodes: any, node: any): void;
    /**
     * Main atlas making function.
     * @private
     * @param {boolean} [fastInsert] - If it's true atlas doesnt restore all images again
     * and store image in the curent atlas sheme.
     */
    private _makeAtlas;
    /**
     * Creates atlas gl texture.
     * @public
     */
    public createTexture(img: any): void;
    /**
     * Image handler callback.
     * @callback Object~successCallback
     * @param {Image} img - Loaded image.
     */
    /**
     * Asynchronous function that loads and creates image to the image cache, and call success callback when it's done.
     * @public
     * @param {string} src - Image object src string.
     * @param {Object~successCallback} success - The callback that handles the image loads done.
     */
    public loadImage(src: string, success: any): void;
    getImageTexCoordinates(img: any): any;
}
/**
 * Atlas binary tree node.
 * @class
 * @param {og.Rectangle} rect - Node image rectangle.
 */
export class TextureAtlasNode {
    constructor(rect: any, texCoords: any);
    childNodes: any[];
    image: any;
    rect: any;
    texCoords: any;
    atlas: any;
    insert(img: any): any;
}
import { ImagesCacheManager } from "./ImagesCacheManager.js";
