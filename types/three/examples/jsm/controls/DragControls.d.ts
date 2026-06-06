import { Camera, Controls, MOUSE, Object3D, Raycaster, TOUCH } from "three";

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

declare class DragControls extends Controls<DragControlsEventMap> {
    /**
     * An array of draggable 3D objects.
     */
    objects: Object3D[];

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
     * The speed at which the object will rotate when dragged in `rotate` mode. The higher the number the faster the
     * rotation. Default is `1`.
     */
    rotateSpeed: number;

    /**
     * The internal raycaster used for detecting 3D objects.
     */
    raycaster: Raycaster;

    /**
     * This object defines what type of actions are assigned to the available mouse buttons.
     */
    mouseButtons: {
        LEFT?: MOUSE | null | undefined;
        MIDDLE?: MOUSE | null | undefined;
        RIGHT?: MOUSE | null | undefined;
    };

    /**
     * This object defines what type of actions are assigned to what kind of touch interaction.
     */
    touches: { ONE?: TOUCH | null | undefined };

    /**
     * Creates a new instance of DragControls.
     * @param objects An array of draggable 3D objects.
     * @param camera The camera of the rendered scene.
     * @param domElement The HTML element used for event listeners. (optional)
     */
    constructor(objects: Object3D[], camera: Camera, domElement?: HTMLElement | SVGElement | null);
}

export { DragControls };
