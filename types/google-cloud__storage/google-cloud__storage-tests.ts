// import file system i/o api
import * as fs from "fs";

// import Google Cloud Storage
import {
    Acl,
    Bucket,
    Channel,
    File,
    ApiResponse,
    BucketConfig,
    BucketFileOptions,
    BucketGetOptions,
    BucketMetadata,
    BucketPrivacyOptions,
    BucketQuery,
    ChannelConfig,
    DownloadOptions,
    FileMetadata,
    FilePrivateOptions,
    ReadStreamOptions,
    SignedPolicy,
    SignedPolicyOptions,
    SignedUrlConfig,
    WriteStreamOptions,
    UploadOptions
} from "@google-cloud/storage";
import * as CloudStorage from "@google-cloud/storage";

/**
 * Test the storage service.
 * @class TestStorage
 */
export class TestStorage {
    // constants
    static BUCKET_CONFIG: BucketConfig = {
        multiRegional: true
    };

    // import Storage class
    static gcs = CloudStorage();

    // the bucket
    private buckets: Bucket[] = [];

    /**
     * @constructor
     */
    constructor() {
        // nothing to do
    }

    /**
     * Returns the bucket.
     * @method bucket
     * @param {string} name
     * @return {Bucket}
     */
    bucket(name: string): Bucket {
        return TestStorage.gcs.bucket(name);
    }

    /**
     * Create a new bucket.
     * @param {string} name
     * @param {BucketConfig} metadata
     * @return {Promise<[Bucket, ApiResponse]>}
     */
    createBucket(name: string, config?: BucketConfig): Promise<[Bucket, ApiResponse]> {
        // overwrite default values with custom config
        config = Object.assign(TestStorage.BUCKET_CONFIG, config);

        return TestStorage.gcs.createBucket(name, config);
    }

    /**
     * Query for buckets.
     * @param {BucketQuery} query
     */
    getBuckets(query?: BucketQuery): Promise<[Bucket[]]> {
        return TestStorage.gcs.getBuckets(query);
    }
}

/**
 * The bucket API wrapper.
 * @class TestBucket
 */
export class TestBucket {
    // the bucket in the cloud
    bucket: Bucket;

    /**
     * Create a bucket.
     * @param {BucketConfig} config
     * @return {Promise<[Bucket, ApiResponse]>}
     */
    create(config?: BucketConfig): Promise<[Bucket, ApiResponse]> {
        return this.bucket.create(config);
    }

    /**
     * Create a channel that will be notified when objects in this bucket changes.
     * @method createChannel
     * @param {string} id
     * @param {ChannelConfig} config
     * @return {Promise<[Channel, ApiResponse]>}
     */
    createChannel(id: string, config: ChannelConfig): Promise<[Channel, ApiResponse]> {
        return this.bucket.createChannel(id, config);
    }

    /**
     * Delete the bucket.
     * @method delete
     * @return {Promise<[ApiResponse]>}
     */
    delete(): Promise<[ApiResponse]> {
        return this.bucket.delete();
    }

    /**
     * Iterate over the bucket's files, calling file.delete() on each.
     * @method deleteFiles
     * @return {Promise<void>}
     */
    deleteFiles(query?: BucketQuery): Promise<void> {
        return this.bucket.deleteFiles(query);
    }

    /**
     * Check if the bucket exists.
     * @method exists
     * @return {Promise<[boolean]>}
     */
    exists(): Promise<[boolean]> {
        return this.bucket.exists();
    }

    /**
     * Create a File object.
     * @method file
     * @param {string} name
     * @param {BucketFileOptions} options
     */
    file(name: string, options?: BucketFileOptions): File {
        return this.bucket.file(name);
    }

    /**
     * Get a bucket if it exists.
     * @method get
     * @param {BucketGetOptions} options
     */
    get(options?: BucketGetOptions): Promise<[Bucket, ApiResponse]> {
        return this.bucket.get(options);
    }

    /**
     * Get File objects for the files currently in the bucket
     * @method getFiles
     * @param {BucketQuery} query
     * @return {Promise<[File[]]>}
     */
    getFiles(query?: BucketQuery): Promise<[File[]]> {
        return this.bucket.getFiles(query);
    }

    /**
     * Get File objects for the files currently in the bucket as a readable object stream.
     * @method getFilesStream
     * @param {BucketQuery} query
     * @return {ReadStream}
     */
    getFilesStream(query?: BucketQuery): fs.ReadStream {
        return this.bucket.getFilesStream(query);
    }

    /**
     * Get the bucket's metadata.
     * @method getMetadata
     * @return {Promise<[BucketMetadata, ApiResponse]>}
     */
    getMetadata(): Promise<[BucketMetadata, ApiResponse]> {
        return this.bucket.getMetadata();
    }

    /**
     * Make the bucket listing private.
     * @method makePrivate
     * @param {} options
     * @return Promise<[File[]]>
     */
    makePrivate(options?: BucketPrivacyOptions): Promise<[File[]]> {
        return this.bucket.makePrivate(options);
    }

    /**
     * Make the bucket publicly readable.
     * @method makePublic
     * @param {} options
     * @return Promise<[File[]]>
     */
    makePublic(options?: BucketPrivacyOptions): Promise<[File[]]> {
        return this.bucket.makePublic(options);
    }

    /**
     * Set the bucket's metadata.
     * @method setMetadata
     * @param {BucketMetadata} metadata
     * @return {Promise<[ApiResponse]>}
     */
    setMetadata(metadata?: BucketMetadata): Promise<[ApiResponse]> {
        return this.bucket.setMetadata(metadata);
    }

    /**
     * Upload a file.
     * @method upload
     * @param {localPath} string
     * @param {UploadOptions} options
     */
    upload(localPath: string, options?: UploadOptions): Promise<[File]> {
        return this.bucket.upload(localPath, options);
    }
}

/**
 * The file API wrapper.
 * @class TestFile
 */
export class TestFile {
    // the file in the cloud
    file: File;

    /**
     * Copy this file to another file.
     * By default, this will copy the file to the same bucket, but you can choose to copy it to another
     * Bucket by providing a Bucket or File object or a URL starting with "gs:// ".
     * @method copy
     * @param {string} destination
     * @return Promise<[File, ApiResponse]>
     */

    copy(destination: string | Bucket | File): Promise<[File, ApiResponse]> {
        return this.file.copy(destination);
    }

    /**
     * Create a readable stream to read the contents of the remote file.
     * It can be piped to a writable stream or listened to for 'data' events to read a file's contents.
     * @method createReadStream
     * @param {ReadStreamOptions} options
     * @return {ReadStream}
     */
    createReadStream(options?: ReadStreamOptions): fs.ReadStream {
        return this.file.createReadStream(options);
    }

    /**
     * Create a writable stream to overwrite the contents of the file in your bucket.
     * @method createWriteStream
     * @param {WriteStreamOptions} options
     * @return {WriteStream}
     */
    createWriteStream(options?: WriteStreamOptions): fs.WriteStream {
        return this.file.createWriteStream(options);
    }

    /**
     * Delete the file.
     * @method delete
     * @return {Promise<[ApiResponse]>}
     */
    delete(): Promise<[ApiResponse]> {
        return this.file.delete();
    }

    /**
     * Convenience method to download a file into memory or to a local destination.
     * @method download
     * @param {DownloadOptions} options
     * @return {Promise<[string]>}
     */
    download(options?: DownloadOptions): Promise<[string]> {
        return this.file.download(options);
    }

    /**
     * Check if the file exists.
     * @method exists
     * @return {Promise<[boolean]>}
     */
    exists(): Promise<[boolean]> {
        return this.file.exists();
    }

    /**
     * Get a file object and its metadata if it exists.
     * @method get
     * @return {Promise<[File, ApiResponse]>}
     */
    get(): Promise<[File, ApiResponse]> {
        return this.file.get();
    }

    /**
     * Get the file's metadata.
     * @method getMetadata
     * @return {Promise<[FileMetadata, ApiResponse]>}
     */
    getMetadata(): Promise<[FileMetadata, ApiResponse]> {
        return this.file.getMetadata();
    }

    /**
     * Get a signed policy document to allow a user to upload data with a POST request
     * @method getSignedPolicy
     * @param {SignedPolicyOptions} options
     * @return {Promise<[SignedPolicy]>}
     */
    getSignedPolicy(options?: SignedPolicyOptions): Promise<[SignedPolicy]> {
        return this.file.getSignedPolicy(options);
    }

    /**
     * Get a signed URL to allow limited time access to the file
     * @method getSignedUrl
     * @param {SignedUrlConfig} config
     * @return {Promise<[string]>}
     */
    getSignedUrl(config?: SignedUrlConfig): Promise<[string]> {
        return this.file.getSignedUrl(config);
    }

    /**
     * Make a file private to the project and remove all other permissions.
     * @method makePrivate
     * @param {FilePrivateOptions} options
     * @return {Promise<[ApiResponse]>}
     */
    makePrivate(options?: FilePrivateOptions): Promise<[ApiResponse]> {
        return this.file.makePrivate(options);
    }

    /**
     * Set a file to be publicly readable and maintain all previous permissions.
     * @method makePublic
     * @return {Promise<[ApiResponse]>}
     */
    makePublic(): Promise<[ApiResponse]> {
        return this.file.makePublic();
    }

    /**
     * Move this file to another location.
     * By default, this will move the file to the same bucket, but you can choose to move it to
     * another Bucket by providing a Bucket or File object or a URL beginning with "gs:// ".
     * @method move
     * @param {string|Bucket|File} destination
     * @return {Promise<[File, ApiResponse]>}
     */
    move(destination: string | Bucket | File): Promise<[File, ApiResponse]> {
        return this.file.move(destination);
    }

    /**
     * Write arbitrary data to a file.
     * @param {string} data
     * @param {WriteStreamOptions} options
     * @return {Promise<void>}
     */
    save(data: string, options?: WriteStreamOptions): Promise<void> {
        return this.file.save(data);
    }

    /**
     * The Storage API allows you to use a custom key for server-side encryption.
     * @param {string|Buffer} encryptionKey
     * @return {File}
     */
    setEncryptionKey(encryptionKey: string | Buffer): File {
        return this.file.setEncryptionKey(encryptionKey);
    }

    /**
     * Merge the given metadata with the current remote file's metadata.
     * This will set metadata if it was previously unset or update previously set metadata.
     * To unset previously set metadata, set its value to null.
     * @method setMetadata
     * @param {FileMetadata} metadata
     * @return {Promise<[ApiResponse]>}
     */
    setMetadata(metadata: FileMetadata): Promise<[ApiResponse]> {
        return this.file.setMetadata(metadata);
    }
}
