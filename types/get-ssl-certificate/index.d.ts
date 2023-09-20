// Type definitions for get-ssl-certificate 2.3
// Project: https://github.com/johncrisostomo/get-ssl-certificate#readme
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
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
