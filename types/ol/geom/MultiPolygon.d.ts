import { Coordinate } from '../coordinate';
import { EventsKey } from '../events';
import Event from '../events/Event';
import { ObjectEvent } from '../Object';
import GeometryLayout from './GeometryLayout';
import MultiPoint from './MultiPoint';
import Polygon from './Polygon';
import SimpleGeometry from './SimpleGeometry';

export default class MultiPolygon extends SimpleGeometry {
    constructor(coordinates: (Coordinate[][] | Polygon)[] | number[], opt_layout?: GeometryLayout, opt_endss?: number[][]);
    appendPolygon(polygon: Polygon): void;
    getArea(): number;
    getEndss(): number[][];
    getFlatInteriorPoints(): number[];
    getInteriorPoints(): MultiPoint;
    getOrientedFlatCoordinates(): number[];
    getPolygon(index: number): Polygon;
    getPolygons(): Polygon[];
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
