import { Texture } from "three";
import Node from "../core/Node.js";
import TempNode from "../core/TempNode.js";
import { NodeRepresentation, ShaderNodeObject } from "../shadernode/ShaderNode.js";

export default class PMREMNode extends TempNode {
    uvNode: Node | null;
    levelNode: Node | null;

    constructor(value: Texture, uvNode?: Node | null, levelNode?: Node | null);

    set value(value: Texture);
    get value(): Texture;
}

export const pmremTexture: (
    value: Texture,
    uvNode?: NodeRepresentation,
    levelNode?: NodeRepresentation,
) => ShaderNodeObject<PMREMNode>;
