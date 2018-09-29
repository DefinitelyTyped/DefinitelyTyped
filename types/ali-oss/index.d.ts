// Type definitions for ali-oss 6.0.1
// Project: https://github.com/ali-sdk/ali-oss
// Definitions by: Ptrdu <https://github.com/ptrdu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as ImageClientDefinition from './ImageClient'
import * as ClusterDefinition from "./Cluster"

export * from './ImageClient'
export * from './Cluster'

export interface Options {
    accessKeyId: string, // access secret you create
    accessKeySecret: string, // access secret you create
    stsToken?: string, // used by temporary authorization
    bucket?: string, //  the default bucket you want to access If you don't have any bucket, please use putBucket() create one first.
    endpoint?: string, // oss region domain. It takes priority over region.
    region?: string, // the bucket data region location, please see Data Regions, default is oss-cn-hangzhou.
    internal?: boolean, //  access OSS with aliyun internal network or not, default is false. If your servers are running on aliyun too, you can set true to save lot of money.
    secure?: boolean, // instruct OSS client to use HTTPS (secure: true) or HTTP (secure: false) protocol.
    timeout?: string | number // instance level timeout for all operations, default is 60s
}

export type Bucket = {
    name: string,
    region: string,
    creationDate: string,
    StorageClass: StorageType
}

export type StorageType = "Standard" | "IA" | "Archive"

export type ACLType = "public-read-write" | "public-read" | "and private"

export type HTTPMethods = "GET" | "POST" | "DELETE" | "PUT";

export interface RequestOptions {
    // the operation timeout
    timeout?: number
}

export type RuleStatusType = "Enabled" | "Disabled"

export interface LifecycleRule {
    id?: string, // rule id, if not set, OSS will auto create it with random string.
    prefix: string, // store prefix
    status: RuleStatusType, // rule status, allow values: Enabled or Disabled
    days?: number | string, // expire after the days
    date: string // expire date, e.g.: 2022-10-11T00:00:00.000Z date and days only set one.
}

export interface CORSRule {
    allowedOrigin: string | Array<string>, // configure for Access-Control-Allow-Origin header
    allowedMethod: string | Array<string>, // configure for Access-Control-Allow-Methods header
    allowedHeader?: string | Array<string>, // configure for Access-Control-Allow-Headers header
    exposeHeader?: string | Array<string>, // configure for Access-Control-Expose-Headers header
    maxAgeSeconds?: string | Array<string>, // configure for Access-Control-Max-Age header
}

export interface OwnerType {
    id: string,
    displayName: string
}

export interface ObjectMeta  {
    name: string, // object name on oss
    lastModified: string, // object last modified GMT date, e.g.: 2015-02-19T08:39:44.000Z
    etag: string, // object etag contains ", e.g.: "5B3C1A2E053D763E1B002CC607C5A0FE"
    type: string, // object type, e.g.: Normal
    size: number, // object size, e.g.: 344606
    storageClass: StorageType,
    owner: OwnerType,
}

export interface NormalSuccessResponse {
    //response status
    status: number,
    // response headers
    headers: object, // todo the object in detail
    // response size
    size: number,
    //  request total use time (ms)
    rt: number
}

export interface UserMeta {
    uid: number,
    pid: number
}

export interface ObjectCallback {
    url: string, // After a file is uploaded successfully, the OSS sends a callback request to this URL.
    host?: string, // The host header value for initiating callback requests.
    body: string, // The value of the request body when a callback is initiated, for example, key=$(key)&etag=$(etag)&my_var=$(x:my_var).
    contentType?: string, // The Content-Type of the callback requests initiatiated, It supports application/x-www-form-urlencoded and application/json, and the former is the default value.
    customValue?: object,
    headers?: object //  extra headers, detail see RFC 2616
}

export interface ModifyData {
    lastModified: string, //  object last modified GMT string
    etag: string // object etag contains ", e.g.: "5B3C1A2E053D763E1B002CC607C5A0FE"
}

export interface Checkpoint  {
    file: any, // The file object selected by the user, if the browser is restarted, it needs the user to manually trigger the settings
    name: string, //  object key
    fileSize: number,
    partSize: number,
    uploadId: string,
    doneParts: Array<{ number: number, etag: string }>
}

export interface ObjectPart {
    PartNumber: number,
    LastModified: any, // {Date} Time when a part is uploaded.
    ETag: string,
    size: number
}

export interface Upload {
    name: string,
    uploadId: string,
    initiated: any
}

export interface Channel {
    Name: string,
    Description: string,
    Status: string,
    LastModified: string,
    PublishUrls: Array<string>,
    PlayUrls: Array<string>
}

export interface ChannelHistory {
    StartTime: string, //
    EndTime: string,
    RemoteAddr: string //  the remote addr
}
// parameters type
export interface ListBucketsQueryType {
    prefix?: string, // search buckets using prefix key
    marker?: string, // search start from marker, including marker key
    'max-keys'?: string | number // max buckets, default is 100, limit to 1000
}

export interface PutBucketOptions {
    timeout: number,
    storageClass: StorageType
}

export interface PutBucketWebsiteConfig {
    index: string, // default page, e.g.: index.html
    error?: string // error page, e.g.: 'error.html'
}

export interface ListObjectsQuery {
    prefix?: string, // search object using prefix key
    marker?: string, // search start from marker, including marker key
    delimiter?: string, // delimiter search scope e.g. / only search current dir, not including subdir
    'max-keys': string | number // max objects, default is 100, limit to 1000
}

export interface ListObjectResult {
    objects: Array<ObjectMeta>,
    prefixes: Array<string>,
    isTruncated: boolean,
    nextMarker: string,
    res: NormalSuccessResponse
}

export interface PutObjectOptions {
    timeout?: number, // the operation timeout
    mime?: string, // custom mime, will send with Content-Type entity header
    meta?: UserMeta, // user meta, will send with x-oss-meta- prefix string e.g.: { uid: 123, pid: 110 }
    callback: ObjectCallback,
}

export interface PutObjectResult {
    name: string,
    data: object,
    res: NormalSuccessResponse
}

export interface PutStreamOptions {
    contentLength?: number, // the stream length, chunked encoding will be used if absent
    timeout: number, // the operation timeout
    mime: string, // custom mime, will send with Content-Type entity header
    meta: UserMeta,
    callback: ObjectCallback
}

export interface AppendObjectOptions {
    position?: string, // specify the position which is the content length of the latest object
    timeout?: number, // the operation timeout
    mime?: string, // custom mime, will send with Content-Type entity header
    meta?: UserMeta,
    headers?: object
}

export interface AppendObjectResult {
    name: string,
    url: string, // the url of oss
    res: NormalSuccessResponse,
    nextAppendPosition: string, // the next position
}

export interface HeadObjectOptions {
    timeout?: number,
    headers?: object
}

export interface HeadObjectResult {
    status: number, // response status, maybe 200 or 304
    meta: UserMeta,
    res: NormalSuccessResponse
}

export interface GetObjectOptions {
    timeout?: number,
    process?: string, // image process params, will send with x-oss-process e.g.: {process: 'image/resize,w_200'}
    headers?: object
}

export interface GetObjectResult {
    content?: any, // file content buffer if file parameter is null or ignore
    res: NormalSuccessResponse
}

export interface GetStreamOptions {
    timeout?: number,
    process?: string, // image process params, will send with x-oss-process e.g.: {process: 'image/resize,w_200'}
    headers?: object
}

export interface GetStreamResult {
    stream?: any, // readable stream instance if response status is not 200, stream will be null.
    res: NormalSuccessResponse
}

export interface CopyObjectOptions {
    timeout?: number,
    meta?: UserMeta,
    headers?: object
}

export interface CopyAndPutMetaResult {
    data: ModifyData,
    res: NormalSuccessResponse
}

export interface DeleteMultiOptions {
    quite?: boolean // quiet mode or verbose mode, default is false, verbose mode quiet mode: if all objects delete succes, return emtpy response. otherwise return delete error object results. verbose mode: return all object delete results.
    timeout?: number
}

export interface DeleteMultiResult {
    deleted?: Array<string> // deleted object names list
    res: NormalSuccessResponse
}

export interface ResponseHeaderType {
    'content-type'?: string,
    'content-disposition'? :string,
    'cache-control'?: string
}

export interface SignatureUrlOptions {
    expires?: number, // after expires seconds, the url will become invalid, default is 1800
    method?: HTTPMethods, // the HTTP method, default is 'GET'
    'Content-Type'?: string, // set the request content type
    process?: string,
    response?: ResponseHeaderType, // set the response headers for download
    callback?: ObjectCallback
}

export interface GetACLResult {
    acl: ACLType,
    res: NormalSuccessResponse
}

export interface InitMultipartUploadOptions {
    timeout?: number,
    mime?: string, // Mime file type
    meta?: UserMeta,
    headers?: object
}

export interface InitMultipartUploadResult {
    res: { status: number, headers: object, size: number, rt: number }
    bucket: string, // bucket name
    name: string, // object name store on OSS
    uploadId: string, // upload id, use for uploadPart, completeMultipart
}

export interface UploadPartResult {
    name: string,
    etag: string,
    res: NormalSuccessResponse
}

export interface CompleteMultipartUploadOptions {
    timeout?: number,
    callback?: ObjectCallback,
    headers?: object
}

export interface CompleteMultipartUploadResult {
    bucket: string,
    name: string,
    etag: string,
    data: object,
    res: NormalSuccessResponse
}

export interface MultipartUploadOptions {
    parallel?: number, // the number of parts to be uploaded in parallel
    partSize?: number, // the suggested size for each part
    progress?: Function, // the progress callback called after each successful upload of one part, it will be given three parameters: (percentage {Number}, checkpoint {Object}, res {Object})
    checkpoint?: Checkpoint, // the checkpoint to resume upload, if this is provided, it will continue the upload from where interrupted, otherwise a new multipart upload will be created.
    meta?: UserMeta,
    mime?: string,
    callback?: ObjectCallback,
    headers?: object,
    timeout?: number
    copyheaders?: object, //  {Object} only uploadPartCopy api used, detail
}

export interface MultipartUploadResult {
    bucket: string,
    name: string,
    etag: string,
    data: object,
    res: NormalSuccessResponse
}

export interface MultipartUploadCopyResult {
    bucket: string,
    name: string,
    etag: string,
    res: NormalSuccessResponse
}

export interface MultipartUploadCopySourceData {
    sourceKey: string, // the source object name
    sourceBucketName: string, // sourceData.  the source bucket name
    startOffset: number, // data copy start byte offset, e.g: 0
    endOffset: number // data copy end byte offset, e.g: 102400
}

export interface ListPartsQuery {
    'max-parts': number, // The maximum part number in the response of the OSS. default value: 1000.
    'part-number-marker': number, // Starting position of a specific list. A part is listed only when the part number is greater than the value of this parameter.
    'encoding-type': string // Specify the encoding of the returned content and the encoding type. Optional value: url
}

export interface ListPartsResult {
    uploadId: string,
    bucket: string,
    name: string,
    PartNumberMarker: number,
    nextPartNumberMarker: number,
    maxParts: number,
    isTruncated: boolean,
    parts: Array<ObjectPart>,
    res: NormalSuccessResponse
}

export interface ListUploadsQuery {
    prefix?: string,
    'max-uploads'?: number,
    'key-marker'?: string,
    'upload-id-marker'?: string
}

export interface ListUploadsResult {
    res: NormalSuccessResponse,
    bucket: string,
    nextKeyMarker: any,
    nextUploadIdMarker: any,
    isTruncated: boolean,
    uploads: Array<Upload>
}

export interface PutChannelConf {
    Description?: string,
    Status?: string,
    Target?: {
        Type: string,
        FragDuration: number,
        FragCount: number,
        PlaylistName: string
    }
}

export interface PutChannelResult {
    publishUrls: Array<string>,
    playUrls: Array<string>,
    res: NormalSuccessResponse
}

export interface GetChannelResult {
    Status: string,
    ConnectedTime?: string,
    RemoteAddr?: string,
    Video?: object,
    Audio?: object,
    res: NormalSuccessResponse
}

export interface ListChannelsQuery {
    prefix: string, // the channel id prefix (returns channels with this prefix)
    marker: string, // the channle id marker (returns channels after this id)
    'max-keys ': number // max number of channels to return
}

export interface ListChannelsResult {
    channels: Array<Channel>
    nextMarker: string | null,
    isTruncated: boolean,
    res: NormalSuccessResponse
}

export interface ChannelHistoryResult {
    records: ChannelHistory,
    res: NormalSuccessResponse
}

export interface GetRtmpUrlOptions {
    expires?: number, // the expire time in seconds of the url
    params?: object, // the additional paramters for url, e.g.: {playlistName: 'play.m3u8'}
    timeout?: number // the operation timeout
}

export default class OSS {
    // the image client
    public static ImageClient: (options: ImageClientDefinition.ImageClientOptions) => ImageClientDefinition.ImageClient
    public static Cluster: (options: ClusterDefinition.ClusterOptions) => ClusterDefinition.Cluster

    constructor(options: Options)

    /******************************************* the bucket operations *************************************************/

    // base operators
    /**
     * List buckets in this account.
     * @param {ListBucketsQueryType | null} query - query parameters, default is null
     * @param {RequestOptions} options - optional parameters
     *   timeout - the operation timeout
     * @return {Promise<Array<Bucket>>}
     */
    listBuckets(query: ListBucketsQueryType | null, options?: RequestOptions): Promise<Array<Bucket>>

    /**
     * Create a new bucket.
     * @param {string} name -  bucket name If bucket exists and not belong to current account, will throw BucketAlreadyExistsError.
     * If bucket not exists, will create a new bucket and set it's ACL.
     * @param {PutBucketOptions} options - optional parameters
     * @return { Promise<{ bucket: string, res: NormalSuccessResponse }> }
     */
    putBucket(name: string, options?: PutBucketOptions): Promise<{ bucket: string, res: NormalSuccessResponse }>

    /**
     * Use the bucket.
     * @param {string} name - bucket name
     */
    useBucket(name: string): void

    /**
     * Delete an empty bucket.
     * @param {string} name - bucket name If bucket is not empty, will throw BucketNotEmptyError. If bucket is not exists, will throw NoSuchBucketError.
     * @param {RequestOptions} options
     * @return {Promise<NormalSuccessResponse>}
     */
    deleteBucket(name: string, options?: RequestOptions): Promise<NormalSuccessResponse>

    /**
     * Get bucket information,include CreationDate、ExtranetEndpoint、IntranetEndpoint、Location、Name、StorageClass、 Owner、AccessControlList
     * @param {string} name - bucket name
     * @return {Promise<any>} // todo the official document miss the return type
     */
    getBucketInfo(name: string): Promise<any>

    /**
     * Get bucket location
     * @param {string} name - bucket name
     * @return {Promise<any>} // todo the official document miss the return type
     */
    getBucketLocation(name: string): Promise<any>

    // ACL operations
    /**
     * Update the bucket ACL.
     * @param {string} name -  bucket name
     * @param {ACLType} acl - access control list, current available: public-read-write, public-read and private
     * @param {RequestOptions} options
     * @return {Promise<NormalSuccessResponse>}
     */
    putBucketACL(name: string, acl: ACLType, options?: RequestOptions): Promise<NormalSuccessResponse>

    /**
     * Get the bucket ACL.
     * @param {string} name - bucket name
     * @param {RequestOptions} options
     * @return {Promise<{ acl: string, res: NormalSuccessResponse }>}
     *   acl - acl settings string
     */
    getBucketACL(name: string, options?: RequestOptions): Promise<{ acl: string, res: NormalSuccessResponse }>

    // logging operations
    /**
     * Update the bucket logging settings. Log file will create every one hour and name format: <prefix><bucket>-YYYY-mm-DD-HH-MM-SS-UniqueString.
     * @param {string} name -  bucket name
     * @param {string} prefix - prefix path name to store the log files
     * @param {RequestOptions} options
     * @return {Promise<NormalSuccessResponse>}
     */
    putBucketLogging(name: string, prefix?: string, options?: RequestOptions): Promise<NormalSuccessResponse>

    /**
     * Get the bucket logging settings.
     * @param {string} name
     * @param {RequestOptions} options
     * @return {Promise<{ enable: boolean, prefix: string | null, res: NormalSuccessResponse }>}
     */
    getBucketLogging(name: string, options?: RequestOptions): Promise<{ enable: boolean, prefix: string | null, res: NormalSuccessResponse }>

    /**
     * Delete the bucket logging settings.
     * @param {string} name - bucket name
     * @param {RequestOptions} options
     * @return {Promise<NormalSuccessResponse>}
     */
    deleteBucketLogging(name: string, options?: RequestOptions): Promise<NormalSuccessResponse>

    // Website operations
    /**
     * Set the bucket as a static website.
     * @param {string} name - bucket name
     * @param {PutBucketWebsiteConfig} config
     * @return {Promise<NormalSuccessResponse>}
     */
    putBucketWebsite(name: string, config: PutBucketWebsiteConfig): Promise<NormalSuccessResponse>

    /**
     * Get the bucket website config.
     * @param {string} name - bucket name
     * @param {RequestOptions} options
     * @return {Promise<{ index: string, error: string, res: NormalSuccessResponse }>}
     */
    getBucketWebsite(name: string, options?: RequestOptions): Promise<{ index: string, error: string, res: NormalSuccessResponse }>

    /**
     * Delete the bucket website config.
     * @param {string} name - bucket name
     * @param {RequestOptions} options
     * @return {Promise<NormalSuccessResponse>}
     */
    deleteBucketWebsite(name: string, options?: RequestOptions): Promise<NormalSuccessResponse>

    // referer operations
    /**
     * Set the bucket request Referer white list.
     * @param {string} name
     * @param {boolean} allowEmpty - allow empty request referer or not
     * @param {Array<string>} referers - Referer white list, e.g.: ['https://npm.taobao.org', 'http://cnpmjs.org']
     * @param {RequestOptions} options
     * @return {Promise<NormalSuccessResponse>}
     */
    putBucketReferer(name: string, allowEmpty: boolean, referers: Array<string>, options?: RequestOptions): Promise<NormalSuccessResponse>

    /**
     * Get the bucket request Referer white list.
     * @param {string} name - bucket name
     * @param {RequestOptions} options
     * @return {Promise<{ allowEmpty: boolean, referers: Array<string>, res: NormalSuccessResponse }>}
     */
    getBucketReferer(name: string, options?: RequestOptions): Promise<{ allowEmpty: boolean, referers: Array<string>, res: NormalSuccessResponse }>

    /**
     * Delete the bucket request Referer white list.
     * @param {string} name
     * @param {RequestOptions} options
     * @return {Promise<NormalSuccessResponse>}
     */
    deleteBucketReferer(name: string, options?: RequestOptions): Promise<NormalSuccessResponse>

    // lifecycle operations
    /**
     * Set the bucket object lifecycle.
     * @param {string} name
     * @param {Array<Rule>} rules - rule config list
     * @param {RequestOptions} options
     * @return {Promise<NormalSuccessResponse>}
     */
    putBucketLifecycle(name: string, rules: Array<LifecycleRule>, options?: RequestOptions): Promise<NormalSuccessResponse>

    /**
     * Get the bucket object lifecycle.
     * @param {string} name
     * @param {RequestOptions} options
     * @return {Promise<{ rules: Array<Rule>, res: NormalSuccessResponse }>}
     */
    getBucketLifecycle(name: string, options?: RequestOptions): Promise<{ rules: Array<LifecycleRule>, res: NormalSuccessResponse }>

    /**
     * Delete the bucket object lifecycle.
     * @param {string} name
     * @param {RequestOptions} options
     * @return {Promise<NormalSuccessResponse>}
     */
    deleteBucketLifecycle(name: string, options?: RequestOptions): Promise<NormalSuccessResponse>

    // CORS operations
    /**
     * Set CORS rules of the bucket object
     * @param {string} name
     * @param {Array<CORSRule>} rules
     * @param {RequestOptions} options
     * @return {Promise<NormalSuccessResponse>}
     */
    putBucketCORS(name: string, rules: Array<CORSRule>, options?: RequestOptions): Promise<NormalSuccessResponse>

    /**
     * Get CORS rules of the bucket object.
     * @param {string} name
     * @return {Promise<{rules: Array<CORSRule>; res: NormalSuccessResponse}>}
     */
    getBucketCORS(name: string): Promise<{ rules: Array<CORSRule>, res: NormalSuccessResponse }>

    /**
     * Delete CORS rules of the bucket object.
     * @param {string} name
     * @return {Promise<NormalSuccessResponse>}
     */
    deleteBucketCORS(name: string): Promise<NormalSuccessResponse>

    /********************************************************** Object operations ********************************************/
    /**
     * List objects in the bucket.
     * @param {ListObjectsQuery | null} query
     * @param {RequestOptions} options
     * @return {Promise<ListObjectResult>}
     */
    list(query: ListObjectsQuery | null, options: RequestOptions): Promise<ListObjectResult>

    /**
     * Add an object to the bucket.
     * @param {string} name - object name store on OSS
     * @param file -  {String|Buffer|ReadStream|File(only support Browser)|Blob(only support Browser)} object local path, content buffer or ReadStream content instance use in Node, Blob and html5 File
     * @param {PutObjectOptions} options - optional parameters
     * @return {Promise<PutObjectResult>}
     */
    put(name: string, file: any, options?: PutObjectOptions): Promise<PutObjectResult>

    /**
     * Add a stream object to the bucket.
     * @param {string} name - object name store on OSS
     * @param stream - object ReadStream content instance
     * @param {PutStreamOptions} options -  optional parameters
     * @return {Promise<{name: string; res: NormalSuccessResponse}>}
     */
    putStream(name: string, stream: any, options?: PutStreamOptions): Promise<{ name: string, res: NormalSuccessResponse }>

    /**
     * Append an object to the bucket, it's almost same as put, but it can add content to existing object rather than override it.
     * @param {string} name
     * @param file
     * @param {AppendObjectOptions} options
     * @return {Promise<AppendObjectResult>}
     */
    append(name: string, file: any, options?: AppendObjectOptions): Promise<AppendObjectResult>

    /**
     * Get the Object url. If provide baseUrl, will use baseUrl instead the default endpoint.
     * @param {string} name
     * @param {string} baseUrl
     * @return {string}
     */
    getObjectUrl(name: string, baseUrl?: string): string

    /**
     * Get the Object url. If provide baseUrl, will use baseUrl instead the default bucket and endpoint. Suggest use generateObjectUrl instead of getObjectUrl.
     * @param {string} name
     * @param {string} baseUrl
     * @return {string}
     */
    generateObjectUrl(name: string, baseUrl?: string): string

    /**
     * Head an object and get the meta info.
     * @param {string} name
     * @param {HeadObjectOptions} options
     * @return {Promise<HeadObjectResult>}
     */
    head(name: string, options?: HeadObjectOptions): Promise<HeadObjectResult>

    /**
     * Get an object from the bucket.
     * @param {string} name
     * @param file -  {String|WriteStream} file path or WriteStream instance to store the content If file is null or ignore this parameter, function will return info contains content property.
     * @param {GetObjectOptions} options
     * @return {Promise<GetObjectOptions>}
     */
    get(name: string, file?: any, options?: GetObjectOptions): Promise<GetObjectResult>

    /**
     * Get an object read stream.
     * @param {string} name
     * @param {GetStreamOptions} options
     * @return {Promise<GetStreamResult>}
     */
    getStream(name?: string, options?: GetStreamOptions): Promise<GetStreamResult>

    /**
     * Delete an object from the bucket.
     * @param {string} name
     * @param {RequestOptions} options
     * @return {Promise<NormalSuccessResponse>}
     */
    delete(name: string, options?: RequestOptions): Promise<NormalSuccessResponse>

    /**
     * Copy an object from sourceName to name.
     * @param {string} name - object name store on OSS
     * @param {string} sourceName -  source object name If sourceName start with /, meaning it's a full name contains the bucket name. e.g.: /otherbucket/logo.png meaning copy otherbucket logn.png object to current bucket.
     * @param {CopyObjectOptions} options
     * @return {Promise<CopyAndPutMetaResult>}
     */
    copy(name: string, sourceName: string, options?: CopyObjectOptions): Promise<CopyAndPutMetaResult>

    /**
     * Set an exists object meta.
     * @param {string} name
     * @param {UserMeta} meta
     * @param {RequestOptions} options
     * @return {Promise<CopyAndPutMetaResult>}
     */
    putMeta(name: string, meta: UserMeta, options: RequestOptions): Promise<CopyAndPutMetaResult>

    /**
     * Delete multi objects in one request.
     * @param {Array<string>} names - object names, max 1000 objects in once.
     * @param {DeleteMultiOptions} options
     * @return {Promise<DeleteMultiResult>}
     */
    deleteMulti(names: Array<string>, options?: DeleteMultiOptions): Promise<DeleteMultiResult>

    /**
     * Create a signature url for download or upload object. When you put object with signatureUrl ,you need to pass Content-Type.Please look at the example.
     * @param {string} name
     * @param {SignatureUrlOptions} options
     * @return {string}
     */
    signatureUrl(name: string, options?: SignatureUrlOptions): string

    /**
     * Set object's ACL.
     * @param {string} name
     * @param {ACLType} acl
     * @param {RequestOptions} options
     * @return {Promise<NormalSuccessResponse>}
     */
    putACL(name: string, acl: ACLType, options?: RequestOptions): Promise<NormalSuccessResponse>

    /**
     * Get object's ACL.
     * @param {string} name
     * @param {RequestOptions} options
     * @return {Promise<GetACLResult>}
     */
    getACL(name: string, options?: RequestOptions): Promise<GetACLResult>

    /**
     * Restore Object.
     * @param {string} name
     * @param {RequestOptions} options
     * @return {Promise<NormalSuccessResponse>}
     */
    restore(name: string, options?: RequestOptions): Promise<NormalSuccessResponse>

    /**
     *
     * @param {string} name
     * @param {InitMultipartUploadOptions} options
     * @return {Promise<InitMultipartUploadResult>}
     */
    initMultipartUpload(name: string, options?: InitMultipartUploadOptions): Promise<InitMultipartUploadResult>

    /**
     * After initiating a Multipart Upload event, you can upload data in parts based on the specified object name and Upload ID.
     * @param {string} name - object name
     * @param {string} uploadId - get by initMultipartUpload api
     * @param {number} partNo - range is 1-10000, If this range is exceeded, OSS returns the InvalidArgument's error code.
     * @param file -  is File or FileName, the whole file
     Multipart Upload requires that the size of any Part other than the last Part is greater than 100KB.
     In Node you can use File or FileName, but in browser you only can use File.
     * @param {number} start - part start bytes e.g: 102400
     * @param {number} end - part end bytes e.g: 204800
     * @param {RequestOptions} options
     * @return {Promise<UploadPartResult>}
     */
    uploadPart(name: string, uploadId: string, partNo: number, file: any, start: number, end: number, options?: RequestOptions): Promise<UploadPartResult>

    /**
     * Using Upload Part Copy, you can copy data from an existing object and upload a part of the data. When copying a file larger than 1 GB, you must use the Upload Part Copy method. If you want to copy a file smaller than 1 GB, see Copy Object.
     * @param {string} name
     * @param {string} uploadId
     * @param {number} partNo
     * @param {string} range
     * @param {{sourceKey: string; sourceBucketName: string}} sourceData
     * @param {{timeout?: number; headers?: object}} options
     * @return {Promise<UploadPartResult>}
     */
    uploadPartCopy(name: string, uploadId: string, partNo: number, range: string, sourceData: { sourceKey: string, sourceBucketName: string }, options: { timeout?: number, headers?: object }): Promise<UploadPartResult>

    /**
     * After uploading all data parts, you must call the Complete Multipart Upload API to complete Multipart Upload for the entire file.
     * @param {string} name
     * @param {string} uploadId
     * @param {Array<{number: number; etag: string}>} parts
     * @param {CompleteMultipartUploadOptions} options
     * @return {Promise<CompleteMultipartUploadResult>}
     */
    completeMultipartUpload(name: string, uploadId: string, parts: Array<{ number: number, etag: string }>, options?: CompleteMultipartUploadOptions): Promise<CompleteMultipartUploadResult>

    /**
     * Upload file with OSS multipart.
     * this function contains initMultipartUpload, uploadPart, completeMultipartUpload. When you use multipartUpload api，if you encounter problems with ConnectionTimeoutError, you should handle ConnectionTimeoutError in your business code.
     * How to resolve ConnectionTimeoutError, you can decrease partSize size 、 Increase timeout 、Retry request , or give tips in your business code;
     * @param {string} name
     * @param file
     * @param {MultipartUploadOptions} options
     * @return {Promise<MultipartUploadResult>}
     */
    multipartUpload(name: string, file: any, options: MultipartUploadOptions): Promise<MultipartUploadResult>

    /**
     * Copy file with OSS multipart.
     * this function contains head, initMultipartUpload, uploadPartCopy, completeMultipartUpload.
     * When copying a file larger than 1 GB, you should use the Upload Part Copy method. If you want to copy a file smaller than 1 GB, see Copy Object.
     * @param {string} name
     * @param {MultipartUploadCopySourceData} sourceData
     * @param {MultipartUploadOptions} options
     * @return {Promise<MultipartUploadCopyResult>}
     */
    multipartUploadCopy(name: string, sourceData: MultipartUploadCopySourceData, options?: MultipartUploadOptions): Promise<MultipartUploadCopyResult>

    /**
     * The ListParts command can be used to list all successfully uploaded parts mapped to a specific upload ID, i.e.: those not completed and not aborted.
     * @param {string} name
     * @param {string} uploadId
     * @param {ListPartsQuery} query
     * @param {RequestOptions} options
     * @return {Promise<ListPartsResult>}
     */
    listParts(name: string, uploadId: string, query?: ListPartsQuery, options?: RequestOptions): Promise<ListPartsResult>

    /**
     * List on-going multipart uploads, i.e.: those not completed and not aborted.
     * @param {ListUploadsQuery} query
     * @param {RequestOptions} options
     * @return {Promise<ListUploadsResult>}
     */
    listUploads(query: ListUploadsQuery, options?: RequestOptions): Promise<ListUploadsResult>

    /**
     * Abort a multipart upload for object.
     * @param {string} name
     * @param {string} uploadId
     * @param {RequestOptions} options
     * @return {Promise<NormalSuccessResponse>}
     */
    abortMultipartUpload(name: string, uploadId: string, options?: RequestOptions): Promise<NormalSuccessResponse>

    /************************************************ RTMP Operations *************************************************************/
    /**
     * Create a live channel.
     * @param {string} id
     * @param {PutChannelConf} conf
     * @param {RequestOptions} options
     * @return {Promise<PutChannelResult>}
     */
    putChannel(id: string, conf: PutChannelConf, options?: RequestOptions): Promise<PutChannelResult>

    /**
     * Get live channel info.
     * @param {string} id
     * @param {RequestOptions} options
     * @return {Promise<{data: PutChannelConf; res: NormalSuccessResponse}>}
     */
    getChannel(id: string, options?: RequestOptions): Promise<{ data: PutChannelConf, res: NormalSuccessResponse }>

    /**
     * Delete a live channel.
     * @param {string} id
     * @param {RequestOptions} options
     * @return {Promise<NormalSuccessResponse>}
     */
    deleteChannel(id: string, options?: RequestOptions): Promise<NormalSuccessResponse>

    /**
     * Change the live channel status.
     * @param {string} id
     * @param {string} status
     * @param {RequestOptions} options
     * @return {Promise<NormalSuccessResponse>}
     */
    putChannelStatus(id: string, status?: string, options?: RequestOptions): Promise<NormalSuccessResponse>

    /**
     * Get the live channel status.
     * @param {string} id
     * @param {RequestOptions} options
     * @return {Promise<GetChannelResult>}
     */
    getChannelStatus(id: string, options?: RequestOptions): Promise<GetChannelResult>

    /**
     * List channels.
     * @param {ListChannelsQuery} query
     * @param {RequestOptions} options
     * @return {Promise<ListChannelsResult>}
     */
    listChannels(query: ListChannelsQuery, options?: RequestOptions): Promise<ListChannelsResult>

    /**
     * Get the live channel history.
     * @param {string} id
     * @param {RequestOptions} options
     * @return {Promise<ChannelHistoryResult>}
     */
    getChannelHistory(id: string, options?: RequestOptions): Promise<ChannelHistoryResult>

    /**
     * Create a VOD playlist for the channel.
     * @param {string} id
     * @param {string} name
     * @param {{startTime: number; endTime: number}} time
     * @param {RequestOptions} options
     * @return {Promise<NormalSuccessResponse>}
     */
    createVod(id: string, name: string, time: { startTime: number, endTime: number }, options?: RequestOptions): Promise<NormalSuccessResponse>

    /**
     * Get signatured rtmp url for publishing.
     * @param {string} channelId
     * @param {GetRtmpUrlOptions} options
     * @return {string}
     */
    getRtmpUrl(channelId?: string, options?: GetRtmpUrlOptions): string

}
