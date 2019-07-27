import {
    CallbackType,
    LoadCallbackType,
    ByteRange,
    TagType
} from '../types';
import MediaFileReader from './MediaFileReader';

export default class MediaTagReader {
    _mediaFileReader: MediaFileReader;
    _tags?: Array<string>;

    constructor(mediaFileReader: MediaFileReader);

    static getTagIdentifierByteRange(): ByteRange;

    static canReadTagFormat(tagIdentifier: Array<number>): boolean;

    setTagsToRead(tags: Array<string>): MediaTagReader;

    read(callbacks: CallbackType): void;

    getShortcuts(): {[key: string]: (string|Array<string>)};

    _loadData(
        mediaFileReader: MediaFileReader,
        callbacks: LoadCallbackType
      ): void;

    _parseData(mediaFileReader: MediaFileReader, tags?: Array<string>): TagType;

    _expandShortcutTags(tagsWithShortcuts?: Array<string>): Array<string> | null;
}
