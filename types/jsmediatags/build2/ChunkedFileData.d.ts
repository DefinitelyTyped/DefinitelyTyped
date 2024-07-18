import { ChunkType, DataType } from "../types";

export default class ChunkedFileData {
    static NOT_FOUND: number;

    addData(offset: number, data: DataType): void;

    _concatData(dataA: DataType, dataB: DataType): DataType;

    _sliceData(data: DataType, begin: number, end: number): DataType;

    _getChunkRange(
        offsetStart: number,
        offsetEnd: number,
    ): { startIx: number; endIx: number; insertIx?: number };

    hasDataRange(offsetStart: number, offsetEnd: number): boolean;

    getByteAt(offset: number): any;
}
