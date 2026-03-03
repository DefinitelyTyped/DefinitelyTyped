import Node from "../core/Node.js";

export const tri: (x: Node) => Node<"float">;

export const tri3: (p: Node) => Node<"vec3">;

export const triNoise3D: (
    position: Node,
    speed: Node | number,
    time: Node | number,
) => Node<"float">;
