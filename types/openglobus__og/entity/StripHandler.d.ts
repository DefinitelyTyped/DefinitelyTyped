export class StripHandler {
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
     * @type {Array.<og.Strip>}
     */
    private _strips;
    __staticId: number;
    _initProgram(): void;
    setRenderNode(renderNode: any): void;
    add(strip: any): void;
    remove(strip: any): void;
    reindexStripArray(startIndex: any): void;
    draw(): void;
    drawPicking(): void;
    clear(): void;
}
