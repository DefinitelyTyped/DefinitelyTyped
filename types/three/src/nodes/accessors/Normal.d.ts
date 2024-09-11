import AttributeNode from "../core/AttributeNode.js";
import VarNode from "../core/VarNode.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";

export const normalGeometry: ShaderNodeObject<AttributeNode>;

export const normalLocal: ShaderNodeObject<VarNode>;

export const normalFlat: ShaderNodeObject<VarNode>;

export const normalView: ShaderNodeObject<VarNode>;

export const normalWorld: ShaderNodeObject<VarNode>;

export const transformedNormalView: ShaderNodeObject<VarNode>;

export const transformedNormalWorld: ShaderNodeObject<VarNode>;

export const transformedClearcoatNormalView: ShaderNodeObject<VarNode>;
