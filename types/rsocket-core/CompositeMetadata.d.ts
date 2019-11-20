import WellKnownMimeType from './WellKnownMimeType';

export class CompositeMetadata {
    constructor(buffer: Buffer);

    [Symbol.iterator](): Iterator<Entry>;
}

/**
 * Encode a new sub-metadata information into a composite metadata {@link CompositeByteBuf
 * buffer}, without checking if the {@link String} can be matched with a well known compressable
 * mime type. Prefer using this method and {@link #encodeAndAddMetadata(CompositeByteBuf,
 * ByteBufAllocator, WellKnownMimeType, ByteBuf)} if you know in advance whether or not the mime
 * is well known. Otherwise use {@link #encodeAndAddMetadataWithCompression(CompositeByteBuf,
 * ByteBufAllocator, String, ByteBuf)}
 *
 * @param compositeMetaData the buffer that will hold all composite metadata information.
 * @param allocator the {@link ByteBufAllocator} to use to create intermediate buffers as needed.
 * @param customMimeType the custom mime type to encode.
 * @param metadata the metadata value to encode.
 */
// see #encodeMetadataHeader(ByteBufAllocator, String, int)
export function encodeAndAddCustomMetadata(compositeMetaData: Buffer, customMimeType: string, metadata: Buffer): Buffer;

/**
 * Encode a new sub-metadata information into a composite metadata {@link CompositeByteBuf
 * buffer}.
 *
 * @param compositeMetaData the buffer that will hold all composite metadata information.
 * @param allocator the {@link ByteBufAllocator} to use to create intermediate buffers as needed.
 * @param knownMimeType the {@link WellKnownMimeType} to encode.
 * @param metadata the metadata value to encode.
 */
// see #encodeMetadataHeader(ByteBufAllocator, byte, int)
export function encodeAndAddWellKnownMetadata(
    compositeMetaData: Buffer,
    knownMimeType: WellKnownMimeType | number,
    metadata: Buffer
): Buffer;

/**
 * Decode the next metadata entry (a mime header + content pair of {@link ByteBuf}) from a {@link
 * ByteBuf} that contains at least enough bytes for one more such entry. These buffers are
 * actually slices of the full metadata buffer, and this method doesn't move the full metadata
 * buffer's {@link ByteBuf#readerIndex()}. As such, it requires the user to provide an {@code
 * index} to read from. The next index is computed by calling {@link #computeNextEntryIndex(int,
 * ByteBuf, ByteBuf)}. Size of the first buffer (the "header buffer") drives which decoding method
 * should be further applied to it.
 *
 * <p>The header buffer is either:
 *
 * <ul>
 *   <li>made up of a single byte: this represents an encoded mime id, which can be further
 *       decoded using {@link #decodeMimeIdFromMimeBuffer(ByteBuf)}
 *   <li>made up of 2 or more bytes: this represents an encoded mime String + its length, which
 *       can be further decoded using {@link #decodeMimeTypeFromMimeBuffer(ByteBuf)}. Note the
 *       encoded length, in the first byte, is skipped by this decoding method because the
 *       remaining length of the buffer is that of the mime string.
 * </ul>
 *
 * @param compositeMetadata the source {@link ByteBuf} that originally contains one or more
 *     metadata entries
 * @param entryIndex the {@link ByteBuf#readerIndex()} to start decoding from. original reader
 *     index is kept on the source buffer
 * @param retainSlices should produced metadata entry buffers {@link ByteBuf#slice() slices} be
 *     {@link ByteBuf#retainedSlice() retained}?
 * @return a {@link ByteBuf} array of length 2 containing the mime header buffer
 *     <strong>slice</strong> and the content buffer <strong>slice</strong>, or one of the
 *     zero-length error constant arrays
 */
export function decodeMimeAndContentBuffersSlices(compositeMetadata: Buffer, entryIndex: number): Buffer[];

/**
 * Decode a {@link CharSequence} custome mime type from a {@link ByteBuf}, assuming said buffer
 * properly contains such a mime type.
 *
 * <p>The buffer must at least have two readable bytes, which distinguishes it from the {@link
 * #decodeMimeIdFromMimeBuffer(ByteBuf) compressed id} case. The first byte is a size and the
 * remaining bytes must correspond to the {@link CharSequence}, encoded fully in US_ASCII. As a
 * result, the first byte can simply be skipped, and the remaining of the buffer be decoded to the
 * mime type.
 *
 * <p>If the mime header buffer is less than 2 bytes long, returns {@code null}.
 *
 * @param flyweightMimeBuffer the mime header {@link ByteBuf} that contains length + custom mime
 *     type
 * @return the decoded custom mime type, as a {@link CharSequence}, or null if the input is
 *     invalid
 * @see #decodeMimeIdFromMimeBuffer(ByteBuf)
 */
export function decodeMimeTypeFromMimeBuffer(flyweightMimeBuffer: Buffer): string;

export function encodeCustomMetadataHeader(customMime: string, metadataLength: number): Buffer;

/**
 * Encode a {@link WellKnownMimeType well known mime type} and a metadata value length into a
 * newly allocated {@link ByteBuf}.
 *
 * <p>This compact representation encodes the mime type via its ID on a single byte, and the
 * unsigned value length on 3 additional bytes.
 *
 * @param allocator the {@link ByteBufAllocator} to use to create the buffer.
 * @param mimeType a byte identifier of a {@link WellKnownMimeType} to encode.
 * @param metadataLength the metadata length to append to the buffer as an unsigned 24 bits
 *     integer.
 * @return the encoded mime and metadata length information
 */
export function encodeWellKnownMetadataHeader(mimeType: number, metadataLength: number): Buffer;

export interface Entry {
    /**
     * Returns the un-decoded content of the {@link Entry}.
     *
     * @return the un-decoded content of the {@link Entry}
     */
    readonly content: Buffer;

    /**
     * Returns the MIME type of the entry, if it can be decoded.
     *
     * @return the MIME type of the entry, if it can be decoded, otherwise {@code null}.
     */
    readonly mimeType: string | undefined;
}

export class ExplicitMimeTimeEntry implements Entry {
    constructor(content: Buffer, type: string);

    readonly content: Buffer;

    readonly mimeType: string;
}

export class ReservedMimeTypeEntry implements Entry {
    constructor(content: Buffer, type: number);

    readonly content: Buffer;

    /**
     * {@inheritDoc} Since this entry represents a compressed id that couldn't be decoded, this is
     * always {@code null}.
     */
    readonly mimeType: undefined;

    /**
     * Returns the reserved, but unknown {@link WellKnownMimeType} for this entry. Range is 0-127
     * (inclusive).
     *
     * @return the reserved, but unknown {@link WellKnownMimeType} for this entry
     */
    readonly type: number;
}

export class WellKnownMimeTypeEntry implements Entry {
    constructor(content: Buffer, type: WellKnownMimeType);

    readonly content: Buffer;

    readonly mimeType: string;

    /**
     * Returns the {@link WellKnownMimeType} for this entry.
     *
     * @return the {@link WellKnownMimeType} for this entry
     */
    readonly type: WellKnownMimeType;
}
