/**
 * 解压缩 zip 1060+
 * 接口声明: { "name": "system.zip" }
 */
declare module "@system.zip" {
    interface DecompressOptions {
        /**
         * 源文件的uri，不能是tmp类型的uri
         */
        srcUri: string;
        /**
         * 目标目录的uri，不能是应用资源路径和tmp类型的uri
         */
        dstUri: string;
        /**
         * 成功回调
         */
        success?: () => void;
        /**
         * 失败回调
         * @description
         * |错误码|说明|
         * |---|---|
         * |202|参数错误|
         * |300|I/O 错误|
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }

    /**
     * 解压文件
     */
    function decompress(obj: DecompressOptions): void;
}

declare module "quickapp:@system.zip" {
    export * from "@system.zip";
}
