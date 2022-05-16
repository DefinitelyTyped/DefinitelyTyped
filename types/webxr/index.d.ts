// Type definitions for non-npm package webxr 0.4
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

interface WebGLRenderingContextBase {
    makeXRCompatible(): Promise<void>;
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

type XRFrameRequestCallback = (time: DOMHighResTimeStamp, frame: XRFrame) => void;

interface EventHandler {
    (event: Event): any;
}

interface XRSystemDeviceChangeEvent extends Event {
    type: "devicechange";
}

interface XRSystemDeviceChangeEventHandler {
    (event: XRSystemDeviceChangeEvent): any;
}

interface XRSystemEventMap {
    "devicechange": XRSystemDeviceChangeEvent;
}

interface XRSystem extends EventTarget {
    requestSession(mode: XRSessionMode, options?: XRSessionInit): Promise<XRSession>;
    isSessionSupported(mode: XRSessionMode): Promise<boolean>;

    ondevicechange: XRSystemDeviceChangeEventHandler | null;

    dispatchEvent(event: Event): boolean;
    addEventListener<K extends keyof XRSystemEventMap>(type: K, listener: (this: XRSystem, ev: XRSystemEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof XRSystemEventMap>(type: K, listener: (this: XRSystem, ev: XRSystemEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare abstract class XRSystem implements XRSystem { }

interface XRViewport {
    readonly x: number;
    readonly y: number;
    readonly width: number;
    readonly height: number;
}

declare abstract class XRViewport implements XRViewport { }

// tslint:disable-next-line no-empty-interface
interface XRSpace extends EventTarget { }

declare abstract class XRSpace implements XRSpace { }

interface XRRenderStateInit {
    baseLayer?: XRWebGLLayer | undefined;
    depthFar?: number | undefined;
    depthNear?: number | undefined;
    inlineVerticalFieldOfView?: number | undefined;
}

interface XRRenderState {
    readonly baseLayer?: XRWebGLLayer | undefined;
    readonly depthFar: number;
    readonly depthNear: number;
    readonly inlineVerticalFieldOfView?: number | undefined;
}

declare abstract class XRRenderState implements XRRenderState { }

interface XRReferenceSpace extends XRSpace {
    getOffsetReferenceSpace(originOffset: XRRigidTransform): XRReferenceSpace;
    onreset: EventHandler;
}

declare abstract class XRReferenceSpace implements XRReferenceSpace { }

interface XRBoundedReferenceSpace extends XRReferenceSpace {
    readonly boundsGeometry: DOMPointReadOnly[];
}

declare abstract class XRBoundedReferenceSpace implements XRBoundedReferenceSpace { }

interface XRInputSource {
    readonly handedness: XRHandedness;
    readonly targetRayMode: XRTargetRayMode;
    readonly targetRaySpace: XRSpace;
    readonly gripSpace?: XRSpace | undefined;
    readonly gamepad?: Gamepad | undefined;
    readonly profiles: string[];
    readonly hand?: XRHand | undefined;
}

declare abstract class XRInputSource implements XRInputSource { }

interface XRInputSourceArray {
    [Symbol.iterator](): IterableIterator<XRInputSource>;
    [n: number]: XRInputSource;

    length: number;

    entries(): IterableIterator<[number, XRInputSource]>;
    keys(): IterableIterator<number>;
    values(): IterableIterator<XRInputSource>;

    forEach(callbackfn: (value: XRInputSource, index: number, array: XRInputSource[]) => void, thisArg?: any): void;
}

declare abstract class XRInputSourceArray implements XRInputSourceArray { }

interface XRPose {
    readonly transform: XRRigidTransform;
    readonly emulatedPosition: boolean;
}

declare abstract class XRPose implements XRPose { }

interface XRFrame {
    readonly session: XRSession;
    getPose(space: XRSpace, baseSpace: XRSpace): XRPose | undefined;
    getViewerPose(referenceSpace: XRReferenceSpace): XRViewerPose | undefined;
}

declare abstract class XRFrame implements XRFrame { }

/**
 * Type of XR events available
 */
type XRInputSourceEventType =
    | "select"
    | "selectend"
    | "selectstart"
    | "squeeze"
    | "squeezeend"
    | "squeezestart";

interface XRInputSourceEventInit extends EventInit {
    frame?: XRFrame | undefined;
    inputSource?: XRInputSource | undefined;
}

declare class XRInputSourceEvent extends Event {
    readonly type: XRInputSourceEventType;
    readonly frame: XRFrame;
    readonly inputSource: XRInputSource;

    constructor(type: XRInputSourceEventType, eventInitDict?: XRInputSourceEventInit);
}

type XRSessionEventType =
    | 'end'
    | 'visibilitychange'
    | 'frameratechange';

interface XRSessionEventInit extends EventInit {
    session: XRSession;
}

declare class XRSessionEvent extends Event {
    readonly session: XRSession;
    constructor(type: XRSessionEventType, eventInitDict?: XRSessionEventInit);
}

interface XRSessionInit {
    optionalFeatures?: string[] | undefined;
    requiredFeatures?: string[] | undefined;
}

interface XRSessionEventMap {
    "inputsourceschange": XRInputSourceChangeEvent;
    "end": XRSessionEvent;
    "visibilitychange": XRSessionEvent;
    "frameratechange": XRSessionEvent;
    "select": XRInputSourceEvent;
    "selectstart": XRInputSourceEvent;
    "selectend": XRInputSourceEvent;
    "squeeze": XRInputSourceEvent;
    "squeezestart": XRInputSourceEvent;
    "squeezeend": XRInputSourceEvent;
}

interface XRSession extends EventTarget {
    /**
     * Returns a list of this session's XRInputSources, each representing an input device
     * used to control the camera and/or scene.
     */
    readonly inputSources: XRInputSourceArray;
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

    onend: EventHandler;
    oninputsourceschange: EventHandler;
    onselect: EventHandler;
    onselectstart: EventHandler;
    onselectend: EventHandler;
    onsqueeze: EventHandler;
    onsqueezestart: EventHandler;
    onsqueezeend: EventHandler;
    onvisibilitychange: EventHandler;
    onframeratechange: EventHandler;

    dispatchEvent(ev: Event): boolean;
    addEventListener<K extends keyof XRSessionEventMap>(type: K, listener: (this: XRSession, ev: XRSessionEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof XRSessionEventMap>(type: K, listener: (this: XRSession, ev: XRSessionEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare abstract class XRSession implements XRSession { }

interface XRViewerPose extends XRPose {
    readonly views: ReadonlyArray<XRView>;
}

declare abstract class XRViewerPose implements XRViewerPose { }

declare class XRRigidTransform {
    readonly position: DOMPointReadOnly;
    readonly orientation: DOMPointReadOnly;
    readonly matrix: Float32Array;
    readonly inverse: XRRigidTransform;

    constructor(position?: DOMPointInit, direction?: DOMPointInit);
}

interface XRView {
    readonly eye: XREye;
    readonly projectionMatrix: Float32Array;
    readonly transform: XRRigidTransform;
    readonly recommendedViewportScale?: number | undefined;
    requestViewportScale(scale: number): void;
}

declare abstract class XRView implements XRView { }

interface XRInputSourceChangeEvent extends XRSessionEvent {
    readonly removed: ReadonlyArray<XRInputSource>;
    readonly added: ReadonlyArray<XRInputSource>;
}

// Experimental/Draft features

// Anchors
type XRAnchorSet = Set<XRAnchor>;

interface XRAnchor {
    anchorSpace: XRSpace;
    delete(): void;
}

declare abstract class XRAnchor implements XRAnchor { }

interface XRFrame {
    trackedAnchors?: XRAnchorSet | undefined;
    createAnchor?: (pose: XRRigidTransform, space: XRSpace) => Promise<XRAnchor> | undefined;
}

// AR Hit testing
declare class XRRay {
    readonly origin: DOMPointReadOnly;
    readonly direction: DOMPointReadOnly;
    readonly matrix: Float32Array;

    constructor(transformOrOrigin?: XRRigidTransform | DOMPointInit, direction?: DOMPointInit);
}

type XRHitTestTrackableType =
    | 'point'
    | 'plane'
    | 'mesh';

interface XRTransientInputHitTestResult {
    readonly inputSource: XRInputSource;
    readonly results: ReadonlyArray<XRHitTestResult>;
}

declare class XRTransientInputHitTestResult {
    prototype: XRTransientInputHitTestResult;
}

interface XRHitTestResult {
    getPose(baseSpace: XRSpace): XRPose | undefined;
    // When anchor system is enabled
    createAnchor?: (pose: XRRigidTransform) => Promise<XRAnchor> | undefined;
}

declare abstract class XRHitTestResult implements XRHitTestResult { }

interface XRHitTestSource {
    cancel(): void;
}

declare abstract class XRHitTestSource implements XRHitTestSource { }

interface XRTransientInputHitTestSource {
    cancel(): void;
}

declare abstract class XRTransientInputHitTestSource implements XRTransientInputHitTestSource { }

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

interface XRSession {
    requestHitTestSource?: (options: XRHitTestOptionsInit) => Promise<XRHitTestSource> | undefined;
    requestHitTestSourceForTransientInput?: (
        options: XRTransientInputHitTestOptionsInit,
    ) => Promise<XRTransientInputHitTestSource> | undefined;

    // Legacy
    requestHitTest?: (ray: XRRay, referenceSpace: XRReferenceSpace) => Promise<XRHitResult[]> | undefined;
}

interface XRFrame {
    getHitTestResults(hitTestSource: XRHitTestSource): XRHitTestResult[];
    getHitTestResultsForTransientInput(
        hitTestSource: XRTransientInputHitTestSource
    ): XRTransientInputHitTestResult[];
}

// Legacy
interface XRHitResult {
    hitMatrix: Float32Array;
}

// Plane detection
type XRPlaneSet = Set<XRPlane>;

type XRPlaneOrientation =
    | 'horizontal'
    | 'vertical';

interface XRPlane {
    orientation: XRPlaneOrientation;
    planeSpace: XRSpace;
    polygon: DOMPointReadOnly[];
    lastChangedTime: number;
}

declare abstract class XRPlane implements XRPlane { }

interface XRSession {
    // Legacy
    updateWorldTrackingState?: (options: { planeDetectionState?: { enabled: boolean } | undefined }) => void | undefined;
}

interface XRFrame {
    worldInformation?: {
        detectedPlanes?: XRPlaneSet | undefined;
    } | undefined;
}

// Hand Tracking
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

declare abstract class XRJointSpace implements XRJointSpace { }

interface XRJointPose extends XRPose {
    readonly radius: number | undefined;
}

declare abstract class XRJointPose implements XRJointPose { }

interface XRHand extends Map<number, XRJointSpace> {
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

declare abstract class XRHand implements XRHand { }

interface XRFrame {
    getJointPose?: (joint: XRJointSpace, baseSpace: XRSpace) => XRJointPose | undefined;
}

// WebXR Layers

// tslint:disable-next-line no-empty-interface
interface XRLayer extends EventTarget { }

declare abstract class XRLayer implements XRLayer { }

interface XRWebGLLayerInit {
    antialias?: boolean | undefined;
    depth?: boolean | undefined;
    stencil?: boolean | undefined;
    alpha?: boolean | undefined;
    ignoreDepthValues?: boolean | undefined;
    framebufferScaleFactor?: number | undefined;
}

declare class XRWebGLLayer extends XRLayer {
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
}

interface XRRenderStateInit {
    layers?: XRLayer[] | undefined;
}

interface XRRenderState {
    readonly layers?: XRLayer[] | undefined;
}

type XRLayerEventType = "redraw";

interface XRLayerEvent extends Event {
    readonly type: XRLayerEventType;
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

declare abstract class XRCompositionLayer implements XRCompositionLayer { }

type XRTextureType =
    | "texture"
    | "texture-array";

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

declare abstract class XRProjectionLayer implements XRProjectionLayer { }

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

declare abstract class XRCylinderLayer implements XRCylinderLayer { }

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

declare abstract class XRQuadLayer implements XRQuadLayer { }

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

declare abstract class XREquirectLayer implements XREquirectLayer { }

interface XRCubeLayerInit extends XRLayerInit {
    orientation?: DOMPointReadOnly | undefined;
}

interface XRCubeLayer extends XRCompositionLayer {
    orientation: DOMPointReadOnly;
}

declare abstract class XRCubeLayer implements XRCubeLayer { }

interface XRSubImage {
    readonly viewport: XRViewport;
}

declare abstract class XRSubImage implements XRSubImage { }

interface XRWebGLSubImage extends XRSubImage {
    readonly colorTexture: WebGLTexture;
    readonly depthStencilTexture: WebGLTexture;
    readonly imageIndex: number;
    readonly textureWidth: number;
    readonly textureHeight: number;
}

declare abstract class XRWebGLSubImage implements XRWebGLSubImage { }

declare class XRWebGLBinding {
    readonly nativeProjectionScaleFactor: number;

    constructor(session: XRSession, context: WebGLRenderingContext);

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
interface WebGLRenderingContextBase {
    getExtension(extensionName: "OCULUS_multiview"): OCULUS_multiview | null;
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

declare abstract class OVR_multiview2 implements OVR_multiview2 { }

// Oculus extensions
interface XRSessionGrant {
    mode: XRSessionMode;
}

interface XRSystemSessionGrantedEvent extends Event {
    type: "sessiongranted";
    session: XRSessionGrant;
}

interface XRSystemSessionGrantedEventHandler {
    (event: XRSystemSessionGrantedEvent): any;
}

interface XRSystemEventMap {
    // Session Grant events are an Meta Oculus Browser extension
    "sessiongranted": XRSystemSessionGrantedEvent;
}

interface XRSystem {
    onsessiongranted: XRSystemSessionGrantedEventHandler | null;
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

declare abstract class OCULUS_multiview implements OCULUS_multiview { }
