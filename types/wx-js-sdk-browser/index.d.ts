declare namespace wx {
    /**
     * 微信配置对象
     */
    interface WxConfig {
        /**
         * 开启调试模式,调用的所有 api 的返回值会在客户端 alert 出来，若要查看传入的参数，可以在 pc 端打开，参数信息会通过 log 打出，仅在 pc 端时才会打印。
         */
        debug?: boolean | undefined;

        /**
         * 公众号的唯一标识
         */
        appId: string;

        /**
         * 签名的时间戳
         */
        timestamp: number;

        /**
         * 签名的随机串
         */
        nonceStr: string;

        /**
         * 签名
         */
        signature: string;

        /**
         * 需要使用的JS接口列表
         */
        jsApiList: string[];
        /**
         * 可选，需要使用的开放标签列表
         */
        openTagList?: string[] | undefined;
    }

    /**
     * 初始化，做任何操作前必须调用该方法
     * @param setting 配置对象
     */
    function config(setting: WxConfig): void;

    /**
     * 配置微信初始化成功后的回调
     * @param x 回调
     */
    function ready(x: () => void): void;

    /**
     * 配置微信初始化失败后的回调
     * @param err 失败回调
     */
    function error(err: (res: any) => void): void;

    /**
     * 所有通过wx对象调用的接口的基础请求参数
     * 见：https://mp.weixin.qq.com/wiki?action=doc&id=mp1421141115&t=0.08966560295638093#7
     */
    interface WxBaseRequestConfig {
        /**
         * 接口调用成功时执行的回调函数
         */
        success?(res?: any): void;

        /**
         * 接口调用失败时执行的回调函数
         */
        fail?(error?: any): void;

        /**
         * 接口调用完成时执行的回调函数，无论成功或失败都会执行
         */
        complete?(res?: any): void;

        /**
         * 用户点击取消时的回调函数，仅部分有用户取消操作的api才会用到
         */
        cancel?(): void;
    }

    /**
     * 所有Menu中的相关接口的请求参数
     */
    interface WxBaseMenuRequestConfig extends WxBaseRequestConfig {
        /**
         * 监听Menu中的按钮点击时触发的方法
         */
        trigger?: (() => void) | undefined;
    }

    /**
     * 判断当前客户端版本是否支持指定 JS 接口, checkJsApi 接口是客户端6.0.2新引入的一个预留接口，第一期开放的接口均可不使用 checkJsApi 来检测
     */
    interface CheckApiConfig extends WxBaseRequestConfig {
        /**
         * 需要检测的JS接口列表
         */
        jsApiList: string[];

        /**
         * 以键值对的形式返回，可用的 api 值 true，不可用为 false
         * 如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
         */
        success(res: { checkResult: { [methodName: string]: boolean }; errMsg: { msg: string } }): void;
    }

    /**
     * 判断当前客户端版本是否支持指定 JS 接口
     */
    function checkJsApi(setting: CheckApiConfig): void;

    interface ShareTimelineConfig extends WxBaseMenuRequestConfig {
        /**
         * 分享标题
         */
        title: string;

        /**
         * 分享链接，该链接域名或路径必须与当前页面对应的公众号 JS 安全域名一致
         */
        link: string;

        /**
         * 分享图标
         */
        imgUrl?: string | undefined;
    }

    /**
     * 获取“分享到朋友圈”按钮点击状态及自定义分享内容接口
     * @deprecated
     */
    function onMenuShareTimeline(setting: ShareTimelineConfig): void;

    /**
     * “分享给朋友”及“分享到QQ”按钮的分享内容
     */
    interface ShareToUserConfig extends WxBaseMenuRequestConfig {
        /**
         * 分享标题
         */
        title?: string | undefined;

        /**
         * 分享描述
         */
        desc?: string | undefined;

        /**
         * 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
         */
        link?: string | undefined;

        /**
         * 分享图标
         */
        imgUrl?: string | undefined;

        success?: (() => void) | undefined;
    }

    /**
     * “分享到朋友圈”及“分享到QQ空间”按钮的分享内容
     */
    interface ShareToTimelineConfig extends WxBaseMenuRequestConfig {
        /**
         * 分享标题
         */
        title?: string | undefined;

        /**
         * 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
         */
        link?: string | undefined;

        /**
         * 分享图标
         */
        imgUrl?: string | undefined;

        success?: (() => void) | undefined;
    }

    /**
     * 消息分享对象
     * @deprecated
     */
    interface SharedAppMessage extends ShareTimelineConfig {
        /**
         * 分享描述
         */
        desc: string;

        /**
         * 分享类型, music、video 或 link，不填默认为 link
         */
        type?: string | undefined;

        /**
         * 如果 type 是 music 或 video，则要提供数据链接，默认为空
         */
        dataUrl?: string | undefined;
    }

    /**
     * 获取“分享给朋友”按钮点击状态及自定义分享内容接口
     * @deprecated
     */
    function onMenuShareAppMessage(setting: SharedAppMessage): void;

    /**
     * @deprecated
     */
    interface MenuShareQQ extends ShareTimelineConfig {
        /**
         * 分享描述
         */
        desc: string;
    }

    /**
     * “分享到QQ”按钮点击状态及自定义分享内容接口
     * @deprecated
     */
    function onMenuShareQQ(config: MenuShareQQ): void;

    interface MenuShareWeibo extends ShareTimelineConfig {
        /**
         * 分享描述
         */
        desc: string;
    }

    /**
     * 获取“分享到腾讯微博”按钮点击状态及自定义分享内容接口
     */
    function onMenuShareWeibo(config: MenuShareWeibo): void;

    /**
     * 获取“分享到QQ空间”按钮点击状态及自定义分享内容接口
     * @deprecated
     */
    function onMenuShareQZone(config: MenuShareWeibo): void;

    /**
     * “分享给朋友”及“分享到QQ”
     * @param config
     */
    function updateAppMessageShareData(config: ShareToUserConfig): void;

    /**
     * “分享到朋友圈”及“分享到QQ空间”
     * @param config
     */
    function updateTimelineShareData(config: ShareToTimelineConfig): void;

    interface ChooseImageConfig {
        /**
         * 照片数，默认9
         */
        count?: number | undefined;

        /**
         * 可以指定是原图还是压缩图，默认二者都有
         */
        sizeType?: string[] | undefined;

        /**
         * 可以指定来源是相册还是相机，默认二者都有
         */
        sourceType?: string[] | undefined;

        /**
         * 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
         */
        success(res: { localIds: string[] }): void;
    }

    /**
     * 拍照或从手机相册中选图接口
     */
    function chooseImage(config: ChooseImageConfig): void;

    /**
     * 显示照片预览用的配置对象
     */
    interface PreviewImageConfig extends WxBaseRequestConfig {
        /**
         * 当前显示图片的 http 链接
         */
        current: string;
        /**
         * 需要预览的图片 http 链接列表
         */
        urls: string[];
    }

    /**
     * 预览图片接口
     */
    function previewImage(config: PreviewImageConfig): void;

    interface UploadImageConfig extends WxBaseRequestConfig {
        /**
         * 要上传的图片的本地 ID，由 chooseImage 接口获得
         */
        localId: string;

        /**
         * 默认为1，显示进度提示
         */
        isShowProgressTips?: number | undefined;

        /**
         * res: var serverId = res.serverId;  返回图片的服务器端 ID
         */
        success(res: any): void;
    }

    /**
     * 上传图片
     */
    function uploadImage(config: UploadImageConfig): void;

    interface DownLoadImageConfig extends WxBaseRequestConfig {
        /**
         * serverId: 需要下载的图片的服务器端ID，由 uploadImage 接口获得
         */
        serverId: string;

        isShowProgressTips?: number | undefined;

        /**
         * var localId = res.localId;  返回图片下载后的本地 ID
         */
        success?(res: { localId: string }): void;
    }

    function downloadImage(config: DownLoadImageConfig): void;

    interface GetLocalImgDataConfig extends WxBaseRequestConfig {
        /**
         * 图片的 localID
         */
        localId: string;

        /**
         * 成功后的回调, localData是图片的base64数据，可以用img标签显示
         */
        success(res: { localData: string }): void;
    }

    /**
     * 获取本地图片接口,此接口仅在 iOS WKWebview 下提供，用于兼容 iOS WKWebview 不支持 localId 直接显示图片的问题
     */
    function getLocalImgData(config: GetLocalImgDataConfig): void;

    /**
     * 开始录音
     */
    function startRecord(): void;

    interface StopRecordConfig extends WxBaseRequestConfig {
        success(res: { localId: string }): void;
    }

    /**
     * 停止录音
     */
    function stopRecord(config: StopRecordConfig): void;

    interface VoiceRecordEndConfig extends WxBaseRequestConfig {
        complete(res: { localId: string }): void;
    }

    /**
     * 录音时间超过一分钟没有停止的时候会执行回调
     */
    function onVoiceRecordEnd(config: VoiceRecordEndConfig): void;

    /**
     * 播放音频
     */
    function playVoice(localId: string): void;

    /**
     * 暂停音频
     */
    function pauseVoice(localId: string): void;

    /**
     * 停止播放音频
     */
    function stopVoice(localId: string): void;

    interface VoicePlayEndConfig extends WxBaseRequestConfig {
        success(res: { localId: string }): void;
    }

    /**
     * 停止播放后的回调
     */
    function onVoicePlayEnd(config: VoicePlayEndConfig): void;

    interface UploadVoiceConfig extends WxBaseRequestConfig {
        localId: string;
        isShowProgressTips?: number | undefined;
        success(res: any): void;
    }

    /**
     * 上传语音接口, 上传语音有效期3天，可用微信多媒体接口下载语音到自己的服务器，
     */
    function uploadVoice(config: UploadVoiceConfig): void;

    interface DownloadVoiceConfig extends WxBaseRequestConfig {
        /**
         * 需要下载的音频的服务器端 ID，由 uploadVoice 接口获得
         */
        serverId: string;

        /**
         * 默认为1，显示进度提示
         */
        isShowProgressTips?: number | undefined;

        /**
         * 下载成功回调
         */
        success(res: any): void;
    }

    function downloadVoice(config: DownloadVoiceConfig): void;

    /**
     * 识别音频并返回识别结果接口
     */
    function translateVoice(config: UploadVoiceConfig): void;

    interface GetNetworkTypeConfig extends WxBaseRequestConfig {
        success(res: { networkType: string }): void;
    }

    /**
     * 获取网络状态, var networkType = res.networkType; 返回网络类型 2g，3g，4g，wifi
     */
    function getNetworkType(config: GetNetworkTypeConfig): void;

    interface OpenLocationConfig extends WxBaseRequestConfig {
        latitude?: number | undefined;
        longitude?: number | undefined;

        /**
         * 位置名
         */
        name?: string | undefined;

        /**
         * 地址详情说明
         */
        address?: string | undefined;

        /**
         * 地图缩放级别,整形值,范围从1~28。默认为最大
         */
        scale?: number | undefined;

        /**
         * 在查看位置界面底部显示的超链接, 可点击跳转
         */
        infoUrl?: string | undefined;
    }

    /**
     * 微信内置地图查看位置
     */
    function openLocation(config: OpenLocationConfig): void;

    interface Location {
        latitude: number;
        longitude: number;

        /**
         * 速度，以米/每秒计
         */
        speed: number;

        /**
         * 位置精度
         */
        accuracy: number;
    }

    interface GetLocationConfig extends WxBaseRequestConfig {
        /**
         * 默认为 wgs84 的 gps 坐标，如果要返回直接给 openLocation 用的火星坐标，可传入'gcj02'
         */
        type?: string | undefined;

        success(res: Location): void;
    }

    /**
     * 获取地理位置接口
     */
    function getLocation(config: GetLocationConfig): void;

    interface StartSearchBeaconsConfig extends WxBaseRequestConfig {
        /**
         * 摇周边的业务ticket, 系统自动添加在摇出来的页面链接后面
         */
        ticket: string;

        /**
         * 完成后的回调
         */
        complete(argv: any): void;
    }

    /**
     * 开启查找周边 ibeacon 设备接口
     */
    function startSearchBeacons(config: StartSearchBeaconsConfig): void;

    interface StopSearchBeaconsConfig extends WxBaseRequestConfig {
        complete(res: any): void;
    }

    /**
     * 关闭查找完成后的回调函数
     */
    function stopSearchBeacons(config: StopSearchBeaconsConfig): void;

    interface OnSearchBeaconsConfig extends WxBaseRequestConfig {
        complete(argv: any): void;
    }
    /**
     * 监听周边 ibeacon 设备接口,
     * 摇一摇周边接口使用注意事项及更多返回结果说明，请参考：摇一摇周边获取设备信息
     */
    function onSearchBeacons(config: OnSearchBeaconsConfig): void;

    /**
     * 关闭当前网页窗口接口
     */
    function closeWindow(): void;

    interface MenuItemsConfig extends WxBaseRequestConfig {
        /**
         * 要隐藏/显示的菜单项，只能隐藏“传播类”和“保护类”按钮
         */
        menuList: string[];
    }

    /**
     * 批量隐藏功能按钮接口
     */
    function hideMenuItems(config: MenuItemsConfig): void;

    /**
     * 批量显示功能按钮接口
     */
    function showMenuItems(config: MenuItemsConfig): void;

    /**
     * 隐藏所有非基础按钮接口
     */
    function hideAllNonBaseMenuItem(): void;

    /**
     * 显示所有功能按钮接口
     */
    function showAllNonBaseMenuItem(): void;

    interface ScanQRCodeConfig extends WxBaseRequestConfig {
        /**
         * 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
         */
        needResult?: number | undefined;

        /**
         * ["qrCode","barCode"], 可以指定扫二维码还是一维码，默认二者都有
         */
        scanType?: string[] | undefined;

        /**
         * resultStr 是当 needResult 为 1 时，扫码返回的结果
         */
        success?(res: { resultStr: string }): void;
    }

    /**
     * 调起微信扫一扫接口
     */
    function scanQRCode(config: ScanQRCodeConfig): void;

    interface OpenProductSpecificViewConfig extends WxBaseRequestConfig {
        /**
         * 商品id
         */
        productId: string;

        /**
         * 0.默认值，普通商品详情页; 1.扫一扫商品详情页; 2.小店商品详情页
         */
        viewType?: number | undefined;
    }

    /**
     * 跳转微信商品页接口
     */
    function openProductSpecificView(config: OpenProductSpecificViewConfig): void;

    interface ChooseCardConfig extends WxBaseRequestConfig {
        /**
         * 门店Id
         */
        shopId?: string | undefined;

        /**
         * 卡券类型
         */
        cardType?: string | undefined;

        /**
         * 卡券Id
         */
        cardId?: string | undefined;

        /**
         * 卡券签名时间戳
         */
        timestamp: number;

        /**
         * 卡券签名随机串
         */
        nonceStr: string;

        /**
         * 签名方式，默认'SHA1'
         */
        signType: string;

        /**
         * 卡券签名
         */
        cardSign: string;

        /**
         * var cardList= res.cardList; 用户选中的卡券列表信息
         */
        success?(res: { cardList: Card[] }): void;
    }

    /**
     * 卡券对象
     */
    interface Card {
        cardId: string;
        cardExt: string;
    }

    /**
     * 拉取适用卡券列表并获取用户选择信息
     */
    function chooseCard(config: ChooseCardConfig): void;

    interface AddCardConfig {
        cardList: Card[];
        success?(res: { cardList: Card[] }): void;
    }

    /**
     * 批量添加卡券接口
     */
    function addCard(config: AddCardConfig): void;

    class OpenCardObj {
        cardId: string;
        code: string;
    }

    /**
     * 需要打开的卡券列表
     */
    interface OpenCardConfig extends WxBaseRequestConfig {
        cardList: OpenCardObj[];
    }

    /**
     * 查看微信卡包中的卡券接口
     */
    function openCard(config: OpenCardConfig): void;

    interface ChooseWXPayConfig extends WxBaseRequestConfig {
        /**
         * 支付签名时间戳，注意微信jssdk中的所有使用 timestamp 字段均为小写。但最新版的支付后台生成签名使用的 timeStamp 字段名需大写其中的S字符
         */
        timestamp: number;

        /**
         * 支付签名随机串，不长于 32 位
         */
        nonceStr: string;

        /**
         * 统一支付接口返回的 prepay_id 参数值，提交格式如：prepay_id=***
         */
        package: string;

        /**
         * 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
         */
        signType?: string | undefined;

        /**
         * 支付签名
         */
        paySign: string;
    }

    /**
     * 发起一个微信支付请求
     */
    function chooseWXPay(config: ChooseWXPayConfig): void;

    /**
     * openAddress的返回数据
     */
    interface OpenAddressResponse {
        errMsg: string;
        userName: string; // 收货人姓名
        postalCode: string; // 邮编
        provinceName: string; // 国标收货地址第一级地址（省）
        cityName: string; // 国标收货地址第二级地址（市）
        countryName: string; // 国标收货地址第三级地址（国家）
        detailInfo: string; // 详细收货地址信息
        nationalCode: string; // 收货地址国家码
        telNumber: string; // 收货人手机号码
    }
    /**
     * openAddress的调用参数
     */
    interface OpenAddressConfig extends WxBaseRequestConfig {
        /**
         * 成功回调
         */
        success?(res: OpenAddressResponse): void;
    }

    /**
     * 快速输入共享收货地址接口
     */
    function openAddress(config: OpenAddressConfig): void;
}

interface Window {
    /**
     * iOS微信6.5.3及其之后的版本 window.__wxjs_is_wkwebview 为true时是使用WKWebview，为 false或者 “undefine”时是 UIWebview
     */
    __wxjs_is_wkwebview?: boolean | undefined;
}
