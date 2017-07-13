import { ReadStream } from "fs";
import { Bucket, BucketConfig, BucketQuery } from "./bucket";
import { Channel } from "./channel";
import { FileMetadata } from "./file";

/**
 * Access control list for storage buckets and files.
 */
export class Acl extends AclActions {
  default: AclEntity;
  owners: AclEntity;
  readers: AclEntity;
  writers: AclEntity;
}

/**
 * Actions that can be performed on all ACL entities, including the root Acl.
 */
export class AclActions {
  add(options: AclOptions): Promise<[Acl, ApiResponse]>;
  delete(options: AclOptions): Promise<[Acl, ApiResponse]>;
  get(options: AclOptions): Promise<[Acl, ApiResponse]>;
  update(options: AclOptions): Promise<[Acl, ApiResponse]>;
}

/**
 * An object of convenience methods to add or delete reader ACL permissions for a given entity.
 */
export class AclEntity extends AclActions {
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
export interface AclOptions {
  entity?: string;
  role?: string;
  generation?: number;
}

/**
 * The response object.
 */
export interface ApiResponse {
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

export interface Credentials {
  client_email?: string;
  private_key?: string;
}

export interface ConfigurationObject {
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
export interface DownloadOptions extends ReadStreamOptions {
  destination?: string;
}

/**
 * Options when reading a file stream.
 */
export interface ReadStreamOptions {
  end?: number;
  start?: number;
  validation?: string | boolean;
}

/**
 * Options when uploading file to bucket.
 */
export interface UploadOptions extends WriteStreamOptions {
  destination?: string;
}

/**
 * Options when writing to a file stream.
 */
export interface WriteStreamOptions {
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
 export class Storage {
  constructor(options?: ConfigurationObject);
  acl: Acl;
  bucket(name: string|Bucket): Bucket;
  channel(id: string, resourceId: string): Channel;
  createBucket(name: string, metadata?: BucketConfig): Promise<[Bucket, ApiResponse]>;
  getBuckets(query?: BucketQuery): Promise<[Bucket[]]>;
  getBucketsStream(query?: BucketQuery): Promise<[ReadStream]>;
}

export type PromiseLibrary<T> = () => PromiseLike<T>;
