import { SpotLight } from "../../../../src/Three.js";
import Node from "../core/Node.js";
import AnalyticLightNode from "./AnalyticLightNode.js";

export default class PointLightNode extends AnalyticLightNode<SpotLight> {
    directionNode: Node;

    coneCosNode: Node;
    penumbraCosNode: Node;

    cutoffDistanceNode: Node;
    decayExponentNode: Node;

    constructor(light?: SpotLight | null);
}
