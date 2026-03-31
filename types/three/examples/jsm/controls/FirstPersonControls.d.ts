import { Camera, Controls, Vector3 } from "three";

/**
 * This class is an alternative implementation of {@link FlyControls}.
 */
declare class FirstPersonControls extends Controls<{}> {
    /**
     * The movement speed. Default is *1*.
     */
    movementSpeed: number;

    /**
     * The look around speed. Default is `0.005`.
     */
    lookSpeed: number;

    /**
     * Whether or not it's possible to vertically look around. Default is `true`.
     */
    lookVertical: boolean;

    /**
     * Whether or not the camera is automatically moved forward. Default is `false`.
     */
    autoForward: boolean;

    /**
     * Whether or not it's possible to look around. Default is `true`.
     */
    activeLook: boolean;

    /**
     * Whether or not the camera's height influences the forward movement speed. Default is `false`.
     * Use the properties {@link .heightCoef}, {@link .heightMin} and {@link .heightMax} for configuration
     */
    heightSpeed: boolean;

    /**
     * Determines how much faster the camera moves when it's y-component is near {@link .heightMax}. Default is *1*.
     */
    heightCoef: number;

    /**
     * Lower camera height limit used for movement speed adjustment. Default is *0*.
     */
    heightMin: number;

    /**
     * Upper camera height limit used for movement speed adjustment. Default is *1*.
     */
    heightMax: number;

    /**
     * Whether or not looking around is vertically constrained by [{@link .verticalMin}, {@link .verticalMax}]. Default
     * is `false`.
     */
    constrainVertical: boolean;

    /**
     * How far you can vertically look around, lower limit. Range is 0 to Math.PI radians. Default is *0*.
     */
    verticalMin: number;

    /**
     * How far you can vertically look around, upper limit. Range is 0 to Math.PI radians. Default is `Math.PI`.
     */
    verticalMax: number;

    /**
     * Whether or not the mouse is pressed down. Read-only property.
     */
    mouseDragOn: boolean;

    /**
     * Creates a new instance of {@link FirstPersonControls}.
     * @param object The camera to be controlled.
     * @param domElement The HTML element used for event listeners. (optional)
     */
    constructor(object: Camera, domElement?: HTMLElement | SVGElement);

    /**
     * Should be called if the application window is resized.
     */
    handleResize(): void;

    /**
     * Ensures the controls orient the camera towards the defined target position.
     * @param vector A vector representing the target position.
     */
    lookAt(vector: Vector3): this;

    /**
     * Ensures the controls orient the camera towards the defined target position.
     * @param x The x component of the world space position.
     * @param y The y component of the world space position.
     * @param z The z component of the world space position.
     */
    lookAt(x: number, y: number, z: number): this;
}

export { FirstPersonControls };
