import { Camera, Object3D, Scene, Vector2 } from './three-core';

export class OutlinePass {
    constructor(size: Vector2, scene: Scene, camer: Camera, selectedObjects?: Array<Object3D>);
    selectedObjects: Array<Object3D>;
    renderCamera: Camera;
}

