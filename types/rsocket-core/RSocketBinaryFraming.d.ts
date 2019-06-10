 /// <reference types="node" />

 import {
  CancelFrame,
  ErrorFrame,
  Frame,
  KeepAliveFrame,
  LeaseFrame,
  PayloadFrame,
  RequestChannelFrame,
  RequestFnfFrame,
  RequestNFrame,
  RequestResponseFrame,
  RequestStreamFrame,
  ResumeFrame,
  ResumeOkFrame,
  SetupFrame,
} from 'rsocket-types';

import { Encoders } from './RSocketEncoding';

export declare type FrameWithPayload = {
  data: any,
  flags: number,
  metadata: any
};

/**
 * Frame header is:
 * - stream id (uint32 = 4)
 * - type + flags (uint 16 = 2)
 */
export declare const FRAME_HEADER_SIZE = 6;

/**
 * Size of frame length and metadata length fields.
 */
export declare const UINT24_SIZE = 3;

/**
 * Reads a frame from a buffer that is prefixed with the frame length.
 */
export declare function deserializeFrameWithLength(buffer: Buffer, encoders?: Encoders<any> | null | undefined): Frame;

/**
 * Given a buffer that may contain zero or more length-prefixed frames followed
 * by zero or more bytes of a (partial) subsequent frame, returns an array of
 * the frames and a buffer of the leftover bytes.
 */
export declare function deserializeFrames(buffer: Buffer, encoders?: Encoders<any> | null | undefined): [Array<Frame>, Buffer];

/**
 * Writes a frame to a buffer with a length prefix.
 */
export declare function serializeFrameWithLength(frame: Frame, encoders?: Encoders<any> | null | undefined): Buffer;

/**
 * Read a frame from the buffer.
 */
export declare function deserializeFrame(buffer: Buffer, encoders?: Encoders<any> | null | undefined): Frame;

/**
 * Convert the frame to a (binary) buffer.
 */
export declare function serializeFrame(frame: Frame, encoders?: Encoders<any> | null | undefined): Buffer;

/**
 * Writes a SETUP frame into a new buffer and returns it.
 *
 * Prefix size is:
 * - version (2x uint16 = 4)
 * - keepalive (uint32 = 4)
 * - lifetime (uint32 = 4)
 * - mime lengths (2x uint8 = 2)
 */
export declare const SETUP_FIXED_SIZE = 14;
export declare const RESUME_TOKEN_LENGTH_SIZE = 2;
export declare function serializeSetupFrame(frame: SetupFrame, encoders: Encoders<any>): Buffer;

/**
 * Reads a SETUP frame from the buffer and returns it.
 */
export declare function deserializeSetupFrame(buffer: Buffer, streamId: number, flags: number, encoders: Encoders<any>): SetupFrame;

/**
 * Writes an ERROR frame into a new buffer and returns it.
 *
 * Prefix size is for the error code (uint32 = 4).
 */
export declare const ERROR_FIXED_SIZE = 4;
export declare function serializeErrorFrame(frame: ErrorFrame, encoders: Encoders<any>): Buffer;

/**
 * Reads an ERROR frame from the buffer and returns it.
 */
export declare function deserializeErrorFrame(buffer: Buffer, streamId: number, flags: number, encoders: Encoders<any>): ErrorFrame;

/**
 * Writes a KEEPALIVE frame into a new buffer and returns it.
 *
 * Prefix size is for the last received position (uint64 = 8).
 */
export declare const KEEPALIVE_FIXED_SIZE = 8;
export declare function serializeKeepAliveFrame(frame: KeepAliveFrame, encoders: Encoders<any>): Buffer;

/**
 * Reads a KEEPALIVE frame from the buffer and returns it.
 */
export declare function deserializeKeepAliveFrame(buffer: Buffer, streamId: number, flags: number, encoders: Encoders<any>): KeepAliveFrame;

/**
 * Writes a LEASE frame into a new buffer and returns it.
 *
 * Prefix size is for the ttl (uint32) and requestcount (uint32).
 */
export declare const LEASE_FIXED_SIZE = 8;
export declare function serializeLeaseFrame(frame: LeaseFrame, encoders: Encoders<any>): Buffer;

/**
 * Reads a LEASE frame from the buffer and returns it.
 */
export declare function deserializeLeaseFrame(buffer: Buffer, streamId: number, flags: number, encoders: Encoders<any>): LeaseFrame;
/**
 * Writes a REQUEST_FNF or REQUEST_RESPONSE frame to a new buffer and returns
 * it.
 *
 * Note that these frames have the same shape and only differ in their type.
 */
export declare function serializeRequestFrame(frame: RequestFnfFrame | RequestResponseFrame, encoders: Encoders<any>): Buffer;

export declare function deserializeRequestFnfFrame(buffer: Buffer, streamId: number, flags: number, encoders: Encoders<any>): RequestFnfFrame;

export declare function deserializeRequestResponseFrame(buffer: Buffer, streamId: number, flags: number, encoders: Encoders<any>): RequestResponseFrame;

/**
 * Writes a REQUEST_STREAM or REQUEST_CHANNEL frame to a new buffer and returns
 * it.
 *
 * Note that these frames have the same shape and only differ in their type.
 *
 * Prefix size is for requestN (uint32 = 4).
 */
export declare const REQUEST_MANY_HEADER = 4;
export declare function serializeRequestManyFrame(frame: RequestStreamFrame | RequestChannelFrame, encoders: Encoders<any>): Buffer;

export declare function deserializeRequestStreamFrame(buffer: Buffer, streamId: number, flags: number, encoders: Encoders<any>): RequestStreamFrame;

export declare function deserializeRequestChannelFrame(buffer: Buffer, streamId: number, flags: number, encoders: Encoders<any>): RequestChannelFrame;

/**
 * Writes a REQUEST_N frame to a new buffer and returns it.
 *
 * Prefix size is for requestN (uint32 = 4).
 */
export declare const REQUEST_N_HEADER = 4;
export declare function serializeRequestNFrame(frame: RequestNFrame, encoders: Encoders<any>): Buffer;

export declare function deserializeRequestNFrame(buffer: Buffer, streamId: number, flags: number, encoders: Encoders<any>): RequestNFrame;

/**
 * Writes a CANCEL frame to a new buffer and returns it.
 */
export declare function serializeCancelFrame(frame: CancelFrame, encoders: Encoders<any>): Buffer;

export declare function deserializeCancelFrame(buffer: Buffer, streamId: number, flags: number, encoders: Encoders<any>): CancelFrame;

/**
 * Writes a PAYLOAD frame to a new buffer and returns it.
 */
export declare function serializePayloadFrame(frame: PayloadFrame, encoders: Encoders<any>): Buffer;

export declare function deserializePayloadFrame(buffer: Buffer, streamId: number, flags: number, encoders: Encoders<any>): PayloadFrame;

/**
 * Writes a RESUME frame into a new buffer and returns it.
 *
 * Fixed size is:
 * - major version (uint16 = 2)
 * - minor version (uint16 = 2)
 * - token length (uint16 = 2)
 * - client position (uint64 = 8)
 * - server position (uint64 = 8)
 */
export declare const RESUME_FIXED_SIZE = 22;
export declare function serializeResumeFrame(frame: ResumeFrame, encoders: Encoders<any>): Buffer;

export declare function deserializeResumeFrame(buffer: Buffer, streamId: number, flags: number, encoders: Encoders<any>): ResumeFrame

/**
 * Writes a RESUME_OK frame into a new buffer and returns it.
 *
 * Fixed size is:
 * - client position (uint64 = 8)
 */
export declare const RESUME_OK_FIXED_SIZE = 8;
export declare function serializeResumeOkFrame(frame: ResumeOkFrame, encoders: Encoders<any>): Buffer

export declare function deserializeResumeOkFrame(buffer: Buffer, streamId: number, flags: number, encoders: Encoders<any>): ResumeOkFrame

/**
 * Write the header of the frame into the buffer.
 */
export declare function writeHeader(frame: Frame, buffer: Buffer): number

/**
 * Determine the length of the payload section of a frame. Only applies to
 * frame types that MAY have both metadata and data.
 */
export declare function getPayloadLength(frame: FrameWithPayload, encoders: Encoders<any>): number

/**
 * Write the payload of a frame into the given buffer. Only applies to frame
 * types that MAY have both metadata and data.
 */
export declare function writePayload(
  frame: FrameWithPayload,
  buffer: Buffer,
  encoders: Encoders<any>,
  offset: number
): void

/**
 * Read the payload from a buffer and write it into the frame. Only applies to
 * frame types that MAY have both metadata and data.
 */
export declare function readPayload(
  buffer: Buffer,
  frame: FrameWithPayload,
  encoders: Encoders<any>,
  offset: number
): void
