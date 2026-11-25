/// <reference types="node" />
import { IncomingMessage } from "http";

export = forwarded;

declare function forwarded(req: IncomingMessage | forwarded.RequestLike): string[];

declare namespace forwarded {
    interface RequestLike {
        headers: Record<string, string | string[] | undefined>;
        connection?: { remoteAddress?: string | undefined } | undefined;
        socket?: { remoteAddress?: string | undefined } | undefined;
    }
}
