import { ShaderNodeObject } from "../tsl/TSLCore.js";
import Node from "./Node.js";

export type IndexNodeScope =
    | typeof IndexNode.VERTEX
    | typeof IndexNode.INSTANCE
    | typeof IndexNode.INVOCATION_LOCAL
    | typeof IndexNode.DRAW;

declare class IndexNode extends Node {
    scope: IndexNodeScope;

    readonly isInstanceNode: true;

    constructor(scope: IndexNodeScope);

    static VERTEX: "vertex";
    static INSTANCE: "instance";
    static INVOCATION_LOCAL: "invocationLocal";
    static DRAW: "draw";
}

export default IndexNode;

export const vertexIndex: ShaderNodeObject<IndexNode>;
export const instanceIndex: ShaderNodeObject<IndexNode>;
export const invocationLocalIndex: ShaderNodeObject<IndexNode>;
export const drawIndex: ShaderNodeObject<IndexNode>;
