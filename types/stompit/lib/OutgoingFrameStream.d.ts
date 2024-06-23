import { Duplex, Writable, WritableOptions } from "stream";

declare class OutgoingFrameStream {
    constructor(destination: Duplex);

    setVersion(versionId: string): boolean;

    frame(command: string, headers?: any, streamOptions?: WritableOptions): Writable;

    heartbeat(): void;

    finish(): void;
    hasFinished(): boolean;
}

export = OutgoingFrameStream;
