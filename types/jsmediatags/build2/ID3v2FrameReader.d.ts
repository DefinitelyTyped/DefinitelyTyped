import { CharsetType, FrameReaderSignature, TagFrameFlags, TagFrameHeader, TagFrames, TagHeader } from "../types";
import MediaFileReader from "./MediaFileReader";

interface ID3v2FrameReader {
    getFrameReaderFunction(frameId: string): FrameReaderSignature | null;

    readFrames(
        offset: number,
        end: number,
        data: MediaFileReader,
        id3header: TagHeader,
        tags?: string[],
    ): TagFrames;

    _getFrameHeaderSize(id3header: TagHeader): number;

    _readFrameHeader(
        data: MediaFileReader,
        offset: number,
        id3header: TagHeader,
    ): TagFrameHeader;

    _readFrameFlags(data: MediaFileReader, offset: number): TagFrameFlags;

    _getFrameDescription(frameId: string): string;

    getUnsyncFileReader(
        data: MediaFileReader,
        offset: number,
        size: number,
    ): MediaFileReader;
}

declare const ID3v2FrameReader: ID3v2FrameReader;
export default ID3v2FrameReader;
