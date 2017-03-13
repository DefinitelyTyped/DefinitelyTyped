//import file system i/o api
import * as fs from "fs";

//import Google Cloud Storage
import {
  Acl,
  Bucket,
  Channel,
  File,
  IApiResponse,
  IBucketConfig,
  IBucketFileOptions,
  IBucketGetOptions,
  IBucketMetadata,
  IBucketPrivacyOptions,
  IBucketQuery,
  IChannelConfig,
  IDownloadOptions,
  IFileMetadata,
  IFilePrivateOptions,
  IReadStreamOptions,
  ISignedPolicy,
  ISignedPolicyOptions,
  ISignedUrlConfig,
  IWriteStreamOptions,
  IUploadOptions
} from "./index";

/**
 * Test the storage service.
 * @class TestStorage
 */
export class TestStorage {

  //constants
  public static BUCKET_CONFIG: IBucketConfig = {
    multiRegional: true
  };

  //import Storage class
  public static gcs: Storage;

  //the bucket
  private buckets: Bucket[] = [];

  /**
   * @constructor
   */
  constructor() {
    //nothing to do
  }

  /**
   * Returns the bucket.
   * @method bucket
   * @param {string} name
   * @return {Bucket}
   */
  public bucket(name: string): Bucket {
    return TestStorage.gcs.bucket(name);
  }

  /**
   * Create a new bucket.
   * @param {string} name
   * @param {IBucketConfig} metadata
   * @return {Promise<[Bucket, IApiResponse]>}
   */
  public createBucket(name: string, config?: IBucketConfig): Promise<[Bucket, IApiResponse]> {
    //overwrite default values with custom config
    config = Object.assign(TestStorage.BUCKET_CONFIG, config);

    return TestStorage.gcs.createBucket(name, config);
  }

  /**
   * Query for buckets.
   * @param {IBucketQuery} query
   */
  public getBuckets(query?: IBucketQuery): Promise<[Bucket[]]> {
    return TestStorage.gcs.getBuckets(query);
  }
}

/**
 * The bucket API wrapper.
 * @class TestBucket
 */
export class TestBucket {

  //the bucket in the cloud
  public bucket: Bucket;

  /**
   * The acl object for this bucket.
   * @method get acl
   * @return {Acl}
   */
  public get acl(): Acl {
    return this.bucket.acl;
  }

  /**
   * The id for this bucket.
   * @method get id
   * @return {string}
   */
  public get id() {
    return this.bucket.id;
  }

  /**
   * The metadata for this bucket.
   * @method get metadata
   * @return {IBucketMetadata}
   */
  public get metadata(): IBucketMetadata {
    return this.bucket.metadata;
  }

  /**
   * Create a bucket.
   * @param {IBucketConfig} config
   * @return {Promise<[Bucket, IApiResponse]>}
   */
  public create(config?: IBucketConfig): Promise<[Bucket, IApiResponse]> {
    return this.bucket.create(config);
  }

  /**
   * Create a channel that will be notified when objects in this bucket changes.
   * @method createChannel
   * @param {string} id
   * @param {IChannelConfig} config
   * @return {Promise<[Channel, IApiResponse]>}
   */
  public createChannel(id: string, config: IChannelConfig): Promise<[Channel, IApiResponse]> {
    return this.bucket.createChannel(id, config);
  }

  /**
   * Delete the bucket.
   * @method delete
   * @return {Promise<[IApiResponse]>}
   */
  public delete(): Promise<[IApiResponse]> {
    return this.bucket.delete();
  }

  /**
   * Iterate over the bucket's files, calling file.delete() on each.
   * @method deleteFiles
   * @return {Promise<void>}
   */
  public deleteFiles(query?: IBucketQuery): Promise<void> {
    return this.bucket.deleteFiles(query);
  }

  /**
   * Check if the bucket exists.
   * @method exists
   * @return {Promise<[boolean]>}
   */
  public exists(): Promise<[boolean]> {
    return this.bucket.exists();
  }

  /**
   * Create a File object.
   * @method file
   * @param {string} name
   * @param {IBucketFileOptions} options
   */
  public file(name: string, options?: IBucketFileOptions): File {
    return this.bucket.file(name);
  }

  /**
   * Get a bucket if it exists.
   * @method get
   * @param {IBucketGetOptions} options
   */
  public get(options?: IBucketGetOptions): Promise<[Bucket, IApiResponse]> {
    return this.bucket.get(options);
  }

  /**
   * Get File objects for the files currently in the bucket
   * @method getFiles
   * @param {IBucketQuery} query
   * @return {Promise<[File[]]>}
   */
  public getFiles(query?: IBucketQuery): Promise<[File[]]> {
    return this.bucket.getFiles(query);
  }

  /**
   * Get File objects for the files currently in the bucket as a readable object stream.
   * @method getFilesStream
   * @param {IBucketQuery} query
   * @return {ReadableStream}
   */
  public getFilesStream(query?: IBucketQuery): ReadableStream {
    return this.bucket.getFilesStream(query);
  }

  /**
   * Get the bucket's metadata.
   * @method getMetadata
   * @return {Promise<[IBucketMetadata, IApiResponse]>}
   */
  public getMetadata(): Promise<[IBucketMetadata, IApiResponse]> {
    return this.bucket.getMetadata();
  }

  /**
   * Make the bucket listing private.
   * @method makePrivate
   * @param {} options
   * @return Promise<[File[]]>
   */
  public makePrivate(options?: IBucketPrivacyOptions): Promise<[File[]]> {
    return this.bucket.makePrivate(options);
  }

  /**
   * Make the bucket publicly readable.
   * @method makePublic
   * @param {} options
   * @return Promise<[File[]]>
   */
  public makePublic(options?: IBucketPrivacyOptions): Promise<[File[]]> {
    return this.bucket.makePublic(options);
  }

  /**
   * Set the bucket's metadata.
   * @method setMetadata
   * @param {IBucketMetadata} metadata
   * @return {Promise<[IApiResponse]>}
   */
  public setMetadata(metadata?: IBucketMetadata): Promise<[IApiResponse]> {
    return this.bucket.setMetadata(metadata);
  }

  /**
   * Upload a file.
   * @method upload
   * @param {localPath} string
   * @param {IUploadOptions} options
   */
  public upload(localPath: string, options?: IUploadOptions): Promise<[File]> {
    return this.bucket.upload(localPath, options);
  }
}

/**
 * The file API wrapper.
 * @class TestFile
 */
export class TestFile {

  //the file in the cloud
  public file: File;

  /**
   * The acl object for this file.
   * @method get acl
   * @return {Acl}
   */
  public get acl(): Acl {
    return this.file.acl;
  }

  /**
   * The name for this file.
   * @method get name
   * @return {string}
   */
  public get name() {
    return this.file.name;
  }

  /**
   * Copy this file to another file.
   * By default, this will copy the file to the same bucket, but you can choose to copy it to another
   * Bucket by providing a Bucket or File object or a URL starting with "gs://".
   * @method copy
   * @param {string} destination
   * @return Promise<[File, IApiResponse]>
   */

  public copy(destination: string | Bucket | File): Promise<[File, IApiResponse]> {
    return this.file.copy(destination);
  }

  /**
   * Create a readable stream to read the contents of the remote file.
   * It can be piped to a writable stream or listened to for 'data' events to read a file's contents.
   * @method createReadStream
   * @param {IReadStreamOptions} options
   * @return {ReadStream}
   */
  public createReadStream(options?: IReadStreamOptions): fs.ReadStream {
    return this.file.createReadStream(options);
  }

  /**
   * Create a writable stream to overwrite the contents of the file in your bucket.
   * @method createWriteStream
   * @param {IWriteStreamOptions} options
   * @return {WriteStream}
   */
  public createWriteStream(options?: IWriteStreamOptions): fs.WriteStream {
    return this.file.createWriteStream(options);
  }

  /**
   * Delete the file.
   * @method delete
   * @return {Promise<[IApiResponse]>}
   */
  public delete(): Promise<[IApiResponse]> {
    return this.file.delete();
  }

  /**
   * Convenience method to download a file into memory or to a local destination.
   * @method download
   * @param {IDownloadOptions} options
   * @return {Promise<[string]>}
   */
  public download(options?: IDownloadOptions): Promise<[string]> {
    return this.file.download(options);
  }

  /**
   * Check if the file exists.
   * @method exists
   * @return {Promise<[boolean]>}
   */
  public exists(): Promise<[boolean]> {
    return this.file.exists();
  }

  /**
   * Get a file object and its metadata if it exists.
   * @method get
   * @return {Promise<[File, IApiResponse]>}
   */
  public get(): Promise<[File, IApiResponse]> {
    return this.file.get();
  }

  /**
   * Get the file's metadata.
   * @method getMetadata
   * @return {Promise<[IFileMetadata, IApiResponse]>}
   */
  public getMetadata(): Promise<[IFileMetadata, IApiResponse]> {
    return this.file.getMetadata();
  }

  /**
   * Get a signed policy document to allow a user to upload data with a POST request
   * @method getSignedPolicy
   * @param {ISignedPolicyOptions} options
   * @return {Promise<[ISignedPolicy]>}
   */
  public getSignedPolicy(options?: ISignedPolicyOptions): Promise<[ISignedPolicy]> {
    return this.file.getSignedPolicy(options);
  }

  /**
   * Get a signed URL to allow limited time access to the file
   * @method getSignedUrl
   * @param {ISignedUrlConfig} config
   * @return {Promise<[string]>}
   */
  public getSignedUrl(config?: ISignedUrlConfig): Promise<[string]> {
    return this.file.getSignedUrl(config);
  }

  /**
   * Make a file private to the project and remove all other permissions.
   * @method makePrivate
   * @param {IFilePrivateOptions} options
   * @return {Promise<[IApiResponse]>}
   */
  public makePrivate(options?: IFilePrivateOptions): Promise<[IApiResponse]> {
    return this.file.makePrivate(options);
  }

  /**
   * Set a file to be publicly readable and maintain all previous permissions.
   * @method makePublic
   * @return {Promise<[IApiResponse]>}
   */
  public makePublic(): Promise<[IApiResponse]> {
    return this.file.makePublic();
  }

  /**
   * Move this file to another location.
   * By default, this will move the file to the same bucket, but you can choose to move it to
   * another Bucket by providing a Bucket or File object or a URL beginning with "gs://".
   * @method move
   * @param {string|Bucket|File} destination
   * @return {Promise<[File, IApiResponse]>}
   */
  public move(destination: string | Bucket | File): Promise<[File, IApiResponse]> {
    return this.file.move(destination);
  }

  /**
   * Write arbitrary data to a file.
   * @param {string} data
   * @param {IWriteStreamOptions} options
   * @return {Promise<void>}
   */
  public save(data: string, options?: IWriteStreamOptions): Promise<void> {
    return this.file.save(data);
  }

  /**
   * The Storage API allows you to use a custom key for server-side encryption.
   * @param {string|Buffer} encryptionKey
   * @return {File}
   */
  public setEncryptionKey(encryptionKey: string | Buffer): File {
    return this.file.setEncryptionKey(encryptionKey);
  }

  /**
   * Merge the given metadata with the current remote file's metadata.
   * This will set metadata if it was previously unset or update previously set metadata.
   * To unset previously set metadata, set its value to null.
   * @method setMetadata
   * @param {IFileMetadata} metadata
   * @return {Promise<[IApiResponse]>}
   */
  public setMetadata(metadata: IFileMetadata): Promise<[IApiResponse]> {
    return this.file.setMetadata(metadata);
  }
}