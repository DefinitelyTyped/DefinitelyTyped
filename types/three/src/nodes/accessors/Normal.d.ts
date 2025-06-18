import { Matrix4 } from "../../math/Matrix4.js";
import AttributeNode from "../core/AttributeNode.js";
import Node from "../core/Node.js";
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

export const transformNormal: (normal: Node, matrix?: Node) => ShaderNodeObject<Node>;

export const transformNormalToView: (normal: Node) => ShaderNodeObject<Node>;
