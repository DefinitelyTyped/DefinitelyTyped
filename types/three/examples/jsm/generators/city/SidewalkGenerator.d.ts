import { Group, Matrix4, MeshStandardNodeMaterial } from "three/webgpu";

export interface SidewalkGeneratorParameters {
    width: number;
    depth: number;
    height: number;
    radius: number;
    curbWidth: number;
    curbLip: number;
}

/**
 * Generates the raised sidewalk for a city's blocks: per block, a rounded-corner concrete
 * slab rimmed by a distinct granite kerbstone that stands proud of the walking surface and
 * drops to the road. Instanced across a list of placements and dressed with its own
 * procedural material ( poured concrete flags, scored expansion joints, granite curb ).
 * Returns a `THREE.Group` of two instanced meshes — the walking slab and the curb.
 *
 * Unlike the building generator, this one owns its materials: the slab and curb
 * geometry and the TSL that shades them live together here.
 *
 * ```js
 * const sidewalk = new SidewalkGenerator( { width: 90, depth: 60, height: 0.5 } );
 * scene.add( sidewalk.build( placements ) ); // placements: Matrix4[]
 * ```
 */
export class SidewalkGenerator {
    constructor(parameters?: Partial<SidewalkGeneratorParameters>);

    parameters: SidewalkGeneratorParameters;

    material: MeshStandardNodeMaterial | null;
    curbMaterial: MeshStandardNodeMaterial | null;
    mesh: Group | null;

    build(placements: Matrix4[]): Group;
    dispose(): void;

    static defaults: SidewalkGeneratorParameters;
}
