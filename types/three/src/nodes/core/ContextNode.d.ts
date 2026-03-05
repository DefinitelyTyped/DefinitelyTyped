import { Light } from "../../lights/Light.js";
import Node from "./Node.js";
import { NodeBuilderContext } from "./NodeBuilder.js";

declare class ContextNodeInterface<TNodeType> extends Node {
    readonly isContextNode: true;

    node: Node<TNodeType> | null;
    value: NodeBuilderContext;
}

declare const ContextNode: {
    new<TNodeType>(node?: Node<TNodeType> | null, value?: NodeBuilderContext): ContextNode<TNodeType>;
};

type ContextNode<TNodeType> = ContextNodeInterface<TNodeType> & Node<TNodeType>;

export default ContextNode;

interface ContextFunction {
    (value?: NodeBuilderContext): ContextNode<unknown>;
    <TNodeType>(node: Node<TNodeType>, value?: NodeBuilderContext): ContextNode<TNodeType>;
}

export const context: ContextFunction;

export const uniformFlow: <TNodeType>(node: Node<TNodeType>) => ContextNode<TNodeType>;

export const setName: <TNodeType>(node: Node<TNodeType>, label: string) => Node<TNodeType>;

export function builtinShadowContext(shadowNode: Node, light: Light, node?: Node | null): ContextNode<unknown>;

export function builtinAOContext(aoNode: Node, node?: Node | null): ContextNode<unknown>;

/**
 * @deprecated "label()" has been deprecated. Use "setName()" instead.
 */
export function label<TNodeType>(node: Node<TNodeType>, label: string): Node<TNodeType>;

declare module "./Node.js" {
    interface NodeExtensions<TNodeType> {
        context: (context?: NodeBuilderContext) => ContextNode<TNodeType>;

        /**
         * @deprecated "label()" has been deprecated. Use "setName()" instead.
         */
        label: (label: string) => Node<TNodeType>;

        uniformFlow: () => ContextNode<TNodeType>;

        setName: (label: string) => Node<TNodeType>;

        builtinShadowContext: (shadowNode: Node, light: Light) => ContextNode<TNodeType>;

        builtinAOContext: (aoValue: Node) => ContextNode<TNodeType>;
    }
}
