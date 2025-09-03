import { ShaderNodeObject } from "../tsl/TSLCore.js";
import Node from "./Node.js";
import { NodeBuilderContext } from "./NodeBuilder.js";

declare class ContextNode extends Node {
    readonly isContextNode: true;

    node: Node;
    value: NodeBuilderContext;

    constructor(node: Node, value?: NodeBuilderContext);
}

export default ContextNode;

export const context: (node: Node, context?: NodeBuilderContext) => ShaderNodeObject<ContextNode>;

export const uniformFlow: (node: Node) => ShaderNodeObject<ContextNode>;

export const setName: (node: Node, label: string) => ShaderNodeObject<ContextNode>;

/**
 * @deprecated "label()" has been deprecated. Use "setName()" instead.
 */
export function label(node: Node, label: string): ShaderNodeObject<ContextNode>;

declare module "../tsl/TSLCore.js" {
    interface NodeElements {
        context: typeof context;
        label: typeof label;
        uniformFlow: typeof uniformFlow;
        setName: typeof setName;
    }
}
