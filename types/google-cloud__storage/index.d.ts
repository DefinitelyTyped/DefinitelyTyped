// Type definitions for @google-cloud/storage 1.1
// Project: https://github.com/GoogleCloudPlatform/google-cloud-node/tree/master/packages/storage
// Definitions by: Brian Love <https://github.com/blove>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare module "@google-cloud/storage" {
  export * from "@google-cloud/storage/bucket";
  export * from "@google-cloud/storage/channel";
  export * from "@google-cloud/storage/file";
  export * from "@google-cloud/storage/storage";
}

declare module "@google-cloud/storage/bucket" {
  import { ReadStream } from "fs";
  import { Channel, ChannelConfig } from "@google-cloud/storage/channel";
  import { File } from "@google-cloud/storage/file";
  import {
    Acl,
    ApiResponse,
    UploadOptions
  } from "@google-cloud/storage/storage";

  /**
   * A bucket in the cloud.
   */
  class Bucket {
    acl: Acl;
    combine(sources: string[] | File[], destination: string [] | File[]): Promise<[File, ApiResponse]>;
    create(config?: BucketConfig): Promise<[Bucket, ApiResponse]>;
    createChannel(id: string, config: ChannelConfig): Promise<[Channel, ApiResponse]>;
    delete(): Promise<[ApiResponse]>;
    deleteFiles(query?: BucketQuery): Promise<void>;
    exists(): Promise<[boolean]>;
    file(name: string, options?: BucketFileOptions): File;
    get(options?: BucketGetOptions): Promise<[Bucket, ApiResponse]>;
    getFiles(query?: BucketQuery): Promise<[File[]]>;
    getFilesStream(query?: BucketQuery): ReadStream;
    getMetadata(): Promise<[BucketMetadata, ApiResponse]>;
    id: string;
    makePrivate(options?: BucketPrivacyOptions): Promise<[File[]]>;
    makePublic(options?: BucketPrivacyOptions): Promise<[File[]]>;
    metadata: BucketMetadata;
    name: string;
    setMetadata(metadata?: BucketMetadata): Promise<[ApiResponse]>;
    upload(localPath: string, options?: UploadOptions): Promise<[File]>;
  }

  /**
   * Bucket configuration.
   */
  interface BucketConfig {
    coldline?: boolean;
    dra?: boolean;
    location?: string;
    multiRegional?: boolean;
    nearline?: boolean;
    regional?: boolean;
    versioning?: {
      enabled?: boolean
    };
  }

  /**
   * Options for getting a file.
   */
  interface BucketFileOptions {
    generation?: string | number;
  }

  /**
   * Options for getting a bucket.
   */
  interface BucketGetOptions {
    autoCreate?: boolean;
  }

  /**
   * Bucket metadata.
   */
  interface BucketMetadata {
    etag?: string;
    id?: string;
    kind?: string;
    location?: string;
    metageneration?: string;
    name?: string;
    projectNumber?: string;
    selfLink?: string;
    storageClass?: string;
    timeCreated?: string;
    updated?: string;
  }

  /**
   * The options for making the bucket private.
   */
  interface BucketPrivacyOptions {
    includeFiles?: boolean;
    force?: boolean;
  }

  /**
   * Query a bucket.
   */
  interface BucketQuery {
    autoPaginate?: boolean;
    delimiter?: string;
    prefix?: string;
    maxApiCalls?: number;
    maxResults?: number;
    pageToken?: string;
    versions?: boolean;
  }
}

declare module "@google-cloud/storage/channel" {
  import { ApiResponse } from "@google-cloud/storage/storage";

  /**
   * This class allows you interact with Google Cloud Storage.
   */
  class Channel {
    stop(): Promise<[ApiResponse]>;
  }

  /**
   * Channel configuration.
   */
  interface ChannelConfig {
    address: string;
  }
}

declare module "@google-cloud/storage/file" {
  import { ReadStream, WriteStream } from "fs";
  import { Bucket } from "@google-cloud/storage/bucket";
  import {
    Acl,
    ApiResponse,
    DownloadOptions,
    ReadStreamOptions,
    UploadOptions,
    WriteStreamOptions
  } from "@google-cloud/storage/storage";

  /**
   * Options for specifying the content length range.
   */
  interface ContentLengthRange {
    max?: number;
    min?: number;
  }

  /**
   * A file in the cloud.
   */
  class File {
    acl: Acl;
    copy(destination: string | Bucket | File): Promise<[File, ApiResponse]>;
    createReadStream(options?: ReadStreamOptions): ReadStream;
    createWriteStream(options?: WriteStreamOptions): WriteStream;
    delete(): Promise<[ApiResponse]>;
    download(options?: DownloadOptions): Promise<[string]>;
    exists(): Promise<[boolean]>;
    get(): Promise<[File, ApiResponse]>;
    getMetadata(): Promise<[FileMetadata, ApiResponse]>;
    getSignedPolicy(options?: SignedPolicyOptions): Promise<[SignedPolicy]>;
    getSignedUrl(config?: SignedUrlConfig): Promise<[string]>;
    makePrivate(options?: FilePrivateOptions): Promise<[ApiResponse]>;
    makePublic(): Promise<[ApiResponse]>;
    move(destination: string | Bucket | File): Promise<[File, ApiResponse]>;
    name: string;
    save(data: string, options?: WriteStreamOptions): Promise<void>;
    setEncryptionKey(encryptionKey: string | Buffer): File;
    setMetadata(metadata: FileMetadata): Promise<[ApiResponse]>;
  }

  /**
   * File metadata.
   */
  interface FileMetadata {
    contentType?: string;
  }

  /**
   * Options when setting the file as private.
   */
  interface FilePrivateOptions {
    strict?: boolean;
  }

  /**
   * A signed policy allowing a user to upload a file with a POST.
   */
  interface SignedPolicy {
    base64?: string;
    signature?: string;
    string?: string;
  }

  /**
   * Options when obtaining the signed policy.
   */
  interface SignedPolicyOptions {
    acl?: string;
    contentLengthRange?: ContentLengthRange;
    equals?: string[] | [string[]];
    expires?: number | string;
    max?: number;
    min?: number;
    startsWith?: string[] | [string[]];
    successRedirect?: string;
    successStatus?: string;
  }

  /**
   * Options when obtaining a temporary signed URL for a file.
   */
  interface SignedUrlConfig {
    action: string;
    cname?: string;
    contentMd5?: string;
    contentType?: string;
    expires?: number | string;
    extensionHeaders?: {[key: string]: string};
    promptSaveAs?: string;
    responseDisposition?: string;
    responseType?: string;
  }
}

declare module "@google-cloud/storage/storage" {
  import { ReadStream } from "fs";
  import { Bucket, BucketConfig, BucketQuery } from "@google-cloud/storage/bucket";
  import { Channel } from "@google-cloud/storage/channel";
  import { FileMetadata } from "@google-cloud/storage/file";

  /**
   * Access control list for storage buckets and files.
   */
  class Acl extends AclActions {
    default: AclEntity;
    owners: AclEntity;
    readers: AclEntity;
    writers: AclEntity;
  }

  /**
   * Actions that can be performed on all ACL entities, including the root Acl.
   */
  class AclActions {
    add(options: AclOptions): Promise<[Acl, ApiResponse]>;
    delete(options: AclOptions): Promise<[Acl, ApiResponse]>;
    get(options: AclOptions): Promise<[Acl, ApiResponse]>;
    update(options: AclOptions): Promise<[Acl, ApiResponse]>;
  }

  /**
   * An object of convenience methods to add or delete reader ACL permissions for a given entity.
   */
  class AclEntity extends AclActions {
    addAllAuthenticatedUsers(): Promise<[Acl, ApiResponse]>;
    addAllUsers(): Promise<[Acl, ApiResponse]>;
    addDomain(entity: string): Promise<[Acl, ApiResponse]>;
    addGroup(entity: string): Promise<[Acl, ApiResponse]>;
    addProject(entity: string): Promise<[Acl, ApiResponse]>;
    addUser(entity: string): Promise<[Acl, ApiResponse]>;
    deleteAllAuthenticatedUsers(): Promise<[Acl, ApiResponse]>;
    deleteAllUsers(): Promise<[Acl, ApiResponse]>;
    deleteDomain(entity: string): Promise<[Acl, ApiResponse]>;
    deleteGroup(entity: string): Promise<[Acl, ApiResponse]>;
    deleteProject(entity: string): Promise<[Acl, ApiResponse]>;
    deleteUser(entity: string): Promise<[Acl, ApiResponse]>;
  }

  /**
   * ACL options.
   */
  interface AclOptions {
    entity?: string;
    role?: string;
    generation?: number;
  }

  /**
   * The response object.
   */
  interface ApiResponse {
    etag?: string;
    id?: string;
    kind?: string;
    location?: string;
    metageneration?: string;
    name?: string;
    projectNumber?: string;
    selfLink?: string;
    storageClass?: string;
    timeCreated?: string;
    updated?: string;
  }

  interface Credentials {
    client_email?: string;
    private_key?: string;
  }

  interface ConfigurationObject {
    autoRetry?: boolean;
    credentials?: Credentials;
    email?: string;
    keyFilename?: string;
    maxRetries?: number;
    projectId?: string;
    promise?: PromiseLibrary<any>;
  }

  /**
   * The options when downloading a file.
   */
  interface DownloadOptions extends ReadStreamOptions {
    destination?: string;
  }

  /**
   * Options when reading a file stream.
   */
  interface ReadStreamOptions {
    end?: number;
    start?: number;
    validation?: string | boolean;
  }

  /**
   * Options when uploading file to bucket.
   */
  interface UploadOptions extends WriteStreamOptions {
    destination?: string;
  }

  /**
   * Options when writing to a file stream.
   */
  interface WriteStreamOptions {
    gzip?: boolean;
    metadata?: FileMetadata;
    offset?: number;
    predefinedAcl?: string;
    private?: boolean;
    public?: boolean;
    resumable?: boolean;
    uri?: string;
    validation?: string | boolean;
  }

  /**
   * The Storage class allows you interact with Google Cloud Storage.
   */
  class Storage {
    constructor(options?: ConfigurationObject);
    acl: Acl;
    bucket(name: string|Bucket): Bucket;
    channel(id: string, resourceId: string): Channel;
    createBucket(name: string, metadata?: BucketConfig): Promise<[Bucket, ApiResponse]>;
    getBuckets(query?: BucketQuery): Promise<[Bucket[]]>;
    getBucketsStream(query?: BucketQuery): Promise<[ReadStream]>;
  }

  type PromiseLibrary<T> = () => PromiseLike<T>;
}
