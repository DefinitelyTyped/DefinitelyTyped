/**
 * PointCloud object.
 * @class
 * @param {*} [options] - Point cloud options:
 * @param {Array.<Array.<number,number,number,number,number,number,number,*>>} [options.points] - Points cartesian coordinates array,
 * where first three is cartesian coordinates, next fourth is a RGBA color, and last is an point properties.
 * @param {number} [options.pointSize] - Point screen size in pixels.
 * @param {number} [options.pickingDistance] - Point border picking size in screen pixels.
 * @param {boolean} [options.visibility] - Point cloud visibility.
 * @example <caption>Creates point cloud with two ten pixel size points</caption>
 * new og.Entity({
 *     pointCloud: {
 *         pointSize: 10,
 *         points: [
 *             [0, 0, 0, 255, 255, 255, 255, { 'name': 'White point' }],
 *             [100, 100, 0, 255, 0, 0, 255, { 'name': 'Red point' }]
 *         ]
 *     }
 * });
 */
export class PointCloud {
    static set _staticCounter(arg: any);
    static get _staticCounter(): any;
    constructor(options: any);
    /**
     * Object unic identifier.
     * @public
     * @readonly
     * @type {number}
     */
    public readonly id: number;
    /**
     * Cloud visibility.
     * @public
     * @type {boolean}
     */
    public visibility: boolean;
    /**
     * Point screen size in pixels.
     * @public
     * @type {number}
     */
    public pointSize: number;
    /**
     * Point picking border size in pixels.
     * @public
     * @type {number}
     */
    public pickingDistance: number;
    /**
     * Parent collection render node.
     * @private
     * @type {og.scene.RenderNode}
     */
    private _renderNode;
    /**
     * Entity instance that holds this point cloud.
     * @private
     * @type {og.Entity}
     */
    private _entity;
    /**
     * Points properties.
     * @private
     * @type {Array.<*>}
     */
    private _points;
    /**
     * Coordinates array.
     * @private
     * @type {Array.<number>}
     */
    private _coordinatesData;
    /**
     * Color array.
     * @private
     * @type {Array.<number>}
     */
    private _colorData;
    /**
     * Picking color array.
     * @private
     * @type {Array.<number>}
     */
    private _pickingColorData;
    _coordinatesBuffer: any;
    _colorBuffer: any;
    _pickingColorBuffer: any;
    /**
     * Handler that stores and renders this object.
     * @private
     * @type {og.PointCloudHandler}
     */
    private _handler;
    _handlerIndex: number;
    _buffersUpdateCallbacks: (() => void)[];
    _changedBuffers: any[];
    /**
     * Clears point cloud data
     * @public
     */
    public clear(): void;
    /**
     * Set point cloud opacity.
     * @public
     * @param {number} opacity - Cloud opacity.
     */
    public setOpacity(opacity: number): void;
    opacity: number;
    /**
     * Sets cloud visibility.
     * @public
     * @param {number} visibility - Visibility flag.
     */
    public setVisibility(visibility: number): void;
    /**
     * @return {boolean} Point cloud visibily.
     */
    getVisibility(): boolean;
    /**
     * Assign rendering scene node.
     * @public
     * @param {og.scene.RenderNode}  renderNode - Assigned render node.
     */
    public setRenderNode(renderNode: any): void;
    /**
     * Removes from entity.
     * @public
     */
    public remove(): void;
    /**
     * Adds points to render.
     * @public
     * @param {Array.<Array<number,number,number,number,number,number,number,*>>} points - Point cloud array.
     * @example
     * var points = [[0, 0, 0, 255, 255, 255, 255, { 'name': 'White point' }], [100, 100, 0, 255, 0, 0, 255, { 'name': 'Red point' }]];
     */
    public setPoints(points: Array<Array<number>>): void;
    setPointPosition(index: any, x: any, y: any, z: any): void;
    setPointColor(index: any, r: any, g: any, b: any, a: any): void;
    addPoints(points: any): void;
    addPoint(index: any, point: any): void;
    /**
     * Returns specific point by index.
     * @public
     * @param {number} index - Point index.
     * @return {*} Specific point
     */
    public getPoint(index: number): any;
    removePoint(index: any): void;
    insertPoint(index: any, point: any): void;
    /**
     * Each point iterator.
     * @public
     * @param {callback} callback -
     */
    public each(callback: any): void;
    draw(): void;
    drawPicking(): void;
    /**
     * Update gl buffers.
     * @private
     */
    private _update;
    /**
     * Delete buffers
     * @private
     */
    private _deleteBuffers;
    _createCoordinatesBuffer(): void;
    _createColorBuffer(): void;
    _createPickingColorBuffer(): void;
    _setPickingColors(): void;
}
