import Node from "../core/Node.js";
import LightingNode from "./LightingNode.js";

export default class IrradianceNode extends LightingNode {
    node: Node | null;

    constructor(node?: Node | null);
}
