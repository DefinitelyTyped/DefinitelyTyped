import { Color, Material, Mesh, MeshStandardNodeMaterial, Node } from "three/webgpu";

export interface TreeGeneratorParameters {
    seed: number;
    levels: number;
    children: number[];
    branchAngle: number[];
    angleVariance: number;
    lengthRatio: number;
    trunkLength: number;
    trunkRadius: number;
    taper: number;
    taperCurve: number;
    rootFlare: number;
    flareFrac: number;
    radiusExponent: number;
    minRadius: number;
    minLength: number;
    droop: number;
    upPull: number;
    gnarl: number[];
    radialSegments: number;
    sectionLength: number;
    childStart: number;
    trunkClear: number;
}

/**
 * Grows a procedural tree skeleton — trunk, branches and twigs, each swept as a tapered
 * tube — and bakes it into one non-indexed {@link BufferGeometry} (position and normal
 * only), ready to instance into a forest. It produces *branches only*; add foliage as a
 * separate layer.
 *
 * The branching is deterministic for a given `seed`: a recursive sweep lays down gently
 * curved tubes with a parallel-transport frame (so they never twist), forking by the
 * pipe model (each child much thinner than its parent), spreading children along the
 * upper part of each branch with a golden-angle roll, and pulling them back up toward
 * the light. A flared root, non-linear taper and gravity droop fill in the character.
 *
 * Parameters are set with a fluent builder: a `set<Param>()` exists for every default
 * ( `setSeed`, `setLevels`, `setChildren`, … ), each returning `this` for chaining.
 *
 * Each `build()` returns a fresh, independent mesh that the caller owns, so one
 * generator can be re-parametrized and built repeatedly to grow a varied stand:
 *
 * ```js
 * const generator = new TreeGenerator( material );
 * const oak = generator.setSeed( 1 ).setLevels( 4 ).build();
 * const pine = generator.setSeed( 2 ).setLevels( 5 ).build();
 * ```
 */
export class TreeGenerator {
    constructor(material?: Material | null);

    material: Material | null;
    parameters: Partial<TreeGeneratorParameters>;

    build(): Mesh;

    static defaults: TreeGeneratorParameters;

    setSeed: (seed: number) => this;
    setLevels: (levels: number) => this;
    setChildren: (children: number[]) => this;
    setBranchAngle: (branchAngle: number[]) => this;
    setAngleVariance: (angleVariance: number) => this;
    setLengthRatio: (lengthRatio: number) => this;
    setTrunkLength: (trunkLength: number) => this;
    setTrunkRadius: (trunkRadius: number) => this;
    setTaper: (taper: number) => this;
    setTaperCurve: (taperCurve: number) => this;
    setRootFlare: (rootFlare: number) => this;
    setFlareFrac: (flareFrac: number) => this;
    setRadiusExponent: (radiusExponent: number) => this;
    setMinRadius: (minRadius: number) => this;
    setMinLength: (minLength: number) => this;
    setDroop: (droop: number) => this;
    setUpPull: (upPull: number) => this;
    setGnarl: (gnarl: number[]) => this;
    setRadialSegments: (radialSegments: number) => this;
    setSectionLength: (sectionLength: number) => this;
    setChildStart: (childStart: number) => this;
    setTrunkClear: (trunkClear: number) => this;
}

export interface TreeMaterialParameters {
    barkColor?: Color | number | Node<"color"> | undefined;
}

/**
 * A simple bark material for a {@link TreeGenerator} mesh: a low-saturation brown with a
 * faint, vertically-stretched grain, so trunks read near-black against bright fog.
 *
 * @param {Object} [parameters] - `barkColor` ( a hex, THREE.Color or TSL node ).
 * @return {MeshStandardNodeMaterial}
 */
export function createTreeMaterial(parameters?: TreeMaterialParameters): MeshStandardNodeMaterial;
