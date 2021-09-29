export class PolylineHandler {
    static set _staticCounter(arg: any);
    static get _staticCounter(): any;
    constructor(entityCollection: any);
    _entityCollection: any;
    _renderer: any;
    _polylines: any[];
    __staticId: number;
    pickingEnabled: boolean;
    _initProgram(): void;
    setRenderNode(renderNode: any): void;
    add(polyline: any): void;
    remove(polyline: any): void;
    reindexPolylineArray(startIndex: any): void;
    draw(): void;
    drawPicking(): void;
    clear(): void;
}
