/**
 * 广告 [1060+]
 * 接口声明: { "name": "service.ad" }
 * @description
 * |代码|异常情况|
 * |----|----|
 * |1000|后端错误，调用失败|
 * |1001|参数错误|
 * |1002|广告单元无效|
 * |1003|内部错误|
 * |1004|无合适的广告|
 * |1005|广告组件审核中|
 * |1006|广告组件被驳回|
 * |1007|广告能力被封禁|
 * |1008|广告位的广告能力已关闭|
 * |1009|广告加载超时|
 * |1100|过于频繁调用相关的API|
 * |1101|广告在加载后，长时间没有展示，广告信息已过期|
 * |1102|调用了不支持的方法|
 * |1103|环境监测失败，如应用无权限等|
 * |1104|网络错误|
 * |1105|广告未加载成功|
 * |1106|广告展示失败|
 * |2000|未知错误|
 */
declare module "@service.ad" {
    interface NativeAdInfo {
        /**
         * 广告标识，用来上报曝光与点击
         */
        adId: string;
        /**
         * 广告标题
         */
        title: string;
        /**
         * 广告描述
         */
        desc: string;
        /**
         * 推广应用的Icon图标
         */
        icon: string;
        /**
         * 广告图片
         */
        imgUrlList: string[];
        /**
         * “广告”标签图片
         */
        logoUrl: string;
        /**
         * 点击按钮文本描述
         */
        clickBtnTxt: string;
        /**
         * 获取广告类型，取值说明：0：无 1：纯文字 2：图片 3：图文混合 4：视频
         */
        creativeType: number;
        /**
         * 获取广告点击之后的交互类型，取值说明： 0：无 1：浏览类 2：下载类 3：浏览器（下载中间页广告） 4：打开应用首页 5：打开应用详情页
         */
        interactionType: number;
    }

    /**
     * 获取服务提供商
     * 返回值：字符串，服务提供商的代号，如厂商的英文品牌名称，假如无此服务则返回空字符串
     */
    function getProvider(): string;

    namespace BannerAd {
        interface Style {
            /**
             * banner 广告组件的左上角横坐标
             */
            left?: number;
            /**
             * banner 广告组件的左上角纵坐标
             */
            top?: number;
            /**
             * banner 广告组件的宽度
             */
            width?: number;
            /**
             * banner 广告组件的高度
             */
            height?: number;
        }

        interface ErrorCallbackOptions {
            /**
             * 错误信息
             */
            errMsg: string;
            /**
             * 错误码
             */
            errCode: number;
        }

        type ErrorCallback = (err: ErrorCallbackOptions) => void;

        type LoadCallback = () => void;

        type CloseCallback = () => void;

        interface ResizeCallbackOptions {
            /**
             * 缩放后的宽度
             */
            width: number;
            /**
             * 缩放后的高度
             */
            height: number;
        }

        type ResizeCallback = (obj: ResizeCallbackOptions) => void;

        /**
         * Banner广告组件
         */
        interface BannerAd {
            /**
             * banner 广告组件的样式
             */
            style: Style;
            /**
             * 加载展示banner广告，出错的时候回调 onError，分为加载和展示两个阶段，加载成功回调onLoad
             * 返回值：banner 广告显示操作的结果
             */
            show(): Promise<void>;
            /**
             * 隐藏 banner 广告
             * 返回值：banner 广告隐藏操作的结果
             */
            hide(): Promise<void>;
            /**
             * 监听 banner 广告错误事件
             */
            onError(callback: ErrorCallback): void;
            /**
             * 移除 banner 广告错误监听
             */
            offError(callback: ErrorCallback): void;

            /**
             * 监听 banner 广告加载事件，多个素材，每次加载新素材，都会进入这个回调
             */
            onLoad(callback: LoadCallback): void;

            /**
             * 移除 banner 广告展示监听
             */
            offLoad(callback: LoadCallback): void;

            /**
             * 监听 banner 广告关闭事件
             */
            onClose(callback: CloseCallback): void;
            /**
             * 移除 banner 关闭回调
             */
            offClose(callback: CloseCallback): void;
            /**
             * 监听 banner 广告尺寸变化事件
             */
            onResize(callback: ResizeCallback): void;
            /**
             * 取消监听 banner 广告尺寸变化事件
             */
            offResize(callback?: ResizeCallback): void;
            /**
             * 销毁 banner 广告
             */
            destroy(): void;
        }
    }

    interface CreateBannerAdOptions {
        /**
         * Banner 广告位标识
         */
        adUnitId: string;

        /**
         * Banner 广告组件的样式
         */
        style?: BannerAd.Style;
    }

    /**
     * 创建 Banner 广告组件，如果已经创建过 Banner 广告组件，则返回已创建的广告组件
     */
    function createBannerAd(obj: CreateBannerAdOptions): BannerAd.BannerAd;

    namespace InterstitialAd {
        type LoadCallback = () => void;

        type CloseCallback = () => void;

        interface ErrorCallbackOptions {
            /**
             * 错误信息
             */
            errMsg: string;
            /**
             * 错误码
             */
            errCode: number;
        }

        type ErrorCallback = (obj: ErrorCallbackOptions) => void;

        /**
         * 插屏广告组件
         */
        interface InterstitialAd {
            /**
             * 插屏广告组件默认是隐藏的，调用 show 方法展示广告。
             */
            show(): Promise<void>;
            /**
             * 监听视频广告加载成功事件
             */
            onLoad(callback: LoadCallback): void;
            /**
             * 移除插屏广告加载成功监听
             */
            offLoad(callback: LoadCallback): void;
            /**
             * 监听插屏广告隐藏事件
             */
            onClose(callback: CloseCallback): void;
            /**
             * 移除插屏广告隐藏监听
             */
            offClose(callback: CloseCallback): void;
            /**
             * 监听插屏广告出错事件
             */
            onError(callback: ErrorCallback): void;
            /**
             * 移除插屏广告出错监听
             */
            offError(callback: ErrorCallback): void;
            /**
             * 销毁 banner 广告
             */
            destroy(): void;
        }
    }

    interface CreateInterstitialAdOptions {
        /**
         * 插屏广告位标识
         */
        adUnitId: string;
    }

    /**
     * 创建插屏广告组件，同一个 adUnitId，如果已经创建，并且未 destroy，会复用之前的对象，创建后会加载广告素材，素材创建后会自动拉取
     */
    function createInterstitialAd(obj: CreateInterstitialAdOptions): InterstitialAd.InterstitialAd;

    namespace NativeAd {
        interface ReportAdShowOptions {
            /**
             * 广告信息标识，由 load 接口返回
             */
            adId: string;
        }

        interface ReportAdClickOptions {
            /**
             * 广告信息标识，由 load 接口返回
             */
            adId: string;
        }

        interface LoadCallbackOptions {
            /**
             * 广告详细信息
             */
            adList: NativeAdInfo[];
        }

        type LoadCallback = (obj: LoadCallbackOptions) => void;

        interface ErrorCallbackOptions {
            /**
             * 错误信息
             */
            errMsg: string;
            /**
             * 错误码
             */
            errCode: number;
        }

        type ErrorCallback = (obj: ErrorCallbackOptions) => void;

        interface NativeAd {
            /**
             * 拉取广告数据，成功回调 onLoad，失败回调 onError
             */
            load(): void;
            /**
             * 上报广告曝光，一个广告只有一次上报有效，adId 为 load 方法获取的广告数据的 adId 字段
             */
            reportAdShow(obj: ReportAdShowOptions): void;
            /**
             * 上报广告点击，一个广告只有一次上报有效，adId 为 load 方法获取的广告数据的 adId 字段
             */
            reportAdClick(obj: ReportAdClickOptions): void;

            /**
             * 设置广告加载成功回调
             */
            onLoad(callback: LoadCallback): void;
            /**
             * 移除原生广告加载成功监听
             */
            offLoad(callback: LoadCallback): void;
            /**
             * 监听原生广告错误事件
             */
            onError(callback: ErrorCallback): void;
            /**
             * 移除原生广告错误监听
             */
            offError(callback: ErrorCallback): void;
            /**
             * 销毁 banner 广告
             */
            destroy(): void;
        }
    }

    interface CreateNativeAd {
        /**
         * 原生广告位标识
         */
        adUnitId: string;
    }
    /**
     * 创建 native 广告组件，如果已经创建过 native 广告组件，则返回已创建的广告组件
     * @deprecated 注意：原生广告已停止支持，请使用原生自渲染2.0广告
     * @link https://doc.quickapp.cn/features/service/ad/feedad.html
     */
    function createNativeAd(obj: CreateNativeAd): NativeAd.NativeAd;

    namespace RewardedVideoAd {
        type LoadCallback = () => void;

        interface CloseCallbackOptions {
            /**
             * 视频是否播放结束
             */
            isEnded: boolean;
        }

        type CloseCallback = (obj: CloseCallbackOptions) => void;

        interface ErrorCallbackOptions {
            /**
             * 错误信息
             */
            errMsg: string;
            /**
             * 错误码
             */
            errCode: number;
        }

        type ErrorCallback = (obj: ErrorCallbackOptions) => void;

        interface RewardedVideoAd {
            /**
             * 加载激励视频广告。
             * 返回值：激励视频广告显示操作的结果。
             */
            load(): Promise<void>;
            /**
             * 显示激励视频广告。激励视频广告将从屏幕下方推入。
             * 返回值：激励视频广告显示操作的结果。
             */
            show(): Promise<void>;
            /**
             * 监听激励视频广告加载事件。
             */
            onLoad(callback: LoadCallback): void;
            /**
             * 取消监听激励视频广告加载事件
             * @param callback
             */
            offLoad(callback: LoadCallback): void;
            /**
             * 监听用户点击关闭广告 按钮的事件
             */
            onClose(callback: CloseCallback): void;
            /**
             * 取消监听用户点击关闭广告按钮的事件
             */
            offClose(callback: CloseCallback): void;
            /**
             * 监听激励视频错误事件。
             */
            onError(callback: ErrorCallback): void;
            /**
             * 取消监听激励视频广告错误
             */
            offError(callback: ErrorCallback): void;
        }
    }

    interface CreateRewardedVideoAdOptions {
        /**
         * 激励视频广告位标识
         */
        adUnitId: string;
    }

    /**
     * 创建激励视频广告组件，该广告页面单例，不允许跨页面使用。
     * [1070+]
     */
    function createRewardedVideoAd(obj: CreateRewardedVideoAdOptions): RewardedVideoAd.RewardedVideoAd;

    interface PreloadAdOptions {
        /**
         * 广告位标识
         */
        adUnitId: string;
        /**
         * 广告单元所属广告位类型
         * - native：原生广告2.0
         */
        type: "native";
        /**
         * 预期返回的广告条数
         */
        adCount?: number;
        /**
         * 成功回调
         */
        success?: (obj: PreloadAdSuccessOptions) => void;
        /**
         * 失败回调
         */
        fail?: (data: any, code: number) => void;
    }

    interface PreloadAdSuccessOptions {
        /**
         * 广告详细信息的对象，请求原生广告2.0成功时返回，数据格式如下表
         */
        adList: PreloadAdInfo[];
    }

    interface PreloadAdInfo {
        /**
         * 广告数据id，用于标识不同广告数据
         */
        adId: string;
        /**
         * 广告标题
         */
        title: string;
        /**
         * 广告描述
         */
        desc: string;
        /**
         * 推广应用的Icon图标
         */
        icon: string;
        /**
         * 广告图片列表
         */
        imgUrlList: string[];
        /**
         * 点击按钮文本描述
         */
        clickBtnTxt: string;
        /**
         * 广告素材类型，取值详见各厂商支持明细
         */
        materialType: number;
        /**
         * 是否具备隐私交互组件能力
         */
        hasPrivacy: boolean;
        /**
         * 应用下载类广告的落地页应用信息，非应用下载类广告该信息可能为空
         */
        appInfo?: AppInfo;
    }

    interface AppInfo {
        /**
         * 应用名称
         */
        appName: string;
        /**
         * 应用版本
         */
        appVersion: string;
        /**
         * 应用大小，单位KB
         */
        appSize: number;
        /**
         * 开发者名称
         */
        developer: string;
    }

    /**
     * 原生广告2.0是对原有原生广告的优化和升级，使用原生广告2.0的API，开发者可深度地定制广告样式。
     *
     * 在快应用环境下，支持通过调用 ad.preloadAd 接口，提前加载广告数据，在后续创建对应广告标签 ad 时，会自动使用预加载的广告数据，省去创建广告标签时拉取广告的耗时。该方法会异步回调结果。
     *
     * [1200+]
     *
     * @link https://doc.quickapp.cn/features/service/ad/feedad.html
     */
    function preloadAd(obj: PreloadAdOptions): void;
}

declare module "quickapp:@service.ad" {
    export * from "@service.ad";
}
