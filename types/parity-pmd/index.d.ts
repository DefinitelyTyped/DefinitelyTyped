// Type definitions for parity-pmd 0.4
// Project: https://github.com/paritytrading/node-parity-pmd#readme
// Definitions by: Leonard Vujanić <https://github.com/leovujanic>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

/// <reference types="node" />

/**
 * Declares Parity PMD message structure
 * Full reference can be found here https://github.com/paritytrading/parity/blob/master/libraries/net/doc/PMD.md
 */
export interface PMDMessage {
    messageType: string;
    version?: string | undefined;
    timestamp?: number | undefined;
    orderNumber?: number | undefined;
    side?: string | undefined;
    instrument?: string | undefined;
    quantity?: number | undefined;
    price?: number | undefined;
}

export function format(message: PMDMessage): Buffer;

export function parse(buffer: Buffer): PMDMessage;
