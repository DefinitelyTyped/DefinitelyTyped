import { NormalMapTypes } from "three";
import Node from "../core/Node.js";
import TempNode from "../core/TempNode.js";
import MathNode from "../math/MathNode.js";
import { ShaderNodeObject } from "../shadernode/ShaderNode.js";

export default class NormalMapNode extends TempNode {
    node: Node;
    scaleNode: Node | null;

    normalMapType: NormalMapTypes;

    constructor(node: Node, scaleNode?: Node | null);
}

export const normalMap: (node: Node, scaleNode?: Node) => ShaderNodeObject<NormalMapNode>;

declare module "../shadernode/ShaderNode.js" {
    interface NodeElements {
        normalMap: typeof normalMap;
    }
}
