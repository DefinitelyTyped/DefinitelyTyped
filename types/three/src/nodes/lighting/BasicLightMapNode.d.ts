import Node from "../core/Node.js";
import LightingNode from "./LightingNode.js";

declare class BasicLightMapNode extends LightingNode {
    constructor(lightMapNode?: Node | null);
}

export default BasicLightMapNode;
