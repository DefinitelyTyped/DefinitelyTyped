import Node from "../core/Node.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";

export const rangeFogFactor: (near: Node | number, far: Node | number) => ShaderNodeObject<Node>;

export const densityFogFactor: (density: Node) => ShaderNodeObject<Node>;

export const fog: (color: Node, factor: Node) => ShaderNodeObject<Node>;

/**
 * @deprecated
 */
export function rangeFog(
    color: Node,
    near: Node,
    far: Node,
): ShaderNodeObject<Node>;

/**
 * @deprecated
 */
export function densityFog(
    color: Node,
    near: Node,
    far: Node,
): ShaderNodeObject<Node>;
