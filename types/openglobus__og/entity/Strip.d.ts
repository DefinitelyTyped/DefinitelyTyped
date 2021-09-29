/**
 * Strip object.
 * @class
 * @param {*} [options] - Strip options:
 * @param {boolean} [options.visibility] - Strip visibility.
 * @example <caption>Stripe example</caption>
 * new og.Entity({
 *     strip: {
 *         gridSize: 10,
 *         path: [
 *             [[],[]],
 *             [[],[]]
 *         ]
 *     }
 * });
 */
export class Strip {
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
    color: Float32Array;
    /**
     * Parent collection render node.
     * @private
     * @type {og.scene.RenderNode}
     */
    private _renderNode;
    /**
     * Entity instance that holds this strip.
     * @private
     * @type {og.Entity}
     */
    private _entity;
    _verticesHighBuffer: any;
    _verticesLowBuffer: any;
    _indexesBuffer: any;
    _verticesHigh: any[];
    _verticesLow: any[];
    _indexes: any[];
    _path: any[];
    _pickingColor: Float32Array;
    _gridSize: number;
    /**
     * Handler that stores and renders this object.
     * @private
     * @type {og.StripHandler}
     */
    private _handler;
    _handlerIndex: number;
    /**
     * Assign picking color.
     * @protected
     * @param {og.Vec3} color - Picking RGB color.
     */
    protected setPickingColor3v(color: any): void;
    /**
     * Clears object
     * @public
     */
    public clear(): void;
    setColor(r: any, g: any, b: any, a: any): void;
    /**
     * Set strip opacity.
     * @public
     * @param {number} opacity - opacity.
     */
    public setOpacity(opacity: number): void;
    /**
     * Sets cloud visibility.
     * @public
     * @param {number} visibility - Visibility flag.
     */
    public setVisibility(visibility: number): void;
    /**
     * @return {boolean} Strip visibily.
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
    draw(): void;
    drawPicking(): void;
    /**
     * Delete buffers
     * @private
     */
    private _deleteBuffers;
    _indexBuffer: any;
    _createBuffers(): void;
    addEdge3v(p2: any, p3: any): void;
    setEdge3v(p2: any, p3: any, index: any): void;
    removeEdge(index: any): void;
    setGridSize(gridSize: any): void;
    getPath(): any[];
    setPath(path: any): void;
    insertEdge3v(p0: any, p1: any, index: any): void;
}
