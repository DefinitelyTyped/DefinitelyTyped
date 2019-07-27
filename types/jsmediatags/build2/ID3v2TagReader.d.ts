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
import MediaTagReader from './MediaTagReader';
import MediaFileReader from './MediaFileReader';

export default class ID3v2TagReader extends MediaTagReader {
    static getTagIdentifierByteRange(): ByteRange;

    static canReadTagFormat(tagIdentifier: Array<number>): boolean;

    _loadData(mediaFileReader: MediaFileReader, callbacks: LoadCallbackType): void;

    _parseData(data: MediaFileReader, tags?: Array<string>): TagType;

    _getFrameData(frames: TagFrames, ids: Array<string>): any | void;

    getShortcuts(): {[key: string]: string|Array<string>};
}
