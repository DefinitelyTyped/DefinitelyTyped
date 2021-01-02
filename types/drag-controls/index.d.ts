// Type definitions for drag-controls 1.0
// Project: https://github.com/jbyte/three-dragcontrols#readme
// Definitions by: Matt Hawes <https://github.com/MGHawes>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.6

import * as three from 'three';

type THREE = typeof three;

// tslint:disable-next-line:no-unnecessary-class
declare class DragControls {
    static install(library: { THREE: THREE }): void;

    constructor(objects: ReadonlyArray<THREE.Object3D>, camera: THREE.Camera, domElement: HTMLCanvasElement);
}

export = DragControls;
