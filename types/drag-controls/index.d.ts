// Type definitions for drag-controls 1.0
// Project: https://github.com/jbyte/three-dragcontrols#readme
// Definitions by: Matt Hawes <https://github.com/MGHawes>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.4

import * as THREE from "three";

declare class DragControls extends THREE.EventDispatcher {
    static install(library: { THREE: typeof THREE }): void;

    constructor(objects: ReadonlyArray<THREE.Object3D>, camera: THREE.Camera, domElement: HTMLCanvasElement);
    deactivate(): void;
}

export = DragControls;
