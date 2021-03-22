import Circle from './geom/Circle';
import Projection from './proj/Projection';

/**
 * An array of numbers representing an xy coordinate. Example: [16, 48].
 */
export type Coordinate = number[];
/**
 * A function that takes a {@link module:ol/coordinate~Coordinate} and
 * transforms it into a {string}.
 */
export type CoordinateFormat = (p0: Coordinate | undefined) => string;
/**
 * Add delta to coordinate. coordinate is modified in place and returned
 * by the function.
 * Example:
 *
 */
export function add(coordinate: Coordinate, delta: Coordinate): Coordinate;
/**
 * Calculates the point closest to the passed coordinate on the passed circle.
 */
export function closestOnCircle(coordinate: Coordinate, circle: Circle): Coordinate;
/**
 * Calculates the point closest to the passed coordinate on the passed segment.
 * This is the foot of the perpendicular of the coordinate to the segment when
 * the foot is on the segment, or the closest segment coordinate when the foot
 * is outside the segment.
 */
export function closestOnSegment(coordinate: Coordinate, segment: Coordinate[]): Coordinate;
/**
 * Returns a {@link module:ol/coordinate~CoordinateFormat} function that can be
 * used to format
 * a {Coordinate} to a string.
 * Example without specifying the fractional digits:
 * Example with explicitly specifying 2 fractional digits:
 *
 */
export function createStringXY(opt_fractionDigits?: number): CoordinateFormat;
export function degreesToStringHDMS(hemispheres: string, degrees: number, opt_fractionDigits?: number): string;
export function distance(coord1: Coordinate, coord2: Coordinate): number;
export function equals(coordinate1: Coordinate, coordinate2: Coordinate): boolean;
/**
 * Transforms the given {@link module:ol/coordinate~Coordinate} to a string
 * using the given string template. The strings {x} and {y} in the template
 * will be replaced with the first and second coordinate values respectively.
 * Example without specifying the fractional digits:
 * Example explicitly specifying the fractional digits:
 *
 */
export function format(coordinate: Coordinate, template: string, opt_fractionDigits?: number): string;
export function getWorldsAway(coordinate: Coordinate, projection: Projection, opt_sourceExtentWidth?: number): number;
/**
 * Rotate coordinate by angle. coordinate is modified in place and
 * returned by the function.
 * Example:
 *
 */
export function rotate(coordinate: Coordinate, angle: number): Coordinate;
/**
 * Scale coordinate by scale. coordinate is modified in place and returned
 * by the function.
 * Example:
 *
 */
export function scale(coordinate: Coordinate, scale: number): Coordinate;
export function squaredDistance(coord1: Coordinate, coord2: Coordinate): number;
/**
 * Calculate the squared distance from a coordinate to a line segment.
 */
export function squaredDistanceToSegment(coordinate: Coordinate, segment: Coordinate[]): number;
/**
 * Format a geographic coordinate with the hemisphere, degrees, minutes, and
 * seconds.
 * Example without specifying fractional digits:
 * Example explicitly specifying 1 fractional digit:
 *
 */
export function toStringHDMS(coordinate: Coordinate, opt_fractionDigits?: number): string;
/**
 * Format a coordinate as a comma delimited string.
 * Example without specifying fractional digits:
 * Example explicitly specifying 1 fractional digit:
 *
 */
export function toStringXY(coordinate: Coordinate, opt_fractionDigits?: number): string;
/**
 * Modifies the provided coordinate in-place to be within the real world
 * extent. The lower projection extent boundary is inclusive, the upper one
 * exclusive.
 */
export function wrapX(coordinate: Coordinate, projection: Projection): Coordinate;
