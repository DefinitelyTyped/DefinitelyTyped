import { RectAreaLight } from "three";
import Node from "../core/Node.js";
import AnalyticLightNode from "./AnalyticLightNode.js";

export default class RectAreaLightNode extends AnalyticLightNode<RectAreaLight> {
    halfHeight: Node;
    halfWidth: Node;

    constructor(light?: RectAreaLight | null);
}
