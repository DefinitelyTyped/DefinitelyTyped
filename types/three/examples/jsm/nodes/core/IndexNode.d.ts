import { ShaderNodeObject } from "../shadernode/ShaderNode.js";
import Node from "./Node.js";

export type IndexNodeScope = typeof IndexNode.VERTEX | typeof IndexNode.INSTANCE;

export default class IndexNode extends Node {
    scope: IndexNodeScope;

    readonly isInstanceNode: true;

    constructor(scope: IndexNodeScope);

    static VERTEX: "vertex";
    static INSTANCE: "instance";
}

export const vertexIndex: ShaderNodeObject<IndexNode>;
export const instanceIndex: ShaderNodeObject<IndexNode>;
