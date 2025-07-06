import Node from "../core/Node.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";

declare class SampleNode extends Node {
    callback: (uv: Node) => Node;

    readonly isSampleNode: true;

    constructor(callback: (uv: Node) => Node);

    sample(uv: Node): Node;
}

export default SampleNode;

export const sample: (callback: (uv: Node) => Node) => ShaderNodeObject<SampleNode>;
