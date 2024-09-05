import { Camera } from "../../cameras/Camera.js";
import { Matrix4 } from "../../math/Matrix4.js";
import Node from "../core/Node.js";
import TempNode from "../core/TempNode.js";
import UniformNode from "../core/UniformNode.js";
import { NodeRepresentation, ShaderNodeObject } from "../tsl/TSLCore.js";

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
