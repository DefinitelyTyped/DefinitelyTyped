import Node from "../core/Node.js";

export const rangeFogFactor: (near: Node | number, far: Node | number) => Node;

export const densityFogFactor: (density: Node) => Node;

export const fog: (color: Node, factor: Node) => Node;

/**
 * @deprecated
 */
export function rangeFog(
    color: Node,
    near: Node,
    far: Node,
): Node;

/**
 * @deprecated
 */
export function densityFog(
    color: Node,
    near: Node,
    far: Node,
): Node;
