import { Texture } from "../../textures/Texture.js";
import Node from "../core/Node.js";

declare class PMREMNode extends Node<"vec3"> {
    uvNode: Node | null;
    levelNode: Node | null;

    constructor(value: Texture, uvNode?: Node | null, levelNode?: Node | null);

    set value(value: Texture);
    get value(): Texture;
}

export default PMREMNode;

export const pmremTexture: (
    value: Texture,
    uvNode?: Node | null,
    levelNode?: Node | number | null,
) => PMREMNode;
