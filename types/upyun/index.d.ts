/// <reference types="node" />

import buffer = require("node:buffer");
import stream = require("stream");

export interface listDirOptions {
    limit?: number;
    order?: "asc" | "desc";
    iter?: string;
}

export interface listDirResponse {
    files: Array<{
        name: string;
        type: "N" | "F";
        size: number;
        time: number;
    }>;
    next: string;
}

export interface putFileOptions {
    Date?: string;
    "Content-Length"?: string;
    "Content-MD5"?: string;
    "Content-Type"?: string;
    "Content-Secret"?: string;
    "x-upyun-meta-x"?: string;
    "x-upyun-meta-ttl"?: number;
}

export interface putFilePictureResponse {
    width: number;
    height: number;
    "file-type": string;
    frames: number;
}

export interface initMultipartUploadOptions {
    "Content-Length"?: string;
    "x-upyun-multi-stage"?: string;
    "x-upyun-multi-length"?: string;
    "x-upyun-multi-type"?: string;
    "x-upyun-meta-x"?: string;
    "x-upyun-meta-ttl"?: number;
}

export interface initMultipartUploadResponse {
    fileSize: number;
    partCount: number;
    uuid: string;
}

export interface headFileResponse {
    type: string;
    size: number;
    date: number;
    "Content-Md5": string;
}

export interface formPutFileOptions {
    filename: string;
}

export interface formPutFileResponse {
    code: number;
    message: string;
    url: string;
    time: string | number;
    sign?: any;
    "no-sign"?: any;
    "image-width"?: string | number;
    "image-height"?: string | number;
    "image-type"?: string | number;
    "image-frames"?: string | number;
    task_ids?: any;
}

export interface copyOrMoveOptions {
    "x-upyun-metadata-directive": any;
    "content-md5": any;
    "content-length": any;
}

// tslint:disable-next-line:no-unnecessary-class
export class Service {
    /**
     * new一个服务～
     *
     * @param serviceName 服务名称
     * @param operatorName 操作员名
     * @param password 操作员密码，读取该属性时，获取的值是 md5 加密后的结果
     */
    constructor(serviceName: string, operatorName?: string, password?: string);
}

// tslint:disable-next-line:no-unnecessary-class
export class Bucket {
    /**
     * new一个服务～
     *
     * @param serviceName 服务名称
     * @param operatorName 操作员名
     * @param password 操作员密码，读取该属性时，获取的值是 md5 加密后的结果
     */
    constructor(serviceName: string, operatorName?: string, password?: string);
}

export class Client {
    /**
     * new一个连接～
     *
     * @param service 传入一个服务，开启梦幻旅程（bushi
     */
    constructor(service: Service);

    /**
     * 查看目录大小（单位: byte）
     *
     * @param path 目录路径
     * @link https://github.com/upyun/node-sdk#usagepath--
     */
    usage(path?: string): Promise<number>;

    /**
     * 列出目录
     *
     * @param remotePath 目录路径
     * @param options 选项 请参考文档
     */
    listDir(remotePath: string, options?: listDirOptions): Promise<false | listDirResponse>;

    /**
     * 上传单个文件
     *
     * @param remotePath 目录路径
     * @param  localFile 本地文件，支持`string | Buffer | Stream | File`，详细请参照文档
     * @param options 选项，请参考文档
     * @link https://github.com/upyun/node-sdk#putfileremotepath-localfile-options--
     */
    putFile(
        remotePath: string,
        localFile: string | stream.Stream | Buffer | buffer.File,
        options?: putFileOptions,
    ): Promise<putFilePictureResponse | boolean>;

    /**
     * 初始化一个并行式断点续传任务
     *
     * @param remotePath 文件保存路径 需包含文件名（路径不需要 `encodeURI`，sdk 会统一处理）
     * @param fileOrPath 本地文件，支持`string | Buffer | Stream | File`，详细请参照文档
     * @param options 选项，请参考文档
     * @link https://github.com/upyun/node-sdk#initmultipartuploadremotepath-fileorpath-options--
     */
    initMultipartUpload(
        remotePath: string,
        fileOrPath: Buffer | string | buffer.File,
        options?: initMultipartUploadOptions,
    ): Promise<initMultipartUploadResponse | false>;

    /**
     * 上传文件块
     *
     * @param remotePath 文件保存路径 需包含文件名（路径不需要 `encodeURI`，sdk 会统一处理）
     * @param multiUuid 任务标识，初始化时生成。即`X-Upyun-Multi-Uuid`
     * @param partId 分块序号，序号从 0 开始. 即`X-Upyun-Part-Id`
     * @link https://github.com/upyun/node-sdk#multipartupload-remotepath-fileorpath-multiuuid-partid
     */
    multipartUpload(
        remotePath: string,
        fileOrPath: string | Buffer | buffer.File,
        multiUuid: string,
        partId: number,
    ): Promise<boolean>;

    /**
     * 结束断点续传任务
     *
     * @param remotePath 文件保存路径 需包含文件名（路径不需要 `encodeURI`，sdk 会统一处理)
     * @param multiUuid 任务标识，初始化时生成。即 X-Upyun-Multi-Uuid
     * @link https://github.com/upyun/node-sdk#completemultipartupload-remotepath-multiuuid
     */
    completeMultipartUpload(remotePath: string, multiUuid: string): Promise<boolean>;

    /**
     * 创建目录
     *
     * @param remotePath 新建目录的路径
     * @returns 创建成功返回 `true`，否则 `false`
     * @link https://github.com/upyun/node-sdk#makedirremotepath
     */
    makeDir(remotePath: string): Promise<boolean>;

    /**
     * `HEAD` 请求，获取文件基本信息
     *
     * @param remotePath 文件在又拍云云存储服务的路径
     * @link https://github.com/upyun/node-sdk#headfileremotepath
     */
    headFile(remotePath: string): Promise<headFileResponse | false>;

    /**
     * 删除文件或目录
     *
     * @param remotePath 文件或目录在又拍云服务的路径
     * @link https://github.com/upyun/node-sdk#deletefileremotepath
     */
    deleteFile(remotePath: string): Promise<boolean>;

    /**
     * 下载保存在又拍云服务的文件
     *
     * @param remotePath 需要下载的文件路径
     * @param saveStream 可选值，一个可以写入的流。若传递该参数，下载的文件将直接写入该流。该参数不支持浏览器端使用
     * @link https://github.com/upyun/node-sdk#getfileremotepath-savestream--null
     * @description 我也不知道这玩意返回的是个什么玩意 就any去吧
     */
    getFile(remotePath: string, saveStream?: stream.Stream): Promise<any>;

    /**
     * 使用又拍云表单 api 上传文件
     *
     * @description 客户端使用该方法时， 必须先设置获取又拍云 HTTP Body 签名的回调函数
     * @param remotePath 保存路径
     * @param localFile 需要上传的文件，和 putFile 相同(**如果在浏览器端使用，只支持 String/Blob/File **)
     * @param params 又拍云表单 api 支持的可选参数`（service(同 bucket)`, `save-key` 两个必选参数不需要手动在这里设置）
     * @param opts `filename`可选参数. 用于指定上传字符串/ Blob 的文件名. 支持路径取 `basename`. 文件名取值优先级 `filename > localFile` 是文件 > 默认值 `"file"`
     * @link https://github.com/upyun/node-sdk#formputfileremotepath-localfile-params---opts--
     * @returns 成功返回一个对象，详细说明见异步通知规则参数说明部分，失败返回 `false`
     */
    formPutFile(
        remotePath: string,
        localFile: string | Blob | buffer.File | stream.Stream | Buffer,
        params?: object,
        opts?: object,
    ): Promise<false | formPutFileResponse>;

    /**
     * 将文件 sourcePath 拷贝至 targetPath，不适用于文件夹
     *
     * @param targetPath 原文件地址
     * @param sourcePath 目标文件地址
     * @param options 其他可选参数
     * @link https://github.com/upyun/node-sdk#copytargetpath-sourcepath-options--
     */
    copy(targetPath: string, sourcePath: string, options?: copyOrMoveOptions): Promise<boolean>;

    /**
     * @param targetPath 目标文件地址
     * @param sourcePath 原文件地址
     * @param options 其他可选参数
     * @link https://github.com/upyun/node-sdk#movetargetpath-sourcepath-options--
     */
    move(targetPath: string, sourcePath: string, options?: copyOrMoveOptions): Promise<boolean>;
}

// sign模块

export interface GetHeaderSignReturnType {
    Authorization: string;
    "X-Date": string;
}

export interface GenSignOptionType {
    method: any;
    path: string;
}

export interface GetPolicyAndAuthorizationReturnType {
    policy: string;
    authorization: string;
}

export interface GetPurgeHeaderSignReturnType {
    Authorization: string;
    Date: string;
    "User-Agent": string;
}

export namespace sign {
    /**
     * generate head sign for rest api
     *
     * @link http://docs.upyun.com/api/authorization/#_2
     * @param service service Instance
     * @param path storage path on upyun server, e.g: /your/dir/example.txt
     * @param contentMd5 md5 of the file that will be uploaded
     */
    function getHeaderSign(
        service: Service,
        method: any,
        path: string,
        contentMd5?: string | null,
    ): GetHeaderSignReturnType;

    /**
     * generate signature string which can be used in head sign or body sign
     *
     * @link http://docs.upyun.com/api/authorization/#_2
     * @param service service Instance
     * @param options must include key is method, path
     */
    function genSign(service: Service, options: GenSignOptionType): string;

    /**
     * get policy and authorization for form api
     *
     * @param service service Instance
     * @param other optional params
     * @link http://docs.upyun.com/api/form_api/#_2
     */
    function getPolicyAndAuthorization(
        service: Service,
        params: { [key: string]: string },
    ): GetPolicyAndAuthorizationReturnType;

    /**
     * get Authorization and Date for purge api
     *
     * @link http://docs.upyun.com/api/purge/#_1
     * @param service service Instance
     * @param urls url
     */
    function getPurgeHeaderSign(service: Service, urls: string[]): GetPurgeHeaderSignReturnType;
}
