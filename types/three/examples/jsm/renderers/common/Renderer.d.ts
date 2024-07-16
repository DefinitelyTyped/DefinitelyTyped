/// <reference types="webxr" />
import {
    Box2,
    BufferAttribute,
    BufferGeometry,
    Camera,
    Color,
    ColorSpace,
    FramebufferTexture,
    GeometryGroup,
    Material,
    Object3D,
    Plane,
    RenderTarget,
    Scene,
    ShadowMapType,
    Texture,
    ToneMapping,
    Vector2,
    Vector4,
} from "three";
import Node from "../../nodes/core/Node.js";
import ComputeNode from "../../nodes/gpgpu/ComputeNode.js";
import LightsNode from "../../nodes/lighting/LightsNode.js";
import Animation from "./Animation.js";
import Attributes from "./Attributes.js";
import Backend from "./Backend.js";
import Background from "./Background.js";
import Bindings from "./Bindings.js";
import Color4 from "./Color4.js";
import Geometries from "./Geometries.js";
import Info from "./Info.js";
import Nodes from "./nodes/Nodes.js";
import Pipelines from "./Pipelines.js";
import RenderBundle from "./RenderBundle.js";
import RenderBundles from "./RenderBundles.js";
import RenderContext from "./RenderContext.js";
import RenderContexts from "./RenderContexts.js";
import RenderList, { Bundle, RenderItem } from "./RenderList.js";
import RenderLists from "./RenderLists.js";
import RenderObjects from "./RenderObjects.js";
import Textures from "./Textures.js";
export interface RendererParameters {
    logarithmicDepthBuffer?: boolean | undefined;
    alpha?: boolean | undefined;
}
declare class Renderer {
    readonly isRenderer: true;
    domElement: HTMLCanvasElement;
    backend: Backend;
    autoClear: boolean;
    autoClearColor: boolean;
    autoClearDepth: boolean;
    autoClearStencil: boolean;
    alpha: boolean;
    logarithmicDepthBuffer: boolean;
    outputColorSpace: ColorSpace;
    toneMapping: ToneMapping;
    toneMappingExposure: number;
    sortObjects: boolean;
    depth: boolean;
    stencil: boolean;
    clippingPlanes: readonly Plane[];
    info: Info;
    toneMappingNode: Node | null;
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
    _renderObjectFunction:
        | ((
            object: Object3D,
            scene: Scene,
            camera: Camera,
            geometry: BufferGeometry,
            material: Material,
            group: GeometryGroup,
            lightsNode: LightsNode,
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
        passId?: string,
    ) => void;
    _initialized: boolean;
    _initPromise: Promise<void> | null;
    _compilationPromises: Promise<void>[] | null;
    shadowMap: {
        enabled: boolean;
        type: ShadowMapType | null;
    };
    xr: {
        enabled: boolean;
    };
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
    };
    localClippingEnabled?: boolean | undefined;
    constructor(backend: Backend, parameters?: RendererParameters);
    init(): Promise<void>;
    get coordinateSystem(): import("three").CoordinateSystem;
    compileAsync(scene: Scene, camera: Camera, targetScene?: Scene | null): Promise<void>;
    renderAsync(scene: Scene, camera: Camera): Promise<void>;
    _renderBundle(bundle: Bundle, sceneRef: Scene, lightsNode: LightsNode): void;
    render(scene: Scene, camera: Camera): Promise<void> | undefined;
    _getFrameBufferTarget(): RenderTarget<Texture> | null;
    _renderScene(scene: Scene, camera: Camera, useFrameBufferTarget?: boolean): RenderContext;
    getMaxAnisotropy(): number;
    getActiveCubeFace(): number;
    getActiveMipmapLevel(): number;
    setAnimationLoop(callback: ((time: DOMHighResTimeStamp, frame?: XRFrame) => void) | null): Promise<void>;
    getArrayBufferAsync(attribute: BufferAttribute): Promise<ArrayBuffer>;
    getContext(): void;
    getPixelRatio(): number;
    getDrawingBufferSize(target: Vector2): Vector2;
    getSize(target: Vector2): Vector2;
    setPixelRatio(value?: number): void;
    setDrawingBufferSize(width: number, height: number, pixelRatio: number): void;
    setSize(width: number, height: number, updateStyle?: boolean): void;
    setOpaqueSort(method: ((a: RenderItem, b: RenderItem) => number) | null): void;
    setTransparentSort(method: ((a: RenderItem, b: RenderItem) => number) | null): void;
    getScissor(target: Vector4): Vector4;
    setScissor(x: Vector4): void;
    setScissor(x: number, y: number, width: number, height: number): void;
    getScissorTest(): boolean;
    setScissorTest(boolean: boolean): void;
    getViewport(target: Vector4): Vector4;
    setViewport(x: Vector4): void;
    setViewport(x: number, y: number, width: number, height: number, minDepth?: number, maxDepth?: number): void;
    getClearColor(target: Color4): Color4;
    setClearColor(color: Color, alpha?: number): void;
    getClearAlpha(): number;
    setClearAlpha(alpha: number): void;
    getClearDepth(): number;
    setClearDepth(depth: number): void;
    getClearStencil(): number;
    setClearStencil(stencil: number): void;
    isOccluded(object: Object3D): boolean | null;
    clear(color?: boolean, depth?: boolean, stencil?: boolean): Promise<void> | undefined;
    clearColor(): Promise<void> | undefined;
    clearDepth(): Promise<void> | undefined;
    clearStencil(): Promise<void> | undefined;
    clearAsync(color?: boolean, depth?: boolean, stencil?: boolean): Promise<void>;
    clearColorAsync(): Promise<void>;
    clearDepthAsync(): Promise<void>;
    clearStencilAsync(): Promise<void>;
    get currentColorSpace(): ColorSpace;
    dispose(): void;
    setRenderTarget(renderTarget: RenderTarget | null, activeCubeFace?: number, activeMipmapLevel?: number): void;
    getRenderTarget(): RenderTarget<Texture> | null;
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
    getRenderObjectFunction():
        | ((
            object: Object3D<import("three").Object3DEventMap>,
            scene: Scene,
            camera: Camera,
            geometry: BufferGeometry<import("three").NormalBufferAttributes>,
            material: Material,
            group: GeometryGroup,
            lightsNode: LightsNode,
        ) => void)
        | null;
    computeAsync(computeNodes: ComputeNode | ComputeNode[]): Promise<void>;
    hasFeatureAsync(name: string): Promise<void>;
    hasFeature(name: string): false | void;
    copyFramebufferToTexture(framebufferTexture: FramebufferTexture): void;
    copyTextureToTexture(
        srcTexture: Texture,
        dstTexture: Texture,
        srcRegion?: Box2 | null,
        dstPosition?: Vector2 | null,
        level?: number,
    ): void;
    readRenderTargetPixelsAsync(
        renderTarget: RenderTarget,
        x: number,
        y: number,
        width: number,
        height: number,
        index?: number,
    ): Promise<import("three").TypedArray>;
    _projectObject(object: Object3D, camera: Camera, groupOrder: number, renderList: RenderList): void;
    _renderBundles(bundles: Bundle[], sceneRef: Scene, lightsNode: LightsNode): void;
    _renderObjects(renderList: RenderItem[], camera: Camera, scene: Scene, lightsNode: LightsNode): void;
    renderObject(
        object: Object3D,
        scene: Scene,
        camera: Camera,
        geometry: BufferGeometry,
        material: Material,
        group: GeometryGroup,
        lightsNode: LightsNode,
    ): void;
    _renderObjectDirect(
        object: Object3D,
        material: Material,
        scene: Scene,
        camera: Camera,
        lightsNode: LightsNode,
        group: GeometryGroup,
        passId?: string,
    ): void;
    _createObjectPipeline(
        object: Object3D,
        material: Material,
        scene: Scene,
        camera: Camera,
        lightsNode: LightsNode,
        group: GeometryGroup,
        passId?: string,
    ): void;
    get compute(): (computeNodes: ComputeNode | ComputeNode[]) => Promise<void>;
    get compile(): (scene: Scene, camera: Camera, targetScene?: Scene | null) => Promise<void>;
}
export default Renderer;
