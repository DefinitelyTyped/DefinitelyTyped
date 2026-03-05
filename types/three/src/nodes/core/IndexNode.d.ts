import Node from "./Node.js";

export type IndexNodeScope =
    | typeof IndexNode.VERTEX
    | typeof IndexNode.INSTANCE
    | typeof IndexNode.SUBGROUP
    | typeof IndexNode.INVOCATION_LOCAL
    | typeof IndexNode.INVOCATION_SUBGROUP
    | typeof IndexNode.DRAW;

declare class IndexNode extends Node<"uint"> {
    scope: IndexNodeScope;

    readonly isInstanceNode: true;

    constructor(scope: IndexNodeScope);

    static VERTEX: "vertex";
    static INSTANCE: "instance";
    static SUBGROUP: "subgroup";
    static INVOCATION_LOCAL: "invocationLocal";
    static INVOCATION_SUBGROUP: "invocationSubgroup";
    static DRAW: "draw";
}

export default IndexNode;

export const vertexIndex: IndexNode;
export const instanceIndex: IndexNode;
export const subgroupIndex: IndexNode;
export const invocationSubgroupIndex: IndexNode;
export const invocationLocalIndex: IndexNode;
export const drawIndex: IndexNode;
