/**
 * @see https://wicg.github.io/web-smart-card
 */

interface SmartCardResourceManager {
    /**
     * Requests a PC/SC context from the platform's PC/SC stack.
     * @return A Promise that resolves to a SmartCardContext instance.
     * @throws {SecurityError} If the associated document is not allowed to use the
     *   "smart-card" permissions policy-controlled feature.
     * @throws {SmartCardError} If the platform PC/SC resource manager fails to
     *   establish a context.
     */
    establishContext(): Promise<SmartCardContext>;
}

type SmartCardResponseCode =
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

interface SmartCardErrorOptions {
    /** The value for SmartCardError's responseCode attribute. */
    responseCode: SmartCardResponseCode;
}

declare class SmartCardError extends DOMException {
    /**
     * Creates a new SmartCardError instance with an optional message and response
     * code options.
     * @param message Optional human-readable error message.
     * @param options Configuration options containing the responseCode.
     */
    constructor(message: string, options: SmartCardErrorOptions);
    /** The error or warning response code returned by the related PC/SC method. */
    readonly responseCode: SmartCardResponseCode;
}

interface SmartCardReaderStateIn {
    /** Name of the smart card reader. */
    readerName: string;
    /** The current state of that smart card reader as known by the application. */
    currentState: SmartCardReaderStateFlagsIn;
    /**
     * The current number of card insertion and removal events in this reader, as
     * known by the application.
     */
    currentCount?: number;
}

interface SmartCardReaderStateOut {
    /** Name of the smart card reader. */
    readerName: string;
    /** The actual state of that smart card reader. */
    eventState: SmartCardReaderStateFlagsOut;
    /** The actual number of card insertion and removal events in this reader. */
    eventCount: number;
    /** The inserted card's Answer To Reset (ATR), if applicable. */
    answerToReset: ArrayBuffer;
}

interface SmartCardReaderStateFlags {
    /**
     * Whether the application is not interested in this reader, and it should not
     * be considered during monitoring operations.
     * @default false
     */
    ignore?: boolean;
    /**
     * Whether the application believes that this reader is not available for use.
     * @default false
     */
    unavailable?: boolean;
    /**
     * Whether the application believes that there is not a card in the reader.
     * @default false
     */
    empty?: boolean;
    /**
     * Whether the application believes that there is a card in the reader.
     * @default false
     */
    present?: boolean;
    /**
     * Whether the application believes that the card in the reader is allocated
     * for exclusive use by another application.
     * @default false
     */
    exclusive?: boolean;
    /**
     * Whether the application believes that the card in the reader is in use by
     * one or more other applications, but may be connected to in shared mode.
     * @default false
     */
    inuse?: boolean;
    /**
     * Whether the application believes that there is an unresponsive card in the
     * reader.
     * @default false
     */
    mute?: boolean;
    /**
     * Whether the application believes that the card in the reader has not been
     * powered up.
     * @default false
     */
    unpowered?: boolean;
}

interface SmartCardReaderStateFlagsIn extends SmartCardReaderStateFlags {
    /**
     * The application is unaware of the current state, and would like to know.
     * @default false
     */
    unaware?: boolean;
}

interface SmartCardReaderStateFlagsOut extends SmartCardReaderStateFlags {
    /**
     * There is a difference between the state input by the calling application,
     * and the actual state.
     * @default false
     */
    changed?: boolean;
    /**
     * The reader name given by the application is not known.
     * @default false
     */
    unknown?: boolean;
}

type SmartCardProtocol =
    | "raw"
    | "t0"
    | "t1";

interface SmartCardConnectResult {
    /** An interface to the connection created. */
    connection: SmartCardConnection;
    /** The communication protocol actually in use by the connection. */
    activeProtocol?: SmartCardProtocol;
}

type SmartCardAccessMode =
    | "shared"
    | "exclusive"
    | "direct";

interface SmartCardGetStatusChangeOptions {
    /**
     * Timeout parameter in milliseconds for the GetStatusChange method. If not
     * specified, a system-dependent infinite timeout is used.
     */
    timeout?: DOMHighResTimeStamp;
    /** AbortSignal to cancel the outstanding GetStatusChange operation. */
    signal?: AbortSignal;
}

interface SmartCardConnectOptions {
    /** Preferred card communication protocols that may be used. */
    preferredProtocols?: SmartCardProtocol[];
}

interface SmartCardContext {
    /**
     * Returns a list of available smart card readers connected to the system.
     * @return A Promise that resolves to an array of strings representing reader
     *   names.
     * @throws {InvalidStateError} If another operation is already in progress in
     *   this context.
     * @throws {SmartCardError} If querying the readers fails.
     */
    listReaders(): Promise<string[]>;
    /**
     * Monitors changes in the status of specified smart card readers.
     * @param readerStates An array of SmartCardReaderStateIn objects specifying
     *   the readers to monitor and their current states.
     * @param options Optional parameters including timeout and abort signal.
     * @return A Promise that resolves to an array of SmartCardReaderStateOut
     *   objects containing the updated reader states.
     * @throws {InvalidStateError} If another operation is already in progress in
     *   this context.
     * @throws {SmartCardError} If monitoring fails.
     */
    getStatusChange(
        readerStates: SmartCardReaderStateIn[],
        options?: SmartCardGetStatusChangeOptions,
    ): Promise<SmartCardReaderStateOut[]>;
    /**
     * Establishes a connection to a smart card in the specified reader.
     * @param readerName The name of the smart card reader to connect to.
     * @param accessMode The access mode indicating shared, exclusive, or direct
     *   access.
     * @param options Optional configuration for connection preferred protocols.
     * @return A Promise that resolves to a SmartCardConnectResult object
     *   containing the active connection and protocol.
     * @throws {InvalidStateError} If an operation is in progress or an active
     *   reader transaction exists.
     * @throws {SecurityError} If user consent is denied or not granted.
     * @throws {SmartCardError} If the connection attempt fails.
     */
    connect(
        readerName: string,
        accessMode: SmartCardAccessMode,
        options?: SmartCardConnectOptions,
    ): Promise<SmartCardConnectResult>;
}

type SmartCardConnectionState =
    | "absent"
    | "present"
    | "swallowed"
    | "powered"
    | "negotiable"
    | "t0"
    | "t1"
    | "raw";

interface SmartCardConnectionStatus {
    /** Name of the connected reader. */
    readerName: string;
    /** Current state of the connection. */
    state: SmartCardConnectionState;
    /** The answer to reset (ATR) string from the card, if applicable. */
    answerToReset?: ArrayBuffer;
}

type SmartCardDisposition =
    | "leave"
    | "reset"
    | "unpower"
    | "eject";

interface SmartCardTransactionOptions {
    /** AbortSignal to cancel the transaction start operation. */
    signal?: AbortSignal;
}

interface SmartCardTransmitOptions {
    /** The protocol to be used in the transmission. */
    protocol?: SmartCardProtocol;
}

type SmartCardTransactionCallback = () => Promise<SmartCardDisposition | null>;

interface SmartCardConnection {
    /**
     * Disconnects from the smart card reader.
     * @param disposition The action to take on the card upon disconnection (e.g.,
     *   leave, reset, unpower, eject).
     * @return A Promise that resolves when the disconnection is complete.
     * @throws {InvalidStateError} If an operation is in progress, an active
     *   transaction exists on another connection, or the connection is already
     *   closed.
     * @throws {SmartCardError} If the disconnection fails.
     */
    disconnect(disposition?: SmartCardDisposition): Promise<void>;
    /**
     * Transmits an APDU command to the smart card and receives the response.
     * @param sendBuffer The buffer containing the data to transmit.
     * @param options Optional transmission parameters including protocol.
     * @return A Promise that resolves to an ArrayBuffer containing the response
     *   bytes.
     * @throws {InvalidStateError} If an operation is in progress, an active
     *   transaction exists on another connection, or the connection is closed.
     * @throws {SmartCardError} If the transmission fails.
     */
    transmit(sendBuffer: BufferSource, options?: SmartCardTransmitOptions): Promise<ArrayBuffer>;
    /**
     * Retrieves the current status of the smart card connection.
     * @return A Promise that resolves to a SmartCardConnectionStatus object.
     * @throws {InvalidStateError} If an operation is in progress, an active
     *   transaction exists on another connection, or the connection is closed.
     * @throws {UnknownError} If the connection state cannot be determined.
     * @throws {SmartCardError} If retrieving the status fails.
     */
    status(): Promise<SmartCardConnectionStatus>;
    /**
     * Sends a direct control command to the smart card reader.
     * @param controlCode The control code specific to the reader.
     * @param data Buffer source containing the control data.
     * @return A Promise that resolves to an ArrayBuffer containing the response.
     * @throws {InvalidStateError} If an operation is in progress, an active
     *   transaction exists on another connection, or the connection is closed.
     * @throws {SmartCardError} If the control operation fails.
     */
    control(controlCode: number, data: BufferSource): Promise<ArrayBuffer>;
    /**
     * Retrieves an attribute from the smart card reader.
     * @param tag The attribute tag to retrieve.
     * @return A Promise that resolves to an ArrayBuffer containing the attribute
     *   value.
     * @throws {InvalidStateError} If an operation is in progress, an active
     *   transaction exists on another connection, or the connection is closed.
     * @throws {SmartCardError} If retrieving the attribute fails.
     */
    getAttribute(tag: number): Promise<ArrayBuffer>;
    /**
     * Sets an attribute on the smart card reader.
     * @param tag The attribute tag to set.
     * @param value Buffer source containing the new attribute value.
     * @return A Promise that resolves when the attribute has been set.
     * @throws {InvalidStateError} If an operation is in progress, an active
     *   transaction exists on another connection, or the connection is closed.
     * @throws {SmartCardError} If setting the attribute fails.
     */
    setAttribute(tag: number, value: BufferSource): Promise<void>;
    /**
     * Starts a transaction on the smart card connection.
     * @param transaction A callback function that performs operations within the
     *   transaction.
     * @param options Optional configuration including an abort signal.
     * @return A Promise that resolves when the transaction completes.
     * @throws {InvalidStateError} If an operation is in progress, an active
     *   transaction already exists, or the connection is closed.
     * @throws {SmartCardError} If starting the transaction fails.
     */
    startTransaction(transaction: SmartCardTransactionCallback, options?: SmartCardTransactionOptions): Promise<void>;
}

interface Navigator {
    /**
     * Returns the SmartCardResourceManager instance for interacting with smart
     * card readers.
     * Always returns the same instance.
     */
    readonly smartCard: SmartCardResourceManager;
}
