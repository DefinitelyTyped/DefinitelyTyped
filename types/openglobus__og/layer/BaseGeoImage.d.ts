/**
 * BaseGeoImage layer represents square imagery layer that could be an static image, or animated video or webgl buffer object displayed on the globe.
 * @class
 * @extends {og.Layer}
 */
export class BaseGeoImage {
    constructor(name: any, options: any);
    _projType: number;
    _frameWidth: number;
    _frameHeight: number;
    _sourceReady: boolean;
    _sourceTexture: any;
    _materialTexture: any;
    _gridBuffer: any;
    _extentWgs84Params: any[];
    _refreshFrame: boolean;
    _frameCreated: boolean;
    _sourceCreated: boolean;
    _animate: boolean;
    _ready: boolean;
    _creationProceeding: boolean;
    _isRendering: boolean;
    _extentWgs84: Extent;
    _cornersWgs84: any[];
    rendering: any;
    get instanceName(): string;
    /**
     * Gets corners coordinates.
     * @public
     * @return {Array.<og.LonLat,og.LonLat,og.LonLat,og.LonLat>} -
     */
    public getCornersLonLat(): Array<any, any, any, any>;
    /**
     * Gets corners coordinates.
     * @public
     * @return {Array.<Array<number,number,number>>} -
     */
    public getCorners(): Array<Array<number, number, number>>;
    /**
     * Sets geoImage geographical corners coordinates.
     * @public
     * @param {Array.<Array.<number,number,number>>} corners - GeoImage corners coordinates. Where first coordinate
     * coincedents to the left top image corner, secont to the right top image corner, third to the right bottom
     * and fourth - left bottom image corner.
     */
    public setCorners(corners: Array<Array<number, number, number>>): void;
    /**
     * Sets geoImage geographical corners coordinates.
     * @public
     * @param {Array.<og.LonLat, og.LonLat, og.LonLat, og.LonLat>} corners - GeoImage corners coordinates. Where first coordinate
     * coincedents to the left top image corner, secont to the right top image corner, third to the right bottom
     * and fourth - left bottom image corner.
     */
    public setCornersLonLat(corners: Array<any, any, any, any>): void;
    /**
     * Creates geoImage frame.
     * @protected
     */
    protected _createFrame(): void;
    _cornersMerc: any[];
    _extentMerc: Extent;
    _extentMercParams: any[];
    /**
     * @virtual
     * @param {og.planetSegment.Material} material - GeoImage material.
     */
    abortMaterialLoading(material: any): void;
    /**
     * Clear layer material.
     * @virtual
     */
    clear(): void;
    /**
     * Sets layer visibility.
     * @public
     * @virtual
     * @param {boolean} visibility - GeoImage visibility.
     */
    public setVisibility(visibility: boolean): void;
    /**
     * @virtual
     * @protected
     * @param {og.planetSegment.Material} material - GeoImage material.
     */
    protected clearMaterial(material: any): void;
    /**
     * @virtual
     * @protected
     * @param {og.planetSegment.Material} material - GeoImage material.
     * @returns {Array<Number, Number, Number, Number> } -
     */
    protected applyMaterial(material: any): Array<number, number, number, number>;
    /**
     * Gets frame width size in pixels.
     * @public
     * @returns {Number} Frame width.
     */
    public get getFrameWidth(): number;
    /**
     * Gets frame height size in pixels.
     * @public
     * @returns {Number} Frame height.
     */
    public get getFrameHeight(): number;
}
import { Extent } from "../Extent.js";
