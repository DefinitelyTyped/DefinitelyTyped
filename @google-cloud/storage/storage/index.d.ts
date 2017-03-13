// Type definitions for @google-cloud/storage v0.7.0
// Project: https://github.com/GoogleCloudPlatform/google-cloud-node/blob/master/packages/storage/src/storage.js
// Definitions by: Brian Love <http://brianflove.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Bucket, IBucketConfig, IBucketQuery } from "../bucket";
import { Channel } from "../channel";
import { IFileMetadata } from "../file";

declare module "@google-cloud/storage/storage" {

  /**
   * Access control list for storage buckets and files.
   * @class Acl
   */
  export class Acl extends AclActions {
    default: AclEntity;
    owners: AclEntity;
    readers: AclEntity;
    writers: AclEntity;

  }

  /**
   * Actions that can be performed on all ACL entities, including the root Acl.
   * @class AclActions
   */
  export class AclActions {
    add(options: IAclOptions): Promise<[Acl, IApiResponse]>;
    delete(options: IAclOptions): Promise<[Acl, IApiResponse]>;
    get(options: IAclOptions): Promise<[Acl, IApiResponse]>;
    update(options: IAclOptions): Promise<[Acl, IApiResponse]>;
  }

  /**
   * An object of convenience methods to add or delete reader ACL permissions for a given entity.
   * @class AclEntity
   */
  export class AclEntity extends AclActions {
    addAllAuthenticatedUsers(): Promise<[Acl, IApiResponse]>;
    addAllUsers(): Promise<[Acl, IApiResponse]>;
    addDomain(entity: string): Promise<[Acl, IApiResponse]>;
    addGroup(entity: string): Promise<[Acl, IApiResponse]>;
    addProject(entity: string): Promise<[Acl, IApiResponse]>;
    addUser(entity: string): Promise<[Acl, IApiResponse]>;
    deleteAllAuthenticatedUsers(): Promise<[Acl, IApiResponse]>;
    deleteAllUsers(): Promise<[Acl, IApiResponse]>;
    deleteDomain(entity: string): Promise<[Acl, IApiResponse]>;
    deleteGroup(entity: string): Promise<[Acl, IApiResponse]>;
    deleteProject(entity: string): Promise<[Acl, IApiResponse]>;
    deleteUser(entity: string): Promise<[Acl, IApiResponse]>;
  }

  /**
   * ACL options.
   * @interface IAclOptions
   */
  export interface IAclOptions {
    entity?: string;
    role?: string;
    generation?: number;
  }

  /**
   * The response object.
   * @interface IApiResponse
   */
  export interface IApiResponse {

  }

  /**
   * The options when downloading a file.
   * @interface IDownloadOptions
   */
  export interface IDownloadOptions extends IReadStreamOptions {
    destination?: string;
  }

  /**
   * Options when reading a file stream.
   * @interface IReadStreamOptions
   */
  export interface IReadStreamOptions {
    end?: number;
    start?: number;
    validation?: string | boolean;
  }

  /**
   * Options when uploading file to bucket.
   * @interface IBucketUploadOptions
   */
  export interface IUploadOptions extends IWriteStreamOptions {
    destination?: string;
  }

  /**
   * Options when writing to a file stream.
   * @interface IWriteStreamOptions
   */
  export interface IWriteStreamOptions {
    gzip?: boolean;
    metadata?: IFileMetadata;
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
   * @class Storage
   */
  export class Storage {
    acl: Acl;
    bucket(name: string|Bucket): Bucket;
    channel(id: string, resourceId: string): Channel;
    createBucket(name: string, metadata?: IBucketConfig): Promise<[Bucket, IApiResponse]>;
    getBuckets(query?: IBucketQuery): Promise<[Bucket[]]>;
    getBucketsStream(query?: IBucketQuery): Promise<[ReadableStream]>;
  }
}