import {
    ByteRange,
    CallbackType,
    CharsetType,
    LoadCallbackType,
    TagFrameFlags,
    TagFrameHeader,
    TagFrames,
    TagHeader,
    TagType,
} from "../types";
import MediaFileReader from "./MediaFileReader";
import MediaTagReader from "./MediaTagReader";

export default class ID3v2TagReader extends MediaTagReader {
    static getTagIdentifierByteRange(): ByteRange;

    static canReadTagFormat(tagIdentifier: number[]): boolean;

    _loadData(mediaFileReader: MediaFileReader, callbacks: LoadCallbackType): void;

    _parseData(data: MediaFileReader, tags?: string[]): TagType;

    _getFrameData(frames: TagFrames, ids: string[]): any;

    getShortcuts(): { [key: string]: string | string[] };
}
