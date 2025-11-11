import { Camera, Object3D, Scene, Vector3 } from "three";

declare class SelectionBox {
    camera: Camera;
    scene: Scene;
    startPoint: Vector3;
    endPoint: Vector3;
    collection: Object3D[];
    instances: Record<string, number[]>;
    batches: Record<string, number[]>;
    deep: number;

    constructor(camera: Camera, scene: Scene, deep?: number);

    select(startPoint?: Vector3, endPoint?: Vector3): Object3D[];
}
