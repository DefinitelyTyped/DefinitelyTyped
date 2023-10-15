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
    version?: number | undefined;
    timestamp?: number | undefined;
    username?: string | undefined;
    orderNumber?: string | undefined;
    side?: string | undefined;
    instrument?: string | undefined;
    quantity?: number | undefined;
    price?: number | undefined;
    canceledQuantity?: number | undefined;
    matchNumber?: number | undefined;
    restingOrderNumber?: number | undefined;
    incomingOrderNumber?: number | undefined;
}

export function format(message: PMRMessage): Buffer;

export function parse(buffer: Buffer): PMRMessage;
