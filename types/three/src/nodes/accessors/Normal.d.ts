import Node from "../core/Node.js";

export const normalGeometry: Node<"vec3">;

export const normalLocal: Node<"vec3">;

export const normalFlat: Node<"vec3">;

export const normalViewGeometry: Node<"vec3">;

export const normalWorldGeometry: Node<"vec3">;

export const normalView: Node<"vec3">;

export const normalWorld: Node<"vec3">;

export const clearcoatNormalView: Node<"vec3">;

export const transformNormal: (normal: Node, matrix?: Node) => Node<"vec3">;

export const transformNormalToView: (normal: Node) => Node<"vec3">;
