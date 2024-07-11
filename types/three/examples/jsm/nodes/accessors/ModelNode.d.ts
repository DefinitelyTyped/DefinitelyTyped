import { Matrix4 } from "three/src/Three.js";
import { UniformNode } from "../Nodes.js";
import { ShaderNodeObject } from "../shadernode/ShaderNode.js";
import Object3DNode from "./Object3DNode.js";

/**
 * Similar to {@link Object3DNode} but the object comes from {@link NodeFrame}
 */
export default class ModelNode extends Object3DNode {
    constructor(scope?: string);
}

export const modelDirection: ShaderNodeObject<ModelNode>;
export const modelViewMatrix: ShaderNodeObject<ModelNode>;
export const modelNormalMatrix: ShaderNodeObject<ModelNode>;
export const modelWorldMatrix: ShaderNodeObject<ModelNode>;
export const modelPosition: ShaderNodeObject<ModelNode>;
export const modelScale: ShaderNodeObject<ModelNode>;
export const modelViewPosition: ShaderNodeObject<ModelNode>;
export const modelWorldMatrixInverse: ShaderNodeObject<UniformNode<Matrix4>>;
