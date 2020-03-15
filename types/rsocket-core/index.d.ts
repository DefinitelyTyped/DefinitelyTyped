// Type definitions for rsocket-core 0.0
// Project: https://github.com/rsocket/rsocket-js/
// Definitions by: Adrian Hope-Bailie <https://github.com/adrianhopebailie>
//                 Oleh Dokuka <https://github.com/olegdokuka>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

export { ClientConfig } from "./RSocketClient";
export { ServerConfig, TransportServer } from "./RSocketServer";
export { Encodable } from "rsocket-types";
export { Encoder, Encoders } from "./RSocketEncoding";
export { Serializer, PayloadSerializers } from "./RSocketSerialization";
import RSocketClient from "./RSocketClient";
export { RSocketClient };
import RSocketServer from "./RSocketServer";
export { RSocketServer };
import RSocketResumableTransport from "./RSocketResumableTransport";
export { RSocketResumableTransport };
import WellKnownMimeType from './WellKnownMimeType';
export { WellKnownMimeType };
export {
    CONNECTION_STREAM_ID,
    ERROR_CODES,
    ERROR_EXPLANATIONS,
    FLAGS_MASK,
    FLAGS,
    FRAME_TYPE_OFFFSET,
    FRAME_TYPES,
    MAX_CODE,
    MAX_KEEPALIVE,
    MAX_LIFETIME,
    MAX_MIME_LENGTH,
    MAX_RESUME_LENGTH,
    MAX_STREAM_ID,
    MAX_VERSION,
    ErrorSource,
    createErrorFromFrame,
    getErrorCodeExplanation,
    isComplete,
    isIgnore,
    isLease,
    isMetadata,
    isNext,
    isRespond,
    isResumeEnable,
    printFrame
} from "./RSocketFrame";
export {
    deserializeFrame,
    deserializeFrameWithLength,
    deserializeFrames,
    serializeFrame,
    serializeFrameWithLength
} from "./RSocketBinaryFraming";
export {
    byteLength,
    createBuffer,
    readUInt24BE,
    toBuffer,
    writeUInt24BE
} from "./RSocketBufferUtils";
export {
    BufferEncoders,
    BufferEncoder,
    Utf8Encoders,
    UTF8Encoder
} from "./RSocketEncoding";
export {
    IdentitySerializer,
    IdentitySerializers,
    JsonSerializer,
    JsonSerializers
} from "./RSocketSerialization";
export { LeaseStats, Leases, Lease } from './RSocketLease';
export {
    UNPARSEABLE_MIME_TYPE,
    UNKNOWN_RESERVED_MIME_TYPE,
    APPLICATION_AVRO,
    APPLICATION_CBOR,
    APPLICATION_GRAPHQL,
    APPLICATION_GZIP,
    APPLICATION_JAVASCRIPT,
    APPLICATION_JSON,
    APPLICATION_OCTET_STREAM,
    APPLICATION_PDF,
    APPLICATION_THRIFT,
    APPLICATION_PROTOBUF,
    APPLICATION_XML,
    APPLICATION_ZIP,
    AUDIO_AAC,
    AUDIO_MP3,
    AUDIO_MP4,
    AUDIO_MPEG3,
    AUDIO_MPEG,
    AUDIO_OGG,
    AUDIO_OPUS,
    AUDIO_VORBIS,
    IMAGE_BMP,
    IMAGE_GIG,
    IMAGE_HEIC_SEQUENCE,
    IMAGE_HEIC,
    IMAGE_HEIF_SEQUENCE,
    IMAGE_HEIF,
    IMAGE_JPEG,
    IMAGE_PNG,
    IMAGE_TIFF,
    MULTIPART_MIXED,
    TEXT_CSS,
    TEXT_CSV,
    TEXT_HTML,
    TEXT_PLAIN,
    TEXT_XML,
    VIDEO_H264,
    VIDEO_H265,
    VIDEO_VP8,
    APPLICATION_HESSIAN,
    APPLICATION_JAVA_OBJECT,
    APPLICATION_CLOUDEVENTS_JSON,
    MESSAGE_RSOCKET_TRACING_ZIPKIN,
    MESSAGE_RSOCKET_ROUTING,
    MESSAGE_RSOCKET_COMPOSITE_METADATA,
} from './WellKnownMimeType';
export {
    Entry,
    CompositeMetadata,
    ReservedMimeTypeEntry,
    WellKnownMimeTypeEntry,
    ExplicitMimeTimeEntry,
    encodeAndAddCustomMetadata,
    encodeAndAddWellKnownMetadata,
} from './CompositeMetadata';
