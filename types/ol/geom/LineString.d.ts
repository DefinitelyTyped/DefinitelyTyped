import { Coordinate } from '../coordinate';
import { EventsKey } from '../events';
import BaseEvent from '../events/Event';
import { Extent } from '../extent';
import { ObjectEvent } from '../Object';
import GeometryLayout from './GeometryLayout';
import GeometryType from './GeometryType';
import SimpleGeometry from './SimpleGeometry';

export default class LineString extends SimpleGeometry {
    constructor(coordinates: Coordinate[] | number[], opt_layout?: GeometryLayout);
    protected getSimplifiedGeometryInternal(squaredTolerance: number): LineString;
    /**
     * Append the passed coordinate to the coordinates of the linestring.
     */
    appendCoordinate(coordinate: Coordinate): void;
    /**
     * Make a complete copy of the geometry.
     */
    clone(): LineString;
    closestPointXY(x: number, y: number, closestPoint: Coordinate, minSquaredDistance: number): number;
    /**
     * Iterate over each segment, calling the provided callback.
     * If the callback returns a truthy value the function returns that
     * value immediately. Otherwise the function returns false.
     */
    forEachSegment<T, S>(callback: (this: S, p0: Coordinate, p1: Coordinate) => T): T | boolean;
    /**
     * Return the coordinate at the provided fraction along the linestring.
     * The fraction is a number between 0 and 1, where 0 is the start of the
     * linestring and 1 is the end.
     */
    getCoordinateAt(fraction: number, opt_dest?: Coordinate): Coordinate;
    /**
     * Returns the coordinate at m using linear interpolation, or null if no
     * such coordinate exists.
     * opt_extrapolate controls extrapolation beyond the range of Ms in the
     * MultiLineString. If opt_extrapolate is true then Ms less than the first
     * M will return the first coordinate and Ms greater than the last M will
     * return the last coordinate.
     */
    getCoordinateAtM(m: number, opt_extrapolate?: boolean): Coordinate;
    /**
     * Return the coordinates of the linestring.
     */
    getCoordinates(): Coordinate[];
    getFlatMidpoint(): number[];
    /**
     * Return the length of the linestring on projected plane.
     */
    getLength(): number;
    /**
     * Get the type of this geometry.
     */
    getType(): GeometryType;
    /**
     * Test if the geometry and the passed extent intersect.
     */
    intersectsExtent(extent: Extent): boolean;
    /**
     * Set the coordinates of the linestring.
     */
    setCoordinates(coordinates: Coordinate[], opt_layout?: GeometryLayout): void;
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
