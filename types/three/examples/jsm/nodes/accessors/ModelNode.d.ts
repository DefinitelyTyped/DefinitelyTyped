import Object3DNode, { Object3DNodeScope } from './Object3DNode.js';
import { ShaderNodeObject } from '../shadernode/ShaderNode.js';

/**
 * Similar to {@link Object3DNode} but the object comes from {@link NodeFrame}
 */
export default class ModelNode extends Object3DNode {
    constructor(scope?: Object3DNodeScope);
}

export const modelViewMatrix: ShaderNodeObject<ModelNode>;
export const modelNormalMatrix: ShaderNodeObject<ModelNode>;
export const modelWorldMatrix: ShaderNodeObject<ModelNode>;
export const modelPosition: ShaderNodeObject<ModelNode>;
export const modelViewPosition: ShaderNodeObject<ModelNode>;
