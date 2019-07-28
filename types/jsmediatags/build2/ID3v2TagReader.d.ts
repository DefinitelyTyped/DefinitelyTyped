import {
    CallbackType,
    LoadCallbackType,
    TagFrames,
    TagHeader,
    TagFrameHeader,
    TagFrameFlags,
    CharsetType,
    ByteRange,
    TagType,
} from '../types';
import MediaTagReader from 'jsmediatags/build2/MediaTagReader';
import MediaFileReader from 'jsmediatags/build2/MediaFileReader';

export default class ID3v2TagReader extends MediaTagReader {
    static getTagIdentifierByteRange(): ByteRange;

    static canReadTagFormat(tagIdentifier: number[]): boolean;

    _loadData(mediaFileReader: MediaFileReader, callbacks: LoadCallbackType): void;

    _parseData(data: MediaFileReader, tags?: string[]): TagType;

    _getFrameData(frames: TagFrames, ids: string[]): any;

    getShortcuts(): {[key: string]: string|string[]};
}
