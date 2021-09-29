export class BillboardHandler {
    static set _staticCounter(arg: any);
    static get _staticCounter(): any;
    static concArr(dest: any, curr: any): void;
    constructor(entityCollection: any);
    /**
     * Picking rendering option.
     * @public
     * @type {boolean}
     */
    public pickingEnabled: boolean;
    _entityCollection: any;
    _renderer: any;
    _billboards: any[];
    _positionHighBuffer: any;
    _positionLowBuffer: any;
    _sizeBuffer: any;
    _offsetBuffer: any;
    _rgbaBuffer: any;
    _rotationBuffer: any;
    _texCoordBuffer: any;
    _vertexBuffer: any;
    _alignedAxisBuffer: any;
    _texCoordArr: Float32Array;
    _vertexArr: Float32Array;
    _positionHighArr: Float32Array;
    _positionLowArr: Float32Array;
    _sizeArr: Float32Array;
    _offsetArr: Float32Array;
    _rgbaArr: Float32Array;
    _rotationArr: Float32Array;
    _alignedAxisArr: Float32Array;
    _pickingColorBuffer: any;
    _pickingColorArr: Float32Array;
    _buffersUpdateCallbacks: (() => void)[];
    _changedBuffers: any[];
    __staticId: number;
    initProgram(): void;
    setRenderer(renderer: any): void;
    refresh(): void;
    _removeBillboards(): void;
    clear(): void;
    _deleteBuffers(): void;
    update(): void;
    add(billboard: any): void;
    _addBillboardToArrays(billboard: any): void;
    _displayPASS(): void;
    _pickingPASS(): void;
    draw(): void;
    drawPicking(): void;
    reindexBillbordsArray(startIndex: any): void;
    _removeBillboard(billboard: any): void;
    remove(billboard: any): void;
    setPositionArr(index: any, positionHigh: any, positionLow: any): void;
    setPickingColorArr(index: any, color: any): void;
    setSizeArr(index: any, width: any, height: any): void;
    setOffsetArr(index: any, offset: any): void;
    setRgbaArr(index: any, rgba: any): void;
    setRotationArr(index: any, rotation: any): void;
    setTexCoordArr(index: any, tcoordArr: any): void;
    setVisibility(index: any, visibility: any): void;
    setVertexArr(index: any, vertexArr: any): void;
    setAlignedAxisArr(index: any, alignedAxis: any): void;
    createPositionBuffer(): void;
    createSizeBuffer(): void;
    createOffsetBuffer(): void;
    createRgbaBuffer(): void;
    createRotationBuffer(): void;
    createVertexBuffer(): void;
    createTexCoordBuffer(): void;
    createAlignedAxisBuffer(): void;
    createPickingColorBuffer(): void;
    refreshTexCoordsArr(): void;
}
