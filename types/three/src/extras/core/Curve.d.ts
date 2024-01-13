import { Vector } from '../../math/Vector2.js';
import { Vector3 } from '../../math/Vector3.js';

/**
 * An abstract base class for creating a {@link Curve} object that contains methods for interpolation
 * @remarks
 * For an array of Curves see {@link THREE.CurvePath | CurvePath}.
 * @remarks
 * This following curves inherit from THREE.Curve:
 *
 * **2D curves**
 *  - {@link THREE.ArcCurve}
 *  - {@link THREE.CubicBezierCurve}
 *  - {@link THREE.EllipseCurve}
 *  - {@link THREE.LineCurve}
 *  - {@link THREE.QuadraticBezierCurve}
 *  - {@link THREE.SplineCurve}
 *
 * **3D curves**
 *  - {@link THREE.CatmullRomCurve3}
 *  - {@link THREE.CubicBezierCurve3}
 *  - {@link THREE.LineCurve3}
 *  - {@link THREE.QuadraticBezierCurve3}
 *
 * @see {@link https://threejs.org/docs/index.html#api/en/extras/core/Curve | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/core/Curve.js | Source}
 */
export abstract class Curve<T extends Vector> {
    protected constructor();

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @defaultValue `Curve`
     */
    readonly type: string | 'Curve';

    /**
     * This value determines the amount of divisions when calculating the cumulative segment lengths of a {@link Curve}
     * via {@link .getLengths}.
     * To ensure precision when using methods like {@link .getSpacedPoints}, it is recommended to increase {@link .arcLengthDivisions} if the {@link Curve} is very large.
     * @defaultValue `200`
     * @remarks Expects a `Integer`
     */
    arcLengthDivisions: number;

    /**
     * Returns a vector for a given position on the curve.
     * @param t A position on the curve. Must be in the range `[ 0, 1 ]`. Expects a `Float`
     * @param optionalTarget If specified, the result will be copied into this Vector, otherwise a new Vector will be created. Default `new T`.
     */
    getPoint(t: number, optionalTarget?: T): T;

    /**
     * Returns a vector for a given position on the {@link Curve} according to the arc length.
     * @param u A position on the {@link Curve} according to the arc length. Must be in the range `[ 0, 1 ]`. Expects a `Float`
     * @param optionalTarget If specified, the result will be copied into this Vector, otherwise a new Vector will be created. Default `new T`.
     */
    getPointAt(u: number, optionalTarget?: T): T;

    /**
     * Returns a set of divisions `+1` points using {@link .getPoint | getPoint(t)}.
     * @param divisions Number of pieces to divide the {@link Curve} into. Expects a `Integer`. Default `5`
     */
    getPoints(divisions?: number): T[];

    /**
     * Returns a set of divisions `+1` equi-spaced points using {@link .getPointAt | getPointAt(u)}.
     * @param divisions Number of pieces to divide the {@link Curve} into. Expects a `Integer`. Default `5`
     */
    getSpacedPoints(divisions?: number): T[];

    /**
     * Get total {@link Curve} arc length.
     */
    getLength(): number;

    /**
     * Get list of cumulative segment lengths.
     * @param divisions Expects a `Integer`
     */
    getLengths(divisions?: number): number[];

    /**
     * Update the cumulative segment distance cache
     * @remarks
     * The method must be called every time {@link Curve} parameters are changed
     * If an updated {@link Curve} is part of a composed {@link Curve} like {@link THREE.CurvePath | CurvePath},
     * {@link .updateArcLengths}() must be called on the composed curve, too.
     */
    updateArcLengths(): void;

    /**
     * Given u in the range `[ 0, 1 ]`,
     * @remarks
     * `u` and `t` can then be used to give you points which are equidistant from the ends of the curve, using {@link .getPoint}.
     * @param u Expects a `Float`
     * @param distance Expects a `Float`
     * @returns `t` also in the range `[ 0, 1 ]`. Expects a `Float`.
     */
    getUtoTmapping(u: number, distance: number): number;

    /**
     * Returns a unit vector tangent at t
     * @remarks
     * If the derived {@link Curve} does not implement its tangent derivation, two points a small delta apart will be used to find its gradient which seems to give a reasonable approximation.
     * @param t A position on the curve. Must be in the range `[ 0, 1 ]`. Expects a `Float`
     * @param optionalTarget If specified, the result will be copied into this Vector, otherwise a new Vector will be created.
     */
    getTangent(t: number, optionalTarget?: T): T;

    /**
     * Returns tangent at a point which is equidistant to the ends of the {@link Curve} from the point given in {@link .getTangent}.
     * @param u A position on the {@link Curve} according to the arc length. Must be in the range `[ 0, 1 ]`. Expects a `Float`
     * @param optionalTarget If specified, the result will be copied into this Vector, otherwise a new Vector will be created.
     */
    getTangentAt(u: number, optionalTarget?: T): T;

    /**
     * Generates the Frenet Frames
     * @remarks
     * Requires a {@link Curve} definition in 3D space
     * Used in geometries like {@link THREE.TubeGeometry | TubeGeometry} or {@link THREE.ExtrudeGeometry | ExtrudeGeometry}.
     * @param segments Expects a `Integer`
     * @param closed
     */
    computeFrenetFrames(
        segments: number,
        closed?: boolean,
    ): {
        tangents: Vector3[];
        normals: Vector3[];
        binormals: Vector3[];
    };

    /**
     * Creates a clone of this instance.
     */
    clone(): this;
    /**
     * Copies another {@link Curve} object to this instance.
     * @param source
     */
    copy(source: Curve<T>): this;

    /**
     * Returns a JSON object representation of this instance.
     */
    toJSON(): {};

    /**
     * Copies the data from the given JSON object to this instance.
     * @param json
     */
    fromJSON(json: {}): this;
}
