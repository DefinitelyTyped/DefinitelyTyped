import Node from "../core/Node.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";

declare class ScriptableValueNode extends Node {
    constructor(value: unknown);
}

export default ScriptableValueNode;

export const scriptableValue: (value?: unknown) => ShaderNodeObject<ScriptableValueNode>;
