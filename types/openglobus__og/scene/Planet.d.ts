/**
 * Main class for rendering planet
 * @class
 * @extends {og.scene.RenderNode}
 * @param {string} name - Planet name(Earth by default)
 * @param {og.Ellipsoid} ellipsoid - Planet ellipsoid(WGS84 by default)
 * @param {Number} [maxGridSize=128] - Segment maximal grid size
 * @fires og.scene.Planet#draw
 * @fires og.scene.Planet#layeradd
 * @fires og.scene.Planet#baselayerchange
 * @fires og.scene.Planet#layerremove
 * @fires og.scene.Planet#layervisibilitychange
 * @fires og.scene.Planet#geoimageadd
 */
export class Planet {
    static getBearingNorthRotationQuat(cartesian: any): any;
    constructor(options?: {});
    /**
     * @public
     * @type {og.Ellipsoid}
     */
    public ellipsoid: any;
    /**
     * @public
     * @type {Boolean}
     */
    public lightEnabled: boolean;
    /**
     * Squared ellipsoid radius.
     * @protected
     * @type {number}
     */
    protected _planetRadius2: number;
    /**
     * All layers array.
     * @public
     * @type {Array.<og.Layer>}
     */
    public layers: Array<any>;
    /**
     * Current visible imagery tile layers array.
     * @public
     * @type {Array.<og.Layer>}
     */
    public visibleTileLayers: Array<any>;
    /**
     * Current visible vector layers array.
     * @protected
     * @type {Array.<og.layer.Vector>}
     */
    protected visibleVectorLayers: Array<any>;
    _visibleTileLayerSlices: any[];
    /**
     * Vector layers visible nodes with collections.
     * @protected
     * @type {Array.<og.EntityCollection>}
     */
    protected _frustumEntityCollections: Array<any>;
    /**
     * There is only one base layer on the globe when layer.isBaseLayer is true.
     * @public
     * @type {og.Layer}
     */
    public baseLayer: any;
    /**
     * Terrain provider.
     * @public
     * @type {og.terrain.Terrain}
     */
    public terrain: any;
    /**
     * Camera is this.renderer.activeCamera pointer.
     * @public
     * @type {og.PlanetCamera}
     */
    public camera: any;
    _minAltitude: any;
    _maxAltitude: any;
    /**
     * Screen mouse pointer projected to planet cartesian position.
     * @public
     * @type {og.Vec3}
     */
    public mousePositionOnEarth: any;
    emptyTexture: any;
    transparentTexture: any;
    defaultTexture: any;
    /**
     * Current visible minimal zoom index planet segment.
     * @public
     * @type {number}
     */
    public minCurrZoom: number;
    /**
     * Current visible maximal zoom index planet segment.
     * @public
     * @type {number}
     */
    public maxCurrZoom: number;
    _viewExtent: any;
    /**
     * @protected
     */
    protected _createdNodesCount: number;
    /**
     * Planet's segments collected for rendering frame.
     * @protected
     * @type {og.quadTree.Node}
     */
    protected _renderedNodes: any;
    _renderedNodesInFrustum: any[];
    /**
     * Created nodes cache
     * @protected
     * @type {og.quadTree.Node}
     */
    protected _quadTreeNodesCacheMerc: any;
    /**
     * Current visible mercator segments tree nodes array.
     * @protected
     * @type {og.quadTree.Node}
     */
    protected _visibleNodes: any;
    /**
     * Current visible north pole nodes tree nodes array.
     * @protected
     * @type {og.quadTree.Node}
     */
    protected _visibleNodesNorth: any;
    /**
     * Current visible south pole nodes tree nodes array.
     * @protected
     * @type {og.quadTree.Node}
     */
    protected _visibleNodesSouth: any;
    /**
     * Layers activity lock.
     * @public
     * @type {og.idle.Lock}
     */
    public layerLock: any;
    /**
     * Terrain providers activity lock.
     * @public
     * @type {og.idle.Lock}
     */
    public terrainLock: any;
    /**
     * Layer's transparent colors.
     * @protected
     */
    protected _tcolorArr: any[];
    /**
     * Height scale factor. 1 - is normal elevation scale.
     * @protected
     * @type {number}
     */
    protected _heightFactor: number;
    /**
     * Precomputed indexes array for differrent grid size segments.
     * @protected
     * @type {Array.<Array.<number>>}
     */
    protected _indexesCache: Array<Array<number>>;
    _indexesCacheToRemove: any[];
    _indexesCacheToRemoveCounter: number;
    /**
     * Precomputed texture coordinates buffers for differrent grid size segments.
     * @protected
     * @type {Array.<Array.<number>>}
     */
    protected _textureCoordsBufferCache: Array<Array<number>>;
    /**
     * Framebuffer for relief. Is null when WEBGL_draw_buffers extension initialized.
     * @protected
     * @type {Object}
     */
    protected _heightPickingFramebuffer: any;
    /**
     * Mercator grid tree.
     * @protected
     * @type {og.quadTree.Node}
     */
    protected _quadTree: any;
    /**
     * North grid tree.
     * @protected
     * @type {og.quadTree.Node}
     */
    protected _quadTreeNorth: any;
    /**
     * South grid tree.
     * @protected
     * @type {og.quadTree.Node}
     */
    protected _quadTreeSouth: any;
    /**
     * Night glowing gl texture.
     * @protected
     */
    protected _nightTexture: any;
    /**
     * Specular mask gl texture.
     * @protected
     */
    protected _specularTexture: any;
    /**
     * True for rendering night glowing texture.
     * @protected
     * @type {boolean}
     */
    protected _useNightTexture: boolean;
    /**
     * True for rendering specular mask texture.
     * @protected
     * @type {boolean}
     */
    protected _useSpecularTexture: boolean;
    _maxGridSize: number;
    /**
     * Segment multiple textures size.(4 - convinient value for the most devices)
     * @const
     * @public
     */
    public SLICE_SIZE: number;
    SLICE_SIZE_4: number;
    SLICE_SIZE_3: number;
    /**
     * Level of the visible segment detalization.
     * @public
     * @type {number}
     */
    public _lodRatio: number;
    _maxLodRatio: number;
    _minLodRatio: number;
    _diffuseMaterialArr: Float32Array;
    _ambientMaterialArr: Float32Array;
    _specularMaterialArr: Float32Array;
    _tileOffsetArr: Float32Array;
    _visibleExtentOffsetArr: Float32Array;
    _transparentColorArr: Float32Array;
    _pickingColorArr: Float32Array;
    _samplerArr: Int32Array;
    _pickingMaskArr: Int32Array;
    /**
     * GeoImage creator.
     * @protected
     * @type{og.utils.GeoImageCreator}
     */
    protected _geoImageCreator: any;
    _vectorTileCreator: VectorTileCreator;
    _normalMapCreator: NormalMapCreator;
    _terrainWorker: TerrainWorker;
    _plainSegmentWorker: PlainSegmentWorker;
    _tileLoader: Loader;
    _memKey: Key;
    _distBeforeMemClear: number;
    _prevCamEye: Vec3;
    _initialized: boolean;
    always: any[];
    _renderCompleted: boolean;
    /**
     * Add the given control to the renderer of the planet scene.
     * @param {og.control.Control} control - Control.
     */
    addControl(control: any): void;
    setRatioLod(maxLod: any, minLod: any): void;
    /**
     * Add the given controls array to the renderer of the planet.
     * @param {Array.<og.control.Control>} cArr - Control array.
     */
    addControls(cArr: Array<any>): void;
    /**
     * Return layer by it name
     * @param {string} name - Name of the layer. og.Layer.prototype.name
     * @public
     * @returns {og.Layer} -
     */
    public getLayerByName(name: string): any;
    /**
     * Adds the given layer to the planet.
     * @param {og.Layer} layer - Layer object.
     * @public
     */
    public addLayer(layer: any): void;
    /**
     * Dispatch layer visibility changing event.
     * @param {og.Layer} layer - Changed layer.
     * @protected
     */
    protected _onLayerVisibilityChanged(layer: any): void;
    /**
     * Adds the given layers array to the planet.
     * @param {Array.<og.Layer>} layers - Layers array.
     * @public
     */
    public addLayers(layers: Array<any>): void;
    /**
     * Removes the given layer from the planet.
     * @param {og.Layer} layer - Layer to remove.
     * @return {og.Layer|undefined} The removed layer or undefined if the layer was not found.
     * @public
     */
    public removeLayer(layer: any): any | undefined;
    /**
     *
     * @protected
     * @param {og.Layer} layer - Material layer.
     */
    protected _clearLayerMaterial(layer: any): void;
    /**
     * Get the collection of layers associated with this planet.
     * @return {Array.<og.Layer>} Layers array.
     * @public
     */
    public getLayers(): Array<any>;
    /**
     * Sets base layer coverage to the planet.
     * @param {og.Layer} layer - Layer object.
     * @public
     */
    public setBaseLayer(layer: any): void;
    /**
     * Sets elevation scale. 1.0 is default.
     * @param {number} factor - Elevation scale.
     */
    setHeightFactor(factor: number): void;
    /**
     * Gets elevation scale.
     * @returns {number} Terrain elevation scale
     */
    getHeightFactor(): number;
    /**
     * Sets terrain provider
     * @public
     * @param {og.terrain.Terrain} terrain - Terrain provider.
     */
    public setTerrain(terrain: any): void;
    /**
     * @virtual
     * @protected
     */
    protected _initializeShaders(): void;
    /**
     * @virtual
     * @public
     */
    public init(): void;
    drawMode: any;
    clearIndexesCache(): void;
    _preRender(): void;
    /**
     * Creates default textures first for nirth pole and whole globe and second for south pole.
     * @public
     * @param{Object} param0 -
     * @param{Object} param1 -
     */
    public createDefaultTextures(param0: any, param1: any): void;
    /**
     * Updates attribution lists
     * @public
     */
    public updateAttributionsList(): void;
    /**
     * Updates visible layers.
     * @public
     */
    public updateVisibleLayers(): void;
    /**
     * Sort visible layer - preparing for rendering.
     * @protected
     */
    protected _sortLayers(): void;
    _clearRenderedNodeList(): void;
    /**
     * Collects visible quad nodes.
     * @protected
     */
    protected _collectRenderNodes(): void;
    _nodeCounterError_: number;
    _globalPreDraw(): void;
    /**
     * Render node callback.
     * @public
     */
    public frame(): void;
    _checkRendercompleted(): void;
    _renderCompletedActivated: boolean;
    /**
     * @protected
     */
    protected _renderScreenNodesPASS(): void;
    /**
     * @protected
     */
    protected _renderHeightPickingFramebufferPASS(): void;
    /**
     * @protected
     */
    protected _renderColorPickingFramebufferPASS(): void;
    /**
     * @protected
     */
    protected _renderDepthFramebufferPASS(): void;
    _collectVectorLayerCollections(): void;
    /**
     * Vector layers picking pass.
     * @protected
     */
    protected _frustumEntityCollectionPickingCallback(): void;
    /**
     * Starts clear memory thread.
     * @public
     */
    public memClear(): void;
    /**
     * Returns ray vector hit ellipsoid coordinates.
     * If the ray doesn't hit ellipsoit returns null.
     * @public
     * @param {og.Ray} ray - Ray 3d.
     * @returns {og.Vec3} -
     */
    public getRayIntersectionEllipsoid(ray: any): any;
    /**
     * Returns 2d screen coordanates projection point to the planet ellipsoid 3d coordinates.
     * @public
     * @param {og.math.Pixel} px - 2D sreen coordinates.
     * @returns {og.Vec3} -
     */
    public getCartesianFromPixelEllipsoid(px: any): any;
    /**
     * Returns 2d screen coordanates projection point to the planet ellipsoid geographical coordinates.
     * @public
     * @param {og.math.Pixel} px - 2D screen coordinates.
     * @returns {og.LonLat} -
     */
    public getLonLatFromPixelEllipsoid(px: any): any;
    /**
     * Returns 3d cartesian coordinates on the relief planet by mouse cursor
     * position or null if mouse cursor is outside the planet.
     * @public
     * @param {Boolean} [force=false] - Force framebuffer rendering.
     * @returns {og.Vec3} -
     */
    public getCartesianFromMouseTerrain(force?: boolean): any;
    /**
     * Returns 3d cartesian coordinates on the relief planet by 2d screen coordinates.
     * position or null if input coordinates is outside the planet.
     * @public
     * @param {og.Vec2} px - Pixel screen 2d coordinates.
     * @param {Boolean} [force=false] - Force framebuffer rendering.
     * @returns {og.Vec3} -
     */
    public getCartesianFromPixelTerrain(px: any, force?: boolean): any;
    /**
     * Returns geographical coordinates on the relief planet by 2d screen coordinates.
     * position or null if input coordinates is outside the planet.
     * @public
     * @param {og.Vec2} px - Pixel screen 2d coordinates.
     * @param {Boolean} [force=false] - Force framebuffer rendering.
     * @returns {og.LonLat} -
     */
    public getLonLatFromPixelTerrain(px: any, force?: boolean): any;
    /**
     * Returns projected 2d screen coordinates by 3d cartesian coordiantes.
     * @public
     * @param {og.Vec3} coords - Cartesian coordinates.
     * @returns {og.Vec2} -
     */
    public getPixelFromCartesian(coords: any): any;
    /**
     * Returns projected 2d screen coordinates by geographical coordinates.
     * @public
     * @param {og.LonLat} lonlat - Geographical coordinates.
     * @returns {og.Vec2} -
     */
    public getPixelFromLonLat(lonlat: any): any;
    /**
     * Returns distance from active camera to the the planet ellipsoid
     * coordiantes unprojected by 2d screen coordiantes, or null if screen coordinates outside the planet.
     * @public
     * @param {og.Vec2} px - Screen coordinates.
     * @returns {number} -
     */
    public getDistanceFromPixelEllipsoid(px: any): number;
    /**
     * Returns distance from active camera to the the relief planet coordiantes unprojected
     * by 2d screen coordiantes, or null if screen coordinates outside the planet.
     * If screen coordinates inside the planet but relief is not exists in the
     * point than function returns distance to the planet ellipsoid.
     * @public
     * @param {og.Vec2} px - Screen coordinates.
     * @param {Boolean} [force=false] - Force framebuffer rendering.
     * @returns {number} -
     */
    public getDistanceFromPixel(px: any): number;
    /**
     * Sets camera to the planet geographical extent.
     * @public
     * @param {og.Extent} extent - Geographical extent.
     */
    public viewExtent(extent: any): void;
    /**
     * Sets camera to the planet geographical extent.
     * @public
     * @param {Array.<number,number,number,number>} extentArr - Geographical extent array,
     * where index 0 - southwest longitude, 1 - latitude southwest, 2 - longitude northeast, 3 - latitude northeast.
     */
    public viewExtentArr(extentArr: Array<number>): void;
    /**
     * Gets current viewing geographical extent.
     * @public
     * @returns {og.Extent} -
     */
    public getViewExtent(): any;
    /**
     * Sets camera to the planet geographical position.
     * @public
     * @param {og.LonLat} lonlat - New geographical position.
     * @param {og.Vec3} [up] - Camera UP vector.
     */
    public viewLonLat(lonlat: any, up?: any): void;
    /**
     * Fly camera to the planet geographical extent.
     * @public
     * @param {og.Extent} extent - Geographical extent.
     * @param {Number} [height] - Height on the end of the flight route.
     * @param {og.Vec3} [up] - Camera UP vector on the end of a flying.
     * @param {Number} [ampl] - Altitude amplitude factor.
     * @param {cameraCallback} [startCallback] - Callback that calls after flying when flying is finished.
     * @param {cameraCallback} [completeCallback] - Callback that calls befor the flying begins.
     */
    public flyExtent(extent: any, height?: number, up?: any, ampl?: number, completeCallback?: any, startCallback?: any): void;
    /**
     * Fly camera to the new point.
     * @param {og.Vec3} cartesian - Fly coordiantes.
     * @param {og.Vec3} [look] - Camera "look at" point.
     * @param {og.Vec3} [up] - Camera UP vector on the end of a flying.
     * @param {Number} [ampl] - Altitude amplitude factor.
     * @param [completeCallback]
     * @param [startCallback]
     * @param [frameCallback]
     */
    flyCartesian(cartesian: any, look?: any, up?: any, ampl?: number, completeCallback?: any, startCallback?: any, frameCallback?: any): void;
    /**
     * Fly camera to the new geographical position.
     * @public
     * @param {og.LonLat} lonlat - Fly geographical coordiantes.
     * @param {og.Vec3} [look] - Camera "look at" point on the end of a flying.
     * @param {og.Vec3} [up] - Camera UP vector on the end of a flying.
     * @param {Number} [ampl] - Altitude amplitude factor.
     * @param [completeCallback]
     * @param [startCallback]
     * @param [frameCallback]
     */
    public flyLonLat(lonlat: any, look?: any, up?: any, ampl?: number, completeCallback?: any, startCallback?: any, frameCallback?: any): void;
    /**
     * Breaks the flight.
     * @public
     */
    public stopFlying(): void;
    updateBillboardsTexCoords(): void;
    getEntityTerrainPoint(entity: any, res: any): any;
}
import { VectorTileCreator } from "../utils/VectorTileCreator.js";
import { NormalMapCreator } from "../utils/NormalMapCreator.js";
import { TerrainWorker } from "../utils/TerrainWorker.js";
import { PlainSegmentWorker } from "../utils/PlainSegmentWorker.js";
import { Loader } from "../utils/Loader.js";
import { Key } from "../Lock.js";
import { Vec3 } from "../math/index.js";
