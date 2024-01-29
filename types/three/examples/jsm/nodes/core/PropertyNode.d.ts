import { NodeTypeOption } from './constants.js';
import Node from './Node.js';
import { ShaderNodeObject } from '../shadernode/ShaderNode.js';

export default class PropertyNode extends Node {
    constructor(name?: string, nodeType?: NodeTypeOption);
}

export const property: (name: string, nodeOrType: Node | NodeTypeOption) => ShaderNodeObject<Node>;

export const diffuseColor: ShaderNodeObject<PropertyNode>;
export const roughness: ShaderNodeObject<PropertyNode>;
export const metalness: ShaderNodeObject<PropertyNode>;
export const specularColor: ShaderNodeObject<PropertyNode>;
export const shininess: ShaderNodeObject<PropertyNode>;
