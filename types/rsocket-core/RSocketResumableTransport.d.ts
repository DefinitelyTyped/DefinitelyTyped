import { ConnectionStatus, DuplexConnection, Encodable, Frame } from 'rsocket-types';

import { Flowable } from 'rsocket-flowable';
import { Encoders } from './RSocketEncoding';

export interface Options {
    bufferSize: number;
    resumeToken: Encodable;
    sessionDurationSeconds: number;
}

/**
 * NOTE: This implementation conforms to an upcoming version of the RSocket protocol
 *       and will not work with version 1.0 servers.
 *
 * An implementation of the DuplexConnection interface that supports automatic
 * resumption per the RSocket protocol.
 *
 * # Example
 *
 * Create a client instance:
 * ```
 * const client = new RSocketClient({
 *   ...,
 *   transport: new RSocketResumableTransport(
 *     () => new RSocketWebSocketClient(...), // provider for low-level transport instances
 *     {
 *       bufferSize: 10, // max number of sent & pending frames to buffer before failing
 *       resumeToken: 'abc123', // string to uniquely identify the session across connections
 *     }
 *   ),
 * })
 *
 * Open the connection. After this if the connection dies it will be auto-resumed:
 * ```
 * client.connect().subscribe(...);
 * ```
 *
 * Optionally, subscribe to the status of the connection:
 * ```
 * client.connectionStatus().subscribe(...);
 * ```
 *
 * # Implementation Notes
 *
 * This transport maintains:
 * - _currentConnection: a current low-level transport, which is null when not
 *   connected
 * - _sentFrames: a buffer of frames written to a low-level transport (which
 *   may or may not have been received by the server)
 * - _pendingFrames: a buffer of frames not yet written to the low-level
 *   connection, because they were sent while not connected.
 *
 * The initial connection is simple: connect using the low-level transport and
 * flush any _pendingFrames (write them and add them to _sentFrames).
 *
 * Thereafter if the low-level transport drops, this transport attempts resumption.
 * It obtains a fresh low-level transport from the given transport `source`
 * and attempts to connect. Once connected, it sends a RESUME frame and waits.
 * If RESUME_OK is received, _sentFrames and _pendingFrames are adjusted such
 * that:
 * - any frames the server has received are removed from _sentFrames
 * - the remaining frames are merged (in correct order) into _pendingFrames
 *
 * Then the connection proceeds as above, where all pending frames are flushed.
 * If anything other than RESUME_OK is received, resumption is considered to
 * have failed and the connection is set to the ERROR status.
 */
export default class RSocketResumableTransport implements DuplexConnection {
                   constructor(source: () => DuplexConnection, options: Options, encoders?: Encoders<any>);
                   close(): void;
                   connect(): void;
                   connectionStatus(): Flowable<ConnectionStatus>;
                   receive(): Flowable<Frame>;
                   sendOne(frame: Frame): void;
                   send(frames: Flowable<Frame>): void;
               }
