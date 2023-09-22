export * from "./MessageStreamInfo";

export interface EventTypeOptions {
    S3Task: 0;
}

export interface EventTypeOptionsFlipped {
    0: "S3Task";
}

type EventTypeValue = EventTypeOptions[keyof EventTypeOptions];

export type EventTypeMap = EventTypeValue;

/**
 * The type of event, which determines how to interpret the status payload.
 */
export class EventType {
    constructor(value?: EventTypeValue);

    static fromMap(d: EventTypeMap): EventType;

    asMap(): EventTypeMap;

    static options: EventTypeOptions;
    static optionsFlipped: EventTypeOptionsFlipped;
    static S3Task: EventType;
}

export interface StatusOptions {
    Success: 0;
    Failure: 1;
    InProgress: 2;
    Warning: 3;
    Canceled: 4;
}

export interface StatusOptionsFlipped {
    0: "Success";
    1: "Failure";
    2: "InProgress";
    3: "Warning";
    4: "Canceled";
}

type StatusValue = StatusOptions[keyof StatusOptions];

export type StatusMap = StatusValue;

/**
 * The status of the event.
 */
export class Status {
    constructor(value?: StatusValue | null);

    static fromMap(d: StatusMap): Status;

    asMap(): StatusMap;

    static options: StatusOptions;
    static optionsFlipped: StatusOptionsFlipped;
    static Success: Status;
    static Failure: Status;
    static InProgress: Status;
    static Warning: Status;
    static Canceled: Status;
}

export interface StatusLevelOptions {
    ERROR: 0;
    WARN: 1;
    INFO: 2;
    DEBUG: 3;
    TRACE: 4;
}

export interface StatusLevelOptionsFlipped {
    0: "ERROR";
    1: "WARN";
    2: "INFO";
    3: "DEBUG";
    4: "TRACE";
}

export type StatusLevelValue = StatusLevelOptions[keyof StatusLevelOptions];

export type StatusLevelMap = StatusLevelValue;

/**
 * Defines the verbosity of status messages in a status-stream.
 */
export class StatusLevel {
    constructor(value?: StatusLevelValue | null);

    static fromMap(d: StatusLevelMap): StatusLevel;

    asMap(): StatusLevelMap;

    static options: StatusLevelOptions;
    static optionsFlipped: StatusLevelOptionsFlipped;
    static ERROR: StatusLevel;
    static WARN: StatusLevel;
    static INFO: StatusLevel;
    static DEBUG: StatusLevel;
    static TRACE: StatusLevel;
}

interface ValidationDef {
    required: boolean;
    maximum?: number;
    minimum?: number;
    minLength?: number;
    maxLength?: number;
    pattern?: string;
}

export type ValidationsMap = Record<string, ValidationDef>;

interface TypeDef {
    type: { new(): unknown };
    subtype: { new(): unknown } | null;
}

export type TypesMap = Record<string, TypeDef>;

export interface S3ExportTaskDefinitionMap {
    inputUrl?: string;
    bucket?: string;
    key?: string;
    userMetadata?: Record<string, unknown> | null;
}

export class S3ExportTaskDefinition {
    /**
     * @param inputUrl The URL of the file that contains the data to upload. The file should be local on the disk.
     * @param bucket The name of the S3 bucket that this file should be uploaded to.
     * @param key The key for the S3 object that this file should be uploaded to. The string can have placeholder expressions which are
     * resolved at upload time. Valid expressions are strings that are valid Java DateTimeFormatter strings.
     * See https://docs.oracle.com/javase/8/docs/api/java/time/format/DateTimeFormatter.html
     * Example: myKeyNamePrefix/!{timestamp:yyyy/MM/dd}/myKeyNameSuffix.
     * @param userMetadata User metadata. For key of a user metadata, callers should not include the internal "x-amz-meta-"
     * prefix. Keys are case insensitive and will appear as lowercase strings on S3, even if they were originally
     * specified with uppercase strings. Reserved key names start with "$aws-gg-" prefix.
     */
    constructor(
        inputUrl?: string | null,
        bucket?: string | null,
        key?: string | null,
        userMetadata?: Record<string, unknown> | null,
    );

    /**
     * The URL of the file that contains the data to upload. The file should be local on the disk.
     */
    get inputUrl(): string;

    /**
     * @param value The URL of the file that contains the data to upload. The file should be local on the disk.
     */
    set inputUrl(value: string);

    /**
     * @param value The URL of the file that contains the data to upload. The file should be local on the disk.
     * @returns
     */
    withInputUrl(value: string): S3ExportTaskDefinition;

    /**
     * The name of the S3 bucket that this file should be uploaded to.
     */
    get bucket(): string;

    /**
     * @param value The name of the S3 bucket that this file should be uploaded to.
     */
    set bucket(value: string);

    /**
     * @param value The name of the S3 bucket that this file should be uploaded to.
     * @returns
     */
    withBucket(value: string): S3ExportTaskDefinition;

    /**
     * The key for the S3 object that this file should be uploaded to.
     * The string can have placeholder expressions which are resolved at upload time.
     * Valid expressions are strings that are valid Java DateTimeFormatter strings.
     * See https://docs.oracle.com/javase/8/docs/api/java/time/format/DateTimeFormatter.html
     * Example: myKeyNamePrefix/!{timestamp:yyyy/MM/dd}/myKeyNameSuffix.
     * @returns
     */
    get key(): string;

    /**
     * @param value The key for the S3 object that this file should be uploaded to.
     * The string can have placeholder expressions which are resolved at upload time.
     * Valid expressions are strings that are valid Java DateTimeFormatter strings.
     * See https://docs.oracle.com/javase/8/docs/api/java/time/format/DateTimeFormatter.html
     * Example: myKeyNamePrefix/!{timestamp:yyyy/MM/dd}/myKeyNameSuffix.
     */
    set key(value: string);

    /**
     * @param value The key for the S3 object that this file should be uploaded to.
     * The string can have placeholder expressions which are resolved at upload time.
     * Valid expressions are strings that are valid Java DateTimeFormatter strings.
     * See https://docs.oracle.com/javase/8/docs/api/java/time/format/DateTimeFormatter.html
     * Example: myKeyNamePrefix/!{timestamp:yyyy/MM/dd}/myKeyNameSuffix.
     * @returns
     */
    withKey(value: string): S3ExportTaskDefinition;

    /**
     * User metadata. For key of a user metadata, callers should not include the internal "x-amz-meta-" prefix.
     * Keys are case insensitive and will appear as lowercase strings on S3, even if they were originally specified with uppercase strings.
     * Reserved key names start with "$aws-gg-" prefix.
     * @returns
     */
    get userMetadata(): Record<string, unknown> | null;

    /**
     * @param value User metadata. For key of a user metadata, callers should not include the internal "x-amz-meta-" prefix.
     * Keys are case insensitive and will appear as lowercase strings on S3, even if they were originally specified with uppercase strings.
     * Reserved key names start with "$aws-gg-" prefix.
     */
    set userMetadata(value: Record<string, unknown> | null);

    /**
     * @param value User metadata. For key of a user metadata, callers should not include the internal "x-amz-meta-" prefix.
     * Keys are case insensitive and will appear as lowercase strings on S3, even if they were originally specified with uppercase strings.
     * Reserved key names start with "$aws-gg-" prefix.
     * @returns
     */
    withUserMetadata(value: Record<string, unknown> | null): S3ExportTaskDefinition;

    static fromMap(d: S3ExportTaskDefinitionMap): S3ExportTaskDefinition;

    asMap(): S3ExportTaskDefinitionMap;
}

/**
 * Message object containing metadata and the user's payload.
 */
export class Message {
    /**
     * @param streamName The name of the stream which this message is in.
     * @param sequenceNumber The sequence number of this message within the stream.
     * @param ingestTime The time that the message was ingested to Stream Manager. Data is Unix epoch time in milliseconds.
     * @param payload The binary message data.
     */
    constructor(
        streamName?: string | null,
        sequenceNumber?: number | null,
        ingestTime?: number | null,
        payload?: Buffer | null,
    );

    /**
     * The name of the stream which this message is in.
     */
    get streamName(): string | null;

    /**
     * @param value  The name of the stream which this message is in.
     */
    set streamName(value: string | null);

    /**
     * @param value The name of the stream which this message is in.
     * @returns The caller
     */
    withStreamName(value: string | null): this;

    /**
     * The sequence number of this message within the stream.
     */
    get sequenceNumber(): number | null;

    /**
     * @param value The sequence number of this message within the stream.
     */
    set sequenceNumber(value: number | null);

    /**
     * @param value The sequence number of this message within the stream.
     * @returns The caller
     */
    withSequenceNumber(value: number | null): this;

    /**
     * The time that the message was ingested to Stream Manager. Data is Unix epoch time in milliseconds.
     */
    get ingestTime(): number | null;

    /**
     * @param value The time that the message was ingested to Stream Manager. Data is Unix epoch time in milliseconds.
     */
    set ingestTime(value: number | null);

    /**
     * @param value The time that the message was ingested to Stream Manager. Data is Unix epoch time in milliseconds.
     * @returns The caller
     */
    withIngestTime(value: number | null): this;

    /**
     * The binary message data.
     */
    get payload(): Buffer | null;

    /**
     * @param value The binary message data.
     */
    set payload(value: Buffer | null);

    /**
     * @param value The binary message data.
     * @returns The caller
     */
    withPayload(value: Buffer | null): this;

    static fromMap(d: MessageMap): Message;

    asMap(): MessageMap;

    static validationsMap: MessageValidationsMap;

    static typesMap: MessageTypesMap;

    static formatsMap: Record<string, never>;
}

export interface MessageMap {
    streamName?: string | null;
    sequenceNumber?: number | null;
    ingestTime?: number | null;
    payload?: Buffer | null;
}

export interface MessageValidationsMap extends ValidationsMap {
    streamName: ValidationDef;
    sequenceNumber: ValidationDef;
    ingestTime: ValidationDef;
    payload: ValidationDef;
}

export interface MessageTypesMap {
    streamName: TypeDef;
    sequenceNumber: TypeDef;
    ingestTime: TypeDef;
    payload: TypeDef;
}

/**
 * Context associated with a status message. Describes which stream, export config, message, the status is associated with.
 */
export class StatusContext {
    /**
     * @param s3ExportTaskDefinition The task definition of an S3 upload task if the status is associated with it, ie, if the eventType = S3Task.
     * @param exportIdentifier The export identifier the status is associated with.
     * @param streamName The name of the stream the status is associated with.
     * @param sequenceNumber The sequence number of the message the status is associated with.
     */
    constructor(
        s3ExportTaskDefinition?: S3ExportTaskDefinition | null,
        exportIdentifier?: string | null,
        streamName?: string | null,
        sequenceNumber?: number | null,
    );

    /**
     * The task definition of an S3 upload task if the status is associated with it, ie, if the eventType = S3Task.
     * @returns
     */
    get s3ExportTaskDefinition(): S3ExportTaskDefinition | null;

    /**
     * @param value The task definition of an S3 upload task if the status is associated with it, ie, if the eventType = S3Task.
     */
    set s3ExportTaskDefinition(value: S3ExportTaskDefinition | null);

    /**
     * @param value The task definition of an S3 upload task if the status is associated with it, ie, if the eventType = S3Task.
     * @returns
     */
    withS3ExportTaskDefinition(value: S3ExportTaskDefinition | null): this;

    /**
     * The export identifier the status is associated with.
     * @returns
     */
    get exportIdentifier(): string | null;

    /**
     * @param value The export identifier the status is associated with.
     */
    set exportIdentifier(value: string | null);

    /**
     * @param value The export identifier the status is associated with.
     * @returns
     */
    withExportIdentifier(value: string | null): this;

    /**
     * The name of the stream the status is associated with.
     * @returns
     */
    get streamName(): string | null;

    /**
     * @param value The name of the stream the status is associated with.
     */
    set streamName(value: string | null);

    /**
     * @param value The name of the stream the status is associated with.
     * @returns
     */
    withStreamName(value: string | null): this;

    /**
     * The sequence number of the message the status is associated with.
     * @returns
     */
    get sequenceNumber(): number | null;

    /**
     * @param value The sequence number of the message the status is associated with.
     */
    set sequenceNumber(value: number | null);

    /**
     * @param value The sequence number of the message the status is associated with.
     * @returns
     */
    withSequenceNumber(value: number | null): this;

    static fromMap(d: StatusContextMap): StatusContext;

    asMap(): StatusContextMap;

    static typesMap: TypesMap;
    static validationsMap: ValidationsMap;
    static formatsMap: Record<string, never>;
}

export interface StatusContextMap {
    s3ExportTaskDefinition?: S3ExportTaskDefinitionMap;
    exportIdentifier?: string;
    streamName?: string;
    sequenceNumber?: number;
}

/**
 * Status object appended to a status-stream.
 */
export class StatusMessage {
    /**
     * @param eventType
     * @param statusLevel
     * @param status
     * @param statusContext
     * @param message  String describing the status message.
     * @param timestampEpochMs  The time this status was added to the status-stream (in milliseconds since epoch).
     */
    constructor(
        eventType?: EventType | null,
        statusLevel?: StatusLevel | null,
        status?: Status | null,
        statusContext?: StatusContext | null,
        message?: string | null,
        timestampEpochMs?: number | null,
    );

    /**
     * @returns
     */
    get eventType(): EventType | null;

    /**
     * @param value
     */
    set eventType(value: EventType | null);

    /**
     * @param value
     * @returns
     */
    withEventType(value: EventType | null): this;

    /**
     * @returns
     */
    get statusLevel(): StatusLevel | null;

    /**
     * @param value
     */
    set statusLevel(value: StatusLevel | null);

    /**
     * @param value
     * @returns
     */
    withStatusLevel(value: StatusLevel | null): this;

    /**
     * @returns
     */
    get status(): Status | null;

    /**
     * @param value
     */
    set status(value: Status | null);

    /**
     * @param value
     * @returns
     */
    withStatus(value: Status | null): this;

    /**
     * @returns
     */
    get statusContext(): StatusContext | null;

    /**
     * @param value
     */
    set statusContext(value: StatusContext | null);

    /**
     * @param value
     * @returns
     */
    withStatusContext(value: StatusContext | null): this;

    /**
     * String describing the status message.
     * @returns
     */
    get message(): string | null;

    /**
     * @param value String describing the status message.
     */
    set message(value: string | null);

    /**
     * @param value String describing the status message.
     * @returns
     */
    withMessage(value: string | null): this;

    /**
     * The time this status was added to the status-stream (in milliseconds since epoch).
     * @returns
     */
    get timestampEpochMs(): number | null;

    /**
     * @param value The time this status was added to the status-stream (in milliseconds since epoch).
     */
    set timestampEpochMs(value: number | null);
    /**
     * @param value The time this status was added to the status-stream (in milliseconds since epoch).
     * @returns
     */
    withTimestampEpochMs(value: number | null): this;

    static fromMap(d: StatusMessageMap): StatusMessage;

    asMap(): StatusMessageMap;

    static typesMap: TypesMap;
    static validationsMap: ValidationsMap;
    static formatsMap: Record<string, never>;
}

export interface StatusMessageMap {
    eventType: EventTypeMap;
    statusLevel: StatusLevelMap;
    status: StatusMap;
    statusContext: StatusContextMap;
    message?: string;
    timestampEpochMs?: number;
}

/**
 * Options for the ReadMessages API. All fields are optional.
 */
export class ReadMessagesOptions {
    /**
     * @param desiredStartSequenceNumber The desired beginning sequence number to start reading from.
     * If the desired sequence number is less than the current minimum of the stream, then it will instead start reading from the current minimum.
     * @param minMessageCount The minimum number of messages that will be returned.
     * If not enough messages are available for reading, then NotEnoughMessages exception will be thrown.
     * The minimum values is 1 and the maximum value is 2147483647.
     * @param maxMessageCount The maximum number of messages that will be returned.
     * The minimum values is the value of the minimum message count and the maximum value is 2147483647.
     * @param readTimeoutMillis The time to wait for messages in milliseconds. Default is 0, meaning that the server will not wait for messages.
     * If it can fulfill the minimum messages it will return them, but otherwise NotEnoughMessages exception will be thrown.
     * If the timeout is greater than zero, then the server will wait up to that time for more messages to be appended to the stream,
     * waiting until the minimum number of messages is reached. The maximum value is the value of the client timeout.
     */
    constructor(
        desiredStartSequenceNumber?: number | null,
        minMessageCount?: number | null,
        maxMessageCount?: number | null,
        readTimeoutMillis?: number | null,
    );

    /**
     * The desired beginning sequence number to start reading from. If the desired sequence number is less than
     * the current minimum of the stream, then it will instead start reading from the current minimum.
     * @returns
     */
    get desiredStartSequenceNumber(): number | null;

    /**
     * @param value The desired beginning sequence number to start reading from. If the desired sequence number is less than
     * the current minimum of the stream, then it will instead start reading from the current minimum.
     */
    set desiredStartSequenceNumber(value: number | null);

    /**
     * @param value The desired beginning sequence number to start reading from. If the desired sequence number is less than
     * the current minimum of the stream, then it will instead start reading from the current minimum.
     * @returns
     */
    withDesiredStartSequenceNumber(value: number | null): this;

    /**
     * The minimum number of messages that will be returned. If not enough messages are available for reading, then NotEnoughMessages
     * exception will be thrown. The minimum values is 1 and the maximum value is 2147483647.
     * @returns
     */
    get minMessageCount(): number | null;

    /**
     * @param value The minimum number of messages that will be returned. If not enough messages are available for reading,
     * then NotEnoughMessages exception will be thrown. The minimum values is 1 and the maximum value is 2147483647.
     */
    set minMessageCount(value: number | null);

    /**
     * @param value The minimum number of messages that will be returned. If not enough messages are available for reading, then
     * NotEnoughMessages exception will be thrown. The minimum values is 1 and the maximum value is 2147483647.
     * @returns
     */
    withMinMessageCount(value: number | null): this;

    /**
     * The maximum number of messages that will be returned.
     * The minimum values is the value of the minimum message count and the maximum value is 2147483647.
     * @returns
     */
    get maxMessageCount(): number | null;

    /**
     * @param value The maximum number of messages that will be returned.
     * The minimum values is the value of the minimum message count and the maximum value is 2147483647.
     */
    set maxMessageCount(value: number | null);

    /**
     * @param value The maximum number of messages that will be returned.
     * The minimum values is the value of the minimum message count and the maximum value is 2147483647.
     * @returns
     */
    withMaxMessageCount(value: number | null): this;

    /**
     * The time to wait for messages in milliseconds. Default is 0, meaning that the server will not wait for messages.
     * If it can fulfill the minimum messages it will return them, but otherwise NotEnoughMessages exception will be thrown.
     * If the timeout is greater than zero, then the server will wait up to that time for more messages to be appended to the stream,
     * waiting until the minimum number of messages is reached.
     * The maximum value is the value of the client timeout.
     * @returns
     */
    get readTimeoutMillis(): number | null;

    /**
     * @param value The time to wait for messages in milliseconds. Default is 0, meaning that the server will not wait for messages.
     * If it can fulfill the minimum messages it will return them, but otherwise NotEnoughMessages exception will be thrown.
     * If the timeout is greater than zero, then the server will wait up to that time for more messages to be appended to the stream,
     * waiting until the minimum number of messages is reached.
     * The maximum value is the value of the client timeout.
     */
    set readTimeoutMillis(value: number | null);

    /**
     * @param value The time to wait for messages in milliseconds. Default is 0, meaning that the server will not wait for messages.
     * If it can fulfill the minimum messages it will return them, but otherwise NotEnoughMessages exception will be thrown.
     * If the timeout is greater than zero, then the server will wait up to that time for more messages to be appended to the stream,
     * waiting until the minimum number of messages is reached.
     * The maximum value is the value of the client timeout.
     * @returns
     */
    withReadTimeoutMillis(value: number | null): this;

    static fromMap(d: ReadMessagesOptionsMap): ReadMessagesOptions;

    asMap(): ReadMessagesOptionsMap;

    static typesMap: TypesMap;
    static validationsMap: ValidationsMap;
    static formatsMap: Record<string, never>;
}

export interface ReadMessagesOptionsMap {
    desiredStartSequenceNumber?: number;
    minMessageCount?: number;
    maxMessageCount?: number;
    readTimeoutMillis?: number;
}

/**
 * StrategyOnFull is used in the MessageStreamDefinition when creating a stream.
 * It defines the behavior when the stream has reached the maximum size.
 * RejectNewData: any append message request after the stream is full will be rejected with an exception.
 * OverwriteOldestData: the oldest stream segments will be deleted until there is room for the new message.
 */
export class StrategyOnFull {
    constructor(value?: StrategyOnFullValue | null);

    static fromMap(d: StrategyOnFullMap): StrategyOnFull;

    asMap(): StrategyOnFullMap;

    static options: StrategyOnFullOptions;
    static optionsFlipped: StrategyOnFullOptionsFlipped;
    static readonly RejectNewData: StrategyOnFull;
    static readonly OverwriteOldestData: StrategyOnFull;
}

export interface StrategyOnFullOptions {
    RejectNewData: 0;
    OverwriteOldestData: 1;
}

export type StrategyOnFullValue = keyof StrategyOnFullOptionsFlipped;

export type StrategyOnFullMap = StrategyOnFullValue;

export interface StrategyOnFullOptionsFlipped {
    0: "RejectNewData";
    1: "OverwriteOldestData";
}

/**
 * Stream persistence. If set to File, the file system will be used to persist messages long-term and is resilient to restarts.
 * Memory should be used when performance matters more than durability as it only stores the stream in memory and never writes to the disk.
 */
export class Persistence {
    constructor(value?: PersistenceValue | null);

    static fromMap(d: PersistenceMap): Persistence;

    asMap(): PersistenceMap;

    static options: PersistenceOptions;
    static optionsFlipped: PersistenceOptionsFlipped;
    static File: Persistence;
    static Memory: Persistence;
}

export interface PersistenceOptions {
    File: 0;
    Memory: 1;
}

export interface PersistenceOptionsFlipped {
    0: "File";
    1: "Memory";
}

export type PersistenceValue = keyof PersistenceOptionsFlipped;

export type PersistenceMap = PersistenceValue;

/**
 * ExportFormat is used to define how messages are batched and formatted in the export payload.
 * RAW_NOT_BATCHED: Each message in a batch will be sent as an individual HTTP POST with the payload as the body (even if batchSize is set).
 * JSON_BATCHED: Each batch of messages will be sent as a JSON list of Message objects as the body.
 */
export class ExportFormat {
    constructor(value: ExportFormatValue);

    static fromMap(d: ExportFormatMap): ExportFormat;

    asMap(): ExportFormatMap;

    static options: ExportFormatOptions;
    static optionsFlipped: ExportFormatOptionsFlipped;
    static RAW_NOT_BATCHED: ExportFormat;
    static JSON_BATCHED: ExportFormat;
}

export interface ExportFormatOptions {
    RAW_NOT_BATCHED: 0;
    JSON_BATCHED: 1;
}

export interface ExportFormatOptionsFlipped {
    0: "RAW_NOT_BATCHED";
    1: "JSON_BATCHED";
}

export type ExportFormatValue = keyof ExportFormatOptions;

export type ExportFormatMap = ExportFormatValue;

declare class StreamConfigBase<TMap extends StreamConfigBaseMap> {
    /**
     * A unique identifier to identify this individual upload stream.
     * Must be an alphanumeric string including spaces, commas, periods, hyphens, and underscores with length between 1 and 255.
     * @returns
     */
    get identifier(): string | null;

    /**
     * @param value A unique identifier to identify this individual upload stream.
     * Must be an alphanumeric string including spaces, commas, periods, hyphens, and underscores with length between 1 and 255.
     */
    set identifier(value: string | null);

    /**
     * @param value A unique identifier to identify this individual upload stream.
     * Must be an alphanumeric string including spaces, commas, periods, hyphens, and underscores with length between 1 and 255.
     */
    withIdentifier(value: string | null): this;
    /**
     * The time in milliseconds between the earliest un-uploaded message and the current time. If this time is exceeded,
     * messages will be uploaded in the next batch. If unspecified messages will be eligible for upload immediately.
     * If both batchSize and batchIntervalMillis are specified, then messages will be eligible for upload when either condition is met.
     * The minimum value is 60000 milliseconds and the maximum is 9223372036854 milliseconds.
     * @returns
     */
    get batchIntervalMillis(): number | null;
    /**
     * @param value The time in milliseconds between the earliest un-uploaded message and the current time. If this time is exceeded,
     * messages will be uploaded in the next batch. If unspecified messages will be eligible for upload immediately.
     * If both batchSize and batchIntervalMillis are specified, then messages will be eligible for upload when either condition is met.
     * The minimum value is 60000 milliseconds and the maximum is 9223372036854 milliseconds.
     */
    set batchIntervalMillis(value: number | null);
    /**
     * @param value The time in milliseconds between the earliest un-uploaded message and the current time. If this time is exceeded,
     * messages will be uploaded in the next batch. If unspecified messages will be eligible for upload immediately.
     * If both batchSize and batchIntervalMillis are specified, then messages will be eligible for upload when either condition is met.
     * The minimum value is 60000 milliseconds and the maximum is 9223372036854 milliseconds.
     */
    withBatchIntervalMillis(value: number | null): this;

    /**
     * Priority for this upload stream. Lower values are higher priority. If not specified it will have the lowest priority.
     * @returns
     */
    get priority(): number | null;

    /**
     * @param value Priority for this upload stream. Lower values are higher priority. If not specified it will have the lowest priority.
     */
    set priority(value: number | null);

    /**
     * @param value Priority for this upload stream. Lower values are higher priority. If not specified it will have the lowest priority.
     */
    withPriority(value: number | null): this;

    /**
     * The sequence number of the message to use as the starting message in the export. Default is 0.
     * The sequence number provided should be less than the newest sequence number in the stream, i.e.,
     * sequence number of the last messaged appended.
     * To find the newest sequence number, describe the stream and then check the storage status of the returned MessageStreamInfo object.
     * @returns
     */
    get startSequenceNumber(): number | null;

    /**
     * @param value The sequence number of the message to use as the starting message in the export. Default is 0.
     * The sequence number provided should be less than the newest sequence number in the stream, i.e.,
     * sequence number of the last messaged appended.
     * To find the newest sequence number, describe the stream and then check the storage status of the returned MessageStreamInfo object.
     */
    set startSequenceNumber(value: number | null);

    /**
     * @param value The sequence number of the message to use as the starting message in the export. Default is 0.
     * The sequence number provided should be less than the newest sequence number in the stream, i.e.,
     * sequence number of the last messaged appended.
     * To find the newest sequence number, describe the stream and then check the storage status of the returned MessageStreamInfo object.
     */
    withStartSequenceNumber(value: number | null): this;

    /**
     * Enable or disable this export. Default is false.
     * @returns
     */
    get disabled(): boolean | null;

    /**
     * @param value Enable or disable this export. Default is false.
     */
    set disabled(value: boolean | null);

    /**
     * @param value Enable or disable this export. Default is false.
     */
    withDisabled(value: boolean | null): this;

    asMap(): TMap;

    static typesMap: TypesMap;
    static formatsMap: Record<string, never>;
    static validationsMap: ValidationsMap;
}

interface StreamConfigBaseMap {
    identifier?: string | null;
    batchSize?: number | null;
    batchIntervalMillis?: number | null;
    priority?: number | null;
    startSequenceNumber?: number | null;
    disabled?: boolean | null;
}

/**
 * This export destination is not supported! The interface may change at any time without notice and should not be relied on for any production use.
 * There are no guarantees around its correctness.
 * This configures an HTTP endpoint which sends a POST request to the provided URI. Each request contains a single message in the body of the request.
 */
export class HTTPConfig extends StreamConfigBase<HTTPConfigMap> {
    /**
     * @param identifier A unique identifier to identify this individual upload stream.
     * Must be an alphanumeric string including spaces, commas, periods, hyphens, and underscores with length between 1 and 255.
     * @param uri URL for HTTP endpoint which should receive the POST requests for export.
     * @param batchSize The maximum size of a batch to send to the destination. Messages will be queued until the batch size is reached,
     * after which they will then be uploaded. If unspecified the default will be 500.
     * If both batchSize and batchIntervalMillis are specified, then messages will be eligible for upload when either condition is met.
     * The minimum batch size is 1 and the maximum is 500.
     * @param batchIntervalMillis The time in milliseconds between the earliest un-uploaded message and the current time.
     * If this time is exceeded, messages will be uploaded in the next batch. If unspecified messages will be eligible for upload immediately.
     * If both batchSize and batchIntervalMillis are specified, then messages will be eligible for upload when either condition is met.
     * The minimum value is 60000 milliseconds and the maximum is 9223372036854 milliseconds.
     * @param priority Priority for this upload stream. Lower values are higher priority. If not specified it will have the lowest priority.
     * @param startSequenceNumber The sequence number of the message to use as the starting message in the export. Default is 0.
     * The sequence number provided should be less than the newest sequence number in the stream, i.e.,
     * sequence number of the last messaged appended. To find the newest sequence number, describe the stream and then check the storage status
     * of the returned MessageStreamInfo object.
     * @param disabled Enable or disable this export. Default is false.
     * @param exportFormat Defines how messages are batched and formatted in the export payload.
     */
    constructor(
        identifier?: string | null,
        uri?: string | null,
        batchSize?: number | null,
        batchIntervalMillis?: number | null,
        priority?: number | null,
        startSequenceNumber?: number | null,
        disabled?: boolean | null,
        exportFormat?: ExportFormat | null,
    );

    /**
     * URL for HTTP endpoint which should receive the POST requests for export.
     * @returns
     */
    get uri(): string | null;

    /**
     * @param value URL for HTTP endpoint which should receive the POST requests for export.
     */
    set uri(value: string | null);

    /**
     * @param value URL for HTTP endpoint which should receive the POST requests for export.
     * @returns
     */
    withUri(value: string | null): HTTPConfig;

    /**
     * The maximum size of a batch to send to the destination. Messages will be queued until the batch size is reached,
     * after which they will then be uploaded.
     * If unspecified the default will be 500.
     * If both batchSize and batchIntervalMillis are specified, then messages will be eligible for upload when either condition is met.
     * The minimum batch size is 1 and the maximum is 500.
     * @returns
     */
    get batchSize(): number | null;
    /**
     * @param value The maximum size of a batch to send to the destination. Messages will be queued until the batch size is reached,
     * after which they will then be uploaded.
     * If unspecified the default will be 500.
     * If both batchSize and batchIntervalMillis are specified, then messages will be eligible for upload when either condition is met.
     * The minimum batch size is 1 and the maximum is 500.
     */
    set batchSize(value: number | null);

    /**
     * @param value The maximum size of a batch to send to the destination. Messages will be queued until the batch size is reached,
     * after which they will then be uploaded.
     * If unspecified the default will be 500.
     * If both batchSize and batchIntervalMillis are specified, then messages will be eligible for upload when either condition is met.
     * The minimum batch size is 1 and the maximum is 500.
     */
    withBatchSize(value: number | null): HTTPConfig;

    /**
     * Defines how messages are batched and formatted in the export payload.
     * @returns
     */
    get exportFormat(): ExportFormat | null;

    /**
     * @param value Defines how messages are batched and formatted in the export payload.
     */
    set exportFormat(value: ExportFormat | null);

    /**
     * @param value Defines how messages are batched and formatted in the export payload.
     * @returns
     */
    withExportFormat(value: ExportFormat | null): HTTPConfig;

    static fromMap(d: HTTPConfigMap): HTTPConfig;
}

export interface HTTPConfigMap extends StreamConfigBaseMap {
    identifier?: string | null;
    uri?: string | null;
    exportFormat?: ExportFormatMap;
}

/**
 * Configuration object for IoT Analytics export destination.
 */
export class IoTAnalyticsConfig extends StreamConfigBase<IoTAnalyticsConfigMap> {
    /**
     * @param identifier A unique identifier to identify this individual upload stream.
     * Must be an alphanumeric string including spaces, commas, periods, hyphens, and underscores with length between 1 and 255.
     * @param iotChannel The name of the IoT Analytics Channel that this exporter should upload to.
     * @param iotMsgIdPrefix A string prefixed to each unique message id. After this prefix, StreamManager may append
     * more data to make the message ID unique.
     * This prefix must be less than 32 characters.
     * @param batchSize The maximum size of a batch to send to IoT Analytics. Messages will be queued until the batch size is reached,
     * after which they will then be uploaded.
     * If unspecified the default will be 100.
     * If both batchSize and batchIntervalMillis are specified, then messages will be eligible for upload when either condition is met.
     * The batch size must be between 1 and 100.
     * @param batchIntervalMillis The time in milliseconds between the earliest un-uploaded message and the current time.
     * If this time is exceeded, messages will be uploaded in the next batch. If unspecified messages will be eligible for upload immediately.
     * If both batchSize and batchIntervalMillis are specified, then messages will be eligible for upload when either condition is met.
     * The minimum value is 60000 milliseconds and the maximum is 9223372036854 milliseconds.
     * @param priority Priority for this upload stream. Lower values are higher priority. If not specified it will have the lowest priority.
     * @param startSequenceNumber The sequence number of the message to use as the starting message in the export.
     * Default is 0.
     * The sequence number provided should be less than the newest sequence number in the stream, i.e., sequence number of the last messaged appended.
     * To find the newest sequence number, describe the stream and then check the storage status of the returned MessageStreamInfo object.
     * @param disabled Enable or disable this export. Default is false.
     */
    constructor(
        identifier?: string | null,
        iotChannel?: string | null,
        iotMsgIdPrefix?: string | null,
        batchSize?: number | null,
        batchIntervalMillis?: number | null,
        priority?: number | null,
        startSequenceNumber?: number | null,
        disabled?: boolean | null,
    );

    /**
     * The name of the IoT Analytics Channel that this exporter should upload to.
     * @returns
     */
    get iotChannel(): string | null;

    /**
     * @param value The name of the IoT Analytics Channel that this exporter should upload to.
     */
    set iotChannel(value: string | null);

    /**
     * @param value The name of the IoT Analytics Channel that this exporter should upload to.
     * @returns
     */
    withIotChannel(value: string | null): IoTAnalyticsConfig;

    /**
     * A string prefixed to each unique message id. After this prefix, StreamManager may append more data to make the message ID unique.
     * This prefix must be less than 32 characters.
     * @returns
     */
    get iotMsgIdPrefix(): string | null;

    /**
     * @param value A string prefixed to each unique message id. After this prefix, StreamManager may append more data to make the message ID unique.
     * This prefix must be less than 32 characters.
     */
    set iotMsgIdPrefix(value: string | null);

    /**
     * @param value A string prefixed to each unique message id. After this prefix, StreamManager may append more data to make the message ID unique.
     * This prefix must be less than 32 characters.
     * @returns
     */
    withIotMsgIdPrefix(value: string | null): IoTAnalyticsConfig;

    /**
     * The maximum size of a batch to send to IoT Analytics. Messages will be queued until the batch size is reached,
     * after which they will then be uploaded.
     * If unspecified the default will be 100.
     * If both batchSize and batchIntervalMillis are specified, then messages will be eligible for upload when either condition is met.
     * The batch size must be between 1 and 100.
     * @returns
     */
    get batchSize(): number | null;

    /**
     * @param value The maximum size of a batch to send to IoT Analytics. Messages will be queued until the batch size is reached,
     * after which they will then be uploaded.
     * If unspecified the default will be 100.
     * If both batchSize and batchIntervalMillis are specified, then messages will be eligible for upload when either condition is met.
     * The batch size must be between 1 and 100.
     */
    set batchSize(value: number | null);

    /**
     * @param value The maximum size of a batch to send to IoT Analytics. Messages will be queued until the batch size is reached,
     * after which they will then be uploaded.
     * If unspecified the default will be 100.
     * If both batchSize and batchIntervalMillis are specified, then messages will be eligible for upload when either condition is met.
     * The batch size must be between 1 and 100.
     */
    withBatchSize(value: number | null): IoTAnalyticsConfig;

    static fromMap(d: IoTAnalyticsConfigMap): IoTAnalyticsConfig;
}

export interface IoTAnalyticsConfigMap extends StreamConfigBaseMap {
    identifier?: string | null;
    iotChannel?: string | null;
    iotMsgIdPrefix?: string | null;
}

/**
 * Configuration object for Kinesis data streams export destination.
 */
export class KinesisConfig extends StreamConfigBase<KinesisConfigMap> {
    /**
     * @param identifier A unique identifier to identify this individual upload stream.
     * Must be an alphanumeric string including spaces, commas, periods, hyphens, and underscores with length between 1 and 255.
     * @param kinesisStreamName The name of the Kinesis data stream that this exporter should upload to.
     * @param batchSize The maximum size of a batch to send to Kinesis. Messages will be queued until the batch size is reached,
     * after which they will then be uploaded.
     * If unspecified the default will be 500.
     * If both batchSize and batchIntervalMillis are specified, then messages will be eligible for upload when either condition is met.
     * The batch size must be between 1 and 500.
     * @param batchIntervalMillis The time in milliseconds between the earliest un-uploaded message and the current time.
     * If this time is exceeded, messages will be uploaded in the next batch. If unspecified messages will be eligible for upload immediately.
     * If both batchSize and batchIntervalMillis are specified, then messages will be eligible for upload when either condition is met.
     * The minimum value is 60000 milliseconds and the maximum is 9223372036854 milliseconds.
     * @param priority Priority for this upload stream. Lower values are higher priority. If not specified it will have the lowest priority.
     * @param startSequenceNumber The sequence number of the message to use as the starting message in the export. Default is 0.
     * The sequence number provided should be less than the newest sequence number in the stream, i.e., sequence number of the last messaged appended.
     * To find the newest sequence number, describe the stream and then check the storage status of the returned MessageStreamInfo object.
     * @param disabled Enable or disable this export. Default is false.
     */
    constructor(
        identifier?: string | null,
        kinesisStreamName?: string | null,
        batchSize?: number | null,
        batchIntervalMillis?: number | null,
        priority?: number | null,
        startSequenceNumber?: number | null,
        disabled?: boolean | null,
    );

    /**
     * The name of the Kinesis data stream that this exporter should upload to.
     * @returns
     */
    get kinesisStreamName(): string | null;

    /**
     * @param value The name of the Kinesis data stream that this exporter should upload to.
     */
    set kinesisStreamName(value: string | null);

    /**
     * @param value The name of the Kinesis data stream that this exporter should upload to.
     * @returns
     */
    withKinesisStreamName(value: string | null): KinesisConfig;

    /**
     * The maximum size of a batch to send to Kinesis. Messages will be queued until the batch size is reached, after which they will then be uploaded.
     * If unspecified the default will be 500.
     * If both batchSize and batchIntervalMillis are specified, then messages will be eligible for upload when either condition is met.
     * The batch size must be between 1 and 500.
     * @returns
     */
    get batchSize(): number | null;

    /**
     * @param value The maximum size of a batch to send to Kinesis. Messages will be queued until the batch size is reached, after which they will then be uploaded.
     * If unspecified the default will be 500.
     * If both batchSize and batchIntervalMillis are specified, then messages will be eligible for upload when either condition is met.
     * The batch size must be between 1 and 500.
     */
    set batchSize(value: number | null);

    /**
     * @param value The maximum size of a batch to send to Kinesis. Messages will be queued until the batch size is reached, after which they will then be uploaded.
     * If unspecified the default will be 500.
     * If both batchSize and batchIntervalMillis are specified, then messages will be eligible for upload when either condition is met.
     * The batch size must be between 1 and 500.
     */
    withBatchSize(value: number | null): KinesisConfig;

    static fromMap(d: KinesisConfigMap): KinesisConfig;
}

export interface KinesisConfigMap extends StreamConfigBaseMap {
    identifier?: string | null;
    kinesisStreamName?: string | null;
}

/**
 * Configuration object for IotSiteWise data streams export destination. Minimum version requirements: StreamManager server version 1.1 (or AWS IoT Greengrass Core 1.11.0)
 */
export class IoTSiteWiseConfig extends StreamConfigBase<IoTSiteWiseConfigMap> {
    /**
     * @param identifier A unique identifier to identify this individual upload stream.
     * Must be an alphanumeric string including spaces, commas, periods, hyphens, and underscores with length between 1 and 255.
     * @param batchSize The maximum size of a batch to send to the destination. Messages will be queued until the batch size is reached, after which they will then be uploaded.
     * If unspecified the default will be 10.
     * If both batchSize and batchIntervalMillis are specified, then messages will be eligible for upload when either condition is met.
     * The minimum batch size is 1 and the maximum is 10.
     * @param batchIntervalMillis The time in milliseconds between the earliest un-uploaded message and the current time.
     * If this time is exceeded, messages will be uploaded in the next batch. If unspecified messages will be eligible for upload immediately.
     * If both batchSize and batchIntervalMillis are specified, then messages will be eligible for upload when either condition is met.
     * The minimum value is 60000 milliseconds and the maximum is 9223372036854 milliseconds.
     * @param priority Priority for this upload stream. Lower values are higher priority. If not specified it will have the lowest priority.
     * @param startSequenceNumber The sequence number of the message to use as the starting message in the export. Default is 0.
     * The sequence number provided should be less than the newest sequence number in the stream, i.e., sequence number of the last messaged appended.
     * To find the newest sequence number, describe the stream and then check the storage status of the returned MessageStreamInfo object.
     * @param disabled Enable or disable this export. Default is false.
     */
    constructor(
        identifier?: string | null,
        batchSize?: number | null,
        batchIntervalMillis?: number | null,
        priority?: number | null,
        startSequenceNumber?: number | null,
        disabled?: boolean | null,
    );

    /**
     * The maximum size of a batch to send to the destination. Messages will be queued until the batch size is reached, after which they will then be uploaded.
     * If unspecified the default will be 10.
     * If both batchSize and batchIntervalMillis are specified, then messages will be eligible for upload when either condition is met.
     * The minimum batch size is 1 and the maximum is 10.
     * @returns
     */
    get batchSize(): number | null;
    /**
     * @param value The maximum size of a batch to send to the destination. Messages will be queued until the batch size is reached, after which they will then be uploaded.
     * If unspecified the default will be 10.
     * If both batchSize and batchIntervalMillis are specified, then messages will be eligible for upload when either condition is met.
     * The minimum batch size is 1 and the maximum is 10.
     */
    set batchSize(value: number | null);

    /**
     * @param value The maximum size of a batch to send to the destination. Messages will be queued until the batch size is reached, after which they will then be uploaded.
     * If unspecified the default will be 10.
     * If both batchSize and batchIntervalMillis are specified, then messages will be eligible for upload when either condition is met.
     * The minimum batch size is 1 and the maximum is 10.
     */
    withBatchSize(value: number | null): IoTSiteWiseConfig;

    static fromMap(d: IoTSiteWiseConfigMap): IoTSiteWiseConfig;
}

export interface IoTSiteWiseConfigMap extends StreamConfigBaseMap {
    identifier?: string | null;
}

/**
 * Configuration for status in a status-stream.
 */
export class StatusConfig {
    /**
     * @param statusLevel Defines the verbosity of status messages in a status-stream.
     * @param statusStreamName The name of the stream to which status messages are appended.
     * The status-stream should be created before associating it with another stream.
     */
    constructor(statusLevel?: StatusLevel | null, statusStreamName?: string | null);

    /**
     * Defines the verbosity of status messages in a status-stream.
     * @returns
     */
    get statusLevel(): StatusLevel | null;

    /**
     * @param value Defines the verbosity of status messages in a status-stream.
     */
    set statusLevel(value: StatusLevel | null);

    /**
     * @param value Defines the verbosity of status messages in a status-stream.
     * @returns
     */
    withStatusLevel(value: StatusLevel | null): StatusConfig;

    /**
     * The name of the stream to which status messages are appended.
     * The status-stream should be created before associating it with another stream.
     * @returns
     */
    get statusStreamName(): string | null;

    /**
     * @param value The name of the stream to which status messages are appended.
     * The status-stream should be created before associating it with another stream.
     */
    set statusStreamName(value: string | null);

    /**
     * @param value The name of the stream to which status messages are appended.
     * The status-stream should be created before associating it with another stream.
     * @returns
     */
    withStatusStreamName(value: string | null): StatusConfig;

    static fromMap(d: StatusConfigMap): StatusConfig;

    asMap(): StatusConfigMap;

    static typesMap: TypesMap;
    static formatsMap: Record<string, never>;
    static validationsMap: ValidationsMap;
}

export interface StatusConfigMap {
    statusLevel?: StatusLevelMap;
    statusStreamName?: string;
}

/**
 * Configuration object for S3 export tasks executor.  Minimum version requirements: StreamManager server version 1.1 (or AWS IoT Greengrass Core 1.11.0)
 */
export class S3ExportTaskExecutorConfig {
    /**
     * @param identifier A unique identifier to identify this individual upload task.
     * Must be an alphanumeric string including spaces, commas, periods, hyphens, and underscores with length between 1 and 255.
     * @param sizeThresholdForMultipartUploadBytes The size threshold in bytes for when to use multipart uploads.
     * Uploads over this size will automatically use a multipart upload strategy, while uploads equal or smaller than this threshold will use a single connection to upload the whole object.
     * @param priority Priority for this upload task. Lower values are higher priority. If not specified it will have the lowest priority.
     * @param disabled Enable or disable this export. Default is false.
     * @param statusConfig Event status configuration that specifies the target status stream and verbosity.
     */
    constructor(
        identifier?: string | null,
        sizeThresholdForMultipartUploadBytes?: number | null,
        priority?: number | null,
        disabled?: boolean | null,
        statusConfig?: StatusConfig | null,
    );

    /**
     * A unique identifier to identify this individual upload task.
     * Must be an alphanumeric string including spaces, commas, periods, hyphens, and underscores with length between 1 and 255.
     * @returns
     */
    get identifier(): string | null;

    /**
     * @param value A unique identifier to identify this individual upload task.
     * Must be an alphanumeric string including spaces, commas, periods, hyphens, and underscores with length between 1 and 255.
     */
    set identifier(value: string | null);

    /**
     * @param value A unique identifier to identify this individual upload task.
     * Must be an alphanumeric string including spaces, commas, periods, hyphens, and underscores with length between 1 and 255.
     * @returns
     */
    withIdentifier(value: string | null): this;

    /**
     * The size threshold in bytes for when to use multipart uploads.
     * Uploads over this size will automatically use a multipart upload strategy, while uploads equal or smaller than this threshold will use a single connection to upload the whole object.
     * @returns
     */
    get sizeThresholdForMultipartUploadBytes(): number | null;

    /**
     * @param value The size threshold in bytes for when to use multipart uploads.
     * Uploads over this size will automatically use a multipart upload strategy, while uploads equal or smaller than this threshold will use a single connection to upload the whole object.
     */
    set sizeThresholdForMultipartUploadBytes(value: number | null);

    /**
     * @param value The size threshold in bytes for when to use multipart uploads.
     * Uploads over this size will automatically use a multipart upload strategy, while uploads equal or smaller than this threshold will use a single connection to upload the whole object.
     * @returns
     */
    withSizeThresholdForMultipartUploadBytes(value: number | null): this;

    /**
     * Priority for this upload task. Lower values are higher priority. If not specified it will have the lowest priority.
     * @returns
     */
    get priority(): number | null;
    /**
     * @param value Priority for this upload task. Lower values are higher priority. If not specified it will have the lowest priority.
     */
    set priority(value: number | null);

    /**
     * @param value Priority for this upload task. Lower values are higher priority. If not specified it will have the lowest priority.
     * @returns
     */
    withPriority(value: number | null): this;

    /**
     * Enable or disable this export. Default is false.
     * @returns
     */
    get disabled(): boolean | null;

    /**
     * @param value Enable or disable this export. Default is false.
     */
    set disabled(value: boolean | null);

    /**
     * @param value Enable or disable this export. Default is false.
     * @returns
     */
    withDisabled(value: boolean | null): this;

    /**
     * Event status configuration that specifies the target status stream and verbosity.
     * @returns
     */
    get statusConfig(): StatusConfig | null;

    /**
     * @param value Event status configuration that specifies the target status stream and verbosity.
     */
    set statusConfig(value: StatusConfig | null);

    /**
     * @param value Event status configuration that specifies the target status stream and verbosity.
     * @returns
     */
    withStatusConfig(value: StatusConfig | null): this;

    static fromMap(d: S3ExportTaskExecutorConfigMap): S3ExportTaskExecutorConfig;

    asMap(): S3ExportTaskDefinitionMap;

    static typesMap: TypesMap;
    static formatsMap: Record<string, never>;
    static validationsMap: ValidationsMap;
}

export interface S3ExportTaskExecutorConfigMap {
    identifier?: string | null;
    sizeThresholdForMultipartUploadBytes?: number | null;
    priority?: number | null;
    disabled?: boolean | null;
    statusConfig?: StatusConfig | null;
}

/**
 * Defines how and where the stream is uploaded.
 */
export class ExportDefinition {
    /**
     * @param http Defines how the stream is uploaded to an HTTP endpoint.
     * @param iotAnalytics Defines how the stream is uploaded to IoT Analytics.
     * @param kinesis Defines how the stream is uploaded to Kinesis.
     * @param IotSitewise Defines how the stream is uploaded to IoT SiteWise.
     * @param s3TaskExecutor Defines the list of configs for S3 task executors.
     */
    constructor(
        http?: HTTPConfig[] | null,
        iotAnalytics?: IoTAnalyticsConfig[] | null,
        kinesis?: KinesisConfig[] | null,
        IotSitewise?: IoTSiteWiseConfig[] | null,
        s3TaskExecutor?: S3ExportTaskExecutorConfig[] | null,
    );

    /**
     * Defines how the stream is uploaded to an HTTP endpoint.
     * @returns
     */
    get http(): HTTPConfig[] | null;

    /**
     * @param value Defines how the stream is uploaded to an HTTP endpoint.
     */
    set http(value: HTTPConfig[] | null);

    /**
     * @param value Defines how the stream is uploaded to an HTTP endpoint.
     * @returns
     */
    withHttp(value: HTTPConfig[] | null): this;

    /**
     * Defines how the stream is uploaded to IoT Analytics.
     * @returns
     */
    get iotAnalytics(): IoTAnalyticsConfig[] | null;

    /**
     * @param value Defines how the stream is uploaded to IoT Analytics.
     */
    set iotAnalytics(value: IoTAnalyticsConfig[] | null);

    /**
     * @param value Defines how the stream is uploaded to IoT Analytics.
     * @returns
     */
    withIotAnalytics(value: IoTAnalyticsConfig[] | null): this;

    /**
     * Defines how the stream is uploaded to Kinesis.
     * @returns
     */
    get kinesis(): KinesisConfig[] | null;

    /**
     * @param value Defines how the stream is uploaded to Kinesis.
     */
    set kinesis(value: KinesisConfig[] | null);

    /**
     * @param value Defines how the stream is uploaded to Kinesis.
     * @returns
     */
    withKinesis(value: KinesisConfig[] | null): this;

    /**
     * Defines how the stream is uploaded to IoT SiteWise.
     * @returns
     */
    get IotSitewise(): IoTSiteWiseConfig[] | null;

    /**
     * @param value Defines how the stream is uploaded to IoT SiteWise.
     */
    set IotSitewise(value: IoTSiteWiseConfig[] | null);

    /**
     * @param value Defines how the stream is uploaded to IoT SiteWise.
     * @returns
     */
    withIotSitewise(value: IoTSiteWiseConfig[] | null): this;

    /**
     * Defines the list of configs for S3 task executors.
     * @returns
     */
    get s3TaskExecutor(): S3ExportTaskExecutorConfig[] | null;
    /**
     * @param value Defines the list of configs for S3 task executors.
     */
    set s3TaskExecutor(value: S3ExportTaskExecutorConfig[] | null);

    /**
     * @param value Defines the list of configs for S3 task executors.
     * @returns
     */
    withS3TaskExecutor(value: S3ExportTaskExecutorConfig[] | null): this;

    static fromMap(d: ExportDefinitionMap): ExportDefinition;

    asMap(): ExportDefinitionMap;

    static typesMap: TypesMap;
    static formatsMap: Record<string, never>;
    static validationsMap: ValidationsMap;
}

export interface ExportDefinitionMap {
    http?: HTTPConfigMap[] | null;
    kinesis?: KinesisConfigMap[] | null;
    iotAnalytics?: IoTAnalyticsConfigMap[] | null;
    IotSitewise?: IoTSiteWiseConfigMap[] | null;
    s3TaskExecutor?: S3ExportTaskExecutorConfigMap[] | null;
}

/**
 * Object defining a message stream used in the CreateMessageStream and UpdateMessageStream API.
 */
export class MessageStreamDefinition {
    /**
     * @param name The unique name of the stream.
     * Must be an alphanumeric string including spaces, commas, periods, hyphens, and underscores with length between 1 and 255.
     * @param maxSize The maximum size in bytes for the entire stream. Set to 256MB by default with a minimum of 1KB and a maximum of 8192PB.
     * @param streamSegmentSize The size of each segment of the stream. Set to 16MB by default with a minimum of 1KB and a maximum of 2GB.
     * Data is only deleted segment by segment, so the segment size is the smallest amount of data which can be deleted.
     * @param timeToLiveMillis Time to live for each message in milliseconds. Data may be deleted at any time after the TTL expires; deletion is not guaranteed to occur immediately when the TTL expires.
     * The minimum value is 60000 milliseconds and the maximum is 9223372036854 milliseconds.
     * @param strategyOnFull What to do when the maximum size of the stream is reached.
     * RejectNewData: any append message request after the stream is full will be rejected with an exception.
     * OverwriteOldestData: the oldest stream segments will be deleted until there is room for the new message.
     * @param persistence Stream persistence. If set to File, the file system will be used to persist messages long-term and is resilient to restarts.
     * Memory should be used when performance matters more than durability as it only stores the stream in memory and never writes to the disk.
     * @param flushOnWrite This only applies when Persistence is set to File mode.
     * Waits for the filesystem to complete the write for every message. This is safer, but slower. Default is false.
     * @param exportDefinition Defines how and where the stream is uploaded. See the definition of the ExportDefinition object for more detail.
     */
    constructor(
        name?: string | null,
        maxSize?: number | null,
        streamSegmentSize?: number | null,
        timeToLiveMillis?: number | null,
        strategyOnFull?: StrategyOnFull | null,
        persistence?: Persistence | null,
        flushOnWrite?: boolean | null,
        exportDefinition?: ExportDefinition | null,
    );

    /**
     * The unique name of the stream.
     * Must be an alphanumeric string including spaces, commas, periods, hyphens, and underscores with length between 1 and 255.
     * @returns
     */
    get name(): string | null;
    /**
     * @param value The unique name of the stream.
     * Must be an alphanumeric string including spaces, commas, periods, hyphens, and underscores with length between 1 and 255.
     */
    set name(value: string | null);
    /**
     * @param value The unique name of the stream.
     * Must be an alphanumeric string including spaces, commas, periods, hyphens, and underscores with length between 1 and 255.
     * @returns
     */
    withName(value: string | null): this;

    /**
     * The maximum size in bytes for the entire stream. Set to 256MB by default with a minimum of 1KB and a maximum of 8192PB.
     * @returns
     */
    get maxSize(): number | null;
    /**
     * @param value The maximum size in bytes for the entire stream. Set to 256MB by default with a minimum of 1KB and a maximum of 8192PB.
     */
    set maxSize(value: number | null);
    /**
     * @param value The maximum size in bytes for the entire stream. Set to 256MB by default with a minimum of 1KB and a maximum of 8192PB.
     * @returns
     */
    withMaxSize(value: number | null): this;

    /**
     * The size of each segment of the stream. Set to 16MB by default with a minimum of 1KB and a maximum of 2GB.
     * Data is only deleted segment by segment, so the segment size is the smallest amount of data which can be deleted.
     * @returns
     */
    get streamSegmentSize(): number | null;
    /**
     * @param value The size of each segment of the stream. Set to 16MB by default with a minimum of 1KB and a maximum of 2GB.
     * Data is only deleted segment by segment, so the segment size is the smallest amount of data which can be deleted.
     */
    set streamSegmentSize(value: number | null);
    /**
     * @param value The size of each segment of the stream. Set to 16MB by default with a minimum of 1KB and a maximum of 2GB.
     * Data is only deleted segment by segment, so the segment size is the smallest amount of data which can be deleted.
     * @returns
     */
    withStreamSegmentSize(value: number | null): this;

    /**
     * Time to live for each message in milliseconds. Data may be deleted at any time after the TTL expires; deletion is not guaranteed to occur immediately when the TTL expires.
     * The minimum value is 60000 milliseconds and the maximum is 9223372036854 milliseconds.
     * @returns
     */
    get timeToLiveMillis(): number | null;
    /**
     * @param value Time to live for each message in milliseconds. Data may be deleted at any time after the TTL expires; deletion is not guaranteed to occur immediately when the TTL expires.
     * The minimum value is 60000 milliseconds and the maximum is 9223372036854 milliseconds.
     */
    set timeToLiveMillis(value: number | null);
    /**
     * @param value Time to live for each message in milliseconds. Data may be deleted at any time after the TTL expires; deletion is not guaranteed to occur immediately when the TTL expires.
     * The minimum value is 60000 milliseconds and the maximum is 9223372036854 milliseconds.
     * @returns
     */
    withTimeToLiveMillis(value: number | null): this;

    /**
     * What to do when the maximum size of the stream is reached.
     * RejectNewData: any append message request after the stream is full will be rejected with an exception.
     * OverwriteOldestData: the oldest stream segments will be deleted until there is room for the new message.
     * @returns
     */
    get strategyOnFull(): StrategyOnFull | null;
    /**
     * @param value What to do when the maximum size of the stream is reached.
     * RejectNewData: any append message request after the stream is full will be rejected with an exception.
     * OverwriteOldestData: the oldest stream segments will be deleted until there is room for the new message.
     */
    set strategyOnFull(value: StrategyOnFull | null);
    /**
     * @param value What to do when the maximum size of the stream is reached.
     * RejectNewData: any append message request after the stream is full will be rejected with an exception.
     * OverwriteOldestData: the oldest stream segments will be deleted until there is room for the new message.
     * @returns
     */
    withStrategyOnFull(value: StrategyOnFull | null): this;

    /**
     * Stream persistence. If set to File, the file system will be used to persist messages long-term and is resilient to restarts.
     * Memory should be used when performance matters more than durability as it only stores the stream in memory and never writes to the disk.
     * @returns
     */
    get persistence(): Persistence | null;

    /**
     * @param value Stream persistence. If set to File, the file system will be used to persist messages long-term and is resilient to restarts.
     * Memory should be used when performance matters more than durability as it only stores the stream in memory and never writes to the disk.
     */
    set persistence(value: Persistence | null);
    /**
     * @param value Stream persistence. If set to File, the file system will be used to persist messages long-term and is resilient to restarts.
     * Memory should be used when performance matters more than durability as it only stores the stream in memory and never writes to the disk.
     * @returns
     */
    withPersistence(value: Persistence | null): this;

    /**
     * This only applies when Persistence is set to File mode.
     * Waits for the filesystem to complete the write for every message. This is safer, but slower. Default is false.
     * @returns
     */
    get flushOnWrite(): boolean | null;

    /**
     * @param value This only applies when Persistence is set to File mode.
     * Waits for the filesystem to complete the write for every message. This is safer, but slower. Default is false.
     */
    set flushOnWrite(value: boolean | null);

    /**
     * @param value This only applies when Persistence is set to File mode.
     * Waits for the filesystem to complete the write for every message. This is safer, but slower. Default is false.
     * @returns
     */
    withFlushOnWrite(value: boolean | null): this;

    /**
     * Defines how and where the stream is uploaded. See the definition of the ExportDefinition object for more detail.
     * @returns
     */
    get exportDefinition(): ExportDefinition | null;
    /**
     * @param value Defines how and where the stream is uploaded. See the definition of the ExportDefinition object for more detail.
     */
    set exportDefinition(value: ExportDefinition | null);
    /**
     * @param value Defines how and where the stream is uploaded. See the definition of the ExportDefinition object for more detail.
     * @returns
     */
    withExportDefinition(value: ExportDefinition | null): this;

    static fromMap(d: MessageStreamDefinitionMap): MessageStreamDefinition;

    asMap(): MessageStreamDefinitionMap;

    static typesMap: TypesMap;
    static formatsMap: Record<string, never>;
    static validationsMap: ValidationsMap;
}

export interface MessageStreamDefinitionMap {
    name?: string | null;
    maxSize?: number | null;
    streamSegmentSize?: number | null;
    timeToLiveMillis?: number | null;
    strategyOnFull?: StrategyOnFullMap | null;
    persistence?: PersistenceMap | null;
    flushOnWrite?: boolean | null;
    exportDefinition?: ExportDefinitionMap | null;
}

export {};
