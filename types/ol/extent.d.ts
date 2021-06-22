import { Coordinate } from './coordinate';
import Corner from './extent/Corner';
import Relationship from './extent/Relationship';
import { TransformFunction } from './proj';
import Projection from './proj/Projection';
import { Size } from './size';

/**
 * An array of numbers representing an extent: [minx, miny, maxx, maxy].
 */
export type Extent = [number, number, number, number];
/**
 * Apply a transform function to the extent.
 */
export function applyTransform(
    extent: Extent,
    transformFn: TransformFunction,
    opt_extent?: Extent,
    opt_stops?: number,
): Extent;
/**
 * Determine if two extents are approximately equivalent.
 */
export function approximatelyEquals(extent1: Extent, extent2: Extent, tolerance: number): boolean;
/**
 * Build an extent that includes all given coordinates.
 */
export function boundingExtent(coordinates: Coordinate[]): Extent;
/**
 * Return extent increased by the provided value.
 */
export function buffer(extent: Extent, value: number, opt_extent?: Extent): Extent;
/**
 * Creates a clone of an extent.
 */
export function clone(extent: Extent, opt_extent?: Extent): Extent;
export function closestSquaredDistanceXY(extent: Extent, x: number, y: number): number;
/**
 * Check if the passed coordinate is contained or on the edge of the extent.
 */
export function containsCoordinate(extent: Extent, coordinate: Coordinate): boolean;
/**
 * Check if one extent contains another.
 * An extent is deemed contained if it lies completely within the other extent,
 * including if they share one or more edges.
 */
export function containsExtent(extent1: Extent, extent2: Extent): boolean;
/**
 * Check if the passed coordinate is contained or on the edge of the extent.
 */
export function containsXY(extent: Extent, x: number, y: number): boolean;
/**
 * Get the relationship between a coordinate and extent.
 */
export function coordinateRelationship(extent: Extent, coordinate: Coordinate): Relationship;
/**
 * Create an empty extent.
 */
export function createEmpty(): Extent;
/**
 * Create a new extent or update the provided extent.
 */
export function createOrUpdate(minX: number, minY: number, maxX: number, maxY: number, opt_extent?: Extent): Extent;
/**
 * Create a new empty extent or make the provided one empty.
 */
export function createOrUpdateEmpty(opt_extent?: Extent): Extent;
export function createOrUpdateFromCoordinate(coordinate: Coordinate, opt_extent?: Extent): Extent;
export function createOrUpdateFromCoordinates(coordinates: Coordinate[], opt_extent?: Extent): Extent;
export function createOrUpdateFromFlatCoordinates(
    flatCoordinates: number[],
    offset: number,
    end: number,
    stride: number,
    opt_extent?: Extent,
): Extent;
export function createOrUpdateFromRings(rings: Coordinate[][], opt_extent?: Extent): Extent;
/**
 * Determine if two extents are equivalent.
 */
export function equals(extent1: Extent, extent2: Extent): boolean;
/**
 * Modify an extent to include another extent.
 */
export function extend(extent1: Extent, extent2: Extent): Extent;
export function extendCoordinate(extent: Extent, coordinate: Coordinate): void;
export function extendCoordinates(extent: Extent, coordinates: Coordinate[]): Extent;
export function extendFlatCoordinates(
    extent: Extent,
    flatCoordinates: number[],
    offset: number,
    end: number,
    stride: number,
): Extent;
export function extendRings(extent: Extent, rings: Coordinate[][]): Extent;
export function extendXY(extent: Extent, x: number, y: number): void;
/**
 * This function calls callback for each corner of the extent. If the
 * callback returns a truthy value the function returns that value
 * immediately. Otherwise the function returns false.
 */
export function forEachCorner<S>(extent: Extent, callback: (p0: Coordinate) => S): S | boolean;
/**
 * Get the size of an extent.
 */
export function getArea(extent: Extent): number;
/**
 * Get the bottom left coordinate of an extent.
 */
export function getBottomLeft(extent: Extent): Coordinate;
/**
 * Get the bottom right coordinate of an extent.
 */
export function getBottomRight(extent: Extent): Coordinate;
/**
 * Get the center coordinate of an extent.
 */
export function getCenter(extent: Extent): Coordinate;
/**
 * Get a corner coordinate of an extent.
 */
export function getCorner(extent: Extent, corner: Corner): Coordinate;
export function getEnlargedArea(extent1: Extent, extent2: Extent): number;
export function getForViewAndSize(
    center: Coordinate,
    resolution: number,
    rotation: number,
    size: Size,
    opt_extent?: Extent,
): Extent;
/**
 * Get the height of an extent.
 */
export function getHeight(extent: Extent): number;
/**
 * Get the intersection of two extents.
 */
export function getIntersection(extent1: Extent, extent2: Extent, opt_extent?: Extent): Extent;
export function getIntersectionArea(extent1: Extent, extent2: Extent): number;
export function getMargin(extent: Extent): number;
/**
 * Get the size (width, height) of an extent.
 */
export function getSize(extent: Extent): Size;
/**
 * Get the top left coordinate of an extent.
 */
export function getTopLeft(extent: Extent): Coordinate;
/**
 * Get the top right coordinate of an extent.
 */
export function getTopRight(extent: Extent): Coordinate;
/**
 * Get the width of an extent.
 */
export function getWidth(extent: Extent): number;
/**
 * Determine if one extent intersects another.
 */
export function intersects(extent1: Extent, extent2: Extent): boolean;
/**
 * Determine if the segment between two coordinates intersects (crosses,
 * touches, or is contained by) the provided extent.
 */
export function intersectsSegment(extent: Extent, start: Coordinate, end: Coordinate): boolean;
/**
 * Determine if an extent is empty.
 */
export function isEmpty(extent: Extent): boolean;
export function returnOrUpdate(extent: Extent, opt_extent?: Extent): Extent;
export function scaleFromCenter(extent: Extent, value: number): void;
/**
 * Modifies the provided extent in-place to be within the real world
 * extent.
 */
export function wrapX(extent: Extent, projection: Projection): Extent;
