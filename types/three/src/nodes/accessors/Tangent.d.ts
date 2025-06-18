import AttributeNode from "../core/AttributeNode.js";
import VarNode from "../core/VarNode.js";
import VaryingNode from "../core/VaryingNode.js";
import MathNode from "../math/MathNode.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";

export const tangentGeometry: ShaderNodeObject<AttributeNode>;
export const tangentLocal: ShaderNodeObject<VaryingNode>;
export const tangentView: ShaderNodeObject<MathNode>;
export const tangentWorld: ShaderNodeObject<MathNode>;
export const transformedTangentView: ShaderNodeObject<VarNode>;
export const transformedTangentWorld: ShaderNodeObject<MathNode>;
