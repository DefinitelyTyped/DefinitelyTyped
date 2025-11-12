// Most of this was hand written and... more or less copied from the following
// sites:
//  https://www.w3.org/TR/webxr/
//  https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API
//  https://www.w3.org/immersive-web/
//  https://github.com/immersive-web
//

/**
 * ref: https://immersive-web.github.io/webxr/#navigator-xr-attribute
 */
interface Navigator {
    /**
     * An XRSystem object is the entry point to the API, used to query for XR features
     * available to the user agent and initiate communication with XR hardware via the
     * creation of XRSessions.
     */
    xr?: XRSystem | undefined;
}

/**
 * WebGL Context Compatibility
 *
 * ref: https://immersive-web.github.io/webxr/#contextcompatibility
 */
interface WebGLContextAttributes {
    xrCompatible?: boolean | undefined;
}

interface WebGLRenderingContextBase {
    makeXRCompatible(): Promise<void>;
}

/**
 * Available session modes
 *
 * ref: https://immersive-web.github.io/webxr/#xrsessionmode-enum
 */
type XRSessionMode = "inline" | "immersive-vr" | "immersive-ar";

/**
 * Reference space types
 */
type XRReferenceSpaceType = "viewer" | "local" | "local-floor" | "bounded-floor" | "unbounded";

type XREnvironmentBlendMode = "opaque" | "additive" | "alpha-blend";

/**
 * ref: https://immersive-web.github.io/webxr/#xrsession-interface
 */
type XRVisibilityState = "visible" | "visible-blurred" | "hidden";

/**
 * Handedness types
 */
type XRHandedness = "none" | "left" | "right";

/**
 * InputSource target ray modes
 */
type XRTargetRayMode = "gaze" | "tracked-pointer" | "screen" | "transient-pointer";

/**
 * Eye types
 */
type XREye = "none" | "left" | "right";

type XRFrameRequestCallback = (time: DOMHighResTimeStamp, frame: XRFrame) => void;

interface XRSystemDeviceChangeEvent extends Event {
    type: "devicechange";
}

interface XRSystemDeviceChangeEventHandler {
    (event: XRSystemDeviceChangeEvent): any;
}

interface XRSystemEventMap {
    devicechange: XRSystemDeviceChangeEvent;
}

/**
 * An XRSystem object is the entry point to the API, used to query for XR features available
 * to the user agent and initiate communication with XR hardware via the creation of
 * XRSessions.
 *
 * ref: https://immersive-web.github.io/webxr/#xrsystem-interface
 */
interface XRSystem extends EventTarget {
    /**
     * Attempts to initialize an XRSession for the given mode if possible, entering immersive
     * mode if necessary.
     * @param mode
     * @param options
     */
    requestSession(mode: XRSessionMode, options?: XRSessionInit): Promise<XRSession>;

    /**
     * Queries if a given mode may be supported by the user agent and device capabilities.
     * @param mode
     */
    isSessionSupported(mode: XRSessionMode): Promise<boolean>;

    ondevicechange: XRSystemDeviceChangeEventHandler | null;

    addEventListener<K extends keyof XRSystemEventMap>(
        type: K,
        listener: (this: XRSystem, ev: XRSystemEventMap[K]) => any,
        options?: boolean | AddEventListenerOptions,
    ): void;
    addEventListener(
        type: string,
        listener: EventListenerOrEventListenerObject,
        options?: boolean | AddEventListenerOptions,
    ): void;
    removeEventListener<K extends keyof XRSystemEventMap>(
        type: K,
        listener: (this: XRSystem, ev: XRSystemEventMap[K]) => any,
        options?: boolean | EventListenerOptions,
    ): void;
    removeEventListener(
        type: string,
        listener: EventListenerOrEventListenerObject,
        options?: boolean | EventListenerOptions,
    ): void;
}

declare abstract class XRSystem implements XRSystem {}

/**
 * Describes a viewport, or rectangular region, of a graphics surface.
 *
 * ref: https://immersive-web.github.io/webxr/#xrviewport-interface
 */
interface XRViewport {
    readonly x: number;
    readonly y: number;
    readonly width: number;
    readonly height: number;
}

declare abstract class XRViewport implements XRViewport {}

/**
 * Represents a virtual coordinate system with an origin that corresponds to a physical location.
 * Spatial data that is requested from the API or given to the API is always expressed in relation
 * to a specific XRSpace at the time of a specific XRFrame. Numeric values such as pose positions
 * are coordinates in that space relative to its origin. The interface is intentionally opaque.
 *
 * ref: https://immersive-web.github.io/webxr/#xrspace-interface
 */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface XRSpace extends EventTarget {}

declare abstract class XRSpace implements XRSpace {}

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

declare abstract class XRRenderState implements XRRenderState {}

interface XRReferenceSpaceEventInit extends EventInit {
    referenceSpace?: XRReferenceSpace | undefined;
    transform?: XRRigidTransform | undefined;
}

/**
 * XRReferenceSpaceEvents are fired to indicate changes to the state of an XRReferenceSpace.
 *
 * ref: https://immersive-web.github.io/webxr/#xrreferencespaceevent-interface
 */
interface XRReferenceSpaceEvent extends Event {
    readonly type: "reset";
    readonly referenceSpace: XRReferenceSpace;
    readonly transform?: XRRigidTransform | undefined;
}

// tslint:disable-next-line no-unnecessary-class
declare class XRReferenceSpaceEvent implements XRReferenceSpaceEvent {
    constructor(type: "reset", eventInitDict?: XRReferenceSpaceEventInit);
}

interface XRReferenceSpaceEventHandler {
    (event: XRReferenceSpaceEvent): any;
}

interface XRReferenceSpaceEventMap {
    reset: XRReferenceSpaceEvent;
}

/**
 * One of several common XRSpaces that applications can use to establish a spatial relationship
 * with the user's physical environment.
 *
 * ref: https://immersive-web.github.io/webxr/#xrreferencespace-interface
 */
interface XRReferenceSpace extends XRSpace {
    getOffsetReferenceSpace(originOffset: XRRigidTransform): XRReferenceSpace;
    onreset: XRReferenceSpaceEventHandler;

    addEventListener<K extends keyof XRReferenceSpaceEventMap>(
        type: K,
        listener: (this: XRReferenceSpace, ev: XRReferenceSpaceEventMap[K]) => any,
        options?: boolean | AddEventListenerOptions,
    ): void;
    addEventListener(
        type: string,
        listener: EventListenerOrEventListenerObject,
        options?: boolean | AddEventListenerOptions,
    ): void;
    removeEventListener<K extends keyof XRReferenceSpaceEventMap>(
        type: K,
        listener: (this: XRReferenceSpace, ev: XRReferenceSpaceEventMap[K]) => any,
        options?: boolean | EventListenerOptions,
    ): void;
    removeEventListener(
        type: string,
        listener: EventListenerOrEventListenerObject,
        options?: boolean | EventListenerOptions,
    ): void;
}

declare abstract class XRReferenceSpace implements XRReferenceSpace {}

/**
 * Extends XRReferenceSpace to include boundsGeometry, indicating the pre-configured boundaries
 * of the user's space.
 *
 * ref: https://immersive-web.github.io/webxr/#xrboundedreferencespace-interface
 */
interface XRBoundedReferenceSpace extends XRReferenceSpace {
    readonly boundsGeometry: DOMPointReadOnly[];
}

declare abstract class XRBoundedReferenceSpace implements XRBoundedReferenceSpace {}

/**
 * Represents an XR input source, which is any input mechanism which allows the user to perform
 * targeted actions in the same virtual space as the viewer. Example XR input sources include,
 * but are not limited to, handheld controllers, optically tracked hands, and gaze-based input
 * methods that operate on the viewer's pose. Input mechanisms which are not explicitly associated
 * with the XR device, such as traditional gamepads, mice, or keyboards SHOULD NOT be considered
 * XR input sources.
 * ref: https://immersive-web.github.io/webxr/#xrinputsource-interface
 */
interface XRInputSource {
    readonly handedness: XRHandedness;
    readonly targetRayMode: XRTargetRayMode;
    readonly targetRaySpace: XRSpace;
    readonly gripSpace?: XRSpace | undefined;
    readonly gamepad?: Gamepad | undefined;
    readonly profiles: string[];
    readonly hand?: XRHand | undefined;
}

declare abstract class XRInputSource implements XRInputSource {}

/**
 * This Gamepad API interface represents hardware in the controller designed to provide haptic feedback to the user (if available), most commonly vibration hardware.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/GamepadHapticActuator)
 */
interface GamepadHapticActuator {
    /**
     * The pulse() method of the GamepadHapticActuator interface makes the hardware pulse at a certain intensity for a specified duration.
     * @remarks Repeated calls to pulse() override the previous calls if they are still ongoing.
     * @param value A double representing the intensity of the pulse. This can vary depending on the hardware type, but generally takes a value between 0.0 (no intensity) and 1.0 (full intensity).
     * @param duration A double representing the duration of the pulse, in milliseconds.
     * @returns A promise that resolves with a value of true when the pulse has successfully completed.
     *
     * @remarks This feature should be documented in the Gamepad API, but it is not yet implemented in any browser thus missing there. However, it is commonly used in WebXR applications and causes issues for people if omitted.
     */
    pulse(value: number, duration: number): Promise<boolean>;
}

interface Gamepad {
    readonly hapticActuators: readonly GamepadHapticActuator[];
}

/**
 * Represents a list of XRInputSources. It is used in favor of a frozen array type when the contents
 * of the list are expected to change over time, such as with the XRSession inputSources attribute.
 * ref: https://immersive-web.github.io/webxr/#xrinputsourcearray-interface
 */
interface XRInputSourceArray {
    [Symbol.iterator](): IterableIterator<XRInputSource>;
    [n: number]: XRInputSource;

    length: number;

    entries(): IterableIterator<[number, XRInputSource]>;
    keys(): IterableIterator<number>;
    values(): IterableIterator<XRInputSource>;

    forEach(callbackfn: (value: XRInputSource, index: number, array: XRInputSource[]) => void, thisArg?: any): void;
}

declare abstract class XRInputSourceArray implements XRInputSourceArray {}

/**
 * Describes a position and orientation in space relative to an XRSpace.
 *
 * ref: https://immersive-web.github.io/webxr/#xrpose-interface
 */
interface XRPose {
    readonly transform: XRRigidTransform;
    readonly linearVelocity?: DOMPointReadOnly | undefined;
    readonly angularVelocity?: DOMPointReadOnly | undefined;
    readonly emulatedPosition: boolean;
}

declare abstract class XRPose implements XRPose {}

/**
 * Represents a snapshot of the state of all of the tracked objects for an XRSession. Applications
 * can acquire an XRFrame by calling requestAnimationFrame() on an XRSession with an
 * XRFrameRequestCallback. When the callback is called it will be passed an XRFrame.
 * Events which need to communicate tracking state, such as the select event, will also provide an
 * XRFrame.
 *
 * ref: https://immersive-web.github.io/webxr/#xrframe-interface
 */
interface XRFrame {
    readonly session: XRSession;
    readonly predictedDisplayTime: DOMHighResTimeStamp;

    /**
     * Provides the pose of space relative to baseSpace as an XRPose, at the time represented by
     * the XRFrame.
     *
     * @param space
     * @param baseSpace
     */
    getPose(space: XRSpace, baseSpace: XRSpace): XRPose | undefined;

    /**
     * Provides the pose of the viewer relative to referenceSpace as an XRViewerPose, at the
     * XRFrame's time.
     *
     * @param referenceSpace
     */
    getViewerPose(referenceSpace: XRReferenceSpace): XRViewerPose | undefined;
}

declare abstract class XRFrame implements XRFrame {}

/**
 * Type of XR events available
 */
type XRInputSourceEventType = "select" | "selectend" | "selectstart" | "squeeze" | "squeezeend" | "squeezestart";

interface XRInputSourceEventInit extends EventInit {
    frame?: XRFrame | undefined;
    inputSource?: XRInputSource | undefined;
}

/**
 * XRInputSourceEvents are fired to indicate changes to the state of an XRInputSource.
 * ref: https://immersive-web.github.io/webxr/#xrinputsourceevent-interface
 */
declare class XRInputSourceEvent extends Event {
    readonly type: XRInputSourceEventType;
    readonly frame: XRFrame;
    readonly inputSource: XRInputSource;

    constructor(type: XRInputSourceEventType, eventInitDict?: XRInputSourceEventInit);
}

interface XRInputSourceEventHandler {
    (evt: XRInputSourceEvent): any;
}

type XRSessionEventType = "end" | "visibilitychange" | "frameratechange";

interface XRSessionEventInit extends EventInit {
    session: XRSession;
}

/**
 * XRSessionEvents are fired to indicate changes to the state of an XRSession.
 * ref: https://immersive-web.github.io/webxr/#xrsessionevent-interface
 */
declare class XRSessionEvent extends Event {
    readonly session: XRSession;
    constructor(type: XRSessionEventType, eventInitDict?: XRSessionEventInit);
}

interface XRSessionEventHandler {
    (evt: XRSessionEvent): any;
}

/**
 * ref: https://immersive-web.github.io/webxr/#feature-dependencies
 */
interface XRSessionInit {
    optionalFeatures?: string[] | undefined;
    requiredFeatures?: string[] | undefined;
}

interface XRSessionEventMap {
    inputsourceschange: XRInputSourcesChangeEvent;
    end: XRSessionEvent;
    visibilitychange: XRSessionEvent;
    frameratechange: XRSessionEvent;
    select: XRInputSourceEvent;
    selectstart: XRInputSourceEvent;
    selectend: XRInputSourceEvent;
    squeeze: XRInputSourceEvent;
    squeezestart: XRInputSourceEvent;
    squeezeend: XRInputSourceEvent;
}

/**
 * Any interaction with XR hardware is done via an XRSession object, which can only be
 * retrieved by calling requestSession() on the XRSystem object. Once a session has been
 * successfully acquired, it can be used to poll the viewer pose, query information about
 * the user's environment, and present imagery to the user.
 *
 * ref: https://immersive-web.github.io/webxr/#xrsession-interface
 */
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
    readonly enabledFeatures?: string[] | undefined;
    readonly isSystemKeyboardSupported: boolean;
    readonly interactionMode?: XRInteractionMode | undefined;

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

    updateRenderState(renderStateInit?: XRRenderStateInit): Promise<void>;

    updateTargetFrameRate(rate: number): Promise<void>;

    onend: XRSessionEventHandler;
    oninputsourceschange: XRInputSourcesChangeEventHandler;
    onselect: XRInputSourceEventHandler;
    onselectstart: XRInputSourceEventHandler;
    onselectend: XRInputSourceEventHandler;
    onsqueeze: XRInputSourceEventHandler;
    onsqueezestart: XRInputSourceEventHandler;
    onsqueezeend: XRInputSourceEventHandler;
    onvisibilitychange: XRSessionEventHandler;
    onframeratechange: XRSessionEventHandler;

    addEventListener<K extends keyof XRSessionEventMap>(
        type: K,
        listener: (this: XRSession, ev: XRSessionEventMap[K]) => any,
        options?: boolean | AddEventListenerOptions,
    ): void;
    addEventListener(
        type: string,
        listener: EventListenerOrEventListenerObject,
        options?: boolean | AddEventListenerOptions,
    ): void;
    removeEventListener<K extends keyof XRSessionEventMap>(
        type: K,
        listener: (this: XRSession, ev: XRSessionEventMap[K]) => any,
        options?: boolean | EventListenerOptions,
    ): void;
    removeEventListener(
        type: string,
        listener: EventListenerOrEventListenerObject,
        options?: boolean | EventListenerOptions,
    ): void;
}

declare abstract class XRSession implements XRSession {}

/**
 * An XRPose describing the state of a viewer of the XR scene as tracked by the XR
 * device. A viewer may represent a tracked piece of hardware, the observed position
 * of a user's head relative to the hardware, or some other means of computing a series
 * of viewpoints into the XR scene. XRViewerPoses can only be queried relative to an
 * XRReferenceSpace. It provides, in addition to the XRPose values, an array of views
 * which include rigid transforms to indicate the viewpoint and projection matrices.
 * These values should be used by the application when rendering a frame of an XR scene.
 *
 * ref: https://immersive-web.github.io/webxr/#xrviewerpose-interface
 */
interface XRViewerPose extends XRPose {
    readonly views: readonly XRView[];
}

declare abstract class XRViewerPose implements XRViewerPose {}

/**
 * A transform described by a position and orientation. When interpreting an
 * XRRigidTransform the orientation is always applied prior to the position.
 *
 * ref: https://immersive-web.github.io/webxr/#xrrigidtransform-interface
 */
declare class XRRigidTransform {
    readonly position: DOMPointReadOnly;
    readonly orientation: DOMPointReadOnly;
    readonly matrix: Float32Array;
    readonly inverse: XRRigidTransform;

    constructor(position?: DOMPointInit, direction?: DOMPointInit);
}

/**
 * Describes a single view into an XR scene for a given frame.
 *
 * ref: https://immersive-web.github.io/webxr/#xrview-interface
 */
interface XRView {
    readonly eye: XREye;
    readonly projectionMatrix: Float32Array;
    readonly transform: XRRigidTransform;
    readonly recommendedViewportScale?: number | undefined;
    requestViewportScale(scale: number): void;
}

declare abstract class XRView implements XRView {}

/**
 * XRInputSourcesChangeEvents are fired to indicate changes to the XRInputSources that are
 * available to an XRSession.
 * ref: https://immersive-web.github.io/webxr/#xrinputsourceschangeevent-interface
 */
interface XRInputSourcesChangeEvent extends XRSessionEvent {
    readonly removed: readonly XRInputSource[];
    readonly added: readonly XRInputSource[];
}

interface XRInputSourcesChangeEventHandler {
    (evt: XRInputSourcesChangeEvent): any;
}

// Experimental/Draft features

// Anchors
type XRAnchorSet = Set<XRAnchor>;

interface XRAnchor {
    /**
     * An XRSpace object to locate the anchor relative to other XRSpace objects.
     *
     * @see https://immersive-web.github.io/anchors/#dom-xranchor-anchorspace
     */
    readonly anchorSpace: XRSpace;

    /**
     * When persistent anchors are supported, this method can be used to request a persistent
     * handle for the anchor. The returned handle is a string which uniquely identifies the anchor.
     *
     * If the anchor is deleted, the promise will be rejected with a InvalidStateError.
     *
     * @see https://immersive-web.github.io/anchors/#dom-xranchor-requestpersistenthandle
     */
    requestPersistentHandle?: () => Promise<string>;

    delete(): void;
}

declare abstract class XRAnchor implements XRAnchor {}

interface XRFrame {
    /**
     * All anchors tracked in the frame.
     *
     * At XRFrame creation, the set is initially empty and will be populated by
     * the update anchors algorithm.
     *
     * @see https://immersive-web.github.io/anchors/#dom-xrframe-trackedanchors
     */
    readonly trackedAnchors?: XRAnchorSet;

    /**
     * Creates a new anchor using the given pose in the given reference space.
     *
     * By creating an anchor from frame, the created anchor will not be attached to
     * any particular real world object.
     *
     * If the frame is not active, the promise will be rejected with a InvalidStateError.
     *
     * @see https://immersive-web.github.io/anchors/#dom-xrframe-createanchor
     */
    createAnchor?: (pose: XRRigidTransform, space: XRSpace) => Promise<XRAnchor>;
}

interface XRSession {
    /**
     * A list of the known persistent anchors
     */
    readonly persistentAnchors?: string[];

    /**
     * Restores a persistent anchor with the given UUID.
     *
     * If the sessions map of persistent anchors does not contain the given UUID or if the
     * session has ended, the promise will be rejected with a InvalidStateError.
     *
     * @see https://immersive-web.github.io/anchors/#dom-xrsession-restorepersistentanchor
     */
    restorePersistentAnchor?: (uuid: string) => Promise<XRAnchor>;

    /**
     * Deletes the persistent anchor with the given UUID. Also deletes the anchor.
     *
     * If the sessions map of persistent anchors does not contain the given UUID the
     * promise will be rejected with a InvalidStateError.
     *
     * @see https://immersive-web.github.io/anchors/#dom-xrsession-deletepersistentanchor
     */
    deletePersistentAnchor?: (uuid: string) => Promise<void>;
}

interface XRHitTestResult {
    /**
     * Creates a new anchor from the hit test result.
     *
     * @see https://immersive-web.github.io/anchors/#dom-xrhittestresult-createanchor
     */
    createAnchor?: () => Promise<XRAnchor>;
}

// AR Hit testing
declare class XRRay {
    readonly origin: DOMPointReadOnly;
    readonly direction: DOMPointReadOnly;
    readonly matrix: Float32Array;

    constructor(transformOrOrigin?: XRRigidTransform | DOMPointInit, direction?: DOMPointInit);
}

type XRHitTestTrackableType = "point" | "plane" | "mesh";

interface XRTransientInputHitTestResult {
    readonly inputSource: XRInputSource;
    readonly results: readonly XRHitTestResult[];
}

declare class XRTransientInputHitTestResult {
    prototype: XRTransientInputHitTestResult;
}

interface XRHitTestResult {
    getPose(baseSpace: XRSpace): XRPose | undefined;
}

declare abstract class XRHitTestResult implements XRHitTestResult {}

interface XRHitTestSource {
    cancel(): void;
}

declare abstract class XRHitTestSource implements XRHitTestSource {}

interface XRTransientInputHitTestSource {
    cancel(): void;
}

declare abstract class XRTransientInputHitTestSource implements XRTransientInputHitTestSource {}

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
    getHitTestResultsForTransientInput(hitTestSource: XRTransientInputHitTestSource): XRTransientInputHitTestResult[];
}

// Legacy
interface XRHitResult {
    hitMatrix: Float32Array;
}

// Plane detection
type XRPlaneSet = Set<XRPlane>;

type XRPlaneOrientation = "horizontal" | "vertical";

interface XRPlane {
    orientation: XRPlaneOrientation;
    planeSpace: XRSpace;
    polygon: DOMPointReadOnly[];
    lastChangedTime: DOMHighResTimeStamp;
    semanticLabel?: string;
}

interface XRFrame {
    /**
     * XRFrame is extended to contain detectedPlanes attribute which contains
     * all planes that are still tracked in the frame.
     *
     * The set is initially empty and will be populated by the update planes
     * algorithm. If this attribute is accessed when the frame is not active,
     * the user agent MUST throw InvalidStateError.
     *
     * @see https://immersive-web.github.io/real-world-geometry/plane-detection.html#plane-set
     */
    readonly detectedPlanes?: XRPlaneSet;
}

declare abstract class XRPlane implements XRPlane {}

// Mesh detection
type XRMeshSet = Set<XRMesh>;

interface XRMesh {
    meshSpace: XRSpace;
    vertices: Float32Array;
    indices: Uint32Array;
    lastChangedTime: DOMHighResTimeStamp;
    semanticLabel?: string;
}

interface XRFrame {
    /**
     * XRFrame is extended to contain detectedMeshes attribute
     * which contains all meshes that are still tracked in the frame.
     *
     * The set is initially empty and will be populated by the update meshes algorithm.
     * If this attribute is accessed when the frame is not active, the user agent
     * MUST throw InvalidStateError.
     *
     * @see https://immersive-web.github.io/real-world-meshing/#mesh-set
     */
    readonly detectedMeshes?: XRMeshSet;
}

declare abstract class XRMesh implements XRMesh {}

interface XRSession {
    /**
     * XRSession is extended to contain the initiateRoomCapture method which,
     * if supported, will ask the XR Compositor to capture the current room layout.
     * It is up to the XRCompositor if this will replace or augment the set of tracked planes.
     * The user agent MAY also ignore this call, for instance if it doesn’t support a manual room
     * capture more or if it determines that the room is already set up.
     * The initiateRoomCapture method MUST only be able to be called once per XRSession.
     *
     * @see https://immersive-web.github.io/real-world-geometry/plane-detection.html#plane-set
     */
    initiateRoomCapture?(): Promise<undefined>;
}

/**
 * The XRHand interface is pair iterator (an ordered map) with the key being the hand
 * joints ({@link XRHandJoint}) and the value being an {@link XRJointSpace}.
 *
 * @see https://immersive-web.github.io/webxr-hand-input/#xrhand-interface
 */
type XRHandJoint =
    | "wrist"
    | "thumb-metacarpal"
    | "thumb-phalanx-proximal"
    | "thumb-phalanx-distal"
    | "thumb-tip"
    | "index-finger-metacarpal"
    | "index-finger-phalanx-proximal"
    | "index-finger-phalanx-intermediate"
    | "index-finger-phalanx-distal"
    | "index-finger-tip"
    | "middle-finger-metacarpal"
    | "middle-finger-phalanx-proximal"
    | "middle-finger-phalanx-intermediate"
    | "middle-finger-phalanx-distal"
    | "middle-finger-tip"
    | "ring-finger-metacarpal"
    | "ring-finger-phalanx-proximal"
    | "ring-finger-phalanx-intermediate"
    | "ring-finger-phalanx-distal"
    | "ring-finger-tip"
    | "pinky-finger-metacarpal"
    | "pinky-finger-phalanx-proximal"
    | "pinky-finger-phalanx-intermediate"
    | "pinky-finger-phalanx-distal"
    | "pinky-finger-tip";

/**
 * The XRJointSpace interface is an {@link XRSpace} and represents the position and
 * orientation of an {@link XRHand} joint.
 *
 * @see https://immersive-web.github.io/webxr-hand-input/#xrjointspace-interface
 */
interface XRJointSpace extends XRSpace {
    readonly jointName: XRHandJoint;
}

declare abstract class XRJointSpace implements XRJointSpace {}

interface XRJointPose extends XRPose {
    readonly radius: number | undefined;
}

declare abstract class XRJointPose implements XRJointPose {}

/**
 * The XRHand interface is pair iterator (an ordered map) with the key being the hand
 * joints ({@link XRHandJoint}) and the value being an {@link XRJointSpace}.
 *
 * @see https://immersive-web.github.io/webxr-hand-input/#xrhand-interface
 */
interface XRHand extends Map<XRHandJoint, XRJointSpace> {
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

declare abstract class XRHand implements XRHand {}

interface XRFrame {
    getJointPose?: (joint: XRJointSpace, baseSpace: XRSpace) => XRJointPose | undefined;
}

// WebXR Layers

/**
 * The base class for XRWebGLLayer and other layer types introduced by future extensions.
 * ref: https://immersive-web.github.io/webxr/#xrlayer-interface
 */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface XRLayer extends EventTarget {}

declare abstract class XRLayer implements XRLayer {}

interface XRWebGLLayerInit {
    antialias?: boolean | undefined;
    depth?: boolean | undefined;
    stencil?: boolean | undefined;
    alpha?: boolean | undefined;
    ignoreDepthValues?: boolean | undefined;
    framebufferScaleFactor?: number | undefined;
}

/**
 * A layer which provides a WebGL framebuffer to render into, enabling hardware accelerated
 * rendering of 3D graphics to be presented on the XR device. *
 * ref: https://immersive-web.github.io/webxr/#xrwebgllayer-interface
 */
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
    redraw: XRLayerEvent;
}

interface XRCompositionLayer extends XRLayer {
    readonly layout: XRLayerLayout;
    blendTextureSourceAlpha: boolean;
    chromaticAberrationCorrection?: boolean | undefined;
    readonly mipLevels: number;
    quality: XRLayerQuality;
    readonly needsRedraw: boolean;
    destroy(): void;

    space: XRSpace;

    // Events
    onredraw: (evt: XRCompositionLayerEventMap["redraw"]) => any;

    addEventListener<K extends keyof XRCompositionLayerEventMap>(
        this: XRCompositionLayer,
        type: K,
        callback: (evt: XRCompositionLayerEventMap[K]) => any,
        options?: boolean | AddEventListenerOptions,
    ): void;
    addEventListener(
        type: string,
        listener: EventListenerOrEventListenerObject,
        options?: boolean | AddEventListenerOptions,
    ): void;

    removeEventListener<K extends keyof XRCompositionLayerEventMap>(
        this: XRCompositionLayer,
        type: K,
        callback: (evt: XRCompositionLayerEventMap[K]) => any,
    ): void;
    removeEventListener(
        type: string,
        listener: EventListenerOrEventListenerObject,
        options?: boolean | EventListenerOptions,
    ): void;
}

declare abstract class XRCompositionLayer implements XRCompositionLayer {}

type XRTextureType = "texture" | "texture-array";

type XRLayerLayout = "default" | "mono" | "stereo" | "stereo-left-right" | "stereo-top-bottom";

type XRLayerQuality = "default" | "text-optimized" | "graphics-optimized";

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
    readonly ignoreDepthValues: boolean;
    fixedFoveation: number;
}

declare abstract class XRProjectionLayer implements XRProjectionLayer {}

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

declare abstract class XRCylinderLayer implements XRCylinderLayer {}

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

declare abstract class XRQuadLayer implements XRQuadLayer {}

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

declare abstract class XREquirectLayer implements XREquirectLayer {}

interface XRCubeLayerInit extends XRLayerInit {
    orientation?: DOMPointReadOnly | undefined;
}

interface XRCubeLayer extends XRCompositionLayer {
    orientation: DOMPointReadOnly;
}

declare abstract class XRCubeLayer implements XRCubeLayer {}

interface XRSubImage {
    readonly viewport: XRViewport;
}

declare abstract class XRSubImage implements XRSubImage {}

interface XRWebGLSubImage extends XRSubImage {
    readonly colorTexture: WebGLTexture;
    readonly depthStencilTexture: WebGLTexture;
    readonly imageIndex: number;
    readonly textureWidth: number;
    readonly textureHeight: number;
}

declare abstract class XRWebGLSubImage implements XRWebGLSubImage {}

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
    FRAMEBUFFER_INCOMPLETE_VIEW_TARGETS_OVR = 0x9633,
}

declare abstract class OVR_multiview2 implements OVR_multiview2 {}

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
    sessiongranted: XRSystemSessionGrantedEvent;
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
        numViews: GLsizei,
    ): void;
}

declare abstract class OCULUS_multiview implements OCULUS_multiview {}

/**
 * BEGIN: WebXR DOM Overlays Module
 * https://immersive-web.github.io/dom-overlays/
 */

interface GlobalEventHandlersEventMap {
    beforexrselect: XRSessionEvent;
}

interface GlobalEventHandlers {
    /**
     * An XRSessionEvent of type beforexrselect is dispatched on the DOM overlay
     * element before generating a WebXR selectstart input event if the -Z axis
     * of the input source's targetRaySpace intersects the DOM overlay element
     * at the time the input device's primary action is triggered.
     */
    onbeforexrselect: ((this: GlobalEventHandlers, ev: XRSessionEvent) => any) | null;
}

interface XRDOMOverlayInit {
    root: Element;
}

interface XRSessionInit {
    domOverlay?: XRDOMOverlayInit | undefined;
}

type XRDOMOverlayType = "screen" | "floating" | "head-locked";

interface XRDOMOverlayState {
    type: XRDOMOverlayType;
}

interface XRSession {
    readonly domOverlayState?: XRDOMOverlayState | undefined;
}

/**
 * END: WebXR DOM Overlays Module
 * https://immersive-web.github.io/dom-overlays/
 */

/**
 * BEGIN: WebXR Depth Sensing Module
 * https://www.w3.org/TR/webxr-depth-sensing-1/
 */

type XRDepthUsage = "cpu-optimized" | "gpu-optimized";

type XRDepthDataFormat = "luminance-alpha" | "float32" | "unsigned-short";

type XRDepthType = "raw" | "smooth";

interface XRDepthStateInit {
    usagePreference: XRDepthUsage[];
    dataFormatPreference: XRDepthDataFormat[];
    depthTypeRequest?: XRDepthType[] | undefined;
    matchDepthView?: boolean | undefined;
}

interface XRSessionInit {
    depthSensing?: XRDepthStateInit | undefined;
}

interface XRSession {
    readonly depthUsage?: XRDepthUsage | undefined;
    readonly depthDataFormat?: XRDepthDataFormat | undefined;
    readonly depthType?: XRDepthType | undefined;
    readonly depthActive?: boolean | undefined;

    readonly pauseDepthSensing?: (() => void) | undefined;
    readonly resumeDepthSensing?: (() => void) | undefined;
}

interface XRDepthInformation {
    readonly width: number;
    readonly height: number;

    readonly normDepthBufferFromNormView: XRRigidTransform;
    readonly rawValueToMeters: number;

    readonly transform?: XRRigidTransform | undefined;
    readonly projectionMatrix?: Float32Array | undefined;
}

interface XRCPUDepthInformation extends XRDepthInformation {
    readonly data: ArrayBuffer;

    getDepthInMeters(x: number, y: number): number;
}

interface XRFrame {
    getDepthInformation(view: XRView): XRCPUDepthInformation | null | undefined;
}

interface XRWebGLDepthInformation extends XRDepthInformation {
    readonly texture: WebGLTexture;

    readonly textureType: XRTextureType;
    readonly imageIndex?: number | null | undefined;
}

interface XRWebGLBinding {
    getDepthInformation(view: XRView): XRWebGLDepthInformation | null | undefined;
}

type XRInteractionMode = "screen-space" | "world-space";
/**
 * END: WebXR Depth Sensing Module
 * https://www.w3.org/TR/webxr-depth-sensing-1/
 */
