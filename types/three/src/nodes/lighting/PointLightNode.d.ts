import { PointLight } from "../../lights/PointLight.js";
import Node from "../core/Node.js";
import { NodeRepresentation, ShaderNodeObject } from "../tsl/TSLCore.js";
import AnalyticLightNode from "./AnalyticLightNode.js";

export const directPointLight: (
    color: NodeRepresentation,
    lightViewPosition: NodeRepresentation,
    cutoffDistance: NodeRepresentation,
    decayExponent: NodeRepresentation,
) => ShaderNodeObject<Node>;

declare class PointLightNode extends AnalyticLightNode<PointLight> {
    cutoffDistanceNode: Node;
    decayExponentNode: Node;

    constructor(light?: PointLight | null);
}

export default PointLightNode;
