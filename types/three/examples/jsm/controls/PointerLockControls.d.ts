import { Camera, Controls, Vector3 } from "three";

export interface PointerLockControlsEventMap {
    /**
     * Fires when the user moves the mouse.
     */
    change: {};

    /**
     * Fires when the pointer lock status is "locked" (in other words: the mouse is captured).
     */
    lock: {};

    /**
     * Fires when the pointer lock status is "unlocked" (in other words: the mouse is not captured anymore).
     */
    unlock: {};
}

/**
 * The implementation of this class is based on the [Pointer Lock API]{@link https://developer.mozilla.org/en-US/docs/Web/API/Pointer_Lock_API}.
 * {@link PointerLockControls} is a perfect choice for first person 3D games.
 */
declare class PointerLockControls extends Controls<PointerLockControlsEventMap> {
    /**
     * Whether or not the controls are locked.
     */
    isLocked: boolean;

    /**
     * Camera pitch, lower limit. Range is 0 to Math.PI radians. Default is 0.
     */
    minPolarAngle: number;

    /**
     * Camera pitch, upper limit. Range is 0 to Math.PI radians. Default is Math.PI.
     */
    maxPolarAngle: number;

    /**
     * Multiplier for how much the pointer movement influences the camera rotation. Default is 1.
     */
    pointerSpeed: number;

    /**
     * Creates a new instance of {@link PointerLockControls}.
     * @param camera The camera of the rendered scene.
     * @param domElement The HTML element used for event listeners.
     */
    constructor(camera: Camera, domElement?: HTMLElement | null);

    /**
     * @deprecated getObject() has been deprecated. Use controls.object instead.
     */
    getObject(): Camera;

    /**
     * Returns the look direction of the camera.
     * @param v The target vector.
     */
    getDirection(v: Vector3): Vector3;

    /**
     * Moves the camera forward parallel to the xz-plane. Assumes camera.up is y-up.
     * @param distance The signed distance.
     */
    moveForward(distance: number): void;

    /**
     * Moves the camera sidewards parallel to the xz-plane.
     * @param distance The signed distance.
     */
    moveRight(distance: number): void;

    /**
     * Activates the pointer lock.
     */
    lock(): void;

    /**
     * Exits the pointer lock.
     */
    unlock(): void;
}

export { PointerLockControls };
