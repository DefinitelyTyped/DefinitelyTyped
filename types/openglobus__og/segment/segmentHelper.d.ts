export function getInstance(): SegmentHelper;
declare class SegmentHelper {
    constructor(maxGridSize?: number);
    _maxGridSize: number;
    get maxGridSize(): number;
    init(): void;
    centerIndexesTable: Uint32Array[];
    skirtsIndexesTable: any[][];
    setMaxGridSize(gridSize: any): void;
    createSegmentIndexes(size: any, sidesSizes: any): Uint32Array;
    initTextureCoordsTable(pow: any): Uint16Array[];
}
export {};
