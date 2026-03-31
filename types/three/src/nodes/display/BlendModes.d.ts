import Node from "../core/Node.js";

export const blendBurn: (base: Node, blend: Node) => Node<"vec3">;

export const blendDodge: (base: Node, blend: Node) => Node<"vec3">;

export const blendScreen: (base: Node, blend: Node) => Node<"vec3">;

export const blendOverlay: (base: Node, blend: Node) => Node<"vec3">;

export const blendColor: (base: Node, blend: Node) => Node<"vec4">;

export const premultiplyAlpha: (color: Node) => Node<"vec4">;

export const unpremultiplyAlpha: (color: Node) => Node<"vec4">;
