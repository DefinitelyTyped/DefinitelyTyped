// Type definitions for non-npm package webxr 0.3
// Project: https://www.w3.org/TR/webxr/
// Definitions by: Rob Rohan <https://github.com/robrohan>
//                 Raanan Weber <https://github.com/RaananW>
//                 Sean T. McBeth <https://github.com/capnmidnight>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.7

// Most of this was hand written and... more or less copied from the following
// sites:
//  https://www.w3.org/TR/webxr/
//  https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API
//  https://www.w3.org/immersive-web/
//  https://github.com/immersive-web
//

interface Navigator {
    xr?: XRSystem | undefined;
}

/**
 * Available session modes
 */
type XRSessionMode = 'inline' | 'immersive-vr' | 'immersive-ar';

/**
 * Reference space types
 */
type XRReferenceSpaceType = 'viewer' | 'local' | 'local-floor' | 'bounded-floor' | 'unbounded';

type XREnvironmentBlendMode = 'opaque' | 'additive' | 'alpha-blend';

type XRVisibilityState = 'visible' | 'visible-blurred' | 'hidden';

/**
 * Handedness types
 */
type XRHandedness = 'none' | 'left' | 'right';

/**
 * InputSource target ray modes
 */
type XRTargetRayMode = 'gaze' | 'tracked-pointer' | 'screen';

/**
 * Eye types
 */
type XREye = 'none' | 'left' | 'right';

/**
 * Type of XR events available
 */
type XREventType =
    | 'devicechange'
    | 'visibilitychange'
    | 'end'
    | 'inputsourceschange'
    | 'select'
    | 'selectstart'
    | 'selectend'
    | 'squeeze'
    | 'squeezestart'
    | 'squeezeend'
    | 'reset';

type XRFrameRequestCallback = (time: DOMHighResTimeStamp, frame: XRFrame) => void;

type XRPlaneSet = Set<XRPlane>;
type XRAnchorSet = Set<XRAnchor>;

interface XREventHandler {
    (event: Event): any;
}

// tslint:disable-next-line no-empty-interface
interface XRLayer extends EventTarget { }

interface XRSessionInit {
    optionalFeatures?: string[] | undefined;
    requiredFeatures?: string[] | undefined;
}

interface XRSessionEvent extends Event {
    readonly session: XRSession;
}

interface XRSystemDeviceChangeEvent extends Event {
    type: "devicechange";
}

interface XRSessionGrant {
    mode: XRSessionMode;
}

interface XRSystemSessionGrantedEvent extends Event {
    type: "sessiongranted";
    session: XRSessionGrant;
}

interface XRSystemEventMap extends HTMLMediaElementEventMap {
    "devicechange": XRSystemDeviceChangeEvent;
    "sessiongranted": XRSystemSessionGrantedEvent;
}

interface XRSystem extends EventTarget {
    requestSession(mode: XRSessionMode, options?: XRSessionInit): Promise<XRSession>;
    isSessionSupported(mode: XRSessionMode): Promise<boolean>;

    ondevicechange: ((this: XRSystem, ev: XRSystemDeviceChangeEvent) => any) | null;
    onsessiongranted: ((this: XRSystem, ev: XRSystemSessionGrantedEvent) => any) | null;

    addEventListener<K extends keyof XRSystemEventMap>(type: K, listener: (this: XRSystem, ev: XRSystemEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof XRSystemEventMap>(type: K, listener: (this: XRSystem, ev: XRSystemEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface XRViewport {
    readonly x: number;
    readonly y: number;
    readonly width: number;
    readonly height: number;
}

interface XRWebGLLayerInit {
    antialias?: boolean | undefined;
    depth?: boolean | undefined;
    stencil?: boolean | undefined;
    alpha?: boolean | undefined;
    ignoreDepthValues?: boolean | undefined;
    framebufferScaleFactor?: number | undefined;
}

declare class XRWebGLLayer implements XRLayer {
    static getNativeFramebufferScaleFactor(session: XRSession): number;

    constructor(
        session: XRSession,
        context: WebGLRenderingContext | WebGL2RenderingContext,
        layerInit?: XRWebGLLayerInit,
    );

    readonly antialias: boolean;
    readonly ignoreDepthValues: boolean;
    fixedFoveation?: number | undefined;

    readonly framebuffer: WebGLFramebuffer;
    readonly framebufferWidth: number;
    readonly framebufferHeight: number;

    getViewport(view: XRView): XRViewport | undefined;

    addEventListener(type: string, listener: EventListenerOrEventListenerObject | null, options?: boolean | AddEventListenerOptions): void;
    removeEventListener(type: string, callback: EventListenerOrEventListenerObject | null, options?: boolean | EventListenerOptions): void;
    dispatchEvent(event: Event): boolean;
}

// tslint:disable-next-line no-empty-interface
interface XRSpace extends EventTarget { }

interface XRRenderState {
    readonly baseLayer?: XRWebGLLayer | undefined;
    readonly depthFar: number;
    readonly depthNear: number;
    readonly inlineVerticalFieldOfView?: number | undefined;

    // https://immersive-web.github.io/layers/#xrrenderstatechanges
    readonly layers?: XRLayer[] | undefined;
}

interface XRRenderStateInit {
    baseLayer?: XRWebGLLayer | undefined;
    depthFar?: number | undefined;
    depthNear?: number | undefined;
    inlineVerticalFieldOfView?: number | undefined;
    layers?: XRLayer[] | undefined;
}

interface XRReferenceSpace extends XRSpace {
    getOffsetReferenceSpace(originOffset: XRRigidTransform): XRReferenceSpace;
    onreset: XREventHandler;
}

interface XRBoundedReferenceSpace extends XRReferenceSpace {
    readonly boundsGeometry: DOMPointReadOnly[];
}

interface XRInputSource {
    readonly handedness: XRHandedness;
    readonly targetRayMode: XRTargetRayMode;
    readonly targetRaySpace: XRSpace;
    readonly gripSpace?: XRSpace | undefined;
    readonly gamepad?: Gamepad | undefined;
    readonly profiles: string[];
    readonly hand?: XRHand | undefined;
}

interface XRPose {
    readonly transform: XRRigidTransform;
    readonly emulatedPosition: boolean;
}

interface XRFrame {
    readonly session: XRSession;
    getPose(space: XRSpace, baseSpace: XRSpace): XRPose | undefined;
    getViewerPose(referenceSpace: XRReferenceSpace): XRViewerPose | undefined;

    // AR
    getHitTestResults(hitTestSource: XRHitTestSource): XRHitTestResult[];
    getHitTestResultsForTransientInput(
        hitTestSource: XRTransientInputHitTestSource
    ): XRTransientInputHitTestResult[];

    // Anchors
    trackedAnchors?: XRAnchorSet | undefined;
    createAnchor?: (pose: XRRigidTransform, space: XRSpace) => Promise<XRAnchor> | undefined;

    // Planes
    worldInformation?: {
        detectedPlanes?: XRPlaneSet | undefined;
    } | undefined;

    // Hand tracking
    getJointPose?: (joint: XRJointSpace, baseSpace: XRSpace) => XRJointPose | undefined;
}

declare class XRFrame {
    prototype: XRFrame;
}

interface XRInputSourceEvent extends Event {
    readonly frame: XRFrame;
    readonly inputSource: XRInputSource;
}

interface XRSessionEventMap {
    "end": XREventHandler;
    "inputsourceschange": XREventHandler;
    "select": XREventHandler;
    "selectstart": XREventHandler;
    "selectend": XREventHandler;
    "squeeze": XREventHandler;
    "squeezestart": XREventHandler;
    "squeezeend": XREventHandler;
    "visibilitychange": XREventHandler;
    "frameratechange": XREventHandler;
}

interface XRSession extends EventTarget {
    /**
     * Returns a list of this session's XRInputSources, each representing an input device
     * used to control the camera and/or scene.
     */
    readonly inputSources: XRInputSource[];
    /**
     * object which contains options affecting how the imagery is rendered.
     * This includes things such as the near and far clipping planes
     */
    readonly renderState: XRRenderState;
    readonly environmentBlendMode: XREnvironmentBlendMode;
    readonly visibilityState: XRVisibilityState;
    readonly frameRate?: number | undefined;
    readonly supportedFrameRates?: Float32Array | undefined;

    /**
     * Removes a callback from the animation frame painting callback from
     * XRSession's set of animation frame rendering callbacks, given the
     * identifying handle returned by a previous call to requestAnimationFrame().
     */
    cancelAnimationFrame(id: number): void;

    /**
     * Ends the WebXR session. Returns a promise which resolves when the
     * session has been shut down.
     */
    end(): Promise<void>;

    /**
     * Schedules the specified method to be called the next time the user agent
     * is working on rendering an animation frame for the WebXR device. Returns an
     * integer value which can be used to identify the request for the purposes of
     * canceling the callback using cancelAnimationFrame(). This method is comparable
     * to the Window.requestAnimationFrame() method.
     */
    requestAnimationFrame(callback: XRFrameRequestCallback): number;

    /**
     * Requests that a new XRReferenceSpace of the specified type be created.
     * Returns a promise which resolves with the XRReferenceSpace or
     * XRBoundedReferenceSpace which was requested, or throws a NotSupportedError if
     * the requested space type isn't supported by the device.
     */
    requestReferenceSpace(type: XRReferenceSpaceType): Promise<XRReferenceSpace | XRBoundedReferenceSpace>;

    updateRenderState(renderStateInit: XRRenderStateInit): Promise<void>;

    updateTargetFrameRate(rate: number): Promise<void>;

    onend: XREventHandler;
    oninputsourceschange: XREventHandler;
    onselect: XREventHandler;
    onselectstart: XREventHandler;
    onselectend: XREventHandler;
    onsqueeze: XREventHandler;
    onsqueezestart: XREventHandler;
    onsqueezeend: XREventHandler;
    onvisibilitychange: XREventHandler;
    onframeratechange: XREventHandler;

    addEventListener<K extends keyof XRSessionEventMap>(type: K, listener: (this: XRSession, ev: XRSessionEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof XRSessionEventMap>(type: K, listener: (this: XRSession, ev: XRSessionEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;

    // hit test
    requestHitTestSource?: (options: XRHitTestOptionsInit) => Promise<XRHitTestSource> | undefined;
    requestHitTestSourceForTransientInput?: (
        options: XRTransientInputHitTestOptionsInit,
    ) => Promise<XRTransientInputHitTestSource> | undefined;

    // legacy AR hit test
    requestHitTest?: (ray: XRRay, referenceSpace: XRReferenceSpace) => Promise<XRHitResult[]> | undefined;

    // legacy plane detection
    updateWorldTrackingState?: (options: { planeDetectionState?: { enabled: boolean } | undefined }) => void | undefined;
}

declare class XRSession {
    prototype: XRSession;
}

interface XRViewerPose extends XRPose {
    readonly views: XRView[];
}

declare class XRRigidTransform {
    constructor(position?: DOMPointInit, direction?: DOMPointInit);
    position: DOMPointReadOnly;
    orientation: DOMPointReadOnly;
    matrix: Float32Array;
    inverse: XRRigidTransform;
}

interface XRView {
    readonly eye: XREye;
    readonly projectionMatrix: Float32Array;
    readonly transform: XRRigidTransform;
    readonly recommendedViewportScale?: number | undefined;
    requestViewportScale(scale: number): void;
}

interface XRInputSourceChangeEvent extends XRSessionEvent {
    removed: XRInputSource[];
    added: XRInputSource[];
}

// Experimental/Draft features
declare class XRRay {
    constructor(transformOrOrigin: XRRigidTransform | DOMPointInit, direction?: DOMPointInit);
    readonly origin: DOMPointReadOnly;
    readonly direction: DOMPointReadOnly;
    readonly matrix: Float32Array;
}

type XRHitTestTrackableType =
    | 'point'
    | 'plane'
    | 'mesh';

interface XRHitResult {
    hitMatrix: Float32Array;
}

interface XRTransientInputHitTestResult {
    readonly inputSource: XRInputSource;
    readonly results: XRHitTestResult[];
}

interface XRHitTestResult {
    getPose(baseSpace: XRSpace): XRPose | undefined;
    // When anchor system is enabled
    createAnchor?: (pose: XRRigidTransform) => Promise<XRAnchor> | undefined;
}

interface XRHitTestSource {
    cancel(): void;
}

interface XRTransientInputHitTestSource {
    cancel(): void;
}

interface XRHitTestOptionsInit {
    space: XRSpace;
    entityTypes?: XRHitTestTrackableType[] | undefined;
    offsetRay?: XRRay | undefined;
}

interface XRTransientInputHitTestOptionsInit {
    profile: string;
    entityTypes?: XRHitTestTrackableType[] | undefined;
    offsetRay?: XRRay | undefined;
}

interface XRAnchor {
    anchorSpace: XRSpace;
    delete(): void;
}

interface XRPlane {
    orientation: 'horizontal' | 'vertical';
    planeSpace: XRSpace;
    polygon: DOMPointReadOnly[];
    lastChangedTime: number;
}

type XRHandJoint =
    | 'wrist'
    | 'thumb-metacarpal'
    | 'thumb-phalanx-proximal'
    | 'thumb-phalanx-distal'
    | 'thumb-tip'
    | 'index-finger-metacarpal'
    | 'index-finger-phalanx-proximal'
    | 'index-finger-phalanx-intermediate'
    | 'index-finger-phalanx-distal'
    | 'index-finger-tip'
    | 'middle-finger-metacarpal'
    | 'middle-finger-phalanx-proximal'
    | 'middle-finger-phalanx-intermediate'
    | 'middle-finger-phalanx-distal'
    | 'middle-finger-tip'
    | 'ring-finger-metacarpal'
    | 'ring-finger-phalanx-proximal'
    | 'ring-finger-phalanx-intermediate'
    | 'ring-finger-phalanx-distal'
    | 'ring-finger-tip'
    | 'pinky-finger-metacarpal'
    | 'pinky-finger-phalanx-proximal'
    | 'pinky-finger-phalanx-intermediate'
    | 'pinky-finger-phalanx-distal'
    | 'pinky-finger-tip';

interface XRJointSpace extends XRSpace {
    readonly jointName: XRHandJoint;
}

interface XRJointPose extends XRPose {
    readonly radius: number | undefined;
}

interface XRHand extends Iterable<XRJointSpace> {
    readonly length: number;

    [index: number]: XRJointSpace;

    readonly WRIST: number;

    readonly THUMB_METACARPAL: number;
    readonly THUMB_PHALANX_PROXIMAL: number;
    readonly THUMB_PHALANX_DISTAL: number;
    readonly THUMB_PHALANX_TIP: number;

    readonly INDEX_METACARPAL: number;
    readonly INDEX_PHALANX_PROXIMAL: number;
    readonly INDEX_PHALANX_INTERMEDIATE: number;
    readonly INDEX_PHALANX_DISTAL: number;
    readonly INDEX_PHALANX_TIP: number;

    readonly MIDDLE_METACARPAL: number;
    readonly MIDDLE_PHALANX_PROXIMAL: number;
    readonly MIDDLE_PHALANX_INTERMEDIATE: number;
    readonly MIDDLE_PHALANX_DISTAL: number;
    readonly MIDDLE_PHALANX_TIP: number;

    readonly RING_METACARPAL: number;
    readonly RING_PHALANX_PROXIMAL: number;
    readonly RING_PHALANX_INTERMEDIATE: number;
    readonly RING_PHALANX_DISTAL: number;
    readonly RING_PHALANX_TIP: number;

    readonly LITTLE_METACARPAL: number;
    readonly LITTLE_PHALANX_PROXIMAL: number;
    readonly LITTLE_PHALANX_INTERMEDIATE: number;
    readonly LITTLE_PHALANX_DISTAL: number;
    readonly LITTLE_PHALANX_TIP: number;
}

// WebXR Layers
interface XRLayerEventInit extends EventInit {
    layer: XRLayer;
}

declare class XRLayerEvent extends Event {
    constructor(type: string, eventInitDict: XRLayerEventInit);
    readonly layer: XRLayer;
}

interface XRCompositionLayerEventMap {
    "redraw": XRLayerEvent;
}

interface XRCompositionLayer extends XRLayer {
    readonly layout: XRLayerLayout;
    blendTextureSourceAlpha: boolean;
    chromaticAberrationCorrection?: boolean | undefined;
    readonly mipLevels: number;
    readonly needsRedraw: boolean;
    destroy(): void;

    space: XRSpace;

    // Events
    onredraw: (evt: XRCompositionLayerEventMap["redraw"]) => any;

    addEventListener<K extends keyof XRCompositionLayerEventMap>(
        this: XRCompositionLayer,
        type: K,
        callback: (evt: XRCompositionLayerEventMap[K]) => any,
        options?: boolean | AddEventListenerOptions
    ): void;
    addEventListener(
        type: string,
        listener: EventListenerOrEventListenerObject,
        options?: boolean | AddEventListenerOptions
    ): void;

    removeEventListener<K extends keyof XRCompositionLayerEventMap>(
        this: XRCompositionLayer,
        type: K,
        callback: (evt: XRCompositionLayerEventMap[K]) => any
    ): void;
    removeEventListener(
        type: string,
        listener: EventListenerOrEventListenerObject,
        options?: boolean | EventListenerOptions
    ): void;
}

type XRTextureType = "texture" | "texture-array";

type XRLayerLayout =
    | "default"
    | "mono"
    | "stereo"
    | "stereo-left-right"
    | "stereo-top-bottom";

interface XRProjectionLayerInit {
    scaleFactor?: number | undefined;
    textureType?: XRTextureType | undefined;
    colorFormat?: GLenum | undefined;
    depthFormat?: GLenum | undefined;
}

interface XRProjectionLayer extends XRCompositionLayer {
    readonly textureWidth: number;
    readonly textureHeight: number;
    readonly textureArrayLength: number;
    readonly ignoreDepthValues: number;
    fixedFoveation: number;
}

interface XRLayerInit {
    mipLevels?: number | undefined;
    viewPixelWidth: number;
    viewPixelHeight: number;
    isStatic?: boolean | undefined;
    colorFormat?: GLenum | undefined;
    depthFormat?: GLenum | undefined;
    space: XRSpace;
    layout?: XRLayerLayout | undefined;
}

interface XRMediaLayerInit {
    invertStereo?: boolean | undefined;
    space: XRSpace;
    layout?: XRLayerLayout | undefined;
}

interface XRCylinderLayerInit extends XRLayerInit {
    textureType?: XRTextureType | undefined;
    transform: XRRigidTransform;
    radius?: number | undefined;
    centralAngle?: number | undefined;
    aspectRatio?: number | undefined;
}

interface XRMediaCylinderLayerInit extends XRMediaLayerInit {
    transform?: XRRigidTransform | undefined;
    radius?: number | undefined;
    centralAngle?: number | undefined;
    aspectRatio?: number | undefined;
}

interface XRCylinderLayer extends XRCompositionLayer {
    transform: XRRigidTransform;
    radius: number;
    centralAngle: number;
    aspectRatio: number;
}

interface XRQuadLayerInit extends XRLayerInit {
    textureType?: XRTextureType | undefined;
    transform?: XRRigidTransform | undefined;
    width?: number | undefined;
    height?: number | undefined;
}

interface XRMediaQuadLayerInit extends XRMediaLayerInit {
    transform?: XRRigidTransform | undefined;
    width?: number | undefined;
    height?: number | undefined;
}

interface XRQuadLayer extends XRCompositionLayer {
    transform: XRRigidTransform;
    width: number;
    height: number;
}

interface XREquirectLayerInit extends XRLayerInit {
    textureType?: XRTextureType | undefined;
    transform?: XRRigidTransform | undefined;
    radius?: number | undefined;
    centralHorizontalAngle?: number | undefined;
    upperVerticalAngle?: number | undefined;
    lowerVerticalAngle?: number | undefined;
}

interface XRMediaEquirectLayerInit extends XRMediaLayerInit {
    transform?: XRRigidTransform | undefined;
    radius?: number | undefined;
    centralHorizontalAngle?: number | undefined;
    upperVerticalAngle?: number | undefined;
    lowerVerticalAngle?: number | undefined;
}

interface XREquirectLayer extends XRCompositionLayer {
    transform: XRRigidTransform;
    radius: number;
    centralHorizontalAngle: number;
    upperVerticalAngle: number;
    lowerVerticalAngle: number;
}

interface XRCubeLayerInit extends XRLayerInit {
    orientation?: DOMPointReadOnly | undefined;
}

interface XRCubeLayer extends XRCompositionLayer {
    orientation: DOMPointReadOnly;
}

interface XRSubImage {
    readonly viewport: XRViewport;
}

interface XRWebGLSubImage extends XRSubImage {
    readonly colorTexture: WebGLTexture;
    readonly depthStencilTexture: WebGLTexture;
    readonly imageIndex: number;
    readonly textureWidth: number;
    readonly textureHeight: number;
}

declare class XRWebGLBinding {
    constructor(session: XRSession, context: WebGLRenderingContext);

    readonly nativeProjectionScaleFactor: number;

    createProjectionLayer(init?: XRProjectionLayerInit): XRProjectionLayer;
    createQuadLayer(init?: XRQuadLayerInit): XRQuadLayer;
    createCylinderLayer(init?: XRCylinderLayerInit): XRCylinderLayer;
    createEquirectLayer(init?: XREquirectLayerInit): XREquirectLayer;
    createCubeLayer(init?: XRCubeLayerInit): XRCubeLayer;

    getSubImage(layer: XRCompositionLayer, frame: XRFrame, eye?: XREye): XRWebGLSubImage;
    getViewSubImage(layer: XRProjectionLayer, view: XRView): XRWebGLSubImage;
}

declare class XRMediaBinding {
    constructor(sesion: XRSession);

    createQuadLayer(video: HTMLVideoElement, init?: XRMediaQuadLayerInit): XRQuadLayer;
    createCylinderLayer(video: HTMLVideoElement, init?: XRMediaCylinderLayerInit): XRCylinderLayer;
    createEquirectLayer(video: HTMLVideoElement, init?: XRMediaEquirectLayerInit): XREquirectLayer;
}

// WebGL extensions
interface WebGLRenderingContext {
    makeXRCompatible(): Promise<void>;
    getExtension(extensionName: "OCULUS_multiview"): OCULUS_multiview | null;
    getExtension(extensionName: "EXT_blend_minmax"): EXT_blend_minmax | null;
    getExtension(extensionName: "EXT_texture_filter_anisotropic"): EXT_texture_filter_anisotropic | null;
    getExtension(extensionName: "EXT_frag_depth"): EXT_frag_depth | null;
    getExtension(extensionName: "EXT_shader_texture_lod"): EXT_shader_texture_lod | null;
    getExtension(extensionName: "EXT_sRGB"): EXT_sRGB | null;
    getExtension(extensionName: "OES_vertex_array_object"): OES_vertex_array_object | null;
    getExtension(extensionName: "WEBGL_color_buffer_float"): WEBGL_color_buffer_float | null;
    getExtension(extensionName: "WEBGL_compressed_texture_astc"): WEBGL_compressed_texture_astc | null;
    getExtension(extensionName: "WEBGL_compressed_texture_s3tc_srgb"): WEBGL_compressed_texture_s3tc_srgb | null;
    getExtension(extensionName: "WEBGL_debug_shaders"): WEBGL_debug_shaders | null;
    getExtension(extensionName: "WEBGL_draw_buffers"): WEBGL_draw_buffers | null;
    getExtension(extensionName: "WEBGL_lose_context"): WEBGL_lose_context | null;
    getExtension(extensionName: "WEBGL_depth_texture"): WEBGL_depth_texture | null;
    getExtension(extensionName: "WEBGL_debug_renderer_info"): WEBGL_debug_renderer_info | null;
    getExtension(extensionName: "WEBGL_compressed_texture_s3tc"): WEBGL_compressed_texture_s3tc | null;
    getExtension(extensionName: "OES_texture_half_float_linear"): OES_texture_half_float_linear | null;
    getExtension(extensionName: "OES_texture_half_float"): OES_texture_half_float | null;
    getExtension(extensionName: "OES_texture_float_linear"): OES_texture_float_linear | null;
    getExtension(extensionName: "OES_texture_float"): OES_texture_float | null;
    getExtension(extensionName: "OES_standard_derivatives"): OES_standard_derivatives | null;
    getExtension(extensionName: "OES_element_index_uint"): OES_element_index_uint | null;
    getExtension(extensionName: "ANGLE_instanced_arrays"): ANGLE_instanced_arrays | null;
    getExtension(extensionName: string): any;
}

interface WebGL2RenderingContext {
    makeXRCompatible(): Promise<void>;
    getExtension(extensionName: "OCULUS_multiview"): OCULUS_multiview | null;
    getExtension(extensionName: "EXT_blend_minmax"): EXT_blend_minmax | null;
    getExtension(extensionName: "EXT_texture_filter_anisotropic"): EXT_texture_filter_anisotropic | null;
    getExtension(extensionName: "EXT_frag_depth"): EXT_frag_depth | null;
    getExtension(extensionName: "EXT_shader_texture_lod"): EXT_shader_texture_lod | null;
    getExtension(extensionName: "EXT_sRGB"): EXT_sRGB | null;
    getExtension(extensionName: "OES_vertex_array_object"): OES_vertex_array_object | null;
    getExtension(extensionName: "WEBGL_color_buffer_float"): WEBGL_color_buffer_float | null;
    getExtension(extensionName: "WEBGL_compressed_texture_astc"): WEBGL_compressed_texture_astc | null;
    getExtension(extensionName: "WEBGL_compressed_texture_s3tc_srgb"): WEBGL_compressed_texture_s3tc_srgb | null;
    getExtension(extensionName: "WEBGL_debug_shaders"): WEBGL_debug_shaders | null;
    getExtension(extensionName: "WEBGL_draw_buffers"): WEBGL_draw_buffers | null;
    getExtension(extensionName: "WEBGL_lose_context"): WEBGL_lose_context | null;
    getExtension(extensionName: "WEBGL_depth_texture"): WEBGL_depth_texture | null;
    getExtension(extensionName: "WEBGL_debug_renderer_info"): WEBGL_debug_renderer_info | null;
    getExtension(extensionName: "WEBGL_compressed_texture_s3tc"): WEBGL_compressed_texture_s3tc | null;
    getExtension(extensionName: "OES_texture_half_float_linear"): OES_texture_half_float_linear | null;
    getExtension(extensionName: "OES_texture_half_float"): OES_texture_half_float | null;
    getExtension(extensionName: "OES_texture_float_linear"): OES_texture_float_linear | null;
    getExtension(extensionName: "OES_texture_float"): OES_texture_float | null;
    getExtension(extensionName: "OES_standard_derivatives"): OES_standard_derivatives | null;
    getExtension(extensionName: "OES_element_index_uint"): OES_element_index_uint | null;
    getExtension(extensionName: "ANGLE_instanced_arrays"): ANGLE_instanced_arrays | null;
    getExtension(extensionName: string): any;
}

declare enum XOVR_multiview2 {
    FRAMEBUFFER_ATTACHMENT_TEXTURE_NUM_VIEWS_OVR = 0x9630,
    FRAMEBUFFER_ATTACHMENT_TEXTURE_BASE_VIEW_INDEX_OVR = 0x9632,
    MAX_VIEWS_OVR = 0x9631,
    FRAMEBUFFER_INCOMPLETE_VIEW_TARGETS_OVR = 0x9633
}

interface OVR_multiview2 {
    readonly FRAMEBUFFER_ATTACHMENT_TEXTURE_NUM_VIEWS_OVR: number;
    readonly FRAMEBUFFER_ATTACHMENT_TEXTURE_BASE_VIEW_INDEX_OVR: number;
    readonly MAX_VIEWS_OVR: number;
    readonly FRAMEBUFFER_INCOMPLETE_VIEW_TARGETS_OVR: number;

    framebufferTextureMultiviewOVR(
        target: GLenum,
        attachment: GLenum,
        texture: WebGLTexture,
        level: number,
        baseViewIndex: number,
        numViews: number
    ): WebGLRenderbuffer;
}

interface OCULUS_multiview extends OVR_multiview2 {
    framebufferTextureMultisampleMultiviewOVR(
        target: GLenum,
        attachment: GLenum,
        texture: WebGLTexture | null,
        level: GLint,
        samples: GLsizei,
        baseViewIndex: GLint,
        numViews: GLsizei
    ): void;
}
