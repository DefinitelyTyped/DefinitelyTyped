import { Camera, Node, TempNode, TextureNode, UniformNode, Vector2 } from "three/webgpu";

declare class GTAONode extends TempNode<"float"> {
    depthNode: Node;
    normalNode: Node;

    resolutionScale: number;

    radius: UniformNode<"float", number>;
    resolution: UniformNode<"vec2", Vector2>;
    thickness: UniformNode<"float", number>;
    distanceExponent: UniformNode<"float", number>;
    distanceFallOff: UniformNode<"float", number>;
    scale: UniformNode<"float", number>;
    samples: UniformNode<"float", number>;

    useTemporalFiltering: boolean;

    constructor(depthNode: Node, normalNode: Node, camera: Camera);

    getTextureNode(): TextureNode;

    setSize(width: number, height: number): void;
}

export default GTAONode;

export const ao: (
    depthNode: Node,
    normalNode: Node,
    camera: Camera,
) => GTAONode;
