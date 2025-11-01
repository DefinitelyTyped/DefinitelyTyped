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
    alpha: UniformNode<number>;
    size: UniformNode<number>;
    sunColor: UniformNode<Color>;
    sunDirection: UniformNode<Vector3>;
    waterColor: UniformNode<Color>;
    distortionScale: UniformNode<number>;

    constructor(geometry: BufferGeometry, options: WaterMeshOptions);
}

export { WaterMesh };
