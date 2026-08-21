import Node from "../core/Node.js";

export const rangeFogFactor: (near: Node | number, far: Node | number) => Node<"float">;

export const densityFogFactor: (density: Node) => Node<"float">;

export const exponentialHeightFogFactor: (density: Node, height: Node) => Node;

export const fog: (color: Node, factor: Node) => Node<"vec4">;

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
