import { Coordinate } from '../coordinate';
import { EventsKey } from '../events';
import Event from '../events/Event';
import { ObjectEvent } from '../Object';
import GeometryLayout from './GeometryLayout';
import SimpleGeometry from './SimpleGeometry';

export default class LineString extends SimpleGeometry {
    constructor(coordinates: Coordinate[] | number[], opt_layout?: GeometryLayout);
    appendCoordinate(coordinate: Coordinate): void;
    forEachSegment<T, S>(callback: (this: S, p0: Coordinate, p1: Coordinate) => T): T | boolean;
    getCoordinateAt(fraction: number, opt_dest?: Coordinate): Coordinate;
    getCoordinateAtM(m: number, opt_extrapolate?: boolean): Coordinate;
    getFlatMidpoint(): number[];
    getLength(): number;
    on(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    once(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    un(type: string | string[], listener: (p0: any) => void): void;
    on(type: 'change', listener: (evt: Event) => void): EventsKey;
    once(type: 'change', listener: (evt: Event) => void): EventsKey;
    un(type: 'change', listener: (evt: Event) => void): void;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): void;
}
