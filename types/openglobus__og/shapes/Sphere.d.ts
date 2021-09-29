/**
 * @class
 * @extends {og.shape.BaseShape}
 * @param {Object} options - Sphere parameters:
 * @param {og.Vec3} [options.position] - Sphere position.
 * @param {og.Quat} [options.orientation] - Sphere orientation(rotation).
 * @param {og.Vec3} [options.scale] - Scale vector.
 * @param {Array.<number,number,number,number>} [options.color] - Sphere RGBA color.
 * @param {string} [options.src] - Texture image url source.
 * @param {boolean} [options.visibility] - Sphere visibility.
 * @param {number} [options.radius=100] - Sphere radius.
 * @param {number} [options.latBands=16] - Number of latitude bands.
 * @param {number} [options.lonBands=16] - Number of longitude bands.
 */
export class Sphere {
    constructor(options: any);
    /**
     * Sphere radius.
     * @protected
     * @type {number}
     */
    protected _radius: number;
    /**
     * Number of latitude bands.
     * @protected
     * @type {number}
     */
    protected _latBands: number;
    /**
     * Number of longitude bands.
     * @protected
     * @type {number}
     */
    protected _lonBands: number;
    /**
     * Create specific shape vertices data.
     * @protected
     * @virtual
     */
    protected _createData(): void;
}
