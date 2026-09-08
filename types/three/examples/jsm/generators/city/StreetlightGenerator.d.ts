import { InstancedMeshGenerator } from "./InstancedMeshGenerator.js";

export interface StreetlightGeneratorParameters {
    height: number;
    reach: number;
    radius: number;
}

/**
 * A NYC cobra-head streetlight: a tall tapered mast standing at the curb with a
 * curved arm reaching out over the roadway to a drop luminaire. Built once and
 * instanced across a list of placements, dressed with one cheap material that
 * branches on a baked `partId` ( dark metal pole, pale lamp lens ).
 *
 * The canonical model stands on `y = 0`, centred in X / Z, with the arm reaching
 * toward `+Z`, so a placement whose local `+Z` faces the road throws the lamp
 * over it.
 *
 * ```js
 * const lights = new StreetlightGenerator();
 * scene.add( lights.build( placements ) ); // placements: Matrix4[]
 * ```
 */
export class StreetlightGenerator extends InstancedMeshGenerator<StreetlightGeneratorParameters> {
    constructor(parameters?: Partial<StreetlightGeneratorParameters>);

    static defaults: StreetlightGeneratorParameters;
}
