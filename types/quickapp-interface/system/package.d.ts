/**
 * 应用管理
 * 接口声明: {"name": "system.package"}
 */
declare module '@system.package' {
    /**
     * 检测应用是否存在。支持检测原生应用是否已安装
     * @param obj
     *  package 应用包名
     */
    function hasInstalled(obj: {
        /**
         * 应用包名
         */
        package: string;
        /**
         * 成功回调
         */
        success?: (data: {
            /**
             * 应用是否存在
             */
            result: boolean;
        }) => void;
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
     * 安装应用, 支持安装原生应用
     * @param obj
     */
    function install(obj: {
        /**
         * 应用包名
         */
        package: string;
        /**
         * 成功回调
         */
        success?: (data: {
            /**
             * 是否成功发起安装操作
             */
            result: boolean;
        }) => void;
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
     * 获取应用版本号、版本名称信息，包括原生应用和快应用
     * [1070+]
     * @param obj
     */
    function getInfo(obj: {
        /**
         * 应用包名
         */
        package: string;
        /**
         * 成功回调
         */
        success?: (data: {
            /**
             * 版本号
             */
            versionCode: number;
            /**
             * 版本名称
             */
            versionName: string;
        }) => void;
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
     * 获取应用签名摘要信息，包括原生应用和快应用
     * [1070+]
     * @param obj
     */
    function getSignatureDigests(obj: {
        /**
         * 应用包名
         */
        package: string;
        /**
         * 成功回调
         */
        success?: (data: {
            /**
             * 签名摘要信息列表，使用SHA-256
             */
            signatureDigests: [];
        }) => void;
        /**
         * 失败回调
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }): void;
}
