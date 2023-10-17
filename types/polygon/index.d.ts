/* tslint:disable:array-type */
// cause contradictory error messages

import Vec2 = require("vec2");

/**
 * Create a new polygon:
 *
 * ```javascript
 * var p = new Polygon([
 * Vec2(0, 0),
 * Vec2(10, 0),
 * Vec2(0, 10)
 * ]);
 *
 * ```
 *
 * You can pass an array of `Vec2`s, arrays `[x, y]`, or objects `{ x: 10, y: 20 }`
 *
 * **Stuff to Note**: most of the Vec2's methods take a `returnNew` as the last parameter.
 * If passed a truthy value, a new vector will be returned to you.
 * Otherwise the operation will be applied to `this` and `this` will be returned.
 */
declare class Polygon {
    readonly points: Vec2[];

    /**
     * Returns the number of points in this polygon
     */
    readonly length: number;

    constructor(points: Vec2[] | number[][] | { x: number; y: number }[]);

    /**
     * Something like Array.forEach on points
     */
    each(fn: (prev: Vec2, current: Vec2, next: Vec2, idx: number) => any): Polygon;

    /**
     * Returns the point at index `idx`. note: this will wrap in both directions
     */
    point(idx: number): Vec2;

    /**
     * Ensure all of the points are unique
     */
    dedupe(returnNew?: boolean): Polygon;

    /**
     * Insert `vec2` at the specified index
     */
    insert(vec2: Vec2, index: number): void;

    /**
     * Remove the specified `vec2` or numeric index from this polygon
     */
    remove(vecOrIndex: Vec2 | number): Polygon;

    /**
     * Removes contiguous points that are the same
     */
    clean(returnNew?: boolean): Polygon;

    /**
     * Returns the direction in which a polygon is wound (true === clockwise)
     */
    winding(): boolean;

    /**
     * Rewinds the polygon in the specified direction (true === clockwise)
     */
    rewind(cw: boolean): Polygon;

    /**
     * Computes the area of the polygon
     */
    area(): number;

    /**
     * Finds the closest point in this polygon to `vec2`
     */
    closestPointTo(vec2: Vec2): Vec2;

    /**
     * Returns a `Vec2` at the center of the AABB
     */
    center(): Vec2;

    /**
     * Scales this polygon around `origin` (default is `this.center()`) and will return a new polygon if requested with `returnNew`
     */
    scale(amount: number, origin?: Vec2 | null, returnNew?: boolean): Polygon;

    /**
     * Returns true if `vec2` is inside the polygon
     */
    containsPoint(vec2: Vec2): boolean;

    /**
     * Returns true if `poly` is completely contained in this polygon
     */
    containsPolygon(poly: Polygon): boolean;

    /**
     * Returns an object `{x:_, y:_, w:_, h:_}` representing the axis-aligned bounding box of this polygyon
     */
    aabb(): { x: number; y: number; w: number; h: number };

    /**
     * Performs an offset/buffering operation on this polygon and returns a new one
     */
    offset(amount: number): Polygon;

    /**
     * Return an array `[startpoint, endpoint]` representing the line at the specified `index`
     */
    line(index: number): [Vec2, Vec2];

    /**
     * Iterate over the lines in this polygon
     */
    lines(fn: (start: Vec2, end: Vec2, index: number) => any): Polygon;

    /**
     * Find self-intersections and return them as a new polygon
     */
    selfIntersections(): Polygon;

    /**
     * Remove self intersections from this polygon.  returns an array of polygons
     */
    pruneSelfIntersections(): Polygon[];

    /**
     *  Return a new instance of this polygon
     */
    clone(): Polygon;

    /**
     * Rotate by origin `vec2` (default `this.center()`) by radians `rads` and return a clone if `returnNew` is specified
     */
    rotate(rads: number, origin?: Vec2 | null, returnNew?: boolean): Polygon;

    /**
     * Translate by `vec2` and return a clone if `returnNew` is specified
     */
    translate(vec2: Vec2, returnNew?: boolean): Polygon;

    /**
     * Return true if this polygon has the same components and the incoming `poly`
     */
    equal(poly: Polygon): boolean;

    /**
     * Works with an array of vec2's,
     * an object containing a `.position` and `.radius`,
     * an object populated with x1,y1,x2,y2,
     * an object populated with x,y,w,h,
     * and an object populated with x,y,width,height.
     * See the tests for more info
     */
    contains(
        thing:
            | Vec2[]
            | { position: Vec2; radius: number }
            | { x1: number; y1: number; x2: number; y2: number }
            | { x: number; y: number; w: number; h: number }
            | { x: number; y: number; width: number; height: number },
    ): boolean;

    /**
     * Returns a new polygon representing the boolean union of `this` and the incoming `polygon`
     */
    union(polygon: Polygon): Polygon;

    /**
     * Returns a new polygon representing the boolean cut of `polygon` from `this`
     */
    cut(polygon: Polygon): Polygon;

    /**
     * Convert this polygon into an array of arrays (`[[x, y]]`)
     */
    toArray(): number[][];
}

export = Polygon;
