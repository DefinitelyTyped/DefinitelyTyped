import {
    Byte,
    ByteArray,
    ByteRange,
    CallbackType,
    CharsetType,
    ChunkType,
    DataType,
    FrameReaderSignature,
    LoadCallbackType,
    TagFrame,
    TagType,
    TagHeader,
    TagHeaderFlags,
    TagFrames,
    TagFrameHeader,
    TagFrameFlags,
} from '../types';

export class ArrayFileReader extends MediaFileReader {
    _array: ByteArray;
    _size: number;

    constructor(array: ByteArray);

    static canReadFile(file: any): boolean;

    init(callbacks: LoadCallbackType): void;

    loadRange(range: [number, number], callbacks: LoadCallbackType): void;

    getByteAt(offset: number): Byte;
}

export class BlobFileReader extends MediaFileReader {
    _blob: Blob;
    _fileData: ChunkedFileData;

    constructor(blob: Blob);

    static canReadFile(file: any): boolean;

    _init(callbacks: LoadCallbackType): void;

    loadRange(range: [number, number], callbacks: LoadCallbackType): void;

    getByteAt(offset: number): number;
}

export function bin(string: string): ByteArray;

export function pad(array: [], size: number): [];

export function getSynchsafeInteger32(number: number): ByteArray;

export function getInteger32(number: number): ByteArray;

export function getInteger24(number: number): ByteArray;

export class ChunkedFileData {
    static NOT_FOUND: number;

    addData(offset: number, data: DataType): void;

    _concatData(dataA: DataType, dataB: DataType): DataType;

    _sliceData(data: DataType, begin: number, end: number): DataType;

    _getChunkRange(
        offsetStart: number,
        offsetEnd: number
      ): {startIx: number, endIx: number, insertIx?: number};

    hasDataRange(offsetStart: number, offsetEnd: number): boolean;

    getByteAt(offset: number): any;
}

export class FLACTagContents {
    blocks: Array<MetadataBlock>;

    constructor(blocks?: Array<MetadataBlock>);

    toArray(): ByteArray;

    static createBlock(type: number, data: ByteArray): MetadataBlock;

    static createStreamBlock(): MetadataBlock;

    static createCommentBlock(...data: string[][]): MetadataBlock;

    static createPictureBlock(): void;
}

export class MetadataBlock {
    _data: number[];
    _final: boolean;
    _type: number;

    constructor(type: number, data: ByteArray);

    setFinal(): void;

    toArray(): void;
}

export class FLACTagReader extends MediaTagReader {
    _commentOffset: number;
    _pictureOffset: number;

    static getTagIdentifierByteRange(): ByteRange;

    static canReadTagFormat(tagIdentifier: number[]): boolean;

    _loadData(mediaFileReader: MediaFileReader, callbacks: LoadCallbackType): void;

    _loadBlock(
        mediaFileReader: MediaFileReader,
        offset: number,
        callbacks: LoadCallbackType
    ): void;

    _nextBlock(
        mediaFileReader: MediaFileReader,
        offset: number,
        blockHeader: number,
        blockSize: number,
        callbacks: LoadCallbackType
    ): void;

    _parseData(data: MediaFileReader, tags?: string[]): TagType;
}

export class ID3v1TagReader extends MediaTagReader {
    static getTagIdentifierByteRange(): ByteRange;

    static canReadTagFormat(tagIdentifier: number[]): boolean;

    _loadData(mediaFileReader: MediaFileReader, callbacks: LoadCallbackType): void;

    _parseData(data: MediaFileReader, tags?: string[]): TagType;
}

export class ID3v2FrameReader {
    static getFrameReaderFunction(frameId: string): FrameReaderSignature | null;

    static readFrames(
        offset: number,
        end: number,
        data: MediaFileReader,
        id3header: TagHeader,
        tags?: string[]
      ): TagFrames;

    static _getFrameHeaderSize(id3header: TagHeader): number;

    static _readFrameHeader(
        data: MediaFileReader,
        offset: number,
        id3header: TagHeader
      ): TagFrameHeader;

    static _readFrameFlags(data: MediaFileReader, offset: number): TagFrameFlags;

    static _getFrameDescription(frameId: string): string;

    static getUnsyncFileReader(
        data: MediaFileReader,
        offset: number,
        size: number
      ): MediaFileReader;
}

export class ID3v2TagContents {
    _size: number;
    _major: number;
    _revision: number;
    _contents: ByteArray;
    _frames: { [key: string]: Array<ByteArray> };
    _extendedHeader: {
        UPDATE: number,
        CRC: number,
        RESTRICTIONS: number
    };
    _hasExtendedHeader: boolean;
    _nextFrameOffset: number;

    constructor(major: number, revision: number);

    toArray(): ByteArray;

    setFlags(flags: TagHeaderFlags): ID3v2TagContents;

    _updateFlags(flags: TagHeaderFlags, binaryFlags?: number): ID3v2TagContents;

    setCrc(crc: ByteArray): ID3v2TagContents;

    setTagIsUpdate(): ID3v2TagContents;

    setTagRestrictions(
        size: number,
        textEncoding: number,
        textSize: number,
        imageEncoding: number,
        imageSize: number
    ): ID3v2TagContents;

    addFrame(
        id: string,
        data: ByteArray,
        flags?: TagFrameFlags,
        noFlagsDataLength?: number
    ): ID3v2TagContents;

    _addExtendedHeaderData(tagKey: string, tagData: ByteArray): void;

    _initExtendedHeader(): void;

    _updateSize(): void;

    _setBitAtOffset(offset: number, bit: number): void;

    _getData(offset: number, length: number): ByteArray;

    _setData(offset: number, data: ByteArray): void;

    _addData(offset: number, data: ByteArray): void;
}

export class ID3v2TagReader extends MediaTagReader {
    static getTagIdentifierByteRange(): ByteRange;

    static canReadTagFormat(tagIdentifier: number[]): boolean;

    _loadData(mediaFileReader: MediaFileReader, callbacks: LoadCallbackType): void;

    _parseData(data: MediaFileReader, tags?: string[]): TagType;

    _getFrameData(frames: TagFrames, ids: string[]): any | void;

    getShortcuts(): {[key: string]: string|string[]};
}

export class MediaFileReader {
    _isInitialized: boolean;
    _size: number;

    constructor(path?: any);

    static canReadFile(file: any): boolean;

    init(callbacks: LoadCallbackType): void;
    _init(callbacks: LoadCallbackType): void;
    loadRange(range: [number, number], callbacks: LoadCallbackType): void;
    getSize(): number;
    getByteAt(offset: number): number;
    getBytesAt(offset: number, length: number): number[];
    isBitSetAt(offset: number, bit: number): boolean;
    getSByteAt(offset: number): number;
    getShortAt(offset: number, isBigEndian: boolean): number;
    getSShortAt(offset: number, isBigEndian: boolean): number;
    getLongAt(offset: number, isBigEndian: boolean): number;
    getSLongAt(offset: number, isBigEndian: boolean): number;
    getInteger24At(offset: number, isBigEndian: boolean): number;
    getStringAt(offset: number, length: number): string;
    getStringWithCharsetAt(
        offset: number,
        length: number,
        charset?: CharsetType,
      ): DecodedString;
    getCharAt(offset: number): string;
    getSynchsafeInteger32At(offset: number): number;
}

export class MediaTagReader {
    _mediaFileReader: MediaFileReader;
    _tags?: string[];

    constructor(mediaFileReader: MediaFileReader);

    static getTagIdentifierByteRange(): ByteRange;

    static canReadTagFormat(tagIdentifier: number[]): boolean;

    setTagsToRead(tags: string[]): MediaTagReader;

    read(callbacks: CallbackType): void;

    getShortcuts(): {[key: string]: (string|string[])};

    _loadData(
        mediaFileReader: MediaFileReader,
        callbacks: LoadCallbackType
      ): void;

    _parseData(mediaFileReader: MediaFileReader, tags?: string[]): TagType;

    _expandShortcutTags(tagsWithShortcuts?: string[]): string[] | null;
}

export class Atom {
    _name: string;
    _data: number[];
    _atoms: Array<Atom>;

    constructor(name: string, data?: ByteArray, atoms?: Array<Atom>);

    toArray(): ByteArray;
}

export class MP4TagContents {
    _atoms: Array<Atom>;

    constructor(ftyp: string, atoms?: Array<Atom>);

    toArray(): ByteArray;

    static createAtom(atomName: string): Atom;

    static createContainerAtom(atomName: string, atoms: Array<Atom>, data?: ByteArray): Atom;

    static createMetadataAtom(atomName: string, type: string, data: ByteArray): Atom;
}

export class MP4TagReader extends MediaTagReader {
    static getTagIdentifierByteRange(): ByteRange;

    static canReadTagFormat(tagIdentifier: number[]): boolean;

    _loadData(mediaFileReader: MediaFileReader, callbacks: LoadCallbackType): void;

    _loadAtom(
        mediaFileReader: MediaFileReader,
        offset: number,
        parentAtomFullName: string,
        callbacks: LoadCallbackType
      ): void;

    _isContainerAtom(atomName: string): boolean;

    _canReadAtom(atomName: string): boolean;

    _parseData(data: MediaFileReader, tagsToRead?: string[]): TagType;

    _readAtom(
        tags: any,
        data: MediaFileReader,
        offset: number,
        length: number,
        tagsToRead?: string[],
        parentAtomFullName?: string,
        indent?: string
      ): void;

    _readMetadataAtom(data: MediaFileReader, offset: number): TagFrame;

    getShortcuts(): {[key: string]: string|string[]};
}

export class NodeFileReader extends MediaFileReader {
    _path: string;
    _fileData: ChunkedFileData;

    constructor(path: string);

    static canReadFile(file: any): boolean;

    getByteAt(offset: number): number;

    _init(callbacks: LoadCallbackType): void;

    loadRange(range: [number, number], callbacks: LoadCallbackType): void;
}
export type DecodedString = InternalDecodedString;

export class InternalDecodedString {
  _value: string;
  bytesReadCount: number;
  length: number;

  constructor(value: string, bytesReadCount: number);

  toString(): string;
}

export type ContentRangeType = {
    firstBytePosition?: number,
    lastBytePosition?: number,
    instanceLength?: number,
};

export class XhrFileReader extends MediaFileReader {
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
