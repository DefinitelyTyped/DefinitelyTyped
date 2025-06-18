import {
    BufferGeometry,
    Color,
    ColorRepresentation,
    Mesh,
    NodeMaterial,
    TempNode,
    Texture,
    TextureNode,
    UniformNode,
    Vector2,
    Vector3,
} from "three/webgpu";

export interface WaterMeshOptions {
    normalMap0: Texture;
    normalMap1: Texture;
    flowMap?: Texture | null | undefined;

    color?: ColorRepresentation | undefined;
    flowDirection?: Vector2 | undefined;
    flowSpeed?: number | undefined;
    reflectivity?: number | undefined;
    scale?: number | undefined;
}

declare class WaterMesh extends Mesh<BufferGeometry, NodeMaterial> {
    readonly isWater: true;

    constructor(geometry: BufferGeometry, options: WaterMeshOptions);
}

declare class WaterNode extends TempNode {
    waterBody: WaterMesh;

    normalMap0: TextureNode;
    normalMap1: TextureNode;
    flowMap: TextureNode;

    color: UniformNode<Color>;
    flowDirection: UniformNode<Vector2>;
    flowSpeed: UniformNode<number>;
    reflectivity: UniformNode<number>;
    scale: UniformNode<number>;
    flowConfig: UniformNode<Vector3>;

    constructor(options: WaterMeshOptions, waterBody: WaterMesh);

    updateFlow(delta: number): void;
}

export { WaterMesh };
export type { WaterNode };
