import { Camera, Controls, Raycaster, Scene } from "three";

export type ArcballControlsMouseActionOperation = "PAN" | "ROTATE" | "ZOOM" | "FOV";

export type ArcballControlsMouseActionMouse = 0 | 1 | 2 | "WHEEL";

export type ArcballControlsMouseActionKey = "SHIFT" | "CTRL";

export interface ArcballControlsEventMap {
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
 * Arcball controls allow the camera to be controlled by a virtual trackball with full touch support and advanced
 * navigation functionality.
 */
declare class ArcballControls extends Controls<ArcballControlsEventMap> {
    /**
     * The scene rendered by the camera.
     */
    scene: Scene | null;

    /**
     * The size of the gizmo relative to the screen width and height. Default is 0.67.
     */
    radiusFactor: number;

    /**
     * Duration time of focus animation.
     */
    focusAnimationTime: number;

    /**
     * If true, camera's near and far values will be adjusted every time zoom is performed trying to maintain the same
     * visible portion given by initial near and far values ( {@link PerspectiveCamera} only ). Default is false.
     */
    adjustNearFar: boolean;

    /**
     * The scaling factor used when performing zoom operation.
     */
    scaleFactor: number;

    /**
     * The damping inertia used if [page:.enableAnimations] is set to true.
     */
    dampingFactor: number;

    /**
     * Maximum angular velocity allowed on rotation animation start.
     */
    wMax: number;

    /**
     * Set to true to enable animations for rotation (damping) and focus operation. Default is true.
     */
    enableAnimations: boolean;

    /**
     * When set to true, a grid will appear when panning operation is being performed (desktop interaction only). Default is false.
     */
    enableGrid: boolean;

    /**
     * Set to true to make zoom become cursor centered.
     */
    cursorZoom: boolean;

    /**
     * Speed of rotation. Default is 1.
     */
    rotateSpeed: number;

    /**
     * Enable or disable camera panning. Default is true.
     */
    enablePan: boolean;

    /**
     * Enable or disable camera rotation. Default is true.
     */
    enableRotate: boolean;

    /**
     * Enable or disable zooming of the camera.
     */
    enableZoom: boolean;

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
     * @param camera The camera to be controlled. The camera must not be a child of another object, unless that object
     * is the scene itself.
     * @param domElement The HTML element used for event listeners. (optional)
     * @param scene The scene rendered by the camera. If not given, gizmos cannot be shown. (optional)
     */
    constructor(camera: Camera, domElement?: HTMLElement | null, scene?: Scene | null);

    /**
     * Set a new mouse action by specifying the operation to be performed and a mouse/key combination. In case of
     * conflict, replaces the existing one.
     * @param operation Operations can be specified as 'ROTATE', 'PAN', 'FOV' or 'ZOOM'.
     * @param mouse Mouse inputs can be specified as mouse buttons 0, 1 and 2 or 'WHEEL' for wheel notches.
     * @param key Keyboard modifiers can be specified as 'CTRL', 'SHIFT' or null if not needed.
     */
    setMouseAction(
        operation: ArcballControlsMouseActionOperation,
        mouse: ArcballControlsMouseActionMouse,
        key?: ArcballControlsMouseActionKey | null,
    ): boolean;

    /**
     * Removes a mouse action by specifying its mouse/key combination.
     * @param mouse Mouse inputs can be specified as mouse buttons 0, 1 and 2 or 'WHEEL' for wheel notches.
     * @param key Keyboard modifiers can be specified as 'CTRL', 'SHIFT' or null if not needed.
     */
    unsetMouseAction(mouse: ArcballControlsMouseActionMouse, key?: ArcballControlsMouseActionKey | null): boolean;

    /**
     * Make gizmos more or less visible.
     */
    activateGizmos(isActive: boolean): void;

    /**
     * Set the camera to be controlled. Must be called in order to set a new camera to be controlled.
     */
    setCamera(camera: Camera): void;

    /**
     * Set the visible property of gizmos.
     */
    setGizmosVisible(value: boolean): void;

    /**
     * Update the `radiusFactor` value, redraw the gizmo and send a `changeEvent` to visualise the changes.
     */
    setTbRadius(value: number): void;

    /**
     * Reset the controls to their state from either the last time the {@link .saveState} was called, or the initial
     * state.
     */
    reset(): void;

    /**
     * Copy the current state to clipboard (as a readable JSON text).
     */
    copyState(): void;

    /**
     * Set the controls state from the clipboard, assumes that the clipboard stores a JSON text as saved from
     * {@link .copyState}.
     */
    pasteState(): void;

    /**
     * Save the current state of the controls. This can later be recovered with {@link .reset}.
     */
    saveState(): void;

    /**
     * Returns the {@link Raycaster} object that is used for user interaction. This object is shared between all
     * instances of ArcballControls. If you set the [.layers]{@link Object3D.layers} property of the
     * {@link ArcballControls}, you will also want to set the [.layers]{@link Raycaster.layers} property on the
     * {@link Raycaster} with a matching value, or else the {@link ArcballControls} won't work as expected.
     */
    getRaycaster(): Raycaster;

    update(): void;
}

export { ArcballControls };
