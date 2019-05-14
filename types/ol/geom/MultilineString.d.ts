import { Coordinate } from 'ol/coordinate';
import { EventsKey } from 'ol/events';
import Event from 'ol/events/Event';
import GeometryLayout from 'ol/geom/GeometryLayout';
import LineString from 'ol/geom/LineString';
import SimpleGeometry from 'ol/geom/SimpleGeometry';
import { ObjectEvent } from 'ol/Object';
export default class MultiLineString extends SimpleGeometry {
    constructor(coordinates: any[] | number[], opt_layout?: GeometryLayout, opt_ends?: number[]);
    appendLineString(lineString: LineString): void;
    getCoordinateAtM(m: number, opt_extrapolate?: boolean, opt_interpolate?: boolean): Coordinate;
    getEnds(): number[];
    getFlatMidpoints(): number[];
    getLineString(index: number): LineString;
    getLineStrings(): LineString[];
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
