// Type definitions for minio 7.0
// Project: https://github.com/minio/minio-js#readme
// Definitions by: Barin Britva <https://github.com/barinbritva>
//                 Lubomir Kaplan <https://github.com/castorw>
//                 Panagiotis Kapros <https://github.com/loremaps>
//                 Ben Watkins <https://github.com/OutdatedVersion>
//                 Seohyun Yoon <https://github.com/seohyun0120>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

// Import from dependencies
import { Readable as ReadableStream } from 'stream';
import { EventEmitter } from 'events';
import { AgentOptions } from 'https';

// Exports only from typings
export type Region = 'us-east-1' |
    'us-west-1' |
    'us-west-2' |
    'eu-west-1' |
    'eu-central-1' |
    'ap-southeast-1' |
    'ap-northeast-1' |
    'ap-southeast-2' |
    'sa-east-1' |
    'cn-north-1' |
    string;
export type NotificationEvent = 's3:ObjectCreated:*' |
    's3:ObjectCreated:Put' |
    's3:ObjectCreated:Post' |
    's3:ObjectCreated:Copy' |
    's3:ObjectCreated:CompleteMultipartUpload' |
    's3:ObjectRemoved:*' |
    's3:ObjectRemoved:Delete' |
    's3:ObjectRemoved:DeleteMarkerCreated' |
    's3:ReducedRedundancyLostObject' |
    's3:TestEvent' |
    's3:ObjectRestore:Post' |
    's3:ObjectRestore:Completed' |
    's3:Replication:OperationFailedReplication' |
    's3:Replication:OperationMissedThreshold' |
    's3:Replication:OperationReplicatedAfterThreshold' |
    's3:Replication:OperationNotTracked' |
    string;
export type Mode = 'COMPLIANCE' | 'GOVERNANCE';
export type LockUnit = 'Days' | 'Years';
export type LegalHoldStatus = 'ON' | 'OFF';
export type NoResultCallback = (error: Error | null) => void;
export type ResultCallback<T> = (error: Error | null, result: T) => void;
export type VersioningConfig = Record<string | number | symbol, unknown>;
export type TagList = Record<string, string>;
export type EmptyObject = Record<string, never>;
export type VersionIdentificator = Pick<RetentionOptions, 'versionId'>;
export type Lifecycle = LifecycleConfig | null | '';
export type Lock = LockConfig | EmptyObject;
export type Encryption = EncryptionConfig | EmptyObject;
export type Retention = RetentionOptions | EmptyObject;
export type IsoDate = string;

export interface ClientOptions {
    endPoint: string;
    accessKey: string;
    secretKey: string;
    useSSL?: boolean | undefined;
    port?: number | undefined;
    region?: Region | undefined;
    transport?: any;
    sessionToken?: string | undefined;
    partSize?: number | undefined;
    pathStyle?: boolean | undefined;
}

export interface BucketItemFromList {
    name: string;
    creationDate: Date;
}

export interface BucketItemCopy {
    etag: string;
    lastModified: Date;
}

export interface BucketItem {
    name: string;
    prefix: string;
    size: number;
    etag: string;
    lastModified: Date;
}

export interface BucketItemWithMetadata extends BucketItem {
    metadata: ItemBucketMetadata | ItemBucketMetadataList;
}

export interface BucketItemStat {
    size: number;
    etag: string;
    lastModified: Date;
    metaData: ItemBucketMetadata;
}

export interface IncompleteUploadedBucketItem {
    key: string;
    uploadId: string;
    size: number;
}

export interface BucketStream<T> extends ReadableStream {
    on(event: 'data', listener: (item: T) => void): this;
    on(event: 'end' | 'pause' | 'readable' | 'resume' | 'close', listener: () => void): this;
    on(event: "error", listener: (err: Error) => void): this;
    on(event: string | symbol, listener: (...args: any[]) => void): this;
}

export interface PostPolicyResult {
    postURL: string;
    formData: {
        [key: string]: any;
    };
}

export interface MetadataItem {
    Key: string;
    Value: string;
}

export interface ItemBucketMetadataList {
    Items: MetadataItem[];
}

export interface ItemBucketMetadata {
    [key: string]: any;
}

export interface UploadedObjectInfo {
    etag: string;
    versionId: string | null;
}

export interface Tag {
    Key: string;
    Value: string;
}

export interface LifecycleConfig {
    Rule: LifecycleRule[];
}

export interface LifecycleRule {
    [key: string]: any;
}

export interface LockConfig {
    mode: Mode;
    unit: LockUnit;
    validity: number;
}

export interface EncryptionConfig {
    Rule: EncryptionRule[];
}

export interface EncryptionRule {
    [key: string]: any;
}

export interface ReplicationConfig {
    role: string;
    rules: [];
}

export interface ReplicationConfig {
    [key: string]: any;
}

export interface RetentionOptions {
    versionId: string;
    mode?: Mode;
    retainUntilDate?: IsoDate;
    governanceBypass?: boolean;
}

export interface LegalHoldOptions {
    versionId: string;
    status: LegalHoldStatus;
}

export interface InputSerialization {
    CompressionType?: 'NONE' | 'GZIP' | 'BZIP2';
    CSV?: {
        AllowQuotedRecordDelimiter?: boolean;
        Comments?: string;
        FieldDelimiter?: string;
        FileHeaderInfo?: 'NONE' | 'IGNORE' | 'USE';
        QuoteCharacter?: string;
        QuoteEscapeCharacter?: string;
        RecordDelimiter?: string;
    };
    JSON?: {
        Type: 'DOCUMENT' | 'LINES';
    };
    Parquet?: EmptyObject;
}

export interface OutputSerialization {
    CSV?: {
        FieldDelimiter?: string;
        QuoteCharacter?: string;
        QuoteEscapeCharacter?: string;
        QuoteFields?: string;
        RecordDelimiter?: string;
    };
    JSON?: {
        RecordDelimiter?: string;
    };
}

export interface SelectOptions {
    expression: string;
    expressionType?: string;
    inputSerialization: InputSerialization;
    outputSerialization: OutputSerialization;
    requestProgress?: { Enabled: boolean };
    scanRange?: { Start: number, End: number };
}

export interface SourceObjectStats {
    size: number;
    metaData: string;
    lastModicied: Date;
    versionId: string;
    etag: string;
}

// No need to export this. But without it - linter error.
export class TargetConfig {
    setId(id: any): void;
    addEvent(newEvent: any): void;
    addFilterSuffix(suffix: any): void;
    addFilterPrefix(prefix: any): void;
}

// Exports from library
export class Client {
    constructor(options: ClientOptions);

    // Bucket operations
    makeBucket(bucketName: string, region: Region, callback: NoResultCallback): void;
    makeBucket(bucketName: string, region: Region): Promise<void>;

    listBuckets(callback: ResultCallback<BucketItemFromList[]>): void;
    listBuckets(): Promise<BucketItemFromList[]>;

    bucketExists(bucketName: string, callback: ResultCallback<boolean>): void;
    bucketExists(bucketName: string): Promise<boolean>;

    removeBucket(bucketName: string, callback: NoResultCallback): void;
    removeBucket(bucketName: string): Promise<void>;

    listObjects(bucketName: string, prefix?: string, recursive?: boolean): BucketStream<BucketItem>;

    listObjectsV2(bucketName: string, prefix?: string, recursive?: boolean, startAfter?: string): BucketStream<BucketItem>;

    listIncompleteUploads(bucketName: string, prefix?: string, recursive?: boolean): BucketStream<IncompleteUploadedBucketItem>;

    getBucketVersioning(bucketName: string, callback: ResultCallback<VersioningConfig>): void;
    getBucketVersioning(bucketName: string): Promise<VersioningConfig>;

    setBucketVersioning(bucketName: string, versioningConfig: any, callback: NoResultCallback): void;
    setBucketVersioning(bucketName: string, versioningConfig: any): Promise<void>;

    getBucketTagging(bucketName: string, callback: ResultCallback<Tag[]>): void;
    getBucketTagging(bucketName: string): Promise<Tag[]>;

    setBucketTagging(bucketName: string, tags: TagList, callback: NoResultCallback): void;
    setBucketTagging(bucketName: string, tags: TagList): Promise<void>;

    removeBucketTagging(bucketName: string, callback: NoResultCallback): void;
    removeBucketTagging(bucketName: string): Promise<void>;

    setBucketLifecycle(bucketName: string, lifecycleConfig: Lifecycle, callback: NoResultCallback): void;
    setBucketLifecycle(bucketName: string, lifecycleConfig: Lifecycle): Promise<void>;

    getBucketLifecycle(bucketName: string, callback: ResultCallback<Lifecycle>): void;
    getBucketLifecycle(bucketName: string): Promise<Lifecycle>;

    removeBucketLifecycle(bucketName: string, callback: NoResultCallback): void;
    removeBucketLifecycle(bucketName: string): Promise<void>;

    setObjectLockConfig(bucketName: string, callback: NoResultCallback): void;
    setObjectLockConfig(bucketName: string, lockConfig: Lock, callback: NoResultCallback): void;
    setObjectLockConfig(bucketName: string, lockConfig?: Lock): Promise<void>;

    getObjectLockConfig(bucketName: string, callback: ResultCallback<Lock>): void;
    getObjectLockConfig(bucketName: string): Promise<Lock>;

    getBucketEncryption(bucketName: string, callback: ResultCallback<Encryption>): void;
    getBucketEncryption(bucketName: string): Promise<Encryption>;

    setBucketEncryption(bucketName: string, encryptionConfig: Encryption, callback: NoResultCallback): void;
    setBucketEncryption(bucketName: string, encryptionConfig: Encryption): Promise<void>;

    removeBucketEncryption(bucketName: string, callback: NoResultCallback): void;
    removeBucketEncryption(bucketName: string): Promise<void>;

    setBucketReplication(bucketName: string, replicationConfig: ReplicationConfig, callback: NoResultCallback): void;
    setBucketReplication(bucketName: string, replicationConfig: ReplicationConfig): Promise<void>;

    getBucketReplication(bucketName: string, callback: ResultCallback<ReplicationConfig>): void;
    getBucketReplication(bucketName: string): Promise<ReplicationConfig>;

    removeBucketReplication(bucketName: string, callback: NoResultCallback): void;
    removeBucketReplication(bucketName: string): Promise<void>;

    // Object operations
    getObject(bucketName: string, objectName: string, callback: ResultCallback<ReadableStream>): void;
    getObject(bucketName: string, objectName: string): Promise<ReadableStream>;

    getPartialObject(bucketName: string, objectName: string, offset: number, callback: ResultCallback<ReadableStream>): void;
    getPartialObject(bucketName: string, objectName: string, offset: number, length: number, callback: ResultCallback<ReadableStream>): void;
    getPartialObject(bucketName: string, objectName: string, offset: number, length?: number): Promise<ReadableStream>;

    fGetObject(bucketName: string, objectName: string, filePath: string, callback: NoResultCallback): void;
    fGetObject(bucketName: string, objectName: string, filePath: string): Promise<void>;

    putObject(bucketName: string, objectName: string, stream: ReadableStream | Buffer | string, callback: ResultCallback<UploadedObjectInfo>): void;
    putObject(bucketName: string, objectName: string, stream: ReadableStream | Buffer | string, size: number, callback: ResultCallback<UploadedObjectInfo>): void;
    putObject(bucketName: string, objectName: string, stream: ReadableStream | Buffer | string, size: number, metaData: ItemBucketMetadata, callback: ResultCallback<UploadedObjectInfo>): void;
    putObject(bucketName: string, objectName: string, stream: ReadableStream | Buffer | string, size?: number, metaData?: ItemBucketMetadata): Promise<UploadedObjectInfo>;
    putObject(bucketName: string, objectName: string, stream: ReadableStream | Buffer | string, metaData?: ItemBucketMetadata): Promise<UploadedObjectInfo>;

    fPutObject(bucketName: string, objectName: string, filePath: string, metaData: ItemBucketMetadata, callback: ResultCallback<UploadedObjectInfo>): void;
    fPutObject(bucketName: string, objectName: string, filePath: string, metaData?: ItemBucketMetadata): Promise<UploadedObjectInfo>;

    copyObject(bucketName: string, objectName: string, sourceObject: string, conditions: CopyConditions, callback: ResultCallback<BucketItemCopy>): void;
    copyObject(bucketName: string, objectName: string, sourceObject: string, conditions: CopyConditions): Promise<BucketItemCopy>;

    statObject(bucketName: string, objectName: string, callback: ResultCallback<BucketItemStat>): void;
    statObject(bucketName: string, objectName: string): Promise<BucketItemStat>;

    removeObject(bucketName: string, objectName: string, callback: NoResultCallback): void;
    removeObject(bucketName: string, objectName: string): Promise<void>;

    removeObjects(bucketName: string, objectsList: string[], callback: NoResultCallback): void;
    removeObjects(bucketName: string, objectsList: string[]): Promise<void>;

    removeIncompleteUpload(bucketName: string, objectName: string, callback: NoResultCallback): void;
    removeIncompleteUpload(bucketName: string, objectName: string): Promise<void>;

    putObjectRetention(bucketName: string, objectName: string, callback: NoResultCallback): void;
    putObjectRetention(bucketName: string, objectName: string, retentionOptions: Retention, callback: NoResultCallback): void;
    putObjectRetention(bucketName: string, objectName: string, retentionOptions?: Retention): Promise<void>;

    getObjectRetention(bucketName: string, objectName: string, options: VersionIdentificator, callback: ResultCallback<Retention>): void;
    getObjectRetention(bucketName: string, objectName: string, options: VersionIdentificator): Promise<Retention>;

    // It seems, putObjectTagging is deprecated in favor or setObjectTagging - there is no such a method in the library source code
    /**
     * @deprecated Use setObjectTagging instead.
     */
    putObjectTagging(bucketName: string, objectName: string, tags: TagList, callback: NoResultCallback): void;
    /**
     * @deprecated Use setObjectTagging instead.
     */
    putObjectTagging(bucketName: string, objectName: string, tags: TagList, putOptions: VersionIdentificator, callback: NoResultCallback): void;
    /**
     * @deprecated Use setObjectTagging instead.
     */
    putObjectTagging(bucketName: string, objectName: string, tags: TagList, putOptions?: VersionIdentificator): Promise<void>;

    setObjectTagging(bucketName: string, objectName: string, tags: TagList, callback: NoResultCallback): void;
    setObjectTagging(bucketName: string, objectName: string, tags: TagList, putOptions: VersionIdentificator, callback: NoResultCallback): void;
    setObjectTagging(bucketName: string, objectName: string, tags: TagList, putOptions?: VersionIdentificator): Promise<void>;

    removeObjectTagging(bucketName: string, objectName: string, callback: NoResultCallback): void;
    removeObjectTagging(bucketName: string, objectName: string, removeOptions: VersionIdentificator, callback: NoResultCallback): void;
    removeObjectTagging(bucketName: string, objectName: string, removeOptions?: VersionIdentificator): Promise<void>;

    getObjectTagging(bucketName: string, objectName: string, callback: ResultCallback<Tag[]>): void;
    getObjectTagging(bucketName: string, objectName: string, getOptions: VersionIdentificator, callback: ResultCallback<Tag[]>): void;
    getObjectTagging(bucketName: string, objectName: string, getOptions?: VersionIdentificator): Promise<Tag[]>;

    getObjectLegalHold(bucketName: string, objectName: string, callback: ResultCallback<LegalHoldOptions>): void;
    getObjectLegalHold(bucketName: string, objectName: string, getOptions: VersionIdentificator, callback: ResultCallback<LegalHoldOptions>): void;
    getObjectLegalHold(bucketName: string, objectName: string, getOptions?: VersionIdentificator): Promise<LegalHoldOptions>;

    setObjectLegalHold(bucketName: string, objectName: string, callback: NoResultCallback): void;
    setObjectLegalHold(bucketName: string, objectName: string, setOptions: LegalHoldOptions, callback: NoResultCallback): void;
    setObjectLegalHold(bucketName: string, objectName: string, setOptions?: LegalHoldOptions): Promise<void>;

    composeObject(destObjConfig: CopyDestinationOptions, sourceObjList: CopySourceOptions[], callback: ResultCallback<SourceObjectStats>): void;
    composeObject(destObjConfig: CopyDestinationOptions, sourceObjList: CopySourceOptions[]): Promise<SourceObjectStats>;

    selectObjectContent(bucketName: string, objectName: string, selectOpts: SelectOptions, callback: NoResultCallback): void;
    selectObjectContent(bucketName: string, objectName: string, selectOpts: SelectOptions): Promise<void>;

    // Presigned operations
    presignedUrl(httpMethod: string, bucketName: string, objectName: string, callback: ResultCallback<string>): void;
    presignedUrl(httpMethod: string, bucketName: string, objectName: string, expiry: number, callback: ResultCallback<string>): void;
    presignedUrl(httpMethod: string, bucketName: string, objectName: string, expiry: number, reqParams: { [key: string]: any; }, callback: ResultCallback<string>): void;
    presignedUrl(httpMethod: string, bucketName: string, objectName: string, expiry: number, reqParams: { [key: string]: any; }, requestDate: Date, callback: ResultCallback<string>): void;
    presignedUrl(httpMethod: string, bucketName: string, objectName: string, expiry?: number, reqParams?: { [key: string]: any; }, requestDate?: Date): Promise<string>;

    presignedGetObject(bucketName: string, objectName: string, callback: ResultCallback<string>): void;
    presignedGetObject(bucketName: string, objectName: string, expiry: number, callback: ResultCallback<string>): void;
    presignedGetObject(bucketName: string, objectName: string, expiry: number, respHeaders: { [key: string]: any; }, callback: ResultCallback<string>): void;
    presignedGetObject(bucketName: string, objectName: string, expiry: number, respHeaders: { [key: string]: any; }, requestDate: Date, callback: ResultCallback<string>): void;
    presignedGetObject(bucketName: string, objectName: string, expiry?: number, respHeaders?: { [key: string]: any; }, requestDate?: Date): Promise<string>;

    presignedPutObject(bucketName: string, objectName: string, callback: ResultCallback<string>): void;
    presignedPutObject(bucketName: string, objectName: string, expiry: number, callback: ResultCallback<string>): void;
    presignedPutObject(bucketName: string, objectName: string, expiry?: number): Promise<string>;

    presignedPostPolicy(policy: PostPolicy, callback: ResultCallback<PostPolicyResult>): void;
    presignedPostPolicy(policy: PostPolicy): Promise<PostPolicyResult>;

    // Bucket Policy & Notification operations
    getBucketNotification(bucketName: string, callback: ResultCallback<NotificationConfig>): void;
    getBucketNotification(bucketName: string): Promise<NotificationConfig>;

    setBucketNotification(bucketName: string, bucketNotificationConfig: NotificationConfig, callback: NoResultCallback): void;
    setBucketNotification(bucketName: string, bucketNotificationConfig: NotificationConfig): Promise<void>;

    removeAllBucketNotification(bucketName: string, callback: NoResultCallback): void;
    removeAllBucketNotification(bucketName: string): Promise<void>;

    getBucketPolicy(bucketName: string, callback: ResultCallback<string>): void;
    getBucketPolicy(bucketName: string): Promise<string>;

    setBucketPolicy(bucketName: string, bucketPolicy: string, callback: NoResultCallback): void;
    setBucketPolicy(bucketName: string, bucketPolicy: string): Promise<void>;

    listenBucketNotification(bucketName: string, prefix: string, suffix: string, events: NotificationEvent[]): NotificationPoller;

    // Custom Settings
    setS3TransferAccelerate(endpoint: string): void;

    // Other
    newPostPolicy(): PostPolicy;
    setRequestOptions(options: AgentOptions): void;

    // Minio extensions that aren't necessary present for Amazon S3 compatible storage servers
    extensions: {
        listObjectsV2WithMetadata(bucketName: string, prefix?: string, recursive?: boolean, startAfter?: string): BucketStream<BucketItemWithMetadata>;
    };
}

export namespace Policy {
    const NONE: 'none';
    const READONLY: 'readonly';
    const WRITEONLY: 'writeonly';
    const READWRITE: 'readwrite';
}

export class CopyConditions {
    setModified(date: Date): void;
    setUnmodified(date: Date): void;
    setMatchETag(etag: string): void;
    setMatchETagExcept(etag: string): void;
}

export class PostPolicy {
    setExpires(date: Date): void;
    setKey(objectName: string): void;
    setKeyStartsWith(prefix: string): void;
    setBucket(bucketName: string): void;
    setContentType(type: string): void;
    setContentLengthRange(min: number, max: number): void;
}

export class NotificationPoller extends EventEmitter {
    stop(): void;
    start(): void;
    // must to be public?
    checkForChanges(): void;
}

export class NotificationConfig {
    add(target: TopicConfig | QueueConfig | CloudFunctionConfig): void;
}

export class TopicConfig extends TargetConfig {
    constructor(arn: string);
}

export class QueueConfig extends TargetConfig {
    constructor(arn: string);
}

export class CloudFunctionConfig extends TargetConfig {
    constructor(arn: string);
}

export class CopySourceOptions {
    constructor(options: {
        Bucket: string,
        Object: string,
        VersionID?: string,
        MatchETag?: string,
        NoMatchETag?: string,
        MatchModifiedSince?: string,
        MatchUnmodifiedSince?: string,
        MatchRange?: boolean,
        Start?: number,
        End?: number,
        Encryption?: {
            type: string;
            SSEAlgorithm?: string;
            KMSMasterKeyID?: string;
        },
    });

    getHeaders(): Record<string, string>;
    validate(): boolean;
}

export class CopyDestinationOptions {
    constructor(options: {
        Bucket: string,
        Object: string,
        Encryption?: {
            type: string;
            SSEAlgorithm?: string;
            KMSMasterKeyID?: string;
        },
        UserMetadata?: Record<string, unknown>,
        UserTags?: Record<string, unknown> | string,
        LegalHold?: LegalHoldStatus,
        RetainUntilDate?: string,
        Mode?: Mode,
    });

    getHeaders(): Record<string, string>;
    validate(): boolean;
}

export function buildARN(partition: string, service: string, region: string, accountId: string, resource: string): string;

export const ObjectCreatedAll: NotificationEvent; // s3:ObjectCreated:*'
export const ObjectCreatedPut: NotificationEvent; // s3:ObjectCreated:Put
export const ObjectCreatedPost: NotificationEvent; // s3:ObjectCreated:Post
export const ObjectCreatedCopy: NotificationEvent; // s3:ObjectCreated:Copy
export const ObjectCreatedCompleteMultipartUpload: NotificationEvent; // s3:ObjectCreated:CompleteMultipartUpload
export const ObjectRemovedAll: NotificationEvent; // s3:ObjectRemoved:*
export const ObjectRemovedDelete: NotificationEvent; // s3:ObjectRemoved:Delete
export const ObjectRemovedDeleteMarkerCreated: NotificationEvent; // s3:ObjectRemoved:DeleteMarkerCreated
export const ObjectReducedRedundancyLostObject: NotificationEvent; // s3:ReducedRedundancyLostObject
