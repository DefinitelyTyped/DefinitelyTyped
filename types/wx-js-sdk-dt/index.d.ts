
export namespace wx {

    export interface wxconfig {
        debug: boolean; // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: string;  //公众号的唯一标识
        timestamp: number;  //签名的时间戳
        nonceStr: string;  //签名的随机串
        signature: string;  //签名
        jsApiList: string[]  //需要使用的JS接口列表
    }

    /**
     * 通过config接口注入权限验证配置
     * @param setting 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
     * jsApiList[] 需要使用的JS接口列表
     */
    export const config: (setting: wxconfig) => void

    /**
     * config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
     * @param x
     */
    export const ready: (x: () => void ) => void;

    /**
     * config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
     */
    export const error: (err: (res: any) => void) => void


    /**
     * 判断当前客户端版本是否支持指定JS接口,checkJsApi接口是客户端6.0.2新引入的一个预留接口，第一期开放的接口均可不使用checkJsApi来检测
     */
     export interface  checkApiConfig {
        jsApiList: string[];  //需要检测的JS接口列表

        // 以键值对的形式返回，可用的api值true，不可用为false
        // 如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
        success: (res: {checkResult: {[methodName: string]: boolean}, errMsg: {msg: string}}) => void
    }

    /**
     * 判断当前客户端版本是否支持指定JS接口
     * @param setting
     */
    export const checkJsApi: (setting: checkApiConfig) => void

    export interface shareTimelineConfig {
        title: string;  // 分享标题
        link: string;  // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: string;  // 分享图标
        success: () => void;
        cancel: () => void
    }

    /**
     * 获取“分享到朋友圈”按钮点击状态及自定义分享内容接口
     *
     * @param setting itle分享标题 ,link分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致, imgUrl分享图标, success用户确认分享后执行的回调函数
     */
    export const onMenuShareTimeline: (setting: shareTimelineConfig) => void


    export interface shareAppMessage extends shareTimelineConfig {
        desc: string;  // 分享描述
        type?: string;  // 分享类型,music、video或link，不填默认为link
        dataUrl?: string;  // 如果type是music或video，则要提供数据链接，默认为空
    }

    /**
     * 获取“分享给朋友”按钮点击状态及自定义分享内容接口
     * @param setting title 标题，desc 分享描述，link 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致， imgUrl 分享图标，type 分享类型,music、video或link，不填默认为link
     * dataUrl如果type是music或video，则要提供数据链接，默认为空, success 用户确认分享后执行的回调函数, cancel 用户取消分享后执行的回调函数
     */
    export const onMenuShareAppMessage: (setting: shareAppMessage) => void

    export interface menuShareQQ extends shareTimelineConfig {
        desc: string;  // 分享描述
    }

    /**
     * “分享到QQ”按钮点击状态及自定义分享内容接口
     */
    export const onMenuShareQQ: (config: menuShareQQ) => void


    export interface menuShareWeibo extends shareTimelineConfig {
        desc: string;  // 分享描述
    }

    /**
     * 获取“分享到腾讯微博”按钮点击状态及自定义分享内容接口
     */
    export const onMenuShareWeibo: (config: menuShareWeibo) => void


    export interface menuShareQZone extends menuShareWeibo {
    }

    /**
     * 获取“分享到QQ空间”按钮点击状态及自定义分享内容接口
     */
    export const onMenuShareQzone: (config: menuShareQZone) => void

    /**
     * count默认9， sizeType指定是原图还是压缩图，默认二者都有，sourceType 可以指定来源是相册还是相机，默认二者都有
     * var localIds = res.localIds; 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
     */
    export interface chooseImageConfig {
        count: number;  // 默认9
        sizeType: string[];  // 可以指定是原图还是压缩图，默认二者都有
        sourceType: string[];  // 可以指定来源是相册还是相机，默认二者都有
        success: (res: any) => void  // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
    }

    /**
     * 拍照或从手机相册中选图接口
     */
    export const chooseImage: (config: chooseImageConfig) => void

    /**
     * current:当前显示图片的http链接, urls:需要预览的图片http链接列表
     */
    export interface previewImageConfig {
        current: string;  // 当前显示图片的http链接
        urls: string[];  // 需要预览的图片http链接列表
    }

    /**
     *  预览图片接口
     * @param config
     */
    export const previewImage: (config: previewImageConfig) => void

    /**
     * localId:要上传的图片的本地ID，由chooseImage接口获得
     * isShowProgressTips:默认为1，显示进度提示
     * res: var serverId = res.serverId;  返回图片的服务器端ID
     */
    export interface uploadImageConfig {
        localId: string;
        isShowProgressTips?: number;
        success: (res: any) => void
    }

    export const uploadImage: (config: uploadImageConfig) => void

    /**
     * serverId:需要下载的图片的服务器端ID，由uploadImage接口获得
     * res: var localId = res.localId;  返回图片下载后的本地ID
     */
    export interface downLoadImageConfig {
        serverId: string;
        isShowProgressTips?: number;
        success: (res: any) => void
    }

    export const downLoadImage: (config: downLoadImageConfig) => void

    /**
     * locallId: 图片的localID
     */
    export interface getLocalImgDataConfig {
        localId: string;
        success: (res: any) => void
    }

    /**
     * 获取本地图片接口,此接口仅在 iOS WKWebview 下提供，用于兼容 iOS WKWebview 不支持 localId 直接显示图片的问题
     */
    export const getLocalImgData: (config: getLocalImgDataConfig) => void

    /**
     * 开始录音
     */
    export const startRecord: () => void

    /**
     * 停止录音
     * res: var localId = res.localId;
     */
    export const stopRecord: (success: (res: any) => void) => void

    /**
     * 录音时间超过一分钟没有停止的时候会执行 complete 回调
     * @param complete :var localId = res.localId;
     */
    export const onVoiceRecordEnd: (complete: (res: any) => void) => void

    /**
     * 需要播放的音频的本地ID，由stopRecord接口获得
     * @param localId
     */
    export const playVoice: (localId: string) => void

    /**
     * 需要暂停的音频的本地ID，由stopRecord接口获得
     */
    export const pauseVoice: (localId: string) => void

    /**
     * 需要停止的音频的本地ID，由stopRecord接口获得
     */
    export const stopVoice: (localId: string) => void

    /**
     * res: var localId = res.localId;  返回音频的本地ID
     */
     export const onVoicePlayEnd: (success: (res: any) => void) => void

     interface uploadVoiceConfig {
         localId: string;
         isShowProgressTips?: number;
         success: (res: any) => void
     }

    /**
     * 上传语音接口,上传语音有效期3天，可用微信多媒体接口下载语音到自己的服务器，
     * 此处获得的 serverId 即 media_id，参考文档 .目前多媒体文件下载接口的频率限制为10000次/天，如需要调高频率，请登录微信公众平台，在开发 - 接口权限的列表中，申请提高临时上限。
     * @param config res: var serverId = res.serverId; 返回音频的服务器端ID
     */
     export const uploadVoice: (config: uploadVoiceConfig) => void

    /**
     * serverId:需要下载的音频的服务器端ID，由uploadVoice接口获得
     * isShowProgressTips: 默认为1，显示进度提示
     */
     export interface downloadVoiceConfig {
         serverId: string;
         isShowProgressTips?: number;
         success: (res: any) => void
     }

     export const downloadVoice: (config: downloadVoiceConfig) => void

    /**
     * success: res.translateResult,语音识别的结果
     */
    export interface translateVoiceConfig extends uploadVoiceConfig {
    }

    /**
     * 识别音频并返回识别结果接口
     * @param config
     */
    export const translateVoice: (config: translateVoiceConfig) => void

    /**
     * 获取网络状态, var networkType = res.networkType; // 返回网络类型2g，3g，4g，wifi
     */
    export const getNetworkType: (success: (res: any) => void) => void

    interface openLocationConfig {
        latitude: number;
        longitude: number;
        name: string;  // 位置名
        address: string;  // 地址详情说明
        scale: number;  // 地图缩放级别,整形值,范围从1~28。默认为最大
        infoUrl: string;  // 在查看位置界面底部显示的超链接,可点击跳转
    }

    /**
     * 微信内置地图查看位置接口
     * @param config  name:位置名,scale:地图缩放级别,整形值,范围从1~28。默认为最大
     * infoUrl: 在查看位置界面底部显示的超链接,可点击跳转
     */
    export const openLocation: (config: openLocationConfig) => void

    export interface Location {
        latitude: number;
        longitude: number;
        speed: number;  // 速度，以米/每秒计
        accuracy: number;  // 位置精度
    }

    export interface getLocationConfig {
        type: string  //默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
        success: (res: Location) => void
    }

    /**
     * 获取地理位置接口
     * @param config
     */
    export const getLocation: (config: getLocationConfig) => void


    /**
     * ticket:摇周边的业务ticket, 系统自动添加在摇出来的页面链接后面
     *
     */
    export interface startSearchBeaconsConfig {
        ticket: string;
        complete: (argv: any) => void
    }

    /**
     * 开启查找周边ibeacon设备接口
     * @param config
     */
    export const startSearchBeacons: (config: startSearchBeaconsConfig) => void


    export interface stopSearchBeaconsConfig {
        complete: (res: any) => void
    }
    /**
     * 关闭查找完成后的回调函数
     */
    export const stopSearchBeacons: (config: stopSearchBeaconsConfig) => void


    export interface onSearchBeaconsConfig {
        complete: (argv: any) => void
    }
    /**
     * 监听周边ibeacon设备接口,
     * 摇一摇周边接口使用注意事项及更多返回结果说明，请参考：摇一摇周边获取设备信息
     */
    export const onSearchBeacons: (config: onSearchBeaconsConfig) => void

    /**
     * 关闭当前网页窗口接口
     */
    export const closeWindow: () => void


    export interface menuItemsConfig {
        menuList: string[]  // 要隐藏/显示的菜单项，只能隐藏“传播类”和“保护类”按钮
    }

    /**
     * 批量隐藏功能按钮接口
     */
    export const hideMenuItems: (config: menuItemsConfig) => void

    /**
     * 批量显示功能按钮接口
     */
    export const showMenuItems: (config: menuItemsConfig) => void

    /**
     * 隐藏所有非基础按钮接口
     */
    export const hideAllNonBaseMenuItem: () => void

    /**
     * 显示所有功能按钮接口
     */
    export const showAllNonBaseMenuItem: () => void

    /**
     * needResult: 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
     * scanType:["qrCode","barCode"],可以指定扫二维码还是一维码，默认二者都有
     * success: var result = res.resultStr; 当needResult 为 1 时，扫码返回的结果
     */
    export interface scanQRCodeConfig {
        needResult?: number;
        scanType?: string[];
        success: (res: any) => void
    }

    /**
     * 调起微信扫一扫接口
     */
    export const scanQRCode: (config: scanQRCodeConfig) => void

    /**
     * productId:商品id
     * viewType: 0.默认值，普通商品详情页1.扫一扫商品详情页2.小店商品详情页
     */
    export interface openProductSpecificViewConfig {
        productId: string;
        viewType?: string;
    }

    /**
     * 跳转微信商品页接口
     * @param config
     */
    export const openProductSpecificView: (config: openProductSpecificViewConfig) => void


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
    export interface chooseCardConfig {
        shopId?: string;
        cardType?: string;
        cardId?: string;
        timestamp: number;
        nonceStr: string;
        signType: string;
        cardSign: string;
        success: (res: any) => void
    }

    /**
     * 拉取适用卡券列表并获取用户选择信息
     * @param config
     */
    export const chooseCard: (config: chooseCardConfig) => void

    export class AddCardObj {
        cardId: string;
        cardExt: string;
    }

    /**
     * res: var cardList = res.cardList;  添加的卡券列表信息
     */
    export interface addCardConfig {
        cardList: AddCardObj[];
        success: (res: any) => void;
    }

    /**
     * 批量添加卡券接口
     */
    export const addCard: (config: addCardConfig) => void

    export class OpenCardObj {
        cardId: string;
        code: string;
    }

    /**
     * 需要打开的卡券列表
     */
    export interface openCardConfig {
        cardList: OpenCardObj[];
    }

    /**
     * 查看微信卡包中的卡券接口
     */
    export const openCard: (config: openCardConfig) => void

    /**
     * timestamp: 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
     * nonceStr: 支付签名随机串，不长于 32 位
     * package: 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***
     * signType: 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
     * paySign: 支付签名
     * success: 支付成功后的回调函数
     */
    export interface chooseWXPayConfig {
        timestamp: number;
        nonceStr: string;
        package: string;
        signType: string;
        paySign: string;
        success: (res: any) => void;
    }

    /**
     * 发起一个微信支付请求
     * @param config
     */
    export const chooseWXPay: (config: chooseWXPayConfig) => void

}



