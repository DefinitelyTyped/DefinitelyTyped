import * as THREE from "three";

declare class DragControls extends THREE.EventDispatcher {
    static install(library: { THREE: typeof THREE }): void;

    constructor(objects: ReadonlyArray<THREE.Object3D>, camera: THREE.Camera, domElement: HTMLCanvasElement);
    deactivate(): void;
}

export = DragControls;
