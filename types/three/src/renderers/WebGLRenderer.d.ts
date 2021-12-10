import { Scene } from './../scenes/Scene';
import { Camera } from './../cameras/Camera';
import { WebGLExtensions } from './webgl/WebGLExtensions';
import { WebGLInfo } from './webgl/WebGLInfo';
import { WebGLShadowMap } from './webgl/WebGLShadowMap';
import { WebGLCapabilities } from './webgl/WebGLCapabilities';
import { WebGLProperties } from './webgl/WebGLProperties';
import { WebGLProgram } from './webgl/WebGLProgram';
import { WebGLRenderLists } from './webgl/WebGLRenderLists';
import { WebGLState } from './webgl/WebGLState';
import { Vector2 } from './../math/Vector2';
import { Vector4 } from './../math/Vector4';
import { Color } from './../math/Color';
import { WebGLRenderTarget } from './WebGLRenderTarget';
import { WebGLMultipleRenderTargets } from './WebGLMultipleRenderTargets';
import { Object3D } from './../core/Object3D';
import { Material } from './../materials/Material';
import { ToneMapping, ShadowMapType, CullFace, TextureEncoding } from '../constants';
import { WebXRManager } from '../renderers/webxr/WebXRManager';
import { BufferGeometry } from './../core/BufferGeometry';
import { Texture } from '../textures/Texture';
import { DataTexture3D } from '../textures/DataTexture3D';
import { XRAnimationLoopCallback } from './webxr/WebXR';
import { Vector3 } from '../math/Vector3';
import { Box3 } from '../math/Box3';
import { DataTexture2DArray } from '../textures/DataTexture2DArray';
import { ColorRepresentation } from '../utils';

export interface Renderer {
    domElement: HTMLCanvasElement;

    render(scene: Object3D, camera: Camera): void;
    setSize(width: number, height: number, updateStyle?: boolean): void;
}

/** This is only available in worker JS contexts, not the DOM. */
// tslint:disable-next-line:no-empty-interface
export interface OffscreenCanvas extends EventTarget {}

export interface WebGLRendererParameters {
    /**
     * A Canvas where the renderer draws its output.
     */
    canvas?: HTMLCanvasElement | OffscreenCanvas | undefined;

    /**
     * A WebGL Rendering Context.
     * (https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext)
     * Default is null
     */
    context?: WebGLRenderingContext | undefined;

    /**
     * shader precision. Can be "highp", "mediump" or "lowp".
     */
    precision?: string | undefined;

    /**
     * default is false.
     */
    alpha?: boolean | undefined;

    /**
     * default is true.
     */
    premultipliedAlpha?: boolean | undefined;

    /**
     * default is false.
     */
    antialias?: boolean | undefined;

    /**
     * default is true.
     */
    stencil?: boolean | undefined;

    /**
     * default is false.
     */
    preserveDrawingBuffer?: boolean | undefined;

    /**
     * Can be "high-performance", "low-power" or "default"
     */
    powerPreference?: string | undefined;

    /**
     * default is true.
     */
    depth?: boolean | undefined;

    /**
     * default is false.
     */
    logarithmicDepthBuffer?: boolean | undefined;

    /**
     * default is false.
     */
    failIfMajorPerformanceCaveat?: boolean | undefined;
}

export interface WebGLDebug {
    /**
     * Enables error checking and reporting when shader programs are being compiled.
     */
    checkShaderErrors: boolean;
}

/**
 * The WebGL renderer displays your beautifully crafted scenes using WebGL, if your device supports it.
 * This renderer has way better performance than CanvasRenderer.
 *
 * see {@link https://github.com/mrdoob/three.js/blob/master/src/renderers/WebGLRenderer.js|src/renderers/WebGLRenderer.js}
 */
export class WebGLRenderer implements Renderer {
    /**
     * parameters is an optional object with properties defining the renderer's behaviour.
     * The constructor also accepts no parameters at all.
     * In all cases, it will assume sane defaults when parameters are missing.
     */
    constructor(parameters?: WebGLRendererParameters);

    /**
     * A Canvas where the renderer draws its output.
     * This is automatically created by the renderer in the constructor (if not provided already); you just need to add it to your page.
     * @default document.createElementNS( 'http://www.w3.org/1999/xhtml', 'canvas' )
     */
    domElement: HTMLCanvasElement;

    /**
     * The HTML5 Canvas's 'webgl' context obtained from the canvas where the renderer will draw.
     */
    context: WebGLRenderingContext;

    /**
     * Defines whether the renderer should automatically clear its output before rendering.
     * @default true
     */
    autoClear: boolean;

    /**
     * If autoClear is true, defines whether the renderer should clear the color buffer. Default is true.
     * @default true
     */
    autoClearColor: boolean;

    /**
     * If autoClear is true, defines whether the renderer should clear the depth buffer. Default is true.
     * @default true
     */
    autoClearDepth: boolean;

    /**
     * If autoClear is true, defines whether the renderer should clear the stencil buffer. Default is true.
     * @default true
     */
    autoClearStencil: boolean;

    /**
     * Debug configurations.
     * @default { checkShaderErrors: true }
     */
    debug: WebGLDebug;

    /**
     * Defines whether the renderer should sort objects. Default is true.
     * @default true
     */
    sortObjects: boolean;

    /**
     * @default []
     */
    clippingPlanes: any[];

    /**
     * @default false
     */
    localClippingEnabled: boolean;

    extensions: WebGLExtensions;

    /**
     * Default is LinearEncoding.
     * @default THREE.LinearEncoding
     */
    outputEncoding: TextureEncoding;

    /**
     * @default false
     */
    physicallyCorrectLights: boolean;

    /**
     * @default THREE.NoToneMapping
     */
    toneMapping: ToneMapping;

    /**
     * @default 1
     */
    toneMappingExposure: number;

    info: WebGLInfo;

    shadowMap: WebGLShadowMap;

    pixelRatio: number;

    capabilities: WebGLCapabilities;
    properties: WebGLProperties;
    renderLists: WebGLRenderLists;
    state: WebGLState;

    xr: WebXRManager;

    /**
     * Return the WebGL context.
     */
    getContext(): WebGLRenderingContext;
    getContextAttributes(): any;
    forceContextLoss(): void;
    forceContextRestore(): void;

    /**
     * @deprecated Use {@link WebGLCapabilities#getMaxAnisotropy .capabilities.getMaxAnisotropy()} instead.
     */
    getMaxAnisotropy(): number;

    /**
     * @deprecated Use {@link WebGLCapabilities#precision .capabilities.precision} instead.
     */
    getPrecision(): string;

    getPixelRatio(): number;
    setPixelRatio(value: number): void;

    getDrawingBufferSize(target: Vector2): Vector2;
    setDrawingBufferSize(width: number, height: number, pixelRatio: number): void;

    getSize(target: Vector2): Vector2;

    /**
     * Resizes the output canvas to (width, height), and also sets the viewport to fit that size, starting in (0, 0).
     */
    setSize(width: number, height: number, updateStyle?: boolean): void;

    getCurrentViewport(target: Vector4): Vector4;

    /**
     * Copies the viewport into target.
     */
    getViewport(target: Vector4): Vector4;

    /**
     * Sets the viewport to render from (x, y) to (x + width, y + height).
     * (x, y) is the lower-left corner of the region.
     */
    setViewport(x: Vector4 | number, y?: number, width?: number, height?: number): void;

    /**
     * Copies the scissor area into target.
     */
    getScissor(target: Vector4): Vector4;

    /**
     * Sets the scissor area from (x, y) to (x + width, y + height).
     */
    setScissor(x: Vector4 | number, y?: number, width?: number, height?: number): void;

    /**
     * Returns true if scissor test is enabled; returns false otherwise.
     */
    getScissorTest(): boolean;

    /**
     * Enable the scissor test. When this is enabled, only the pixels within the defined scissor area will be affected by further renderer actions.
     */
    setScissorTest(enable: boolean): void;

    /**
     * Sets the custom opaque sort function for the WebGLRenderLists. Pass null to use the default painterSortStable function.
     */
    setOpaqueSort(method: (a: any, b: any) => number): void;

    /**
     * Sets the custom transparent sort function for the WebGLRenderLists. Pass null to use the default reversePainterSortStable function.
     */
    setTransparentSort(method: (a: any, b: any) => number): void;

    /**
     * Returns a THREE.Color instance with the current clear color.
     */
    getClearColor(target: Color): Color;

    /**
     * Sets the clear color, using color for the color and alpha for the opacity.
     */
    setClearColor(color: ColorRepresentation, alpha?: number): void;

    /**
     * Returns a float with the current clear alpha. Ranges from 0 to 1.
     */
    getClearAlpha(): number;

    setClearAlpha(alpha: number): void;

    /**
     * Tells the renderer to clear its color, depth or stencil drawing buffer(s).
     * Arguments default to true
     */
    clear(color?: boolean, depth?: boolean, stencil?: boolean): void;

    clearColor(): void;
    clearDepth(): void;
    clearStencil(): void;
    clearTarget(renderTarget: WebGLRenderTarget, color: boolean, depth: boolean, stencil: boolean): void;

    /**
     * @deprecated Use {@link WebGLState#reset .state.reset()} instead.
     */
    resetGLState(): void;
    dispose(): void;

    renderBufferDirect(
        camera: Camera,
        scene: Scene,
        geometry: BufferGeometry,
        material: Material,
        object: Object3D,
        geometryGroup: any,
    ): void;

    /**
     * A build in function that can be used instead of requestAnimationFrame. For WebXR projects this function must be used.
     * @param callback The function will be called every available frame. If `null` is passed it will stop any already ongoing animation.
     */
    setAnimationLoop(callback: XRAnimationLoopCallback | null): void;

    /**
     * @deprecated Use {@link WebGLRenderer#setAnimationLoop .setAnimationLoop()} instead.
     */
    animate(callback: () => void): void;

    /**
     * Compiles all materials in the scene with the camera. This is useful to precompile shaders before the first rendering.
     */
    compile(scene: Object3D, camera: Camera): void;

    /**
     * Render a scene or an object using a camera.
     * The render is done to a previously specified {@link WebGLRenderTarget#renderTarget .renderTarget} set by calling
     * {@link WebGLRenderer#setRenderTarget .setRenderTarget} or to the canvas as usual.
     *
     * By default render buffers are cleared before rendering but you can prevent this by setting the property
     * {@link WebGLRenderer#autoClear autoClear} to false. If you want to prevent only certain buffers being cleared
     * you can set either the {@link WebGLRenderer#autoClearColor autoClearColor},
     * {@link WebGLRenderer#autoClearStencil autoClearStencil} or {@link WebGLRenderer#autoClearDepth autoClearDepth}
     * properties to false. To forcibly clear one ore more buffers call {@link WebGLRenderer#clear .clear}.
     */
    render(scene: Object3D, camera: Camera): void;

    /**
     * Returns the current active cube face.
     */
    getActiveCubeFace(): number;

    /**
     * Returns the current active mipmap level.
     */
    getActiveMipmapLevel(): number;

    /**
     * Returns the current render target. If no render target is set, null is returned.
     */
    getRenderTarget(): WebGLRenderTarget | null;

    /**
     * @deprecated Use {@link WebGLRenderer#getRenderTarget .getRenderTarget()} instead.
     */
    getCurrentRenderTarget(): WebGLRenderTarget | null;

    /**
     * Sets the active render target.
     *
     * @param renderTarget The {@link WebGLRenderTarget renderTarget} that needs to be activated. When `null` is given, the canvas is set as the active render target instead.
     * @param activeCubeFace Specifies the active cube side (PX 0, NX 1, PY 2, NY 3, PZ 4, NZ 5) of {@link WebGLCubeRenderTarget}.
     * @param activeMipmapLevel Specifies the active mipmap level.
     */
    setRenderTarget(
        renderTarget: WebGLRenderTarget | WebGLMultipleRenderTargets | null,
        activeCubeFace?: number,
        activeMipmapLevel?: number,
    ): void;

    readRenderTargetPixels(
        renderTarget: WebGLRenderTarget | WebGLMultipleRenderTargets,
        x: number,
        y: number,
        width: number,
        height: number,
        buffer: any,
        activeCubeFaceIndex?: number,
    ): void;

    /**
     * Copies a region of the currently bound framebuffer into the selected mipmap level of the selected texture.
     * This region is defined by the size of the destination texture's mip level, offset by the input position.
     *
     * @param position Specifies the pixel offset from which to copy out of the framebuffer.
     * @param texture Specifies the destination texture.
     * @param level Specifies the destination mipmap level of the texture.
     */
    copyFramebufferToTexture(position: Vector2, texture: Texture, level?: number): void;

    /**
     * Copies srcTexture to the specified level of dstTexture, offset by the input position.
     *
     * @param position Specifies the pixel offset into the dstTexture where the copy will occur.
     * @param srcTexture Specifies the source texture.
     * @param dstTexture Specifies the destination texture.
     * @param level Specifies the destination mipmap level of the texture.
     */
    copyTextureToTexture(position: Vector2, srcTexture: Texture, dstTexture: Texture, level?: number): void;

    /**
     * Copies the pixels of a texture in the bounds sourceBox in the desination texture starting from the given position.
     * @param sourceBox Specifies the bounds
     * @param position Specifies the pixel offset into the dstTexture where the copy will occur.
     * @param srcTexture Specifies the source texture.
     * @param dstTexture Specifies the destination texture.
     * @param level Specifies the destination mipmap level of the texture.
     */
    copyTextureToTexture3D(
        sourceBox: Box3,
        position: Vector3,
        srcTexture: Texture,
        dstTexture: DataTexture3D | DataTexture2DArray,
        level?: number,
    ): void;

    /**
     * Initializes the given texture. Can be used to preload a texture rather than waiting until first render (which can cause noticeable lags due to decode and GPU upload overhead).
     *
     * @param texture The texture to Initialize.
     */
    initTexture(texture: Texture): void;

    /**
     * Can be used to reset the internal WebGL state.
     */
    resetState(): void;

    /**
     * @deprecated
     */
    gammaFactor: number;

    /**
     * @deprecated Use {@link WebGLRenderer#xr .xr} instead.
     */
    vr: boolean;

    /**
     * @deprecated Use {@link WebGLShadowMap#enabled .shadowMap.enabled} instead.
     */
    shadowMapEnabled: boolean;

    /**
     * @deprecated Use {@link WebGLShadowMap#type .shadowMap.type} instead.
     */
    shadowMapType: ShadowMapType;

    /**
     * @deprecated Use {@link WebGLShadowMap#cullFace .shadowMap.cullFace} instead.
     */
    shadowMapCullFace: CullFace;

    /**
     * @deprecated Use {@link WebGLExtensions#get .extensions.get( 'OES_texture_float' )} instead.
     */
    supportsFloatTextures(): any;

    /**
     * @deprecated Use {@link WebGLExtensions#get .extensions.get( 'OES_texture_half_float' )} instead.
     */
    supportsHalfFloatTextures(): any;

    /**
     * @deprecated Use {@link WebGLExtensions#get .extensions.get( 'OES_standard_derivatives' )} instead.
     */
    supportsStandardDerivatives(): any;

    /**
     * @deprecated Use {@link WebGLExtensions#get .extensions.get( 'WEBGL_compressed_texture_s3tc' )} instead.
     */
    supportsCompressedTextureS3TC(): any;

    /**
     * @deprecated Use {@link WebGLExtensions#get .extensions.get( 'WEBGL_compressed_texture_pvrtc' )} instead.
     */
    supportsCompressedTexturePVRTC(): any;

    /**
     * @deprecated Use {@link WebGLExtensions#get .extensions.get( 'EXT_blend_minmax' )} instead.
     */
    supportsBlendMinMax(): any;

    /**
     * @deprecated Use {@link WebGLCapabilities#vertexTextures .capabilities.vertexTextures} instead.
     */
    supportsVertexTextures(): any;

    /**
     * @deprecated Use {@link WebGLExtensions#get .extensions.get( 'ANGLE_instanced_arrays' )} instead.
     */
    supportsInstancedArrays(): any;

    /**
     * @deprecated Use {@link WebGLRenderer#setScissorTest .setScissorTest()} instead.
     */
    enableScissorTest(boolean: any): any;
}
