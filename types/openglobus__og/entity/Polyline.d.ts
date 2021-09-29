/**
 * Polyline object.
 * @class
 * @param {Object} [options] - Polyline options:
 * @param {number} [options.thickness] - Thickness in screen pixels 1.5 is default.
 * @param {Number} [options.altitude] - Relative to ground layers altitude value.
 * @param {og.Vec4} [options.color] - RGBA color.
 * @param {Boolean} [options.opacity] - Line opacity.
 * @param {Boolean} [options.visibility] - Polyline visibility. True default.
 * @param {Boolean} [options.isClosed] - Closed geometry type identificator.
 * @param {Array.<Array.<number,number,number>>} [options.pathLonLat] - Polyline geodetic coordinates array.
 * @param {Array.<Array.<number,number,number>>} [options.path3v] - LinesString cartesian coordinates array. [[0,0,0], [1,1,1],...]
 * @param {Array.<Array.<number,number,number, number>>} [options.pathColors] - Coordinates color. [[1,0,0,1], [0,1,0,1],...] for right and green colors.
 */
export class Polyline {
    static set _staticCounter(arg: any);
    static get _staticCounter(): any;
    /**
     * Appends to the line array new cartesian coordinates line data.
     * @param {Array.<Array.<number, number, number>>} path3v - Line coordinates path array.
     * @param {Boolean} isClosed - Identificator for the closed line data creation.
     * @param {Number[]} outVertices - Out vertices data array.
     * @param {Number[]} outOrders - Out vertices orders data array.
     * @param {Number[]} outIndexes - Out vertices indexes data array.
     * @param {og.Ellipsoid} [ellipsoid] - Ellipsoid to coordinates transformation.
     * @param {Array.<Array.<og.LonLat>>} [outTransformedPathLonLat] - Geodetic coordinates out array.
     * @param {Array.<Array.<og.LonLat>>} [outPath3v] - Cartesian coordinates out array.
     * @param {Array.<Array.<og.LonLat>>} [outTransformedPathMerc] - Mercator coordinates out array.
     * @param {og.Extent} outExtent - Geodetic line extent.
     * @static
     */
    static appendLineData3v(path3v: Array<Array<number, number, number>>, pathColors: any, defaultColor: any, isClosed: boolean, outVerticesHigh: any, outVerticesLow: any, outOrders: number[], outIndexes: number[], ellipsoid?: any, outTransformedPathLonLat?: Array<Array<any>>, outPath3v?: Array<Array<any>>, outTransformedPathMerc?: Array<Array<any>>, outExtent: any, outColors: any): void;
    /**
     * Appends to the line new cartesian coordinates point data.
     * @param {Array.<Array.<number, number, number>>} path3v - Line coordinates path array.
     * @param {Boolean} isClosed - Identificator for the closed line data creation.
     * @param {Number[]} outVertices - Out vertices data array.
     * @param {Number[]} outOrders - Out vertices orders data array.
     * @param {Number[]} outIndexes - Out vertices indexes data array.
     * @param {og.Ellipsoid} [ellipsoid] - Ellipsoid to coordinates transformation.
     * @param {Array.<Array.<og.LonLat>>} [outTransformedPathLonLat] - Geodetic coordinates out array.
     * @param {Array.<Array.<og.LonLat>>} [outPath3v] - Cartesian coordinates out array.
     * @param {Array.<Array.<og.LonLat>>} [outTransformedPathMerc] - Mercator coordinates out array.
     * @param {og.Extent} outExtent - Geodetic line extent.
     * @static
     */
    static appendPoint3v(path3v: Array<Array<number, number, number>>, point3v: any, pathColors: any, color: any, isClosed: boolean, outVerticesHigh: any, outVerticesLow: any, outColors: any, outOrders: number[], outIndexes: number[], ellipsoid?: any, outTransformedPathLonLat?: Array<Array<any>>, outTransformedPathMerc?: Array<Array<any>>, outExtent: any): void;
    /**
     * Appends to the line array new geodetic coordinates line data.
     * @param {Array.<Array.<number, number, number>>} pathLonLat - Line geodetic coordinates path array.
     * @param {Boolean} isClosed - Identificator for the closed line data creation.
     * @param {Number[]} outVertices - Out vertices data array.
     * @param {Number[]} outOrders - Out vertices orders data array.
     * @param {Number[]} outIndexes - Out indexes data array.
     * @param {og.Ellipsoid} ellipsoid - Ellipsoid to coordinates transformation.
     * @param {Array.<Array.<Number, Number, Number>>} outTransformedPathCartesian - Cartesian coordinates out array.
     * @param {Array.<Array.<og.LonLat>>} outPathLonLat - Geographic coordinates out array.
     * @param {Array.<Array.<og.LonLat>>} outTransformedPathMerc - Mercator coordinates out array.
     * @param {og.Extent} outExtent - Geodetic line extent.
     * @static
     */
    static appendLineDataLonLat(pathLonLat: Array<Array<number, number, number>>, pathColors: any, defaultColor: any, isClosed: boolean, outVerticesHigh: any, outVerticesLow: any, outOrders: number[], outIndexes: number[], ellipsoid: any, outTransformedPathCartesian: Array<Array<number, number, number>>, outPathLonLat: Array<Array<any>>, outTransformedPathMerc: Array<Array<any>>, outExtent: any, outColors: any): void;
    constructor(options: any);
    /**
     * Object unic identifier.
     * @public
     * @readonly
     * @type {number}
     */
    public readonly id: number;
    altitude: any;
    /**
     * Polyline thickness in screen pixels.
     * @public
     * @type {number}
     */
    public thickness: number;
    /**
     * Polyline RGBA color.
     * @public
     * @type {Array<Number,Number,Number,Number>}
     */
    public _defaultColor: Array<number, number, number, number>;
    /**
     * Polyline visibility.
     * @public
     * @type {boolean}
     */
    public visibility: boolean;
    /**
     * Polyline geometry ring type identificator.
     * @protected
     * @type {Boolean}
     */
    protected _closedLine: boolean;
    /**
     * Polyline cartesian coordinates.
     * @private
     * @type {Array.<og.Vec3>}
     */
    private _path3v;
    _pathLengths: any[];
    /**
     * Polyline geodetic degrees coordiantes.
     * @private
     * @type {Array.<og.LonLat>}
     */
    private _pathLonLat;
    /**
     * Polyline geodetic mercator coordinates.
     * @private
     * @type {Array.<og.LonLat>}
     */
    private _pathLonLatMerc;
    _pathColors: any;
    /**
     * Polyline geodetic extent.
     * @protected
     * @type {og.Extent}
     */
    protected _extent: any;
    _verticesHigh: any[];
    _verticesLow: any[];
    _orders: any[];
    _indexes: any[];
    _colors: any[];
    _verticesHighBuffer: any;
    _verticesLowBuffer: any;
    _ordersBuffer: any;
    _indexesBuffer: any;
    _colorsBuffer: any;
    _pickingColor: number[];
    _renderNode: any;
    /**
     * Entity instance that holds this Polyline.
     * @private
     * @type {og.Entity}
     */
    private _entity;
    /**
     * Handler that stores and renders this Polyline object.
     * @private
     * @type {og.PolylineHandler}
     */
    private _handler;
    _handlerIndex: number;
    _buffersUpdateCallbacks: (() => void)[];
    _changedBuffers: any[];
    /**
     * Sets polyline path with cartesian coordinates.
     * @protected
     * @param {pg.math.Vector3[]} path3v - Cartesian coordinates.
     */
    protected _setEqualPath3v(path3v: any[]): void;
    /**
     * Sets polyline with geodetic coordinates.
     * @protected
     * @param {og.LonLat[]} pathLonLat - Geodetic polyline path coordinates.
     */
    protected _setEqualPathLonLat(pathLonLat: any[]): void;
    setPointLonLat(lonlat: any, index: any, segmentIndex: any): void;
    setPoint3v(coordinates: any, index: any, segmentIndex: any, skipLonLat: any): void;
    _resizePathLengths(index?: number): void;
    removeSegment(index: any): void;
    removePoint(index: any, multiLineIndex?: number): void;
    insertPoint3v(point3v: any, index: number, color: any, multilineIndex?: number): void;
    /**
     * Adds a new cartesian point in the end of the path in a last line segment.
     * @public
     * @param {og.Vec3} point3v - New coordinate.
     */
    public appendPoint3v(point3v: any, color: any, skipEllipsoid: any): void;
    /**
     * Adds a new cartesian point in the end of the path.
     * @public
     * @param {og.Vec3} point3v - New coordinate.
     * @param {number} [multiLineIndex=0] - Path part index, first by default.
     */
    public addPoint3v(point3v: any, multiLineIndex?: number): void;
    /**
     * Adds a new geodetic point in the end of the path.
     * @public
     * @param {og.LonLat} lonLat - New coordinate.
     * @param {number} [multiLineIndex=0] - Path part index, first by default.
     */
    public addPointLonLat(lonLat: any, multiLineIndex?: number): void;
    /**
     * Clear Polyline object data.
     * @public
     */
    public clear(): void;
    setPointColor(color: any, index?: number, segmentIndex?: number): void;
    /**
     * Sets Polyline opacity.
     * @public
     * @param {number} opacity - Opacity.
     */
    public setOpacity(opacity: number): void;
    /**
     * Sets Polyline thickness in screen pixels.
     * @public
     * @param {number} thickness - Thickness.
     */
    public setThickness(thickness: number): void;
    /**
     * Returns thickness.
     * @public
     * @return {number} Thickness in screen pixels.
     */
    public getThickness(): number;
    /**
     * Sets visibility.
     * @public
     * @param {boolean} visibility - Polyline visibility.
     */
    public setVisibility(visibility: boolean): void;
    /**
     * Gets Polyline visibility.
     * @public
     * @return {boolean} Polyline visibility.
     */
    public getVisibility(): boolean;
    /**
     * Assign with render node.
     * @public
     * @param {og.scene.RenderNode} renderNode -
     */
    public setRenderNode(renderNode: any): void;
    /**
     * @protected
     */
    protected _clearData(): void;
    _createData3v(path3v: any): void;
    _createDataLonLat(pathLonlat: any): void;
    /**
     * Removes from an entity.
     * @public
     */
    public remove(): void;
    setPickingColor3v(color: any): void;
    /**
     * Returns polyline geodetic extent.
     * @public
     * @returns {og.Extent} - Geodetic extent
     */
    public getExtent(): any;
    /**
     * Returns path cartesian coordinates.
     * @return {Array.<og.Vec3>} Polyline path.
     */
    getPath3v(): Array<any>;
    /**
     * Returns geodetic path coordinates.
     * @return {Array.<og.LonLat>} Polyline path.
     */
    getPathLonLat(): Array<any>;
    getPathColors(): any;
    setPathColors(pathColors: any): void;
    setColorHTML(htmlColor: any): void;
    /**
     * Sets geodetic coordinates.
     * @public
     * @param {Array.<Array.<number,number,number>>} pathLonLat - Polyline path cartesian coordinates.
     * @param {Boolean} [forceEqual=false] - Makes assigning faster for size equal coordinates array.
     */
    public setPathLonLat(pathLonLat: Array<Array<number, number, number>>, forceEqual?: boolean): void;
    /**
     * Sets Polyline cartesian coordinates.
     * @public
     * @param {Array.<Array.<number,number,number>>} path3v - Polyline path cartesian coordinates.
     * @param {Boolean} [forceEqual=false] - Makes assigning faster for size equal coordinates array.
     */
    public setPath3v(path3v: Array<Array<number, number, number>>, pathColors: any, forceEqual?: boolean): void;
    draw(): void;
    drawPicking(): void;
    /**
     * Refresh buffers.
     * @protected
     */
    protected _refresh(): void;
    /**
     * Updates render buffers.
     * @protected
     */
    protected _update(): void;
    /**
     * Clear GL buffers.
     * @protected
     */
    protected _deleteBuffers(): void;
    /**
     * Creates gl main data buffer.
     * @protected
     */
    protected _createVerticesBuffer(): void;
    /**
     * Creates gl index and order buffer.
     * @protected
     */
    protected _createIndexBuffer(): void;
    _createColorsBuffer(): void;
}
