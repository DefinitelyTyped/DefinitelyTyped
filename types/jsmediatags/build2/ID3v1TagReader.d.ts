import {
    LoadCallbackType,
    ByteRange,
    TagType
} from 'jsmediatags/types';
import MediaFileReader from 'jsmediatags/build2/MediaFileReader';
import MediaTagReader from 'jsmediatags/build2/MediaTagReader';

export default class ID3v1TagReader extends MediaTagReader {
    static getTagIdentifierByteRange(): ByteRange;

    static canReadTagFormat(tagIdentifier: number[]): boolean;

    _loadData(mediaFileReader: MediaFileReader, callbacks: LoadCallbackType): void;

    _parseData(data: MediaFileReader, tags?: string[]): TagType;
}
