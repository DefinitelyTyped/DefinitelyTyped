/// <reference types="node" />
import { IncomingMessage, OutgoingMessage } from "http";

export = onFinished;

declare function onFinished<T extends IncomingMessage | OutgoingMessage>(
    msg: T,
    listener: (err: Error | null, msg: T) => void,
): T;

declare namespace onFinished {
    function isFinished(msg: IncomingMessage | OutgoingMessage): boolean;
}
