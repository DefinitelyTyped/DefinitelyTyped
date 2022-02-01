import { ObjectEvent } from '../Object';
import { Coordinate } from '../coordinate';
import { EventsKey, ListenerFunction } from '../events';
import BaseEvent from '../events/Event';
import { Extent } from '../extent';
import GeometryLayout from './GeometryLayout';
import GeometryType from './GeometryType';
import SimpleGeometry from './SimpleGeometry';

export type TPointBaseEventTypes = 'change' | 'error';
export type TPointObjectEventTypes = 'propertychange';
export default class Point extends SimpleGeometry {
    constructor(coordinates: Coordinate, opt_layout?: GeometryLayout);
    protected computeExtent(extent: Extent): Extent;
    /**
     * Make a complete copy of the geometry.
     */
    clone(): Point;
    closestPointXY(x: number, y: number, closestPoint: Coordinate, minSquaredDistance: number): number;
    /**
     * Return the coordinate of the point.
     */
    getCoordinates(): Coordinate;
    /**
     * Get the type of this geometry.
     */
    getType(): GeometryType;
    /**
     * Test if the geometry and the passed extent intersect.
     */
    intersectsExtent(extent: Extent): boolean;
    setCoordinates(coordinates: any[], opt_layout?: GeometryLayout): void;
    on(type: TPointBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    on(type: TPointBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    once(type: TPointBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    once(type: TPointBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    un(type: TPointBaseEventTypes | TPointBaseEventTypes[], listener: ListenerFunction<BaseEvent>): void;
    on(type: TPointObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    on(type: TPointObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    once(type: TPointObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    once(type: TPointObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    un(type: TPointObjectEventTypes | TPointObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): void;
}
