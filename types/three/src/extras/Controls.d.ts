import { Camera } from "../cameras/Camera.js";
import { EventDispatcher } from "../core/EventDispatcher.js";

/**
 * Abstract base class for controls.
 */
declare abstract class Controls<TEventMap extends {}> extends EventDispatcher<TEventMap> {
    /**
     * The 3D object that is managed by the controls.
     */
    object: Camera;

    /**
     * The HTML element used for event listeners. If not provided via the constructor, {@link .connect} must be called
     * after `domElement` has been set.
     */
    domElement: HTMLElement | null;

    /**
     * When set to `false`, the controls will not respond to user input. Default is `true`.
     */
    enabled: boolean;

    /**
     * Creates a new instance of {@link Controls}.
     * @param object The object the controls should manage (usually the camera).
     * @param domElement The HTML element used for event listeners. (optional)
     */
    constructor(object: Camera, domElement: HTMLElement | null);

    /**
     * Connects the controls to the DOM. This method has so called "side effects" since it adds the module's event
     * listeners to the DOM.
     */
    connect(): void;

    /**
     * Disconnects the controls from the DOM.
     */
    disconnect(): void;

    /**
     * Call this method if you no longer want use to the controls. It frees all internal resources and removes all event
     * listeners.
     */
    dispose(): void;

    /**
     * Controls should implement this method if they have to update their internal state per simulation step.
     */
    update(delta: number): void;
}

export { Controls };
