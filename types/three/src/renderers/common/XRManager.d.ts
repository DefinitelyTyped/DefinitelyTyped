import { ArrayCamera } from "../../cameras/ArrayCamera.js";
import { PerspectiveCamera } from "../../cameras/PerspectiveCamera.js";
import { EventDispatcher } from "../../core/EventDispatcher.js";
import { RenderTarget } from "../../core/RenderTarget.js";
import { Vector2 } from "../../math/Vector2.js";
import { WebXRController } from "../webxr/WebXRController.js";
import { AnimationContext } from "./Animation.js";
import Renderer from "./Renderer.js";
import { XRRenderTarget } from "./XRRenderTarget.js";
export interface XRManagerEventMap {
    sessionstart: {};
    sessionend: {};
    planesdetected: {
        data: XRFrame;
    };
}
/**
 * The XR manager is built on top of the WebXR Device API to
 * manage XR sessions with `WebGPURenderer`.
 *
 * XR is currently only supported with a WebGL 2 backend.
 *
 * @augments EventDispatcher
 */
declare class XRManager extends EventDispatcher<XRManagerEventMap> {
    enabled: boolean;
    isPresenting: boolean;
    cameraAutoUpdate: boolean;
    _renderer: Renderer;
    _cameraL: PerspectiveCamera;
    _cameraR: PerspectiveCamera;
    _cameras: PerspectiveCamera[];
    _cameraXR: ArrayCamera;
    _currentDepthNear: number | null;
    _currentDepthFar: number | null;
    _controllers: WebXRController[];
    _controllerInputSources: (XRInputSource | null)[];
    _currentRenderTarget: RenderTarget | null;
    _xrRenderTarget: XRRenderTarget | null;
    _currentAnimationContext: AnimationContext | null;
    _currentAnimationLoop: ((time: DOMHighResTimeStamp, frame?: XRFrame) => void) | null;
    _currentPixelRatio: number | null;
    _currentSize: Vector2;
    _onSessionEvent: (event: XRInputSourceEvent) => void;
    _onSessionEnd: () => void;
    _onInputSourcesChange: (event: XRInputSourcesChangeEvent) => void;
    _onAnimationFrame: (time: DOMHighResTimeStamp, frame?: XRFrame) => void;
    _referenceSpace: XRReferenceSpace | null;
    _referenceSpaceType: XRReferenceSpaceType;
    _customReferenceSpace: XRReferenceSpace | null;
    _framebufferScaleFactor: number;
    _foveation: number;
    _session: XRSession | null;
    _glBaseLayer: XRWebGLLayer | null;
    _glBinding: XRWebGLBinding | null;
    _glProjLayer: XRProjectionLayer | null;
    _xrFrame: XRFrame | null;
    _useLayers: boolean;
    /**
     * Constructs a new XR manager.
     *
     * @param {Renderer} renderer - The renderer.
     */
    constructor(renderer: Renderer);
    /**
     * Returns an instance of `THREE.Group` that represents the transformation
     * of a XR controller in target ray space. The requested controller is defined
     * by the given index.
     *
     * @param {Number} index - The index of the XR controller.
     * @return {Group} A group that represents the controller's transformation.
     */
    getController(index: number): import("../webxr/WebXRController.js").XRTargetRaySpace;
    /**
     * Returns an instance of `THREE.Group` that represents the transformation
     * of a XR controller in grip space. The requested controller is defined
     * by the given index.
     *
     * @param {Number} index - The index of the XR controller.
     * @return {Group} A group that represents the controller's transformation.
     */
    getControllerGrip(index: number): import("../webxr/WebXRController.js").XRGripSpace;
    /**
     * Returns an instance of `THREE.Group` that represents the transformation
     * of a XR controller in hand space. The requested controller is defined
     * by the given index.
     *
     * @param {Number} index - The index of the XR controller.
     * @return {Group} A group that represents the controller's transformation.
     */
    getHand(index: number): import("../webxr/WebXRController.js").XRHandSpace;
    /**
     * Returns the foveation value.
     *
     * @return {Number|undefined} The foveation value. Returns `undefined` if no base or projection layer is defined.
     */
    getFoveation(): number | undefined;
    /**
     * Sets the foveation value.
     *
     * @param {Number} foveation - A number in the range `[0,1]` where `0` means no foveation (full resolution)
     * and `1` means maximum foveation (the edges render at lower resolution).
     */
    setFoveation(foveation: number): void;
    /**
     * Returns the framebuffer scale factor.
     *
     * @return {Number} The framebuffer scale factor.
     */
    getFramebufferScaleFactor(): number;
    /**
     * Sets the framebuffer scale factor.
     *
     * This method can not be used during a XR session.
     *
     * @param {Number} factor - The framebuffer scale factor.
     */
    setFramebufferScaleFactor(factor: number): void;
    /**
     * Returns the reference space type.
     *
     * @return {String} The reference space type.
     */
    getReferenceSpaceType(): XRReferenceSpaceType;
    /**
     * Sets the reference space type.
     *
     * This method can not be used during a XR session.
     *
     * @param {String} type - The reference space type.
     */
    setReferenceSpaceType(type: XRReferenceSpaceType): void;
    /**
     * Returns the XR reference space.
     *
     * @return {XRReferenceSpace} The XR reference space.
     */
    getReferenceSpace(): XRReferenceSpace | null;
    /**
     * Sets a custom XR reference space.
     *
     * @param {XRReferenceSpace} space - The XR reference space.
     */
    setReferenceSpace(space: XRReferenceSpace): void;
    /**
     * Returns the XR camera.
     *
     * @return {ArrayCamera} The XR camera.
     */
    getCamera(): ArrayCamera;
    /**
     * Returns the environment blend mode from the current XR session.
     *
     * @return {('opaque'|'additive'|'alpha-blend')?} The environment blend mode. Returns `null` when used outside of a XR session.
     */
    getEnvironmentBlendMode(): XREnvironmentBlendMode | undefined;
    /**
     * Returns the current XR frame.
     *
     * @return {XRFrame?} The XR frame. Returns `null` when used outside a XR session.
     */
    getFrame(): XRFrame | null;
    /**
     * Returns the current XR session.
     *
     * @return {XRSession?} The XR session. Returns `null` when used outside a XR session.
     */
    getSession(): XRSession | null;
    /**
     * After a XR session has been requested usually with one of the `*Button` modules, it
     * is injected into the renderer with this method. This method triggers the start of
     * the actual XR rendering.
     *
     * @async
     * @param {XRSession} session - The XR session to set.
     * @return {Promise} A Promise that resolves when the session has been set.
     */
    setSession(session: XRSession): Promise<void>;
    /**
     * This method is called by the renderer per frame and updates the XR camera
     * and it sub cameras based on the given camera. The given camera is the "user"
     * camera created on application level and used for non-XR rendering.
     *
     * @param {PerspectiveCamera} camera - The camera.
     */
    updateCamera(camera: PerspectiveCamera): void;
    /**
     * Returns a WebXR controller for the given controller index.
     *
     * @private
     * @param {Number} index - The controller index.
     * @return {WebXRController} The XR controller.
     */
    _getController(index: number): WebXRController;
}
export default XRManager;
