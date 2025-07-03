import { ShaderNodeObject } from "three/tsl";
import { Camera, Node, TempNode, UniformNode } from "three/webgpu";

declare class DenoiseNode extends TempNode {
    textureNode: Node;
    depthNode: Node;
    normalNode: Node;

    noiseNode: Node;

    lumaPhi: UniformNode<number>;
    depthPhi: UniformNode<number>;
    normalPhi: UniformNode<number>;
    radius: UniformNode<number>;
    index: UniformNode<number>;

    constructor(textureNode: Node, depthNode: Node, normalNode: Node, noiseNode: Node, camera: Camera);
}

export default DenoiseNode;

export const denoise: (
    node: Node,
    depthNode: Node,
    normalNode: Node,
    camera: Camera,
) => ShaderNodeObject<DenoiseNode>;
