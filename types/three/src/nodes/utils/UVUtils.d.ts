import ContextNode from "../core/ContextNode.js";
import Node from "../core/Node.js";
import OperatorNode from "../math/OperatorNode.js";

export function replaceDefaultUV(callback: (node: Node) => Node, node?: Node | null): ContextNode;

export const rotateUV: (
    uv: Node,
    rotation: Node,
    center?: Node,
) => OperatorNode;

export const spherizeUV: (
    uv: Node,
    strength: Node | number,
    center?: Node,
) => OperatorNode;
