/// <reference types="node" />

import { PeerCertificate } from "tls";

/**
 * @async
 */
export function get(
    url: string,
    timeout?: number,
    port?: number,
    protocol?: string,
    detailed?: boolean,
): Promise<PeerCertificate & { pemEncoded: string }>;
