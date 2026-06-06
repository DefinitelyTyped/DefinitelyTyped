import { Vector2 } from "../../math/Vector2.js";
import { Vector3 } from "../../math/Vector3.js";
import { Curve, CurveJSON } from "./Curve.js";

export interface CurvePathJSON extends CurveJSON {
    autoClose: boolean;
    curves: CurveJSON[];
}

/**
 * Curved Path - a curve path is simply a array of connected curves, but retains the api of a curve.
 * @remarks
 * A {@link CurvePath} is simply an array of connected curves, but retains the api of a curve.
 * @see {@link https://threejs.org/docs/index.html#api/en/extras/core/CurvePath | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/core/CurvePath.js | Source}
 */
export class CurvePath<TVector extends Vector2 | Vector3> extends Curve<TVector> {
    /**
     * The constructor take no parameters.
     */
    constructor();

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @defaultValue `CurvePath`
     */
    override readonly type: string | "CurvePath";

    /**
     * The array of {@link Curve | Curves}.
     * @defaultValue `[]`
     */
    curves: Array<Curve<TVector>>;

    /**
     * Whether or not to automatically close the path.
     * @defaultValue false
     */
    autoClose: boolean;

    /**
     * Add a curve to the {@link .curves} array.
     * @param curve
     */
    add(curve: Curve<TVector>): void;
    /**
     * Adds a {@link LineCurve | lineCurve} to close the path.
     */
    closePath(): this;

    getPoint(t: number, optionalTarget?: TVector): TVector;

    /**
     * Get list of cumulative curve lengths of the curves in the {@link .curves} array.
     */
    getCurveLengths(): number[];

    /**
     * Returns an array of points representing a sequence of curves
     * @remarks
     * The `division` parameter defines the number of pieces each curve is divided into
     * However, for optimization and quality purposes, the actual sampling resolution for each curve depends on its type
     * For example, for a {@link THREE.LineCurve | LineCurve}, the returned number of points is always just 2.
     * @param divisions Number of pieces to divide the curve into. Expects a `Integer`. Default `12`
     */
    override getPoints(divisions?: number): TVector[];

    /**
     * Returns a set of divisions `+1` equi-spaced points using {@link .getPointAt | getPointAt(u)}.
     * @param divisions Number of pieces to divide the curve into. Expects a `Integer`. Default `40`
     */
    override getSpacedPoints(divisions?: number): TVector[];

    toJSON(): CurvePathJSON;
    fromJSON(json: CurvePathJSON): this;
}
