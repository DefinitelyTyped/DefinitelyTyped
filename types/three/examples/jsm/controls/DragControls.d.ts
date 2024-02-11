import { Camera, EventDispatcher, Object3D, Raycaster } from "../../../src/Three.js";

export interface DragControlsEventMap {
    hoveron: { object: Object3D };
    hoveroff: { object: Object3D };
    dragstart: { object: Object3D };
    drag: { object: Object3D };
    dragend: { object: Object3D };
}

export class DragControls extends EventDispatcher<DragControlsEventMap> {
    constructor(objects: Object3D[], camera: Camera, domElement?: HTMLElement);

    object: Camera;

    // API

    enabled: boolean;
    recursive: boolean;
    transformGroup: boolean;

    activate(): void;
    deactivate(): void;
    dispose(): void;
    getObjects(): Object3D[];
    getRaycaster(): Raycaster;
}
