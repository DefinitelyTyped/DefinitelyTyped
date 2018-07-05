// Type definitions for Parity POE 0.3
// Project: https://github.com/paritytrading/node-parity-poe
// Definitions by: Leo Vujanić <https://github.com/leovujanic>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

/// <reference types="node" />

/**
 * Declares Parity POE message structure
 * Full reference can be found here https://github.com/paritytrading/parity/blob/master/libraries/net/doc/POE.md
 */
export interface POEMessage {
    messageType: string;
    orderId?: string;
    timestamp?: number;
    canceledQuantity?: number;
    reason?: string;
    liquidityFlag?: string;
    matchNumber?: number;
    side?: string;
    instrument?: string;
    quantity?: number;
    price?: number;
}

export function formatInbound(message: POEMessage): Buffer;

export function parseInbound(buffer: Buffer): POEMessage;

export function formatOutbound(message: POEMessage): Buffer;

export function parseOutbound(buffer: Buffer): POEMessage;
