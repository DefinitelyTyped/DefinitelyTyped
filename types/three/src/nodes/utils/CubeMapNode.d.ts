import Node from "../core/Node.js";
import TempNode from "../core/TempNode.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";

declare class CubeMapNode extends TempNode {
    envNode: Node;

    constructor(envNode: Node);
}

export default CubeMapNode;

export const cubeMapNode: (envNode: Node) => ShaderNodeObject<CubeMapNode>;
