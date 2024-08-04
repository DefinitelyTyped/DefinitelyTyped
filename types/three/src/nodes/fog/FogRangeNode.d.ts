import Node from "../core/Node.js";
import { NodeRepresentation, ShaderNodeObject } from "../shadernode/ShaderNode.js";
import FogNode from "./FogNode.js";

export default class FogRangeNode extends FogNode {
    isFogRangeNode: true;
    nearNode: Node | null;
    farNode: Node | null;

    constructor(colorNode: Node | null, nearNode: Node | null, farNode: Node | null);
}

export const rangeFog: (
    colorNode: NodeRepresentation | null,
    nearNode: NodeRepresentation | null,
    farNode: NodeRepresentation | null,
) => ShaderNodeObject<FogRangeNode>;

declare module "../shadernode/ShaderNode.js" {
    interface NodeElements {
        rangeFog: typeof rangeFog;
    }
}
