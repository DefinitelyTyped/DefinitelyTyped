// Type definitions for topojson 3.2
// Project: https://github.com/topojson/topojson
// Definitions by: Ricardo Mello <https://github.com/ricardo-mello>
//                 Zhutian Chen <https://github.com/chenzhutian>
//                 denisname <https://github.com/denisname>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.5

import * as GeoJSON from "geojson";

export as namespace topojson;

// ---------------------------------------------------------------
// TopoJSON Format Specification
// ---------------------------------------------------------------

// See: https://github.com/topojson/topojson-specification/

// 2. TopoJSON Objects
export interface TopoJSON {
    type: "Topology" | GeoJSON.GeoJsonGeometryTypes | null;
    bbox?: GeoJSON.BBox;
}

// 2.1. Topology Objects
export interface Topology<T extends Objects<Properties> = Objects<Properties>> extends TopoJSON {
    type: "Topology";
    objects: T;
    arcs: Arc[];
    transform?: Transform;
}

// 2.1.1. Positions
export type Positions = number[]; // at least two elements

// 2.1.2. Transforms
export interface Transform {
    scale: [number, number];
    translate: [number, number];
}

// 2.1.3. Arcs
export type Arc = Positions[]; // at least two elements

// 2.1.4. Arc Indexes
export type ArcIndexes = number[];

// 2.1.5. Objects
export type Properties = GeoJSON.GeoJsonProperties;

export interface Objects<P extends Properties = {}> {
    [key: string]: GeometryObject<P>;
}

// 2.2. Geometry Objects
export interface GeometryObjectA<P extends Properties = {}> extends TopoJSON {
    type: GeoJSON.GeoJsonGeometryTypes | null;
    id?: number | string;
    properties?: P;
}

export type GeometryObject<P extends Properties = {}> =
    Point<P> | MultiPoint<P> |
    LineString<P> | MultiLineString<P> |
    Polygon<P> | MultiPolygon<P> |
    GeometryCollection<P> |
    NullObject;

// 2.2.1. Point
export interface Point<P extends Properties = {}> extends GeometryObjectA<P> {
    type: "Point";
    coordinates: Positions;
}

// 2.2.2. MultiPoint
export interface MultiPoint<P extends Properties = {}> extends GeometryObjectA<P> {
    type: "MultiPoint";
    coordinates: Positions[];
}

// 2.2.3. LineString
export interface LineString<P extends Properties = {}> extends GeometryObjectA<P> {
    type: "LineString";
    arcs: ArcIndexes;
}

// 2.2.4. MultiLineString
export interface MultiLineString<P extends Properties = {}> extends GeometryObjectA<P> {
    type: "MultiLineString";
    arcs: ArcIndexes[];
}

// 2.2.5. Polygon
export interface Polygon<P extends Properties = {}> extends GeometryObjectA<P> {
    type: "Polygon";
    arcs: ArcIndexes[];
}

// 2.2.6. MultiPolygon
export interface MultiPolygon<P extends Properties = {}> extends GeometryObjectA<P> {
    type: "MultiPolygon";
    arcs: ArcIndexes[][];
}

// 2.2.7. Geometry Collection
export interface GeometryCollection<P extends Properties = {}> extends GeometryObjectA<P> {
    type: "GeometryCollection";
    geometries: Array<GeometryObject<P>>;
}

// More
export interface NullObject extends GeometryObjectA {
    type: null;
}

export type OrNull<T extends Objects> = {
    [P in keyof T]: T[P] | NullObject;
};

// ---------------------------------------------------------------
// TopoJSON Server
// ---------------------------------------------------------------

export function topology(objects: {[k: string]: GeoJSON.GeoJsonObject}, quantization?: number): Topology;

// ---------------------------------------------------------------
// TopoJSON Simplify
// ---------------------------------------------------------------

export type Triangle = [[number, number], [number, number], [number, number]];
export type TriangleWeighter = (triangle: Triangle) => number;
export type Ring = Array<[number, number]>;
export type RingWeighter = (triangle: Ring) => number;
export type Filter = (ring: Ring, interior: boolean) => boolean;

export function presimplify<T extends Objects>(topology: Topology<T>, weight?: TriangleWeighter): Topology<T>;

export function simplify<T extends Objects>(topology: Topology<T>, minWeight?: number): Topology<T>;

export function quantile(topology: Topology, p: number): number;

export function filter<K extends Objects>(topology: Topology<K>, filter: Filter): Topology<OrNull<K>>;

export function filterAttached(topology: Topology): Filter;

export function filterAttachedWeight(topology: Topology, minWeight?: number, weight?: RingWeighter): Filter;

export function filterWeight(topology: Topology, minWeight?: number, weight?: RingWeighter): Filter;

export function planarRingArea(ring: Ring): number;

export function planarTriangleArea(triangle: Triangle): number;

export function sphericalRingArea(ring: Ring, interior: true): number;

export function sphericalTriangleArea(triangle: Triangle): number;

// ---------------------------------------------------------------
// TopoJSON Client
// ---------------------------------------------------------------

export type Transformer = (point: number[], index?: boolean) => number[];

export function feature<P = GeoJSON.GeoJsonProperties>(topology: Topology, object: Point<P>): GeoJSON.Feature<GeoJSON.Point, P>;
export function feature<P = GeoJSON.GeoJsonProperties>(topology: Topology, object: MultiPoint<P>): GeoJSON.Feature<GeoJSON.MultiPoint, P>;
export function feature<P = GeoJSON.GeoJsonProperties>(topology: Topology, object: LineString<P>): GeoJSON.Feature<GeoJSON.LineString, P>;
export function feature<P = GeoJSON.GeoJsonProperties>(topology: Topology, object: MultiLineString<P>): GeoJSON.Feature<GeoJSON.MultiLineString, P>;
export function feature<P = GeoJSON.GeoJsonProperties>(topology: Topology, object: Polygon<P>): GeoJSON.Feature<GeoJSON.Polygon, P>;
export function feature<P = GeoJSON.GeoJsonProperties>(topology: Topology, object: MultiPolygon<P>): GeoJSON.Feature<GeoJSON.MultiPolygon, P>;
export function feature<P = GeoJSON.GeoJsonProperties>(topology: Topology, object: GeometryCollection<P>): GeoJSON.FeatureCollection<GeoJSON.GeometryObject, P>;
export function feature<P = GeoJSON.GeoJsonProperties>(topology: Topology, object: GeometryObject<P>)
    : GeoJSON.Feature<GeoJSON.GeometryObject, P> | GeoJSON.FeatureCollection<GeoJSON.GeometryObject, P>;

export function merge(topology: Topology, objects: Array<Polygon | MultiPolygon>): GeoJSON.MultiPolygon;

export function mergeArcs(topology: Topology, objects: Array<Polygon | MultiPolygon>): MultiPolygon;

export function mesh(topology: Topology, obj?: GeometryObject, filter?: (a: GeometryObject, b: GeometryObject) => boolean): GeoJSON.MultiLineString;

export function meshArcs(topology: Topology, obj?: GeometryObject, filter?: (a: GeometryObject, b: GeometryObject) => boolean): MultiLineString;

export function neighbors(objects: GeometryObject[]): number[][];

export function bbox(topology: Topology): GeoJSON.BBox;

export function quantize<T extends Objects>(topology: Topology<T>, transform: Transform | number): Topology<T>;

export function transform(transform: Transform | null): Transformer;

export function untransform(transform: Transform | null): Transformer;

// ---------------------------------------------------------------
// U.S. Atlas TopoJSON
// ---------------------------------------------------------------

export interface UsAtlas extends topojson.Topology {
    objects: {
        counties: {type: "GeometryCollection", geometries: Array<Polygon | MultiPolygon>};
        states: {type: "GeometryCollection", geometries: Array<Polygon | MultiPolygon>};
        nation: topojson.GeometryCollection;
    };
    bbox: [number, number, number, number];
    transform: topojson.Transform;
}

// ---------------------------------------------------------------
// World Atlas TopoJSON
// ---------------------------------------------------------------

export interface WorldAtlas extends topojson.Topology {
    objects: {
        countries: {type: "GeometryCollection", geometries: Array<Polygon | MultiPolygon>};
        land: topojson.GeometryCollection;
    };
    bbox: [number, number, number, number];
    transform: topojson.Transform;
}
