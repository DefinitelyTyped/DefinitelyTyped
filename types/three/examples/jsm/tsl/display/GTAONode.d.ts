import { Camera, Node, TextureNode, UniformNode } from "three/webgpu";

declare class GTAONode extends Node<"float"> {
    depthNode: Node;
    normalNode: Node;

    resolutionScale: number;

    radius: UniformNode<"float">;
    thickness: UniformNode<"float">;
    /**
     * @deprecated since r186. The new distance model "Quadratic Ray Stepping" does not need it anymore.
     */
    distanceExponent: UniformNode<"float">;
    /**
     * @deprecated since r186. The new distance model "Quadratic Ray Stepping" does not need it anymore.
     */
    distanceFallOff: UniformNode<"float">;
    scale: UniformNode<"float">;
    samples: UniformNode<"float">;

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
