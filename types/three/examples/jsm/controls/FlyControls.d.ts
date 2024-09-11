import { Camera, Controls } from "three";

export interface FlyControlsEventMap {
    /**
     * Fires when the camera has been transformed by the controls.
     */
    change: {};
}

/**
 * {@link FlyControls} enables a navigation similar to fly modes in DCC tools like Blender. You can arbitrarily
 * transform the camera in 3D space without any limitations (e.g. focus on a specific target).
 */
declare class FlyControls extends Controls<FlyControlsEventMap> {
    /**
     * The movement speed. Default is `1`.
     */
    movementSpeed: number;

    /**
     * The rotation speed. Default is `0.005`.
     */
    rollSpeed: number;

    /**
     * If set to `true`, you can only look around by performing a drag interaction. Default is `false`.
     */
    dragToLook: boolean;

    /**
     * If set to `true`, the camera automatically moves forward (and does not stop) when initially translated. Default
     * is `false`.
     */
    autoForward: boolean;

    /**
     * Creates a new instance of {@link FlyControls}.
     * @param object The camera to be controlled.
     * @param domElement The HTML element used for event listeners. (optional)
     */
    constructor(object: Camera, domElement?: HTMLElement | null);
}

export { FlyControls };
