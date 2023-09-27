import C3DTilesTypes from "./C3DTilesTypes";

declare class C3DTBatchTable {
    constructor(
        buffer: ArrayBuffer,
        jsonLength: number,
        binaryLength: number,
        batchLength: number,
        registeredExtensions: any,
    ); // TODO

    type: C3DTilesTypes;
    batchLength: number;
    extensions?: any; // TODO
    content: any; // TODO

    getInfoById(batchID: number): any; // TODO (maybe unknown)
}

export default C3DTBatchTable;
