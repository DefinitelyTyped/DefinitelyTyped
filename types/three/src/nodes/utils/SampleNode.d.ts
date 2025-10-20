import Node from "../core/Node.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";

declare class SampleNode extends Node {
    callback: (uv: Node) => Node;
    uvNode: Node | null;

    readonly isSampleNode: true;

    constructor(callback: (uv: Node) => Node, uvNode?: Node | null);

    sample(uv: Node): Node;
}

export default SampleNode;

export const sample: (callback: (uv: Node) => Node, uv?: Node | null) => ShaderNodeObject<SampleNode>;
