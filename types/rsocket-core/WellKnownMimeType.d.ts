export default class WellKnownMimeType {
    constructor(str: string, identifier: number);

    /**
     * Find the {@link WellKnownMimeType} for the given identifier (as an {@code int}). Valid
     * identifiers are defined to be integers between 0 and 127, inclusive. Identifiers outside of
     * this range will produce the {@link #UNPARSEABLE_MIME_TYPE}. Additionally, some identifiers in
     * that range are still only reserved and don't have a type associated yet: this method returns
     * the {@link #UNKNOWN_RESERVED_MIME_TYPE} when passing such an identifier, which lets call sites
     * potentially detect this and keep the original representation when transmitting the associated
     * metadata buffer.
     *
     * @param id the looked up identifier
     * @return the {@link WellKnownMimeType}, or {@link #UNKNOWN_RESERVED_MIME_TYPE} if the id is out
     *     of the specification's range, or {@link #UNKNOWN_RESERVED_MIME_TYPE} if the id is one that
     *     is merely reserved but unknown to this implementation.
     */
    static fromIdentifier(id: number): WellKnownMimeType;

    /**
     * Find the {@link WellKnownMimeType} for the given {@link String} representation. If the
     * representation is {@code null} or doesn't match a {@link WellKnownMimeType}, the {@link
     * #UNPARSEABLE_MIME_TYPE} is returned.
     *
     * @param mimeType the looked up mime type
     * @return the matching {@link WellKnownMimeType}, or {@link #UNPARSEABLE_MIME_TYPE} if none matches
     */
    static fromString(mimeType: string): WellKnownMimeType;

    /** @return the byte identifier of the mime type, guaranteed to be positive or zero. */
    readonly identifier: number;

    /**
     * @return the mime type represented as a {@link String}, which is made of US_ASCII compatible
     *     characters only
     */
    readonly string: string;

    /** @see #getString() */
    toString(): string;
}

export const UNPARSEABLE_MIME_TYPE: WellKnownMimeType;
export const UNKNOWN_RESERVED_MIME_TYPE: WellKnownMimeType;

export const APPLICATION_AVRO: WellKnownMimeType;
export const APPLICATION_CBOR: WellKnownMimeType;
export const APPLICATION_GRAPHQL: WellKnownMimeType;
export const APPLICATION_GZIP: WellKnownMimeType;
export const APPLICATION_JAVASCRIPT: WellKnownMimeType;
export const APPLICATION_JSON: WellKnownMimeType;
export const APPLICATION_OCTET_STREAM: WellKnownMimeType;
export const APPLICATION_PDF: WellKnownMimeType;
export const APPLICATION_THRIFT: WellKnownMimeType;
export const APPLICATION_PROTOBUF: WellKnownMimeType;
export const APPLICATION_XML: WellKnownMimeType;
export const APPLICATION_ZIP: WellKnownMimeType;
export const AUDIO_AAC: WellKnownMimeType;
export const AUDIO_MP3: WellKnownMimeType;
export const AUDIO_MP4: WellKnownMimeType;
export const AUDIO_MPEG3: WellKnownMimeType;
export const AUDIO_MPEG: WellKnownMimeType;
export const AUDIO_OGG: WellKnownMimeType;
export const AUDIO_OPUS: WellKnownMimeType;
export const AUDIO_VORBIS: WellKnownMimeType;
export const IMAGE_BMP: WellKnownMimeType;
export const IMAGE_GIG: WellKnownMimeType;
export const IMAGE_HEIC_SEQUENCE: WellKnownMimeType;
export const IMAGE_HEIC: WellKnownMimeType;
export const IMAGE_HEIF_SEQUENCE: WellKnownMimeType;
export const IMAGE_HEIF: WellKnownMimeType;
export const IMAGE_JPEG: WellKnownMimeType;
export const IMAGE_PNG: WellKnownMimeType;
export const IMAGE_TIFF: WellKnownMimeType;
export const MULTIPART_MIXED: WellKnownMimeType;
export const TEXT_CSS: WellKnownMimeType;
export const TEXT_CSV: WellKnownMimeType;
export const TEXT_HTML: WellKnownMimeType;
export const TEXT_PLAIN: WellKnownMimeType;
export const TEXT_XML: WellKnownMimeType;
export const VIDEO_H264: WellKnownMimeType;
export const VIDEO_H265: WellKnownMimeType;
export const VIDEO_VP8: WellKnownMimeType;
export const APPLICATION_HESSIAN: WellKnownMimeType;
export const APPLICATION_JAVA_OBJECT: WellKnownMimeType;
export const APPLICATION_CLOUDEVENTS_JSON: WellKnownMimeType;

// ... reserved for future use ...

export const MESSAGE_RSOCKET_TRACING_ZIPKIN: WellKnownMimeType;
export const MESSAGE_RSOCKET_ROUTING: WellKnownMimeType;
export const MESSAGE_RSOCKET_COMPOSITE_METADATA: WellKnownMimeType;

export const TYPES_BY_MIME_ID: WellKnownMimeType[];
export const TYPES_BY_MIME_STRING: Map<string, WellKnownMimeType>;
