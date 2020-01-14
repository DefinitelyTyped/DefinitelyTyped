import { Coordinate } from '../coordinate';
import { EventsKey } from '../events';
import BaseEvent from '../events/Event';
import { Extent } from '../extent';
import { ObjectEvent } from '../Object';
import { TransformFunction } from '../proj';
import Geometry from './Geometry';
import GeometryLayout from './GeometryLayout';
import GeometryType from './GeometryType';
import SimpleGeometry from './SimpleGeometry';

export default class LineString extends SimpleGeometry {
    constructor(coordinates: Coordinate[] | number[], opt_layout?: GeometryLayout);
    appendCoordinate(coordinate: Coordinate): void;
    clone(): LineString;
    closestPointXY(x: number, y: number, closestPoint: Coordinate, minSquaredDistance: number): number;
    forEachSegment<T, S>(callback: (this: S, p0: Coordinate, p1: Coordinate) => T): T | boolean;
    getCoordinateAt(fraction: number, opt_dest?: Coordinate): Coordinate;
    getCoordinateAtM(m: number, opt_extrapolate?: boolean): Coordinate;
    getCoordinates(): Coordinate[];
    getFlatMidpoint(): number[];
    getLength(): number;
    getType(): GeometryType;
    intersectsExtent(extent: Extent): boolean;
    setCoordinates(coordinates: Coordinate[], opt_layout?: GeometryLayout): void;
    simplifyTransformed(squaredTolerance: number, opt_transform?: TransformFunction): Geometry;
    on(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    once(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    un(type: string | string[], listener: (p0: any) => void): void;
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
