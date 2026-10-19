import { Group, InstancedMesh, MeshStandardNodeMaterial, Node, UniformNode, Vector3 } from "three/webgpu";
import { TerrainGenerator } from "./TerrainGenerator.js";

export interface ForestGeneratorParameters {
    seed: number;
    count: number;
    detail: number;
    radius: number;
    height: number;
    distortion: number;
    sink: number;
    altitudeMin: number;
    altitudeMax: number;
    minSlope: number;
    densityFrequency: number;
    minScale: number;
    maxScale: number;
    from: number;
    to: number;
    castShadow: boolean;
}

/**
 * Carpets a {@link TerrainGenerator} with trees in a single instanced draw call.
 * Each tree is a distorted icosphere with a baked crown gradient. Altitude, slope
 * and a density mask control placement; rotation and scale vary between trees.
 *
 * Compatible terrain objects expose `sampleHeight`, `sampleSlope`, `minY`, `maxY`
 * and `parameters.size`.
 *
 * ```js
 * const forest = new ForestGenerator( { count: 500000 } );
 * scene.add( forest.build( terrain ) );
 * ```
 */
export class ForestGenerator {
    constructor(parameters?: Partial<ForestGeneratorParameters>);

    parameters: ForestGeneratorParameters;

    from: UniformNode<"float", number>;
    to: UniformNode<"float", number>;

    material: MeshStandardNodeMaterial;
    mesh: InstancedMesh | null;
    group: Group | null;

    build(terrain: TerrainGenerator): Group;
    setCameraPosition(position: Vector3): void;
    dispose(): void;

    static defaults: ForestGeneratorParameters;
}

/**
 * The single material shared by every tree in a {@link ForestGenerator}. A plain
 * MeshStandardNodeMaterial lit by the scene — only the surface is authored: deep
 * shadowed green in the recesses rising to a bright, yellow-green sunlit crown,
 * mottled into needle clumps by 3D noise, with a matching bump so the clumps catch
 * the light. Half a million instanced blobs makes this mesh vertex-bound, so the
 * regional colour drift is baked to a per-instance attribute ( no shader noise for it ),
 * and the costly clump noise + bump are **gated by distance** — full detail on the near
 * trees ( where it reads ), skipped on the far canopy ( where it is sub-pixel ).
 *
 * @param {Node} from - distance within which every tree is drawn.
 * @param {Node} to - distance past which no tree is drawn.
 * @return {MeshStandardNodeMaterial}
 */
export function createForestMaterial(
    from: Node<"float">,
    to: Node<"float">,
    camPos: Node<"vec3">,
): MeshStandardNodeMaterial;
