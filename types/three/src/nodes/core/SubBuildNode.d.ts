import { ShaderNodeObject } from "../tsl/TSLCore.js";
import Node from "./Node.js";

declare class SubBuildNode extends Node {
    node: Node;
    name: string;

    readonly isSubBuildNode: true;

    constructor(node: Node, name: string, nodeType?: string | null);
}

export default SubBuildNode;

export const subBuild: (node: Node, name: string, type?: string | null) => ShaderNodeObject<SubBuildNode>;
