import {NormalSuccessResponse, RequestOptions} from "./index";

export interface Options {
    imageHost: string, // your image service domain that binding to a OSS bucket
    accessKeyId: string, // access key you create on aliyun console website
    accessKeySecret: string, // access secret you create
    bucket: string, //  the default bucket you want to access If you don't have any bucket, please use putBucket() create one first.
    region?: string, // the bucket data region location, please see Data Regions, default is oss-cn-hangzhou Current available: oss-cn-hangzhou, oss-cn-qingdao, oss-cn-beijing, oss-cn-hongkong and oss-cn-shenzhen
    internal?: boolean, // access OSS with aliyun internal network or not, default is false If your servers are running on aliyun too, you can set true to save lot of money.
    timeout?: string | number, // instance level timeout for all operations, default is 60s
}

export interface ImageGetOptions {
    timeout?: number,
    headers?: object
}

export interface StyleData {
    Name: string, // style name
    Content: string, // style content
    CreateTime: string, // style create time
    LastModifyTime: string // style last modify time
}
export class Client {
    constructor(options: Options)

    /**
     * Get an image from the image channel.
     * @param {string} name
     * @param file - String|WriteStream} file path or WriteStream instance to store the image If file is null or ignore this parameter, function will return info contains content property.
     * @param {ImageGetOptions} options
     * @return {Promise<{content: any; res: NormalSuccessResponse}>}
     */
    get(name: string, file?: any, options?: ImageGetOptions): Promise<{ content: any, res: NormalSuccessResponse }>

    /**
     * Get an image read stream.
     * @param {string} name
     * @param {ImageGetOptions} options
     * @return {Promise<{stream: any; res: NormalSuccessResponse}>}
     */
    getStream(name: string, options?: ImageGetOptions): Promise<{ stream: any, res: NormalSuccessResponse }>

    /**
     * Get a image exif info by image object name from the image channel.
     * @param {string} name
     * @param {RequestOptions} options
     * @return {Promise<{data: object; res: NormalSuccessResponse}>}
     */
    getExif(name: string, options?: RequestOptions): Promise<{ data: object, res: NormalSuccessResponse }>

    /**
     * Get a image info and exif info by image object name from the image channel.
     * @param {string} name
     * @param {RequestOptions} options
     * @return {Promise<{data: object; res: NormalSuccessResponse}>}
     */
    getInfo(name: string, options?: RequestOptions): Promise<{ data: object, res: NormalSuccessResponse }>

    /**
     * todo
     * @param {string} name
     * @param {string} style
     * @param {RequestOptions} options
     * @return {Promise<{data: object; res: NormalSuccessResponse}>}
     */
    putStyle(name: string, style: string, options?: RequestOptions): Promise<{ data: object, res: NormalSuccessResponse }>

    /**
     * Get a style by name from the image channel.
     * @param {string} name
     * @param {RequestOptions} options
     * @return {Promise<{data: StyleData; res: NormalSuccessResponse}>}
     */
    getStyle(name: string, options?: RequestOptions): Promise<{ data: StyleData, res: NormalSuccessResponse}>

    /**
     * Get all styles from the image channel.
     * @param {RequestOptions} options
     * @return {Promise<Array<StyleData>>}
     */
    listStyle(options?: RequestOptions): Promise<Array<StyleData>>

    /**
     * todo
     * @param {string} styleName
     * @param {RequestOptions} options
     * @return {Promise<NormalSuccessResponse>}
     */
    deleteStyle(styleName: string, options?: RequestOptions): Promise<NormalSuccessResponse>

    /**
     * Create a signature url for directly download.
     * @param {string} name
     * @param {{expires?: string; timeout?: string}} options
     * @return {string}
     */
    signatureUrl(name: string, options?: { expires?: string, timeout?: string }): string
}
