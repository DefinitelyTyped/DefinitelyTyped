/**
 * 获取设备信息
 */
declare module '@system.app' {
    /**
     * 获取设备信息
     */
    function getInfo(): {
        /**
         * 应用包名
         */
        packageName: string;
        /**
         * 应用图标路径
         */
        icon: string;
        /**
         * 应用名称
         */
        name: string;
        /**
         * 应用版本名称
         */
        versionName: string;
        /**
         * 应用版本号
         */
        versionCode: number;
        /**
         * 	log 级别
         */
        logLevel: string;
        /**
         * 应用来源
         */
        source: {
            /**
             * 来源 app 的包名，一级来源
             */
            packageName: string;
            /**
             * 来源类型，二级来源，值为 shortcut、push、url、barcode、nfc、bluetooth、other
             */
            type: string;
            /**
             * 来源其他信息，与 type 相关，不同的 type，extra 中的字段会不同
             */
            extra: object;
        };
    };

    /**
     * 生成快应用分享二维码
     * [1070+]
     * @param obj
     */
    function createQuickAppQRCode(obj: {
        /**
         * 页面路径，可携带参数
         */
        path?: string;
        /**
         * 成功回调
         */
        success?: (data: {
            /**
             * 二维码文件地址
             */
            uri: string;
        }) => void;
        /**
         * 失败回调
         */
        fail?: (data: any, code: number) => void;
    }): void;
}
