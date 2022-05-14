// Type definitions for non-npm package webxr 0.2
// Project: https://www.w3.org/TR/webxr/
// Definitions by: Rob Rohan <https://github.com/robrohan>
//                 Raanan Weber <https://github.com/RaananW>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.7

// Most of this was hand written and... more or less copied from the following
// sites:
//  https://www.w3.org/TR/webxr/
//  https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API
//  https://www.w3.org/immersive-web/
//  https://github.com/immersive-web
//

export interface Navigator {
    xr?: XRSystem | undefined;
}

/**
 * Available session modes
 */
export type XRSessionMode = 'inline' | 'immersive-vr' | 'immersive-ar';

/**
 * Reference space types
 */
export type XRReferenceSpaceType = 'viewer' | 'local' | 'local-floor' | 'bounded-floor' | 'unbounded';

export type XREnvironmentBlendMode = 'opaque' | 'additive' | 'alpha-blend';

export type XRVisibilityState = 'visible' | 'visible-blurred' | 'hidden';

/**
 * Handedness types
 */
export type XRHandedness = 'none' | 'left' | 'right';

/**
 * InputSource target ray modes
 */
export type XRTargetRayMode = 'gaze' | 'tracked-pointer' | 'screen';

/**
 * Eye types
 */
export type XREye = 'none' | 'left' | 'right';

/**
 * Type of XR events available
 */
export type XREventType =
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

export type XRFrameRequestCallback = (time: DOMHighResTimeStamp, frame: XRFrame) => void;

export type XRPlaneSet = Set<XRPlane>;
export type XRAnchorSet = Set<XRAnchor>;

export interface XREventHandler {
    (event: Event): any;
}

// tslint:disable-next-line no-empty-interface
export interface XRLayer extends EventTarget {}

export interface XRSessionInit {
    optionalFeatures?: string[] | undefined;
    requiredFeatures?: string[] | undefined;
}

export interface XRSessionEvent extends Event {
    readonly session: XRSession;
}

export interface XRSystemDeviceChangeEvent extends Event {
    type: "devicechange";
}

export interface XRSessionGrant {
    mode: XRSessionMode;
}

export interface XRSystemSessionGrantedEvent extends Event {
    type: "sessiongranted";
    session: XRSessionGrant;
}

export interface XRSystemEventMap extends HTMLMediaElementEventMap {
    "devicechange": XRSystemDeviceChangeEvent;
    "sessiongranted": XRSystemSessionGrantedEvent;
}

export interface XRSystem extends EventTarget {
    requestSession(mode: XRSessionMode, options?: XRSessionInit): Promise<XRSession>;
    isSessionSupported(mode: XRSessionMode): Promise<boolean>;

    ondevicechange: ((this: XRSystem, ev: XRSystemDeviceChangeEvent) => any) | null;
    onsessiongranted: ((this: XRSystem, ev: XRSystemSessionGrantedEvent) => any) | null;

    addEventListener<K extends keyof XRSystemEventMap>(type: K, listener: (this: XRSystem, ev: XRSystemEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof XRSystemEventMap>(type: K, listener: (this: XRSystem, ev: XRSystemEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

export interface XRViewport {
    readonly x: number;
    readonly y: number;
    readonly width: number;
    readonly height: number;
}

export interface XRWebGLLayerInit {
    antialias?: boolean | undefined;
    depth?: boolean | undefined;
    stencil?: boolean | undefined;
    alpha?: boolean | undefined;
    multiview?: boolean | undefined;
    framebufferScaleFactor?: number | undefined;
}

export class XRWebGLLayer {
    static getNativeFramebufferScaleFactor(session: XRSession): number;
    constructor(
        session: XRSession,
        context: WebGLRenderingContext | WebGL2RenderingContext,
        layerInit?: XRWebGLLayerInit,
    );
    readonly antialias: boolean;
    readonly framebuffer: WebGLFramebuffer;
    readonly framebufferWidth: number;
    readonly framebufferHeight: number;
    readonly ignoreDepthValues: boolean;
    getViewport: (view: XRView) => XRViewport;
}

// tslint:disable-next-line no-empty-interface
export interface XRSpace extends EventTarget {}

export interface XRRenderState {
    readonly baseLayer?: XRWebGLLayer | undefined;
    readonly depthFar: number;
    readonly depthNear: number;
    readonly inlineVerticalFieldOfView?: number | undefined;

    // https://immersive-web.github.io/layers/#xrrenderstatechanges
    readonly layers?: XRLayer[] | undefined;
}

export interface XRRenderStateInit extends XRRenderState {
    baseLayer: XRWebGLLayer;
    depthFar: number;
    depthNear: number;
    inlineVerticalFieldOfView?: number | undefined;
    layers?: XRLayer[] | undefined;
}

export interface XRReferenceSpace extends XRSpace {
    getOffsetReferenceSpace(originOffset: XRRigidTransform): XRReferenceSpace;
    onreset: XREventHandler;
}

export interface XRBoundedReferenceSpace extends XRReferenceSpace {
    readonly boundsGeometry: DOMPointReadOnly[];
}

export interface XRInputSource {
    readonly handedness: XRHandedness;
    readonly targetRayMode: XRTargetRayMode;
    readonly targetRaySpace: XRSpace;
    readonly gripSpace?: XRSpace | undefined;
    readonly gamepad?: Gamepad | undefined;
    readonly profiles: string[];
    readonly hand?: XRHand | undefined;
}

export interface XRPose {
    readonly transform: XRRigidTransform;
    readonly emulatedPosition: boolean;
}

export interface XRFrame {
    readonly session: XRSession;
    getPose(space: XRSpace, baseSpace: XRSpace): XRPose | null;
    getViewerPose(referenceSpace: XRReferenceSpace): XRViewerPose | null;

    // AR
    getHitTestResults(hitTestSource: XRHitTestSource): XRHitTestResult[];
    getHitTestResultsForTransientInput(
        hitTestSource: XRTransientInputHitTestSource,
    ): XRTransientInputHitTestResult[];
    // Anchors
    trackedAnchors?: XRAnchorSet | undefined;
    createAnchor?(pose: XRRigidTransform, space: XRSpace): Promise<XRAnchor>;
    // Planes
    worldInformation?: {
        detectedPlanes?: XRPlaneSet | undefined;
    } | undefined;
    // Hand tracking
    getJointPose?(joint: XRJointSpace, baseSpace: XRSpace): XRJointPose;
}

export interface XRInputSourceEvent extends Event {
    readonly frame: XRFrame;
    readonly inputSource: XRInputSource;
}

export type XRInputSourceArray = XRInputSource[];

export interface XRSession {
    addEventListener(
        type: XREventType,
        listener: XREventHandler,
        options?: boolean | AddEventListenerOptions,
    ): void;
    removeEventListener(
        type: XREventType,
        listener: XREventHandler,
        options?: boolean | EventListenerOptions,
    ): void;
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
    readonly visibilityState: XRVisibilityState;
    /**
     * Removes a callback from the animation frame painting callback from
     * XRSession's set of animation frame rendering callbacks, given the
     * identifying handle returned by a previous call to requestAnimationFrame().
     */
    cancelAnimationFrame: (handle: number) => void;
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
    requestAnimationFrame: (callback: XRFrameRequestCallback) => number;
    /**
     * Requests that a new XRReferenceSpace of the specified export type be created.
     * Returns a promise which resolves with the XRReferenceSpace or
     * XRBoundedReferenceSpace which was requested, or throws a NotSupportedError if
     * the requested space export type isn't supported by the device.
     */
    requestReferenceSpace(type: XRReferenceSpaceType): Promise<XRReferenceSpace | XRBoundedReferenceSpace>;

    updateRenderState(XRRenderStateInit: XRRenderState): Promise<void>;

    onend: XREventHandler;
    oninputsourceschange: XREventHandler;
    onselect: XREventHandler;
    onselectstart: XREventHandler;
    onselectend: XREventHandler;
    onsqueeze: XREventHandler;
    onsqueezestart: XREventHandler;
    onsqueezeend: XREventHandler;
    onvisibilitychange: XREventHandler;

    // hit test
    requestHitTestSource?(options: XRHitTestOptionsInit): Promise<XRHitTestSource>;
    requestHitTestSourceForTransientInput?(
        options: XRTransientInputHitTestOptionsInit,
    ): Promise<XRTransientInputHitTestSource>;

    // legacy AR hit test
    requestHitTest?(ray: XRRay, referenceSpace: XRReferenceSpace): Promise<XRHitResult[]>;

    // legacy plane detection
    updateWorldTrackingState?(options: { planeDetectionState?: { enabled: boolean } | undefined }): void;
}

export interface XRViewerPose extends XRPose {
    readonly views: XRView[];
}

export class XRRigidTransform {
    constructor(position?: DOMPointInit, direction?: DOMPointInit);
    position: DOMPointReadOnly;
    orientation: DOMPointReadOnly;
    matrix: Float32Array;
    inverse: XRRigidTransform;
}

export interface XRView {
    readonly eye: XREye;
    readonly projectionMatrix: Float32Array;
    readonly transform: XRRigidTransform;
    readonly recommendedViewportScale?: number | undefined;
    requestViewportScale(scale: number): void;
}

export interface XRInputSourceChangeEvent extends Event {
    session: XRSession;
    removed: XRInputSource[];
    added: XRInputSource[];
}

// Experimental/Draft features
export class XRRay {
    constructor(transformOrOrigin: XRRigidTransform | DOMPointInit, direction?: DOMPointInit);
    origin: DOMPointReadOnly;
    direction: DOMPointReadOnly;
    matrix: Float32Array;
}

export enum XRHitTestTrackableType {
    'point',
    'plane',
    'mesh',
}

export interface XRHitResult {
    hitMatrix: Float32Array;
}

export interface XRTransientInputHitTestResult {
    readonly inputSource: XRInputSource;
    readonly results: XRHitTestResult[];
}

export interface XRHitTestResult {
    getPose(baseSpace: XRSpace): XRPose | undefined;
    // When anchor system is enabled
    createAnchor?(pose: XRRigidTransform): Promise<XRAnchor>;
}

export interface XRHitTestSource {
    cancel(): void;
}

export interface XRTransientInputHitTestSource {
    cancel(): void;
}

export interface XRHitTestOptionsInit {
    space: XRSpace;
    entityTypes?: XRHitTestTrackableType[] | undefined;
    offsetRay?: XRRay | undefined;
}

export interface XRTransientInputHitTestOptionsInit {
    profile: string;
    entityTypes?: XRHitTestTrackableType[] | undefined;
    offsetRay?: XRRay | undefined;
}

export interface XRAnchor {
    anchorSpace: XRSpace;
    delete(): void;
}

export interface XRPlane {
    orientation: 'Horizontal' | 'Vertical';
    planeSpace: XRSpace;
    polygon: DOMPointReadOnly[];
    lastChangedTime: number;
}

// tslint:disable-next-line no-empty-interface
export interface XRJointSpace extends XRSpace {}

export interface XRJointPose extends XRPose {
    radius: number | undefined;
}

export interface XRHand extends Iterable<XRJointSpace> {
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
export interface XRLayerEventInit extends EventInit {
    layer: XRLayer;
}

export class XRLayerEvent extends Event {
    constructor(type: string, eventInitDict: XRLayerEventInit);
    readonly layer: XRLayer;
}

export interface XRCompositionLayerEventMap {
    "redraw": XRLayerEvent;
}

export interface XRCompositionLayer extends XRLayer {
    readonly layout: XRLayerLayout;
    blendTextureSourceAlpha: boolean;
    chromaticAberrationCorrection?: boolean;
    readonly mipLevels: number;
    readonly needsRedraw: boolean;
    destroy(): void;

    space: XRSpace;

    // Events
    onredraw: (evt: XRCompositionLayerEventMap["redraw"]) => any;
    addEventListener<K extends keyof XRCompositionLayerEventMap>(this: XRCompositionLayer, type: K, callback: (evt: XRCompositionLayerEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof XRCompositionLayerEventMap>(this: XRCompositionLayer, type: K, callback: (evt: XRCompositionLayerEventMap[K]) => any): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

export type XRTextureType = "texture" | "texture-array";

export type XRLayerLayout =
    | "default"
    | "mono"
    | "stereo"
    | "stereo-left-right"
    | "stereo-top-bottom";

export interface XRProjectionLayerInit {
    scaleFactor?: number;
    textureType?: XRTextureType;
    colorFormat?: GLenum;
    depthFormat?: GLenum;
}

export interface XRProjectionLayer extends XRCompositionLayer {
    readonly textureWidth: number;
    readonly textureHeight: number;
    readonly textureArrayLength: number;
    readonly ignoreDepthValues: number;
    fixedFoveation: number;
}

export interface XRLayerInit {
    mipLevels?: number;
    viewPixelWidth: number;
    viewPixelHeight: number;
    isStatic?: boolean;
    colorFormat?: GLenum;
    depthFormat?: GLenum;
    space: XRSpace;
    layout?: XRLayerLayout;
}

export interface XRMediaLayerInit {
    invertStereo?: boolean;
    space: XRSpace;
    layout?: XRLayerLayout;
}

export interface XRCylinderLayerInit extends XRLayerInit {
    textureType?: XRTextureType;
    transform: XRRigidTransform;
    radius?: number;
    centralAngle?: number;
    aspectRatio?: number;
}

export interface XRMediaCylinderLayerInit extends XRMediaLayerInit {
    transform?: XRRigidTransform;
    radius?: number;
    centralAngle?: number;
    aspectRatio?: number;
}

export interface XRCylinderLayer extends XRCompositionLayer {
    transform: XRRigidTransform;
    radius: number;
    centralAngle: number;
    aspectRatio: number;
}

export interface XRQuadLayerInit extends XRLayerInit {
    textureType?: XRTextureType;
    transform?: XRRigidTransform;
    width?: number;
    height?: number;
}

export interface XRMediaQuadLayerInit extends XRMediaLayerInit {
    transform?: XRRigidTransform;
    width?: number;
    height?: number;
}

export interface XRQuadLayer extends XRCompositionLayer {
    transform: XRRigidTransform;
    width: number;
    height: number;
}

export interface XREquirectLayerInit extends XRLayerInit {
    textureType?: XRTextureType;
    transform?: XRRigidTransform;
    radius?: number;
    centralHorizontalAngle?: number;
    upperVerticalAngle?: number;
    lowerVerticalAngle?: number;
}

export interface XRMediaEquirectLayerInit extends XRMediaLayerInit {
    transform?: XRRigidTransform;
    radius?: number;
    centralHorizontalAngle?: number;
    upperVerticalAngle?: number;
    lowerVerticalAngle?: number;
}

export interface XREquirectLayer extends XRCompositionLayer {
    transform: XRRigidTransform;
    radius: number;
    centralHorizontalAngle: number;
    upperVerticalAngle: number;
    lowerVerticalAngle: number;
}

export interface XRCubeLayerInit extends XRLayerInit {
    orientation?: DOMPointReadOnly;
}

export interface XRCubeLayer extends XRCompositionLayer {
    orientation: DOMPointReadOnly;
}

export interface XRSubImage {
    readonly viewport: XRViewport;
}

export interface XRWebGLSubImage extends XRSubImage {
    readonly colorTexture: WebGLTexture;
    readonly depthStencilTexture: WebGLTexture;
    readonly imageIndex: number;
    readonly textureWidth: number;
    readonly textureHeight: number;
}

export class XRWebGLBinding {
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

export class XRMediaBinding {
    constructor(sesion: XRSession);

    createQuadLayer(video: HTMLVideoElement, init?: XRMediaQuadLayerInit): XRQuadLayer;
    createCylinderLayer(video: HTMLVideoElement, init?: XRMediaCylinderLayerInit): XRCylinderLayer;
    createEquirectLayer(video: HTMLVideoElement, init?: XRMediaEquirectLayerInit): XREquirectLayer;
}
