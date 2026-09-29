import { Group, InstancedMesh, Material, MeshStandardNodeMaterial, Node, UniformNode } from "three/webgpu";
import { BenchGenerator } from "./city/BenchGenerator.js";
import { CarGenerator } from "./city/CarGenerator.js";
import { HydrantGenerator } from "./city/HydrantGenerator.js";
import { PersonGenerator } from "./city/PersonGenerator.js";
import { SidewalkGenerator } from "./city/SidewalkGenerator.js";
import { SkyscraperGenerator } from "./city/SkyscraperGenerator.js";
import { StreetlightGenerator } from "./city/StreetlightGenerator.js";
import { StreetTreeGenerator } from "./city/StreetTreeGenerator.js";
import { TrafficlightGenerator } from "./city/TrafficlightGenerator.js";
import { TrashcanGenerator } from "./city/TrashcanGenerator.js";

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
    sidewalkWidth: number;
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
    sidewalkWidth: number;
    innerLotX: number;
    innerLotZ: number;
    cityW: number;
    cityD: number;
}

export interface CityGeneratorMaterials {
    building?: Material | undefined;
}

export interface CityGeneratorFurniture {
    streetlight: StreetlightGenerator;
    trafficlight: TrafficlightGenerator;
    trashcan: TrashcanGenerator;
    bench: BenchGenerator;
    hydrant: HydrantGenerator;
    tree: StreetTreeGenerator;
    car: CarGenerator;
    person: PersonGenerator;
}

export interface CityGeneratorTower {
    x: number;
    y: number;
    z: number;
    w: number;
    h: number;
    d: number;
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

    /**
     * The city seed shared by building and proxy materials. Pass this to
     * {@link createBuildingMaterial} to update the palette when rebuilding.
     */
    seedNode: UniformNode<"uint", number>;

    generators: SkyscraperGenerator[];
    towers: CityGeneratorTower[];
    sidewalk: SidewalkGenerator;
    furniture: CityGeneratorFurniture;
    group: Group | null;

    build(materials?: CityGeneratorMaterials): Group;

    /**
     * Builds a lightweight stand-in for the city: one instanced box per tower,
     * sized to match, in a single draw call. Intended for cheap global-illumination
     * bakes, where the detailed facades and street furniture are unnecessary and the
     * boxes still cast the same street shadows and bounce the same warm fill.
     *
     * Call after {@link CityGenerator#build}, which records the tower boxes.
     */
    buildProxy(): InstancedMesh;

    buildFurniture(random: () => number): Group;

    dispose(): void;

    static defaults: CityGeneratorParameters;
}

/**
 * The shared material every tower in a {@link CityGenerator} is dressed with: the per-lot
 * {@link buildingColorNode} resolved once per vertex on a skyscraper material.
 */
export function createBuildingMaterial(
    layout: CityGeneratorLayout,
    seed?: number | Node<"uint">,
): MeshStandardNodeMaterial;

/**
 * The road surface: wet asphalt with lane lines and crosswalks aligned to a
 * {@link CityGenerator} layout. Apply it to a ground plane sized to the city.
 */
export function createRoadMaterial(layout: CityGeneratorLayout): MeshStandardNodeMaterial;
