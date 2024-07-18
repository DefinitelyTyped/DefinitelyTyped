/// <reference types="node" />

/**
 * Declares Parity POE message structure
 * Full reference can be found here https://github.com/paritytrading/parity/blob/master/libraries/net/doc/POE.md
 */
export interface POEMessage {
    messageType: string;
    orderId?: string | undefined;
    timestamp?: number | undefined;
    canceledQuantity?: number | undefined;
    reason?: string | undefined;
    liquidityFlag?: string | undefined;
    matchNumber?: number | undefined;
    side?: string | undefined;
    instrument?: string | undefined;
    quantity?: number | undefined;
    price?: number | undefined;
}

export function formatInbound(message: POEMessage): Buffer;

export function parseInbound(buffer: Buffer): POEMessage;

export function formatOutbound(message: POEMessage): Buffer;

export function parseOutbound(buffer: Buffer): POEMessage;
