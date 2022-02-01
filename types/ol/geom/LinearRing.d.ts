import { ObjectEvent } from '../Object';
import { Coordinate } from '../coordinate';
import { EventsKey, ListenerFunction } from '../events';
import BaseEvent from '../events/Event';
import { Extent } from '../extent';
import GeometryLayout from './GeometryLayout';
import GeometryType from './GeometryType';
import SimpleGeometry from './SimpleGeometry';

export type TLinearRingBaseEventTypes = 'change' | 'error';
export type TLinearRingObjectEventTypes = 'propertychange';
export default class LinearRing extends SimpleGeometry {
    constructor(coordinates: Coordinate[] | number[], opt_layout?: GeometryLayout);
    protected getSimplifiedGeometryInternal(squaredTolerance: number): LinearRing;
    /**
     * Make a complete copy of the geometry.
     */
    clone(): LinearRing;
    closestPointXY(x: number, y: number, closestPoint: Coordinate, minSquaredDistance: number): number;
    /**
     * Return the area of the linear ring on projected plane.
     */
    getArea(): number;
    /**
     * Return the coordinates of the linear ring.
     */
    getCoordinates(): Coordinate[];
    /**
     * Get the type of this geometry.
     */
    getType(): GeometryType;
    /**
     * Test if the geometry and the passed extent intersect.
     */
    intersectsExtent(extent: Extent): boolean;
    /**
     * Set the coordinates of the linear ring.
     */
    setCoordinates(coordinates: Coordinate[], opt_layout?: GeometryLayout): void;
    on(type: TLinearRingBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    on(type: TLinearRingBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    once(type: TLinearRingBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    once(type: TLinearRingBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    un(type: TLinearRingBaseEventTypes | TLinearRingBaseEventTypes[], listener: ListenerFunction<BaseEvent>): void;
    on(type: TLinearRingObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    on(type: TLinearRingObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    once(type: TLinearRingObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    once(type: TLinearRingObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    un(
        type: TLinearRingObjectEventTypes | TLinearRingObjectEventTypes[],
        listener: ListenerFunction<ObjectEvent>,
    ): void;
}
