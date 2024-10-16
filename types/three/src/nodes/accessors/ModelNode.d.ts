import { Matrix4 } from "../../math/Matrix4.js";
import Node from "../core/Node.js";
import { UniformNode } from "../Nodes.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";
import Object3DNode from "./Object3DNode.js";

/**
 * Similar to {@link Object3DNode} but the object comes from {@link NodeFrame}
 */
export default class ModelNode extends Object3DNode {
    constructor(scope: string);
}

export const modelDirection: ShaderNodeObject<ModelNode>;
export const modelWorldMatrix: ShaderNodeObject<ModelNode>;
export const modelPosition: ShaderNodeObject<ModelNode>;
export const modelScale: ShaderNodeObject<ModelNode>;
export const modelViewPosition: ShaderNodeObject<ModelNode>;
export const modelNormalMatrix: ShaderNodeObject<Node>;
export const modelWorldMatrixInverse: ShaderNodeObject<UniformNode<Matrix4>>;
export const modelViewMatrix: ShaderNodeObject<ModelNode>;

export const highPrecisionModelViewMatrix: ShaderNodeObject<Node>;
export const highPrecisionModelNormalViewMatrix: ShaderNodeObject<Node>;
