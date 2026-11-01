import { Node, PerspectiveCamera, TextureNode, UniformNode } from "three/webgpu";

declare class SSGINode extends Node<"vec4"> {
    beautyNode: Node;
    depthNode: Node;
    normalNode: Node;

    resolutionScale: number;

    sliceCount: UniformNode<"uint">;
    stepCount: UniformNode<"uint">;
    aoIntensity: UniformNode<"float">;
    giIntensity: UniformNode<"float">;
    radius: UniformNode<"float">;
    useScreenSpaceSampling: UniformNode<"bool">;
    expFactor: UniformNode<"float">;
    thickness: UniformNode<"float">;
    useLinearThickness: UniformNode<"bool">;
    backfaceLighting: UniformNode<"float">;
    useTemporalFiltering: boolean;

    constructor(beautyNode: Node, depthNode: Node, normalNode: Node, camera: PerspectiveCamera);

    getAONode(): TextureNode<"float">;
    getGINode(): TextureNode<"vec3">;
}

export default SSGINode;

export const ssgi: (
    beautyNode: Node,
    depthNode: Node,
    normalNode: Node,
    camera: PerspectiveCamera,
) => SSGINode;
