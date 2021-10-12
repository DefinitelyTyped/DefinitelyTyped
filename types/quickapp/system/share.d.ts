/**
 * 分享
 * 接口声明: {"name": "system.share"}
 */
declare module '@system.share' {
    /**
     * 分享数据到其他app
     * @param obj
     */
    function share(obj: {
        /**
         * 数据的 MIME TYPE，要求字母全小写
         */
        type: string;
        /**
         * 分享的数据：1. 如果 type 是 text/开头的 mimetype（如 text/plain），则 data 是要分享的文本内容；2. 如果 type 是其他值，则 data 是要分享的文件路径。支持三种文件路径：1. 通过 fetch.fetch 下载的文件路径；2. 通过 file.save 或 list 获得的文件路径；3. 以/开头的应用内部的资源文件。
         */
        data: string;
        /**
         * 成功回调。因为大部分 android app 都没有正确的返回分享状态，所以即使分享成功了，也可能执行 cancel 回调，而不是 success 回调。
         */
        success?: (data?: {}) => void;
        /**
         * 失败回调
         */
        fail?: (data: any, code: number) => void;
        /**
         * 取消回调
         */
        cancel?: () => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }): void;
}
