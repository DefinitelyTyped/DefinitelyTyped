import Node from "../core/Node.js";
import { NodeBuilder } from "../Nodes.js";

interface ComputeBuiltinNodeInterface {
    setBuiltinName(builtinName: string): this;
    getBuiltinName(builder: NodeBuilder): string;
    hasBuiltin(builder: NodeBuilder): boolean;
}

declare const ComputeBuiltinNode: {
    new<TNodeType>(builtinName: string, nodeType: TNodeType): ComputeBuiltinNode<TNodeType>;
};

type ComputeBuiltinNode<TNodeType = unknown> = Node<TNodeType> & ComputeBuiltinNodeInterface;

export default ComputeBuiltinNode;

export const numWorkgroups: ComputeBuiltinNode<"uvec3">;
export const workgroupId: ComputeBuiltinNode<"uvec3">;
export const globalId: ComputeBuiltinNode<"uvec3">;
export const localId: ComputeBuiltinNode<"uvec3">;
export const subgroupSize: ComputeBuiltinNode<"uint">;
