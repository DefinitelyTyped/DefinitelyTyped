import { ObjectEvent } from '../Object';
import { Coordinate } from '../coordinate';
import { EventsKey, ListenerFunction } from '../events';
import BaseEvent from '../events/Event';
import { Extent } from '../extent';
import GeometryLayout from './GeometryLayout';
import GeometryType from './GeometryType';
import Point from './Point';
import SimpleGeometry from './SimpleGeometry';

export type TMultiPointBaseEventTypes = 'change' | 'error';
export type TMultiPointObjectEventTypes = 'propertychange';
export default class MultiPoint extends SimpleGeometry {
    constructor(coordinates: Coordinate[] | number[], opt_layout?: GeometryLayout);
    /**
     * Append the passed point to this multipoint.
     */
    appendPoint(point: Point): void;
    /**
     * Make a complete copy of the geometry.
     */
    clone(): MultiPoint;
    closestPointXY(x: number, y: number, closestPoint: Coordinate, minSquaredDistance: number): number;
    /**
     * Return the coordinates of the multipoint.
     */
    getCoordinates(): Coordinate[];
    /**
     * Return the point at the specified index.
     */
    getPoint(index: number): Point;
    /**
     * Return the points of this multipoint.
     */
    getPoints(): Point[];
    /**
     * Get the type of this geometry.
     */
    getType(): GeometryType;
    /**
     * Test if the geometry and the passed extent intersect.
     */
    intersectsExtent(extent: Extent): boolean;
    /**
     * Set the coordinates of the multipoint.
     */
    setCoordinates(coordinates: Coordinate[], opt_layout?: GeometryLayout): void;
    on(type: TMultiPointBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    on(type: TMultiPointBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    once(type: TMultiPointBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    once(type: TMultiPointBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    un(type: TMultiPointBaseEventTypes | TMultiPointBaseEventTypes[], listener: ListenerFunction<BaseEvent>): void;
    on(type: TMultiPointObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    on(type: TMultiPointObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    once(type: TMultiPointObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    once(type: TMultiPointObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    un(
        type: TMultiPointObjectEventTypes | TMultiPointObjectEventTypes[],
        listener: ListenerFunction<ObjectEvent>,
    ): void;
}
