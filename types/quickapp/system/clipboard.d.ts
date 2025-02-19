/**
 * 剪贴板
 * 接口声明: {"name": "system.clipboard"}
 */
declare module "@system.clipboard" {
    interface SetOptions {
        /**
         * 需要放到剪切板的内容
         */
        text: string;
        /**
         * 成功回调
         */
        success?: () => void;
        /**
         * 失败回调
         * @description
         * |错误码|说明|
         * |---|---|
         * |201|用户拒绝，获取写入剪贴板权限失败|
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }

    /**
     * 修改剪贴板内容
     */
    function set(obj: SetOptions): void;

    interface GetOptions {
        /**
         * 成功回调
         */
        success?: (data: GetSuccessOptions) => void;
        /**
         * 失败回调
         * @description
         * |错误码|说明|
         * |---|---|
         * |201|用户拒绝，获取读取剪贴板权限失败|
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }

    interface GetSuccessOptions {
        /**
         * 剪切板内容
         */
        text: string;
    }

    /**
     * 读取剪贴板内容
     */
    function get(obj: GetOptions): void;
}

declare module "quickapp:@system.clipboard" {
    export * from "@system.clipboard";
}
