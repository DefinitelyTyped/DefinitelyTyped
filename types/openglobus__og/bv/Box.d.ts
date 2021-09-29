/**
 * Bounding box class.
 * @class
 */
export class Box {
    constructor(boundsArr: any);
    /**
     * Vertices array.
     * @public
     * @type{Array.<og.Vec3>}
     */
    public vertices: Array<any>;
    copy(bbox: any): void;
    /**
     * Sets bounding box coordinates by the bounds array.
     * @param {Array.<number>} bounds - Bounds is an array where [minX, minY, minZ, maxX, maxY, maxZ]
     */
    setFromBoundsArr(bounds: Array<number>): void;
    /**
     * Sets bounding box coordiantes by ellipsoid geodetic extend.
     * @param {og.Ellipsoid} ellipsoid - Ellipsoid.
     * @param {og.Extent} extent - Geodetic extent.
     */
    setFromExtent(ellipsoid: any, extent: any): void;
}
