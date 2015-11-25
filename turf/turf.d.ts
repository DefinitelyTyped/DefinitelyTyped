// Type definitions for Turf 2.0
// Project: http://turfjs.org/
// Definitions by: Guillaume Croteau <https://github.com/gcroteau>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../geojson/geojson.d.ts" />

declare module turf {
    //////////////////////////////////////////////////////
    // Aggregation
    //////////////////////////////////////////////////////

    //////////////////////////////////////////////////////
    // Measurement
    //////////////////////////////////////////////////////

    /**
    * Takes a line and returns a point at a specified distance along the line.
    * @param line Input line
    * @param distance Distance along the line
    * @param [units=miles] 'miles', 'feet', 'kilometers', 'meters', or 'degrees'
    * @returns Point along the line
    */
    function along(line: GeoJSON.Feature, distance: number, units?: string): GeoJSON.Feature;

    /**
    * Takes one or more features and returns their area in square meters.
    * @param input Input features
    * @returns Area in square meters
    */
    function area(input: GeoJSON.Feature | GeoJSON.FeatureCollection): number;

    /**
    * Takes a bbox and returns an equivalent polygon.
    * @param bbox An Array of bounding box coordinates in the form: [xLow, yLow, xHigh, yHigh]
    * @returns A Polygon representation of the bounding box
    */
    function bboxPolygon(bbox: Array<number>): GeoJSON.Feature;

    /**
    * Takes two points and finds the geographic bearing between them.
    * @param start Starting Point
    * @param end Ending point
    * @returns Bearing in decimal degrees
    */
    function bearing(start: GeoJSON.Feature, end: GeoJSON.Feature): number;

    /**
    * Takes a FeatureCollection and returns the absolute center point of all features.
    * @param features Input features
    * @returns A Point feature at the absolute center point of all input features
    */
    function center(features: GeoJSON.FeatureCollection): GeoJSON.Feature;

    /**
    * Takes one or more features and calculates the centroid using the arithmetic mean of all vertices. This lessens the effect of small islands and artifacts when calculating the centroid of a set of polygons.
    * @param features Input features
    * @returns The centroid of the input features
    */
    function centroid(features: GeoJSON.Feature | GeoJSON.FeatureCollection): GeoJSON.Feature;

    /**
    * Takes a Point and calculates the location of a destination point given a distance in degrees, radians, miles, or kilometers; and bearing in degrees. This uses the Haversine formula to account for global curvature.
    * @param start Starting point
    * @param distance Distance from the starting point
    * @param bearing Ranging from -180 and 180
    * @param units 'miles', 'feet', 'kilometers', 'meters', or 'degrees'
    * @returns Destination point
    */
    function destination(start: GeoJSON.Feature, distance: number, bearing: number, units: string): GeoJSON.Feature;

    /**
    * Calculates the distance between two points in degress, radians, miles, or kilometers. This uses the Haversine formula to account for global curvature.
    * @param from Origin point
    * @param to Destination point
    * @param [units=kilometers] 'miles', 'feet', 'kilometers', 'meters', or 'degrees'
    * @returns Distance between the two points
    */
    function distance(from: GeoJSON.Feature, to: GeoJSON.Feature, units?: string): number;

    /**
    * Takes any number of features and returns a rectangular Polygon that encompasses all vertices.
    * @param fc Input features
    * @returns A rectangular Polygon feature that encompasses all vertices
    */
    function envelope(fc: GeoJSON.FeatureCollection): GeoJSON.Feature;

    /**
    * Takes a set of features, calculates the extent of all input features, and returns a bounding box.
    * @param input Input features
    * @returns The bounding box of input given as an array in WSEN order (west, south, east, north)
    */
    function extent(input: GeoJSON.Feature | GeoJSON.FeatureCollection): Array<number>;

    /**
    * Takes a line and measures its length in the specified units.
    * @param line Line to measure
    * @param units 'miles', 'feet', 'kilometers', 'meters', or 'degrees'
    * @returns Length of the input line
    */
    function lineDistance(line: GeoJSON.Feature, units: string): number;

    /**
    * Takes two points and returns a point midway between them.
    * @param pt1 First point
    * @param pt2 Second point
    * @returns A point midway between pt1 and pt2
    */
    function midpoint(pt1: GeoJSON.Feature, pt2: GeoJSON.Feature): GeoJSON.Feature;

    /**
    * Takes a feature and returns a Point guaranteed to be on the surface of the feature. Given a Polygon, the point will be in the area of the polygon. Given a LineString, the point will be along the string. Given a Point, the point will the same as the input.
    * @param input Any feature or set of features
    * @returns A point on the surface of input
    */
    function pointOnSurface(input: GeoJSON.Feature | GeoJSON.FeatureCollection): GeoJSON.Feature;

    /**
    * Takes a bounding box and returns a new bounding box with a size expanded or contracted by a factor of X.
    * @param bbox A bounding box
    * @param factor The ratio of the new bbox to the input bbox
    * @returns The resized bbox
    */
    function size(bbox: Array<number>, factor: number): Array<number>;

    /**
    * Takes a bounding box and calculates the minimum square bounding box that would contain the input.
    * @param bbox A bounding box
    * @returns A square surrounding bbox
    */
    function square(bbox: Array<number>): Array<number>;

    //////////////////////////////////////////////////////
    // Transformation
    //////////////////////////////////////////////////////

    /**
    * Takes a line and returns a curved version by applying a Bezier spline algorithm. The bezier spline implementation is by Leszek Rybicki.
    * @param line Input LineString
    * @param [resolution=10000] Time in milliseconds between points
    * @param [sharpness=0.85] A measure of how curvy the path should be between splines
    * @returns Curved line
    */
    function bezier(line: GeoJSON.Feature, resolution?: number, sharpness?: number): GeoJSON.Feature;

    /**
    * Calculates a buffer for input features for a given radius. Units supported are miles, kilometers, and degrees.
    * @param feature Input to be buffered
    * @param distance Distance to draw the buffer
    * @param units 'miles', 'feet', 'kilometers', 'meters', or 'degrees'
    * @returns Buffered features
    */
    function buffer(feature: GeoJSON.Feature | GeoJSON.FeatureCollection, distance: number, units: string): GeoJSON.Feature | GeoJSON.FeatureCollection;

    /**
    * Takes a set of points and returns a concave hull polygon. Internally, this implements a Monotone chain algorithm.
    * @param points Input points
    * @param maxEdge The size of an edge necessary for part of the hull to become concave (in miles)
    * @param units Used for maxEdge distance (miles or kilometers)
    * @returns A concave hull
    */
    function concave(points: GeoJSON.FeatureCollection, maxEdge: number, units: string): GeoJSON.Feature;

    /**
    * Takes a set of points and returns a convex hull polygon. Internally this uses the convex-hull module that implements a monotone chain hull.
    * @param input Input points
    * @returns A convex hull
    */
    function convex(points: GeoJSON.FeatureCollection): GeoJSON.Feature;

    /**
    * Finds the difference between two polygons by clipping the second polygon from the first.
    * @param poly1 Input Polygon feaure
    * @param poly2 Polygon feature to difference from poly1
    * @returns A Polygon feature showing the area of poly1 excluding the area of poly2
    */
    function difference(poly1: GeoJSON.Feature, poly2: GeoJSON.Feature): GeoJSON.Feature;

    /**
    * Takes two polygons and finds their intersection. If they share a border, returns the border; if they don't intersect, returns undefined.
    * @param poly1 The first polygon
    * @param poly2 The second polygon
    * @returns If poly1 and poly2 overlap, returns a Polygon feature representing the area they overlap; if poly1 and poly2 do not overlap, returns undefined; if poly1 and poly2 share a border, a MultiLineString of the locations where their borders are shared
    */
    function intersect(poly1: GeoJSON.Feature, poly2: GeoJSON.Feature): GeoJSON.Feature;

    /**
    * Takes a set of polygons and returns a single merged polygon feature. If the input polygon features are not contiguous, this function returns a MultiPolygon feature.
    * @param fc Input polygons
    * @returns Merged polygon or multipolygon
    */
    function merge(fc: GeoJSON.FeatureCollection): GeoJSON.Feature;

    /**
    * Takes a LineString or Polygon and returns a simplified version. Internally uses simplify-js to perform simplification.
    * @param feature Feature to be simplified
    * @param tolerance Simplification tolerance
    * @param highQuality Whether or not to spend more time to create a higher-quality simplification with a different algorithm
    * @returns A simplified feature
    */
    function simplify(feature: GeoJSON.Feature | GeoJSON.FeatureCollection | GeoJSON.GeometryCollection, tolerance: number, highQuality: boolean): GeoJSON.Feature | GeoJSON.FeatureCollection | GeoJSON.GeometryCollection;

    /**
    * Takes two polygons and returns a combined polygon. If the input polygons are not contiguous, this function returns a MultiPolygon feature.
    * @param poly1 Input polygon
    * @param poly2 Another input polygon
    * @returns A combined Polygon or MultiPolygon feature
    */
    function union(poly1: GeoJSON.Feature, poly2: GeoJSON.Feature): GeoJSON.Feature;

    //////////////////////////////////////////////////////
    // Misc
    //////////////////////////////////////////////////////

    /**
    * Combines a FeatureCollection of Point, LineString, or Polygon features into MultiPoint, MultiLineString, or MultiPolygon features.
    * @param fc A FeatureCollection of any type
    * @returns A FeatureCollection of corresponding type to input
    */
    function combine(fc: GeoJSON.FeatureCollection): GeoJSON.FeatureCollection;

    /**
    * Takes a feature or set of features and returns all positions as points.
    * @param input Input features
    * @returns Points representing the exploded input features
    */
    function explode(input: GeoJSON.Feature | GeoJSON.FeatureCollection): GeoJSON.FeatureCollection;

    /**
    * Takes input features and flips all of their coordinates from [x, y] to [y, x].
    * @param input Input features
    * @returns A feature or set of features of the same type as input with flipped coordinates
    */
    function flip(input: GeoJSON.Feature | GeoJSON.FeatureCollection): GeoJSON.Feature | GeoJSON.FeatureCollection;

    /**
    * Takes a polygon and returns points at all self-intersections.
    * @param polygon Input polygon
    * @returns Self-intersections
    */
    function kinks(polygon: GeoJSON.Feature): GeoJSON.FeatureCollection;

    /**
    * Takes a line, a start Point, and a stop point and returns the line in between those points.
    * @param point1 Starting point
    * @param point2 Stopping point
    * @param line Line to slice
    * @returns Sliced line
    */
    function lineSlice(point1: GeoJSON.Feature, point2: GeoJSON.Feature, line: GeoJSON.Feature): GeoJSON.Feature;

    /**
    * Takes a Point and a LineString and calculates the closest Point on the LineString.
    * @param line Line to snap to
    * @param point Point to snap from
    * @returns Closest point on the line to point
    */
    function pointOnLine(line: GeoJSON.Feature, point: GeoJSON.Feature): GeoJSON.Feature;

    //////////////////////////////////////////////////////
    // Helper
    //////////////////////////////////////////////////////

    /**
    * Takes one or more Features and creates a FeatureCollection.
    * @param features Input features
    * @returns A FeatureCollection of input features
    */
    function featurecollection(features: Array<GeoJSON.Feature>): GeoJSON.FeatureCollection;

    /**
    * Creates a LineString based on a coordinate array. Properties can be added optionally.
    * @param coordinates An array of Positions
    * @param [properties] An Object of key-value pairs to add as properties
    * @returns A LineString feature
    */
    function linestring(coordinates: Array<Array<number>>, properties?: any): GeoJSON.Feature;

    /**
    * Takes coordinates and properties (optional) and returns a new Point feature.
    * @param coordinates Longitude, latitude position (each in decimal degrees)
    * @param [properties] An Object of key-value pairs to add as properties
    * @returns A Point feature
    */
    function point(coordinates: Array<number>, properties?: any): GeoJSON.Feature;

    /**
    * Takes an array of LinearRings and optionally an Object with properties and returns a Polygon feature.
    * @param rings An array of LinearRings
    * @param [properties] An Object of key-value pairs to add as properties
    * @returns A Polygon feature
    */
    function polygon(rings: Array<Array<Array<number>>>, properties?: any): GeoJSON.Feature;

    //////////////////////////////////////////////////////
    // Data
    //////////////////////////////////////////////////////

    /**
    * Takes a FeatureCollection and filters it by a given property and value.
    * @param features Input features
    * @param key The property on which to filter
    * @param value The value of that property on which to filter
    * @returns A filtered collection with only features that match input key and value
    */
    function filter(features: GeoJSON.FeatureCollection, key: string, value: string): GeoJSON.FeatureCollection;

    //////////////////////////////////////////////////////
    // Interpolation
    //////////////////////////////////////////////////////

    //////////////////////////////////////////////////////
    // Joins
    //////////////////////////////////////////////////////

    //////////////////////////////////////////////////////
    // Classification
    //////////////////////////////////////////////////////

    //////////////////////////////////////////////////////
    // Types
    //////////////////////////////////////////////////////
}
