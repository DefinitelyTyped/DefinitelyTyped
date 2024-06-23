import MediaFileReader from "../build2/MediaFileReader";

export interface jsmediatagsError {
    type: string;
    info: string;
    xhr?: XMLHttpRequest | undefined;
}
export interface CallbackType {
    onSuccess: (data: TagType) => void;
    onError?: ((error: jsmediatagsError) => void) | undefined;
}

export interface LoadCallbackType {
    onSuccess: () => void;
    onError?: ((error: jsmediatagsError) => void) | undefined;
}

export type CharsetType =
    | "utf-16"
    | "utf-16le"
    | "utf-16be"
    | "utf-8"
    | "iso-8859-1";

export interface ByteRange {
    offset: number; // negative offset is relative to the end of the file.
    length: number;
}
export type TypedArray =
    | Int8Array
    | Uint8Array
    | Int16Array
    | Uint16Array
    | Int32Array
    | Uint32Array
    | Uint8ClampedArray
    | Float32Array
    | Float64Array;

export type DataType = number[] | TypedArray | string;

export interface ChunkType {
    offset: number;
    data: DataType;
}

export type Byte = number;

export type ByteArray = Byte[];

export type FrameReaderSignature = (
    offset: number,
    length: number,
    data: MediaFileReader,
    flags?: any,
    id3header?: TagHeader,
) => any;

export interface TagFrames {
    [key: string]: TagFrame;
}

export interface TagFrame {
    id: string;
    size: number;
    description: string;
    data: any;
}

export interface TagFrameHeader {
    id: string;
    size: number;
    headerSize: number;
    flags?: TagFrameFlags | undefined;
}

export interface TagFrameFlags {
    message: {
        tag_alter_preservation: boolean;
        file_alter_preservation: boolean;
        read_only: boolean;
    };
    format: {
        grouping_identity: boolean;
        compression: boolean;
        encryption: boolean;
        unsynchronisation: boolean;
        data_length_indicator: boolean;
    };
}

export interface TagHeader {
    version: string;
    major: number;
    revision: number;
    flags: TagHeaderFlags;
    size: number;
}

export interface TagHeaderFlags {
    unsynchronisation: boolean;
    extended_header: boolean;
    experimental_indicator: boolean;
    footer_present: boolean;
}

export interface TagType {
    type: string;
    tags: Tags;
}

export interface ShortcutTags {
    title?: string | undefined;
    artist?: string | undefined;
    album?: string | undefined;
    year?: string | undefined;
    comment?: string | undefined;
    track?: string | undefined;
    genre?: string | undefined;
    picture?: PictureType | undefined;
    lyrics?: string | undefined;
}

export interface PictureType {
    format: string;
    data: number[];
}

export type Tags = ShortcutTags & TagFrames;

export interface FrameType {
    id: string;
    description: string;
    data: any;
}

export type ShortcutNameType =
    | "title"
    | "artist"
    | "album"
    | "year"
    | "comment"
    | "track"
    | "genre"
    | "picture"
    | "lyrics";
