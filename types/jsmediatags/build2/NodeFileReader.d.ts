import { LoadCallbackType } from '../types';
import MediaFileReader from './MediaFileReader';
import ChunkedFileData from './ChunkedFileData';

export default class NodeFileReader extends MediaFileReader {
    _path: string;
    _fileData: ChunkedFileData;

    constructor(path: string);

    static canReadFile(file: any): boolean;

    getByteAt(offset: number): number;

    _init(callbacks: LoadCallbackType): void;

    loadRange(range: [number, number], callbacks: LoadCallbackType): void;
}
