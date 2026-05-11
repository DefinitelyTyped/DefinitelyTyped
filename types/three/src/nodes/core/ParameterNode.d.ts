import PropertyNode from "./PropertyNode.js";

interface ParameterNodeInterface {
    readonly isParameterNode: true;
}

declare const ParameterNode: {
    new<TNodeType>(
        nodeType: TNodeType,
        name?: string | null,
    ): ParameterNode<TNodeType>;
};

type ParameterNode<TNodeType> = PropertyNode<TNodeType> & ParameterNodeInterface;

export default ParameterNode;

export const parameter: <TNodeType>(type: TNodeType, name?: string | null) => ParameterNode<TNodeType>;
