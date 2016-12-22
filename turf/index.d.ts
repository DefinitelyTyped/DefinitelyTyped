// Type definitions for Turf 3.5.2
// Project: http://turfjs.org/
// Definitions by: Guillaume Croteau <https://github.com/gcroteau>, Denis Carriere <https://github.com/DenisCarriere>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="geojson" />

/**
#### TODO:

Update all methods with newest JSDocs & tests based on the latest TurfJS library.

AGGREGATION
- [x] collect
MEASUREMENT
- [ ] along
- [ ] area
- [ ] bboxPolygon
- [ ] bearing
- [ ] center
- [ ] centroid
- [ ] destination
- [ ] distance
- [ ] envelope
- [ ] lineDistance
- [ ] midpoint
- [ ] pointOnSurface
- [ ] square
TRANSFORMATION
- [ ] bezier
- [ ] buffer
- [ ] concave
- [ ] convex
- [ ] difference
- [ ] intersect
- [ ] simplify
- [ ] union
MISC
- [ ] combine
- [ ] explode
- [ ] flip
- [ ] kinks
- [ ] lineSlice
- [ ] pointOnLine
HELPER
- [x] featureCollection
- [x] feature
- [x] lineString
- [x] multiLineString
- [x] point
- [x] multiPoint
- [x] polygon
- [x] multiPolygon
- [x] geometryCollection
DATA
- [x] random
- [x] sample
INTERPOLATION
- [ ] isolines
- [ ] planepoint
- [ ] tin
JOINS
- [x] inside
- [x] tag
- [ ] within
GRIDS
- [x] hexGrid
- [x] pointGrid
- [x] squareGrid
- [x] triangleGrid
CLASSIFICATION
- [ ] nearest
META
- [ ] propEach
- [ ] coordEach
- [ ] coordReduce
- [ ] featureEach
- [ ] getCoord
ASSERTIONS
- [ ] featureOf
- [ ] collectionOf
- [x] bbox
- [x] circle
- [x] geojsonType
- [x] propReduce
- [x] coordAll
- [x] tesselate
 */

declare const turf: turf.TurfStatic;
declare const TemplateUnits: 'miles' | 'nauticalmiles' | 'degrees' | 'radians' | 'inches' | 'yards' | 'meters' | 'metres' | 'kilometers' | 'kilometres'
declare const TemplateType: 'point'| 'points' | 'polygon' | 'polygons'
declare interface OptionsRandom {
    bbox?: Array<number>
    num_vertices?: number
    max_radial_length?: number
}
declare type PropReduceCallback = (memo: any, coord: GeoJSON.Feature<any> | GeoJSON.FeatureCollection<any>) => any
declare module turf {
  interface TurfStatic {
    //////////////////////////////////////////////////////
    // Aggregation
    //////////////////////////////////////////////////////

    /**
     * Merges a specified property from a FeatureCollection of points into a FeatureCollection of polygons. Given an `inProperty` on points and an `outProperty` for polygons, this finds every point that lies within each polygon, collects the `inProperty` values from those points, and adds them as an array to `outProperty` on the polygon.
     *
     * @name [collect](http://turfjs.org/docs/#collect)
     * @param {FeatureCollection<Polygon>} polygons polygons with values on which to aggregate
     * @param {FeatureCollection<Point>} points points to be aggregated
     * @param {string} inProperty property to be nested from
     * @param {string} outProperty property to be nested into
     * @return {FeatureCollection<Polygon>} polygons with properties listed based on `outField`
     * @example
     * var poly1 = polygon([[[0,0],[10,0],[10,10],[0,10],[0,0]]])
     * var poly2 = polygon([[[10,0],[20,10],[20,20],[20,0],[10,0]]])
     * var polyFC = featurecollection([poly1, poly2])
     * var pt1 = point([5,5], {population: 200})
     * var pt2 = point([1,3], {population: 600})
     * var pt3 = point([14,2], {population: 100})
     * var pt4 = point([13,1], {population: 200})
     * var pt5 = point([19,7], {population: 300})
     * var ptFC = featurecollection([pt1, pt2, pt3, pt4, pt5])
     * var aggregated = aggregate(polyFC, ptFC, 'population', 'values')
     *
     * aggregated.features[0].properties.values // => [200, 600])
     */
    collect(
      polygons: GeoJSON.FeatureCollection<GeoJSON.Polygon>,
      points: GeoJSON.FeatureCollection<GeoJSON.Point>,
      inProperty: string,
      outProperty: string
    ): GeoJSON.FeatureCollection<GeoJSON.Polygon>;

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
    along(
      line: GeoJSON.Feature<GeoJSON.LineString>,
      distance: number,
      units?: typeof TemplateUnits
    ): GeoJSON.Feature<GeoJSON.Point>;

    /**
    * Takes one or more features and returns their area in square meters.
    * @param input Input features
    * @returns Area in square meters
    */
    area(input: GeoJSON.Feature<any> | GeoJSON.FeatureCollection<any>): number;

    /**
     * Takes a set of features, calculates the bbox of all input features, and returns a bounding box.
     *
     * @name bbox
     * @param {(Feature|FeatureCollection)} geojson input features
     * @return {Array<number>} bbox extent in [minX, minY, maxX, maxY] order
     * @example
     * var pt1 = point([114.175329, 22.2524])
     * var pt2 = point([114.170007, 22.267969])
     * var pt3 = point([114.200649, 22.274641])
     * var pt4 = point([114.200649, 22.274641])
     * var pt5 = point([114.186744, 22.265745])
     * var features = featureCollection([pt1, pt2, pt3, pt4, pt5])
     *
     * var bbox = turf.bbox(features);
     *
     * var bboxPolygon = turf.bboxPolygon(bbox);
     *
     * //=bbox
     *
     * //=bboxPolygon
     */
    bbox(bbox: GeoJSON.Feature<any> | GeoJSON.FeatureCollection<any>): Array<number>;

    /**
     * Takes a {@link Point} and calculates the circle polygon given a radius in degrees, radians, miles, or kilometers; and steps for precision.
     *
     * @name circle
     * @param {Feature<Point>} center center point
     * @param {number} radius radius of the circle
     * @param {number} [steps=64] number of steps
     * @param {string} [units=kilometers] miles, kilometers, degrees, or radians
     * @returns {Feature<Polygon>} circle polygon
     * @example
     * var center = point([-75.343, 39.984]);
     * var radius = 5;
     * var steps = 10;
     * var units = 'kilometers';
     *
     * var circle = turf.circle(center, radius, steps, units);
     *
     * //=circle
     */
    circle(center: GeoJSON.Feature<GeoJSON.Point>, radius: number, steps?: number, units?: typeof TemplateUnits): GeoJSON.Feature<GeoJSON.Polygon>;


    /**
     * Enforce expectations about types of GeoJSON objects for Turf.
     *
     * @name geojsonType
     * @param {GeoJSON} value any GeoJSON object
     * @param {string} type expected GeoJSON type
     * @param {string} name name of calling function
     * @throws {Error} if value is not the expected type.
     */
    geojsonType(value: GeoJSON.Feature<any> | GeoJSON.FeatureCollection<any>, type: string, name: string): void

    /**
     * Reduce properties in any GeoJSON object into a single value, similar to how Array.reduce works. However, in this case we lazily run the reduction, so an array of all properties is unnecessary.
     *
     * @name propReduce
     * @param {GeoJSON} layer any GeoJSON object
     * @param {Function} callback a method that takes (memo, coord) and returns a new memo
     * @param {*} memo the starting value of memo: can be any type.
     * @return {*} combined value
     */
    propReduce(layer: GeoJSON.Feature<any> | GeoJSON.FeatureCollection<any>, callback: PropReduceCallback, memo: any): any

    /**
     * Get all coordinates from any GeoJSON object, returning an array of coordinate arrays.
     *
     * @name coordAll
     * @param {GeoJSON} layer any GeoJSON object
     * @returns {Array<Array<Number>>} coordinate position array
     */
    coordAll(layer: GeoJSON.Feature<any> | GeoJSON.FeatureCollection<any>): Array<Array<number>>

    /**
     * Tesselates a {@link Feature<Polygon>} into a {@link FeatureCollection<Polygon>} of triangles using [earcut](https://github.com/mapbox/earcut).
     *
     * @name tesselate
     * @param {Feature<Polygon>} polygon the polygon to tesselate
     * @returns {FeatureCollection<Polygon>} a geometrycollection feature
     * @example
     * var polygon = turf.random('polygon').features[0];
     *
     * var triangles = turf.tesselate(polygon);
     *
     * //=triangles
     */
    tesselate(poly: GeoJSON.Feature<GeoJSON.Polygon>): GeoJSON.FeatureCollection<GeoJSON.Polygon>

    /**
    * Takes a bbox and returns an equivalent polygon.
    * @param bbox An Array of bounding box coordinates in the form: [xLow, yLow, xHigh, yHigh]
    * @returns A Polygon representation of the bounding box
    */
    bboxPolygon(bbox: Array<number>): GeoJSON.Feature<GeoJSON.Polygon>;

    /**
    * Takes two points and finds the geographic bearing between them.
    * @param start Starting Point
    * @param end Ending point
    * @returns Bearing in decimal degrees
    */
    bearing(start: GeoJSON.Feature<GeoJSON.Point>, end: GeoJSON.Feature<GeoJSON.Point>): number;

    /**
    * Takes a FeatureCollection and returns the absolute center point of all features.
    * @param features Input features
    * @returns A Point feature at the absolute center point of all input features
    */
    center(features: GeoJSON.FeatureCollection<any>): GeoJSON.Feature<GeoJSON.Point>;

    /**
    * Takes one or more features and calculates the centroid using the arithmetic mean of all vertices.
    * This lessens the effect of small islands and artifacts when calculating the centroid of a set of polygons.
    * @param features Input features
    * @returns The centroid of the input features
    */
    centroid(features: GeoJSON.Feature<any> | GeoJSON.FeatureCollection<any>): GeoJSON.Feature<GeoJSON.Point>;

    /**
    * Takes a Point and calculates the location of a destination point given a distance in degrees, radians, miles, or kilometers and bearing in degrees.
    * This uses the Haversine formula to account for global curvature.
    * @param start Starting point
    * @param distance Distance from the starting point
    * @param bearing Ranging from -180 and 180
    * @param units 'miles', 'kilometers', 'radians', or 'degrees'
    * @returns Destination point
    */
    destination(
      start: GeoJSON.Feature<GeoJSON.Point>,
      distance: number,
      bearing: number,
      units?: typeof TemplateUnits
    ): GeoJSON.Feature<GeoJSON.Point>;

    /**
    * Calculates the distance between two points in degress, radians, miles, or kilometers.
    * This uses the Haversine formula to account for global curvature.
    * @param from Origin point
    * @param to Destination point
    * @param [units=kilometers] 'miles', 'kilometers', 'radians', or 'degrees'
    * @returns Distance between the two points
    */
    distance(
      from: GeoJSON.Feature<GeoJSON.Point>,
      to: GeoJSON.Feature<GeoJSON.Point>,
      units?: typeof TemplateUnits
    ): number;

    /**
    * Takes any number of features and returns a rectangular Polygon that encompasses all vertices.
    * @param fc Input features
    * @returns A rectangular Polygon feature that encompasses all vertices
    */
    envelope(fc: GeoJSON.FeatureCollection<any>): GeoJSON.Feature<GeoJSON.Polygon>;

    /**
    * Takes a line and measures its length in the specified units.
    * @param line Line to measure
    * @param units 'miles', 'kilometers', 'radians', or 'degrees'
    * @returns Length of the input line
    */
    lineDistance(
      line: GeoJSON.Feature<GeoJSON.LineString>,
      units?: typeof TemplateUnits
    ): number;

    /**
    * Takes two points and returns a point midway between them.
    * @param pt1 First point
    * @param pt2 Second point
    * @returns A point midway between pt1 and pt2
    */
    midpoint(pt1: GeoJSON.Feature<GeoJSON.Point>, pt2: GeoJSON.Feature<GeoJSON.Point>): GeoJSON.Feature<GeoJSON.Point>;

    /**
    * Takes a feature and returns a Point guaranteed to be on the surface of the feature. Given a Polygon, the point will be in the area of the polygon.
    * Given a LineString, the point will be along the string. Given a Point, the point will the same as the input.
    * @param input Any feature or set of features
    * @returns A point on the surface of input
    */
    pointOnSurface(input: GeoJSON.Feature<any> | GeoJSON.FeatureCollection<any>): GeoJSON.Feature<any>;

    /**
    * Takes a bounding box and calculates the minimum square bounding box that would contain the input.
    * @param bbox A bounding box
    * @returns A square surrounding bbox
    */
    square(bbox: Array<number>): Array<number>;

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
    bezier(line: GeoJSON.Feature<GeoJSON.LineString>, resolution?: number, sharpness?: number): GeoJSON.Feature<GeoJSON.LineString>;

    /**
    * Calculates a buffer for input features for a given radius. Units supported are miles, kilometers, and degrees.
    * @param feature Input to be buffered
    * @param distance Distance to draw the buffer
    * @param units 'miles', 'kilometers', 'radians', or 'degrees'
    * @returns Buffered features
    */
    buffer(feature: GeoJSON.Feature<GeoJSON.Polygon>, distance: number, units?: typeof TemplateUnits): GeoJSON.Feature<GeoJSON.Polygon>;
    buffer(feature: GeoJSON.Feature<GeoJSON.MultiPolygon>, distance: number, units?: typeof TemplateUnits): GeoJSON.Feature<GeoJSON.MultiPolygon>;
    buffer(feature: GeoJSON.Feature<GeoJSON.Point>, distance: number, units?: typeof TemplateUnits): GeoJSON.Feature<GeoJSON.Point>;
    buffer(feature: GeoJSON.Feature<any>, distance: number, units?: typeof TemplateUnits): GeoJSON.Feature<any>;
    buffer(feature: GeoJSON.FeatureCollection<GeoJSON.Polygon>, distance: number, units?: typeof TemplateUnits): GeoJSON.FeatureCollection<GeoJSON.Polygon>;
    buffer(feature: GeoJSON.FeatureCollection<GeoJSON.MultiPolygon>, distance: number, units?: typeof TemplateUnits): GeoJSON.FeatureCollection<GeoJSON.MultiPolygon>;
    buffer(feature: GeoJSON.FeatureCollection<GeoJSON.Point>, distance: number, units?: typeof TemplateUnits): GeoJSON.FeatureCollection<GeoJSON.Point>;
    buffer(feature: GeoJSON.FeatureCollection<any>, distance: number, units?: typeof TemplateUnits): GeoJSON.FeatureCollection<any>;

    /**
    * Takes a set of points and returns a concave hull polygon. Internally, this implements a Monotone chain algorithm.
    * @param points Input points
    * @param maxEdge The size of an edge necessary for part of the hull to become concave (in miles)
    * @param units Used for maxEdge distance (miles or kilometers)
    * @returns A concave hull
    */
    concave(
      points: GeoJSON.FeatureCollection<GeoJSON.Point>,
      maxEdge: number,
      units?: typeof TemplateUnits
    ): GeoJSON.Feature<GeoJSON.Polygon>;

    /**
    * Takes a set of points and returns a convex hull polygon. Internally this uses the convex-hull module that implements a monotone chain hull.
    * @param input Input points
    * @returns A convex hull
    */
    convex(
      input: GeoJSON.FeatureCollection<GeoJSON.Point>
    ): GeoJSON.Feature<GeoJSON.Polygon>;

    /**
    * Finds the difference between two polygons by clipping the second polygon from the first.
    * @param poly1 Input Polygon feaure
    * @param poly2 Polygon feature to difference from poly1
    * @returns A Polygon feature showing the area of poly1 excluding the area of poly2
    */
    difference(
      poly1: GeoJSON.Feature<GeoJSON.Polygon>,
      poly2: GeoJSON.Feature<GeoJSON.Polygon>
    ): GeoJSON.Feature<GeoJSON.Polygon>;

    /**
     * Takes two Features and finds their intersection.
     * If they share a border, returns the border if they don't intersect, returns undefined.
     *
     * @name [intersect](http://turfjs.org/docs/#intersect)
     * @param {Feature<Polygon>} poly1
     * @param {Feature<Polygon>} poly2
     * @returns {Feature|undefined} A feature representing the point(s) they share (in case of a {Point}  or {MultiPoint}), the borders they share (in case of a {LineString} or a {MultiLineString}), the area they share (in case of {Polygon} or {MultiPolygon}). If they do not share any point, returns `undefined`.
     * @example
     * var poly1 = polygon([[
     *   [-122.801742, 45.48565],
     *   [-122.801742, 45.60491],
     *   [-122.584762, 45.60491],
     *   [-122.584762, 45.48565],
     *   [-122.801742, 45.48565]
     * ]]);
     *
     * var poly2 = polygon([[
     *   [-122.520217, 45.535693],
     *   [-122.64038, 45.553967],
     *   [-122.720031, 45.526554],
     *   [-122.669906, 45.507309],
     *   [-122.723464, 45.446643],
     *   [-122.532577, 45.408574],
     *   [-122.487258, 45.477466],
     *   [-122.520217, 45.535693]
     * ]]);
     * var polygons = featureCollection([poly1, poly2]);
     *
     * var intersection = turf.intersect(poly1, poly2);
     *
     * //=polygons
     *
     * //=intersection
     */
    intersect(
      feature1: GeoJSON.Feature<GeoJSON.Polygon>,
      feature2: GeoJSON.Feature<GeoJSON.Polygon>
    ): GeoJSON.Feature<GeoJSON.Point | GeoJSON.LineString | GeoJSON.Polygon>;
    intersect(
      feature1: GeoJSON.Feature<any>,
      feature2: GeoJSON.Feature<any>
    ): GeoJSON.Feature<any>;

    /**
    * Takes a LineString or Polygon and returns a simplified version.
    * Internally uses simplify-js to perform simplification.
    * @param feature Feature to be simplified
    * @param tolerance Simplification tolerance
    * @param highQuality Whether or not to spend more time to create a higher-quality simplification with a different algorithm
    * @returns A simplified feature
    */
    simplify(feature: GeoJSON.Feature<any> | GeoJSON.FeatureCollection<any> | GeoJSON.GeometryCollection, tolerance: number, highQuality: boolean): GeoJSON.Feature<any> | GeoJSON.FeatureCollection<any> | GeoJSON.GeometryCollection;

    /**
    * Takes two polygons and returns a combined polygon.
    * If the input polygons are not contiguous, this function returns a MultiPolygon feature.;
    * @param poly1 Input polygon
    * @param poly2 Another input polygon
    * @returns A combined Polygon or MultiPolygon feature
    */
    union(poly1: GeoJSON.Feature<GeoJSON.Polygon>, poly2: GeoJSON.Feature<GeoJSON.Polygon>): GeoJSON.Feature<GeoJSON.Polygon | GeoJSON.MultiPolygon>;

    //////////////////////////////////////////////////////
    // Misc
    //////////////////////////////////////////////////////

    /**
    * Combines a FeatureCollection of Point, LineString, or Polygon features into MultiPoint, MultiLineString, or MultiPolygon features.
    * @param fc A FeatureCollection of any type
    * @returns A FeatureCollection of corresponding type to input
    */
    combine(fc: GeoJSON.FeatureCollection<any>): GeoJSON.FeatureCollection<any>;

    /**
    * Takes a feature or set of features and returns all positions as points.
    * @param input Input features
    * @returns Points representing the exploded input features
    */
    explode(input: GeoJSON.Feature<any> | GeoJSON.FeatureCollection<any>): GeoJSON.FeatureCollection<GeoJSON.Point>;

    /**
    * Takes input features and flips all of their coordinates from [x, y] to [y, x].
    * @param input Input features
    * @returns A feature or set of features of the same type as input with flipped coordinates
    */
    flip(input: GeoJSON.Feature<any> | GeoJSON.FeatureCollection<any>): GeoJSON.Feature<any> | GeoJSON.FeatureCollection<any>;

    /**
    * Takes a polygon and returns points at all self-intersections.
    * @param polygon Input polygon
    * @returns Self-intersections
    */
    kinks(polygon: GeoJSON.Feature<GeoJSON.Polygon>): GeoJSON.FeatureCollection<GeoJSON.Point>;

    /**
    * Takes a line, a start Point, and a stop point and returns the line in between those points.
    * @param point1 Starting point
    * @param point2 Stopping point
    * @param line Line to slice
    * @returns Sliced line
    */
    lineSlice(point1: GeoJSON.Feature<GeoJSON.Point>, point2: GeoJSON.Feature<GeoJSON.Point>, line: GeoJSON.Feature<GeoJSON.LineString>): GeoJSON.Feature<GeoJSON.LineString>;

    /**
    * Takes a Point and a LineString and calculates the closest Point on the LineString.
    * @param line Line to snap to
    * @param point Point to snap from
    * @returns Closest point on the line to point
    */
    pointOnLine(line: GeoJSON.Feature<GeoJSON.LineString>, point: GeoJSON.Feature<GeoJSON.Point>): GeoJSON.Feature<GeoJSON.Point>;

    //////////////////////////////////////////////////////
    // Helper
    //////////////////////////////////////////////////////

    /**
     * Takes one or more {@link Feature|Features} and creates a {@link FeatureCollection}.
     *
     * @name [featureCollection](http://turfjs.org/docs/#featurecollection)
     * @param {Feature[]} features input features
     * @returns {FeatureCollection} a FeatureCollection of input features
     * @example
     * var features = [
     *  turf.point([-75.343, 39.984], {name: 'Location A'}),
     *  turf.point([-75.833, 39.284], {name: 'Location B'}),
     *  turf.point([-75.534, 39.123], {name: 'Location C'})
     * ]
     *
     * var fc = turf.featureCollection(features)
     *
     * //=fc
     */
    featureCollection(features: Array<GeoJSON.Feature<any>>): GeoJSON.FeatureCollection<any>;

    /**
     * Wraps a GeoJSON {@link Geometry} in a GeoJSON {@link Feature}.
     *
     * @name [feature](http://turfjs.org/docs/#feature)
     * @param {Geometry} geometry input geometry
     * @param {Object} properties properties
     * @returns {FeatureCollection} a FeatureCollection of input features
     * @example
     * var geometry = {
     *      "type": "Point",
     *      "coordinates": [
     *        67.5,
     *        32.84267363195431
     *      ]
     *    }
     *
     * var feature = turf.feature(geometry)
     *
     * //=feature
     */
    feature(geometry:GeoJSON.Feature<any>, properties?: any): GeoJSON.Feature<any>;

    /**
     * Creates a {@link LineString} based on a coordinate array. Properties can be added optionally.
     *
     * @name [lineString](http://turfjs.org/docs/#linestring)
     * @param {Array<Array<number>>} coordinates an array of Positions
     * @param {Object=} properties an Object of key-value pairs to add as properties
     * @returns {Feature<LineString>} a LineString feature
     * @throws {Error} if no coordinates are passed
     * @example
     * var linestring1 = turf.lineString([
     *    [-21.964416, 64.148203],
     *    [-21.956176, 64.141316],
     *    [-21.93901, 64.135924],
     *    [-21.927337, 64.136673]
     * ])
     * var linestring2 = turf.lineString([
     *    [-21.929054, 64.127985],
     *    [-21.912918, 64.134726],
     *    [-21.916007, 64.141016],
     *   [-21.930084, 64.14446]
     * ], {name: 'line 1', distance: 145})
     *
     * //=linestring1
     *
     * //=linestring2
     */
    lineString(coordinates: Array<Array<number>>, properties?: any): GeoJSON.Feature<GeoJSON.LineString>;

    /**
     * Creates a {@link Feature<MultiLineString>} based on a coordinate array. Properties can be added optionally.
     *
     * @name [multiLineString](http://turfjs.org/docs/#multilinestring)
     * @param {Array<Array<Array<number>>>} coordinates an array of LineStrings
     * @param {Object=} properties an Object of key-value pairs to add as properties
     * @returns {Feature<MultiLineString>} a MultiLineString feature
     * @throws {Error} if no coordinates are passed
     * @example
     * var multiLine = turf.multiLineString([[[0,0],[10,10]]])
     *
     * //=multiLine
     *
     */
    multiLineString(coordinates: Array<Array<Array<number>>>, properties?: any): GeoJSON.Feature<GeoJSON.MultiLineString>;

    /**
     * Takes coordinates and properties (optional) and returns a new {@link Point} feature.
     *
     * @name [point](http://turfjs.org/docs/#point)
     * @param {Array<number>} coordinates longitude, latitude position (each in decimal degrees)
     * @param {Object=} properties an Object that is used as the {@link Feature}'s
     * properties
     * @returns {Feature<Point>} a Point feature
     * @example
     * var pt1 = turf.point([-75.343, 39.984]);
     *
     * //=pt1
     */
    point(coordinates: Array<number>, properties?: any): GeoJSON.Feature<GeoJSON.Point>;

    /**
     * Creates a {@link Feature<MultiPoint>} based on a coordinate array. Properties can be added optionally.
     *
     * @name [multiPoint](http://turfjs.org/docs/#multipoint)
     * @param {Array<Array<number>>} coordinates an array of Positions
     * @param {Object=} properties an Object of key-value pairs to add as properties
     * @returns {Feature<MultiPoint>} a MultiPoint feature
     * @throws {Error} if no coordinates are passed
     * @example
     * var multiPt = turf.multiPoint([[0,0],[10,10]])
     *
     * //=multiPt
     *
     */
    multiPoint(coordinates: Array<Array<number>>, properties?: any): GeoJSON.Feature<GeoJSON.MultiPoint>;

    /**
     * Takes an array of LinearRings and optionally an {@link Object} with properties and returns a {@link Polygon} feature.
     *
     * @name [polygon](http://turfjs.org/docs/#polygon)
     * @param {Array<Array<Array<number>>>} coordinates an array of LinearRings
     * @param {Object=} properties a properties object
     * @returns {Feature<Polygon>} a Polygon feature
     * @throws {Error} throw an error if a LinearRing of the polygon has too few positions
     * or if a LinearRing of the Polygon does not have matching Positions at the
     * beginning & end.
     * @example
     * var polygon = turf.polygon([[
     *  [-2.275543, 53.464547],
     *  [-2.275543, 53.489271],
     *  [-2.215118, 53.489271],
     *  [-2.215118, 53.464547],
     *  [-2.275543, 53.464547]
     * ]], { name: 'poly1', population: 400});
     *
     * //=polygon
     */
    polygon(coordinates: Array<Array<Array<number>>>, properties?: any): GeoJSON.Feature<GeoJSON.Polygon>;

    /**
     * Creates a {@link Feature<MultiPolygon>} based on a coordinate array. Properties can be added optionally.
     *
     * @name [multiPolygon](http://turfjs.org/docs/#multipolygon)
     * @param {Array<Array<Array<Array<number>>>>} coordinates an array of Polygons
     * @param {Object=} properties an Object of key-value pairs to add as properties
     * @returns {Feature<MultiPolygon>} a multipolygon feature
     * @throws {Error} if no coordinates are passed
     * @example
     * var multiPoly = turf.multiPolygon([[[[0,0],[0,10],[10,10],[10,0],[0,0]]]);
     *
     * //=multiPoly
     *
     */
    multiPolygon(coordinates: Array<Array<Array<Array<number>>>>, properties?: any): GeoJSON.Feature<GeoJSON.MultiPolygon>;

    /**
     * Creates a {@link Feature<GeometryCollection>} based on acoordinate array. Properties can be added optionally.
     *
     * @name [geometryCollection](http://turfjs.org/docs/#geometrycollection)
     * @param {Array<{Geometry}>} geometries an array of GeoJSON Geometries
     * @param {Object=} properties an Object of key-value pairs to add as properties
     * @returns {Feature<GeometryCollection>} a GeoJSON GeometryCollection Feature
     * @example
     * var point = {
     *     "type": "Point",
     *       "coordinates": [100, 0]
     *     };
     * var line = {
     *     "type": "LineString",
     *     "coordinates": [ [101, 0], [102, 1] ]
     *   };
     * var collection = turf.geometryCollection([point, line]);
     *
     * //=collection
     */
    geometryCollection(geometries: Array<GeoJSON.GeometryObject>, properties?: any): GeoJSON.GeometryCollection;

    //////////////////////////////////////////////////////
    // Data
    //////////////////////////////////////////////////////

    /**
     * Generates random {@link GeoJSON} data, including {@link Point|Points} and {@link Polygon|Polygons}, for testing and experimentation.
     *
     * @name [random](http://turfjs.org/docs/#random)
     * @param {String} [type='point'] type of features desired: 'points' or 'polygons'
     * @param {Number} [count=1] how many geometries should be generated.
     * @param {Object} options options relevant to the feature desired. Can include:
     * @param {Array<number>} options.bbox a bounding box inside of which geometries
     * are placed. In the case of {@link Point} features, they are guaranteed to be within this bounds,
     * while {@link Polygon} features have their centroid within the bounds.
     * @param {Number} [options.num_vertices=10] options.vertices the number of vertices added
     * to polygon features.
     * @param {Number} [options.max_radial_length=10] the total number of decimal
     * degrees longitude or latitude that a polygon can extent outwards to
     * from its center.
     * @return {FeatureCollection} generated random features
     * @example
     * var points = turf.random('points', 100, {
     *   bbox: [-70, 40, -60, 60]
     * })
     *
     * //=points
     *
     * var polygons = turf.random('polygons', 4, {
     *   bbox: [-70, 40, -60, 60]
     * })
     *
     * //=polygons
     */
    random(type?: 'point', count?: number, options?: OptionsRandom): GeoJSON.FeatureCollection<GeoJSON.Point>;
    random(type?: 'points', count?: number, options?: OptionsRandom): GeoJSON.FeatureCollection<GeoJSON.Point>;
    random(type?: 'polygon', count?: number, options?: OptionsRandom): GeoJSON.FeatureCollection<GeoJSON.Polygon>;
    random(type?: 'polygons', count?: number, options?: OptionsRandom): GeoJSON.FeatureCollection<GeoJSON.Polygon>;
    random(type?: typeof TemplateType, count?: number, options?: OptionsRandom): GeoJSON.FeatureCollection<any>;

    /**
     * Takes a {@link FeatureCollection} and returns a FeatureCollection with given number of {@link Feature|features} at random.
     *
     * @name [sample](http://turfjs.org/docs/#sample)
     * @param {FeatureCollection} featurecollection set of input features
     * @param {number} num number of features to select
     * @return {FeatureCollection} a FeatureCollection with `n` features
     * @example
     * var points = turf.random('points', 1000);
     *
     * //=points
     *
     * var sample = turf.sample(points, 10);
     *
     * //=sample
     */
    sample(featurecollection: GeoJSON.FeatureCollection<any>, num: number): GeoJSON.FeatureCollection<any>;

    //////////////////////////////////////////////////////
    // GRIDS
    //////////////////////////////////////////////////////

    /**
     * Takes a bounding box and a cell size in degrees and returns a {@link FeatureCollection} of flat-topped hexagons ({@link Polygon} features) aligned in an "odd-q" vertical grid as described in [Hexagonal Grids](http://www.redblobgames.com/grids/hexagons/).
     *
     * @name [hexGrid](http://turfjs.org/docs/#hexgrid)
     * @param {Array<number>} bbox bounding box in [minX, minY, maxX, maxY] order
     * @param {number} cellSize dimension of cell in specified units
     * @param {string} units used in calculating cellSize ('miles' or 'kilometers')
     * @param {boolean} triangles whether to return as triangles instead of hexagons
     * @return {FeatureCollection<Polygon>} a hexagonal grid
     * @example
     * var bbox = [-96,31,-84,40];
     * var cellSize = 50;
     * var units = 'miles';
     *
     * var hexgrid = turf.hexGrid(bbox, cellSize, units);
     *
     * //=hexgrid
     */
    hexGrid(
      bbox: Array<number>,
      cellSize: number,
      units?: typeof TemplateUnits,
      triangles?: boolean
    ): GeoJSON.FeatureCollection<GeoJSON.Polygon>;

    /**
     * Takes a bounding box and a cell depth and returns a set of {@link Point|points} in a grid.
     *
     * @name [pointGrid](http://turfjs.org/docs/#pointgrid)
     * @param {Array<number>} bbox extent in [minX, minY, maxX, maxY] order
     * @param {number} cellSize the distance across each cell
     * @param {string} [units=kilometers] used in calculating cellSize, can be degrees, radians, miles, or kilometers
     * @return {FeatureCollection<Point>} grid of points
     * @example
     * var extent = [-70.823364, -33.553984, -70.473175, -33.302986];
     * var cellSize = 3;
     * var units = 'miles';
     *
     * var grid = turf.pointGrid(extent, cellSize, units);
     *
     * //=grid
     */
    pointGrid(
      bbox: Array<number>,
      cellSize: number,
      units?: typeof TemplateUnits
    ): GeoJSON.FeatureCollection<GeoJSON.Point>;

    /**
     * Takes a bounding box and a cell depth and returns a set of square {@link Polygon|polygons} in a grid.
     *
     * @name [squareGrid](http://turfjs.org/docs/#squaregrid)
     * @param {Array<number>} bbox extent in [minX, minY, maxX, maxY] order
     * @param {number} cellSize width of each cell
     * @param {string} [units=kilometers] used in calculating cellSize, can be degrees, radians, miles, or kilometers
     * @return {FeatureCollection<Polygon>} grid a grid of polygons
     * @example
     * var bbox = [-96,31,-84,40]
     * var cellSize = 10
     * var units = 'miles'
     *
     * var squareGrid = turf.squareGrid(bbox, cellSize, units)
     *
     * //=squareGrid
     */
    squareGrid(
      bbox: Array<number>,
      cellSize: number,
      units?: typeof TemplateUnits
    ): GeoJSON.FeatureCollection<GeoJSON.Polygon>;

    /**
     * Takes a bounding box and a cell depth and returns a set of triangular {@link Polygon|polygons} in a grid.
     *
     * @name [triangleGrid](http://turfjs.org/docs/#trianglegrid))
     * @param {Array<number>} bbox extent in [minX, minY, maxX, maxY] order
     * @param {number} cellSize dimension of each cell
     * @param {string} [units=kilometers] used in calculating cellSize, can be degrees, radians, miles, or kilometers
     * @return {FeatureCollection<Polygon>} grid of polygons
     * @example
     * var bbox = [-96,31,-84,40]
     * var cellSize = 10;
     * var units = 'miles';
     *
     * var triangleGrid = turf.triangleGrid(extent, cellSize, units);
     *
     * //=triangleGrid
     */
    triangleGrid(
      bbox: Array<number>,
      cellSize: number,
      units?: typeof TemplateUnits
    ): GeoJSON.FeatureCollection<GeoJSON.Polygon>;

    //////////////////////////////////////////////////////
    // Interpolation
    //////////////////////////////////////////////////////

    /**
    * Takes points with z-values and an array of value breaks and generates isolines.
    * @param points Input points
    * @param z The property name in points from which z-values will be pulled
    * @param resolution Resolution of the underlying grid
    * @param breaks Where to draw contours
    * @returns Isolines
    */
    isolines(points: GeoJSON.FeatureCollection<GeoJSON.Point>, z: string, resolution: number, breaks: Array<number>): GeoJSON.FeatureCollection<GeoJSON.LineString>;

    /**
    * Takes a triangular plane as a Polygon and a Point within that triangle and returns the z-value at that point.
    * The Polygon needs to have properties a, b, and c that define the values at its three corners.
    * @param interpolatedPoint The Point for which a z-value will be calculated
    * @param triangle A Polygon feature with three vertices
    * @returns The z-value for interpolatedPoint
    */
    planepoint(interpolatedpoint: GeoJSON.Feature<GeoJSON.Point>, triangle: GeoJSON.Feature<GeoJSON.Polygon>): number;

    /**
    * Takes a set of points and the name of a z-value property and creates a Triangulated Irregular Network, or a TIN for short, returned as a collection of Polygons.
    * These are often used for developing elevation contour maps or stepped heat visualizations.
    * This triangulates the points, as well as adds properties called a, b, and c representing the value of the given propertyName at each of the points that represent the corners of the triangle.
    * @param points Input points
    * @param [propertyName] Name of the property from which to pull z values This is optional: if not given, then there will be no extra data added to the derived triangles.
    * @returns TIN output
    */
    tin(points: GeoJSON.FeatureCollection<GeoJSON.Point>, propertyName?: string): GeoJSON.FeatureCollection<GeoJSON.Polygon>;

    //////////////////////////////////////////////////////
    // Joins
    //////////////////////////////////////////////////////

    /**
     * Takes a {<Point>} and a {<Polygon>} or {<MultiPolygon>} and determines if the point resides inside the polygon. The polygon can be convex or concave. The function accounts for holes.
     *
     * @name [inside](http://turfjs.org/docs/#inside)
     * @param {Feature<Point>} point input point
     * @param {Feature<(Polygon|MultiPolygon)>} polygon input polygon or multipolygon
     * @return {Boolean} `true` if the Point is inside the Polygon; `false` if the Point is not inside the Polygon
     * @example
     * var pt = point([-77, 44])
     * var poly = polygon([[[-81, 41], [-81, 47], [-72, 47], [-72, 41], [-81, 41]]])
     *
     * var isInside = turf.inside(pt, poly)
     *
     * //=isInside
     */
    inside(
      point: GeoJSON.Feature<GeoJSON.Point>,
      polygon: GeoJSON.Feature<GeoJSON.Polygon>
    ): boolean;

    /**
     * Takes a {FeatureCollection<Point>} and a {FeatureCollection<Polygon>} and performs a spatial join.
     *
     * @name [tag](http://turfjs.org/docs/#inside)
     * @param {FeatureCollection<Point>} points input points
     * @param {FeatureCollection<Polygon>} polygons input polygons
     * @param {string} field property in `polygons` to add to joined {<Point>} features
     * @param {string} outField property in `points` in which to store joined property from `polygons`
     * @return {FeatureCollection<Point>} points with `containingPolyId` property containing values from `polyId`
     * @example
     * var pt1 = point([-77, 44])
     * var pt2 = point([-77, 38])
     * var poly1 = polygon([[[-81, 41], [-81, 47], [-72, 47], [-72, 41], [-81, 41]]], {pop: 1000})
     * var poly2 = polygon([[[-81, 35], [-81, 41], [-72, 41], [-72, 35], [-81, 35]]], {pop: 3000})
     *
     * var points = featureCollection([pt1, pt2])
     * var polygons = featureCollection([poly1, poly2])
     *
     * var tagged = turf.tag(points, polygons, 'pop', 'population')
     * //=tagged
     */
    tag(
      points: GeoJSON.FeatureCollection<GeoJSON.Point>,
      polygons: GeoJSON.FeatureCollection<GeoJSON.Polygon>,
      field: string,
      outField: string
    ): GeoJSON.FeatureCollection<GeoJSON.Point>;

    /**
    * Takes a set of points and a set of polygons and returns the points that fall within the polygons.
    * @param points Input points
    * @param polygons Input polygons
    * @returns Points that land within at least one polygon
    */
    within(
      points: GeoJSON.FeatureCollection<GeoJSON.Point>,
      polygons: GeoJSON.FeatureCollection<GeoJSON.Polygon>
    ): GeoJSON.FeatureCollection<GeoJSON.Point>;

    //////////////////////////////////////////////////////
    // Classification
    //////////////////////////////////////////////////////

    /**
    * Takes a reference point and a set of points and returns the point from the set closest to the reference.
    * @param point The reference point
    * @param against Input point set
    * @returns The closest point in the set to the reference point
    */
    nearest(
      point: GeoJSON.Feature<GeoJSON.Point>,
      against: GeoJSON.FeatureCollection<GeoJSON.Point>
    ): GeoJSON.Feature<GeoJSON.Point>;
  }
}

// NPM Stable version of Turf
declare module "turf" {
  export = turf
}

// Latest version of Turf
declare module "@turf/turf" {
  export = turf
}

// AGGREGATION
declare module "@turf/collect" {
   const collect: typeof turf.collect;
   export = collect;
}

// MEASUREMENT
declare module "@turf/along" {
   const along: typeof turf.along;
   export = along;
}

declare module "@turf/area" {
   const area: typeof turf.area;
   export = area;
}

declare module "@turf/bbox-polygon" {
   const bboxPolygon: typeof turf.bboxPolygon;
   export = bboxPolygon;
}

declare module "@turf/bearing" {
   const bearing: typeof turf.bearing;
   export = bearing;
}

declare module "@turf/center" {
   const center: typeof turf.center;
   export = center;
}

declare module "@turf/centroid" {
   const centroid: typeof turf.centroid;
   export = centroid;
}

declare module "@turf/destination" {
   const destination: typeof turf.destination;
   export = destination;
}

declare module "@turf/distance" {
   const distance: typeof turf.distance;
   export = distance;
}

declare module "@turf/envelope" {
   const envelope: typeof turf.envelope;
   export = envelope;
}

declare module "@turf/line-distance" {
   const lineDistance: typeof turf.lineDistance;
   export = lineDistance;
}

declare module "@turf/midpoint" {
   const midpoint: typeof turf.midpoint;
   export = midpoint;
}

declare module "@turf/point-on-surface" {
   const pointOnSurface: typeof turf.pointOnSurface;
   export = pointOnSurface;
}

declare module "@turf/square" {
   const square: typeof turf.square;
   export = square;
}

// TRANSFORMATION
declare module "@turf/bezier" {
   const bezier: typeof turf.bezier;
   export = bezier;
}

declare module "@turf/buffer" {
   const buffer: typeof turf.buffer;
   export = buffer;
}

declare module "@turf/concave" {
   const concave: typeof turf.concave;
   export = concave;
}

declare module "@turf/convex" {
   const convex: typeof turf.convex;
   export = convex;
}

declare module "@turf/difference" {
   const difference: typeof turf.difference;
   export = difference;
}

declare module "@turf/intersect" {
   const intersect: typeof turf.intersect;
   export = intersect;
}

declare module "@turf/simplify" {
   const simplify: typeof turf.simplify;
   export = simplify;
}

declare module "@turf/union" {
   const union: typeof turf.union;
   export = union;
}

// MISC
declare module "@turf/combine" {
   const combine: typeof turf.combine;
   export = combine;
}

declare module "@turf/explode" {
   const explode: typeof turf.explode;
   export = explode;
}

declare module "@turf/flip" {
   const flip: typeof turf.flip;
   export = flip;
}

declare module "@turf/kinks" {
   const kinks: typeof turf.kinks;
   export = kinks;
}

declare module "@turf/line-slice" {
   const lineSlice: typeof turf.lineSlice;
   export = lineSlice;
}

declare module "@turf/point-on-line" {
   const pointOnLine: typeof turf.pointOnLine;
   export = pointOnLine;
}

// HELPER
declare module "@turf/helpers" {
   const helpers: {
     featureCollection: typeof turf.featureCollection,
     feature: typeof turf.feature,
     lineString: typeof turf.lineString,
     multiLineString: typeof turf.multiLineString,
     point: typeof turf.point,
     multiPoint: typeof turf.multiPoint,
     polygon: typeof turf.polygon,
     multiPolygon: typeof turf.multiPolygon,
     geometryCollection: typeof turf.geometryCollection,
   };
   export = helpers;
}

// DATA
declare module "@turf/random" {
   const random: typeof turf.random;
   export = random;
}

declare module "@turf/sample" {
   const sample: typeof turf.sample;
   export = sample;
}

// INTERPOLATION
declare module "@turf/isolines" {
   const isolines: typeof turf.isolines;
   export = isolines;
}

declare module "@turf/planepoint" {
   const planepoint: typeof turf.planepoint;
   export = planepoint;
}

declare module "@turf/tin" {
   const tin: typeof turf.tin;
   export = tin;
}

// JOINS
declare module "@turf/inside" {
   const inside: typeof turf.inside;
   export = inside;
}

declare module "@turf/tag" {
   const tag: typeof turf.tag;
   export = tag;
}

declare module "@turf/within" {
   const within: typeof turf.within;
   export = within;
}

// GRIDS
declare module "@turf/hex-grid" {
   const hexGrid: typeof turf.hexGrid;
   export = hexGrid;
}

declare module "@turf/point-grid" {
   const pointGrid: typeof turf.pointGrid;
   export = pointGrid;
}

declare module "@turf/square-grid" {
   const squareGrid: typeof turf.squareGrid;
   export = squareGrid;
}

declare module "@turf/triangle-grid" {
   const triangleGrid: typeof turf.triangleGrid;
   export = triangleGrid;
}

// CLASSIFICATION
declare module "@turf/nearest" {
   const nearest: typeof turf.nearest;
   export = nearest;
}

// // META
// declare module "@turf/propEach" {
//    const propEach: typeof turf.propEach;
//    export = propEach;
// }

// declare module "@turf/coordEach" {
//    const coordEach: typeof turf.coordEach;
//    export = coordEach;
// }

// declare module "@turf/coordReduce" {
//    const coordReduce: typeof turf.coordReduce;
//    export = coordReduce;
// }

// declare module "@turf/featureEach" {
//    const featureEach: typeof turf.featureEach;
//    export = featureEach;
// }

// declare module "@turf/getCoord" {
//    const getCoord: typeof turf.getCoord;
//    export = getCoord;
// }

// // ASSERTIONS
// declare module "@turf/featureOf" {
//    const featureOf: typeof turf.featureOf;
//    export = featureOf;
// }

// declare module "@turf/collectionOf" {
//    const collectionOf: typeof turf.collectionOf;
//    export = collectionOf;
// }

declare module "@turf/bbox" {
   const bbox: typeof turf.bbox;
   export = bbox;
}

declare module "@turf/circle" {
   const circle: typeof turf.circle;
   export = circle;
}

declare module "@turf/geojsonType" {
   const geojsonType: typeof turf.geojsonType;
   export = geojsonType;
}

declare module "@turf/propReduce" {
   const propReduce: typeof turf.propReduce;
   export = propReduce;
}

declare module "@turf/coordAll" {
   const coordAll: typeof turf.coordAll;
   export = coordAll;
}

declare module "@turf/tesselate" {
   const tesselate: typeof turf.tesselate;
   export = tesselate;
}
