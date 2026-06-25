import { Group, Material, MeshStandardNodeMaterial } from "three/webgpu";
import { SidewalkGenerator } from "./city/SidewalkGenerator.js";
import { SkyscraperGenerator } from "./city/SkyscraperGenerator.js";

export interface CityGeneratorParameters {
    seed: number;
    street: number;
    lot: number;
    lotsX: number;
    lotsZ: number;
    blocksX: number;
    blocksZ: number;
    curbHeight: number;
    curbRadius: number;
}

export interface CityGeneratorLayout {
    street: number;
    lot: number;
    lotsX: number;
    lotsZ: number;
    blocksX: number;
    blocksZ: number;
    blockW: number;
    blockD: number;
    cityW: number;
    cityD: number;
}

export interface CityGeneratorMaterials {
    building?: Material | undefined;
}

/**
 * Lays out a grid of city blocks and fills each lot with a {@link SkyscraperGenerator}
 * tower of its own seed, height and footprint, optionally on raised sidewalk
 * slabs (curbs). Returns a `THREE.Group` ready to add to a scene.
 *
 * Pass a building material to dress the towers; the sidewalks dress themselves
 * via {@link SidewalkGenerator}. The layout is exposed as
 * {@link CityGenerator#layout} so the surrounding scene (road markings, etc.)
 * can align to the same grid.
 *
 * ```js
 * const city = new CityGenerator( { seed: 1 } );
 * scene.add( city.build( materials ) );
 * ```
 */
export class CityGenerator {
    constructor(parameters?: Partial<CityGeneratorParameters>);

    parameters: CityGeneratorParameters;
    layout: CityGeneratorLayout;

    generators: SkyscraperGenerator[];
    sidewalk: SidewalkGenerator;
    group: Group | null;

    build(materials?: CityGeneratorMaterials): Group;
    dispose(): void;

    static defaults: CityGeneratorParameters;
}

/**
 * The shared material every tower in a {@link CityGenerator} is dressed with: one flat
 * masonry colour per lot, picked from a palette by hashing the lot's grid cell.
 */
export function createBuildingMaterial(layout: CityGeneratorLayout, seed?: number): MeshStandardNodeMaterial;

/**
 * The road surface: wet asphalt with lane lines and crosswalks aligned to a
 * {@link CityGenerator} layout. Apply it to a ground plane sized to the city.
 */
export function createRoadMaterial(layout: CityGeneratorLayout): MeshStandardNodeMaterial;
