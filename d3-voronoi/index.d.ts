// Type definitions for D3JS d3-voronoi module v1.0.2
// Project: https://github.com/d3/d3-voronoi/
// Definitions by: Tom Wanzek <https://github.com/tomwanzek>, Alex Ford <https://github.com/gustavderdrache>, Boris Yankov <https://github.com/borisyankov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// --------------------------------------------------------------------------
// Shared Type Definitions and Interfaces
// --------------------------------------------------------------------------


/**
 * The VoronoiPoint interface is defined as a cue that the array is strictly of type [number, number] with two elements
 * for x and y coordinates. However, it is used as a base for interface definitions, and [number, number]
 * cannot be extended.
 */
export interface VoronoiPoint extends Array<number> {
    0: number;
    1: number;
}

/**
 * The VoronoiPointPair interface is defined as a cue that the array is strictly of type [[number, number], [number, number]] with two elements, one
 * for each point containing the respective x and y coordinates. However, it is used as a base for interface definitions, and
 * [[number, number], [number, number]] cannot be extended.
 */
export interface VoronoiPointPair extends Array<[number, number]> {
    0: [number, number];
    1: [number, number];
}

export interface VoronoiPolygon<T> extends Array<[number, number]> {
    data: T;
}

export type VoronoiTriangle<T> = [T, T, T];

export interface VoronoiSite<T> extends VoronoiPoint {
    index: number;
    data: T;
}

export interface VoronoiCell<T> {
    site: VoronoiSite<T>;
    halfEdges: Array<number>;
}



export interface VoronoiEdge<T> extends VoronoiPointPair {
    left: VoronoiSite<T>;
    right: VoronoiSite<T> | null;
}

export interface VoronoiLink<T> {
    source: T;
    target: T;
}

export interface VoronoiLayout<T> {
    (data: Array<T>): VoronoiDiagram<T>;
    x(): (d: T) => number;
    x(x: (d: T) => number): this;
    y(): (d: T) => number;
    y(y: (d: T) => number): this;
    extent(): [[number, number], [number, number]] | null;
    extent(extent: [[number, number], [number, number]]): this;
    size(): [number, number] | null;
    size(size: [number, number]): this;
    polygons(data: Array<T>): Array<VoronoiPolygon<T>>;
    triangles(data: Array<T>): Array<VoronoiTriangle<T>>;
    links(data: Array<T>): Array<VoronoiLink<T>>;
}

export interface VoronoiDiagram<T> {
    edges: Array<VoronoiEdge<T>>;
    cells: Array<VoronoiCell<T> | null>;
    polygons(): Array<VoronoiPolygon<T>>;
    triangles(): Array<VoronoiTriangle<T>>;
    links(): Array<VoronoiLink<T>>;
}

// --------------------------------------------------------------------------
// voronoi Export
// --------------------------------------------------------------------------

export function voronoi(): VoronoiLayout<[number, number]>;
export function voronoi<T>(): VoronoiLayout<T>;
