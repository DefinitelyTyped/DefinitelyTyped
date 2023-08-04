/**
 * Used internally by {@link THREE.SplineCurve | SplineCurve}.
 * @param t Interpolation weight. Expects a `Float`
 * @param p0 Expects a `Float`
 * @param p1 Expects a `Float`
 * @param p2 Expects a `Float`
 * @param p3 P0, p1, p2, the points defining the spline curve. Expects a `Float`
 * @see {@link https://threejs.org/docs/index.html#api/en/extras/core/Interpolations | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/core/Interpolations.js | Source}
 */
declare function CatmullRom(t: number, p0: number, p1: number, p2: number, p3: number): number;

/**
 * Used internally by {@link THREE.QuadraticBezierCurve3 | QuadraticBezierCurve3} and {@link THREE.QuadraticBezierCurve | QuadraticBezierCurve}.
 * @param t Interpolation weight. Expects a `Float`
 * @param p0 Expects a `Float`
 * @param p1 Expects a `Float`
 * @param p2 P0, p1, the starting, control and end points defining the curve. Expects a `Float`
 * @see {@link https://threejs.org/docs/index.html#api/en/extras/core/Interpolations | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/core/Interpolations.js | Source}
 */
declare function QuadraticBezier(t: number, p0: number, p1: number, p2: number): number;

/**
 * Used internally by {@link THREE.CubicBezierCurve3 | CubicBezierCurve3} and {@link THREE.CubicBezierCurve | CubicBezierCurve}.
 * @param t Interpolation weight. Expects a `Float`
 * @param p0 Expects a `Float`
 * @param p1 Expects a `Float`
 * @param p2 Expects a `Float`
 * @param p3 P0, p1, p2, the starting, control(twice) and end points defining the curve. Expects a `Float`
 * @see {@link https://threejs.org/docs/index.html#api/en/extras/core/Interpolations | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/core/Interpolations.js | Source}
 */
declare function CubicBezier(t: number, p0: number, p1: number, p2: number, p3: number): number;

export { CatmullRom, QuadraticBezier, CubicBezier };
