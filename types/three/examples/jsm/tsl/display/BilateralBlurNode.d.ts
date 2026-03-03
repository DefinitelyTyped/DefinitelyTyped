import { Node, TempNode, TextureNode } from "three/webgpu";

declare class BilateralBlurNode extends TempNode<"vec4"> {
    textureNode: TextureNode;
    directionNode: Node<"vec2"> | Node<"float"> | null;
    sigma: number;
    sigmaColor: number;

    constructor(
        textureNode: TextureNode,
        directionNode?: Node<"vec2"> | Node<"float"> | null,
        sigma?: number,
        sigmaColor?: number,
    );

    setSize(width: number, height: number): void;
    getTextureNode(): TextureNode;
}

export default BilateralBlurNode;

export const bilateralBlur: (
    node: Node<"vec4">,
    directionNode?: Node<"vec2"> | Node<"float">,
    sigma?: number,
    sigmaColor?: number,
) => BilateralBlurNode;
