import { Texture } from "../../textures/Texture.js";
import Node from "../core/Node.js";
import TempNode from "../core/TempNode.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";

declare class PMREMNode extends TempNode {
    uvNode: Node | null;
    levelNode: Node | null;

    constructor(value: Texture, uvNode?: Node | null, levelNode?: Node | null);

    set value(value: Texture);
    get value(): Texture;
}

export default PMREMNode;

export const pmremTexture: (
    value: Texture,
    uvNode?: Node,
    levelNode?: Node,
) => ShaderNodeObject<PMREMNode>;
