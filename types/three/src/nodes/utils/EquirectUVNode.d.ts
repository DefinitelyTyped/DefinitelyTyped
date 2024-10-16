import { Node, TempNode } from "../Nodes.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";

export default class EquirectUVNode extends TempNode {
    constructor(dirNode?: ShaderNodeObject<Node>);
}

export const equirectUV: ShaderNodeObject<EquirectUVNode>;
