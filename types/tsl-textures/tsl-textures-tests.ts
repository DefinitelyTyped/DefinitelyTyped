import { float, uniform, vec2, vec3 } from "three/tsl";
import { Color, Node, Vector2, Vector3 } from "three/webgpu";

import {
    // utility functions
    approximateNormal,
    // multi-channel textures
    brain,
    // simple textures (callable + .defaults)
    bricks,
    camouflage,
    clouds,
    // re-exported noise / fractal / voronoi
    fractal,
    fractal3,
    grid,
    halftone,
    hideFallbackWarning,
    hsl,
    noise,
    noise3,
    planet,
    polkaDots,
    remapExp,
    rotatePivot,
    rotator,
    runnyEggs,
    // param interfaces
    RunnyEggsParams,
    rust,
    scaler,
    selectPlanar,
    showFallbackWarning,
    spherical,
    supersphere,
    toHsl,
    translator,
    vnoise,
    voronoi,
    voronoi2,
    voronoi3,
    waves,
} from "tsl-textures";

// Sample node values of each supported kind, used as inputs below.
const f: Node<"float"> = float(1);
const v2node: Node<"vec2"> = vec2(0, 1);
const v3node: Node<"vec3"> = vec3(0, 1, 2);

const col = new Color(0xff0000);
const p2 = new Vector2(0.5, 0.5);
const p3 = new Vector3(0, 1, 0);

// === Utility functions ===

// $ExpectType Node<"vec3">
approximateNormal(v3node, p3, v3node);

// remapExp: float-ish args (numbers or float nodes) -> float node.
// $ExpectType Node<"float">
remapExp(0.5, 0, 1, 1, 10);
// $ExpectType Node<"float">
remapExp(f, f, 1, 0, f);

// hsl / toHsl convert vec3 <-> vec3.
// $ExpectType Node<"vec3">
hsl(v3node);
// $ExpectType Node<"vec3">
toHsl(p3);

// $ExpectType Node<"vec3">
rotatePivot(v3node, p3, v3node);
// $ExpectType Node<"float">
vnoise(v3node);
// $ExpectType Node<"vec3">
spherical(f, 0.25);
// $ExpectType Node<"float">
selectPlanar(v3node, p2, p3, 0.5);

// Fallback-warning helpers.
// $ExpectType Promise<void>
showFallbackWarning();
// $ExpectType void
hideFallbackWarning();

// === Re-exported noise functions ===
// These come straight from three/tsl; just confirm they are exported and callable.
noise(v3node);
noise3(v3node);
fractal(v3node);
fractal3(v3node);
voronoi(v3node);
voronoi2(v3node);
voronoi3(v3node);

// === Simple textures ===

// Callable with no arguments.
// $ExpectType Node<"vec3">
bricks();

// Partial params; F accepts numbers or float nodes, C accepts Color or color
// nodes, V3 accepts Vector3 or vec3 nodes.
// $ExpectType Node<"vec3">
bricks({ scale: 2, brickSize: p3, jointSize: f, color: col, seed: 7 });

// camouflage exposes several color slots.
// $ExpectType Node<"vec3">
camouflage({ colorA: col, colorB: col, colorC: col, colorD: col, seed: 1 });

// grid uses uv (vec2) inputs and a boolean flag.
// $ExpectType Node<"vec3">
grid({ uvs: v2node, countU: 32, countV: 16, equirectangular: true, color: col });

// halftone uses a vec2 position and accepts a vec3 OR color for `color`.
// $ExpectType Node<"vec3">
halftone({ position: p2, radius: 0.5, color: v3node });
// $ExpectType Node<"vec3">
halftone({ position: vec2(0, 0), color: col, positionView: p3 });

// planet has many balance/color knobs.
// $ExpectType Node<"vec3">
planet({ iterations: 10, levelSea: 0.5, colorDeep: col, colorSnow: col });

// polkaDots uses a `flat` flag-like float.
// $ExpectType Node<"vec3">
polkaDots({ count: 4, size: 0.3, blur: f, flat: 1 });

// `.defaults` is exposed and shaped like the params object.
// $ExpectType BricksParams
bricks.defaults;
// $ExpectType GridParams
grid.defaults;
// $ExpectType HalftoneParams
halftone.defaults;

// === Textures with a .normal() channel ===
// $ExpectType Node<"vec3">
brain({ color: col, background: col });
// $ExpectType Node<"vec3">
brain.normal({ wave: 0.5, speed: 2.5, time: f });

// rotator / scaler / translator / supersphere share params across channels.
// $ExpectType Node<"vec3">
rotator.normal({ angles: p3, center: p3, selectorWidth: 0.5 });
// $ExpectType Node<"vec3">
scaler.normal({ scales: p3, selectorAngles: p2 });
// $ExpectType Node<"vec3">
translator.normal({ distance: p3, selectorCenter: p3 });
// $ExpectType Node<"vec3">
supersphere.normal({ exponent: 3 });

// === Textures with an .opacity() channel ===

// $ExpectType Node<"vec3">
clouds({ density: 0.5, color: col, subcolor: col });
// $ExpectType Node<"float">
clouds.opacity({ density: 0.5, opacity: 0.8 });

// $ExpectType Node<"float">
rust.opacity({ amount: 0.5, opacity: 0.5 });
// $ExpectType Node<"float">
waves.opacity({ level: 0.5, foamEdge: 0.1 });

// The same config object can be fed to every channel of a texture.
const cloudConfig = { scale: 3, density: 0.7, opacity: 0.8, color: col, seed: 5 };
// $ExpectType Node<"vec3">
clouds(cloudConfig);
// $ExpectType Node<"float">
clouds.opacity(cloudConfig);

// === runnyEggs: both .normal() and .roughness() ===

// $ExpectType Node<"vec3">
runnyEggs({ sizeYolk: 0.2, sizeWhite: 0.7, colorYolk: col });
// $ExpectType Node<"vec3">
runnyEggs.normal({ sizeWhite: 0.7 });
// $ExpectType Node<"float">
runnyEggs.roughness({ sizeYolk: 0.2 });

// The full params object is the superset and works on every channel.
const eggConfig: RunnyEggsParams = { sizeYolk: 0.2, sizeWhite: 0.7, colorWhite: col };
// $ExpectType Node<"vec3">
runnyEggs(eggConfig);
// $ExpectType Node<"vec3">
runnyEggs.normal(eggConfig);
// $ExpectType Node<"float">
runnyEggs.roughness(eggConfig);

// === uniform() inputs ===
// Params are commonly driven by uniform nodes so they can be animated at runtime.
// $ExpectType Node<"vec3">
clouds({ density: uniform(0.25), opacity: 0.2, color: uniform(col), seed: uniform(0) });

// === Negative tests ===

// A simple texture has no extra channels.
// @ts-expect-error - bricks is a plain texture without a .normal() method.
bricks.normal();

// @ts-expect-error - clouds has .opacity(), not .normal().
clouds.normal();

// @ts-expect-error - scale must be a number or float node, not a string.
brain({ scale: "large" });

// @ts-expect-error - `nope` is not a known parameter.
grid({ nope: true });

// @ts-expect-error - a color slot does not accept a bare number.
camouflage({ colorA: 123 });
