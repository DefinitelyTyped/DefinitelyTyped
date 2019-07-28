import {
    CallbackType,
    LoadCallbackType,
    CharsetType,
    ByteRange,
    TagType,
    TagFrame
} from 'jsmediatags/types';
import MediaFileReader from 'jsmediatags/build2/MediaFileReader';
import MediaTagReader from 'jsmediatags/build2/MediaTagReader';

export default class MP4TagReader extends MediaTagReader {
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
