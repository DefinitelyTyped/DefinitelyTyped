/**
 * 第三方分享
 * 接口声明: {"name": "service.share"}
 * @link https://doc.quickapp.cn/features/service/share.html
 */
declare module "@service.share" {
    /**
     * 获取服务提供商
     * @returns 字符串，服务提供商的代号，如厂商的英文品牌名称，假如无此服务则返回空字符串
     */
    function getProvider(): string;

    interface ShareOptions {
        /**
         * 分享类型。
         * 0：默认图文，
         * 1：纯文字，
         * 2：纯图片，
         * 3：音乐，
         * 4：视频
         */
        shareType: 0 | 1 | 2 | 3 | 4;
        /**
         * 分享的标题
         *
         * 分享类型 0,1,3,4 必须
         */
        title?: string;
        /**
         * 分享的摘要
         */
        summary?: string;
        /**
         * 点击后的跳转 URL
         *
         * 分享类型 0,3,4 必须
         */
        targetUrl?: string;
        /**
         * 分享图片/缩略图的本地地址; 另外可支持分享在线图片的url
         * [1040+]
         *
         * 分享类型 2,3,4 必须
         */
        imagePath?: string;
        /**
         * 分享的音乐/视频数据 URL
         *
         * 分享类型 3,4 必须
         */
        mediaUrl?: string;
        /**
         * 分享到的平台，不填则默认分享所有平台。
         * 可用值包括：WEIBO(新浪微博)、QQ、WEIXIN(微信好友)、WEIXIN_CIRCLE(微信朋友圈)、SYSTEM(系统分享)
         * [1010+]
         */
        platforms?: string[];
        /**
         * 成功回调(暂不支持)
         */
        success?: () => void;
        /**
         * 失败回调
         * 失败回调，返回值为错误信息和错误码（错误码可见通用错误码）
         * @link https://doc.quickapp.cn/features/#code
         */
        fail?: (data: any, code: number) => void;
        /**
         * 取消回调
         */
        cancel?: () => void;
    }

    /**
     * 分享内容
     */
    function share(obj: ShareOptions): void;

    interface GetAvailablePlatformsOptions {
        /**
         * 成功回调
         */
        success?: (data: GetAvailablePlatformsSuccessOptions) => void;
        /**
         * 失败回调
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }

    interface GetAvailablePlatformsSuccessOptions {
        /**
         * 当前可用的支持分享的平台列表
         * 可用值包括：WEIBO(新浪微博)、QQ、WEIXIN(微信好友)、WEIXIN_CIRCLE(微信朋友圈)、SYSTEM(系统分享)
         */
        platforms: string[];
    }

    /**
     * 获取当前可用的支持分享的平台列表
     * [1010+]
     */
    function getAvailablePlatforms(obj?: GetAvailablePlatformsOptions): void;
}

declare module "quickapp:@service.share" {
    export * from "@service.share";
}
