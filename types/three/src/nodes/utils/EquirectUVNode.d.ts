import { Node, TempNode } from "../Nodes.js";
import { NodeRepresentation, ShaderNodeObject } from "../tsl/TSLCore.js";

export default class EquirectUVNode extends TempNode {
    constructor(dirNode?: ShaderNodeObject<Node>);
}

export const equirectUV: (dirNode?: NodeRepresentation) => ShaderNodeObject<EquirectUVNode>;
