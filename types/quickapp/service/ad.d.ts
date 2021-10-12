/**
 * 广告 [1060+]
 * 接口声明: { "name": "service.ad" }
 */
declare module '@service.ad' {
    /**
     * 获取服务提供商
     * 返回值：字符串，服务提供商的代号，如厂商的英文品牌名称，假如无此服务则返回空字符串
     */
    function getProvider(): string;

    /**
     * 创建 Banner 广告组件，如果已经创建过 Banner 广告组件，则返回已创建的广告组件
     * @param obj
     */
    function createBannerAd(obj: {
        /**
         * Banner 广告位标识
         */
        adUnitId: string;

        /**
         * Banner 广告组件的样式
         */
        style?: {
            left?: number; // banner 广告组件的左上角横坐标
            top?: number; // banner 广告组件的左上角纵坐标
            width?: number; // banner 广告组件的宽度
            height?: number; // banner 广告组件的高度
        };
    }): BannerAd;

    /**
     * 创建插屏广告组件，同一个 adUnitId，如果已经创建，并且未 destroy，会复用之前的对象，创建后会加载广告素材，素材创建后会自动拉取
     * @param obj
     */
    function createInterstitialAd(obj: {
        /**
         * 插屏广告位标识
         */
        adUnitId: string;
    }): InterstitialAd;

    /**
     * 创建 native 广告组件，如果已经创建过 native 广告组件，则返回已创建的广告组件
     * @param obj
     */
    function createNativeAd(obj: {
        /**
         * 原生广告位标识
         */
        adUnitId: string;
    }): NativeAd;

    /**
     * [1070+]
     * 创建激励视频广告组件，该广告页面单例，不允许跨页面使用。
     * @param obj
     */
    function createRewardedVideoAd(obj: {
        /**
         * 激励视频广告位标识
         */
        adUnitId: string;
    }): RewardedVideoAd;
}

interface RewardedVideoAd {
    /**
     * 加载激励视频广告。
     * 返回值：激励视频广告显示操作的结果。
     */
    load(): void;

    /**
     * 显示激励视频广告。激励视频广告将从屏幕下方推入。
     * 返回值：激励视频广告显示操作的结果。
     */
    show(): void;

    /**
     * 监听激励视频广告加载事件。
     */
    onLoad(callback: () => void): void;

    /**
     * 取消监听激励视频广告加载事件
     * @param callback
     */
    offLoad(callback: () => void): void;

    /**
     * 监听用户点击关闭广告 按钮的事件
     * @param callback
     */
    onClose(callback: () => void): void;

    /**
     * 取消监听用户点击关闭广告按钮的事件
     * @param callback
     */
    offClose(callback: () => void): void;

    /**
     * 监听激励视频错误事件。
     * @param callback
     */
    onError(callback: () => void): void;

    /**
     * 取消监听激励视频广告错误
     * @param callback
     */
    offError(callback: () => void): void;
}

interface NativeAd {
    /**
     * 拉取广告数据，成功回调 onLoad，失败回调 onError
     */
    load(): void;

    /**
     * 上报广告曝光，一个广告只有一次上报有效，adId 为 load 方法获取的广告数据的 adId 字段
     * @param obj
     */
    reportAdShow(obj: {
        /**
         * 广告信息标识，由 load 接口返回
         */
        adId: string;
    }): void;

    /**
     * 上报广告点击，一个广告只有一次上报有效，adId 为 load 方法获取的广告数据的 adId 字段
     * @param obj
     */
    reportAdClick(obj: {
        /**
         * 广告信息标识，由 load 接口返回
         */
        adId: string;
    }): void;

    onLoad(
        callback: (res: {
            /**
             * 广告详细信息
             */
            adList: Ad[];
        }) => {},
    ): void;

    /**
     * 移除原生广告加载成功监听
     * @param callback
     */
    offLoad(callback: () => void): void;

    /**
     * 监听原生广告错误事件
     * @param callback
     */
    onError(callback: () => void): void;

    /**
     * 移除原生广告错误监听
     * @param callback
     */
    offError(callback: () => void): void;

    /**
     * 销毁 banner 广告
     */
    destroy(): void;
}

interface Ad {
    adId: string; // 广告标识，用来上报曝光与点击
    title: string; // 广告标题
    desc: string; // 广告描述
    icon: string; // 推广应用的Icon图标
    imgUrlList: []; // 广告图片
    logoUrl: string; // “广告”标签图片
    clickBtnTxt: string; // 点击按钮文本描述
    creativeType: number; // 获取广告类型，取值说明：0：无 1：纯文字 2：图片 3：图文混合 4：视频
    interactionType: number; // 获取广告点击之后的交互类型，取值说明： 0：无 1：浏览类 2：下载类 3：浏览器（下载中间页广告） 4：打开应用首页 5：打开应用详情页
}

/**
 * 插屏广告组件
 */
interface InterstitialAd {
    /**
     * 插屏广告组件默认是隐藏的，调用 show 方法展示广告。
     */
    show(): void;

    /**
     * 监听视频广告加载成功事件
     * @param callback
     */
    onLoad(callback: () => void): void;

    /**
     * 移除插屏广告加载成功监听
     * @param callback
     */
    offLoad(callback: () => void): void;

    /**
     * 监听插屏广告隐藏事件
     * @param callback
     */
    onClose(callback: () => void): void;

    /**
     * 移除插屏广告隐藏监听
     * @param callback
     */
    offClose(callback: () => void): void;

    /**
     * 监听插屏广告出错事件
     * @param callback
     */
    onError(callback: () => void): void;

    /**
     * 移除插屏广告出错监听
     * @param callback
     */
    offError(callback: () => void): void;

    /**
     * 销毁 banner 广告
     */
    destroy(): void;
}

/**
 * Banner广告组件
 */
interface BannerAd {
    /**
     * 加载展示banner广告，出错的时候回调 onError，分为加载和展示两个阶段，加载成功回调onLoad
     * 返回值：banner 广告显示操作的结果
     */
    show(): void;
    /**
     * 隐藏 banner 广告
     * 返回值：banner 广告隐藏操作的结果
     */

    hide(): void;

    /**
     * 监听 banner 广告错误事件
     * @param callback
     */
    onError(
        callback: (obj: {
            /**
             * 错误信息
             */
            errMsg: string;
            /**
             * 错误码
             */
            errCode: number;
        }) => {},
    ): void;

    /**
     * 移除 banner 广告错误监听
     * @param callback
     */
    offError(callback: () => void): void;

    /**
     * 监听 banner 广告加载事件，多个素材，每次加载新素材，都会进入这个回调
     * @param callback
     */
    onLoad(callback: () => void): void;

    /**
     * 移除 banner 广告展示监听
     * @param callback
     */
    offLoad(callback: () => void): void;

    /**
     * 监听 banner 广告关闭事件
     * @param callback
     */
    onClose(callback: () => void): void;

    /**
     * 移除 banner 关闭回调
     * @param callback
     */
    offClose(callback: () => void): void;

    /**
     * 监听 banner 广告尺寸变化事件
     * @param callback
     */
    onResize(
        callback: (obj: {
            width: number; // 缩放后的宽度
            height: number; // 缩放后的高度
        }) => {},
    ): void;

    /**
     * 取消监听 banner 广告尺寸变化事件
     * @param callback
     */
    offResize(callback?: () => void): void;

    /**
     * 销毁 banner 广告
     */
    destroy(): void;
}
