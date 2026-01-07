import { Matrix4 } from "../../math/Matrix4.js";
import Node from "../core/Node.js";
import { UniformNode } from "../Nodes.js";
import Object3DNode from "./Object3DNode.js";

/**
 * Similar to {@link Object3DNode} but the object comes from {@link NodeFrame}
 */
export default class ModelNode extends Object3DNode {
    constructor(scope: string);
}

export const modelDirection: ModelNode;
export const modelWorldMatrix: ModelNode;
export const modelPosition: ModelNode;
export const modelScale: ModelNode;
export const modelViewPosition: ModelNode;
export const modelRadius: ModelNode;
export const modelNormalMatrix: Node;
export const modelWorldMatrixInverse: UniformNode<Matrix4>;

export const modelViewMatrix: ModelNode;

// GPU Precision

export const mediumpModelViewMatrix: Node;

// CPU Precision

export const highpModelViewMatrix: Node;

export const highpModelNormalViewMatrix: Node;
