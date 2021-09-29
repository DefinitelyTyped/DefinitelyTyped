/**
 * Layer used to rendering each tile as a separate canvas object.
 * @class
 * @extends {og.Layer}
 * //TODO: make asynchronous handler.
 * @param {String} [name="noname"] - Layer name.
 * @param {Object} options:
 * @param {number} [options.opacity=1.0] - Layer opacity.
 * @param {Array.<number,number,number>} [options.transparentColor=[-1,-1,-1]] - RGB color that defines transparent color.
 * @param {number} [options.minZoom=0] - Minimal visibility zoom level.
 * @param {number} [options.maxZoom=0] - Maximal visibility zoom level.
 * @param {string} [options.attribution] - Layer attribution that displayed in the attribution area on the screen.
 * @param {boolean} [options.isBaseLayer=false] - Base layer flag.
 * @param {boolean} [options.visibility=true] - Layer visibility.
 * @param {og.layer.CanvasTiles~drawTileCallback} [options.drawTile] - Draw tile callback.
 * @fires og.layer.CanvasTiles#load
 * @fires og.layer.CanvasTiles#loadend
 */
export class CanvasTiles {
    constructor(name: any, options: any);
    /**
     * Current creating tiles couter.
     * @protected
     * @type {number}
     */
    protected _counter: number;
    /**
     * Tile pending queue that waiting for create.
     * @protected
     * @type {Array.<og.planetSegment.Material>}
     */
    protected _pendingsQueue: Array<any>;
    /**
     * Draw tile callback.
     * @type {og.layer.CanvasTiles~drawTileCallback}
     * @public
     */
    public drawTile: any;
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
    _visibility: any;
    /**
     * Start to load tile material.
     * @public
     * @virtual
     * @param {og.planetSegment.Material} material -
     */
    public loadMaterial(material: any): void;
    /**
     * Loads material image and apply it to the planet segment.
     * @protected
     * @param {og.planetSegment.Material} material - Loads material image.
     */
    protected _exec(material: any): void;
    /**
     * Abort exact material loading.
     * @public
     * @param {og.planetSegment.Material} material - Segment material.
     */
    public abortMaterialLoading(material: any): void;
    _dequeueRequest(): void;
    _whilePendings(): any;
    applyMaterial(material: any): number[];
    clearMaterial(material: any): void;
}
