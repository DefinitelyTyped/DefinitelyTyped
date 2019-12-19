import { Coordinate } from '../coordinate';
import { EventsKey } from '../events';
import Event from '../events/Event';
import { ObjectEvent } from '../Object';
import GeometryLayout from './GeometryLayout';
import LineString from './LineString';
import SimpleGeometry from './SimpleGeometry';

export default class MultiLineString extends SimpleGeometry {
    constructor(coordinates: (Coordinate[] | LineString)[] | number[], opt_layout?: GeometryLayout, opt_ends?: number[]);
    appendLineString(lineString: LineString): void;
    getCoordinateAtM(m: number, opt_extrapolate?: boolean, opt_interpolate?: boolean): Coordinate;
    getEnds(): number[];
    getFlatMidpoints(): number[];
    getLineString(index: number): LineString;
    getLineStrings(): LineString[];
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
