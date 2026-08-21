import { Node, TempNode, TextureNode } from "three/webgpu";

declare class SharpenNode extends TempNode<"vec4"> {
    readonly isSharpenNode: boolean;

    textureNode: TextureNode;
    sharpness: Node<"float">;
    denoise: Node<"bool">;

    constructor(textureNode: TextureNode, sharpness?: Node<"float"> | number, denoise?: Node<"bool"> | boolean);

    setSize(width: number, height: number): void;
    getTextureNode(): TextureNode;
}

export default SharpenNode;

export const sharpen: (
    node: Node<"vec4">,
    sharpness?: Node<"float"> | number,
    denoise?: Node<"bool"> | boolean,
) => SharpenNode;
