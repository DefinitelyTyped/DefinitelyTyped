import { Camera, DirectionalLight, Node, TextureNode, UniformNode } from "three/webgpu";

declare class SSSNode extends Node<"float"> {
    depthNode: TextureNode;

    maxDistance: UniformNode<"float">;
    thickness: UniformNode<"float">;
    shadowIntensity: UniformNode<"float">;
    quality: UniformNode<"float">;
    resolutionScale: number;
    useTemporalFiltering: boolean;

    constructor(depthNode: TextureNode, camera: Camera, mainLight: DirectionalLight);

    getTextureNode(): TextureNode;
}

export default SSSNode;

export const sss: (depthNode: TextureNode, camera: Camera, mainLight: DirectionalLight) => SSSNode;
