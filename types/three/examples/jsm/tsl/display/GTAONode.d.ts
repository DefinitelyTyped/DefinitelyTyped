import { NodeRepresentation, ShaderNodeObject } from "three/tsl";
import { Camera, Node, TempNode, TextureNode, UniformNode, Vector2 } from "three/webgpu";

declare class GTAONode extends TempNode {
    depthNode: Node;
    normalNode: Node;

    resolutionScale: number;

    radius: ShaderNodeObject<UniformNode<number>>;
    resolution: ShaderNodeObject<UniformNode<Vector2>>;
    thickness: ShaderNodeObject<UniformNode<number>>;
    distanceExponent: ShaderNodeObject<UniformNode<number>>;
    distanceFallOff: ShaderNodeObject<UniformNode<number>>;
    scale: ShaderNodeObject<UniformNode<number>>;
    samples: ShaderNodeObject<UniformNode<number>>;

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
