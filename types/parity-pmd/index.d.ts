// Type definitions for parity-pmd 0.4
// Project: https://github.com/paritytrading/node-parity-pmd#readme
// Definitions by: Leonard Vujanić <https://github.com/leovujanic>
//                 Vilim Stubičan <https://github.com/jewbre>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

/// <reference types="node" />

/**
 * Declares Parity PMD message structure
 * Full reference can be found here https://github.com/paritytrading/parity/blob/master/libraries/net/doc/PMD.md
 */
export interface PMDMessage {
    messageType: string;
    version?: string;
    timestamp?: number;
    orderNumber?: number;
    side?: string;
    instrument?: string;
    quantity?: number;
    price?: number;
}

export function format(message: PMDMessage): Buffer;

export function parse(buffer: Buffer): PMDMessage;
