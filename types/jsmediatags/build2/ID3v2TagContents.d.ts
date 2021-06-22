import {
    ByteArray,
    TagHeaderFlags,
    TagFrameFlags
} from '../types';

export default class ID3v2TagContents {
    _size: number;
    _major: number;
    _revision: number;
    _contents: ByteArray;
    _frames: { [key: string]: ByteArray[] };
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
