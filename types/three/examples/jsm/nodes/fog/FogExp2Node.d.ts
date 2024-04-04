import Node from "../core/Node.js";
import { ShaderNodeObject } from "../shadernode/ShaderNode.js";
import FogNode from "./FogNode.js";

export default class FogExp2Node extends FogNode {
    isFogExp2Node: true;
    densityNode: Node;

    constructor(colorNode: Node, densityNode: Node);
}

export const densityFog: (colorNode: Node, densityNode: Node) => ShaderNodeObject<FogExp2Node>;

declare module "../shadernode/ShaderNode.js" {
    interface NodeElements {
        densityFog: typeof densityFog;
    }
}
