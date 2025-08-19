import { InterpolationSamplingMode, InterpolationSamplingType } from "../../constants.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";
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

export const varying: (node: Node, name?: string) => ShaderNodeObject<VaryingNode>;

export const vertexStage: (node: Node) => ShaderNodeObject<VaryingNode>;

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
