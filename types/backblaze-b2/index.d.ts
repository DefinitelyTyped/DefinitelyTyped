// Type definitions for backblaze-b2 1.5
// Project: https://github.com/yakovkhalinsky/backblaze-b2
// Definitions by: Rohith Bhaskaran <https://github.com/rohithb>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export as namespace BackBlazeB2;

export = BackBlazeB2;

interface B2InitOptions {
    applicationKeyId: string;
    applicationKey: string;
    axios?: Record<string, any>;
    retry?: Record<string, any>;
}

interface CommonArgs {
    axios?: Record<string, any>;
    axiosOverride?: Record<string, any>;
}

interface StandardApiResponse {
    status: string;
    statusText: string;
    headers: any;
    config: any;
    request: any;
    data: any;
}
type BucketType = 'allPublic' | 'allPrivate';

interface CreateBucketOpts extends CommonArgs {
    bucketName: string;
    bucketType: BucketType;
}
interface GetBucketOpts extends CommonArgs {
    bucketName: string;
    bucketId?: string;
}
interface UpdateBucketOpts extends CommonArgs {
    bucketId: string;
    bucketType: BucketType;
}
interface UploadProgressFn {
    (event: any): void;
}

interface UploadFileOpts extends CommonArgs {
    uploadUrl: string;
    uploadAuthToken: string;
    fileName: string;
    data: Buffer;
    /**
     * data length
     * @default  data.byteLength or data.length
     */
    contentLength?: number;
    /**
     * mime type
     * @default 'b2/x-auto'
     */
    mime?: string;
    /**
     * data hash
     * @default sha1(data)
     */
    hash?: string;
    /**
     * info headers, prepended with X-Bz-Info- when sent,
     * throws error if more than 10 keys set.
     * valid characters should be a-z, A-Z and '-',
     * all other characters will cause an error to be thrown
     */
    info?: Record<string, string>;
    onUploadProgress?: UploadProgressFn | null;
}

interface ListFileNamesOpts extends CommonArgs {
    bucketId: string;
    startFileName: string;
    maxFileCount: number;
    delimiter: string;
    prefix: string;
}

interface ListFileVersionsOpts extends CommonArgs {
    bucketId: string;
    startFileName: string;
    startFileId: string;
    maxFileCount: number;
}

interface ListPartsOpts extends CommonArgs {
    fileId: string;
    startPartNumber?: number;
    /**
     * maximum part count
     * max value 100
     */
    maxPartCount?: number;
}

interface GetDownloadAuthorizationOpts extends CommonArgs {
    bucketId: string;
    fileNamePrefix: string;
    /**
     * Authorization validity : 0 to 604800
     */
    validDurationInSeconds: number;
    b2ContentDisposition: string;
}

interface DownloadFileOpts extends CommonArgs {
    responseType: 'arraybuffer' | 'blob' | 'document' | 'json' | 'text' | 'stream';
    onDownloadProgress?: UploadProgressFn | null;
}

interface DownlaodFileByNameOpts extends DownloadFileOpts {
    bucketName: string;
    fileName: string;
}

interface UploadPartOpts extends CommonArgs {
    /**
     * part number: 1 to 10000
     */
    partNumber: number;
    uploadUrl: string;
    uploadAuthToken: string;
    data: Buffer;
    hash?: string;
    onUploadProgress?: UploadProgressFn | null;
    contentLength?: number;
}

interface CreateKeyOpts extends CommonArgs {
    capabilities: string[];
    keyName: string;
    validDurationInSeconds?: number;
    bucketId?: string;
    namePrefix?: string;
}

declare class BackBlazeB2 {
    constructor(options: B2InitOptions);
    authorize(opts?: CommonArgs): Promise<StandardApiResponse>;

    createBucket(opts: CreateBucketOpts): Promise<StandardApiResponse>;
    deleteBucket(opts: { bucketId: string } & CommonArgs): Promise<StandardApiResponse>;
    listBuckets(opts?: CommonArgs): Promise<StandardApiResponse>;
    getBucket(opts: GetBucketOpts): Promise<StandardApiResponse>;
    updateBucket(opts: UpdateBucketOpts): Promise<StandardApiResponse>;

    getUploadUrl(opts: { bucketId: string } & CommonArgs): Promise<StandardApiResponse>;
    uploadFile(opts: UploadFileOpts): Promise<StandardApiResponse>;
    listFileNames(opts: ListFileNamesOpts): Promise<StandardApiResponse>;
    listFileVersions(opts: ListFileVersionsOpts): Promise<StandardApiResponse>;

    listParts(opts: ListPartsOpts): Promise<StandardApiResponse>;
    hideFile(opts: { bucketId: string; fileName: string } & CommonArgs): Promise<StandardApiResponse>;
    getFileInfo(opts: { fileId: string } & CommonArgs): Promise<StandardApiResponse>;
    getDownloadAuthorization(opts: GetDownloadAuthorizationOpts): Promise<StandardApiResponse>;
    downloadFileByName(opts: DownlaodFileByNameOpts): Promise<StandardApiResponse>;
    downloadFileById(opts: { fileId: string } & DownloadFileOpts): Promise<StandardApiResponse>;
    deleteFileVersion(opts: { fileId: string; fileName: string } & CommonArgs): Promise<StandardApiResponse>;
    startLargeFile(opts: { bucketId: string; fileName: string } & CommonArgs): Promise<StandardApiResponse>;
    getUploadPartUrl(opts: { fileId: string } & CommonArgs): Promise<StandardApiResponse>;
    uploadPart(opts: UploadPartOpts): Promise<StandardApiResponse>;
    finishLargeFile(opts: { fileId: string; partSha1Array: string[] } & CommonArgs): Promise<StandardApiResponse>;
    cancelLargeFile(opts: { fileId: string } & CommonArgs): Promise<StandardApiResponse>;

    createKey(opts: CreateKeyOpts): Promise<StandardApiResponse>;
    deleteKey(opts: { applicationKeyId: string } & CommonArgs): Promise<StandardApiResponse>;
    listKeys(opts: { maxKeyCount: number; startApplicationKeyId: string } & CommonArgs): Promise<StandardApiResponse>;
}
