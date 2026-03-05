import Node from "../core/Node.js";

export const directionToColor: (node: Node) => Node<"vec3">;
export const colorToDirection: (node: Node) => Node<"vec3">;
export const unpackNormal: (xy: Node) => Node<"vec3">;
