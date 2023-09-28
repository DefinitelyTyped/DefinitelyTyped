import { MessageStreamDefinition, MessageStreamDefinitionMap, TypesMap, ValidationsMap } from ".";

/**
 * Message stream information including its definition, storage status and export status.
 */
export class MessageStreamInfo {
    /**
     * Stream status including oldest/newest sequence number and total bytes.
     */
    static _storageStatus: typeof MessageStreamInfoStorageStatus;
    static _exportStatuses: typeof MessageStreamInfoExportStatuses;

    /**
     * @param definition
     * @param storageStatus  Stream status including oldest/newest sequence number and total bytes.
     * @param exportStatuses
     */
    constructor(
        definition?: MessageStreamDefinition | null,
        storageStatus?: MessageStreamInfoStorageStatus | null,
        exportStatuses?: MessageStreamInfoExportStatuses[] | null,
    );

    get definition(): MessageStreamDefinition | null;
    /**
     * @param value
     */
    set definition(value: MessageStreamDefinition | null);
    /**
     * @param value
     */
    withDefinition(value: MessageStreamDefinition | null): this;

    /**
     * Stream status including oldest/newest sequence number and total bytes.
     */
    get storageStatus(): MessageStreamInfoStorageStatus;
    /**
     * @param value  Stream status including oldest/newest sequence number and total bytes.
     */
    set storageStatus(value: MessageStreamInfoStorageStatus);
    /**
     * @param value Stream status including oldest/newest sequence number and total bytes.
     */
    withStorageStatus(value: MessageStreamInfoStorageStatus): this;

    get exportStatuses(): MessageStreamInfoExportStatuses[];

    /**
     * @param value
     */
    set exportStatuses(value: MessageStreamInfoExportStatuses[]);

    /**
     * @param value
     */
    withExportStatuses(value: MessageStreamInfoExportStatuses[]): this;

    static fromMap(d: Record<string, unknown>): MessageStreamInfo;

    asMap(): {
        definition?: MessageStreamDefinitionMap;
        storageStatus?: MessageStreamInfoStorageStatusMap;
        exportStatuses?: MessageStreamInfoExportStatusesMap[];
    };

    static typesMap: TypesMap;
    static formatsMap: Record<string, never>;
    static validationsMap: ValidationsMap;
}

declare class MessageStreamInfoStorageStatus {
    /**
     * @param oldestSequenceNumber The sequence number of the first message which is still accessible in the stream.
     * @param newestSequenceNumber The sequence number of the last appended message.
     * @param totalBytes The current total size of the stream in bytes.
     */
    constructor(
        oldestSequenceNumber?: number | null,
        newestSequenceNumber?: number | null,
        totalBytes?: number | null,
    );

    /**
     * The sequence number of the first message which is still accessible in the stream.
     */
    get oldestSequenceNumber(): number | null;
    /**
     * @param value The sequence number of the first message which is still accessible in the stream.
     */
    set oldestSequenceNumber(value: number | null);
    /**
     * @param value The sequence number of the first message which is still accessible in the stream.
     */
    withOldestSequenceNumber(value: number | null): this;

    /**
     * The sequence number of the last appended message.
     */
    get newestSequenceNumber(): number | null;
    /**
     * @param value The sequence number of the last appended message.
     */
    set newestSequenceNumber(value: number | null);
    /**
     * @param value The sequence number of the last appended message.
     */
    withNewestSequenceNumber(value: number | null): this;

    /**
     * The current total size of the stream in bytes.
     */
    get totalBytes(): number | null;
    /**
     * @param value The current total size of the stream in bytes.
     */
    set totalBytes(value: number | null);
    /**
     * @param value The current total size of the stream in bytes.
     * @returns
     */
    withTotalBytes(value: number | null): this;

    static fromMap(d: Record<string, unknown>): MessageStreamInfoStorageStatus;

    asMap(): MessageStreamInfoStorageStatusMap;

    static typesMap: TypesMap;
    static formatsMap: Record<string, never>;
    static validationsMap: ValidationsMap;
}

export interface MessageStreamInfoStorageStatusMap {
    oldestSequenceNumber?: number;
    newestSequenceNumber?: number;
    totalBytes?: number;
}

/**
 * Export status including the export identifier and the last exported sequence number for that export task.
 */
declare class MessageStreamInfoExportStatuses {
    /**
     * @param exportConfigIdentifier The unique export identifier.
     * @param lastExportedSequenceNumber The sequence number of the last message which was successfully exported.
     * @param lastExportTime The last time an export was attempted. Data is Unix epoch time in milliseconds.
     * @param errorMessage Error message from the last export attempt if it failed.
     * @param exportedBytesFromStream Total bytes exported from the stream for this Export Config.
     * It does not include the failed export attempts or messages which are skipped because of some non-retryable error.
     * @param exportedMessagesCount Total messages exported/processed.
     */
    constructor(
        exportConfigIdentifier?: string | null,
        lastExportedSequenceNumber?: number | null,
        lastExportTime?: number | null,
        errorMessage?: string | null,
        exportedBytesFromStream?: number | null,
        exportedMessagesCount?: number | null,
    );

    /**
     * The unique export identifier.
     */
    get exportConfigIdentifier(): string | null;
    /**
     * @param value The unique export identifier.
     */
    set exportConfigIdentifier(value: string | null);
    /**
     * @param value The unique export identifier.
     */
    withExportConfigIdentifier(value: string | null): this;

    /**
     * The sequence number of the last message which was successfully exported.
     */
    get lastExportedSequenceNumber(): number | null;
    /**
     * @param value The sequence number of the last message which was successfully exported.
     */
    set lastExportedSequenceNumber(value: number | null);
    /**
     * @param value The sequence number of the last message which was successfully exported.
     */
    withLastExportedSequenceNumber(value: number | null): this;

    /**
     * The last time an export was attempted. Data is Unix epoch time in milliseconds.
     */
    get lastExportTime(): number | null;
    /**
     * @param value The last time an export was attempted. Data is Unix epoch time in milliseconds.
     */
    set lastExportTime(value: number | null);
    /**
     * @param value The last time an export was attempted. Data is Unix epoch time in milliseconds.
     */
    withLastExportTime(value: number | null): this;

    /**
     * Error message from the last export attempt if it failed.
     */
    get errorMessage(): string | null;
    /**
     * @param value Error message from the last export attempt if it failed.
     */
    set errorMessage(value: string | null);
    /**
     * @param value Error message from the last export attempt if it failed.
     */
    withErrorMessage(value: string | null): this;

    /**
     * Total bytes exported from the stream for this Export Config. It does not include the failed export attempts or messages which are skipped because of some non-retryable error.
     */
    get exportedBytesFromStream(): number | null;
    /**
     * @param value Total bytes exported from the stream for this Export Config. It does not include the failed export attempts or messages which are skipped because of some non-retryable error.
     */
    set exportedBytesFromStream(value: number | null);
    /**
     * @param value Total bytes exported from the stream for this Export Config. It does not include the failed export attempts or messages which are skipped because of some non-retryable error.
     */
    withExportedBytesFromStream(value: number | null): this;

    /**
     * Total messages exported/processed.
     */
    get exportedMessagesCount(): number | null;

    /**
     * @param value Total messages exported/processed.
     */
    set exportedMessagesCount(value: number | null);
    /**
     * @param value Total messages exported/processed.
     */
    withExportedMessagesCount(value: number | null): this;

    static fromMap(d: Record<string, unknown>): MessageStreamInfoExportStatuses;

    asMap(): MessageStreamInfoExportStatusesMap;

    static typesMap: TypesMap;
    static formatsMap: Record<string, never>;
    static validationsMap: ValidationsMap;
}

export interface MessageStreamInfoExportStatusesMap {
    exportConfigIdentifier?: string;
    lastExportedSequenceNumber?: number;
    lastExportTime?: number;
    errorMessage?: string;
    exportedBytesFromStream?: number;
    exportedMessagesCount?: number;
}

export {};
