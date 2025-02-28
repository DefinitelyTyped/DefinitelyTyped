/**
 * 桌面图标
 * 接口声明: {"name": "system.shortcut"}
 */
declare module "@system.shortcut" {
    interface HasInstalledOptions {
        /**
         * 成功回调。参数：true 已创建，false 未创建
         */
        success?: (data: boolean) => void;
        /**
         * 失败回调
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }

    /**
     * 获取桌面图标是否创建
     */
    function hasInstalled(obj?: HasInstalledOptions): void;

    interface InstallOptions {
        /**
         * 权限弹窗上的说明文字，用于向用户解释为什么要创建桌面图标
         * [1030+]
         */
        message?: string;
        /**
         * 创建成功
         */
        success?: () => void;
        /**
         * 创建失败
         * @description
         * |错误码|说明|
         * |----|----|
         * |201|用户拒绝创建|
         * |207|用户拒绝并勾选不再询问复选框 [1100+]|
         * |1001|接口调用超过当日使用频次|
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }

    /**
     * 创建桌面图标，需要用户允许
     */
    function install(obj?: InstallOptions): void;

    /**
     * 是否开启系统快捷方式创建弹窗，默认true。不会持久化，只对当前运行有效
     * [1020+]
     */
    let systemPromptEnabled: boolean;
}

declare module "quickapp:@system.shortcut" {
    export * from "@system.shortcut";
}
