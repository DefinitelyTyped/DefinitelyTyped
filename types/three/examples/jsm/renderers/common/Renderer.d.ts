import {
    BufferGeometry,
    Camera,
    Color,
    ColorSpace,
    CoordinateSystem,
    FramebufferTexture,
    Group,
    Material,
    Object3D,
    Plane,
    RenderTarget,
    Scene,
    ShadowMapType,
    ToneMapping,
    Vector2,
    Vector4,
} from "three";
import Node from "../../nodes/core/Node.js";
import ComputeNode from "../../nodes/gpgpu/ComputeNode.js";
import LightsNode from "../../nodes/lighting/LightsNode.js";
import Color4 from "./../common/Color4.js";
import Backend from "./Backend.js";
import Info from "./Info.js";

export interface RendererParameters {
    logarithmicDepthBuffer?: boolean | undefined;
    alpha?: boolean | undefined;
}

/**
 * Generic Renderer interface containing either a WebGL or WebGPU backend.
 */
export default class Renderer {
    /**
     * @default true
     */
    readonly isRenderer: true;

    domElement: HTMLCanvasElement;

    /**
     * The renderer backend; could be WebGLBackend or WebGPUBackend
     */
    backend: Backend;

    /**
     * @default true
     */
    autoClear: boolean;

    /**
     * @default true
     */
    autoClearColor: boolean;

    /**
     * @default true
     */
    autoClearDepth: boolean;

    /**
     * @default true
     */
    autoClearStencil: boolean;

    /**
     * @default SRGBColorSpace
     */
    outputColorSpace: ColorSpace;

    /**
     * @default NoToneMapping
     */
    toneMapping: ToneMapping;

    /**
     * @default 1.0
     */
    toneMappingExposure: number;

    /**
     * @default true
     */
    sortObjects: boolean;

    /**
     * @default true
     */
    depth: boolean;

    /**
     * @default true
     */
    stencil: boolean;

    clippingPlanes: readonly Plane[];

    info: Info;

    shadowMap: { enabled: boolean; type: ShadowMapType };

    xr: { enabled: boolean };

    toneMappingNode?: Node;

    localClippingEnabled?: boolean;

    constructor(backend: Backend, parameters?: RendererParameters);

    init(): Promise<void>;

    get coordinateSystem(): CoordinateSystem;

    compileAsync(scene: Scene, camera: Camera, targetScene?: Scene | null): Promise<void>;

    renderAsync(scene: Scene, camera: Camera): Promise<void>;

    render(scene: Scene, camera: Camera): void;

    getMaxAnisotropy(): number;

    getActiveCubeFace(): number;

    getActiveMipmapLevel(): number;

    setAnimationLoop(callback: ((time: DOMHighResTimeStamp) => void) | null): Promise<void>;

    /**
     * Sets the pixel ratio of the Renderer.
     */
    setPixelRatio(value?: number): void;

    /**
     * Sets the width and height of the output canvas and optionally updates the CSS style on the DOM element.
     */
    setSize(width: number, height: number, updateStyle?: boolean): void;

    /**
     * Gets the Rendering Context of the renderer.
     */
    getContext(): RenderingContext;

    /**
     * Gets the current pixel ratio of the renderer.
     */
    getPixelRatio(): number;

    getDrawingBufferSize(target: Vector2): Vector2;

    getSize(target: Vector2): Vector2;

    setDrawingBufferSize(width: number, height: number, pixelRatio: number): void;

    /**
     * Sets the custom opaque sort function for the RenderLists. Pass null to use the default painterSortStable function.
     */
    setOpaqueSort(method: (a: unknown, b: unknown) => number): void;

    /**
     * Sets the custom transparent sort function for the RenderLists. Pass null to use the default reversePainterSortStable function.
     */
    setTransparentSort(method: (a: unknown, b: unknown) => number): void;

    /**
     * Copies the scissor area into target.
     */
    getScissor(target: Vector4): Vector4;

    /**
     * Sets the scissor area from (x, y) to (x + width, y + height).
     */
    setScissor(x: number, y: number, width: number, height: number): void;

    /**
     * Returns true if scissor test is enabled; returns false otherwise.
     */
    getScissorTest(): boolean;

    /**
     * Enable the scissor test. When this is enabled, only the pixels within the defined scissor area will be affected by further renderer actions.
     */
    setScissorTest(boolean: boolean): void;

    /**
     * Copies the viewport into target.
     */
    getViewport(target: Vector4): Vector4;

    /**
     * Sets the viewport to render from (x, y) to (x + width, y + height).
     * (x, y) is the lower-left corner of the region.
     */
    setViewport(x: number, y: number, width: number, height: number, minDepth?: number, maxDepth?: number): void;

    /**
     * Returns a Color4 instance with the current clear color.
     */
    getClearColor(target: Color4): Color4;

    /**
     * Sets the clear color, using color for the color and alpha for the opacity.
     */
    setClearColor(color: Color, alpha?: number): void;

    /**
     * Returns a float with the current clear alpha. Ranges from 0 to 1.
     */
    getClearAlpha(): number;

    setClearAlpha(alpha: number): void;

    getClearDepth(): number;

    setClearDepth(depth: number): void;

    getClearStencil(): number;

    setClearStencil(stencil: number): void;

    isOccluded(object: Object3D): boolean;

    /**
     * Tells the renderer to clear its color, depth or stencil drawing buffer(s).
     * Arguments default to true
     */
    clear(color?: boolean, depth?: boolean, stencil?: boolean): void;

    /**
     * Clear the color buffer. Equivalent to calling .clear( true, false, false ).
     */
    clearColor(): void;

    /**
     * Clear the depth buffer. Equivalent to calling .clear( false, true, false ).
     */
    clearDepth(): void;

    /**
     * Clear the stencil buffer. Equivalent to calling .clear( false, false, true ).
     */
    clearStencil(): void;

    /**
     * Tells the renderer to clear its color, depth or stencil drawing buffer(s).
     * Arguments default to true
     */
    clearAsync(color?: boolean, depth?: boolean, stencil?: boolean): Promise<void>;

    get currentColorSpace(): ColorSpace;

    dispose(): void;

    setRenderTarget(renderTarget: RenderTarget, activeCubeFace?: number, activeMipmapLevel?: number): void;

    getRenderTarget(): RenderTarget;

    setRenderObjectFunction(renderObjectFunction: () => {}): void;

    getRenderObjectFunction(): () => {};

    /**
     * Runs a compute pipeline
     */
    computeAsync(computeNodes: ComputeNode | ComputeNode[]): Promise<void>;

    hasFeature(name: string): boolean;

    copyFramebufferToTexture(framebufferTexture: FramebufferTexture): void;

    readRenderTargetPixelsAsync(
        renderTarget: RenderTarget,
        x: number,
        y: number,
        width: number,
        height: number,
    ): Promise<Float32Array | Uint16Array | Uint8Array | Int8Array | Int16Array | Uint32Array | Int32Array>;

    renderObject(
        object: Object3D,
        scene: Scene,
        camera: Camera,
        geometry: BufferGeometry,
        material: Material,
        group: Group,
        lightsNode: LightsNode,
    ): void;

    get compute(): (computeNodes: ComputeNode | ComputeNode[]) => Promise<void>;

    get compile(): (scene: Scene, camera: Camera, targetScene?: Scene | null) => Promise<void>;
}
