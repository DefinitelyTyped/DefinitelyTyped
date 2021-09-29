/**
 * Represents an imagery tiles source provider.
 * @class
 * @extends {og.Layer}
 * @param {string} name - Layer name.
 * @param {Object} options:
 * @param {number} [options.opacity=1.0] - Layer opacity.
 * @param {Array.<number,number,number>} [options.transparentColor=[-1,-1,-1]] - RGB color that defines transparent color.
 * @param {Array.<string>} [options.subdomains=['a','b','c']] - Subdomains of the tile service.
 * @param {number} [options.minZoom=0] - Minimal visibility zoom level.
 * @param {number} [options.maxZoom=0] - Maximal visibility zoom level.
 * @param {number} [options.minNativeZoom=0] - Minimal available zoom level.
 * @param {number} [options.maxNativeZoom=19] - Maximal available zoom level.
 * @param {string} [options.attribution] - Layer attribution that displayed in the attribution area on the screen.
 * @param {boolean} [options.isBaseLayer=false] - Base layer flag.
 * @param {boolean} [options.visibility=true] - Layer visibility.
 * @param {string} [options.crossOrigin=true] - If true, all tiles will have their crossOrigin attribute set to ''.
 * @param {string} options.url - Tile url source template(see example below).
 * @param {og.layer.XYZ~_urlRewriteCallback} options.urlRewrite - Url rewrite function.
 * @fires og.layer.XYZ#load
 * @fires og.layer.XYZ#loadend
 *
 * @example <caption>Creates OpenStreetMap base tile layer</caption>
 * new og.layer.XYZ("OpenStreetMap", {
 *     isBaseLayer: true,
 *     url: "http://b.tile.openstreetmap.org/{z}/{x}/{y}.png",
 *     visibility: true,
 *     attribution: 'Data @ <a href="http://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="http://www.openstreetmap.org/copyright">ODbL</a>'
 * });
 */
export class XYZ {
    constructor(name: any, options: any);
    transparentColor: any;
    /**
     * Tile url source template.
     * @public
     * @type {string}
     */
    public url: string;
    /**
     * @protected
     */
    protected _s: any;
    /**
     * Minimal native zoom level when tiles are available.
     * @public
     * @type {number}
     */
    public minNativeZoom: number;
    /**
     * Maximal native zoom level when tiles are available.
     * @public
     * @type {number}
     */
    public maxNativeZoom: number;
    /**
     * @protected
     */
    protected _crossOrigin: any;
    /**
     * Rewrites imagery tile url query.
     * @private
     * @callback og.layer.XYZ~_urlRewriteCallback
     * @param {og.planetSegment.Segment} segment - Segment to load.
     * @param {string} url - Created url.
     * @returns {string} - Url query string.
     */
    private _urlRewriteCallback;
    get instanceName(): string;
    /**
     * Abort loading tiles.
     * @public
     */
    public abortLoading(): void;
    /**
     * Sets layer visibility.
     * @public
     * @param {boolean} visibility - Layer visibility.
     */
    public setVisibility(visibility: boolean): void;
    /**
     * Sets imagery tiles url source template.
     * @public
     * @param {string} url - Url template.
     * @example
     * http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png
     * where {z}, {x} and {y} - replaces by current tile values, {s} - random domen.
     */
    public setUrl(url: string): void;
    _checkSegment(segment: any): boolean;
    /**
     * Start to load tile material.
     * @public
     * @virtual
     * @param {og.planetSegment.Material} material - Loads current material.
     */
    public loadMaterial(material: any, forceLoading: any): void;
    /**
     * Creates query url.
     * @protected
     * @virtual
     * @param {og.planetSegment.Segment} segment - Creates specific url for current segment.
     * @returns {String} - Returns url string.
     */
    protected _createUrl(segment: any): string;
    _getSubdomain(): any;
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
     * @param {og.layer.XYZ~_urlRewriteCallback} ur - The callback that returns tile custom created url.
     */
    public setUrlRewriteCallback(ur: any): void;
    applyMaterial(material: any): any;
    clearMaterial(material: any): void;
    /**
     * @protected
     */
    protected _correctFullExtent(): void;
}
