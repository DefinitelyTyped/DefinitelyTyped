//////////////////////////////////////////////
/// Core Library
//////////////////////////////////////////////

/**
 * This module provides a bunch of useful spatial math calculations.
 * @requires The Microsoft.Maps.SpatialMath module.
 */
declare module Microsoft.Maps.SpatialMath {

    /**
     * Distance Unit enumerator
     * @requires The Microsoft.Maps.SpatialMath module.
     **/
    export enum DistanceUnits {
        /** A distance in meters */
        Meters,

        /** A distance in kilometers */
        Kilometers,

        /** A distance in miles */
        Miles,

        /** A distance in Feet */
        Feet,

        /** A distance in Yards */
        Yards,

        /** A distance in Nautical Miles */
        NauticalMiles
    }

    /**
     * Area units enumerator
     * @requires The Microsoft.Maps.SpatialMath module.
     **/
    export enum AreaUnits {
        /** Area in square meters */
        SquareMeters,

        /** Area in square kilometers */
        SquareKilometers,

        /** Area in square miles */
        SquareMiles,

        /** Area in square Feet */
        SquareFeet,

        /** Area in square Yards */
        SquareYards,

        /** Area in Acres */
        Acres,

        /** Area in Hectares */
        Hectares
    }

    //////////////////////////////////////////////
    /// Core Calculations
    //////////////////////////////////////////////

    /**
     * Converts an area from one area units to another.
     * @param area A number that represents an area to convert.
     * @param fromUnits The area units the original area is in.
     * @param toUnits The area units to convert to.
     * @returns An area in the new units.
     **/
    export function convertArea(area: number, fromUnits: AreaUnits, toUnits: AreaUnits): number;

    /**
     * Converts a distance from one distance units to another.
     * @param distance A number that represents a distance to convert.
     * @param fromUnits The distance units the original distance is in.
     * @param toUnits The disired distance units to convert to.
     * @returns A distance in the new units.
     **/
    export function convertDistance(distance: number, fromUnits: DistanceUnits, toUnits: DistanceUnits): number;

     /**
     * Calculates an array of locations that form a cardinal spline between the specified array of locations.
     * @param locations The array of locations to calculate the spline through.
     * @param tension A number that indicates the tightness of the curve. Can be any number, although a value between 0 and 1 is usually used. Default: 0.5
     * @param nodeSize Number of nodes to insert between each Location. Default: 15
     * @param close A boolean indicating if the spline should be a closed ring or not. Default: false
     * @returns An array of locations that form a cardinal spline between the specified array of locations.
     */
    export function getCardinalSpline(locations: Location[], tension ?: number, nodeSize ?: number, close ?: boolean): Location[];

    /**
     * Calculates a destination Location based on a starting Location, a heading, a distance, and a distance unit type.
     * @param origin Location that the destination is relative to.
     * @param bearing A heading angle between 0 - 360 degrees. 0 - North, 90 - East, 180 - South, 270 - West.
     * @param distance Distance that destination is away.
     * @param units Unit of distance measurement. Default is Meters.
     * @returns A Location that is the specified distance away from the origin.
     **/
    export function getDestination(origin: Location, bearing: number, distance: number, units?: DistanceUnits): Location;

    /**
     * Calculate the distance between two Location objects on the surface of the earth using the Haversine formula.
     * @param origin First Location to calculate distance between.
     * @param destination Second Location to calculate distance between.
     * @param units Unit of distance measurement. Default is Meters.
     * @param highAccuracy When set enabled, will use the slower but more accurate Vincenty formula for calculating distances, rather than the Haversine formula.
     * @returns The shortest distance between two Locations in the specifed units.
     **/
    export function getDistanceTo(origin: Location, destination: Location, units?: DistanceUnits, highAccuracy?: boolean): number;

    /**
     * Retrieves the radius of the earth in a specific distance unit for WGS84.
     * @param units Unit of distance measurement. Default: Meters
     * @returns A number that represents the radius of the earth in a specific distance unit.
     **/
    export function getEarthRadius(units?: DistanceUnits): number;

    /**
     * Takes an array of Locations objects and fills in the space between them with accurately positioned Locations to form an approximated Geodesic path.
     * @param path Array of Location objects that form a path to fill in.
     * @param nodeSize Number of nodes to insert between each Location. Default: 15
     * @returns An array of Location objects that form a geodesic paths.
     **/
    export function getGeodesicPath(path: Location[], nodeSize?: number): Location[];

    /**
     * Calculates the heading from one Location object to another.
     * @param origin Point of origin.
     * @param destination Destination to calculate relative heading to.
     * @returns A heading in degrees between 0 and 360. 0 degrees points due North.
     **/
    export function getHeading(origin: Location, destination: Location): number;

    /**
     * Calculates the distance between all Location objects in an array.
     * @param path The array of Location objects that make up the path to calculate the length of.
     * @param units Unit of distance measurement. Default: Meters
     * @param highAccuracy If set to true, uses the more accurate Vincenty algorithm for calcuating distances. Otherwise the faster Haversine formula is used.
     * @returns The distance between all Locations in between all Location objects in an array on the surface of a earth in the specifed units.
     **/
    export function getLengthOfPath(path: Location[], units?: DistanceUnits, highAccuracy?: boolean): number;

    /**
     * Calculates the Location object on a path that is a specified distance away from the start of the path. If the specified distance is longer
     * than the length of the path, the last Location of the path will be returned.
     * @param path A polyline or array of Location coordinates that form a path.
     * @param distance The distance along the path (from the start) to calculate the location for.
     * @param units Unit of distance measurement. Default is Meters.
     * @returns A Location object that is the specified distance away from the start of the path when following the path.
     **/
    export function getLocationAlongPath(path: Polyline | Location[], distance: number, units?: DistanceUnits): Location;

    /**
     * Calculates an array of Location objects that are an equal distance away from a central point to create a regular polygon.
     * @param origin Center of the regular polygon.
     * @param radius Radius of the regular polygon.
     * @param numberOfPoints Number of points the polygon should have.
     * @param units Unit of distance measurement for radius. Default is Meters.
     * @param offset An offset to rotate the polygon clockwise in degrees. When 0 the first Location will align with North.
     * @returns An array of Location objects that form a regular polygon.
     **/
    export function getRegularPolygon(origin: Location, radius: number, numberOfPoints: number, units?: DistanceUnits, offset?: number): Location[];

    /**
     * Calculates a Location object that is a fractional distance between two Location objects.
     * @param origin First Location to calculate mid-point between.
     * @param destination Second Location to calculate mid-point between.
     * @param fraction The fractional parameter to calculate a mid-point for. Default 0.5.
     * @returns A Location that lies a fraction of the distance between two Location objects, relative to the first Location object.
     **/
    export function interpolate(origin: Location, destination: Location, fraction?: number): Location;

    /**
     * Takes a LocationRect and converts it to a polygon.
     * @param bounds The LocationRect to convert to a Polygon.
     * @returns A polygon representation of the LocationRect.
     **/
    export function locationRectToPolygon(bounds: LocationRect): Polygon;

    /**
     * Takes a Location object and converts it into a Degree Minute Seconds string in the format. For example: 40° 26′ 46″ N 79° 58′ 56″ W
     * @param loc The Location object to convert into a Degree Minute Seconds string.
     * @returns A string in Degree Minute Seconds format or null if invalid Location object is provided.
     */
    export function toDegMinSec(loc: Location): string;

    /**
     * Tries to parse the given string that is in Degree Minute Seconds format. For Example: 35° 26′ 31″ E or 40° 26′ 46″ N 79° 58′ 56″ W
     * @param input A string in Degree Minute Seconds format to parse.
     * @returns Returns a decimal degree value if only a single angle is provided. If two angles provided in the string, then a
     * Location object is returned. If string is in an invalid format, null is returned.
     */
    export function tryParseDegMinSec(input: string): number | Location;
}


//////////////////////////////////////////////
/// Tile Calculations
//////////////////////////////////////////////

/**
* A colleciton of mathematical algorithms based on the tile pyramid used by Bign Maps.
* @requires The Microsoft.Maps.SpatialMath module.
*/
declare module Microsoft.Maps.SpatialMath.Tiles {
    //Based on https://msdn.microsoft.com/en-us/library/bb259689.aspx

    /**
     * Calculates the full width of the map in pixels at a specific zoom level from -180 degrees to 180 degrees.
     * @param zoom Zoom level to calculate width at.
     * @param tileWidth Width of tile.
     * @returns Width of map in pixels.
     **/
    export function mapSize(zoom: number): number;

    /**
     * Calculates the Ground resolution at a specific degree of latitude in the specified units per pixel.
     * @param latitude Degree of latitude to calculate resolution at.
     * @param zoom Zoom level to calculate resolution at.
     * @param units Distance unit type to calculate resolution in.
     * @returns Ground resolution in distance unit per pixels.
     **/
    export function groundResolution(latitude: number, zoom: number, units?: SpatialMath.DistanceUnits): number;

    /**
     * Converts a Pixel coordinate into a Geospatial Location at a specified zoom level.
     * Global Pixel coordinates are relative to the top left corner of the map (90, -180)
     * @param point Pixel coordinate.
     * @param zoom Zoom level.
     * @returns A Location that is at the specified pixel location at a specified zoom level.
     **/
    export function globalPixelToLocation(point: Point, zoom: number): Location;

    /**
     * Converts a point from latitude/longitude WGS-84 Location (in degrees)
     * into pixel XY coordinates at a specified level of detail.
     * @param loc Location to convert to a global pixel.
     * @param zoom Level of detail, from 1 (lowest detail) to 23 (highest detail).
     * @returns Point object containing the the global pixel location of a Location.
     **/
    export function locationToGlobalPixel(loc: Location, zoom: number): Point;

    /**
     * Calculates the PyramidTileId that a global pixel intersects with at a specific zoom level.
     * @param pixel The pixel coordinate to calculate the tile for.
     * @param zoom The zoom level to calculate the tile for.
     * @returns A PyramidTileId that a global pixel intersects with at a specific zoom level.
     **/
    export function globalPixelToTile(pixel: Point, zoom: number): PyramidTileId;

    /**
     * Converts a PyramidTileId into a global pixel coordinates of the upper-left pixel of the specified tile.
     * @param tile A PyramidTileId to calculate the upper-left pixel for.
     * @returns Global pixel coordinate of the top left corner of a tile.
     **/
    export function tileToGlobalPixel(tile: PyramidTileId): Point;

    /**
     * Calculates the PyramidTileId that a Location object intersects with at a specific zoom level.
     * @param loc The location to calulate the tile for.
     * @param zoom The zoom level to use to calculate the tile.
     * @returns A PyramidTileId that a Location object intersects with at a specific zoom level.
     **/
    export function locationToTile(loc: Location, zoom: number): PyramidTileId;

    /**
     * Calculates all the PyramidTileId's that are within a LocationRect at a specific zoom level.
     * @param bounds A LocationRect to search for tiles in.
     * @param zoom The zoom level to calculate tiles for.
     * @returns A list of PyramidTileId's that are within the specified LocationRect and zoom level.
     **/
    export function getTilesInBounds(bounds: LocationRect, zoom: number): PyramidTileId[];

    /**
     * Calculates the LocationRect (bounding box) of a PyramidTileId.
     * @param tile A PyramidTileId to calculate the LocationRect of.
     * @returns The bounding box of a tile.
     **/
    export function tileToLocationRect(tile: PyramidTileId): LocationRect;
}


//////////////////////////////////////////////
/// Geometry Calculations
//////////////////////////////////////////////

/**
* A colleciton of geometry calculations that can be performed against Bing Maps shapes.
* @requires The Microsoft.Maps.SpatialMath module.
*/
declare module Microsoft.Maps.SpatialMath.Geometry {

    /** Defines how the end of a line should be buffered. */
    export enum BufferEndCap {
        /** Adds a rounded end to a buffered line. */
        Round,

        /** Adds a flat end to a buffered line that touches the end of the line. */
        Flat,

        /** Adds a square end to a buffered line that has a buffer area at the end of the line. */
        Square
    }

    /**
     * Calculates the area of a shape.
     * @param shape The shape to calculate the area of.
     * @param areaUnits The unit of measurement to calculate the area in.
     * @returns The area of a shape in the specified unit of measurement.
     */
    export function area(shape: IPrimitive | IPrimitive[], areaUnits?: AreaUnits): number;

    /**
     * Calculates a bounding box that encloses a set of shapes and/or locations.
     * @param shapes The shape(s) to calculate the bounding box for.
     * @returns A location rect that encloses the shapes and/or locations.
     */
    export function bounds(shapes: Location | IPrimitive | (Location | IPrimitive)[]): LocationRect;

    /**
     * Calcuates a shape with an updated boundary that has been inflated/deflated by a speicifed distance.
     * @param shape The shape to buffer.
     * @param distance The distance to buffer the shape by.
     * @param units The distance units to buffer the shape by.
     * @param endCapType The type of end cap to use for the joints of the buffer, default value is round.
     * @param options A set of polygon options to apply to the generated shape.
     * @returns A buffered version of the shape.
     */
    export function buffer(shape: Location | IPrimitive | (Location | IPrimitive)[], distance: number, units?: DistanceUnits, endCapType?: BufferEndCap, options?: IPolygonOptions): IPrimitive | IPrimitive[];

    /**
     * Calculates the center of a shape.
     * @param shape The shape to calculate the center of.
     * @returns The center of the specified shape.
     */
    export function centroid(shape: IPrimitive | IPrimitive[]): Location;

    /**
     * Calculates an approximate concave hull that best fits the data.
     * A concave hull is a shape that represents that a possible concave geometry that encloses all shapes in the specified data set.
     * If a single unique Location is in the data set, a Pushpin is returned. If only two unique Locations are provided, or if all Locations form a line, a Polyline is returned.
     * If 3 or more unique Locations are in the data set a Polygon, or array of Polygons will be returned.
     * @param shapes Shape(s) whose Location(s) or Location(s) are to be used to generate a concave hull.
     * @param allowMultiPolygons A boolean indicating if the resulting concave hull can be a MultiPolygon. Default: false
     * @param allowHoles A boolean indicating if the polygons in the resulting concave hull can have holes in them. Default: false
     * @param options A set of polygon options to apply to the generated shape.
     * @returns An approximate concave hull that best fits the data.
     * If a single unique Location is in the data set, a Pushpin is returned. If only two unique Locations are provided, or if all Locations form a line, a Polyline is returned.
     * If 3 or more unique Locations are in the data set a Polygon, or array of Polygons will be returned.
     */
    export function concaveHull(shapes: Location | IPrimitive | (Location | IPrimitive)[], allowMultiPolygons?: boolean, allowHoles?: boolean, options?: IPolygonOptions): IPrimitive | IPrimitive[];

    /**
     * Given two shapes, determines if the first one contains the second one
     * (or, the second shape is a subset of the first shape) or not.
     * @param shapeA The first shape to test against the second.
     * @param shapeB The second shape to test against the first.
     * @returns A boolean indicating if the first shape contains the second shape.
     */
    export function contains(shapeA: Location | IPrimitive | (Location | IPrimitive)[], shapeB: Location | IPrimitive | (Location | IPrimitive)[]): boolean;

    /**
     * Calculates a convex hull. A convex hull is a shape that represents that minimum convex geometry that encloses all shapes in the specified data set.
     * @param shapes Shape(s) whose Location(s) or Location(s) are to be used to generate a convex hull.
     * @param options A set of polygon options to apply to the generated shape.
     * @returns An array of locations that form a convex hull that encloses all locations of the shapes provided in an array.
     */
    export function convexHull(shapes: Location | IPrimitive | (Location | IPrimitive)[], options?: IPolygonOptions): IPrimitive | IPrimitive[];

    /**
     * Creates Delaunay Triangles from the Location objects of the provided shapes.
     * @param shapes Location(s) of shape(s) or Location(s) to generate a Delaunay Triangles from.
     * @param options A set of polyline or polygon options to apply to the generated shape.
     * @returns An array of shapes that form the polygon triangles of the delaunay triangles.
     */
    export function delaunayTriangles(shapes: Location | IPrimitive | (Location | IPrimitive)[], options?: IPolygonOptions): Polygon[];

    /**
     * Returns an object that represents area of an initial shape subtracted by the overlapping area of a second shape.
     * @param shapeA The first shape.
     * @param shapeB The second shape to subtract from the first.
     * @returns A set of shapes that represent the area of the first shape that is not overlapped by the second shape.
     */
    export function difference(shapeA: IPrimitive | IPrimitive[], shapeB: IPrimitive | IPrimitive[]): IPrimitive | IPrimitive[];

    /**
     * Calculates the approximate shortest distance between any two shapes.
     * @param shapeA The first shape to calculate the distance from.
     * @param shapeB The second shape to calculate the distance to.
     * @param units Unit of distance measurement. Default: Meters
     * @param highAccuracy If set to true, uses the more accurate Vincenty algorithm for calcuating distances. Otherwise the faster Haversine formula is used.
     * @returns The shorested distance between the shapes in the specified units.
     */
    export function distance(shapeA: Location | IPrimitive | (Location | IPrimitive)[], shapeB: Location | IPrimitive | (Location | IPrimitive)[], units?: DistanceUnits, highAccuracy?: boolean): number;

    /**
     * Returns an object that represents the area where two shapes intersect.
     * @param shapeA The first shape.
     * @param shapeB The second shape.
     * @returns A set of shapes that represents the area where two shapes intersect.
     */
    export function intersection(shapeA: IPrimitive | IPrimitive[], shapeB: IPrimitive | IPrimitive[]): IPrimitive | IPrimitive[];

    /**
     * Determines if two shapes intersect or not.
     * @param shapeA The first shape to test against the second.
     * @param shapeB The second shape to test against the first.
     * @returns A boolean indicating if the two shapes intersect.
     */
    export function intersects(shapeA: Location | IPrimitive | (Location | IPrimitive)[], shapeB: Location | IPrimitive | (Location | IPrimitive)[]): boolean;

    /**
     * Tests to see if the shape is valid and meets the requirements of an SQL Geography type and other OGC compliant systems. Polylines & Polygons can't be self intersecting. For Polygons,
     * coordinates in an exterior rings have a counter-clockwise orientation, while holes have a clockwise orientation.
     * @param shape The shape to test for validity.
     * @returns Returns a boolean indicting if the specified shape(s) is valid or not.
     */
    export function isValid(shape: IPrimitive | IPrimitive[]): boolean;

    /**
     * Calculates the distance between all Locations in a shape. If the shape is a polygon, the length of the perimeter of all rings is calculated.
     * @param shape The shape to calculate the length of.
     * @param units Unit of distance measurement. Default: Meters
     * @param highAccuracy If set to true, uses the more accurate Vincenty algorithm for calcuating distances. Otherwise the faster Haversine formula is used.
     * @returns The distance between all Locations in a polyline or the perimeter of a ploygon on the surface of a earth in the specifed units.
     */
    export function calculateLength(shape: IPrimitive | IPrimitive[], units ?: DistanceUnits, highAccuracy ?: boolean): number;

    /**
     * Takes a shape and returns a copy of it that meets the requirements of an SQL Geography type and other OGC compliant systems. Polylines & Polygons can't be self intersecting. For Polygons,
     * coordinates in an exterior rings have a counter-clockwise orientation, while holes have a clockwise orientation.
     * @param shape The shape to make valid.
     * @returns Valiated version of the provided shape. May be a different shape type than what was provided. i.e. A polygon may be broken up into an array of polygons (MultiPolygon).
     */
    export function makeValid(shape: IPrimitive | IPrimitive[]): IPrimitive | IPrimitive[];

    /**
     * Calculates the nearest Location objects between to shapes that lie on the shapes.
     * If the shapes do not overlap, this calculates a location on each shape that is closest to the other shape.
     * If the shapes overlap, a location that is within the intersection area of the shapes will be added twice to an array, once for each shape, and returned.
     * @param shapeA The first shape.
     * @param shapeB The second shape.
     * @returns An array of two Location objects that represent the nearest points between two shapes.
     * The Location objects are in the same order as the input shapes.
     * Returns null if nearest points were unable to be computed.
     */
    export function nearestLocations(shapeA: Location | IPrimitive | (Location | IPrimitive)[], shapeB: Location | IPrimitive | (Location | IPrimitive)[]): Location[];

    /**
     * Reduces the resolution of a shape using the Douglas-Peucker algorithm.
     * @param shape The shape to reduce the resolution of.
     * @param tolerance A tolerance distance in meters used by the reduction algorithms.
     * @returns A version of the specified shape that has been reduced.
     */
    export function reduce(shape: IPrimitive | IPrimitive[], tolerance: number): IPrimitive | IPrimitive[];

    /**
     * Rotates a shape around a given Location for the specified angle of rotation. If an origin is not provided, the centroid of the shape is used.
     * @param shape The shape to be rotated.
     * @param angle The amount to rotate the shape in degrees.
     * @param origin The location to rotate the shape around. Defaults to the centroid of the shape.
     */
    export function rotate(shape: IPrimitive | IPrimitive[], angle: number, origin?: Location): void;

    /**
     * Calculates the shortest path that between two shapes and returns a Polyline.
     * @param shapeA The first shape.
     * @param shapeB The second shape.
     * @param options A set of polyline options to apply to the generated polyline.
     * @returns A polyline that represents the shortest path between two shapes.
     */
    export function shortestLineTo(shapeA: Location | IPrimitive | (Location | IPrimitive)[], shapeB: Location | IPrimitive | (Location | IPrimitive)[], options?: IPolylineOptions): Polyline;

    /**
     * Snaps the locations of one shape that are within the specified tolerance distance away from another shape.
     * @param locs The locations to snap to the shape.
     * @param shape The shape to snap the locations to.
     * @param tolerance A maximum distance (in the specified units) that the snapped location can be from the input location. Default: Infinity
     * @param toleranceUnits The distance units of the tolerance value. Default: Meters
     * @returns A snapped location if only one location is provided, otherwise returns an array of snapped locations.
     */
    export function snapLocationsToShape(locs: Location | Location[], shape: IPrimitive | IPrimitive[], tolerance?: number, toleranceUnits?: DistanceUnits): Location | Location[];

    /**
     * Snaps the locations of one shape that are within the specified tolerance distance away from another shape.
     * @param shapeToSnap The shape to snap the locations of.
     * @param shape The shape to snap the locations to.
     * @param tolerance A maximum distance (in the specified units) that the snapped location can be from the input location. Default: Infinity
     * @param toleranceUnits The distance units of the tolerance value. Default: Meters
     */
    export function snapShapeToShape(shapeToSnap: IPrimitive | IPrimitive[], shape: IPrimitive | IPrimitive[], tolerance?: number, toleranceUnits?: DistanceUnits): void;

    /**
     * Returns an object that represents all points that are either in one shape instance or another, but not those points that lie in both instances.
     * "Sym" stands for Symmetric. symDifference is an OGC standard name for this calculation used in most spatial math libraries, including SQL.
     * @param shapeA The first shape.
     * @param shapeB The second shape.
     * @returns A shape that represents the symetric difference between two shapes.
     */
    export function symDifference(shapeA: IPrimitive | IPrimitive[], shapeB: IPrimitive | IPrimitive[]): IPrimitive | IPrimitive[];

    /**
     * Returns an object that represents the union of two shapes. If shapes don't overlap, an array of each individual shapes will be returned.
     * @param shapeA The first shape.
     * @param shapeB The second shape.
     * @returns A shape that represents the union of two shapes.
     */
    export function union(shapeA: IPrimitive | IPrimitive[], shapeB: IPrimitive | IPrimitive[]): IPrimitive | IPrimitive[];

    /**
     * Performs a union operation on a set of shapes.
     * If a shape doesn't overlap with the rest, the returned result will be an array of shapes containing this shape and the union of the rest.
     * @param shapes An array of shapes to union together.
     * @returns A shape that represents the union of all specified shapes.
     */
    export function unionAggregate(shapes: IPrimitive[]): IPrimitive | IPrimitive[];

    /**
     * Creates a Voronoi diagram from the Location objects of the provided shapes. The diagram is returned as an array of Polygons.
     * If a clip region is specified, the diagram will be clipped accordingly.
     * @param shapes Location(s) of shape(s) or Location(s) to generate a Voronoi diagram.
     * @param clipRegion A region to clip the voronoi diagram to.
     * @param options A set of polygon options to apply to the generated shape.
     * @returns An array of polygons that form a Voronoi diagram.
     */
    export function voronoiDiagram(shapes: Location | IPrimitive | (Location | IPrimitive)[], clipRegion?: LocationRect | Polygon, options?: IPolygonOptions): Polygon[];
}