import {
    LoadCallbackType,
    ByteRange,
    TagType
} from 'jsmediatags/types';
import MediaFileReader from 'jsmediatags/build2/MediaFileReader';
import MediaTagReader from 'jsmediatags/build2/MediaTagReader';

export default class FLACTagReader extends MediaTagReader {
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
