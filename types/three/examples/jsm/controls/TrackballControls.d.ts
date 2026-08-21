import { Camera, Controls, MOUSE, Vector3 } from "three";

export interface TrackballControlsEventMap {
    /**
     * Fires when the camera has been transformed by the controls.
     */
    change: {};

    /**
     * Fires when an interaction (e.g. touch) was initiated.
     */
    start: {};

    /**
     * Fires when an interaction has finished.
     */
    end: {};
}

/**
 * TrackballControls is similar to {@link OrbitControls}. However, it does not maintain a constant camera
 * [up]{@link Object3D.up} vector. That means if the camera orbits over the “north” and “south” poles, it does not flip
 * to stay "right side up".
 */
declare class TrackballControls extends Controls<TrackballControlsEventMap> {
    /**
     * Represents the properties of the screen. Automatically set when {@link .handleResize}() is called.
     *  - left: Represents the offset in pixels to the screen's left boundary.
     *  - top: Represents the offset in pixels to the screen's top boundary.
     *  - width: Represents the screen width in pixels.
     *  - height: Represents the screen height in pixels.
     */
    screen: { left: number; top: number; width: number; height: number };

    /**
     * The rotation speed. Default is `1.0`.
     */
    rotateSpeed: number;

    /**
     * The zoom speed. Default is `1.2`.
     */
    zoomSpeed: number;

    /**
     * The pan speed. Default is `0.3`.
     */
    panSpeed: number;

    /**
     * Whether or not rotation is disabled. Default is `false`.
     */
    noRotate: boolean;

    /**
     * Whether or not zooming is disabled. Default is `false`.
     */
    noZoom: boolean;

    /**
     * Whether or not panning is disabled. Default is `false`.
     */
    noPan: boolean;

    /**
     * Whether or not damping is disabled. Default is `false`.
     */
    staticMoving: boolean;

    /**
     * Defines the intensity of damping. Only considered if {@link .staticMoving} is set to `false`. Default is `0.2`.
     */
    dynamicDampingFactor: number;

    /**
     * How far you can dolly in ( {@link PerspectiveCamera} only ). Default is *0*.
     */
    minDistance: number;

    /**
     * How far you can dolly out ( {@link PerspectiveCamera} only ). Default is `Infinity`.
     */
    maxDistance: number;

    /**
     * How far you can zoom out ( {@link OrthographicCamera} only ). Default is `Infinity`.
     */
    minZoom: number;

    /**
     * How far you can zoom in ( {@link OrthographicCamera} only ). Default is *0*.
     */
    maxZoom: number;

    /**
     * This array holds keycodes for controlling interactions.
     *  - When the first defined key is pressed, all mouse interactions (left, middle, right) performs orbiting.
     *  - When the second defined key is pressed, all mouse interactions (left, middle, right) performs zooming.
     *  - When the third defined key is pressed, all mouse interactions (left, middle, right) performs panning.
     *
     * Default is *KeyA, KeyS, KeyD* which represents A, S, D.
     */
    keys: [string, string, string];

    /**
     * This object contains references to the mouse actions used by the controls.
     *  - .LEFT is assigned with `THREE.MOUSE.ROTATE`
     *  - .MIDDLE is assigned with `THREE.MOUSE.ZOOM`
     *  - .RIGHT is assigned with `THREE.MOUSE.PAN`
     */
    mouseButtons: {
        LEFT?: MOUSE | null | undefined;
        MIDDLE?: MOUSE | null | undefined;
        RIGHT?: MOUSE | null | undefined;
    };

    /**
     * The focus point of the controls.
     */
    target: Vector3;

    /**
     * Creates a new instance of TrackballControls.
     * @param camera The camera of the rendered scene.
     * @param domElement The HTML element used for event listeners. (optional)
     */
    constructor(camera: Camera, domElement?: HTMLElement | SVGElement | null);

    /**
     * Should be called if the application window is resized.
     */
    handleResize(): void;

    update(): void;

    /**
     * Resets the controls to its initial state.
     */
    reset(): void;
}

export { TrackballControls };
