import { Camera, Node, Object3D, Scene, TempNode, TextureNode, UniformNode } from "three/webgpu";

export interface OutlineNodeParams {
    selectedObjects?: Object3D[] | undefined;
    edgeThickness?: Node | undefined;
    edgeGlow?: Node | undefined;
    downSampleRatio?: number | undefined;
}

declare class OutlineNode extends TempNode {
    scene: Scene;
    camera: Camera;
    selectedObjects: Object3D[];
    edgeThicknessNode: UniformNode<number>;
    edgeGlowNode: UniformNode<number>;
    downSampleRatio: number;

    constructor(scene: Scene, camera: Camera, params?: OutlineNodeParams);

    get visibleEdge(): Node;

    get hiddenEdge(): Node;

    getTextureNode(): TextureNode;

    setSize(width: number, height: number): void;
}

export default OutlineNode;

export const outline: (scene: Scene, camera: Camera, params?: OutlineNodeParams) => OutlineNode;
