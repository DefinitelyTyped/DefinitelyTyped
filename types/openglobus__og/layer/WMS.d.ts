/**
 * Used to display WMS services as tile layers on the globe.
 * @class
 * @extends {og.layer.XYZ}
 * //TODO: WMS version, format, and custom srs cpecification.
 * @param {string} name - Layer name.
 * @param {Object} options - Options:
 * @param {number} [options.opacity=1.0] - Layer opacity.
 * @param {Array.<number,number,number>} [options.transparentColor=[-1,-1,-1]] - RGB color that defines transparent color.
 * @param {number} [options.minZoom=0] - Minimal visibility zoom level.
 * @param {number} [options.maxZoom=0] - Maximal visibility zoom level.
 * @param {string} [options.attribution] - Layer attribution that displayed in the attribution area on the screen.
 * @param {boolean} [options.isBaseLayer=false] - Base layer flag.
 * @param {boolean} [options.visibility=true] - Layer visibility.
 * @param {string} options.url - WMS url source.
 * @param {number} [options.width=256] - Tile width.
 * @param {number} [options.height=256] - Tile height.
 * @param {string} options.layers - WMS layers string.
 * @param {string} [options.version="1.1.1"] - WMS version.
 * @example:
 * new og.layer.WMS("USA States", {
 *     isBaseLayer: false,
 *     url: "http://openglobus.org/geoserver/",
 *     layers: "topp:states",
 *     opacity: 0.5,
 *     zIndex: 50,
 *     attribution: 'USA states - geoserver WMS example',
 *     transparentColor: [1.0, 1.0, 1.0],
 *     version: "1.1.1",
 *     visibility: false }
 * );
 *
 * @fires og.layer.XYZ#load
 * @fires og.layer.XYZ#loadend
 */
export class WMS {
    static createRequestUrl(url: any, layers: any, format: string, version: string, request: string, srs: any, bbox: any, width?: number, height?: number): string;
    static get_bbox_v1_1_1(extent: any): string;
    static get_bbox_v1_3_0(extent: any): string;
    constructor(name: any, options: any);
    /**
     * WMS layers string.
     * @public
     * @type {string}
     */
    public layers: string;
    /**
     * WMS tile width.
     * @public
     * @type {number}
     */
    public imageWidth: number;
    /**
     * WMS tile height.
     * @public
     * @type {number}
     */
    public imageHeight: number;
    _getBbox: typeof WMS.get_bbox_v1_1_1;
    _checkSegment(segment: any): boolean;
    get instanceName(): string;
    _createUrl(segment: any): string;
    setVersion(version: any): void;
    _version: any;
    _correctFullExtent(): void;
}
