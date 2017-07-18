import { ReadStream } from "fs";
import { Channel, ChannelConfig } from "./channel";
import { File } from "./file";
import {
  Acl,
  ApiResponse,
  UploadOptions
} from "./storage";

/**
 * A bucket in the cloud.
 */
export class Bucket {
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
export interface BucketConfig {
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
export interface BucketFileOptions {
  generation?: string | number;
}

/**
 * Options for getting a bucket.
 */
export interface BucketGetOptions {
  autoCreate?: boolean;
}

/**
 * Bucket metadata.
 */
export interface BucketMetadata {
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
export interface BucketPrivacyOptions {
  includeFiles?: boolean;
  force?: boolean;
}

/**
 * Query a bucket.
 */
export interface BucketQuery {
  autoPaginate?: boolean;
  delimiter?: string;
  prefix?: string;
  maxApiCalls?: number;
  maxResults?: number;
  pageToken?: string;
  versions?: boolean;
}