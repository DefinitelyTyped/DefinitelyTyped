/**
 * 发送短信
 * 接口声明: {"name": "system.sms"}
 */
declare module '@system.sms' {
    /**
     * 发送短信，每次发送都需要用户授权
     * @param obj
     */
    function send(obj: {
        /**
         * 目标号码
         */
        address: string;
        /**
         * 短信内容（不可超过70字符）
         */
        content: string;
        /**
         * 成功回调
         */
        success?: () => void;
        /**
         * 失败回调
         * 201: 用户拒绝，获取发短信权限失败
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }): void;

    /**
     * 获取手机短信内容，用于获取手机验证码等场景（仅允许获取 5 分钟内的应用短信）。
     * 安全性：短信中通过增加应用签名 hash 信息，接口获取短信时通过 hash 来验证区分该应用的短信内容。
     * 短信格式：11 位签名 hash 字符放到短信末尾，可通过 Debugger 工具获取。
     * [1050+]
     * @param obj
     */
    function readSafely(obj: {
        /**
         * 超时时间，单位是 ms，默认值为 60000（一分钟）
         */
        timeout?: number;
        /**
         * 成功回调
         */
        success?: (data: {
            /**
             * 原始短信内容
             */
            message: string;
        }) => void;
        /**
         * 失败回调
         * 204: 超时返回
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }): void;
}
