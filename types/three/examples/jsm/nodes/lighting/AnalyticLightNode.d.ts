import { Light } from "../../../../src/Three.js";
import Node from "../core/Node.js";
import LightingNode from "./LightingNode.js";

export default class AnalyticLightNode<T extends Light> extends LightingNode {
    light: T | null;
    colorNode: Node;

    constructor(light?: T | null);
}
