// Type definitions for react-native-aws3 0.0
// Project: https://github.com/benjreinhart/react-native-aws3#readme
// Definitions by: Shirsh Zibbu <https://github.com/zhirzh>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface File {
    /**
     * File system URI, can be assets library path or file:// path
     */
    uri: string;

    /**
     * The name of the file, will be stored as such in S3
     */
    name: string;

    /**
     * The mime type, also used for Content-Type parameter in the S3 post policy
     */
    type: string;
}

export interface Options {
    /**
     * The Access Control List of this object
     * @default "public-read"
     */
    acl?: string;

    /**
     * Prefix, or path to the file on S3, i.e. uploads/ (note the trailing slash)
     */
    keyPrefix?: string;

    /**
     * Your S3 bucket
     */
    bucket: string;

    /**
     * The region of your S3 bucket
     */
    region: string;

    /**
     * Your S3 AWSAccessKeyId
     */
    accessKey: string;

    /**
     * Your S3 AWSSecretKey
     */
    secretKey: string;

    /**
     * HTTP response status if successful
     * @default 201
     */
    successActionStatus?: number;

    /**
     * AWS S3 url
     * @default "s3.amazonaws.com"
     */
    awsUrl?: string;

    /**
     * Devices time offset from world clock in milliseconds
     * @default 0
     */
    timeDelta?: number;
}

export interface Progress {
    /**
     * amount uploaded
     */
    loaded: number;

    /**
     * total amount to upload
     */
    total: number;

    /**
     * number between 0 and 1 representing the percent completed
     */
    percent: number;
}

export interface Request {
    _xhr: XMLHttpRequest;
    _formData: FormData;
    _promise: Promise<Response>;

    header(key: string, value: string): this;
    set(key: string, value: string | Blob): this;
    send(): this;
    abort(): this;
    progress(callback: (progress: Progress) => any): this;
    then(...args: Parameters<this['_promise']['then']>): this;
    catch(...args: Parameters<this['_promise']['catch']>): this;
}

export interface Response {
    status: number;
    text: string;
    headers: { [K: string]: string };
}

export namespace RNS3 {
    function put(file: File, options: Options): Request;
}
