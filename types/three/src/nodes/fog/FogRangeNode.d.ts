import Node from "../core/Node.js";
import { NodeRepresentation, ShaderNodeObject } from "../tsl/TSLCore.js";
import FogNode from "./FogNode.js";

declare class FogRangeNode extends FogNode {
    isFogRangeNode: true;
    nearNode: Node | null;
    farNode: Node | null;

    constructor(colorNode: Node | null, nearNode: Node | null, farNode: Node | null);
}

export default FogRangeNode;

export const rangeFog: (
    colorNode: NodeRepresentation | null,
    nearNode: NodeRepresentation | null,
    farNode: NodeRepresentation | null,
) => ShaderNodeObject<FogRangeNode>;
