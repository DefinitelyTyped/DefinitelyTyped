import { Node, NodeRepresentation, ShaderNodeObject, TempNode, TextureNode, UniformNode } from "three/tsl";
import { Camera, Object3D, Scene } from "three/webgpu";

export interface OutlineNodeParams {
    selectedObjects?: Object3D[] | undefined;
    edgeThickness?: NodeRepresentation | undefined;
    edgeGlow?: NodeRepresentation | undefined;
    downSampleRatio?: number | undefined;
}

declare class OutlineNode extends TempNode {
    scene: Scene;
    camera: Camera;
    selectedObjects: Object3D[];
    edgeThicknessNode: ShaderNodeObject<UniformNode<number>>;
    edgeGlowNode: ShaderNodeObject<UniformNode<number>>;
    downSampleRatio: number;

    constructor(scene: Scene, camera: Camera, params?: OutlineNodeParams);

    get visibleEdge(): ShaderNodeObject<Node>;

    get hiddenEdge(): ShaderNodeObject<Node>;

    getTextureNode(): ShaderNodeObject<TextureNode>;

    setSize(width: number, height: number): void;
}

export default OutlineNode;

export const outline: (scene: Scene, camera: Camera, params?: OutlineNodeParams) => ShaderNodeObject<OutlineNode>;
