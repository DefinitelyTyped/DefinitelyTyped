/**
 * Bounding sphere class.
 * @class
 * @param {Number} [radius] - Bounding sphere radius.
 * @param {og.Vec3} [center] - Bounding sphere coordiantes.
 */
export class Sphere {
    constructor(radius: any, center: any);
    /**
     * Sphere radius.
     * @public
     * @type {Number}
     */
    public radius: number;
    /**
     * Sphere coordiantes.
     * @public
     * @type {og.Vec3}
     */
    public center: any;
    /**
     * Sets bounding sphere coordinates by the bounds array.
     * @param {Array.<number>} bounds - Bounds is an array where [minX, minY, minZ, maxX, maxY, maxZ]
     */
    setFromBounds(bounds: Array<number>): void;
    /**
     * Sets bounding sphere coordiantes by ellipsoid geodetic extend.
     * @param {og.Ellipsoid} ellipsoid - Ellipsoid.
     * @param {og.Extent} extent - Geodetic extent.
     */
    setFromExtent(ellipsoid: any, extent: any): void;
}
