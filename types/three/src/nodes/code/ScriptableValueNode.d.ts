import Node from "../core/Node.js";

declare class ScriptableValueNode extends Node {
    constructor(value: unknown);
}

export default ScriptableValueNode;

export const scriptableValue: (value: unknown) => ScriptableValueNode;
