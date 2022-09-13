import { Coordinate } from '../coordinate';
import { EventsKey } from '../events';
import BaseEvent from '../events/Event';
import { Extent } from '../extent';
import { ObjectEvent } from '../Object';
import { TransformFunction } from '../proj';
import { Transform } from '../transform';
import Geometry from './Geometry';
import GeometryLayout from './GeometryLayout';
import GeometryType from './GeometryType';

export default abstract class SimpleGeometry extends Geometry {
    constructor();
    protected flatCoordinates: number[];
    protected layout: GeometryLayout;
    protected stride: number;
    protected computeExtent(extent: Extent): Extent;
    protected getSimplifiedGeometryInternal(squaredTolerance: number): SimpleGeometry;
    protected setLayout(layout: GeometryLayout | undefined, coordinates: any[], nesting: number): void;
    /**
     * Apply a transform function to the coordinates of the geometry.
     * The geometry is modified in place.
     * If you do not want the geometry modified in place, first clone() it and
     * then use this function on the clone.
     */
    applyTransform(transformFn: TransformFunction): void;
    /**
     * Make a complete copy of the geometry.
     */
    abstract clone(): Geometry;
    abstract closestPointXY(x: number, y: number, closestPoint: Coordinate, minSquaredDistance: number): number;
    abstract getCoordinates(): any[];
    /**
     * Return the first coordinate of the geometry.
     */
    getFirstCoordinate(): Coordinate;
    getFlatCoordinates(): number[];
    /**
     * Return the last coordinate of the geometry.
     */
    getLastCoordinate(): Coordinate;
    /**
     * Return the {@link module:ol/geom/GeometryLayout layout} of the geometry.
     */
    getLayout(): GeometryLayout;
    /**
     * Create a simplified version of this geometry using the Douglas Peucker algorithm.
     */
    getSimplifiedGeometry(squaredTolerance: number): SimpleGeometry;
    getStride(): number;
    /**
     * Get the type of this geometry.
     */
    abstract getType(): GeometryType;
    /**
     * Test if the geometry and the passed extent intersect.
     */
    abstract intersectsExtent(extent: Extent): boolean;
    /**
     * Rotate the geometry around a given coordinate. This modifies the geometry
     * coordinates in place.
     */
    rotate(angle: number, anchor: Coordinate): void;
    /**
     * Scale the geometry (with an optional origin).  This modifies the geometry
     * coordinates in place.
     */
    scale(sx: number, opt_sy?: number, opt_anchor?: Coordinate): void;
    abstract setCoordinates(coordinates: any[], opt_layout?: GeometryLayout): void;
    setFlatCoordinates(layout: GeometryLayout, flatCoordinates: number[]): void;
    /**
     * Get a transformed and simplified version of the geometry.
     */
    simplifyTransformed(squaredTolerance: number, opt_transform?: TransformFunction): Geometry;
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
export function getStrideForLayout(layout: GeometryLayout): number;
export function transformGeom2D(simpleGeometry: SimpleGeometry, transform: Transform, opt_dest?: number[]): number[];
