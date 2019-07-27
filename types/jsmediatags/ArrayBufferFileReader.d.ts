import {
    LoadCallbackType
} from './types';
import ChunkedFileData from './build2/ChunkedFileData';
import MediaFileReader from './build2/MediaFileReader';

export default class ArrayBufferFileReader extends MediaFileReader {
    _buffer: ArrayBuffer;
    _fileData: ChunkedFileData;

    constructor(buffer: ArrayBuffer);

    static canReadFile(file: any): boolean;

    _init(callbacks: LoadCallbackType): void;

    loadRange(range: [number, number], callbacks: LoadCallbackType): void;

    getByteAt(offset: number): number;
}
