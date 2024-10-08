/// <reference types="node" />
import type { IncomingMessage } from "node:http";

export function detect({
    req,
    config,
}: {
    req: IncomingMessage;
    config: {
        cloudflare?: boolean;
    };
}): string | null;
