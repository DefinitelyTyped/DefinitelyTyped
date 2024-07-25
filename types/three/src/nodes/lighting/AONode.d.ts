import Node from "../core/Node.js";
import LightingNode from "./LightingNode.js";

export default class AONode extends LightingNode {
    aoNode: Node | null;

    constructor(aoNode?: Node | null);
}
