import Node from "../core/Node.js";
import { NodeRepresentation, ShaderNodeObject } from "../tsl/TSLCore.js";

export const rangeFogFactor: (near: NodeRepresentation, far: NodeRepresentation) => ShaderNodeObject<Node>;

export const densityFogFactor: (density: NodeRepresentation) => ShaderNodeObject<Node>;

export const fog: (color: NodeRepresentation, factor: NodeRepresentation) => ShaderNodeObject<Node>;

/**
 * @deprecated
 */
export function rangeFog(
    color: NodeRepresentation,
    near: NodeRepresentation,
    far: NodeRepresentation,
): ShaderNodeObject<Node>;

/**
 * @deprecated
 */
export function densityFog(
    color: NodeRepresentation,
    near: NodeRepresentation,
    far: NodeRepresentation,
): ShaderNodeObject<Node>;
