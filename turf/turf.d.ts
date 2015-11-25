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
    * @param [units=miles] Can be degrees, radians, miles, or kilometers. Default is miles
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
    * @param units Miles, kilometers, degrees or radians
    * @returns Destination point
    */
    function destination(start: GeoJSON.Feature, distance: number, bearing: number, units: string): GeoJSON.Feature;

    /**
    * Calculates the distance between two points in degress, radians, miles, or kilometers. This uses the Haversine formula to account for global curvature.
    * @param from Origin point
    * @param to Destination point
    * @param [units=kilometers] Can be degrees, radians, miles, or kilometers. Default is kilometers.
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
    * @param units Can be degrees, radians, miles, or kilometers
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

    //////////////////////////////////////////////////////
    // Misc
    //////////////////////////////////////////////////////

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

    //////////////////////////////////////////////////////
    // Data
    //////////////////////////////////////////////////////

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
