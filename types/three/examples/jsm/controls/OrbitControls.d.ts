import { Camera, Controls, MOUSE, TOUCH, Vector3 } from "three";

export interface OrbitControlsEventMap {
    /**
     * Fires when the camera has been transformed by the controls.
     */
    change: {};

    /**
     * Fires when an interaction was initiated.
     */
    start: {};

    /**
     * Fires when an interaction has finished.
     */
    end: {};
}

/**
 * Orbit controls allow the camera to orbit around a target.
 */
declare class OrbitControls extends Controls<OrbitControlsEventMap> {
    /**
     * The focus point of the controls, the {@link .object} orbits around this. It can be updated manually at any point
     * to change the focus of the controls.
     */
    target: Vector3;

    /**
     * The focus point of the {@link .minTargetRadius} and {@link .maxTargetRadius} limits. It can be updated manually
     * at any point to change the center of interest for the {@link .target}.
     */
    cursor: Vector3;

    /**
     * How far you can dolly in ( {@link PerspectiveCamera} only ). Default is 0.
     */
    minDistance: number;

    /**
     * How far you can dolly out ( {@link PerspectiveCamera} only ). Default is Infinity.
     */
    maxDistance: number;

    /**
     * How far you can zoom in ( {@link OrthographicCamera} only ). Default is 0.
     */
    minZoom: number;

    /**
     * How far you can zoom out ( {@link OrthographicCamera} only ). Default is Infinity.
     */
    maxZoom: number;

    /**
     * How close you can get the target to the 3D {@link .cursor}. Default is 0.
     */
    minTargetRadius: number;

    /**
     * How far you can move the target from the 3D {@link .cursor}. Default is Infinity.
     */
    maxTargetRadius: number;

    /**
     * How far you can orbit vertically, lower limit. Range is 0 to Math.PI radians, and default is 0.
     */
    minPolarAngle: number;

    /**
     * How far you can orbit vertically, upper limit. Range is 0 to Math.PI radians, and default is Math.PI.
     */
    maxPolarAngle: number;

    /**
     * How far you can orbit horizontally, lower limit. If set, the interval [ min, max ] must be a sub-interval of
     * [ - 2 PI, 2 PI ], with ( max - min < 2 PI ). Default is Infinity.
     */
    minAzimuthAngle: number;

    /**
     * How far you can orbit horizontally, upper limit. If set, the interval [ min, max ] must be a sub-interval of
     * [ - 2 PI, 2 PI ], with ( max - min < 2 PI ). Default is Infinity.
     */
    maxAzimuthAngle: number;

    /**
     * Set to true to enable damping (inertia), which can be used to give a sense of weight to the controls. Default is
     * false.
     * Note that if this is enabled, you must call {@link .update}() in your animation loop.
     */
    enableDamping: boolean;

    /**
     * The damping inertia used if .enableDamping is set to true. Default is `0.05`.
     * Note that for this to work, you must call {@link .update}() in your animation loop.
     */
    dampingFactor: number;

    /**
     * Enable or disable zooming (dollying) of the camera.
     */
    enableZoom: boolean;

    /**
     * Speed of zooming / dollying. Default is 1.
     */
    zoomSpeed: number;

    /**
     * Enable or disable horizontal and vertical rotation of the camera. Default is true.
     * Note that it is possible to disable a single axis by setting the min and max of the
     * [polar angle]{@link .minPolarAngle} or [azimuth angle]{@link .minAzimuthAngle} to the same value, which will
     * cause the vertical or horizontal rotation to be fixed at that value.
     */
    enableRotate: boolean;

    /**
     * Speed of rotation. Default is 1.
     */
    rotateSpeed: number;

    /**
     * How fast to rotate the camera when the keyboard is used. Default is 1.
     */
    keyRotateSpeed: number;

    /**
     * Enable or disable camera panning. Default is true.
     */
    enablePan: boolean;

    /**
     * Speed of panning. Default is 1.
     */
    panSpeed: number;

    /**
     * Defines how the camera's position is translated when panning. If true, the camera pans in screen space.
     * Otherwise, the camera pans in the plane orthogonal to the camera's up direction. Default is `true`.
     */
    screenSpacePanning: boolean;

    /**
     * How fast to pan the camera when the keyboard is used. Default is 7.0 pixels per keypress.
     */
    keyPanSpeed: number;

    /**
     * Setting this property to `true` allows to zoom to the cursor's position. Default is `false`.
     */
    zoomToCursor: boolean;

    /**
     * Set to true to automatically rotate around the target.
     * Note that if this is enabled, you must call {@link .update}() in your animation loop. If you want the auto-rotate speed
     * to be independent of the frame rate (the refresh rate of the display), you must pass the time `deltaTime`, in
     * seconds, to {@link .update}().
     */
    autoRotate: boolean;

    /**
     * How fast to rotate around the target if {@link .autoRotate} is true. Default is 2.0, which equates to 30 seconds
     * per orbit at 60fps.
     * Note that if {@link .autoRotate} is enabled, you must call {@link .update}() in your animation loop.
     */
    autoRotateSpeed: number;

    /**
     * This object contains references to the keycodes for controlling camera panning. Default is the 4 arrow keys.
     */
    keys: { LEFT: string; UP: string; RIGHT: string; BOTTOM: string };

    /**
     * This object contains references to the mouse actions used by the controls.
     */
    mouseButtons: {
        LEFT?: MOUSE | null | undefined;
        MIDDLE?: MOUSE | null | undefined;
        RIGHT?: MOUSE | null | undefined;
    };

    /**
     * This object contains references to the touch actions used by the controls.
     */
    touches: { ONE?: TOUCH | null | undefined; TWO?: TOUCH | null | undefined };

    /**
     * Used internally by the {@link .saveState} and {@link .reset} methods.
     */
    target0: Vector3;

    /**
     * Used internally by the {@link .saveState} and {@link .reset} methods.
     */
    position0: Vector3;

    /**
     * Used internally by the {@link .saveState} and {@link .reset} methods.
     */
    zoom0: number;

    /**
     * @param object The camera to be controlled. The camera must not be a child of another object, unless that object
     * is the scene itself.
     * @param domElement The HTML element used for event listeners. (optional)
     */
    constructor(object: Camera, domElement?: HTMLElement | null);

    /**
     * Get the current vertical rotation, in radians.
     */
    getPolarAngle(): number;

    /**
     * Get the current horizontal rotation, in radians.
     */
    getAzimuthalAngle(): number;

    /**
     * Returns the distance from the camera to the target.
     */
    getDistance(): number;

    /**
     * Adds key event listeners to the given DOM element. `window` is a recommended argument for using this method.
     * @param domElement
     */
    listenToKeyEvents(domElement: HTMLElement | Window): void;

    /**
     * Removes the key event listener previously defined with {@link .listenToKeyEvents}().
     */
    stopListenToKeyEvents(): void;

    /**
     * Save the current state of the controls. This can later be recovered with {@link .reset}.
     */
    saveState(): void;

    /**
     * Reset the controls to their state from either the last time the {@link .saveState} was called, or the initial
     * state.
     */
    reset(): void;

    /**
     * Update the controls. Must be called after any manual changes to the camera's transform, or in the update loop if
     * {@link .autoRotate} or {@link .enableDamping} are set. `deltaTime`, in seconds, is optional, and is only required
     * if you want the auto-rotate speed to be independent of the frame rate (the refresh rate of the display).
     */
    update(deltaTime?: number | null): boolean;
}

export { OrbitControls };
