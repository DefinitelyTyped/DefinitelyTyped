import { Coordinate } from './coordinate';
import { Extent } from './extent';
import Projection from './proj/Projection';
import Units from './proj/Units';

/**
 * A projection as {@link module:ol/proj/Projection}, SRS identifier
 * string or undefined.
 */
export type ProjectionLike = Projection | string;
/**
 * A transform function accepts an array of input coordinate values, an optional
 * output array, and an optional dimension (default should be 2).  The function
 * transforms the input coordinate values, populates the output array, and
 * returns the output array.
 */
export type TransformFunction = (p0: number[], p1?: number[], p2?: number) => number[];
/**
 * Add transforms to and from EPSG:4326 and EPSG:3857.  This function is called
 * by when this module is executed and should only need to be called again after
 * clearAllProjections() is called (e.g. in tests).
 */
export function addCommon(): void;
/**
 * Registers coordinate transform functions to convert coordinates between the
 * source projection and the destination projection.
 * The forward and inverse functions convert coordinate pairs; this function
 * converts these into the functions used internally which also handle
 * extents and coordinate arrays.
 */
export function addCoordinateTransforms(
    source: ProjectionLike,
    destination: ProjectionLike,
    forward: (p0: Coordinate) => Coordinate,
    inverse: (p0: Coordinate) => Coordinate,
): void;
/**
 * Registers transformation functions that don't alter coordinates. Those allow
 * to transform between projections with equal meaning.
 */
export function addEquivalentProjections(projections: Projection[]): void;
/**
 * Registers transformation functions to convert coordinates in any projection
 * in projection1 to any projection in projection2.
 */
export function addEquivalentTransforms(
    projections1: Projection[],
    projections2: Projection[],
    forwardTransform: TransformFunction,
    inverseTransform: TransformFunction,
): void;
/**
 * Add a Projection object to the list of supported projections that can be
 * looked up by their code.
 */
export function addProjection(projection: Projection): void;
export function addProjections(projections: Projection[]): void;
/**
 * Clear all cached projections and transforms.
 */
export function clearAllProjections(): void;
/**
 * Clear the user projection if set.  Note that this method is not yet a part of
 * the stable API.  Support for user projections is not yet complete and should
 * be considered experimental.
 */
export function clearUserProjection(): void;
export function cloneTransform(input: number[], opt_output?: number[], opt_dimension?: number): number[];
export function createProjection(projection: Projection | string | undefined, defaultCode: string): Projection;
/**
 * Creates a safe coordinate transform function from a coordinate transform function.
 * "Safe" means that it can handle wrapping of x-coordinates for global projections,
 * and that coordinates exceeding the source projection validity extent's range will be
 * clamped to the validity range.
 */
export function createSafeCoordinateTransform(
    sourceProj: Projection,
    destProj: Projection,
    transform: (p0: Coordinate) => Coordinate,
): (p0: Coordinate) => Coordinate;
/**
 * Creates a {@link module:ol/proj~TransformFunction} from a simple 2D coordinate transform
 * function.
 */
export function createTransformFromCoordinateTransform(
    coordTransform: (p0: Coordinate) => Coordinate,
): TransformFunction;
/**
 * Checks if two projections are the same, that is every coordinate in one
 * projection does represent the same geographic point as the same coordinate in
 * the other projection.
 */
export function equivalent(projection1: Projection, projection2: Projection): boolean;
/**
 * Transforms a coordinate from longitude/latitude to a different projection.
 */
export function fromLonLat(coordinate: Coordinate, opt_projection?: ProjectionLike): Coordinate;
/**
 * Return a coordinate transformed from the user projection.  If no user projection
 * is set, the original coordinate is returned.
 */
export function fromUserCoordinate(coordinate: number[], destProjection: ProjectionLike): number[];
/**
 * Return an extent transformed from the user projection.  If no user projection
 * is set, the original extent is returned.
 */
export function fromUserExtent(extent: Extent, destProjection: ProjectionLike): Extent;
/**
 * Fetches a Projection object for the code specified.
 */
export function get(projectionLike: ProjectionLike): Projection;
/**
 * Get the resolution of the point in degrees or distance units.
 * For projections with degrees as the unit this will simply return the
 * provided resolution. For other projections the point resolution is
 * by default estimated by transforming the 'point' pixel to EPSG:4326,
 * measuring its width and height on the normal sphere,
 * and taking the average of the width and height.
 * A custom function can be provided for a specific projection, either
 * by setting the getPointResolution option in the
 * {@link module:ol/proj/Projection~Projection} constructor or by using
 * {@link module:ol/proj/Projection~Projection#setGetPointResolution} to change an existing
 * projection object.
 */
export function getPointResolution(
    projection: ProjectionLike,
    resolution: number,
    point: Coordinate,
    opt_units?: Units,
): number;
/**
 * Given the projection-like objects, searches for a transformation
 * function to convert a coordinates array from the source projection to the
 * destination projection.
 */
export function getTransform(source: ProjectionLike, destination: ProjectionLike): TransformFunction;
/**
 * Searches in the list of transform functions for the function for converting
 * coordinates from the source projection to the destination projection.
 */
export function getTransformFromProjections(
    sourceProjection: Projection,
    destinationProjection: Projection,
): TransformFunction;
/**
 * Get the projection for coordinates supplied from and returned by API methods.
 * Note that this method is not yet a part of the stable API.  Support for user
 * projections is not yet complete and should be considered experimental.
 */
export function getUserProjection(): Projection;
export function identityTransform(input: number[], opt_output?: number[], opt_dimension?: number): number[];
/**
 * Set the projection for coordinates supplied from and returned by API methods.
 * Note that this method is not yet a part of the stable API.  Support for user
 * projections is not yet complete and should be considered experimental.
 */
export function setUserProjection(projection: ProjectionLike): void;
/**
 * Transforms a coordinate to longitude/latitude.
 */
export function toLonLat(coordinate: Coordinate, opt_projection?: ProjectionLike): Coordinate;
/**
 * Return a coordinate transformed into the user projection.  If no user projection
 * is set, the original coordinate is returned.
 */
export function toUserCoordinate(coordinate: number[], sourceProjection: ProjectionLike): number[];
/**
 * Return an extent transformed into the user projection.  If no user projection
 * is set, the original extent is returned.
 */
export function toUserExtent(extent: Extent, sourceProjection: ProjectionLike): Extent;
/**
 * Transforms a coordinate from source projection to destination projection.
 * This returns a new coordinate (and does not modify the original).
 * See {@link module:ol/proj~transformExtent} for extent transformation.
 * See the transform method of {@link module:ol/geom/Geometry~Geometry} and its
 * subclasses for geometry transforms.
 */
export function transform(coordinate: Coordinate, source: ProjectionLike, destination: ProjectionLike): Coordinate;
/**
 * Transforms an extent from source projection to destination projection.  This
 * returns a new extent (and does not modify the original).
 */
export function transformExtent(
    extent: Extent,
    source: ProjectionLike,
    destination: ProjectionLike,
    opt_stops?: number,
): Extent;
/**
 * Transforms the given point to the destination projection.
 */
export function transformWithProjections(
    point: Coordinate,
    sourceProjection: Projection,
    destinationProjection: Projection,
): Coordinate;
/**
 * Use geographic coordinates (WGS-84 datum) in API methods.  Note that this
 * method is not yet a part of the stable API.  Support for user projections is
 * not yet complete and should be considered experimental.
 */
export function useGeographic(): void;
