import { InterpolationSamplingMode, InterpolationSamplingType } from "../../constants.js";
import Node from "./Node.js";
import NodeBuilder from "./NodeBuilder.js";
import NodeVarying from "./NodeVarying.js";

export default class VaryingNode extends Node {
    node: Node;
    name: string | null;
    readonly isVaryingNode: true;
    interpolationType: InterpolationSamplingType | null;
    interpolationSampling: InterpolationSamplingMode | null;

    constructor(node: Node, name?: string | null);

    setInterpolation(type: InterpolationSamplingType | null, sampling?: InterpolationSamplingMode | null): this;

    setupVarying(builder: NodeBuilder): NodeVarying;
}

export const varying: (node: Node, name?: string) => VaryingNode;

export const vertexStage: (node: Node) => VaryingNode;

declare module "../Nodes.js" {
    interface Node {
        toVarying: (name?: string) => VaryingNode;
        toVaryingAssign: (name?: string) => this;

        toVertexStage: () => VaryingNode;
        toVertexStageAssign: () => this;

        /**
         * @deprecated .vertexStage() has been renamed to .toVertexStage().
         */
        vertexStage: () => VaryingNode;
        /**
         * @deprecated .vertexStage() has been renamed to .toVertexStage().
         */
        vertexStageAssign: () => this;
    }
}
