/**
 * 获取设备信息
 */
declare module "@system.app" {
    /**
     * 获取当前应用信息的返回值接口
     */
    interface AppInfo {
        /**
         * 应用包名
         * [1050+]
         */
        packageName: string;
        /**
         * 应用图标路径
         * [1050+]
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
         * log级别
         */
        logLevel: string;
        /**
         * 应用来源
         */
        source: AppSource;
    }

    /**
     * 应用来源信息接口
     */
    interface AppSource {
        /**
         * 来源app的包名，一级来源
         */
        packageName: string;
        /**
         * 来源类型，二级来源，值为shortcut、push、url、barcode、nfc、bluetooth、other
         */
        type: string;
        /**
         * 来源其他信息，与type相关，不同的type，extra中的字段会不同
         */
        extra: Record<string, any>;
    }

    /**
     * 获取当前应用信息
     */
    function getInfo(): AppInfo;

    /**
     * 生成快应用分享二维码成功回调的返回值接口
     */
    interface CreateQRCodeSuccessResult {
        /**
         * 二维码文件地址
         */
        uri: string;
    }

    /**
     * 生成快应用分享二维码的参数接口
     */
    interface CreateQRCodeOptions {
        /**
         * 页面路径，可携带参数，非必填
         */
        path?: string;
        /**
         * 成功回调，非必填
         */
        success?: (data: CreateQRCodeSuccessResult) => void;
        /**
         * 失败回调，非必填
         */
        fail?: (data: any, code: number) => void;
    }

    /**
     * 生成快应用分享二维码
     * [1070+]
     */
    function createQuickAppQRCode(options: CreateQRCodeOptions): void;
}

declare module "quickapp:@system.app" {
    export * from "@system.app";
}
