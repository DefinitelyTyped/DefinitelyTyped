import { HemisphereLight } from "../../lights/HemisphereLight.js";
import Object3DNode from "../accessors/Object3DNode.js";
import Node from "../core/Node.js";
import AnalyticLightNode from "./AnalyticLightNode.js";

export default class HemisphereLightNode extends AnalyticLightNode<HemisphereLight> {
    lightPositionNode: Object3DNode;
    lightDirectionNode: Node;

    groundColorNode: Node;

    constructor(light?: HemisphereLight | null);
}
