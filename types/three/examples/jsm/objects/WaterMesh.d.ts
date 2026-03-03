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
    alpha: UniformNode<"float", number>;
    size: UniformNode<"float", number>;
    sunColor: UniformNode<"color", Color>;
    sunDirection: UniformNode<"vec3", Vector3>;
    waterColor: UniformNode<"color", Color>;
    distortionScale: UniformNode<"float", number>;

    constructor(geometry: BufferGeometry, options: WaterMeshOptions);
}

export { WaterMesh };
