import AttributeNode from "../core/AttributeNode.js";
import PropertyNode from "../core/PropertyNode.js";
import VarNode from "../core/VarNode.js";
import { ShaderNodeObject } from "../shadernode/ShaderNode.js";

export const normalGeometry: ShaderNodeObject<AttributeNode>;
export const normalLocal: ShaderNodeObject<VarNode>;
export const normalView: ShaderNodeObject<VarNode>;
export const normalWorld: ShaderNodeObject<VarNode>;
export const transformedNormalView: ShaderNodeObject<PropertyNode>;
export const transformedNormalWorld: ShaderNodeObject<VarNode>;
export const transformedClearcoatNormalView: ShaderNodeObject<PropertyNode>;
