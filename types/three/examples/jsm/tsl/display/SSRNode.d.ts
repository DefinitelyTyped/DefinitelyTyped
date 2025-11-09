import { Camera, Node, TempNode, TextureNode, UniformNode } from "three/webgpu";

declare class SSRNode extends TempNode {
    colorNode: Node;
    depthNode: Node;
    normalNode: Node;
    metalnessNode: Node;
    roughnessNode: Node | null;
    camera: Camera | null;

    resolutionScale: number;

    maxDistance: UniformNode<number>;
    thickness: UniformNode<number>;
    opacity: UniformNode<number>;
    quality: UniformNode<number>;
    blurQuality: UniformNode<number>;

    constructor(
        colorNode: Node,
        depthNode: Node,
        normalNode: Node,
        metalnessNode: Node,
        roughnessNode?: Node | null,
        camera?: Camera | null,
    );

    getTextureNode(): TextureNode;

    setSize(width: number, height: number): void;
}

export default SSRNode;

export const ssr: (
    colorNode: Node,
    depthNode: Node,
    normalNode: Node,
    metalnessNode: Node,
    roughnessNode?: Node | null,
    camera?: Camera | null,
) => SSRNode;
