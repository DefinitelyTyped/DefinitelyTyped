import { ErrorFrame, Frame } from 'rsocket-types';
export declare const CONNECTION_STREAM_ID = 0;
export declare const FRAME_TYPES: {
    CANCEL: number;
    ERROR: number;
    EXT: number;
    KEEPALIVE: number;
    LEASE: number;
    METADATA_PUSH: number;
    PAYLOAD: number;
    REQUEST_CHANNEL: number;
    REQUEST_FNF: number;
    REQUEST_N: number;
    REQUEST_RESPONSE: number;
    REQUEST_STREAM: number;
    RESERVED: number;
    RESUME: number;
    RESUME_OK: number;
    SETUP: number;
};
export declare const FRAME_TYPE_NAMES: {};
export declare const FLAGS: {
    COMPLETE: number;
    FOLLOWS: number;
    IGNORE: number;
    LEASE: number;
    METADATA: number;
    NEXT: number;
    RESPOND: number;
    RESUME_ENABLE: number;
};
export declare const ERROR_CODES: {
    APPLICATION_ERROR: number;
    CANCELED: number;
    CONNECTION_CLOSE: number;
    CONNECTION_ERROR: number;
    INVALID: number;
    INVALID_SETUP: number;
    REJECTED: number;
    REJECTED_RESUME: number;
    REJECTED_SETUP: number;
    RESERVED: number;
    RESERVED_EXTENSION: number;
    UNSUPPORTED_SETUP: number;
};
export declare const ERROR_EXPLANATIONS: {};
export declare const FLAGS_MASK = 1023;
export declare const FRAME_TYPE_OFFFSET = 10;
export declare const MAX_CODE = 2147483647;
export declare const MAX_KEEPALIVE = 2147483647;
export declare const MAX_LIFETIME = 2147483647;
export declare const MAX_METADATA_LENGTH = 16777215;
export declare const MAX_MIME_LENGTH = 255;
export declare const MAX_REQUEST_COUNT = 2147483647;
export declare const MAX_REQUEST_N = 2147483647;
export declare const MAX_RESUME_LENGTH = 65535;
export declare const MAX_STREAM_ID = 2147483647;
export declare const MAX_TTL = 2147483647;
export declare const MAX_VERSION = 65535;
/**
 * Returns true iff the flags have the IGNORE bit set.
 */
export declare function isIgnore(flags: number): boolean;
/**
 * Returns true iff the flags have the METADATA bit set.
 */
export declare function isMetadata(flags: number): boolean;
/**
 * Returns true iff the flags have the COMPLETE bit set.
 */
export declare function isComplete(flags: number): boolean;
/**
 * Returns true iff the flags have the NEXT bit set.
 */
export declare function isNext(flags: number): boolean;
/**
 * Returns true iff the flags have the RESPOND bit set.
 */
export declare function isRespond(flags: number): boolean;
/**
 * Returns true iff the flags have the RESUME_ENABLE bit set.
 */
export declare function isResumeEnable(flags: number): boolean;
/**
 * Returns true iff the flags have the LEASE bit set.
 */
export declare function isLease(flags: number): boolean;
/**
 * Returns true iff the frame type is counted toward the implied
 * client/server position used for the resumption protocol.
 */
export declare function isResumePositionFrameType(type: number): boolean;
export declare function getFrameTypeName(type: number): string;
/**
 * Constructs an Error object given the contents of an error frame. The
 * `source` property contains metadata about the error for use in introspecting
 * the error at runtime:
 * - `error.source.code: number`: the error code returned by the server.
 * - `error.source.explanation: string`: human-readable explanation of the code
 *   (this value is not standardized and may change).
 * - `error.source.message: string`: the error string returned by the server.
 */
export declare function createErrorFromFrame(frame: ErrorFrame): Error;
/**
 * Given a RSocket error code, returns a human-readable explanation of that
 * code, following the names used in the protocol specification.
 */
export declare function getErrorCodeExplanation(code: number): string;
/**
 * Pretty-prints the frame for debugging purposes, with types, flags, and
 * error codes annotated with descriptive names.
 */
export declare function printFrame(frame: Frame): string;
