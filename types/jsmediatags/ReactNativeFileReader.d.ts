import { LoadCallbackType } from './types';
import MediaFileReader from './build2/MediaFileReader';
import ChunkedFileData from './build2/ChunkedFileData';

export default class ReactNativeFileReader extends MediaFileReader {
    _path: string;
    _fileData: ChunkedFileData;

    constructor(path: string);

    static canReadFile(file: any): boolean;

    getByteAt(offset: number): number;

    _init(callbacks: LoadCallbackType): void;

    loadRange(range: [number, number], callbacks: LoadCallbackType): void;
}
