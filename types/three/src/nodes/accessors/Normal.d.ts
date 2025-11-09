import AttributeNode from "../core/AttributeNode.js";
import Node from "../core/Node.js";
import VarNode from "../core/VarNode.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";

export const normalGeometry: ShaderNodeObject<AttributeNode>;

export const normalLocal: ShaderNodeObject<VarNode>;

export const normalFlat: ShaderNodeObject<VarNode>;

export const normalViewGeometry: ShaderNodeObject<VarNode>;

export const normalWorldGeometry: ShaderNodeObject<VarNode>;

export const normalView: ShaderNodeObject<VarNode>;

export const normalWorld: ShaderNodeObject<VarNode>;

export const clearcoatNormalView: ShaderNodeObject<VarNode>;

export const transformNormal: (normal: Node, matrix?: Node) => ShaderNodeObject<Node>;

export const transformNormalToView: (normal: Node) => ShaderNodeObject<Node>;

/**
 * @deprecated since r178. Use `normalView` instead.
 */
export const transformedNormalView: ShaderNodeObject<VarNode>;

/**
 * @deprecated since r178. Use `normalWorld` instead.
 */
export const transformedNormalWorld: ShaderNodeObject<VarNode>;

/**
 * @deprecated since r178. Use `clearcoatNormalView` instead.
 */
export const transformedClearcoatNormalView: ShaderNodeObject<VarNode>;
