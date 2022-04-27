import { Coordinate } from '../coordinate';
import { EventsKey } from '../events';
import BaseEvent from '../events/Event';
import { Extent } from '../extent';
import { ObjectEvent } from '../Object';
import { TransformFunction } from '../proj';
import Geometry from './Geometry';
import GeometryType from './GeometryType';

export default class GeometryCollection extends Geometry {
    constructor(opt_geometries?: Geometry[]);
    protected computeExtent(extent: Extent): Extent;
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
    clone(): GeometryCollection;
    closestPointXY(x: number, y: number, closestPoint: Coordinate, minSquaredDistance: number): number;
    containsXY(x: number, y: number): boolean;
    /**
     * Clean up.
     */
    disposeInternal(): void;
    /**
     * Return the geometries that make up this geometry collection.
     */
    getGeometries(): Geometry[];
    getGeometriesArray(): Geometry[];
    getGeometriesArrayRecursive(): Geometry[];
    /**
     * Create a simplified version of this geometry using the Douglas Peucker algorithm.
     */
    getSimplifiedGeometry(squaredTolerance: number): GeometryCollection;
    /**
     * Get the type of this geometry.
     */
    getType(): GeometryType;
    /**
     * Test if the geometry and the passed extent intersect.
     */
    intersectsExtent(extent: Extent): boolean;
    isEmpty(): boolean;
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
    /**
     * Set the geometries that make up this geometry collection.
     */
    setGeometries(geometries: Geometry[]): void;
    setGeometriesArray(geometries: Geometry[]): void;
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
