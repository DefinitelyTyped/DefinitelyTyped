import Node from "../core/Node.js";

declare class CubeMapNode extends Node {
    envNode: Node;

    constructor(envNode: Node);
}

export default CubeMapNode;

export const cubeMapNode: (envNode: Node) => CubeMapNode;
