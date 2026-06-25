import { Color, Material, Mesh, MeshStandardNodeMaterial, Node } from "three/webgpu";

export interface SkyscraperGeneratorDefaultParameters {
    seed: number;
    totalHeight: number;
    floorHeight: number;
    bayWidth: number;
    stringCourseEvery: number;
    chamferWidth: number;
    chamferCornerX: number;
    chamferCornerZ: number;
    setbackDepth: number;
    acChance: number;
}

export interface SkyscraperGeneratorParameters extends SkyscraperGeneratorDefaultParameters {
    footprint: { width: number; depth: number };
    tierFractions: { base: number; crown: number };
    pierWidth: number;
    pierDepth: number;
    windowReveal: number;
    stringCourseHeight: number;
    archBayWidthRatio: number;
    archRise: number;
}

/**
 * Generates intricate, tripartite "Beaux-Arts / Neo-Gothic" terracotta
 * skyscrapers from a small set of parameters.
 *
 * The mass is read as a footprint polygon (a rectangle with one chamfered
 * corner) split into vertical faces, each split into three tiers — a tall
 * arcaded base, a repeating shaft and an ornate crown — then into floors and
 * bays. A handful of authored pieces (a pier, a window, a cornice profile, a
 * gothic arch) are instanced across the whole tower, then baked — together with
 * the bespoke base arcade — into a single non-indexed BufferGeometry tagged with
 * a per-vertex `partId` ({@link PartId}) so one material can shade every zone.
 *
 * The generator is material agnostic — it only produces geometry. Pass a single
 * material (e.g. a TSL node material that branches on `partId`) to dress it.
 *
 * ```js
 * const generator = new SkyscraperGenerator( { seed: 35, totalHeight: 140 }, material );
 * scene.add( generator.build() ); // a single Mesh
 * ```
 */
export class SkyscraperGenerator {
    constructor(parameters?: Partial<SkyscraperGeneratorParameters>, material?: Material);

    parameters: Partial<SkyscraperGeneratorParameters>;
    material: Material;

    mesh: Mesh | null;

    setParameters(parameters: Partial<SkyscraperGeneratorParameters>): this;
    build(): Mesh;
    rebuild(): Mesh;
    dispose(): void;

    static defaults: SkyscraperGeneratorDefaultParameters;
}

/**
 * The facade material: a single MeshStandardNodeMaterial that reads the baked
 * per-vertex `partId` and reproduces every zone — procedural terracotta brickwork
 * on the walls and piers, smooth dressed stone on the window frames and ornament,
 * dark glazing, and grey AC units — all dressed with world-space
 * weathering. One material covers the whole building ( and a whole city ), which is
 * what makes it compute-rasterizer friendly. `buildingBase` is the tower's flat
 * masonry colour as a TSL node: pass a `uniform( Color )` for a single tower, or a
 * per-fragment palette pick for a city, so the same material dresses both.
 */
export function createSkyscraperMaterial(buildingBase?: Node<"color"> | Color): MeshStandardNodeMaterial;

/**
 * The NYC masonry palette every tower is dressed from ( hex colours ): limestone-dominant
 * with terracotta accents. Shared by the single-tower example and {@link CityGenerator}'s
 * building material so both stay in sync.
 */
export const buildingPalette: number[];

/** Picks one {@link buildingPalette} colour ( a hex number ) for a tower from its seed. */
export function pickBuildingColor(seed: number): number;
