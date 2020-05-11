import { CallbackType, LoadCallbackType } from '../types';
import MediaFileReader from './MediaFileReader';
import ChunkedFileData from './ChunkedFileData';

export interface ContentRangeType {
    firstBytePosition?: number;
    lastBytePosition?: number;
    instanceLength?: number;
}

export default class XhrFileReader extends MediaFileReader {
    static _config: {
      avoidHeadRequests: boolean,
      disallowedXhrHeaders: string[],
      timeoutInSec: number
    };
    _url: string;
    _fileData: ChunkedFileData;

    constructor(url: string);

    static canReadFile(file: any): boolean;

    static setConfig(config: any): void;

    _init(callbacks: LoadCallbackType): void;

    _fetchSizeWithHeadRequest(callbacks: LoadCallbackType): void;

    _fetchSizeWithGetRequest(callbacks: LoadCallbackType): void;

    _fetchEntireFile(callbacks: LoadCallbackType): void;

    _getXhrResponseContent(xhr: XMLHttpRequest): string;

    _parseContentLength(xhr: XMLHttpRequest): number|null;

    _parseContentRange(xhr: XMLHttpRequest): ContentRangeType|null;

    loadRange(range: [number, number], callbacks: LoadCallbackType): void;

    _roundRangeToChunkMultiple(range: [number, number]): [number, number];

    _makeXHRRequest(
        method: string,
        range: [number, number] | null,
        callbacks: CallbackType
      ): void;

    _setRequestHeader(xhr: XMLHttpRequest, headerName: string, headerValue: string): void;

    _hasResponseHeader(xhr: XMLHttpRequest, headerName: string): boolean;

    _getResponseHeader(xhr: XMLHttpRequest, headerName: string): string|null;

    getByteAt(offset: number): number;

    _isWebWorker(): boolean;

    _createXHRObject(): XMLHttpRequest;
}
