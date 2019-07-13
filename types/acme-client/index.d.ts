// Type definitions for acme-client 3.0
// Project: https://github.com/publishlab/node-acme-client
// Definitions by: Tim Düsterhus <https://github.com/TimWolla>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node" />

export * from "./client";
export { default as Client } from "./client";
export { default as axios } from "./axios";
import * as forge from "./crypto/forge";
export { forge };

export const directory: {
    letsencrypt: {
        staging: string,
        production: string,
    }
};
