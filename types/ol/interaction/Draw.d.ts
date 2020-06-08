import Collection from '../Collection';
import { Coordinate } from '../coordinate';
import { EventsKey, ListenerFunction } from '../events';
import { Condition } from '../events/condition';
import BaseEvent from '../events/Event';
import Feature from '../Feature';
import Geometry from '../geom/Geometry';
import GeometryType from '../geom/GeometryType';
import LineString from '../geom/LineString';
import SimpleGeometry from '../geom/SimpleGeometry';
import VectorLayer from '../layer/Vector';
import { ObjectEvent } from '../Object';
import Projection from '../proj/Projection';
import VectorSource from '../source/Vector';
import { StyleFunction, StyleLike } from '../style/Style';
import PointerInteraction from './Pointer';

export type GeometryFunction = (p0: SketchCoordType, p1?: SimpleGeometry, p2?: Projection) => SimpleGeometry;
export type LineCoordType = Coordinate[];
export interface Options {
    type: GeometryType;
    clickTolerance?: number;
    features?: Collection<Feature<Geometry>>;
    source?: VectorSource<Geometry>;
    dragVertexDelay?: number;
    snapTolerance?: number;
    stopClick?: boolean;
    maxPoints?: number;
    minPoints?: number;
    finishCondition?: Condition;
    style?: StyleLike;
    geometryFunction?: GeometryFunction;
    geometryName?: string;
    condition?: Condition;
    freehand?: boolean;
    freehandCondition?: Condition;
    wrapX?: boolean;
}
export type PointCoordType = Coordinate;
export type PolyCoordType = Coordinate[][];
export type SketchCoordType = PointCoordType | LineCoordType | PolyCoordType;
export enum DrawEventType {
    DRAWSTART = 'drawstart',
    DRAWEND = 'drawend',
    DRAWABORT = 'drawabort',
}
export default class Draw extends PointerInteraction {
    constructor(options: Options);
    abortDrawing(): void;
    appendCoordinates(coordinates: LineCoordType): void;
    extend(feature: Feature<LineString>): void;
    finishDrawing(): void;
    getOverlay(): VectorLayer;
    removeLastPoint(): void;
    on(type: string | string[], listener: ListenerFunction): EventsKey | EventsKey[];
    once(type: string | string[], listener: (p0: any) => any): EventsKey | EventsKey[];
    un(type: string | string[], listener: (p0: any) => any): void;
    on(type: 'change', listener: (evt: BaseEvent) => void): EventsKey;
    once(type: 'change', listener: (evt: BaseEvent) => void): EventsKey;
    un(type: 'change', listener: (evt: BaseEvent) => void): void;
    on(type: 'change:active', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:active', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:active', listener: (evt: ObjectEvent) => void): void;
    on(type: 'drawabort', listener: (evt: DrawEvent) => void): EventsKey;
    once(type: 'drawabort', listener: (evt: DrawEvent) => void): EventsKey;
    un(type: 'drawabort', listener: (evt: DrawEvent) => void): void;
    on(type: 'drawend', listener: (evt: DrawEvent) => void): EventsKey;
    once(type: 'drawend', listener: (evt: DrawEvent) => void): EventsKey;
    un(type: 'drawend', listener: (evt: DrawEvent) => void): void;
    on(type: 'drawstart', listener: (evt: DrawEvent) => void): EventsKey;
    once(type: 'drawstart', listener: (evt: DrawEvent) => void): EventsKey;
    un(type: 'drawstart', listener: (evt: DrawEvent) => void): void;
    on(type: 'error', listener: (evt: BaseEvent) => void): EventsKey;
    once(type: 'error', listener: (evt: BaseEvent) => void): EventsKey;
    un(type: 'error', listener: (evt: BaseEvent) => void): void;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): void;
}
export class DrawEvent extends BaseEvent {
    constructor(type: DrawEventType, feature: Feature<Geometry>);
    feature: Feature<Geometry>;
}
export function createBox(): GeometryFunction;
export function createRegularPolygon(opt_sides?: number, opt_angle?: number): GeometryFunction;
