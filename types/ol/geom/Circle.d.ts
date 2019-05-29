import { Coordinate } from 'ol/coordinate';
import { EventsKey } from 'ol/events';
import Event from 'ol/events/Event';
import Geometry from 'ol/geom/Geometry';
import GeometryLayout from 'ol/geom/GeometryLayout';
import SimpleGeometry from 'ol/geom/SimpleGeometry';
import { ObjectEvent } from 'ol/Object';
import { ProjectionLike } from 'ol/proj';
export default class Circle extends SimpleGeometry {
    constructor(center: Coordinate, opt_radius?: number, opt_layout?: GeometryLayout);
    getCenter(): Coordinate;
    getRadius(): number;
    setCenter(center: Coordinate): void;
    setCenterAndRadius(center: Coordinate, radius: number, opt_layout?: GeometryLayout): void;
    setRadius(radius: number): void;
    transform(source: ProjectionLike, destination: ProjectionLike): Circle;
    transform(source: ProjectionLike, destination: ProjectionLike): Geometry;
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
