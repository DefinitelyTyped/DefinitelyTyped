import { Node, TempNode, TextureNode, UniformNode } from "three/webgpu";

declare class BloomNode extends TempNode<"vec4"> {
    inputNode: Node<"vec4">;
    strength: UniformNode<"float", number>;
    radius: UniformNode<"float", number>;
    threshold: UniformNode<"float", number>;

    smoothWidth: UniformNode<"float", number>;

    highPassFn: (
        params: {
            input: Node<"vec4">;
            threshold: UniformNode<"float", number>;
            smoothWidth: UniformNode<"float", number>;
        },
    ) => void;

    constructor(
        inputNode: Node,
        strength?: UniformNode<"float", number> | number,
        radius?: UniformNode<"float", number> | number,
        threshold?: UniformNode<"float", number> | number,
    );

    getTexture(): TextureNode;

    setResolutionScale(resolutionScale: number): this;

    getResolutionScale(): number;

    setSize(width: number, height: number): void;
}

export const bloom: (
    node: Node<"vec4">,
    strength?: UniformNode<"float", number> | number,
    radius?: UniformNode<"float", number> | number,
    threshold?: UniformNode<"float", number> | number,
) => BloomNode;

export default BloomNode;
