import { BufferGeometry, Group, MeshStandardNodeMaterial, UniformNode } from "three/webgpu";

export interface TerrainGeneratorParameters {
    seed: number;
    size: number;
    segments: number;
    heightScale: number;
    frequency: number;
    octaves: number;
    lacunarity: number;
    gain: number;
    erosion: number;
    warp: number;
    valleyBias: number;
    seaLevel: number;
    talus: number;
    talusPasses: number;
}

/**
 * Bakes a procedural mountain range into a single mesh, returned in a `THREE.Group`.
 * Domain-warped, derivative-damped noise shapes the ridges; thermal erosion relaxes
 * steep slopes. A TSL material shades grass, rock and snow from altitude and slope.
 *
 * The baked grid is available through {@link TerrainGenerator#sampleHeight} for
 * placing a forest or other objects on the terrain.
 *
 * ```js
 * const terrain = new TerrainGenerator( { seed: 1 } );
 * scene.add( terrain.build() );
 * ```
 */
export class TerrainGenerator {
    constructor(parameters?: Partial<TerrainGeneratorParameters>);

    parameters: TerrainGeneratorParameters;

    minHeight: UniformNode<"float", number>;
    maxHeight: UniformNode<"float", number>;

    material: MeshStandardNodeMaterial;
    geometry: BufferGeometry | null;
    group: Group | null;

    heights?: Float32Array;
    gridSize?: number;
    minY?: number;
    maxY?: number;

    build(): Group;

    sampleHeight(x: number, z: number): number;
    sampleSlope(x: number, z: number): number;
    dispose(): void;

    static defaults: TerrainGeneratorParameters;
}
