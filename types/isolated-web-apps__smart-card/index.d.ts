/**
 * Generated from:
 * - navigator_smart_card.idl
 * - smart_card_connection.idl
 * - smart_card_connection_status.idl
 * - smart_card_context.idl
 * - smart_card_error.idl
 * - smart_card_resource_manager.idl
 *
 * @see https://wicg.github.io/web-smart-card/
 */

export interface SmartCardResourceManager {
    establishContext(): Promise<SmartCardContext>;
}

export type SmartCardResponseCode =
    | "no-service"
    | "no-smartcard"
    | "not-ready"
    | "not-transacted"
    | "proto-mismatch"
    | "reader-unavailable"
    | "removed-card"
    | "reset-card"
    | "server-too-busy"
    | "sharing-violation"
    | "system-cancelled"
    | "unknown-reader"
    | "unpowered-card"
    | "unresponsive-card"
    | "unsupported-card"
    | "unsupported-feature";

export interface SmartCardErrorOptions {
    responseCode: SmartCardResponseCode;
}

export class SmartCardError extends DOMException {
    constructor(message: string, options: SmartCardErrorOptions);
    readonly responseCode: SmartCardResponseCode;
}

export interface SmartCardReaderStateIn {
    readerName: string;
    currentState: SmartCardReaderStateFlagsIn;
    currentCount?: number;
}

export interface SmartCardReaderStateOut {
    readerName: string;
    eventState: SmartCardReaderStateFlagsOut;
    eventCount: number;
    answerToReset: ArrayBuffer;
}

export interface SmartCardReaderStateFlags {
    /** @default false */
    ignore?: boolean;
    /** @default false */
    unavailable?: boolean;
    /** @default false */
    empty?: boolean;
    /** @default false */
    present?: boolean;
    /** @default false */
    exclusive?: boolean;
    /** @default false */
    inuse?: boolean;
    /** @default false */
    mute?: boolean;
    /** @default false */
    unpowered?: boolean;
}

export interface SmartCardReaderStateFlagsIn extends SmartCardReaderStateFlags {
    /** @default false */
    unaware?: boolean;
}

export interface SmartCardReaderStateFlagsOut extends SmartCardReaderStateFlags {
    /** @default false */
    changed?: boolean;
    /** @default false */
    unknown?: boolean;
}

export type SmartCardProtocol =
    | "raw"
    | "t0"
    | "t1";

export interface SmartCardConnectResult {
    connection: SmartCardConnection;
    activeProtocol?: SmartCardProtocol;
}

export type SmartCardAccessMode =
    | "shared"
    | "exclusive"
    | "direct";

export interface SmartCardGetStatusChangeOptions {
    timeout?: DOMHighResTimeStamp;
    signal?: AbortSignal;
}

export interface SmartCardConnectOptions {
    preferredProtocols?: SmartCardProtocol[];
}

export interface SmartCardContext {
    listReaders(): Promise<string[]>;
    getStatusChange(
        readerStates: SmartCardReaderStateIn[],
        options?: SmartCardGetStatusChangeOptions,
    ): Promise<SmartCardReaderStateOut[]>;
    connect(
        readerName: string,
        accessMode: SmartCardAccessMode,
        options?: SmartCardConnectOptions,
    ): Promise<SmartCardConnectResult>;
}

export type SmartCardConnectionState =
    | "absent"
    | "present"
    | "swallowed"
    | "powered"
    | "negotiable"
    | "t0"
    | "t1"
    | "raw";

export interface SmartCardConnectionStatus {
    readerName: string;
    state: SmartCardConnectionState;
    answerToReset?: ArrayBuffer;
}

export type SmartCardDisposition =
    | "leave"
    | "reset"
    | "unpower"
    | "eject";

export interface SmartCardTransactionOptions {
    signal?: AbortSignal;
}

export interface SmartCardTransmitOptions {
    protocol?: SmartCardProtocol;
}

export type SmartCardTransactionCallback = () => Promise<SmartCardDisposition | null>;

export interface SmartCardConnection {
    disconnect(disposition?: SmartCardDisposition): Promise<undefined>;
    transmit(sendBuffer: BufferSource, options?: SmartCardTransmitOptions): Promise<ArrayBuffer>;
    status(): Promise<SmartCardConnectionStatus>;
    control(controlCode: number, data: BufferSource): Promise<ArrayBuffer>;
    getAttribute(tag: number): Promise<ArrayBuffer>;
    setAttribute(tag: number, value: BufferSource): Promise<undefined>;
    startTransaction(
        transaction: SmartCardTransactionCallback,
        options?: SmartCardTransactionOptions,
    ): Promise<undefined>;
}

declare global {
    interface Navigator {
        readonly smartCard: SmartCardResourceManager;
    }
}
