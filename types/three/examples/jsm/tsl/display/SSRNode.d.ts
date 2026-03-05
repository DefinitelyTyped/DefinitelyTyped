import { Camera, Node, TempNode, TextureNode, UniformNode } from "three/webgpu";

declare class SSRNode extends TempNode<"vec4"> {
    colorNode: Node;
    depthNode: Node;
    normalNode: Node;
    metalnessNode: Node;
    roughnessNode: Node | null;
    camera: Camera | null;

    resolutionScale: number;

    maxDistance: UniformNode<"float", number>;
    thickness: UniformNode<"float", number>;
    opacity: UniformNode<"float", number>;
    quality: UniformNode<"float", number>;
    blurQuality: UniformNode<"float", number>;

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
