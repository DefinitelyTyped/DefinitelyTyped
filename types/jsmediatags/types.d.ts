import MediaFileReader from './build2/MediaFileReader';

export type CallbackType = {
    onSuccess: (data: any) => void,
    onError?: (error: any) => void
};

export type LoadCallbackType = {
    onSuccess: () => void,
    onError?: (error: any) => void
};

export type CharsetType =
    "utf-16" |
    "utf-16le" |
    "utf-16be" |
    "utf-8" |
    "iso-8859-1";

export type ByteRange = {
    offset: number, // negative offset is relative to the end of the file.
    length: number
};
type TypedArray = Int8Array | Uint8Array | Int16Array | Uint16Array | Int32Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array;

export type DataType = Array<number> | TypedArray | string;

export type ChunkType = {
    offset: number,
    data: DataType
};

export type Byte = number;

export type ByteArray = Array<Byte>;

export type FrameReaderSignature = (
    offset: number,
    length: number,
    data: MediaFileReader,
    flags?: any,
    id3header?: TagHeader
) => any;

export type TagFrames = { [key: string]: TagFrame };

export type TagFrame = {
    id: string,
    size: number,
    description: string,
    data: any
};

export type TagFrameHeader = {
    id: string,
    size: number,
    headerSize: number,
    flags?: TagFrameFlags
};

export type TagFrameFlags = {
    message: {
        tag_alter_preservation: boolean,
        file_alter_preservation: boolean,
        read_only: boolean
    },
    format: {
        grouping_identity: boolean,
        compression: boolean,
        encryption: boolean,
        unsynchronisation: boolean,
        data_length_indicator: boolean
    }
};

export type TagHeader = {
    version: string,
    major: number,
    revision: number,
    flags: TagHeaderFlags,
    size: number
};

export type TagHeaderFlags = {
    unsynchronisation: boolean,
    extended_header: boolean,
    experimental_indicator: boolean,
    footer_present: boolean
};

export type TagType = {
    type: string,
    tags: { [key: string]: FrameType | ShortcutType }
};

export type FrameType = {
    id: string,
    description: string,
    data: any
};

type ShortcutType = any;

type ShortcutNameType =
    "title" |
    "artist" |
    "album" |
    "year" |
    "comment" |
    "track" |
    "genre" |
    "picture" |
    "lyrics";

