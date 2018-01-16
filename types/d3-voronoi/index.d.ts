// Type definitions for D3JS d3-voronoi module 1.1
// Project: https://github.com/d3/d3-voronoi/
// Definitions by: Tom Wanzek <https://github.com/tomwanzek>, Alex Ford <https://github.com/gustavderdrache>, Boris Yankov <https://github.com/borisyankov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Last module patch version validated against: 1.1.0

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

/**
 * A Voronoi Polygon is represented as an array of points [x, y] where x and y are the point coordinates, and a data field that refers to the corresponding element in data.
 * Polygons are open: they do not contain a closing point that duplicates the first point; a triangle, for example, is an array of three points.
 * Polygons are also counterclockwise, assuming the origin ⟨0,0⟩ is in the top-left corner.
 *
 * The generic refers to the type of the data for the corresponding element.
 */
export interface VoronoiPolygon<T> extends Array<[number, number]> {
    /**
     * The input data corresponding to this Voronoi polygon.
     */
    data: T;
}

/**
 * Voronoi Triangle is a three-element array of elements from data.
 *
 * The generic refers to the type of the data for the corresponding element.
 */
export type VoronoiTriangle<T> = [T, T, T];

/**
 * A Voronoi Site in the diagram is an array [x, y] with two additional properties:
 * index and data.
 *
 * The generic refers to the type of the data for the corresponding element.
 */
export interface VoronoiSite<T> extends VoronoiPoint {
    /**
     * The Voronoi Site’s index, corresponding to the associated input point.
     */
    index: number;
    /**
     * The input data corresponding to this site.
     */
    data: T;
}

/**
 * A Voronoi Cell in the diagram is an object with the following properties:
 * site and halfedges
 *
 * The generic refers to the type of the data for the corresponding element.
 */
export interface VoronoiCell<T> {
    /**
     * The Voronoi Site of the cell’s associated input point.
     */
    site: VoronoiSite<T>;
    /**
     * An array of indexes into diagram.edges representing the cell’s polygon.
     */
    halfedges: number[];
}

/**
 * Voronoi Edge in the diagram is an array [[x0, y0], [x1, y1]] with two additional properties:
 * left and right.
 *
 * The generic refers to the type of the data for the corresponding element.
 */
export interface VoronoiEdge<T> extends VoronoiPointPair {
    /**
     * The Voronoi site on the left side of the edge.
     */
    left: VoronoiSite<T>;
    /**
     * The Voronoi site on the right side of the edge. null for a clipped border edge.
     */
    right: VoronoiSite<T> | null;
}

/**
 * Voronoi Link for an edge in the mesh created by the Delaunay triangulation of the specified data array.
 * Each link has the following attributes: source and target.
 *
 * The generic refers to the type of the data for the corresponding element.
 */
export interface VoronoiLink<T> {
    /**
     * The source node, an element in data.
     */
    source: T;
    /**
     * The target node, an element in data.
     */
    target: T;
}

/**
 * A Voronoi Layout.
 *
 * The generic refers to the type of the data for the corresponding element.
 */
export interface VoronoiLayout<T> {
    /**
     * Computes the Voronoi diagram for the specified data points.
     * @param data Array of data elements
     */
    (data: T[]): VoronoiDiagram<T>;

    /**
     * Return the current x-coordinate accessor,
     * which defaults to accessing the first element of an array (i.e. at index 0).
     */
    x(): (d: T) => number;
    /**
     * Set the x-coordinate accessor and return the layout.
     * @param x An accessor function which takes a data element as input and return a
     * numeric value for the x-coordinate.
     */
    x(x: (d: T) => number): this;

    /**
     * Return the current y-coordinate accessor,
     * which defaults to accessing the second element of an array (i.e. at index 1).
     */
    y(): (d: T) => number;
    /**
     * Set the y-coordinate accessor and return the layout.
     * @param y An accessor function which takes a data element as input and return a
     * numeric value for the y-coordinate.
     */
    y(y: (d: T) => number): this;

    /**
     * Returns the current clip extent which defaults to null.
     *
     * The extent bounds are specified as an array [[x0, y0], [x1, y1]],
     * where x0 is the left side of the extent, y0 is the top,
     * x1 is the right and y1 is the bottom.
     *
     * A clip extent is required when using voronoi.polygons.
     *
     */
    extent(): [[number, number], [number, number]] | null;
    /**
     * Set the clip extent of the Voronoi layout to the specified bounds and return the layout.
     *
     * A clip extent is required when using voronoi.polygons.
     *
     * @param extent The extent bounds are specified as an array [[x0, y0], [x1, y1]],
     * where x0 is the left side of the extent, y0 is the top, x1 is the right and y1 is the bottom.
     */
    extent(extent: [[number, number], [number, number]]): this;

    /**
     * Get the clip size of the Voronoi layout. Size is an alias for voronoi.extent
     * where the minimum x and y of the extent are ⟨0,0⟩.
     */
    size(): [number, number] | null;
    /**
     * Set the clip size and return the layout.
     *
     * Size is an alias for voronoi.extent where the minimum x and y of the extent are ⟨0,0⟩.
     *
     * @param size An array representing the x- and y-size of the clip extent,
     * where the minimum x and y of the extent are ⟨0,0⟩.
     */
    size(size: [number, number]): this;

    /**
     * Return an array of polygons clipped to the extent, one for each input point in the specified data points,
     * corresponding to the cells in the computed Voronoi diagram.
     *
     * Each polygon is represented as an array of points [x, y] where x and y are the point coordinates,
     * and a data field that refers to the corresponding element in data.
     * Polygons are open: they do not contain a closing point that duplicates the first point;
     * a triangle, for example, is an array of three points. Polygons are also counterclockwise,
     * assuming the origin ⟨0,0⟩ is in the top-left corner.
     *
     * If the cell’s site is coincident with an earlier site, the associated polygon is null.
     *
     * Important: Using polygon requires the extent to be set for the layout.
     *
     * @param data Array of data points.
     */
    polygons(data: T[]): Array<VoronoiPolygon<T>>;
    /**
     * Return the Delaunay triangulation of the specified data array as an array of triangles.
     * Each triangle is a three-element array of elements from data.
     *
     * @param data Array of data points.
     */
    triangles(data: T[]): Array<VoronoiTriangle<T>>;
    /**
     * Return the Delaunay triangulation of the specified data array as an array of links.
     * Each link has source and target attributes referring to elements in data.
     *
     * @param data Array of data points.
     */
    links(data: T[]): Array<VoronoiLink<T>>;
}

/**
 * Computed Voronoi diagram
 *
 * The generic refers to the type of the data for the corresponding element.
 */
export interface VoronoiDiagram<T> {
    /**
     * Array of Voronoi Edges
     */
    edges: Array<VoronoiEdge<T>>;
    /**
     * Array of Voronoi Cells, one per input point; a cell may be null for a coincident point.
     */
    cells: Array<VoronoiCell<T> | null>;
    /**
     * Return an array of polygons clipped to the extent, one for each cell in the diagram.
     * Each polygon is represented as an array of points [x, y] where x and y are the point coordinates,
     * and a data field that refers to the corresponding element in data.
     * Polygons are open: they do not contain a closing point that duplicates the first point;
     * a triangle, for example, is an array of three points. Polygons are also counterclockwise,
     * assuming the origin ⟨0,0⟩ is in the top-left corner.
     *
     * If the cell’s site is coincident with an earlier site, the associated polygon is null.
     */
    polygons(): Array<VoronoiPolygon<T>>;

    /**
     * Returns the Delaunay triangulation of the specified data array as an array of triangles.
     * Each triangle is a three-element array of elements from data.
     * Since the triangulation is computed as the dual of the Voronoi diagram, and the Voronoi diagram is clipped by the extent,
     * a subset of the Delaunay triangulation is returned.
     */
    triangles(): Array<VoronoiTriangle<T>>;

    /**
     * Returns the Delaunay triangulation of the specified data array as an array of links, one for each edge in the mesh.
     * Each link has the following attributes:
     * - source (the source node, an element in data)
     * - target (the target node, an element in data)
     *
     * Since the triangulation is computed as the dual of the Voronoi diagram, and the Voronoi diagram is clipped by the extent, a subset of the Delaunay links is returned.
     */
    links(): Array<VoronoiLink<T>>;

    /**
     * Return the nearest Voronoi Site to point [x, y]. If radius is specified, only sites within radius distance are considered.
     * If no Voronoi Site can be found (within the specified radius), null is returned.
     *
     * @param x x-coordinate
     * @param y y-coordinate
     * @param radius Optional parameter for search radius around [x, y]
     */
    find(x: number, y: number, radius?: number): VoronoiSite<T> | null;
}

// --------------------------------------------------------------------------
// voronoi Export
// --------------------------------------------------------------------------

/**
 * Creates a new Voronoi layout with default x- and y- accessors and a null extent.
 *
 * Without specifying a generic the layout is assumed to be based on data represented
 * by a two-dimensional coordinate [number, number] for x- and y-coordinate, respectively.
 */
export function voronoi(): VoronoiLayout<[number, number]>;
/**
 * Creates a new Voronoi layout with default x- and y- accessors and a null extent.
 * x- and y-accessors may have to be set to correspond to the data type provided by the
 * generic.
 *
 * The generic refers to the type of the data for the corresponding element.
 */
export function voronoi<T>(): VoronoiLayout<T>;
