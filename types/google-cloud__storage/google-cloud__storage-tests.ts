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
import Storage = require("@google-cloud/storage");

/**
 * Test the storage service.
 */
export class TestStorage {
    // constants
    static BUCKET_CONFIG: BucketConfig = {
        multiRegional: true
    };

    // import Storage class
    static gcs = new Storage();

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
    getSignedUrl(config: SignedUrlConfig): Promise<[string]> {
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

// Example from https://cloud.google.com/storage/docs/creating-buckets#storage-create-bucket-code_samples
{
    // Creates a client
    const storage = new Storage();

    const bucketName = 'Name of a bucket, e.g. my-bucket';

    // Creates a new bucket
    storage
    .createBucket(bucketName, {
        location: 'ASIA',
        storageClass: 'COLDLINE',
    })
    .then(() => {
        console.log(`Bucket ${bucketName} created.`);
    })
    .catch(err => {
        console.error('ERROR:', err);
    });
}

// Example from https://cloud.google.com/storage/docs/listing-buckets#storage-list-buckets-nodejs
{
    // Creates a client
    const storage = new Storage();

    // Lists all buckets in the current project
    storage
    .getBuckets()
    .then(results => {
        const buckets = results[0];

        console.log('Buckets:');
        buckets.forEach(bucket => {
        console.log(bucket.name);
        });
    })
    .catch(err => {
        console.error('ERROR:', err);
    });
}

// Example from https://cloud.google.com/storage/docs/moving-buckets#storage-create-bucket-nodejs
{
    // Creates a client
    const storage = new Storage();

    const bucketName = 'Name of a bucket, e.g. my-bucket';

    // Creates a new bucket
    storage
    .createBucket(bucketName, {
        location: 'ASIA',
        storageClass: 'COLDLINE',
    })
    .then(() => {
        console.log(`Bucket ${bucketName} created.`);
    })
    .catch(err => {
        console.error('ERROR:', err);
    });
}

// Example from https://cloud.google.com/storage/docs/deleting-buckets
{
    // Creates a client
    const storage = new Storage();

    const bucketName = 'Name of a bucket, e.g. my-bucket';

    // Deletes the bucket
    storage
    .bucket(bucketName)
    .delete()
    .then(() => {
        console.log(`Bucket ${bucketName} deleted.`);
    })
    .catch(err => {
        console.error('ERROR:', err);
    });
}

// Example from https://cloud.google.com/storage/docs/uploading-objects
{
    // Creates a client
    const storage = new Storage();

    const bucketName = 'Name of a bucket, e.g. my-bucket';
    const filename = 'Local file to upload, e.g. ./local/path/to/file.txt';

    // Uploads a local file to the bucket
    storage
    .bucket(bucketName)
    .upload(filename, {
        // Support for HTTP requests made with `Accept-Encoding: gzip`
        gzip: true,
        metadata: {
        // Enable long-lived HTTP caching headers
        // Use only if the contents of the file will never change
        // (If the contents will change, use cacheControl: 'no-cache')
        cacheControl: 'public, max-age=31536000',
        },
    })
    .then(() => {
        console.log(`${filename} uploaded to ${bucketName}.`);
    })
    .catch(err => {
        console.error('ERROR:', err);
    });
}

// Example from https://cloud.google.com/storage/docs/listing-objects
{
    // Creates a client
    const storage = new Storage();

    const bucketName = 'Name of a bucket, e.g. my-bucket';

    // Lists files in the bucket
    storage
    .bucket(bucketName)
    .getFiles()
    .then(results => {
        const files = results[0];

        console.log('Files:');
        files.forEach(file => {
        console.log(file.name);
        });
    })
    .catch(err => {
        console.error('ERROR:', err);
    });
}

// Example from https://cloud.google.com/storage/docs/listing-objects
{
    // Creates a client
    const storage = new Storage();

    const bucketName = 'Name of a bucket, e.g. my-bucket';
    const prefix = 'Prefix by which to filter, e.g. public/';
    const delimiter = 'Delimiter to use, e.g. /';

    /**
     * This can be used to list all blobs in a "folder", e.g. "public/".
     *
     * The delimiter argument can be used to restrict the results to only the
     * "files" in the given "folder". Without the delimiter, the entire tree under
     * the prefix is returned. For example, given these blobs:
     *
     *   /a/1.txt
     *   /a/b/2.txt
     *
     * If you just specify prefix = '/a', you'll get back:
     *
     *   /a/1.txt
     *   /a/b/2.txt
     *
     * However, if you specify prefix='/a' and delimiter='/', you'll get back:
     *
     *   /a/1.txt
     */
    const options = {
        prefix,
        delimiter
    };

    // Lists files in the bucket, filtered by a prefix
    storage
        .bucket(bucketName)
        .getFiles(options)
        .then(results => {
            const files = results[0];

            console.log('Files:');
            files.forEach(file => {
            console.log(file.name);
            });
        })
        .catch(err => {
            console.error('ERROR:', err);
        });
}

// Example from https://cloud.google.com/storage/docs/downloading-objects#storage-download-object-nodejs
{
    // Creates a client
    const storage = new Storage();

    const bucketName = 'Name of a bucket, e.g. my-bucket';
    const srcFilename = 'Remote file to download, e.g. file.txt';
    const destFilename = 'Local destination for file, e.g. ./local/path/to/file.txt';

    const options = {
        // The path to which the file should be downloaded, e.g. "./file.txt"
        destination: destFilename,
    };

    // Downloads the file
    storage
    .bucket(bucketName)
    .file(srcFilename)
    .download(options)
    .then(() => {
        console.log(
        `gs://${bucketName}/${srcFilename} downloaded to ${destFilename}.`
        );
    })
    .catch(err => {
        console.error('ERROR:', err);
    });
}

// Example from https://cloud.google.com/storage/docs/renaming-copying-moving-objects
{
    // Creates a client
    const storage = new Storage();

    const bucketName = 'Name of a bucket, e.g. my-bucket';
    const srcFilename = 'File to move, e.g. file.txt';
    const destFilename = 'Destination for file, e.g. moved.txt';

    // Moves the file within the bucket
    storage
        .bucket(bucketName)
        .file(srcFilename)
        .move(destFilename)
        .then(() => {
            console.log(
            `gs://${bucketName}/${srcFilename} moved to gs://${bucketName}/${destFilename}.`
            );
        })
        .catch(err => {
            console.error('ERROR:', err);
        });
}

// Example from https://cloud.google.com/storage/docs/renaming-copying-moving-objects
{
    // Creates a client
    const storage = new Storage();

    const srcBucketName = 'Name of the source bucket, e.g. my-bucket';
    const srcFilename = 'Name of the source file, e.g. file.txt';
    const destBucketName = 'Name of the destination bucket, e.g. my-other-bucket';
    const destFilename = 'Destination name of file, e.g. file.txt';

    // Copies the file to the other bucket
    storage
        .bucket(srcBucketName)
        .file(srcFilename)
        .copy(storage.bucket(destBucketName).file(destFilename))
        .then(() => {
            console.log(
            `gs://${srcBucketName}/${srcFilename} copied to gs://${destBucketName}/${destFilename}.`
            );
        })
        .catch(err => {
            console.error('ERROR:', err);
        });
}

// Example from https://cloud.google.com/storage/docs/viewing-editing-metadata
{
    // Creates a client
    const storage = new Storage();

    const bucketName = 'Name of a bucket, e.g. my-bucket';
    const filename = 'File to access, e.g. file.txt';

    // Gets the metadata for the file
    storage
        .bucket(bucketName)
        .file(filename)
        .getMetadata()
        .then(results => {
            const metadata = results[0];

            console.log(`File: ${metadata.name}`);
            console.log(`Bucket: ${metadata.bucket}`);
            console.log(`Storage class: ${metadata.storageClass}`);
            console.log(`Self link: ${metadata.selfLink}`);
            console.log(`ID: ${metadata.id}`);
            console.log(`Size: ${metadata.size}`);
            console.log(`Updated: ${metadata.updated}`);
            console.log(`Generation: ${metadata.generation}`);
            console.log(`Metageneration: ${metadata.metageneration}`);
            console.log(`Etag: ${metadata.etag}`);
            console.log(`Owner: ${metadata.owner}`);
            console.log(`Component count: ${metadata.component_count}`);
            console.log(`Crc32c: ${metadata.crc32c}`);
            console.log(`md5Hash: ${metadata.md5Hash}`);
            console.log(`Cache-control: ${metadata.cacheControl}`);
            console.log(`Content-type: ${metadata.contentType}`);
            console.log(`Content-disposition: ${metadata.contentDisposition}`);
            console.log(`Content-encoding: ${metadata.contentEncoding}`);
            console.log(`Content-language: ${metadata.contentLanguage}`);
            console.log(`Metadata: ${metadata.metadata}`);
            console.log(`Media link: ${metadata.mediaLink}`);
        })
        .catch(err => {
            console.error('ERROR:', err);
        });
}

// Example from https://cloud.google.com/storage/docs/deleting-objects
{
    // Creates a client
    const storage = new Storage();

    const bucketName = 'Name of a bucket, e.g. my-bucket';
    const filename = 'File to delete, e.g. file.txt';

    // Deletes the file from the bucket
    storage
        .bucket(bucketName)
        .file(filename)
        .delete()
        .then(() => {
            console.log(`gs://${bucketName}/${filename} deleted.`);
        })
        .catch(err => {
            console.error('ERROR:', err);
        });
}
