import AttributeNode from "../core/AttributeNode.js";

export default class VertexColorNode extends AttributeNode<"vec4"> {
    readonly isVertexColorNode: true;

    index: number;

    constructor(index: number);
}

export const vertexColor: (index?: number) => VertexColorNode;
