import Node from "../core/Node.js";
import LightingNode from "./LightingNode.js";

declare class BasicEnvironmentNode extends LightingNode {
    envNode: Node | null;

    constructor(envNode?: Node | null);
}

export default BasicEnvironmentNode;
