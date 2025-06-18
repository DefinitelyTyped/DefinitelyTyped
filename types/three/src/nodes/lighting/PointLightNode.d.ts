import { PointLight } from "../../lights/PointLight.js";
import Node from "../core/Node.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";
import AnalyticLightNode from "./AnalyticLightNode.js";
import { DirectLightData } from "./LightsNode.js";
import PointShadowNode from "./PointShadowNode.js";

export const directPointLight: (params: {
    color: ShaderNodeObject<Node>;
    lightViewPosition: ShaderNodeObject<Node>;
    cutoffDistance: ShaderNodeObject<Node>;
    decayExponent: ShaderNodeObject<Node>;
}) => DirectLightData;

declare class PointLightNode extends AnalyticLightNode<PointLight> {
    cutoffDistanceNode: Node;
    decayExponentNode: Node;

    constructor(light?: PointLight | null);

    setupShadowNode(): ShaderNodeObject<PointShadowNode>;
}

export default PointLightNode;
