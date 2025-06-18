export as namespace geometric;

// -------------------------------PRIMITIVES-------------------------------------------//

/**
 * Points are represented as arrays of two numbers, such as [0, 0].
 */
export type Point = [number, number];

/**
 * Lines are represented as arrays of two points, such as [[0, 0], [1, 0]]. Because they have endpoints, these are
 * technically line segments, but Geometric.js refers to them as lines for simplicity's sake.
 */
export type Line = [Point, Point];

/**
 * Polygons are represented as arrays of vertices, each of which is a point, such as [[0, 0], [1, 0], [1, 1], [0,
 * 1]]. Polygons can be closed – the first and last vertex are the same – or open.
 */
export type Polygon = Point[];

// -------------------------------POINTS-------------------------------------------//

/**
 * Returns the coordinates resulting from rotating a point about an origin by an angle in degrees. If origin is
 * not specified, the origin defaults to [0, 0].
 */
export function pointRotate(point: Point, angle: number, origin?: Point): Point;

/**
 * Returns the coordinates resulting from translating a point by an angle in degrees and a distance.
 */
export function pointTranslate(point: Point, angle: number, distance: number): Point;

// -------------------------------LINES-------------------------------------------//

/**
 *  Returns the angle of a line, in degrees, with respect to the horizontal axis.
 */
export function lineAngle(line: Line): number;

/**
 * Returns an interpolator function given a line [a, b]. The returned interpolator function takes a single
 * argument t, where t is a number ranging from 0 to 1; a value of 0 returns a, while a value of 1 returns b.
 * Intermediate values interpolate from a to b along the line segment.
 */
export function lineInterpolate(line: Line): LineInterpolator;

export type LineInterpolator = (t: number) => Point;

/**
 * Returns the length of a line.
 */
export function lineLength(line: Line): number;

/**
 * Returns the midpoint of a line.
 */
export function lineMidpoint(line: Line): Point;

/**
 * Returns the coordinates resulting from rotating a line about an origin by an angle in degrees.
 * If origin is not specified, the origin defaults to the midpoint of the line.
 */
export function lineRotate(line: Line, angle: number, origin?: Point): Line;

/**
 * Returns the coordinates resulting from translating a line by an angle in degrees and a distance.
 */
export function lineTranslate(line: Line, angle: number, distance: number): Line;

// -------------------------------POLYGONS-------------------------------------------//

/**
 * Returns the area of a polygon. You can pass a boolean indicating whether the returned area is signed, which
 * defaults to false.
 */
export function polygonArea(polygon: Polygon, signed?: boolean): number;

/**
 * Returns the bounds of a polygon, ignoring points with invalid values (null, undefined, NaN, Infinity). The
 * returned bounds are represented as an array of two points, where the first point is the top-left corner and the
 * second point is the bottom-right corner. For example:
 * const rectangle = [[0, 0], [0, 1], [1, 1], [1, 0]];
 * const bounds = geometric.polygonBounds(rectangle); // [[0, 0], [1, 1]]
 * Returns null if the polygon has fewer than three points.
 */
export function polygonBounds(polygon: Polygon): null | [Point, Point];

/**
 * Returns the weighted centroid of a polygon. Not to be confused with a mean center.
 */
export function polygonCentroid(polygon: Polygon): Point;

/**
 * Returns the convex hull, represented as a polygon, for an array of points. Returns null if the input array has
 * fewer than three points. Uses Andrew’s monotone chain algorithm.
 */
export function polygonHull(points: Point[]): Polygon;

/**
 * Returns an interpolator function given a polygon of vertices [a, ..., n].
 * The returned interpolator function takes a single argument t, where t is a number ranging from 0 to 1;
 * a value of 0 returns a, while a value of 1 returns n. Intermediate values interpolate from a to n along the polygon's perimeter.
 */
export function polygonInterpolate(polygon: Polygon): PolygonInterpolator;

export type PolygonInterpolator = (t: number) => Point;

/**
 * Returns the length of a polygon's perimeter.
 */
export function polygonLength(polygon: Polygon): number;

/**
 * Returns the arithmetic mean of the vertices of a polygon. Keeps duplicate vertices, resulting in different
 * values for open and closed polygons. Not to be confused with a centroid.
 */
export function polygonMean(polygon: Polygon): Point;

/**
 * Returns the vertices of a random convex polygon of the specified number of sides, area, and centroid coordinates.
 * If sides is not specified, defaults to 3. If area is not specified, defaults to 100.
 * If centroid is not specified, defaults to [0, 0].
 * The returned polygon's winding order will be counter-clockwise.
 * Based on an algorithm by Pavel Valtr and an implementation by Maneesh Agrawala.
 */
export function polygonRandom(sides?: number, area?: number, centroid?: Point): Polygon;

/**
 * Reflects a polygon over its vertical midline. Pass an optional reflectFactor between 0 and 1, where 1 indicates
 * a full reflection, 0 leaves the polygon unchanged, and 0.5 collapses the polygon on its vertical midline.
 */
export function polygonReflectX(polygon: Polygon, reflectFactor?: number): Polygon;

/**
 * Reflects a polygon over its horizontal midline. Pass an optional reflectFactor between 0 and 1, where 1 indicates
 * a full reflection, 0 leaves the polygon unchanged, and 0.5 collapses the polygon on its horizontal midline.
 */
export function polygonReflectY(polygon: Polygon, reflectFactor?: number): Polygon;

/**
 * Returns the vertices of a regular polygon of the specified number of sides, area, and center coordinates. If
 * sides is not specified, defaults to 3. If area is not specified, defaults to 100. If center is not specified,
 * defaults to [0, 0].
 */
export function polygonRegular(sides?: number, area?: number, center?: Point): Polygon;

/**
 * Returns the vertices resulting from rotating a polygon about an origin by an angle in degrees. If origin is not
 * specified, the origin defaults to [0, 0].
 */
export function polygonRotate(polygon: Polygon, angle: number, origin?: Point): Polygon;

/**
 * Returns the vertices resulting from scaling a polygon by a scaleFactor (where 1 is the polygon's current size)
 * from an origin point. If origin is not specified, the origin defaults to the polygon's centroid.
 *
 * The returned polygon's area is equal to the input polygon's area multiplied by the square of the scaleFactor.
 * To scale the polygon's area by the scaleFactor itself, see geometric.polygonScaleArea.
 */
export function polygonScale(polygon: Polygon, scaleFactor: number, origin?: Point): Polygon;

/**
 * Returns the vertices resulting from scaling a polygon by a scaleFactor (where 1 is the polygon's current size)
 * from an origin point. If origin is not specified, the origin defaults to the polygon's centroid.
 *
 * The returned polygon's area is equal to the input polygon's area multiplied by the scaleFactor.
 * To scale the polygon's area by the square of the scaleFactor, see geometric.polygonScale.
 */
export function polygonScaleArea(polygon: Polygon, scaleFactor: number, origin?: Point): Polygon;

/**
 * Returns the vertices resulting from scaling the horizontal coordinates of a
 * polygon by a scaleFactor (where 1 is the polygon's current size) from an
 * origin point. The vertical coordinates remain unchanged. If origin is not specified, the origin defaults to the polygon's centroid.
 *
 * The returned polygon's area is equal to the input polygon's area multiplied by the scaleFactor.
 */
export function polygonScaleX(polygon: Polygon, scaleFactor: number, origin?: Point): Polygon;

/**
 * Returns the vertices resulting from scaling the vertical coordinates of a polygon
 * by a scaleFactor (where 1 is the polygon's current size) from an origin point. The horizontal
 * coordinates remain unchanged. If origin is not specified, the origin defaults to the polygon's centroid.
 *
 * The returned polygon's area is equal to the input polygon's area multiplied by the scaleFactor.
 */
export function polygonScaleY(polygon: Polygon, scaleFactor: number, origin?: Point): Polygon;

/**
 * Returns the vertices resulting from translating a polygon by an angle in degrees and a distance.
 */
export function polygonTranslate(polygon: Polygon, angle: number, distance: number): Polygon;

/**
 * Returns a polygon in the specified winding order. If an order string is passed as either "cw" or "clockwise",
 * returns a polygon with a clockwise winding order. Otherwise, returns a polygon with a counter-clockwise winding order.
 * Returns null if the polygon has fewer than three points.
 *
 * On computer screens where the top-left corner is at [0, 0], a polygon with a negative signed area has a
 * counter-clockwise winding order.
 */
export function polygonWind(polygon: Polygon, order?: "cw" | "ccw" | "clockwise"): Polygon;

// -------------------------------RELATIONSHIPS-------------------------------------------//

/**
 * Returns a boolean representing whether lineA intersects lineB.
 */
export function lineIntersectsLine(lineA: Line, lineB: Line): boolean;

/**
 * Returns a boolean representing whether a line intersects a polygon.
 */
export function lineIntersectsPolygon(line: Line, polygon: Polygon): boolean;

/**
 * Returns a boolean representing whether a point is inside of a polygon. Uses ray casting.
 */
export function pointInPolygon(point: Point, polygon: Polygon): boolean;

/**
 * Returns a boolean representing whether a point is located on one of the edges of a polygon.
 * An optional epsilon number, such as 1e-6, can be passed to reduce the precision with which the relationship is measured.
 */
export function pointOnPolygon(point: Point, polygon: Polygon, epsilon?: number): boolean;

/**
 * Returns a boolean representing whether a point is collinear with a line and is also located on the line segment.
 * An optional epsilon number, such as 1e-6, can be passed to reduce the precision with which the relationship is measured.
 * See also pointWithLine.
 */
export function pointOnLine(point: Point, line: Line, epsilon?: number): boolean;

/**
 * Returns a boolean representing whether a point is collinear with a line.
 * An optional epsilon number, such as 1e-6, can be passed to reduce the precision with which the relationship is measured.
 * See also pointOnLine.
 */
export function pointWithLine(point: Point, line: Line, epsilon?: number): boolean;

/**
 * Returns a boolean representing whether a point is to the left of a line.
 */
export function pointLeftofLine(point: Point, line: Line): boolean;

/**
 * Returns a boolean representing whether a point is to the right of a line.
 */
export function pointRightofLine(point: Point, line: Line): boolean;

/**
 * Returns a boolean representing whether polygonA is contained by polygonB.
 */
export function polygonInPolygon(polygonA: Polygon, polygonB: Polygon): boolean;

/**
 * Returns a boolean representing whether polygonA intersects but is not contained by polygonB.
 */
export function polygonIntersectsPolygon(polygonA: Polygon, polygonB: Polygon): boolean;

// -------------------------------ANGLES-------------------------------------------//

/**
 * Returns the angle of reflection given a starting angle, also known as the angle of incidence, and the angle of
 * the surface off of which it is reflected.
 */
export function angleReflect(incidenceAngle: number, surfaceAngle: number): number;

/**
 * Returns the result of a converting an angle in radians to the same angle in degrees.
 */
export function angleToDegrees(angle: number): number;

/**
 * Returns the result of a converting an angle in degrees to the same angle in radians.
 */
export function angleToRadians(angle: number): number;
