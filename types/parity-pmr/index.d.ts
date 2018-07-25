// Type definitions for parity-pmr 0.1
// Project: https://github.com/paritytrading/node-parity-pmr#readme
// Definitions by: Leo Vujanić <https://github.com/leovujanic>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

/**
 * Declares Parity PMR message structure
 * Full reference can be found here https://github.com/paritytrading/parity/blob/master/libraries/net/doc/PMR.md
 */
export interface PMRMessage {
    messageType: string;
    version?: number;
    timestamp?: number;
    username?: string;
    orderNumber?: string;
    side?: string;
    instrument?: string;
    quantity?: number;
    price?: number;
    canceledQuantity?: number;
    matchNumber?: number;
    restingOrderNumber?: number;
    incomingOrderNumber?: number;
}

export function format(message: PMRMessage): Buffer;

export function parse(buffer: Buffer): PMRMessage;
