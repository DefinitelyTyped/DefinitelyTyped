import { Coordinate } from 'ol/coordinate';
import { EventsKey } from 'ol/events';
import Event from 'ol/events/Event';
import GeometryLayout from 'ol/geom/GeometryLayout';
import SimpleGeometry from 'ol/geom/SimpleGeometry';
import { ObjectEvent } from 'ol/Object';
export default class LineString extends SimpleGeometry {
    constructor(coordinates: Coordinate[] | number[], opt_layout?: GeometryLayout);
    appendCoordinate(coordinate: Coordinate): void;
    forEachSegment<T, S>(callback: ((this: S, param1: Coordinate, param2: Coordinate) => T)): T | boolean;
    getCoordinateAt(fraction: number, opt_dest?: Coordinate): Coordinate;
    getCoordinateAtM(m: number, opt_extrapolate?: boolean): Coordinate;
    getFlatMidpoint(): number[];
    getLength(): number;
    on(type: string | string[], listener: ((param0: any) => void)): EventsKey | EventsKey[];
    once(type: string | string[], listener: ((param0: any) => void)): EventsKey | EventsKey[];
    un(type: string | string[], listener: ((param0: any) => void)): void;
    on(type: 'change', listener: (evt: Event) => void): EventsKey;
    once(type: 'change', listener: (evt: Event) => void): EventsKey;
    un(type: 'change', listener: (evt: Event) => void): void;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): void;
}
