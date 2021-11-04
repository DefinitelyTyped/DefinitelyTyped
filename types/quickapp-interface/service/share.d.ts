/**
 * 第三方分享
 * 接口声明: {"name": "service.share"}
 */
declare module '@service.share' {
    /**
     * 获取服务提供商
     * @returns string 服务提供商的代号，如厂商的英文品牌名称，假如无此服务则返回空字符串
     */
    function getProvider(): string;

    /**
     * 分享内容
     * @param obj
     */
    function share(obj: {
        /**
         * 分享类型。
         * 0：默认图文，
         * 1：纯文字，
         * 2：纯图片，
         * 3：音乐，
         * 4：视频
         */
        shareType: number;
        /**
         * 分享的标题
         */
        title?: string;
        /**
         * 分享的摘要
         */
        summary?: string;
        /**
         * 点击后的跳转 URL
         */
        targetUrl?: string;
        /**
         * 分享图片/缩略图的本地地址; 另外可支持分享在线图片的url
         * [1040+]
         */
        imagePath?: string;
        /**
         * 分享的音乐/视频数据 URL
         */
        mediaUrl?: string;
        /**
         * 分享到的平台，不填则默认分享所有平台。
         * 可用值包括：WEIBO(新浪微博)、QQ、WEIXIN(微信好友)、WEIXIN_CIRCLE(微信朋友圈)、SYSTEM(系统分享)
         */
        platforms?: string[];
        /**
         * 成功回调(暂不支持)
         */
        success?: () => void;
        /**
         * 失败回调
         */
        fail?: (data: any, code: number) => void;
        /**
         * 取消回调
         */
        complete?: () => void;
    }): void;

    /**
     * 获取当前可用的支持分享的平台列表
     * [1010+]
     * @param obj
     *  success 成功回调
     *  fail 失败回调
     *  complete 执行结束后的回调
     */
    function getAvailablePlatforms(obj: {
        /**
         * 成功回调
         */
        success?: (data: {
            /**
             * 当前可用的支持分享的平台列表
             * 可用值包括：WEIBO(新浪微博)、QQ、WEIXIN、WEIXIN_CIRCLE(微信朋友圈)、SYSTEM(系统分享)
             */
            platforms: string[];
        }) => void;
        /**
         * 失败回调
         */
        fail?: (data: any, code: number) => void;
        /**
         * 取消回调
         */
        complete?: () => void;
    }): void;
}
