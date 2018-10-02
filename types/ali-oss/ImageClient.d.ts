import { NormalSuccessResponse, RequestOptions } from "./index";

export interface ImageClientOptions {
    imageHost: string; // your image service domain that binding to a OSS bucket
    accessKeyId: string; // access key you create on aliyun console website
    accessKeySecret: string; // access secret you create
    bucket: string; //  the default bucket you want to access If you don't have any bucket, please use putBucket() create one first.
    region?: string; // the bucket data region location, please see Data Regions, default is oss-cn-hangzhou
    internal?: boolean; // access OSS with aliyun internal network or not, default is false If your servers are running on aliyun too, you can set true to save lot of money.
    timeout?: string | number; // instance level timeout for all operations, default is 60s
}

export interface ImageGetOptions {
    timeout?: number;
    headers?: object;
}

export interface StyleData {
    Name: string; // style name
    Content: string; // style content
    CreateTime: string; // style create time
    LastModifyTime: string; // style last modify time
}
export class ImageClient {
    constructor(options: ImageClientOptions)

    /**
     * Get an image from the image channel.
     */
    get(name: string, file?: any, options?: ImageGetOptions): Promise<{ content: any, res: NormalSuccessResponse }>;

    /**
     * Get an image read stream.
     */
    getStream(name: string, options?: ImageGetOptions): Promise<{ stream: any, res: NormalSuccessResponse }>;

    /**
     * Get a image exif info by image object name from the image channel.
     */
    getExif(name: string, options?: RequestOptions): Promise<{ data: object, res: NormalSuccessResponse }>;

    /**
     * Get a image info and exif info by image object name from the image channel.
     */
    getInfo(name: string, options?: RequestOptions): Promise<{ data: object, res: NormalSuccessResponse }>;

    /**
     * todo
     */
    putStyle(name: string, style: string, options?: RequestOptions): Promise<{ data: object, res: NormalSuccessResponse }>;

    /**
     * Get a style by name from the image channel.
     */
    getStyle(name: string, options?: RequestOptions): Promise<{ data: StyleData, res: NormalSuccessResponse}>;

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
    signatureUrl(name: string, options?: { expires?: string, timeout?: string }): string;
}
