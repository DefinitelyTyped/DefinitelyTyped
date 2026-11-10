import { Node, TextureNode, UniformNode, Vector3 } from "three/webgpu";

declare class BloomNode extends Node<"vec4"> {
    inputNode: Node<"vec4">;
    strength: UniformNode<"float">;
    radius: UniformNode<"float">;
    threshold: UniformNode<"float">;

    smoothWidth: UniformNode<"float">;

    bloomTintColors: Vector3[];

    highPassFn: (
        params: {
            input: Node<"vec4">;
            threshold: UniformNode<"float">;
            smoothWidth: UniformNode<"float">;
        },
    ) => void;

    constructor(
        inputNode: Node,
        strength?: UniformNode<"float"> | number,
        radius?: UniformNode<"float"> | number,
        threshold?: UniformNode<"float"> | number,
    );

    getTexture(): TextureNode;

    setResolutionScale(resolutionScale: number): this;

    getResolutionScale(): number;

    setSize(width: number, height: number): void;
}

export const bloom: (
    node: Node<"vec4">,
    strength?: UniformNode<"float"> | number,
    radius?: UniformNode<"float"> | number,
    threshold?: UniformNode<"float"> | number,
) => BloomNode;

export default BloomNode;
