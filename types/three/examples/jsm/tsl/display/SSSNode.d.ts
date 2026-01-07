import { Camera, DirectionalLight, TempNode, TextureNode, UniformNode } from "three/webgpu";

declare class SSSNode extends TempNode {
    depthNode: TextureNode;

    maxDistance: UniformNode<number>;
    thickness: UniformNode<number>;
    shadowIntensity: UniformNode<number>;
    quality: UniformNode<number>;
    resolutionScale: number;
    useTemporalFiltering: boolean;

    constructor(depthNode: TextureNode, camera: Camera, mainLight: DirectionalLight);

    getTextureNode(): TextureNode;
}

export default SSSNode;

export const sss: (depthNode: TextureNode, camera: Camera, mainLight: DirectionalLight) => SSSNode;
