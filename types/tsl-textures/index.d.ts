// ESM type declarations for tsl-textures (the `import` condition).
//
// tsl-textures ships both an ESM build (`dist/tsl-textures.js`) and a CommonJS
// build (`dist/cjs/tsl-textures.cjs`). The shared API is declared in the
// CommonJS declaration file (index.d.cts) and re-exported here; this file adds
// the noise/fractal/voronoi helpers, which the ESM build re-exports from
// 'three/tsl'. Those are value re-exports from an ESM-only module, so they are
// only valid from an ES module — they exist in the ESM build (and here) but not
// in the CommonJS build (index.d.cts).
//
// To update tsl-textures type definition, please make changes to the repository
// at: https://github.com/HannahLilyW/tsl-textures-ts-types.
// Periodically, the updates from the repository are pushed to DefinitelyTyped
// and released in the @types/tsl-textures npm package.

export * from "./index.cjs";

// Noise / fractal / voronoi re-exported from three/tsl
export {
    mx_fractal_noise_float as fractal,
    mx_fractal_noise_vec3 as fractal3,
    mx_noise_float as noise,
    mx_noise_vec3 as noise3,
    mx_worley_noise_float as voronoi,
    mx_worley_noise_vec2 as voronoi2,
    mx_worley_noise_vec3 as voronoi3,
} from "three/tsl";
