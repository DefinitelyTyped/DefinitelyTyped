import { Camera, Node, TempNode, TextureNode, UniformNode, Vector2 } from "three/webgpu";

declare class GTAONode extends TempNode {
    depthNode: Node;
    normalNode: Node;

    resolutionScale: number;

    radius: UniformNode<number>;
    resolution: UniformNode<Vector2>;
    thickness: UniformNode<number>;
    distanceExponent: UniformNode<number>;
    distanceFallOff: UniformNode<number>;
    scale: UniformNode<number>;
    samples: UniformNode<number>;

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
