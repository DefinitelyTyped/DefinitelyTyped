// Type definitions for webxr 0.0
// Project: https://www.w3.org/TR/webxr/
// Definitions by: Rob Rohan <https://github.com/robrohan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.7
//
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

export type EventHandler = (event: Event) => any;

export type XRSessionMode = 'immersive-vr' | 'inline' | 'immersive-ar';

export type XRFrameRequestCallback = (time: DOMHighResTimeStamp, frame: XRFrame) => void;

export interface XRSessionEvent extends Event {
    readonly session: XRSession;
}

export interface XRSystem {
    isSessionSupported: (sessionMode: XRSessionMode) => Promise<boolean>;
    requestSession: (sessionMode: XRSessionMode, sessionInit?: any) => Promise<XRSession>;
}

export interface XRViewport {
    readonly height: number;
    readonly width: number;
    readonly x: number;
    readonly y: number;
}

export interface XRWebGLLayerInit {
    alpha: boolean;
    antialias: boolean;
    depth: boolean;
    framebufferScaleFactor: number;
    ignoreDepthValues: boolean;
    stencil: boolean;
}

export class XRWebGLLayer {
    constructor(
        session: XRSession,
        context: WebGLRenderingContext | WebGL2RenderingContext,
        layerInit?: XRWebGLLayerInit,
    );
    readonly antialias: boolean;
    readonly framebuffer: WebGLFramebuffer;
    readonly frameBufferWidth: number;
    readonly frameBufferHeight: number;
    readonly ignoreDepthValues: boolean;
    getViewport: (view: XRView) => XRViewport;
}

// tslint:disable-next-line no-empty-interface
export interface XRSpace extends EventTarget {}

export interface XRRenderState {
    readonly baseLayer: XRWebGLLayer;
    readonly depthFar: number;
    readonly depthNear: number;
    readonly inlineVerticalFieldOfView: number;
}

export interface XRRenderStateInit extends XRRenderState {
    baseLayer: XRWebGLLayer;
    depthFar: number;
    depthNear: number;
    inlineVerticalFieldOfView: number;
}

export interface XRReferenceSpace extends XRSpace {
    onreset: EventHandler;
    // [NewObject] XRReferenceSpace
    getOffsetReferenceSpace: (originOffset: XRRigidTransform) => XRReferenceSpace;
}

// tslint:disable-next-line no-empty-interface
export interface XRBoundedReferenceSpace extends XRSpace {}

export interface XRInputSource {
    // A DOMString indicating the methodology used to
    // produce the target ray: gaze, tracked-pointer, or screen.
    readonly targetRayMode: 'gaze' | 'tracked-pointer' | 'screen';
    // tracks the pose which is used to render objects which should
    // appear as if they're held in the hand indicated by handedness.
    // The orientation of this space indicates the angle at which the hand
    // is gripping the object.
    readonly gripSpace: XRSpace;
    readonly targetRaySpace: XRSpace;
    readonly handedness: 'left' | 'right' | 'none';
    readonly profiles: string;
}

export interface XRPose {
    readonly transform: XRRigidTransform;
    readonly emulatedPosition: boolean;
}

export interface XRFrame {
    readonly session: XRSession;
    getPose: (space: XRSpace, baseSpace: XRSpace) => XRPose;
    getViewerPose: (referenceSpace: XRReferenceSpace) => XRViewerPose;
}

export interface XRInputSourceEvent extends Event {
    readonly frame: XRFrame;
    readonly inputSource: XRInputSource;
}

export type XRInputSourceArray = XRInputSource[];

export interface XRSession extends EventTarget {
    /**
     * Returns this session's blend mode which denotes how much of the real-world
     * environment is visible through the XR device
     */
    readonly environmentBlendMode: 'opaque' | 'additive' | 'alpha-blend';
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
    readonly visibilityState: 'hidden' | 'visible' | 'visible-blurred';

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
    end: (event?: XRSessionEvent) => Promise<void>;
    /**
     * Schedules the specified method to be called the next time the user agent
     * is working on rendering an animation frame for the WebXR device. Returns an
     * integer value which can be used to identify the request for the purposes of
     * canceling the callback using cancelAnimationFrame(). This method is comparable
     * to the Window.requestAnimationFrame() method.
     */
    requestAnimationFrame: (callback: XRFrameRequestCallback) => number;
    /**
     * Requests that a new XRReferenceSpace of the specified type be created.
     * Returns a promise which resolves with the XRReferenceSpace or
     * XRBoundedReferenceSpace which was requested, or throws a NotSupportedError if
     * the requested space type isn't supported by the device.
     */
    requestReferenceSpace: (
        s: 'bounded-floor' | 'local' | 'local-floor' | 'unbounded' | 'viewer',
    ) => Promise<XRReferenceSpace | XRBoundedReferenceSpace>;

    updateRenderState: (newState: XRRenderStateInit) => void;
}

export interface XRViewerPose {
    readonly views: XRView[];
}

export interface XRDomPoint {
    readonly x: number;
    readonly y: number;
    readonly z: number;
    readonly w: number;
}

export class XRRigidTransform {
    constructor(position?: DOMPointInit, orientation?: DOMPointInit);
    readonly matrix: Float32Array;
    readonly orientation: XRDomPoint;
    readonly position: XRDomPoint;
    readonly inverse: XRRigidTransform;
}

export interface XRViewPort {
    readonly height: number;
    readonly width: number;
    readonly x: number;
    readonly y: number;
}

export interface XRView {
    device: any;
    readonly eye: 'right' | 'left';
    sessionId: number;
    readonly transform: XRRigidTransform;
    readonly projectionMatrix: Float32Array;
}
