import { UniformNode, Vector2 } from "three/webgpu";

/**
 * Returns a TSL function that samples texture-free analytic R² noise.
 * Index 0 uses continuous screen pixels; other indices tile-shift with an R²
 * sequence into a 64×64 period. Values are four independent R² dimensions
 * hashed from the sample coordinates.
 *
 * @param {UniformNode<Vector2>} resolution
 * @param {number} [seed=0] - Added to the coordinate hash so each pass gets an independent R² phase.
 */
export function bindAnalyticNoise(resolution: UniformNode<"vec2", Vector2>, seed?: number): () => void;
