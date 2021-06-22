import {
    LoadCallbackType,
    ByteRange,
    TagType
} from '../types';
import MediaFileReader from './MediaFileReader';
import MediaTagReader from './MediaTagReader';

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
