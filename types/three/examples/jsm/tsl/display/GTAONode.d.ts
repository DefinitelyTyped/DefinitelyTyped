import { Camera, Matrix4, Vector2 } from "three";
import { Node, NodeRepresentation, ShaderNodeObject, TempNode, TextureNode, UniformNode } from "three/tsl";

declare class GTAONode extends TempNode {
    depthNode: Node;
    normalNode: Node;

    radius: ShaderNodeObject<UniformNode<number>>;
    resolution: ShaderNodeObject<UniformNode<Vector2>>;
    thickness: ShaderNodeObject<UniformNode<number>>;
    distanceExponent: ShaderNodeObject<UniformNode<number>>;
    distanceFallOff: ShaderNodeObject<UniformNode<number>>;
    scale: ShaderNodeObject<UniformNode<number>>;
    noiseNode: ShaderNodeObject<TextureNode>;

    cameraProjectionMatrix: ShaderNodeObject<UniformNode<Matrix4>>;
    cameraProjectionMatrixInverse: ShaderNodeObject<UniformNode<Matrix4>>;

    SAMPLES: ShaderNodeObject<UniformNode<number>>;

    constructor(depthNode: Node, normalNode: Node, camera: Camera);

    getTextureNode(): ShaderNodeObject<TextureNode>;

    setSize(width: number, height: number): void;
}

export default GTAONode;

export const ao: (
    depthNode: NodeRepresentation,
    normalNode: NodeRepresentation,
    camera: Camera,
) => ShaderNodeObject<GTAONode>;
