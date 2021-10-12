/**
 * 桌面图标
 * 接口声明: {"name": "system.shortcut"}
 */
declare module '@system.shortcut' {
    /**
     * 获取桌面图标是否创建
     * @param obj
     */
    function hasInstalled(obj: {
        /**
         * 成功回调。参数：true 已创建，false 未创建
         */
        success?: (ret: boolean) => void;
        /**
         * 失败回调
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }): void;

    /**
     * 创建桌面图标，需要用户允许
     * @param obj
     */
    function install(obj: {
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
         * 201: 用户拒绝创建
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }): void;

    /**
     * 是否开启系统快捷方式创建弹窗，默认true。不会持久化，只对当前运行有效
     * [1020+]
     */
    let systemPromptEnabled: boolean;
}
