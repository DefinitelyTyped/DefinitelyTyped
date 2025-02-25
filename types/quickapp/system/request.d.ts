/**
 * 上传下载
 * 接口声明: {"name": "system.request"}
 */
declare module "@system.request" {
    interface UploadOptions {
        /**
         * 资源 url
         */
        url: string;
        /**
         * 请求的 header，会将其所有属性设置到请求的 header 部分。User-Agent设置。
         * [1040+]
         */
        header?: Record<string, string | number>;
        /**
         * 默认为 POST，可以是： POST, PUT
         */
        method?: string;
        /**
         * 需要上传的文件列表，使用 multipart/form-data 方式提交
         */
        files: UploadFile[];
        /**
         * HTTP 请求中其他额外的 form data
         * [1000+]
         */
        data?: UploadDatum[];
        success?: (data: UploadSuccessData) => void;
        fail?: (data: any, code: number) => void;
        complete?: () => void;
    }
    interface UploadFile {
        /**
         * multipart 提交时，header 中的文件名
         */
        filename?: string;
        /**
         * multipart 提交时，表单的项目名，默认 file
         */
        name?: string;
        /**
         * 文件的本地地址
         */
        uri: string;
        /**
         * 文件的 Content-Type 格式，默认会根据 filename 或者 uri 的后缀获取
         */
        type?: string;
    }
    interface UploadDatum {
        /**
         * form 元素的名称。
         */
        name: string;
        /**
         * form 元素的值。
         */
        value: string;
    }
    interface UploadSuccessData {
        /**
         * 服务器状态 code
         */
        code: number;
        /**
         * 如果服务器返回的 header 中 type 是 text/*或 application/json、application/javascript、application/xml，值是文本内容，否则是存储的临时文件的 uri 临时文件如果是图片或者视频内容，可以将图片设置到 image 或 video 控件上显示
         */
        data: string;
        /**
         * 服务器 response 的所有 header
         */
        headers: Record<string, string | number>;
    }
    /**
     * 上传文件
     * @param obj
     */
    function upload(obj: UploadOptions): void;

    interface DownloadOptions {
        /**
         * 资源 url
         */
        url: string;
        /**
         * 请求的 header，会将其所有属性设置到请求的 header 部分。User-Agent设置在1040版本开始支持。
         */
        header?: string;
        /**
         * 下载描述，会用于通知栏标题。默认为文件名
         * [1010+]
         */
        description?: string;
        /**
         * 下载文件名。默认从网络请求或 url 中获取
         * [1010+]
         */
        filename?: string;
        /**
         * 成功返回的回调函数
         */
        success?: (data: DownloadSuccessData) => void;
        /**
         * 	失败的回调函数
         */
        fail?: (data: any, code: number) => void;
        /**
         * 结束的回调函数（调用成功、失败都会执行）
         */
        complete?: () => void;
    }

    interface DownloadSuccessData {
        /**
         * 下载的 token，根据此 token 获取下载状态
         */
        token: string;
    }

    /**
     * 下载文件
     * @param obj
     */
    function download(obj: DownloadOptions): void;

    interface OnDownloadCompleteOptions {
        /**
         * download 接口返回的 token
         */
        token: string;
        /**
         * 成功返回的回调函数
         */
        success?: (data: OnDownloadCompleteSuccessOptions) => void;
        /**
         * 失败的回调函数
         * 1000:下载失败
         * 1001:下载任务不存在
         */
        fail?: (data: any, code: number) => void;
    }

    interface OnDownloadCompleteSuccessOptions {
        /**
         * 下载文件的 Uri
         */
        uri: string;
    }

    /**
     * 监听下载任务
     * @param obj
     */
    function onDownloadComplete(obj: OnDownloadCompleteOptions): void;
}

declare module "quickapp:@system.request" {
    export * from "@system.request";
}
