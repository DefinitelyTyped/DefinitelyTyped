/**
 * Specular / microfacet BRDF helpers: VNDF sampling, GTR distribution, Smith geometry,
 * Fresnel, reflection importance sampling, parallax-corrected ray-length terms, and
 * equirectangular environment sampling / MIS helpers.
 * Pure TSL functions of their inputs (no scene/camera state).
 */
/**
 * Sentinel ray length the SSR pass writes for environment misses (no screen-space hit), set far above
 * any real hit distance so a single magnitude test separates misses from hits and survives `.max( 0 )`.
 *
 * @type {number}
 */
export const ENV_RAY_LENGTH: number;
/**
 * Classification threshold for {@link ENV_RAY_LENGTH}: above this is an env miss, below a real hit.
 * An order of magnitude under the sentinel, robust to fp16 storage and bilinear blending at borders.
 *
 * @type {number}
 */
export const ENV_RAY_LENGTH_THRESHOLD: number;
