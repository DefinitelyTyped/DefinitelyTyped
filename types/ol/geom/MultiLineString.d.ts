import { Coordinate } from '../coordinate';
import { EventsKey } from '../events';
import BaseEvent from '../events/Event';
import { Extent } from '../extent';
import { ObjectEvent } from '../Object';
import GeometryLayout from './GeometryLayout';
import GeometryType from './GeometryType';
import LineString from './LineString';
import SimpleGeometry from './SimpleGeometry';

export default class MultiLineString extends SimpleGeometry {
    constructor(
        coordinates: (Coordinate[] | LineString)[] | number[],
        opt_layout?: GeometryLayout,
        opt_ends?: number[],
    );
    protected getSimplifiedGeometryInternal(squaredTolerance: number): MultiLineString;
    /**
     * Append the passed linestring to the multilinestring.
     */
    appendLineString(lineString: LineString): void;
    /**
     * Make a complete copy of the geometry.
     */
    clone(): MultiLineString;
    closestPointXY(x: number, y: number, closestPoint: Coordinate, minSquaredDistance: number): number;
    /**
     * Returns the coordinate at m using linear interpolation, or null if no
     * such coordinate exists.
     * opt_extrapolate controls extrapolation beyond the range of Ms in the
     * MultiLineString. If opt_extrapolate is true then Ms less than the first
     * M will return the first coordinate and Ms greater than the last M will
     * return the last coordinate.
     * opt_interpolate controls interpolation between consecutive LineStrings
     * within the MultiLineString. If opt_interpolate is true the coordinates
     * will be linearly interpolated between the last coordinate of one LineString
     * and the first coordinate of the next LineString.  If opt_interpolate is
     * false then the function will return null for Ms falling between
     * LineStrings.
     */
    getCoordinateAtM(m: number, opt_extrapolate?: boolean, opt_interpolate?: boolean): Coordinate;
    /**
     * Return the coordinates of the multilinestring.
     */
    getCoordinates(): Coordinate[][];
    getEnds(): number[];
    getFlatMidpoints(): number[];
    /**
     * Return the linestring at the specified index.
     */
    getLineString(index: number): LineString;
    /**
     * Return the linestrings of this multilinestring.
     */
    getLineStrings(): LineString[];
    /**
     * Get the type of this geometry.
     */
    getType(): GeometryType;
    /**
     * Test if the geometry and the passed extent intersect.
     */
    intersectsExtent(extent: Extent): boolean;
    /**
     * Set the coordinates of the multilinestring.
     */
    setCoordinates(coordinates: Coordinate[][], opt_layout?: GeometryLayout): void;
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
