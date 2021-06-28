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
import MapBrowserEvent from '../MapBrowserEvent';
import { ObjectEvent } from '../Object';
import PluggableMap from '../PluggableMap';
import Projection from '../proj/Projection';
import VectorSource from '../source/Vector';
import { StyleLike } from '../style/Style';
import PointerInteraction from './Pointer';

/**
 * Function that takes an array of coordinates and an optional existing geometry
 * and a projection as arguments, and returns a geometry. The optional existing
 * geometry is the geometry that is returned when the function is called without
 * a second argument.
 */
export type GeometryFunction = (p0: SketchCoordType, p1: SimpleGeometry, p2: Projection) => SimpleGeometry;
/**
 * Coordinate type when drawing lines.
 */
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
/**
 * Coordinate type when drawing points.
 */
export type PointCoordType = Coordinate;
/**
 * Coordinate type when drawing polygons.
 */
export type PolyCoordType = Coordinate[][];
/**
 * Types used for drawing coordinates.
 */
export type SketchCoordType = PointCoordType | LineCoordType | PolyCoordType;
declare enum DrawEventType {
    DRAWSTART = 'drawstart',
    DRAWEND = 'drawend',
    DRAWABORT = 'drawabort',
}
export default class Draw extends PointerInteraction {
    constructor(options: Options);
    /**
     * Stop drawing without adding the sketch feature to the target layer.
     */
    abortDrawing(): void;
    /**
     * Append coordinates to the end of the geometry that is currently being drawn.
     * This can be used when drawing LineStrings or Polygons. Coordinates will
     * either be appended to the current LineString or the outer ring of the current
     * Polygon. If no geometry is being drawn, a new one will be created.
     */
    appendCoordinates(coordinates: LineCoordType): void;
    /**
     * Initiate draw mode by starting from an existing geometry which will
     * receive new additional points. This only works on features with
     * LineString geometries, where the interaction will extend lines by adding
     * points to the end of the coordinates array.
     * This will change the original feature, instead of drawing a copy.
     * The function will dispatch a drawstart event.
     */
    extend(feature: Feature<LineString>): void;
    /**
     * Stop drawing and add the sketch feature to the target layer.
     * The {@link module:ol/interaction/Draw~DrawEventType.DRAWEND} event is
     * dispatched before inserting the feature.
     */
    finishDrawing(): void;
    /**
     * Get the overlay layer that this interaction renders sketch features to.
     */
    getOverlay(): VectorLayer;
    /**
     * Handle pointer down events.
     */
    handleDownEvent(event: MapBrowserEvent<UIEvent>): boolean;
    /**
     * Handles the {@link module:ol/MapBrowserEvent map browser event} and may actually draw or finish the drawing.
     */
    handleEvent(event: MapBrowserEvent<UIEvent>): boolean;
    /**
     * Handle pointer up events.
     */
    handleUpEvent(event: MapBrowserEvent<UIEvent>): boolean;
    /**
     * Remove last point of the feature currently being drawn. Does not do anything when
     * drawing POINT or MULTI_POINT geometries.
     */
    removeLastPoint(): void;
    /**
     * Remove the interaction from its current map and attach it to the new map.
     * Subclasses may set up event handlers to get notified about changes to
     * the map here.
     */
    setMap(map: PluggableMap): void;
    on(type: string | string[], listener: (p0: any) => any): EventsKey | EventsKey[];
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
    /**
     * The feature being drawn.
     */
    feature: Feature<Geometry>;
}
/**
 * Create a geometryFunction that will create a box-shaped polygon (aligned
 * with the coordinate system axes).  Use this with the draw interaction and
 * type: 'Circle' to return a box instead of a circle geometry.
 */
export function createBox(): GeometryFunction;
/**
 * Create a geometryFunction for type: 'Circle' that will create a regular
 * polygon with a user specified number of sides and start angle instead of a
 * module:ol/geom/Circle~Circle geometry.
 */
export function createRegularPolygon(opt_sides?: number, opt_angle?: number): GeometryFunction;
