import {
    LoadCallbackType
} from 'jsmediatags/types';
import MediaFileReader from 'jsmediatags/build2/MediaFileReader';
import ChunkedFileData from 'jsmediatags/build2/ChunkedFileData';

export default class BlobFileReader extends MediaFileReader {
    _blob: Blob;
    _fileData: ChunkedFileData;

    constructor(blob: Blob);

    static canReadFile(file: any): boolean;

    _init(callbacks: LoadCallbackType): void;

    loadRange(range: [number, number], callbacks: LoadCallbackType): void;

    getByteAt(offset: number): number;
}
