import { Camera, Matrix4 } from "three";
import { Node, NodeRepresentation, ShaderNodeObject, TempNode, UniformNode } from "three/tsl";

declare class DenoiseNode extends TempNode {
    textureNode: Node;
    depthNode: Node;
    normalNode: Node;
    noiseNode: Node;

    cameraProjectionMatrixInversion: UniformNode<Matrix4>;
    lumaPhi: UniformNode<number>;
    depthPhi: UniformNode<number>;
    normalPhi: UniformNode<number>;
    radius: UniformNode<number>;
    index: UniformNode<number>;

    constructor(textureNode: Node, depthNode: Node, normalNode: Node, noiseNode: Node, camera: Camera);
}

export default DenoiseNode;

export const denoise: (
    node: NodeRepresentation,
    depthNode: NodeRepresentation,
    normalNode: NodeRepresentation,
    noiseNode: NodeRepresentation,
    camera: Camera,
) => ShaderNodeObject<DenoiseNode>;
