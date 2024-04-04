import { ShaderNodeObject } from "../shadernode/ShaderNode.js";
import { NodeTypeOption } from "./constants.js";
import Node from "./Node.js";

export default class PropertyNode extends Node {
    name: string | null;
    varying: boolean;

    readonly isPropertyNode: true;

    constructor(nodeType?: NodeTypeOption | null, name?: string | null, varying?: boolean);
}

export const property: (type?: NodeTypeOption | null, name?: string | null) => ShaderNodeObject<PropertyNode>;
export const varyingProperty: (type?: NodeTypeOption | null, name?: string | null) => ShaderNodeObject<PropertyNode>;

export const diffuseColor: ShaderNodeObject<PropertyNode>;
export const roughness: ShaderNodeObject<PropertyNode>;
export const metalness: ShaderNodeObject<PropertyNode>;
export const clearcoat: ShaderNodeObject<PropertyNode>;
export const clearcoatRoughness: ShaderNodeObject<PropertyNode>;
export const sheen: ShaderNodeObject<PropertyNode>;
export const sheenRoughness: ShaderNodeObject<PropertyNode>;
export const iridescence: ShaderNodeObject<PropertyNode>;
export const iridescenceIOR: ShaderNodeObject<PropertyNode>;
export const iridescenceThickness: ShaderNodeObject<PropertyNode>;
export const specularColor: ShaderNodeObject<PropertyNode>;
export const shininess: ShaderNodeObject<PropertyNode>;
export const output: ShaderNodeObject<PropertyNode>;
export const dashSize: ShaderNodeObject<PropertyNode>;
export const gapSize: ShaderNodeObject<PropertyNode>;
export const pointWidth: ShaderNodeObject<PropertyNode>;
