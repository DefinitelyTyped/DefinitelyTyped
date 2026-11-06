import {
    BufferGeometry,
    Color,
    ColorRepresentation,
    Mesh,
    NodeMaterial,
    Texture,
    TextureNode,
    UniformNode,
    Vector3,
} from "three/webgpu";

export interface WaterMeshOptions {
    resolutionScale?: number | undefined;
    waterNormals: Texture;
    alpha?: number | undefined;
    size?: number | undefined;
    sunColor?: ColorRepresentation | undefined;
    sunDirection?: Vector3 | undefined;
    waterColor?: ColorRepresentation | undefined;
    distortionScale?: number | undefined;
}

declare class WaterMesh extends Mesh<BufferGeometry, NodeMaterial> {
    readonly isWater: true;

    resolutionScale: number;

    waterNormals: TextureNode;
    alpha: UniformNode<"float">;
    size: UniformNode<"float">;
    sunColor: UniformNode<"color">;
    sunDirection: UniformNode<"vec3">;
    waterColor: UniformNode<"color">;
    distortionScale: UniformNode<"float">;

    constructor(geometry: BufferGeometry, options: WaterMeshOptions);
}

export { WaterMesh };
