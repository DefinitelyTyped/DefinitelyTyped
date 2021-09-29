export class ShapeHandler {
    static set _staticCounter(arg: any);
    static get _staticCounter(): any;
    constructor(entityCollection: any);
    /**
     * Picking rendering option.
     * @public
     * @type {boolean}
     */
    public pickingEnabled: boolean;
    _entityCollection: any;
    _renderer: any;
    _shapes: any[];
    __staticId: number;
    _initProgram(): void;
    setRenderNode(renderNode: any): void;
    add(shape: any): void;
    remove(shape: any): void;
    draw(): void;
    drawPicking(): void;
    clear(): void;
}
