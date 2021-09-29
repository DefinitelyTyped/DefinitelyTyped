export class RayHandler {
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
    _rays: any[];
    _vertexBuffer: any;
    _startPositionHighBuffer: any;
    _startPositionLowBuffer: any;
    _endPositionHighBuffer: any;
    _endPositionLowBuffer: any;
    _lengthBuffer: any;
    _thicknessBuffer: any;
    _rgbaBuffer: any;
    _vertexArr: any[];
    _startPositionHighArr: any[];
    _startPositionLowArr: any[];
    _endPositionHighArr: any[];
    _endPositionLowArr: any[];
    _lengthArr: any[];
    _thicknessArr: any[];
    _rgbaArr: any[];
    _pickingColorBuffer: any;
    _pickingColorArr: any[];
    _buffersUpdateCallbacks: (() => void)[];
    _changedBuffers: any[];
    __staticId: number;
    initProgram(): void;
    setRenderer(renderer: any): void;
    refresh(): void;
    _removeRays(): void;
    clear(): void;
    _deleteBuffers(): void;
    update(): void;
    add(ray: any): void;
    _addRayToArrays(ray: any): void;
    _displayPASS(): void;
    _pickingPASS(): void;
    draw(): void;
    drawPicking(): void;
    reindexRaysArray(startIndex: any): void;
    _removeRay(ray: any): void;
    remove(ray: any): void;
    setStartPositionArr(index: any, positionHigh: any, positionLow: any): void;
    setEndPositionArr(index: any, positionHigh: any, positionLow: any): void;
    setPickingColorArr(index: any, color: any): void;
    setRgbaArr(index: any, startColor: any, endColor: any): void;
    setThicknessArr(index: any, thickness: any): void;
    setLengthArr(index: any, length: any): void;
    setVisibility(index: any, visibility: any): void;
    setVertexArr(index: any, vertexArr: any): void;
    createStartPositionBuffer(): void;
    createEndPositionBuffer(): void;
    createRgbaBuffer(): void;
    createThicknessBuffer(): void;
    createLengthBuffer(): void;
    createVertexBuffer(): void;
    createPickingColorBuffer(): void;
}
