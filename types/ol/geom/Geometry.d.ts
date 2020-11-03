import { Coordinate } from '../coordinate';
import { EventsKey } from '../events';
import BaseEvent from '../events/Event';
import { Extent } from '../extent';
import BaseObject, { ObjectEvent } from '../Object';
import { ProjectionLike, TransformFunction } from '../proj';
import GeometryType from './GeometryType';

export default abstract class Geometry extends BaseObject {
    constructor();
    protected simplifiedGeometryMaxMinSquaredTolerance: number;
    protected simplifiedGeometryRevision: number;
    protected abstract computeExtent(extent: Extent): Extent;
    /**
     * Apply a transform function to the coordinates of the geometry.
     * The geometry is modified in place.
     * If you do not want the geometry modified in place, first clone() it and
     * then use this function on the clone.
     */
    abstract applyTransform(transformFn: TransformFunction): void;
    /**
     * Make a complete copy of the geometry.
     */
    abstract clone(): Geometry;
    abstract closestPointXY(x: number, y: number, closestPoint: Coordinate, minSquaredDistance: number): number;
    containsXY(x: number, y: number): boolean;
    /**
     * Return the closest point of the geometry to the passed point as
     * {@link module:ol/coordinate~Coordinate coordinate}.
     */
    getClosestPoint(point: Coordinate, opt_closestPoint?: Coordinate): Coordinate;
    /**
     * Get the extent of the geometry.
     */
    getExtent(opt_extent?: Extent): Extent;
    /**
     * Create a simplified version of this geometry using the Douglas Peucker
     * algorithm.
     * See https://en.wikipedia.org/wiki/Ramer-Douglas-Peucker_algorithm.
     */
    abstract getSimplifiedGeometry(squaredTolerance: number): Geometry;
    /**
     * Get the type of this geometry.
     */
    abstract getType(): GeometryType;
    /**
     * Returns true if this geometry includes the specified coordinate. If the
     * coordinate is on the boundary of the geometry, returns false.
     */
    intersectsCoordinate(coordinate: Coordinate): boolean;
    /**
     * Test if the geometry and the passed extent intersect.
     */
    abstract intersectsExtent(extent: Extent): boolean;
    /**
     * Rotate the geometry around a given coordinate. This modifies the geometry
     * coordinates in place.
     */
    abstract rotate(angle: number, anchor: Coordinate): void;
    /**
     * Scale the geometry (with an optional origin).  This modifies the geometry
     * coordinates in place.
     */
    abstract scale(sx: number, opt_sy?: number, opt_anchor?: Coordinate): void;
    /**
     * Create a simplified version of this geometry.  For linestrings, this uses
     * the Douglas Peucker
     * algorithm.  For polygons, a quantization-based
     * simplification is used to preserve topology.
     */
    simplify(tolerance: number): Geometry;
    /**
     * Get a transformed and simplified version of the geometry.
     */
    abstract simplifyTransformed(squaredTolerance: number, opt_transform?: TransformFunction): Geometry;
    /**
     * Transform each coordinate of the geometry from one coordinate reference
     * system to another. The geometry is modified in place.
     * For example, a line will be transformed to a line and a circle to a circle.
     * If you do not want the geometry modified in place, first clone() it and
     * then use this function on the clone.
     */
    transform(source: ProjectionLike, destination: ProjectionLike): Geometry;
    /**
     * Translate the geometry.  This modifies the geometry coordinates in place.  If
     * instead you want a new geometry, first clone() this geometry.
     */
    abstract translate(deltaX: number, deltaY: number): void;
    on(type: string | string[], listener: (p0: any) => any): EventsKey | EventsKey[];
    once(type: string | string[], listener: (p0: any) => any): EventsKey | EventsKey[];
    un(type: string | string[], listener: (p0: any) => any): void;
    on(type: 'change', listener: (evt: BaseEvent) => void): EventsKey;
    once(type: 'change', listener: (evt: BaseEvent) => void): EventsKey;
    un(type: 'change', listener: (evt: BaseEvent) => void): void;
    on(type: 'error', listener: (evt: BaseEvent) => void): EventsKey;
    once(type: 'error', listener: (evt: BaseEvent) => void): EventsKey;
    un(type: 'error', listener: (evt: BaseEvent) => void): void;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): void;
}
