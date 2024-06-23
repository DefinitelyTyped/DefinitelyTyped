// Last revision validated against: commit 90ed973 (2017-08-02)

import * as GeoJSON from "geojson";

export as namespace TopoJSON;

// ---------------------------------------------------------------
// TopoJSON Format Specification
// ---------------------------------------------------------------

// See: https://github.com/topojson/topojson-specification/

// 2. TopoJSON Objects
export interface TopoJSON {
    type: "Topology" | GeoJSON.GeoJsonGeometryTypes | null;
    bbox?: GeoJSON.BBox | undefined;
}

// 2.1. Topology Objects
export interface Topology<T extends Objects<Properties> = Objects<Properties>> extends TopoJSON {
    type: "Topology";
    objects: T;
    arcs: Arc[];
    transform?: Transform | undefined;
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
    id?: number | string | undefined;
    properties?: P | undefined;
}

export type GeometryObject<P extends Properties = {}> =
    | Point<P>
    | MultiPoint<P>
    | LineString<P>
    | MultiLineString<P>
    | Polygon<P>
    | MultiPolygon<P>
    | GeometryCollection<P>
    | NullObject;

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
