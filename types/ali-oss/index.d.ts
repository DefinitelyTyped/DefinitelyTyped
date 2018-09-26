// Type definitions for ali-oss 6.0.1
// Project: https://github.com/ali-sdk/ali-oss
// Definitions by: Ptrdu <https://github.com/ptrdu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.2.0

export  type Bucket = {

}

export type StorageType = "Standard" | "IA" | "Archive"

export type ACLType = "public-read-write" | "public-read" | "and private"

export type RequestOptions = {
    // the operation timeout
    timeout?: number
}

export type RuleStatusType = "Enabled" | "Disabled"

export type LifecycleRule = {
    id?: string, // rule id, if not set, OSS will auto create it with random string.
    prefix: string, // store prefix
    status: RuleStatusType, // rule status, allow values: Enabled or Disabled
    days?: number | string, // expire after the days
    date: string // expire date, e.g.: 2022-10-11T00:00:00.000Z date and days only set one.
}

export type CORSRule = {
    allowedOrigin: string | Array<string>, // configure for Access-Control-Allow-Origin header
    allowedMethod: string | Array<string>, // configure for Access-Control-Allow-Methods header
    allowedHeader?: string | Array<string>, // configure for Access-Control-Allow-Headers header
    exposeHeader?: string | Array<string>, // configure for Access-Control-Expose-Headers header
    maxAgeSeconds?: string | Array<string>, // configure for Access-Control-Max-Age header
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

export default class OSS {
    /******************************************* the bucket operations *************************************************/
    // base operators
    /**
     * List buckets in this account.
     * @param {{prefix?: string; marker?: string; "max-keys"?: string | number} | null} query - query parameters, default is null
     *   prefix - search buckets using prefix key
     *   marker - search start from marker, including marker key
     *   max-keys - max buckets, default is 100, limit to 1000
     * @param {{timeout?: number}} options - optional parameters
     *   timeout - the operation timeout
     * @return {Promise<Array<Bucket>>}
     */
    listBuckets(query: { prefix?: string, marker?: string, 'max-keys'?: string | number } | null, options?: { timeout?: number }): Promise<Array<Bucket>>

    /**
     * Create a new bucket.
     * @param {string} name -  bucket name If bucket exists and not belong to current account, will throw BucketAlreadyExistsError. If bucket not exists, will create a new bucket and set it's ACL.
     * @param {{timeout: number; storageClass: StorageType}} options - optional parameters
     *   timeout - the operation timeout
     *   StorageClass - the storage type include (Standard,IA,Archive)
     * @return { Promise<{ bucket: string, res: NormalSuccessResponse }> }
     */
    putBucket(name: string, options?: { timeout: number, storageClass: StorageType }): Promise<{ bucket: string, res: NormalSuccessResponse }>

    /**
     * Use the bucket.
     * @param {string} name - bucket name
     */
    useBucket(name: string) : void

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
    getBucketACL(name: string, options?: RequestOptions ): Promise<{ acl: string, res: NormalSuccessResponse }>
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
    deleteBucketLogging(name: string, options?: RequestOptions) : Promise<NormalSuccessResponse>
    // Website operations
    /**
     * Set the bucket as a static website.
     * @param {string} name - bucket name
     * @param {{index: string; error?: string}} config
     *   index - default page, e.g.: index.html
     *   error - error page, e.g.: 'error.html'
     * @return {Promise<NormalSuccessResponse>}
     */
    putBucketWebsite(name: string, config: { index: string, error?: string }): Promise<NormalSuccessResponse>

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
    getBucketCORS(name: string): Promise<{ rules: Array<CORSRule>, res: NormalSuccessResponse}>

    /**
     * Delete CORS rules of the bucket object.
     * @param {string} name
     * @return {Promise<NormalSuccessResponse>}
     */
    deleteBucketCORS(name: string): Promise<NormalSuccessResponse>

    /********************************************************** Object operations ********************************************/

}
