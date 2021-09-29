/**
 * Used to load and display a video stream by specific corners coordinates on the globe, implements og.layer.BaseGeoImage interface.
 * @class
 * @extends {og.layer.BaseGeoImage}
 */
export class GeoVideo {
    constructor(name: any, options: any);
    /**
     * @protected
     * @const
     * @type {Boolean}
     */
    protected _animate: boolean;
    /**
     * HTML5 video element object.
     * @private
     * @type {Object}
     */
    private _video;
    /**
     * VIdeo source url path.
     * @private
     * @type {String}
     */
    private _src;
    get instanceName(): string;
    /**
     * Sets video source url path.
     * @public
     * @param {String} srs - Video url path.
     */
    public setSrc(src: any): void;
    _sourceReady: boolean;
    /**
     * Sets HTML5 video object.
     * @public
     * @param {Object} video - HTML5 video element object.
     */
    public setVideoElement(video: any): void;
    /**
     * Sets layer visibility.
     * @public
     * @param {boolean} visibility - Layer visibility.
     */
    public setVisibility(visibility: boolean): void;
    /**
     * Creates or refresh source video GL texture.
     * @virtual
     * @protected
     */
    protected _createSourceTexture(): void;
    _sourceTexture: any;
    _sourceCreated: boolean;
    /**
     * @private
     */
    private _onCanPlay;
    _frameWidth: any;
    _frameHeight: any;
    /**
     * @private
     */
    private _onError;
    /**
     * Loads planet segment material. In this case - GeoImage source video.
     * @virtual
     * @public
     * @param {og.planetSegment.Material} material - GeoImage planet material.
     */
    public loadMaterial(material: any): void;
    _creationProceeding: boolean;
    /**
     * @virtual
     * @param {og.planetSegment.Material} material - GeoImage material.
     */
    abortMaterialLoading(material: any): void;
    _renderingProjType1(): void;
    _ready: boolean;
    _renderingProjType0(): void;
}
