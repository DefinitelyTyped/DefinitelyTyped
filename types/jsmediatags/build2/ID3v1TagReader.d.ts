import { ByteRange, LoadCallbackType, TagType } from "../types";
import MediaFileReader from "./MediaFileReader";
import MediaTagReader from "./MediaTagReader";

export default class ID3v1TagReader extends MediaTagReader {
    static getTagIdentifierByteRange(): ByteRange;

    static canReadTagFormat(tagIdentifier: number[]): boolean;

    _loadData(mediaFileReader: MediaFileReader, callbacks: LoadCallbackType): void;

    _parseData(data: MediaFileReader, tags?: string[]): TagType;
}
