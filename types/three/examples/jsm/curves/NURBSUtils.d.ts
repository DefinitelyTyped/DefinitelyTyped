import { Vector3, Vector4 } from "three";

/**
 * Finds knot vector span.
 * @param p degree
 * @param u parametric value
 * @param U knot vector
 * @returns the span
 */
export function findSpan(p: number, u: number, U: readonly number[]): number;

/**
 * Calculate basis functions. See The NURBS Book, page 70, algorithm A2.2
 * @param span span in which u lies
 * @param u parametric point
 * @param p degrees
 * @param U knot vector
 * @returns array[p+1] with basis function values
 */
export function calcBasisFunctions(span: number, u: number, p: number, U: readonly number[]): number[];

/**
 * Calculate B-Spline curve points. See The NURBS Book, page 82, algorithm A3.1.
 * @param p degree of B-Spline
 * @param U knot vector
 * @param P control points (x, y, z, w)
 * @param u parametric point
 * @returns point for given u
 */
export function calcBSplinePoint(p: number, U: readonly number[], P: readonly Vector4[], u: number): Vector4;

/**
 * Calculate basis functions derivatives. See The NURBS Book, page 72, algorithm A2.3.
 * @param span span in which u lies
 * @param u parametric point
 * @param p degree
 * @param n number of derivatives to calculate
 * @param U knot vector
 * @returns array[n+1][p+1] with basis functions derivatives
 */
export function calcBasisFunctionDerivatives(
    span: number,
    u: number,
    p: number,
    n: number,
    U: readonly number[],
): number[][];

/**
 * Calculate derivatives of a B-Spline. See The NURBS Book, page 93, algorithm A3.2.
 * @param p degree
 * @param U knot vector
 * @param P control points
 * @param u Parametric points
 * @param nd number of derivatives
 * @returns array[d+1] with derivatives
 */
export function calcBSplineDerivatives(
    p: number,
    U: readonly number[],
    P: readonly Vector4[],
    u: number,
    nd: number,
): Vector4[];

/**
 * Calculate "K over I"
 * @returns k!/(i!(k-i)!
 */
export function calcKoverI(k: number, i: number): number;

/**
 * Calculate derivatives (0-nd) of rational curve. See The NURBS Book, page 127, algorithm A4.2.
 * @param Pders result of function calcBSplineDerivatives
 * @returns array with derivatives for rational curve.
 */
export function calcRationalCurveDerivatives(Pders: readonly Vector4[]): Vector3[];

/**
 * Calculate NURBS curve derivatives. See The NURBS Book, page 127, algorithm A4.2.
 * @param p degree
 * @param U knot vector
 * @param P control points in homogeneous space
 * @param u parametric points
 * @param nd number of derivatives
 * @returns array with derivatives
 */
export function calcNURBSDerivatives(
    p: number,
    U: readonly number[],
    P: readonly Vector4[],
    u: number,
    nd: number,
): Vector3[];

/**
 * Calculate rational B-Spline surface point. See The NURBS Book, page 134, algorithm A4.3.
 * @param p degree of B-Spline surface
 * @param q degree of B-Spline surface
 * @param U knot vector
 * @param V knot vector
 * @param P control points (x, y, z, w)
 * @param u parametric value
 * @param v parametric value
 * @param target
 * @returns point for given (u, v)
 */
export function calcSurfacePoint(
    p: number,
    q: number,
    U: readonly number[],
    V: readonly number[],
    P: readonly (readonly Vector4[])[],
    u: number,
    v: number,
    target: Vector3,
): Vector3;

/**
 * Calculate rational B-Spline volume point. See The NURBS Book, page 134, algorithm A4.3.
 * @param p degree of B-Spline volume
 * @param q degree of B-Spline volume
 * @param r degree of B-Spline volume
 * @param U knot vector
 * @param V knot vector
 * @param W knot vector
 * @param P control points (x, y, z, w)
 * @param u parametric value
 * @param v parametric value
 * @param w parametric value
 * @param target
 * @returns point for given (u, v, w)
 */
export function calcVolumePoint(
    p: number,
    q: number,
    r: number,
    U: readonly number[],
    V: readonly number[],
    W: readonly number[],
    P: readonly (readonly (readonly Vector4[])[])[],
    u: number,
    v: number,
    w: number,
    target: Vector3,
): Vector3;
