/**
 * 二维码
 * 接口声明: {"name": "system.barcode"}
 */
declare module "@system.barcode" {
    interface ScanOptions {
        /**
         * 成功回调
         */
        success?: (data: ScanSuccessOptions) => void;
        /**
         * 失败回调
         * @description
         * |错误码|说明|
         * |---|---|
         * |201|用户拒绝，获取相机权限失败|
         * |207|用户拒绝并勾选不再询问复选框 [1100+]|
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
    }

    interface ScanSuccessOptions {
        /**
         * 解析后的内容
         */
        result: string;
    }

    /**
     * 扫描二维码
     */
    function scan(obj?: ScanOptions): void;
}

declare module "quickapp:@system.barcode" {
    export * from "@system.barcode";
}
