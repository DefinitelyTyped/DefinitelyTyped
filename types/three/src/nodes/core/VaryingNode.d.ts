import { NodeRepresentation, ShaderNodeObject } from "../tsl/TSLCore.js";
import Node from "./Node.js";
import NodeBuilder from "./NodeBuilder.js";
import NodeVarying from "./NodeVarying.js";

export default class VaryingNode extends Node {
    node: Node;
    name: string | null;

    constructor(node: Node, name?: string | null);

    setupVarying(builder: NodeBuilder): NodeVarying;
}

export const varying: (node: NodeRepresentation, name?: string) => ShaderNodeObject<VaryingNode>;

export const vertexStage: (node: NodeRepresentation) => ShaderNodeObject<VaryingNode>;

declare module "../tsl/TSLCore.js" {
    interface NodeElements {
        toVarying: typeof varying;
        toVertexStage: typeof vertexStage;

        /**
         * @deprecated .varying() has been renamed to .toVarying().
         */
        varying: typeof varying;
        /**
         * @deprecated .vertexStage() has been renamed to .toVertexStage().
         */
        vertexStage: typeof vertexStage;
    }
}
