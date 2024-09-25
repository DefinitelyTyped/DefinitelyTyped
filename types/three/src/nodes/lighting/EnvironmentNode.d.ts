import Node from "../core/Node.js";
import LightingNode from "./LightingNode.js";

export default class EnvironmentNode extends LightingNode {
    envNode: Node | null;

    constructor(envNode?: Node | null);
}
