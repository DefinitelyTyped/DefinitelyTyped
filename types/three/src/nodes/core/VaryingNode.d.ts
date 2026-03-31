import { InterpolationSamplingMode, InterpolationSamplingType } from "../../constants.js";
import Node from "./Node.js";
import NodeBuilder from "./NodeBuilder.js";
import NodeVarying from "./NodeVarying.js";

interface VaryingNodeInterface {
    node: Node;
    name: string | null;
    readonly isVaryingNode: true;
    interpolationType: InterpolationSamplingType | null;
    interpolationSampling: InterpolationSamplingMode | null;

    setInterpolation(type: InterpolationSamplingType | null, sampling?: InterpolationSamplingMode | null): this;

    setupVarying(builder: NodeBuilder): NodeVarying;
}

declare const VaryingNode: {
    new<TNodeType>(node: Node<TNodeType>, name?: string | null): VaryingNode<TNodeType>;
};

type VaryingNode<TNodeType> = VaryingNodeInterface & Node<TNodeType>;

export default VaryingNode;

export const varying: <TNodeType>(node: Node<TNodeType>, name?: string) => VaryingNode<TNodeType>;

export const vertexStage: <TNodeType>(node: Node<TNodeType>) => VaryingNode<TNodeType>;

declare module "./Node.js" {
    interface NodeExtensions<TNodeType> {
        toVarying: (name?: string) => VaryingNode<TNodeType>;

        toVertexStage: () => VaryingNode<TNodeType>;
    }
}
