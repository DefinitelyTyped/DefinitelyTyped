export class PointCloudHandler {
    static set _staticCounter(arg: any);
    static get _staticCounter(): any;
    constructor(entityCollection: any);
    /**
     * Picking rendering option.
     * @public
     * @type {boolean}
     */
    public pickingEnabled: boolean;
    /**
     * Parent collection
     * @private
     * @type {og.EntityCollection}
     */
    private _entityCollection;
    /**
     * Renderer
     * @private
     * @type {og.Renderer}
     */
    private _renderer;
    /**
     * Point cloud array
     * @private
     * @type {Array.<og.PointCloud>}
     */
    private _pointClouds;
    __staticId: number;
    _initProgram(): void;
    setRenderNode(renderNode: any): void;
    add(pointCloud: any): void;
    remove(pointCloud: any): void;
    reindexPointCloudArray(startIndex: any): void;
    draw(): void;
    drawPicking(): void;
    clear(): void;
}
