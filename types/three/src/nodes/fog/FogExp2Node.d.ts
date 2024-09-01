import Node from "../core/Node.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";
import FogNode from "./FogNode.js";

declare class FogExp2Node extends FogNode {
    isFogExp2Node: true;
    densityNode: Node;

    constructor(colorNode: Node, densityNode: Node);
}

export default FogExp2Node;

export const densityFog: (colorNode: Node, densityNode: Node) => ShaderNodeObject<FogExp2Node>;
