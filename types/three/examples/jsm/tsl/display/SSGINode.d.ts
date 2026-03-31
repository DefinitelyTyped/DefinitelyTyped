import { Node, PerspectiveCamera, TempNode, UniformNode } from "three/webgpu";

declare class SSGINode extends TempNode<"vec4"> {
    beautyNode: Node;
    depthNode: Node;
    normalNode: Node;

    sliceCount: UniformNode<"uint", number>;
    stepCount: UniformNode<"uint", number>;
    aoIntensity: UniformNode<"float", number>;
    giIntensity: UniformNode<"float", number>;
    radius: UniformNode<"float", number>;
    useScreenSpaceSampling: UniformNode<"bool", boolean>;
    expFactor: UniformNode<"float", number>;
    thickness: UniformNode<"float", number>;
    useLinearThickness: UniformNode<"bool", boolean>;
    backfaceLighting: UniformNode<"float", number>;
    useTemporalFiltering: boolean;

    constructor(beautyNode: Node, depthNode: Node, normalNode: Node, camera: PerspectiveCamera);
}

export default SSGINode;

export const ssgi: (
    beautyNode: Node,
    depthNode: Node,
    normalNode: Node,
    camera: PerspectiveCamera,
) => SSGINode;
