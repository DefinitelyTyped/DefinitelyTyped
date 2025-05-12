import Node from "../core/Node.js";
import NodeBuilder from "../core/NodeBuilder.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";

interface LoopNodeObjectParameter {
    // TODO Expand to other types and update loop function types appropriately
    type?: "int" | "uint";
    // TODO The variable name should affect the type of the loop function
    // name?: string;
    start: number | Node;
    end: number | Node;
    condition: string;
}

type LoopNodeParameter = Node | number | LoopNodeObjectParameter;

declare class LoopNode extends Node {
    params: unknown[];

    constructor(params?: unknown[]);

    getProperties(builder: NodeBuilder): unknown;
}

export default LoopNode;

interface Loop {
    (i: LoopNodeParameter, func: (inputs: { readonly i: number }) => void): ShaderNodeObject<Node>;
    (
        i: LoopNodeParameter,
        j: LoopNodeParameter,
        func: (inputs: { readonly i: number; readonly j: number }) => void,
    ): ShaderNodeObject<Node>;
}

export const Loop: Loop;
export const Continue: () => ShaderNodeObject<Node>;
export const Break: () => ShaderNodeObject<Node>;

/**
 * @deprecated loop() has been renamed to Loop()
 */
export const loop: (...params: unknown[]) => ShaderNodeObject<Node>;
