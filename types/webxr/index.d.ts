// Type definitions for webxr 0.0
// Project: https://www.w3.org/TR/webxr/
// Definitions by: Rob Rohan <https://github.com/robrohan>
//                 Raanan Weber <https://github.com/RaananW>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.3

// Most of this was hand written and... more or less copied from the following
// sites:
//  https://www.w3.org/TR/webxr/
//  https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API
//  https://www.w3.org/immersive-web/
//  https://github.com/immersive-web
//

export interface Navigator {
    xr: XRSystem;
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

type XREventHandler<T extends Event> = (callback: T) => void;

interface XRLayer extends EventTarget {}

interface XRSessionInit {
    optionalFeatures?: string[];
    requiredFeatures?: string[];
}

interface XRSessionEvent extends Event {
    readonly session: XRSession;
}

interface XRSystem {
    isSessionSupported: (sessionMode: XRSessionMode) => Promise<boolean>;
    requestSession: (sessionMode: XRSessionMode, sessionInit?: any) => Promise<XRSession>;
}

interface XRViewport {
    readonly x: number;
    readonly y: number;
    readonly width: number;
    readonly height: number;
}

interface XRWebGLLayerInit {
    antialias?: boolean;
    depth?: boolean;
    stencil?: boolean;
    alpha?: boolean;
    multiview?: boolean;
    framebufferScaleFactor?: number;
}

declare class XRWebGLLayer {
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
interface XRSpace extends EventTarget {}

interface XRRenderState {
    readonly baseLayer?: XRWebGLLayer;
    readonly depthFar: number;
    readonly depthNear: number;
    readonly inlineVerticalFieldOfView?: number;
}

interface XRRenderStateInit extends XRRenderState {
    baseLayer: XRWebGLLayer;
    depthFar: number;
    depthNear: number;
    inlineVerticalFieldOfView?: number;
    layers?: XRLayer[];
}

interface XRReferenceSpace extends XRSpace {
    getOffsetReferenceSpace(originOffset: XRRigidTransform): XRReferenceSpace;
    onreset: XREventHandler<Event>;
}

interface XRBoundedReferenceSpace extends XRSpace {
    readonly boundsGeometry: DOMPointReadOnly[];
}

interface XRInputSource {
    readonly handedness: XRHandedness;
    readonly targetRayMode: XRTargetRayMode;
    readonly targetRaySpace: XRSpace;
    readonly gripSpace?: XRSpace;
    readonly gamepad?: Gamepad;
    readonly profiles: Array<string>;
    readonly hand?: XRHand;
}

interface XRPose {
    readonly transform: XRRigidTransform;
    readonly emulatedPosition: boolean;
}

interface XRFrame {
    readonly session: XRSession;
    getPose(space: XRSpace, baseSpace: XRSpace): XRPose | null;
    getViewerPose(referenceSpace: XRReferenceSpace): XRViewerPose | null;

    // AR
    getHitTestResults(hitTestSource: XRHitTestSource): Array<XRHitTestResult>;
    getHitTestResultsForTransientInput(
        hitTestSource: XRTransientInputHitTestSource,
    ): Array<XRTransientInputHitTestResult>;
    // Anchors
    trackedAnchors?: XRAnchorSet;
    createAnchor?(pose: XRRigidTransform, space: XRSpace): Promise<XRAnchor>;
    // Planes
    worldInformation?: {
        detectedPlanes?: XRPlaneSet;
    };
    // Hand tracking
    getJointPose?(joint: XRJointSpace, baseSpace: XRSpace): XRJointPose;
}

interface XRInputSourceEvent extends Event {
    readonly frame: XRFrame;
    readonly inputSource: XRInputSource;
}

type XRInputSourceArray = XRInputSource[];

interface XRSession {
    addEventListener<T extends Event>(
        type: XREventType,
        listener: XREventHandler<T>,
        options?: boolean | AddEventListenerOptions,
    ): void;
    removeEventListener<T extends Event>(
        type: XREventType,
        listener: XREventHandler<T>,
        options?: boolean | EventListenerOptions,
    ): void;
    /**
     * Returns a list of this session's XRInputSources, each representing an input device
     * used to control the camera and/or scene.
     */
    readonly inputSources: Array<XRInputSource>;
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
    requestAnimationFrame: XRFrameRequestCallback;
    /**
     * Requests that a new XRReferenceSpace of the specified type be created.
     * Returns a promise which resolves with the XRReferenceSpace or
     * XRBoundedReferenceSpace which was requested, or throws a NotSupportedError if
     * the requested space type isn't supported by the device.
     */
    requestReferenceSpace(type: XRReferenceSpaceType): Promise<XRReferenceSpace | XRBoundedReferenceSpace>;

    updateRenderState(XRRenderStateInit: XRRenderState): Promise<void>;

    onend: XREventHandler<XRSessionEvent>;
    oninputsourceschange: XREventHandler<XRInputSourceChangeEvent>;
    onselect: XREventHandler<XRInputSourceEvent>;
    onselectstart: XREventHandler<XRInputSourceEvent>;
    onselectend: XREventHandler<XRInputSourceEvent>;
    onsqueeze: XREventHandler<XRInputSourceEvent>;
    onsqueezestart: XREventHandler<XRInputSourceEvent>;
    onsqueezeend: XREventHandler<XRInputSourceEvent>;
    onvisibilitychange: XREventHandler<Event>;

    // hit test
    requestHitTestSource?(options: XRHitTestOptionsInit): Promise<XRHitTestSource>;
    requestHitTestSourceForTransientInput?(
        options: XRTransientInputHitTestOptionsInit,
    ): Promise<XRTransientInputHitTestSource>;

    // legacy AR hit test
    requestHitTest?(ray: XRRay, referenceSpace: XRReferenceSpace): Promise<XRHitResult[]>;

    // legacy plane detection
    updateWorldTrackingState?(options: { planeDetectionState?: { enabled: boolean } }): void;
}

interface XRViewerPose extends XRPose {
    readonly views: Array<XRView>;
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
    readonly recommendedViewportScale?: number;
    requestViewportScale(scale: number): void;
}

interface XRInputSourceChangeEvent extends Event {
    session: XRSession;
    removed: Array<XRInputSource>;
    added: Array<XRInputSource>;
}

// Experimental/Draft features
declare class XRRay {
    constructor(transformOrOrigin: XRRigidTransform | DOMPointInit, direction?: DOMPointInit);
    origin: DOMPointReadOnly;
    direction: DOMPointReadOnly;
    matrix: Float32Array;
}

declare enum XRHitTestTrackableType {
    'point',
    'plane',
    'mesh',
}

interface XRHitResult {
    hitMatrix: Float32Array;
}

interface XRTransientInputHitTestResult {
    readonly inputSource: XRInputSource;
    readonly results: Array<XRHitTestResult>;
}

interface XRHitTestResult {
    getPose(baseSpace: XRSpace): XRPose | undefined;
    // When anchor system is enabled
    createAnchor?(pose: XRRigidTransform): Promise<XRAnchor>;
}

interface XRHitTestSource {
    cancel(): void;
}

interface XRTransientInputHitTestSource {
    cancel(): void;
}

interface XRHitTestOptionsInit {
    space: XRSpace;
    entityTypes?: Array<XRHitTestTrackableType>;
    offsetRay?: XRRay;
}

interface XRTransientInputHitTestOptionsInit {
    profile: string;
    entityTypes?: Array<XRHitTestTrackableType>;
    offsetRay?: XRRay;
}

interface XRAnchor {
    anchorSpace: XRSpace;
    delete(): void;
}

interface XRPlane {
    orientation: 'Horizontal' | 'Vertical';
    planeSpace: XRSpace;
    polygon: Array<DOMPointReadOnly>;
    lastChangedTime: number;
}

interface XRJointSpace extends XRSpace {}

interface XRJointPose extends XRPose {
    radius: number | undefined;
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
