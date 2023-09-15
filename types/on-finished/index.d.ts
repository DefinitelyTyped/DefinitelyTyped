// Type definitions for on-finished 2.3
// Project: https://github.com/jshttp/on-finished
// Definitions by: Honza Dvorsky <https://github.com/czechboy0>
//                 BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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
