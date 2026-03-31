import { EventDispatcher } from "../../core/EventDispatcher.js";
import { Vector2 } from "../../math/Vector2.js";
import { Vector4 } from "../../math/Vector4.js";
import { DepthTexture } from "../../textures/DepthTexture.js";
import { FramebufferTexture } from "../../textures/FramebufferTexture.js";

export interface CanvasTargetEventMap {
    resize: {};
    dispose: {};
}

/**
 * CanvasTarget is a class that represents the final output destination of the renderer.
 *
 * @augments EventDispatcher
 */
declare class CanvasTarget extends EventDispatcher<CanvasTargetEventMap> {
    /**
     * Constructs a new CanvasTarget.
     *
     * @param {HTMLCanvasElement|OffscreenCanvas} domElement - The canvas element to render to.
     */
    constructor(domElement: HTMLCanvasElement | OffscreenCanvas);
    /**
     * A reference to the canvas element the renderer is drawing to.
     * This value of this property will automatically be created by
     * the renderer.
     *
     * @type {HTMLCanvasElement|OffscreenCanvas}
     */
    domElement: HTMLCanvasElement | OffscreenCanvas;
    /**
     * The renderer's pixel ratio.
     *
     * @private
     * @type {number}
     * @default 1
     */
    private _pixelRatio;
    /**
     * The width of the renderer's default framebuffer in logical pixel unit.
     *
     * @private
     * @type {number}
     */
    private _width;
    /**
     * The height of the renderer's default framebuffer in logical pixel unit.
     *
     * @private
     * @type {number}
     */
    private _height;
    /**
     * The viewport of the renderer in logical pixel unit.
     *
     * @private
     * @type {Vector4}
     */
    private _viewport;
    /**
     * The scissor rectangle of the renderer in logical pixel unit.
     *
     * @private
     * @type {Vector4}
     */
    private _scissor;
    /**
     * Whether the scissor test should be enabled or not.
     *
     * @private
     * @type {boolean}
     */
    private _scissorTest;
    /**
     * The color texture of the default framebuffer.
     *
     * @type {FramebufferTexture}
     */
    colorTexture: FramebufferTexture;
    /**
     * The depth texture of the default framebuffer.
     *
     * @type {DepthTexture}
     */
    depthTexture: DepthTexture;
    /**
     * Returns the pixel ratio.
     *
     * @return {number} The pixel ratio.
     */
    getPixelRatio(): number;
    /**
     * Returns the drawing buffer size in physical pixels. This method honors the pixel ratio.
     *
     * @param {Vector2} target - The method writes the result in this target object.
     * @return {Vector2} The drawing buffer size.
     */
    getDrawingBufferSize(target: Vector2): Vector2;
    /**
     * Returns the renderer's size in logical pixels. This method does not honor the pixel ratio.
     *
     * @param {Vector2} target - The method writes the result in this target object.
     * @return {Vector2} The renderer's size in logical pixels.
     */
    getSize(target: Vector2): Vector2;
    /**
     * Sets the given pixel ratio and resizes the canvas if necessary.
     *
     * @param {number} [value=1] - The pixel ratio.
     */
    setPixelRatio(value?: number): void;
    /**
     * This method allows to define the drawing buffer size by specifying
     * width, height and pixel ratio all at once. The size of the drawing
     * buffer is computed with this formula:
     * ```js
     * size.x = width * pixelRatio;
     * size.y = height * pixelRatio;
     * ```
     *
     * @param {number} width - The width in logical pixels.
     * @param {number} height - The height in logical pixels.
     * @param {number} pixelRatio - The pixel ratio.
     */
    setDrawingBufferSize(width: number, height: number, pixelRatio: number): void;
    /**
     * Sets the size of the renderer.
     *
     * @param {number} width - The width in logical pixels.
     * @param {number} height - The height in logical pixels.
     * @param {boolean} [updateStyle=true] - Whether to update the `style` attribute of the canvas or not.
     */
    setSize(width: number, height: number, updateStyle?: boolean): void;
    /**
     * Returns the scissor rectangle.
     *
     * @param {Vector4} target - The method writes the result in this target object.
     * @return {Vector4} The scissor rectangle.
     */
    getScissor(target: Vector4): Vector4;
    /**
     * Defines the scissor rectangle.
     */
    setScissor(x: Vector4): void;
    /**
     * Defines the scissor rectangle.
     *
     * @param {number | Vector4} x - The horizontal coordinate for the lower left corner of the box in logical pixel unit.
     * Instead of passing four arguments, the method also works with a single four-dimensional vector.
     * @param {number} y - The vertical coordinate for the lower left corner of the box in logical pixel unit.
     * @param {number} width - The width of the scissor box in logical pixel unit.
     * @param {number} height - The height of the scissor box in logical pixel unit.
     */
    setScissor(x: number, y: number, width: number, height: number): void;
    /**
     * Returns the scissor test value.
     *
     * @return {boolean} Whether the scissor test should be enabled or not.
     */
    getScissorTest(): boolean;
    /**
     * Defines the scissor test.
     *
     * @param {boolean} boolean - Whether the scissor test should be enabled or not.
     */
    setScissorTest(boolean: boolean): void;
    /**
     * Returns the viewport definition.
     *
     * @param {Vector4} target - The method writes the result in this target object.
     * @return {Vector4} The viewport definition.
     */
    getViewport(target: Vector4): Vector4;
    /**
     * Defines the viewport.
     */
    setViewport(x: Vector4): void;
    /**
     * Defines the viewport.
     *
     * @param {number | Vector4} x - The horizontal coordinate for the lower left corner of the viewport origin in logical pixel unit.
     * @param {number} y - The vertical coordinate for the lower left corner of the viewport origin  in logical pixel unit.
     * @param {number} width - The width of the viewport in logical pixel unit.
     * @param {number} height - The height of the viewport in logical pixel unit.
     * @param {number} minDepth - The minimum depth value of the viewport. WebGPU only.
     * @param {number} maxDepth - The maximum depth value of the viewport. WebGPU only.
     */
    setViewport(x: number, y: number, width: number, height: number, minDepth?: number, maxDepth?: number): void;
    /**
     * Dispatches the resize event.
     *
     * @private
     */
    private _dispatchResize;
    /**
     * Frees the GPU-related resources allocated by this instance. Call this
     * method whenever this instance is no longer used in your app.
     *
     * @fires RenderTarget#dispose
     */
    dispose(): void;
}

export default CanvasTarget;
