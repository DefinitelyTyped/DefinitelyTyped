// Type definitions for Turf 2.0
// Project: http://turfjs.org/
// Definitions by: Guillaume Croteau <https://github.com/gcroteau>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="geojson" />

declare module turf {
    //////////////////////////////////////////////////////
    // Aggregation
    //////////////////////////////////////////////////////

    /**
    * Calculates a series of aggregations for a set of points within a set of polygons.
    * Sum, average, count, min, max, and deviation are supported.
    * @param polygons Polygons with values on which to aggregate
    * @param points Points to be aggregated
    * @param aggregations An array of aggregation objects
    * @returns Polygons with properties listed based on outField values in aggregations
    */
    function aggregate(polygons: GeoJSON.FeatureCollection<GeoJSON.Polygon>, points: GeoJSON.FeatureCollection<GeoJSON.Point>, aggregations: Array<{aggregation: string, inField: string, outField: string}>): GeoJSON.FeatureCollection<GeoJSON.Polygon>;

    /**
    * Calculates the average value of a field for a set of points within a set of polygons.
    * @param polygons Polygons with values on which to average
    * @param points Points from which to calculate the average
    * @param field The field in the points features from which to pull values to average
    * @param outField The field in polygons to put results of the averages
    * @returns Polygons with the value of outField set to the calculated averages
    */
    function average(polygons: GeoJSON.FeatureCollection<GeoJSON.Polygon>, points: GeoJSON.FeatureCollection<GeoJSON.Point>, field: string, outField: string): GeoJSON.FeatureCollection<GeoJSON.Polygon>;

    /**
    * Takes a set of points and a set of polygons and calculates the number of points that fall within the set of polygons.
    * @param polygons Input polygons
    * @param points Input points
    * @param countField A field to append to the attributes of the Polygon features representing Point counts
    * @returns Polygons with countField appended
    */
    function count(polygons: GeoJSON.FeatureCollection<GeoJSON.Polygon>, points: GeoJSON.FeatureCollection<GeoJSON.Point>, countField: string): GeoJSON.FeatureCollection<GeoJSON.Polygon>;

    /**
    * Calculates the standard deviation value of a field for a set of points within a set of polygons.
    * @param polygons Input polygons
    * @param points Input points
    * @param inField The field in points from which to aggregate
    * @param outField The field to append to polygons representing deviation
    * @returns Polygons with appended field representing deviation
    */
    function deviation(polygons: GeoJSON.FeatureCollection<GeoJSON.Polygon>, points: GeoJSON.FeatureCollection<GeoJSON.Point>, inField: string, outField: string): GeoJSON.FeatureCollection<GeoJSON.Polygon>;

    /**
    * Calculates the maximum value of a field for a set of points within a set of polygons.
    * @param polygons Input polygons
    * @param points Input points
    * @param inField The field in input data to analyze
    * @param outField The field in which to store results
    * @returns Polygons with properties listed as outField values
    */
    function max(polygons: GeoJSON.FeatureCollection<GeoJSON.Polygon>, points: GeoJSON.FeatureCollection<GeoJSON.Point>, inField: string, outField: string): GeoJSON.FeatureCollection<GeoJSON.Polygon>;

    /**
    * Calculates the median value of a field for a set of points within a set of polygons.
    * @param polygons Input polygons
    * @param points Input points
    * @param inField The field in input data to analyze
    * @param outField The field in which to store results
    * @returns Polygons with properties listed as outField values
    */
    function median(polygons: GeoJSON.FeatureCollection<GeoJSON.Polygon>, points: GeoJSON.FeatureCollection<GeoJSON.Point>, inField: string, outField: string): GeoJSON.FeatureCollection<GeoJSON.Polygon>;

    /**
    * Calculates the minimum value of a field for a set of points within a set of polygons.
    * @param polygons Input polygons
    * @param points Input points
    * @param inField The field in input data to analyze
    * @param outField The field in which to store results
    * @returns Polygons with properties listed as outField values
    */
    function min(polygons: GeoJSON.FeatureCollection<GeoJSON.Polygon>, points: GeoJSON.FeatureCollection<GeoJSON.Point>, inField: string, outField: string): GeoJSON.FeatureCollection<GeoJSON.Polygon>;

    /**
    * Calculates the sum of a field for a set of points within a set of polygons.
    * @param polygons Input polygons
    * @param points Input points
    * @param inField The field in input data to analyze
    * @param outField The field in which to store results
    * @returns Polygons with properties listed as outField
    */
    function sum(polygons: GeoJSON.FeatureCollection<GeoJSON.Polygon>, points: GeoJSON.FeatureCollection<GeoJSON.Point>, inField: string, outField: string): GeoJSON.FeatureCollection<GeoJSON.Polygon>;

    /**
    * Calculates the variance value of a field for a set of points within a set of polygons.
    * @param polygons Input polygons
    * @param points Input points
    * @param inField The field in input data to analyze
    * @param outField The field in which to store results
    * @returns Polygons with properties listed as outField
    */
    function variance(polygons: GeoJSON.FeatureCollection<GeoJSON.Polygon>, points: GeoJSON.FeatureCollection<GeoJSON.Point>, inField: string, outField: string): GeoJSON.FeatureCollection<GeoJSON.Polygon>;

    //////////////////////////////////////////////////////
    // Measurement
    //////////////////////////////////////////////////////

    /**
    * Takes a line and returns a point at a specified distance along the line.
    * @param line Input line
    * @param distance Distance along the line
    * @param [units=miles] 'miles', 'kilometers', 'radians' or 'degrees'
    * @returns Point along the line
    */
    function along(line: GeoJSON.Feature<GeoJSON.LineString>, distance: number, units?: string): GeoJSON.Feature<GeoJSON.Point>;

    /**
    * Takes one or more features and returns their area in square meters.
    * @param input Input features
    * @returns Area in square meters
    */
    function area(input: GeoJSON.Feature<any> | GeoJSON.FeatureCollection<any>): number;

    /**
    * Takes a bbox and returns an equivalent polygon.
    * @param bbox An Array of bounding box coordinates in the form: [xLow, yLow, xHigh, yHigh]
    * @returns A Polygon representation of the bounding box
    */
    function bboxPolygon(bbox: Array<number>): GeoJSON.Feature<GeoJSON.Polygon>;

    /**
    * Takes two points and finds the geographic bearing between them.
    * @param start Starting Point
    * @param end Ending point
    * @returns Bearing in decimal degrees
    */
    function bearing(start: GeoJSON.Feature<GeoJSON.Point>, end: GeoJSON.Feature<GeoJSON.Point>): number;

    /**
    * Takes a FeatureCollection and returns the absolute center point of all features.
    * @param features Input features
    * @returns A Point feature at the absolute center point of all input features
    */
    function center(features: GeoJSON.FeatureCollection<any>): GeoJSON.Feature<GeoJSON.Point>;

    /**
    * Takes one or more features and calculates the centroid using the arithmetic mean of all vertices.
    * This lessens the effect of small islands and artifacts when calculating the centroid of a set of polygons.
    * @param features Input features
    * @returns The centroid of the input features
    */
    function centroid(features: GeoJSON.Feature<any> | GeoJSON.FeatureCollection<any>): GeoJSON.Feature<GeoJSON.Point>;

    /**
    * Takes a Point and calculates the location of a destination point given a distance in degrees, radians, miles, or kilometers; and bearing in degrees.
    * This uses the Haversine formula to account for global curvature.
    * @param start Starting point
    * @param distance Distance from the starting point
    * @param bearing Ranging from -180 and 180
    * @param units 'miles', 'kilometers', 'radians', or 'degrees'
    * @returns Destination point
    */
    function destination(start: GeoJSON.Feature<GeoJSON.Point>, distance: number, bearing: number, units: string): GeoJSON.Feature<GeoJSON.Point>;

    /**
    * Calculates the distance between two points in degress, radians, miles, or kilometers.
    * This uses the Haversine formula to account for global curvature.
    * @param from Origin point
    * @param to Destination point
    * @param [units=kilometers] 'miles', 'kilometers', 'radians', or 'degrees'
    * @returns Distance between the two points
    */
    function distance(from: GeoJSON.Feature<GeoJSON.Point>, to: GeoJSON.Feature<GeoJSON.Point>, units?: string): number;

    /**
    * Takes any number of features and returns a rectangular Polygon that encompasses all vertices.
    * @param fc Input features
    * @returns A rectangular Polygon feature that encompasses all vertices
    */
    function envelope(fc: GeoJSON.FeatureCollection<any>): GeoJSON.Feature<GeoJSON.Polygon>;

    /**
    * Takes a set of features, calculates the extent of all input features, and returns a bounding box.
    * @param input Input features
    * @returns The bounding box of input given as an array in WSEN order (west, south, east, north)
    */
    function extent(input: GeoJSON.Feature<any> | GeoJSON.FeatureCollection<any>): Array<number>;

    /**
    * Takes a line and measures its length in the specified units.
    * @param line Line to measure
    * @param units 'miles', 'kilometers', 'radians', or 'degrees'
    * @returns Length of the input line
    */
    function lineDistance(line: GeoJSON.Feature<GeoJSON.LineString>, units: string): number;

    /**
    * Takes two points and returns a point midway between them.
    * @param pt1 First point
    * @param pt2 Second point
    * @returns A point midway between pt1 and pt2
    */
    function midpoint(pt1: GeoJSON.Feature<GeoJSON.Point>, pt2: GeoJSON.Feature<GeoJSON.Point>): GeoJSON.Feature<GeoJSON.Point>;

    /**
    * Takes a feature and returns a Point guaranteed to be on the surface of the feature. Given a Polygon, the point will be in the area of the polygon.
    * Given a LineString, the point will be along the string. Given a Point, the point will the same as the input.
    * @param input Any feature or set of features
    * @returns A point on the surface of input
    */
    function pointOnSurface(input: GeoJSON.Feature<any> | GeoJSON.FeatureCollection<any>): GeoJSON.Feature<any>;

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
    * Takes a line and returns a curved version by applying a Bezier spline algorithm.
    * The bezier spline implementation is by Leszek Rybicki.
    * @param line Input LineString
    * @param [resolution=10000] Time in milliseconds between points
    * @param [sharpness=0.85] A measure of how curvy the path should be between splines
    * @returns Curved line
    */
    function bezier(line: GeoJSON.Feature<GeoJSON.LineString>, resolution?: number, sharpness?: number): GeoJSON.Feature<GeoJSON.LineString>;

    /**
    * Calculates a buffer for input features for a given radius. Units supported are miles, kilometers, and degrees.
    * @param feature Input to be buffered
    * @param distance Distance to draw the buffer
    * @param units 'miles', 'kilometers', 'radians', or 'degrees'
    * @returns Buffered features
    */
    function buffer(feature: GeoJSON.Feature<any> | GeoJSON.FeatureCollection<any>, distance: number, units: string): GeoJSON.FeatureCollection<GeoJSON.Polygon> | GeoJSON.FeatureCollection<GeoJSON.MultiPolygon> | GeoJSON.Polygon | GeoJSON.MultiPolygon;

    /**
    * Takes a set of points and returns a concave hull polygon. Internally, this implements a Monotone chain algorithm.
    * @param points Input points
    * @param maxEdge The size of an edge necessary for part of the hull to become concave (in miles)
    * @param units Used for maxEdge distance (miles or kilometers)
    * @returns A concave hull
    */
    function concave(points: GeoJSON.FeatureCollection<GeoJSON.Point>, maxEdge: number, units: string): GeoJSON.Feature<GeoJSON.Polygon>;

    /**
    * Takes a set of points and returns a convex hull polygon. Internally this uses the convex-hull module that implements a monotone chain hull.
    * @param input Input points
    * @returns A convex hull
    */
    function convex(input: GeoJSON.FeatureCollection<GeoJSON.Point>): GeoJSON.Feature<GeoJSON.Polygon>;

    /**
    * Finds the difference between two polygons by clipping the second polygon from the first.
    * @param poly1 Input Polygon feaure
    * @param poly2 Polygon feature to difference from poly1
    * @returns A Polygon feature showing the area of poly1 excluding the area of poly2
    */
    function difference(poly1: GeoJSON.Feature<GeoJSON.Polygon>, poly2: GeoJSON.Feature<GeoJSON.Polygon>): GeoJSON.Feature<GeoJSON.Polygon>;

    /**
    * Takes two polygons and finds their intersection.
    *  If they share a border, returns the border; if they don't intersect, returns undefined.
    * @param poly1 The first polygon
    * @param poly2 The second polygon
    * @returns If poly1 and poly2 overlap, returns a Polygon feature representing the area they overlap;
    * if poly1 and poly2 do not overlap, returns undefined;
    * if poly1 and poly2 share a border, a MultiLineString of the locations where their borders are shared
    */
    function intersect(poly1: GeoJSON.Feature<GeoJSON.Polygon>, poly2: GeoJSON.Feature<GeoJSON.Polygon>): GeoJSON.Feature<GeoJSON.Polygon | GeoJSON.MultiLineString> | typeof undefined;

    /**
    * Takes a set of polygons and returns a single merged polygon feature.
    * If the input polygon features are not contiguous, this function returns a MultiPolygon feature.
    * @param fc Input polygons
    * @returns Merged polygon or multipolygon
    */
    function merge(fc: GeoJSON.FeatureCollection<GeoJSON.Polygon>): GeoJSON.Feature<GeoJSON.Polygon | GeoJSON.MultiPolygon>;

    /**
    * Takes a LineString or Polygon and returns a simplified version.
    * Internally uses simplify-js to perform simplification.
    * @param feature Feature to be simplified
    * @param tolerance Simplification tolerance
    * @param highQuality Whether or not to spend more time to create a higher-quality simplification with a different algorithm
    * @returns A simplified feature
    */
    function simplify(feature: GeoJSON.Feature<any> | GeoJSON.FeatureCollection<any> | GeoJSON.GeometryCollection, tolerance: number, highQuality: boolean): GeoJSON.Feature<any> | GeoJSON.FeatureCollection<any> | GeoJSON.GeometryCollection;

    /**
    * Takes two polygons and returns a combined polygon.
    * If the input polygons are not contiguous, this function returns a MultiPolygon feature.
    * @param poly1 Input polygon
    * @param poly2 Another input polygon
    * @returns A combined Polygon or MultiPolygon feature
    */
    function union(poly1: GeoJSON.Feature<GeoJSON.Polygon>, poly2: GeoJSON.Feature<GeoJSON.Polygon>): GeoJSON.Feature<GeoJSON.Polygon | GeoJSON.MultiPolygon>;

    //////////////////////////////////////////////////////
    // Misc
    //////////////////////////////////////////////////////

    /**
    * Combines a FeatureCollection of Point, LineString, or Polygon features into MultiPoint, MultiLineString, or MultiPolygon features.
    * @param fc A FeatureCollection of any type
    * @returns A FeatureCollection of corresponding type to input
    */
    function combine(fc: GeoJSON.FeatureCollection<any>): GeoJSON.FeatureCollection<any>;

    /**
    * Takes a feature or set of features and returns all positions as points.
    * @param input Input features
    * @returns Points representing the exploded input features
    */
    function explode(input: GeoJSON.Feature<any> | GeoJSON.FeatureCollection<any>): GeoJSON.FeatureCollection<GeoJSON.Point>;

    /**
    * Takes input features and flips all of their coordinates from [x, y] to [y, x].
    * @param input Input features
    * @returns A feature or set of features of the same type as input with flipped coordinates
    */
    function flip(input: GeoJSON.Feature<any> | GeoJSON.FeatureCollection<any>): GeoJSON.Feature<any> | GeoJSON.FeatureCollection<any>;

    /**
    * Takes a polygon and returns points at all self-intersections.
    * @param polygon Input polygon
    * @returns Self-intersections
    */
    function kinks(polygon: GeoJSON.Feature<GeoJSON.Polygon>): GeoJSON.FeatureCollection<GeoJSON.Point>;

    /**
    * Takes a line, a start Point, and a stop point and returns the line in between those points.
    * @param point1 Starting point
    * @param point2 Stopping point
    * @param line Line to slice
    * @returns Sliced line
    */
    function lineSlice(point1: GeoJSON.Feature<GeoJSON.Point>, point2: GeoJSON.Feature<GeoJSON.Point>, line: GeoJSON.Feature<GeoJSON.LineString>): GeoJSON.Feature<GeoJSON.LineString>;

    /**
    * Takes a Point and a LineString and calculates the closest Point on the LineString.
    * @param line Line to snap to
    * @param point Point to snap from
    * @returns Closest point on the line to point
    */
    function pointOnLine(line: GeoJSON.Feature<GeoJSON.LineString>, point: GeoJSON.Feature<GeoJSON.Point>): GeoJSON.Feature<GeoJSON.Point>;

    //////////////////////////////////////////////////////
    // Helper
    //////////////////////////////////////////////////////

    /**
    * Takes one or more Features and creates a FeatureCollection.
    * @param features Input features
    * @returns A FeatureCollection of input features
    */
    function featurecollection(features: Array<GeoJSON.Feature<any>>): GeoJSON.FeatureCollection<any>;

    /**
    * Creates a LineString based on a coordinate array. Properties can be added optionally.
    * @param coordinates An array of Positions
    * @param [properties] An Object of key-value pairs to add as properties
    * @returns A LineString feature
    */
    function linestring(coordinates: Array<Array<number>>, properties?: any): GeoJSON.Feature<GeoJSON.LineString>;

    /**
    * Takes coordinates and properties (optional) and returns a new Point feature.
    * @param coordinates Longitude, latitude position (each in decimal degrees)
    * @param [properties] An Object of key-value pairs to add as properties
    * @returns A Point feature
    */
    function point(coordinates: Array<number>, properties?: any): GeoJSON.Feature<GeoJSON.Point>;

    /**
    * Takes an array of LinearRings and optionally an Object with properties and returns a Polygon feature.
    * @param rings An array of LinearRings
    * @param [properties] An Object of key-value pairs to add as properties
    * @returns A Polygon feature
    */
    function polygon(rings: Array<Array<Array<number>>>, properties?: any): GeoJSON.Feature<GeoJSON.Polygon>;

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
    function filter(features: GeoJSON.FeatureCollection<any>, key: string, value: string): GeoJSON.FeatureCollection<any>;

    /**
    * Generates random GeoJSON data, including Points and Polygons, for testing and experimentation.
    * @param [type='point'] Type of features desired: 'points' or 'polygons'
    * @param [count=1] How many geometries should be generated.
    * @param [options] Options relevant to the feature desired. Can include:
    *   - A bounding box inside of which geometries are placed. In the case of Point features, they are guaranteed to be within this bounds, while Polygon features have their centroid within the bounds.
    *   - The number of vertices added to polygon features. Default is 10;
    *   - The total number of decimal degrees longitude or latitude that a polygon can extent outwards to from its center. Default is 10.
    * @returns Generated random features
    */
    function random(type?: string, count?: number, options?: {bbox?: Array<number>; num_vertices?: number; max_radial_length?: number;}): GeoJSON.FeatureCollection<any>;

    /**
    * Takes a FeatureCollection of any type, a property, and a value and returns a FeatureCollection with features matching that property-value pair removed.
    * @param features Set of input features
    * @param property The property to remove
    * @param value The value to remove
    * @returns The resulting FeatureCollection without features that match the property-value pair
    */
    function remove(features: GeoJSON.FeatureCollection<any>, property: string, value: string): GeoJSON.FeatureCollection<any>;

    /**
    * Takes a FeatureCollection and returns a FeatureCollection with given number of features at random.
    * @param features Set of input features
    * @param n Number of features to select
    * @returns A FeatureCollection with n features
    */
    function sample(features: GeoJSON.FeatureCollection<any>, n: number): GeoJSON.FeatureCollection<any>;

    //////////////////////////////////////////////////////
    // Interpolation
    //////////////////////////////////////////////////////

    /**
    * Takes a bounding box and a cell size in degrees and returns a FeatureCollection of flat-topped hexagons (Polygon features) aligned in an "odd-q" vertical grid as described in Hexagonal Grids.
    * @param bbox Bounding box in [minX, minY, maxX, maxY] order
    * @param cellWidth Width of cell in specified units
    * @param units Used in calculating cellWidth ('miles' or 'kilometers')
    * @returns A hexagonal grid
    */
    function hexGrid(bbox: Array<number>, cellWidth: number, units: string): GeoJSON.FeatureCollection<GeoJSON.Polygon>;

    /**
    * Takes points with z-values and an array of value breaks and generates isolines.
    * @param points Input points
    * @param z The property name in points from which z-values will be pulled
    * @param resolution Resolution of the underlying grid
    * @param breaks Where to draw contours
    * @returns Isolines
    */
    function isolines(points: GeoJSON.FeatureCollection<GeoJSON.Point>, z: string, resolution: number, breaks: Array<number>): GeoJSON.FeatureCollection<GeoJSON.LineString>;

    /**
    * Takes a triangular plane as a Polygon and a Point within that triangle and returns the z-value at that point.
    * The Polygon needs to have properties a, b, and c that define the values at its three corners.
    * @param interpolatedPoint The Point for which a z-value will be calculated
    * @param triangle A Polygon feature with three vertices
    * @returns The z-value for interpolatedPoint
    */
    function planepoint(interpolatedpoint: GeoJSON.Feature<GeoJSON.Point>, triangle: GeoJSON.Feature<GeoJSON.Polygon>): number;

    /**
    * Takes a bounding box and a cell depth and returns a set of points in a grid.
    * @param extent Extent in [minX, minY, maxX, maxY] order
    * @param cellWidth The distance across each cell
    * @param units Used in calculating cellWidth ('miles' or 'kilometers')
    * @returns Grid of points
    */
    function pointGrid(extent: Array<number>, cellWidth: number, units: string): GeoJSON.FeatureCollection<GeoJSON.Point>;

    /**
    * Takes a bounding box and a cell depth and returns a set of square polygons in a grid.
    * @param extent Extent in [minX, minY, maxX, maxY] order
    * @param cellWidth Width of each cell
    * @param units Used in calculating cellWidth ('miles' or 'kilometers')
    * @returns Grid of polygons
    */
    function squareGrid(extent: Array<number>, cellWidth: number, units: string): GeoJSON.FeatureCollection<GeoJSON.Polygon>;

    /**
    * Takes a set of points and the name of a z-value property and creates a Triangulated Irregular Network, or a TIN for short, returned as a collection of Polygons.
    * These are often used for developing elevation contour maps or stepped heat visualizations.
    * This triangulates the points, as well as adds properties called a, b, and c representing the value of the given propertyName at each of the points that represent the corners of the triangle.
    * @param points Input points
    * @param [propertyName] Name of the property from which to pull z values This is optional: if not given, then there will be no extra data added to the derived triangles.
    * @returns TIN output
    */
    function tin(points: GeoJSON.FeatureCollection<GeoJSON.Point>, propertyName?: string): GeoJSON.FeatureCollection<GeoJSON.Polygon>;

    /**
    * Takes a bounding box and a cell depth and returns a set of triangular polygons in a grid.
    * @param extent Extent in [minX, minY, maxX, maxY] order
    * @param cellWidth Width of each cell
    * @param units Used in calculating cellWidth ('miles' or 'kilometers')
    * @returns Grid of triangles
    */
    function triangleGrid(extent: Array<number>, cellWidth: number, units: string): GeoJSON.FeatureCollection<GeoJSON.Polygon>;

    //////////////////////////////////////////////////////
    // Joins
    //////////////////////////////////////////////////////

    /**
    * Takes a Point and a Polygon or MultiPolygon and determines if the point resides inside the polygon.
    * The polygon can be convex or concave. The function accounts for holes.
    * @param point Input point
    * @param polygon Input polygon or multipolygon
    * @returns true if the Point is inside the Polygon; false if the Point is not inside the Polygon
    */
    function inside(point: GeoJSON.Feature<GeoJSON.Point>, polygon: GeoJSON.Feature<GeoJSON.Polygon>): boolean;

    /**
    * Takes a set of points and a set of polygons and performs a spatial join.
    * @param points Input points
    * @param polygons Input polygons
    * @param polyId Property in polygons to add to joined Point features
    * @param containingPolyId Property in points in which to store joined property from polygons
    * @returns Points with containingPolyId property containing values from polyId
    */
    function tag(points: GeoJSON.FeatureCollection<GeoJSON.Point>, polygons: GeoJSON.FeatureCollection<GeoJSON.Polygon>, polyId: string, containingPolyId: string): GeoJSON.FeatureCollection<GeoJSON.Point>;

    /**
    * Takes a set of points and a set of polygons and returns the points that fall within the polygons.
    * @param points Input points
    * @param polygons Input polygons
    * @returns Points that land within at least one polygon
    */
    function within(points: GeoJSON.FeatureCollection<GeoJSON.Point>, polygons: GeoJSON.FeatureCollection<GeoJSON.Polygon>): GeoJSON.FeatureCollection<GeoJSON.Point>;

    //////////////////////////////////////////////////////
    // Classification
    //////////////////////////////////////////////////////

    /**
    * Takes a set of features and returns an array of the Jenks Natural breaks for a given property.
    * @param input Input features
    * @param field The property in input on which to calculate Jenks natural breaks
    * @param numberOfBreaks Number of classes in which to group the data
    * @returns The break number for each class plus the minimum and maximum values
    */
    function jenks(input: GeoJSON.FeatureCollection<any>, field: string, numberOfBreaks: number): Array<number>;

    /**
    * Takes a reference point and a set of points and returns the point from the set closest to the reference.
    * @param point The reference point
    * @param against Input point set
    * @returns The closest point in the set to the reference point
    */
    function nearest(point: GeoJSON.Feature<GeoJSON.Point>, against: GeoJSON.FeatureCollection<GeoJSON.Point>): GeoJSON.Feature<GeoJSON.Point>;

    /**
    * Takes a FeatureCollection, a property name, and a set of percentiles and returns a quantile array.
    * @param input Set of features
    * @param field The property in input from which to retrieve quantile values
    * @param percentiles An Array of percentiles on which to calculate quantile values
    * @returns An array of the break values
    */
    function quantile(input: GeoJSON.FeatureCollection<any>, field: string, percentiles: Array<number>): Array<number>;

    /**
    * Takes a FeatureCollection, an input field, an output field, and an array of translations and outputs an identical FeatureCollection with the output field property populated.
    * @param input Set of input features
    * @param inField The field to translate
    * @param outField The field in which to store translated results
    * @param translations An array of translations
    * @returns A FeatureCollection with identical geometries to input but with outField populated.
    */
    function reclass(input: GeoJSON.FeatureCollection<any>, inField: string, outField: string, translations: Array<any>): GeoJSON.FeatureCollection<any>;
}

declare module 'turf' {
  export= turf;
}
