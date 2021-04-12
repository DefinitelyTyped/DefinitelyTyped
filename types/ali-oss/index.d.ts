// Type definitions for ali-oss 6.0
// Project: https://github.com/aliyun/oss-nodejs-sdk
// Definitions by: Ptrdu <https://github.com/ptrdu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.3

export = OSS;

// basic OSS
declare namespace OSS {
    interface Options {
        /** access secret you create */
        accessKeyId: string;
        /** access secret you create */
        accessKeySecret: string;
        /** used by temporary authorization */
        stsToken?: string;
        /** the default bucket you want to access If you don't have any bucket, please use putBucket() create one first. */
        bucket?: string;
        /** oss region domain. It takes priority over region. */
        endpoint?: string;
        /** the bucket data region location, please see Data Regions, default is oss-cn-hangzhou. */
        region?: string;
        /** access OSS with aliyun internal network or not, default is false. If your servers are running on aliyun too, you can set true to save lot of money. */
        internal?: boolean;
        /** instruct OSS client to use HTTPS (secure: true) or HTTP (secure: false) protocol. */
        secure?: boolean;
        /** instance level timeout for all operations, default is 60s */
        timeout?: string | number;
        /** use custom domain name */
        cname?: boolean;
    }

    /**
     * Generate STS Authorization
     */
    class STS {
        constructor(options: STSOptions);

        assumeRole(
            roleArn: string,
            /**
             * RAM Policy config object or valid JSON string
             */
            policy?: object | string, // TODO: RAM policy type
            expirationSeconds?: number,
            session?: string,
            options?: {
                timeout: number;
                /**
                 * ctx param in urllib's request param
                 */
                ctx: any;
            },
        ): Promise<{ credentials: Credentials }>;
    }

    interface Credentials {
        /**
         * STS access key id.
         */
        AccessKeyId: string;

        /**
         * STS access key secret.
         */
        AccessKeySecret: string;

        /**
         * STS token.
         */
        SecurityToken: string;

        /**
         * STS expiration UTC time in ISO format.
         */
        Expiration: string;
    }

    interface STSOptions {
        /**
         * Access key id.
         */
        accessKeyId: string;

        /**
         * Access key secret.
         */
        accessKeySecret: string;
    }

    interface Bucket {
        name: string;
        region: string;
        creationDate: string;
        StorageClass: StorageType;
    }

    type StorageType = 'Standard' | 'IA' | 'Archive';

    type ACLType = 'public-read-write' | 'public-read' | 'private';

    type HTTPMethods = 'GET' | 'POST' | 'DELETE' | 'PUT';

    interface RequestOptions {
        // the operation timeout
        timeout?: number;
    }

    type RuleStatusType = 'Enabled' | 'Disabled';

    interface LifecycleRule {
        /** rule id, if not set, OSS will auto create it with random string. */
        id?: string;
        /** store prefix */
        prefix: string;
        /** rule status, allow values: Enabled or Disabled */
        status: RuleStatusType;
        /** expire after the days */
        days?: number | string;
        /** expire date, e.g.: 2022-10-11T00:00:00.000Z date and days only set one. */
        date: string;
    }

    interface CORSRule {
        /** configure for Access-Control-Allow-Origin header */
        allowedOrigin: string | string[];
        /** configure for Access-Control-Allow-Methods header */
        allowedMethod: string | string[];
        /** configure for Access-Control-Allow-Headers header */
        allowedHeader?: string | string[];
        /** configure for Access-Control-Expose-Headers header */
        exposeHeader?: string | string[];
        /** configure for Access-Control-Max-Age header */
        maxAgeSeconds?: string | string[];
    }

    interface OwnerType {
        id: string;
        displayName: string;
    }

    interface ObjectMeta {
        /** object name on oss */
        name: string;
        /** object last modified GMT date, e.g.: 2015-02-19T08:39:44.000Z */
        lastModified: string;
        /** object etag contains ", e.g.: "5B3C1A2E053D763E1B002CC607C5A0FE" */
        etag: string;
        /** object type, e.g.: Normal */
        type: string;
        /** object size, e.g.: 344606 */
        size: number;
        storageClass: StorageType;
        owner: OwnerType;
    }

    interface NormalSuccessResponse {
        /** response status */
        status: number;
        /** response headers */
        /** todo the object in detail */
        headers: object;
        /** response size */
        size: number;
        /**  request total use time (ms) */
        rt: number;
    }

    interface UserMeta {
        uid: number;
        pid: number;
    }

    interface ObjectCallback {
        /** After a file is uploaded successfully, the OSS sends a callback request to this URL. */
        url: string;
        /** The host header value for initiating callback requests. */
        host?: string;
        /** The value of the request body when a callback is initiated, for example, key=$(key)&etag=$(etag)&my_var=$(x:my_var). */
        body: string;
        /** The Content-Type of the callback requests initiatiated, It supports application/x-www-form-urlencoded and application/json, and the former is the default value. */
        contentType?: string;
        customValue?: object;
        /** extra headers, detail see RFC 2616 */
        headers?: object;
    }

    interface ModifyData {
        /** object last modified GMT string */
        lastModified: string;
        /** object etag contains ", e.g.: "5B3C1A2E053D763E1B002CC607C5A0FE" */
        etag: string;
    }

    interface Checkpoint {
        /** The file object selected by the user, if the browser is restarted, it needs the user to manually trigger the settings */
        file: any;
        /** object key */
        name: string;
        fileSize: number;
        partSize: number;
        uploadId: string;
        doneParts: Array<{ number: number; etag: string }>;
    }

    interface ObjectPart {
        PartNumber: number;
        /** {Date} Time when a part is uploaded. */
        LastModified: any;
        ETag: string;
        size: number;
    }

    interface Upload {
        name: string;
        uploadId: string;
        initiated: any;
    }

    interface Channel {
        Name: string;
        Description: string;
        Status: string;
        LastModified: string;
        PublishUrls: string[];
        PlayUrls: string[];
    }

    interface ChannelHistory {
        StartTime: string;
        EndTime: string;
        /** the remote addr */
        RemoteAddr: string;
    }
    // parameters type
    interface ListBucketsQueryType {
        /** search buckets using prefix key */
        prefix?: string;
        /** search start from marker, including marker key */
        marker?: string;
        /** max buckets, default is 100, limit to 1000 */
        'max-keys'?: string | number;
    }

    interface PutBucketOptions {
        timeout: number;
        storageClass: StorageType;
    }

    interface PutBucketWebsiteConfig {
        /** default page, e.g.: index.html */
        index: string;
        /** error page, e.g.: 'error.html' */
        error?: string;
    }

    interface ListObjectsQuery {
        /** search object using prefix key */
        prefix?: string;
        /** search start from marker, including marker key */
        marker?: string;
        /** only search current dir, not including subdir */
        delimiter?: string; // delimiter search scope e.g.
        /** max objects, default is 100, limit to 1000 */
        'max-keys': string | number;
    }

    interface ListObjectResult {
        objects: ObjectMeta[];
        prefixes: string[];
        isTruncated: boolean;
        nextMarker: string;
        res: NormalSuccessResponse;
    }

    interface PutObjectOptions {
        /** the operation timeout */
        timeout?: number;
        /** custom mime, will send with Content-Type entity header */
        mime?: string;
        /** user meta, will send with x-oss-meta- prefix string e.g.: { uid: 123, pid: 110 } */
        meta?: UserMeta;
        callback?: ObjectCallback;
        headers?: object;
    }

    interface PutObjectResult {
        name: string;
        url: string;
        data: object;
        res: NormalSuccessResponse;
    }

    interface PutStreamOptions {
        /** the stream length, chunked encoding will be used if absent */
        contentLength?: number;
        /** the operation timeout */
        timeout: number;
        /** custom mime, will send with Content-Type entity header */
        mime: string;
        meta: UserMeta;
        callback: ObjectCallback;
        headers?: object;
    }

    interface AppendObjectOptions {
        /** specify the position which is the content length of the latest object */
        position?: string;
        /** the operation timeout */
        timeout?: number;
        /** custom mime, will send with Content-Type entity header */
        mime?: string;
        meta?: UserMeta;
        headers?: object;
    }

    interface AppendObjectResult {
        name: string;
        /** the url of oss */
        url: string;
        res: NormalSuccessResponse;
        /** the next position */
        nextAppendPosition: string;
    }

    interface HeadObjectOptions {
        timeout?: number;
        headers?: object;
    }

    interface HeadObjectResult {
        /** response status, maybe 200 or 304 */
        status: number;
        meta: UserMeta;
        res: NormalSuccessResponse;
    }

    interface GetObjectOptions {
        timeout?: number;
        /** The Content-Type of the callback requests initiatiated, It supports application/x-www-form-urlencoded and application/json, and the former is the default value. */
        process?: string;
        headers?: object;
    }

    interface GetObjectResult {
        /** file content buffer if file parameter is null or ignore */
        content?: any;
        res: NormalSuccessResponse;
    }

    interface GetStreamOptions {
        timeout?: number;
        /** The Content-Type of the callback requests initiatiated, It supports application/x-www-form-urlencoded and application/json, and the former is the default value. */
        process?: string;
        headers?: object;
    }

    interface GetStreamResult {
        /** readable stream instance if response status is not 200, stream will be null. */
        stream?: any;
        res: NormalSuccessResponse;
    }

    interface CopyObjectOptions {
        timeout?: number;
        meta?: UserMeta;
        headers?: object;
    }

    interface CopyAndPutMetaResult {
        data: ModifyData;
        res: NormalSuccessResponse;
    }

    interface DeleteMultiOptions {
        /** quite mode or verbose mode, default is false */
        quiet?: boolean;
        timeout?: number;
    }

    interface DeleteMultiResult {
        /** deleted object names list */
        deleted?: string[];
        res: NormalSuccessResponse;
    }

    interface ResponseHeaderType {
        'content-type'?: string;
        'content-disposition'?: string;
        'cache-control'?: string;
    }

    interface SignatureUrlOptions {
        /** after expires seconds, the url will become invalid, default is 1800 */
        expires?: number;
        /** the HTTP method, default is 'GET' */
        method?: HTTPMethods;
        /** set the request content type */
        'Content-Type'?: string;
        process?: string;
        /** set the response headers for download */
        response?: ResponseHeaderType;
        callback?: ObjectCallback;
    }

    interface GetACLResult {
        acl: ACLType;
        res: NormalSuccessResponse;
    }

    interface InitMultipartUploadOptions {
        timeout?: number;
        /** Mime file type */
        mime?: string;
        meta?: UserMeta;
        headers?: object;
    }

    interface InitMultipartUploadResult {
        res: { status: number; headers: object; size: number; rt: number };
        /** bucket name */
        bucket: string;
        /** object name store on OSS */
        name: string;
        /** upload id, use for uploadPart, completeMultipart */
        uploadId: string;
    }

    interface UploadPartResult {
        name: string;
        etag: string;
        res: NormalSuccessResponse;
    }

    interface CompleteMultipartUploadOptions {
        timeout?: number;
        callback?: ObjectCallback;
        headers?: object;
    }

    interface CompleteMultipartUploadResult {
        bucket: string;
        name: string;
        etag: string;
        data: object;
        res: NormalSuccessResponse;
    }

    interface MultipartUploadOptions {
        /** the number of parts to be uploaded in parallel */
        parallel?: number;
        /** the suggested size for each part */
        partSize?: number;
        /** the progress callback called after each successful upload of one part */
        progress?: (...args: any[]) => any;
        /** the checkpoint to resume upload, if this is provided, it will continue the upload from where interrupted, otherwise a new multipart upload will be created. */
        checkpoint?: Checkpoint;
        meta?: UserMeta;
        mime?: string;
        callback?: ObjectCallback;
        headers?: object;
        timeout?: number;
        /** {Object} only uploadPartCopy api used, detail */
        copyheaders?: object;
    }

    interface MultipartUploadResult {
        bucket: string;
        name: string;
        etag: string;
        data: object;
        res: NormalSuccessResponse;
    }

    interface MultipartUploadCopyResult {
        bucket: string;
        name: string;
        etag: string;
        res: NormalSuccessResponse;
    }

    interface MultipartUploadCopySourceData {
        /** the source object name */
        sourceKey: string;
        /** sourceData.  the source bucket name */
        sourceBucketName: string;
        /** data copy start byte offset, e.g: 0 */
        startOffset: number;
        /** data copy end byte offset, e.g: 102400 */
        endOffset: number;
    }

    interface ListPartsQuery {
        /** The maximum part number in the response of the OSS. default value: 1000. */
        'max-parts': number;
        /** Starting position of a specific list. A part is listed only when the part number is greater than the value of this parameter. */
        'part-number-marker': number;
        /** Specify the encoding of the returned content and the encoding type. Optional value: url */
        'encoding-type': string;
    }

    interface ListPartsResult {
        uploadId: string;
        bucket: string;
        name: string;
        PartNumberMarker: number;
        nextPartNumberMarker: number;
        maxParts: number;
        isTruncated: boolean;
        parts: ObjectPart[];
        res: NormalSuccessResponse;
    }

    interface ListUploadsQuery {
        prefix?: string;
        'max-uploads'?: number;
        'key-marker'?: string;
        'upload-id-marker'?: string;
    }

    interface ListUploadsResult {
        res: NormalSuccessResponse;
        bucket: string;
        nextKeyMarker: any;
        nextUploadIdMarker: any;
        isTruncated: boolean;
        uploads: Upload[];
    }

    interface PutChannelConf {
        Description?: string;
        Status?: string;
        Target?: {
            Type: string;
            FragDuration: number;
            FragCount: number;
            PlaylistName: string;
        };
    }

    interface PutChannelResult {
        publishUrls: string[];
        playUrls: string[];
        res: NormalSuccessResponse;
    }

    interface GetChannelResult {
        Status: string;
        ConnectedTime?: string;
        RemoteAddr?: string;
        Video?: object;
        Audio?: object;
        res: NormalSuccessResponse;
    }

    interface ListChannelsQuery {
        /** the channel id prefix (returns channels with this prefix) */
        prefix: string;
        /** the channel id marker (returns channels after this id) */
        marker: string;
        /** max number of channels to return */
        'max-keys ': number;
    }

    interface ListChannelsResult {
        channels: Channel[];
        nextMarker: string | null;
        isTruncated: boolean;
        res: NormalSuccessResponse;
    }

    interface ChannelHistoryResult {
        records: ChannelHistory;
        res: NormalSuccessResponse;
    }

    interface GetRtmpUrlOptions {
        /** the expire time in seconds of the url */
        expires?: number;
        /** the additional parameters for url, e.g.: {playlistName: 'play.m3u8'} */
        params?: object;
        /** the operation timeout */
        timeout?: number;
    }
}

// cluster
declare namespace OSS {
    interface ClusterType {
        host: string;
        accessKeyId: string;
        accessKeySecret: string;
    }

    interface ClusterOptions {
        clusters: ClusterType[];
        schedule?: string;
    }

    class Cluster {
        constructor(options: ClusterOptions);

        list(query: ListObjectsQuery | null, options: RequestOptions): Promise<ListObjectResult>;

        put(name: string, file: any, options?: PutObjectOptions): Promise<PutObjectResult>;

        putStream(
            name: string,
            stream: any,
            options?: PutStreamOptions,
        ): Promise<{ name: string; res: NormalSuccessResponse }>;

        head(name: string, options?: HeadObjectOptions): Promise<HeadObjectResult>;

        get(name: string, file?: any, options?: GetObjectOptions): Promise<GetObjectResult>;

        getStream(name?: string, options?: GetStreamOptions): Promise<GetStreamResult>;

        delete(name: string, options?: RequestOptions): Promise<NormalSuccessResponse>;

        copy(name: string, sourceName: string, options?: CopyObjectOptions): Promise<CopyAndPutMetaResult>;

        putMeta(name: string, meta: UserMeta, options: RequestOptions): Promise<CopyAndPutMetaResult>;

        deleteMulti(names: string[], options?: DeleteMultiOptions): Promise<DeleteMultiResult>;

        signatureUrl(name: string, options?: SignatureUrlOptions): string;

        putACL(name: string, acl: ACLType, options?: RequestOptions): Promise<NormalSuccessResponse>;

        restore(name: string, options?: RequestOptions): Promise<NormalSuccessResponse>;
    }
}

// image
declare namespace OSS {
    interface ImageClientOptions {
        /** your image service domain that binding to a OSS bucket */
        imageHost: string;
        /** access key you create on aliyun console website */
        accessKeyId: string;
        /** access secret you create */
        accessKeySecret: string;
        /** the default bucket you want to access If you don't have any bucket, please use putBucket() create one first. */
        bucket: string;
        /** the bucket data region location, please see Data Regions, default is oss-cn-hangzhou */
        region?: string;
        /** access OSS with aliyun internal network or not, default is false If your servers are running on aliyun too, you can set true to save lot of money. */
        internal?: boolean;
        /** instance level timeout for all operations, default is 60s */
        timeout?: string | number;
    }

    interface ImageGetOptions {
        timeout?: number;
        headers?: object;
    }

    interface StyleData {
        /** style name */
        Name: string;
        /** style content */
        Content: string;
        /** style create time */
        CreateTime: string;
        /** style last modify time */
        LastModifyTime: string;
    }

    class ImageClient {
        constructor(options: ImageClientOptions);

        /**
         * Get an image from the image channel.
         */
        get(name: string, file?: any, options?: ImageGetOptions): Promise<{ content: any; res: NormalSuccessResponse }>;

        /**
         * Get an image read stream.
         */
        getStream(name: string, options?: ImageGetOptions): Promise<{ stream: any; res: NormalSuccessResponse }>;

        /**
         * Get a image exif info by image object name from the image channel.
         */
        getExif(name: string, options?: RequestOptions): Promise<{ data: object; res: NormalSuccessResponse }>;

        /**
         * Get a image info and exif info by image object name from the image channel.
         */
        getInfo(name: string, options?: RequestOptions): Promise<{ data: object; res: NormalSuccessResponse }>;

        /**
         * todo
         */
        putStyle(
            name: string,
            style: string,
            options?: RequestOptions,
        ): Promise<{ data: object; res: NormalSuccessResponse }>;

        /**
         * Get a style by name from the image channel.
         */
        getStyle(name: string, options?: RequestOptions): Promise<{ data: StyleData; res: NormalSuccessResponse }>;

        /**
         * Get all styles from the image channel.
         */
        listStyle(options?: RequestOptions): Promise<StyleData[]>;

        /**
         * todo
         */
        deleteStyle(styleName: string, options?: RequestOptions): Promise<NormalSuccessResponse>;

        /**
         * Create a signature url for directly download.
         */
        signatureUrl(name: string, options?: { expires?: string; timeout?: string }): string;
    }
}

declare class OSS {
    constructor(options: OSS.Options);

    /******************************************* the bucket operations *************************************************/

    // base operators
    /**
     * List buckets in this account.
     */
    listBuckets(query: OSS.ListBucketsQueryType | null, options?: OSS.RequestOptions): Promise<OSS.Bucket[]>;

    /**
     * Create a new bucket.
     */
    putBucket(
        name: string,
        options?: OSS.PutBucketOptions,
    ): Promise<{ bucket: string; res: OSS.NormalSuccessResponse }>;

    /**
     * Use the bucket.
     */
    useBucket(name: string): void;

    /**
     * Delete an empty bucket.
     */
    deleteBucket(name: string, options?: OSS.RequestOptions): Promise<OSS.NormalSuccessResponse>;

    /**
     * Get bucket information,include CreationDate、ExtranetEndpoint、IntranetEndpoint、Location、Name、StorageClass、 Owner、AccessControlList
     */
    getBucketInfo(name: string): Promise<any>;

    /**
     * Get bucket location
     */
    getBucketLocation(name: string): Promise<any>;

    // ACL operations
    /**
     * Update the bucket ACL.
     */
    putBucketACL(name: string, acl: OSS.ACLType, options?: OSS.RequestOptions): Promise<OSS.NormalSuccessResponse>;

    /**
     * Get the bucket ACL.
     *   acl - acl settings string
     */
    getBucketACL(name: string, options?: OSS.RequestOptions): Promise<{ acl: string; res: OSS.NormalSuccessResponse }>;

    // logging operations
    /**
     * Update the bucket logging settings. Log file will create every one hour and name format: <prefix><bucket>-YYYY-mm-DD-HH-MM-SS-UniqueString.
     */
    putBucketLogging(name: string, prefix?: string, options?: OSS.RequestOptions): Promise<OSS.NormalSuccessResponse>;

    /**
     * Get the bucket logging settings.
     */
    getBucketLogging(
        name: string,
        options?: OSS.RequestOptions,
    ): Promise<{ enable: boolean; prefix: string | null; res: OSS.NormalSuccessResponse }>;

    /**
     * Delete the bucket logging settings.
     */
    deleteBucketLogging(name: string, options?: OSS.RequestOptions): Promise<OSS.NormalSuccessResponse>;

    // Website operations
    /**
     * Set the bucket as a static website.
     */
    putBucketWebsite(name: string, config: OSS.PutBucketWebsiteConfig): Promise<OSS.NormalSuccessResponse>;

    /**
     * Get the bucket website config.
     */
    getBucketWebsite(
        name: string,
        options?: OSS.RequestOptions,
    ): Promise<{ index: string; error: string; res: OSS.NormalSuccessResponse }>;

    /**
     * Delete the bucket website config.
     */
    deleteBucketWebsite(name: string, options?: OSS.RequestOptions): Promise<OSS.NormalSuccessResponse>;

    // referer operations
    /**
     * Set the bucket request Referer white list.
     */
    putBucketReferer(
        name: string,
        allowEmpty: boolean,
        referers: string[],
        options?: OSS.RequestOptions,
    ): Promise<OSS.NormalSuccessResponse>;

    /**
     * Get the bucket request Referer white list.
     */
    getBucketReferer(
        name: string,
        options?: OSS.RequestOptions,
    ): Promise<{ allowEmpty: boolean; referers: string[]; res: OSS.NormalSuccessResponse }>;

    /**
     * Delete the bucket request Referer white list.
     */
    deleteBucketReferer(name: string, options?: OSS.RequestOptions): Promise<OSS.NormalSuccessResponse>;

    // lifecycle operations
    /**
     * Set the bucket object lifecycle.
     */
    putBucketLifecycle(
        name: string,
        rules: OSS.LifecycleRule[],
        options?: OSS.RequestOptions,
    ): Promise<OSS.NormalSuccessResponse>;

    /**
     * Get the bucket object lifecycle.
     */
    getBucketLifecycle(
        name: string,
        options?: OSS.RequestOptions,
    ): Promise<{ rules: OSS.LifecycleRule[]; res: OSS.NormalSuccessResponse }>;

    /**
     * Delete the bucket object lifecycle.
     */
    deleteBucketLifecycle(name: string, options?: OSS.RequestOptions): Promise<OSS.NormalSuccessResponse>;

    // CORS operations
    /**
     * Set CORS rules of the bucket object
     */
    putBucketCORS(
        name: string,
        rules: OSS.CORSRule[],
        options?: OSS.RequestOptions,
    ): Promise<OSS.NormalSuccessResponse>;

    /**
     * Get CORS rules of the bucket object.
     */
    getBucketCORS(name: string): Promise<{ rules: OSS.CORSRule[]; res: OSS.NormalSuccessResponse }>;

    /**
     * Delete CORS rules of the bucket object.
     */
    deleteBucketCORS(name: string): Promise<OSS.NormalSuccessResponse>;

    /********************************************************** Object operations ********************************************/
    /**
     * List objects in the bucket.
     */
    list(query: OSS.ListObjectsQuery | null, options: OSS.RequestOptions): Promise<OSS.ListObjectResult>;

    /**
     * Add an object to the bucket.
     */
    put(name: string, file: any, options?: OSS.PutObjectOptions): Promise<OSS.PutObjectResult>;

    /**
     * Add a stream object to the bucket.
     */
    putStream(
        name: string,
        stream: any,
        options?: OSS.PutStreamOptions,
    ): Promise<{ name: string; res: OSS.NormalSuccessResponse }>;

    /**
     * Append an object to the bucket, it's almost same as put, but it can add content to existing object rather than override it.
     */
    append(name: string, file: any, options?: OSS.AppendObjectOptions): Promise<OSS.AppendObjectResult>;

    /**
     * Get the Object url. If provide baseUrl, will use baseUrl instead the default endpoint.
     */
    getObjectUrl(name: string, baseUrl?: string): string;

    /**
     * Get the Object url. If provide baseUrl, will use baseUrl instead the default bucket and endpoint. Suggest use generateObjectUrl instead of getObjectUrl.
     */
    generateObjectUrl(name: string, baseUrl?: string): string;

    /**
     * Head an object and get the meta info.
     */
    head(name: string, options?: OSS.HeadObjectOptions): Promise<OSS.HeadObjectResult>;

    /**
     * Get an object from the bucket.
     */
    get(name: string, file?: any, options?: OSS.GetObjectOptions): Promise<OSS.GetObjectResult>;

    /**
     * Get an object read stream.
     */
    getStream(name?: string, options?: OSS.GetStreamOptions): Promise<OSS.GetStreamResult>;

    /**
     * Delete an object from the bucket.
     */
    delete(name: string, options?: OSS.RequestOptions): Promise<OSS.NormalSuccessResponse>;

    /**
     * Copy an object from sourceName to name.
     */
    copy(name: string, sourceName: string, options?: OSS.CopyObjectOptions): Promise<OSS.CopyAndPutMetaResult>;

    /**
     * Set an exists object meta.
     */
    putMeta(name: string, meta: OSS.UserMeta, options: OSS.RequestOptions): Promise<OSS.CopyAndPutMetaResult>;

    /**
     * Delete multi objects in one request.
     */
    deleteMulti(names: string[], options?: OSS.DeleteMultiOptions): Promise<OSS.DeleteMultiResult>;

    /**
     * Create a signature url for download or upload object. When you put object with signatureUrl ,you need to pass Content-Type.Please look at the example.
     */
    signatureUrl(name: string, options?: OSS.SignatureUrlOptions): string;

    /**
     * Set object's ACL.
     */
    putACL(name: string, acl: OSS.ACLType, options?: OSS.RequestOptions): Promise<OSS.NormalSuccessResponse>;

    /**
     * Get object's ACL.
     */
    getACL(name: string, options?: OSS.RequestOptions): Promise<OSS.GetACLResult>;

    /**
     * Restore Object.
     */
    restore(name: string, options?: OSS.RequestOptions): Promise<OSS.NormalSuccessResponse>;

    /**
     * multi upload
     */
    initMultipartUpload(name: string, options?: OSS.InitMultipartUploadOptions): Promise<OSS.InitMultipartUploadResult>;

    /**
     * After initiating a Multipart Upload event, you can upload data in parts based on the specified object name and Upload ID.
     */
    uploadPart(
        name: string,
        uploadId: string,
        partNo: number,
        file: any,
        start: number,
        end: number,
        options?: OSS.RequestOptions,
    ): Promise<OSS.UploadPartResult>;

    /**
     * Using Upload Part Copy, you can copy data from an existing object and upload a part of the data.
     * When copying a file larger than 1 GB, you must use the Upload Part Copy method. If you want to copy a file smaller than 1 GB, see Copy Object.
     */
    uploadPartCopy(
        name: string,
        uploadId: string,
        partNo: number,
        range: string,
        sourceData: { sourceKey: string; sourceBucketName: string },
        options: { timeout?: number; headers?: object },
    ): Promise<OSS.UploadPartResult>;

    /**
     * After uploading all data parts, you must call the Complete Multipart Upload API to complete Multipart Upload for the entire file.
     */
    completeMultipartUpload(
        name: string,
        uploadId: string,
        parts: Array<{ number: number; etag: string }>,
        options?: OSS.CompleteMultipartUploadOptions,
    ): Promise<OSS.CompleteMultipartUploadResult>;

    /**
     * Upload file with OSS multipart.
     */
    multipartUpload(name: string, file: any, options: OSS.MultipartUploadOptions): Promise<OSS.MultipartUploadResult>;

    /**
     * Copy file with OSS multipart.
     * this function contains head, initMultipartUpload, uploadPartCopy, completeMultipartUpload.
     * When copying a file larger than 1 GB, you should use the Upload Part Copy method. If you want to copy a file smaller than 1 GB, see Copy Object.
     */
    multipartUploadCopy(
        name: string,
        sourceData: OSS.MultipartUploadCopySourceData,
        options?: OSS.MultipartUploadOptions,
    ): Promise<OSS.MultipartUploadCopyResult>;

    /**
     * The ListParts command can be used to list all successfully uploaded parts mapped to a specific upload ID, i.e.: those not completed and not aborted.
     */
    listParts(
        name: string,
        uploadId: string,
        query?: OSS.ListPartsQuery,
        options?: OSS.RequestOptions,
    ): Promise<OSS.ListPartsResult>;

    /**
     * List on-going multipart uploads, i.e.: those not completed and not aborted.
     */
    listUploads(query: OSS.ListUploadsQuery, options?: OSS.RequestOptions): Promise<OSS.ListUploadsResult>;

    /**
     * Abort a multipart upload for object.
     */
    abortMultipartUpload(
        name: string,
        uploadId: string,
        options?: OSS.RequestOptions,
    ): Promise<OSS.NormalSuccessResponse>;

    /************************************************ RTMP Operations *************************************************************/
    /**
     * Create a live channel.
     */
    putChannel(id: string, conf: OSS.PutChannelConf, options?: OSS.RequestOptions): Promise<OSS.PutChannelResult>;

    /**
     * Get live channel info.
     */
    getChannel(
        id: string,
        options?: OSS.RequestOptions,
    ): Promise<{ data: OSS.PutChannelConf; res: OSS.NormalSuccessResponse }>;

    /**
     * Delete a live channel.
     */
    deleteChannel(id: string, options?: OSS.RequestOptions): Promise<OSS.NormalSuccessResponse>;

    /**
     * Change the live channel status.
     */
    putChannelStatus(id: string, status?: string, options?: OSS.RequestOptions): Promise<OSS.NormalSuccessResponse>;

    /**
     * Get the live channel status.
     */
    getChannelStatus(id: string, options?: OSS.RequestOptions): Promise<OSS.GetChannelResult>;

    /**
     * List channels.
     */
    listChannels(query: OSS.ListChannelsQuery, options?: OSS.RequestOptions): Promise<OSS.ListChannelsResult>;

    /**
     * Get the live channel history.
     */
    getChannelHistory(id: string, options?: OSS.RequestOptions): Promise<OSS.ChannelHistoryResult>;

    /**
     * Create a VOD playlist for the channel.
     */
    createVod(
        id: string,
        name: string,
        time: { startTime: number; endTime: number },
        options?: OSS.RequestOptions,
    ): Promise<OSS.NormalSuccessResponse>;

    /**
     * Get signatured rtmp url for publishing.
     */
    getRtmpUrl(channelId?: string, options?: OSS.GetRtmpUrlOptions): string;
}
