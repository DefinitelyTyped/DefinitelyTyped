/**
 * A WebGL handler for accessing low-level WebGL capabilities.
 * @class
 * @param {string} id - Canvas element id that WebGL handler assing with. If it's null
 * or undefined creates hidden canvas and handler bacomes hidden.
 * @param {Object} [params] - Handler options:
 * @param {number} [params.anisotropy] - Anisitropy filter degree. 8 is default.
 * @param {number} [params.width] - Hidden handler width. 256 is default.
 * @param {number} [params.height] - Hidden handler height. 256 is default.
 * @param {Object} [param.scontext] - Native WebGL context attributes. See https://www.khronos.org/registry/webgl/specs/latest/1.0/#WEBGLCONTEXTATTRIBUTES
 * @param {Array.<string>} [params.extensions] - Additional WebGL extension list. Available by default: EXT_texture_filter_anisotropic.
 */
export class Handler {
    /**
     * The return value is null if the extension is not supported, or an extension object otherwise.
     * @param {Object} gl - WebGl context pointer.
     * @param {String} name - Extension name.
     * @returns {Object} -
     */
    static getExtension(gl: any, name: string): any;
    /**
     * Returns a drawing context on the canvas, or null if the context identifier is not supported.
     * @param {Object} canvas - HTML canvas object.
     * @param {Object} [contextAttributes] - See canvas.getContext contextAttributes.
     * @returns {Object} -
     */
    static getContext(canvas: any, contextAttributes?: any): any;
    constructor(id: any, params: any);
    /**
     * Application default timer.
     * @public
     * @type {og.Clock}
     */
    public defaultClock: any;
    /**
     * Custom timers.
     * @protected
     * @type{og.Clock[]}
     */
    protected _clocks: any[];
    /**
     * Draw frame time in milliseconds.
     * @public
     * @readonly
     * @type {number}
     */
    public readonly deltaTime: number;
    /**
     * WebGL rendering canvas element.
     * @public
     * @type {Object}
     */
    public canvas: any;
    /**
     * WebGL context.
     * @public
     * @type {Object}
     */
    public gl: any;
    /**
     * Shader program controller list.
     * @public
     * @type {Object.<og.webgl.ProgramController>}
     */
    public programs: any;
    /**
     * Current active shader program controller.
     * @public
     * @type {og.webgl.ProgramController}
     */
    public activeProgram: any;
    /**
     * Handler parameters.
     * @private
     * @type {Object}
     */
    private _params;
    _oneByHeight: number;
    /**
     * Current WebGL extensions. Becomes here after context initialization.
     * @public
     * @type {Object}
     */
    public extensions: any;
    /**
     * HTML Canvas object id.
     * @private
     * @type {Object}
     */
    private _id;
    _lastAnimationFrameTime: number;
    _initialized: boolean;
    /**
     * Animation frame function assigned from outside(Ex. from Renderer).
     * @private
     * @type {frameCallback}
     */
    private _frameCallback;
    transparentTexture: any;
    framebufferStack: Stack;
    /**
     * Sets animation frame function.
     * @public
     * @param {callback} callback - Frame callback.
     */
    public setFrameCallback(callback: any): void;
    /**
     * Creates NEAREST filter texture.
     * @public
     * @param {Object} image - Image or Canvas object.
     * @returns {Object} - WebGL texture object.
     */
    public createTexture_n(image: any): any;
    /**
     * Creates empty texture.
     * @public
     * @param {Number} [width=1] - Specifies the width of the texture image..
     * @param {Number} [height=1] - Specifies the width of the texture image..
     * @param {String} [filter="NEAREST"] - Specifies GL_TEXTURE_MIN(MAX)_FILTER texture value.
     * @param {String} [internalFormat="RGBA"] - Specifies the color components in the texture.
     * @param {String} [format="RGBA"] - Specifies the format of the texel data.
     * @param {String} [type="UNSIGNED_BYTE"] - Specifies the data type of the texel data.
     * @param {Number} [levels=0] - Specifies the level-of-detail number. Level 0 is the base image level. Level n is the nth mipmap reduction image.
     * @returns {Object} - WebGL texture object.
     */
    public createEmptyTexture2DExt(width?: number, height?: number, filter?: string, internalFormat?: string, format?: string, type?: string, level?: number): any;
    /**
     * Creates Empty NEAREST filtered texture.
     * @public
     * @param {number} width - Empty texture width.
     * @param {number} height - Empty texture height.
     * @returns {Object} - WebGL texture object.
     */
    public createEmptyTexture_n(width: number, height: number): any;
    /**
     * Creates empty LINEAR filtered texture.
     * @public
     * @param {number} width - Empty texture width.
     * @param {number} height - Empty texture height.
     * @returns {Object} - WebGL texture object.
     */
    public createEmptyTexture_l(width: number, height: number): any;
    /**
     * Creates LINEAR filter texture.
     * @public
     * @param {Object} image - Image or Canvas object.
     * @returns {Object} - WebGL texture object.
     */
    public createTexture_l(image: any): any;
    /**
     * Creates MIPMAP filter texture.
     * @public
     * @param {Object} image - Image or Canvas object.
     * @returns {Object} - WebGL texture object.
     */
    public createTexture_mm(image: any): any;
    /**
     * Creates ANISOTROPY filter texture.
     * @public
     * @param {Object} image - Image or Canvas object.
     * @returns {Object} - WebGL texture object.
     */
    public createTexture_a(image: any): any;
    /**
     * Creates DEFAULT filter texture, ANISOTROPY is default.
     * @public
     * @param {Object} image - Image or Canvas object.
     * @returns {Object} - WebGL texture object.
     */
    public createTexture(image: any): any;
    /**
     * Creates cube texture.
     * @public
     * @param {Object.<string>} params - Face image urls:
     * @param {string} params.px - Positive X or right image url.
     * @param {string} params.nx - Negative X or left image url.
     * @param {string} params.py - Positive Y or up image url.
     * @param {string} params.ny - Negative Y or bottom image url.
     * @param {string} params.pz - Positive Z or face image url.
     * @param {string} params.nz - Negative Z or back image url.
     * @returns {Object} - WebGL texture object.
     */
    public loadCubeMapTexture(params: any): any;
    /**
     * Adds shader program to the handler.
     * @public
     * @param {og.webgl.Program} program - Shader program.
     * @param {boolean} [notActivate] - If it's true program will not compile.
     * @return {og.webgl.Program} -
     */
    public addProgram(program: any, notActivate?: boolean): any;
    /**
     * Removes shader program from handler.
     * @public
     * @param {String} name - Shader program name.
     */
    public removeProgram(name: string): void;
    /**
     * Adds shader programs to the handler.
     * @public
     * @param {Array.<og.webgl.Program>} programsArr - Shader program array.
     */
    public addPrograms(programsArr: Array<any>): void;
    /**
     * Used in addProgram
     * @private
     * @param {og.webgl.ProgramController} sc - Program controller
     */
    private _initProgramController;
    /**
     * Used in init function.
     * @private
     */
    private _initPrograms;
    /**
     * Initialize additional WebGL extensions.
     * @public
     * @param {string} extensionStr - Extension name.
     * @param {boolean} showLog - Show logging.
     * @return {Object} -
     */
    public initializeExtension(extensionStr: string, showLog: boolean): any;
    /**
     * Main function that initialize handler.
     * @public
     */
    public initialize(): void;
    /**
     * Sets default gl render parameters. Used in init function.
     * @private
     */
    private _setDefaults;
    /**
     * Activate depth test.
     * @public
     */
    public activateDepthTest(): void;
    /**
     * Deactivate depth test.
     * @public
     */
    public deactivateDepthTest(): void;
    /**
     * Activate face culling.
     * @public
     */
    public activateFaceCulling(): void;
    /**
     * Deactivate face cullting.
     * @public
     */
    public deactivateFaceCulling(): void;
    /**
     * Activate blending.
     * @public
     */
    public activateBlending(): void;
    /**
     * Deactivate blending.
     * @public
     */
    public deactivateBlending(): void;
    /**
     * Creates STREAM_DRAW ARRAY buffer.
     * @public
     * @param {Array.<number>} array - Input array.
     * @param {number} itemSize - Array item size.
     * @param {number} numItems - Items quantity.
     * @param {number} [usage=STATIC_DRAW] - Parameter of the bufferData call can be one of STATIC_DRAW, DYNAMIC_DRAW, or STREAM_DRAW.
     * @return {Object} -
     */
    public createStreamArrayBuffer(itemSize: number, numItems: number, usage?: number, bites?: number): any;
    /**
     * Load stream ARRAY buffer.
     * @public
     * @param {Array.<number>} array - Input array.
     * @param {number} itemSize - Array item size.
     * @param {number} numItems - Items quantity.
     * @param {number} [usage=STATIC_DRAW] - Parameter of the bufferData call can be one of STATIC_DRAW, DYNAMIC_DRAW, or STREAM_DRAW.
     * @return {Object} -
     */
    public setStreamArrayBuffer(buffer: any, array: Array<number>, offset?: number): any;
    /**
     * Creates ARRAY buffer.
     * @public
     * @param {Array.<number>} array - Input array.
     * @param {number} itemSize - Array item size.
     * @param {number} numItems - Items quantity.
     * @param {number} [usage=STATIC_DRAW] - Parameter of the bufferData call can be one of STATIC_DRAW, DYNAMIC_DRAW, or STREAM_DRAW.
     * @return {Object} -
     */
    public createArrayBuffer(array: Array<number>, itemSize: number, numItems: number, usage?: number): any;
    /**
     * Creates ELEMENT ARRAY buffer.
     * @public
     * @param {Array.<number>} array - Input array.
     * @param {number} itemSize - Array item size.
     * @param {number} numItems - Items quantity.
     * @param {number} [usage=STATIC_DRAW] - Parameter of the bufferData call can be one of STATIC_DRAW, DYNAMIC_DRAW, or STREAM_DRAW.
     * @return {Object} -
     */
    public createElementArrayBuffer(array: Array<number>, itemSize: number, numItems: number, usage?: number): any;
    /**
     * Sets handler canvas size.
     * @public
     * @param {number} w - Canvas width.
     * @param {number} h - Canvas height.
     */
    public setSize(w: number, h: number): void;
    /**
     * Returns context screen width.
     * @public
     * @returns {number} -
     */
    public getWidth(): number;
    /**
     * Returns context screen height.
     * @public
     * @returns {number} -
     */
    public getHeight(): number;
    /**
     * Returns canvas aspect ratio.
     * @public
     * @returns {number} -
     */
    public getClientAspect(): number;
    /**
     * Returns screen center coordinates.
     * @public
     * @returns {number} -
     */
    public getCenter(): number;
    /**
     * Draw single frame.
     * @public
     * @param {number} now - Frame current time milliseconds.
     */
    public drawFrame(): void;
    /**
     * Clearing gl frame.
     * @public
     */
    public clearFrame(): void;
    /**
     * Starts animation loop.
     * @public
     */
    public start(): void;
    stop(): void;
    _requestAnimationFrameId: number;
    /**
     * Make animation.
     * @private
     */
    private _animationFrameCallback;
    /**
     * Creates default texture object
     * @public
     * @param {Object} [params] - Texture parameters:
     * @param {callback} [success] - Creation callback
     */
    public createDefaultTexture(params?: any, success?: any): void;
    /**
     * @public
     */
    public destroy(): void;
    addClock(clock: any): void;
    addClocks(clockArr: any): void;
    removeClock(clock: any): void;
}
import { Stack } from "../Stack.js";
