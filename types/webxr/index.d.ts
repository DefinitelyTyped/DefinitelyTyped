// Type definitions for non-npm package webxr 0.1
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
    xr: XRSystem;
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

export type XREventHandler = EventHandlerNonNull;

// tslint:disable-next-line no-empty-interface
export interface XRLayer extends EventTarget {}

export interface XRSessionInit {
    optionalFeatures?: string[];
    requiredFeatures?: string[];
}

export interface XRSessionEvent extends Event {
    readonly session: XRSession;
}

export interface XRSystem {
    isSessionSupported: (sessionMode: XRSessionMode) => Promise<boolean>;
    requestSession: (sessionMode: XRSessionMode, sessionInit?: any) => Promise<XRSession>;
}

export interface XRViewport {
    readonly x: number;
    readonly y: number;
    readonly width: number;
    readonly height: number;
}

export interface XRWebGLLayerInit {
    antialias?: boolean;
    depth?: boolean;
    stencil?: boolean;
    alpha?: boolean;
    multiview?: boolean;
    framebufferScaleFactor?: number;
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
    readonly baseLayer?: XRWebGLLayer;
    readonly depthFar: number;
    readonly depthNear: number;
    readonly inlineVerticalFieldOfView?: number;
}

export interface XRRenderStateInit extends XRRenderState {
    baseLayer: XRWebGLLayer;
    depthFar: number;
    depthNear: number;
    inlineVerticalFieldOfView?: number;
    layers?: XRLayer[];
}

export interface XRReferenceSpace extends XRSpace {
    getOffsetReferenceSpace(originOffset: XRRigidTransform): XRReferenceSpace;
    onreset: XREventHandler;
}

export interface XRBoundedReferenceSpace extends XRSpace {
    readonly boundsGeometry: DOMPointReadOnly[];
}

export interface XRInputSource {
    readonly handedness: XRHandedness;
    readonly targetRayMode: XRTargetRayMode;
    readonly targetRaySpace: XRSpace;
    readonly gripSpace?: XRSpace;
    readonly gamepad?: Gamepad;
    readonly profiles: string[];
    readonly hand?: XRHand;
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
    trackedAnchors?: XRAnchorSet;
    createAnchor?(pose: XRRigidTransform, space: XRSpace): Promise<XRAnchor>;
    // Planes
    worldInformation?: {
        detectedPlanes?: XRPlaneSet;
    };
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
    requestAnimationFrame: XRFrameRequestCallback;
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
    updateWorldTrackingState?(options: { planeDetectionState?: { enabled: boolean } }): void;
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
    readonly recommendedViewportScale?: number;
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
    entityTypes?: XRHitTestTrackableType[];
    offsetRay?: XRRay;
}

export interface XRTransientInputHitTestOptionsInit {
    profile: string;
    entityTypes?: XRHitTestTrackableType[];
    offsetRay?: XRRay;
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
