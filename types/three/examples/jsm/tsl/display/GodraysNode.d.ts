import { Camera, DirectionalLight, PointLight, TempNode, TextureNode, UniformNode } from "three/webgpu";

declare class GodraysNode extends TempNode<"vec4"> {
    depthNode: TextureNode;

    raymarchSteps: UniformNode<"uint", number>;
    density: UniformNode<"float", number>;
    maxDensity: UniformNode<"float", number>;
    distanceAttenuation: UniformNode<"float", number>;
    resolutionScale: number;

    constructor(depthNode: TextureNode, camera: Camera, light: DirectionalLight | PointLight);

    getTextureNode(): TextureNode;
    setSize(width: number, height: number): void;
}

export default GodraysNode;

export const godrays: (depthNode: TextureNode, camera: Camera, light: DirectionalLight | PointLight) => GodraysNode;
