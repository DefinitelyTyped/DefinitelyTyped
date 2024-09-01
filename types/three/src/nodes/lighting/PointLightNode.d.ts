import { PointLight } from "../../lights/PointLight.js";
import Node from "../core/Node.js";
import AnalyticLightNode from "./AnalyticLightNode.js";

export default class PointLightNode extends AnalyticLightNode<PointLight> {
    cutoffDistanceNode: Node;
    decayExponentNode: Node;

    constructor(light?: PointLight | null);
}
