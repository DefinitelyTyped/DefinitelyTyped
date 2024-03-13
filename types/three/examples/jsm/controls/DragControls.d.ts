import { Camera, EventDispatcher, Object3D, Raycaster } from "three";

export interface DragControlsEventMap {
    /**
     * Fires when the pointer is moved onto a 3D object, or onto one of its children.
     */
    hoveron: { object: Object3D };

    /**
     * Fires when the pointer is moved out of a 3D object.
     */
    hoveroff: { object: Object3D };

    /**
     * Fires when the user starts to drag a 3D object.
     */
    dragstart: { object: Object3D };

    /**
     * Fires when the user drags a 3D object.
     */
    drag: { object: Object3D };

    /**
     * Fires when the user has finished dragging a 3D object.
     */
    dragend: { object: Object3D };
}

export type DragControlsMode = "translate" | "rotate";

export class DragControls extends EventDispatcher<DragControlsEventMap> {
    /**
     * Creates a new instance of DragControls.
     * @param objects An array of draggable 3D objects.
     * @param camera The camera of the rendered scene.
     * @param domElement The HTML element used for event listeners.
     */
    constructor(objects: Object3D[], camera: Camera, domElement?: HTMLElement);

    /**
     * Whether or not the controls are enabled.
     */
    enabled: boolean;

    /**
     * Whether children of draggable objects can be dragged independently from their parent. Default is `true`.
     */
    recursive: boolean;

    /**
     * This option only works if the {@link .objects} array contains a single draggable group object. If set to `true`,
     * {@link DragControls} does not transform individual objects but the entire group. Default is `false`.
     */
    transformGroup: boolean;

    /**
     * The current transformation mode. Possible values are `translate`, and `rotate`. Default is `translate`.
     */
    mode: DragControlsMode;

    /**
     * The speed at which the object will rotate when dragged in `rotate` mode. The higher the number the faster the
     * rotation. Default is `1`.
     */
    rotateSpeed: number;

    /**
     * Adds the event listeners of the controls.
     */
    activate: () => void;

    /**
     * Removes the event listeners of the controls.
     */
    deactivate: () => void;

    /**
     * Should be called if the controls is no longer required.
     */
    dispose: () => void;

    /**
     * Returns the array of draggable objects.
     */
    getObjects: () => Object3D[];

    /**
     * Returns the internal {@link Raycaster} instance that is used for intersection tests.
     */
    getRaycaster: () => Raycaster;

    /**
     * Sets an array of draggable objects by overwriting the existing one.
     */
    setObjects: (objects: readonly Object3D[]) => void;
}
