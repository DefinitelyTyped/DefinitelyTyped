import { Coordinate } from './coordinate';
import { Pixel } from './pixel';

/**
 * An array representing an affine 2d transformation for use with
 * {@link module:ol/transform} functions. The array has 6 elements.
 */
export type Transform = number[];
/**
 * Transforms the given coordinate with the given transform returning the
 * resulting, transformed coordinate. The coordinate will be modified in-place.
 */
export function apply(transform: Transform, coordinate: Coordinate | Pixel): Coordinate | Pixel;
/**
 * Creates a composite transform given an initial translation, scale, rotation, and
 * final translation (in that order only, not commutative).
 */
export function compose(
    transform: Transform,
    dx1: number,
    dy1: number,
    sx: number,
    sy: number,
    angle: number,
    dx2: number,
    dy2: number,
): Transform;
/**
 * Creates a composite transform given an initial translation, scale, rotation, and
 * final translation (in that order only, not commutative). The resulting transform
 * string can be applied as transform porperty of an HTMLElement's style.
 */
export function composeCssTransform(
    dx1: number,
    dy1: number,
    sx: number,
    sy: number,
    angle: number,
    dx2: number,
    dy2: number,
): string;
/**
 * Create an identity transform.
 */
export function create(): Transform;
/**
 * Returns the determinant of the given matrix.
 */
export function determinant(mat: Transform): number;
/**
 * Invert the given transform.
 */
export function invert(source: Transform): Transform;
/**
 * Invert the given transform.
 */
export function makeInverse(target: Transform, source: Transform): Transform;
/**
 * Creates a scale transform.
 */
export function makeScale(target: Transform, x: number, y: number): Transform;
/**
 * Multiply the underlying matrices of two transforms and return the result in
 * the first transform.
 */
export function multiply(transform1: Transform, transform2: Transform): Transform;
/**
 * Resets the given transform to an identity transform.
 */
export function reset(transform: Transform): Transform;
/**
 * Applies rotation to the given transform.
 */
export function rotate(transform: Transform, angle: number): Transform;
/**
 * Applies scale to a given transform.
 */
export function scale(transform: Transform, x: number, y: number): Transform;
/**
 * Set the transform components a-f on a given transform.
 */
export function set(transform: Transform, a: number, b: number, c: number, d: number, e: number, f: number): Transform;
/**
 * Set transform on one matrix from another matrix.
 */
export function setFromArray(transform1: Transform, transform2: Transform): Transform;
/**
 * A string version of the transform.  This can be used
 * for CSS transforms.
 */
export function toString(mat: Transform): string;
/**
 * Applies translation to the given transform.
 */
export function translate(transform: Transform, dx: number, dy: number): Transform;
