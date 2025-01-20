import { ByteRange, CallbackType, LoadCallbackType, TagType } from "../types";
import MediaFileReader from "./MediaFileReader";

export default class MediaTagReader {
    _mediaFileReader: MediaFileReader;
    _tags?: string[] | undefined;

    constructor(mediaFileReader: MediaFileReader);

    static getTagIdentifierByteRange(): ByteRange;

    static canReadTagFormat(tagIdentifier: number[]): boolean;

    setTagsToRead(tags: string[]): MediaTagReader;

    read(callbacks: CallbackType): void;

    getShortcuts(): { [key: string]: string | string[] };

    _loadData(
        mediaFileReader: MediaFileReader,
        callbacks: LoadCallbackType,
    ): void;

    _parseData(mediaFileReader: MediaFileReader, tags?: string[]): TagType;

    _expandShortcutTags(tagsWithShortcuts?: string[]): string[] | null;
}
