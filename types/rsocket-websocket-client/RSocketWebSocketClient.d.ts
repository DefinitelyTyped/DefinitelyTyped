import { ConnectionStatus, DuplexConnection, Frame } from "rsocket-types";

import { Encoders } from "rsocket-core";
import { Flowable } from "rsocket-flowable";

export interface ClientOptions {
    url: string;
    wsCreator?: ((url: string) => WebSocket) | undefined;
    debug?: boolean | undefined;
    lengthPrefixedFrames?: boolean | undefined;
}

/**
 * A WebSocket transport client for use in browser environments.
 */
export default class RSocketWebSocketClient implements DuplexConnection {
    constructor(options: ClientOptions, encoders?: Encoders<any>);
    close(): void;
    connect(): void;
    connectionStatus(): Flowable<ConnectionStatus>;
    receive(): Flowable<Frame>;
    sendOne(frame: Frame): void;
    send(frames: Flowable<Frame>): void;
}
