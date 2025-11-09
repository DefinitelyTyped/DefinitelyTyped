import { ShaderNodeObject } from "three/tsl";
import { Camera, Node, TempNode, TextureNode, UniformNode } from "three/webgpu";

declare class SSRNode extends TempNode {
    colorNode: ShaderNodeObject<Node>;
    depthNode: ShaderNodeObject<Node>;
    normalNode: ShaderNodeObject<Node>;
    metalnessNode: ShaderNodeObject<Node>;
    camera: Camera;

    resolutionScale: number;

    maxDistance: UniformNode<number>;
    thickness: UniformNode<number>;
    opacity: UniformNode<number>;

    constructor(
        colorNode: ShaderNodeObject<Node>,
        depthNode: ShaderNodeObject<Node>,
        normalNode: ShaderNodeObject<Node>,
        metalnessNode: ShaderNodeObject<Node>,
        camera: Camera,
    );

    getTextureNode(): ShaderNodeObject<TextureNode>;

    setSize(width: number, height: number): void;
}

export default SSRNode;

export const ssr: (
    colorNode: Node,
    depthNode: Node,
    normalNode: Node,
    metalnessNode: Node,
    camera: Camera,
) => ShaderNodeObject<SSRNode>;
