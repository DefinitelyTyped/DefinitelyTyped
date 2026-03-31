import { Mesh } from "../../objects/Mesh.js";
import Node from "../core/Node.js";
import UniformNode from "../core/UniformNode.js";

declare class MorphNode extends Node {
    mesh: Mesh;
    morphBaseInfluence: UniformNode<"float", number>;

    constructor(mesh: Mesh);
}

export default MorphNode;

export const morphReference: (mesh: Mesh) => MorphNode;
