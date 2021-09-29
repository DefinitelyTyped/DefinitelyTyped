/**
 * Plane class.
 * @constructor
 * @param {og.Vec3} [p] - Plane point.
 * @param {og.Vec3} [n] - Planet normal.
 */
export class Plane {
    constructor(p: any, n: any);
    p: any;
    n: any;
    set(p: any, n: any): void;
    getNormal(): any;
    distance(p: any): any;
    getProjection(v: any, def: any): any;
    getProjectionPoint(p: any, vh: any): any;
    getIntersection(Pn1: any, Pn2: any, L: any): 1 | 0 | 2;
}
