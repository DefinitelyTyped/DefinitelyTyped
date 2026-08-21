import { Camera, DirectionalLight, TempNode, TextureNode, UniformNode } from "three/webgpu";

declare class SSSNode extends TempNode<"float"> {
    depthNode: TextureNode;

    maxDistance: UniformNode<"float", number>;
    thickness: UniformNode<"float", number>;
    shadowIntensity: UniformNode<"float", number>;
    quality: UniformNode<"float", number>;
    resolutionScale: number;
    useTemporalFiltering: boolean;

    constructor(depthNode: TextureNode, camera: Camera, mainLight: DirectionalLight);

    getTextureNode(): TextureNode;
}

export default SSSNode;

export const sss: (depthNode: TextureNode, camera: Camera, mainLight: DirectionalLight) => SSSNode;
