// Type definitions for minio 7.0
// Project: https://github.com/minio/minio-js#readme
// Definitions by: Barin Britva <https://github.com/barinbritva>
//                 Lubomir Kaplan <https://github.com/castorw>
//                 Panagiotis Kapros <https://github.com/loremaps>
//                 Ben Watkins <https://github.com/OutdatedVersion>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

// Import from dependencies
import { Readable as ReadableStream } from 'stream';
import { EventEmitter } from 'events';
import { AgentOptions } from 'https';

// Exports only from typings
export type Region = 'us-east-1'|'us-west-1'|'us-west-2'|'eu-west-1'|'eu-central-1'|'ap-southeast-1'|'ap-northeast-1'|'ap-southeast-2'|'sa-east-1'|'cn-north-1'|string;
export type NoResultCallback = (error: Error|null) => void;
export type ResultCallback<T> = (error: Error|null, result: T) => void;

export interface ClientOptions {
    endPoint: string;
    accessKey: string;
    secretKey: string;
    useSSL?: boolean;
    port?: number;
    region?: Region;
    transport?: any;
    sessionToken?: string;
    partSize?: number;
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

export interface ItemBucketMetadata {
    [key: string]: any;
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

    // Object operations
    getObject(bucketName: string, objectName: string, callback: ResultCallback<ReadableStream>): void;
    getObject(bucketName: string, objectName: string): Promise<ReadableStream>;

    getPartialObject(bucketName: string, objectName: string, offset: number, callback: ResultCallback<ReadableStream>): void;
    getPartialObject(bucketName: string, objectName: string, offset: number, length: number, callback: ResultCallback<ReadableStream>): void;
    getPartialObject(bucketName: string, objectName: string, offset: number, length?: number): Promise<ReadableStream>;

    fGetObject(bucketName: string, objectName: string, filePath: string, callback: NoResultCallback): void;
    fGetObject(bucketName: string, objectName: string, filePath: string): Promise<void>;

    putObject(bucketName: string, objectName: string, stream: ReadableStream|Buffer|string, callback: ResultCallback<string>): void;
    putObject(bucketName: string, objectName: string, stream: ReadableStream|Buffer|string, size: number, callback: ResultCallback<string>): void;
    putObject(bucketName: string, objectName: string, stream: ReadableStream|Buffer|string, size: number, metaData: ItemBucketMetadata, callback: ResultCallback<string>): void;
    putObject(bucketName: string, objectName: string, stream: ReadableStream|Buffer|string, size?: number, metaData?: ItemBucketMetadata): Promise<string>;
    putObject(bucketName: string, objectName: string, stream: ReadableStream|Buffer|string, metaData?: ItemBucketMetadata): Promise<string>;

    fPutObject(bucketName: string, objectName: string, filePath: string, metaData: ItemBucketMetadata, callback: ResultCallback<string>): void;
    fPutObject(bucketName: string, objectName: string, filePath: string, metaData: ItemBucketMetadata): Promise<string>;

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

    // todo #low Specify events
    listenBucketNotification(bucketName: string, prefix: string, suffix: string, events: string[]): EventEmitter;

    getBucketPolicy(bucketName: string, callback: ResultCallback<string>): void;
    getBucketPolicy(bucketName: string): Promise<string>;

    setBucketPolicy(bucketName: string, bucketPolicy: string, callback: NoResultCallback): void;
    setBucketPolicy(bucketName: string, bucketPolicy: string): Promise<void>;

    // Other
    newPostPolicy(): PostPolicy;
    setRequestOptions(otpions: AgentOptions): void;
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
    add(target: TopicConfig|QueueConfig|CloudFunctionConfig): void;
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

export function buildARN(partition: string, service: string, region: string, accountId: string, resource: string): string;

export const ObjectCreatedAll: string; // s3:ObjectCreated:*'
export const ObjectCreatedPut: string; // s3:ObjectCreated:Put
export const ObjectCreatedPost: string; // s3:ObjectCreated:Post
export const ObjectCreatedCopy: string; // s3:ObjectCreated:Copy
export const ObjectCreatedCompleteMultipartUpload: string; // sh:ObjectCreated:CompleteMultipartUpload
export const ObjectRemovedAll: string; // s3:ObjectRemoved:*
export const ObjectRemovedDelete: string; // s3:ObjectRemoved:Delete
export const ObjectRemovedDeleteMarkerCreated: string; // s3:ObjectRemoved:DeleteMarkerCreated
export const ObjectReducedRedundancyLostObject: string; // s3:ReducedRedundancyLostObject
