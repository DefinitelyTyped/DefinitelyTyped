import { Node, PerspectiveCamera, TempNode, UniformNode } from "three/webgpu";

declare class SSGINode extends TempNode {
    beautyNode: Node;
    depthNode: Node;
    normalNode: Node;

    sliceCount: UniformNode<number>;
    stepCount: UniformNode<number>;
    aoIntensity: UniformNode<number>;
    giIntensity: UniformNode<number>;
    radius: UniformNode<number>;
    useScreenSpaceSampling: UniformNode<boolean>;
    expFactor: UniformNode<number>;
    thickness: UniformNode<number>;
    useLinearThickness: UniformNode<boolean>;
    backfaceLighting: UniformNode<number>;
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
