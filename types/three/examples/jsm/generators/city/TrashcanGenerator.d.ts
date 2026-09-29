import { InstancedMeshGenerator } from "./InstancedMeshGenerator.js";

export interface TrashcanGeneratorParameters {
    radius: number;
    height: number;
}

/**
 * The NYC green wire-mesh litter basket: a slightly tapered drum with a heavy top
 * rim, a foot ring and a dark bag of trash inside. Built once and instanced across
 * a list of placements; one cheap material branches on a baked `partId`, drawing
 * the mesh weave procedurally from the drum's own UVs so no alpha or extra geometry
 * is needed. Canonical model stands on `y = 0`, centred in X / Z.
 *
 * ```js
 * const cans = new TrashcanGenerator();
 * scene.add( cans.build( placements ) ); // placements: Matrix4[]
 * ```
 */
export class TrashcanGenerator extends InstancedMeshGenerator<TrashcanGeneratorParameters> {
    constructor(parameters?: Partial<TrashcanGeneratorParameters>);

    static defaults: TrashcanGeneratorParameters;
}
