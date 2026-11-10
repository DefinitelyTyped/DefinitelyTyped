import { Node, TextureNode } from "three/webgpu";

declare class FSR1Node extends Node<"vec4"> {
    textureNode: TextureNode;
    sharpness: Node<"float">;
    denoise: Node<"bool">;

    constructor(textureNode: TextureNode, sharpness?: Node<"float"> | number, denoise?: Node<"bool"> | boolean);
}

export default FSR1Node;

export const fsr1: (
    node: Node<"vec4">,
    sharpness?: Node<"float"> | number,
    denoise?: Node<"bool"> | boolean,
) => FSR1Node;
