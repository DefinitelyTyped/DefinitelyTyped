// Type definitions for @google-cloud/storage 1.7
// Project: https://github.com/googleapis/nodejs-storage
// Definitions by: Brian Love <https://github.com/blove>
//                 Nathan Brooker Perry <https://github.com/nbperry>
//                 Matt Welke <https://github.com/welkie>
//                 Futa Ogawa <https://github.com/ogawa0071>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node" />

import { ReadStream, WriteStream } from "fs";
import { CoreOptions } from "request";

type PromiseLibrary<T> = () => PromiseLike<T>;

declare namespace Storage {
    /**
     * A bucket in the cloud.
     */
    class Bucket {
        constructor(storage: Storage, name: string);
        acl: Acl;
        combine(sources: string[] | File[], destination: string | File): Promise<[File, ApiResponse]>;
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
        iam: Iam;
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
        constructor(bucket: Bucket, name: string, options?: BucketFileOptions);
        acl: Acl;
        copy(destination: string | Bucket | File): Promise<[File, ApiResponse]>;
        createReadStream(options?: ReadStreamOptions): ReadStream;
        createResumableUpload(options?: ResumableUploadOptions): Promise<[string]>;
        createWriteStream(options?: WriteStreamOptions): WriteStream;
        delete(): Promise<[ApiResponse]>;
        download(options?: DownloadOptions): Promise<[Buffer]>;
        exists(): Promise<[boolean]>;
        get(): Promise<[File, ApiResponse]>;
        getMetadata(): Promise<[FileMetadata, ApiResponse]>;
        getSignedPolicy(options?: SignedPolicyOptions): Promise<[SignedPolicy]>;
        getSignedUrl(config: SignedUrlConfig): Promise<[string]>;
        makePrivate(options?: FilePrivateOptions): Promise<[ApiResponse]>;
        makePublic(): Promise<[ApiResponse]>;
        move(destination: string | Bucket | File): Promise<[File, ApiResponse]>;
        name: string;
        save(data: string | Buffer, options?: WriteStreamOptions): Promise<void>;
        setEncryptionKey(encryptionKey: string | Buffer): File;
        setMetadata(metadata: FileMetadata): Promise<[ApiResponse]>;
        metadata?: FileMetadata;
    }

    /**
     * Access controls on the object, containing one or more objectAccessControls Resources.
     */
    interface AclFileMetadata {
        bucket?: string;
        domain?: string;
        email?: string;
        entity?: string;
        entityId?: string;
        etag?: string;
        generation?: number;
        id?: string;
        kind?: string;
        object?: string;
        projectTeam?: ProjectTeam;
        role?: string;
        selfLink?: string;
    }

    /**
     * The project team associated with the entity, if any.
     */
    interface ProjectTeam {
        projectNumber?: string;
        team?: string;
    }

    /**
     * Metadata of customer-supplied encryption key, if the object is encrypted by such a key.
     */
    interface CustomerEncryption {
        encryptionAlgorithm?: string;
        keySha256?: string;
    }

    /**
     * User-defined metadata.
     */
    interface CustomFileMetadata {
        [key: string]: string;
    }

    /**
     * The owner of the object. This will always be the uploader of the object.
     */
    interface Owner {
        entity?: string;
        entityId?: string;
    }

    /**
     * File metadata.
     */
    interface FileMetadata {
        acl?: AclFileMetadata[];
        bucket?: string;
        cacheControl?: string;
        componentCount?: number;
        contentDisposition?: string;
        contentEncoding?: string;
        contentLanguage?: string;
        contentType?: string;
        crc32c?: string;
        customerEncryption?: CustomerEncryption;
        etag?: string;
        generation?: number;
        id?: string;
        kind?: string;
        kmsKeyName?: string;
        md5Hash?: string;
        mediaLink?: string;
        metadata?: CustomFileMetadata;
        metageneration?: number;
        name?: string;
        owner?: Owner;
        selfLink?: string;
        size?: null | number;
        storageClass?: string;
        timeCreated?: string;
        timeDeleted?: string;
        timeStorageClassUpdated?: string;
        updated?: string;
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
        expires: any;
        extensionHeaders?: { [key: string]: string };
        promptSaveAs?: string;
        responseDisposition?: string;
        responseType?: string;
    }

    /**
     * Options when obtaining a resumable upload URI.
     */
    interface ResumableUploadOptions {
        metadata?: FileMetadata;
        origin?: string;
        predefinedAcl?: string;
        private?: boolean;
        public?: boolean;
    }

    /**
     * Access control list for storage buckets and files.
     */
    interface Acl extends AclActions {
        default: AclEntity;
        owners: AclEntity;
        readers: AclEntity;
        writers: AclEntity;
    }

    /**
     * Actions that can be performed on all ACL entities, including the root Acl.
     */
    interface AclActions {
        add(options: AclOptions): Promise<[Acl, ApiResponse]>;
        delete(options: AclOptions): Promise<[Acl, ApiResponse]>;
        get(options: AclOptions): Promise<[Acl, ApiResponse]>;
        update(options: AclOptions): Promise<[Acl, ApiResponse]>;
    }

    /**
     * An object of convenience methods to add or delete reader ACL permissions for a given entity.
     */
    interface AclEntity extends AclActions {
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
        destination?: string | File;
        encryptionKey?: string;
        kmsKeyName?: string;
        requestOptions?: CoreOptions;
    }

    /**
     * Options when writing to a file stream.
     */
    interface WriteStreamOptions {
        contentType?: string;
        gzip?: string | boolean;
        metadata?: FileMetadata;
        offset?: string;
        predefinedAcl?: string;
        private?: boolean;
        public?: boolean;
        resumable?: boolean;
        uri?: string;
        userProject?: string;
        validation?: string | boolean;
    }

    /**
     * The Storage class allows you interact with Google Cloud Storage.
     */
    class Storage {
        constructor(config?: ConfigurationObject);
        acl: Acl;
        bucket(name: string | Bucket): Bucket;
        channel(id: string, resourceId: string): Channel;
        createBucket(name: string, metadata?: BucketConfig): Promise<[Bucket, ApiResponse]>;
        getBuckets(query?: BucketQuery): Promise<[Bucket[]]>;
        getBucketsStream(query?: BucketQuery): Promise<[ReadStream]>;
        Channel: (storage: Storage, id: string, resourceId: string) => Channel;
        File: (bucket: Bucket, name: string, opts: BucketFileOptions) => File;
        Bucket: (storage: Storage, name: string) => Bucket;
    }

    /**
     * This class allows you interact with Google Cloud Storage.
     */
    class Channel {
        constructor(storage: Storage, id: string, resourceId: string);
        stop(): Promise<[ApiResponse]>;
    }

    /**
     * Channel configuration.
     */
    interface ChannelConfig {
        address: string;
    }

    /**
     * This class allows you to get Identity Access Management information.
     */
    class Iam {
        getPolicy(): Promise<IamPolicy>;
        setPolicy(policy: IamPolicy): Promise<[IamPolicy, ApiResponse]>;
        testPermissions(permission: string | string[]): Promise<[{[key: string]: boolean}, ApiResponse]>;
    }

    /**
     * IAM policy
     */
    interface IamPolicy {
        bindings: IamBinding[];
    }

    interface IamBinding {
        role: string;
        members: string[];
    }
}

declare function Storage(config?: Storage.ConfigurationObject): Storage.Storage;

export = Storage;
