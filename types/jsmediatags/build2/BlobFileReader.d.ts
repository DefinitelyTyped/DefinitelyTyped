import { LoadCallbackType } from "../types";
import ChunkedFileData from "./ChunkedFileData";
import MediaFileReader from "./MediaFileReader";

export default class BlobFileReader extends MediaFileReader {
    _blob: Blob;
    _fileData: ChunkedFileData;

    constructor(blob: Blob);

    static canReadFile(file: any): boolean;

    _init(callbacks: LoadCallbackType): void;

    loadRange(range: [number, number], callbacks: LoadCallbackType): void;

    getByteAt(offset: number): number;
}
