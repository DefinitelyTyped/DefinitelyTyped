/**
 * Class that loads segment elevation data, converts it to the array and passes it to the planet segment.
 * @class
 * @extends {og.terrain.EmptyTerrain}
 * @param {string} [name=""] - Terrain provider name.
 * @param {Object} [options] - Provider options:
 * @param {number} [options.minZoom=3] - Minimal visible zoom index when terrain handler works.
 * @param {number} [options.minZoom=14] - Maximal visible zoom index when terrain handler works.
 * @param {string} [options.url="//openglobus.org/heights/srtm3/{z}/{y}/{x}.ddm"] - Terrain source path url template. Default is openglobus ddm elevation file.
 * @param {Array.<number>} [options.gridSizeByZoom] - Array of segment triangulation grid sizes where array index agreed to the segment zoom index.
 * @param {number} [options.plainGridSize=32] - Elevation grid size. Default is 32x32. Must be power of two.
 * @param {string} [options.responseType="arraybuffer"] - Ajax responce type.
 * @param {number} [options.MAX_LOADING_TILES] - Maximum at one time loading tiles.
 * @param {Array.<number>} [gridSizeByZoom] - Array of values, where each value corresponds to the size of a tile(or segment) on the globe. Each value must be power of two.
 * @fires og.terrain.GlobusTerrain#load
 * @fires og.terrain.GlobusTerrain#loadend
 */
export class GlobusTerrain {
    /**
     * @param {string} [name]
     * @param {*} [options]
     */
    constructor(name?: string, options?: any);
    /**
     * Events handler.
     * @public
     * @type {og.Events}
     */
    public events: any;
    equalizeNormals: boolean;
    /**
     * Provider name.
     * @public
     * @type {string}
     */
    public name: string;
    /**
     * Minimal visible zoom index when terrain handler works.
     * @public
     * @type {number}
     */
    public minZoom: number;
    /**
     * Maximal visible zoom index when terrain handler works.
     * @public
     * @type {number}
     */
    public maxZoom: number;
    /**
     * Terrain source path url template.
     * @public
     * @type {string}
     */
    public url: string;
    /**
     * Array of segment triangulation grid sizes where array index agreed to the segment zoom index.
     * @public
     * @type {Array.<number>}
     */
    public gridSizeByZoom: Array<number>;
    noDataValues: any;
    /**
     * Elevation tile grid size.
     * @public
     * @type {number}
     */
    public plainGridSize: number;
    _geoid: any;
    _extent: any;
    _dataType: string;
    _maxNodeZoom: number;
    _elevationCache: {};
    _fetchCache: {};
    _loader: Loader;
    /**
     * Rewrites elevation storage url query.
     * @private
     * @callback og.terrain.GlobusTerrain~_urlRewriteCallback
     * @param {og.planetSegment.Segment} segment - Segment to load.
     * @param {string} url - Created url.
     * @returns {string} - Url query string.
     */
    private _urlRewriteCallback;
    clearCache(): void;
    getGeoid(): any;
    isBlur(segment: any): boolean;
    getHeightAsync(lonLat: any, callback: any, zoom: any): boolean;
    getTileCache(lonLat: any, z: any): any;
    _getGroundHeightMerc(merc: any, tileData: any): number;
    /**
     * Stop loading.
     * @public
     */
    public abortLoading(): void;
    /**
     * Sets terrain data url template.
     * @public
     * @param {string} url - Url template.
     * @example <caption>Default openglobus url template:</caption>:
     * "http://earth3.openglobus.org/{z}/{y}/{x}.ddm"
     */
    public setUrl(url: string): void;
    /**
     * Sets provider name.
     * @public
     * @param {string} name - Name.
     */
    public setName(name: string): void;
    isReadyToLoad(segment: any): any;
    /**
     * Starts to load segment data.
     * @public
     * @virtual
     * @param {og.planetSegment.Segment} segment - Segment that wants a terrain data.
     */
    public loadTerrain(segment: any, forceLoading: any): void;
    /**
     * Creates query url.
     * @protected
     * @virtual
     * @param {og.planetSegment.Segment} segment -
     * @returns {string} -
     */
    protected _createUrl(segment: any): string;
    /**
     * Returns actual url query string.
     * @protected
     * @param {og.planetSegment.Segment} segment - Segment that loads image data.
     * @returns {string} - Url string.
     */
    protected _getHTTPRequestString(segment: any): string;
    /**
     * Sets url rewrite callback, used for custom url rewriting for every tile laoding.
     * @public
     * @param {og.terrain.GlobusTerrain~_urlRewriteCallback} ur - The callback that returns tile custom created url.
     */
    public setUrlRewriteCallback(ur: any): void;
    /**
     * Converts loaded data to segment elevation data type(columr major elevation data array in meters)
     * @public
     * @virtual
     * @param {*} data - Loaded elevation data.
     * @returns {Array.<number>} -
     */
    public _createHeights(data: any): Array<number>;
    /**
     * @protected
     * @param {og.planetSegment.Segment} segment -
     * @param {*} data -
     */
    protected _applyElevationsData(segment: any, elevations: any): void;
}
import { Loader } from "../utils/Loader.js";
