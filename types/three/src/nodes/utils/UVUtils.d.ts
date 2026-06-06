import ContextNode from "../core/ContextNode.js";
import Node from "../core/Node.js";

export function replaceDefaultUV<TNodeType>(
    callback: ((node: Node) => Node<"vec2">) | Node<"vec2">,
    node?: Node<TNodeType> | null,
): ContextNode<TNodeType>;

export const rotateUV: (
    uv: Node,
    rotation: Node,
    center?: Node,
) => Node<"vec2">;

export const spherizeUV: (
    uv: Node,
    strength: Node | number,
    center?: Node,
) => Node<"vec2">;
