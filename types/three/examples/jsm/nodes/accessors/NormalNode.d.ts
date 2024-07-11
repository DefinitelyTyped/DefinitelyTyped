import AttributeNode from "../core/AttributeNode.js";
import PropertyNode from "../core/PropertyNode.js";
import VarNode from "../core/VarNode.js";
import MathNode from "../math/MathNode.js";
import { ShaderNodeObject } from "../shadernode/ShaderNode.js";

export const normalGeometry: ShaderNodeObject<AttributeNode>;
export const normalLocal: ShaderNodeObject<VarNode>;
export const normalView: ShaderNodeObject<MathNode>;
export const normalWorld: ShaderNodeObject<MathNode>;
export const transformedNormalView: ShaderNodeObject<PropertyNode>;
export const transformedClearcoatNormalView: ShaderNodeObject<PropertyNode>;
