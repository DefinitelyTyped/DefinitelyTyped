import { PointLight } from "../../lights/PointLight.js";
import Node from "../core/Node.js";
import AnalyticLightNode from "./AnalyticLightNode.js";
import { DirectLightData } from "./LightsNode.js";
import PointShadowNode from "./PointShadowNode.js";

export const directPointLight: (params: {
    color: Node;
    lightViewPosition: Node;
    cutoffDistance: Node;
    decayExponent: Node;
}) => DirectLightData;

declare class PointLightNode extends AnalyticLightNode<PointLight> {
    cutoffDistanceNode: Node;
    decayExponentNode: Node;

    constructor(light?: PointLight | null);

    setupShadowNode(): PointShadowNode;
}

export default PointLightNode;
