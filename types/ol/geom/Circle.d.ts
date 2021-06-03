import { Coordinate } from '../coordinate';
import { EventsKey } from '../events';
import BaseEvent from '../events/Event';
import { Extent } from '../extent';
import { ObjectEvent } from '../Object';
import { ProjectionLike } from '../proj';
import GeometryLayout from './GeometryLayout';
import GeometryType from './GeometryType';
import SimpleGeometry from './SimpleGeometry';

export default class Circle extends SimpleGeometry {
    constructor(center: Coordinate, opt_radius?: number, opt_layout?: GeometryLayout);
    protected computeExtent(extent: Extent): Extent;
    /**
     * Make a complete copy of the geometry.
     */
    clone(): Circle;
    closestPointXY(x: number, y: number, closestPoint: Coordinate, minSquaredDistance: number): number;
    containsXY(x: number, y: number): boolean;
    /**
     * Return the center of the circle as {@link module:ol/coordinate~Coordinate coordinate}.
     */
    getCenter(): Coordinate;
    getCoordinates(): any[];
    /**
     * Return the radius of the circle.
     */
    getRadius(): number;
    /**
     * Get the type of this geometry.
     */
    getType(): GeometryType;
    /**
     * Test if the geometry and the passed extent intersect.
     */
    intersectsExtent(extent: Extent): boolean;
    /**
     * Rotate the geometry around a given coordinate. This modifies the geometry
     * coordinates in place.
     */
    rotate(angle: number, anchor: Coordinate): void;
    /**
     * Set the center of the circle as {@link module:ol/coordinate~Coordinate coordinate}.
     */
    setCenter(center: Coordinate): void;
    /**
     * Set the center (as {@link module:ol/coordinate~Coordinate coordinate}) and the radius (as
     * number) of the circle.
     */
    setCenterAndRadius(center: Coordinate, radius: number, opt_layout?: GeometryLayout): void;
    setCoordinates(coordinates: any[], opt_layout?: GeometryLayout): void;
    /**
     * Set the radius of the circle. The radius is in the units of the projection.
     */
    setRadius(radius: number): void;
    /**
     * Transform each coordinate of the circle from one coordinate reference system
     * to another. The geometry is modified in place.
     * If you do not want the geometry modified in place, first clone() it and
     * then use this function on the clone.
     * Internally a circle is currently represented by two points: the center of
     * the circle [cx, cy], and the point to the right of the circle
     * [cx + r, cy]. This transform function just transforms these two points.
     * So the resulting geometry is also a circle, and that circle does not
     * correspond to the shape that would be obtained by transforming every point
     * of the original circle.
     */
    transform(source: ProjectionLike, destination: ProjectionLike): Circle;
    /**
     * Translate the geometry.  This modifies the geometry coordinates in place.  If
     * instead you want a new geometry, first clone() this geometry.
     */
    translate(deltaX: number, deltaY: number): void;
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
