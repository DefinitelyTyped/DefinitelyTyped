import Node from "../core/Node.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";

declare class Resources extends Map<string, unknown> {
    get<TArgs extends unknown[]>(key: string, callback?: ((...args: TArgs) => void) | null, ...params: TArgs): unknown;
}

export const ScriptableNodeResources: Resources;

declare class ScriptableNode extends Node {
    codeNode: Node | null;
    parameters: Record<string, unknown>;

    constructor(codeNode?: Node | null, parameters?: Record<string, unknown>);
}

export default ScriptableNode;

export const scriptable: (
    codeNode: Node,
    parameters?: Record<string, unknown>,
) => ShaderNodeObject<ScriptableNode>;
