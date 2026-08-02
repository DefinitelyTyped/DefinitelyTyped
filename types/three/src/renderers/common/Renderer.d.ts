import { Camera } from "../../cameras/Camera.js";
import { CoordinateSystem, ShadowMapType, TextureDataType, TimestampQuery, ToneMapping } from "../../constants.js";
import { BufferAttribute, TypedArray } from "../../core/BufferAttribute.js";
import { BufferGeometry, GeometryGroup } from "../../core/BufferGeometry.js";
import { Object3D } from "../../core/Object3D.js";
import { RenderTarget } from "../../core/RenderTarget.js";
import { Material } from "../../materials/Material.js";
import { Box2 } from "../../math/Box2.js";
import { Box3 } from "../../math/Box3.js";
import { Color, ColorRepresentation } from "../../math/Color.js";
import { Vector2 } from "../../math/Vector2.js";
import { Vector3 } from "../../math/Vector3.js";
import { Vector4 } from "../../math/Vector4.js";
import ContextNode from "../../nodes/core/ContextNode.js";
import MRTNode from "../../nodes/core/MRTNode.js";
import Node from "../../nodes/core/Node.js";
import ComputeNode from "../../nodes/gpgpu/ComputeNode.js";
import LightsNode from "../../nodes/lighting/LightsNode.js";
import { Scene } from "../../scenes/Scene.js";
import { FramebufferTexture } from "../../textures/FramebufferTexture.js";
import { Texture } from "../../textures/Texture.js";
import Backend from "./Backend.js";
import CanvasTarget from "./CanvasTarget.js";
import ClippingContext from "./ClippingContext.js";
import IndirectStorageBufferAttribute from "./IndirectStorageBufferAttribute.js";
import Info from "./Info.js";
import InspectorBase from "./InspectorBase.js";
import Lighting from "./Lighting.js";
import NodeLibrary from "./nodes/NodeLibrary.js";
import ReadbackBuffer from "./ReadbackBuffer.js";
import XRManager from "./XRManager.js";

declare module "../../scenes/Scene.js" {
    interface Scene {
        environmentNode?: Node<"vec3"> | null | undefined;
        backgroundNode?: Node | null | undefined;
        fogNode?: Node | null | undefined;
    }
}

interface DeviceLostInfo {
    api: "WebGL" | "WebGPU";
    message: string;
    reason: string | null;
    originalEvent: unknown;
}

export interface RendererParameters {
    logarithmicDepthBuffer?: boolean | undefined;
    reversedDepthBuffer?: boolean | undefined;
    alpha?: boolean | undefined;
    depth?: boolean | undefined;
    stencil?: boolean | undefined;
    antialias?: boolean | undefined;
    samples?: number | undefined;
    getFallback?: ((error: unknown) => Backend) | null | undefined;
    outputBufferType?: TextureDataType | undefined;
    multiview?: boolean | undefined;
}

export interface RenderItem {
    id: number | null;
    object: Object3D | null;
    geometry: BufferGeometry | null;
    material: Material | null;
    groupOrder: number | null;
    renderOrder: number | null;
    z: number | null;
    group: GeometryGroup | null;
    clippingContext: ClippingContext | null;
}

/**
 * Base class for renderers.
 */
declare class Renderer {
    /**
     * Renderer options.
     *
     * @typedef {Object} Renderer~Options
     * @property {boolean} [logarithmicDepthBuffer=false] - Whether logarithmic depth buffer is enabled or not.
     * @property {boolean} [reversedDepthBuffer=false] - Whether reversed depth buffer is enabled or not.
     * @property {boolean} [alpha=true] - Whether the default framebuffer (which represents the final contents of the canvas) should be transparent or opaque.
     * @property {boolean} [depth=true] - Whether the default framebuffer should have a depth buffer or not.
     * @property {boolean} [stencil=false] - Whether the default framebuffer should have a stencil buffer or not.
     * @property {boolean} [antialias=false] - Whether MSAA as the default anti-aliasing should be enabled or not.
     * @property {number} [samples=0] - When `antialias` is `true`, `4` samples are used by default. This parameter can set to any other integer value than 0
     * to overwrite the default.
     * @property {?Function} [getFallback=null] - This callback function can be used to provide a fallback backend, if the primary backend can't be targeted.
     * @property {number} [outputBufferType=HalfFloatType] - Defines the type of output buffers. The default `HalfFloatType` is recommend for best
     * quality. To save memory and bandwidth, `UnsignedByteType` might be used. This will reduce rendering quality though.
     * @property {boolean} [multiview=false] - If set to `true`, the renderer will use multiview during WebXR rendering if supported.
     */
    /**
     * Constructs a new renderer.
     *
     * @param {Backend} backend - The backend the renderer is targeting (e.g. WebGPU or WebGL 2).
     * @param {Renderer~Options} [parameters] - The configuration parameter.
     */
    constructor(backend: Backend, parameters?: RendererParameters);
    /**
     * This flag can be used for type testing.
     *
     * @type {boolean}
     * @readonly
     * @default true
     */
    readonly isRenderer: boolean;
    /**
     * A reference to the current backend.
     *
     * @type {Backend}
     */
    backend: Backend;
    /**
     * Whether the renderer should automatically clear the current rendering target
     * before execute a `render()` call. The target can be the canvas (default framebuffer)
     * or the current bound render target (custom framebuffer).
     *
     * @type {boolean}
     * @default true
     */
    autoClear: boolean;
    /**
     * When `autoClear` is set to `true`, this property defines whether the renderer
     * should clear the color buffer.
     *
     * @type {boolean}
     * @default true
     */
    autoClearColor: boolean;
    /**
     * When `autoClear` is set to `true`, this property defines whether the renderer
     * should clear the depth buffer.
     *
     * @type {boolean}
     * @default true
     */
    autoClearDepth: boolean;
    /**
     * When `autoClear` is set to `true`, this property defines whether the renderer
     * should clear the stencil buffer.
     *
     * @type {boolean}
     * @default true
     */
    autoClearStencil: boolean;
    /**
     * Whether the default framebuffer should be transparent or opaque.
     *
     * @type {boolean}
     * @default true
     */
    alpha: boolean;
    /**
     * Whether logarithmic depth buffer is enabled or not.
     *
     * @type {boolean}
     * @default false
     * @readonly
     */
    readonly logarithmicDepthBuffer: boolean;
    /**
     * Whether reversed depth buffer is enabled or not.
     *
     * @type {boolean}
     * @default false
     * @readonly
     */
    readonly reversedDepthBuffer: boolean;
    /**
     * Defines the output color space of the renderer.
     *
     * @type {string}
     * @default SRGBColorSpace
     */
    outputColorSpace: string;
    /**
     * Defines the tone mapping of the renderer.
     *
     * @type {number}
     * @default NoToneMapping
     */
    toneMapping: ToneMapping;
    /**
     * Defines the tone mapping exposure.
     *
     * @type {number}
     * @default 1
     */
    toneMappingExposure: number;
    /**
     * Whether the renderer should sort its render lists or not.
     *
     * Note: Sorting is used to attempt to properly render objects that have some degree of transparency.
     * By definition, sorting objects may not work in all cases. Depending on the needs of application,
     * it may be necessary to turn off sorting and use other methods to deal with transparency rendering
     * e.g. manually determining each object's rendering order.
     *
     * @type {boolean}
     * @default true
     */
    sortObjects: boolean;
    /**
     * Whether the default framebuffer should have a depth buffer or not.
     *
     * @type {boolean}
     * @default true
     */
    depth: boolean;
    /**
     * Whether the default framebuffer should have a stencil buffer or not.
     *
     * @type {boolean}
     * @default false
     */
    stencil: boolean;
    /**
     * Holds a series of statistical information about the GPU memory
     * and the rendering process. Useful for debugging and monitoring.
     *
     * @type {Info}
     */
    info: Info;
    /**
     * A global context node that stores override nodes for specific transformations or calculations.
     * These nodes can be used to replace default behavior in the rendering pipeline.
     *
     * @type {ContextNode}
     * @property {Object} value - The context value object.
     */
    contextNode: ContextNode<unknown>;
    /**
     * The node library defines how certain library objects like materials, lights
     * or tone mapping functions are mapped to node types. This is required since
     * although instances of classes like `MeshBasicMaterial` or `PointLight` can
     * be part of the scene graph, they are internally represented as nodes for
     * further processing.
     *
     * @type {NodeLibrary}
     */
    library: NodeLibrary;
    /**
     * A map-like data structure for managing lights.
     *
     * @type {Lighting}
     */
    lighting: Lighting;
    /**
     * A callback function that defines what should happen when a device/context lost occurs.
     *
     * @type {Function}
     */
    onDeviceLost: (info: DeviceLostInfo) => void;
    /**
     * A callback function that defines what should happen when an uncaptured
     * backend error is reported (e.g. a WebGPU validation/out-of-memory/internal
     * error raised outside an error scope). Applications can override this to
     * surface errors in their own UI without letting them escalate to a device
     * loss. The default implementation logs to the console.
     *
     * @type {Function}
     */
    onError: (errorMessage: string) => void;
    /**
     * When an override material is in use, this property points to the current
     * source material during the rendering of a render object.
     *
     * @private
     * @type {?Material}
     * @default null
     */
    private _currentSourceMaterial;
    /**
     * Whether the renderer should render transparent render objects or not.
     *
     * @type {boolean}
     * @default true
     */
    transparent: boolean;
    /**
     * Whether the renderer should render opaque render objects or not.
     *
     * @type {boolean}
     * @default true
     */
    opaque: boolean;
    /**
     * Shadow map configuration
     * @typedef {Object} ShadowMapConfig
     * @property {boolean} enabled - Whether to globally enable shadows or not.
     * @property {boolean} transmitted - Whether to enable light transmission through non-opaque materials.
     * @property {number} type - The shadow map type.
     */
    /**
     * The renderer's shadow configuration.
     *
     * @type {ShadowMapConfig}
     */
    shadowMap: {
        /**
         * - Whether to globally enable shadows or not.
         */
        enabled: boolean;
        /**
         * - Whether to enable light transmission through non-opaque materials.
         */
        transmitted: boolean;
        /**
         * - The shadow map type.
         */
        type: ShadowMapType;
    };
    /**
     * XR configuration.
     * @typedef {Object} XRConfig
     * @property {boolean} enabled - Whether to globally enable XR or not.
     */
    /**
     * The renderer's XR manager.
     *
     * @type {XRManager}
     */
    xr: XRManager;
    /**
     * Debug configuration.
     * @typedef {Object} DebugConfig
     * @property {boolean} checkShaderErrors - Whether shader errors should be checked or not.
     * @property {?Function} onShaderError - A callback function that is executed when a shader error happens. Only supported with WebGL 2 right now.
     * @property {Function} getShaderAsync - Allows the get the raw shader code for the given scene, camera and 3D object.
     */
    /**
     * The renderer's debug configuration.
     *
     * @type {DebugConfig}
     */
    debug: {
        /**
         * - Whether shader errors should be checked or not.
         */
        checkShaderErrors: boolean;
        /**
         * - A callback function that is executed when a shader error happens. Only supported with WebGL 2 right now.
         */
        onShaderError:
            | ((
                gl: WebGL2RenderingContext,
                programGPU: WebGLProgram,
                glVertexShader: WebGLShader,
                glFragmentShader: WebGLShader,
            ) => void)
            | null;
        /**
         * - Allows the get the raw shader code for the given scene, camera and 3D object.
         */
        getShaderAsync: (scene: Scene, camera: Camera, object: Object3D) => Promise<{
            fragmentShader: string | null;
            vertexShader: string | null;
        }>;
    };
    /**
     * Initializes the renderer so it is ready for usage.
     *
     * @async
     * @return {Promise<this>} A Promise that resolves when the renderer has been initialized.
     */
    init(): Promise<this>;
    /**
     * A reference to the canvas element the renderer is drawing to.
     * This value of this property will automatically be created by
     * the renderer.
     *
     * @type {HTMLCanvasElement|OffscreenCanvas}
     */
    get domElement(): HTMLCanvasElement;
    /**
     * The coordinate system of the renderer. The value of this property
     * depends on the selected backend. Either `THREE.WebGLCoordinateSystem` or
     * `THREE.WebGPUCoordinateSystem`.
     *
     * @readonly
     * @type {number}
     */
    get coordinateSystem(): CoordinateSystem;
    /**
     * Compiles all materials in the given scene. This can be useful to avoid a
     * phenomenon which is called "shader compilation stutter", which occurs when
     * rendering an object with a new shader for the first time.
     *
     * If you want to add a 3D object to an existing scene, use the third optional
     * parameter for applying the target scene. Note that the (target) scene's lighting
     * and environment must be configured before calling this method.
     *
     * @async
     * @param {Object3D} scene - The scene or 3D object to precompile.
     * @param {Camera} camera - The camera that is used to render the scene.
     * @param {?Scene} targetScene - If the first argument is a 3D object, this parameter must represent the scene the 3D object is going to be added.
     * @return {Promise} A Promise that resolves when the compile has been finished.
     */
    compileAsync(scene: Object3D, camera: Camera, targetScene?: Scene | null): Promise<void>;
    /**
     * Renders the scene in an async fashion.
     *
     * @async
     * @deprecated
     * @param {Object3D} scene - The scene or 3D object to render.
     * @param {Camera} camera - The camera.
     * @return {Promise} A Promise that resolves when the render has been finished.
     */
    renderAsync(scene: Object3D, camera: Camera): Promise<void>;
    /**
     * Can be used to synchronize CPU operations with GPU tasks. So when this method is called,
     * the CPU waits for the GPU to complete its operation (e.g. a compute task).
     *
     * @async
     * @deprecated
     * @return {Promise} A Promise that resolves when synchronization has been finished.
     */
    waitForGPU(): Promise<void>;
    set inspector(value: InspectorBase);
    /**
     * The inspector instance. The inspector can be any class that extends from `InspectorBase`.
     *
     * @type {InspectorBase}
     */
    get inspector(): InspectorBase;
    /**
     * Enables or disables high precision for model-view and normal-view matrices.
     * When enabled, will use CPU 64-bit precision for higher precision instead of GPU 32-bit for higher performance.
     *
     * NOTE: 64-bit precision is not compatible with `InstancedMesh` and `SkinnedMesh`.
     *
     * @param {boolean} value - Whether to enable or disable high precision.
     * @type {boolean}
     */
    set highPrecision(value: boolean);
    /**
     * Returns whether high precision is enabled or not.
     *
     * @return {boolean} Whether high precision is enabled or not.
     * @type {boolean}
     */
    get highPrecision(): boolean;
    /**
     * Sets the given MRT configuration.
     *
     * @param {MRTNode} mrt - The MRT node to set.
     * @return {Renderer} A reference to this renderer.
     */
    setMRT(mrt: MRTNode | null): Renderer;
    /**
     * Returns the MRT configuration.
     *
     * @return {MRTNode} The MRT configuration.
     */
    getMRT(): MRTNode;
    /**
     * Returns the output buffer type.
     *
     * @return {number} The output buffer type.
     */
    getOutputBufferType(): TextureDataType;
    /**
     * Returns the output buffer type.
     *
     * @deprecated since r182. Use `.getOutputBufferType()` instead.
     * @return {number} The output buffer type.
     */
    getColorBufferType(): TextureDataType;
    /**
     * Renders the scene or 3D object with the given camera. This method can only be called
     * if the renderer has been initialized. When using `render()` inside an animation loop,
     * it's guaranteed the renderer will be initialized. The animation loop must be defined
     * with {@link Renderer#setAnimationLoop} though.
     *
     * For all other use cases (like when using on-demand rendering), you must call
     * {@link Renderer#init} before rendering.
     *
     * The target of the method is the default framebuffer (meaning the canvas)
     * or alternatively a render target when specified via `setRenderTarget()`.
     *
     * @param {Object3D} scene - The scene or 3D object to render.
     * @param {Camera} camera - The camera to render the scene with.
     */
    render(scene: Object3D, camera: Camera): void;
    /**
     * Returns whether the renderer has been initialized or not.
     *
     * @readonly
     * @return {boolean} Whether the renderer has been initialized or not.
     */
    get initialized(): boolean;
    /**
     * Returns the maximum available anisotropy for texture filtering.
     *
     * @return {number} The maximum available anisotropy.
     */
    getMaxAnisotropy(): number;
    /**
     * Returns the active cube face.
     *
     * @return {number} The active cube face.
     */
    getActiveCubeFace(): number;
    /**
     * Returns the active mipmap level.
     *
     * @return {number} The active mipmap level.
     */
    getActiveMipmapLevel(): number;
    /**
     * Applications are advised to always define the animation loop
     * with this method and not manually with `requestAnimationFrame()`
     * for best compatibility.
     *
     * @async
     * @param {?onAnimationCallback} callback - The application's animation loop.
     * @return {Promise} A Promise that resolves when the set has been executed.
     */
    setAnimationLoop(callback: ((time: DOMHighResTimeStamp, frame?: XRFrame) => void) | null): Promise<void>;
    /**
     * Returns the current animation loop callback.
     *
     * @return {?Function} The current animation loop callback.
     */
    getAnimationLoop(): ((time: DOMHighResTimeStamp, xrFrame?: XRFrame) => void) | null;
    /**
     * Can be used to transfer buffer data from a storage buffer attribute
     * from the GPU to the CPU in context of compute shaders.
     *
     * @async
     * @param {BufferAttribute} attribute - The storage buffer attribute to read frm.
     * @param {ReadbackBuffer|ArrayBuffer} target - The storage buffer attribute.
     * @param {number} offset - The storage buffer attribute.
     * @param {number} count - The offset from which to start reading the
     * @return {Promise<ArrayBuffer|ReadbackBuffer>} A promise that resolves with the buffer data when the data are ready.
     */
    getArrayBufferAsync(
        attribute: BufferAttribute,
        target?: null,
        offset?: number,
        count?: number,
    ): Promise<ArrayBuffer>;
    getArrayBufferAsync<TTarget extends ReadbackBuffer | ArrayBuffer>(
        attribute: BufferAttribute,
        target: TTarget,
        offset?: number,
        count?: number,
    ): Promise<TTarget>;
    /**
     * Returns the rendering context.
     *
     * @return {GPUCanvasContext|WebGL2RenderingContext} The rendering context.
     */
    getContext(): unknown;
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
     * Defines a manual sort function for the opaque render list.
     * Pass `null` to use the default sort.
     *
     * @param {Function} method - The sort function.
     */
    setOpaqueSort(method: ((a: RenderItem, b: RenderItem) => number) | null): void;
    /**
     * Defines a manual sort function for the transparent render list.
     * Pass `null` to use the default sort.
     *
     * @param {Function} method - The sort function.
     */
    setTransparentSort(method: ((a: RenderItem, b: RenderItem) => number) | null): void;
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
     * @param {number} x - The horizontal coordinate for the upper left corner of the box in logical pixel unit.
     * @param {number} y - The vertical coordinate for the upper left corner of the box in logical pixel unit.
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
     * @param {number} x - The horizontal coordinate for the upper left corner of the viewport origin in logical pixel unit.
     * @param {number} y - The vertical coordinate for the upper left corner of the viewport origin in logical pixel unit.
     * @param {number} width - The width of the viewport in logical pixel unit.
     * @param {number} height - The height of the viewport in logical pixel unit.
     * @param {number} minDepth - The minimum depth value of the viewport. WebGPU only.
     * @param {number} maxDepth - The maximum depth value of the viewport. WebGPU only.
     */
    setViewport(x: number, y: number, width: number, height: number, minDepth?: number, maxDepth?: number): void;
    /**
     * Returns the clear color.
     *
     * @param {Color} target - The method writes the result in this target object.
     * @return {Color} The clear color.
     */
    getClearColor(target: Color): Color;
    /**
     * Defines the clear color and optionally the clear alpha.
     *
     * @param {Color} color - The clear color.
     * @param {number} [alpha=1] - The clear alpha.
     */
    setClearColor(color: ColorRepresentation, alpha?: number): void;
    /**
     * Returns the clear alpha.
     *
     * @return {number} The clear alpha.
     */
    getClearAlpha(): number;
    /**
     * Defines the clear alpha.
     *
     * @param {number} alpha - The clear alpha.
     */
    setClearAlpha(alpha: number): void;
    /**
     * Returns the clear depth.
     *
     * @return {number} The clear depth.
     */
    getClearDepth(): number;
    /**
     * Defines the clear depth.
     *
     * @param {number} depth - The clear depth.
     */
    setClearDepth(depth: number): void;
    /**
     * Returns the clear stencil.
     *
     * @return {number} The clear stencil.
     */
    getClearStencil(): number;
    /**
     * Defines the clear stencil.
     *
     * @param {number} stencil - The clear stencil.
     */
    setClearStencil(stencil: number): void;
    /**
     * This method performs an occlusion query for the given 3D object.
     * It returns `true` if the given 3D object is fully occluded by other
     * 3D objects in the scene.
     *
     * @param {Object3D} object - The 3D object to test.
     * @return {boolean} Whether the 3D object is fully occluded or not.
     */
    isOccluded(object: Object3D): boolean;
    /**
     * Performs a manual clear operation. This method ignores `autoClear` properties.
     *
     * @param {boolean} [color=true] - Whether the color buffer should be cleared or not.
     * @param {boolean} [depth=true] - Whether the depth buffer should be cleared or not.
     * @param {boolean} [stencil=true] - Whether the stencil buffer should be cleared or not.
     */
    clear(color?: boolean, depth?: boolean, stencil?: boolean): void;
    /**
     * Performs a manual clear operation of the color buffer. This method ignores `autoClear` properties.
     */
    clearColor(): void;
    /**
     * Performs a manual clear operation of the depth buffer. This method ignores `autoClear` properties.
     */
    clearDepth(): void;
    /**
     * Performs a manual clear operation of the stencil buffer. This method ignores `autoClear` properties.
     */
    clearStencil(): void;
    /**
     * Async version of {@link Renderer#clear}.
     *
     * @async
     * @deprecated
     * @param {boolean} [color=true] - Whether the color buffer should be cleared or not.
     * @param {boolean} [depth=true] - Whether the depth buffer should be cleared or not.
     * @param {boolean} [stencil=true] - Whether the stencil buffer should be cleared or not.
     * @return {Promise} A Promise that resolves when the clear operation has been executed.
     */
    clearAsync(color?: boolean, depth?: boolean, stencil?: boolean): Promise<void>;
    /**
     * Async version of {@link Renderer#clearColor}.
     *
     * @async
     * @deprecated
     * @return {Promise} A Promise that resolves when the clear operation has been executed.
     */
    clearColorAsync(): Promise<void>;
    /**
     * Async version of {@link Renderer#clearDepth}.
     *
     * @async
     * @deprecated
     * @return {Promise} A Promise that resolves when the clear operation has been executed.
     */
    clearDepthAsync(): Promise<void>;
    /**
     * Async version of {@link Renderer#clearStencil}.
     *
     * @async
     * @deprecated
     * @return {Promise} A Promise that resolves when the clear operation has been executed.
     */
    clearStencilAsync(): Promise<void>;
    /**
     * Returns `true` if a framebuffer target is needed to perform tone mapping or color space conversion.
     * If this is the case, the renderer allocates an internal render target for that purpose.
     */
    get needsFrameBufferTarget(): boolean;
    /**
     * The number of samples used for multi-sample anti-aliasing (MSAA).
     *
     * @type {number}
     * @default 0
     */
    get samples(): number;
    /**
     * The current number of samples used for multi-sample anti-aliasing (MSAA).
     *
     * When rendering to a custom render target, the number of samples of that render target is used.
     * If the renderer needs an internal framebuffer target for tone mapping or color space conversion,
     * the number of samples is set to 0.
     *
     * @type {number}
     */
    get currentSamples(): number;
    /**
     * The current tone mapping of the renderer. When not producing screen output,
     * the tone mapping is always `NoToneMapping`.
     *
     * @type {number}
     */
    get currentToneMapping(): ToneMapping;
    /**
     * The current color space of the renderer. When not producing screen output,
     * the color space is always the working color space.
     *
     * @type {string}
     */
    get currentColorSpace(): string;
    /**
     * Returns `true` if the rendering settings are set to screen output.
     *
     * @returns {boolean} True if the current render target is the same of output render target or `null`, otherwise false.
     */
    get isOutputTarget(): boolean;
    /**
     * Frees all internal resources of the renderer. Call this method if the renderer
     * is no longer in use by your app.
     */
    dispose(): void;
    /**
     * Sets the given render target. Calling this method means the renderer does not
     * target the default framebuffer (meaning the canvas) anymore but a custom framebuffer.
     * Use `null` as the first argument to reset the state.
     *
     * @param {?RenderTarget} renderTarget - The render target to set.
     * @param {number} [activeCubeFace=0] - The active cube face.
     * @param {number} [activeMipmapLevel=0] - The active mipmap level.
     */
    setRenderTarget(renderTarget: RenderTarget | null, activeCubeFace?: number, activeMipmapLevel?: number): void;
    /**
     * Returns the current render target.
     *
     * @return {?RenderTarget} The render target. Returns `null` if no render target is set.
     */
    getRenderTarget(): RenderTarget<Texture<unknown>> | null;
    /**
     * Sets the output render target for the renderer.
     *
     * @param {?RenderTarget} renderTarget - The render target to set as the output target.
     */
    setOutputRenderTarget(renderTarget: RenderTarget | null): void;
    /**
     * Returns the current output target.
     *
     * @return {?RenderTarget} The current output render target. Returns `null` if no output target is set.
     */
    getOutputRenderTarget(): RenderTarget<Texture<unknown>> | null;
    /**
     * Sets the canvas target. The canvas target manages the HTML canvas
     * or the offscreen canvas the renderer draws into.
     *
     * @param {CanvasTarget} canvasTarget - The canvas target.
     */
    setCanvasTarget(canvasTarget: CanvasTarget): void;
    /**
     * Returns the current canvas target.
     *
     * @return {CanvasTarget} The current canvas target.
     */
    getCanvasTarget(): CanvasTarget;
    /**
     * Callback for {@link Renderer#setRenderObjectFunction}.
     *
     * @callback renderObjectFunction
     * @param {Object3D} object - The 3D object.
     * @param {Scene} scene - The scene the 3D object belongs to.
     * @param {Camera} camera - The camera the object should be rendered with.
     * @param {BufferGeometry} geometry - The object's geometry.
     * @param {Material} material - The object's material.
     * @param {?Object} group - Only relevant for objects using multiple materials. This represents a group entry from the respective `BufferGeometry`.
     * @param {LightsNode} lightsNode - The current lights node.
     * @param {ClippingContext} clippingContext - The clipping context.
     * @param {?string} [passId=null] - An optional ID for identifying the pass.
     */
    /**
     * Sets the given render object function. Calling this method overwrites the default implementation
     * which is {@link Renderer#renderObject}. Defining a custom function can be useful
     * if you want to modify the way objects are rendered. For example you can define things like "every
     * object that has material of a certain type should perform a pre-pass with a special overwrite material".
     * The custom function must always call `renderObject()` in its implementation.
     *
     * Use `null` as the first argument to reset the state.
     *
     * @param {?renderObjectFunction} renderObjectFunction - The render object function.
     */
    setRenderObjectFunction(
        renderObjectFunction:
            | ((
                object: Object3D,
                scene: Scene,
                camera: Camera,
                geometry: BufferGeometry,
                material: Material,
                group: GeometryGroup | null,
                lightsNode: LightsNode,
                clippingContext: ClippingContext,
                passId?: string | null | undefined,
            ) => void)
            | null,
    ): void;
    /**
     * Returns the current render object function.
     *
     * @return {?Function} The current render object function. Returns `null` if no function is set.
     */
    getRenderObjectFunction():
        | ((
            object: Object3D,
            scene: Scene,
            camera: Camera,
            geometry: BufferGeometry,
            material: Material,
            group: GeometryGroup | null,
            lightsNode: LightsNode,
            clippingContext: ClippingContext,
            passId?: string | null | undefined,
        ) => void)
        | null;
    /**
     * Execute a single or an array of compute nodes. This method can only be called
     * if the renderer has been initialized.
     *
     * @param {Node|Array<Node>} computeNodes - The compute node(s).
     * @param {number|Array<number>|IndirectStorageBufferAttribute} [dispatchSize=null]
     * - A single number representing count, or
     * - An array [x, y, z] representing dispatch size, or
     * - A IndirectStorageBufferAttribute for indirect dispatch size.
     * @return {Promise|undefined} A Promise that resolve when the compute has finished. Only returned when the renderer has not been initialized.
     */
    compute(
        computeNodes: ComputeNode | ComputeNode[],
        dispatchSize?: number | number[] | IndirectStorageBufferAttribute,
    ): Promise<void> | undefined;
    /**
     * Execute a single or an array of compute nodes.
     *
     * @async
     * @param {Node|Array<Node>} computeNodes - The compute node(s).
     * @param {number|Array<number>|IndirectStorageBufferAttribute} [dispatchSize=null]
     * - A single number representing count, or
     * - An array [x, y, z] representing dispatch size, or
     * - A IndirectStorageBufferAttribute for indirect dispatch size.
     * @return {Promise} A Promise that resolve when the compute has finished.
     */
    computeAsync(
        computeNodes: ComputeNode | ComputeNode[],
        dispatchSize?: number | number[] | IndirectStorageBufferAttribute,
    ): Promise<void>;
    /**
     * Checks if the given feature is supported by the selected backend.
     *
     * @async
     * @deprecated
     * @param {string} name - The feature's name.
     * @return {Promise<boolean>} A Promise that resolves with a bool that indicates whether the feature is supported or not.
     */
    hasFeatureAsync(name: string): Promise<boolean>;
    resolveTimestampsAsync(type?: TimestampQuery): Promise<number | undefined>;
    /**
     * Checks if the given feature is supported by the selected backend. If the
     * renderer has not been initialized, this method always returns `false`.
     *
     * @param {string} name - The feature's name.
     * @return {boolean} Whether the feature is supported or not.
     */
    hasFeature(name: string): boolean;
    /**
     * Returns `true` when the renderer has been initialized.
     *
     * @return {boolean} Whether the renderer has been initialized or not.
     */
    hasInitialized(): boolean;
    /**
     * Initializes the given textures. Useful for preloading a texture rather than waiting until first render
     * (which can cause noticeable lags due to decode and GPU upload overhead).
     *
     * @async
     * @deprecated
     * @param {Texture} texture - The texture.
     * @return {Promise} A Promise that resolves when the texture has been initialized.
     */
    initTextureAsync(texture: Texture): Promise<void>;
    /**
     * Initializes the given texture. Useful for preloading a texture rather than waiting until first render
     * (which can cause noticeable lags due to decode and GPU upload overhead).
     *
     * This method can only be used if the renderer has been initialized.
     *
     * @param {Texture} texture - The texture.
     */
    initTexture(texture: Texture): void;
    /**
     * Initializes the given render target.
     *
     * @param {RenderTarget} renderTarget - The render target to intialize.
     */
    initRenderTarget(renderTarget: RenderTarget): void;
    /**
     * Copies the current bound framebuffer into the given texture.
     *
     * @param {FramebufferTexture} framebufferTexture - The texture.
     * @param {?(Vector2|Vector4)} [rectangle=null] - A two or four dimensional vector that defines the rectangular portion of the framebuffer that should be copied.
     */
    copyFramebufferToTexture(framebufferTexture: FramebufferTexture, rectangle?: (Vector2 | Vector4) | null): void;
    /**
     * Copies data of the given source texture into a destination texture.
     *
     * @param {Texture} srcTexture - The source texture.
     * @param {Texture} dstTexture - The destination texture.
     * @param {Box2|Box3} [srcRegion=null] - A bounding box which describes the source region. Can be two or three-dimensional.
     * @param {Vector2|Vector3} [dstPosition=null] - A vector that represents the origin of the destination region. Can be two or three-dimensional.
     * @param {number} [srcLevel=0] - The source mip level to copy from.
     * @param {number} [dstLevel=0] - The destination mip level to copy to.
     */
    copyTextureToTexture(
        srcTexture: Texture,
        dstTexture: Texture,
        srcRegion?: Box2 | Box3 | null,
        dstPosition?: Vector2 | Vector3 | null,
        srcLevel?: number,
        dstLevel?: number,
    ): void;
    /**
     * Reads pixel data from the given render target.
     *
     * @async
     * @param {RenderTarget} renderTarget - The render target to read from.
     * @param {number} x - The `x` coordinate of the copy region's origin.
     * @param {number} y - The `y` coordinate of the copy region's origin.
     * @param {number} width - The width of the copy region.
     * @param {number} height - The height of the copy region.
     * @param {number} [textureIndex=0] - The texture index of a MRT render target.
     * @param {number} [faceIndex=0] - The active cube face index.
     * @return {Promise<TypedArray>} A Promise that resolves when the read has been finished. The resolve provides the read data as a typed array.
     */
    readRenderTargetPixelsAsync(
        renderTarget: RenderTarget,
        x: number,
        y: number,
        width: number,
        height: number,
        textureIndex?: number,
        faceIndex?: number,
    ): Promise<TypedArray>;
    /**
     * This method represents the default render object function that manages the render lifecycle
     * of the object.
     *
     * @param {Object3D} object - The 3D object.
     * @param {Scene} scene - The scene the 3D object belongs to.
     * @param {Camera} camera - The camera the object should be rendered with.
     * @param {BufferGeometry} geometry - The object's geometry.
     * @param {Material} material - The object's material.
     * @param {?Object} group - Only relevant for objects using multiple materials. This represents a group entry from the respective `BufferGeometry`.
     * @param {LightsNode} lightsNode - The current lights node.
     * @param {?ClippingContext} clippingContext - The clipping context.
     * @param {?string} [passId=null] - An optional ID for identifying the pass.
     */
    renderObject(
        object: Object3D,
        scene: Scene,
        camera: Camera,
        geometry: BufferGeometry,
        material: Material,
        group: GeometryGroup | null,
        lightsNode: LightsNode,
        clippingContext?: ClippingContext | null,
        passId?: string | null,
    ): void;
    /**
     * Checks if the given compatibility is supported by the selected backend.
     *
     * @param {string} name - The compatibility's name.
     * @return {boolean} Whether the compatibility is supported or not.
     */
    hasCompatibility(name: string): boolean;
    /**
     * Alias for `compileAsync()`.
     *
     * @method
     * @param {Object3D} scene - The scene or 3D object to precompile.
     * @param {Camera} camera - The camera that is used to render the scene.
     * @param {Scene} targetScene - If the first argument is a 3D object, this parameter must represent the scene the 3D object is going to be added.
     * @return {function(Object3D, Camera, ?Scene): Promise|undefined} A Promise that resolves when the compile has been finished.
     */
    get compile(): (scene: Object3D, camera: Camera, targetScene?: Scene | null) => Promise<void>;
}

export default Renderer;
