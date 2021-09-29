/**
 * Used to load and display a single image over specific corner coordinates on the globe, implements og.layer.BaseGeoImage interface.
 * @class
 * @extends {og.layer.BaseGeoImage}
 */
export class GeoImage {
    constructor(name: any, options: any);
    /**
     * Image object.
     * @private
     * @type {Image}
     */
    private _image;
    /**
     * Image source url path.
     * @private
     * @type {String}
     */
    private _src;
    get instanceName(): string;
    /**
     * Sets image source url path.
     * @public
     * @param {String} srs - Image url path.
     */
    public setSrc(src: any): void;
    _sourceReady: boolean;
    /**
     * Sets image object.
     * @public
     * @param {Image} image - Image object.
     */
    public setImage(image: new (width?: number, height?: number) => HTMLImageElement): void;
    /**
     * Creates source gl texture.
     * @virtual
     * @protected
     */
    protected _createSourceTexture(): void;
    _sourceTexture: any;
    _sourceCreated: boolean;
    /**
     * @private
     * @param {Image} img
     */
    private _onLoad;
    _frameWidth: any;
    _frameHeight: any;
    /**
     * Loads planet segment material. In this case - GeoImage source image.
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
