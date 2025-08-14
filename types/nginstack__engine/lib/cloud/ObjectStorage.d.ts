export = ObjectStorage;
declare function ObjectStorage(
    provider: string,
    options: GoogleOptions | AmazonOptions | AzureOptions
): void;
declare class ObjectStorage {
    constructor(provider: string, options: GoogleOptions | AmazonOptions | AzureOptions);
    uploadData(
        location: string,
        content: string | ArrayBuffer | Uint8Array,
        options?: UploadOptions
    ): ObjectInfo;
    uploadText(location: string, content: string, options?: UploadOptions): ObjectInfo;
    uploadFile(location: string, filePath: string, options?: UploadOptions): ObjectInfo;
    list(prefix?: string): ObjectInfo[];
    info(location: string): ObjectInfo;
    delete(location: string): void;
    download(location: string): DownloadResult;
}
declare namespace ObjectStorage {
    export {
        fromConfig,
        encryptSecret,
        GoogleOptions,
        AmazonOptions,
        AzureOptions,
        UploadOptions,
        ObjectInfo,
    };
}
declare function DownloadResult(): void;
declare class DownloadResult {
    location: string;
    lastModified: Date;
    size: number;
    eTag: string;
    version: string;
    contentType: string;
    contentEncoding: string;
    contentDisposition: string;
    cacheControl: string;
    metadata: Record<string, string>;
    toBytes(options?: { resultType?: string }): Uint8Array | ArrayBuffer;
    toText(): string;
    toFile(destination: string): void;
}
declare function fromConfig(key: number): ObjectStorage;
declare function encryptSecret(serviceAccount: DBKey | number, secret: string): string;
interface GoogleOptions {
    bucketName: string;
    serviceAccountKey?: string;
    applicationCredentials?: string;
}
interface AmazonOptions {
    bucketName: string;
    accessKeyId: string;
    secretAccessKey: string;
    region: string;
    endpoint?: string;
    allowHttp?: boolean;
}
interface AzureOptions {
    containerName: string;
    accountName: string;
    accessKey: string;
    clientId: string;
    clientSecret: string;
}
interface UploadOptions {
    contentType?: string;
    contentEncoding?: string;
    contentDisposition?: string;
    cacheControl?: string;
    metadata?: Record<string, string>;
}
interface ObjectInfo {
    location: string;
    lastModified: Date;
    size: number;
    eTag?: string;
    version?: string;
    contentType?: string;
    contentEncoding?: string;
    contentDisposition?: string;
    cacheControl?: string;
    metadata?: Record<string, string>;
}
import DBKey = require('../dbkey/DBKey.js');
