import Node from "../core/Node.js";
import NodeBuilder from "../core/NodeBuilder.js";
import { NodeRepresentation, ShaderNodeObject } from "../tsl/TSLCore.js";

declare class LoopNode extends Node {
    params: unknown[];

    constructor(params?: unknown[]);

    getProperties(builder: NodeBuilder): unknown;
}

export default LoopNode;

export const Loop: (...params: unknown[]) => ShaderNodeObject<Node>;
export const Continue: () => ShaderNodeObject<Node>;
export const Break: () => ShaderNodeObject<Node>;

/**
 * @deprecated loop() has been renamed to Loop()
 */
export const loop: (...params: unknown[]) => ShaderNodeObject<Node>;
