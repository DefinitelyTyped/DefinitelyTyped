import { ArrayCamera } from "../../cameras/ArrayCamera.js";
import { PerspectiveCamera } from "../../cameras/PerspectiveCamera.js";
import { EventDispatcher } from "../../core/EventDispatcher.js";
import { RenderTarget } from "../../core/RenderTarget.js";
import { CylinderGeometry } from "../../geometries/CylinderGeometry.js";
import { PlaneGeometry } from "../../geometries/PlaneGeometry.js";
import { MeshBasicMaterial } from "../../materials/MeshBasicMaterial.js";
import { Quaternion } from "../../math/Quaternion.js";
import { Vector3 } from "../../math/Vector3.js";
import { Mesh } from "../../objects/Mesh.js";
import { XRGripSpace, XRHandSpace, XRTargetRaySpace } from "../webxr/WebXRController.js";
import QuadMesh from "./QuadMesh.js";
import Renderer from "./Renderer.js";
import { XRRenderTarget } from "./XRRenderTarget.js";

export interface XRManagerEventMap {
    sessionstart: {};
    sessionend: {};
    planesdetected: {
        data: XRFrame;
    };
}

export interface LayerAttributes {
    stencil?: boolean | undefined;
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
    /**
     * Constructs a new XR manager.
     *
     * @param {Renderer} renderer - The renderer.
     * @param {boolean} [multiview=false] - Enables multiview if the device supports it.
     */
    constructor(renderer: Renderer, multiview?: boolean);
    /**
     * This flag globally enables XR rendering.
     *
     * @type {boolean}
     * @default false
     */
    enabled: boolean;
    /**
     * Whether the XR device is currently presenting or not.
     *
     * @type {boolean}
     * @default false
     * @readonly
     */
    readonly isPresenting: boolean;
    /**
     * Whether the XR camera should automatically be updated or not.
     *
     * @type {boolean}
     * @default true
     */
    cameraAutoUpdate: boolean;
    /**
     * The renderer.
     *
     * @private
     * @type {Renderer}
     */
    private _renderer;
    /**
     * Represents the camera for the left eye.
     *
     * @private
     * @type {PerspectiveCamera}
     */
    private _cameraL;
    /**
     * Represents the camera for the right eye.
     *
     * @private
     * @type {PerspectiveCamera}
     */
    private _cameraR;
    /**
     * A list of cameras used for rendering the XR views.
     *
     * @private
     * @type {Array<Camera>}
     */
    private _cameras;
    /**
     * The main XR camera.
     *
     * @private
     * @type {ArrayCamera}
     */
    private _cameraXR;
    /**
     * The current near value of the XR camera.
     *
     * @private
     * @type {?number}
     * @default null
     */
    private _currentDepthNear;
    /**
     * The current far value of the XR camera.
     *
     * @private
     * @type {?number}
     * @default null
     */
    private _currentDepthFar;
    /**
     * A list of WebXR controllers requested by the application.
     *
     * @private
     * @type {Array<WebXRController>}
     */
    private _controllers;
    /**
     * A list of XR input source. Each input source belongs to
     * an instance of WebXRController.
     *
     * @private
     * @type {Array<XRInputSource?>}
     */
    private _controllerInputSources;
    /**
     * The XR render target that represents the rendering destination
     * during an active XR session.
     *
     * @private
     * @type {?RenderTarget}
     * @default null
     */
    private _xrRenderTarget;
    /**
     * An array holding all the non-projection layers
     *
     * @private
     * @type {Array<Object>}
     * @default []
     */
    private _layers;
    /**
     * Whether the XR session uses layers.
     *
     * @private
     * @type {boolean}
     * @default false
     */
    private _sessionUsesLayers;
    /**
     * Whether the device supports binding gl objects.
     *
     * @private
     * @type {boolean}
     * @readonly
     */
    private readonly _supportsGlBinding;
    _frameBufferTargets:
        | WeakMap<XRRenderTarget, {
            frameBufferTarget: RenderTarget | null;
            quad: QuadMesh;
        }>
        | null;
    /**
     * Helper function to create native WebXR Layer.
     *
     * @private
     * @type {Function}
     */
    private _createXRLayer;
    /**
     * The current WebGL context.
     *
     * @private
     * @type {?WebGL2RenderingContext}
     * @default null
     */
    private _gl;
    /**
     * The current animation context.
     *
     * @private
     * @type {?Window}
     * @default null
     */
    private _currentAnimationContext;
    /**
     * The current animation loop.
     *
     * @private
     * @type {?Function}
     * @default null
     */
    private _currentAnimationLoop;
    /**
     * The current pixel ratio.
     *
     * @private
     * @type {?number}
     * @default null
     */
    private _currentPixelRatio;
    /**
     * The current size of the renderer's canvas
     * in logical pixel unit.
     *
     * @private
     * @type {Vector2}
     */
    private _currentSize;
    /**
     * The default event listener for handling events inside a XR session.
     *
     * @private
     * @type {Function}
     */
    private _onSessionEvent;
    /**
     * The event listener for handling the end of a XR session.
     *
     * @private
     * @type {Function}
     */
    private _onSessionEnd;
    /**
     * The event listener for handling the `inputsourceschange` event.
     *
     * @private
     * @type {Function}
     */
    private _onInputSourcesChange;
    /**
     * The animation loop which is used as a replacement for the default
     * animation loop of the application. It is only used when a XR session
     * is active.
     *
     * @private
     * @type {Function}
     */
    private _onAnimationFrame;
    /**
     * The current XR reference space.
     *
     * @private
     * @type {?XRReferenceSpace}
     * @default null
     */
    private _referenceSpace;
    /**
     * The current XR reference space type.
     *
     * @private
     * @type {XRReferenceSpaceType}
     * @default 'local-floor'
     */
    private _referenceSpaceType;
    /**
     * A custom reference space defined by the application.
     *
     * @private
     * @type {?XRReferenceSpace}
     * @default null
     */
    private _customReferenceSpace;
    /**
     * The framebuffer scale factor.
     *
     * @private
     * @type {number}
     * @default 1
     */
    private _framebufferScaleFactor;
    /**
     * The foveation factor.
     *
     * @private
     * @type {number}
     * @default 1
     */
    private _foveation;
    /**
     * A reference to the current XR session.
     *
     * @private
     * @type {?XRSession}
     * @default null
     */
    private _session;
    /**
     * A reference to the current XR base layer.
     *
     * @private
     * @type {?XRWebGLLayer}
     * @default null
     */
    private _glBaseLayer;
    /**
     * A reference to the current XR binding.
     *
     * @private
     * @type {?XRWebGLBinding}
     * @default null
     */
    private _glBinding;
    /**
     * A reference to the current XR projection layer.
     *
     * @private
     * @type {?XRProjectionLayer}
     * @default null
     */
    private _glProjLayer;
    /**
     * A reference to the current XR frame.
     *
     * @private
     * @type {?XRFrame}
     * @default null
     */
    private _xrFrame;
    /**
     * Whether the browser supports the APIs necessary to use XRProjectionLayers.
     *
     * Note: this does not represent XRSession explicitly requesting
     * `'layers'` as a feature - see `_sessionUsesLayers` and #30112
     *
     * @private
     * @type {boolean}
     * @readonly
     */
    private readonly _supportsLayers;
    /**
     * Whether the usage of multiview has been requested by the application or not.
     *
     * @private
     * @type {boolean}
     * @default false
     * @readonly
     */
    private readonly _useMultiviewIfPossible;
    /**
     * Whether the usage of multiview is actually enabled. This flag only evaluates to `true`
     * if multiview has been requested by the application and the `OVR_multiview2` is available.
     *
     * @private
     * @type {boolean}
     * @readonly
     */
    private readonly _useMultiview;
    /**
     * Returns an instance of `THREE.Group` that represents the transformation
     * of a XR controller in target ray space. The requested controller is defined
     * by the given index.
     *
     * @param {number} index - The index of the XR controller.
     * @return {Group} A group that represents the controller's transformation.
     */
    getController(index: number): XRTargetRaySpace;
    /**
     * Returns an instance of `THREE.Group` that represents the transformation
     * of a XR controller in grip space. The requested controller is defined
     * by the given index.
     *
     * @param {number} index - The index of the XR controller.
     * @return {Group} A group that represents the controller's transformation.
     */
    getControllerGrip(index: number): XRGripSpace;
    /**
     * Returns an instance of `THREE.Group` that represents the transformation
     * of a XR controller in hand space. The requested controller is defined
     * by the given index.
     *
     * @param {number} index - The index of the XR controller.
     * @return {Group} A group that represents the controller's transformation.
     */
    getHand(index: number): XRHandSpace;
    /**
     * Returns the foveation value.
     *
     * @return {number|undefined} The foveation value. Returns `undefined` if no base or projection layer is defined.
     */
    getFoveation(): number | undefined;
    /**
     * Sets the foveation value.
     *
     * @param {number} foveation - A number in the range `[0,1]` where `0` means no foveation (full resolution)
     * and `1` means maximum foveation (the edges render at lower resolution).
     */
    setFoveation(foveation: number): void;
    /**
     * Returns the framebuffer scale factor.
     *
     * @return {number} The framebuffer scale factor.
     */
    getFramebufferScaleFactor(): number;
    /**
     * Sets the framebuffer scale factor.
     *
     * This method can not be used during a XR session.
     *
     * @param {number} factor - The framebuffer scale factor.
     */
    setFramebufferScaleFactor(factor: number): void;
    /**
     * Returns the reference space type.
     *
     * @return {XRReferenceSpaceType} The reference space type.
     */
    getReferenceSpaceType(): XRReferenceSpaceType;
    /**
     * Sets the reference space type.
     *
     * This method can not be used during a XR session.
     *
     * @param {XRReferenceSpaceType} type - The reference space type.
     */
    setReferenceSpaceType(type: XRReferenceSpaceType): void;
    /**
     * Returns the XR reference space.
     *
     * @return {XRReferenceSpace} The XR reference space.
     */
    getReferenceSpace(): XRReferenceSpace;
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
     * @return {'opaque'|'additive'|'alpha-blend'|undefined} The environment blend mode. Returns `undefined` when used outside of a XR session.
     */
    getEnvironmentBlendMode(): XREnvironmentBlendMode | undefined;
    /**
     * Returns the current XR binding.
     *
     * Creates a new binding if needed and the browser is
     * capable of doing so.
     *
     * @return {?XRWebGLBinding} The XR binding. Returns `null` if one cannot be created.
     */
    getBinding(): XRWebGLBinding | null;
    /**
     * Returns the current XR frame.
     *
     * @return {?XRFrame} The XR frame. Returns `null` when used outside a XR session.
     */
    getFrame(): XRFrame | null;
    /**
     * Returns `true` if the engine renders to a multiview target.
     *
     * @return {boolean} Whether the engine renders to a multiview render target or not.
     */
    useMultiview(): boolean;
    /**
     * This method can be used in XR applications to create a quadratic layer that presents a separate
     * rendered scene.
     *
     * @param {number} width - The width of the layer plane in world units.
     * @param {number} height - The height of the layer plane in world units.
     * @param {Vector3} translation - The position/translation of the layer plane in world units.
     * @param {Quaternion} quaternion - The orientation of the layer plane expressed as a quaternion.
     * @param {number} pixelwidth - The width of the layer's render target in pixels.
     * @param {number} pixelheight - The height of the layer's render target in pixels.
     * @param {Function} rendercall - A callback function that renders the layer. Similar to code in
     * the default animation loop, this method can be used to update/transform 3D object in the layer's scene.
     * @param {Object} [attributes={}] - Allows to configure the layer's render target.
     * @return {Mesh} A mesh representing the quadratic XR layer. This mesh should be added to the XR scene.
     */
    createQuadLayer(
        width: number,
        height: number,
        translation: Vector3,
        quaternion: Quaternion,
        pixelwidth: number,
        pixelheight: number,
        rendercall: () => void,
        attributes?: LayerAttributes,
    ): Mesh<PlaneGeometry, MeshBasicMaterial>;
    /**
     * This method can be used in XR applications to create a cylindrical layer that presents a separate
     * rendered scene.
     *
     * @param {number} radius - The radius of the cylinder in world units.
     * @param {number} centralAngle - The central angle of the cylinder in radians.
     * @param {number} aspectratio - The aspect ratio.
     * @param {Vector3} translation - The position/translation of the layer plane in world units.
     * @param {Quaternion} quaternion - The orientation of the layer plane expressed as a quaternion.
     * @param {number} pixelwidth - The width of the layer's render target in pixels.
     * @param {number} pixelheight - The height of the layer's render target in pixels.
     * @param {Function} rendercall - A callback function that renders the layer. Similar to code in
     * the default animation loop, this method can be used to update/transform 3D object in the layer's scene.
     * @param {Object} [attributes={}] - Allows to configure the layer's render target.
     * @return {Mesh} A mesh representing the cylindrical XR layer. This mesh should be added to the XR scene.
     */
    createCylinderLayer(
        radius: number,
        centralAngle: number,
        aspectratio: number,
        translation: Vector3,
        quaternion: Quaternion,
        pixelwidth: number,
        pixelheight: number,
        rendercall: () => void,
        attributes?: LayerAttributes,
    ): Mesh<CylinderGeometry, MeshBasicMaterial>;
    /**
     * Renders the XR layers that have been previously added to the scene.
     *
     * This method is usually called in your animation loop before rendering
     * the actual scene via `renderer.render( scene, camera );`.
     */
    renderLayers(): void;
    /**
     * Returns the current XR session.
     *
     * @return {?XRSession} The XR session. Returns `null` when used outside a XR session.
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
     * @param {number} index - The controller index.
     * @return {WebXRController} The XR controller.
     */
    private _getController;
}

export default XRManager;
