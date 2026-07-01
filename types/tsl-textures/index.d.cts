// CommonJS type declarations for tsl-textures.
//
// tsl-textures ships both an ESM build (`dist/tsl-textures.js`, used by the
// `import` condition) and a CommonJS build (`dist/cjs/tsl-textures.cjs`, used by
// the `require` condition). This file describes the CommonJS build and holds the
// declarations shared by both entry points; the ESM entry point (index.d.ts)
// re-exports everything here and adds a few extra re-exports.
//
// The CommonJS build does NOT expose the noise/fractal/voronoi helpers that the
// ESM build re-exports from 'three/tsl' (e.g. `noise`, `voronoi`). Those are
// value re-exports from an ESM-only module ('three/tsl' has no CommonJS export
// in @types/three), which a CommonJS module cannot re-export, and the bundled
// CommonJS build drops them as well. They are therefore only declared in the ESM
// entry point (index.d.ts).

// 'three/webgpu' is ESM-only, so resolving it from this CommonJS declaration
// file requires an explicit resolution-mode. The import is type-only and erased.
import type { Color, Node, Vector2, Vector3 } from "three/webgpu" with { "resolution-mode": "import" };

// Parameter input aliases. Each texture passes its params straight into a TSL Fn
// (via setLayout), which coerces every argument — so a param typed with one of
// these accepts either a plain JS value or a TSL node of that type (e.g. a
// uniform() or an animated time node), letting the texture be configured
// statically or driven by a node graph. The plain boolean flags (e.g.
// GridParams.equirectangular) are the exception and stay JS booleans.
export type FloatInput = Node<"float"> | number;
export type Vec2Input = Node<"vec2"> | Vector2;
export type Vec3Input = Node<"vec3"> | Vector3;
export type ColorInput = Node<"color"> | Color;

// === Utility functions ===

export function approximateNormal(pos: Vec3Input, posU: Vec3Input, posV: Vec3Input): Node<"vec3">;
export function showFallbackWarning(): Promise<void>;
export function hideFallbackWarning(): void;
export function remapExp(
    x: FloatInput,
    fromMin: FloatInput,
    fromMax: FloatInput,
    toMin: FloatInput,
    toMax: FloatInput,
): Node<"float">;
export function hsl(col: Vec3Input): Node<"vec3">;
export function toHsl(rgb: Vec3Input): Node<"vec3">;
export function rotatePivot(vector: Vec3Input, pivot: Vec3Input, angle: Vec3Input): Node<"vec3">;
export function vnoise(v: Vec3Input): Node<"float">;
export function spherical(phi: FloatInput, theta: FloatInput): Node<"vec3">;
export function selectPlanar(
    pos: Vec3Input,
    selAngles: Vec2Input,
    selCenter: Vec3Input,
    selWidth: FloatInput,
): Node<"float">;

// === Texture param interfaces ===

export interface BrainParams {
    position?: Vec3Input;
    scale?: FloatInput;
    smooth?: FloatInput;
    wave?: FloatInput;
    speed?: FloatInput;
    time?: FloatInput;
    color?: ColorInput;
    background?: ColorInput;
    seed?: FloatInput;
}

export interface BricksParams {
    position?: Vec3Input;
    scale?: FloatInput;
    brickSize?: Vec3Input;
    brickShift?: FloatInput;
    jointSize?: FloatInput;
    jointSpan?: FloatInput;
    jointJitter?: FloatInput;
    jointBlur?: FloatInput;
    noiseSize?: FloatInput;
    noiseStrength?: FloatInput;
    colorShade?: FloatInput;
    color?: ColorInput;
    additional?: ColorInput;
    background?: ColorInput;
    seed?: FloatInput;
}

export interface CamouflageParams {
    position?: Vec3Input;
    scale?: FloatInput;
    colorA?: ColorInput;
    colorB?: ColorInput;
    colorC?: ColorInput;
    colorD?: ColorInput;
    seed?: FloatInput;
}

export interface CausticsParams {
    position?: Vec3Input;
    scale?: FloatInput;
    speed?: FloatInput;
    time?: FloatInput;
    color?: ColorInput;
    seed?: FloatInput;
}

export interface CaveArtParams {
    position?: Vec3Input;
    scale?: FloatInput;
    thinness?: FloatInput;
    noise?: FloatInput;
    color?: ColorInput;
    background?: ColorInput;
    seed?: FloatInput;
}

export interface CircleDecorParams {
    position?: Vec3Input;
    scale?: FloatInput;
    grains?: FloatInput;
    complexity?: FloatInput;
    blur?: FloatInput;
    color?: ColorInput;
    background?: ColorInput;
    seed?: FloatInput;
}

export interface CirclesParams {
    position?: Vec3Input;
    scale?: FloatInput;
    variety?: FloatInput;
    color?: ColorInput;
    seed?: FloatInput;
}

export interface CloudsParams {
    position?: Vec3Input;
    scale?: FloatInput;
    density?: FloatInput;
    opacity?: FloatInput;
    color?: ColorInput;
    subcolor?: ColorInput;
    seed?: FloatInput;
}

export interface ConcreteParams {
    position?: Vec3Input;
    scale?: FloatInput;
    density?: FloatInput;
    bump?: FloatInput;
    seed?: FloatInput;
}

export interface CorkParams {
    position?: Vec3Input;
    scale?: FloatInput;
    straight?: FloatInput;
    noise?: FloatInput;
    color?: ColorInput;
    background?: ColorInput;
    seed?: FloatInput;
}

export interface CrumpledFabricParams {
    position?: Vec3Input;
    scale?: FloatInput;
    pinch?: FloatInput;
    color?: ColorInput;
    subcolor?: ColorInput;
    background?: ColorInput;
    seed?: FloatInput;
}

export interface DalmatianSpotsParams {
    position?: Vec3Input;
    scale?: FloatInput;
    density?: FloatInput;
    color?: ColorInput;
    background?: ColorInput;
    seed?: FloatInput;
}

export interface DarthMaulParams {
    position?: Vec3Input;
    scale?: FloatInput;
    shift?: Vec3Input;
    complexity?: FloatInput;
    angle?: FloatInput;
    distance?: FloatInput;
    color?: ColorInput;
    background?: ColorInput;
    balance?: FloatInput;
    seed?: FloatInput;
}

export interface DysonSphereParams {
    position?: Vec3Input;
    scale?: FloatInput;
    complexity?: FloatInput;
    variation?: FloatInput;
    color?: ColorInput;
    background?: ColorInput;
    seed?: FloatInput;
}

export interface EntangledParams {
    position?: Vec3Input;
    scale?: FloatInput;
    density?: FloatInput;
    color?: ColorInput;
    background?: ColorInput;
    seed?: FloatInput;
}

export interface ForditeParams {
    position?: Vec3Input;
    scale?: FloatInput;
    color?: ColorInput;
    seed?: FloatInput;
}

export interface GasGiantParams {
    position?: Vec3Input;
    scale?: FloatInput;
    turbulence?: FloatInput;
    blur?: FloatInput;
    colorA?: ColorInput;
    colorB?: ColorInput;
    colorC?: ColorInput;
    seed?: FloatInput;
}

export interface GridParams {
    uvs?: Vec2Input;
    countU?: FloatInput;
    countV?: FloatInput;
    aspect?: FloatInput;
    thinness?: FloatInput;
    equirectangular?: boolean;
    color?: ColorInput;
    background?: ColorInput;
}

export interface HalftoneParams {
    position?: Vec2Input;
    scale?: FloatInput;
    radius?: FloatInput;
    pattern?: FloatInput;
    attenuation?: FloatInput;
    near?: FloatInput;
    far?: FloatInput;
    color?: Vec3Input | ColorInput;
    positionView?: Vec3Input;
}

export interface IsolayersParams {
    position?: Vec3Input;
    scale?: FloatInput;
    layers?: FloatInput;
    edge?: FloatInput;
    darkness?: FloatInput;
    color?: ColorInput;
    background?: ColorInput;
    seed?: FloatInput;
}

export interface IsolinesParams {
    position?: Vec3Input;
    scale?: FloatInput;
    density?: FloatInput;
    blur?: FloatInput;
    thinness?: FloatInput;
    color?: ColorInput;
    background?: ColorInput;
    seed?: FloatInput;
}

export interface KarstRockParams {
    position?: Vec3Input;
    scale?: FloatInput;
    color?: ColorInput;
    background?: ColorInput;
    seed?: FloatInput;
}

export interface MarbleParams {
    position?: Vec3Input;
    scale?: FloatInput;
    thinness?: FloatInput;
    noise?: FloatInput;
    color?: ColorInput;
    background?: ColorInput;
    seed?: FloatInput;
}

export interface NeonLightsParams {
    position?: Vec3Input;
    scale?: FloatInput;
    thinness?: FloatInput;
    mode?: FloatInput;
    colorA?: ColorInput;
    colorB?: ColorInput;
    colorC?: ColorInput;
    background?: ColorInput;
    seed?: FloatInput;
}

export interface PerlinNoiseParams {
    position?: Vec3Input;
    scale?: FloatInput;
    balance?: FloatInput;
    contrast?: FloatInput;
    color?: ColorInput;
    background?: ColorInput;
    seed?: FloatInput;
}

export interface PhotosphereParams {
    position?: Vec3Input;
    scale?: FloatInput;
    color?: ColorInput;
    background?: ColorInput;
    seed?: FloatInput;
}

export interface PlanetParams {
    position?: Vec3Input;
    scale?: FloatInput;
    iterations?: FloatInput;
    levelSea?: FloatInput;
    levelMountain?: FloatInput;
    balanceWater?: FloatInput;
    balanceSand?: FloatInput;
    balanceSnow?: FloatInput;
    colorDeep?: ColorInput;
    colorShallow?: ColorInput;
    colorBeach?: ColorInput;
    colorGrass?: ColorInput;
    colorForest?: ColorInput;
    colorSnow?: ColorInput;
    seed?: FloatInput;
}

export interface PolkaDotsParams {
    position?: Vec3Input;
    count?: FloatInput;
    size?: FloatInput;
    blur?: FloatInput;
    color?: ColorInput;
    background?: ColorInput;
    flat?: FloatInput;
}

export interface ProcessedWoodParams {
    position?: Vec3Input;
    scale?: FloatInput;
    lengths?: FloatInput;
    strength?: FloatInput;
    angle?: FloatInput;
    color?: ColorInput;
    background?: ColorInput;
    seed?: FloatInput;
}

export interface ProtozoaParams {
    position?: Vec3Input;
    matcap?: Vec2Input;
    scale?: FloatInput;
    fat?: FloatInput;
    amount?: FloatInput;
    color?: ColorInput;
    subcolor?: ColorInput;
    background?: ColorInput;
    seed?: FloatInput;
}

export interface ReticularVeinsParams {
    position?: Vec3Input;
    scale?: FloatInput;
    reticulation?: FloatInput;
    strength?: FloatInput;
    organelles?: FloatInput;
    color?: ColorInput;
    background?: ColorInput;
    seed?: FloatInput;
}

export interface RomanPavingParams {
    position?: Vec3Input;
    scale?: FloatInput;
    depth?: FloatInput;
    seed?: FloatInput;
}

export interface RotatorParams {
    angles?: Vec3Input;
    center?: Vec3Input;
    selectorCenter?: Vec3Input;
    selectorAngles?: Vec2Input;
    selectorWidth?: FloatInput;
}

export interface RoughClayParams {
    position?: Vec3Input;
    scale?: FloatInput;
    bump?: FloatInput;
    curvature?: FloatInput;
    seed?: FloatInput;
}

export interface RunnyEggsParams {
    position?: Vec3Input;
    scale?: FloatInput;
    sizeYolk?: FloatInput;
    sizeWhite?: FloatInput;
    colorYolk?: ColorInput;
    colorWhite?: ColorInput;
    colorBackground?: ColorInput;
    seed?: FloatInput;
}

export interface RustParams {
    position?: Vec3Input;
    scale?: FloatInput;
    iterations?: FloatInput;
    amount?: FloatInput;
    opacity?: FloatInput;
    noise?: FloatInput;
    noiseScale?: FloatInput;
    color?: ColorInput;
    background?: ColorInput;
    seed?: FloatInput;
}

export interface SatinParams {
    position?: Vec3Input;
    scale?: FloatInput;
    color?: ColorInput;
    background?: ColorInput;
    seed?: FloatInput;
}

export interface ScalerParams {
    scales?: Vec3Input;
    center?: Vec3Input;
    selectorCenter?: Vec3Input;
    selectorAngles?: Vec2Input;
    selectorWidth?: FloatInput;
}

export interface ScepterHeadParams {
    position?: Vec3Input;
    xFactor?: FloatInput;
    yFactor?: FloatInput;
    zFactor?: FloatInput;
    colorRim?: ColorInput;
    colorA?: ColorInput;
    colorB?: ColorInput;
}

export interface ScreamParams {
    position?: Vec3Input;
    scale?: FloatInput;
    variety?: FloatInput;
    color?: ColorInput;
    background?: ColorInput;
    seed?: FloatInput;
}

export interface StarsParams {
    position?: Vec3Input;
    scale?: FloatInput;
    density?: FloatInput;
    variation?: FloatInput;
    color?: ColorInput;
    background?: ColorInput;
    seed?: FloatInput;
}

export interface StaticNoiseParams {
    position?: Vec2Input;
    time?: FloatInput;
    scale?: FloatInput;
    balance?: FloatInput;
    contrast?: FloatInput;
    delay?: FloatInput;
    seed?: FloatInput;
}

export interface SupersphereParams {
    exponent?: FloatInput;
}

export interface TigerFurParams {
    position?: Vec3Input;
    scale?: FloatInput;
    lengths?: FloatInput;
    blur?: FloatInput;
    strength?: FloatInput;
    hairs?: FloatInput;
    color?: ColorInput;
    bottomColor?: ColorInput;
    seed?: FloatInput;
}

export interface TranslatorParams {
    distance?: Vec3Input;
    selectorCenter?: Vec3Input;
    selectorAngles?: Vec2Input;
    selectorWidth?: FloatInput;
}

export interface TurbulentSmokeParams {
    position?: Vec3Input;
    scale?: FloatInput;
    speed?: FloatInput;
    details?: FloatInput;
    time?: FloatInput;
    seed?: FloatInput;
}

export interface VoronoiCellsParams {
    position?: Vec3Input;
    scale?: FloatInput;
    variation?: FloatInput;
    facet?: FloatInput;
    color?: ColorInput;
    background?: ColorInput;
    seed?: FloatInput;
}

export interface WaterDropsParams {
    position?: Vec3Input;
    scale?: FloatInput;
    density?: FloatInput;
    bump?: FloatInput;
    seed?: FloatInput;
}

export interface WatermelonParams {
    position?: Vec3Input;
    uvs?: Vec2Input;
    scale?: FloatInput;
    stripes?: FloatInput;
    variation?: FloatInput;
    noise?: FloatInput;
    color?: ColorInput;
    background?: ColorInput;
    seed?: FloatInput;
}

export interface WavesParams {
    position?: Vec3Input;
    scale?: FloatInput;
    speed?: FloatInput;
    time?: FloatInput;
    level?: FloatInput;
    rough?: FloatInput;
    height?: FloatInput;
    foamSize?: FloatInput;
    foamEdge?: FloatInput;
    color?: ColorInput;
    background?: ColorInput;
    seed?: FloatInput;
}

export interface WoodParams {
    position?: Vec3Input;
    scale?: FloatInput;
    rings?: FloatInput;
    lengths?: FloatInput;
    angle?: FloatInput;
    fibers?: FloatInput;
    fibersDensity?: FloatInput;
    color?: ColorInput;
    background?: ColorInput;
    seed?: FloatInput;
}

export interface ZebraLinesParams {
    position?: Vec3Input;
    scale?: FloatInput;
    thinness?: FloatInput;
    phi?: FloatInput;
    theta?: FloatInput;
    color?: ColorInput;
    background?: ColorInput;
    flat?: FloatInput;
}

// === Texture function types ===

// Simple texture: callable + .defaults
export interface SimpleTexture<P> {
    (params?: P): Node<"vec3">;
    defaults: P;
}

// Texture with a .normal() method
export interface TextureWithNormal<P> {
    (params?: P): Node<"vec3">;
    normal(params?: P): Node<"vec3">;
    defaults: P;
}

// Texture with an .opacity() method
export interface TextureWithOpacity<P> {
    (params?: P): Node<"vec3">;
    opacity(params?: P): Node<"float">;
    defaults: P;
}

// runnyEggs: both .normal() and .roughness()
export interface RunnyEggsTexture {
    (params?: RunnyEggsParams): Node<"vec3">;
    normal(params?: RunnyEggsParams): Node<"vec3">;
    roughness(params?: RunnyEggsParams): Node<"float">;
    defaults: RunnyEggsParams;
}

// === Exports ===

export const brain: TextureWithNormal<BrainParams>;
export const bricks: SimpleTexture<BricksParams>;
export const camouflage: SimpleTexture<CamouflageParams>;
export const caustics: SimpleTexture<CausticsParams>;
export const caveArt: SimpleTexture<CaveArtParams>;
export const circleDecor: SimpleTexture<CircleDecorParams>;
export const circles: SimpleTexture<CirclesParams>;
export const clouds: TextureWithOpacity<CloudsParams>;
export const concrete: SimpleTexture<ConcreteParams>;
export const cork: SimpleTexture<CorkParams>;
export const crumpledFabric: SimpleTexture<CrumpledFabricParams>;
export const dalmatianSpots: SimpleTexture<DalmatianSpotsParams>;
export const darthMaul: SimpleTexture<DarthMaulParams>;
export const dysonSphere: SimpleTexture<DysonSphereParams>;
export const entangled: SimpleTexture<EntangledParams>;
export const fordite: SimpleTexture<ForditeParams>;
export const gasGiant: SimpleTexture<GasGiantParams>;
export const grid: SimpleTexture<GridParams>;
export const halftone: SimpleTexture<HalftoneParams>;
export const isolayers: SimpleTexture<IsolayersParams>;
export const isolines: SimpleTexture<IsolinesParams>;
export const karstRock: SimpleTexture<KarstRockParams>;
export const marble: SimpleTexture<MarbleParams>;
export const neonLights: SimpleTexture<NeonLightsParams>;
export const perlinNoise: SimpleTexture<PerlinNoiseParams>;
export const photosphere: SimpleTexture<PhotosphereParams>;
export const planet: SimpleTexture<PlanetParams>;
export const polkaDots: SimpleTexture<PolkaDotsParams>;
export const processedWood: SimpleTexture<ProcessedWoodParams>;
export const protozoa: SimpleTexture<ProtozoaParams>;
export const reticularVeins: SimpleTexture<ReticularVeinsParams>;
export const romanPaving: SimpleTexture<RomanPavingParams>;
export const rotator: TextureWithNormal<RotatorParams>;
export const roughClay: SimpleTexture<RoughClayParams>;
export const runnyEggs: RunnyEggsTexture;
export const rust: TextureWithOpacity<RustParams>;
export const satin: SimpleTexture<SatinParams>;
export const scaler: TextureWithNormal<ScalerParams>;
export const scepterHead: SimpleTexture<ScepterHeadParams>;
export const scream: SimpleTexture<ScreamParams>;
export const stars: SimpleTexture<StarsParams>;
export const staticNoise: SimpleTexture<StaticNoiseParams>;
export const supersphere: TextureWithNormal<SupersphereParams>;
export const tigerFur: SimpleTexture<TigerFurParams>;
export const translator: TextureWithNormal<TranslatorParams>;
export const turbulentSmoke: SimpleTexture<TurbulentSmokeParams>;
export const voronoiCells: SimpleTexture<VoronoiCellsParams>;
export const waterDrops: SimpleTexture<WaterDropsParams>;
export const watermelon: SimpleTexture<WatermelonParams>;
export const waves: TextureWithOpacity<WavesParams>;
export const wood: SimpleTexture<WoodParams>;
export const zebraLines: SimpleTexture<ZebraLinesParams>;
