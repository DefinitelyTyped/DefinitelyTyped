import { Camera, DirectionalLight, Node, PointLight, TextureNode, UniformNode } from "three/webgpu";

declare class GodraysNode extends Node<"vec4"> {
    depthNode: TextureNode;

    raymarchSteps: UniformNode<"uint">;
    density: UniformNode<"float">;
    maxDensity: UniformNode<"float">;
    distanceAttenuation: UniformNode<"float">;
    resolutionScale: number;

    constructor(depthNode: TextureNode, camera: Camera, light: DirectionalLight | PointLight);

    getTextureNode(): TextureNode;
    setSize(width: number, height: number): void;
}

export default GodraysNode;

export const godrays: (depthNode: TextureNode, camera: Camera, light: DirectionalLight | PointLight) => GodraysNode;
