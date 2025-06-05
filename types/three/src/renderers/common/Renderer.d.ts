import { Camera } from "../../cameras/Camera.js";
import { ShadowMapType, TextureDataType, TimestampQuery, ToneMapping } from "../../constants.js";
import { BufferAttribute } from "../../core/BufferAttribute.js";
import { BufferGeometry, GeometryGroup } from "../../core/BufferGeometry.js";
import { Object3D } from "../../core/Object3D.js";
import { RenderTarget } from "../../core/RenderTarget.js";
import { Material } from "../../materials/Material.js";
import { Box2 } from "../../math/Box2.js";
import { Box3 } from "../../math/Box3.js";
import { ColorRepresentation } from "../../math/Color.js";
import { Vector2 } from "../../math/Vector2.js";
import { Vector3 } from "../../math/Vector3.js";
import { Vector4 } from "../../math/Vector4.js";
import MRTNode from "../../nodes/core/MRTNode.js";
import ComputeNode from "../../nodes/gpgpu/ComputeNode.js";
import LightsNode from "../../nodes/lighting/LightsNode.js";
import { Group } from "../../objects/Group.js";
import { Scene } from "../../scenes/Scene.js";
import { FramebufferTexture } from "../../textures/FramebufferTexture.js";
import { Texture } from "../../textures/Texture.js";
import Animation from "./Animation.js";
import Attributes from "./Attributes.js";
import Backend from "./Backend.js";
import Background from "./Background.js";
import Bindings from "./Bindings.js";
import ClippingContext from "./ClippingContext.js";
import Color4 from "./Color4.js";
import Geometries from "./Geometries.js";
import Info from "./Info.js";
import Lighting from "./Lighting.js";
import NodeLibrary from "./nodes/NodeLibrary.js";
import Nodes from "./nodes/Nodes.js";
import Pipelines from "./Pipelines.js";
import QuadMesh from "./QuadMesh.js";
import RenderBundle from "./RenderBundle.js";
import RenderBundles from "./RenderBundles.js";
import RenderContext from "./RenderContext.js";
import RenderContexts from "./RenderContexts.js";
import RenderList, { Bundle, RenderItem } from "./RenderList.js";
import RenderLists from "./RenderLists.js";
import RenderObjects from "./RenderObjects.js";
import Textures from "./Textures.js";
import XRManager from "./XRManager.js";
interface Rectangle {
    x: number;
    y: number;
    z: number;
    w: number;
}
interface DeviceLostInfo {
    api: "WebGL" | "WebGPU";
    message: string;
    reason: string | null;
    originalEvent: unknown;
}
export interface RendererParameters {
    logarithmicDepthBuffer?: boolean | undefined;
    alpha?: boolean | undefined;
    depth?: boolean | undefined;
    stencil?: boolean | undefined;
    antialias?: boolean | undefined;
    samples?: number | undefined;
    getFallback?: ((error: unknown) => Backend) | null | undefined;
    colorBufferType?: TextureDataType | undefined;
    multiview?: boolean | undefined;
}
/**
 * Base class for renderers.
 */
declare class Renderer {
    readonly isRenderer: true;
    domElement: HTMLCanvasElement;
    backend: Backend;
    samples: number;
    autoClear: boolean;
    autoClearColor: boolean;
    autoClearDepth: boolean;
    autoClearStencil: boolean;
    alpha: boolean;
    logarithmicDepthBuffer: boolean;
    outputColorSpace: string;
    toneMapping: ToneMapping;
    toneMappingExposure: number;
    sortObjects: boolean;
    depth: boolean;
    stencil: boolean;
    info: Info;
    library: NodeLibrary;
    lighting: Lighting;
    _getFallback: ((error: unknown) => Backend) | null;
    _pixelRatio: number;
    _width: number;
    _height: number;
    _viewport: Vector4;
    _scissor: Vector4;
    _scissorTest: boolean;
    _attributes: Attributes | null;
    _geometries: Geometries | null;
    _nodes: Nodes | null;
    _animation: Animation | null;
    _bindings: Bindings | null;
    _objects: RenderObjects | null;
    _pipelines: Pipelines | null;
    _bundles: RenderBundles | null;
    _renderLists: RenderLists | null;
    _renderContexts: RenderContexts | null;
    _textures: Textures | null;
    _background: Background | null;
    _quad: QuadMesh;
    _currentRenderContext: RenderContext | null;
    _opaqueSort: ((a: RenderItem, b: RenderItem) => number) | null;
    _transparentSort: ((a: RenderItem, b: RenderItem) => number) | null;
    _frameBufferTarget: RenderTarget | null;
    _clearColor: Color4;
    _clearDepth: number;
    _clearStencil: number;
    _renderTarget: RenderTarget | null;
    _activeCubeFace: number;
    _activeMipmapLevel: number;
    _outputRenderTarget: RenderTarget | null;
    _mrt: MRTNode | null;
    _renderObjectFunction:
        | ((
            object: Object3D,
            scene: Scene,
            camera: Camera,
            geometry: BufferGeometry,
            material: Material,
            group: GeometryGroup,
            lightsNode: LightsNode,
            clippingContext: ClippingContext | null,
            passId: string | null,
        ) => void)
        | null;
    _currentRenderObjectFunction:
        | ((
            object: Object3D,
            scene: Scene,
            camera: Camera,
            geometry: BufferGeometry,
            material: Material,
            group: GeometryGroup,
            lightsNode: LightsNode,
            clippingContext: ClippingContext | null,
            passId: string | null,
        ) => void)
        | null;
    _currentRenderBundle: RenderBundle | null;
    _handleObjectFunction: (
        object: Object3D,
        material: Material,
        scene: Scene,
        camera: Camera,
        lightsNode: LightsNode,
        group: GeometryGroup,
        clippingContext: ClippingContext | null,
        passId?: string,
    ) => void;
    _isDeviceLost: boolean;
    onDeviceLost: (info: DeviceLostInfo) => void;
    _colorBufferType: TextureDataType;
    _initialized: boolean;
    _initPromise: Promise<this> | null;
    _compilationPromises: Promise<void>[] | null;
    transparent: boolean;
    opaque: boolean;
    shadowMap: {
        enabled: boolean;
        type: ShadowMapType | null;
    };
    xr: XRManager;
    debug: {
        checkShaderErrors: boolean;
        onShaderError:
            | ((
                gl: WebGL2RenderingContext,
                programGPU: WebGLProgram,
                glVertexShader: WebGLShader,
                glFragmentShader: WebGLShader,
            ) => void)
            | null;
        getShaderAsync: (scene: Scene, camera: Camera, object: Object3D) => Promise<{
            fragmentShader: string | null;
            vertexShader: string | null;
        }>;
    };
    localClippingEnabled?: boolean | undefined;
    /**
     * Renderer options.
     *
     * @typedef {Object} Renderer~Options
     * @property {boolean} [logarithmicDepthBuffer=false] - Whether logarithmic depth buffer is enabled or not.
     * @property {boolean} [alpha=true] - Whether the default framebuffer (which represents the final contents of the canvas) should be transparent or opaque.
     * @property {boolean} [depth=true] - Whether the default framebuffer should have a depth buffer or not.
     * @property {boolean} [stencil=false] - Whether the default framebuffer should have a stencil buffer or not.
     * @property {boolean} [antialias=false] - Whether MSAA as the default anti-aliasing should be enabled or not.
     * @property {number} [samples=0] - When `antialias` is `true`, `4` samples are used by default. This parameter can set to any other integer value than 0
     * to overwrite the default.
     * @property {?Function} [getFallback=null] - This callback function can be used to provide a fallback backend, if the primary backend can't be targeted.
     * @property {number} [colorBufferType=HalfFloatType] - Defines the type of color buffers. The default `HalfFloatType` is recommend for best
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
     * Initializes the renderer so it is ready for usage.
     *
     * @async
     * @return {Promise<this>} A Promise that resolves when the renderer has been initialized.
     */
    init(): Promise<this>;
    /**
     * The coordinate system of the renderer. The value of this property
     * depends on the selected backend. Either `THREE.WebGLCoordinateSystem` or
     * `THREE.WebGPUCoordinateSystem`.
     *
     * @readonly
     * @type {number}
     */
    get coordinateSystem(): import("../../constants.js").CoordinateSystem;
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
     * @return {Promise<Array|undefined>} A Promise that resolves when the compile has been finished.
     */
    compileAsync(scene: Object3D, camera: Camera, targetScene?: Object3D | null): Promise<void>;
    /**
     * Renders the scene in an async fashion.
     *
     * @async
     * @param {Object3D} scene - The scene or 3D object to render.
     * @param {Camera} camera - The camera.
     * @return {Promise} A Promise that resolves when the render has been finished.
     */
    renderAsync(scene: Scene, camera: Camera): Promise<void>;
    /**
     * Can be used to synchronize CPU operations with GPU tasks. So when this method is called,
     * the CPU waits for the GPU to complete its operation (e.g. a compute task).
     *
     * @async
     * @return {Promise} A Promise that resolves when synchronization has been finished.
     */
    waitForGPU(): Promise<void>;
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
    setMRT(mrt: MRTNode | null): this;
    /**
     * Returns the MRT configuration.
     *
     * @return {MRTNode} The MRT configuration.
     */
    getMRT(): MRTNode | null;
    /**
     * Returns the color buffer type.
     *
     * @return {number} The color buffer type.
     */
    getColorBufferType(): TextureDataType;
    /**
     * Default implementation of the device lost callback.
     *
     * @private
     * @param {Object} info - Information about the context lost.
     */
    _onDeviceLost(info: DeviceLostInfo): void;
    /**
     * Renders the given render bundle.
     *
     * @private
     * @param {Object} bundle - Render bundle data.
     * @param {Scene} sceneRef - The scene the render bundle belongs to.
     * @param {LightsNode} lightsNode - The lights node.
     */
    _renderBundle(bundle: Bundle, sceneRef: Scene, lightsNode: LightsNode): void;
    /**
     * Renders the scene or 3D object with the given camera. This method can only be called
     * if the renderer has been initialized.
     *
     * The target of the method is the default framebuffer (meaning the canvas)
     * or alternatively a render target when specified via `setRenderTarget()`.
     *
     * @param {Object3D} scene - The scene or 3D object to render.
     * @param {Camera} camera - The camera to render the scene with.
     * @return {?Promise} A Promise that resolve when the scene has been rendered.
     * Only returned when the renderer has not been initialized.
     */
    render(scene: Scene, camera: Camera): Promise<void> | undefined;
    /**
     * Returns an internal render target which is used when computing the output tone mapping
     * and color space conversion. Unlike in `WebGLRenderer`, this is done in a separate render
     * pass and not inline to achieve more correct results.
     *
     * @private
     * @return {?RenderTarget} The render target. The method returns `null` if no output conversion should be applied.
     */
    _getFrameBufferTarget(): RenderTarget<Texture> | null;
    /**
     * Renders the scene or 3D object with the given camera.
     *
     * @private
     * @param {Object3D} scene - The scene or 3D object to render.
     * @param {Camera} camera - The camera to render the scene with.
     * @param {boolean} [useFrameBufferTarget=true] - Whether to use a framebuffer target or not.
     * @return {RenderContext} The current render context.
     */
    _renderScene(scene: Scene, camera: Camera, useFrameBufferTarget?: boolean): RenderContext | undefined;
    _setXRLayerSize(width: number, height: number): void;
    /**
     * The output pass performs tone mapping and color space conversion.
     *
     * @private
     * @param {RenderTarget} renderTarget - The current render target.
     */
    _renderOutput(renderTarget: RenderTarget): void;
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
     * @param {?Function} callback - The application's animation loop.
     * @return {Promise} A Promise that resolves when the set has been executed.
     */
    setAnimationLoop(callback: ((time: DOMHighResTimeStamp, frame?: XRFrame) => void) | null): Promise<void>;
    /**
     * Can be used to transfer buffer data from a storage buffer attribute
     * from the GPU to the CPU in context of compute shaders.
     *
     * @async
     * @param {StorageBufferAttribute} attribute - The storage buffer attribute.
     * @return {Promise<ArrayBuffer>} A promise that resolves with the buffer data when the data are ready.
     */
    getArrayBufferAsync(attribute: BufferAttribute): Promise<ArrayBuffer>;
    /**
     * Returns the rendering context.
     *
     * @return {GPUCanvasContext|WebGL2RenderingContext} The rendering context.
     */
    getContext(): void;
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
     *
     * @param {number | Vector4} x - The horizontal coordinate for the lower left corner of the box in logical pixel unit.
     * Instead of passing four arguments, the method also works with a single four-dimensional vector.
     * @param {number} y - The vertical coordinate for the lower left corner of the box in logical pixel unit.
     * @param {number} width - The width of the scissor box in logical pixel unit.
     * @param {number} height - The height of the scissor box in logical pixel unit.
     */
    setScissor(x: Vector4): void;
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
     *
     * @param {number | Vector4} x - The horizontal coordinate for the lower left corner of the viewport origin in logical pixel unit.
     * @param {number} y - The vertical coordinate for the lower left corner of the viewport origin  in logical pixel unit.
     * @param {number} width - The width of the viewport in logical pixel unit.
     * @param {number} height - The height of the viewport in logical pixel unit.
     * @param {number} minDepth - The minimum depth value of the viewport. WebGPU only.
     * @param {number} maxDepth - The maximum depth value of the viewport. WebGPU only.
     */
    setViewport(x: Vector4): void;
    setViewport(x: number, y: number, width: number, height: number, minDepth?: number, maxDepth?: number): void;
    /**
     * Returns the clear color.
     *
     * @param {Color} target - The method writes the result in this target object.
     * @return {Color} The clear color.
     */
    getClearColor(target: Color4): Color4;
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
    isOccluded(object: Object3D): boolean | null;
    /**
     * Performs a manual clear operation. This method ignores `autoClear` properties.
     *
     * @param {boolean} [color=true] - Whether the color buffer should be cleared or not.
     * @param {boolean} [depth=true] - Whether the depth buffer should be cleared or not.
     * @param {boolean} [stencil=true] - Whether the stencil buffer should be cleared or not.
     * @return {Promise} A Promise that resolves when the clear operation has been executed.
     * Only returned when the renderer has not been initialized.
     */
    clear(color?: boolean, depth?: boolean, stencil?: boolean): Promise<void> | undefined;
    /**
     * Performs a manual clear operation of the color buffer. This method ignores `autoClear` properties.
     *
     * @return {Promise} A Promise that resolves when the clear operation has been executed.
     * Only returned when the renderer has not been initialized.
     */
    clearColor(): Promise<void> | undefined;
    /**
     * Performs a manual clear operation of the depth buffer. This method ignores `autoClear` properties.
     *
     * @return {Promise} A Promise that resolves when the clear operation has been executed.
     * Only returned when the renderer has not been initialized.
     */
    clearDepth(): Promise<void> | undefined;
    /**
     * Performs a manual clear operation of the stencil buffer. This method ignores `autoClear` properties.
     *
     * @return {Promise} A Promise that resolves when the clear operation has been executed.
     * Only returned when the renderer has not been initialized.
     */
    clearStencil(): Promise<void> | undefined;
    /**
     * Async version of {@link Renderer#clear}.
     *
     * @async
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
     * @return {Promise} A Promise that resolves when the clear operation has been executed.
     */
    clearColorAsync(): Promise<void>;
    /**
     * Async version of {@link Renderer#clearDepth}.
     *
     * @async
     * @return {Promise} A Promise that resolves when the clear operation has been executed.
     */
    clearDepthAsync(): Promise<void>;
    /**
     * Async version of {@link Renderer#clearStencil}.
     *
     * @async
     * @return {Promise} A Promise that resolves when the clear operation has been executed.
     */
    clearStencilAsync(): Promise<void>;
    /**
     * The current output tone mapping of the renderer. When a render target is set,
     * the output tone mapping is always `NoToneMapping`.
     *
     * @type {number}
     */
    get currentToneMapping(): ToneMapping;
    /**
     * The current output color space of the renderer. When a render target is set,
     * the output color space is always `LinearSRGBColorSpace`.
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
    getRenderTarget(): RenderTarget<Texture> | null;
    /**
     * Sets the output render target for the renderer.
     *
     * @param {Object} renderTarget - The render target to set as the output target.
     */
    setOutputRenderTarget(renderTarget: RenderTarget | null): void;
    /**
     * Returns the current output target.
     *
     * @return {?RenderTarget} The current output render target. Returns `null` if no output target is set.
     */
    getOutputRenderTarget(): RenderTarget<Texture> | null;
    /**
     * Resets the renderer to the initial state before WebXR started.
     */
    _resetXRState(): void;
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
                group: GeometryGroup,
                lightsNode: LightsNode,
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
            group: GeometryGroup,
            lightsNode: LightsNode,
            clippingContext: ClippingContext | null,
            passId: string | null,
        ) => void)
        | null;
    /**
     * Execute a single or an array of compute nodes. This method can only be called
     * if the renderer has been initialized.
     *
     * @param {Node|Array<Node>} computeNodes - The compute node(s).
     * @return {Promise|undefined} A Promise that resolve when the compute has finished. Only returned when the renderer has not been initialized.
     */
    compute(computeNodes: ComputeNode | ComputeNode[]): Promise<void> | undefined;
    /**
     * Execute a single or an array of compute nodes.
     *
     * @async
     * @param {Node|Array<Node>} computeNodes - The compute node(s).
     * @return {Promise} A Promise that resolve when the compute has finished.
     */
    computeAsync(computeNodes: ComputeNode | ComputeNode[]): Promise<void>;
    /**
     * Checks if the given feature is supported by the selected backend.
     *
     * @async
     * @param {string} name - The feature's name.
     * @return {Promise<boolean>} A Promise that resolves with a bool that indicates whether the feature is supported or not.
     */
    hasFeatureAsync(name: string): Promise<void>;
    resolveTimestampsAsync(type?: TimestampQuery): Promise<number | undefined>;
    /**
     * Checks if the given feature is supported by the selected backend. If the
     * renderer has not been initialized, this method always returns `false`.
     *
     * @param {string} name - The feature's name.
     * @return {boolean} Whether the feature is supported or not.
     */
    hasFeature(name: string): false | void;
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
     * Copies the current bound framebuffer into the given texture.
     *
     * @param {FramebufferTexture} framebufferTexture - The texture.
     * @param {?Vector2|Vector4} [rectangle=null] - A two or four dimensional vector that defines the rectangular portion of the framebuffer that should be copied.
     */
    copyFramebufferToTexture(framebufferTexture: FramebufferTexture, rectangle?: Rectangle | null): void;
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
    ): Promise<import("../../core/BufferAttribute.js").TypedArray>;
    /**
     * Analyzes the given 3D object's hierarchy and builds render lists from the
     * processed hierarchy.
     *
     * @param {Object3D} object - The 3D object to process (usually a scene).
     * @param {Camera} camera - The camera the object is rendered with.
     * @param {number} groupOrder - The group order is derived from the `renderOrder` of groups and is used to group 3D objects within groups.
     * @param {RenderList} renderList - The current render list.
     * @param {ClippingContext} clippingContext - The current clipping context.
     */
    _projectObject(
        object: Object3D,
        camera: Camera,
        groupOrder: number,
        renderList: RenderList,
        clippingContext: ClippingContext | null,
    ): void;
    /**
     * Renders the given render bundles.
     *
     * @private
     * @param {Array<Object>} bundles - Array with render bundle data.
     * @param {Scene} sceneRef - The scene the render bundles belong to.
     * @param {LightsNode} lightsNode - The current lights node.
     */
    _renderBundles(bundles: Bundle[], sceneRef: Scene, lightsNode: LightsNode): void;
    /**
     * Renders the transparent objects from the given render lists.
     *
     * @private
     * @param {Array<Object>} renderList - The transparent render list.
     * @param {Array<Object>} doublePassList - The list of transparent objects which require a double pass (e.g. because of transmission).
     * @param {Camera} camera - The camera the render list should be rendered with.
     * @param {Scene} scene - The scene the render list belongs to.
     * @param {LightsNode} lightsNode - The current lights node.
     */
    _renderTransparents(
        renderList: RenderItem[],
        doublePassList: RenderItem[],
        camera: Camera,
        scene: Scene,
        lightsNode: LightsNode,
    ): void;
    /**
     * Renders the objects from the given render list.
     *
     * @private
     * @param {Array<Object>} renderList - The render list.
     * @param {Camera} camera - The camera the render list should be rendered with.
     * @param {Scene} scene - The scene the render list belongs to.
     * @param {LightsNode} lightsNode - The current lights node.
     * @param {?string} [passId=null] - An optional ID for identifying the pass.
     */
    _renderObjects(
        renderList: RenderItem[],
        camera: Camera,
        scene: Scene,
        lightsNode: LightsNode,
        passId?: string | null,
    ): void;
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
        group: GeometryGroup,
        lightsNode: LightsNode,
        clippingContext?: ClippingContext | null,
        passId?: string | null,
    ): void;
    /**
     * This method represents the default `_handleObjectFunction` implementation which creates
     * a render object from the given data and performs the draw command with the selected backend.
     *
     * @private
     * @param {Object3D} object - The 3D object.
     * @param {Material} material - The object's material.
     * @param {Scene} scene - The scene the 3D object belongs to.
     * @param {Camera} camera - The camera the object should be rendered with.
     * @param {LightsNode} lightsNode - The current lights node.
     * @param {?{start: number, count: number}} group - Only relevant for objects using multiple materials. This represents a group entry from the respective `BufferGeometry`.
     * @param {ClippingContext} clippingContext - The clipping context.
     * @param {?string} [passId=null] - An optional ID for identifying the pass.
     */
    _renderObjectDirect(
        object: Object3D,
        material: Material,
        scene: Scene,
        camera: Camera,
        lightsNode: LightsNode,
        group: GeometryGroup,
        clippingContext: ClippingContext | null,
        passId?: string,
    ): void;
    /**
     * A different implementation for `_handleObjectFunction` which only makes sure the object is ready for rendering.
     * Used in `compileAsync()`.
     *
     * @private
     * @param {Object3D} object - The 3D object.
     * @param {Material} material - The object's material.
     * @param {Scene} scene - The scene the 3D object belongs to.
     * @param {Camera} camera - The camera the object should be rendered with.
     * @param {LightsNode} lightsNode - The current lights node.
     * @param {?{start: number, count: number}} group - Only relevant for objects using multiple materials. This represents a group entry from the respective `BufferGeometry`.
     * @param {ClippingContext} clippingContext - The clipping context.
     * @param {?string} [passId=null] - An optional ID for identifying the pass.
     */
    _createObjectPipeline(
        object: Object3D,
        material: Material,
        scene: Scene,
        camera: Camera,
        lightsNode: LightsNode,
        group: Group,
        clippingContext: ClippingContext | null,
        passId?: string,
    ): void;
    /**
     * Alias for `compileAsync()`.
     *
     * @method
     * @param {Object3D} scene - The scene or 3D object to precompile.
     * @param {Camera} camera - The camera that is used to render the scene.
     * @param {Scene} targetScene - If the first argument is a 3D object, this parameter must represent the scene the 3D object is going to be added.
     * @return {function(Object3D, Camera, ?Scene): Promise|undefined} A Promise that resolves when the compile has been finished.
     */
    get compile(): (scene: Object3D, camera: Camera, targetScene?: Object3D | null) => Promise<void>;
}
export default Renderer;
