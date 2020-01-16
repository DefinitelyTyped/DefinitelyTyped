import Collection from '../Collection';
import { Coordinate } from '../coordinate';
import { EventsKey } from '../events';
import { Condition } from '../events/condition';
import BaseEvent from '../events/Event';
import Feature from '../Feature';
import Geometry from '../geom/Geometry';
import GeometryType from '../geom/GeometryType';
import LineString from '../geom/LineString';
import SimpleGeometry from '../geom/SimpleGeometry';
import VectorLayer from '../layer/Vector';
import { ObjectEvent } from '../Object';
import VectorSource from '../source/Vector';
import { StyleFunction, StyleLike } from '../style/Style';
import PointerInteraction from './Pointer';

export type GeometryFunction = (p0: SketchCoordType, p1?: SimpleGeometry) => SimpleGeometry;
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
}
export default class Draw extends PointerInteraction {
    constructor(options: Options);
    extend(feature: Feature<LineString>): void;
    finishDrawing(): void;
    getOverlay(): VectorLayer;
    removeLastPoint(): void;
    on(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    once(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    un(type: string | string[], listener: (p0: any) => void): void;
    on(type: 'change', listener: (evt: BaseEvent) => void): EventsKey;
    once(type: 'change', listener: (evt: BaseEvent) => void): EventsKey;
    un(type: 'change', listener: (evt: BaseEvent) => void): void;
    on(type: 'change:active', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:active', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:active', listener: (evt: ObjectEvent) => void): void;
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
