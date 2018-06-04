import { Camera, Color, Object3D, Scene, Vector2 } from './three-core';

export class OutlinePass {
    constructor(size: Vector2, scene: Scene, camer: Camera, selectedObjects?: Array<Object3D>);
    selectedObjects: Array<Object3D>;
    renderCamera: Camera;
    visibleEdgeColor: Color;
    hiddenEdgeColor: Color;
    edgeGlow: number;
    usePatternTexture: boolean;
    edgeThickness: number;
    edgeStrength: number;
    downSampleRatio: number;
    pulsePeriod: number;
    resolution: Vector2;
}

