import {
    LoadCallbackType
} from '../types';
import MediaFileReader from './MediaFileReader';
import ChunkedFileData from './ChunkedFileData';

export default class BlobFileReader extends MediaFileReader {
    _blob: Blob;
    _fileData: ChunkedFileData;

    constructor(blob: Blob);

    static canReadFile(file: any): boolean;

    _init(callbacks: LoadCallbackType): void;

    loadRange(range: [number, number], callbacks: LoadCallbackType): void;

    getByteAt(offset: number): number;
}
