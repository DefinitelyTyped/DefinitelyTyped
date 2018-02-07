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
    ResumableUploadOptions,
    SignedPolicy,
    SignedPolicyOptions,
    SignedUrlConfig,
    WriteStreamOptions,
    UploadOptions
} from "@google-cloud/storage";
import CloudStorage = require("@google-cloud/storage");

/**
 * Test the storage service.
 */
export class TestStorage {
    // constants
    static BUCKET_CONFIG: BucketConfig = {
        multiRegional: true
    };

    // import Storage class
    static gcs = CloudStorage();

    constructor() {
        // nothing to do
    }

    /** Returns the bucket. */
    bucket(name: string): Bucket {
        return TestStorage.gcs.bucket(name);
    }

    /** Create a new bucket. */
    createBucket(name: string, config?: BucketConfig): Promise<[Bucket, ApiResponse]> {
        // overwrite default values with custom config
        config = Object.assign(TestStorage.BUCKET_CONFIG, config);

        return TestStorage.gcs.createBucket(name, config);
    }

    /**
     * Query for buckets.
     */
    getBuckets(query?: BucketQuery): Promise<[Bucket[]]> {
        return TestStorage.gcs.getBuckets(query);
    }
}

/** The bucket API wrapper. */
export class TestBucket {
    // the bucket in the cloud
    bucket: Bucket;

    /** Create a bucket. */
    create(config?: BucketConfig): Promise<[Bucket, ApiResponse]> {
        return this.bucket.create(config);
    }

    /** Create a channel that will be notified when objects in this bucket changes. */
    createChannel(id: string, config: ChannelConfig): Promise<[Channel, ApiResponse]> {
        return this.bucket.createChannel(id, config);
    }

    /** Delete the bucket. */
    delete(): Promise<[ApiResponse]> {
        return this.bucket.delete();
    }

    /** Iterate over the bucket's files, calling file.delete() on each. */
    deleteFiles(query?: BucketQuery): Promise<void> {
        return this.bucket.deleteFiles(query);
    }

    /** Check if the bucket exists. */
    exists(): Promise<[boolean]> {
        return this.bucket.exists();
    }

    /** Create a File object. */
    file(name: string, options?: BucketFileOptions): File {
        return this.bucket.file(name);
    }

    /** Get a bucket if it exists. */
    get(options?: BucketGetOptions): Promise<[Bucket, ApiResponse]> {
        return this.bucket.get(options);
    }

    /** Get File objects for the files currently in the bucket */
    getFiles(query?: BucketQuery): Promise<[File[]]> {
        return this.bucket.getFiles(query);
    }

    /** Get File objects for the files currently in the bucket as a readable object stream. */
    getFilesStream(query?: BucketQuery): fs.ReadStream {
        return this.bucket.getFilesStream(query);
    }

    /** Get the bucket's metadata. */
    getMetadata(): Promise<[BucketMetadata, ApiResponse]> {
        return this.bucket.getMetadata();
    }

    /** Make the bucket listing private. */
    makePrivate(options?: BucketPrivacyOptions): Promise<[File[]]> {
        return this.bucket.makePrivate(options);
    }

    /** Make the bucket publicly readable. */
    makePublic(options?: BucketPrivacyOptions): Promise<[File[]]> {
        return this.bucket.makePublic(options);
    }

    /** Set the bucket's metadata. */
    setMetadata(metadata?: BucketMetadata): Promise<[ApiResponse]> {
        return this.bucket.setMetadata(metadata);
    }

    /** Upload a file. */
    upload(localPath: string, options?: UploadOptions): Promise<[File]> {
        return this.bucket.upload(localPath, options);
    }
}

/** The file API wrapper. */
export class TestFile {
    // the file in the cloud
    file: File;

    /**
     * Copy this file to another file.
     * By default, this will copy the file to the same bucket, but you can choose to copy it to another
     * Bucket by providing a Bucket or File object or a URL starting with "gs:// ".
     */
    copy(destination: string | Bucket | File): Promise<[File, ApiResponse]> {
        return this.file.copy(destination);
    }

    /** Create a unique resumable upload session URI. This is the first step when performing a resumable upload. */
    createResumableUpload(options?: ResumableUploadOptions): Promise<[string]> {
        return this.file.createResumableUpload(options);
    }

    /**
     * Create a readable stream to read the contents of the remote file.
     * It can be piped to a writable stream or listened to for 'data' events to read a file's contents.
     */
    createReadStream(options?: ReadStreamOptions): fs.ReadStream {
        return this.file.createReadStream(options);
    }

    /** Create a writable stream to overwrite the contents of the file in your bucket. */
    createWriteStream(options?: WriteStreamOptions): fs.WriteStream {
        return this.file.createWriteStream(options);
    }

    /** Delete the file. */
    delete(): Promise<[ApiResponse]> {
        return this.file.delete();
    }

    /** Convenience method to download a file into memory or to a local destination. */
    download(options?: DownloadOptions): Promise<[Buffer]> {
        return this.file.download(options);
    }

    /** Check if the file exists. */
    exists(): Promise<[boolean]> {
        return this.file.exists();
    }

    /** Get a file object and its metadata if it exists. */
    get(): Promise<[File, ApiResponse]> {
        return this.file.get();
    }

    /** Get the file's metadata. */
    getMetadata(): Promise<[FileMetadata, ApiResponse]> {
        return this.file.getMetadata();
    }

    /** Get a signed policy document to allow a user to upload data with a POST request */
    getSignedPolicy(options?: SignedPolicyOptions): Promise<[SignedPolicy]> {
        return this.file.getSignedPolicy(options);
    }

    /** Get a signed URL to allow limited time access to the file */
    getSignedUrl(config?: SignedUrlConfig): Promise<[string]> {
        return this.file.getSignedUrl(config);
    }

    /** Make a file private to the project and remove all other permissions. */
    makePrivate(options?: FilePrivateOptions): Promise<[ApiResponse]> {
        return this.file.makePrivate(options);
    }

    /** Set a file to be publicly readable and maintain all previous permissions. */
    makePublic(): Promise<[ApiResponse]> {
        return this.file.makePublic();
    }

    /**
     * Move this file to another location.
     * By default, this will move the file to the same bucket, but you can choose to move it to
     * another Bucket by providing a Bucket or File object or a URL beginning with "gs:// ".
     */
    move(destination: string | Bucket | File): Promise<[File, ApiResponse]> {
        return this.file.move(destination);
    }

    /** Write arbitrary data to a file. */
    save(data: string, options?: WriteStreamOptions): Promise<void> {
        return this.file.save(data);
    }

    /** The Storage API allows you to use a custom key for server-side encryption. */
    setEncryptionKey(encryptionKey: string | Buffer): File {
        return this.file.setEncryptionKey(encryptionKey);
    }

    /**
     * Merge the given metadata with the current remote file's metadata.
     * This will set metadata if it was previously unset or update previously set metadata.
     * To unset previously set metadata, set its value to null.
     */
    setMetadata(metadata: FileMetadata): Promise<[ApiResponse]> {
        return this.file.setMetadata(metadata);
    }
}

const testStorage = new TestStorage().bucket("examplebucketname");

testStorage.iam.getPolicy();

testStorage.iam.setPolicy({
        bindings: [
            {
                role: "roles/storage.admin",
                members: ['serviceAccount:myotherproject@appspot.gserviceaccount.com']
            }
        ]
    });

testStorage.iam.testPermissions('storage.buckets.delete');

testStorage.iam.testPermissions(['storage.buckets.delete', 'storage.buckets.get']);
