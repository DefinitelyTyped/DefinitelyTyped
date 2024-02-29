/**
 * “浙里办”政务中台 JSBridge API
 * This API just for [浙里办](https://apps.apple.com/us/app/zhe-jiang-zheng-wu-fu-wu/id910260096)
 * 1. ZWJSBridge接入方式
 *  ```js
 *      <script type="text/javascript" src="//assets.zjzwfw.gov.cn/assets/ZWJSBridge/1.1.0/zwjsbridge.js"></script>
 *  ```
 * 2. 初始化: 通过 `ZWJSBridge.onReady(callback)` 初始化jsapi，初始化完成即onReady之后再调用jsapi
 *  ```js
 *      ZWJSBridge.onReady(() => {
 *          console.log('初始化完成后，执行bridge方法')
 *      })
 *  ```
 */

/**
 * 文件上传参数
 */
interface UploadFileOptions {
    /** 对应 input 文件选择 accept 属性说明 在微信端会转化为 image/video/file/all */
    type?: string;
    /** 服务端接受文件流上传地址 */
    url: string;
    /** 上传文件数量 默认为1 */
    count?: number;
}

/**
 * 文件上传返回结果
 */
interface UploadFileResult {
    /** 上传状态 */
    status: "success" | "fail";
    /** 上传文件地址 */
    filePath: string[];
    /** 选择文件名称 */
    fileName: string[];
    /** 成功/错误信息 */
    msg: string;
}

/**
 * 文件下载参数
 */
interface DownloadFileOptions {
    /** 文件下载地址 */
    url: string;
}

/**
 * 文件下载返回结果
 */
interface DownloadFileResult {
    /** 下载成功标识 */
    success: boolean;
}

interface ZWJSBridge {
    /**
     * 初始化jsapi，初始化完成即onReady之后再调用jsapi。
     * @param callBack 初始化成功回调
     */
    onReady(callBack: () => void): void;

    /**
     * 获取单点的路过的票据
     */
    ssoTicket(): Promise<{
        /** 是否支持获取 */
        result: boolean;
        /** 票据，可通过此票据获取用户信息 */
        ticketId?: string;
    }>;

    /***********    缓存     ***********/
    /**
     * 存储数据缓存
     */
    setLocalStorage(options: { key: string; value: string }): Promise<{
        result: string;
    }>;
    /**
     * 读取数据缓存
     */
    getLocalStorage(options?: { key: string }): Promise<Record<string, any>>;
    /**
     * 读取数据缓存
     */
    removeLocalStorage(options: { key: string }): Promise<{
        result: string;
    }>;

    /***********    Navigation窗口类     ***********/
    /**
     * 设置标题
     */
    setTitle(options: { title?: string }): Promise<{
        result: string;
    }>;

    /**
     * 设置菜单
     */
    setMenu(options: {
        items?: Array<{
            // 按钮ID。点击后客戶端返回这个ID标识
            id?: string;
            // 图标地址。
            iconUrl?: string;
            // 按钮的说明文字。
            text?: string;
            // icon缩放模式： 默认0
            // 0表示 不保持纵横比缩放图片，使图片的宽高完全拉伸至填满image组件
            // 1表示保持纵横比缩放图片，使图片的长边能完全显示出来。也就是说，可以完整地将图片显示出来。
            type?: 0 | 1;
        }>;
    }): Promise<{
        id?: string;
    }>;

    /**
     * 新开窗口
     */
    openLink(options: {
        /** 重新发起单点 适用于微信小程序环境 */
        type?: "reload";
        /** 重定向地址 */
        url?: string;
    }): Promise<{
        ticketId?: string;
    }>;

    /**
     * 关闭当前页面
     */
    close(): Promise<{}>;

    /***********    用户     ***********/
    /**
     * 获取用户类型
     */
    getUserType(): Promise<{
        /**
         * 用户类型，取值: 0:公务员 1:除公务员以外的个人 2:法人
         * 公务员属于特殊类型的个人用户，当应用服务需要同时支持个人和法人时，可通过getUserType接口获取APP当前登录用户类型，然后发起个人或法人的登录认证，0或1都属于个人用户，2为法人用户。
         */
        userType: string;
    }>;

    /**
     * 支付宝扫脸认证
     * 该接口涉及业务签约，一旦服务到期后，将改变相应接口的调用方式，请及时按照本文档进行进行适配。
     *
     * 错误码
     * 1001 支付宝认证失败
     * 1003 姓名或身份证号错误
     */
    zmAuthentication(parasm: {
        /** 身份证号，默认值为当前登录账号所属身份证号码 */
        certNo?: string;
        /** 姓名，默认值为当前登录账号所属名字 */
        certName?: string;
    }): Promise<{
        /**
         * success:成功, fail:失败, complete:完成。
         */
        status: string;
        msg: string;
        /** 成功回调时为true, 否则为false */
        pass: boolean;
        /** 从后台返回的用户票据信息 */
        passId: string;
    }>;

    /***********    Device设备类     ***********/
    /**
     * 打电话
     */
    phoneCall(options: {
        /** 电话号码 */
        corpId: string;
    }): Promise<{}>;

    /**
     * 发短信
     */
    sms(options?: {
        /** 电话号码 */
        phoneNumber?: string;
        /** 短信内容 */
        text?: string;
    }): Promise<{}>;

    /**
     * 获取经纬度信息
     *
     * 错误码
     * 1001 未开启定位权限
     * 1002 定位失败
     */
    getLocation(): Promise<{
        /** 经度 */
        longitude: number;
        /** 纬度 */
        latitude: number;
        /** 城市名称 */
        cityName: string;
        /** 区域名称 */
        region: string;
        /** 地区编码 */
        townCode: string;
        /** 详细地址 */
        detailAddress: string;
    }>;

    /**
     * 获取设备唯一标识
     */
    getUUID(): Promise<{
        uuid: string;
    }>;

    /**
     * 获取网络类型
     */
    getNetworkType(): Promise<{
        /**
         * 网络类型，取值: wifi、2g、3g、4g、unknown、none表示离线
         */
        result: string;
    }>;

    /**
     * 向剪贴板中复制数据。
     */
    setClipboardData(parasm: { text: string }): Promise<{}>;

    /**
     * 向剪贴板中获取数据。
     * @deprecated 涉及用户隐私问题，已下线
     */
    getClipboardData(): Promise<any>;

    /***********    业务类     ***********/
    /**
     * 埋点
     */
    monitorTrace(options: {
        /** 埋点类型: success:成功 fail:失败 count:计数 timeCost:时延 pageIn:进入页面 pageOut:离开页面 exposure:曝光 click:单击 */
        monitorType: string;
        /** 模块 */
        module?: string;
        /** 模块点 */
        modulePoint?: string;
        /** 业务参数 */
        bizInfo?: Record<string, any>;
        /** 错误码 */
        errorCode?: string;
        /** 错误信息 */
        errorMsg?: string;
        /** 计数 */
        count?: number;
        /** 时延 */
        timeCost?: number;
        /** 页面 */
        pageName?: string;
        /** 行动点 */
        actionName?: string;
    }): Promise<any>;

    /**
     * 获取当前地区
     */
    getCurrentLocationCity(): Promise<{
        /** 行政区划编码 */
        cityId: string;
        /** 行政区划名 */
        cityName: string;
        webId: string;
        orgCode: string;
    }>;

    /**
     * 选择图片
     *
     * 错误码
     * 1001 没有摄像头或摄像头不可用
     * 1002 没有拍照权限
     * 1003 没有图片库权限
     * 1004 图片上传失败
     */
    chooseImage(options: {
        /**
         * 是否将选取的图片上传到服务器。
         * 默认值为false，图片不上传到服务器。
         * 值为true时，图片上传到服务器，上传成功后返回公网可访问的URL。
         */
        upload?: boolean;
    }): Promise<{
        /** Base64编码格式的图片数据数组 */
        picSrc: string[];
        /** upload取值为true时，picPath为图片的网 络地址数组，支持下载 */
        picPath: string[];
    }>;

    /**
     * 图片保存到本地
     */
    saveImage(options: { url: string }): Promise<any>;

    /**
     * 扫一扫
     *
     * 错误码
     * 1001 没有摄像头或摄像头不可用
     * 1002 没有拍照权限
     * 1003 没有图片库权限
     * 5 未初始化
     */
    scan(options: {
        /**
         * type: "qrCode"
         */
        type: "qrCode";
    }): Promise<{
        text: string;
    }>;

    /**
     * 启用支付功能
     * 实际支付结果以后端查询接口为准，成功回调仅表示支付宝支付调用成功，相关数据可能不会同步至后端。若回调失败，可通过返回数字获取失败信息。
     *
     * error错误码
     * 8000
     * 支付正在处理中，支付结果未知，请查询商户订单列表中订单的支付状态。
     * 40000 订单支付失败。
     * 5000 重复请求。
     * 6001 用户中途取消支付。
     * 60002 网络连接出错。
     * 60004 支付结果未知，请查询商户订单列表中订单的支付状态。
     */
    pay(options: {
        /**
         * 支付平台，取值: 1:支付宝 2:微信，微信支付暂不支持 3:银联云闪付
         */
        platform: 1 | 2 | 3;
        /**
         * 等待支付的订单信息
         */
        credential: string;
        /**
         * 是否为测试环境，缺省为False。支付宝只支持Android端
         */
        inSandBox?: boolean;
    }): Promise<any>;

    /**
     * 文件上传
     *
     * @param options - 文件上传参数 {@link UploadFileOptions}
     *
     * @returns 异步返回 {@link UploadFileResult} 对象
     *
     * @example
     * ZWJSBridge.uploadFile({
     *   type: 'image/*',
     *   url: 'https://xxx.com.cn/uploadFile',
     *   count: 1
     * }).then(res => {
     *   console.log(res)
     *  })
     */
    uploadFile(options: UploadFileOptions): Promise<UploadFileResult>;

    /**
     * 文件下载
     *
     * @param options - 文件下载参数 {@link DownloadFileOptions}
     *
     * @returns 异步返回 {@link DownloadFileResult} 对象
     *
     * @example
     * ZWJSBridge.downloadFile({
     *   url: 'https://xxx.com.cn/079898a47d1249f4bf509928b2afbf83.xls'
     * }).then(res => {
     *   console.log(res)
     * })
     */
    downloadFile(options: DownloadFileOptions): Promise<DownloadFileResult>;

    /***********    UI界面类     ***********/
    /**
     * 确认框
     */
    confirm(options: {
        /** 确认框的标题 */
        title?: string;
        /** 确认框中的实际消息内容 */
        message?: string;
        /** 确认框中的可单击按钮 */
        buttonLabels?: string[];
    }): Promise<{
        /** 确认框中可单击按钮的索引值，Number类型，从0开始 */
        buttonIndex: number;
    }>;

    /**
     * 提示框
     */
    alert(options: {
        /** 标题 */
        title?: string;
        /** 消息内容 */
        message?: string;
        /** 按钮名称 */
        buttonName?: string;
    }): Promise<any>;

    /**
     * 弱提示
     */
    toast(options: {
        /**
         * 根据toast类型展示相应图标，取值:
         * none，默认值
         * success
         * fail
         * exception，值为exception时，必须上传文字信息。
         */
        type?: "none" | "success" | "fail" | "exception";
        /** 消息内容 */
        message?: string;
        /** 消息显示持续时间，单位毫秒，默认值为2000s */
        duration?: number;
    }): Promise<any>;

    /**
     * 文本输入框
     */
    prompt(options: {
        /**
         * 取值:
         * text ，缺省值
         * number
         * password
         */
        inputType?: "text" | "number" | "password";
        /** 文本框中的实际消息内容 */
        message?: string;
        /** 文本框的标题 */
        title?: string;
        /** 占位符，缺省为空 */
        placeholder?: string;
        /** 按钮名称，默认为取消 */
        cancelButton?: string;
        /** 按钮名称，默认为确定 */
        confirmButton?: string;
    }): Promise<{
        /** 可单击按钮的索引值，从0开始 */
        buttonIndex: number;
        /** 输入的值 */
        value: string;
    }>;

    /**
     * 单选列表
     */
    actionSheet(options: {
        /** 单选列表的标题 */
        title: string;
        /** 其他按钮列表 */
        otherButtons: string[];
        /** 取消按钮文本 */
        cancelButton?: string;
    }): Promise<{
        /** 可单击按钮的索引值，从0开始 */
        buttonIndex: number;
        /** 输入的值 */
        value: string;
    }>;

    /**
     * 等待蒙版显示
     */
    showPreloader(options: {
        /** Loading显示的字符，空表示不显示文字 */
        text?: string;
        /** 设置是否显示 Icon，默认值为true，显示Icon */
        showIcon?: boolean;
        /** 设置延迟显示的时长，单位为毫秒，默认值为0。如果在延迟显示时长之前调用hidePreloader则不会显示文字 */
        delay?: number;
    }): Promise<any>;

    /**
     * 等待蒙版隐藏
     */
    hidePreloader(): Promise<any>;

    /**
     * 选择城市
     */
    selectCity(): Promise<{
        /** 城市名称 */
        cityName: string;
        cityId: string;
        webId: string;
        orgCode: string;
    }>;

    /**
     * 分享
     * 1001 分享至不支持的平台
     * 1002 分享失败
     */
    share(options: {
        /** 分享链接，不能为空 */
        url: string;
        /** 分享标题 */
        title?: string;
        /** 分享内容 */
        content?: string;
        /** 分享图片的路径 */
        image?: string;
    }): Promise<any>;

    /**
     * 直接分享
     * 1001 分享至不支持的平台
     * 1002 分享失败
     * -1 用户取消
     * 5 未初始化
     */
    directShare(options: {
        /** 分享链接，不能为空 */
        url: string;
        /**
         * 内容分享通道，不区分大小写。
         * 取值:
         * wechat，微信好友。
         * wechat_moments，微信朋友圈。
         * weibo，微博。
         * dingtlk，钉钉。
         */
        channel?: "wechat" | "wechat_moments" | "weibo" | "dingtlk";
        /** 分享标题 */
        title?: string;
        /** 分享内容 */
        content?: string;
        /** 分享图片的路径 */
        image?: string;
    }): Promise<any>;

    /**
     * 获取ui样式
     */
    getUiStyle(): Promise<{
        /**
         * normal: 常规版
         * elder: 长辈版
         */
        uiStyle: string;
    }>;

    /***********    请求类     ***********/
    /**
     * 无线网关
     *
     * @deprecated 使用 import Mgop from '@aligov/jssdk-mgop' 代替
     */
    egop(options: {
        host?: string;
        /** 业务方mgop api名字 */
        api?: string;
        /** 网络请求类型，取值为POST 或 者GET */
        method?: string;
        /** 网络请求需要附加的header */
        header?: Record<string, string>;
        /** 网络请求附加的参数 */
        param?: any;
        appKey: string;
    }): Promise<any>;
}
declare var ZWJSBridge: ZWJSBridge;
