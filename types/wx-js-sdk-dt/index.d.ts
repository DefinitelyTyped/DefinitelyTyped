// Type definitions for wx-js-sdk 1.2
// Project: https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421141115
// Definitions by: Bian Zhongjie <https://github.com/agasbzj>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace wx {
    /**
     * 微信配置对象
     */
    interface wxconfig {
        /**
         * 开启调试模式,调用的所有 api 的返回值会在客户端 alert 出来，若要查看传入的参数，可以在 pc 端打开，参数信息会通过 log 打出，仅在 pc 端时才会打印。
         */
        debug?: boolean;

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
    }

    /**
     * 通过 config 接口注入权限验证配置
     * @param setting 开启调试模式,调用的所有 api 的返回值会在客户端 alert 出来，若要查看传入的参数，可以在 pc 端打开，参数信息会通过 log 打出，仅在 pc 端时才会打印。
     * jsApiList[] 需要使用的 JS 接口列表
     */
    function config(setting: wxconfig): void;

    /**
     * config 信息验证后会执行 ready 方法，所有接口调用都必须在 config 接口获得结果之后，config 是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在 ready 函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在 ready 函数中。
     * @param x
     */
    function ready(x: () => void ): void;

    /**
     * config 信息验证失败会执行 error 函数，如签名过期导致验证失败，具体错误信息可以打开 config 的 debug 模式查看，也可以在返回的 res 参数中查看，对于 SPA 可以在这里更新签名。
     */
    function error(err: (res: any) => void): void;

    /**
     * 判断当前客户端版本是否支持指定 JS 接口, checkJsApi 接口是客户端6.0.2新引入的一个预留接口，第一期开放的接口均可不使用 checkJsApi 来检测
     */
    interface CheckApiConfig {
        /**
         * 需要检测的JS接口列表
         */
        jsApiList: string[];

        /**
         * 以键值对的形式返回，可用的 api 值 true，不可用为 false
         * 如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
         */
        success(res: { checkResult: { [methodName: string]: boolean }, errMsg: { msg: string } }): void;
    }

    /**
     * 判断当前客户端版本是否支持指定 JS 接口
     * @param setting CheckApiConfig 对象
     */
    function checkJsApi(setting: CheckApiConfig): void;

    interface ShareTimelineConfig {
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
        imgUrl?: string;
        success?(): void;
        cancel?(): void;
    }

    /**
     * 获取“分享到朋友圈”按钮点击状态及自定义分享内容接口
     *
     * @param setting ShareTimelineConfig 对象
     */
    function onMenuShareTimeline(setting: ShareTimelineConfig): void;

    /**
     * 消息分享对象
     */
    interface SharedAppMessage extends ShareTimelineConfig {
        /**
         * 分享描述
         */
        desc: string;

        /**
         * 分享类型, music、video 或 link，不填默认为 link
         */
        type?: string;

        /**
         * 如果 type 是 music 或 video，则要提供数据链接，默认为空
         */
        dataUrl?: string;
    }

    /**
     * 获取“分享给朋友”按钮点击状态及自定义分享内容接口
     * @param setting title 标题，desc 分享描述，link 分享链接，该链接域名或路径必须与当前页面对应的公众号 JS 安全域名一致， imgUrl 分享图标，type 分享类型, music、video 或 link，不填默认为 link
     * dataUrl 如果 type 是 music 或 video，则要提供数据链接，默认为空, success 用户确认分享后执行的回调函数, cancel 用户取消分享后执行的回调函数
     */
    function onMenuShareAppMessage(setting: SharedAppMessage): void;

    interface MenuShareQQ extends ShareTimelineConfig {
        /**
         * 分享描述
         */
        desc: string;
    }

    /**
     * “分享到QQ”按钮点击状态及自定义分享内容接口
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
     */
    function onMenuShareQzone(config: MenuShareWeibo): void;

    /**
     * count 默认9， sizeType 指定是原图还是压缩图，默认二者都有，sourceType 可以指定来源是相册还是相机，默认二者都有
     * var localIds = res.localIds; 返回选定照片的本地ID列表，localId 可以作为 img 标签的 src 属性显示图片
     */
    interface ChooseImageConfig {
        /**
         * 照片数，默认9
         */
        count?: number;

        /**
         * 可以指定是原图还是压缩图，默认二者都有
         */
        sizeType?: string[];

        /**
         * 可以指定来源是相册还是相机，默认二者都有
         */
        sourceType?: string[];

        /**
         * 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
         */
        success(res: { localIds: string[]}): void;
    }

    /**
     * 拍照或从手机相册中选图接口
     */
    function chooseImage(config: ChooseImageConfig): void;

    /**
     * 显示照片预览用的配置对象
     */
    interface PreviewImageConfig {
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
     *  预览图片接口
     * @param config
     */
    function previewImage(config: PreviewImageConfig): void;

    /**
     * localId:要上传的图片的本地 ID，由 chooseImage 接口获得
     * isShowProgressTips: 默认为1，显示进度提示
     * res: var serverId = res.serverId;  返回图片的服务器端 ID
     */
    interface UploadImageConfig {
        localId: string;
        isShowProgressTips?: number;
        success(res: any): void;
    }

    function uploadImage(config: UploadImageConfig): void;

    /**
     * serverId: 需要下载的图片的服务器端ID，由 uploadImage 接口获得
     * res: var localId = res.localId;  返回图片下载后的本地 ID
     */
    interface DownLoadImageConfig {
        serverId: string;
        isShowProgressTips?: number;
        success?(res: any): void;
    }

    function downloadImage(config: DownLoadImageConfig): void;

    /**
     * locallId: 图片的 localID
     */
    interface getLocalImgDataConfig {
        localId: string;
        success(res: any): void;
    }

    /**
     * 获取本地图片接口,此接口仅在 iOS WKWebview 下提供，用于兼容 iOS WKWebview 不支持 localId 直接显示图片的问题
     */
    function getLocalImgData(config: getLocalImgDataConfig): void;

    /**
     * 开始录音
     */
    function startRecord(): void;

    /**
     * 停止录音
     * res: var localId = res.localId;
     */
    function stopRecord(success: (res: any) => void): void;

    /**
     * 录音时间超过一分钟没有停止的时候会执行 complete 回调
     * @param complete :var localId = res.localId;
     */
    function onVoiceRecordEnd(complete: (res: any) => void): void;

    /**
     * 需要播放的音频的本地 ID，由 stopRecord 接口获得
     * @param localId
     */
    function playVoice(localId: string): void;

    /**
     * 需要暂停的音频的本地 ID，由 stopRecord 接口获得
     */
    function pauseVoice(localId: string): void;

    /**
     * 需要停止的音频的本地 ID，由 stopRecord 接口获得
     */
    function stopVoice(localId: string): void;

    /**
     * res: var localId = res.localId;  返回音频的本地 ID
     */
    function onVoicePlayEnd(success: (res: any) => void): void;

    interface UploadVoiceConfig {
         localId: string;
         isShowProgressTips?: number;
         success(res: any): void;
    }

    /**
     * 上传语音接口,上传语音有效期3天，可用微信多媒体接口下载语音到自己的服务器，
     * 此处获得的 serverId 即 media_id，参考文档 .目前多媒体文件下载接口的频率限制为10000次/天，如需要调高频率，请登录微信公众平台，在开发 - 接口权限的列表中，申请提高临时上限。
     * @param config res: var serverId = res.serverId; 返回音频的服务器端 ID
     */
    function uploadVoice(config: UploadVoiceConfig): void;

    /**
     * serverId:需要下载的音频的服务器端 ID，由 uploadVoice 接口获得
     * isShowProgressTips: 默认为1，显示进度提示
     */
    interface downloadVoiceConfig {
         serverId: string;
         isShowProgressTips?: number;
         success(res: any): void;
     }

    function downloadVoice(config: downloadVoiceConfig): void;

    /**
     * 识别音频并返回识别结果接口
     * @param config
     */
    function translateVoice(config: UploadVoiceConfig): void;

    /**
     * 获取网络状态, var networkType = res.networkType; 返回网络类型 2g，3g，4g，wifi
     */
    function getNetworkType(success: (res: { networkType: string }) => void): void;

    interface OpenLocationConfig {
        latitude?: number;
        longitude?: number;

        /**
         * 位置名
         */
        name?: string;

        /**
         * 地址详情说明
         */
        address?: string;

        /**
         * 地图缩放级别,整形值,范围从1~28。默认为最大
         */
        scale?: number;

        /**
         * 在查看位置界面底部显示的超链接, 可点击跳转
         */
        infoUrl?: string;
    }

    /**
     * 微信内置地图查看位置接口
     * @param config name: 位置名, scale: 地图缩放级别, 整形值, 范围从1~28。默认为最大
     * infoUrl: 在查看位置界面底部显示的超链接, 可点击跳转
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

    interface GetLocationConfig {
        /**
         * 默认为 wgs84 的 gps 坐标，如果要返回直接给 openLocation 用的火星坐标，可传入'gcj02'
         */
        type?: string;
        success(res: Location): void;
    }

    /**
     * 获取地理位置接口
     * @param config
     */
    function getLocation(config: GetLocationConfig): void;

    /**
     * ticket:摇周边的业务 ticket, 系统自动添加在摇出来的页面链接后面
     *
     */
    interface StartSearchBeaconsConfig {
        ticket: string;
        complete(argv: any): void;
    }

    /**
     * 开启查找周边 ibeacon 设备接口
     * @param config
     */
    function startSearchBeacons(config: StartSearchBeaconsConfig): void;

    interface StopSearchBeaconsConfig {
        complete(res: any): void;
    }

    /**
     * 关闭查找完成后的回调函数
     */
    function stopSearchBeacons(config: StopSearchBeaconsConfig): void;

    interface onSearchBeaconsConfig {
        complete(argv: any): void;
    }
    /**
     * 监听周边 ibeacon 设备接口,
     * 摇一摇周边接口使用注意事项及更多返回结果说明，请参考：摇一摇周边获取设备信息
     */
    function onSearchBeacons(config: onSearchBeaconsConfig): void;

    /**
     * 关闭当前网页窗口接口
     */
    function closeWindow(): void;

    interface MenuItemsConfig {
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

    /**
     * needResult: 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
     * scanType:["qrCode","barCode"], 可以指定扫二维码还是一维码，默认二者都有
     * success: var result = res.resultStr; 当 needResult 为 1 时，扫码返回的结果
     */
    interface ScanQRCodeConfig {
        needResult?: number;
        scanType?: string[];
        success?(res: any): void;
    }

    /**
     * 调起微信扫一扫接口
     */
    function scanQRCode(config: ScanQRCodeConfig): void;

    /**
     * productId:商品id
     * viewType: 0.默认值，普通商品详情页; 1.扫一扫商品详情页; 2.小店商品详情页
     */
    interface OpenProductSpecificViewConfig {
        productId: string;
        viewType?: string;
    }

    /**
     * 跳转微信商品页接口
     * @param config
     */
    function openProductSpecificView(config: OpenProductSpecificViewConfig): void;

    /**
     * shopId: 门店Id
     * cardType:卡券类型
     * cardId:卡券Id
     * timestamp:卡券签名时间戳
     * nonceStr:卡券签名随机串
     * signtype:签名方式，默认'SHA1'
     * cardsign:卡券签名
     * success: var cardList= res.cardList; 用户选中的卡券列表信息
     */
    interface ChooseCardConfig {
        shopId?: string;
        cardType?: string;
        cardId?: string;
        timestamp: number;
        nonceStr: string;
        signType: string;
        cardSign: string;
        success?(res: any): void;
    }

    /**
     * 拉取适用卡券列表并获取用户选择信息
     * @param config
     */
    function chooseCard(config: ChooseCardConfig): void;

    class AddCardObj {
        cardId: string;
        cardExt: string;
    }

    /**
     * res: var cardList = res.cardList; 添加的卡券列表信息
     */
    interface AddCardConfig {
        cardList: AddCardObj[];
        success?(res: any): void;
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
    interface OpenCardConfig {
        cardList: OpenCardObj[];
    }

    /**
     * 查看微信卡包中的卡券接口
     */
    function openCard(config: OpenCardConfig): void;

    /**
     * timestamp: 支付签名时间戳，注意微信jssdk中的所有使用 timestamp 字段均为小写。但最新版的支付后台生成签名使用的 timeStamp 字段名需大写其中的S字符
     * nonceStr: 支付签名随机串，不长于 32 位
     * package: 统一支付接口返回的 prepay_id 参数值，提交格式如：prepay_id=***
     * signType: 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
     * paySign: 支付签名
     * success: 支付成功后的回调函数
     */
    interface ChooseWXPayConfig {
        timestamp: number;
        nonceStr: string;
        package: string;
        signType?: string;
        paySign: string;
        success(res: any): void;
    }

    /**
     * 发起一个微信支付请求
     * @param config
     */
    function chooseWXPay(config: ChooseWXPayConfig): void;
}
