import Node from "./Node.js";
import { NodeBuilderContext } from "./NodeBuilder.js";

declare class ContextNode extends Node {
    readonly isContextNode: true;

    node: Node;
    value: NodeBuilderContext;

    constructor(node: Node, value?: NodeBuilderContext);
}

export default ContextNode;

export const context: (node: Node, context?: NodeBuilderContext) => ContextNode;

export const uniformFlow: (node: Node) => ContextNode;

export const setName: (node: Node, label: string) => Node;

/**
 * @deprecated "label()" has been deprecated. Use "setName()" instead.
 */
export function label(node: Node, label: string): Node;

declare module "../Nodes.js" {
    interface Node {
        context: (context?: NodeBuilderContext) => ContextNode;
        contextAssign: (context?: NodeBuilderContext) => this;

        /**
         * @deprecated "label()" has been deprecated. Use "setName()" instead.
         */
        label: (label: string) => Node;
        /**
         * @deprecated "label()" has been deprecated. Use "setName()" instead.
         */
        labelAssign: (label: string) => this;

        uniformFlow: () => ContextNode;
        uniformFlowAssign: () => this;

        setName: (label: string) => Node;
        setNameAssign: (label: string) => this;
    }
}
