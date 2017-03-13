// Type definitions for @google-cloud/storage v0.7.0
// Project: https://github.com/GoogleCloudPlatform/google-cloud-node/blob/master/packages/storage/src/bucket.js
// Definitions by: Brian Love <http://brianflove.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Channel, IChannelConfig } from "../channel";
import { File } from "../file";
import {
  Acl,
  IApiResponse,
  IUploadOptions
} from "../storage";

declare module "@google-cloud/storage/bucket" {

  /**
   * A bucket in the cloud.
   * @class Bucket
   */
  export class Bucket {
    acl: Acl;
    combine(sources: string[] | File[], destination: string [] | File[]): Promise<[File, IApiResponse]>;
    create(config?: IBucketConfig): Promise<[Bucket, IApiResponse]>;
    createChannel(id: string, config: IChannelConfig): Promise<[Channel, IApiResponse]>;
    delete(): Promise<[IApiResponse]>;
    deleteFiles(query?: IBucketQuery): Promise<void>;
    exists(): Promise<[boolean]>;
    file(name: string, options?: IBucketFileOptions): File;
    get(options?: IBucketGetOptions): Promise<[Bucket, IApiResponse]>;
    getFiles(query?: IBucketQuery): Promise<[File[]]>;
    getFilesStream(query?: IBucketQuery): ReadableStream;
    getMetadata(): Promise<[IBucketMetadata, IApiResponse]>;
    id: string;
    makePrivate(options?: IBucketPrivacyOptions): Promise<[File[]]>;
    makePublic(options?: IBucketPrivacyOptions): Promise<[File[]]>;
    metadata: IBucketMetadata;
    name: string;
    setMetadata(metadata?: IBucketMetadata): Promise<[IApiResponse]>;
    upload(localPath: string, options?: IUploadOptions): Promise<[File]>;
  }

  /**
   * Bucket configuration.
   * @interface IBucketConfig
   */
  export interface IBucketConfig {
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
   * Options for getting a
   * @interface IBucketFileOptions
   */
  export interface IBucketFileOptions {
    generation?: string | number;
  }

  /**
   * Options for getting a bucket.
   * @interface IBucketFileOptions
   */
  export interface IBucketGetOptions {
    autoCreate?: boolean;
  }

  /**
   * Bucket metadata.
   * @interface IBucketMetadata
   */
  export interface IBucketMetadata {

  }

  /**
   * The options for making the bucket private.
   * @interface IBucketPrivacyOptions
   */
  export interface IBucketPrivacyOptions {
    includeFiles?: boolean;
    force?: boolean;
  }

  /**
   * Query a bucket.
   * @interface IBucketQuery
   */
  export interface IBucketQuery {
    autoPaginate?: boolean;
    delimiter?: string;
    prefix?: string;
    maxApiCalls?: number;
    maxResults?: number;
    pageToken?: string;
    versions?: boolean;
  }
}