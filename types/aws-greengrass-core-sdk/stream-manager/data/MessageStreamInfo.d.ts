import { MessageStreamDefinition, MessageStreamDefinitionMap, TypesMap, ValidationsMap } from ".";

/**
 * Message stream information including its definition, storage status and export status.
 *
 * @class
 * @memberOf aws-greengrass-core-sdk.StreamManager
 */
export declare class MessageStreamInfo {
  /**
   * Stream status including oldest/newest sequence number and total bytes.
   *
   * @class
   * @memberOf aws-greengrass-core-sdk.StreamManager
   */
  static _storageStatus: typeof MessageStreamInfoStorageStatus;
  static _exportStatuses: typeof MessageStreamInfoExportStatuses;

  /**
   * @param definition {aws-greengrass-core-sdk.StreamManager.MessageStreamDefinition}
   * @param storageStatus {aws-greengrass-core-sdk.StreamManager.MessageStreamInfo~MessageStreamInfo._storageStatus} Stream status including oldest/newest sequence number and total bytes.
   * @param exportStatuses {aws-greengrass-core-sdk.StreamManager.MessageStreamInfo~MessageStreamInfo._exportStatuses[]}
   */
  constructor(
    definition?: MessageStreamDefinition | null,
    storageStatus?: MessageStreamInfoStorageStatus | null,
    exportStatuses?: MessageStreamInfoExportStatuses[] | null,
  );

  /**
     * @returns {aws-greengrass-core-sdk.StreamManager.MessageStreamDefinition}
     
     */
  get definition(): MessageStreamDefinition | null;
  /**
   * @param value {aws-greengrass-core-sdk.StreamManager.MessageStreamDefinition}
   */
  set definition(value: MessageStreamDefinition | null);
  /**
   * @param value {aws-greengrass-core-sdk.StreamManager.MessageStreamDefinition}
   * @returns {aws-greengrass-core-sdk.StreamManager.MessageStreamInfo}
   */
  withDefinition(value: MessageStreamDefinition | null): this;

  /**
     * Stream status including oldest/newest sequence number and total bytes.
     * @returns {aws-greengrass-core-sdk.StreamManager.MessageStreamInfo~MessageStreamInfo._storageStatus}
     
     */
  get storageStatus(): MessageStreamInfoStorageStatus;
  /**
   * @param value {aws-greengrass-core-sdk.StreamManager.MessageStreamInfo~MessageStreamInfo._storageStatus} Stream status including oldest/newest sequence number and total bytes.
   */
  set storageStatus(value: MessageStreamInfoStorageStatus);
  /**
   * @param value {aws-greengrass-core-sdk.StreamManager.MessageStreamInfo~MessageStreamInfo._storageStatus} Stream status including oldest/newest sequence number and total bytes.
   * @returns {aws-greengrass-core-sdk.StreamManager.MessageStreamInfo}
   */
  withStorageStatus(value: MessageStreamInfoStorageStatus): this;

  /**
     * @returns {aws-greengrass-core-sdk.StreamManager.MessageStreamInfo~MessageStreamInfo._exportStatuses[]}
     
     */
  get exportStatuses(): MessageStreamInfoExportStatuses[];

  /**
   * @param value {aws-greengrass-core-sdk.StreamManager.MessageStreamInfo~MessageStreamInfo._exportStatuses[]}
   */
  set exportStatuses(value: MessageStreamInfoExportStatuses[]);

  /**
   * @param value {aws-greengrass-core-sdk.StreamManager.MessageStreamInfo~MessageStreamInfo._exportStatuses[]}
   * @returns {aws-greengrass-core-sdk.StreamManager.MessageStreamInfo}
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
   * @param oldestSequenceNumber {Number} The sequence number of the first message which is still accessible in the stream.
   * @param newestSequenceNumber {Number} The sequence number of the last appended message.
   * @param totalBytes {Number} The current total size of the stream in bytes.
   */
  constructor(
    oldestSequenceNumber?: number | null,
    newestSequenceNumber?: number | null,
    totalBytes?: number | null,
  );

  /**
         * The sequence number of the first message which is still accessible in the stream.
         * @returns {Number}
         
         */
  get oldestSequenceNumber(): number | null;
  /**
   * @param value {Number} The sequence number of the first message which is still accessible in the stream.
   */
  set oldestSequenceNumber(value: number | null);
  /**
   * @param value {Number} The sequence number of the first message which is still accessible in the stream.
   * @returns {aws-greengrass-core-sdk.StreamManager.MessageStreamInfo~MessageStreamInfo._storageStatus}
   */
  withOldestSequenceNumber(value: number | null): this;

  /**
         * The sequence number of the last appended message.
         * @returns {Number}
         
         */
  get newestSequenceNumber(): number | null;
  /**
   * @param value {Number} The sequence number of the last appended message.
   */
  set newestSequenceNumber(value: number | null);
  /**
   * @param value {Number} The sequence number of the last appended message.
   * @returns {aws-greengrass-core-sdk.StreamManager.MessageStreamInfo~MessageStreamInfo._storageStatus}
   */
  withNewestSequenceNumber(value: number | null): this;

  /**
         * The current total size of the stream in bytes.
         * @returns {Number}
         
         */
  get totalBytes(): number | null;
  /**
   * @param value {Number} The current total size of the stream in bytes.
   */
  set totalBytes(value: number | null);
  /**
   * @param value {Number} The current total size of the stream in bytes.
   * @returns {aws-greengrass-core-sdk.StreamManager.MessageStreamInfo~MessageStreamInfo._storageStatus}
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
 *
 * @class
 * @memberOf aws-greengrass-core-sdk.StreamManager
 */
declare class MessageStreamInfoExportStatuses {
  /**
   * @param exportConfigIdentifier {String} The unique export identifier.
   * @param lastExportedSequenceNumber {Number} The sequence number of the last message which was successfully exported.
   * @param lastExportTime {Number} The last time an export was attempted. Data is Unix epoch time in milliseconds.
   * @param errorMessage {String} Error message from the last export attempt if it failed.
   * @param exportedBytesFromStream {Number} Total bytes exported from the stream for this Export Config. It does not include the failed export attempts or messages which are skipped because of some non-retryable error.
   * @param exportedMessagesCount {Number} Total messages exported/processed.
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
         * @returns {String}
         
         */
  get exportConfigIdentifier(): string | null;
  /**
   * @param value {String} The unique export identifier.
   */
  set exportConfigIdentifier(value: string | null);
  /**
   * @param value {String} The unique export identifier.
   * @returns {aws-greengrass-core-sdk.StreamManager.MessageStreamInfo~MessageStreamInfo._exportStatuses}
   */
  withExportConfigIdentifier(value: string | null): this;

  /**
         * The sequence number of the last message which was successfully exported.
         * @returns {Number}
         
         */
  get lastExportedSequenceNumber(): number | null;
  /**
   * @param value {Number} The sequence number of the last message which was successfully exported.
   */
  set lastExportedSequenceNumber(value: number | null);
  /**
   * @param value {Number} The sequence number of the last message which was successfully exported.
   * @returns {aws-greengrass-core-sdk.StreamManager.MessageStreamInfo~MessageStreamInfo._exportStatuses}
   */
  withLastExportedSequenceNumber(value: number | null): this;

  /**
         * The last time an export was attempted. Data is Unix epoch time in milliseconds.
         * @returns {Number}
         
         */
  get lastExportTime(): number | null;
  /**
   * @param value {Number} The last time an export was attempted. Data is Unix epoch time in milliseconds.
   */
  set lastExportTime(value: number | null);
  /**
   * @param value {Number} The last time an export was attempted. Data is Unix epoch time in milliseconds.
   * @returns {aws-greengrass-core-sdk.StreamManager.MessageStreamInfo~MessageStreamInfo._exportStatuses}
   */
  withLastExportTime(value: number | null): this;

  /**
         * Error message from the last export attempt if it failed.
         * @returns {String}
         
         */
  get errorMessage(): string | null;
  /**
   * @param value {String} Error message from the last export attempt if it failed.
   */
  set errorMessage(value: string | null);
  /**
   * @param value {String} Error message from the last export attempt if it failed.
   * @returns {aws-greengrass-core-sdk.StreamManager.MessageStreamInfo~MessageStreamInfo._exportStatuses}
   */
  withErrorMessage(value: string | null): this;

  /**
         * Total bytes exported from the stream for this Export Config. It does not include the failed export attempts or messages which are skipped because of some non-retryable error.
         * @returns {Number}
         
         */
  get exportedBytesFromStream(): number | null;
  /**
   * @param value {Number} Total bytes exported from the stream for this Export Config. It does not include the failed export attempts or messages which are skipped because of some non-retryable error.
   */
  set exportedBytesFromStream(value: number | null);
  /**
   * @param value {Number} Total bytes exported from the stream for this Export Config. It does not include the failed export attempts or messages which are skipped because of some non-retryable error.
   * @returns {aws-greengrass-core-sdk.StreamManager.MessageStreamInfo~MessageStreamInfo._exportStatuses}
   */
  withExportedBytesFromStream(value: number | null): this;

  /**
         * Total messages exported/processed.
         * @returns {Number}
         
         */
  get exportedMessagesCount(): number | null;

  /**
   * @param value {Number} Total messages exported/processed.
   */
  set exportedMessagesCount(value: number | null);
  /**
   * @param value {Number} Total messages exported/processed.
   * @returns {aws-greengrass-core-sdk.StreamManager.MessageStreamInfo~MessageStreamInfo._exportStatuses}
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
