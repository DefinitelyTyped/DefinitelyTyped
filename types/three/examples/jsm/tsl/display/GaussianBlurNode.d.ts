import { Node, TempNode, TextureNode, Vector2 } from "three/webgpu";

export interface GaussianBlurNodeOptions {
    premultipliedAlpha?: boolean | undefined;
    resolution?: Vector2 | undefined;
}

declare class GaussianBlurNode extends TempNode {
    textureNode: TextureNode;
    directionNode: Node | null;
    sigma: number;

    resolutionScale: number;

    premultipliedAlpha: boolean;

    constructor(
        textureNode: TextureNode,
        directionNode?: Node | null,
        sigma?: number,
        options?: GaussianBlurNodeOptions,
    );

    setSize(width: number, height: number): void;

    getTextureNode(): TextureNode;

    /**
     * @deprecated The "resolution" property has been renamed to "resolutionScale" and is now of type `number`.
     */
    get resolution(): Vector2;
    /**
     * @deprecated The "resolution" property has been renamed to "resolutionScale" and is now of type `number`.
     */
    set resolution(value: Vector2);
}

export default GaussianBlurNode;

export const gaussianBlur: (
    node: Node,
    directionNode?: Node | number | null,
    sigma?: number,
    options?: GaussianBlurNodeOptions,
) => GaussianBlurNode;

/**
 * @deprecated "premultipliedGaussianBlur()" is deprecated. Use "gaussianBlur()" with "premultipliedAlpha: true" option instead.
 */
export const premultipliedGaussianBlur: (
    node: Node,
    directionNode?: Node | number | null,
    sigma?: number,
) => GaussianBlurNode;
