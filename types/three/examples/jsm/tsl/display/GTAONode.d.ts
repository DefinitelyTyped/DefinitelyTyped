import { Camera, Node, TempNode, TextureNode, UniformNode } from "three/webgpu";

declare class GTAONode extends TempNode<"float"> {
    depthNode: Node;
    normalNode: Node;

    resolutionScale: number;

    radius: UniformNode<"float", number>;
    thickness: UniformNode<"float", number>;
    /**
     * @deprecated since r186. The new distance model "Quadratic Ray Stepping" does not need it anymore.
     */
    distanceExponent: UniformNode<"float", number>;
    /**
     * @deprecated since r186. The new distance model "Quadratic Ray Stepping" does not need it anymore.
     */
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
