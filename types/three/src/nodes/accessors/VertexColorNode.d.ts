import AttributeNode from "../core/AttributeNode.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";

export default class VertexColorNode extends AttributeNode {
    readonly isVertexColorNode: true;

    index: number;

    constructor(index: number);
}

export const vertexColor: (index?: number) => ShaderNodeObject<VertexColorNode>;
