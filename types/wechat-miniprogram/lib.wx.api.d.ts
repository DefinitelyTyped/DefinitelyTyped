declare namespace WechatMiniprogram {
    interface AccessFailCallbackResult {
        /** 错误信息
         *
         * 可选值：
         * - 'fail no such file or directory ${path}': 文件/目录不存在;
         * - 'fail sdcard not mounted': Android sdcard 挂载失败; */
        errMsg: string;
    }
    interface AccessOption {
        /** 要判断是否存在的文件/目录路径 (本地路径) */
        path: string;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: AccessCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: AccessFailCallback;
        /** 接口调用成功的回调函数 */
        success?: AccessSuccessCallback;
    }
    /** 帐号信息 */
    interface AccountInfo {
        /** 小程序帐号信息 */
        miniProgram: MiniProgram;
        /** 插件帐号信息（仅在插件中调用时包含这一项） */
        plugin: Plugin;
    }
    interface AddCardOption {
        /** 需要添加的卡券列表 */
        cardList: AddCardRequestInfo[];
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: AddCardCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: AddCardFailCallback;
        /** 接口调用成功的回调函数 */
        success?: AddCardSuccessCallback;
    }
    /** 需要添加的卡券列表 */
    interface AddCardRequestInfo {
        /** 卡券的扩展参数。需将 CardExt 对象 JSON 序列化为**字符串**传入 */
        cardExt: string;
        /** 卡券 ID */
        cardId: string;
    }
    /** 卡券添加结果列表 */
    interface AddCardResponseInfo {
        /** 卡券的扩展参数，结构请参考下文 */
        cardExt: string;
        /** 用户领取到卡券的 ID */
        cardId: string;
        /** 加密 code，为用户领取到卡券的code加密后的字符串，解密请参照：[code 解码接口](https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1499332673_Unm7V) */
        code: string;
        /** 是否成功 */
        isSuccess: boolean;
    }
    interface AddCardSuccessCallbackResult {
        /** 卡券添加结果列表 */
        cardList: AddCardResponseInfo[];
        errMsg: string;
    }
    interface AddCustomLayerOption {
        /** 个性化图层id */
        layerId: string;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: AddCustomLayerCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: AddCustomLayerFailCallback;
        /** 接口调用成功的回调函数 */
        success?: AddCustomLayerSuccessCallback;
    }
    interface AddFileToFavoritesOption {
        /** 要收藏的文件地址，必须为本地路径或临时路径 */
        filePath: string;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: AddFileToFavoritesCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: AddFileToFavoritesFailCallback;
        /** 自定义文件名，若留空则使用filePath中的文件名 */
        fileName?: string;
        /** 接口调用成功的回调函数 */
        success?: AddFileToFavoritesSuccessCallback;
    }
    interface AddGroundOverlayOption {
        /** 图片覆盖的经纬度范围 */
        bounds: MapBounds;
        /** 图片图层 id */
        id: string;
        /** 图片路径，支持网络图片、临时路径、代码包路径 */
        src: string;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: AddGroundOverlayCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: AddGroundOverlayFailCallback;
        /** 图层透明度 */
        opacity?: number;
        /** 接口调用成功的回调函数 */
        success?: AddGroundOverlaySuccessCallback;
        /** 是否可见 */
        visible?: boolean;
        /** 图层绘制顺序 */
        zIndex?: number;
    }
    interface AddMarkersOption {
        /** 同传入 map 组件的 marker 属性 */
        markers: any[];
        /** 是否先清空地图上所有 marker */
        clear?: boolean;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: AddMarkersCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: AddMarkersFailCallback;
        /** 接口调用成功的回调函数 */
        success?: AddMarkersSuccessCallback;
    }
    interface AddPhoneCalendarOption {
        /** 开始时间的 unix 时间戳 */
        startTime: number;
        /** 日历事件标题 */
        title: string;
        /** 是否提醒，默认 true */
        alarm?: boolean;
        /** 提醒提前量，单位秒，默认 0 表示开始时提醒 */
        alarmOffset?: number;
        /** 是否全天事件，默认 false */
        allDay?: boolean;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: AddPhoneCalendarCompleteCallback;
        /** 事件说明 */
        description?: string;
        /** 结束时间的 unix 时间戳，默认与开始时间相同 */
        endTime?: string;
        /** 接口调用失败的回调函数 */
        fail?: AddPhoneCalendarFailCallback;
        /** 事件位置 */
        location?: string;
        /** 接口调用成功的回调函数 */
        success?: AddPhoneCalendarSuccessCallback;
    }
    interface AddPhoneContactOption {
        /** 名字 */
        firstName: string;
        /** 联系地址城市 */
        addressCity?: string;
        /** 联系地址国家 */
        addressCountry?: string;
        /** 联系地址邮政编码 */
        addressPostalCode?: string;
        /** 联系地址省份 */
        addressState?: string;
        /** 联系地址街道 */
        addressStreet?: string;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: AddPhoneContactCompleteCallback;
        /** 电子邮件 */
        email?: string;
        /** 接口调用失败的回调函数 */
        fail?: AddPhoneContactFailCallback;
        /** 住宅地址城市 */
        homeAddressCity?: string;
        /** 住宅地址国家 */
        homeAddressCountry?: string;
        /** 住宅地址邮政编码 */
        homeAddressPostalCode?: string;
        /** 住宅地址省份 */
        homeAddressState?: string;
        /** 住宅地址街道 */
        homeAddressStreet?: string;
        /** 住宅传真 */
        homeFaxNumber?: string;
        /** 住宅电话 */
        homePhoneNumber?: string;
        /** 公司电话 */
        hostNumber?: string;
        /** 姓氏 */
        lastName?: string;
        /** 中间名 */
        middleName?: string;
        /** 手机号 */
        mobilePhoneNumber?: string;
        /** 昵称 */
        nickName?: string;
        /** 公司 */
        organization?: string;
        /** 头像本地文件路径 */
        photoFilePath?: string;
        /** 备注 */
        remark?: string;
        /** 接口调用成功的回调函数 */
        success?: AddPhoneContactSuccessCallback;
        /** 职位 */
        title?: string;
        /** 网站 */
        url?: string;
        /** 微信号 */
        weChatNumber?: string;
        /** 工作地址城市 */
        workAddressCity?: string;
        /** 工作地址国家 */
        workAddressCountry?: string;
        /** 工作地址邮政编码 */
        workAddressPostalCode?: string;
        /** 工作地址省份 */
        workAddressState?: string;
        /** 工作地址街道 */
        workAddressStreet?: string;
        /** 工作传真 */
        workFaxNumber?: string;
        /** 工作电话 */
        workPhoneNumber?: string;
    }
    interface AddPhoneRepeatCalendarOption {
        /** 开始时间的 unix 时间戳 (1970年1月1日开始所经过的秒数) */
        startTime: number;
        /** 日历事件标题 */
        title: string;
        /** 是否提醒，默认 true */
        alarm?: boolean;
        /** 提醒提前量，单位秒，默认 0 表示开始时提醒 */
        alarmOffset?: number;
        /** 是否全天事件，默认 false */
        allDay?: boolean;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: AddPhoneRepeatCalendarCompleteCallback;
        /** 事件说明 */
        description?: string;
        /** 结束时间的 unix 时间戳，默认与开始时间相同 */
        endTime?: string;
        /** 接口调用失败的回调函数 */
        fail?: AddPhoneRepeatCalendarFailCallback;
        /** 事件位置 */
        location?: string;
        /** 重复周期结束时间的 unix 时间戳，不填表示一直重复 */
        repeatEndTime?: number;
        /** 重复周期，默认 month 每月重复 */
        repeatInterval?: string;
        /** 接口调用成功的回调函数 */
        success?: AddPhoneRepeatCalendarSuccessCallback;
    }
    interface AddServiceOption {
        /** 描述service的Object */
        service: BLEPeripheralService;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: AddServiceCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: AddServiceFailCallback;
        /** 接口调用成功的回调函数 */
        success?: AddServiceSuccessCallback;
    }
    interface AddVideoToFavoritesOption {
        /** 要收藏的视频地址，必须为本地路径或临时路径 */
        videoPath: string;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: AddVideoToFavoritesCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: AddVideoToFavoritesFailCallback;
        /** 接口调用成功的回调函数 */
        success?: AddVideoToFavoritesSuccessCallback;
        /** 缩略图路径，若留空则使用视频首帧 */
        thumbPath?: string;
    }
    /** 广播自定义参数 */
    interface AdvertiseReqObj {
        /** 当前Service是否可连接 */
        connectable?: boolean;
        /** 广播中deviceName字段，默认为空 */
        deviceName?: string;
        /** 广播的制造商信息, 仅安卓支持 */
        manufacturerData?: ManufacturerData[];
        /** 要广播的serviceUuid列表 */
        serviceUuids?: string[];
    }
    /** animationData */
    interface AnimationExportResult {
        actions: IAnyObject[];
    }
    /** 动画效果 */
    interface AnimationOption {
        /** 动画变化时间，单位 ms */
        duration?: number;
        /** 动画变化方式
         *
         * 可选值：
         * - 'linear': 动画从头到尾的速度是相同的;
         * - 'easeIn': 动画以低速开始;
         * - 'easeOut': 动画以低速结束;
         * - 'easeInOut': 动画以低速开始和结束; */
        timingFunc?: "linear" | "easeIn" | "easeOut" | "easeInOut";
    }
    interface AppendFileFailCallbackResult {
        /** 错误信息
         *
         * 可选值：
         * - 'fail no such file or directory, open ${filePath}': 指定的 filePath 文件不存在;
         * - 'fail illegal operation on a directory, open "${filePath}"': 指定的 filePath 是一个已经存在的目录;
         * - 'fail permission denied, open ${dirPath}': 指定的 filePath 路径没有写权限;
         * - 'fail sdcard not mounted': Android sdcard 挂载失败; */
        errMsg: string;
    }
    interface AppendFileOption {
        /** 要追加的文本或二进制数据 */
        data: string | ArrayBuffer;
        /** 要追加内容的文件路径 (本地路径) */
        filePath: string;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: AppendFileCompleteCallback;
        /** 指定写入文件的字符编码
         *
         * 可选值：
         * - 'ascii': ;
         * - 'base64': ;
         * - 'binary': ;
         * - 'hex': ;
         * - 'ucs2': 以小端序读取;
         * - 'ucs-2': 以小端序读取;
         * - 'utf16le': 以小端序读取;
         * - 'utf-16le': 以小端序读取;
         * - 'utf-8': ;
         * - 'utf8': ;
         * - 'latin1': ; */
        encoding?:
            | "ascii"
            | "base64"
            | "binary"
            | "hex"
            | "ucs2"
            | "ucs-2"
            | "utf16le"
            | "utf-16le"
            | "utf-8"
            | "utf8"
            | "latin1";
        /** 接口调用失败的回调函数 */
        fail?: AppendFileFailCallback;
        /** 接口调用成功的回调函数 */
        success?: AppendFileSuccessCallback;
    }
    interface AuthPrivateMessageOption {
        /** shareTicket。可以从 wx.onShow 中获取。详情 [shareTicket](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/share.html) */
        shareTicket: string;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: AuthPrivateMessageCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: AuthPrivateMessageFailCallback;
        /** 接口调用成功的回调函数 */
        success?: AuthPrivateMessageSuccessCallback;
    }
    interface AuthPrivateMessageSuccessCallbackResult {
        /** 经过加密的activityId，解密后可得到原始的activityId。若解密后得到的activityId可以与开发者后台的活动id对应上则验证通过，否则表明valid字段不可靠（被篡改） 详细见[加密数据解密算法](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html) */
        encryptedData: string;
        /** 错误信息 */
        errMsg: string;
        /** 加密算法的初始向量，详细见[加密数据解密算法](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html) */
        iv: string;
        /** 验证是否通过 */
        valid: boolean;
    }
    /** 用户授权设置信息，详情参考[权限](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/authorize.html) */
    interface AuthSetting {
        /** 是否授权通讯地址，已取消此项授权，会默认返回true */
        "scope.address"?: boolean;
        /** 是否授权摄像头，对应[[camera](https://developers.weixin.qq.com/miniprogram/dev/component/camera.html)](https://developers.weixin.qq.com/miniprogram/dev/component/camera.html) 组件 */
        "scope.camera"?: boolean;
        /** 是否授权获取发票，已取消此项授权，会默认返回true */
        "scope.invoice"?: boolean;
        /** 是否授权发票抬头，已取消此项授权，会默认返回true */
        "scope.invoiceTitle"?: boolean;
        /** 是否授权录音功能，对应接口 [wx.startRecord](https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/wx.startRecord.html) */
        "scope.record"?: boolean;
        /** 是否授权用户信息，对应接口 [wx.getUserInfo](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/user-info/wx.getUserInfo.html) */
        "scope.userInfo"?: boolean;
        /** 是否授权地理位置，对应接口 [wx.getLocation](https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.getLocation.html), [wx.chooseLocation](https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.chooseLocation.html) */
        "scope.userLocation"?: boolean;
        /** 是否授权微信运动步数，对应接口 [wx.getWeRunData](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/werun/wx.getWeRunData.html) */
        "scope.werun"?: boolean;
        /** 是否授权保存到相册 [wx.saveImageToPhotosAlbum](https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.saveImageToPhotosAlbum.html), [wx.saveVideoToPhotosAlbum](https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.saveVideoToPhotosAlbum.html) */
        "scope.writePhotosAlbum"?: boolean;
    }
    interface AuthorizeForMiniProgramOption {
        /** 需要获取权限的 scope，详见 [scope 列表]((authorize#scope-列表))
         *
         * 可选值：
         * - 'scope.record': ;
         * - 'scope.writePhotosAlbum': ;
         * - 'scope.camera': ; */
        scope: "scope.record" | "scope.writePhotosAlbum" | "scope.camera";
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: AuthorizeForMiniProgramCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: AuthorizeForMiniProgramFailCallback;
        /** 接口调用成功的回调函数 */
        success?: AuthorizeForMiniProgramSuccessCallback;
    }
    interface AuthorizeOption {
        /** 需要获取权限的 scope，详见 [scope 列表]((authorize#scope-列表)) */
        scope: string;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: AuthorizeCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: AuthorizeFailCallback;
        /** 接口调用成功的回调函数 */
        success?: AuthorizeSuccessCallback;
    }
    /** 设备特征值列表 */
    interface BLECharacteristic {
        /** 该特征值支持的操作类型 */
        properties: BLECharacteristicProperties;
        /** 蓝牙设备特征值的 uuid */
        uuid: string;
    }
    /** 该特征值支持的操作类型 */
    interface BLECharacteristicProperties {
        /** 该特征值是否支持 indicate 操作 */
        indicate: boolean;
        /** 该特征值是否支持 notify 操作 */
        notify: boolean;
        /** 该特征值是否支持 read 操作 */
        read: boolean;
        /** 该特征值是否支持 write 操作 */
        write: boolean;
    }
    interface BLEPeripheralServerCloseOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: FileSystemManagerCloseCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: SocketTaskCloseFailCallback;
        /** 接口调用成功的回调函数 */
        success?: FileSystemManagerCloseSuccessCallback;
    }
    /** 描述service的Object */
    interface BLEPeripheralService {
        /** characteristics列表 */
        characteristics: Characteristic[];
        /** service 的 uuid */
        uuid: string;
    }
    /** 设备服务列表 */
    interface BLEService {
        /** 该服务是否为主服务 */
        isPrimary: boolean;
        /** 蓝牙设备服务的 uuid */
        uuid: string;
    }
    /** BackgroundAudioManager 实例，可通过 [wx.getBackgroundAudioManager](https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/wx.getBackgroundAudioManager.html) 获取。
*
* **示例代码**
*
*
* ```js
const backgroundAudioManager = wx.getBackgroundAudioManager()

backgroundAudioManager.title = '此时此刻'
backgroundAudioManager.epname = '此时此刻'
backgroundAudioManager.singer = '许巍'
backgroundAudioManager.coverImgUrl = 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000'
// 设置了 src 之后会自动播放
backgroundAudioManager.src = 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46'
``` */
    interface BackgroundAudioManager {
        /** 音频已缓冲的时间，仅保证当前播放时间点到此时间点内容已缓冲。（只读） */
        buffered: number;
        /** 封面图 URL，用于做原生音频播放器背景图。原生音频播放器中的分享功能，分享出去的卡片配图及背景也将使用该图。 */
        coverImgUrl: string;
        /** 当前音频的播放位置（单位：s），只有在有合法 src 时返回。（只读） */
        currentTime: number;
        /** 当前音频的长度（单位：s），只有在有合法 src 时返回。（只读） */
        duration: number;
        /** 专辑名，原生音频播放器中的分享功能，分享出去的卡片简介，也将使用该值。 */
        epname: string;
        /** 当前是否暂停或停止。（只读） */
        paused: boolean;
        /** 播放速度。范围 0.5-2.0，默认为 1。（Android 需要 6 及以上版本）
         *
         * 最低基础库： `2.11.0` */
        playbackRate: number;
        /** 音频协议。默认值为 'http'，设置 'hls' 可以支持播放 HLS 协议的直播音频。
         *
         * 最低基础库： `1.9.94` */
        protocol: string;
        /** 歌手名，原生音频播放器中的分享功能，分享出去的卡片简介，也将使用该值。 */
        singer: string;
        /** 音频的数据源（[2.2.3](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) 开始支持云文件ID）。默认为空字符串，**当设置了新的 src 时，会自动开始播放**，目前支持的格式有 m4a, aac, mp3, wav。 */
        src: string;
        /** 音频开始播放的位置（单位：s）。 */
        startTime: number;
        /** 音频标题，用于原生音频播放器音频标题（必填）。原生音频播放器中的分享功能，分享出去的卡片标题，也将使用该值。 */
        title: string;
        /** 页面链接，原生音频播放器中的分享功能，分享出去的卡片简介，也将使用该值。 */
        webUrl: string;
    }
    interface BlueToothDevice {
        /** 当前蓝牙设备的信号强度 */
        RSSI: number;
        /** 当前蓝牙设备的广播数据段中的 ManufacturerData 数据段。 */
        advertisData: ArrayBuffer;
        /** 当前蓝牙设备的广播数据段中的 ServiceUUIDs 数据段 */
        advertisServiceUUIDs: string[];
        /** 用于区分设备的 id */
        deviceId: string;
        /** 当前蓝牙设备的广播数据段中的 LocalName 数据段 */
        localName: string;
        /** 蓝牙设备名称，某些设备可能没有 */
        name: string;
        /** 当前蓝牙设备的广播数据段中的 ServiceData 数据段 */
        serviceData: IAnyObject;
    }
    /** 搜索到的设备列表 */
    interface BluetoothDeviceInfo {
        /** 用于区分设备的 id */
        deviceId: string;
        /** 蓝牙设备名称，某些设备可能没有 */
        name: string;
    }
    interface BlurOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: BlurCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: BlurFailCallback;
        /** 接口调用成功的回调函数 */
        success?: BlurSuccessCallback;
    }
    interface BoundingClientRectCallbackResult {
        /** 节点的下边界坐标 */
        bottom: number;
        /** 节点的 dataset */
        dataset: IAnyObject;
        /** 节点的高度 */
        height: number;
        /** 节点的 ID */
        id: string;
        /** 节点的左边界坐标 */
        left: number;
        /** 节点的右边界坐标 */
        right: number;
        /** 节点的上边界坐标 */
        top: number;
        /** 节点的宽度 */
        width: number;
    }
    /** 目标边界 */
    interface BoundingClientRectResult {
        /** 下边界 */
        bottom: number;
        /** 高度 */
        height: number;
        /** 左边界 */
        left: number;
        /** 右边界 */
        right: number;
        /** 上边界 */
        top: number;
        /** 宽度 */
        width: number;
    }
    interface CameraContextStartRecordOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: StartRecordCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: StartRecordFailCallback;
        /** 接口调用成功的回调函数 */
        success?: CameraContextStartRecordSuccessCallback;
        /** 超过30s或页面 `onHide` 时会结束录像 */
        timeoutCallback?: StartRecordTimeoutCallback;
    }
    interface CameraContextStopRecordOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: StopRecordCompleteCallback;
        /** 启动视频压缩，压缩效果同`chooseVideo` */
        compressed?: boolean;
        /** 接口调用失败的回调函数 */
        fail?: StopRecordFailCallback;
        /** 接口调用成功的回调函数 */
        success?: CameraContextStopRecordSuccessCallback;
    }
    interface CameraFrameListenerStartOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: StartCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: StartFailCallback;
        /** 接口调用成功的回调函数 */
        success?: StartSuccessCallback;
    }
    /** Canvas 实例，可通过 [SelectorQuery](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/SelectorQuery.html) 获取。
     *
     * **示例代码**
     *
     * 2D Canvas 示例
     * [在微信开发者工具中查看示例](https://developers.weixin.qq.com/s/SHfgCmmq7UcM)
     *
     * WebGL 示例
     * [在微信开发者工具中查看示例](https://developers.weixin.qq.com/s/qEGUOqmf7T8z)
     *
     * 最低基础库： `2.7.0` */
    interface Canvas {
        /** 画布高度 */
        height: number;
        /** 画布宽度 */
        width: number;
    }
    /** canvas 组件的绘图上下文。CanvasContext 是旧版的接口， 新版 Canvas 2D 接口与 Web 一致。 */
    interface CanvasContext {
        /** 填充颜色。用法同 [CanvasContext.setFillStyle()](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.setFillStyle.html)。
         *
         * 最低基础库： `1.9.90` */
        fillStyle: string | CanvasGradient;
        /** 当前字体样式的属性。符合 [CSS font 语法](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font) 的 DOMString 字符串，至少需要提供字体大小和字体族名。默认值为 10px sans-serif。
         *
         * 最低基础库： `1.9.90` */
        font: string;
        /** 全局画笔透明度。范围 0-1，0 表示完全透明，1 表示完全不透明。 */
        globalAlpha: number;
        /** 在绘制新形状时应用的合成操作的类型。目前安卓版本只适用于 `fill` 填充块的合成，用于 `stroke` 线段的合成效果都是 `source-over`。
         *
         * 目前支持的操作有
         * - 安卓：xor, source-over, source-atop, destination-out, lighter, overlay, darken, lighten, hard-light
         * - iOS：xor, source-over, source-atop, destination-over, destination-out, lighter, multiply, overlay, darken, lighten, color-dodge, color-burn, hard-light, soft-light, difference, exclusion, saturation, luminosity
         *
         * 最低基础库： `1.9.90` */
        globalCompositeOperation: string;
        /** 线条的端点样式。用法同 [CanvasContext.setLineCap()](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.setLineCap.html)。
         *
         * 最低基础库： `1.9.90` */
        lineCap: string;
        /** 虚线偏移量，初始值为0
         *
         * 最低基础库： `1.9.90` */
        lineDashOffset: number;
        /** 线条的交点样式。用法同 [CanvasContext.setLineJoin()](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.setLineJoin.html)。
         *
         * 可选值：
         * - 'bevel': 斜角;
         * - 'round': 圆角;
         * - 'miter': 尖角;
         *
         * 最低基础库： `1.9.90` */
        lineJoin: "bevel" | "round" | "miter";
        /** 线条的宽度。用法同 [CanvasContext.setLineWidth()](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.setLineWidth.html)。
         *
         * 最低基础库： `1.9.90` */
        lineWidth: number;
        /** 最大斜接长度。用法同 [CanvasContext.setMiterLimit()](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.setMiterLimit.html)。
         *
         * 最低基础库： `1.9.90` */
        miterLimit: number;
        /** 阴影的模糊级别
         *
         * 最低基础库： `1.9.90` */
        shadowBlur: number;
        /** 阴影的颜色
         *
         * 最低基础库： `1.9.90` */
        shadowColor: number;
        /** 阴影相对于形状在水平方向的偏移
         *
         * 最低基础库： `1.9.90` */
        shadowOffsetX: number;
        /** 阴影相对于形状在竖直方向的偏移
         *
         * 最低基础库： `1.9.90` */
        shadowOffsetY: number;
        /** 边框颜色。用法同 [CanvasContext.setStrokeStyle()](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.setStrokeStyle.html)。
         *
         * 最低基础库： `1.9.90` */
        strokeStyle: string | CanvasGradient;
    }
    interface CanvasGetImageDataOption {
        /** 画布标识，传入 [canvas](https://developers.weixin.qq.com/miniprogram/dev/component/canvas.html) 组件的 `canvas-id` 属性。 */
        canvasId: string;
        /** 将要被提取的图像数据矩形区域的高度 */
        height: number;
        /** 将要被提取的图像数据矩形区域的宽度 */
        width: number;
        /** 将要被提取的图像数据矩形区域的左上角横坐标 */
        x: number;
        /** 将要被提取的图像数据矩形区域的左上角纵坐标 */
        y: number;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: CanvasGetImageDataCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: CanvasGetImageDataFailCallback;
        /** 接口调用成功的回调函数 */
        success?: CanvasGetImageDataSuccessCallback;
    }
    interface CanvasGetImageDataSuccessCallbackResult {
        /** 图像像素点数据，一维数组，每四项表示一个像素点的 rgba */
        data: Uint8ClampedArray;
        /** 图像数据矩形的高度 */
        height: number;
        /** 图像数据矩形的宽度 */
        width: number;
        errMsg: string;
    }
    interface CanvasPutImageDataOption {
        /** 画布标识，传入 [canvas](https://developers.weixin.qq.com/miniprogram/dev/component/canvas.html) 组件的 canvas-id 属性。 */
        canvasId: string;
        /** 图像像素点数据，一维数组，每四项表示一个像素点的 rgba */
        data: Uint8ClampedArray;
        /** 源图像数据矩形区域的高度 */
        height: number;
        /** 源图像数据矩形区域的宽度 */
        width: number;
        /** 源图像数据在目标画布中的位置偏移量（x 轴方向的偏移量） */
        x: number;
        /** 源图像数据在目标画布中的位置偏移量（y 轴方向的偏移量） */
        y: number;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: CanvasPutImageDataCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: CanvasPutImageDataFailCallback;
        /** 接口调用成功的回调函数 */
        success?: CanvasPutImageDataSuccessCallback;
    }
    interface CanvasToTempFilePathOption {
        /** 画布标识，传入 [canvas](https://developers.weixin.qq.com/miniprogram/dev/component/canvas.html) 组件实例 （canvas type="2d" 时使用该属性）。 */
        canvas?: IAnyObject;
        /** 画布标识，传入 [canvas](https://developers.weixin.qq.com/miniprogram/dev/component/canvas.html) 组件的 canvas-id */
        canvasId?: string;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: CanvasToTempFilePathCompleteCallback;
        /** 输出的图片的高度
         *
         * 最低基础库： `1.2.0` */
        destHeight?: number;
        /** 输出的图片的宽度
         *
         * 最低基础库： `1.2.0` */
        destWidth?: number;
        /** 接口调用失败的回调函数 */
        fail?: CanvasToTempFilePathFailCallback;
        /** 目标文件的类型
         *
         * 可选值：
         * - 'jpg': jpg 图片;
         * - 'png': png 图片;
         *
         * 最低基础库： `1.7.0` */
        fileType?: "jpg" | "png";
        /** 指定的画布区域的高度
         *
         * 最低基础库： `1.2.0` */
        height?: number;
        /** 图片的质量，目前仅对 jpg 有效。取值范围为 (0, 1]，不在范围内时当作 1.0 处理。
         *
         * 最低基础库： `1.7.0` */
        quality?: number;
        /** 接口调用成功的回调函数 */
        success?: CanvasToTempFilePathSuccessCallback;
        /** 指定的画布区域的宽度
         *
         * 最低基础库： `1.2.0` */
        width?: number;
        /** 指定的画布区域的左上角横坐标
         *
         * 最低基础库： `1.2.0` */
        x?: number;
        /** 指定的画布区域的左上角纵坐标
         *
         * 最低基础库： `1.2.0` */
        y?: number;
    }
    interface CanvasToTempFilePathSuccessCallbackResult {
        /** 生成文件的临时路径 (本地路径) */
        tempFilePath: string;
        errMsg: string;
    }
    /** characteristics列表 */
    interface Characteristic {
        /** Characteristic 的 uuid */
        uuid: string;
        /** 描述符数据 */
        descriptors?: CharacteristicDescriptor[];
        /** 特征值权限 */
        permission?: CharacteristicPermission;
        /** 特征值支持的操作 */
        properties?: CharacteristicProperties;
        /** 特征值对应的二进制值 */
        value?: ArrayBuffer;
    }
    /** 描述符数据 */
    interface CharacteristicDescriptor {
        /** Descriptor 的 uuid */
        uuid: string;
        /** 描述符的权限 */
        permission?: DescriptorPermission;
        /** 描述符数据 */
        value?: ArrayBuffer;
    }
    /** 特征值权限 */
    interface CharacteristicPermission {
        /** 加密读请求 */
        readEncryptionRequired?: boolean;
        /** 可读 */
        readable?: boolean;
        /** 加密写请求 */
        writeEncryptionRequired?: boolean;
        /** 可写 */
        writeable?: boolean;
    }
    /** 特征值支持的操作 */
    interface CharacteristicProperties {
        /** 回包 */
        indicate?: boolean;
        /** 订阅 */
        notify?: boolean;
        /** 读 */
        read?: boolean;
        /** 写 */
        write?: boolean;
    }
    interface CheckIsOpenAccessibilityOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: CheckIsOpenAccessibilityCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: CheckIsOpenAccessibilityFailCallback;
        /** 接口调用成功的回调函数 */
        success?: CheckIsOpenAccessibilitySuccessCallback;
    }
    interface CheckIsOpenAccessibilitySuccessCallbackOption {
        /** iOS 上开启辅助功能旁白，安卓开启 talkback 时返回 true */
        open: boolean;
    }
    interface CheckIsSoterEnrolledInDeviceOption {
        /** 认证方式
         *
         * 可选值：
         * - 'fingerPrint': 指纹识别;
         * - 'facial': 人脸识别;
         * - 'speech': 声纹识别（暂未支持）; */
        checkAuthMode: "fingerPrint" | "facial" | "speech";
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: CheckIsSoterEnrolledInDeviceCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: CheckIsSoterEnrolledInDeviceFailCallback;
        /** 接口调用成功的回调函数 */
        success?: CheckIsSoterEnrolledInDeviceSuccessCallback;
    }
    interface CheckIsSoterEnrolledInDeviceSuccessCallbackResult {
        /** 错误信息 */
        errMsg: string;
        /** 是否已录入信息 */
        isEnrolled: boolean;
    }
    interface CheckIsSupportSoterAuthenticationOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: CheckIsSupportSoterAuthenticationCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: CheckIsSupportSoterAuthenticationFailCallback;
        /** 接口调用成功的回调函数 */
        success?: CheckIsSupportSoterAuthenticationSuccessCallback;
    }
    interface CheckIsSupportSoterAuthenticationSuccessCallbackResult {
        /** 该设备支持的可被SOTER识别的生物识别方式
         *
         * 可选值：
         * - 'fingerPrint': 指纹识别;
         * - 'facial': 人脸识别;
         * - 'speech': 声纹识别（暂未支持）; */
        supportMode: Array<"fingerPrint" | "facial" | "speech">;
        errMsg: string;
    }
    interface CheckSessionOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: CheckSessionCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: CheckSessionFailCallback;
        /** 接口调用成功的回调函数 */
        success?: CheckSessionSuccessCallback;
    }
    interface ChooseAddressOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: ChooseAddressCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: ChooseAddressFailCallback;
        /** 接口调用成功的回调函数 */
        success?: ChooseAddressSuccessCallback;
    }
    interface ChooseAddressSuccessCallbackResult {
        /** 国标收货地址第二级地址 */
        cityName: string;
        /** 国标收货地址第三级地址 */
        countyName: string;
        /** 详细收货地址信息 */
        detailInfo: string;
        /** 错误信息 */
        errMsg: string;
        /** 收货地址国家码 */
        nationalCode: string;
        /** 邮编 */
        postalCode: string;
        /** 国标收货地址第一级地址 */
        provinceName: string;
        /** 收货人手机号码 */
        telNumber: string;
        /** 收货人姓名 */
        userName: string;
    }
    interface ChooseContactOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: ChooseContactCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: ChooseContactFailCallback;
        /** 接口调用成功的回调函数 */
        success?: ChooseContactSuccessCallback;
    }
    interface ChooseContactSuccessCallbackOption {
        /** 联系人姓名 */
        displayName: string;
        /** 手机号 */
        phoneNumber: string;
        /** 选定联系人的所有手机号（部分 Android 系统只能选联系人而不能选特定手机号） */
        phoneNumberList: string;
    }
    /** 返回选择的文件的本地临时文件对象数组 */
    interface ChooseFile {
        /** 选择的文件名称 */
        name: string;
        /** 本地临时文件路径 (本地路径) */
        path: string;
        /** 本地临时文件大小，单位 B */
        size: number;
        /** 选择的文件的会话发送时间，Unix时间戳，工具暂不支持此属性 */
        time: number;
        /** 选择的文件类型
         *
         * 可选值：
         * - 'video': 选择了视频文件;
         * - 'image': 选择了图片文件;
         * - 'file': 选择了除图片和视频的文件; */
        type: "video" | "image" | "file";
    }
    interface ChooseImageOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: ChooseImageCompleteCallback;
        /** 最多可以选择的图片张数 */
        count?: number;
        /** 接口调用失败的回调函数 */
        fail?: ChooseImageFailCallback;
        /** 所选的图片的尺寸
         *
         * 可选值：
         * - 'original': 原图;
         * - 'compressed': 压缩图; */
        sizeType?: Array<"original" | "compressed">;
        /** 选择图片的来源
         *
         * 可选值：
         * - 'album': 从相册选图;
         * - 'camera': 使用相机; */
        sourceType?: Array<"album" | "camera">;
        /** 接口调用成功的回调函数 */
        success?: ChooseImageSuccessCallback;
    }
    interface ChooseImageSuccessCallbackResult {
        /** 图片的本地临时文件路径列表 (本地路径) */
        tempFilePaths: string[];
        /** 图片的本地临时文件列表
         *
         * 最低基础库： `1.2.0` */
        tempFiles: ImageFile[];
        errMsg: string;
    }
    interface ChooseInvoiceOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: ChooseInvoiceCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: ChooseInvoiceFailCallback;
        /** 接口调用成功的回调函数 */
        success?: ChooseInvoiceSuccessCallback;
    }
    interface ChooseInvoiceSuccessCallbackResult {
        /** 用户选中的发票信息，格式为一个 JSON 字符串，包含三个字段： card_id：所选发票卡券的 cardId，encrypt_code：所选发票卡券的加密 code，报销方可以通过 cardId 和 encryptCode 获得报销发票的信息，app_id： 发票方的 appId。 */
        invoiceInfo: string;
        errMsg: string;
    }
    interface ChooseInvoiceTitleOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: ChooseInvoiceTitleCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: ChooseInvoiceTitleFailCallback;
        /** 接口调用成功的回调函数 */
        success?: ChooseInvoiceTitleSuccessCallback;
    }
    interface ChooseInvoiceTitleSuccessCallbackResult {
        /** 银行账号 */
        bankAccount: string;
        /** 银行名称 */
        bankName: string;
        /** 单位地址 */
        companyAddress: string;
        /** 错误信息 */
        errMsg: string;
        /** 抬头税号 */
        taxNumber: string;
        /** 手机号码 */
        telephone: string;
        /** 抬头名称 */
        title: string;
        /** 抬头类型
         *
         * 可选值：
         * - 0: 单位;
         * - 1: 个人; */
        type: 0 | 1;
    }
    interface ChooseLocationOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: ChooseLocationCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: ChooseLocationFailCallback;
        /** 目标地纬度
         *
         * 最低基础库： `2.9.0` */
        latitude?: number;
        /** 目标地经度
         *
         * 最低基础库： `2.9.0` */
        longitude?: number;
        /** 接口调用成功的回调函数 */
        success?: ChooseLocationSuccessCallback;
    }
    interface ChooseLocationSuccessCallbackResult {
        /** 详细地址 */
        address: string;
        /** 纬度，浮点数，范围为-90~90，负数表示南纬。使用 gcj02 国测局坐标系 */
        latitude: number;
        /** 经度，浮点数，范围为-180~180，负数表示西经。使用 gcj02 国测局坐标系 */
        longitude: number;
        /** 位置名称 */
        name: string;
        errMsg: string;
    }
    interface ChooseMediaOption {
        /** 仅在 sourceType 为 camera 时生效，使用前置或后置摄像头
         *
         * 可选值：
         * - 'back': 使用后置摄像头;
         * - 'front': 使用前置摄像头; */
        camera?: "back" | "front";
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: ChooseMediaCompleteCallback;
        /** 最多可以选择的文件个数 */
        count?: number;
        /** 接口调用失败的回调函数 */
        fail?: ChooseMediaFailCallback;
        /** 拍摄视频最长拍摄时间，单位秒。时间范围为 3s 至 60s 之间。不限制相册。 */
        maxDuration?: number;
        /** 文件类型
         *
         * 可选值：
         * - 'image': 只能拍摄图片或从相册选择图片;
         * - 'video': 只能拍摄视频或从相册选择视频; */
        mediaType?: Array<"image" | "video">;
        /** 仅对 mediaType 为 image 时有效，是否压缩所选文件 */
        sizeType?: string[];
        /** 图片和视频选择的来源
         *
         * 可选值：
         * - 'album': 从相册选择;
         * - 'camera': 使用相机拍摄; */
        sourceType?: Array<"album" | "camera">;
        /** 接口调用成功的回调函数 */
        success?: ChooseMediaSuccessCallback;
    }
    interface ChooseMediaSuccessCallbackResult {
        /** 本地临时文件列表 */
        tempFiles: MediaFile[];
        /** 文件类型，有效值有 image 、video */
        type: string;
        errMsg: string;
    }
    interface ChooseMessageFileOption {
        /** 最多可以选择的文件个数，可以 0～100 */
        count: number;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: ChooseMessageFileCompleteCallback;
        /** 根据文件拓展名过滤，仅 type==file 时有效。每一项都不能是空字符串。默认不过滤。
         *
         * 最低基础库： `2.6.0` */
        extension?: string[];
        /** 接口调用失败的回调函数 */
        fail?: ChooseMessageFileFailCallback;
        /** 接口调用成功的回调函数 */
        success?: ChooseMessageFileSuccessCallback;
        /** 所选的文件的类型
         *
         * 可选值：
         * - 'all': 从所有文件选择;
         * - 'video': 只能选择视频文件;
         * - 'image': 只能选择图片文件;
         * - 'file': 可以选择除了图片和视频之外的其它的文件; */
        type?: "all" | "video" | "image" | "file";
    }
    interface ChooseMessageFileSuccessCallbackResult {
        /** 返回选择的文件的本地临时文件对象数组 */
        tempFiles: ChooseFile[];
        errMsg: string;
    }
    interface ChoosePoiOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: ChoosePoiCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: ChoosePoiFailCallback;
        /** 接口调用成功的回调函数 */
        success?: ChoosePoiSuccessCallback;
    }
    interface ChoosePoiSuccessCallbackResult {
        /** 详细地址 */
        address: string;
        /** 城市名称 */
        city: number;
        /** 纬度，浮点数，范围为-90~90，负数表示南纬。使用 gcj02 国测局坐标系 */
        latitude: number;
        /** 经度，浮点数，范围为-180~180，负数表示西经。使用 gcj02 国测局坐标系 */
        longitude: number;
        /** 位置名称 */
        name: string;
        /** 选择城市时，值为 1，选择精确位置时，值为 2 */
        type: number;
        errMsg: string;
    }
    interface ChooseVideoOption {
        /** 默认拉起的是前置或者后置摄像头。部分 Android 手机下由于系统 ROM 不支持无法生效
         *
         * 可选值：
         * - 'back': 默认拉起后置摄像头;
         * - 'front': 默认拉起前置摄像头; */
        camera?: "back" | "front";
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: ChooseVideoCompleteCallback;
        /** 是否压缩所选择的视频文件
         *
         * 最低基础库： `1.6.0` */
        compressed?: boolean;
        /** 接口调用失败的回调函数 */
        fail?: ChooseVideoFailCallback;
        /** 拍摄视频最长拍摄时间，单位秒 */
        maxDuration?: number;
        /** 视频选择的来源
         *
         * 可选值：
         * - 'album': 从相册选择视频;
         * - 'camera': 使用相机拍摄视频; */
        sourceType?: Array<"album" | "camera">;
        /** 接口调用成功的回调函数 */
        success?: ChooseVideoSuccessCallback;
    }
    interface ChooseVideoSuccessCallbackResult {
        /** 选定视频的时间长度 */
        duration: number;
        /** 返回选定视频的高度 */
        height: number;
        /** 选定视频的数据量大小 */
        size: number;
        /** 选定视频的临时文件路径 (本地路径) */
        tempFilePath: string;
        /** 返回选定视频的宽度 */
        width: number;
        errMsg: string;
    }
    interface ClearOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: ClearCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: ClearFailCallback;
        /** 接口调用成功的回调函数 */
        success?: ClearSuccessCallback;
    }
    interface ClearStorageOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: ClearStorageCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: ClearStorageFailCallback;
        /** 接口调用成功的回调函数 */
        success?: ClearStorageSuccessCallback;
    }
    interface CloseBLEConnectionOption {
        /** 用于区分设备的 id */
        deviceId: string;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: CloseBLEConnectionCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: CloseBLEConnectionFailCallback;
        /** 接口调用成功的回调函数 */
        success?: CloseBLEConnectionSuccessCallback;
    }
    interface CloseBluetoothAdapterOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: CloseBluetoothAdapterCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: CloseBluetoothAdapterFailCallback;
        /** 接口调用成功的回调函数 */
        success?: CloseBluetoothAdapterSuccessCallback;
    }
    interface CloseFailCallbackResult {
        /** 错误信息
         *
         * 可选值：
         * - 'bad file descriptor': 无效的文件描述符; */
        errMsg: string;
    }
    interface CloseSocketOption {
        /** 一个数字值表示关闭连接的状态号，表示连接被关闭的原因。 */
        code?: number;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: CloseSocketCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: CloseSocketFailCallback;
        /** 一个可读的字符串，表示连接被关闭的原因。这个字符串必须是不长于 123 字节的 UTF-8 文本（不是字符）。 */
        reason?: string;
        /** 接口调用成功的回调函数 */
        success?: CloseSocketSuccessCallback;
    }
    interface CloseSyncOption {
        /** 需要被关闭的文件描述符。fd 通过 [FileSystemManager.open](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.open.html) 或 [FileSystemManager.openSync](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.openSync.html) 接口获得 */
        fd: string;
    }
    /** 颜色。可以用以下几种方式来表示 canvas 中使用的颜色：
     *
     * - RGB 颜色： 如 `'rgb(255, 0, 0)'`
     * - RGBA 颜色：如 `'rgba(255, 0, 0, 0.3)'`
     * - 16 进制颜色： 如 `'#FF0000'`
     * - 预定义的颜色： 如 `'red'`
     *
     * 其中预定义颜色有以下148个：
     * *注意**: Color Name 大小写不敏感
     *
     * | Color Name           | HEX     |
     * | -------------------- | ------- |
     * | AliceBlue            | #F0F8FF |
     * | AntiqueWhite         | #FAEBD7 |
     * | Aqua                 | #00FFFF |
     * | Aquamarine           | #7FFFD4 |
     * | Azure                | #F0FFFF |
     * | Beige                | #F5F5DC |
     * | Bisque               | #FFE4C4 |
     * | Black                | #000000 |
     * | BlanchedAlmond       | #FFEBCD |
     * | Blue                 | #0000FF |
     * | BlueViolet           | #8A2BE2 |
     * | Brown                | #A52A2A |
     * | BurlyWood            | #DEB887 |
     * | CadetBlue            | #5F9EA0 |
     * | Chartreuse           | #7FFF00 |
     * | Chocolate            | #D2691E |
     * | Coral                | #FF7F50 |
     * | CornflowerBlue       | #6495ED |
     * | Cornsilk             | #FFF8DC |
     * | Crimson              | #DC143C |
     * | Cyan                 | #00FFFF |
     * | DarkBlue             | #00008B |
     * | DarkCyan             | #008B8B |
     * | DarkGoldenRod        | #B8860B |
     * | DarkGray             | #A9A9A9 |
     * | DarkGrey             | #A9A9A9 |
     * | DarkGreen            | #006400 |
     * | DarkKhaki            | #BDB76B |
     * | DarkMagenta          | #8B008B |
     * | DarkOliveGreen       | #556B2F |
     * | DarkOrange           | #FF8C00 |
     * | DarkOrchid           | #9932CC |
     * | DarkRed              | #8B0000 |
     * | DarkSalmon           | #E9967A |
     * | DarkSeaGreen         | #8FBC8F |
     * | DarkSlateBlue        | #483D8B |
     * | DarkSlateGray        | #2F4F4F |
     * | DarkSlateGrey        | #2F4F4F |
     * | DarkTurquoise        | #00CED1 |
     * | DarkViolet           | #9400D3 |
     * | DeepPink             | #FF1493 |
     * | DeepSkyBlue          | #00BFFF |
     * | DimGray              | #696969 |
     * | DimGrey              | #696969 |
     * | DodgerBlue           | #1E90FF |
     * | FireBrick            | #B22222 |
     * | FloralWhite          | #FFFAF0 |
     * | ForestGreen          | #228B22 |
     * | Fuchsia              | #FF00FF |
     * | Gainsboro            | #DCDCDC |
     * | GhostWhite           | #F8F8FF |
     * | Gold                 | #FFD700 |
     * | GoldenRod            | #DAA520 |
     * | Gray                 | #808080 |
     * | Grey                 | #808080 |
     * | Green                | #008000 |
     * | GreenYellow          | #ADFF2F |
     * | HoneyDew             | #F0FFF0 |
     * | HotPink              | #FF69B4 |
     * | IndianRed            | #CD5C5C |
     * | Indigo               | #4B0082 |
     * | Ivory                | #FFFFF0 |
     * | Khaki                | #F0E68C |
     * | Lavender             | #E6E6FA |
     * | LavenderBlush        | #FFF0F5 |
     * | LawnGreen            | #7CFC00 |
     * | LemonChiffon         | #FFFACD |
     * | LightBlue            | #ADD8E6 |
     * | LightCoral           | #F08080 |
     * | LightCyan            | #E0FFFF |
     * | LightGoldenRodYellow | #FAFAD2 |
     * | LightGray            | #D3D3D3 |
     * | LightGrey            | #D3D3D3 |
     * | LightGreen           | #90EE90 |
     * | LightPink            | #FFB6C1 |
     * | LightSalmon          | #FFA07A |
     * | LightSeaGreen        | #20B2AA |
     * | LightSkyBlue         | #87CEFA |
     * | LightSlateGray       | #778899 |
     * | LightSlateGrey       | #778899 |
     * | LightSteelBlue       | #B0C4DE |
     * | LightYellow          | #FFFFE0 |
     * | Lime                 | #00FF00 |
     * | LimeGreen            | #32CD32 |
     * | Linen                | #FAF0E6 |
     * | Magenta              | #FF00FF |
     * | Maroon               | #800000 |
     * | MediumAquaMarine     | #66CDAA |
     * | MediumBlue           | #0000CD |
     * | MediumOrchid         | #BA55D3 |
     * | MediumPurple         | #9370DB |
     * | MediumSeaGreen       | #3CB371 |
     * | MediumSlateBlue      | #7B68EE |
     * | MediumSpringGreen    | #00FA9A |
     * | MediumTurquoise      | #48D1CC |
     * | MediumVioletRed      | #C71585 |
     * | MidnightBlue         | #191970 |
     * | MintCream            | #F5FFFA |
     * | MistyRose            | #FFE4E1 |
     * | Moccasin             | #FFE4B5 |
     * | NavajoWhite          | #FFDEAD |
     * | Navy                 | #000080 |
     * | OldLace              | #FDF5E6 |
     * | Olive                | #808000 |
     * | OliveDrab            | #6B8E23 |
     * | Orange               | #FFA500 |
     * | OrangeRed            | #FF4500 |
     * | Orchid               | #DA70D6 |
     * | PaleGoldenRod        | #EEE8AA |
     * | PaleGreen            | #98FB98 |
     * | PaleTurquoise        | #AFEEEE |
     * | PaleVioletRed        | #DB7093 |
     * | PapayaWhip           | #FFEFD5 |
     * | PeachPuff            | #FFDAB9 |
     * | Peru                 | #CD853F |
     * | Pink                 | #FFC0CB |
     * | Plum                 | #DDA0DD |
     * | PowderBlue           | #B0E0E6 |
     * | Purple               | #800080 |
     * | RebeccaPurple        | #663399 |
     * | Red                  | #FF0000 |
     * | RosyBrown            | #BC8F8F |
     * | RoyalBlue            | #4169E1 |
     * | SaddleBrown          | #8B4513 |
     * | Salmon               | #FA8072 |
     * | SandyBrown           | #F4A460 |
     * | SeaGreen             | #2E8B57 |
     * | SeaShell             | #FFF5EE |
     * | Sienna               | #A0522D |
     * | Silver               | #C0C0C0 |
     * | SkyBlue              | #87CEEB |
     * | SlateBlue            | #6A5ACD |
     * | SlateGray            | #708090 |
     * | SlateGrey            | #708090 |
     * | Snow                 | #FFFAFA |
     * | SpringGreen          | #00FF7F |
     * | SteelBlue            | #4682B4 |
     * | Tan                  | #D2B48C |
     * | Teal                 | #008080 |
     * | Thistle              | #D8BFD8 |
     * | Tomato               | #FF6347 |
     * | Turquoise            | #40E0D0 |
     * | Violet               | #EE82EE |
     * | Wheat                | #F5DEB3 |
     * | White                | #FFFFFF |
     * | WhiteSmoke           | #F5F5F5 |
     * | Yellow               | #FFFF00 |
     * | YellowGreen          | #9ACD32 | */
    interface Color {}
    interface CompressImageOption {
        /** 图片路径，图片的路径，支持本地路径、代码包路径 */
        src: string;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: CompressImageCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: CompressImageFailCallback;
        /** 压缩质量，范围0～100，数值越小，质量越低，压缩率越高（仅对jpg有效）。 */
        quality?: number;
        /** 接口调用成功的回调函数 */
        success?: CompressImageSuccessCallback;
    }
    interface CompressImageSuccessCallbackResult {
        /** 压缩后图片的临时文件路径 (本地路径) */
        tempFilePath: string;
        errMsg: string;
    }
    interface CompressVideoOption {
        /** 码率，单位 kbps */
        bitrate: number;
        /** 帧率 */
        fps: number;
        /** 压缩质量
         *
         * 可选值：
         * - 'low': 低;
         * - 'medium': 中;
         * - 'high': 高; */
        quality: "low" | "medium" | "high";
        /** 相对于原视频的分辨率比例，取值范围(0, 1] */
        resolution: number;
        /** 视频文件路径，可以是临时文件路径也可以是永久文件路径 */
        src: string;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: CompressVideoCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: CompressVideoFailCallback;
        /** 接口调用成功的回调函数 */
        success?: CompressVideoSuccessCallback;
    }
    interface CompressVideoSuccessCallbackResult {
        /** 压缩后的大小，单位 kB */
        size: string;
        /** 压缩后的临时文件地址 */
        tempFilePath: string;
        errMsg: string;
    }
    interface ConnectSocketOption {
        /** 开发者服务器 wss 接口地址 */
        url: string;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: ConnectSocketCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: ConnectSocketFailCallback;
        /** HTTP Header，Header 中不能设置 Referer */
        header?: IAnyObject;
        /** 是否开启压缩扩展
         *
         * 最低基础库： `2.8.0` */
        perMessageDeflate?: boolean;
        /** 子协议数组
         *
         * 最低基础库： `1.4.0` */
        protocols?: string[];
        /** 接口调用成功的回调函数 */
        success?: ConnectSocketSuccessCallback;
        /** 建立 TCP 连接的时候的 TCP_NODELAY 设置
         *
         * 最低基础库： `2.4.0` */
        tcpNoDelay?: boolean;
        /** 超时时间，单位为毫秒
         *
         * 最低基础库： `2.10.0` */
        timeout?: number;
    }
    interface ConnectWifiOption {
        /** Wi-Fi 设备 SSID */
        SSID: string;
        /** Wi-Fi 设备密码 */
        password: string;
        /** Wi-Fi 设备 BSSID */
        BSSID?: string;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: ConnectWifiCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: ConnectWifiFailCallback;
        /** 跳转到系统设置页进行连接，仅安卓生效
         *
         * 最低基础库： `2.12.0` */
        maunal?: boolean;
        /** 接口调用成功的回调函数 */
        success?: ConnectWifiSuccessCallback;
    }
    interface ContextCallbackResult {
        /** 节点对应的 Context 对象 */
        context: IAnyObject;
    }
    interface CopyFileFailCallbackResult {
        /** 错误信息
         *
         * 可选值：
         * - 'fail permission denied, copyFile ${srcPath} -> ${destPath}': 指定目标文件路径没有写权限;
         * - 'fail no such file or directory, copyFile ${srcPath} -> ${destPath}': 源文件不存在，或目标文件路径的上层目录不存在;
         * - 'fail the maximum size of the file storage limit is exceeded': 存储空间不足;
         * - 'fail sdcard not mounted': Android sdcard 挂载失败; */
        errMsg: string;
    }
    interface CopyFileOption {
        /** 目标文件路径，支持本地路径 */
        destPath: string;
        /** 源文件路径，支持本地路径 */
        srcPath: string;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: CopyFileCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: CopyFileFailCallback;
        /** 接口调用成功的回调函数 */
        success?: CopyFileSuccessCallback;
    }
    interface CreateBLEConnectionOption {
        /** 用于区分设备的 id */
        deviceId: string;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: CreateBLEConnectionCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: CreateBLEConnectionFailCallback;
        /** 接口调用成功的回调函数 */
        success?: CreateBLEConnectionSuccessCallback;
        /** 超时时间，单位ms，不填表示不会超时 */
        timeout?: number;
    }
    interface CreateBLEPeripheralServerOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: CreateBLEPeripheralServerCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: CreateBLEPeripheralServerFailCallback;
        /** 接口调用成功的回调函数 */
        success?: CreateBLEPeripheralServerSuccessCallback;
    }
    interface CreateBLEPeripheralServerSuccessCallbackResult {
        /** [BLEPeripheralServer](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-peripheral/BLEPeripheralServer.html)
         *
         * 外围设备的服务端。 */
        server: BLEPeripheralServer;
        errMsg: string;
    }
    /** 选项 */
    interface CreateIntersectionObserverOption {
        /** 初始的相交比例，如果调用时检测到的相交比例与这个值不相等且达到阈值，则会触发一次监听器的回调函数。 */
        initialRatio?: number;
        /** 是否同时观测多个目标节点（而非一个），如果设为 true ，observe 的 targetSelector 将选中多个节点（注意：同时选中过多节点将影响渲染性能）
         *
         * 最低基础库： `2.0.0` */
        observeAll?: boolean;
        /** 一个数值数组，包含所有阈值。 */
        thresholds?: number[];
    }
    interface CreateInterstitialAdOption {
        /** 广告单元 id */
        adUnitId: string;
    }
    interface CreateMediaRecorderOption {
        /** 指定录制的时长（s)，到达自动停止。最大 7200，最小 5 */
        duration?: number;
        /** 视频 fps */
        fps?: number;
        /** 视频关键帧间隔 */
        gop?: number;
        /** 视频比特率（kbps），最小值 600，最大值 3000 */
        videoBitsPerSecond?: number;
    }
    interface CreateOffscreenCanvasOption {
        /** 在自定义组件下，当前组件实例的 this */
        compInst?: Component.TrivialInstance | Page.TrivialInstance;
        /** 画布高度 */
        height?: number;
        /** 创建的离屏 canvas 类型
         *
         * 可选值：
         * - 'webgl': webgl类型上下文;
         * - '2d': 2d类型上下文; */
        type?: "webgl" | "2d";
        /** 画布宽度 */
        width?: number;
    }
    interface CreateRewardedVideoAdOption {
        /** 广告单元 id */
        adUnitId: string;
        /** 是否启用多例模式，默认为false
         *
         * 最低基础库： `2.8.0` */
        multiton?: boolean;
    }
    /** 可选参数 */
    interface CreateWorkerOption {
        /** 是否使用实验worker。在iOS下，实验worker的JS运行效率比非实验worker提升近十倍，如需在worker内进行重度计算的建议开启此选项。同时，实验worker存在极小概率会在系统资源紧张时被系统回收，因此建议配合 worker.onProcessKilled 事件使用，在worker被回收后可重新创建一个。
         *
         * 最低基础库： `2.13.0` */
        useExperimentalWorker?: boolean;
    }
    /** 弹幕内容 */
    interface Danmu {
        /** 弹幕文字 */
        text: string;
        /** 弹幕颜色 */
        color?: string;
    }
    /** 可选的字体描述符 */
    interface DescOption {
        /** 字体样式，可选值为 normal / italic / oblique */
        style?: string;
        /** 设置小型大写字母的字体显示文本，可选值为 normal / small-caps / inherit */
        variant?: string;
        /** 字体粗细，可选值为 normal / bold / 100 / 200../ 900 */
        weight?: string;
    }
    /** 描述符的权限 */
    interface DescriptorPermission {
        /** 读 */
        read?: boolean;
        /** 写 */
        write?: boolean;
    }
    /** 指定 marker 移动到的目标点 */
    interface DestinationOption {
        /** 纬度 */
        latitude: number;
        /** 经度 */
        longitude: number;
    }
    interface DisableAlertBeforeUnloadOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: DisableAlertBeforeUnloadCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: DisableAlertBeforeUnloadFailCallback;
        /** 接口调用成功的回调函数 */
        success?: DisableAlertBeforeUnloadSuccessCallback;
    }
    interface DownloadFileOption {
        /** 下载资源的 url */
        url: string;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: DownloadFileCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: DownloadFileFailCallback;
        /** 指定文件下载后存储的路径 (本地路径)
         *
         * 最低基础库： `1.8.0` */
        filePath?: string;
        /** HTTP 请求的 Header，Header 中不能设置 Referer */
        header?: IAnyObject;
        /** 接口调用成功的回调函数 */
        success?: DownloadFileSuccessCallback;
        /** 超时时间，单位为毫秒
         *
         * 最低基础库： `2.10.0` */
        timeout?: number;
    }
    interface DownloadFileSuccessCallbackResult {
        /** 用户文件路径 (本地路径)。传入 filePath 时会返回，跟传入的 filePath 一致 */
        filePath: string;
        /** 网络请求过程中一些调试信息
         *
         * 最低基础库： `2.10.4` */
        profile: DownloadProfile;
        /** 开发者服务器返回的 HTTP 状态码 */
        statusCode: number;
        /** 临时文件路径 (本地路径)。没传入 filePath 指定文件存储路径时会返回，下载后的文件会存储到一个临时文件 */
        tempFilePath: string;
        errMsg: string;
    }
    /** 网络请求过程中一些调试信息
     *
     * 最低基础库： `2.10.4` */
    interface DownloadProfile {
        /** SSL建立完成的时间,如果不是安全连接,则值为 0 */
        SSLconnectionEnd: number;
        /** SSL建立连接的时间,如果不是安全连接,则值为 0 */
        SSLconnectionStart: number;
        /** HTTP（TCP） 完成建立连接的时间（完成握手），如果是持久连接，则与 fetchStart 值相等。注意如果在传输层发生了错误且重新建立连接，则这里显示的是新建立的连接完成的时间。注意这里握手结束，包括安全连接建立完成、SOCKS 授权通过 */
        connectEnd: number;
        /** HTTP（TCP） 开始建立连接的时间，如果是持久连接，则与 fetchStart 值相等。注意如果在传输层发生了错误且重新建立连接，则这里显示的是新建立的连接开始的时间 */
        connectStart: number;
        /** DNS 域名查询完成的时间，如果使用了本地缓存（即无 DNS 查询）或持久连接，则与 fetchStart 值相等 */
        domainLookupEnd: number;
        /** DNS 域名查询开始的时间，如果使用了本地缓存（即无 DNS 查询）或持久连接，则与 fetchStart 值相等 */
        domainLookupStart: number;
        /** 评估当前网络下载的kbps */
        downstreamThroughputKbpsEstimate: number;
        /** 评估的网络状态 slow 2g/2g/3g/4g */
        estimate_nettype: string;
        /** 组件准备好使用 HTTP 请求抓取资源的时间，这发生在检查本地缓存之前 */
        fetchStart: number;
        /** 协议层根据多个请求评估当前网络的 rtt（仅供参考） */
        httpRttEstimate: number;
        /** 当前请求的IP */
        peerIP: string;
        /** 当前请求的端口 */
        port: number;
        /** 收到字节数 */
        receivedBytedCount: number;
        /** 最后一个 HTTP 重定向完成时的时间。有跳转且是同域名内部的重定向才算，否则值为 0 */
        redirectEnd: number;
        /** 第一个 HTTP 重定向发生时的时间。有跳转且是同域名内的重定向才算，否则值为 0 */
        redirectStart: number;
        /** HTTP请求读取真实文档结束的时间 */
        requestEnd: number;
        /** HTTP请求读取真实文档开始的时间（完成建立连接），包括从本地读取缓存。连接错误重连时，这里显示的也是新建立连接的时间 */
        requestStart: number;
        /** HTTP 响应全部接收完成的时间（获取到最后一个字节），包括从本地读取缓存 */
        responseEnd: number;
        /** HTTP 开始接收响应的时间（获取到第一个字节），包括从本地读取缓存 */
        responseStart: number;
        /** 当次请求连接过程中实时 rtt */
        rtt: number;
        /** 发送的字节数 */
        sendBytesCount: number;
        /** 是否复用连接 */
        socketReused: boolean;
        /** 当前网络的实际下载kbps */
        throughputKbps: number;
        /** 传输层根据多个请求评估的当前网络的 rtt（仅供参考） */
        transportRttEstimate: number;
    }
    interface DownloadTaskOnProgressUpdateCallbackResult {
        /** 下载进度百分比 */
        progress: number;
        /** 预期需要下载的数据总长度，单位 Bytes */
        totalBytesExpectedToWrite: number;
        /** 已经下载的数据长度，单位 Bytes */
        totalBytesWritten: number;
    }
    interface EnableAlertBeforeUnloadOption {
        /** 询问对话框内容 */
        message: string;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: EnableAlertBeforeUnloadCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: EnableAlertBeforeUnloadFailCallback;
        /** 接口调用成功的回调函数 */
        success?: EnableAlertBeforeUnloadSuccessCallback;
    }
    /** 文件读取结果。res.entries 是一个对象，key是文件路径，value是一个对象 FileItem ，表示该文件的读取结果。每个 FileItem 包含 data （文件内容） 和 errMsg （错误信息） 属性。 */
    interface EntriesResult {
        /** 文件路径 */
        [path: string]: ZipFileItem;
    }
    /** 要读取的压缩包内的文件列表（当传入"all" 时表示读取压缩包内所有文件） */
    interface EntryItem {
        /** 压缩包内文件路径 */
        path: string;
        /** 指定读取文件的字符编码，如果不传 encoding，则以 ArrayBuffer 格式读取文件的二进制内容
         *
         * 可选值：
         * - 'ascii': ;
         * - 'base64': ;
         * - 'binary': ;
         * - 'hex': ;
         * - 'ucs2': 以小端序读取;
         * - 'ucs-2': 以小端序读取;
         * - 'utf16le': 以小端序读取;
         * - 'utf-16le': 以小端序读取;
         * - 'utf-8': ;
         * - 'utf8': ;
         * - 'latin1': ; */
        encoding?:
            | "ascii"
            | "base64"
            | "binary"
            | "hex"
            | "ucs2"
            | "ucs-2"
            | "utf16le"
            | "utf-16le"
            | "utf-8"
            | "utf8"
            | "latin1";
        /** 指定文件的长度，如果不指定，则读到文件末尾。有效范围：[1, fileLength]。单位：byte */
        length?: number;
        /** 从文件指定位置开始读，如果不指定，则从文件头开始读。读取的范围应该是左闭右开区间 [position, position+length)。有效范围：[0, fileLength - 1]。单位：byte */
        position?: number;
    }
    interface ExitFullScreenOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: ExitFullScreenCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: ExitFullScreenFailCallback;
        /** 接口调用成功的回调函数 */
        success?: ExitFullScreenSuccessCallback;
    }
    interface ExitMiniProgramOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: ExitMiniProgramCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: ExitMiniProgramFailCallback;
        /** 接口调用成功的回调函数 */
        success?: ExitMiniProgramSuccessCallback;
    }
    interface ExitPictureInPictureOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: ExitPictureInPictureCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: ExitPictureInPictureFailCallback;
        /** 接口调用成功的回调函数 */
        success?: ExitPictureInPictureSuccessCallback;
    }
    interface ExitVoIPChatOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: ExitVoIPChatCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: ExitVoIPChatFailCallback;
        /** 接口调用成功的回调函数 */
        success?: ExitVoIPChatSuccessCallback;
    }
    interface ExtractDataSourceOption {
        /** 视频源地址，只支持本地文件 */
        source: string;
    }
    interface Fields {
        /** 指定样式名列表，返回节点对应样式名的当前值
         *
         * 最低基础库： `2.1.0` */
        computedStyle?: string[];
        /** 是否返回节点对应的 Context 对象
         *
         * 最低基础库： `2.4.2` */
        context?: boolean;
        /** 是否返回节点 dataset */
        dataset?: boolean;
        /** 是否返回节点 id */
        id?: boolean;
        /** 是否返回节点 mark */
        mark?: boolean;
        /** 是否返回节点对应的 Node 实例
         *
         * 最低基础库： `2.7.0` */
        node?: boolean;
        /** 指定属性名列表，返回节点对应属性名的当前属性值（只能获得组件文档中标注的常规属性值，id class style 和事件绑定的属性值不可获取） */
        properties?: string[];
        /** 是否返回节点布局位置（`left` `right` `top` `bottom`） */
        rect?: boolean;
        /** 否 是否返回节点的 `scrollLeft` `scrollTop`，节点必须是 `scroll-view` 或者 `viewport` */
        scrollOffset?: boolean;
        /** 是否返回节点尺寸（`width` `height`） */
        size?: boolean;
    }
    interface FileItem {
        /** 文件保存时的时间戳，从1970/01/01 08:00:00 到当前时间的秒数 */
        createTime: number;
        /** 文件路径 (本地路径) */
        filePath: string;
        /** 本地文件大小，以字节为单位 */
        size: number;
    }
    interface FileSystemManagerCloseOption {
        /** 需要被关闭的文件描述符。fd 通过 [FileSystemManager.open](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.open.html) 或 [FileSystemManager.openSync](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.openSync.html) 接口获得 */
        fd: string;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: FileSystemManagerCloseCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: FileSystemManagerCloseFailCallback;
        /** 接口调用成功的回调函数 */
        success?: FileSystemManagerCloseSuccessCallback;
    }
    interface FileSystemManagerGetFileInfoOption {
        /** 要读取的文件路径 (本地路径) */
        filePath: string;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetFileInfoCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: FileSystemManagerGetFileInfoFailCallback;
        /** 接口调用成功的回调函数 */
        success?: FileSystemManagerGetFileInfoSuccessCallback;
    }
    interface FileSystemManagerGetFileInfoSuccessCallbackResult {
        /** 文件大小，以字节为单位 */
        size: number;
        errMsg: string;
    }
    interface FileSystemManagerGetSavedFileListOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetSavedFileListCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: GetSavedFileListFailCallback;
        /** 接口调用成功的回调函数 */
        success?: FileSystemManagerGetSavedFileListSuccessCallback;
    }
    interface FileSystemManagerGetSavedFileListSuccessCallbackResult {
        /** 文件数组 */
        fileList: FileItem[];
        errMsg: string;
    }
    interface FileSystemManagerRemoveSavedFileOption {
        /** 需要删除的文件路径 (本地路径) */
        filePath: string;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: RemoveSavedFileCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: FileSystemManagerRemoveSavedFileFailCallback;
        /** 接口调用成功的回调函数 */
        success?: RemoveSavedFileSuccessCallback;
    }
    interface FileSystemManagerSaveFileOption {
        /** 临时存储文件路径 (本地路径) */
        tempFilePath: string;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: SaveFileCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: FileSystemManagerSaveFileFailCallback;
        /** 要存储的文件路径 (本地路径) */
        filePath?: string;
        /** 接口调用成功的回调函数 */
        success?: SaveFileSuccessCallback;
    }
    /** 打开的文件信息数组，只有从聊天素材场景打开（scene为1173）才会携带该参数 */
    interface ForwardMaterials {
        /** 文件名 */
        name: string;
        /** 文件路径（如果是webview则是url） */
        path: string;
        /** 文件大小 */
        size: number;
        /** 文件的mimetype类型 */
        type: string;
    }
    /** 视频帧数据，若取不到则返回 null。当缓冲区为空的时候可能暂停取不到数据。 */
    interface FrameDataOptions {
        /** 帧数据 */
        data: ArrayBuffer;
        /** 帧数据高度 */
        height: number;
        /** 帧原始 dts */
        pkDts: number;
        /** 帧原始 pts */
        pkPts: number;
        /** 帧数据宽度 */
        width: number;
    }
    interface FromScreenLocationOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: FromScreenLocationCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: FromScreenLocationFailCallback;
        /** 接口调用成功的回调函数 */
        success?: FromScreenLocationSuccessCallback;
    }
    interface FstatFailCallbackResult {
        /** 错误信息
         *
         * 可选值：
         * - 'bad file descriptor': 无效的文件描述符;
         * - 'fail permission denied': 指定的 fd 路径没有读权限; */
        errMsg: string;
    }
    interface FstatOption {
        /** 文件描述符。fd 通过 [FileSystemManager.open](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.open.html) 或 [FileSystemManager.openSync](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.openSync.html) 接口获得 */
        fd: string;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: FstatCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: FstatFailCallback;
        /** 接口调用成功的回调函数 */
        success?: FstatSuccessCallback;
    }
    interface FstatSuccessCallbackResult {
        /** [Stats](https://developers.weixin.qq.com/miniprogram/dev/api/file/Stats.html)
         *
         * Stats 对象，包含了文件的状态信息 */
        stats: Stats;
        errMsg: string;
    }
    interface FstatSyncOption {
        /** 文件描述符。fd 通过 [FileSystemManager.open](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.open.html) 或 [FileSystemManager.openSync](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.openSync.html) 接口获得 */
        fd: string;
    }
    interface FtruncateFailCallbackResult {
        /** 错误信息
         *
         * 可选值：
         * - 'bad file descriptor': 无效的文件描述符;
         * - 'fail permission denied': 指定的 fd 没有写权限;
         * - 'fail the maximum size of the file storage limit is exceeded': 存储空间不足;
         * - 'fail sdcard not mounted': android sdcard 挂载失败; */
        errMsg: string;
    }
    interface FtruncateOption {
        /** 文件描述符。fd 通过 [FileSystemManager.open](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.open.html) 或 [FileSystemManager.openSync](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.openSync.html) 接口获得 */
        fd: string;
        /** 截断位置，默认0。如果 length 小于文件长度（单位：字节），则只有前面 length 个字节会保留在文件中，其余内容会被删除；如果 length 大于文件长度，则会对其进行扩展，并且扩展部分将填充空字节（'\0'） */
        length: number;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: FtruncateCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: FtruncateFailCallback;
        /** 接口调用成功的回调函数 */
        success?: FtruncateSuccessCallback;
    }
    interface FtruncateSyncOption {
        /** 文件描述符。fd 通过 [FileSystemManager.open](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.open.html) 或 [FileSystemManager.openSync](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.openSync.html) 接口获得 */
        fd: string;
        /** 截断位置，默认0。如果 length 小于文件长度（单位：字节），则只有前面 length 个字节会保留在文件中，其余内容会被删除；如果 length 大于文件长度，则会对其进行扩展，并且扩展部分将填充空字节（'\0'） */
        length: number;
    }
    interface GetAtqaOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetAtqaCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: GetAtqaFailCallback;
        /** 接口调用成功的回调函数 */
        success?: GetAtqaSuccessCallback;
    }
    interface GetAtqaSuccessCallbackResult {
        /** 返回 ATQA/SENS_RES 数据 */
        atqa: ArrayBuffer;
        errMsg: string;
    }
    interface GetAvailableAudioSourcesOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetAvailableAudioSourcesCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: GetAvailableAudioSourcesFailCallback;
        /** 接口调用成功的回调函数 */
        success?: GetAvailableAudioSourcesSuccessCallback;
    }
    interface GetAvailableAudioSourcesSuccessCallbackResult {
        /** 支持的音频输入源列表，可在 [RecorderManager.start()](https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/RecorderManager.start.html) 接口中使用。返回值定义参考 https://developer.android.com/reference/kotlin/android/media/MediaRecorder.AudioSource
         *
         * 可选值：
         * - 'auto': 自动设置，默认使用手机麦克风，插上耳麦后自动切换使用耳机麦克风，所有平台适用;
         * - 'buildInMic': 手机麦克风，仅限 iOS;
         * - 'headsetMic': 耳机麦克风，仅限 iOS;
         * - 'mic': 麦克风（没插耳麦时是手机麦克风，插耳麦时是耳机麦克风），仅限 Android;
         * - 'camcorder': 同 mic，适用于录制音视频内容，仅限 Android;
         * - 'voice_communication': 同 mic，适用于实时沟通，仅限 Android;
         * - 'voice_recognition': 同 mic，适用于语音识别，仅限 Android; */
        audioSources: Array<
            | "auto"
            | "buildInMic"
            | "headsetMic"
            | "mic"
            | "camcorder"
            | "voice_communication"
            | "voice_recognition"
        >;
        errMsg: string;
    }
    interface GetBLEDeviceCharacteristicsOption {
        /** 蓝牙设备 id */
        deviceId: string;
        /** 蓝牙服务 uuid，需要使用 `getBLEDeviceServices` 获取 */
        serviceId: string;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetBLEDeviceCharacteristicsCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: GetBLEDeviceCharacteristicsFailCallback;
        /** 接口调用成功的回调函数 */
        success?: GetBLEDeviceCharacteristicsSuccessCallback;
    }
    interface GetBLEDeviceCharacteristicsSuccessCallbackResult {
        /** 设备特征值列表 */
        characteristics: BLECharacteristic[];
        errMsg: string;
    }
    interface GetBLEDeviceRSSIOption {
        /** 蓝牙设备 id */
        deviceId: string;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetBLEDeviceRSSICompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: GetBLEDeviceRSSIFailCallback;
        /** 接口调用成功的回调函数 */
        success?: GetBLEDeviceRSSISuccessCallback;
    }
    interface GetBLEDeviceRSSISuccessCallbackResult {
        /** 信号强度 */
        RSSI: number;
        errMsg: string;
    }
    interface GetBLEDeviceServicesOption {
        /** 蓝牙设备 id */
        deviceId: string;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetBLEDeviceServicesCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: GetBLEDeviceServicesFailCallback;
        /** 接口调用成功的回调函数 */
        success?: GetBLEDeviceServicesSuccessCallback;
    }
    interface GetBLEDeviceServicesSuccessCallbackResult {
        /** 设备服务列表 */
        services: BLEService[];
        errMsg: string;
    }
    interface GetBackgroundAudioPlayerStateOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetBackgroundAudioPlayerStateCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: GetBackgroundAudioPlayerStateFailCallback;
        /** 接口调用成功的回调函数 */
        success?: GetBackgroundAudioPlayerStateSuccessCallback;
    }
    interface GetBackgroundAudioPlayerStateSuccessCallbackResult {
        /** 选定音频的播放位置（单位：s），只有在音乐播放中时返回 */
        currentPosition: number;
        /** 歌曲数据链接，只有在音乐播放中时返回 */
        dataUrl: string;
        /** 音频的下载进度百分比，只有在音乐播放中时返回 */
        downloadPercent: number;
        /** 选定音频的长度（单位：s），只有在音乐播放中时返回 */
        duration: number;
        /** 播放状态
         *
         * 可选值：
         * - 0: 暂停中;
         * - 1: 播放中;
         * - 2: 没有音乐播放; */
        status: 0 | 1 | 2;
        errMsg: string;
    }
    interface GetBackgroundFetchDataOption {
        /** 取值为 periodic */
        fetchType: string;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetBackgroundFetchDataCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: GetBackgroundFetchDataFailCallback;
        /** 接口调用成功的回调函数 */
        success?: GetBackgroundFetchDataSuccessCallback;
    }
    interface GetBackgroundFetchTokenOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetBackgroundFetchTokenCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: GetBackgroundFetchTokenFailCallback;
        /** 接口调用成功的回调函数 */
        success?: GetBackgroundFetchTokenSuccessCallback;
    }
    interface GetBatteryInfoOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetBatteryInfoCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: GetBatteryInfoFailCallback;
        /** 接口调用成功的回调函数 */
        success?: GetBatteryInfoSuccessCallback;
    }
    interface GetBatteryInfoSuccessCallbackResult {
        /** 是否正在充电中 */
        isCharging: boolean;
        /** 设备电量，范围 1 - 100 */
        level: string;
        errMsg: string;
    }
    interface GetBatteryInfoSyncResult {
        /** 是否正在充电中 */
        isCharging: boolean;
        /** 设备电量，范围 1 - 100 */
        level: string;
    }
    interface GetBeaconsOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetBeaconsCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: GetBeaconsFailCallback;
        /** 接口调用成功的回调函数 */
        success?: GetBeaconsSuccessCallback;
    }
    interface GetBeaconsSuccessCallbackResult {
        /** iBeacon 设备列表 */
        beacons: IBeaconInfo[];
        errMsg: string;
    }
    interface GetBluetoothAdapterStateOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetBluetoothAdapterStateCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: GetBluetoothAdapterStateFailCallback;
        /** 接口调用成功的回调函数 */
        success?: GetBluetoothAdapterStateSuccessCallback;
    }
    interface GetBluetoothAdapterStateSuccessCallbackResult {
        /** 蓝牙适配器是否可用 */
        available: boolean;
        /** 是否正在搜索设备 */
        discovering: boolean;
        errMsg: string;
    }
    interface GetBluetoothDevicesOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetBluetoothDevicesCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: GetBluetoothDevicesFailCallback;
        /** 接口调用成功的回调函数 */
        success?: GetBluetoothDevicesSuccessCallback;
    }
    interface GetBluetoothDevicesSuccessCallbackResult {
        /** uuid 对应的的已连接设备列表 */
        devices: BlueToothDevice[];
        errMsg: string;
    }
    interface GetCenterLocationOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetCenterLocationCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: GetCenterLocationFailCallback;
        /** 图标路径，支持网络路径、本地路径、代码包路径 */
        iconPath?: string;
        /** 接口调用成功的回调函数 */
        success?: GetCenterLocationSuccessCallback;
    }
    interface GetCenterLocationSuccessCallbackResult {
        /** 纬度 */
        latitude: number;
        /** 经度 */
        longitude: number;
        errMsg: string;
    }
    interface GetChannelsLiveInfoOption {
        /** 视频号 id */
        finderUserName: string;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetChannelsLiveInfoCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: GetChannelsLiveInfoFailCallback;
        /** 接口调用成功的回调函数 */
        success?: GetChannelsLiveInfoSuccessCallback;
    }
    interface GetChannelsLiveInfoSuccessCallbackResult {
        /** 直播描述 */
        description: string;
        /** 直播 feedId */
        feedId: string;
        /** 直播封面 */
        headUrl: string;
        /** 直播名称 */
        nickname: string;
        /** 直播 nonceId */
        nonceId: string;
        /** 直播状态，1未开播，2直播中，3直播结束，4直播准备中 */
        status: number;
        errMsg: string;
    }
    interface GetClipboardDataOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetClipboardDataCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: GetClipboardDataFailCallback;
        /** 接口调用成功的回调函数 */
        success?: GetClipboardDataSuccessCallback;
    }
    interface GetClipboardDataSuccessCallbackOption {
        /** 剪贴板的内容 */
        data: string;
    }
    interface GetConnectedBluetoothDevicesOption {
        /** 蓝牙设备主 service 的 uuid 列表 */
        services: string[];
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetConnectedBluetoothDevicesCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: GetConnectedBluetoothDevicesFailCallback;
        /** 接口调用成功的回调函数 */
        success?: GetConnectedBluetoothDevicesSuccessCallback;
    }
    interface GetConnectedBluetoothDevicesSuccessCallbackResult {
        /** 搜索到的设备列表 */
        devices: BluetoothDeviceInfo[];
        errMsg: string;
    }
    interface GetConnectedWifiOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetConnectedWifiCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: GetConnectedWifiFailCallback;
        /** 接口调用成功的回调函数 */
        success?: GetConnectedWifiSuccessCallback;
    }
    interface GetConnectedWifiSuccessCallbackResult {
        /** [WifiInfo](https://developers.weixin.qq.com/miniprogram/dev/api/device/wifi/WifiInfo.html)
         *
         * Wi-Fi 信息 */
        wifi: WifiInfo;
        errMsg: string;
    }
    interface GetContentsOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetContentsCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: GetContentsFailCallback;
        /** 接口调用成功的回调函数 */
        success?: GetContentsSuccessCallback;
    }
    interface GetContentsSuccessCallbackResult {
        /** 表示内容的delta对象 */
        delta: IAnyObject;
        /** 带标签的HTML内容 */
        html: string;
        /** 纯文本内容 */
        text: string;
        errMsg: string;
    }
    interface GetExtConfigOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetExtConfigCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: GetExtConfigFailCallback;
        /** 接口调用成功的回调函数 */
        success?: GetExtConfigSuccessCallback;
    }
    interface GetExtConfigSuccessCallbackResult {
        /** 第三方平台自定义的数据 */
        extConfig: IAnyObject;
        errMsg: string;
    }
    interface GetFileInfoFailCallbackResult {
        /** 错误信息
         *
         * 可选值：
         * - 'fail file not exist': 指定的 filePath 找不到文件; */
        errMsg: string;
    }
    interface GetGroupEnterInfoOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetGroupEnterInfoCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: GetGroupEnterInfoFailCallback;
        /** 接口调用成功的回调函数 */
        success?: GetGroupEnterInfoSuccessCallback;
    }
    interface GetGroupEnterInfoSuccessCallbackResult {
        /** 敏感数据对应的云 ID，开通[云开发](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html)的小程序才会返回，可通过云调用直接获取开放数据，详细见[云调用直接获取开放数据](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html#method-cloud)
         *
         * 最低基础库： `2.7.0` */
        cloudID: string;
        /** 包括敏感数据在内的完整转发信息的加密数据，详细见[加密数据解密算法](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html) */
        encryptedData: string;
        /** 错误信息 */
        errMsg: string;
        /** 加密算法的初始向量，详细见[加密数据解密算法](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html) */
        iv: string;
    }
    interface GetHCEStateOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetHCEStateCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: GetHCEStateFailCallback;
        /** 接口调用成功的回调函数 */
        success?: GetHCEStateSuccessCallback;
    }
    interface GetHistoricalBytesOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetHistoricalBytesCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: GetHistoricalBytesFailCallback;
        /** 接口调用成功的回调函数 */
        success?: GetHistoricalBytesSuccessCallback;
    }
    interface GetHistoricalBytesSuccessCallbackResult {
        /** 返回历史二进制数据 */
        histBytes: ArrayBuffer;
        errMsg: string;
    }
    interface GetImageInfoOption {
        /** 图片的路径，支持网络路径、本地路径、代码包路径 */
        src: string;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetImageInfoCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: GetImageInfoFailCallback;
        /** 接口调用成功的回调函数 */
        success?: GetImageInfoSuccessCallback;
    }
    interface GetImageInfoSuccessCallbackResult {
        /** 图片原始高度，单位px。不考虑旋转。 */
        height: number;
        /** [拍照时设备方向](http://sylvana.net/jpegcrop/exif_orientation.html)
         *
         * 可选值：
         * - 'up': 默认方向（手机横持拍照），对应 Exif 中的 1。或无 orientation 信息。;
         * - 'up-mirrored': 同 up，但镜像翻转，对应 Exif 中的 2;
         * - 'down': 旋转180度，对应 Exif 中的 3;
         * - 'down-mirrored': 同 down，但镜像翻转，对应 Exif 中的 4;
         * - 'left-mirrored': 同 left，但镜像翻转，对应 Exif 中的 5;
         * - 'right': 顺时针旋转90度，对应 Exif 中的 6;
         * - 'right-mirrored': 同 right，但镜像翻转，对应 Exif 中的 7;
         * - 'left': 逆时针旋转90度，对应 Exif 中的 8;
         *
         * 最低基础库： `1.9.90` */
        orientation:
            | "up"
            | "up-mirrored"
            | "down"
            | "down-mirrored"
            | "left-mirrored"
            | "right"
            | "right-mirrored"
            | "left";
        /** 图片的本地路径 */
        path: string;
        /** 图片格式
         *
         * 最低基础库： `1.9.90` */
        type: string;
        /** 图片原始宽度，单位px。不考虑旋转。 */
        width: number;
        errMsg: string;
    }
    interface GetLatestUserKeyOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetLatestUserKeyCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: GetLatestUserKeyFailCallback;
        /** 接口调用成功的回调函数 */
        success?: GetLatestUserKeySuccessCallback;
    }
    interface GetLatestUserKeySuccessCallbackResult {
        /** 用户加密密钥 */
        encryptKey: string;
        /** 密钥过期时间 */
        expireTime: number;
        /** 密钥初始向量 */
        iv: string;
        /** 密钥版本 */
        version: number;
        errMsg: string;
    }
    interface GetLocationOption {
        /** 传入 true 会返回高度信息，由于获取高度需要较高精确度，会减慢接口返回速度
         *
         * 最低基础库： `1.6.0` */
        altitude?: string;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetLocationCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: GetLocationFailCallback;
        /** 高精度定位超时时间(ms)，指定时间内返回最高精度，该值3000ms以上高精度定位才有效果
         *
         * 最低基础库： `2.9.0` */
        highAccuracyExpireTime?: number;
        /** 开启高精度定位
         *
         * 最低基础库： `2.9.0` */
        isHighAccuracy?: boolean;
        /** 接口调用成功的回调函数 */
        success?: GetLocationSuccessCallback;
        /** wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标 */
        type?: string;
    }
    interface GetLocationSuccessCallbackResult {
        /** 位置的精确度 */
        accuracy: number;
        /** 高度，单位 m
         *
         * 最低基础库： `1.2.0` */
        altitude: number;
        /** 水平精度，单位 m
         *
         * 最低基础库： `1.2.0` */
        horizontalAccuracy: number;
        /** 纬度，范围为 -90~90，负数表示南纬 */
        latitude: number;
        /** 经度，范围为 -180~180，负数表示西经 */
        longitude: number;
        /** 速度，单位 m/s */
        speed: number;
        /** 垂直精度，单位 m（Android 无法获取，返回 0）
         *
         * 最低基础库： `1.2.0` */
        verticalAccuracy: number;
        errMsg: string;
    }
    interface GetLogManagerOption {
        /** 取值为0/1，取值为0表示会把 `App`、`Page` 的生命周期函数和 `wx` 命名空间下的函数调用写入日志，取值为1则不会。默认值是 0
         *
         * 最低基础库： `2.3.2` */
        level?: number;
    }
    interface GetMaxTransceiveLengthOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetMaxTransceiveLengthCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: GetMaxTransceiveLengthFailCallback;
        /** 接口调用成功的回调函数 */
        success?: GetMaxTransceiveLengthSuccessCallback;
    }
    interface GetMaxTransceiveLengthSuccessCallbackResult {
        /** 最大传输长度 */
        length: number;
        errMsg: string;
    }
    interface GetNetworkTypeOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetNetworkTypeCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: GetNetworkTypeFailCallback;
        /** 接口调用成功的回调函数 */
        success?: GetNetworkTypeSuccessCallback;
    }
    interface GetNetworkTypeSuccessCallbackResult {
        /** 网络类型
         *
         * 可选值：
         * - 'wifi': wifi 网络;
         * - '2g': 2g 网络;
         * - '3g': 3g 网络;
         * - '4g': 4g 网络;
         * - '5g': 5g 网络;
         * - 'unknown': Android 下不常见的网络类型;
         * - 'none': 无网络; */
        networkType: "wifi" | "2g" | "3g" | "4g" | "5g" | "unknown" | "none";
        /** 信号强弱，单位 dbm */
        signalStrength: number;
        errMsg: string;
    }
    interface GetRandomValuesOption {
        /** 整数，生成随机数的字节数，最大 1048576 */
        length: number;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetRandomValuesCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: GetRandomValuesFailCallback;
        /** 接口调用成功的回调函数 */
        success?: GetRandomValuesSuccessCallback;
    }
    interface GetRandomValuesSuccessCallbackResult {
        /** 随机数内容，长度为传入的字节数 */
        randomValues: ArrayBuffer;
        errMsg: string;
    }
    interface GetRegionOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetRegionCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: GetRegionFailCallback;
        /** 接口调用成功的回调函数 */
        success?: GetRegionSuccessCallback;
    }
    interface GetRegionSuccessCallbackResult {
        /** 东北角经纬度 */
        northeast: MapPostion;
        /** 西南角经纬度 */
        southwest: MapPostion;
        errMsg: string;
    }
    interface GetRotateOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetRotateCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: GetRotateFailCallback;
        /** 接口调用成功的回调函数 */
        success?: GetRotateSuccessCallback;
    }
    interface GetRotateSuccessCallbackResult {
        /** 旋转角 */
        rotate: number;
        errMsg: string;
    }
    interface GetSakOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetSakCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: GetSakFailCallback;
        /** 接口调用成功的回调函数 */
        success?: GetSakSuccessCallback;
    }
    interface GetSakSuccessCallbackResult {
        /** 返回 SAK/SEL_RES 数据 */
        sak: number;
        errMsg: string;
    }
    interface GetSavedFileInfoOption {
        /** 文件路径 (本地路径) */
        filePath: string;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetSavedFileInfoCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: GetSavedFileInfoFailCallback;
        /** 接口调用成功的回调函数 */
        success?: GetSavedFileInfoSuccessCallback;
    }
    interface GetSavedFileInfoSuccessCallbackResult {
        /** 文件保存时的时间戳，从1970/01/01 08:00:00 到该时刻的秒数 */
        createTime: number;
        /** 文件大小，单位 B */
        size: number;
        errMsg: string;
    }
    interface GetScaleOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetScaleCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: GetScaleFailCallback;
        /** 接口调用成功的回调函数 */
        success?: GetScaleSuccessCallback;
    }
    interface GetScaleSuccessCallbackResult {
        /** 缩放值 */
        scale: number;
        errMsg: string;
    }
    interface GetScreenBrightnessOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetScreenBrightnessCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: GetScreenBrightnessFailCallback;
        /** 接口调用成功的回调函数 */
        success?: GetScreenBrightnessSuccessCallback;
    }
    interface GetScreenBrightnessSuccessCallbackOption {
        /** 屏幕亮度值，范围 0 ~ 1，0 最暗，1 最亮 */
        value: number;
    }
    interface GetSelectedTextRangeOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetSelectedTextRangeCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: GetSelectedTextRangeFailCallback;
        /** 接口调用成功的回调函数 */
        success?: GetSelectedTextRangeSuccessCallback;
    }
    interface GetSelectedTextRangeSuccessCallbackResult {
        /** 输入框光标结束位置 */
        end: number;
        /** 输入框光标起始位置 */
        start: number;
        errMsg: string;
    }
    interface GetSelectionTextOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetSelectionTextCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: GetSelectionTextFailCallback;
        /** 接口调用成功的回调函数 */
        success?: GetSelectionTextSuccessCallback;
    }
    interface GetSelectionTextSuccessCallbackResult {
        /** 纯文本内容 */
        text: string;
        errMsg: string;
    }
    interface GetSettingOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetSettingCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: GetSettingFailCallback;
        /** 接口调用成功的回调函数 */
        success?: GetSettingSuccessCallback;
        /** 是否同时获取用户订阅消息的订阅状态，默认不获取。注意：withSubscriptions 只返回用户勾选过订阅面板中的“总是保持以上选择，不再询问”的订阅消息。
         *
         * 最低基础库： `2.10.1` */
        withSubscriptions?: boolean;
    }
    interface GetSettingSuccessCallbackResult {
        /** [AuthSetting](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/setting/AuthSetting.html)
         *
         * 用户授权结果 */
        authSetting: AuthSetting;
        /** [SubscriptionsSetting](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/setting/SubscriptionsSetting.html)
         *
         * 用户订阅消息设置，接口参数`withSubscriptions`值为`true`时才会返回。
         *
         * 最低基础库： `2.10.1` */
        subscriptionsSetting: SubscriptionsSetting;
        /** [AuthSetting](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/setting/AuthSetting.html)
         *
         * 在插件中调用时，当前宿主小程序的用户授权结果 */
        miniprogramAuthSetting?: AuthSetting;
        errMsg: string;
    }
    interface GetShareInfoOption {
        /** shareTicket */
        shareTicket: string;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetShareInfoCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: GetShareInfoFailCallback;
        /** 接口调用成功的回调函数 */
        success?: GetShareInfoSuccessCallback;
        /** 超时时间，单位 ms
         *
         * 最低基础库： `1.9.90` */
        timeout?: number;
    }
    interface GetSkewOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetSkewCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: GetSkewFailCallback;
        /** 接口调用成功的回调函数 */
        success?: GetSkewSuccessCallback;
    }
    interface GetSkewSuccessCallbackResult {
        /** 倾斜角 */
        skew: number;
        errMsg: string;
    }
    interface GetStorageInfoOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetStorageInfoCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: GetStorageInfoFailCallback;
        /** 接口调用成功的回调函数 */
        success?: GetStorageInfoSuccessCallback;
    }
    interface GetStorageInfoSuccessCallbackOption {
        /** 当前占用的空间大小, 单位 KB */
        currentSize: number;
        /** 当前 storage 中所有的 key */
        keys: string[];
        /** 限制的空间大小，单位 KB */
        limitSize: number;
    }
    interface GetStorageInfoSyncOption {
        /** 当前占用的空间大小, 单位 KB */
        currentSize: number;
        /** 当前 storage 中所有的 key */
        keys: string[];
        /** 限制的空间大小，单位 KB */
        limitSize: number;
    }
    interface GetStorageOption<T = any> {
        /** 本地缓存中指定的 key */
        key: string;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetStorageCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: GetStorageFailCallback;
        /** 接口调用成功的回调函数 */
        success?: GetStorageSuccessCallback<T>;
    }
    interface GetStorageSuccessCallbackResult<T = any> {
        /** key对应的内容 */
        data: T;
        errMsg: string;
    }
    interface GetSystemInfoAsyncOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetSystemInfoAsyncCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: GetSystemInfoAsyncFailCallback;
        /** 接口调用成功的回调函数 */
        success?: GetSystemInfoAsyncSuccessCallback;
    }
    interface GetSystemInfoOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetSystemInfoCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: GetSystemInfoFailCallback;
        /** 接口调用成功的回调函数 */
        success?: GetSystemInfoSuccessCallback;
    }
    interface GetUserInfoOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetUserInfoCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: GetUserInfoFailCallback;
        /** 显示用户信息的语言
         *
         * 可选值：
         * - 'en': 英文;
         * - 'zh_CN': 简体中文;
         * - 'zh_TW': 繁体中文; */
        lang?: "en" | "zh_CN" | "zh_TW";
        /** 接口调用成功的回调函数 */
        success?: GetUserInfoSuccessCallback;
        /** 是否带上登录态信息。当 withCredentials 为 true 时，要求此前有调用过 wx.login 且登录态尚未过期，此时返回的数据会包含 encryptedData, iv 等敏感信息；当 withCredentials 为 false 时，不要求有登录态，返回的数据不包含 encryptedData, iv 等敏感信息。 */
        withCredentials?: boolean;
    }
    interface GetUserInfoSuccessCallbackResult {
        /** 敏感数据对应的云 ID，开通[云开发](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html)的小程序才会返回，可通过云调用直接获取开放数据，详细见[云调用直接获取开放数据](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html#method-cloud)
         *
         * 最低基础库： `2.7.0` */
        cloudID: string;
        /** 包括敏感数据在内的完整用户信息的加密数据，详见 [用户数据的签名验证和加解密]((signature#加密数据解密算法)) */
        encryptedData: string;
        /** 加密算法的初始向量，详见 [用户数据的签名验证和加解密]((signature#加密数据解密算法)) */
        iv: string;
        /** 不包括敏感信息的原始数据字符串，用于计算签名 */
        rawData: string;
        /** 使用 sha1( rawData + sessionkey ) 得到字符串，用于校验用户信息，详见 [用户数据的签名验证和加解密](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html) */
        signature: string;
        /** [UserInfo](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/user-info/UserInfo.html)
         *
         * 用户信息对象，不包含 openid 等敏感信息 */
        userInfo: UserInfo;
        errMsg: string;
    }
    interface GetUserProfileOption {
        /** 声明获取用户个人信息后的用途，不超过30个字符 */
        desc: string;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetUserProfileCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: GetUserProfileFailCallback;
        /** 显示用户信息的语言
         *
         * 可选值：
         * - 'en': 英文;
         * - 'zh_CN': 简体中文;
         * - 'zh_TW': 繁体中文; */
        lang?: "en" | "zh_CN" | "zh_TW";
        /** 接口调用成功的回调函数 */
        success?: GetUserProfileSuccessCallback;
    }
    interface GetUserProfileSuccessCallbackResult {
        /** 敏感数据对应的云 ID，开通[云开发](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html)的小程序才会返回，可通过云调用直接获取开放数据，详细见[云调用直接获取开放数据](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html#method-cloud)
         *
         * 最低基础库： `2.10.4` */
        cloudID: string;
        /** 包括敏感数据在内的完整用户信息的加密数据，详见 [用户数据的签名验证和加解密]((signature#加密数据解密算法))
         *
         * 最低基础库： `2.10.4` */
        encryptedData: string;
        /** 加密算法的初始向量，详见 [用户数据的签名验证和加解密]((signature#加密数据解密算法))
         *
         * 最低基础库： `2.10.4` */
        iv: string;
        /** 不包括敏感信息的原始数据字符串，用于计算签名
         *
         * 最低基础库： `2.10.4` */
        rawData: string;
        /** 使用 sha1( rawData + sessionkey ) 得到字符串，用于校验用户信息，详见 [用户数据的签名验证和加解密](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html)
         *
         * 最低基础库： `2.10.4` */
        signature: string;
        /** [UserInfo](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/user-info/UserInfo.html)
         *
         * 用户信息对象
         *
         * 最低基础库： `2.10.4` */
        userInfo: UserInfo;
        errMsg: string;
    }
    interface GetVideoInfoOption {
        /** 视频文件路径，可以是临时文件路径也可以是永久文件路径 */
        src: string;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetVideoInfoCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: GetVideoInfoFailCallback;
        /** 接口调用成功的回调函数 */
        success?: GetVideoInfoSuccessCallback;
    }
    interface GetVideoInfoSuccessCallbackResult {
        /** 视频码率，单位 kbps */
        bitrate: number;
        /** 视频长度 */
        duration: number;
        /** 视频帧率 */
        fps: number;
        /** 视频的长，单位 px */
        height: number;
        /** 画面方向
         *
         * 可选值：
         * - 'up': 默认;
         * - 'down': 180度旋转;
         * - 'left': 逆时针旋转90度;
         * - 'right': 顺时针旋转90度;
         * - 'up-mirrored': 同up，但水平翻转;
         * - 'down-mirrored': 同down，但水平翻转;
         * - 'left-mirrored': 同left，但垂直翻转;
         * - 'right-mirrored': 同right，但垂直翻转; */
        orientation:
            | "up"
            | "down"
            | "left"
            | "right"
            | "up-mirrored"
            | "down-mirrored"
            | "left-mirrored"
            | "right-mirrored";
        /** 视频大小，单位 kB */
        size: number;
        /** 视频格式 */
        type: string;
        /** 视频的宽，单位 px */
        width: number;
        errMsg: string;
    }
    interface GetWeRunDataOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetWeRunDataCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: GetWeRunDataFailCallback;
        /** 接口调用成功的回调函数 */
        success?: GetWeRunDataSuccessCallback;
    }
    interface GetWeRunDataSuccessCallbackResult {
        /** 敏感数据对应的云 ID，开通云开发的小程序才会返回，可通过云调用直接获取开放数据，详细见[云调用直接获取开放数据](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html#method-cloud)
         *
         * 最低基础库： `2.7.0` */
        cloudID: string;
        /** 包括敏感数据在内的完整用户信息的加密数据，详细见[加密数据解密算法](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html)。解密后得到的数据结构见后文 */
        encryptedData: string;
        /** 加密算法的初始向量，详细见[加密数据解密算法](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html) */
        iv: string;
        errMsg: string;
    }
    interface GetWifiListOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetWifiListCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: GetWifiListFailCallback;
        /** 接口调用成功的回调函数 */
        success?: GetWifiListSuccessCallback;
    }
    interface HideHomeButtonOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: HideHomeButtonCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: HideHomeButtonFailCallback;
        /** 接口调用成功的回调函数 */
        success?: HideHomeButtonSuccessCallback;
    }
    interface HideKeyboardOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: HideKeyboardCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: HideKeyboardFailCallback;
        /** 接口调用成功的回调函数 */
        success?: HideKeyboardSuccessCallback;
    }
    interface HideLoadingOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: HideLoadingCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: HideLoadingFailCallback;
        /** 接口调用成功的回调函数 */
        success?: HideLoadingSuccessCallback;
    }
    interface HideNavigationBarLoadingOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: HideNavigationBarLoadingCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: HideNavigationBarLoadingFailCallback;
        /** 接口调用成功的回调函数 */
        success?: HideNavigationBarLoadingSuccessCallback;
    }
    interface HideShareMenuOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: HideShareMenuCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: HideShareMenuFailCallback;
        /** 本接口为 Beta 版本，暂只在 Android 平台支持。需要隐藏的转发按钮名称列表，默认['shareAppMessage', 'shareTimeline']。按钮名称合法值包含 "shareAppMessage"、"shareTimeline" 两种
         *
         * 最低基础库： `2.11.3` */
        menus?: string[];
        /** 接口调用成功的回调函数 */
        success?: HideShareMenuSuccessCallback;
    }
    interface HideTabBarOption {
        /** 是否需要动画效果 */
        animation?: boolean;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: HideTabBarCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: HideTabBarFailCallback;
        /** 接口调用成功的回调函数 */
        success?: HideTabBarSuccessCallback;
    }
    interface HideTabBarRedDotOption {
        /** tabBar 的哪一项，从左边算起 */
        index: number;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: HideTabBarRedDotCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: HideTabBarRedDotFailCallback;
        /** 接口调用成功的回调函数 */
        success?: HideTabBarRedDotSuccessCallback;
    }
    interface HideToastOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: HideToastCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: HideToastFailCallback;
        /** 接口调用成功的回调函数 */
        success?: HideToastSuccessCallback;
    }
    /** 当前小程序运行的宿主环境
     *
     * 最低基础库： `2.12.3` */
    interface Host {
        /** 宿主 app 对应的 appId */
        appId: string;
    }
    interface IBeaconInfo {
        /** iBeacon 设备的距离 */
        accuracy: number;
        /** iBeacon 设备的主 id */
        major: string;
        /** iBeacon 设备的次 id */
        minor: string;
        /** 表示设备距离的枚举值 */
        proximity: number;
        /** 表示设备的信号强度 */
        rssi: number;
        /** iBeacon 设备广播的 uuid */
        uuid: string;
    }
    /** 图片对象
     *
     * 最低基础库： `2.7.0` */
    interface Image {
        /** 图片的真实高度 */
        height: number;
        /** 图片加载发生错误后触发的回调函数 */
        onerror: (...args: any[]) => any;
        /** 图片加载完成后触发的回调函数 */
        onload: (...args: any[]) => any;
        /** 图片的 URL。v2.11.0 起支持传递 base64 Data URI */
        src: string;
        /** 图片的真实宽度 */
        width: number;
    }
    /** ImageData 对象
     *
     * 最低基础库： `2.9.0` */
    interface ImageData {
        /** 一维数组，包含以 RGBA 顺序的数据，数据使用 0 至 255（包含）的整数表示 */
        data: Uint8ClampedArray;
        /** 使用像素描述 ImageData 的实际高度 */
        height: number;
        /** 使用像素描述 ImageData 的实际宽度 */
        width: number;
    }
    /** 图片的本地临时文件列表
     *
     * 最低基础库： `1.2.0` */
    interface ImageFile {
        /** 本地临时文件路径 (本地路径) */
        path: string;
        /** 本地临时文件大小，单位 B */
        size: number;
    }
    interface IncludePointsOption {
        /** 要显示在可视区域内的坐标点列表 */
        points: MapPostion[];
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: IncludePointsCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: IncludePointsFailCallback;
        /** 坐标点形成的矩形边缘到地图边缘的距离，单位像素。格式为[上,右,下,左]，安卓上只能识别数组第一项，上下左右的padding一致。开发者工具暂不支持padding参数。 */
        padding?: number[];
        /** 接口调用成功的回调函数 */
        success?: IncludePointsSuccessCallback;
    }
    interface InitMarkerClusterOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: InitMarkerClusterCompleteCallback;
        /** 启用默认的聚合样式 */
        enableDefaultStyle?: boolean;
        /** 接口调用失败的回调函数 */
        fail?: InitMarkerClusterFailCallback;
        /** 聚合算法的可聚合距离，即距离小于该值的点会聚合至一起，以像素为单位 */
        gridSize?: boolean;
        /** 接口调用成功的回调函数 */
        success?: InitMarkerClusterSuccessCallback;
        /** 点击已经聚合的标记点时是否实现聚合分离 */
        zoomOnClick?: boolean;
    }
    /** InnerAudioContext 实例，可通过 [wx.createInnerAudioContext](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/wx.createInnerAudioContext.html) 接口获取实例。注意，音频播放过程中，可能被系统中断，可通过 [wx.onAudioInterruptionBegin](https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onAudioInterruptionBegin.html)、[wx.onAudioInterruptionEnd](https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onAudioInterruptionEnd.html)事件来处理这种情况。
*
* **支持格式**
*
*
* | 格式 | iOS  | Android |
* | ---- | ---- | ------- |
* | flac | x    | √       |
* | m4a  | √    | √       |
* | ogg  | x    | √       |
* | ape  | x    | √       |
* | amr  | x    | √       |
* | wma  | x    | √       |
* | wav  | √    | √       |
* | mp3  | √    | √       |
* | mp4  | x    | √       |
* | aac  | √    | √       |
* | aiff | √    | x       |
* | caf  | √    | x       |
*
* **示例代码**
*
*
* ```js
const innerAudioContext = wx.createInnerAudioContext()
innerAudioContext.autoplay = true
innerAudioContext.src = 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46'
innerAudioContext.onPlay(() => {
  console.log('开始播放')
})
innerAudioContext.onError((res) => {
  console.log(res.errMsg)
  console.log(res.errCode)
})
``` */
    interface InnerAudioContext {
        /** 是否自动开始播放，默认为 `false` */
        autoplay: boolean;
        /** 音频缓冲的时间点，仅保证当前播放时间点到此时间点内容已缓冲（只读） */
        buffered: number;
        /** 当前音频的播放位置（单位 s）。只有在当前有合法的 src 时返回，时间保留小数点后 6 位（只读） */
        currentTime: number;
        /** 当前音频的长度（单位 s）。只有在当前有合法的 src 时返回（只读） */
        duration: number;
        /** 是否循环播放，默认为 `false` */
        loop: boolean;
        /** 是否遵循系统静音开关，默认为 `true`。当此参数为 `false` 时，即使用户打开了静音开关，也能继续发出声音。从 2.3.0 版本开始此参数不生效，使用 [wx.setInnerAudioOption](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/wx.setInnerAudioOption.html) 接口统一设置。 */
        obeyMuteSwitch: boolean;
        /** 当前是是否暂停或停止状态（只读） */
        paused: boolean;
        /** 播放速度。范围 0.5-2.0，默认为 1。（Android 需要 6 及以上版本）
         *
         * 最低基础库： `2.11.0` */
        playbackRate: number;
        /** 音频资源的地址，用于直接播放。[2.2.3](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) 开始支持云文件ID */
        src: string;
        /** 开始播放的位置（单位：s），默认为 0 */
        startTime: number;
        /** 音量。范围 0~1。默认为 1
         *
         * 最低基础库： `1.9.90` */
        volume: number;
    }
    interface InnerAudioContextOnErrorCallbackResult {
        /**
         * 可选值：
         * - 10001: 系统错误;
         * - 10002: 网络错误;
         * - 10003: 文件错误;
         * - 10004: 格式错误;
         * - -1: 未知错误; */
        errCode: 10001 | 10002 | 10003 | 10004 | -1;
        errMsg: string;
    }
    interface InsertDividerOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: InsertDividerCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: InsertDividerFailCallback;
        /** 接口调用成功的回调函数 */
        success?: InsertDividerSuccessCallback;
    }
    interface InsertImageOption {
        /** 图片地址，仅支持 http(s)、base64、云图片(2.8.0)、临时文件(2.8.3)。 */
        src: string;
        /** 图像无法显示时的替代文本 */
        alt?: string;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: InsertImageCompleteCallback;
        /** data 被序列化为 name=value;name1=value2 的格式挂在属性 data-custom 上 */
        data?: IAnyObject;
        /** 添加到图片 img 标签上的类名 */
        extClass?: string;
        /** 接口调用失败的回调函数 */
        fail?: InsertImageFailCallback;
        /** 图片高度 (pixels/百分比) */
        height?: string;
        /** 接口调用成功的回调函数 */
        success?: InsertImageSuccessCallback;
        /** 图片宽度（pixels/百分比) */
        width?: string;
    }
    interface InsertTextOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: InsertTextCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: InsertTextFailCallback;
        /** 接口调用成功的回调函数 */
        success?: InsertTextSuccessCallback;
        /** 文本内容 */
        text?: string;
    }
    interface IntersectionObserverObserveCallbackResult {
        /** 目标边界 */
        boundingClientRect: BoundingClientRectResult;
        /** 节点自定义数据属性 */
        dataset: Record<string, any>;
        /** 节点 ID */
        id: string;
        /** 相交比例 */
        intersectionRatio: number;
        /** 相交区域的边界 */
        intersectionRect: IntersectionRectResult;
        /** 参照区域的边界 */
        relativeRect: RelativeRectResult;
        /** 相交检测时的时间戳 */
        time: number;
    }
    /** 相交区域的边界 */
    interface IntersectionRectResult {
        /** 下边界 */
        bottom: number;
        /** 高度 */
        height: number;
        /** 左边界 */
        left: number;
        /** 右边界 */
        right: number;
        /** 上边界 */
        top: number;
        /** 宽度 */
        width: number;
    }
    interface InterstitialAdOnErrorCallbackResult {
        /** 错误码
         *
         * 可选值：
         * - 1000: 后端接口调用失败;
         * - 1001: 参数错误;
         * - 1002: 广告单元无效;
         * - 1003: 内部错误;
         * - 1004: 无合适的广告;
         * - 1005: 广告组件审核中;
         * - 1006: 广告组件被驳回;
         * - 1007: 广告组件被封禁;
         * - 1008: 广告单元已关闭; */
        errCode: 1000 | 1001 | 1002 | 1003 | 1004 | 1005 | 1006 | 1007 | 1008;
        /** 错误信息 */
        errMsg: string;
    }
    interface IsConnectedOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: IsConnectedCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: IsConnectedFailCallback;
        /** 接口调用成功的回调函数 */
        success?: IsConnectedSuccessCallback;
    }
    interface JoinVoIPChatOption {
        /** 小游戏内此房间/群聊的 ID。同一时刻传入相同 groupId 的用户会进入到同个实时语音房间。 */
        groupId: string;
        /** 验证所需的随机字符串 */
        nonceStr: string;
        /** 签名，用于验证小游戏的身份 */
        signature: string;
        /** 验证所需的时间戳 */
        timeStamp: number;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: JoinVoIPChatCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: JoinVoIPChatFailCallback;
        /** 静音设置 */
        muteConfig?: MuteConfig;
        /** 房间类型
         *
         * 可选值：
         * - 'voice': 音频房间，用于语音通话;
         * - 'video': 视频房间，结合 [voip-room](https://developers.weixin.qq.com/miniprogram/dev/component/voip-room.html) 组件可显示成员画面; */
        roomType?: "voice" | "video";
        /** 接口调用成功的回调函数 */
        success?: JoinVoIPChatSuccessCallback;
    }
    interface JoinVoIPChatSuccessCallbackResult {
        /** 错误码 */
        errCode: number;
        /** 调用结果 */
        errMsg: string;
        /** 在此通话中的成员 openId 名单 */
        openIdList: string[];
    }
    /** 启动参数 */
    interface LaunchOptionsApp {
        /** 打开的文件信息数组，只有从聊天素材场景打开（scene为1173）才会携带该参数 */
        forwardMaterials: ForwardMaterials[];
        /** 启动小程序的路径 (代码包路径) */
        path: string;
        /** 启动小程序的 query 参数 */
        query: IAnyObject;
        /** 来源信息。从另一个小程序、公众号或 App 进入小程序时返回。否则返回 `{}`。(参见后文注意) */
        referrerInfo: ReferrerInfo;
        /** 启动小程序的[场景值](https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/scene.html) */
        scene: number;
        /** shareTicket，详见[获取更多转发信息](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/share.html) */
        shareTicket?: string;
    }
    interface LivePlayerContextRequestFullScreenOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: RequestFullScreenCompleteCallback;
        /** 设置全屏时的方向
         *
         * 可选值：
         * - 0: 正常竖向;
         * - 90: 屏幕逆时针90度;
         * - -90: 屏幕顺时针90度; */
        direction?: 0 | 90 | -90;
        /** 接口调用失败的回调函数 */
        fail?: RequestFullScreenFailCallback;
        /** 接口调用成功的回调函数 */
        success?: RequestFullScreenSuccessCallback;
    }
    interface LivePlayerContextSnapshotOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: SnapshotCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: SnapshotFailCallback;
        /** 图片的质量，默认原图。有效值为 raw、compressed
         *
         * 最低基础库： `2.10.0` */
        quality?: string;
        /** 接口调用成功的回调函数 */
        success?: LivePlayerContextSnapshotSuccessCallback;
    }
    interface LivePlayerContextSnapshotSuccessCallbackResult {
        /** 图片的高度 */
        height: string;
        /** 图片文件的临时路径 (本地路径) */
        tempImagePath: string;
        /** 图片的宽度 */
        width: string;
        errMsg: string;
    }
    interface LivePusherContextSnapshotOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: SnapshotCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: SnapshotFailCallback;
        /** 图片的质量，默认原图。有效值为 raw、compressed
         *
         * 最低基础库： `2.10.0` */
        quality?: string;
        /** 接口调用成功的回调函数 */
        success?: LivePusherContextSnapshotSuccessCallback;
    }
    interface LivePusherContextSnapshotSuccessCallbackResult {
        /** 图片的高度 */
        height: string;
        /** 图片文件的临时路径 */
        tempImagePath: string;
        /** 图片的宽度 */
        width: string;
        errMsg: string;
    }
    interface LoadFontFaceCompleteCallbackResult {
        /** 加载字体结果 */
        status: string;
    }
    interface LoadFontFaceOption {
        /** 定义的字体名称 */
        family: string;
        /** 字体资源的地址。建议格式为 TTF 和 WOFF，WOFF2 在低版本的iOS上会不兼容。 */
        source: string;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: LoadFontFaceCompleteCallback;
        /** 可选的字体描述符 */
        desc?: DescOption;
        /** 接口调用失败的回调函数 */
        fail?: LoadFontFaceFailCallback;
        /** 是否全局生效
         *
         * 最低基础库： `2.10.0` */
        global?: boolean;
        /** 字体作用范围，可选值为 webview / native，默认 webview，设置 native 可在 Canvas 2D 下使用 */
        scopes?: any[];
        /** 接口调用成功的回调函数 */
        success?: LoadFontFaceSuccessCallback;
    }
    interface LocalInfo {
        /** 接收消息的 socket 的地址 */
        address: string;
        /** 使用的协议族，为 IPv4 或者 IPv6 */
        family: string;
        /** 端口号 */
        port: number;
    }
    interface LoginOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: LoginCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: LoginFailCallback;
        /** 接口调用成功的回调函数 */
        success?: LoginSuccessCallback;
        /** 超时时间，单位ms
         *
         * 最低基础库： `1.9.90` */
        timeout?: number;
    }
    interface LoginSuccessCallbackResult {
        /** 用户登录凭证（有效期五分钟）。开发者需要在开发者服务器后台调用 [auth.code2Session](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/login/auth.code2Session.html)，使用 code 换取 openid、unionid、session_key 等信息 */
        code: string;
        errMsg: string;
    }
    interface MakeBluetoothPairOption {
        /** 蓝牙设备 id */
        deviceId: string;
        /** pin 码，Base64 格式。 */
        pin: string;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: MakeBluetoothPairCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: MakeBluetoothPairFailCallback;
        /** 接口调用成功的回调函数 */
        success?: MakeBluetoothPairSuccessCallback;
        /** 超时时间，单位ms */
        timeout?: number;
    }
    interface MakePhoneCallOption {
        /** 需要拨打的电话号码 */
        phoneNumber: string;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: MakePhoneCallCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: MakePhoneCallFailCallback;
        /** 接口调用成功的回调函数 */
        success?: MakePhoneCallSuccessCallback;
    }
    /** 广播的制造商信息, 仅安卓支持 */
    interface ManufacturerData {
        /** 制造商ID，0x 开头的十六进制 */
        manufacturerId: string;
        /** 制造商信息 */
        manufacturerSpecificData?: ArrayBuffer;
    }
    /** 图片覆盖的经纬度范围 */
    interface MapBounds {
        /** 东北角经纬度 */
        northeast: MapPostion;
        /** 西南角经纬度 */
        southwest: MapPostion;
    }
    interface MapPostion {
        /** 纬度 */
        latitude: number;
        /** 经度 */
        longitude: number;
    }
    /** 用来扩展（或收缩）参照节点布局区域的边界 */
    interface Margins {
        /** 节点布局区域的下边界 */
        bottom?: number;
        /** 节点布局区域的左边界 */
        left?: number;
        /** 节点布局区域的右边界 */
        right?: number;
        /** 节点布局区域的上边界 */
        top?: number;
    }
    /** MediaAudioPlayer 实例，可通过 [wx.createMediaAudioPlayer](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/wx.createMediaAudioPlayer.html) 接口获取实例。 */
    interface MediaAudioPlayer {
        /** 音量。范围 0~1。默认为 1 */
        volume: number;
    }
    /** 本地临时文件列表 */
    interface MediaFile {
        /** 视频的时间长度 */
        duration: number;
        /** 视频的高度 */
        height: number;
        /** 本地临时文件大小，单位 B */
        size: number;
        /** 本地临时文件路径 (本地路径) */
        tempFilePath: string;
        /** 视频缩略图临时文件路径 */
        thumbTempFilePath: string;
        /** 视频的宽度 */
        width: number;
    }
    interface MediaQueryObserverObserveCallbackResult {
        /** 页面的当前状态是否满足所指定的 media query */
        matches: boolean;
    }
    /** 需要预览的资源列表 */
    interface MediaSource {
        /** 图片或视频的地址 */
        url: string;
        /** 视频的封面图片 */
        poster?: string;
        /** 资源的类型，默认为图片
         *
         * 可选值：
         * - 'image': 图片;
         * - 'video': 视频; */
        type?: "image" | "video";
    }
    /** 可通过 [MediaContainer.extractDataSource](https://developers.weixin.qq.com/miniprogram/dev/api/media/video-processing/MediaContainer.extractDataSource.html) 返回。
     *
     * [MediaTrack](https://developers.weixin.qq.com/miniprogram/dev/api/media/video-processing/MediaTrack.html) 音频或视频轨道，可以对轨道进行一些操作
     *
     * 最低基础库： `2.9.0` */
    interface MediaTrack {
        /** 轨道长度，只读 */
        duration: number;
        /** 轨道类型，只读
         *
         * 可选值：
         * - 'audio': 音频轨道;
         * - 'video': 视频轨道; */
        kind: "audio" | "video";
        /** 音量，音频轨道下有效，可写 */
        volume: number;
    }
    /** 小程序帐号信息 */
    interface MiniProgram {
        /** 小程序 appId */
        appId: string;
        /** 小程序版本
         *
         * 可选值：
         * - 'develop': 开发版;
         * - 'trial': 体验版;
         * - 'release': 正式版;
         *
         * 最低基础库： `2.10.0` */
        envVersion: "develop" | "trial" | "release";
        /** 线上小程序版本号
         *
         * 最低基础库： `2.10.2` */
        version: string;
    }
    interface MkdirFailCallbackResult {
        /** 错误信息
         *
         * 可选值：
         * - 'fail no such file or directory ${dirPath}': 上级目录不存在;
         * - 'fail permission denied, open ${dirPath}': 指定的 filePath 路径没有写权限;
         * - 'fail file already exists ${dirPath}': 有同名文件或目录;
         * - 'fail sdcard not mounted': Android sdcard 挂载失败; */
        errMsg: string;
    }
    interface MkdirOption {
        /** 创建的目录路径 (本地路径) */
        dirPath: string;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: MkdirCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: MkdirFailCallback;
        /** 是否在递归创建该目录的上级目录后再创建该目录。如果对应的上级目录已经存在，则不创建该上级目录。如 dirPath 为 a/b/c/d 且 recursive 为 true，将创建 a 目录，再在 a 目录下创建 b 目录，以此类推直至创建 a/b/c 目录下的 d 目录。
         *
         * 最低基础库： `2.3.0` */
        recursive?: boolean;
        /** 接口调用成功的回调函数 */
        success?: MkdirSuccessCallback;
    }
    interface MoveAlongOption {
        /** 平滑移动的时间 */
        duration: number;
        /** 指定 marker */
        markerId: number;
        /** 移动路径的坐标串，坐标点格式 `{longitude, latitude}` */
        path: any[];
        /** 根据路径方向自动改变 marker 的旋转角度 */
        autoRotate?: boolean;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: MoveAlongCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: MoveAlongFailCallback;
        /** 接口调用成功的回调函数 */
        success?: MoveAlongSuccessCallback;
    }
    interface MoveToLocationOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: MoveToLocationCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: MoveToLocationFailCallback;
        /** 纬度
         *
         * 最低基础库： `2.8.0` */
        latitude?: number;
        /** 经度
         *
         * 最低基础库： `2.8.0` */
        longitude?: number;
        /** 接口调用成功的回调函数 */
        success?: MoveToLocationSuccessCallback;
    }
    /** 静音设置 */
    interface MuteConfig {
        /** 是否静音耳机 */
        muteEarphone?: boolean;
        /** 是否静音麦克风 */
        muteMicrophone?: boolean;
    }
    interface MuteOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: MuteCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: MuteFailCallback;
        /** 接口调用成功的回调函数 */
        success?: MuteSuccessCallback;
    }
    /**
     * 最低基础库： `2.11.2` */
    interface NFCAdapter {
        /** 标签类型枚举 */
        tech: TechType;
    }
    interface NavigateBackMiniProgramOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: NavigateBackMiniProgramCompleteCallback;
        /** 需要返回给上一个小程序的数据，上一个小程序可在 `App.onShow` 中获取到这份数据。 [详情](https://developers.weixin.qq.com/miniprogram/dev/reference/api/App.html)。 */
        extraData?: IAnyObject;
        /** 接口调用失败的回调函数 */
        fail?: NavigateBackMiniProgramFailCallback;
        /** 接口调用成功的回调函数 */
        success?: NavigateBackMiniProgramSuccessCallback;
    }
    interface NavigateBackOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: NavigateBackCompleteCallback;
        /** 返回的页面数，如果 delta 大于现有页面数，则返回到首页。 */
        delta?: number;
        /** 接口调用失败的回调函数 */
        fail?: NavigateBackFailCallback;
        /** 接口调用成功的回调函数 */
        success?: NavigateBackSuccessCallback;
    }
    interface NavigateToMiniProgramOption {
        /** 要打开的小程序 appId */
        appId: string;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: NavigateToMiniProgramCompleteCallback;
        /** 要打开的小程序版本。仅在当前小程序为开发版或体验版时此参数有效。如果当前小程序是正式版，则打开的小程序必定是正式版。
         *
         * 可选值：
         * - 'develop': 开发版;
         * - 'trial': 体验版;
         * - 'release': 正式版; */
        envVersion?: "develop" | "trial" | "release";
        /** 需要传递给目标小程序的数据，目标小程序可在 `App.onLaunch`，`App.onShow` 中获取到这份数据。如果跳转的是小游戏，可以在 [wx.onShow](#)、[wx.getLaunchOptionsSync](https://developers.weixin.qq.com/miniprogram/dev/api/base/app/life-cycle/wx.getLaunchOptionsSync.html) 中可以获取到这份数据数据。 */
        extraData?: IAnyObject;
        /** 接口调用失败的回调函数 */
        fail?: NavigateToMiniProgramFailCallback;
        /** 打开的页面路径，如果为空则打开首页。path 中 ? 后面的部分会成为 query，在小程序的 `App.onLaunch`、`App.onShow` 和 `Page.onLoad` 的回调函数或小游戏的 [wx.onShow](#) 回调函数、[wx.getLaunchOptionsSync](https://developers.weixin.qq.com/miniprogram/dev/api/base/app/life-cycle/wx.getLaunchOptionsSync.html) 中可以获取到 query 数据。对于小游戏，可以只传入 query 部分，来实现传参效果，如：传入 "?foo=bar"。 */
        path?: string;
        /** 接口调用成功的回调函数 */
        success?: NavigateToMiniProgramSuccessCallback;
    }
    interface NavigateToOption {
        /** 需要跳转的应用内非 tabBar 的页面的路径 (代码包路径), 路径后可以带参数。参数与路径之间使用 `?` 分隔，参数键与参数值用 `=` 相连，不同参数用 `&` 分隔；如 'path?key=value&key2=value2' */
        url: string;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: NavigateToCompleteCallback;
        /** 页面间通信接口，用于监听被打开页面发送到当前页面的数据。基础库 2.7.3 开始支持。 */
        events?: IAnyObject;
        /** 接口调用失败的回调函数 */
        fail?: NavigateToFailCallback;
        /** 接口调用成功的回调函数 */
        success?: NavigateToSuccessCallback;
    }
    interface NavigateToSuccessCallbackResult {
        /** [EventChannel](https://developers.weixin.qq.com/miniprogram/dev/api/route/EventChannel.html)
         *
         * 和被打开页面进行通信 */
        eventChannel: EventChannel;
        errMsg: string;
    }
    interface NdefCloseOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: NdefCloseCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: NdefCloseFailCallback;
        /** 接口调用成功的回调函数 */
        success?: NdefCloseSuccessCallback;
    }
    interface NdefConnectOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: ConnectCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: ConnectFailCallback;
        /** 接口调用成功的回调函数 */
        success?: ConnectSuccessCallback;
    }
    interface NodeCallbackResult {
        /** 节点对应的 Node 实例 */
        node: IAnyObject;
    }
    interface NotifyBLECharacteristicValueChangeOption {
        /** 蓝牙特征值的 uuid */
        characteristicId: string;
        /** 蓝牙设备 id */
        deviceId: string;
        /** 蓝牙特征值对应服务的 uuid */
        serviceId: string;
        /** 是否启用 notify */
        state: boolean;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: NotifyBLECharacteristicValueChangeCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: NotifyBLECharacteristicValueChangeFailCallback;
        /** 接口调用成功的回调函数 */
        success?: NotifyBLECharacteristicValueChangeSuccessCallback;
    }
    /** media query 描述符 */
    interface ObserveDescriptor {
        /** 页面高度（ px 为单位） */
        height: number;
        /** 页面最大高度（ px 为单位） */
        maxHeight: number;
        /** 页面最大宽度（ px 为单位） */
        maxWidth: number;
        /** 页面最小高度（ px 为单位） */
        minHeight: number;
        /** 页面最小宽度（ px 为单位） */
        minWidth: number;
        /** 屏幕方向（ `landscape` 或 `portrait` ） */
        orientation: string;
        /** 页面宽度（ px 为单位） */
        width: number;
    }
    /** 离屏 canvas 实例，可通过 [wx.createOffscreenCanvas](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/wx.createOffscreenCanvas.html) 创建。
     *
     * 最低基础库： `2.7.0` */
    interface OffscreenCanvas {
        /** 画布高度 */
        height: number;
        /** 画布宽度 */
        width: number;
    }
    interface OnAccelerometerChangeCallbackResult {
        /** X 轴 */
        x: number;
        /** Y 轴 */
        y: number;
        /** Z 轴 */
        z: number;
    }
    interface OnAppShowCallbackResult {
        /** 打开的文件信息数组，只有从聊天素材场景打开（scene为1173）才会携带该参数 */
        forwardMaterials: ForwardMaterials[];
        /** 小程序切前台的路径 (代码包路径) */
        path: string;
        /** 小程序切前台的 query 参数 */
        query: IAnyObject;
        /** 来源信息。从另一个小程序、公众号或 App 进入小程序时返回。否则返回 `{}`。(参见后文注意) */
        referrerInfo: ReferrerInfo;
        /** 小程序切前台的[场景值](https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/scene.html) */
        scene: number;
        /** shareTicket，详见[获取更多转发信息](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/share.html) */
        shareTicket?: string;
    }
    interface OnBLECharacteristicValueChangeCallbackResult {
        /** 蓝牙特征值的 uuid */
        characteristicId: string;
        /** 蓝牙设备 id */
        deviceId: string;
        /** 蓝牙特征值对应服务的 uuid */
        serviceId: string;
        /** 特征值最新的值 */
        value: ArrayBuffer;
    }
    interface OnBLEConnectionStateChangeCallbackResult {
        /** 是否处于已连接状态 */
        connected: boolean;
        /** 蓝牙设备ID */
        deviceId: string;
    }
    interface OnBLEPeripheralConnectionStateChangedCallbackResult {
        /** 连接目前状态 */
        connected: boolean;
        /** 连接状态变化的设备 id */
        deviceId: string;
        /** server 的 uuid */
        serverId: string;
    }
    interface OnBackgroundFetchDataCallbackResult {
        /** 缓存数据类别 (periodic) */
        fetchType: string;
        /** 缓存数据 */
        fetchedData: string;
        /** 客户端拿到缓存数据的时间戳 */
        timeStamp: number;
    }
    interface OnBeaconServiceChangeCallbackResult {
        /** 服务目前是否可用 */
        available: boolean;
        /** 目前是否处于搜索状态 */
        discovering: boolean;
    }
    interface OnBeaconUpdateCallbackResult {
        /** 当前搜寻到的所有 iBeacon 设备列表 */
        beacons: IBeaconInfo[];
    }
    interface OnBluetoothAdapterStateChangeCallbackResult {
        /** 蓝牙适配器是否可用 */
        available: boolean;
        /** 蓝牙适配器是否处于搜索状态 */
        discovering: boolean;
    }
    interface OnBluetoothDeviceFoundCallbackResult {
        /** 新搜索到的设备列表 */
        devices: BlueToothDevice[];
    }
    interface OnCameraFrameCallbackResult {
        /** 图像像素点数据，一维数组，每四项表示一个像素点的 rgba */
        data: ArrayBuffer;
        /** 图像数据矩形的高度 */
        height: number;
        /** 图像数据矩形的宽度 */
        width: number;
    }
    interface OnCharacteristicReadRequestCallbackResult {
        /** 唯一标识码，调用 writeCharacteristicValue 时使用 */
        callbackId: number;
        /** characteristic对应的uuid */
        characteristicId: string;
        /** service对应的uuid */
        serviceId: string;
    }
    interface OnCharacteristicSubscribedCallbackResult {
        /** characteristic对应的uuid */
        characteristicId: string;
        /** service对应的uuid */
        serviceId: string;
    }
    interface OnCharacteristicWriteRequestCallbackResult {
        /** 唯一标识码，调用 writeCharacteristicValue 时使用 */
        callbackId: number;
        /** characteristic对应的uuid */
        characteristicId: string;
        /** service对应的uuid */
        serviceId: string;
        /** 请求写入的特征值数据 */
        value: ArrayBuffer;
    }
    interface OnCheckForUpdateCallbackResult {
        /** 是否有新版本 */
        hasUpdate: boolean;
    }
    interface OnCompassChangeCallbackResult {
        /** 精度
         *
         * 最低基础库： `2.4.0` */
        accuracy: number | string;
        /** 面对的方向度数 */
        direction: number;
    }
    interface OnCopyUrlCallbackResult {
        /** 用短链打开小程序时当前页面携带的查询字符串。小程序中使用时，应在进入页面时调用 `wx.onCopyUrl` 自定义 `query`，退出页面时调用 `wx.offCopyUrl`，防止影响其它页面。 */
        query: string;
    }
    interface OnDeviceMotionChangeCallbackResult {
        /** 当 手机坐标 X/Y 和 地球 X/Y 重合时，绕着 Z 轴转动的夹角为 alpha，范围值为 [0, 2*PI)。逆时针转动为正。 */
        alpha: number;
        /** 当手机坐标 Y/Z 和地球 Y/Z 重合时，绕着 X 轴转动的夹角为 beta。范围值为 [-1*PI, PI) 。顶部朝着地球表面转动为正。也有可能朝着用户为正。 */
        beta: number;
        /** 当手机 X/Z 和地球 X/Z 重合时，绕着 Y 轴转动的夹角为 gamma。范围值为 [-1*PI/2, PI/2)。右边朝着地球表面转动为正。 */
        gamma: number;
    }
    interface OnDiscoveredCallbackResult {
        /** NdefMessage 数组，消息格式为 {id: ArrayBuffer, type: ArrayBuffer, payload: ArrayBuffer} */
        messages: any[];
        /** tech 数组，用于匹配NFC卡片具体可以使用什么标准（NfcA等实例）处理 */
        techs: any[];
    }
    interface OnFrameRecordedCallbackResult {
        /** 录音分片数据 */
        frameBuffer: ArrayBuffer;
        /** 当前帧是否正常录音结束前的最后一帧 */
        isLastFrame: boolean;
    }
    interface OnGetWifiListCallbackResult {
        /** Wi-Fi 列表数据 */
        wifiList: WifiInfo[];
    }
    interface OnGyroscopeChangeCallbackResult {
        /** x 轴的角速度 */
        x: number;
        /** y 轴的角速度 */
        y: number;
        /** z 轴的角速度 */
        z: number;
    }
    interface OnHCEMessageCallbackResult {
        /** `messageType=1` 时 ,客户端接收到 NFC 设备的指令 */
        data: ArrayBuffer;
        /** 消息类型
         *
         * 可选值：
         * - 1: HCE APDU Command类型，小程序需对此指令进行处理，并调用 sendHCEMessage 接口返回处理指令;
         * - 2: 设备离场事件类型; */
        messageType: 1 | 2;
        /** `messageType=2` 时，原因 */
        reason: number;
    }
    interface OnHeadersReceivedCallbackResult {
        /** 开发者服务器返回的 HTTP Response Header */
        header: IAnyObject;
    }
    interface OnKeyboardHeightChangeCallbackResult {
        /** 键盘高度 */
        height: number;
    }
    interface OnLocalServiceFoundCallbackResult {
        /** 服务的 ip 地址 */
        ip: string;
        /** 服务的端口 */
        port: number;
        /** 服务的名称 */
        serviceName: string;
        /** 服务的类型 */
        serviceType: string;
    }
    interface OnLocalServiceLostCallbackResult {
        /** 服务的名称 */
        serviceName: string;
        /** 服务的类型 */
        serviceType: string;
    }
    interface OnLocationChangeCallbackResult {
        /** 位置的精确度 */
        accuracy: number;
        /** 高度，单位 m
         *
         * 最低基础库： `1.2.0` */
        altitude: number;
        /** 水平精度，单位 m
         *
         * 最低基础库： `1.2.0` */
        horizontalAccuracy: number;
        /** 纬度，范围为 -90~90，负数表示南纬。使用 gcj02 国测局坐标系 */
        latitude: number;
        /** 经度，范围为 -180~180，负数表示西经。使用 gcj02 国测局坐标系 */
        longitude: number;
        /** 速度，单位 m/s */
        speed: number;
        /** 垂直精度，单位 m（Android 无法获取，返回 0）
         *
         * 最低基础库： `1.2.0` */
        verticalAccuracy: number;
    }
    interface OnMemoryWarningCallbackResult {
        /** 内存告警等级，只有 Android 才有，对应系统宏定义
         *
         * 可选值：
         * - 5: TRIM_MEMORY_RUNNING_MODERATE;
         * - 10: TRIM_MEMORY_RUNNING_LOW;
         * - 15: TRIM_MEMORY_RUNNING_CRITICAL; */
        level: 5 | 10 | 15;
    }
    interface OnNetworkStatusChangeCallbackResult {
        /** 当前是否有网络连接 */
        isConnected: boolean;
        /** 网络类型
         *
         * 可选值：
         * - 'wifi': wifi 网络;
         * - '2g': 2g 网络;
         * - '3g': 3g 网络;
         * - '4g': 4g 网络;
         * - 'unknown': Android 下不常见的网络类型;
         * - 'none': 无网络; */
        networkType: "wifi" | "2g" | "3g" | "4g" | "unknown" | "none";
    }
    interface OnOpenCallbackResult {
        /** 连接成功的 HTTP 响应 Header
         *
         * 最低基础库： `2.0.0` */
        header: IAnyObject;
        /** 网络请求过程中一些调试信息
         *
         * 最低基础库： `2.10.4` */
        profile: SocketProfile;
    }
    interface OnPageNotFoundCallbackResult {
        /** 是否本次启动的首个页面（例如从分享等入口进来，首个页面是开发者配置的分享页面） */
        isEntryPage: boolean;
        /** 不存在页面的路径 (代码包路径) */
        path: string;
        /** 打开不存在页面的 query 参数 */
        query: IAnyObject;
    }
    interface OnSocketOpenCallbackResult {
        /** 连接成功的 HTTP 响应 Header
         *
         * 最低基础库： `2.0.0` */
        header: IAnyObject;
    }
    interface OnStopCallbackResult {
        /** 录音总时长，单位：ms */
        duration: number;
        /** 录音文件大小，单位：Byte */
        fileSize: number;
        /** 录音文件的临时路径 (本地路径) */
        tempFilePath: string;
    }
    interface OnThemeChangeCallbackResult {
        /** 系统当前的主题，取值为`light`或`dark`
         *
         * 可选值：
         * - 'dark': 深色主题;
         * - 'light': 浅色主题; */
        theme: "dark" | "light";
    }
    interface OnUnhandledRejectionCallbackResult {
        /** 被拒绝的 Promise 对象 */
        promise: Promise<any>;
        /** 拒绝原因，一般是一个 Error 对象 */
        reason: string;
    }
    interface OnVoIPChatInterruptedCallbackResult {
        /** 错误码 */
        errCode: number;
        /** 调用结果（错误原因） */
        errMsg: string;
    }
    interface OnVoIPChatMembersChangedCallbackResult {
        /** 错误码 */
        errCode: number;
        /** 调用结果 */
        errMsg: string;
        /** 还在实时语音通话中的成员 openId 名单 */
        openIdList: string[];
    }
    interface OnVoIPChatSpeakersChangedCallbackResult {
        /** 错误码 */
        errCode: number;
        /** 调用结果（错误原因） */
        errMsg: string;
        /** 还在实时语音通话中的成员 openId 名单 */
        openIdList: string[];
    }
    interface OnVoIPChatStateChangedCallbackResult {
        /** 事件码 */
        code: number;
        /** 附加信息 */
        data: IAnyObject;
        /** 错误码 */
        errCode: number;
        /** 调用结果 */
        errMsg: string;
    }
    interface OnVoIPVideoMembersChangedCallbackResult {
        /** 错误码 */
        errCode: number;
        /** 调用结果 */
        errMsg: string;
        /** 开启视频的成员名单 */
        openIdList: string[];
    }
    interface OnWifiConnectedCallbackResult {
        /** [WifiInfo](https://developers.weixin.qq.com/miniprogram/dev/api/device/wifi/WifiInfo.html)
         *
         * Wi-Fi 信息 */
        wifi: WifiInfo;
    }
    interface OnWindowResizeCallbackResult {
        size: Size;
    }
    interface OpenBluetoothAdapterOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: OpenBluetoothAdapterCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: OpenBluetoothAdapterFailCallback;
        /** 蓝牙模式，可作为主/从设备，仅 iOS 需要。
         *
         * 可选值：
         * - 'central': 主机模式;
         * - 'peripheral': 从机模式;
         *
         * 最低基础库： `2.10.0` */
        mode?: "central" | "peripheral";
        /** 接口调用成功的回调函数 */
        success?: OpenBluetoothAdapterSuccessCallback;
    }
    interface OpenCardOption {
        /** 需要打开的卡券列表 */
        cardList: OpenCardRequestInfo[];
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: OpenCardCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: OpenCardFailCallback;
        /** 接口调用成功的回调函数 */
        success?: OpenCardSuccessCallback;
    }
    /** 需要打开的卡券列表 */
    interface OpenCardRequestInfo {
        /** 卡券 ID */
        cardId: string;
        /** 由 [wx.addCard](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/card/wx.addCard.html) 的返回对象中的加密 code 通过解密后得到，解密请参照：[code 解码接口](https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1499332673_Unm7V) */
        code: string;
    }
    interface OpenChannelsLiveOption {
        /** 直播 feedId，通过 getChannelsLiveInfo 接口获取 */
        feedId: string;
        /** 视频号 id */
        finderUserName: string;
        /** 直播 nonceId，通过 getChannelsLiveInfo 接口获取 */
        nonceId: string;
    }
    interface OpenDocumentOption {
        /** 文件路径 (本地路径) ，可通过 downloadFile 获得 */
        filePath: string;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: OpenDocumentCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: OpenDocumentFailCallback;
        /** 文件类型，指定文件类型打开文件
         *
         * 可选值：
         * - 'doc': doc 格式;
         * - 'docx': docx 格式;
         * - 'xls': xls 格式;
         * - 'xlsx': xlsx 格式;
         * - 'ppt': ppt 格式;
         * - 'pptx': pptx 格式;
         * - 'pdf': pdf 格式;
         *
         * 最低基础库： `1.4.0` */
        fileType?: "doc" | "docx" | "xls" | "xlsx" | "ppt" | "pptx" | "pdf";
        /** 是否显示右上角菜单
         *
         * 最低基础库： `2.11.0` */
        showMenu?: boolean;
        /** 接口调用成功的回调函数 */
        success?: OpenDocumentSuccessCallback;
    }
    interface OpenFailCallbackResult {
        /** 错误信息
         *
         * 可选值：
         * - 'fail no such file or directory "${filePath}"': 上级目录不存在; */
        errMsg: string;
    }
    interface OpenLocationOption {
        /** 纬度，范围为-90~90，负数表示南纬。使用 gcj02 国测局坐标系 */
        latitude: number;
        /** 经度，范围为-180~180，负数表示西经。使用 gcj02 国测局坐标系 */
        longitude: number;
        /** 地址的详细说明 */
        address?: string;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: OpenLocationCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: OpenLocationFailCallback;
        /** 位置名 */
        name?: string;
        /** 缩放比例，范围5~18 */
        scale?: number;
        /** 接口调用成功的回调函数 */
        success?: OpenLocationSuccessCallback;
    }
    interface OpenMapAppOption {
        /** 目的地名称 */
        destination: string;
        /** 目的地纬度 */
        latitude: number;
        /** 目的地经度 */
        longitude: number;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: OpenMapAppCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: OpenMapAppFailCallback;
        /** 接口调用成功的回调函数 */
        success?: OpenMapAppSuccessCallback;
    }
    interface OpenOption {
        /** 文件路径 (本地路径) */
        filePath: string;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: OpenCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: OpenFailCallback;
        /** 文件系统标志，默认值: 'r'
         *
         * 可选值：
         * - 'a': 打开文件用于追加。 如果文件不存在，则创建该文件;
         * - 'ax': 类似于 'a'，但如果路径存在，则失败;
         * - 'a+': 打开文件用于读取和追加。 如果文件不存在，则创建该文件;
         * - 'ax+': 类似于 'a+'，但如果路径存在，则失败;
         * - 'as': 打开文件用于追加（在同步模式中）。 如果文件不存在，则创建该文件;
         * - 'as+': 打开文件用于读取和追加（在同步模式中）。 如果文件不存在，则创建该文件;
         * - 'r': 打开文件用于读取。 如果文件不存在，则会发生异常;
         * - 'r+': 打开文件用于读取和写入。 如果文件不存在，则会发生异常;
         * - 'w': 打开文件用于写入。 如果文件不存在则创建文件，如果文件存在则截断文件;
         * - 'wx': 类似于 'w'，但如果路径存在，则失败;
         * - 'w+': 打开文件用于读取和写入。 如果文件不存在则创建文件，如果文件存在则截断文件;
         * - 'wx+': 类似于 'w+'，但如果路径存在，则失败; */
        flag?:
            | "a"
            | "ax"
            | "a+"
            | "ax+"
            | "as"
            | "as+"
            | "r"
            | "r+"
            | "w"
            | "wx"
            | "w+"
            | "wx+";
        /** 接口调用成功的回调函数 */
        success?: OpenSuccessCallback;
    }
    interface OpenSettingOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: OpenSettingCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: OpenSettingFailCallback;
        /** 接口调用成功的回调函数 */
        success?: OpenSettingSuccessCallback;
        /** 是否同时获取用户订阅消息的订阅状态，默认不获取。注意：withSubscriptions 只返回用户勾选过订阅面板中的“总是保持以上选择，不再询问”的订阅消息。
         *
         * 最低基础库： `2.10.3` */
        withSubscriptions?: boolean;
    }
    interface OpenSettingSuccessCallbackResult {
        /** [AuthSetting](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/setting/AuthSetting.html)
         *
         * 用户授权结果 */
        authSetting: AuthSetting;
        /** [SubscriptionsSetting](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/setting/SubscriptionsSetting.html)
         *
         * 用户订阅消息设置，接口参数`withSubscriptions`值为`true`时才会返回。
         *
         * 最低基础库： `2.10.3` */
        subscriptionsSetting: SubscriptionsSetting;
        errMsg: string;
    }
    interface OpenSuccessCallbackResult {
        /** 文件描述符 */
        fd: string;
        errMsg: string;
    }
    interface OpenSyncOption {
        /** 文件路径 (本地路径) */
        filePath: string;
        /** 文件系统标志，默认值: 'r'
         *
         * 可选值：
         * - 'a': 打开文件用于追加。 如果文件不存在，则创建该文件;
         * - 'ax': 类似于 'a'，但如果路径存在，则失败;
         * - 'a+': 打开文件用于读取和追加。 如果文件不存在，则创建该文件;
         * - 'ax+': 类似于 'a+'，但如果路径存在，则失败;
         * - 'as': 打开文件用于追加（在同步模式中）。 如果文件不存在，则创建该文件;
         * - 'as+': 打开文件用于读取和追加（在同步模式中）。 如果文件不存在，则创建该文件;
         * - 'r': 打开文件用于读取。 如果文件不存在，则会发生异常;
         * - 'r+': 打开文件用于读取和写入。 如果文件不存在，则会发生异常;
         * - 'w': 打开文件用于写入。 如果文件不存在则创建文件，如果文件存在则截断文件;
         * - 'wx': 类似于 'w'，但如果路径存在，则失败;
         * - 'w+': 打开文件用于读取和写入。 如果文件不存在则创建文件，如果文件存在则截断文件;
         * - 'wx+': 类似于 'w+'，但如果路径存在，则失败; */
        flag?:
            | "a"
            | "ax"
            | "a+"
            | "ax+"
            | "as"
            | "as+"
            | "r"
            | "r+"
            | "w"
            | "wx"
            | "w+"
            | "wx+";
    }
    interface OpenVideoEditorOption {
        /** 视频源的路径，只支持本地路径 */
        filePath: string;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: OpenVideoEditorCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: OpenVideoEditorFailCallback;
        /** 接口调用成功的回调函数 */
        success?: OpenVideoEditorSuccessCallback;
    }
    interface OpenVideoEditorSuccessCallbackResult {
        /** 剪辑后生成的视频文件的时长，单位毫秒（ms） */
        duration: number;
        /** 剪辑后生成的视频文件大小，单位字节数（byte） */
        size: number;
        /** 编辑后生成的视频文件的临时路径 */
        tempFilePath: string;
        /** 编辑后生成的缩略图文件的临时路径 */
        tempThumbPath: string;
        errMsg: string;
    }
    interface PageScrollToOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: PageScrollToCompleteCallback;
        /** 滚动动画的时长，单位 ms */
        duration?: number;
        /** 接口调用失败的回调函数 */
        fail?: PageScrollToFailCallback;
        /** 滚动到页面的目标位置，单位 px */
        scrollTop?: number;
        /** 选择器
         *
         * 最低基础库： `2.7.3` */
        selector?: string;
        /** 接口调用成功的回调函数 */
        success?: PageScrollToSuccessCallback;
    }
    /** Canvas 2D API 的接口 Path2D 用来声明路径，此路径稍后会被CanvasRenderingContext2D 对象使用。CanvasRenderingContext2D 接口的 路径方法 也存在于 Path2D 这个接口中，允许你在 canvas 中根据需要创建可以保留并重用的路径。
     *
     * 最低基础库： `2.11.0` */
    interface Path2D {}
    interface PauseBGMOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: PauseBGMCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: PauseBGMFailCallback;
        /** 接口调用成功的回调函数 */
        success?: PauseBGMSuccessCallback;
    }
    interface PauseBackgroundAudioOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: PauseBackgroundAudioCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: PauseBackgroundAudioFailCallback;
        /** 接口调用成功的回调函数 */
        success?: PauseBackgroundAudioSuccessCallback;
    }
    interface PauseOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: PauseCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: PauseFailCallback;
        /** 接口调用成功的回调函数 */
        success?: PauseSuccessCallback;
    }
    interface PauseVoiceOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: PauseVoiceCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: PauseVoiceFailCallback;
        /** 接口调用成功的回调函数 */
        success?: PauseVoiceSuccessCallback;
    }
    /** PerformanceObserver 对象， 用于监听性能相关事件
     *
     * 最低基础库： `2.11.0` */
    interface PerformanceObserver {
        /** 获取当前支持的所有性能指标类型 */
        supportedEntryTypes: any[];
    }
    interface PlayBGMOption {
        /** 加入背景混音的资源地址 */
        url: string;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: PlayBGMCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: PlayBGMFailCallback;
        /** 接口调用成功的回调函数 */
        success?: PlayBGMSuccessCallback;
    }
    interface PlayBackgroundAudioOption {
        /** 音乐链接，目前支持的格式有 m4a, aac, mp3, wav */
        dataUrl: string;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: PlayBackgroundAudioCompleteCallback;
        /** 封面URL */
        coverImgUrl?: string;
        /** 接口调用失败的回调函数 */
        fail?: PlayBackgroundAudioFailCallback;
        /** 接口调用成功的回调函数 */
        success?: PlayBackgroundAudioSuccessCallback;
        /** 音乐标题 */
        title?: string;
    }
    interface PlayOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: PlayCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: PlayFailCallback;
        /** 接口调用成功的回调函数 */
        success?: PlaySuccessCallback;
    }
    interface PlayVoiceOption {
        /** 需要播放的语音文件的文件路径 (本地路径) */
        filePath: string;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: PlayVoiceCompleteCallback;
        /** 指定播放时长，到达指定的播放时长后会自动停止播放，单位：秒
         *
         * 最低基础库： `1.6.0` */
        duration?: number;
        /** 接口调用失败的回调函数 */
        fail?: PlayVoiceFailCallback;
        /** 接口调用成功的回调函数 */
        success?: PlayVoiceSuccessCallback;
    }
    /** 插件帐号信息（仅在插件中调用时包含这一项） */
    interface Plugin {
        /** 插件 appId */
        appId: string;
        /** 插件版本号 */
        version: string;
    }
    interface PreviewImageOption {
        /** 需要预览的图片链接列表。[2.2.3](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) 起支持云文件ID。 */
        urls: string[];
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: PreviewImageCompleteCallback;
        /** 当前显示图片的链接 */
        current?: string;
        /** 接口调用失败的回调函数 */
        fail?: PreviewImageFailCallback;
        /** 是否显示长按菜单
         *
         * 最低基础库： `2.13.0` */
        showmenu?: boolean;
        /** 接口调用成功的回调函数 */
        success?: PreviewImageSuccessCallback;
    }
    interface PreviewMediaOption {
        /** 需要预览的资源列表 */
        sources: MediaSource[];
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: PreviewMediaCompleteCallback;
        /** 当前显示的资源序号 */
        current?: number;
        /** 接口调用失败的回调函数 */
        fail?: PreviewMediaFailCallback;
        /** 是否显示长按菜单
         *
         * 最低基础库： `2.13.0` */
        showmenu?: boolean;
        /** 接口调用成功的回调函数 */
        success?: PreviewMediaSuccessCallback;
    }
    interface ReLaunchOption {
        /** 需要跳转的应用内页面路径 (代码包路径)，路径后可以带参数。参数与路径之间使用?分隔，参数键与参数值用=相连，不同参数用&分隔；如 'path?key=value&key2=value2' */
        url: string;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: ReLaunchCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: ReLaunchFailCallback;
        /** 接口调用成功的回调函数 */
        success?: ReLaunchSuccessCallback;
    }
    interface ReadBLECharacteristicValueOption {
        /** 蓝牙特征值的 uuid */
        characteristicId: string;
        /** 蓝牙设备 id */
        deviceId: string;
        /** 蓝牙特征值对应服务的 uuid */
        serviceId: string;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: ReadBLECharacteristicValueCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: ReadBLECharacteristicValueFailCallback;
        /** 接口调用成功的回调函数 */
        success?: ReadBLECharacteristicValueSuccessCallback;
    }
    interface ReadFailCallbackResult {
        /** 错误信息
         *
         * 可选值：
         * - 'bad file descriptor': 无效的文件描述符;
         * - 'fail permission denied': 指定的 fd 路径没有读权限;
         * - 'fail the value of "offset" is out of range': 传入的 offset 不合法;
         * - 'fail the value of "length" is out of range': 传入的 length 不合法;
         * - 'fail sdcard not mounted': android sdcard 挂载失败;
         * - 'bad file descriptor': 无效的文件描述符; */
        errMsg: string;
    }
    interface ReadFileFailCallbackResult {
        /** 错误信息
         *
         * 可选值：
         * - 'fail no such file or directory, open ${filePath}': 指定的 filePath 所在目录不存在;
         * - 'fail permission denied, open ${dirPath}': 指定的 filePath 路径没有读权限;
         * - 'fail sdcard not mounted': Android sdcard 挂载失败; */
        errMsg: string;
    }
    interface ReadFileOption {
        /** 要读取的文件的路径 (本地路径) */
        filePath: string;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: ReadFileCompleteCallback;
        /** 指定读取文件的字符编码，如果不传 encoding，则以 ArrayBuffer 格式读取文件的二进制内容
         *
         * 可选值：
         * - 'ascii': ;
         * - 'base64': ;
         * - 'binary': ;
         * - 'hex': ;
         * - 'ucs2': 以小端序读取;
         * - 'ucs-2': 以小端序读取;
         * - 'utf16le': 以小端序读取;
         * - 'utf-16le': 以小端序读取;
         * - 'utf-8': ;
         * - 'utf8': ;
         * - 'latin1': ; */
        encoding?:
            | "ascii"
            | "base64"
            | "binary"
            | "hex"
            | "ucs2"
            | "ucs-2"
            | "utf16le"
            | "utf-16le"
            | "utf-8"
            | "utf8"
            | "latin1";
        /** 接口调用失败的回调函数 */
        fail?: ReadFileFailCallback;
        /** 指定文件的长度，如果不指定，则读到文件末尾。有效范围：[1, fileLength]。单位：byte
         *
         * 最低基础库： `2.10.0` */
        length?: number;
        /** 从文件指定位置开始读，如果不指定，则从文件头开始读。读取的范围应该是左闭右开区间 [position, position+length)。有效范围：[0, fileLength - 1]。单位：byte
         *
         * 最低基础库： `2.10.0` */
        position?: number;
        /** 接口调用成功的回调函数 */
        success?: ReadFileSuccessCallback;
    }
    interface ReadFileSuccessCallbackResult {
        /** 文件内容 */
        data: string | ArrayBuffer;
        errMsg: string;
    }
    interface ReadOption {
        /** 数据写入的缓冲区，必须是 ArrayBuffer 实例 */
        arrayBuffer: ArrayBuffer;
        /** 文件描述符。fd 通过 [FileSystemManager.open](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.open.html) 或 [FileSystemManager.openSync](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.openSync.html) 接口获得 */
        fd: string;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: ReadCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: ReadFailCallback;
        /** 要从文件中读取的字节数，默认0 */
        length?: number;
        /** 缓冲区中的写入偏移量，默认0 */
        offset?: number;
        /** 文件读取的起始位置，如不传或传 null，则会从当前文件指针的位置读取。如果 position 是正整数，则文件指针位置会保持不变并从 position 读取文件。 */
        position?: number;
        /** 接口调用成功的回调函数 */
        success?: ReadSuccessCallback;
    }
    /** 文件读取结果。 通过 [FileSystemManager.readSync](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.readSync.html) 接口返回 */
    interface ReadResult {
        /** 被写入的缓存区的对象，即接口入参的 arrayBuffer */
        arrayBuffer: ArrayBuffer;
        /** 实际读取的字节数 */
        bytesRead: number;
    }
    interface ReadSuccessCallbackResult {
        /** 被写入的缓存区的对象，即接口入参的 arrayBuffer */
        arrayBuffer: ArrayBuffer;
        /** 实际读取的字节数 */
        bytesRead: number;
        errMsg: string;
    }
    interface ReadSyncOption {
        /** 数据写入的缓冲区，必须是 ArrayBuffer 实例 */
        arrayBuffer: ArrayBuffer;
        /** 文件描述符。fd 通过 [FileSystemManager.open](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.open.html) 或 [FileSystemManager.openSync](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.openSync.html) 接口获得 */
        fd: string;
        /** 要从文件中读取的字节数，默认0 */
        length?: number;
        /** 缓冲区中的写入偏移量，默认0 */
        offset?: number;
        /** 文件读取的起始位置，如不传或传 null，则会从当前文件指针的位置读取。如果 position 是正整数，则文件指针位置会保持不变并从 position 读取文件。 */
        position?: number;
    }
    interface ReadZipEntryOption {
        /** 要读取的压缩包内的文件列表（当传入"all" 时表示读取压缩包内所有文件） */
        entries: EntryItem[] | "all";
        /** 要读取的压缩包的路径 (本地路径) */
        filePath: string;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: ReadZipEntryCompleteCallback;
        /** 统一指定读取文件的字符编码，只在 entries 值为"all"时有效。如果 entries 值为"all"且不传 encoding，则以 ArrayBuffer 格式读取文件的二进制内容
         *
         * 可选值：
         * - 'ascii': ;
         * - 'base64': ;
         * - 'binary': ;
         * - 'hex': ;
         * - 'ucs2': 以小端序读取;
         * - 'ucs-2': 以小端序读取;
         * - 'utf16le': 以小端序读取;
         * - 'utf-16le': 以小端序读取;
         * - 'utf-8': ;
         * - 'utf8': ;
         * - 'latin1': ; */
        encoding?:
            | "ascii"
            | "base64"
            | "binary"
            | "hex"
            | "ucs2"
            | "ucs-2"
            | "utf16le"
            | "utf-16le"
            | "utf-8"
            | "utf8"
            | "latin1";
        /** 接口调用失败的回调函数 */
        fail?: ReadZipEntryFailCallback;
        /** 接口调用成功的回调函数 */
        success?: ReadZipEntrySuccessCallback;
    }
    interface ReadZipEntrySuccessCallbackResult {
        /** 文件读取结果。res.entries 是一个对象，key是文件路径，value是一个对象 FileItem ，表示该文件的读取结果。每个 FileItem 包含 data （文件内容） 和 errMsg （错误信息） 属性。 */
        entries: EntriesResult;
        errMsg: string;
    }
    interface ReaddirFailCallbackResult {
        /** 错误信息
         *
         * 可选值：
         * - 'fail no such file or directory ${dirPath}': 目录不存在;
         * - 'fail not a directory ${dirPath}': dirPath 不是目录;
         * - 'fail permission denied, open ${dirPath}': 指定的 filePath 路径没有读权限;
         * - 'fail sdcard not mounted': Android sdcard 挂载失败; */
        errMsg: string;
    }
    interface ReaddirOption {
        /** 要读取的目录路径 (本地路径) */
        dirPath: string;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: ReaddirCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: ReaddirFailCallback;
        /** 接口调用成功的回调函数 */
        success?: ReaddirSuccessCallback;
    }
    interface ReaddirSuccessCallbackResult {
        /** 指定目录下的文件名数组。 */
        files: string[];
        errMsg: string;
    }
    interface RecorderManagerStartOption {
        /** 指定录音的音频输入源，可通过 [wx.getAvailableAudioSources()](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/wx.getAvailableAudioSources.html) 获取当前可用的音频源
         *
         * 可选值：
         * - 'auto': 自动设置，默认使用手机麦克风，插上耳麦后自动切换使用耳机麦克风，所有平台适用;
         * - 'buildInMic': 手机麦克风，仅限 iOS;
         * - 'headsetMic': 有线耳机麦克风，仅限 iOS;
         * - 'mic': 麦克风（没插耳麦时是手机麦克风，插耳麦时是耳机麦克风），仅限 Android;
         * - 'camcorder': 同 mic，适用于录制音视频内容，仅限 Android;
         * - 'voice_communication': 同 mic，适用于实时沟通，仅限 Android;
         * - 'voice_recognition': 同 mic，适用于语音识别，仅限 Android;
         *
         * 最低基础库： `2.1.0` */
        audioSource?:
            | "auto"
            | "buildInMic"
            | "headsetMic"
            | "mic"
            | "camcorder"
            | "voice_communication"
            | "voice_recognition";
        /** 录音的时长，单位 ms，最大值 600000（10 分钟） */
        duration?: number;
        /** 编码码率，有效值见下表格 */
        encodeBitRate?: number;
        /** 音频格式
         *
         * 可选值：
         * - 'mp3': mp3 格式;
         * - 'aac': aac 格式;
         * - 'wav': wav 格式;
         * - 'PCM': pcm 格式; */
        format?: "mp3" | "aac" | "wav" | "PCM";
        /** 指定帧大小，单位 KB。传入 frameSize 后，每录制指定帧大小的内容后，会回调录制的文件内容，不指定则不会回调。暂仅支持 mp3、pcm 格式。 */
        frameSize?: number;
        /** 录音通道数
         *
         * 可选值：
         * - 1: 1 个通道;
         * - 2: 2 个通道; */
        numberOfChannels?: 1 | 2;
        /** 采样率（pc不支持）
         *
         * 可选值：
         * - 8000: 8000 采样率;
         * - 11025: 11025 采样率;
         * - 12000: 12000 采样率;
         * - 16000: 16000 采样率;
         * - 22050: 22050 采样率;
         * - 24000: 24000 采样率;
         * - 32000: 32000 采样率;
         * - 44100: 44100 采样率;
         * - 48000: 48000 采样率; */
        sampleRate?:
            | 8000
            | 11025
            | 12000
            | 16000
            | 22050
            | 24000
            | 32000
            | 44100
            | 48000;
    }
    /** 菜单按钮的布局位置信息 */
    interface Rect {
        /** 下边界坐标，单位：px */
        bottom: number;
        /** 高度，单位：px */
        height: number;
        /** 左边界坐标，单位：px */
        left: number;
        /** 右边界坐标，单位：px */
        right: number;
        /** 上边界坐标，单位：px */
        top: number;
        /** 宽度，单位：px */
        width: number;
    }
    interface RedirectToOption {
        /** 需要跳转的应用内非 tabBar 的页面的路径 (代码包路径), 路径后可以带参数。参数与路径之间使用 `?` 分隔，参数键与参数值用 `=` 相连，不同参数用 `&` 分隔；如 'path?key=value&key2=value2' */
        url: string;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: RedirectToCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: RedirectToFailCallback;
        /** 接口调用成功的回调函数 */
        success?: RedirectToSuccessCallback;
    }
    interface RedoOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: RedoCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: RedoFailCallback;
        /** 接口调用成功的回调函数 */
        success?: RedoSuccessCallback;
    }
    /** 来源信息。从另一个小程序、公众号或 App 进入小程序时返回。否则返回 `{}`。(参见后文注意) */
    interface ReferrerInfo {
        /** 来源小程序、公众号或 App 的 appId */
        appId: string;
        /** 来源小程序传过来的数据，scene=1037或1038时支持 */
        extraData: IAnyObject;
    }
    /** 参照区域的边界 */
    interface RelativeRectResult {
        /** 下边界 */
        bottom: number;
        /** 左边界 */
        left: number;
        /** 右边界 */
        right: number;
        /** 上边界 */
        top: number;
    }
    /** 发送端地址信息 */
    interface RemoteInfo {
        /** 发送消息的 socket 的地址 */
        address: string;
        /** 使用的协议族，为 IPv4 或者 IPv6 */
        family: string;
        /** 端口号 */
        port: number;
        /** message 的大小，单位：字节 */
        size: number;
    }
    interface RemoveCustomLayerOption {
        /** 个性化图层id */
        layerId: string;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: RemoveCustomLayerCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: RemoveCustomLayerFailCallback;
        /** 接口调用成功的回调函数 */
        success?: RemoveCustomLayerSuccessCallback;
    }
    interface RemoveFormatOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: RemoveFormatCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: RemoveFormatFailCallback;
        /** 接口调用成功的回调函数 */
        success?: RemoveFormatSuccessCallback;
    }
    interface RemoveGroundOverlayOption {
        /** 图片图层 id */
        id: string;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: RemoveGroundOverlayCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: RemoveGroundOverlayFailCallback;
        /** 接口调用成功的回调函数 */
        success?: RemoveGroundOverlaySuccessCallback;
    }
    interface RemoveMarkersOption {
        /** marker 的 id 集合。 */
        markerIds: any[];
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: RemoveMarkersCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: RemoveMarkersFailCallback;
        /** 接口调用成功的回调函数 */
        success?: RemoveMarkersSuccessCallback;
    }
    interface RemoveSavedFileFailCallbackResult {
        /** 错误信息
         *
         * 可选值：
         * - 'fail file not exist': 指定的 tempFilePath 找不到文件; */
        errMsg: string;
    }
    interface RemoveServiceOption {
        /** service 的 uuid */
        serviceId: string;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: RemoveServiceCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: RemoveServiceFailCallback;
        /** 接口调用成功的回调函数 */
        success?: RemoveServiceSuccessCallback;
    }
    interface RemoveStorageOption {
        /** 本地缓存中指定的 key */
        key: string;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: RemoveStorageCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: RemoveStorageFailCallback;
        /** 接口调用成功的回调函数 */
        success?: RemoveStorageSuccessCallback;
    }
    interface RemoveTabBarBadgeOption {
        /** tabBar 的哪一项，从左边算起 */
        index: number;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: RemoveTabBarBadgeCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: RemoveTabBarBadgeFailCallback;
        /** 接口调用成功的回调函数 */
        success?: RemoveTabBarBadgeSuccessCallback;
    }
    interface RenameFailCallbackResult {
        /** 错误信息
         *
         * 可选值：
         * - 'fail permission denied, rename ${oldPath} -> ${newPath}': 指定源文件或目标文件没有写权限;
         * - 'fail no such file or directory, rename ${oldPath} -> ${newPath}': 源文件不存在，或目标文件路径的上层目录不存在; */
        errMsg: string;
    }
    interface RenameOption {
        /** 新文件路径，支持本地路径 */
        newPath: string;
        /** 源文件路径，支持本地路径 */
        oldPath: string;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: RenameCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: RenameFailCallback;
        /** 接口调用成功的回调函数 */
        success?: RenameSuccessCallback;
    }
    /** Canvas 绘图上下文。
     *
     * ****
     *
     * - 通过 Canvas.getContext('2d') 接口可以获取 CanvasRenderingContext2D 对象，实现了 [HTML Canvas 2D Context](https://www.w3.org/TR/2dcontext/) 定义的属性、方法。
     * - 通过 Canvas.getContext('webgl') 或 OffscreenCanvas.getContext('webgl') 接口可以获取 WebGLRenderingContext 对象，实现了 [WebGL 1.0](https://www.khronos.org/registry/webgl/specs/latest/1.0/) 定义的所有属性、方法、常量。
     * - CanvasRenderingContext2D 的 drawImage 方法 2.10.0 起支持传入通过 [SelectorQuery](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/SelectorQuery.html) 获取的 video 对象
     *
     * **示例代码**
     *
     * video 画到 2D Canvas 示例
     * [在微信开发者工具中查看示例](https://developers.weixin.qq.com/s/tJTak7mU7sfX) */
    interface RenderingContext {}
    interface RequestOption<
        T extends string | IAnyObject | ArrayBuffer =
            | string
            | IAnyObject
            | ArrayBuffer,
    > {
        /** 开发者服务器接口地址 */
        url: string;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: RequestCompleteCallback;
        /** 请求的参数 */
        data?: string | IAnyObject | ArrayBuffer;
        /** 返回的数据格式
         *
         * 可选值：
         * - 'json': 返回的数据为 JSON，返回后会对返回的数据进行一次 JSON.parse;
         * - '其他': 不对返回的内容进行 JSON.parse; */
        dataType?: "json" | "其他";
        /** 开启 cache
         *
         * 最低基础库： `2.10.4` */
        enableCache?: boolean;
        /** 开启 http2
         *
         * 最低基础库： `2.10.4` */
        enableHttp2?: boolean;
        /** 开启 quic
         *
         * 最低基础库： `2.10.4` */
        enableQuic?: boolean;
        /** 接口调用失败的回调函数 */
        fail?: RequestFailCallback;
        /** 设置请求的 header，header 中不能设置 Referer。
         *
         * `content-type` 默认为 `application/json` */
        header?: IAnyObject;
        /** HTTP 请求方法
         *
         * 可选值：
         * - 'OPTIONS': HTTP 请求 OPTIONS;
         * - 'GET': HTTP 请求 GET;
         * - 'HEAD': HTTP 请求 HEAD;
         * - 'POST': HTTP 请求 POST;
         * - 'PUT': HTTP 请求 PUT;
         * - 'DELETE': HTTP 请求 DELETE;
         * - 'TRACE': HTTP 请求 TRACE;
         * - 'CONNECT': HTTP 请求 CONNECT; */
        method?:
            | "OPTIONS"
            | "GET"
            | "HEAD"
            | "POST"
            | "PUT"
            | "DELETE"
            | "TRACE"
            | "CONNECT";
        /** 响应的数据类型
         *
         * 可选值：
         * - 'text': 响应的数据为文本;
         * - 'arraybuffer': 响应的数据为 ArrayBuffer;
         *
         * 最低基础库： `1.7.0` */
        responseType?: "text" | "arraybuffer";
        /** 接口调用成功的回调函数 */
        success?: RequestSuccessCallback<T>;
        /** 超时时间，单位为毫秒
         *
         * 最低基础库： `2.10.0` */
        timeout?: number;
    }
    interface RequestOrderPaymentOption {
        /** 随机字符串，长度为32个字符以下 */
        nonceStr: string;
        /** 统一下单接口返回的 prepay_id 参数值，提交格式如：prepay_id=*** */
        package: string;
        /** 签名，具体见微信支付文档 */
        paySign: string;
        /** 时间戳，从 1970 年 1 月 1 日 00:00:00 至今的秒数，即当前的时间 */
        timeStamp: string;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: RequestOrderPaymentCompleteCallback;
        /** 外部APP用户ID */
        extUserUin?: string;
        /** 接口调用失败的回调函数 */
        fail?: RequestOrderPaymentFailCallback;
        /** 订单信息，仅在需要校验的场景下需要传递，具体见[接口说明](/miniprogram/dev/framework/ministore/minishopopencomponent2/API/order/requestOrderPayment) */
        orderInfo?: IAnyObject;
        /** 签名算法，应与后台下单时的值一致
         *
         * 可选值：
         * - 'MD5': 仅在 v2 版本接口适用;
         * - 'HMAC-SHA256': 仅在 v2 版本接口适用;
         * - 'RSA': 仅在 v3 版本接口适用; */
        signType?: "MD5" | "HMAC-SHA256" | "RSA";
        /** 接口调用成功的回调函数 */
        success?: RequestOrderPaymentSuccessCallback;
    }
    interface RequestPaymentOption {
        /** 随机字符串，长度为32个字符以下 */
        nonceStr: string;
        /** 统一下单接口返回的 prepay_id 参数值，提交格式如：prepay_id=*** */
        package: string;
        /** 签名，具体见微信支付文档 */
        paySign: string;
        /** 时间戳，从 1970 年 1 月 1 日 00:00:00 至今的秒数，即当前的时间 */
        timeStamp: string;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: RequestPaymentCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: RequestPaymentFailCallback;
        /** 签名算法，应与后台下单时的值一致
         *
         * 可选值：
         * - 'MD5': 仅在 v2 版本接口适用;
         * - 'HMAC-SHA256': 仅在 v2 版本接口适用;
         * - 'RSA': 仅在 v3 版本接口适用; */
        signType?: "MD5" | "HMAC-SHA256" | "RSA";
        /** 接口调用成功的回调函数 */
        success?: RequestPaymentSuccessCallback;
    }
    interface RequestPictureInPictureOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: RequestPictureInPictureCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: RequestPictureInPictureFailCallback;
        /** 接口调用成功的回调函数 */
        success?: RequestPictureInPictureSuccessCallback;
    }
    /** 网络请求过程中一些调试信息
     *
     * 最低基础库： `2.10.4` */
    interface RequestProfile {
        /** SSL建立完成的时间,如果不是安全连接,则值为 0 */
        SSLconnectionEnd: number;
        /** SSL建立连接的时间,如果不是安全连接,则值为 0 */
        SSLconnectionStart: number;
        /** HTTP（TCP） 完成建立连接的时间（完成握手），如果是持久连接，则与 fetchStart 值相等。注意如果在传输层发生了错误且重新建立连接，则这里显示的是新建立的连接完成的时间。注意这里握手结束，包括安全连接建立完成、SOCKS 授权通过 */
        connectEnd: number;
        /** HTTP（TCP） 开始建立连接的时间，如果是持久连接，则与 fetchStart 值相等。注意如果在传输层发生了错误且重新建立连接，则这里显示的是新建立的连接开始的时间 */
        connectStart: number;
        /** DNS 域名查询完成的时间，如果使用了本地缓存（即无 DNS 查询）或持久连接，则与 fetchStart 值相等 */
        domainLookupEnd: number;
        /** DNS 域名查询开始的时间，如果使用了本地缓存（即无 DNS 查询）或持久连接，则与 fetchStart 值相等 */
        domainLookupStart: number;
        /** 评估当前网络下载的kbps */
        downstreamThroughputKbpsEstimate: number;
        /** 评估的网络状态 slow 2g/2g/3g/4g */
        estimate_nettype: string;
        /** 组件准备好使用 HTTP 请求抓取资源的时间，这发生在检查本地缓存之前 */
        fetchStart: number;
        /** 协议层根据多个请求评估当前网络的 rtt（仅供参考） */
        httpRttEstimate: number;
        /** 当前请求的IP */
        peerIP: string;
        /** 当前请求的端口 */
        port: number;
        /** 收到字节数 */
        receivedBytedCount: number;
        /** 最后一个 HTTP 重定向完成时的时间。有跳转且是同域名内部的重定向才算，否则值为 0 */
        redirectEnd: number;
        /** 第一个 HTTP 重定向发生时的时间。有跳转且是同域名内的重定向才算，否则值为 0 */
        redirectStart: number;
        /** HTTP请求读取真实文档结束的时间 */
        requestEnd: number;
        /** HTTP请求读取真实文档开始的时间（完成建立连接），包括从本地读取缓存。连接错误重连时，这里显示的也是新建立连接的时间 */
        requestStart: number;
        /** HTTP 响应全部接收完成的时间（获取到最后一个字节），包括从本地读取缓存 */
        responseEnd: number;
        /** HTTP 开始接收响应的时间（获取到第一个字节），包括从本地读取缓存 */
        responseStart: number;
        /** 当次请求连接过程中实时 rtt */
        rtt: number;
        /** 发送的字节数 */
        sendBytesCount: number;
        /** 是否复用连接 */
        socketReused: boolean;
        /** 当前网络的实际下载kbps */
        throughputKbps: number;
        /** 传输层根据多个请求评估的当前网络的 rtt（仅供参考） */
        transportRttEstimate: number;
    }
    interface RequestSubscribeMessageFailCallbackResult {
        /** 接口调用失败错误码 */
        errCode: number;
        /** 接口调用失败错误信息 */
        errMsg: string;
    }
    interface RequestSubscribeMessageOption {
        /** 需要订阅的消息模板的id的集合，一次调用最多可订阅3条消息（注意：iOS客户端7.0.6版本、Android客户端7.0.7版本之后的一次性订阅/长期订阅才支持多个模板消息，iOS客户端7.0.5版本、Android客户端7.0.6版本之前的一次订阅只支持一个模板消息）消息模板id在[微信公众平台(mp.weixin.qq.com)-功能-订阅消息]中配置。每个tmplId对应的模板标题需要不相同，否则会被过滤。 */
        tmplIds: any[];
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: RequestSubscribeMessageCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: RequestSubscribeMessageFailCallback;
        /** 接口调用成功的回调函数 */
        success?: RequestSubscribeMessageSuccessCallback;
    }
    interface RequestSubscribeMessageSuccessCallbackResult {
        /** [TEMPLATE_ID]是动态的键，即模板id，值包括'accept'、'reject'、'ban'、'filter'。'accept'表示用户同意订阅该条id对应的模板消息，'reject'表示用户拒绝订阅该条id对应的模板消息，'ban'表示已被后台封禁，'filter'表示该模板因为模板标题同名被后台过滤。例如 { errMsg: "requestSubscribeMessage:ok", zun-LzcQyW-edafCVvzPkK4de2Rllr1fFpw2A_x0oXE: "accept"} 表示用户同意订阅zun-LzcQyW-edafCVvzPkK4de2Rllr1fFpw2A_x0oXE这条消息 */
        [TEMPLATE_ID: string]: string;
        /** 接口调用成功时errMsg值为'requestSubscribeMessage:ok' */
        errMsg: string;
    }
    interface RequestSuccessCallbackResult<
        T extends string | IAnyObject | ArrayBuffer =
            | string
            | IAnyObject
            | ArrayBuffer,
    > {
        /** 开发者服务器返回的 cookies，格式为字符串数组
         *
         * 最低基础库： `2.10.0` */
        cookies: string[];
        /** 开发者服务器返回的数据 */
        data: T;
        /** 开发者服务器返回的 HTTP Response Header
         *
         * 最低基础库： `1.2.0` */
        header: IAnyObject;
        /** 网络请求过程中一些调试信息
         *
         * 最低基础库： `2.10.4` */
        profile: RequestProfile;
        /** 开发者服务器返回的 HTTP 状态码 */
        statusCode: number;
        errMsg: string;
    }
    interface ResumeBGMOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: ResumeBGMCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: ResumeBGMFailCallback;
        /** 接口调用成功的回调函数 */
        success?: ResumeBGMSuccessCallback;
    }
    interface ResumeOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: ResumeCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: ResumeFailCallback;
        /** 接口调用成功的回调函数 */
        success?: ResumeSuccessCallback;
    }
    interface RewardedVideoAdOnCloseCallbackResult {
        /** 视频是否是在用户完整观看的情况下被关闭的
         *
         * 最低基础库： `2.1.0` */
        isEnded: boolean;
    }
    interface RewardedVideoAdOnErrorCallbackResult {
        /** 错误码
         *
         * 可选值：
         * - 1000: 后端接口调用失败;
         * - 1001: 参数错误;
         * - 1002: 广告单元无效;
         * - 1003: 内部错误;
         * - 1004: 无合适的广告;
         * - 1005: 广告组件审核中;
         * - 1006: 广告组件被驳回;
         * - 1007: 广告组件被封禁;
         * - 1008: 广告单元已关闭;
         *
         * 最低基础库： `2.2.2` */
        errCode: 1000 | 1001 | 1002 | 1003 | 1004 | 1005 | 1006 | 1007 | 1008;
        /** 错误信息 */
        errMsg: string;
    }
    interface RmdirFailCallbackResult {
        /** 错误信息
         *
         * 可选值：
         * - 'fail no such file or directory ${dirPath}': 目录不存在;
         * - 'fail directory not empty': 目录不为空;
         * - 'fail permission denied, open ${dirPath}': 指定的 dirPath 路径没有写权限;
         * - 'fail sdcard not mounted': Android sdcard 挂载失败; */
        errMsg: string;
    }
    interface RmdirOption {
        /** 要删除的目录路径 (本地路径) */
        dirPath: string;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: RmdirCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: RmdirFailCallback;
        /** 是否递归删除目录。如果为 true，则删除该目录和该目录下的所有子目录以及文件。
         *
         * 最低基础库： `2.3.0` */
        recursive?: boolean;
        /** 接口调用成功的回调函数 */
        success?: RmdirSuccessCallback;
    }
    /** 在竖屏正方向下的安全区域
     *
     * 最低基础库： `2.7.0` */
    interface SafeArea {
        /** 安全区域右下角纵坐标 */
        bottom: number;
        /** 安全区域的高度，单位逻辑像素 */
        height: number;
        /** 安全区域左上角横坐标 */
        left: number;
        /** 安全区域右下角横坐标 */
        right: number;
        /** 安全区域左上角纵坐标 */
        top: number;
        /** 安全区域的宽度，单位逻辑像素 */
        width: number;
    }
    interface SaveFileFailCallbackResult {
        /** 错误信息
         *
         * 可选值：
         * - 'fail tempFilePath file not exist': 指定的 tempFilePath 找不到文件;
         * - 'fail permission denied, open "${filePath}"': 指定的 filePath 路径没有写权限;
         * - 'fail no such file or directory "${dirPath}"': 上级目录不存在;
         * - 'fail the maximum size of the file storage limit is exceeded': 存储空间不足;
         * - 'fail sdcard not mounted': Android sdcard 挂载失败; */
        errMsg: string;
    }
    interface SaveFileSuccessCallbackResult {
        /** 存储后的文件路径 (本地路径) */
        savedFilePath: string;
        errMsg: string;
    }
    interface SaveFileToDiskOption {
        /** 待保存文件路径 */
        filePath: string;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: SaveFileToDiskCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: SaveFileToDiskFailCallback;
        /** 接口调用成功的回调函数 */
        success?: SaveFileToDiskSuccessCallback;
    }
    interface SaveImageToPhotosAlbumOption {
        /** 图片文件路径，可以是临时文件路径或永久文件路径 (本地路径) ，不支持网络路径 */
        filePath: string;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: SaveImageToPhotosAlbumCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: SaveImageToPhotosAlbumFailCallback;
        /** 接口调用成功的回调函数 */
        success?: SaveImageToPhotosAlbumSuccessCallback;
    }
    interface SaveVideoToPhotosAlbumOption {
        /** 视频文件路径，可以是临时文件路径也可以是永久文件路径 (本地路径) */
        filePath: string;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: SaveVideoToPhotosAlbumCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: SaveVideoToPhotosAlbumFailCallback;
        /** 接口调用成功的回调函数 */
        success?: SaveVideoToPhotosAlbumSuccessCallback;
    }
    interface ScanCodeOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: ScanCodeCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: ScanCodeFailCallback;
        /** 是否只能从相机扫码，不允许从相册选择图片
         *
         * 最低基础库： `1.2.0` */
        onlyFromCamera?: boolean;
        /** 扫码类型
         *
         * 可选值：
         * - 'barCode': 一维码;
         * - 'qrCode': 二维码;
         * - 'datamatrix': Data Matrix 码;
         * - 'pdf417': PDF417 条码;
         *
         * 最低基础库： `1.7.0` */
        scanType?: Array<"barCode" | "qrCode" | "datamatrix" | "pdf417">;
        /** 接口调用成功的回调函数 */
        success?: ScanCodeSuccessCallback;
    }
    interface ScanCodeSuccessCallbackResult {
        /** 所扫码的字符集 */
        charSet: string;
        /** 当所扫的码为当前小程序二维码时，会返回此字段，内容为二维码携带的 path */
        path: string;
        /** 原始数据，base64编码 */
        rawData: string;
        /** 所扫码的内容 */
        result: string;
        /** 所扫码的类型
         *
         * 可选值：
         * - 'QR_CODE': 二维码;
         * - 'AZTEC': 一维码;
         * - 'CODABAR': 一维码;
         * - 'CODE_39': 一维码;
         * - 'CODE_93': 一维码;
         * - 'CODE_128': 一维码;
         * - 'DATA_MATRIX': 二维码;
         * - 'EAN_8': 一维码;
         * - 'EAN_13': 一维码;
         * - 'ITF': 一维码;
         * - 'MAXICODE': 一维码;
         * - 'PDF_417': 二维码;
         * - 'RSS_14': 一维码;
         * - 'RSS_EXPANDED': 一维码;
         * - 'UPC_A': 一维码;
         * - 'UPC_E': 一维码;
         * - 'UPC_EAN_EXTENSION': 一维码;
         * - 'WX_CODE': 二维码;
         * - 'CODE_25': 一维码; */
        scanType:
            | "QR_CODE"
            | "AZTEC"
            | "CODABAR"
            | "CODE_39"
            | "CODE_93"
            | "CODE_128"
            | "DATA_MATRIX"
            | "EAN_8"
            | "EAN_13"
            | "ITF"
            | "MAXICODE"
            | "PDF_417"
            | "RSS_14"
            | "RSS_EXPANDED"
            | "UPC_A"
            | "UPC_E"
            | "UPC_EAN_EXTENSION"
            | "WX_CODE"
            | "CODE_25";
        errMsg: string;
    }
    interface ScrollOffsetCallbackResult {
        /** 节点的 dataset */
        dataset: IAnyObject;
        /** 节点的 ID */
        id: string;
        /** 节点的水平滚动位置 */
        scrollLeft: number;
        /** 节点的竖直滚动位置 */
        scrollTop: number;
    }
    interface ScrollToOption {
        /** 是否启用滚动动画 */
        animated?: boolean;
        /** 滚动动画时长 */
        duration?: number;
        /** 左边界距离 */
        left?: number;
        /** 顶部距离 */
        top?: number;
        /** 初始速度 */
        velocity?: number;
    }
    /** 增强 ScrollView 实例，可通过 [wx.createSelectorQuery](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/wx.createSelectorQuery.html) 的 [NodesRef.node](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/NodesRef.node.html) 方法获取。 仅在 scroll-view 组件开启 enhanced 属性后生效。
*
* **示例代码**
*
*
* ```js
wx.createSelectorQuery()
  .select('#scrollview')
  .node()
  .exec((res) => {
    const scrollView = res[0].node;
    scrollView.scrollEnabled = false;
  })
```
*
* 最低基础库： `2.14.4` */
    interface ScrollViewContext {
        /** 设置滚动边界弹性 (仅在 iOS 下生效) */
        bounces: boolean;
        /** 取消滚动惯性 (仅在 iOS 下生效) */
        decelerationDisabled: boolean;
        /** 设置滚动减速速率 */
        fastDeceleration: boolean;
        /** 分页滑动开关 */
        pagingEnabled: boolean;
        /** 滚动开关 */
        scrollEnabled: boolean;
        /** 设置是否显示滚动条 */
        showScrollbar: boolean;
    }
    interface SearchContactsOption {
        /** 需要查找的号码，长度>=8位才匹配 */
        phoneNumber: string;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: SearchContactsCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: SearchContactsFailCallback;
        /** 接口调用成功的回调函数 */
        success?: SearchContactsSuccessCallback;
    }
    /** 手机号 */
    interface SearchContactsResult {
        /** 联系人姓名 */
        name: string;
        /** 手机号 */
        phoneNumber: string;
    }
    interface SearchContactsSuccessCallbackOption {
        /** 手机号 */
        result: SearchContactsResult[];
    }
    interface SeekBackgroundAudioOption {
        /** 音乐位置，单位：秒 */
        position: number;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: SeekBackgroundAudioCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: SeekBackgroundAudioFailCallback;
        /** 接口调用成功的回调函数 */
        success?: SeekBackgroundAudioSuccessCallback;
    }
    interface SendHCEMessageOption {
        /** 二进制数据 */
        data: ArrayBuffer;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: SendHCEMessageCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: SendHCEMessageFailCallback;
        /** 接口调用成功的回调函数 */
        success?: SendHCEMessageSuccessCallback;
    }
    interface SendMessageOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: SendMessageCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: SendMessageFailCallback;
        /** 接口调用成功的回调函数 */
        success?: SendMessageSuccessCallback;
    }
    interface SendSocketMessageOption {
        /** 需要发送的内容 */
        data: string | ArrayBuffer;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: SendSocketMessageCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: SendSocketMessageFailCallback;
        /** 接口调用成功的回调函数 */
        success?: SendSocketMessageSuccessCallback;
    }
    interface SetBGMVolumeOption {
        /** 音量大小，范围是 0-1 */
        volume: string;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: SetBGMVolumeCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: SetBGMVolumeFailCallback;
        /** 接口调用成功的回调函数 */
        success?: SetBGMVolumeSuccessCallback;
    }
    interface SetBLEMTUOption {
        /** 用于区分设备的 id */
        deviceId: string;
        /** 最大传输单元(22,512) 区间内，单位 bytes */
        mtu: number;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: SetBLEMTUCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: SetBLEMTUFailCallback;
        /** 接口调用成功的回调函数 */
        success?: SetBLEMTUSuccessCallback;
    }
    interface SetBackgroundColorOption {
        /** 窗口的背景色，必须为十六进制颜色值 */
        backgroundColor?: string;
        /** 底部窗口的背景色，必须为十六进制颜色值，仅 iOS 支持 */
        backgroundColorBottom?: string;
        /** 顶部窗口的背景色，必须为十六进制颜色值，仅 iOS 支持 */
        backgroundColorTop?: string;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: SetBackgroundColorCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: SetBackgroundColorFailCallback;
        /** 接口调用成功的回调函数 */
        success?: SetBackgroundColorSuccessCallback;
    }
    interface SetBackgroundFetchTokenOption {
        /** 自定义的登录态 */
        token: string;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: SetBackgroundFetchTokenCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: SetBackgroundFetchTokenFailCallback;
        /** 接口调用成功的回调函数 */
        success?: SetBackgroundFetchTokenSuccessCallback;
    }
    interface SetBackgroundTextStyleOption {
        /** 下拉背景字体、loading 图的样式。
         *
         * 可选值：
         * - 'dark': dark 样式;
         * - 'light': light 样式; */
        textStyle: "dark" | "light";
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: SetBackgroundTextStyleCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: SetBackgroundTextStyleFailCallback;
        /** 接口调用成功的回调函数 */
        success?: SetBackgroundTextStyleSuccessCallback;
    }
    interface SetCenterOffsetOption {
        /** 偏移量，两位数组 */
        offset: number[];
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: SetCenterOffsetCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: SetCenterOffsetFailCallback;
        /** 接口调用成功的回调函数 */
        success?: SetCenterOffsetSuccessCallback;
    }
    interface SetClipboardDataOption {
        /** 剪贴板的内容 */
        data: string;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: SetClipboardDataCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: SetClipboardDataFailCallback;
        /** 接口调用成功的回调函数 */
        success?: SetClipboardDataSuccessCallback;
    }
    interface SetContentsOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: SetContentsCompleteCallback;
        /** 表示内容的delta对象 */
        delta?: IAnyObject;
        /** 接口调用失败的回调函数 */
        fail?: SetContentsFailCallback;
        /** 带标签的HTML内容 */
        html?: string;
        /** 接口调用成功的回调函数 */
        success?: SetContentsSuccessCallback;
    }
    interface SetEnableDebugOption {
        /** 是否打开调试 */
        enableDebug: boolean;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: SetEnableDebugCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: SetEnableDebugFailCallback;
        /** 接口调用成功的回调函数 */
        success?: SetEnableDebugSuccessCallback;
    }
    interface SetInnerAudioOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: SetInnerAudioOptionCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: SetInnerAudioOptionFailCallback;
        /** 是否与其他音频混播，设置为 true 之后，不会终止其他应用或微信内的音乐 */
        mixWithOther?: boolean;
        /** （仅在 iOS 生效）是否遵循静音开关，设置为 false 之后，即使是在静音模式下，也能播放声音 */
        obeyMuteSwitch?: boolean;
        /** true 代表用扬声器播放，false 代表听筒播放，默认值为 true。 */
        speakerOn?: boolean;
        /** 接口调用成功的回调函数 */
        success?: SetInnerAudioOptionSuccessCallback;
    }
    interface SetKeepScreenOnOption {
        /** 是否保持屏幕常亮 */
        keepScreenOn: boolean;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: SetKeepScreenOnCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: SetKeepScreenOnFailCallback;
        /** 接口调用成功的回调函数 */
        success?: SetKeepScreenOnSuccessCallback;
    }
    interface SetLocMarkerIconOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: SetLocMarkerIconCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: SetLocMarkerIconFailCallback;
        /** 图标路径，支持网络路径、本地路径、代码包路径 */
        iconPath?: string;
        /** 接口调用成功的回调函数 */
        success?: SetLocMarkerIconSuccessCallback;
    }
    interface SetMICVolumeOption {
        /** 音量大小，范围是 0.0-1.0 */
        volume: number;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: SetMICVolumeCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: SetMICVolumeFailCallback;
        /** 接口调用成功的回调函数 */
        success?: SetMICVolumeSuccessCallback;
    }
    interface SetNavigationBarColorOption {
        /** 背景颜色值，有效值为十六进制颜色 */
        backgroundColor: string;
        /** 前景颜色值，包括按钮、标题、状态栏的颜色，仅支持 #ffffff 和 #000000 */
        frontColor: string;
        /** 动画效果 */
        animation?: AnimationOption;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: SetNavigationBarColorCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: SetNavigationBarColorFailCallback;
        /** 接口调用成功的回调函数 */
        success?: SetNavigationBarColorSuccessCallback;
    }
    interface SetNavigationBarTitleOption {
        /** 页面标题 */
        title: string;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: SetNavigationBarTitleCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: SetNavigationBarTitleFailCallback;
        /** 接口调用成功的回调函数 */
        success?: SetNavigationBarTitleSuccessCallback;
    }
    interface SetScreenBrightnessOption {
        /** 屏幕亮度值，范围 0 ~ 1。0 最暗，1 最亮 */
        value: number;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: SetScreenBrightnessCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: SetScreenBrightnessFailCallback;
        /** 接口调用成功的回调函数 */
        success?: SetScreenBrightnessSuccessCallback;
    }
    interface SetStorageOption<T = any> {
        /** 需要存储的内容。只支持原生类型、Date、及能够通过`JSON.stringify`序列化的对象。 */
        data: T;
        /** 本地缓存中指定的 key */
        key: string;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: SetStorageCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: SetStorageFailCallback;
        /** 接口调用成功的回调函数 */
        success?: SetStorageSuccessCallback;
    }
    interface SetTabBarBadgeOption {
        /** tabBar 的哪一项，从左边算起 */
        index: number;
        /** 显示的文本，超过 4 个字符则显示成 ... */
        text: string;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: SetTabBarBadgeCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: SetTabBarBadgeFailCallback;
        /** 接口调用成功的回调函数 */
        success?: SetTabBarBadgeSuccessCallback;
    }
    interface SetTabBarItemOption {
        /** tabBar 的哪一项，从左边算起 */
        index: number;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: SetTabBarItemCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: SetTabBarItemFailCallback;
        /** 图片路径，icon 大小限制为 40kb，建议尺寸为 81px * 81px，当 postion 为 top 时，此参数无效 */
        iconPath?: string;
        /** 选中时的图片路径，icon 大小限制为 40kb，建议尺寸为 81px * 81px ，当 postion 为 top 时，此参数无效 */
        selectedIconPath?: string;
        /** 接口调用成功的回调函数 */
        success?: SetTabBarItemSuccessCallback;
        /** tab 上的按钮文字 */
        text?: string;
    }
    interface SetTabBarStyleOption {
        /** tab 的背景色，HexColor */
        backgroundColor?: string;
        /** tabBar上边框的颜色， 仅支持 black/white */
        borderStyle?: string;
        /** tab 上的文字默认颜色，HexColor */
        color?: string;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: SetTabBarStyleCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: SetTabBarStyleFailCallback;
        /** tab 上的文字选中时的颜色，HexColor */
        selectedColor?: string;
        /** 接口调用成功的回调函数 */
        success?: SetTabBarStyleSuccessCallback;
    }
    interface SetTimeoutOption {
        /** 设置超时时间 (ms) */
        timeout: number;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: SetTimeoutCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: SetTimeoutFailCallback;
        /** 接口调用成功的回调函数 */
        success?: SetTimeoutSuccessCallback;
    }
    interface SetTopBarTextOption {
        /** 置顶栏文字 */
        text: string;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: SetTopBarTextCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: SetTopBarTextFailCallback;
        /** 接口调用成功的回调函数 */
        success?: SetTopBarTextSuccessCallback;
    }
    interface SetWifiListOption {
        /** 提供预设的 Wi-Fi 信息列表 */
        wifiList: WifiData[];
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: SetWifiListCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: SetWifiListFailCallback;
        /** 接口调用成功的回调函数 */
        success?: SetWifiListSuccessCallback;
    }
    interface SetWindowSizeOption {
        /** 窗口高度，以像素为单位 */
        height: number;
        /** 窗口宽度，以像素为单位 */
        width: number;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: SetWindowSizeCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: SetWindowSizeFailCallback;
        /** 接口调用成功的回调函数 */
        success?: SetWindowSizeSuccessCallback;
    }
    interface SetZoomOption {
        /** 缩放级别，范围[1, maxZoom]。zoom 可取小数，精确到小数后一位。maxZoom 可在 bindinitdone 返回值中获取。 */
        zoom: number;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: SetZoomCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: SetZoomFailCallback;
        /** 接口调用成功的回调函数 */
        success?: SetZoomSuccessCallback;
    }
    interface SetZoomSuccessCallbackResult {
        /** 实际设置的缩放级别。由于系统限制，某些机型可能无法设置成指定值，会改用最接近的可设值。 */
        zoom: number;
        errMsg: string;
    }
    interface ShareFileMessageOption {
        /** 要分享的文件地址，必须为本地路径或临时路径 */
        filePath: string;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: ShareFileMessageCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: ShareFileMessageFailCallback;
        /** 自定义文件名，若留空则使用filePath中的文件名 */
        fileName?: string;
        /** 接口调用成功的回调函数 */
        success?: ShareFileMessageSuccessCallback;
    }
    interface ShareToWeRunOption {
        /** 运动数据列表 */
        recordList: WxaSportRecord[];
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: ShareToWeRunCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: ShareToWeRunFailCallback;
        /** 接口调用成功的回调函数 */
        success?: ShareToWeRunSuccessCallback;
    }
    interface ShareVideoMessageOption {
        /** 要分享的视频地址，必须为本地路径或临时路径 */
        videoPath: string;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: ShareVideoMessageCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: ShareVideoMessageFailCallback;
        /** 接口调用成功的回调函数 */
        success?: ShareVideoMessageSuccessCallback;
        /** 缩略图路径，若留空则使用视频首帧 */
        thumbPath?: string;
    }
    interface ShowActionSheetOption {
        /** 按钮的文字数组，数组长度最大为 6 */
        itemList: string[];
        /** 警示文案
         *
         * 最低基础库： `2.14.0` */
        alertText?: string;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: ShowActionSheetCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: ShowActionSheetFailCallback;
        /** 按钮的文字颜色 */
        itemColor?: string;
        /** 接口调用成功的回调函数 */
        success?: ShowActionSheetSuccessCallback;
    }
    interface ShowActionSheetSuccessCallbackResult {
        /** 用户点击的按钮序号，从上到下的顺序，从0开始 */
        tapIndex: number;
        errMsg: string;
    }
    interface ShowLoadingOption {
        /** 提示的内容 */
        title: string;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: ShowLoadingCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: ShowLoadingFailCallback;
        /** 是否显示透明蒙层，防止触摸穿透 */
        mask?: boolean;
        /** 接口调用成功的回调函数 */
        success?: ShowLoadingSuccessCallback;
    }
    interface ShowModalOption {
        /** 取消按钮的文字颜色，必须是 16 进制格式的颜色字符串 */
        cancelColor?: string;
        /** 取消按钮的文字，最多 4 个字符 */
        cancelText?: string;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: ShowModalCompleteCallback;
        /** 确认按钮的文字颜色，必须是 16 进制格式的颜色字符串 */
        confirmColor?: string;
        /** 确认按钮的文字，最多 4 个字符 */
        confirmText?: string;
        /** 提示的内容 */
        content?: string;
        /** 接口调用失败的回调函数 */
        fail?: ShowModalFailCallback;
        /** 是否显示取消按钮 */
        showCancel?: boolean;
        /** 接口调用成功的回调函数 */
        success?: ShowModalSuccessCallback;
        /** 提示的标题 */
        title?: string;
    }
    interface ShowModalSuccessCallbackResult {
        /** 为 true 时，表示用户点击了取消（用于 Android 系统区分点击蒙层关闭还是点击取消按钮关闭）
         *
         * 最低基础库： `1.1.0` */
        cancel: boolean;
        /** 为 true 时，表示用户点击了确定按钮 */
        confirm: boolean;
        /** editable 为 true 时，用户输入的文本 */
        content: string;
        errMsg: string;
    }
    interface ShowNavigationBarLoadingOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: ShowNavigationBarLoadingCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: ShowNavigationBarLoadingFailCallback;
        /** 接口调用成功的回调函数 */
        success?: ShowNavigationBarLoadingSuccessCallback;
    }
    interface ShowRedPackageOption {
        /** 封面地址 */
        url: string;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: ShowRedPackageCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: ShowRedPackageFailCallback;
        /** 接口调用成功的回调函数 */
        success?: ShowRedPackageSuccessCallback;
    }
    interface ShowShareImageMenuOption {
        /** 要分享的图片地址，必须为本地路径或临时路径 */
        path: string;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: ShowShareImageMenuCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: ShowShareImageMenuFailCallback;
        /** 接口调用成功的回调函数 */
        success?: ShowShareImageMenuSuccessCallback;
    }
    interface ShowShareMenuOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: ShowShareMenuCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: ShowShareMenuFailCallback;
        /** 本接口为 Beta 版本，暂只在 Android 平台支持。需要显示的转发按钮名称列表，默认['shareAppMessage']。按钮名称合法值包含 "shareAppMessage"、"shareTimeline" 两种
         *
         * 最低基础库： `2.11.3` */
        menus?: string[];
        /** 接口调用成功的回调函数 */
        success?: ShowShareMenuSuccessCallback;
        /** 是否使用带 shareTicket 的转发[详情](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/share.html) */
        withShareTicket?: boolean;
    }
    interface ShowTabBarOption {
        /** 是否需要动画效果 */
        animation?: boolean;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: ShowTabBarCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: ShowTabBarFailCallback;
        /** 接口调用成功的回调函数 */
        success?: ShowTabBarSuccessCallback;
    }
    interface ShowTabBarRedDotOption {
        /** tabBar 的哪一项，从左边算起 */
        index: number;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: ShowTabBarRedDotCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: ShowTabBarRedDotFailCallback;
        /** 接口调用成功的回调函数 */
        success?: ShowTabBarRedDotSuccessCallback;
    }
    interface ShowToastOption {
        /** 提示的内容 */
        title: string;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: ShowToastCompleteCallback;
        /** 提示的延迟时间 */
        duration?: number;
        /** 接口调用失败的回调函数 */
        fail?: ShowToastFailCallback;
        /** 图标
         *
         * 可选值：
         * - 'success': 显示成功图标，此时 title 文本最多显示 7 个汉字长度;
         * - 'error': 显示失败图标，此时 title 文本最多显示 7 个汉字长度;
         * - 'loading': 显示加载图标，此时 title 文本最多显示 7 个汉字长度;
         * - 'none': 不显示图标，此时 title 文本最多可显示两行，[1.9.0](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html)及以上版本支持; */
        icon?: "success" | "error" | "loading" | "none";
        /** 自定义图标的本地路径，image 的优先级高于 icon
         *
         * 最低基础库： `1.1.0` */
        image?: string;
        /** 是否显示透明蒙层，防止触摸穿透 */
        mask?: boolean;
        /** 接口调用成功的回调函数 */
        success?: ShowToastSuccessCallback;
    }
    interface Size {
        /** 变化后的窗口高度，单位 px */
        windowHeight: number;
        /** 变化后的窗口宽度，单位 px */
        windowWidth: number;
    }
    /** 网络请求过程中一些调试信息
     *
     * 最低基础库： `2.10.4` */
    interface SocketProfile {
        /** 完成建立连接的时间（完成握手），如果是持久连接，则与 fetchStart 值相等。注意如果在传输层发生了错误且重新建立连接，则这里显示的是新建立的连接完成的时间。注意这里握手结束，包括安全连接建立完成、SOCKS 授权通过 */
        connectEnd: number;
        /** 开始建立连接的时间，如果是持久连接，则与 fetchStart 值相等。注意如果在传输层发生了错误且重新建立连接，则这里显示的是新建立的连接开始的时间 */
        connectStart: number;
        /** 上层请求到返回的耗时 */
        cost: number;
        /** DNS 域名查询完成的时间，如果使用了本地缓存（即无 DNS 查询）或持久连接，则与 fetchStart 值相等 */
        domainLookupEnd: number;
        /** DNS 域名查询开始的时间，如果使用了本地缓存（即无 DNS 查询）或持久连接，则与 fetchStart 值相等 */
        domainLookupStart: number;
        /** 组件准备好使用 SOCKET 建立请求的时间，这发生在检查本地缓存之前 */
        fetchStart: number;
        /** 握手耗时 */
        handshakeCost: number;
        /** 单次连接的耗时，包括 connect ，tls */
        rtt: number;
    }
    interface SocketTaskCloseOption {
        /** 一个数字值表示关闭连接的状态号，表示连接被关闭的原因。 */
        code?: number;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: FileSystemManagerCloseCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: SocketTaskCloseFailCallback;
        /** 一个可读的字符串，表示连接被关闭的原因。这个字符串必须是不长于 123 字节的 UTF-8 文本（不是字符）。 */
        reason?: string;
        /** 接口调用成功的回调函数 */
        success?: FileSystemManagerCloseSuccessCallback;
    }
    interface SocketTaskOnCloseCallbackResult {
        /** 一个数字值表示关闭连接的状态号，表示连接被关闭的原因。 */
        code: number;
        /** 一个可读的字符串，表示连接被关闭的原因。 */
        reason: string;
    }
    interface SocketTaskOnMessageCallbackResult {
        /** 服务器返回的消息 */
        data: string | ArrayBuffer;
    }
    interface SocketTaskSendOption {
        /** 需要发送的内容 */
        data: string | ArrayBuffer;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: SendCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: SendFailCallback;
        /** 接口调用成功的回调函数 */
        success?: SendSuccessCallback;
    }
    interface StartAccelerometerOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: StartAccelerometerCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: StartAccelerometerFailCallback;
        /** 监听加速度数据回调函数的执行频率
         *
         * 可选值：
         * - 'game': 适用于更新游戏的回调频率，在 20ms/次 左右;
         * - 'ui': 适用于更新 UI 的回调频率，在 60ms/次 左右;
         * - 'normal': 普通的回调频率，在 200ms/次 左右;
         *
         * 最低基础库： `2.1.0` */
        interval?: "game" | "ui" | "normal";
        /** 接口调用成功的回调函数 */
        success?: StartAccelerometerSuccessCallback;
    }
    interface StartAdvertisingObject {
        /** 广播自定义参数 */
        advertiseRequest: AdvertiseReqObj;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: StartAdvertisingCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: StartAdvertisingFailCallback;
        /** 广播功率
         *
         * 可选值：
         * - 'low': 功率低;
         * - 'medium': 功率适中;
         * - 'high': 功率高; */
        powerLevel?: "low" | "medium" | "high";
        /** 接口调用成功的回调函数 */
        success?: StartAdvertisingSuccessCallback;
    }
    interface StartBeaconDiscoveryOption {
        /** iBeacon 设备广播的 uuid 列表 */
        uuids: string[];
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: StartBeaconDiscoveryCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: StartBeaconDiscoveryFailCallback;
        /** 是否校验蓝牙开关，仅在 iOS 下有效 */
        ignoreBluetoothAvailable?: boolean;
        /** 接口调用成功的回调函数 */
        success?: StartBeaconDiscoverySuccessCallback;
    }
    interface StartBluetoothDevicesDiscoveryOption {
        /** 是否允许重复上报同一设备。如果允许重复上报，则 [wx.onBlueToothDeviceFound](#) 方法会多次上报同一设备，但是 RSSI 值会有不同。 */
        allowDuplicatesKey?: boolean;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: StartBluetoothDevicesDiscoveryCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: StartBluetoothDevicesDiscoveryFailCallback;
        /** 上报设备的间隔。0 表示找到新设备立即上报，其他数值根据传入的间隔上报。 */
        interval?: number;
        /** 扫描模式，越高扫描越快，也越耗电, 仅安卓 7.0.12 及以上支持。
         *
         * 可选值：
         * - 'low': 低;
         * - 'medium': 中;
         * - 'high': 高; */
        powerLevel?: "low" | "medium" | "high";
        /** 要搜索的蓝牙设备主 service 的 uuid 列表。某些蓝牙设备会广播自己的主 service 的 uuid。如果设置此参数，则只搜索广播包有对应 uuid 的主服务的蓝牙设备。建议主要通过该参数过滤掉周边不需要处理的其他蓝牙设备。 */
        services?: string[];
        /** 接口调用成功的回调函数 */
        success?: StartBluetoothDevicesDiscoverySuccessCallback;
    }
    interface StartCompassOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: StartCompassCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: StartCompassFailCallback;
        /** 接口调用成功的回调函数 */
        success?: StartCompassSuccessCallback;
    }
    interface StartDeviceMotionListeningOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: StartDeviceMotionListeningCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: StartDeviceMotionListeningFailCallback;
        /** 监听设备方向的变化回调函数的执行频率
         *
         * 可选值：
         * - 'game': 适用于更新游戏的回调频率，在 20ms/次 左右;
         * - 'ui': 适用于更新 UI 的回调频率，在 60ms/次 左右;
         * - 'normal': 普通的回调频率，在 200ms/次 左右; */
        interval?: "game" | "ui" | "normal";
        /** 接口调用成功的回调函数 */
        success?: StartDeviceMotionListeningSuccessCallback;
    }
    interface StartDiscoveryOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: StartDiscoveryCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: StartDiscoveryFailCallback;
        /** 接口调用成功的回调函数 */
        success?: StartDiscoverySuccessCallback;
    }
    interface StartGyroscopeOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: StartGyroscopeCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: StartGyroscopeFailCallback;
        /** 监听陀螺仪数据回调函数的执行频率
         *
         * 可选值：
         * - 'game': 适用于更新游戏的回调频率，在 20ms/次 左右;
         * - 'ui': 适用于更新 UI 的回调频率，在 60ms/次 左右;
         * - 'normal': 普通的回调频率，在 200ms/次 左右; */
        interval?: "game" | "ui" | "normal";
        /** 接口调用成功的回调函数 */
        success?: StartGyroscopeSuccessCallback;
    }
    interface StartHCEOption {
        /** 需要注册到系统的 AID 列表 */
        aid_list: string[];
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: StartHCECompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: StartHCEFailCallback;
        /** 接口调用成功的回调函数 */
        success?: StartHCESuccessCallback;
    }
    interface StartLocalServiceDiscoveryFailCallbackResult {
        /** 错误信息
         *
         * 可选值：
         * - 'invalid param': serviceType 为空;
         * - 'scan task already exist': 在当前 startLocalServiceDiscovery 发起的搜索未停止的情况下，再次调用 startLocalServiceDiscovery; */
        errMsg: string;
    }
    interface StartLocalServiceDiscoveryOption {
        /** 要搜索的服务类型 */
        serviceType: string;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: StartLocalServiceDiscoveryCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: StartLocalServiceDiscoveryFailCallback;
        /** 接口调用成功的回调函数 */
        success?: StartLocalServiceDiscoverySuccessCallback;
    }
    interface StartLocationUpdateBackgroundOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: StartLocationUpdateBackgroundCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: StartLocationUpdateBackgroundFailCallback;
        /** 接口调用成功的回调函数 */
        success?: StartLocationUpdateBackgroundSuccessCallback;
    }
    interface StartLocationUpdateOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: StartLocationUpdateCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: StartLocationUpdateFailCallback;
        /** 接口调用成功的回调函数 */
        success?: StartLocationUpdateSuccessCallback;
    }
    interface StartPreviewOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: StartPreviewCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: StartPreviewFailCallback;
        /** 接口调用成功的回调函数 */
        success?: StartPreviewSuccessCallback;
    }
    interface StartPullDownRefreshOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: StartPullDownRefreshCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: StartPullDownRefreshFailCallback;
        /** 接口调用成功的回调函数 */
        success?: StartPullDownRefreshSuccessCallback;
    }
    interface StartRecordSuccessCallbackResult {
        /** 录音文件的临时路径 (本地路径) */
        tempFilePath: string;
        errMsg: string;
    }
    interface StartRecordTimeoutCallbackResult {
        /** 封面图片文件的临时路径 (本地路径) */
        tempThumbPath: string;
        /** 视频的文件的临时路径 (本地路径) */
        tempVideoPath: string;
    }
    interface StartSoterAuthenticationOption {
        /** 挑战因子。挑战因子为调用者为此次生物鉴权准备的用于签名的字符串关键识别信息，将作为 `resultJSON` 的一部分，供调用者识别本次请求。例如：如果场景为请求用户对某订单进行授权确认，则可以将订单号填入此参数。 */
        challenge: string;
        /** 请求使用的可接受的生物认证方式
         *
         * 可选值：
         * - 'fingerPrint': 指纹识别;
         * - 'facial': 人脸识别;
         * - 'speech': 声纹识别（暂未支持）; */
        requestAuthModes: Array<"fingerPrint" | "facial" | "speech">;
        /** 验证描述，即识别过程中显示在界面上的对话框提示内容 */
        authContent?: string;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: StartSoterAuthenticationCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: StartSoterAuthenticationFailCallback;
        /** 接口调用成功的回调函数 */
        success?: StartSoterAuthenticationSuccessCallback;
    }
    interface StartSoterAuthenticationSuccessCallbackResult {
        /** 生物认证方式 */
        authMode: string;
        /** 错误码 */
        errCode: number;
        /** 错误信息 */
        errMsg: string;
        /** 在设备安全区域（TEE）内获得的本机安全信息（如TEE名称版本号等以及防重放参数）以及本次认证信息（仅Android支持，本次认证的指纹ID）。具体说明见下文 */
        resultJSON: string;
        /** 用SOTER安全密钥对 `resultJSON` 的签名(SHA256 with RSA/PSS, saltlen=20) */
        resultJSONSignature: string;
    }
    interface StartWifiOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: StartWifiCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: StartWifiFailCallback;
        /** 接口调用成功的回调函数 */
        success?: StartWifiSuccessCallback;
    }
    interface StatFailCallbackResult {
        /** 错误信息
         *
         * 可选值：
         * - 'fail permission denied, open ${path}': 指定的 path 路径没有读权限;
         * - 'fail no such file or directory ${path}': 文件不存在;
         * - 'fail sdcard not mounted': Android sdcard 挂载失败; */
        errMsg: string;
    }
    interface StatOption {
        /** 文件/目录路径 (本地路径) */
        path: string;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: StatCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: StatFailCallback;
        /** 是否递归获取目录下的每个文件的 Stats 信息
         *
         * 最低基础库： `2.3.0` */
        recursive?: boolean;
        /** 接口调用成功的回调函数 */
        success?: StatSuccessCallback;
    }
    interface StatSuccessCallbackResult {
        /** [Stats](https://developers.weixin.qq.com/miniprogram/dev/api/file/Stats.html)|Array.&lt;[Stats](https://developers.weixin.qq.com/miniprogram/dev/api/file/Stats.html)&gt;
         *
         * 当 recursive 为 false 时，res.stats 是一个 Stats 对象。当 recursive 为 true 且 path 是一个目录的路径时，res.stats 是一个 Array，数组的每一项是一个对象，每个对象包含 path 和 stats。 */
        stats: Stats | Stats[];
        errMsg: string;
    }
    /** 描述文件状态的对象 */
    interface Stats {
        /** 文件最近一次被存取或被执行的时间，UNIX 时间戳，对应 POSIX stat.st_atime */
        lastAccessedTime: number;
        /** 文件最后一次被修改的时间，UNIX 时间戳，对应 POSIX stat.st_mtime */
        lastModifiedTime: number;
        /** 文件的类型和存取的权限，对应 POSIX stat.st_mode */
        mode: string;
        /** 文件大小，单位：B，对应 POSIX stat.st_size */
        size: number;
    }
    interface StepOption {
        /** 动画延迟时间，单位 ms */
        delay?: number;
        /** 动画持续时间，单位 ms */
        duration?: number;
        /** 动画的效果
         *
         * 可选值：
         * - 'linear': 动画从头到尾的速度是相同的;
         * - 'ease': 动画以低速开始，然后加快，在结束前变慢;
         * - 'ease-in': 动画以低速开始;
         * - 'ease-in-out': 动画以低速开始和结束;
         * - 'ease-out': 动画以低速结束;
         * - 'step-start': 动画第一帧就跳至结束状态直到结束;
         * - 'step-end': 动画一直保持开始状态，最后一帧跳到结束状态; */
        timingFunction?:
            | "linear"
            | "ease"
            | "ease-in"
            | "ease-in-out"
            | "ease-out"
            | "step-start"
            | "step-end";
        transformOrigin?: string;
    }
    interface StopAccelerometerOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: StopAccelerometerCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: StopAccelerometerFailCallback;
        /** 接口调用成功的回调函数 */
        success?: StopAccelerometerSuccessCallback;
    }
    interface StopAdvertisingOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: StopAdvertisingCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: StopAdvertisingFailCallback;
        /** 接口调用成功的回调函数 */
        success?: StopAdvertisingSuccessCallback;
    }
    interface StopBGMOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: StopBGMCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: StopBGMFailCallback;
        /** 接口调用成功的回调函数 */
        success?: StopBGMSuccessCallback;
    }
    interface StopBackgroundAudioOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: StopBackgroundAudioCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: StopBackgroundAudioFailCallback;
        /** 接口调用成功的回调函数 */
        success?: StopBackgroundAudioSuccessCallback;
    }
    interface StopBeaconDiscoveryOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: StopBeaconDiscoveryCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: StopBeaconDiscoveryFailCallback;
        /** 接口调用成功的回调函数 */
        success?: StopBeaconDiscoverySuccessCallback;
    }
    interface StopBluetoothDevicesDiscoveryOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: StopBluetoothDevicesDiscoveryCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: StopBluetoothDevicesDiscoveryFailCallback;
        /** 接口调用成功的回调函数 */
        success?: StopBluetoothDevicesDiscoverySuccessCallback;
    }
    interface StopCompassOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: StopCompassCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: StopCompassFailCallback;
        /** 接口调用成功的回调函数 */
        success?: StopCompassSuccessCallback;
    }
    interface StopDeviceMotionListeningOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: StopDeviceMotionListeningCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: StopDeviceMotionListeningFailCallback;
        /** 接口调用成功的回调函数 */
        success?: StopDeviceMotionListeningSuccessCallback;
    }
    interface StopDiscoveryOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: StopDiscoveryCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: StopDiscoveryFailCallback;
        /** 接口调用成功的回调函数 */
        success?: StopDiscoverySuccessCallback;
    }
    interface StopGyroscopeOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: StopGyroscopeCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: StopGyroscopeFailCallback;
        /** 接口调用成功的回调函数 */
        success?: StopGyroscopeSuccessCallback;
    }
    interface StopHCEOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: StopHCECompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: StopHCEFailCallback;
        /** 接口调用成功的回调函数 */
        success?: StopHCESuccessCallback;
    }
    interface StopLocalServiceDiscoveryFailCallbackResult {
        /** 错误信息
         *
         * 可选值：
         * - 'task not found': 在当前没有处在搜索服务中的情况下调用 stopLocalServiceDiscovery; */
        errMsg: string;
    }
    interface StopLocalServiceDiscoveryOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: StopLocalServiceDiscoveryCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: StopLocalServiceDiscoveryFailCallback;
        /** 接口调用成功的回调函数 */
        success?: StopLocalServiceDiscoverySuccessCallback;
    }
    interface StopLocationUpdateOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: StopLocationUpdateCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: StopLocationUpdateFailCallback;
        /** 接口调用成功的回调函数 */
        success?: StopLocationUpdateSuccessCallback;
    }
    interface StopOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: StopCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: StopFailCallback;
        /** 接口调用成功的回调函数 */
        success?: StopSuccessCallback;
    }
    interface StopPreviewOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: StopPreviewCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: StopPreviewFailCallback;
        /** 接口调用成功的回调函数 */
        success?: StopPreviewSuccessCallback;
    }
    interface StopPullDownRefreshOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: StopPullDownRefreshCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: StopPullDownRefreshFailCallback;
        /** 接口调用成功的回调函数 */
        success?: StopPullDownRefreshSuccessCallback;
    }
    interface StopRecordSuccessCallbackResult {
        /** 封面图片文件的临时路径 (本地路径) */
        tempThumbPath: string;
        /** 视频的文件的临时路径 (本地路径) */
        tempVideoPath: string;
        errMsg: string;
    }
    interface StopVoiceOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: StopVoiceCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: StopVoiceFailCallback;
        /** 接口调用成功的回调函数 */
        success?: StopVoiceSuccessCallback;
    }
    interface StopWifiOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: StopWifiCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: StopWifiFailCallback;
        /** 接口调用成功的回调函数 */
        success?: StopWifiSuccessCallback;
    }
    interface SubscribeVoIPVideoMembersOption {
        /** 订阅的成员列表 */
        openIdList: string[];
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: SubscribeVoIPVideoMembersCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: SubscribeVoIPVideoMembersFailCallback;
        /** 接口调用成功的回调函数 */
        success?: SubscribeVoIPVideoMembersSuccessCallback;
    }
    /** 订阅消息设置
*
* **示例代码**
*
*
* ```javascript
wx.getSetting({
  withSubscriptions: true,
  success (res) {
    console.log(res.authSetting)
    // res.authSetting = {
    //   "scope.userInfo": true,
    //   "scope.userLocation": true
    // }
    console.log(res.subscriptionsSetting)
    // res.subscriptionsSetting = {
    //   mainSwitch: true, // 订阅消息总开关
    //   itemSettings: {   // 每一项开关
    //     SYS_MSG_TYPE_INTERACTIVE: 'accept', // 小游戏系统订阅消息
    //     SYS_MSG_TYPE_RANK: 'accept'
    //     zun-LzcQyW-edafCVvzPkK4de2Rllr1fFpw2A_x0oXE: 'reject', // 普通一次性订阅消息
    //     ke_OZC_66gZxALLcsuI7ilCJSP2OJ2vWo2ooUPpkWrw: 'ban',
    //   }
    // }
  }
})
``` */
    interface SubscriptionsSetting {
        /** 订阅消息总开关，true为开启，false为关闭 */
        mainSwitch: boolean;
        /** 每一项订阅消息的订阅状态。itemSettings对象的键为**一次性订阅消息的模板id**或**系统订阅消息的类型**，值为'accept'、'reject'、'ban'中的其中一种。'accept'表示用户同意订阅这条消息，'reject'表示用户拒绝订阅这条消息，'ban'表示已被后台封禁。一次性订阅消息使用方法详见 [wx.requestSubscribeMessage](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/subscribe-message/wx.requestSubscribeMessage.html)，永久订阅消息（仅小游戏可用）使用方法详见[wx.requestSubscribeSystemMessage](/minigame/dev/api/open-api/subscribe-message/wx.requestSubscribeSystemMessage.html)
         * ## 注意事项
         *  - itemSettings 只返回用户勾选过订阅面板中的“总是保持以上选择，不再询问”的订阅消息。 */
        itemSettings?: IAnyObject;
    }
    interface SwitchCameraOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: SwitchCameraCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: SwitchCameraFailCallback;
        /** 接口调用成功的回调函数 */
        success?: SwitchCameraSuccessCallback;
    }
    interface SwitchTabOption {
        /** 需要跳转的 tabBar 页面的路径 (代码包路径)（需在 app.json 的 [tabBar](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#tabbar) 字段定义的页面），路径后不能带参数。 */
        url: string;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: SwitchTabCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: SwitchTabFailCallback;
        /** 接口调用成功的回调函数 */
        success?: SwitchTabSuccessCallback;
    }
    interface SystemInfo {
        /** 客户端基础库版本
         *
         * 最低基础库： `1.1.0` */
        SDKVersion: string;
        /** 允许微信使用相册的开关（仅 iOS 有效）
         *
         * 最低基础库： `2.6.0` */
        albumAuthorized: boolean;
        /** 设备性能等级（仅 Android）。取值为：-2 或 0（该设备无法运行小游戏），-1（性能未知），>=1（设备性能值，该值越高，设备性能越好，目前最高不到50）
         *
         * 最低基础库： `1.8.0` */
        benchmarkLevel: number;
        /** 蓝牙的系统开关
         *
         * 最低基础库： `2.6.0` */
        bluetoothEnabled: boolean;
        /** 设备品牌
         *
         * 最低基础库： `1.5.0` */
        brand: string;
        /** 允许微信使用摄像头的开关
         *
         * 最低基础库： `2.6.0` */
        cameraAuthorized: boolean;
        /** 设备方向
         *
         * 可选值：
         * - 'portrait': 竖屏;
         * - 'landscape': 横屏; */
        deviceOrientation: "portrait" | "landscape";
        /** 是否已打开调试。可通过右上角菜单或 [wx.setEnableDebug](https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/wx.setEnableDebug.html) 打开调试。
         *
         * 最低基础库： `2.15.0` */
        enableDebug: boolean;
        /** 用户字体大小（单位px）。以微信客户端「我-设置-通用-字体大小」中的设置为准
         *
         * 最低基础库： `1.5.0` */
        fontSizeSetting: number;
        /** 当前小程序运行的宿主环境
         *
         * 最低基础库： `2.12.3` */
        host: Host;
        /** 微信设置的语言 */
        language: string;
        /** 允许微信使用定位的开关
         *
         * 最低基础库： `2.6.0` */
        locationAuthorized: boolean;
        /** 地理位置的系统开关
         *
         * 最低基础库： `2.6.0` */
        locationEnabled: boolean;
        /** `true` 表示模糊定位，`false` 表示精确定位，仅 iOS 支持 */
        locationReducedAccuracy: boolean;
        /** 允许微信使用麦克风的开关
         *
         * 最低基础库： `2.6.0` */
        microphoneAuthorized: boolean;
        /** 设备型号。新机型刚推出一段时间会显示unknown，微信会尽快进行适配。 */
        model: string;
        /** 允许微信通知带有提醒的开关（仅 iOS 有效）
         *
         * 最低基础库： `2.6.0` */
        notificationAlertAuthorized: boolean;
        /** 允许微信通知的开关
         *
         * 最低基础库： `2.6.0` */
        notificationAuthorized: boolean;
        /** 允许微信通知带有标记的开关（仅 iOS 有效）
         *
         * 最低基础库： `2.6.0` */
        notificationBadgeAuthorized: boolean;
        /** 允许微信通知带有声音的开关（仅 iOS 有效）
         *
         * 最低基础库： `2.6.0` */
        notificationSoundAuthorized: boolean;
        /** 设备像素比 */
        pixelRatio: number;
        /** 客户端平台 */
        platform: string;
        /** 在竖屏正方向下的安全区域
         *
         * 最低基础库： `2.7.0` */
        safeArea: SafeArea;
        /** 屏幕高度，单位px
         *
         * 最低基础库： `1.1.0` */
        screenHeight: number;
        /** 屏幕宽度，单位px
         *
         * 最低基础库： `1.1.0` */
        screenWidth: number;
        /** 状态栏的高度，单位px
         *
         * 最低基础库： `1.9.0` */
        statusBarHeight: number;
        /** 操作系统及版本 */
        system: string;
        /** 微信版本号 */
        version: string;
        /** Wi-Fi 的系统开关
         *
         * 最低基础库： `2.6.0` */
        wifiEnabled: boolean;
        /** 可使用窗口高度，单位px */
        windowHeight: number;
        /** 可使用窗口宽度，单位px */
        windowWidth: number;
        /** 系统当前主题，取值为`light`或`dark`，全局配置`"darkmode":true`时才能获取，否则为 undefined （不支持小游戏）
         *
         * 可选值：
         * - 'dark': 深色主题;
         * - 'light': 浅色主题;
         *
         * 最低基础库： `2.11.0` */
        theme?: "dark" | "light";
    }
    interface TCPSocketConnectOption {
        /** 套接字要连接的地址 */
        address: string;
        /** 套接字要连接的端口 */
        port: number;
    }
    interface TCPSocketOnMessageCallbackResult {
        /** 接收端地址信息 */
        localInfo: LocalInfo;
        /** 收到的消息 */
        message: ArrayBuffer;
        /** 发送端地址信息 */
        remoteInfo: RemoteInfo;
    }
    interface TakePhotoOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: TakePhotoCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: TakePhotoFailCallback;
        /** 成像质量
         *
         * 可选值：
         * - 'high': 高质量;
         * - 'normal': 普通质量;
         * - 'low': 低质量; */
        quality?: "high" | "normal" | "low";
        /** 接口调用成功的回调函数 */
        success?: TakePhotoSuccessCallback;
    }
    interface TakePhotoSuccessCallbackResult {
        /** 照片文件的临时路径 (本地路径)，安卓是jpg图片格式，ios是png */
        tempImagePath: string;
        errMsg: string;
    }
    /** 标签类型枚举 */
    interface TechType {
        /** 对应IsoDep实例，实例支持ISO-DEP (ISO 14443-4)标准的读写 */
        isoDep: string;
        /** 对应MifareClassic实例，实例支持MIFARE Classic标签的读写 */
        mifareClassic: string;
        /** 对应MifareUltralight实例，实例支持MIFARE Ultralight标签的读写 */
        mifareUltralight: string;
        /** 对应Ndef实例，实例支持对NDEF格式的NFC标签上的NDEF数据的读写 */
        ndef: string;
        /** 对应NfcA实例，实例支持NFC-A (ISO 14443-3A)标准的读写 */
        nfcA: string;
        /** 对应NfcB实例，实例支持NFC-B (ISO 14443-3B)标准的读写 */
        nfcB: string;
        /** 对应NfcF实例，实例支持NFC-F (JIS 6319-4)标准的读写 */
        nfcF: string;
        /** 对应NfcV实例，实例支持NFC-V (ISO 15693)标准的读写 */
        nfcV: string;
    }
    interface TextMetrics {
        /** 文本的宽度 */
        width: number;
    }
    interface ToScreenLocationOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: ToScreenLocationCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: ToScreenLocationFailCallback;
        /** 接口调用成功的回调函数 */
        success?: ToScreenLocationSuccessCallback;
    }
    interface ToScreenLocationSuccessCallbackResult {
        /** x 坐标值 */
        x: number;
        /** y 坐标值 */
        y: number;
        errMsg: string;
    }
    interface ToggleTorchOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: ToggleTorchCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: ToggleTorchFailCallback;
        /** 接口调用成功的回调函数 */
        success?: ToggleTorchSuccessCallback;
    }
    interface TransceiveOption {
        /** 需要传递的二进制数据 */
        data: ArrayBuffer;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: TransceiveCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: TransceiveFailCallback;
        /** 接口调用成功的回调函数 */
        success?: TransceiveSuccessCallback;
    }
    interface TransceiveSuccessCallbackResult {
        data: ArrayBuffer;
        errMsg: string;
    }
    interface TranslateMarkerOption {
        /** 移动过程中是否自动旋转 marker */
        autoRotate: boolean;
        /** 指定 marker 移动到的目标点 */
        destination: DestinationOption;
        /** 指定 marker */
        markerId: number;
        /** marker 的旋转角度 */
        rotate: number;
        /** 动画结束回调函数 */
        animationEnd?: (...args: any[]) => any;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: TranslateMarkerCompleteCallback;
        /** 动画持续时长，平移与旋转分别计算 */
        duration?: number;
        /** 接口调用失败的回调函数 */
        fail?: TranslateMarkerFailCallback;
        /** 平移和旋转同时进行
         *
         * 最低基础库： `2.13.0` */
        moveWithRotate?: boolean;
        /** 接口调用成功的回调函数 */
        success?: TranslateMarkerSuccessCallback;
    }
    interface TruncateFailCallbackResult {
        /** 错误信息
         *
         * 可选值：
         * - 'fail no such file or directory, open ${filePath}': 指定的 filePath 所在目录不存在;
         * - 'fail illegal operation on a directory, open "${filePath}"': 指定的 filePath 是一个已经存在的目录;
         * - 'fail permission denied, open ${dirPath}': 指定的 filePath 路径没有写权限;
         * - 'fail the maximum size of the file storage limit is exceeded': 存储空间不足;
         * - 'fail sdcard not mounted': android sdcard 挂载失败; */
        errMsg: string;
    }
    interface TruncateOption {
        /** 要截断的文件路径 (本地路径) */
        filePath: string;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: TruncateCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: TruncateFailCallback;
        /** 截断位置，默认0。如果 length 小于文件长度（字节），则只有前面 length 个字节会保留在文件中，其余内容会被删除；如果 length 大于文件长度，则会对其进行扩展，并且扩展部分将填充空字节（'\0'） */
        length?: number;
        /** 接口调用成功的回调函数 */
        success?: TruncateSuccessCallback;
    }
    interface TruncateSyncOption {
        /** 要截断的文件路径 (本地路径) */
        filePath: string;
        /** 截断位置，默认0。如果 length 小于文件长度（字节），则只有前面 length 个字节会保留在文件中，其余内容会被删除；如果 length 大于文件长度，则会对其进行扩展，并且扩展部分将填充空字节（'\0'） */
        length?: number;
    }
    interface UDPSocketConnectOption {
        /** 要发消息的地址 */
        address: string;
        /** 要发送消息的端口号 */
        port: number;
    }
    interface UDPSocketOnErrorCallbackResult {
        /** 错误信息 */
        errMsg: string;
    }
    interface UDPSocketOnMessageCallbackResult {
        /** 接收端地址信息，2.18.0 起支持 */
        localInfo: LocalInfo;
        /** 收到的消息 */
        message: ArrayBuffer;
        /** 发送端地址信息 */
        remoteInfo: RemoteInfo;
    }
    interface UDPSocketSendOption {
        /** 要发消息的地址。在基础库 2.9.3 及之前版本可以是一个和本机同网段的 IP 地址，也可以是在安全域名列表内的域名地址；在基础库 2.9.4 及之后版本，可以是任意 IP 和域名 */
        address: string;
        /** 要发送的数据 */
        message: string | ArrayBuffer;
        /** 要发送消息的端口号 */
        port: number;
        /** 发送数据的长度，仅当 message 为 ArrayBuffer 类型时有效 */
        length?: number;
        /** 发送数据的偏移量，仅当 message 为 ArrayBuffer 类型时有效 */
        offset?: number;
    }
    interface UndoOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: UndoCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: UndoFailCallback;
        /** 接口调用成功的回调函数 */
        success?: UndoSuccessCallback;
    }
    interface UnlinkFailCallbackResult {
        /** 错误信息
         *
         * 可选值：
         * - 'fail permission denied, open ${path}': 指定的 path 路径没有读权限;
         * - 'fail no such file or directory ${path}': 文件不存在;
         * - 'fail operation not permitted, unlink ${filePath}': 传入的 filePath 是一个目录;
         * - 'fail sdcard not mounted': Android sdcard 挂载失败; */
        errMsg: string;
    }
    interface UnlinkOption {
        /** 要删除的文件路径 (本地路径) */
        filePath: string;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: UnlinkCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: UnlinkFailCallback;
        /** 接口调用成功的回调函数 */
        success?: UnlinkSuccessCallback;
    }
    interface UnzipFailCallbackResult {
        /** 错误信息
         *
         * 可选值：
         * - 'fail permission denied, unzip ${zipFilePath} -> ${destPath}': 指定目标文件路径没有写权限;
         * - 'fail no such file or directory, unzip ${zipFilePath} -> "${destPath}': 源文件不存在，或目标文件路径的上层目录不存在; */
        errMsg: string;
    }
    interface UnzipOption {
        /** 目标目录路径, 支持本地路径 */
        targetPath: string;
        /** 源文件路径，支持本地路径, 只可以是 zip 压缩文件 */
        zipFilePath: string;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: UnzipCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: UnzipFailCallback;
        /** 接口调用成功的回调函数 */
        success?: UnzipSuccessCallback;
    }
    /** 参数列表 */
    interface UpdatableMessageFrontEndParameter {
        /** 参数名 */
        name: string;
        /** 参数值 */
        value: string;
    }
    /** 动态消息的模板信息
     *
     * 最低基础库： `2.4.0` */
    interface UpdatableMessageFrontEndTemplateInfo {
        /** 参数列表 */
        parameterList: UpdatableMessageFrontEndParameter[];
    }
    interface UpdateGroundOverlayOption {
        /** 图片覆盖的经纬度范围 */
        bounds: MapBounds;
        /** 图片图层 id */
        id: string;
        /** 图片路径，支持网络图片、临时路径、代码包路径 */
        src: string;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: UpdateGroundOverlayCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: UpdateGroundOverlayFailCallback;
        /** 图层透明度 */
        opacity?: number;
        /** 接口调用成功的回调函数 */
        success?: UpdateGroundOverlaySuccessCallback;
        /** 是否可见 */
        visible?: boolean;
        /** 图层绘制顺序 */
        zIndex?: number;
    }
    interface UpdateShareMenuOption {
        /** 动态消息的 activityId。通过 [updatableMessage.createActivityId](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/updatable-message/updatableMessage.createActivityId.html) 接口获取
         *
         * 最低基础库： `2.4.0` */
        activityId?: string;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: UpdateShareMenuCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: UpdateShareMenuFailCallback;
        /** 是否是私密消息。详见 [小程序私密消息](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/share/private-message.html)
         *
         * 最低基础库： `2.13.0` */
        isPrivateMessage?: boolean;
        /** 是否是动态消息，详见[动态消息](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/share/updatable-message.html)
         *
         * 最低基础库： `2.4.0` */
        isUpdatableMessage?: boolean;
        /** 接口调用成功的回调函数 */
        success?: UpdateShareMenuSuccessCallback;
        /** 动态消息的模板信息
         *
         * 最低基础库： `2.4.0` */
        templateInfo?: UpdatableMessageFrontEndTemplateInfo;
        /** 群待办消息的id，通过toDoActivityId可以把多个群待办消息聚合为同一个。通过 [updatableMessage.createActivityId](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/updatable-message/updatableMessage.createActivityId.html) 接口获取。详见[群待办消息](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/share.html)
         *
         * 最低基础库： `2.11.0` */
        toDoActivityId?: string;
        /** 是否使用带 shareTicket 的转发[详情](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/share.html) */
        withShareTicket?: boolean;
    }
    interface UpdateVoIPChatMuteConfigOption {
        /** 静音设置 */
        muteConfig: MuteConfig;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: UpdateVoIPChatMuteConfigCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: UpdateVoIPChatMuteConfigFailCallback;
        /** 接口调用成功的回调函数 */
        success?: UpdateVoIPChatMuteConfigSuccessCallback;
    }
    interface UpdateWeChatAppOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: UpdateWeChatAppCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: UpdateWeChatAppFailCallback;
        /** 接口调用成功的回调函数 */
        success?: UpdateWeChatAppSuccessCallback;
    }
    interface UploadFileOption {
        /** 要上传文件资源的路径 (本地路径) */
        filePath: string;
        /** 文件对应的 key，开发者在服务端可以通过这个 key 获取文件的二进制内容 */
        name: string;
        /** 开发者服务器地址 */
        url: string;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: UploadFileCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: UploadFileFailCallback;
        /** HTTP 请求中其他额外的 form data */
        formData?: IAnyObject;
        /** HTTP 请求 Header，Header 中不能设置 Referer */
        header?: IAnyObject;
        /** 接口调用成功的回调函数 */
        success?: UploadFileSuccessCallback;
        /** 超时时间，单位为毫秒
         *
         * 最低基础库： `2.10.0` */
        timeout?: number;
    }
    interface UploadFileSuccessCallbackResult {
        /** 开发者服务器返回的数据 */
        data: string;
        /** 开发者服务器返回的 HTTP 状态码 */
        statusCode: number;
        errMsg: string;
    }
    interface UploadTaskOnProgressUpdateCallbackResult {
        /** 上传进度百分比 */
        progress: number;
        /** 预期需要上传的数据总长度，单位 Bytes */
        totalBytesExpectedToSend: number;
        /** 已经上传的数据长度，单位 Bytes */
        totalBytesSent: number;
    }
    /** 用户信息 */
    interface UserInfo {
        /** 用户头像图片的 URL。URL 最后一个数值代表正方形头像大小（有 0、46、64、96、132 数值可选，0 代表 640x640 的正方形头像，46 表示 46x46 的正方形头像，剩余数值以此类推。默认132），用户没有头像时该项为空。若用户更换头像，原有头像 URL 将失效。 */
        avatarUrl: string;
        /** 用户所在城市 */
        city: string;
        /** 用户所在国家 */
        country: string;
        /** 用户性别
         *
         * 可选值：
         * - 0: 未知;
         * - 1: 男性;
         * - 2: 女性; */
        gender: 0 | 1 | 2;
        /** 显示 country，province，city 所用的语言
         *
         * 可选值：
         * - 'en': 英文;
         * - 'zh_CN': 简体中文;
         * - 'zh_TW': 繁体中文; */
        language: "en" | "zh_CN" | "zh_TW";
        /** 用户昵称 */
        nickName: string;
        /** 用户所在省份 */
        province: string;
    }
    interface VibrateLongOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: VibrateLongCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: VibrateLongFailCallback;
        /** 接口调用成功的回调函数 */
        success?: VibrateLongSuccessCallback;
    }
    interface VibrateShortOption {
        /** 震动强度类型，有效值为：heavy、medium、light
         *
         * 最低基础库： `2.13.0` */
        type: string;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: VibrateShortCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: VibrateShortFailCallback;
        /** 接口调用成功的回调函数 */
        success?: VibrateShortSuccessCallback;
    }
    interface VideoContextRequestFullScreenOption {
        /** 设置全屏时视频的方向，不指定则根据宽高比自动判断。
         *
         * 可选值：
         * - 0: 正常竖向;
         * - 90: 屏幕逆时针90度;
         * - -90: 屏幕顺时针90度;
         *
         * 最低基础库： `1.7.0` */
        direction?: 0 | 90 | -90;
    }
    interface VideoDecoderStartOption {
        /** 需要解码的视频源文件。基础库 2.13.0 以下的版本只支持本地路径。 2.13.0 开始支持 http:// 和 https:// 协议的远程路径。 */
        source: string;
        /** 解码模式。0：按 pts 解码；1：以最快速度解码 */
        mode?: number;
    }
    /** 提供预设的 Wi-Fi 信息列表 */
    interface WifiData {
        /** Wi-Fi 的 BSSID */
        BSSID?: string;
        /** Wi-Fi 的 SSID */
        SSID?: string;
        /** Wi-Fi 设备密码 */
        password?: string;
    }
    /** Wifi 信息 */
    interface WifiInfo {
        /** Wi-Fi 的 BSSID */
        BSSID: string;
        /** Wi-Fi 的 SSID */
        SSID: string;
        /** Wi-Fi 频段单位 MHz
         *
         * 最低基础库： `2.12.0` */
        frequency: number;
        /** Wi-Fi 是否安全 */
        secure: boolean;
        /** Wi-Fi 信号强度 */
        signalStrength: number;
    }
    interface WorkerOnMessageCallbackResult {
        /** 主线程/Worker 线程向当前线程发送的消息 */
        message: IAnyObject;
    }
    interface WriteBLECharacteristicValueOption {
        /** 蓝牙特征值的 uuid */
        characteristicId: string;
        /** 蓝牙设备 id */
        deviceId: string;
        /** 蓝牙特征值对应服务的 uuid */
        serviceId: string;
        /** 蓝牙设备特征值对应的二进制值 */
        value: ArrayBuffer;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: WriteBLECharacteristicValueCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: WriteBLECharacteristicValueFailCallback;
        /** 接口调用成功的回调函数 */
        success?: WriteBLECharacteristicValueSuccessCallback;
    }
    interface WriteCharacteristicValueObject {
        /** characteristic对应的uuid */
        characteristicId: string;
        /** 是否需要通知主机value已更新 */
        needNotify: boolean;
        /** service 的 uuid */
        serviceId: string;
        /** 特征值对应的二进制值 */
        value: ArrayBuffer;
        /** 可选，处理回包时使用 */
        callbackId?: number;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: WriteCharacteristicValueCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: WriteCharacteristicValueFailCallback;
        /** 接口调用成功的回调函数 */
        success?: WriteCharacteristicValueSuccessCallback;
    }
    interface WriteFailCallbackResult {
        /** 错误信息
         *
         * 可选值：
         * - 'bad file descriptor': 无效的文件描述符;
         * - 'fail permission denied': 指定的 fd 路径没有写权限;
         * - 'fail sdcard not mounted': android sdcard 挂载失败; */
        errMsg: string;
    }
    interface WriteFileFailCallbackResult {
        /** 错误信息
         *
         * 可选值：
         * - 'fail no such file or directory, open ${filePath}': 指定的 filePath 所在目录不存在;
         * - 'fail permission denied, open ${dirPath}': 指定的 filePath 路径没有写权限;
         * - 'fail the maximum size of the file storage limit is exceeded': 存储空间不足;
         * - 'fail sdcard not mounted': Android sdcard 挂载失败; */
        errMsg: string;
    }
    interface WriteFileOption {
        /** 要写入的文本或二进制数据 */
        data: string | ArrayBuffer;
        /** 要写入的文件路径 (本地路径) */
        filePath: string;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: WriteFileCompleteCallback;
        /** 指定写入文件的字符编码
         *
         * 可选值：
         * - 'ascii': ;
         * - 'base64': ;
         * - 'binary': ;
         * - 'hex': ;
         * - 'ucs2': 以小端序读取;
         * - 'ucs-2': 以小端序读取;
         * - 'utf16le': 以小端序读取;
         * - 'utf-16le': 以小端序读取;
         * - 'utf-8': ;
         * - 'utf8': ;
         * - 'latin1': ; */
        encoding?:
            | "ascii"
            | "base64"
            | "binary"
            | "hex"
            | "ucs2"
            | "ucs-2"
            | "utf16le"
            | "utf-16le"
            | "utf-8"
            | "utf8"
            | "latin1";
        /** 接口调用失败的回调函数 */
        fail?: WriteFileFailCallback;
        /** 接口调用成功的回调函数 */
        success?: WriteFileSuccessCallback;
    }
    interface WriteNdefMessageOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: WriteNdefMessageCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: WriteNdefMessageFailCallback;
        /** 二进制对象数组, 需要指明 id, type 以及 payload (均为 ArrayBuffer 类型) */
        records?: any[];
        /** 接口调用成功的回调函数 */
        success?: WriteNdefMessageSuccessCallback;
        /** text 数组 */
        texts?: any[];
        /** uri 数组 */
        uris?: any[];
    }
    interface WriteOption {
        /** 写入的内容，类型为 String 或 ArrayBuffer */
        data: string | ArrayBuffer;
        /** 文件描述符。fd 通过 [FileSystemManager.open](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.open.html) 或 [FileSystemManager.openSync](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.openSync.html) 接口获得 */
        fd: string;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: WriteCompleteCallback;
        /** 只在 data 类型是 String 时有效，指定写入文件的字符编码，默认为 utf8
         *
         * 可选值：
         * - 'ascii': ;
         * - 'base64': ;
         * - 'binary': ;
         * - 'hex': ;
         * - 'ucs2': 以小端序读取;
         * - 'ucs-2': 以小端序读取;
         * - 'utf16le': 以小端序读取;
         * - 'utf-16le': 以小端序读取;
         * - 'utf-8': ;
         * - 'utf8': ;
         * - 'latin1': ; */
        encoding?:
            | "ascii"
            | "base64"
            | "binary"
            | "hex"
            | "ucs2"
            | "ucs-2"
            | "utf16le"
            | "utf-16le"
            | "utf-8"
            | "utf8"
            | "latin1";
        /** 接口调用失败的回调函数 */
        fail?: WriteFailCallback;
        /** 只在 data 类型是 ArrayBuffer 时有效，指定要写入的字节数，默认为 arrayBuffer 从0开始偏移 offset 个字节后剩余的字节数 */
        length?: number;
        /** 只在 data 类型是 ArrayBuffer 时有效，决定 arrayBuffe 中要被写入的部位，即 arrayBuffer 中的索引，默认0 */
        offset?: number;
        /** 指定文件开头的偏移量，即数据要被写入的位置。当 position 不传或者传入非 Number 类型的值时，数据会被写入当前指针所在位置。 */
        position?: number;
        /** 接口调用成功的回调函数 */
        success?: WriteSuccessCallback;
    }
    /** 文件写入结果。 通过 [FileSystemManager.writeSync](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.writeSync.html) 接口返回 */
    interface WriteResult {
        /** 实际被写入到文件中的字节数（注意，被写入的字节数不一定与被写入的字符串字符数相同） */
        bytesWritten: number;
    }
    interface WriteSuccessCallbackResult {
        /** 实际被写入到文件中的字节数（注意，被写入的字节数不一定与被写入的字符串字符数相同） */
        bytesWritten: number;
        errMsg: string;
    }
    interface WriteSyncOption {
        /** 写入的内容，类型为 String 或 ArrayBuffer */
        data: string | ArrayBuffer;
        /** 文件描述符。fd 通过 [FileSystemManager.open](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.open.html) 或 [FileSystemManager.openSync](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.openSync.html) 接口获得 */
        fd: string;
        /** 只在 data 类型是 String 时有效，指定写入文件的字符编码，默认为 utf8
         *
         * 可选值：
         * - 'ascii': ;
         * - 'base64': ;
         * - 'binary': ;
         * - 'hex': ;
         * - 'ucs2': 以小端序读取;
         * - 'ucs-2': 以小端序读取;
         * - 'utf16le': 以小端序读取;
         * - 'utf-16le': 以小端序读取;
         * - 'utf-8': ;
         * - 'utf8': ;
         * - 'latin1': ; */
        encoding?:
            | "ascii"
            | "base64"
            | "binary"
            | "hex"
            | "ucs2"
            | "ucs-2"
            | "utf16le"
            | "utf-16le"
            | "utf-8"
            | "utf8"
            | "latin1";
        /** 只在 data 类型是 ArrayBuffer 时有效，指定要写入的字节数，默认为 arrayBuffer 从0开始偏移 offset 个字节后剩余的字节数 */
        length?: number;
        /** 只在 data 类型是 ArrayBuffer 时有效，决定 arrayBuffe 中要被写入的部位，即 arrayBuffer 中的索引，默认0 */
        offset?: number;
        /** 指定文件开头的偏移量，即数据要被写入的位置。当 position 不传或者传入非 Number 类型的值时，数据会被写入当前指针所在位置。 */
        position?: number;
    }
    interface WxGetFileInfoOption {
        /** 本地文件路径 (本地路径) */
        filePath: string;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetFileInfoCompleteCallback;
        /** 计算文件摘要的算法
         *
         * 可选值：
         * - 'md5': md5 算法;
         * - 'sha1': sha1 算法; */
        digestAlgorithm?: "md5" | "sha1";
        /** 接口调用失败的回调函数 */
        fail?: WxGetFileInfoFailCallback;
        /** 接口调用成功的回调函数 */
        success?: WxGetFileInfoSuccessCallback;
    }
    interface WxGetFileInfoSuccessCallbackResult {
        /** 按照传入的 digestAlgorithm 计算得出的的文件摘要 */
        digest: string;
        /** 文件大小，以字节为单位 */
        size: number;
        errMsg: string;
    }
    interface WxGetSavedFileListOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetSavedFileListCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: GetSavedFileListFailCallback;
        /** 接口调用成功的回调函数 */
        success?: WxGetSavedFileListSuccessCallback;
    }
    interface WxGetSavedFileListSuccessCallbackResult {
        /** 文件数组，每一项是一个 FileItem */
        fileList: FileItem[];
        errMsg: string;
    }
    interface WxRemoveSavedFileOption {
        /** 需要删除的文件路径 (本地路径) */
        filePath: string;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: RemoveSavedFileCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: WxRemoveSavedFileFailCallback;
        /** 接口调用成功的回调函数 */
        success?: RemoveSavedFileSuccessCallback;
    }
    interface WxSaveFileOption {
        /** 需要保存的文件的临时路径 (本地路径) */
        tempFilePath: string;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: SaveFileCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: WxSaveFileFailCallback;
        /** 接口调用成功的回调函数 */
        success?: SaveFileSuccessCallback;
    }
    interface WxStartRecordOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: StartRecordCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: StartRecordFailCallback;
        /** 接口调用成功的回调函数 */
        success?: WxStartRecordSuccessCallback;
    }
    interface WxStopRecordOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: StopRecordCompleteCallback;
        /** 接口调用失败的回调函数 */
        fail?: StopRecordFailCallback;
        /** 接口调用成功的回调函数 */
        success?: WxStopRecordSuccessCallback;
    }
    /** 运动数据列表 */
    interface WxaSportRecord {
        /** 消耗卡路里 */
        calorie: number;
        /** 运动距离 */
        distance: number;
        /** 运动时长 */
        time: number;
        /** 运动项目id */
        typeId: string;
        /** 小程序app内跳转url */
        url: string;
    }
    /** 文件路径 */
    interface ZipFileItem {
        /** 文件内容 */
        data: string | ArrayBuffer;
        /** 错误信息 */
        errMsg: string;
    }
    interface Animation {
        /** [Object Animation.export()](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.export.html)
         *
         * 导出动画队列。**export 方法每次调用后会清掉之前的动画操作。** */
        export(): AnimationExportResult;
        /** [[Animation](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.html) Animation.backgroundColor(string value)](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.backgroundColor.html)
         *
         * 设置背景色 */
        backgroundColor(
            /** 颜色值 */
            value: string,
        ): Animation;
        /** [[Animation](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.html) Animation.bottom(number|string value)](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.bottom.html)
         *
         * 设置 bottom 值 */
        bottom(
            /** 长度值，如果传入 number 则默认使用 px，可传入其他自定义单位的长度值 */
            value: number | string,
        ): Animation;
        /** [[Animation](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.html) Animation.height(number|string value)](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.height.html)
         *
         * 设置高度 */
        height(
            /** 长度值，如果传入 number 则默认使用 px，可传入其他自定义单位的长度值 */
            value: number | string,
        ): Animation;
        /** [[Animation](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.html) Animation.left(number|string value)](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.left.html)
         *
         * 设置 left 值 */
        left(
            /** 长度值，如果传入 number 则默认使用 px，可传入其他自定义单位的长度值 */
            value: number | string,
        ): Animation;
        /** [[Animation](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.html) Animation.matrix()](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.matrix.html)
         *
         * 同 [transform-function matrix](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/matrix) */
        matrix(): Animation;
        /** [[Animation](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.html) Animation.matrix3d()](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.matrix3d.html)
         *
         * 同 [transform-function matrix3d](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/matrix3d) */
        matrix3d(): Animation;
        /** [[Animation](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.html) Animation.opacity(number value)](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.opacity.html)
         *
         * 设置透明度 */
        opacity(
            /** 透明度，范围 0-1 */
            value: number,
        ): Animation;
        /** [[Animation](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.html) Animation.right(number|string value)](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.right.html)
         *
         * 设置 right 值 */
        right(
            /** 长度值，如果传入 number 则默认使用 px，可传入其他自定义单位的长度值 */
            value: number | string,
        ): Animation;
        /** [[Animation](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.html) Animation.rotate(number angle)](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.rotate.html)
         *
         * 从原点顺时针旋转一个角度 */
        rotate(
            /** 旋转的角度。范围 [-180, 180] */
            angle: number,
        ): Animation;
        /** [[Animation](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.html) Animation.rotate3d(number x, number y, number z, number angle)](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.rotate3d.html)
         *
         * 从 固定 轴顺时针旋转一个角度 */
        rotate3d(
            /** 旋转轴的 x 坐标 */
            x: number,
            /** 旋转轴的 y 坐标 */
            y: number,
            /** 旋转轴的 z 坐标 */
            z: number,
            /** 旋转的角度。范围 [-180, 180] */
            angle: number,
        ): Animation;
        /** [[Animation](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.html) Animation.rotateX(number angle)](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.rotateX.html)
         *
         * 从 X 轴顺时针旋转一个角度 */
        rotateX(
            /** 旋转的角度。范围 [-180, 180] */
            angle: number,
        ): Animation;
        /** [[Animation](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.html) Animation.rotateY(number angle)](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.rotateY.html)
         *
         * 从 Y 轴顺时针旋转一个角度 */
        rotateY(
            /** 旋转的角度。范围 [-180, 180] */
            angle: number,
        ): Animation;
        /** [[Animation](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.html) Animation.rotateZ(number angle)](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.rotateZ.html)
         *
         * 从 Z 轴顺时针旋转一个角度 */
        rotateZ(
            /** 旋转的角度。范围 [-180, 180] */
            angle: number,
        ): Animation;
        /** [[Animation](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.html) Animation.scale(number sx, number sy)](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.scale.html)
         *
         * 缩放 */
        scale(
            /** 当仅有 sx 参数时，表示在 X 轴、Y 轴同时缩放sx倍数 */
            sx: number,
            /** 在 Y 轴缩放 sy 倍数 */
            sy?: number,
        ): Animation;
        /** [[Animation](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.html) Animation.scale3d(number sx, number sy, number sz)](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.scale3d.html)
         *
         * 缩放 */
        scale3d(
            /** x 轴的缩放倍数 */
            sx: number,
            /** y 轴的缩放倍数 */
            sy: number,
            /** z 轴的缩放倍数 */
            sz: number,
        ): Animation;
        /** [[Animation](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.html) Animation.scaleX(number scale)](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.scaleX.html)
         *
         * 缩放 X 轴 */
        scaleX(
            /** X 轴的缩放倍数 */
            scale: number,
        ): Animation;
        /** [[Animation](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.html) Animation.scaleY(number scale)](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.scaleY.html)
         *
         * 缩放 Y 轴 */
        scaleY(
            /** Y 轴的缩放倍数 */
            scale: number,
        ): Animation;
        /** [[Animation](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.html) Animation.scaleZ(number scale)](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.scaleZ.html)
         *
         * 缩放 Z 轴 */
        scaleZ(
            /** Z 轴的缩放倍数 */
            scale: number,
        ): Animation;
        /** [[Animation](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.html) Animation.skew(number ax, number ay)](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.skew.html)
         *
         * 对 X、Y 轴坐标进行倾斜 */
        skew(
            /** 对 X 轴坐标倾斜的角度，范围 [-180, 180] */
            ax: number,
            /** 对 Y 轴坐标倾斜的角度，范围 [-180, 180] */
            ay: number,
        ): Animation;
        /** [[Animation](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.html) Animation.skewX(number angle)](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.skewX.html)
         *
         * 对 X 轴坐标进行倾斜 */
        skewX(
            /** 倾斜的角度，范围 [-180, 180] */
            angle: number,
        ): Animation;
        /** [[Animation](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.html) Animation.skewY(number angle)](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.skewY.html)
         *
         * 对 Y 轴坐标进行倾斜 */
        skewY(
            /** 倾斜的角度，范围 [-180, 180] */
            angle: number,
        ): Animation;
        /** [[Animation](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.html) Animation.step(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.step.html)
         *
         * 表示一组动画完成。可以在一组动画中调用任意多个动画方法，一组动画中的所有动画会同时开始，一组动画完成后才会进行下一组动画。 */
        step(option?: StepOption): Animation;
        /** [[Animation](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.html) Animation.top(number|string value)](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.top.html)
         *
         * 设置 top 值 */
        top(
            /** 长度值，如果传入 number 则默认使用 px，可传入其他自定义单位的长度值 */
            value: number | string,
        ): Animation;
        /** [[Animation](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.html) Animation.translate(number tx, number ty)](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.translate.html)
         *
         * 平移变换 */
        translate(
            /** 当仅有该参数时表示在 X 轴偏移 tx，单位 px */
            tx?: number,
            /** 在 Y 轴平移的距离，单位为 px */
            ty?: number,
        ): Animation;
        /** [[Animation](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.html) Animation.translate3d(number tx, number ty, number tz)](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.translate3d.html)
         *
         * 对 xyz 坐标进行平移变换 */
        translate3d(
            /** 在 X 轴平移的距离，单位为 px */
            tx?: number,
            /** 在 Y 轴平移的距离，单位为 px */
            ty?: number,
            /** 在 Z 轴平移的距离，单位为 px */
            tz?: number,
        ): Animation;
        /** [[Animation](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.html) Animation.translateX(number translation)](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.translateX.html)
         *
         * 对 X 轴平移 */
        translateX(
            /** 在 X 轴平移的距离，单位为 px */
            translation: number,
        ): Animation;
        /** [[Animation](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.html) Animation.translateY(number translation)](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.translateY.html)
         *
         * 对 Y 轴平移 */
        translateY(
            /** 在 Y 轴平移的距离，单位为 px */
            translation: number,
        ): Animation;
        /** [[Animation](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.html) Animation.translateZ(number translation)](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.translateZ.html)
         *
         * 对 Z 轴平移 */
        translateZ(
            /** 在 Z 轴平移的距离，单位为 px */
            translation: number,
        ): Animation;
        /** [[Animation](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.html) Animation.width(number|string value)](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.width.html)
         *
         * 设置宽度 */
        width(
            /** 长度值，如果传入 number 则默认使用 px，可传入其他自定义单位的长度值 */
            value: number | string,
        ): Animation;
    }
    interface AudioContext {
        /** [AudioContext.pause()](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/AudioContext.pause.html)
         *
         * 暂停音频。 */
        pause(): void;
        /** [AudioContext.play()](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/AudioContext.play.html)
         *
         * 播放音频。 */
        play(): void;
        /** [AudioContext.seek(number position)](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/AudioContext.seek.html)
         *
         * 跳转到指定位置。 */
        seek(
            /** 跳转位置，单位 s */
            position: number,
        ): void;
        /** [AudioContext.setSrc(string src)](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/AudioContext.setSrc.html)
         *
         * 设置音频地址 */
        setSrc(
            /** 音频地址 */
            src: string,
        ): void;
    }
    interface BLEPeripheralServer {
        /** [BLEPeripheralServer.addService(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-peripheral/BLEPeripheralServer.addService.html)
         *
         * 添加服务。
         *
         * 最低基础库： `2.10.3` */
        addService(option: AddServiceOption): void;
        /** [BLEPeripheralServer.close(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-peripheral/BLEPeripheralServer.close.html)
         *
         * 关闭当前服务端。
         *
         * 最低基础库： `2.10.3` */
        close(option?: BLEPeripheralServerCloseOption): void;
        /** [BLEPeripheralServer.offCharacteristicReadRequest(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-peripheral/BLEPeripheralServer.offCharacteristicReadRequest.html)
         *
         * 取消监听已连接的设备请求读当前外围设备的特征值事件
         *
         * 最低基础库： `2.10.3` */
        offCharacteristicReadRequest(
            /** 已连接的设备请求读当前外围设备的特征值事件的回调函数 */
            callback?: OffCharacteristicReadRequestCallback,
        ): void;
        /** [BLEPeripheralServer.offCharacteristicSubscribed(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-peripheral/BLEPeripheralServer.offCharacteristicSubscribed.html)
         *
         * 取消监听特征值订阅事件
         *
         * 最低基础库： `2.13.0` */
        offCharacteristicSubscribed(
            /** 特征值订阅事件的回调函数 */
            callback?: OffCharacteristicSubscribedCallback,
        ): void;
        /** [BLEPeripheralServer.offCharacteristicUnsubscribed(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-peripheral/BLEPeripheralServer.offCharacteristicUnsubscribed.html)
         *
         * 取消监听取消特征值订阅事件
         *
         * 最低基础库： `2.13.0` */
        offCharacteristicUnsubscribed(
            /** 取消特征值订阅事件的回调函数 */
            callback?: OffCharacteristicUnsubscribedCallback,
        ): void;
        /** [BLEPeripheralServer.offCharacteristicWriteRequest(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-peripheral/BLEPeripheralServer.offCharacteristicWriteRequest.html)
         *
         * 取消监听已连接的设备请求写当前外围设备的特征值事件
         *
         * 最低基础库： `2.10.3` */
        offCharacteristicWriteRequest(
            /** 已连接的设备请求写当前外围设备的特征值事件的回调函数 */
            callback?: OffCharacteristicWriteRequestCallback,
        ): void;
        /** [BLEPeripheralServer.onCharacteristicReadRequest(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-peripheral/BLEPeripheralServer.onCharacteristicReadRequest.html)
         *
         * 监听已连接的设备请求读当前外围设备的特征值事件。收到该消息后需要立刻调用 `writeCharacteristicValue` 写回数据，否则主机不会收到响应。
         *
         * 最低基础库： `2.10.3` */
        onCharacteristicReadRequest(
            /** 已连接的设备请求读当前外围设备的特征值事件的回调函数 */
            callback: OnCharacteristicReadRequestCallback,
        ): void;
        /** [BLEPeripheralServer.onCharacteristicSubscribed(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-peripheral/BLEPeripheralServer.onCharacteristicSubscribed.html)
         *
         * 监听特征值订阅事件，仅 iOS 支持。
         *
         * 最低基础库： `2.13.0` */
        onCharacteristicSubscribed(
            /** 特征值订阅事件的回调函数 */
            callback: OnCharacteristicSubscribedCallback,
        ): void;
        /** [BLEPeripheralServer.onCharacteristicUnsubscribed(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-peripheral/BLEPeripheralServer.onCharacteristicUnsubscribed.html)
         *
         * 监听取消特征值订阅事件，仅 iOS 支持。
         *
         * 最低基础库： `2.13.0` */
        onCharacteristicUnsubscribed(
            /** 取消特征值订阅事件的回调函数 */
            callback: OnCharacteristicUnsubscribedCallback,
        ): void;
        /** [BLEPeripheralServer.onCharacteristicWriteRequest(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-peripheral/BLEPeripheralServer.onCharacteristicWriteRequest.html)
         *
         * 监听已连接的设备请求写当前外围设备的特征值事件。收到该消息后需要立刻调用 `writeCharacteristicValue` 写回数据，否则主机不会收到响应。
         *
         * 最低基础库： `2.10.3` */
        onCharacteristicWriteRequest(
            /** 已连接的设备请求写当前外围设备的特征值事件的回调函数 */
            callback: OnCharacteristicWriteRequestCallback,
        ): void;
        /** [BLEPeripheralServer.removeService(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-peripheral/BLEPeripheralServer.removeService.html)
         *
         * 移除服务。
         *
         * 最低基础库： `2.10.3` */
        removeService(option: RemoveServiceOption): void;
        /** [BLEPeripheralServer.startAdvertising(Object Object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-peripheral/BLEPeripheralServer.startAdvertising.html)
         *
         * 开始广播本地创建的外围设备。
         *
         * 最低基础库： `2.10.3` */
        startAdvertising(Object: StartAdvertisingObject): void;
        /** [BLEPeripheralServer.stopAdvertising(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-peripheral/BLEPeripheralServer.stopAdvertising.html)
         *
         * 停止广播。
         *
         * 最低基础库： `2.10.3` */
        stopAdvertising(option?: StopAdvertisingOption): void;
        /** [BLEPeripheralServer.writeCharacteristicValue(Object Object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-peripheral/BLEPeripheralServer.writeCharacteristicValue.html)
         *
         * 往指定特征值写入数据，并通知已连接的主机，从机的特征值已发生变化，该接口会处理是走回包还是走订阅。
         *
         * 最低基础库： `2.10.3` */
        writeCharacteristicValue(Object: WriteCharacteristicValueObject): void;
    }
    interface BackgroundAudioError {
        /** 错误信息
         *
         * | 错误码 | 错误信息 | 说明 |
         * | - | - | - |
         * | 10001 |  | 系统错误 |
         * | 10002 |  | 网络错误 |
         * | 10003 |  | 文件错误，请检查是否responseheader是否缺少Content-Length |
         * | 10004 |  | 格式错误 |
         * | -1 |  | 未知错误 | */ errMsg: string;
        /** 错误码
         *
         * | 错误码 | 错误信息 | 说明 |
         * | - | - | - |
         * | 10001 |  | 系统错误 |
         * | 10002 |  | 网络错误 |
         * | 10003 |  | 文件错误，请检查是否responseheader是否缺少Content-Length |
         * | 10004 |  | 格式错误 |
         * | -1 |  | 未知错误 | */ errCode: number;
    }
    interface BackgroundAudioManager {
        /** [BackgroundAudioManager.onCanplay(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/BackgroundAudioManager.onCanplay.html)
         *
         * 监听背景音频进入可播放状态事件。 但不保证后面可以流畅播放 */
        onCanplay(
            /** 背景音频进入可播放状态事件的回调函数 */
            callback: OnCanplayCallback,
        ): void;
        /** [BackgroundAudioManager.onEnded(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/BackgroundAudioManager.onEnded.html)
         *
         * 监听背景音频自然播放结束事件 */
        onEnded(
            /** 背景音频自然播放结束事件的回调函数 */
            callback: OnEndedCallback,
        ): void;
        /** [BackgroundAudioManager.onError(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/BackgroundAudioManager.onError.html)
         *
         * 监听背景音频播放错误事件 */
        onError(
            /** 背景音频播放错误事件的回调函数 */
            callback: BackgroundAudioManagerOnErrorCallback,
        ): void;
        /** [BackgroundAudioManager.onNext(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/BackgroundAudioManager.onNext.html)
         *
         * 监听用户在系统音乐播放面板点击下一曲事件（仅iOS） */
        onNext(
            /** 用户在系统音乐播放面板点击下一曲事件的回调函数 */
            callback: OnNextCallback,
        ): void;
        /** [BackgroundAudioManager.onPause(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/BackgroundAudioManager.onPause.html)
         *
         * 监听背景音频暂停事件 */
        onPause(
            /** 背景音频暂停事件的回调函数 */
            callback: OnPauseCallback,
        ): void;
        /** [BackgroundAudioManager.onPlay(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/BackgroundAudioManager.onPlay.html)
         *
         * 监听背景音频播放事件 */
        onPlay(
            /** 背景音频播放事件的回调函数 */
            callback: OnPlayCallback,
        ): void;
        /** [BackgroundAudioManager.onPrev(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/BackgroundAudioManager.onPrev.html)
         *
         * 监听用户在系统音乐播放面板点击上一曲事件（仅iOS） */
        onPrev(
            /** 用户在系统音乐播放面板点击上一曲事件的回调函数 */
            callback: OnPrevCallback,
        ): void;
        /** [BackgroundAudioManager.onSeeked(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/BackgroundAudioManager.onSeeked.html)
         *
         * 监听背景音频完成跳转操作事件 */
        onSeeked(
            /** 背景音频完成跳转操作事件的回调函数 */
            callback: OnSeekedCallback,
        ): void;
        /** [BackgroundAudioManager.onSeeking(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/BackgroundAudioManager.onSeeking.html)
         *
         * 监听背景音频开始跳转操作事件 */
        onSeeking(
            /** 背景音频开始跳转操作事件的回调函数 */
            callback: OnSeekingCallback,
        ): void;
        /** [BackgroundAudioManager.onStop(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/BackgroundAudioManager.onStop.html)
         *
         * 监听背景音频停止事件 */
        onStop(
            /** 背景音频停止事件的回调函数 */
            callback: InnerAudioContextOnStopCallback,
        ): void;
        /** [BackgroundAudioManager.onTimeUpdate(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/BackgroundAudioManager.onTimeUpdate.html)
         *
         * 监听背景音频播放进度更新事件，只有小程序在前台时会回调。 */
        onTimeUpdate(
            /** 背景音频播放进度更新事件的回调函数 */
            callback: OnTimeUpdateCallback,
        ): void;
        /** [BackgroundAudioManager.onWaiting(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/BackgroundAudioManager.onWaiting.html)
         *
         * 监听音频加载中事件。当音频因为数据不足，需要停下来加载时会触发 */
        onWaiting(
            /** 音频加载中事件的回调函数 */
            callback: OnWaitingCallback,
        ): void;
        /** [BackgroundAudioManager.pause()](https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/BackgroundAudioManager.pause.html)
         *
         * 暂停音乐 */
        pause(): void;
        /** [BackgroundAudioManager.play()](https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/BackgroundAudioManager.play.html)
         *
         * 播放音乐 */
        play(): void;
        /** [BackgroundAudioManager.seek(number currentTime)](https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/BackgroundAudioManager.seek.html)
         *
         * 跳转到指定位置 */
        seek(
            /** 跳转的位置，单位 s。精确到小数点后 3 位，即支持 ms 级别精确度 */
            currentTime: number,
        ): void;
        /** [BackgroundAudioManager.stop()](https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/BackgroundAudioManager.stop.html)
         *
         * 停止音乐 */
        stop(): void;
    }
    interface BluetoothError {
        /** 错误信息
         *
         * | 错误码 | 错误信息 | 说明 |
         * | - | - | - |
         * | 0 | ok | 正常 |
         * | -1 | already connet | 已连接 |
         * | 10000 | not init | 未初始化蓝牙适配器 |
         * | 10001 | not available | 当前蓝牙适配器不可用 |
         * | 10002 | no device | 没有找到指定设备 |
         * | 10003 | connection fail | 连接失败 |
         * | 10004 | no service | 没有找到指定服务 |
         * | 10005 | no characteristic | 没有找到指定特征值 |
         * | 10006 | no connection | 当前连接已断开 |
         * | 10007 | property not support | 当前特征值不支持此操作 |
         * | 10008 | system error | 其余所有系统上报的异常 |
         * | 10009 | system not support | Android 系统特有，系统版本低于 4.3 不支持 BLE |
         * | 10012 | operate time out | 连接超时 |
         * | 10013 | invalid_data | 连接 deviceId 为空或者是格式不正确 | */ errMsg: string;
        /** 错误码
         *
         * | 错误码 | 错误信息 | 说明 |
         * | - | - | - |
         * | 0 | ok | 正常 |
         * | -1 | already connet | 已连接 |
         * | 10000 | not init | 未初始化蓝牙适配器 |
         * | 10001 | not available | 当前蓝牙适配器不可用 |
         * | 10002 | no device | 没有找到指定设备 |
         * | 10003 | connection fail | 连接失败 |
         * | 10004 | no service | 没有找到指定服务 |
         * | 10005 | no characteristic | 没有找到指定特征值 |
         * | 10006 | no connection | 当前连接已断开 |
         * | 10007 | property not support | 当前特征值不支持此操作 |
         * | 10008 | system error | 其余所有系统上报的异常 |
         * | 10009 | system not support | Android 系统特有，系统版本低于 4.3 不支持 BLE |
         * | 10012 | operate time out | 连接超时 |
         * | 10013 | invalid_data | 连接 deviceId 为空或者是格式不正确 | */ errCode: number;
    }
    interface CameraContext {
        /** [CameraContext.setZoom(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/media/camera/CameraContext.setZoom.html)
         *
         * 设置缩放级别
         *
         * 最低基础库： `2.10.0` */
        setZoom(option: SetZoomOption): void;
        /** [CameraContext.startRecord(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/media/camera/CameraContext.startRecord.html)
         *
         * 开始录像 */
        startRecord(option: CameraContextStartRecordOption): void;
        /** [CameraContext.stopRecord(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/media/camera/CameraContext.stopRecord.html)
         *
         * 结束录像 */
        stopRecord(option: CameraContextStopRecordOption): void;
        /** [CameraContext.takePhoto(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/media/camera/CameraContext.takePhoto.html)
         *
         * 拍摄照片 */
        takePhoto(option: TakePhotoOption): void;
        /** [[CameraFrameListener](https://developers.weixin.qq.com/miniprogram/dev/api/media/camera/CameraFrameListener.html) CameraContext.onCameraFrame(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/media/camera/CameraContext.onCameraFrame.html)
*
* 获取 Camera 实时帧数据
*
* ****
*
* 注： 使用该接口需同时在 [camera](https://developers.weixin.qq.com/miniprogram/dev/component/camera.html) 组件属性中指定 frame-size。
*
* **示例代码**
*
*
* ```js
const context = wx.createCameraContext()
const listener = context.onCameraFrame((frame) => {
  console.log(frame.data instanceof ArrayBuffer, frame.width, frame.height)
})
listener.start()
```
*
* 最低基础库： `2.7.0` */
        onCameraFrame(
            /** 回调函数 */
            callback: OnCameraFrameCallback,
        ): CameraFrameListener;
    }
    interface CameraFrameListener {
        /** [CameraFrameListener.start(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/media/camera/CameraFrameListener.start.html)
         *
         * 开始监听帧数据 */
        start(option?: CameraFrameListenerStartOption): void;
        /** [CameraFrameListener.stop(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/media/camera/CameraFrameListener.stop.html)
         *
         * 停止监听帧数据 */
        stop(option?: StopOption): void;
    }
    interface Canvas {
        /** [Canvas.cancelAnimationFrame(number requestID)](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/Canvas.cancelAnimationFrame.html)
         *
         * 取消由 requestAnimationFrame 添加到计划中的动画帧请求。支持在 2D Canvas 和 WebGL Canvas 下使用, 但不支持混用 2D 和 WebGL 的方法。
         *
         * 最低基础库： `2.7.0` */
        cancelAnimationFrame(requestID: number): void;
        /** [[ImageData](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/ImageData.html) Canvas.createImageData()](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/Canvas.createImageData.html)
         *
         * 创建一个 ImageData 对象。仅支持在 2D Canvas 中使用。
         *
         * 最低基础库： `2.9.0` */
        createImageData(): ImageData;
        /** [[Image](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/Image.html) Canvas.createImage()](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/Canvas.createImage.html)
         *
         * 创建一个图片对象。 支持在 2D Canvas 和 WebGL Canvas 下使用, 但不支持混用 2D 和 WebGL 的方法。
         *
         * 最低基础库： `2.7.0` */
        createImage(): Image;
        /** [[Path2D](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/Path2D.html) Canvas.createPath2D([Path2D](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/Path2D.html) path)](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/Canvas.createPath2D.html)
         *
         * 创建 Path2D 对象
         *
         * 最低基础库： `2.11.0` */
        createPath2D(
            /** [Path2D](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/Path2D.html)
             */
            path: Path2D,
        ): Path2D;
        /** [[RenderingContext](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/RenderingContext.html) Canvas.getContext(string contextType)](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/Canvas.getContext.html)
         *
         * 该方法返回 Canvas 的绘图上下文
         *
         * ****
         *
         * 支持获取 2D 和 WebGL 绘图上下文
         *
         * 最低基础库： `2.7.0` */
        getContext(contextType: string): any;
        /** [number Canvas.requestAnimationFrame(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/Canvas.requestAnimationFrame.html)
         *
         * 在下次进行重绘时执行。 支持在 2D Canvas 和 WebGL Canvas 下使用, 但不支持混用 2D 和 WebGL 的方法。
         *
         * 最低基础库： `2.7.0` */
        requestAnimationFrame(
            /** 执行的 callback */
            callback: (...args: any[]) => any,
        ): number;
        /** [string Canvas.toDataURL(string type, number encoderOptions)](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/Canvas.toDataURL.html)
         *
         * 返回一个包含图片展示的 data URI 。可以使用 type 参数其类型，默认为 PNG 格式。
         *
         * 最低基础库： `2.11.0` */
        toDataURL(
            /** 图片格式，默认为 image/png */
            type: string,
            /** 在指定图片格式为 image/jpeg 或 image/webp的情况下，可以从 0 到 1 的区间内选择图片的质量。如果超出取值范围，将会使用默认值 0.92。其他参数会被忽略。 */
            encoderOptions: number,
        ): string;
    }
    interface CanvasContext {
        /** [CanvasContext.arc(number x, number y, number r, number sAngle, number eAngle, boolean counterclockwise)](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.arc.html)
*
* 创建一条弧线。
*
*   - 创建一个圆可以指定起始弧度为 0，终止弧度为 2 * Math.PI。
*   - 用 `stroke` 或者 `fill` 方法来在 `canvas` 中画弧线。
*
* **示例代码**
*
*
* ```javascript
const ctx = wx.createCanvasContext('myCanvas')

// Draw coordinates
ctx.arc(100, 75, 50, 0, 2 * Math.PI)
ctx.setFillStyle('#EEEEEE')
ctx.fill()

ctx.beginPath()
ctx.moveTo(40, 75)
ctx.lineTo(160, 75)
ctx.moveTo(100, 15)
ctx.lineTo(100, 135)
ctx.setStrokeStyle('#AAAAAA')
ctx.stroke()

ctx.setFontSize(12)
ctx.setFillStyle('black')
ctx.fillText('0', 165, 78)
ctx.fillText('0.5*PI', 83, 145)
ctx.fillText('1*PI', 15, 78)
ctx.fillText('1.5*PI', 83, 10)

// Draw points
ctx.beginPath()
ctx.arc(100, 75, 2, 0, 2 * Math.PI)
ctx.setFillStyle('lightgreen')
ctx.fill()

ctx.beginPath()
ctx.arc(100, 25, 2, 0, 2 * Math.PI)
ctx.setFillStyle('blue')
ctx.fill()

ctx.beginPath()
ctx.arc(150, 75, 2, 0, 2 * Math.PI)
ctx.setFillStyle('red')
ctx.fill()

// Draw arc
ctx.beginPath()
ctx.arc(100, 75, 50, 0, 1.5 * Math.PI)
ctx.setStrokeStyle('#333333')
ctx.stroke()

ctx.draw()
```
*
* ![](@program/dev/image/canvas/arc.png)
*
* 针对 arc(100, 75, 50, 0, 1.5 * Math.PI)的三个关键坐标如下：
*
* - 绿色: 圆心 (100, 75)
* - 红色: 起始弧度 (0)
* - 蓝色: 终止弧度 (1.5 * Math.PI) */
        arc(
            /** 圆心的 x 坐标 */
            x: number,
            /** 圆心的 y 坐标 */
            y: number,
            /** 圆的半径 */
            r: number,
            /** 起始弧度，单位弧度（在3点钟方向） */
            sAngle: number,
            /** 终止弧度 */
            eAngle: number,
            /** 弧度的方向是否是逆时针 */
            counterclockwise?: boolean,
        ): void;
        /** [CanvasContext.arcTo(number x1, number y1, number x2, number y2, number radius)](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.arcTo.html)
         *
         * 根据控制点和半径绘制圆弧路径。
         *
         * 最低基础库： `1.9.90` */
        arcTo(
            /** 第一个控制点的 x 轴坐标 */
            x1: number,
            /** 第一个控制点的 y 轴坐标 */
            y1: number,
            /** 第二个控制点的 x 轴坐标 */
            x2: number,
            /** 第二个控制点的 y 轴坐标 */
            y2: number,
            /** 圆弧的半径 */
            radius: number,
        ): void;
        /** [CanvasContext.beginPath()](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.beginPath.html)
*
* 开始创建一个路径。需要调用 `fill` 或者 `stroke` 才会使用路径进行填充或描边
*
*   - 在最开始的时候相当于调用了一次 `beginPath`。
*   - 同一个路径内的多次 `setFillStyle`、`setStrokeStyle`、`setLineWidth`等设置，以最后一次设置为准。
*
* **示例代码**
*
*
* ```javascript
const ctx = wx.createCanvasContext('myCanvas')
// begin path
ctx.rect(10, 10, 100, 30)
ctx.setFillStyle('yellow')
ctx.fill()

// begin another path
ctx.beginPath()
ctx.rect(10, 40, 100, 30)

// only fill this rect, not in current path
ctx.setFillStyle('blue')
ctx.fillRect(10, 70, 100, 30)

ctx.rect(10, 100, 100, 30)

// it will fill current path
ctx.setFillStyle('red')
ctx.fill()
ctx.draw()
```
*
* ![](@program/dev/image/canvas/fill-path.png) */
        beginPath(): void;
        /** [CanvasContext.bezierCurveTo(number cp1x, number cp1y, number cp2x, number cp2y, number x, number y)](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.bezierCurveTo.html)
*
* 创建三次方贝塞尔曲线路径。曲线的起始点为路径中前一个点。
*
* **示例代码**
*
*
* ```javascript
const ctx = wx.createCanvasContext('myCanvas')

// Draw points
ctx.beginPath()
ctx.arc(20, 20, 2, 0, 2 * Math.PI)
ctx.setFillStyle('red')
ctx.fill()

ctx.beginPath()
ctx.arc(200, 20, 2, 0, 2 * Math.PI)
ctx.setFillStyle('lightgreen')
ctx.fill()

ctx.beginPath()
ctx.arc(20, 100, 2, 0, 2 * Math.PI)
ctx.arc(200, 100, 2, 0, 2 * Math.PI)
ctx.setFillStyle('blue')
ctx.fill()

ctx.setFillStyle('black')
ctx.setFontSize(12)

// Draw guides
ctx.beginPath()
ctx.moveTo(20, 20)
ctx.lineTo(20, 100)
ctx.lineTo(150, 75)

ctx.moveTo(200, 20)
ctx.lineTo(200, 100)
ctx.lineTo(70, 75)
ctx.setStrokeStyle('#AAAAAA')
ctx.stroke()

// Draw quadratic curve
ctx.beginPath()
ctx.moveTo(20, 20)
ctx.bezierCurveTo(20, 100, 200, 100, 200, 20)
ctx.setStrokeStyle('black')
ctx.stroke()

ctx.draw()
```
*
* ![](@program/dev/image/canvas/bezier-curve.png)
*
* 针对 moveTo(20, 20) bezierCurveTo(20, 100, 200, 100, 200, 20) 的三个关键坐标如下：
*
* - 红色：起始点(20, 20)
* - 蓝色：两个控制点(20, 100) (200, 100)
* - 绿色：终止点(200, 20) */
        bezierCurveTo(
            /** 第一个贝塞尔控制点的 x 坐标 */
            cp1x: number,
            /** 第一个贝塞尔控制点的 y 坐标 */
            cp1y: number,
            /** 第二个贝塞尔控制点的 x 坐标 */
            cp2x: number,
            /** 第二个贝塞尔控制点的 y 坐标 */
            cp2y: number,
            /** 结束点的 x 坐标 */
            x: number,
            /** 结束点的 y 坐标 */
            y: number,
        ): void;
        /** [CanvasContext.clearRect(number x, number y, number width, number height)](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.clearRect.html)
*
* 清除画布上在该矩形区域内的内容
*
* **示例代码**
*
*
* clearRect 并非画一个白色的矩形在地址区域，而是清空，为了有直观感受，对 canvas 加了一层背景色。
* ```html
* <canvas canvas-id="myCanvas" style="border: 1px solid; background: #123456;"/>
* ```
* ```javascript
const ctx = wx.createCanvasContext('myCanvas')
ctx.setFillStyle('red')
ctx.fillRect(0, 0, 150, 200)
ctx.setFillStyle('blue')
ctx.fillRect(150, 0, 150, 200)
ctx.clearRect(10, 10, 150, 75)
ctx.draw()
```
* ![](@program/dev/image/canvas/clear-rect.png) */
        clearRect(
            /** 矩形路径左上角的横坐标 */
            x: number,
            /** 矩形路径左上角的纵坐标 */
            y: number,
            /** 矩形路径的宽度 */
            width: number,
            /** 矩形路径的高度 */
            height: number,
        ): void;
        /** [CanvasContext.clip()](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.clip.html)
*
* 从原始画布中剪切任意形状和尺寸。一旦剪切了某个区域，则所有之后的绘图都会被限制在被剪切的区域内（不能访问画布上的其他区域）。可以在使用 `clip` 方法前通过使用 `save` 方法对当前画布区域进行保存，并在以后的任意时间通过`restore`方法对其进行恢复。
*
* **示例代码**
*
*
* ```javascript
const ctx = wx.createCanvasContext('myCanvas')

wx.downloadFile({
  url: 'http://is5.mzstatic.com/image/thumb/Purple128/v4/75/3b/90/753b907c-b7fb-5877-215a-759bd73691a4/source/50x50bb.jpg',
  success: function(res) {
    ctx.save()
    ctx.beginPath()
    ctx.arc(50, 50, 25, 0, 2*Math.PI)
    ctx.clip()
    ctx.drawImage(res.tempFilePath, 25, 25)
    ctx.restore()
    ctx.draw()
  }
})
```
* ![](@program/dev/image/canvas/clip.png)
*
* 最低基础库： `1.6.0` */
        clip(): void;
        /** [CanvasContext.closePath()](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.closePath.html)
*
* 关闭一个路径。会连接起点和终点。如果关闭路径后没有调用 `fill` 或者 `stroke` 并开启了新的路径，那之前的路径将不会被渲染。
*
* **示例代码**
*
*
* ```javascript
const ctx = wx.createCanvasContext('myCanvas')
ctx.moveTo(10, 10)
ctx.lineTo(100, 10)
ctx.lineTo(100, 100)
ctx.closePath()
ctx.stroke()
ctx.draw()
```
* ![](@program/dev/image/canvas/close-line.png)
*
* ```javascript
const ctx = wx.createCanvasContext('myCanvas')
// begin path
ctx.rect(10, 10, 100, 30)
ctx.closePath()

// begin another path
ctx.beginPath()
ctx.rect(10, 40, 100, 30)

// only fill this rect, not in current path
ctx.setFillStyle('blue')
ctx.fillRect(10, 70, 100, 30)

ctx.rect(10, 100, 100, 30)

// it will fill current path
ctx.setFillStyle('red')
ctx.fill()
ctx.draw()
```
*
* ![](@program/dev/image/canvas/close-path.png) */
        closePath(): void;
        /** [CanvasContext.createPattern(string image, string repetition)](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.createPattern.html)
         *
         * 对指定的图像创建模式的方法，可在指定的方向上重复元图像
         *
         * 最低基础库： `1.9.90` */
        createPattern(
            /** 重复的图像源，支持代码包路径和本地临时路径 (本地路径) */
            image: string,
            /** 如何重复图像
             *
             * 参数 repetition 可选值：
             * - 'repeat': 水平竖直方向都重复;
             * - 'repeat-x': 水平方向重复;
             * - 'repeat-y': 竖直方向重复;
             * - 'no-repeat': 不重复; */
            repetition: "repeat" | "repeat-x" | "repeat-y" | "no-repeat",
        ): void;
        /** [CanvasContext.draw(boolean reserve, function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.draw.html)
*
* 将之前在绘图上下文中的描述（路径、变形、样式）画到 canvas 中。
*
* **示例代码**
*
*
* 第二次 draw() reserve 为 true。所以保留了上一次的绘制结果，在上下文设置的 fillStyle 'red' 也变成了默认的 'black'。
*
* ```javascript
const ctx = wx.createCanvasContext('myCanvas')

ctx.setFillStyle('red')
ctx.fillRect(10, 10, 150, 100)
ctx.draw()
ctx.fillRect(50, 50, 150, 100)
ctx.draw(true)
```
* ![](@program/dev/image/canvas/reserve.png)
*
* **示例代码**
*
*
* 第二次 draw() reserve 为 false。所以没有保留了上一次的绘制结果和在上下文设置的 fillStyle 'red'。
*
* ```javascript
const ctx = wx.createCanvasContext('myCanvas')

ctx.setFillStyle('red')
ctx.fillRect(10, 10, 150, 100)
ctx.draw()
ctx.fillRect(50, 50, 150, 100)
ctx.draw()
```
* ![](@program/dev/image/canvas/un-reserve.png) */
        draw(
            /** 本次绘制是否接着上一次绘制。即 reserve 参数为 false，则在本次调用绘制之前 native 层会先清空画布再继续绘制；若 reserve 参数为 true，则保留当前画布上的内容，本次调用 drawCanvas 绘制的内容覆盖在上面，默认 false。 */
            reserve?: boolean,
            /** 绘制完成后执行的回调函数 */
            callback?: (...args: any[]) => any,
        ): void;
        /** [CanvasContext.drawImage(string imageResource, number sx, number sy, number sWidth, number sHeight, number dx, number dy, number dWidth, number dHeight)](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.drawImage.html)
*
* 绘制图像到画布
*
* **示例代码**
*
*
*
* 有三个版本的写法：
*
* - drawImage(imageResource, dx, dy)
* - drawImage(imageResource, dx, dy, dWidth, dHeight)
* - drawImage(imageResource, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight) 从 1.9.0 起支持
*
* ```javascript
const ctx = wx.createCanvasContext('myCanvas')

wx.chooseImage({
  success: function(res){
    ctx.drawImage(res.tempFilePaths[0], 0, 0, 150, 100)
    ctx.draw()
  }
})

```
* ![](@program/dev/image/canvas/draw-image.png) */
        drawImage(
            /** 所要绘制的图片资源（网络图片要通过 getImageInfo / downloadFile 先下载） */
            imageResource: string,
            /** imageResource的左上角在目标 canvas 上 x 轴的位置 */
            dx: number,
            /** imageResource的左上角在目标 canvas 上 y 轴的位置 */
            dy: number,
        ): void;
        /** [CanvasContext.drawImage(string imageResource, number sx, number sy, number sWidth, number sHeight, number dx, number dy, number dWidth, number dHeight)](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.drawImage.html)
*
* 绘制图像到画布
*
* **示例代码**
*
*
*
* 有三个版本的写法：
*
* - drawImage(imageResource, dx, dy)
* - drawImage(imageResource, dx, dy, dWidth, dHeight)
* - drawImage(imageResource, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight) 从 1.9.0 起支持
*
* ```javascript
const ctx = wx.createCanvasContext('myCanvas')

wx.chooseImage({
  success: function(res){
    ctx.drawImage(res.tempFilePaths[0], 0, 0, 150, 100)
    ctx.draw()
  }
})

```
* ![](@program/dev/image/canvas/draw-image.png) */
        drawImage(
            /** 所要绘制的图片资源（网络图片要通过 getImageInfo / downloadFile 先下载） */
            imageResource: string,
            /** imageResource的左上角在目标 canvas 上 x 轴的位置 */
            dx: number,
            /** imageResource的左上角在目标 canvas 上 y 轴的位置 */
            dy: number,
            /** 在目标画布上绘制imageResource的宽度，允许对绘制的imageResource进行缩放 */
            dWidth: number,
            /** 在目标画布上绘制imageResource的高度，允许对绘制的imageResource进行缩放 */
            dHeight: number,
        ): void;
        /** [CanvasContext.drawImage(string imageResource, number sx, number sy, number sWidth, number sHeight, number dx, number dy, number dWidth, number dHeight)](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.drawImage.html)
*
* 绘制图像到画布
*
* **示例代码**
*
*
*
* 有三个版本的写法：
*
* - drawImage(imageResource, dx, dy)
* - drawImage(imageResource, dx, dy, dWidth, dHeight)
* - drawImage(imageResource, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight) 从 1.9.0 起支持
*
* ```javascript
const ctx = wx.createCanvasContext('myCanvas')

wx.chooseImage({
  success: function(res){
    ctx.drawImage(res.tempFilePaths[0], 0, 0, 150, 100)
    ctx.draw()
  }
})

```
* ![](@program/dev/image/canvas/draw-image.png) */
        drawImage(
            /** 所要绘制的图片资源（网络图片要通过 getImageInfo / downloadFile 先下载） */
            imageResource: string,
            /** 需要绘制到画布中的，imageResource的矩形（裁剪）选择框的左上角 x 坐标 */
            sx: number,
            /** 需要绘制到画布中的，imageResource的矩形（裁剪）选择框的左上角 y 坐标 */
            sy: number,
            /** 需要绘制到画布中的，imageResource的矩形（裁剪）选择框的宽度 */
            sWidth: number,
            /** 需要绘制到画布中的，imageResource的矩形（裁剪）选择框的高度 */
            sHeight: number,
            /** imageResource的左上角在目标 canvas 上 x 轴的位置 */
            dx: number,
            /** imageResource的左上角在目标 canvas 上 y 轴的位置 */
            dy: number,
            /** 在目标画布上绘制imageResource的宽度，允许对绘制的imageResource进行缩放 */
            dWidth: number,
            /** 在目标画布上绘制imageResource的高度，允许对绘制的imageResource进行缩放 */
            dHeight: number,
        ): void;
        /** [CanvasContext.fill()](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.fill.html)
*
* 对当前路径中的内容进行填充。默认的填充色为黑色。
*
* **示例代码**
*
*
*
* 如果当前路径没有闭合，fill() 方法会将起点和终点进行连接，然后填充。
*
* ```javascript
const ctx = wx.createCanvasContext('myCanvas')
ctx.moveTo(10, 10)
ctx.lineTo(100, 10)
ctx.lineTo(100, 100)
ctx.fill()
ctx.draw()
```
*
* fill() 填充的的路径是从 beginPath() 开始计算，但是不会将 fillRect() 包含进去。
*
* ![](@program/dev/image/canvas/fill-line.png)
*
* ```javascript
const ctx = wx.createCanvasContext('myCanvas')
// begin path
ctx.rect(10, 10, 100, 30)
ctx.setFillStyle('yellow')
ctx.fill()

// begin another path
ctx.beginPath()
ctx.rect(10, 40, 100, 30)

// only fill this rect, not in current path
ctx.setFillStyle('blue')
ctx.fillRect(10, 70, 100, 30)

ctx.rect(10, 100, 100, 30)

// it will fill current path
ctx.setFillStyle('red')
ctx.fill()
ctx.draw()
```
*
* ![](@program/dev/image/canvas/fill-path.png) */
        fill(): void;
        /** [CanvasContext.fillRect(number x, number y, number width, number height)](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.fillRect.html)
*
* 填充一个矩形。用 [`setFillStyle`](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.setFillStyle.html) 设置矩形的填充色，如果没设置默认是黑色。
*
* **示例代码**
*
*
* ```javascript
const ctx = wx.createCanvasContext('myCanvas')
ctx.setFillStyle('red')
ctx.fillRect(10, 10, 150, 75)
ctx.draw()
```
* ![](@program/dev/image/canvas/fill-rect.png) */
        fillRect(
            /** 矩形路径左上角的横坐标 */
            x: number,
            /** 矩形路径左上角的纵坐标 */
            y: number,
            /** 矩形路径的宽度 */
            width: number,
            /** 矩形路径的高度 */
            height: number,
        ): void;
        /** [CanvasContext.fillText(string text, number x, number y, number maxWidth)](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.fillText.html)
*
* 在画布上绘制被填充的文本
*
* **示例代码**
*
*
* ```javascript
const ctx = wx.createCanvasContext('myCanvas')

ctx.setFontSize(20)
ctx.fillText('Hello', 20, 20)
ctx.fillText('MINA', 100, 100)

ctx.draw()
```
* ![](@program/dev/image/canvas/text.png) */
        fillText(
            /** 在画布上输出的文本 */
            text: string,
            /** 绘制文本的左上角 x 坐标位置 */
            x: number,
            /** 绘制文本的左上角 y 坐标位置 */
            y: number,
            /** 需要绘制的最大宽度，可选 */
            maxWidth?: number,
        ): void;
        /** [CanvasContext.lineTo(number x, number y)](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.lineTo.html)
*
* 增加一个新点，然后创建一条从上次指定点到目标点的线。用 `stroke` 方法来画线条
*
* **示例代码**
*
*
* ```javascript
const ctx = wx.createCanvasContext('myCanvas')
ctx.moveTo(10, 10)
ctx.rect(10, 10, 100, 50)
ctx.lineTo(110, 60)
ctx.stroke()
ctx.draw()
```
* ![](@program/dev/image/canvas/line-to.png) */
        lineTo(
            /** 目标位置的 x 坐标 */
            x: number,
            /** 目标位置的 y 坐标 */
            y: number,
        ): void;
        /** [CanvasContext.moveTo(number x, number y)](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.moveTo.html)
*
* 把路径移动到画布中的指定点，不创建线条。用 `stroke` 方法来画线条
*
* **示例代码**
*
*
* ```javascript
const ctx = wx.createCanvasContext('myCanvas')
ctx.moveTo(10, 10)
ctx.lineTo(100, 10)

ctx.moveTo(10, 50)
ctx.lineTo(100, 50)
ctx.stroke()
ctx.draw()
```
* ![](@program/dev/image/canvas/move-to.png) */
        moveTo(
            /** 目标位置的 x 坐标 */
            x: number,
            /** 目标位置的 y 坐标 */
            y: number,
        ): void;
        /** [CanvasContext.quadraticCurveTo(number cpx, number cpy, number x, number y)](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.quadraticCurveTo.html)
*
* 创建二次贝塞尔曲线路径。曲线的起始点为路径中前一个点。
*
* **示例代码**
*
*
* ```javascript
const ctx = wx.createCanvasContext('myCanvas')

// Draw points
ctx.beginPath()
ctx.arc(20, 20, 2, 0, 2 * Math.PI)
ctx.setFillStyle('red')
ctx.fill()

ctx.beginPath()
ctx.arc(200, 20, 2, 0, 2 * Math.PI)
ctx.setFillStyle('lightgreen')
ctx.fill()

ctx.beginPath()
ctx.arc(20, 100, 2, 0, 2 * Math.PI)
ctx.setFillStyle('blue')
ctx.fill()

ctx.setFillStyle('black')
ctx.setFontSize(12)

// Draw guides
ctx.beginPath()
ctx.moveTo(20, 20)
ctx.lineTo(20, 100)
ctx.lineTo(200, 20)
ctx.setStrokeStyle('#AAAAAA')
ctx.stroke()

// Draw quadratic curve
ctx.beginPath()
ctx.moveTo(20, 20)
ctx.quadraticCurveTo(20, 100, 200, 20)
ctx.setStrokeStyle('black')
ctx.stroke()

ctx.draw()
```
*
* ![](@program/dev/image/canvas/quadratic-curve-to.png)
*
* 针对 moveTo(20, 20) quadraticCurveTo(20, 100, 200, 20) 的三个关键坐标如下：
*
* - 红色：起始点(20, 20)
* - 蓝色：控制点(20, 100)
* - 绿色：终止点(200, 20) */
        quadraticCurveTo(
            /** 贝塞尔控制点的 x 坐标 */
            cpx: number,
            /** 贝塞尔控制点的 y 坐标 */
            cpy: number,
            /** 结束点的 x 坐标 */
            x: number,
            /** 结束点的 y 坐标 */
            y: number,
        ): void;
        /** [CanvasContext.rect(number x, number y, number width, number height)](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.rect.html)
*
* 创建一个矩形路径。需要用 [`fill`](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.fill.html) 或者 [`stroke`](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.stroke.html) 方法将矩形真正的画到 `canvas` 中
*
* **示例代码**
*
*
* ```javascript
const ctx = wx.createCanvasContext('myCanvas')
ctx.rect(10, 10, 150, 75)
ctx.setFillStyle('red')
ctx.fill()
ctx.draw()
```
* ![](@program/dev/image/canvas/fill-rect.png) */
        rect(
            /** 矩形路径左上角的横坐标 */
            x: number,
            /** 矩形路径左上角的纵坐标 */
            y: number,
            /** 矩形路径的宽度 */
            width: number,
            /** 矩形路径的高度 */
            height: number,
        ): void;
        /** [CanvasContext.restore()](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.restore.html)
*
* 恢复之前保存的绘图上下文。
*
* **示例代码**
*
*
* ```javascript
const ctx = wx.createCanvasContext('myCanvas')

// save the default fill style
ctx.save()
ctx.setFillStyle('red')
ctx.fillRect(10, 10, 150, 100)

// restore to the previous saved state
ctx.restore()
ctx.fillRect(50, 50, 150, 100)

ctx.draw()
```
* ![](@program/dev/image/canvas/save-restore.png) */
        restore(): void;
        /** [CanvasContext.rotate(number rotate)](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.rotate.html)
*
* 以原点为中心顺时针旋转当前坐标轴。多次调用旋转的角度会叠加。原点可以用 `translate` 方法修改。
*
* **示例代码**
*
*
* ```javascript
const ctx = wx.createCanvasContext('myCanvas')

ctx.strokeRect(100, 10, 150, 100)
ctx.rotate(20 * Math.PI / 180)
ctx.strokeRect(100, 10, 150, 100)
ctx.rotate(20 * Math.PI / 180)
ctx.strokeRect(100, 10, 150, 100)

ctx.draw()
```
* ![](@program/dev/image/canvas/rotate.png) */
        rotate(
            /** 旋转角度，以弧度计 degrees * Math.PI/180；degrees 范围为 0-360 */
            rotate: number,
        ): void;
        /** [CanvasContext.save()](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.save.html)
*
* 保存绘图上下文。
*
* **示例代码**
*
*
* ```javascript
const ctx = wx.createCanvasContext('myCanvas')

// save the default fill style
ctx.save()
ctx.setFillStyle('red')
ctx.fillRect(10, 10, 150, 100)

// restore to the previous saved state
ctx.restore()
ctx.fillRect(50, 50, 150, 100)

ctx.draw()
```
* ![](@program/dev/image/canvas/save-restore.png) */
        save(): void;
        /** [CanvasContext.scale(number scaleWidth, number scaleHeight)](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.scale.html)
*
* 在调用后，之后创建的路径其横纵坐标会被缩放。多次调用倍数会相乘。
*
* **示例代码**
*
*
* ```javascript
const ctx = wx.createCanvasContext('myCanvas')

ctx.strokeRect(10, 10, 25, 15)
ctx.scale(2, 2)
ctx.strokeRect(10, 10, 25, 15)
ctx.scale(2, 2)
ctx.strokeRect(10, 10, 25, 15)

ctx.draw()
```
* ![](@program/dev/image/canvas/scale.png) */
        scale(
            /** 横坐标缩放的倍数 (1 = 100%，0.5 = 50%，2 = 200%) */
            scaleWidth: number,
            /** 纵坐标轴缩放的倍数 (1 = 100%，0.5 = 50%，2 = 200%) */
            scaleHeight: number,
        ): void;
        /** [CanvasContext.setFillStyle(string|[CanvasGradient](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasGradient.html) color)](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.setFillStyle.html)
*
* 设置填充色。
*
* **代码示例**
*
*
* ```js
const ctx = wx.createCanvasContext('myCanvas')
ctx.setFillStyle('red')
ctx.fillRect(10, 10, 150, 75)
ctx.draw()
```
* ![](@program/dev/image/canvas/fill-rect.png)
* @deprecated 基础库版本 [1.9.90](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) 起已废弃，请使用 [CanvasContext.fillStyle](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.html) 替换
*  */
        setFillStyle(
            /** 填充的颜色，默认颜色为 black。 */
            color: string | CanvasGradient,
        ): void;
        /** [CanvasContext.setFontSize(number fontSize)](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.setFontSize.html)
*
* 设置字体的字号
*
* **示例代码**
*
*
* ```javascript
const ctx = wx.createCanvasContext('myCanvas')

ctx.setFontSize(20)
ctx.fillText('20', 20, 20)
ctx.setFontSize(30)
ctx.fillText('30', 40, 40)
ctx.setFontSize(40)
ctx.fillText('40', 60, 60)
ctx.setFontSize(50)
ctx.fillText('50', 90, 90)

ctx.draw()
```
* ![](@program/dev/image/canvas/font-size.png)
* @deprecated 基础库版本 [1.9.90](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) 起已废弃，请使用 [CanvasContext.font](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.html) 替换
*  */
        setFontSize(
            /** 字体的字号 */
            fontSize: number,
        ): void;
        /** [CanvasContext.setGlobalAlpha(number alpha)](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.setGlobalAlpha.html)
*
* 设置全局画笔透明度。
*
* **示例代码**
*
*
* ```javascript
const ctx = wx.createCanvasContext('myCanvas')

ctx.setFillStyle('red')
ctx.fillRect(10, 10, 150, 100)
ctx.setGlobalAlpha(0.2)
ctx.setFillStyle('blue')
ctx.fillRect(50, 50, 150, 100)
ctx.setFillStyle('yellow')
ctx.fillRect(100, 100, 150, 100)

ctx.draw()
```
* ![](@program/dev/image/canvas/global-alpha.png)
* @deprecated 基础库版本 [1.9.90](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) 起已废弃，请使用 [CanvasContext.globalAlpha](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.html) 替换
*  */
        setGlobalAlpha(
            /** 透明度。范围 0-1，0 表示完全透明，1 表示完全不透明。 */
            alpha: number,
        ): void;
        /** [CanvasContext.setLineCap(string lineCap)](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.setLineCap.html)
*
* 设置线条的端点样式
*
* **示例代码**
*
*
* ```javascript
const ctx = wx.createCanvasContext('myCanvas')
ctx.beginPath()
ctx.moveTo(10, 10)
ctx.lineTo(150, 10)
ctx.stroke()

ctx.beginPath()
ctx.setLineCap('butt')
ctx.setLineWidth(10)
ctx.moveTo(10, 30)
ctx.lineTo(150, 30)
ctx.stroke()

ctx.beginPath()
ctx.setLineCap('round')
ctx.setLineWidth(10)
ctx.moveTo(10, 50)
ctx.lineTo(150, 50)
ctx.stroke()

ctx.beginPath()
ctx.setLineCap('square')
ctx.setLineWidth(10)
ctx.moveTo(10, 70)
ctx.lineTo(150, 70)
ctx.stroke()

ctx.draw()
```
* ![](@program/dev/image/canvas/line-cap.png)
* @deprecated 基础库版本 [1.9.90](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) 起已废弃，请使用 [CanvasContext.lineCap](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.html) 替换
*  */
        setLineCap(
            /** 线条的结束端点样式
             *
             * 参数 lineCap 可选值：
             * - 'butt': 向线条的每个末端添加平直的边缘。;
             * - 'round': 向线条的每个末端添加圆形线帽。;
             * - 'square': 向线条的每个末端添加正方形线帽。; */
            lineCap: "butt" | "round" | "square",
        ): void;
        /** [CanvasContext.setLineDash(Array.&lt;number&gt; pattern, number offset)](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.setLineDash.html)
*
* 设置虚线样式。
*
* **示例代码**
*
*
* ```javascript
const ctx = wx.createCanvasContext('myCanvas')

ctx.setLineDash([10, 20], 5);

ctx.beginPath();
ctx.moveTo(0,100);
ctx.lineTo(400, 100);
ctx.stroke();

ctx.draw()
```
* ![](@program/dev/image/canvas/set-line-dash.png)
*
* 最低基础库： `1.6.0`
* @deprecated 基础库版本 [1.9.90](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) 起已废弃，请使用 [CanvasContext.lineDashOffset](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.html) 替换
*  */
        setLineDash(
            /** 一组描述交替绘制线段和间距（坐标空间单位）长度的数字 */
            pattern: number[],
            /** 虚线偏移量 */
            offset: number,
        ): void;
        /** [CanvasContext.setLineJoin(string lineJoin)](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.setLineJoin.html)
*
* 设置线条的交点样式
*
* **示例代码**
*
*
* ```javascript
const ctx = wx.createCanvasContext('myCanvas')
ctx.beginPath()
ctx.moveTo(10, 10)
ctx.lineTo(100, 50)
ctx.lineTo(10, 90)
ctx.stroke()

ctx.beginPath()
ctx.setLineJoin('bevel')
ctx.setLineWidth(10)
ctx.moveTo(50, 10)
ctx.lineTo(140, 50)
ctx.lineTo(50, 90)
ctx.stroke()

ctx.beginPath()
ctx.setLineJoin('round')
ctx.setLineWidth(10)
ctx.moveTo(90, 10)
ctx.lineTo(180, 50)
ctx.lineTo(90, 90)
ctx.stroke()

ctx.beginPath()
ctx.setLineJoin('miter')
ctx.setLineWidth(10)
ctx.moveTo(130, 10)
ctx.lineTo(220, 50)
ctx.lineTo(130, 90)
ctx.stroke()

ctx.draw()
```
* ![](@program/dev/image/canvas/line-join.png)
* @deprecated 基础库版本 [1.9.90](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) 起已废弃，请使用 [CanvasContext.lineJoin](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.html) 替换
*  */
        setLineJoin(
            /** 线条的结束交点样式
             *
             * 参数 lineJoin 可选值：
             * - 'bevel': 斜角;
             * - 'round': 圆角;
             * - 'miter': 尖角; */
            lineJoin: "bevel" | "round" | "miter",
        ): void;
        /** [CanvasContext.setLineWidth(number lineWidth)](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.setLineWidth.html)
*
* 设置线条的宽度
*
* **示例代码**
*
*
* ```javascript
const ctx = wx.createCanvasContext('myCanvas')
ctx.beginPath()
ctx.moveTo(10, 10)
ctx.lineTo(150, 10)
ctx.stroke()

ctx.beginPath()
ctx.setLineWidth(5)
ctx.moveTo(10, 30)
ctx.lineTo(150, 30)
ctx.stroke()

ctx.beginPath()
ctx.setLineWidth(10)
ctx.moveTo(10, 50)
ctx.lineTo(150, 50)
ctx.stroke()

ctx.beginPath()
ctx.setLineWidth(15)
ctx.moveTo(10, 70)
ctx.lineTo(150, 70)
ctx.stroke()

ctx.draw()
```
*
* ![](@program/dev/image/canvas/line-width.png)
* @deprecated 基础库版本 [1.9.90](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) 起已废弃，请使用 [CanvasContext.lineWidth](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.html) 替换
*  */
        setLineWidth(
            /** 线条的宽度，单位px */
            lineWidth: number,
        ): void;
        /** [CanvasContext.setMiterLimit(number miterLimit)](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.setMiterLimit.html)
*
* 设置最大斜接长度。斜接长度指的是在两条线交汇处内角和外角之间的距离。当 [CanvasContext.setLineJoin()](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.setLineJoin.html) 为 miter 时才有效。超过最大倾斜长度的，连接处将以 lineJoin 为 bevel 来显示。
*
* **示例代码**
*
*
* ```javascript
const ctx = wx.createCanvasContext('myCanvas')
ctx.beginPath()
ctx.setLineWidth(10)
ctx.setLineJoin('miter')
ctx.setMiterLimit(1)
ctx.moveTo(10, 10)
ctx.lineTo(100, 50)
ctx.lineTo(10, 90)
ctx.stroke()

ctx.beginPath()
ctx.setLineWidth(10)
ctx.setLineJoin('miter')
ctx.setMiterLimit(2)
ctx.moveTo(50, 10)
ctx.lineTo(140, 50)
ctx.lineTo(50, 90)
ctx.stroke()

ctx.beginPath()
ctx.setLineWidth(10)
ctx.setLineJoin('miter')
ctx.setMiterLimit(3)
ctx.moveTo(90, 10)
ctx.lineTo(180, 50)
ctx.lineTo(90, 90)
ctx.stroke()

ctx.beginPath()
ctx.setLineWidth(10)
ctx.setLineJoin('miter')
ctx.setMiterLimit(4)
ctx.moveTo(130, 10)
ctx.lineTo(220, 50)
ctx.lineTo(130, 90)
ctx.stroke()

ctx.draw()
```
* ![](@program/dev/image/canvas/miter-limit.png)
* @deprecated 基础库版本 [1.9.90](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) 起已废弃，请使用 [CanvasContext.miterLimit](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.html) 替换
*  */
        setMiterLimit(
            /** 最大斜接长度 */
            miterLimit: number,
        ): void;
        /** [CanvasContext.setShadow(number offsetX, number offsetY, number blur, string color)](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.setShadow.html)
*
* 设定阴影样式。
*
* **示例代码**
*
*
* ```javascript
const ctx = wx.createCanvasContext('myCanvas')
ctx.setFillStyle('red')
ctx.setShadow(10, 50, 50, 'blue')
ctx.fillRect(10, 10, 150, 75)
ctx.draw()
```
* ![](@program/dev/image/canvas/shadow.png)
* @deprecated 基础库版本 [1.9.90](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) 起已废弃，请使用 [CanvasContext.shadowOffsetX|CanvasContext.shadowOffsetY|CanvasContext.shadowColor|CanvasContext.shadowBlur](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.html) 替换
*  */
        setShadow(
            /** 阴影相对于形状在水平方向的偏移，默认值为 0。 */
            offsetX: number,
            /** 阴影相对于形状在竖直方向的偏移，默认值为 0。 */
            offsetY: number,
            /** 阴影的模糊级别，数值越大越模糊。范围 0- 100。，默认值为 0。 */
            blur: number,
            /** 阴影的颜色。默认值为 black。 */
            color: string,
        ): void;
        /** [CanvasContext.setStrokeStyle(string|[CanvasGradient](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasGradient.html) color)](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.setStrokeStyle.html)
*
* 设置描边颜色。
*
* **代码示例**
*
*
* ```js
const ctx = wx.createCanvasContext('myCanvas')
ctx.setStrokeStyle('red')
ctx.strokeRect(10, 10, 150, 75)
ctx.draw()
```
* ![](@program/dev/image/canvas/stroke-rect.png)
* @deprecated 基础库版本 [1.9.90](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) 起已废弃，请使用 [CanvasContext.strokeStyle](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.html) 替换
*  */
        setStrokeStyle(
            /** 描边的颜色，默认颜色为 black。 */
            color: string | CanvasGradient,
        ): void;
        /** [CanvasContext.setTextAlign(string align)](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.setTextAlign.html)
*
* 设置文字的对齐
*
* **示例代码**
*
*
*
* ```javascript
const ctx = wx.createCanvasContext('myCanvas')

ctx.setStrokeStyle('red')
ctx.moveTo(150, 20)
ctx.lineTo(150, 170)
ctx.stroke()

ctx.setFontSize(15)
ctx.setTextAlign('left')
ctx.fillText('textAlign=left', 150, 60)

ctx.setTextAlign('center')
ctx.fillText('textAlign=center', 150, 80)

ctx.setTextAlign('right')
ctx.fillText('textAlign=right', 150, 100)

ctx.draw()
```
*
* ![](@program/dev/image/canvas/set-text-align.png)
*
* 最低基础库： `1.1.0` */
        setTextAlign(
            /** 文字的对齐方式
             *
             * 参数 align 可选值：
             * - 'left': 左对齐;
             * - 'center': 居中对齐;
             * - 'right': 右对齐; */
            align: "left" | "center" | "right",
        ): void;
        /** [CanvasContext.setTextBaseline(string textBaseline)](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.setTextBaseline.html)
*
* 设置文字的竖直对齐
*
* **示例代码**
*
*
* ```javascript
const ctx = wx.createCanvasContext('myCanvas')

ctx.setStrokeStyle('red')
ctx.moveTo(5, 75)
ctx.lineTo(295, 75)
ctx.stroke()

ctx.setFontSize(20)

ctx.setTextBaseline('top')
ctx.fillText('top', 5, 75)

ctx.setTextBaseline('middle')
ctx.fillText('middle', 50, 75)

ctx.setTextBaseline('bottom')
ctx.fillText('bottom', 120, 75)

ctx.setTextBaseline('normal')
ctx.fillText('normal', 200, 75)

ctx.draw()
```
* ![](@program/dev/image/canvas/set-text-baseline.png)
*
* 最低基础库： `1.4.0` */
        setTextBaseline(
            /** 文字的竖直对齐方式
             *
             * 参数 textBaseline 可选值：
             * - 'top': 顶部对齐;
             * - 'bottom': 底部对齐;
             * - 'middle': 居中对齐;
             * - 'normal': ; */
            textBaseline: "top" | "bottom" | "middle" | "normal",
        ): void;
        /** [CanvasContext.setTransform(number scaleX, number skewX, number skewY, number scaleY, number translateX, number translateY)](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.setTransform.html)
         *
         * 使用矩阵重新设置（覆盖）当前变换的方法
         *
         * 最低基础库： `1.9.90` */
        setTransform(
            /** 水平缩放 */
            scaleX: number,
            /** 水平倾斜 */
            skewX: number,
            /** 垂直倾斜 */
            skewY: number,
            /** 垂直缩放 */
            scaleY: number,
            /** 水平移动 */
            translateX: number,
            /** 垂直移动 */
            translateY: number,
        ): void;
        /** [CanvasContext.stroke()](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.stroke.html)
*
* 画出当前路径的边框。默认颜色色为黑色。
*
* **示例代码**
*
*
* ```javascript
const ctx = wx.createCanvasContext('myCanvas')
ctx.moveTo(10, 10)
ctx.lineTo(100, 10)
ctx.lineTo(100, 100)
ctx.stroke()
ctx.draw()
```
* ![](@program/dev/image/canvas/stroke-line.png)
*
* stroke() 描绘的的路径是从 beginPath() 开始计算，但是不会将 strokeRect() 包含进去。
*
* ```javascript
const ctx = wx.createCanvasContext('myCanvas')
// begin path
ctx.rect(10, 10, 100, 30)
ctx.setStrokeStyle('yellow')
ctx.stroke()

// begin another path
ctx.beginPath()
ctx.rect(10, 40, 100, 30)

// only stoke this rect, not in current path
ctx.setStrokeStyle('blue')
ctx.strokeRect(10, 70, 100, 30)

ctx.rect(10, 100, 100, 30)

// it will stroke current path
ctx.setStrokeStyle('red')
ctx.stroke()
ctx.draw()
```
*
* ![](@program/dev/image/canvas/stroke-path.png) */
        stroke(): void;
        /** [CanvasContext.strokeRect(number x, number y, number width, number height)](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.strokeRect.html)
*
* 画一个矩形(非填充)。 用 [`setStrokeStyle`](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.setStrokeStyle.html) 设置矩形线条的颜色，如果没设置默认是黑色。
*
* **示例代码**
*
*
* ```javascript
const ctx = wx.createCanvasContext('myCanvas')
ctx.setStrokeStyle('red')
ctx.strokeRect(10, 10, 150, 75)
ctx.draw()
```
* ![](@program/dev/image/canvas/stroke-rect.png) */
        strokeRect(
            /** 矩形路径左上角的横坐标 */
            x: number,
            /** 矩形路径左上角的纵坐标 */
            y: number,
            /** 矩形路径的宽度 */
            width: number,
            /** 矩形路径的高度 */
            height: number,
        ): void;
        /** [CanvasContext.strokeText(string text, number x, number y, number maxWidth)](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.strokeText.html)
         *
         * 给定的 (x, y) 位置绘制文本描边的方法
         *
         * 最低基础库： `1.9.90` */
        strokeText(
            /** 要绘制的文本 */
            text: string,
            /** 文本起始点的 x 轴坐标 */
            x: number,
            /** 文本起始点的 y 轴坐标 */
            y: number,
            /** 需要绘制的最大宽度，可选 */
            maxWidth?: number,
        ): void;
        /** [CanvasContext.transform(number scaleX, number skewX, number skewY, number scaleY, number translateX, number translateY)](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.transform.html)
         *
         * 使用矩阵多次叠加当前变换的方法
         *
         * 最低基础库： `1.9.90` */
        transform(
            /** 水平缩放 */
            scaleX: number,
            /** 水平倾斜 */
            skewX: number,
            /** 垂直倾斜 */
            skewY: number,
            /** 垂直缩放 */
            scaleY: number,
            /** 水平移动 */
            translateX: number,
            /** 垂直移动 */
            translateY: number,
        ): void;
        /** [CanvasContext.translate(number x, number y)](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.translate.html)
*
* 对当前坐标系的原点 (0, 0) 进行变换。默认的坐标系原点为页面左上角。
*
* **示例代码**
*
*
*
* ```javascript
const ctx = wx.createCanvasContext('myCanvas')

ctx.strokeRect(10, 10, 150, 100)
ctx.translate(20, 20)
ctx.strokeRect(10, 10, 150, 100)
ctx.translate(20, 20)
ctx.strokeRect(10, 10, 150, 100)

ctx.draw()
```
*
* ![](@program/dev/image/canvas/translate.png) */
        translate(
            /** 水平坐标平移量 */
            x: number,
            /** 竖直坐标平移量 */
            y: number,
        ): void;
        /** [Object CanvasContext.measureText(string text)](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.measureText.html)
         *
         * 测量文本尺寸信息。目前仅返回文本宽度。同步接口。
         *
         * 最低基础库： `1.9.90` */
        measureText(
            /** 要测量的文本 */
            text: string,
        ): TextMetrics;
        /** [[CanvasGradient](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasGradient.html) CanvasContext.createCircularGradient(number x, number y, number r)](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.createCircularGradient.html)
*
* 创建一个圆形的渐变颜色。起点在圆心，终点在圆环。返回的`CanvasGradient`对象需要使用 [CanvasGradient.addColorStop()](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasGradient.addColorStop.html) 来指定渐变点，至少要两个。
*
* **示例代码**
*
*
* ```javascript
const ctx = wx.createCanvasContext('myCanvas')

// Create circular gradient
const grd = ctx.createCircularGradient(75, 50, 50)
grd.addColorStop(0, 'red')
grd.addColorStop(1, 'white')

// Fill with gradient
ctx.setFillStyle(grd)
ctx.fillRect(10, 10, 150, 80)
ctx.draw()
```
* ![](@program/dev/image/canvas/circular-gradient.png) */
        createCircularGradient(
            /** 圆心的 x 坐标 */
            x: number,
            /** 圆心的 y 坐标 */
            y: number,
            /** 圆的半径 */
            r: number,
        ): CanvasGradient;
        /** [[CanvasGradient](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasGradient.html) CanvasContext.createLinearGradient(number x0, number y0, number x1, number y1)](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.createLinearGradient.html)
*
* 创建一个线性的渐变颜色。返回的`CanvasGradient`对象需要使用 [CanvasGradient.addColorStop()](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasGradient.addColorStop.html) 来指定渐变点，至少要两个。
*
* **示例代码**
*
*
* ```javascript
const ctx = wx.createCanvasContext('myCanvas')

// Create linear gradient
const grd = ctx.createLinearGradient(0, 0, 200, 0)
grd.addColorStop(0, 'red')
grd.addColorStop(1, 'white')

// Fill with gradient
ctx.setFillStyle(grd)
ctx.fillRect(10, 10, 150, 80)
ctx.draw()
```
* ![](@program/dev/image/canvas/linear-gradient.png) */
        createLinearGradient(
            /** 起点的 x 坐标 */
            x0: number,
            /** 起点的 y 坐标 */
            y0: number,
            /** 终点的 x 坐标 */
            x1: number,
            /** 终点的 y 坐标 */
            y1: number,
        ): CanvasGradient;
    }
    interface CanvasGradient {
        /** [CanvasGradient.addColorStop(number stop, string color)](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasGradient.addColorStop.html)
*
* 添加颜色的渐变点。小于最小 stop 的部分会按最小 stop 的 color 来渲染，大于最大 stop 的部分会按最大 stop 的 color 来渲染
*
* **示例代码**
*
*
* ```js
const ctx = wx.createCanvasContext('myCanvas')

// Create circular gradient
const grd = ctx.createLinearGradient(30, 10, 120, 10)
grd.addColorStop(0, 'red')
grd.addColorStop(0.16, 'orange')
grd.addColorStop(0.33, 'yellow')
grd.addColorStop(0.5, 'green')
grd.addColorStop(0.66, 'cyan')
grd.addColorStop(0.83, 'blue')
grd.addColorStop(1, 'purple')

// Fill with gradient
ctx.setFillStyle(grd)
ctx.fillRect(10, 10, 150, 80)
ctx.draw()
```
* ![](@program/dev/image/canvas/color-stop.png) */
        addColorStop(
            /** 表示渐变中开始与结束之间的位置，范围 0-1。 */
            stop: number,
            /** 渐变点的颜色。 */
            color: string,
        ): void;
    }
    interface CloseSyncError {
        /** 错误信息
         *
         * | 错误信息 | 说明 |
         * | - | - |
         * | bad file descriptor | 无效的文件描述符 | */ errMsg: string;
        /** 错误码
         *
         * | 错误信息 | 说明 |
         * | - | - |
         * | bad file descriptor | 无效的文件描述符 | */ errCode: number;
    }
    interface DownloadTask {
        /** [DownloadTask.abort()](https://developers.weixin.qq.com/miniprogram/dev/api/network/download/DownloadTask.abort.html)
         *
         * 中断下载任务
         *
         * 最低基础库： `1.4.0` */
        abort(): void;
        /** [DownloadTask.offHeadersReceived(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/network/download/DownloadTask.offHeadersReceived.html)
         *
         * 取消监听 HTTP Response Header 事件
         *
         * 最低基础库： `2.1.0` */
        offHeadersReceived(
            /** HTTP Response Header 事件的回调函数 */
            callback?: OffHeadersReceivedCallback,
        ): void;
        /** [DownloadTask.offProgressUpdate(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/network/download/DownloadTask.offProgressUpdate.html)
         *
         * 取消监听下载进度变化事件
         *
         * 最低基础库： `2.1.0` */
        offProgressUpdate(
            /** 下载进度变化事件的回调函数 */
            callback?: DownloadTaskOffProgressUpdateCallback,
        ): void;
        /** [DownloadTask.onHeadersReceived(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/network/download/DownloadTask.onHeadersReceived.html)
         *
         * 监听 HTTP Response Header 事件。会比请求完成事件更早
         *
         * 最低基础库： `2.1.0` */
        onHeadersReceived(
            /** HTTP Response Header 事件的回调函数 */
            callback: OnHeadersReceivedCallback,
        ): void;
        /** [DownloadTask.onProgressUpdate(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/network/download/DownloadTask.onProgressUpdate.html)
         *
         * 监听下载进度变化事件
         *
         * 最低基础库： `1.4.0` */
        onProgressUpdate(
            /** 下载进度变化事件的回调函数 */
            callback: DownloadTaskOnProgressUpdateCallback,
        ): void;
    }
    interface EditorContext {
        /** [EditorContext.blur(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/media/editor/EditorContext.blur.html)
         *
         * 编辑器失焦，同时收起键盘。
         *
         * 最低基础库： `2.8.3` */
        blur(option?: BlurOption): void;
        /** [EditorContext.clear(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/media/editor/EditorContext.clear.html)
         *
         * 清空编辑器内容
         *
         * 最低基础库： `2.7.0` */
        clear(option?: ClearOption): void;
        /** [EditorContext.format(string name, string value)](https://developers.weixin.qq.com/miniprogram/dev/api/media/editor/EditorContext.format.html)
         *
         * 修改样式
         *
         * ****
         *
         * ## 支持设置的样式列表
         * | name                                                      | value                           | verson |
         * | --------------------------------------------------------- | ------------------------------- | ------ |
         * | bold                                                      |                                 | 2.7.0  |
         * | italic                                                    |                                 | 2.7.0  |
         * | underline                                                 |                                 | 2.7.0  |
         * | strike                                                    |                                 | 2.7.0  |
         * | ins                                                       |                                 | 2.7.0  |
         * | script                                                    | sub / super                     | 2.7.0  |
         * | header                                                    | H1 / H2 / h3 / H4 / h5 /  H6    | 2.7.0  |
         * | align                                                     | left / center / right / justify | 2.7.0  |
         * | direction                                                 | rtl                             | 2.7.0  |
         * | indent                                                    | -1 / +1                         | 2.7.0  |
         * | list                                                      | ordered / bullet / check        | 2.7.0  |
         * | color                                                     | hex color                       | 2.7.0  |
         * | backgroundColor                                           | hex color                       | 2.7.0  |
         * | margin/marginTop/marginBottom/marginLeft/marginRight      | css style                       | 2.7.0  |
         * | padding/paddingTop/paddingBottom/paddingLeft/paddingRight | css style                       | 2.7.0  |
         * | font/fontSize/fontStyle/fontVariant/fontWeight/fontFamily | css style                       | 2.7.0  |
         * | lineHeight                                                | css style                       | 2.7.0  |
         * | letterSpacing                                             | css style                       | 2.7.0  |
         * | textDecoration                                            | css style                       | 2.7.0  |
         * | textIndent                                                | css style                       | 2.8.0  |
         * | wordWrap                                                  | css style                       | 2.10.2 |
         * | wordBreak                                                 | css style                       | 2.10.2 |
         * | whiteSpace                                                | css style                       | 2.10.2 |
         *
         * 对已经应用样式的选区设置会取消样式。css style 表示 css 中规定的允许值。
         *
         * 最低基础库： `2.7.0` */
        format(
            /** 属性 */
            name: string,
            /** 值 */
            value?: string,
        ): void;
        /** [EditorContext.getContents(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/media/editor/EditorContext.getContents.html)
         *
         * 获取编辑器内容
         *
         * 最低基础库： `2.7.0` */
        getContents(option?: GetContentsOption): void;
        /** [EditorContext.getSelectionText(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/media/editor/EditorContext.getSelectionText.html)
         *
         * 获取编辑器已选区域内的纯文本内容。当编辑器失焦或未选中一段区间时，返回内容为空。
         *
         * 最低基础库： `2.10.2` */
        getSelectionText(option?: GetSelectionTextOption): void;
        /** [EditorContext.insertDivider(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/media/editor/EditorContext.insertDivider.html)
         *
         * 插入分割线
         *
         * 最低基础库： `2.7.0` */
        insertDivider(option?: InsertDividerOption): void;
        /** [EditorContext.insertImage(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/media/editor/EditorContext.insertImage.html)
*
* 插入图片。
*
* 地址为临时文件时，获取的编辑器html格式内容中 <img> 标签增加属性 data-local，delta 格式内容中图片 attributes 属性增加 data-local 字段，该值为传入的临时文件地址。
*
* 开发者可选择在提交阶段上传图片到服务器，获取到网络地址后进行替换。替换时对于html内容应替换掉 <img> 的 src 值，对于 delta 内容应替换掉 `insert { image: abc }` 值。
*
* **示例代码**
*
*
* ```javascript
this.editorCtx.insertImage({
  src: 'xx',
  width: '100px',
  height: '50px',
  extClass: className
})
```
*
* 最低基础库： `2.7.0` */
        insertImage(option: InsertImageOption): void;
        /** [EditorContext.insertText(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/media/editor/EditorContext.insertText.html)
         *
         * 覆盖当前选区，设置一段文本
         *
         * 最低基础库： `2.7.0` */
        insertText(option: InsertTextOption): void;
        /** [EditorContext.redo(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/media/editor/EditorContext.redo.html)
         *
         * 恢复
         *
         * 最低基础库： `2.7.0` */
        redo(option?: RedoOption): void;
        /** [EditorContext.removeFormat(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/media/editor/EditorContext.removeFormat.html)
         *
         * 清除当前选区的样式
         *
         * 最低基础库： `2.7.0` */
        removeFormat(option?: RemoveFormatOption): void;
        /** [EditorContext.scrollIntoView()](https://developers.weixin.qq.com/miniprogram/dev/api/media/editor/EditorContext.scrollIntoView.html)
         *
         * 使得编辑器光标处滚动到窗口可视区域内。
         *
         * 最低基础库： `2.8.3` */
        scrollIntoView(): void;
        /** [EditorContext.setContents(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/media/editor/EditorContext.setContents.html)
         *
         * 初始化编辑器内容，html和delta同时存在时仅delta生效
         *
         * 最低基础库： `2.7.0` */
        setContents(option: SetContentsOption): void;
        /** [EditorContext.undo(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/media/editor/EditorContext.undo.html)
         *
         * 撤销
         *
         * 最低基础库： `2.7.0` */
        undo(option?: UndoOption): void;
    }
    interface EntryList {
        /** [Array EntryList.getEntries()](https://developers.weixin.qq.com/miniprogram/dev/api/base/performance/EntryList.getEntries.html)
         *
         * 该方法返回当前列表中的所有性能数据
         *
         * 最低基础库： `2.11.0` */
        getEntries(): any[];
        /** [Array EntryList.getEntriesByName(string name, string entryType)](https://developers.weixin.qq.com/miniprogram/dev/api/base/performance/EntryList.getEntriesByName.html)
         *
         * 获取当前列表中所有名称为 [name] 且类型为 [entryType] 的性能数据
         *
         * 最低基础库： `2.11.0` */
        getEntriesByName(name: string, entryType?: string): any[];
        /** [Array EntryList.getEntriesByType(string entryType)](https://developers.weixin.qq.com/miniprogram/dev/api/base/performance/EntryList.getEntriesByType.html)
         *
         * 获取当前列表中所有类型为 [entryType] 的性能数据
         *
         * 最低基础库： `2.11.0` */
        getEntriesByType(entryType: string): any[];
    }
    interface EventChannel {
        /** [EventChannel.emit(string eventName, any args)](https://developers.weixin.qq.com/miniprogram/dev/api/route/EventChannel.emit.html)
         *
         * 触发一个事件
         *
         * 最低基础库： `2.7.3` */
        emit(
            /** 事件名称 */
            eventName: string,
            /** 事件参数 */
            ...args: any
        ): void;
        /** [EventChannel.off(string eventName, function fn)](https://developers.weixin.qq.com/miniprogram/dev/api/route/EventChannel.off.html)
         *
         * 取消监听一个事件。给出第二个参数时，只取消给出的监听函数，否则取消所有监听函数
         *
         * 最低基础库： `2.7.3` */
        off(
            /** 事件名称 */
            eventName: string,
            /** 事件监听函数 */
            fn: EventCallback,
        ): void;
        /** [EventChannel.on(string eventName, function fn)](https://developers.weixin.qq.com/miniprogram/dev/api/route/EventChannel.on.html)
         *
         * 持续监听一个事件
         *
         * 最低基础库： `2.7.3` */
        on(
            /** 事件名称 */
            eventName: string,
            /** 事件监听函数 */
            fn: EventCallback,
        ): void;
        /** [EventChannel.once(string eventName, function fn)](https://developers.weixin.qq.com/miniprogram/dev/api/route/EventChannel.once.html)
         *
         * 监听一个事件一次，触发后失效
         *
         * 最低基础库： `2.7.3` */
        once(
            /** 事件名称 */
            eventName: string,
            /** 事件监听函数 */
            fn: EventCallback,
        ): void;
    }
    interface FileSystemManager {
        /** [Array.&lt;string&gt; FileSystemManager.readdirSync(string dirPath)](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.readdirSync.html)
*
* [FileSystemManager.readdir](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.readdir.html) 的同步版本
*
* **示例代码**
*
*
* ```js
const fs = wx.getFileSystemManager()
fs.readdir({
  dirPath: `${wx.env.USER_DATA_PATH}/example`,
  success(res) {
    console.log(res.files)
  },
  fail(res) {
    console.error(res)
  }
})

// 同步接口
try {
  const res = fs.readdirSync(`${wx.env.USER_DATA_PATH}/example`)
  console.log(res)
} catch(e) {
  console.error(e)
}
``` */
        readdirSync(
            /** 要读取的目录路径 (本地路径) */
            dirPath: string,
        ): string[];
        /** [FileSystemManager.access(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.access.html)
*
* 判断文件/目录是否存在
*
* **示例代码**
*
*
* ```js
const fs = wx.getFileSystemManager()
// 判断文件/目录是否存在
fs.access({
  path: `${wx.env.USER_DATA_PATH}/hello.txt`,
  success(res) {
    // 文件存在
    console.log(res)
  },
  fail(res) {
    // 文件不存在或其他错误
    console.error(res)
  }
})

// 同步接口
try {
  fs.accessSync(`${wx.env.USER_DATA_PATH}/hello.txt`)
} catch(e) {
  console.error(e)
}
``` */
        access(option: AccessOption): void;
        /** [FileSystemManager.accessSync(string path)](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.accessSync.html)
*
* [FileSystemManager.access](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.access.html) 的同步版本
*
* **示例代码**
*
*
* ```js
const fs = wx.getFileSystemManager()
// 判断文件/目录是否存在
fs.access({
  path: `${wx.env.USER_DATA_PATH}/hello.txt`,
  success(res) {
    // 文件存在
    console.log(res)
  },
  fail(res) {
    // 文件不存在或其他错误
    console.error(res)
  }
})

// 同步接口
try {
  fs.accessSync(`${wx.env.USER_DATA_PATH}/hello.txt`)
} catch(e) {
  console.error(e)
}
``` */
        accessSync(
            /** 要判断是否存在的文件/目录路径 (本地路径) */
            path: string,
        ): void;
        /** [FileSystemManager.appendFile(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.appendFile.html)
*
* 在文件结尾追加内容
*
* **示例代码**
*
*
* ```js
const fs = wx.getFileSystemManager()

fs.appendFile({
  filePath: `${wx.env.USER_DATA_PATH}/hello.txt`,
  data: 'some text',
  encoding: 'utf8',
  success(res) {
    console.log(res)
  },
  fail(res) {
    console.error(res)
  }
})

// 同步接口
try {
  fs.appendFileSync(`${wx.env.USER_DATA_PATH}/hello.txt`, 'some text', 'utf8')
} catch(e) {
  console.error(e)
}
```
*
* 最低基础库： `2.1.0` */
        appendFile(option: AppendFileOption): void;
        /** [FileSystemManager.appendFileSync(string filePath, string|ArrayBuffer data, string encoding)](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.appendFileSync.html)
*
* [FileSystemManager.appendFile](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.appendFile.html) 的同步版本
*
* **示例代码**
*
*
* ```js
const fs = wx.getFileSystemManager()

fs.appendFile({
  filePath: `${wx.env.USER_DATA_PATH}/hello.txt`,
  data: 'some text',
  encoding: 'utf8',
  success(res) {
    console.log(res)
  },
  fail(res) {
    console.error(res)
  }
})

// 同步接口
try {
  fs.appendFileSync(`${wx.env.USER_DATA_PATH}/hello.txt`, 'some text', 'utf8')
} catch(e) {
  console.error(e)
}
```
*
* 最低基础库： `2.1.0` */
        appendFileSync(
            /** 要追加内容的文件路径 (本地路径) */
            filePath: string,
            /** 要追加的文本或二进制数据 */
            data: string | ArrayBuffer,
            /** 指定写入文件的字符编码
             *
             * 参数 encoding 可选值：
             * - 'ascii': ;
             * - 'base64': ;
             * - 'binary': ;
             * - 'hex': ;
             * - 'ucs2': 以小端序读取;
             * - 'ucs-2': 以小端序读取;
             * - 'utf16le': 以小端序读取;
             * - 'utf-16le': 以小端序读取;
             * - 'utf-8': ;
             * - 'utf8': ;
             * - 'latin1': ; */
            encoding?:
                | "ascii"
                | "base64"
                | "binary"
                | "hex"
                | "ucs2"
                | "ucs-2"
                | "utf16le"
                | "utf-16le"
                | "utf-8"
                | "utf8"
                | "latin1",
        ): void;
        /** [FileSystemManager.close(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.close.html)
*
* 关闭文件
*
* **示例代码**
*
*
* ```js
const fs = wx.getFileSystemManager()
// 打开文件
fs.open({
  filePath: `${wx.env.USER_DATA_PATH}/hello.txt`,
  flag: 'a+',
  success(res) {
    // 关闭文件
    fs.close({
      fd: res.fd
    })
  }
})
```
*
* 最低基础库： `2.16.1` */
        close(option: FileSystemManagerCloseOption): void;
        /** [FileSystemManager.copyFile(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.copyFile.html)
*
* 复制文件
*
* **示例代码**
*
*
* ```js
const fs = wx.getFileSystemManager()
fs.copyFile({
  srcPath: `${wx.env.USER_DATA_PATH}/hello.txt`,
  destPath: `${wx.env.USER_DATA_PATH}/hello_copy.txt`
  success(res) {
    console.log(res)
  },
  fail(res) {
    console.error(res)
  }
})

// 同步接口
try {
  fs.copyFileSync(
    `${wx.env.USER_DATA_PATH}/hello.txt`,
    `${wx.env.USER_DATA_PATH}/hello_copy.txt`
  )
} catch(e) {
  console.error(e)
}
``` */
        copyFile(option: CopyFileOption): void;
        /** [FileSystemManager.copyFileSync(string srcPath, string destPath)](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.copyFileSync.html)
*
* [FileSystemManager.copyFile](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.copyFile.html) 的同步版本
*
* **示例代码**
*
*
* ```js
const fs = wx.getFileSystemManager()
fs.copyFile({
  srcPath: `${wx.env.USER_DATA_PATH}/hello.txt`,
  destPath: `${wx.env.USER_DATA_PATH}/hello_copy.txt`
  success(res) {
    console.log(res)
  },
  fail(res) {
    console.error(res)
  }
})

// 同步接口
try {
  fs.copyFileSync(
    `${wx.env.USER_DATA_PATH}/hello.txt`,
    `${wx.env.USER_DATA_PATH}/hello_copy.txt`
  )
} catch(e) {
  console.error(e)
}
``` */
        copyFileSync(
            /** 源文件路径，支持本地路径 */
            srcPath: string,
            /** 目标文件路径，支持本地路径 */
            destPath: string,
        ): void;
        /** [FileSystemManager.fstat(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.fstat.html)
*
* 获取文件的状态信息
*
* **示例代码**
*
*
* ```js
const fs = wx.getFileSystemManager()
// 打开文件
fs.open({
  filePath: `${wx.env.USER_DATA_PATH}/hello.txt`,
  flag: 'a+',
  success(res) {
    // 获取文件的状态信息
    fs.fstat({
      fd: res.fd,
      success(res) {
        console.log(res.stats)
      }
    })
  }
})
```
*
* 最低基础库： `2.16.1` */
        fstat(option: FstatOption): void;
        /** [FileSystemManager.ftruncate(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.ftruncate.html)
*
* 对文件内容进行截断操作
*
* **示例代码**
*
*
* ```js
const fs = wx.getFileSystemManager()
// 打开文件
fs.open({
  filePath: `${wx.env.USER_DATA_PATH}/hello.txt`,
  flag: 'a+',
  success(res) {
    // 对文件内容进行截断操作
    fs.ftruncate({
      fd: res.fd,
      length: 10, // 从第10个字节开始截断文件
      success(res) {
        console.log(res)
      }
    })
  }
})
```
*
* 最低基础库： `2.16.1` */
        ftruncate(option: FtruncateOption): void;
        /** [FileSystemManager.getFileInfo(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.getFileInfo.html)
         *
         * 获取该小程序下的 本地临时文件 或 本地缓存文件 信息 */
        getFileInfo(option: FileSystemManagerGetFileInfoOption): void;
        /** [FileSystemManager.getSavedFileList(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.getSavedFileList.html)
         *
         * 获取该小程序下已保存的本地缓存文件列表 */
        getSavedFileList(option?: FileSystemManagerGetSavedFileListOption): void;
        /** [FileSystemManager.mkdir(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.mkdir.html)
*
* 创建目录
*
* **示例代码**
*
*
* ```js
const fs = wx.getFileSystemManager()
fs.mkdir({
  dirPath: `${wx.env.USER_DATA_PATH}/example`,
  recursive: false
  success(res) {
    console.log(res)
  },
  fail(res) {
    console.error(res)
  }
})

// 同步接口
try {
  fs.mkdirSync(`${wx.env.USER_DATA_PATH}/example`, false)
} catch(e) {
  console.error(e)
}
``` */
        mkdir(option: MkdirOption): void;
        /** [FileSystemManager.mkdirSync(string dirPath, boolean recursive)](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.mkdirSync.html)
*
* [FileSystemManager.mkdir](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.mkdir.html) 的同步版本
*
* **示例代码**
*
*
* ```js
const fs = wx.getFileSystemManager()
fs.mkdir({
  dirPath: `${wx.env.USER_DATA_PATH}/example`,
  recursive: false
  success(res) {
    console.log(res)
  },
  fail(res) {
    console.error(res)
  }
})

// 同步接口
try {
  fs.mkdirSync(`${wx.env.USER_DATA_PATH}/example`, false)
} catch(e) {
  console.error(e)
}
``` */
        mkdirSync(
            /** 创建的目录路径 (本地路径) */
            dirPath: string,
            /** 是否在递归创建该目录的上级目录后再创建该目录。如果对应的上级目录已经存在，则不创建该上级目录。如 dirPath 为 a/b/c/d 且 recursive 为 true，将创建 a 目录，再在 a 目录下创建 b 目录，以此类推直至创建 a/b/c 目录下的 d 目录。
             *
             * 最低基础库： `2.3.0` */
            recursive?: boolean,
        ): void;
        /** [FileSystemManager.open(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.open.html)
*
* 打开文件，返回文件描述符
*
* **示例代码**
*
*
* ```js
const fs = wx.getFileSystemManager()
fs.open({
  filePath: `${wx.env.USER_DATA_PATH}/hello.txt`,
  flag: 'a+',
  success(res) {
    console.log(res.fd)
  }
})
```
*
* 最低基础库： `2.16.1` */
        open(option: OpenOption): void;
        /** [FileSystemManager.read(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.read.html)
*
* 读文件
*
* **示例代码**
*
*
* ```js
const fs = wx.getFileSystemManager()
const ab = new ArrayBuffer(1024)
// 打开文件
fs.open({
  filePath: `${wx.env.USER_DATA_PATH}/hello.txt`,
  flag: 'a+',
  success(res) {
    // 读取文件到 ArrayBuffer 中
    fs.read({
      fd: res.fd,
      arrayBuffer: ab,
      length: 10,
      success(res) {
        console.log(res)
      }
    })
  }
})
```
*
* 最低基础库： `2.16.1` */
        read(option: ReadOption): void;
        /** [FileSystemManager.readFile(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.readFile.html)
*
* 读取本地文件内容
*
* **示例代码**
*
*
* ```js
const fs = wx.getFileSystemManager()
fs.readFile({
  filePath: `${wx.env.USER_DATA_PATH}/hello.txt`,
  encoding: 'utf8',
  position: 0,
  success(res) {
    console.log(res.data)
  },
  fail(res) {
    console.error(res)
  }
})

// 同步接口
try {
  const res = fs.readFileSync(`${wx.env.USER_DATA_PATH}/hello.txt`, 'utf8', 0)
  console.log(res)
} catch(e) {
  console.error(e)
}
``` */
        readFile(option: ReadFileOption): void;
        /** [FileSystemManager.readZipEntry(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.readZipEntry.html)
*
* 读取压缩包内的文件
*
* **示例代码**
*
*
* ```js
const fs = wx.getFileSystemManager()
// 读取zip内某个或多个文件
fs.readZipEntry({
  filePath: 'wxfile://from/to.zip',
  entries: [{
    path: 'some_folder/my_file.txt', // zip内文件路径
    encoding: 'utf-8', // 指定读取文件的字符编码，如果不传 encoding，则以 ArrayBuffer 格式读取文件的二进制内容
    position: 0, // 从文件指定位置开始读，如果不指定，则从文件头开始读。读取的范围应该是左闭右开区间 [position, position+length)。有效范围：[0, fileLength - 1]。单位：byte
    length: 10000, // 指定文件的长度，如果不指定，则读到文件末尾。有效范围：[1, fileLength]。单位：byte
  }, {
    path: 'other_folder/orther_file.txt', // zip内文件路径
  }],
  success(res) {
    console.log(res.entries)
    // res.entries === {
    //     'some_folder/my_file.txt': {
    //         errMsg: 'readZipEntry:ok',
    //         data: 'xxxxxx'
    //     },
    //     'other_folder/orther_file.txt': {
    //         data: (ArrayBuffer)
    //     }
    // }
  },
  fail(res) {
    console.log(res.errMsg)
  },
})

// 读取zip内所有文件。允许指定统一的encoding。position、length则不再允许指定，分别默认为0和文件长度
fs.readZipEntry({
  filePath: 'wxfile://from/to.zip',
  entries: 'all'
  encoding: 'utf-8', // 统一指定读取文件的字符编码，如果不传 encoding，则以 ArrayBuffer 格式读取文件的二进制内容
  success(res) {
    console.log(res.entries)
    // res.entries === {
    //     'some_folder/my_file.txt': {
    //         errMsg: 'readZipEntry:ok',
    //         data: 'xxxxxx'
    //     },
    //     'other_folder/orther_file.txt': {
    //         errMsg: 'readZipEntry:ok',
    //         data: 'xxxxxx'
    //     }
    //  }
  },
  fail(res) {
    console.log(res.errMsg)
  },
})
```
*
* 最低基础库： `2.17.3` */
        readZipEntry(option: ReadZipEntryOption): void;
        /** [FileSystemManager.readdir(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.readdir.html)
*
* 读取目录内文件列表
*
* **示例代码**
*
*
* ```js
const fs = wx.getFileSystemManager()
fs.readdir({
  dirPath: `${wx.env.USER_DATA_PATH}/example`,
  success(res) {
    console.log(res.files)
  },
  fail(res) {
    console.error(res)
  }
})

// 同步接口
try {
  const res = fs.readdirSync(`${wx.env.USER_DATA_PATH}/example`)
  console.log(res)
} catch(e) {
  console.error(e)
}
``` */
        readdir(option: ReaddirOption): void;
        /** [FileSystemManager.removeSavedFile(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.removeSavedFile.html)
         *
         * 删除该小程序下已保存的本地缓存文件 */
        removeSavedFile(option: FileSystemManagerRemoveSavedFileOption): void;
        /** [FileSystemManager.rename(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.rename.html)
*
* 重命名文件。可以把文件从 oldPath 移动到 newPath
*
* **示例代码**
*
*
* ```js
const fs = wx.getFileSystemManager()
fs.rename({
  oldPath: `${wx.env.USER_DATA_PATH}/hello.txt`,
  newPath: `${wx.env.USER_DATA_PATH}/hello_new.txt`,
  success(res) {
    console.log(res)
  },
  fail(res) {
    console.error(res)
  }
})

// 同步接口
try {
  const res = fs.renameSync(
    `${wx.env.USER_DATA_PATH}/hello.txt`,
    `${wx.env.USER_DATA_PATH}/hello_new.txt`
  )
  console.log(res)
} catch(e) {
  console.error(e)
}
``` */
        rename(option: RenameOption): void;
        /** [FileSystemManager.renameSync(string oldPath, string newPath)](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.renameSync.html)
*
* [FileSystemManager.rename](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.rename.html) 的同步版本
*
* **示例代码**
*
*
* ```js
const fs = wx.getFileSystemManager()
fs.rename({
  oldPath: `${wx.env.USER_DATA_PATH}/hello.txt`,
  newPath: `${wx.env.USER_DATA_PATH}/hello_new.txt`,
  success(res) {
    console.log(res)
  },
  fail(res) {
    console.error(res)
  }
})

// 同步接口
try {
  const res = fs.renameSync(
    `${wx.env.USER_DATA_PATH}/hello.txt`,
    `${wx.env.USER_DATA_PATH}/hello_new.txt`
  )
  console.log(res)
} catch(e) {
  console.error(e)
}
``` */
        renameSync(
            /** 源文件路径，支持本地路径 */
            oldPath: string,
            /** 新文件路径，支持本地路径 */
            newPath: string,
        ): void;
        /** [FileSystemManager.rmdir(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.rmdir.html)
*
* 删除目录
*
* **示例代码**
*
*
* ```js
const fs = wx.getFileSystemManager()
fs.rmdir({
  dirPath: `${wx.env.USER_DATA_PATH}/example`,
  recursive: false,
  success(res) {
    console.log(res)
  },
  fail(res) {
    console.error(res)
  }
})

// 同步接口
try {
  const res = fs.rmdirSync(`${wx.env.USER_DATA_PATH}/example`, false)
  console.log(res)
} catch(e) {
  console.error(e)
}
``` */
        rmdir(option: RmdirOption): void;
        /** [FileSystemManager.rmdirSync(string dirPath, boolean recursive)](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.rmdirSync.html)
*
* [FileSystemManager.rmdir](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.rmdir.html) 的同步版本
*
* **示例代码**
*
*
* ```js
const fs = wx.getFileSystemManager()
fs.rmdir({
  dirPath: `${wx.env.USER_DATA_PATH}/example`,
  recursive: false,
  success(res) {
    console.log(res)
  },
  fail(res) {
    console.error(res)
  }
})

// 同步接口
try {
  const res = fs.rmdirSync(`${wx.env.USER_DATA_PATH}/example`, false)
  console.log(res)
} catch(e) {
  console.error(e)
}
``` */
        rmdirSync(
            /** 要删除的目录路径 (本地路径) */
            dirPath: string,
            /** 是否递归删除目录。如果为 true，则删除该目录和该目录下的所有子目录以及文件。
             *
             * 最低基础库： `2.3.0` */
            recursive?: boolean,
        ): void;
        /** [FileSystemManager.saveFile(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.saveFile.html)
         *
         * 保存临时文件到本地。此接口会移动临时文件，因此调用成功后，tempFilePath 将不可用。 */
        saveFile(option: FileSystemManagerSaveFileOption): void;
        /** [FileSystemManager.stat(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.stat.html)
         *
         * 获取文件 Stats 对象 */
        stat(option: StatOption): void;
        /** [FileSystemManager.truncate(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.truncate.html)
*
* 对文件内容进行截断操作
*
* **示例代码**
*
*
* ```js
const fs = wx.getFileSystemManager()
fs.truncate({
  filePath: `${wx.env.USER_DATA_PATH}/hello.txt`,
  length: 10, // 从第10个字节开始截断
  success(res) {
    console.log(res)
  }
})
```
*
* 最低基础库： `2.16.1` */
        truncate(option: TruncateOption): void;
        /** [FileSystemManager.unlink(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.unlink.html)
*
* 删除文件
*
* **示例代码**
*
*
* ```js
const fs = wx.getFileSystemManager()
fs.unlink({
  filePath: `${wx.env.USER_DATA_PATH}/hello.txt`,
  success(res) {
    console.log(res)
  },
  fail(res) {
    console.error(res)
  }
})

// 同步接口
try {
  const res = fs.unlinkSync(`${wx.env.USER_DATA_PATH}/hello.txt`)
  console.log(res)
} catch(e) {
  console.error(e)
}
``` */
        unlink(option: UnlinkOption): void;
        /** [FileSystemManager.unlinkSync(string filePath)](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.unlinkSync.html)
*
* [FileSystemManager.unlink](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.unlink.html) 的同步版本
*
* **示例代码**
*
*
* ```js
const fs = wx.getFileSystemManager()
fs.unlink({
  filePath: `${wx.env.USER_DATA_PATH}/hello.txt`,
  success(res) {
    console.log(res)
  },
  fail(res) {
    console.error(res)
  }
})

// 同步接口
try {
  const res = fs.unlinkSync(`${wx.env.USER_DATA_PATH}/hello.txt`)
  console.log(res)
} catch(e) {
  console.error(e)
}
``` */
        unlinkSync(
            /** 要删除的文件路径 (本地路径) */
            filePath: string,
        ): void;
        /** [FileSystemManager.unzip(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.unzip.html)
*
* 解压文件
*
* **示例代码**
*
*
* ```js
const fs = wx.getFileSystemManager()
fs.unzip({
  zipFilePath: `${wx.env.USER_DATA_PATH}/example.zip`,
  targetPath: '${wx.env.USER_DATA_PATH}/example',
  success(res) {
    console.log(res)
  },
  fail(res) {
    console.error(res)
  }
})
``` */
        unzip(option: UnzipOption): void;
        /** [FileSystemManager.write(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.write.html)
*
* 写入文件
*
* **示例代码**
*
*
* ```js
const fs = wx.getFileSystemManager()
// 打开文件
fs.open({
  filePath: `${wx.env.USER_DATA_PATH}/hello.txt`,
  flag: 'a+',
  success(res) {
    // 写入文件
    fs.write({
      fd: res.fd,
      data: 'some text',
      success(res) {
        console.log(res.bytesWritten)
      }
    })
  }
})
```
*
* 最低基础库： `2.16.1` */
        write(option: WriteOption): void;
        /** [FileSystemManager.writeFile(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.writeFile.html)
*
* 写文件
*
* **示例代码**
*
*
* ```js
const fs = wx.getFileSystemManager()
fs.writeFile({
  filePath: `${wx.env.USER_DATA_PATH}/hello.txt`,
  data: 'some text or arrayBuffer',
  encoding: 'utf8',
  success(res) {
    console.log(res)
  },
  fail(res) {
    console.error(res)
  }
})

// 同步接口
try {
  const res = fs.writeFileSync(
    `${wx.env.USER_DATA_PATH}/hello.txt`,
    'some text or arrayBuffer',
    'utf8'
  )
  console.log(res)
} catch(e) {
  console.error(e)
}
``` */
        writeFile(option: WriteFileOption): void;
        /** [FileSystemManager.writeFileSync(string filePath, string|ArrayBuffer data, string encoding)](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.writeFileSync.html)
*
* [FileSystemManager.writeFile](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.writeFile.html) 的同步版本
*
* **示例代码**
*
*
* ```js
const fs = wx.getFileSystemManager()
fs.writeFile({
  filePath: `${wx.env.USER_DATA_PATH}/hello.txt`,
  data: 'some text or arrayBuffer',
  encoding: 'utf8',
  success(res) {
    console.log(res)
  },
  fail(res) {
    console.error(res)
  }
})

// 同步接口
try {
  const res = fs.writeFileSync(
    `${wx.env.USER_DATA_PATH}/hello.txt`,
    'some text or arrayBuffer',
    'utf8'
  )
  console.log(res)
} catch(e) {
  console.error(e)
}
``` */
        writeFileSync(
            /** 要写入的文件路径 (本地路径) */
            filePath: string,
            /** 要写入的文本或二进制数据 */
            data: string | ArrayBuffer,
            /** 指定写入文件的字符编码
             *
             * 参数 encoding 可选值：
             * - 'ascii': ;
             * - 'base64': ;
             * - 'binary': ;
             * - 'hex': ;
             * - 'ucs2': 以小端序读取;
             * - 'ucs-2': 以小端序读取;
             * - 'utf16le': 以小端序读取;
             * - 'utf-16le': 以小端序读取;
             * - 'utf-8': ;
             * - 'utf8': ;
             * - 'latin1': ; */
            encoding?:
                | "ascii"
                | "base64"
                | "binary"
                | "hex"
                | "ucs2"
                | "ucs-2"
                | "utf16le"
                | "utf-16le"
                | "utf-8"
                | "utf8"
                | "latin1",
        ): void;
        /** [[ReadResult](https://developers.weixin.qq.com/miniprogram/dev/api/file/ReadResult.html) FileSystemManager.readSync(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.readSync.html)
*
* 读文件
*
* **示例代码**
*
*
* ```js
const fs = wx.getFileSystemManager()
const ab = new ArrayBuffer(1024)
const fd = fs.openSync({
  filePath: `${wx.env.USER_DATA_PATH}/hello.txt`,
  flag: 'a+'
})
const res = fs.readSync({
  fd: fd,
  arrayBuffer: ab,
  length: 10
})
console.log(res)
```
*
* 最低基础库： `2.16.1` */
        readSync(option: ReadSyncOption): ReadResult;
        /** [[Stats](https://developers.weixin.qq.com/miniprogram/dev/api/file/Stats.html) FileSystemManager.fstatSync(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.fstatSync.html)
*
* 同步获取文件的状态信息
*
* **示例代码**
*
*
* ```js
const fs = wx.getFileSystemManager()
const fd = fs.openSync({
  filePath: `${wx.env.USER_DATA_PATH}/hello.txt`,
  flag: 'a+'
})
const stats = fs.fstatSync({fd: fd})
console.log(stats)
```
*
* 最低基础库： `2.16.1` */
        fstatSync(option: FstatSyncOption): Stats;
        /** [[Stats](https://developers.weixin.qq.com/miniprogram/dev/api/file/Stats.html)|Array.&lt;[Stats](https://developers.weixin.qq.com/miniprogram/dev/api/file/Stats.html)&gt; FileSystemManager.statSync(string path, boolean recursive)](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.statSync.html)
         *
         * [FileSystemManager.stat](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.stat.html) 的同步版本 */
        statSync(
            /** 文件/目录路径 (本地路径) */
            path: string,
            /** 是否递归获取目录下的每个文件的 Stats 信息
             *
             * 最低基础库： `2.3.0` */
            recursive?: boolean,
        ): Stats | Stats[];
        /** [[WriteResult](https://developers.weixin.qq.com/miniprogram/dev/api/file/WriteResult.html) FileSystemManager.writeSync(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.writeSync.html)
*
* 同步写入文件
*
* **示例代码**
*
*
* ```js
const fs = wx.getFileSystemManager()
const fd = fs.openSync({
  filePath: `${wx.env.USER_DATA_PATH}/hello.txt`,
  flag: 'a+'
})
const res = fs.writeSync({
  fd: fd,
  data: 'some text'
})
console.log(res.bytesWritten)
```
*
* 最低基础库： `2.16.1` */
        writeSync(option: WriteSyncOption): WriteResult;
        /** [string FileSystemManager.openSync(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.openSync.html)
*
* 同步打开文件，返回文件描述符
*
* **示例代码**
*
*
* ```js
const fs = wx.getFileSystemManager()
const fd = fs.openSync({
  filePath: `${wx.env.USER_DATA_PATH}/hello.txt`,
  flag: 'a+'
})
console.log(fd)
```
*
* 最低基础库： `2.16.1` */
        openSync(option: OpenSyncOption): string;
        /** [string FileSystemManager.saveFileSync(string tempFilePath, string filePath)](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.saveFileSync.html)
         *
         * [FileSystemManager.saveFile](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.saveFile.html) 的同步版本 */
        saveFileSync(
            /** 临时存储文件路径 (本地路径) */
            tempFilePath: string,
            /** 要存储的文件路径 (本地路径) */
            filePath?: string,
        ): string;
        /** [string|ArrayBuffer FileSystemManager.readFileSync(string filePath, string encoding, number position, number length)](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.readFileSync.html)
*
* [FileSystemManager.readFile](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.readFile.html) 的同步版本
*
* **示例代码**
*
*
* ```js
const fs = wx.getFileSystemManager()
fs.readFile({
  filePath: `${wx.env.USER_DATA_PATH}/hello.txt`,
  encoding: 'utf8',
  position: 0,
  success(res) {
    console.log(res.data)
  },
  fail(res) {
    console.error(res)
  }
})

// 同步接口
try {
  const res = fs.readFileSync(`${wx.env.USER_DATA_PATH}/hello.txt`, 'utf8', 0)
  console.log(res)
} catch(e) {
  console.error(e)
}
``` */
        readFileSync(
            /** 要读取的文件的路径 (本地路径) */
            filePath: string,
            /** 指定读取文件的字符编码，如果不传 encoding，则以 ArrayBuffer 格式读取文件的二进制内容
             *
             * 参数 encoding 可选值：
             * - 'ascii': ;
             * - 'base64': ;
             * - 'binary': ;
             * - 'hex': ;
             * - 'ucs2': 以小端序读取;
             * - 'ucs-2': 以小端序读取;
             * - 'utf16le': 以小端序读取;
             * - 'utf-16le': 以小端序读取;
             * - 'utf-8': ;
             * - 'utf8': ;
             * - 'latin1': ; */
            encoding?:
                | "ascii"
                | "base64"
                | "binary"
                | "hex"
                | "ucs2"
                | "ucs-2"
                | "utf16le"
                | "utf-16le"
                | "utf-8"
                | "utf8"
                | "latin1",
            /** 从文件指定位置开始读，如果不指定，则从文件头开始读。读取的范围应该是左闭右开区间 [position, position+length)。有效范围：[0, fileLength - 1]。单位：byte
             *
             * 最低基础库： `2.10.0` */
            position?: number,
            /** 指定文件的长度，如果不指定，则读到文件末尾。有效范围：[1, fileLength]。单位：byte
             *
             * 最低基础库： `2.10.0` */
            length?: number,
        ): string | ArrayBuffer;
        /** [undefined FileSystemManager.closeSync(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.closeSync.html)
*
* 同步关闭文件
*
* **示例代码**
*
*
* ```js
const fs = wx.getFileSystemManager()
const fd = fs.openSync({
  filePath: `${wx.env.USER_DATA_PATH}/hello.txt`,
  flag: 'a+'
})

// 关闭文件
fs.closeSync({fd: fd})
```
*
* 最低基础库： `2.16.1` */
        closeSync(option: CloseSyncOption): undefined;
        /** [undefined FileSystemManager.ftruncateSync(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.ftruncateSync.html)
*
* 对文件内容进行截断操作
*
* **示例代码**
*
*
* ```js
const fs = wx.getFileSystemManager()
const fd = fs.openSync({
  filePath: `${wx.env.USER_DATA_PATH}/hello.txt`,
  flag: 'a+'
})
fs.ftruncateSync({
  fd: fd,
  length: 10 // 从第10个字节开始截断文件
})
```
*
* 最低基础库： `2.16.1` */
        ftruncateSync(option: FtruncateSyncOption): undefined;
        /** [undefined FileSystemManager.truncateSync(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.truncateSync.html)
*
* 对文件内容进行截断操作 (truncate 的同步版本)
*
* **示例代码**
*
*
* ```js
const fs = wx.getFileSystemManager()
fs.truncateSync({
  filePath: `${wx.env.USER_DATA_PATH}/hello.txt`,
  length: 10, // 从第10个字节开始截断
})
```
*
* 最低基础库： `2.16.1` */
        truncateSync(option: TruncateSyncOption): undefined;
    }
    interface FstatSyncError {
        /** 错误信息
         *
         * | 错误信息 | 说明 |
         * | - | - |
         * | bad file descriptor | 无效的文件描述符 |
         * | fail permission denied | 指定的 fd 路径没有读权限 | */ errMsg: string;
        /** 错误码
         *
         * | 错误信息 | 说明 |
         * | - | - |
         * | bad file descriptor | 无效的文件描述符 |
         * | fail permission denied | 指定的 fd 路径没有读权限 | */ errCode: number;
    }
    interface FtruncateSyncError {
        /** 错误信息
         *
         * | 错误信息 | 说明 |
         * | - | - |
         * | bad file descriptor | 无效的文件描述符 |
         * | fail permission denied | 指定的 fd 没有写权限 |
         * | fail the maximum size of the file storage limit is exceeded | 存储空间不足 |
         * | fail sdcard not mounted | android sdcard 挂载失败 | */ errMsg: string;
        /** 错误码
         *
         * | 错误信息 | 说明 |
         * | - | - |
         * | bad file descriptor | 无效的文件描述符 |
         * | fail permission denied | 指定的 fd 没有写权限 |
         * | fail the maximum size of the file storage limit is exceeded | 存储空间不足 |
         * | fail sdcard not mounted | android sdcard 挂载失败 | */ errCode: number;
    }
    interface GeneralCallbackResult {
        errMsg: string;
    }
    interface IBeaconError {
        /** 错误信息
         *
         * | 错误码 | 错误信息 | 说明 |
         * | - | - | - |
         * | 0 | ok | 正常 |
         * | 11000 | unsupport | 系统或设备不支持 |
         * | 11001 | bluetooth service unavailable | 蓝牙服务不可用 |
         * | 11002 | location service unavailable | 位置服务不可用 |
         * | 11003 | already start | 已经开始搜索 |
         * | 11004 | not startBeaconDiscovery | 还未开始搜索 |
         * | 11005 | system error | 系统错误 |
         * | 11006 | invalid data | 参数不正确 | */ errMsg: string;
        /** 错误码
         *
         * | 错误码 | 错误信息 | 说明 |
         * | - | - | - |
         * | 0 | ok | 正常 |
         * | 11000 | unsupport | 系统或设备不支持 |
         * | 11001 | bluetooth service unavailable | 蓝牙服务不可用 |
         * | 11002 | location service unavailable | 位置服务不可用 |
         * | 11003 | already start | 已经开始搜索 |
         * | 11004 | not startBeaconDiscovery | 还未开始搜索 |
         * | 11005 | system error | 系统错误 |
         * | 11006 | invalid data | 参数不正确 | */ errCode: number;
    }
    interface InnerAudioContext {
        /** [InnerAudioContext.destroy()](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/InnerAudioContext.destroy.html)
         *
         * 销毁当前实例 */
        destroy(): void;
        /** [InnerAudioContext.offCanplay(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/InnerAudioContext.offCanplay.html)
         *
         * 取消监听音频进入可以播放状态的事件
         *
         * 最低基础库： `1.9.0` */
        offCanplay(
            /** 音频进入可以播放状态的事件的回调函数 */
            callback?: OffCanplayCallback,
        ): void;
        /** [InnerAudioContext.offEnded(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/InnerAudioContext.offEnded.html)
         *
         * 取消监听音频自然播放至结束的事件
         *
         * 最低基础库： `1.9.0` */
        offEnded(
            /** 音频自然播放至结束的事件的回调函数 */
            callback?: OffEndedCallback,
        ): void;
        /** [InnerAudioContext.offError(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/InnerAudioContext.offError.html)
         *
         * 取消监听音频播放错误事件
         *
         * 最低基础库： `1.9.0` */
        offError(
            /** 音频播放错误事件的回调函数 */
            callback?: InnerAudioContextOffErrorCallback,
        ): void;
        /** [InnerAudioContext.offPause(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/InnerAudioContext.offPause.html)
         *
         * 取消监听音频暂停事件
         *
         * 最低基础库： `1.9.0` */
        offPause(
            /** 音频暂停事件的回调函数 */
            callback?: OffPauseCallback,
        ): void;
        /** [InnerAudioContext.offPlay(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/InnerAudioContext.offPlay.html)
         *
         * 取消监听音频播放事件
         *
         * 最低基础库： `1.9.0` */
        offPlay(
            /** 音频播放事件的回调函数 */
            callback?: OffPlayCallback,
        ): void;
        /** [InnerAudioContext.offSeeked(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/InnerAudioContext.offSeeked.html)
         *
         * 取消监听音频完成跳转操作的事件
         *
         * 最低基础库： `1.9.0` */
        offSeeked(
            /** 音频完成跳转操作的事件的回调函数 */
            callback?: OffSeekedCallback,
        ): void;
        /** [InnerAudioContext.offSeeking(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/InnerAudioContext.offSeeking.html)
         *
         * 取消监听音频进行跳转操作的事件
         *
         * 最低基础库： `1.9.0` */
        offSeeking(
            /** 音频进行跳转操作的事件的回调函数 */
            callback?: OffSeekingCallback,
        ): void;
        /** [InnerAudioContext.offStop(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/InnerAudioContext.offStop.html)
         *
         * 取消监听音频停止事件
         *
         * 最低基础库： `1.9.0` */
        offStop(
            /** 音频停止事件的回调函数 */
            callback?: OffStopCallback,
        ): void;
        /** [InnerAudioContext.offTimeUpdate(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/InnerAudioContext.offTimeUpdate.html)
         *
         * 取消监听音频播放进度更新事件
         *
         * 最低基础库： `1.9.0` */
        offTimeUpdate(
            /** 音频播放进度更新事件的回调函数 */
            callback?: OffTimeUpdateCallback,
        ): void;
        /** [InnerAudioContext.offWaiting(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/InnerAudioContext.offWaiting.html)
         *
         * 取消监听音频加载中事件
         *
         * 最低基础库： `1.9.0` */
        offWaiting(
            /** 音频加载中事件的回调函数 */
            callback?: OffWaitingCallback,
        ): void;
        /** [InnerAudioContext.onCanplay(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/InnerAudioContext.onCanplay.html)
         *
         * 监听音频进入可以播放状态的事件。但不保证后面可以流畅播放 */
        onCanplay(
            /** 音频进入可以播放状态的事件的回调函数 */
            callback: OnCanplayCallback,
        ): void;
        /** [InnerAudioContext.onEnded(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/InnerAudioContext.onEnded.html)
         *
         * 监听音频自然播放至结束的事件 */
        onEnded(
            /** 音频自然播放至结束的事件的回调函数 */
            callback: OnEndedCallback,
        ): void;
        /** [InnerAudioContext.onError(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/InnerAudioContext.onError.html)
         *
         * 监听音频播放错误事件
         *
         * **Tips**
         *
         * 1. errCode=100001 时，如若 errMsg 中有 INNERCODE -11828 ，请先检查 response header 是否缺少 Content-Length
         * 2. errCode=100001 时，如若 errMsg 中有 systemErrCode:200333420，请检查文件编码格式和 fileExtension 是否一致 */
        onError(
            /** 音频播放错误事件的回调函数 */
            callback: InnerAudioContextOnErrorCallback,
        ): void;
        /** [InnerAudioContext.onPause(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/InnerAudioContext.onPause.html)
         *
         * 监听音频暂停事件 */
        onPause(
            /** 音频暂停事件的回调函数 */
            callback: OnPauseCallback,
        ): void;
        /** [InnerAudioContext.onPlay(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/InnerAudioContext.onPlay.html)
         *
         * 监听音频播放事件 */
        onPlay(
            /** 音频播放事件的回调函数 */
            callback: OnPlayCallback,
        ): void;
        /** [InnerAudioContext.onSeeked(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/InnerAudioContext.onSeeked.html)
         *
         * 监听音频完成跳转操作的事件 */
        onSeeked(
            /** 音频完成跳转操作的事件的回调函数 */
            callback: OnSeekedCallback,
        ): void;
        /** [InnerAudioContext.onSeeking(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/InnerAudioContext.onSeeking.html)
         *
         * 监听音频进行跳转操作的事件 */
        onSeeking(
            /** 音频进行跳转操作的事件的回调函数 */
            callback: OnSeekingCallback,
        ): void;
        /** [InnerAudioContext.onStop(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/InnerAudioContext.onStop.html)
         *
         * 监听音频停止事件 */
        onStop(
            /** 音频停止事件的回调函数 */
            callback: InnerAudioContextOnStopCallback,
        ): void;
        /** [InnerAudioContext.onTimeUpdate(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/InnerAudioContext.onTimeUpdate.html)
         *
         * 监听音频播放进度更新事件 */
        onTimeUpdate(
            /** 音频播放进度更新事件的回调函数 */
            callback: OnTimeUpdateCallback,
        ): void;
        /** [InnerAudioContext.onWaiting(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/InnerAudioContext.onWaiting.html)
         *
         * 监听音频加载中事件。当音频因为数据不足，需要停下来加载时会触发 */
        onWaiting(
            /** 音频加载中事件的回调函数 */
            callback: OnWaitingCallback,
        ): void;
        /** [InnerAudioContext.pause()](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/InnerAudioContext.pause.html)
         *
         * 暂停。暂停后的音频再播放会从暂停处开始播放 */
        pause(): void;
        /** [InnerAudioContext.play()](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/InnerAudioContext.play.html)
         *
         * 播放 */
        play(): void;
        /** [InnerAudioContext.seek(number position)](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/InnerAudioContext.seek.html)
         *
         * 跳转到指定位置 */
        seek(
            /** 跳转的时间，单位 s。精确到小数点后 3 位，即支持 ms 级别精确度 */
            position: number,
        ): void;
        /** [InnerAudioContext.stop()](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/InnerAudioContext.stop.html)
         *
         * 停止。停止后的音频再播放会从头开始播放。 */
        stop(): void;
    }
    interface IntersectionObserver {
        /** [IntersectionObserver.disconnect()](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/IntersectionObserver.disconnect.html)
         *
         * 停止监听。回调函数将不再触发 */
        disconnect(): void;
        /** [IntersectionObserver.observe(string targetSelector, function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/IntersectionObserver.observe.html)
         *
         * 指定目标节点并开始监听相交状态变化情况 */
        observe(
            /** 选择器 */
            targetSelector: string,
            /** 监听相交状态变化的回调函数 */
            callback: IntersectionObserverObserveCallback,
        ): void;
        /** [[IntersectionObserver](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/IntersectionObserver.html) IntersectionObserver.relativeTo(string selector, Object margins)](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/IntersectionObserver.relativeTo.html)
         *
         * 使用选择器指定一个节点，作为参照区域之一。 */
        relativeTo(
            /** 选择器 */
            selector: string,
            /** 用来扩展（或收缩）参照节点布局区域的边界 */
            margins?: Margins,
        ): IntersectionObserver;
        /** [[IntersectionObserver](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/IntersectionObserver.html) IntersectionObserver.relativeToViewport(Object margins)](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/IntersectionObserver.relativeToViewport.html)
*
* 指定页面显示区域作为参照区域之一
*
* **示例代码**
*
*
* 下面的示例代码中，如果目标节点（用选择器 .target-class 指定）进入显示区域以下 100px 时，就会触发回调函数。
* ```javascript
Page({
  onLoad: function(){
    wx.createIntersectionObserver().relativeToViewport({bottom: 100}).observe('.target-class', (res) => {
      res.intersectionRatio // 相交区域占目标节点的布局区域的比例
      res.intersectionRect // 相交区域
      res.intersectionRect.left // 相交区域的左边界坐标
      res.intersectionRect.top // 相交区域的上边界坐标
      res.intersectionRect.width // 相交区域的宽度
      res.intersectionRect.height // 相交区域的高度
    })
  }
})
``` */
        relativeToViewport(
            /** 用来扩展（或收缩）参照节点布局区域的边界 */
            margins?: Margins,
        ): IntersectionObserver;
    }
    interface InterstitialAd {
        /** [InterstitialAd.destroy()](https://developers.weixin.qq.com/miniprogram/dev/api/ad/InterstitialAd.destroy.html)
         *
         * 销毁插屏广告实例。
         *
         * 最低基础库： `2.8.0` */
        destroy(): void;
        /** [InterstitialAd.offClose(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/ad/InterstitialAd.offClose.html)
         *
         * 取消监听插屏广告关闭事件 */
        offClose(
            /** 插屏广告关闭事件的回调函数 */
            callback?: UDPSocketOffCloseCallback,
        ): void;
        /** [InterstitialAd.offError(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/ad/InterstitialAd.offError.html)
         *
         * 取消监听插屏错误事件 */
        offError(
            /** 插屏错误事件的回调函数 */
            callback?: InterstitialAdOffErrorCallback,
        ): void;
        /** [InterstitialAd.offLoad(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/ad/InterstitialAd.offLoad.html)
         *
         * 取消监听插屏广告加载事件 */
        offLoad(
            /** 插屏广告加载事件的回调函数 */
            callback?: OffLoadCallback,
        ): void;
        /** [InterstitialAd.onClose(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/ad/InterstitialAd.onClose.html)
         *
         * 监听插屏广告关闭事件。 */
        onClose(
            /** 插屏广告关闭事件的回调函数 */
            callback: UDPSocketOnCloseCallback,
        ): void;
        /** [InterstitialAd.onError(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/ad/InterstitialAd.onError.html)
         *
         * 监听插屏错误事件。
         *
         * **错误码信息与解决方案表**
         *
         *  错误码是通过onError获取到的错误信息。调试期间，可以通过异常返回来捕获信息。
         *  在小程序发布上线之后，如果遇到异常问题，可以在[“运维中心“](https://mp.weixin.qq.com/)里面搜寻错误日志，还可以针对异常返回加上适当的监控信息。
         *
         * | 代码 | 异常情况 | 理由 | 解决方案 |
         * | ------ | -------------- | --------------- | -------------------------- |
         * | 1000  | 后端错误调用失败  | 该项错误不是开发者的异常情况 | 一般情况下忽略一段时间即可恢复。 |
         * | 1001  | 参数错误    | 使用方法错误 | 可以前往developers.weixin.qq.com确认具体教程（小程序和小游戏分别有各自的教程，可以在顶部选项中，“设计”一栏的右侧进行切换。|
         * | 1002  | 广告单元无效    | 可能是拼写错误、或者误用了其他APP的广告ID | 请重新前往mp.weixin.qq.com确认广告位ID。 |
         * | 1003  | 内部错误    | 该项错误不是开发者的异常情况 | 一般情况下忽略一段时间即可恢复。|
         * | 1004  | 无适合的广告   | 广告不是每一次都会出现，这次没有出现可能是由于该用户不适合浏览广告 | 属于正常情况，且开发者需要针对这种情况做形态上的兼容。 |
         * | 1005  | 广告组件审核中  | 你的广告正在被审核，无法展现广告 | 请前往mp.weixin.qq.com确认审核状态，且开发者需要针对这种情况做形态上的兼容。|
         * | 1006  | 广告组件被驳回  | 你的广告审核失败，无法展现广告 | 请前往mp.weixin.qq.com确认审核状态，且开发者需要针对这种情况做形态上的兼容。|
         * | 1007  | 广告组件被驳回  | 你的广告能力已经被封禁，封禁期间无法展现广告 | 请前往mp.weixin.qq.com确认小程序广告封禁状态。 |
         * | 1008  | 广告单元已关闭  | 该广告位的广告能力已经被关闭 | 请前往mp.weixin.qq.com重新打开对应广告位的展现。| */
        onError(
            /** 插屏错误事件的回调函数 */
            callback: InterstitialAdOnErrorCallback,
        ): void;
        /** [InterstitialAd.onLoad(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/ad/InterstitialAd.onLoad.html)
         *
         * 监听插屏广告加载事件。 */
        onLoad(
            /** 插屏广告加载事件的回调函数 */
            callback: OnLoadCallback,
        ): void;
        /** [Promise InterstitialAd.load()](https://developers.weixin.qq.com/miniprogram/dev/api/ad/InterstitialAd.load.html)
         *
         * 加载插屏广告。
         *
         * 最低基础库： `2.8.0` */
        load(): Promise<any>;
        /** [Promise InterstitialAd.show()](https://developers.weixin.qq.com/miniprogram/dev/api/ad/InterstitialAd.show.html)
         *
         * 显示插屏广告。
         *
         * **错误码信息表**
         *
         *  如果插屏广告显示失败，InterstitialAd.show() 方法会返回一个rejected Promise，开发者可以获取到错误码及对应的错误信息。
         *
         * | 代码 | 异常情况 | 理由 |
         * | ------ | -------------- | -------------------------- |
         * | 2001  | 触发频率限制  | 小程序启动一定时间内不允许展示插屏广告 |
         * | 2002  | 触发频率限制  | 距离小程序插屏广告或者激励视频广告上次播放时间间隔不足，不允许展示插屏广告 |
         * | 2003  | 触发频率限制  | 当前正在播放激励视频广告或者插屏广告，不允许再次展示插屏广告 |
         * | 2004  | 广告渲染失败  | 该项错误不是开发者的异常情况，或因小程序页面切换导致广告渲染失败 |
         * | 2005  | 广告调用异常  | 插屏广告实例不允许跨页面调用 | */
        show(): Promise<any>;
    }
    interface IsoDep {
        /** [IsoDep.close(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/IsoDep.close.html)
         *
         * 断开连接
         *
         * 最低基础库： `2.11.2` */
        close(option?: NdefCloseOption): void;
        /** [IsoDep.connect(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/IsoDep.connect.html)
         *
         * 连接 NFC 标签
         *
         * 最低基础库： `2.11.2` */
        connect(option?: NdefConnectOption): void;
        /** [IsoDep.getHistoricalBytes(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/IsoDep.getHistoricalBytes.html)
         *
         * 获取复位信息
         *
         * 最低基础库： `2.11.2` */
        getHistoricalBytes(option?: GetHistoricalBytesOption): void;
        /** [IsoDep.getMaxTransceiveLength(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/IsoDep.getMaxTransceiveLength.html)
         *
         * 获取最大传输长度
         *
         * 最低基础库： `2.11.2` */
        getMaxTransceiveLength(option?: GetMaxTransceiveLengthOption): void;
        /** [IsoDep.isConnected(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/IsoDep.isConnected.html)
         *
         * 检查是否已连接
         *
         * 最低基础库： `2.11.2` */
        isConnected(option?: IsConnectedOption): void;
        /** [IsoDep.setTimeout(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/IsoDep.setTimeout.html)
         *
         * 设置超时时间
         *
         * 最低基础库： `2.11.2` */
        setTimeout(option: SetTimeoutOption): void;
        /** [IsoDep.transceive(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/IsoDep.transceive.html)
         *
         * 发送数据
         *
         * 最低基础库： `2.11.2` */
        transceive(option: TransceiveOption): void;
    }
    interface JoinVoIPChatError {
        /** 错误信息
         *
         * | 错误码 | 错误信息 | 说明 |
         * | - | - | - |
         * | -1 | 当前已在房间内 |  |
         * | -2 | 录音设备被占用，可能是当前正在使用微信内语音通话或系统通话 |  |
         * | -3 | 加入会话期间退出（可能是用户主动退出，或者退后台、来电等原因），因此加入失败 |  |
         * | -1000 | 系统错误 |  | */ errMsg: string;
        /** 错误码
         *
         * | 错误码 | 错误信息 | 说明 |
         * | - | - | - |
         * | -1 | 当前已在房间内 |  |
         * | -2 | 录音设备被占用，可能是当前正在使用微信内语音通话或系统通话 |  |
         * | -3 | 加入会话期间退出（可能是用户主动退出，或者退后台、来电等原因），因此加入失败 |  |
         * | -1000 | 系统错误 |  | */ errCode: number;
    }
    interface LivePlayerContext {
        /** [LivePlayerContext.exitFullScreen(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePlayerContext.exitFullScreen.html)
         *
         * 退出全屏 */
        exitFullScreen(option?: ExitFullScreenOption): void;
        /** [LivePlayerContext.exitPictureInPicture(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePlayerContext.exitPictureInPicture.html)
         *
         * 退出小窗，该方法可在任意页面调用 */
        exitPictureInPicture(option?: ExitPictureInPictureOption): void;
        /** [LivePlayerContext.mute(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePlayerContext.mute.html)
         *
         * 静音 */
        mute(option?: MuteOption): void;
        /** [LivePlayerContext.pause(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePlayerContext.pause.html)
         *
         * 暂停
         *
         * 最低基础库： `1.9.90` */
        pause(option?: PauseOption): void;
        /** [LivePlayerContext.play(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePlayerContext.play.html)
         *
         * 播放 */
        play(option?: PlayOption): void;
        /** [LivePlayerContext.requestFullScreen(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePlayerContext.requestFullScreen.html)
         *
         * 进入全屏 */
        requestFullScreen(
            option: LivePlayerContextRequestFullScreenOption,
        ): void;
        /** [LivePlayerContext.requestPictureInPicture(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePlayerContext.requestPictureInPicture.html)
         *
         * 进入小窗
         *
         * 最低基础库： `2.15.0` */
        requestPictureInPicture(option?: RequestPictureInPictureOption): void;
        /** [LivePlayerContext.resume(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePlayerContext.resume.html)
         *
         * 恢复
         *
         * 最低基础库： `1.9.90` */
        resume(option?: ResumeOption): void;
        /** [LivePlayerContext.snapshot(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePlayerContext.snapshot.html)
         *
         * 截图
         *
         * 最低基础库： `2.7.1` */
        snapshot(option: LivePlayerContextSnapshotOption): void;
        /** [LivePlayerContext.stop(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePlayerContext.stop.html)
         *
         * 停止 */
        stop(option?: StopOption): void;
    }
    interface LivePusherContext {
        /** [LivePusherContext.pause(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePusherContext.pause.html)
         *
         * 暂停推流 */
        pause(option?: PauseOption): void;
        /** [LivePusherContext.pauseBGM(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePusherContext.pauseBGM.html)
         *
         * 暂停背景音
         *
         * 最低基础库： `2.4.0` */
        pauseBGM(option?: PauseBGMOption): void;
        /** [LivePusherContext.playBGM(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePusherContext.playBGM.html)
         *
         * 播放背景音
         *
         * 最低基础库： `2.4.0` */
        playBGM(option: PlayBGMOption): void;
        /** [LivePusherContext.resume(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePusherContext.resume.html)
         *
         * 恢复推流 */
        resume(option?: ResumeOption): void;
        /** [LivePusherContext.resumeBGM(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePusherContext.resumeBGM.html)
         *
         * 恢复背景音
         *
         * 最低基础库： `2.4.0` */
        resumeBGM(option?: ResumeBGMOption): void;
        /** [LivePusherContext.sendMessage(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePusherContext.sendMessage.html)
         *
         * 发送SEI消息
         *
         * 最低基础库： `2.10.0` */
        sendMessage(option?: SendMessageOption): void;
        /** [LivePusherContext.setBGMVolume(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePusherContext.setBGMVolume.html)
         *
         * 设置背景音音量
         *
         * 最低基础库： `2.4.0` */
        setBGMVolume(option: SetBGMVolumeOption): void;
        /** [LivePusherContext.setMICVolume(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePusherContext.setMICVolume.html)
         *
         * 设置麦克风音量
         *
         * 最低基础库： `2.10.0` */
        setMICVolume(option: SetMICVolumeOption): void;
        /** [LivePusherContext.snapshot(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePusherContext.snapshot.html)
         *
         * 快照
         *
         * 最低基础库： `1.9.90` */
        snapshot(option: LivePusherContextSnapshotOption): void;
        /** [LivePusherContext.start(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePusherContext.start.html)
         *
         * 开始推流，同时开启摄像头预览 */
        start(option?: CameraFrameListenerStartOption): void;
        /** [LivePusherContext.startPreview(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePusherContext.startPreview.html)
         *
         * 开启摄像头预览
         *
         * 最低基础库： `2.7.0` */
        startPreview(option?: StartPreviewOption): void;
        /** [LivePusherContext.stop(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePusherContext.stop.html)
         *
         * 停止推流，同时停止摄像头预览 */
        stop(option?: StopOption): void;
        /** [LivePusherContext.stopBGM(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePusherContext.stopBGM.html)
         *
         * 停止背景音
         *
         * 最低基础库： `2.4.0` */
        stopBGM(option?: StopBGMOption): void;
        /** [LivePusherContext.stopPreview(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePusherContext.stopPreview.html)
         *
         * 关闭摄像头预览
         *
         * 最低基础库： `2.7.0` */
        stopPreview(option?: StopPreviewOption): void;
        /** [LivePusherContext.switchCamera(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePusherContext.switchCamera.html)
         *
         * 切换前后摄像头 */
        switchCamera(option?: SwitchCameraOption): void;
        /** [LivePusherContext.toggleTorch(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePusherContext.toggleTorch.html)
         *
         * 切换手电筒
         *
         * 最低基础库： `2.1.0` */
        toggleTorch(option?: ToggleTorchOption): void;
    }
    interface LogManager {
        /** [LogManager.debug()](https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/LogManager.debug.html)
         *
         * 写 debug 日志 */
        debug(
            /** 日志内容，可以有任意多个。每次调用的参数的总大小不超过100Kb */
            ...args: any[]
        ): void;
        /** [LogManager.info()](https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/LogManager.info.html)
         *
         * 写 info 日志 */
        info(
            /** 日志内容，可以有任意多个。每次调用的参数的总大小不超过100Kb */
            ...args: any[]
        ): void;
        /** [LogManager.log()](https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/LogManager.log.html)
         *
         * 写 log 日志 */
        log(
            /** 日志内容，可以有任意多个。每次调用的参数的总大小不超过100Kb */
            ...args: any[]
        ): void;
        /** [LogManager.warn()](https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/LogManager.warn.html)
         *
         * 写 warn 日志 */
        warn(
            /** 日志内容，可以有任意多个。每次调用的参数的总大小不超过100Kb */
            ...args: any[]
        ): void;
    }
    interface MapContext {
        /** [MapContext.addCustomLayer(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/media/map/MapContext.addCustomLayer.html)
         *
         * 添加个性化图层。图层创建[参考文档](https://lbs.qq.com/dev/console/customLayer/create)
         *
         * 最低基础库： `2.12.0` */
        addCustomLayer(option: AddCustomLayerOption): void;
        /** [MapContext.addGroundOverlay(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/media/map/MapContext.addGroundOverlay.html)
         *
         * 创建自定义图片图层，图片会随着地图缩放而缩放。
         *
         * 最低基础库： `2.14.0` */
        addGroundOverlay(option: AddGroundOverlayOption): void;
        /** [MapContext.addMarkers(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/media/map/MapContext.addMarkers.html)
         *
         * 添加 marker。
         *
         * 最低基础库： `2.13.0` */
        addMarkers(option: AddMarkersOption): void;
        /** [MapContext.fromScreenLocation(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/media/map/MapContext.fromScreenLocation.html)
         *
         * 获取屏幕上的点对应的经纬度，坐标原点为地图左上角。
         *
         * 最低基础库： `2.14.0` */
        fromScreenLocation(option: FromScreenLocationOption): void;
        /** [MapContext.getCenterLocation(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/media/map/MapContext.getCenterLocation.html)
         *
         * 获取当前地图中心的经纬度。返回的是 gcj02 坐标系，可以用于 [wx.openLocation()](https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.openLocation.html) */
        getCenterLocation(option: GetCenterLocationOption): void;
        /** [MapContext.getRegion(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/media/map/MapContext.getRegion.html)
         *
         * 获取当前地图的视野范围
         *
         * 最低基础库： `1.4.0` */
        getRegion(option?: GetRegionOption): void;
        /** [MapContext.getRotate(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/media/map/MapContext.getRotate.html)
         *
         * 获取当前地图的旋转角
         *
         * 最低基础库： `2.8.0` */
        getRotate(option?: GetRotateOption): void;
        /** [MapContext.getScale(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/media/map/MapContext.getScale.html)
         *
         * 获取当前地图的缩放级别
         *
         * 最低基础库： `1.4.0` */
        getScale(option?: GetScaleOption): void;
        /** [MapContext.getSkew(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/media/map/MapContext.getSkew.html)
         *
         * 获取当前地图的倾斜角
         *
         * 最低基础库： `2.8.0` */
        getSkew(option?: GetSkewOption): void;
        /** [MapContext.includePoints(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/media/map/MapContext.includePoints.html)
         *
         * 缩放视野展示所有经纬度
         *
         * 最低基础库： `1.2.0` */
        includePoints(option: IncludePointsOption): void;
        /** [MapContext.initMarkerCluster(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/media/map/MapContext.initMarkerCluster.html)
         *
         * 初始化点聚合的配置，未调用时采用默认配置。
         *
         * 最低基础库： `2.13.0` */
        initMarkerCluster(option: InitMarkerClusterOption): void;
        /** [MapContext.moveAlong(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/media/map/MapContext.moveAlong.html)
         *
         * 沿指定路径移动 `marker`，用于轨迹回放等场景。动画完成时触发回调事件，若动画进行中，对同一 `marker` 再次调用 `moveAlong` 方法，前一次的动画将被打断。
         *
         * 最低基础库： `2.13.0` */
        moveAlong(option: MoveAlongOption): void;
        /** [MapContext.moveToLocation(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/media/map/MapContext.moveToLocation.html)
         *
         * 将地图中心移置当前定位点，此时需设置地图组件 show-location 为true。[2.8.0](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) 起支持将地图中心移动到指定位置。
         *
         * 最低基础库： `1.2.0` */
        moveToLocation(option?: MoveToLocationOption): void;
        /** [MapContext.on(string event, function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/media/map/MapContext.on.html)
*
* 监听地图事件。
*
* ### markerClusterCreate
*
* 缩放或拖动导致新的聚合簇产生时触发，仅返回新创建的聚合簇信息。
*
* #### 返回参数
*
* | 参数      | 类型   | 说明      |
* | --------- | ------ | --------- |
* | clusters | `Array&lt;ClusterInfo&gt;` | 聚合簇数据 |
*
* ### markerClusterClick
*
* 聚合簇的点击事件。
*
* #### 返回参数
*
* | 参数      | 类型          | 说明      |
* | --------- | ------------- | --------- |
* | cluster   | ClusterInfo   | 聚合簇    |
*
*
* #### ClusterInfo 结构
*
* | 参数       | 类型                 | 说明                       |
* | ---------- | -------------------- | -------------------------- |
* | clusterId  | Number               | 聚合簇的 id               |
* | center     | LatLng               | 聚合簇的坐标             |
* | markerIds | `Array&lt;Number&gt;` | 该聚合簇内的点标记数据数组 |
*
* **示例代码**
*
*
*
* ```js
  MapContext.on('markerClusterCreate', (res) => {})
  MapContext.on('markerClusterClick', (res) => {})
```
*
* 最低基础库： `2.13.0` */
        on(
            /** 事件名
             *
             * 参数 event 可选值：
             * - 'markerClusterCreate': ;
             * - 'markerClusterClick': ; */
            event: "markerClusterCreate" | "markerClusterClick",
            /** 事件的回调函数 */
            callback: (...args: any[]) => any,
        ): void;
        /** [MapContext.openMapApp(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/media/map/MapContext.openMapApp.html)
         *
         * 拉起地图APP选择导航。
         *
         * 最低基础库： `2.14.0` */
        openMapApp(option: OpenMapAppOption): void;
        /** [MapContext.removeCustomLayer(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/media/map/MapContext.removeCustomLayer.html)
         *
         * 移除个性化图层。
         *
         * 最低基础库： `2.12.0` */
        removeCustomLayer(option: RemoveCustomLayerOption): void;
        /** [MapContext.removeGroundOverlay(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/media/map/MapContext.removeGroundOverlay.html)
         *
         * 移除自定义图片图层。
         *
         * 最低基础库： `2.14.0` */
        removeGroundOverlay(option: RemoveGroundOverlayOption): void;
        /** [MapContext.removeMarkers(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/media/map/MapContext.removeMarkers.html)
         *
         * 移除 marker。
         *
         * 最低基础库： `2.13.0` */
        removeMarkers(option: RemoveMarkersOption): void;
        /** [MapContext.setCenterOffset(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/media/map/MapContext.setCenterOffset.html)
         *
         * 设置地图中心点偏移，向后向下为增长，屏幕比例范围(0.25~0.75)，默认偏移为[0.5, 0.5]
         *
         * 最低基础库： `2.10.0` */
        setCenterOffset(option: SetCenterOffsetOption): void;
        /** [MapContext.setLocMarkerIcon(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/media/map/MapContext.setLocMarkerIcon.html)
         *
         * 设置定位点图标，支持网络路径、本地路径、代码包路径
         *
         * 最低基础库： `2.16.0` */
        setLocMarkerIcon(option: SetLocMarkerIconOption): void;
        /** [MapContext.toScreenLocation(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/media/map/MapContext.toScreenLocation.html)
         *
         * 获取经纬度对应的屏幕坐标，坐标原点为地图左上角。
         *
         * 最低基础库： `2.14.0` */
        toScreenLocation(option: ToScreenLocationOption): void;
        /** [MapContext.translateMarker(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/media/map/MapContext.translateMarker.html)
         *
         * 平移marker，带动画。
         *
         * 最低基础库： `1.2.0` */
        translateMarker(option: TranslateMarkerOption): void;
        /** [MapContext.updateGroundOverlay(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/media/map/MapContext.updateGroundOverlay.html)
         *
         * 更新自定义图片图层。
         *
         * 最低基础库： `2.14.0` */
        updateGroundOverlay(option: UpdateGroundOverlayOption): void;
    }
    interface MediaAudioPlayer {
        /** [Promise MediaAudioPlayer.addAudioSource([VideoDecoder](https://developers.weixin.qq.com/miniprogram/dev/api/media/video-decoder/VideoDecoder.html) source)](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/MediaAudioPlayer.addAudioSource.html)
         *
         * 添加音频源 */
        addAudioSource(
            /** [VideoDecoder](https://developers.weixin.qq.com/miniprogram/dev/api/media/video-decoder/VideoDecoder.html)
             *
             * 视频解码器实例。作为音频源添加到音频播放器中 */
            source: VideoDecoder,
        ): Promise<any>;
        /** [Promise MediaAudioPlayer.destroy()](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/MediaAudioPlayer.destroy.html)
         *
         * 销毁播放器 */
        destroy(): Promise<any>;
        /** [Promise MediaAudioPlayer.removeAudioSource([VideoDecoder](https://developers.weixin.qq.com/miniprogram/dev/api/media/video-decoder/VideoDecoder.html) source)](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/MediaAudioPlayer.removeAudioSource.html)
         *
         * 移除音频源 */
        removeAudioSource(
            /** [VideoDecoder](https://developers.weixin.qq.com/miniprogram/dev/api/media/video-decoder/VideoDecoder.html)
             *
             * 视频解码器实例 */
            source: VideoDecoder,
        ): Promise<any>;
        /** [Promise MediaAudioPlayer.start()](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/MediaAudioPlayer.start.html)
         *
         * 启动播放器 */
        start(): Promise<any>;
        /** [Promise MediaAudioPlayer.stop()](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/MediaAudioPlayer.stop.html)
         *
         * 停止播放器 */
        stop(): Promise<any>;
    }
    interface MediaContainer {
        /** [MediaContainer.addTrack([MediaTrack](https://developers.weixin.qq.com/miniprogram/dev/api/media/video-processing/MediaTrack.html) track)](https://developers.weixin.qq.com/miniprogram/dev/api/media/video-processing/MediaContainer.addTrack.html)
         *
         * 将音频或视频轨道添加到容器
         *
         * 最低基础库： `2.9.0` */
        addTrack(
            /** [MediaTrack](https://developers.weixin.qq.com/miniprogram/dev/api/media/video-processing/MediaTrack.html)
             *
             * 要添加的音频或视频轨道 */
            track: MediaTrack,
        ): void;
        /** [MediaContainer.destroy()](https://developers.weixin.qq.com/miniprogram/dev/api/media/video-processing/MediaContainer.destroy.html)
         *
         * 将容器销毁，释放资源
         *
         * 最低基础库： `2.9.0` */
        destroy(): void;
        /** [MediaContainer.export()](https://developers.weixin.qq.com/miniprogram/dev/api/media/video-processing/MediaContainer.export.html)
         *
         * 将容器内的轨道合并并导出视频文件
         *
         * 最低基础库： `2.9.0` */
        export(): void;
        /** [MediaContainer.extractDataSource(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/media/video-processing/MediaContainer.extractDataSource.html)
         *
         * 将传入的视频源分离轨道。不会自动将轨道添加到待合成的容器里。
         *
         * 最低基础库： `2.9.0` */
        extractDataSource(option: ExtractDataSourceOption): void;
        /** [MediaContainer.removeTrack([MediaTrack](https://developers.weixin.qq.com/miniprogram/dev/api/media/video-processing/MediaTrack.html) track)](https://developers.weixin.qq.com/miniprogram/dev/api/media/video-processing/MediaContainer.removeTrack.html)
         *
         * 将音频或视频轨道从容器中移除
         *
         * 最低基础库： `2.9.0` */
        removeTrack(
            /** [MediaTrack](https://developers.weixin.qq.com/miniprogram/dev/api/media/video-processing/MediaTrack.html)
             *
             * 要移除的音频或视频轨道 */
            track: MediaTrack,
        ): void;
    }
    interface MediaQueryObserver {
        /** [MediaQueryObserver.disconnect()](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/MediaQueryObserver.disconnect.html)
         *
         * 停止监听。回调函数将不再触发 */
        disconnect(): void;
        /** [MediaQueryObserver.observe(Object descriptor, function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/MediaQueryObserver.observe.html)
         *
         * 开始监听页面 media query 变化情况 */
        observe(
            /** media query 描述符 */
            descriptor: ObserveDescriptor,
            /** 监听 media query 状态变化的回调函数 */
            callback: MediaQueryObserverObserveCallback,
        ): void;
    }
    interface MediaRecorder {
        /** [MediaRecorder.off(string eventName, function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/media/media-recorder/MediaRecorder.off.html)
         *
         * 取消监听录制事件。当对应事件触发时，该回调函数不再执行。
         *
         * 最低基础库： `2.11.0` */
        off(
            /** 事件名 */
            eventName: string,
            /** 事件触发时执行的回调函数 */
            callback: (...args: any[]) => any,
        ): void;
        /** [MediaRecorder.on(string eventName, function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/media/media-recorder/MediaRecorder.on.html)
         *
         * 注册监听录制事件的回调函数。当对应事件触发时，回调函数会被执行。
         *
         * 最低基础库： `2.11.0` */
        on(
            /** 事件名
             *
             * 参数 eventName 可选值：
             * - 'start': 录制开始事件。;
             * - 'stop': 录制结束事件。返回 {tempFilePath, duration, fileSize};
             * - 'pause': 录制暂停事件。;
             * - 'resume': 录制继续事件。;
             * - 'timeupdate': 录制时间更新事件。; */
            eventName: "start" | "stop" | "pause" | "resume" | "timeupdate",
            /** 事件触发时执行的回调函数 */
            callback: (...args: any[]) => any,
        ): void;
        /** [Promise MediaRecorder.destroy()](https://developers.weixin.qq.com/miniprogram/dev/api/media/media-recorder/MediaRecorder.destroy.html)
         *
         * 销毁录制器
         *
         * 最低基础库： `2.11.0` */
        destroy(): Promise<any>;
        /** [Promise MediaRecorder.pause()](https://developers.weixin.qq.com/miniprogram/dev/api/media/media-recorder/MediaRecorder.pause.html)
         *
         * 暂停录制
         *
         * 最低基础库： `2.11.0` */
        pause(): Promise<any>;
        /** [Promise MediaRecorder.requestFrame(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/media/media-recorder/MediaRecorder.requestFrame.html)
         *
         * 请求下一帧录制，在 callback 里完成一帧渲染后开始录制当前帧
         *
         * 最低基础库： `2.11.0` */
        requestFrame(callback: (...args: any[]) => any): Promise<any>;
        /** [Promise MediaRecorder.resume()](https://developers.weixin.qq.com/miniprogram/dev/api/media/media-recorder/MediaRecorder.resume.html)
         *
         * 恢复录制
         *
         * 最低基础库： `2.11.0` */
        resume(): Promise<any>;
        /** [Promise MediaRecorder.start()](https://developers.weixin.qq.com/miniprogram/dev/api/media/media-recorder/MediaRecorder.start.html)
         *
         * 开始录制
         *
         * 最低基础库： `2.11.0` */
        start(): Promise<any>;
        /** [Promise MediaRecorder.stop()](https://developers.weixin.qq.com/miniprogram/dev/api/media/media-recorder/MediaRecorder.stop.html)
         *
         * 结束录制
         *
         * 最低基础库： `2.11.0` */
        stop(): Promise<any>;
    }
    interface MifareClassic {
        /** [MifareClassic.close(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/MifareClassic.close.html)
         *
         * 断开连接
         *
         * 最低基础库： `2.11.2` */
        close(option?: NdefCloseOption): void;
        /** [MifareClassic.connect(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/MifareClassic.connect.html)
         *
         * 连接 NFC 标签
         *
         * 最低基础库： `2.11.2` */
        connect(option?: NdefConnectOption): void;
        /** [MifareClassic.getMaxTransceiveLength(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/MifareClassic.getMaxTransceiveLength.html)
         *
         * 获取最大传输长度
         *
         * 最低基础库： `2.11.2` */
        getMaxTransceiveLength(option?: GetMaxTransceiveLengthOption): void;
        /** [MifareClassic.isConnected(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/MifareClassic.isConnected.html)
         *
         * 检查是否已连接
         *
         * 最低基础库： `2.11.2` */
        isConnected(option?: IsConnectedOption): void;
        /** [MifareClassic.setTimeout(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/MifareClassic.setTimeout.html)
         *
         * 设置超时时间
         *
         * 最低基础库： `2.11.2` */
        setTimeout(option: SetTimeoutOption): void;
        /** [MifareClassic.transceive(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/MifareClassic.transceive.html)
         *
         * 发送数据
         *
         * 最低基础库： `2.11.2` */
        transceive(option: TransceiveOption): void;
    }
    interface MifareUltralight {
        /** [MifareUltralight.close(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/MifareUltralight.close.html)
         *
         * 断开连接
         *
         * 最低基础库： `2.11.2` */
        close(option?: NdefCloseOption): void;
        /** [MifareUltralight.connect(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/MifareUltralight.connect.html)
         *
         * 连接 NFC 标签
         *
         * 最低基础库： `2.11.2` */
        connect(option?: NdefConnectOption): void;
        /** [MifareUltralight.getMaxTransceiveLength(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/MifareUltralight.getMaxTransceiveLength.html)
         *
         * 获取最大传输长度
         *
         * 最低基础库： `2.11.2` */
        getMaxTransceiveLength(option?: GetMaxTransceiveLengthOption): void;
        /** [MifareUltralight.isConnected(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/MifareUltralight.isConnected.html)
         *
         * 检查是否已连接
         *
         * 最低基础库： `2.11.2` */
        isConnected(option?: IsConnectedOption): void;
        /** [MifareUltralight.setTimeout(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/MifareUltralight.setTimeout.html)
         *
         * 设置超时时间
         *
         * 最低基础库： `2.11.2` */
        setTimeout(option: SetTimeoutOption): void;
        /** [MifareUltralight.transceive(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/MifareUltralight.transceive.html)
         *
         * 发送数据
         *
         * 最低基础库： `2.11.2` */
        transceive(option: TransceiveOption): void;
    }
    interface NFCAdapter {
        /** [NFCAdapter.offDiscovered(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/NFCAdapter.offDiscovered.html)
         *
         * 取消监听 NFC Tag
         *
         * 最低基础库： `2.11.2` */
        offDiscovered(
            /** 的回调函数 */
            callback?: OffDiscoveredCallback,
        ): void;
        /** [NFCAdapter.onDiscovered(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/NFCAdapter.onDiscovered.html)
         *
         * 监听 NFC Tag
         *
         * 最低基础库： `2.11.2` */
        onDiscovered(
            /** 的回调函数 */
            callback: OnDiscoveredCallback,
        ): void;
        /** [NFCAdapter.startDiscovery(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/NFCAdapter.startDiscovery.html)
         *
         * 最低基础库： `2.11.2` */
        startDiscovery(option?: StartDiscoveryOption): void;
        /** [NFCAdapter.stopDiscovery(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/NFCAdapter.stopDiscovery.html)
         *
         * 最低基础库： `2.11.2` */
        stopDiscovery(option?: StopDiscoveryOption): void;
        /** [[IsoDep](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/IsoDep.html) NFCAdapter.getIsoDep()](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/NFCAdapter.getIsoDep.html)
         *
         * 获取IsoDep实例，实例支持ISO-DEP (ISO 14443-4)标准的读写
         *
         * 最低基础库： `2.11.2` */
        getIsoDep(): IsoDep;
        /** [[MifareClassic](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/MifareClassic.html) NFCAdapter.getMifareClassic()](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/NFCAdapter.getMifareClassic.html)
         *
         * 获取MifareClassic实例，实例支持MIFARE Classic标签的读写
         *
         * 最低基础库： `2.11.2` */
        getMifareClassic(): MifareClassic;
        /** [[MifareUltralight](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/MifareUltralight.html) NFCAdapter.getMifareUltralight()](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/NFCAdapter.getMifareUltralight.html)
         *
         * 获取MifareUltralight实例，实例支持MIFARE Ultralight标签的读写
         *
         * 最低基础库： `2.11.2` */
        getMifareUltralight(): MifareUltralight;
        /** [[Ndef](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/Ndef.html) NFCAdapter.getNdef()](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/NFCAdapter.getNdef.html)
         *
         * 获取Ndef实例，实例支持对NDEF格式的NFC标签上的NDEF数据的读写
         *
         * 最低基础库： `2.11.2` */
        getNdef(): Ndef;
        /** [[NfcA](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/NfcA.html) NFCAdapter.getNfcA()](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/NFCAdapter.getNfcA.html)
         *
         * 获取NfcA实例，实例支持NFC-A (ISO 14443-3A)标准的读写
         *
         * 最低基础库： `2.11.2` */
        getNfcA(): NfcA;
        /** [[NfcB](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/NfcB.html) NFCAdapter.getNfcB()](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/NFCAdapter.getNfcB.html)
         *
         * 获取NfcB实例，实例支持NFC-B (ISO 14443-3B)标准的读写
         *
         * 最低基础库： `2.11.2` */
        getNfcB(): NfcB;
        /** [[NfcF](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/NfcF.html) NFCAdapter.getNfcF()](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/NFCAdapter.getNfcF.html)
         *
         * 获取NfcF实例，实例支持NFC-F (JIS 6319-4)标准的读写
         *
         * 最低基础库： `2.11.2` */
        getNfcF(): NfcF;
        /** [[NfcV](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/NfcV.html) NFCAdapter.getNfcV()](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/NFCAdapter.getNfcV.html)
         *
         * 获取NfcV实例，实例支持NFC-V (ISO 15693)标准的读写
         *
         * 最低基础库： `2.11.2` */
        getNfcV(): NfcV;
    }
    interface NFCError {
        /** 错误信息
         *
         * | 错误码 | 错误信息 | 说明 |
         * | - | - | - |
         * | 0 | ok | 正常 |
         * | 13000 |  | 当前设备不支持NFC |
         * | 13001 |  | 当前设备支持NFC，但系统NFC开关未开启 |
         * | 13002 |  | 当前设备支持NFC，但不支持HCE |
         * | 13003 |  | AID列表参数格式错误 |
         * | 13004 |  | 未设置微信为默认NFC支付应用 |
         * | 13005 |  | 返回的指令不合法 |
         * | 13006 |  | 注册AID失败 | */ errMsg: string;
        /** 错误码
         *
         * | 错误码 | 错误信息 | 说明 |
         * | - | - | - |
         * | 0 | ok | 正常 |
         * | 13000 |  | 当前设备不支持NFC |
         * | 13001 |  | 当前设备支持NFC，但系统NFC开关未开启 |
         * | 13002 |  | 当前设备支持NFC，但不支持HCE |
         * | 13003 |  | AID列表参数格式错误 |
         * | 13004 |  | 未设置微信为默认NFC支付应用 |
         * | 13005 |  | 返回的指令不合法 |
         * | 13006 |  | 注册AID失败 | */ errCode: number;
    }
    interface Ndef {
        /** [Ndef.close(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/Ndef.close.html)
         *
         * 断开连接
         *
         * 最低基础库： `2.11.2` */
        close(option?: NdefCloseOption): void;
        /** [Ndef.connect(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/Ndef.connect.html)
         *
         * 连接 NFC 标签
         *
         * 最低基础库： `2.11.2` */
        connect(option?: NdefConnectOption): void;
        /** [Ndef.isConnected(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/Ndef.isConnected.html)
         *
         * 检查是否已连接
         *
         * 最低基础库： `2.11.2` */
        isConnected(option?: IsConnectedOption): void;
        /** [Ndef.offNdefMessage(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/Ndef.offNdefMessage.html)
         *
         * 取消监听 Ndef 消息
         *
         * 最低基础库： `2.11.2` */
        offNdefMessage(callback: (...args: any[]) => any): void;
        /** [Ndef.onNdefMessage(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/Ndef.onNdefMessage.html)
         *
         * 监听 Ndef 消息
         *
         * 最低基础库： `2.11.2` */
        onNdefMessage(callback: (...args: any[]) => any): void;
        /** [Ndef.setTimeout(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/Ndef.setTimeout.html)
         *
         * 设置超时时间
         *
         * 最低基础库： `2.11.2` */
        setTimeout(option: SetTimeoutOption): void;
        /** [Ndef.writeNdefMessage(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/Ndef.writeNdefMessage.html)
         *
         * 重写 Ndef 标签内容
         *
         * 最低基础库： `2.11.2` */
        writeNdefMessage(option: WriteNdefMessageOption): void;
    }
    interface NfcA {
        /** [NfcA.close(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/NfcA.close.html)
         *
         * 断开连接
         *
         * 最低基础库： `2.11.2` */
        close(option?: NdefCloseOption): void;
        /** [NfcA.connect(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/NfcA.connect.html)
         *
         * 连接 NFC 标签
         *
         * 最低基础库： `2.11.2` */
        connect(option?: NdefConnectOption): void;
        /** [NfcA.getAtqa(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/NfcA.getAtqa.html)
         *
         * 获取ATQA信息
         *
         * 最低基础库： `2.11.2` */
        getAtqa(option?: GetAtqaOption): void;
        /** [NfcA.getMaxTransceiveLength(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/NfcA.getMaxTransceiveLength.html)
         *
         * 获取最大传输长度
         *
         * 最低基础库： `2.11.2` */
        getMaxTransceiveLength(option?: GetMaxTransceiveLengthOption): void;
        /** [NfcA.getSak(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/NfcA.getSak.html)
         *
         * 获取SAK信息
         *
         * 最低基础库： `2.11.2` */
        getSak(option?: GetSakOption): void;
        /** [NfcA.isConnected(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/NfcA.isConnected.html)
         *
         * 检查是否已连接
         *
         * 最低基础库： `2.11.2` */
        isConnected(option?: IsConnectedOption): void;
        /** [NfcA.setTimeout(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/NfcA.setTimeout.html)
         *
         * 设置超时时间
         *
         * 最低基础库： `2.11.2` */
        setTimeout(option: SetTimeoutOption): void;
        /** [NfcA.transceive(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/NfcA.transceive.html)
         *
         * 发送数据
         *
         * 最低基础库： `2.11.2` */
        transceive(option: TransceiveOption): void;
    }
    interface NfcB {
        /** [NfcB.close(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/NfcB.close.html)
         *
         * 断开连接
         *
         * 最低基础库： `2.11.2` */
        close(option?: NdefCloseOption): void;
        /** [NfcB.connect(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/NfcB.connect.html)
         *
         * 连接 NFC 标签
         *
         * 最低基础库： `2.11.2` */
        connect(option?: NdefConnectOption): void;
        /** [NfcB.getMaxTransceiveLength(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/NfcB.getMaxTransceiveLength.html)
         *
         * 获取最大传输长度
         *
         * 最低基础库： `2.11.2` */
        getMaxTransceiveLength(option?: GetMaxTransceiveLengthOption): void;
        /** [NfcB.isConnected(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/NfcB.isConnected.html)
         *
         * 检查是否已连接
         *
         * 最低基础库： `2.11.2` */
        isConnected(option?: IsConnectedOption): void;
        /** [NfcB.setTimeout(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/NfcB.setTimeout.html)
         *
         * 设置超时时间
         *
         * 最低基础库： `2.11.2` */
        setTimeout(option: SetTimeoutOption): void;
        /** [NfcB.transceive(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/NfcB.transceive.html)
         *
         * 发送数据
         *
         * 最低基础库： `2.11.2` */
        transceive(option: TransceiveOption): void;
    }
    interface NfcF {
        /** [NfcF.close(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/NfcF.close.html)
         *
         * 断开连接
         *
         * 最低基础库： `2.11.2` */
        close(option?: NdefCloseOption): void;
        /** [NfcF.connect(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/NfcF.connect.html)
         *
         * 连接 NFC 标签
         *
         * 最低基础库： `2.11.2` */
        connect(option?: NdefConnectOption): void;
        /** [NfcF.getMaxTransceiveLength(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/NfcF.getMaxTransceiveLength.html)
         *
         * 获取最大传输长度
         *
         * 最低基础库： `2.11.2` */
        getMaxTransceiveLength(option?: GetMaxTransceiveLengthOption): void;
        /** [NfcF.isConnected(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/NfcF.isConnected.html)
         *
         * 检查是否已连接
         *
         * 最低基础库： `2.11.2` */
        isConnected(option?: IsConnectedOption): void;
        /** [NfcF.setTimeout(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/NfcF.setTimeout.html)
         *
         * 设置超时时间
         *
         * 最低基础库： `2.11.2` */
        setTimeout(option: SetTimeoutOption): void;
        /** [NfcF.transceive(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/NfcF.transceive.html)
         *
         * 发送数据
         *
         * 最低基础库： `2.11.2` */
        transceive(option: TransceiveOption): void;
    }
    interface NfcV {
        /** [NfcV.close(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/NfcV.close.html)
         *
         * 断开连接
         *
         * 最低基础库： `2.11.2` */
        close(option?: NdefCloseOption): void;
        /** [NfcV.connect(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/NfcV.connect.html)
         *
         * 连接 NFC 标签
         *
         * 最低基础库： `2.11.2` */
        connect(option?: NdefConnectOption): void;
        /** [NfcV.getMaxTransceiveLength(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/NfcV.getMaxTransceiveLength.html)
         *
         * 获取最大传输长度
         *
         * 最低基础库： `2.11.2` */
        getMaxTransceiveLength(option?: GetMaxTransceiveLengthOption): void;
        /** [NfcV.isConnected(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/NfcV.isConnected.html)
         *
         * 检查是否已连接
         *
         * 最低基础库： `2.11.2` */
        isConnected(option?: IsConnectedOption): void;
        /** [NfcV.setTimeout(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/NfcV.setTimeout.html)
         *
         * 设置超时时间
         *
         * 最低基础库： `2.11.2` */
        setTimeout(option: SetTimeoutOption): void;
        /** [NfcV.transceive(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/NfcV.transceive.html)
         *
         * 发送数据
         *
         * 最低基础库： `2.11.2` */
        transceive(option: TransceiveOption): void;
    }
    interface Nfcrwerror {
        /** 错误信息
         *
         * | 错误码 | 错误信息 | 说明 |
         * | - | - | - |
         * | 13000 | 设备不支持NFC |  |
         * | 13001 | 系统NFC开关未打开 |  |
         * | 13010 | 未知错误 |  |
         * | 13019 | user is not authorized | 用户未授权 |
         * | 13011 | invalid parameter | 参数无效 |
         * | 13012 | parse NdefMessage failed | 将参数解析为NdefMessage失败 |
         * | 13021 | NFC discovery already started | 已经开始NFC扫描 |
         * | 13018 | NFC discovery has not started | 尝试在未开始NFC扫描时停止NFC扫描 |
         * | 13022 | Tech already connected | 标签已经连接 |
         * | 13023 | Tech has not connected | 尝试在未连接标签时断开连接 |
         * | 13013 | NFC tag has not been discovered | 未扫描到NFC标签 |
         * | 13014 | invalid tech | 无效的标签技术 |
         * | 13015 | unavailable tech | 从标签上获取对应技术失败 |
         * | 13024 | function not support | 当前标签技术不支持该功能 |
         * | 13017 | system internal error | 相关读写操作失败 |
         * | 13016 | connect fail | 连接失败 | */ errMsg: string;
        /** 错误码
         *
         * | 错误码 | 错误信息 | 说明 |
         * | - | - | - |
         * | 13000 | 设备不支持NFC |  |
         * | 13001 | 系统NFC开关未打开 |  |
         * | 13010 | 未知错误 |  |
         * | 13019 | user is not authorized | 用户未授权 |
         * | 13011 | invalid parameter | 参数无效 |
         * | 13012 | parse NdefMessage failed | 将参数解析为NdefMessage失败 |
         * | 13021 | NFC discovery already started | 已经开始NFC扫描 |
         * | 13018 | NFC discovery has not started | 尝试在未开始NFC扫描时停止NFC扫描 |
         * | 13022 | Tech already connected | 标签已经连接 |
         * | 13023 | Tech has not connected | 尝试在未连接标签时断开连接 |
         * | 13013 | NFC tag has not been discovered | 未扫描到NFC标签 |
         * | 13014 | invalid tech | 无效的标签技术 |
         * | 13015 | unavailable tech | 从标签上获取对应技术失败 |
         * | 13024 | function not support | 当前标签技术不支持该功能 |
         * | 13017 | system internal error | 相关读写操作失败 |
         * | 13016 | connect fail | 连接失败 | */ errCode: number;
    }
    interface NodesRef {
        /** [[SelectorQuery](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/SelectorQuery.html) NodesRef.boundingClientRect(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/NodesRef.boundingClientRect.html)
*
* 添加节点的布局位置的查询请求。相对于显示区域，以像素为单位。其功能类似于 DOM 的 `getBoundingClientRect`。返回 `NodesRef` 对应的 `SelectorQuery`。
*
* **示例代码**
*
*
* ```js
Page({
  getRect () {
    wx.createSelectorQuery().select('#the-id').boundingClientRect(function(rect){
      rect.id      // 节点的ID
      rect.dataset // 节点的dataset
      rect.left    // 节点的左边界坐标
      rect.right   // 节点的右边界坐标
      rect.top     // 节点的上边界坐标
      rect.bottom  // 节点的下边界坐标
      rect.width   // 节点的宽度
      rect.height  // 节点的高度
    }).exec()
  },
  getAllRects () {
    wx.createSelectorQuery().selectAll('.a-class').boundingClientRect(function(rects){
      rects.forEach(function(rect){
        rect.id      // 节点的ID
        rect.dataset // 节点的dataset
        rect.left    // 节点的左边界坐标
        rect.right   // 节点的右边界坐标
        rect.top     // 节点的上边界坐标
        rect.bottom  // 节点的下边界坐标
        rect.width   // 节点的宽度
        rect.height  // 节点的高度
      })
    }).exec()
  }
})
``` */
        boundingClientRect(
            /** 回调函数，在执行 `SelectorQuery.exec` 方法后，节点信息会在 `callback` 中返回。 */
            callback?: BoundingClientRectCallback,
        ): SelectorQuery;
        /** [[SelectorQuery](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/SelectorQuery.html) NodesRef.context(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/NodesRef.context.html)
*
* 添加节点的 Context 对象查询请求。目前支持 [VideoContext](https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.html)、[CanvasContext](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.html)、[LivePlayerContext](https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePlayerContext.html)、[EditorContext](https://developers.weixin.qq.com/miniprogram/dev/api/media/editor/EditorContext.html)和 [MapContext](https://developers.weixin.qq.com/miniprogram/dev/api/media/map/MapContext.html) 的获取。
*
* **示例代码**
*
*
* ```js
Page({
  getContext () {
    wx.createSelectorQuery().select('.the-video-class').context(function(res){
      console.log(res.context) // 节点对应的 Context 对象。如：选中的节点是 <video> 组件，那么此处即返回 VideoContext 对象
    }).exec()
  }
})
```
*
* 最低基础库： `2.4.2` */
        context(
            /** 回调函数，在执行 `SelectorQuery.exec` 方法后，返回节点信息。 */
            callback?: ContextCallback,
        ): SelectorQuery;
        /** [[SelectorQuery](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/SelectorQuery.html) NodesRef.fields(Object fields, function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/NodesRef.fields.html)
*
* 获取节点的相关信息。需要获取的字段在fields中指定。返回值是 `nodesRef` 对应的 `selectorQuery`
*
* **注意**
*
*
* computedStyle 的优先级高于 size，当同时在 computedStyle 里指定了 width/height 和传入了 size: true，则优先返回 computedStyle 获取到的 width/height。
*
* **示例代码**
*
*
* ```js
Page({
  getFields () {
    wx.createSelectorQuery().select('#the-id').fields({
      dataset: true,
      size: true,
      scrollOffset: true,
      properties: ['scrollX', 'scrollY'],
      computedStyle: ['margin', 'backgroundColor'],
      context: true,
    }, function (res) {
      res.dataset    // 节点的dataset
      res.width      // 节点的宽度
      res.height     // 节点的高度
      res.scrollLeft // 节点的水平滚动位置
      res.scrollTop  // 节点的竖直滚动位置
      res.scrollX    // 节点 scroll-x 属性的当前值
      res.scrollY    // 节点 scroll-y 属性的当前值
      // 此处返回指定要返回的样式名
      res.margin
      res.backgroundColor
      res.context    // 节点对应的 Context 对象
    }).exec()
  }
})
``` */
        fields(
            fields: Fields,
            /** 回调函数 */
            callback?: FieldsCallback,
        ): SelectorQuery;
        /** [[SelectorQuery](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/SelectorQuery.html) NodesRef.node(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/NodesRef.node.html)
*
* 获取 Node 节点实例。
*
* **示例代码**
*
*
* ```js
Page({
  getNode() {
    wx.createSelectorQuery().select('.canvas').node(function(res){
      console.log(res.node) // 节点对应的 Canvas 实例。
    }).exec()
  }
})
```
*
* 最低基础库： `2.7.0` */
        node(
            /** 回调函数，在执行 `SelectorQuery.exec` 方法后，返回节点信息。 */
            callback?: NodeCallback,
        ): SelectorQuery;
        /** [[SelectorQuery](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/SelectorQuery.html) NodesRef.scrollOffset(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/NodesRef.scrollOffset.html)
*
* 添加节点的滚动位置查询请求。以像素为单位。节点必须是 `scroll-view` 或者 `viewport`，返回 `NodesRef` 对应的 `SelectorQuery`。
*
* **示例代码**
*
*
* ```js
Page({
  getScrollOffset () {
    wx.createSelectorQuery().selectViewport().scrollOffset(function(res){
      res.id      // 节点的ID
      res.dataset // 节点的dataset
      res.scrollLeft // 节点的水平滚动位置
      res.scrollTop  // 节点的竖直滚动位置
    }).exec()
  }
})
``` */
        scrollOffset(
            /** 回调函数，在执行 `SelectorQuery.exec` 方法后，节点信息会在 `callback` 中返回。 */
            callback?: ScrollOffsetCallback,
        ): SelectorQuery;
    }
    interface OffscreenCanvas {
        /** [[Image](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/Image.html) OffscreenCanvas.createImage()](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/OffscreenCanvas.createImage.html)
         *
         * 创建一个图片对象。支持在 2D Canvas 和 WebGL Canvas 下使用, 但不支持混用 2D 和 WebGL 的方法。
         *
         * ****
         *
         * 注意不允许混用 webgl 和 2d 画布创建的图片对象，使用时请注意尽量使用 canvas 自身的 `createImage` 创建图片对象。
         *
         * 最低基础库： `2.7.3` */
        createImage(): Image;
        /** [[RenderingContext](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/RenderingContext.html) OffscreenCanvas.getContext(string contextType)](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/OffscreenCanvas.getContext.html)
         *
         * 该方法返回 OffscreenCanvas 的绘图上下文
         *
         * ****
         *
         * 注意不允许混用 webgl 和 2d 绘图上下文，传入的 contextType 必须要与 `wx.createOffscreenCanvas` 传入的 type 类型一致。
         *
         * 最低基础库： `2.7.0` */
        getContext(
            /** 绘图上下文类型，需要与 createOffscreenCanvas 时传入的 type 一致
             *
             * 参数 contextType 可选值：
             * - 'webgl': webgl类型上下文;
             * - '2d': 2d类型上下文; */
            contextType: "webgl" | "2d",
        ): any;
    }
    interface OpenSyncError {
        /** 错误信息
         *
         * | 错误信息 | 说明 |
         * | - | - |
         * | fail no such file or directory "${filePath}" | 上级目录不存在 | */ errMsg: string;
        /** 错误码
         *
         * | 错误信息 | 说明 |
         * | - | - |
         * | fail no such file or directory "${filePath}" | 上级目录不存在 | */ errCode: number;
    }
    interface Performance {
        /** [Array Performance.getEntries()](https://developers.weixin.qq.com/miniprogram/dev/api/base/performance/Performance.getEntries.html)
         *
         * 该方法返回当前缓冲区中的所有性能数据
         *
         * 最低基础库： `2.11.0` */
        getEntries(): any[];
        /** [Array Performance.getEntriesByName(string name, string entryType)](https://developers.weixin.qq.com/miniprogram/dev/api/base/performance/Performance.getEntriesByName.html)
         *
         * 获取当前缓冲区中所有名称为 [name] 且类型为 [entryType] 的性能数据
         *
         * 最低基础库： `2.11.0` */
        getEntriesByName(name: string, entryType?: string): any[];
        /** [Array Performance.getEntriesByType(string entryType)](https://developers.weixin.qq.com/miniprogram/dev/api/base/performance/Performance.getEntriesByType.html)
         *
         * 获取当前缓冲区中所有类型为 [entryType] 的性能数据
         *
         * 最低基础库： `2.11.0` */
        getEntriesByType(entryType: string): any[];
        /** [Performance.setBufferSize(number size)](https://developers.weixin.qq.com/miniprogram/dev/api/base/performance/Performance.setBufferSize.html)
         *
         * 设置缓冲区大小， 默认缓冲 30 条性能数据
         *
         * 最低基础库： `2.11.0` */
        setBufferSize(size: number): void;
        /** [[PerformanceObserver](https://developers.weixin.qq.com/miniprogram/dev/api/base/performance/PerformanceObserver.html) Performance.createObserver(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/base/performance/Performance.createObserver.html)
         *
         * 创建全局性能事件监听器
         *
         * 最低基础库： `2.11.0` */
        createObserver(callback: (...args: any[]) => any): PerformanceObserver;
    }
    interface PerformanceObserver {
        /** [PerformanceObserver.disconnect()](https://developers.weixin.qq.com/miniprogram/dev/api/base/performance/PerformanceObserver.disconnect.html)
         *
         * 停止监听
         *
         * 最低基础库： `2.11.0` */
        disconnect(): void;
        /** [PerformanceObserver.observe(Object options)](https://developers.weixin.qq.com/miniprogram/dev/api/base/performance/PerformanceObserver.observe.html)
         *
         * 开始监听
         *
         * 最低基础库： `2.11.0` */
        observe(
            /** 设置 type 监听单个类型的指标，设置 entryTypes 监听多个类型指标。 */
            options: IAnyObject,
        ): void;
    }
    interface ReadSyncError {
        /** 错误信息
         *
         * | 错误信息 | 说明 |
         * | - | - |
         * | bad file descriptor | 无效的文件描述符 |
         * | fail permission denied | 指定的 fd 路径没有读权限 |
         * | fail the value of "offset" is out of range | 传入的 offset 不合法 |
         * | fail the value of "length" is out of range | 传入的 length 不合法 |
         * | fail sdcard not mounted | android sdcard 挂载失败 |
         * | bad file descriptor | 无效的文件描述符 | */ errMsg: string;
        /** 错误码
         *
         * | 错误信息 | 说明 |
         * | - | - |
         * | bad file descriptor | 无效的文件描述符 |
         * | fail permission denied | 指定的 fd 路径没有读权限 |
         * | fail the value of "offset" is out of range | 传入的 offset 不合法 |
         * | fail the value of "length" is out of range | 传入的 length 不合法 |
         * | fail sdcard not mounted | android sdcard 挂载失败 |
         * | bad file descriptor | 无效的文件描述符 | */ errCode: number;
    }
    interface RealtimeLogManager {
        /** [RealtimeLogManager.addFilterMsg(string msg)](https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/RealtimeLogManager.addFilterMsg.html)
         *
         * 添加过滤关键字，暂不支持在插件使用
         *
         * 最低基础库： `2.8.1` */
        addFilterMsg(
            /** 是setFilterMsg的添加接口。用于设置多个过滤关键字。 */
            msg: string,
        ): void;
        /** [RealtimeLogManager.error()](https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/RealtimeLogManager.error.html)
         *
         * 写 error 日志，暂不支持在插件使用
         *
         * 最低基础库： `2.7.1` */
        error(
            /** 日志内容，可以有任意多个。每次调用的参数的总大小不超过5Kb */
            ...args: any[]
        ): void;
        /** [RealtimeLogManager.in(Page pageInstance)](https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/RealtimeLogManager.in.html)
         *
         * 设置实时日志page参数所在的页面，暂不支持在插件使用
         *
         * 最低基础库： `2.9.1` */
        in(
            /** page实例 */
            pageInstance: Page.TrivialInstance,
        ): void;
        /** [RealtimeLogManager.info()](https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/RealtimeLogManager.info.html)
         *
         * 写 info 日志，暂不支持在插件使用
         *
         * 最低基础库： `2.7.1` */
        info(
            /** 日志内容，可以有任意多个。每次调用的参数的总大小不超过5Kb */
            ...args: any[]
        ): void;
        /** [RealtimeLogManager.setFilterMsg(string msg)](https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/RealtimeLogManager.setFilterMsg.html)
         *
         * 设置过滤关键字，暂不支持在插件使用
         *
         * 最低基础库： `2.7.3` */
        setFilterMsg(
            /** 过滤关键字，最多不超过1Kb，可以在小程序管理后台根据设置的内容搜索得到对应的日志。 */
            msg: string,
        ): void;
        /** [RealtimeLogManager.warn()](https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/RealtimeLogManager.warn.html)
         *
         * 写 warn 日志，暂不支持在插件使用
         *
         * 最低基础库： `2.7.1` */
        warn(
            /** 日志内容，可以有任意多个。每次调用的参数的总大小不超过5Kb */
            ...args: any[]
        ): void;
        /** [[RealtimeTagLogManager](https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/RealtimeTagLogManager.html) RealtimeLogManager.tag(string tagName)](https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/RealtimeLogManager.tag.html)
         *
         * 获取给定标签的日志管理器实例，目前只支持在插件使用
         *
         * 最低基础库： `2.16.0` */
        tag(
            /** 标签名 */
            tagName: string,
        ): RealtimeTagLogManager;
    }
    interface RealtimeTagLogManager {
        /** [RealtimeTagLogManager.addFilterMsg(string msg)](https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/RealtimeTagLogManager.addFilterMsg.html)
         *
         * 添加过滤关键字
         *
         * 最低基础库： `2.16.0` */
        addFilterMsg(
            /** 是setFilterMsg的添加接口。用于设置多个过滤关键字。 */
            msg: string,
        ): void;
        /** [RealtimeTagLogManager.error(string key, Object|Array.&lt;any&gt;|number|string value)](https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/RealtimeTagLogManager.error.html)
         *
         * 写 error 日志
         *
         * 最低基础库： `2.16.0` */
        error(
            /** 日志的 key */
            key: string,
            /** 日志的值，每次调用的参数的总大小不超过5Kb */
            value: IAnyObject | any[] | number | string,
        ): void;
        /** [RealtimeTagLogManager.info(string key, Object|Array.&lt;any&gt;|number|string value)](https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/RealtimeTagLogManager.info.html)
         *
         * 写 info 日志
         *
         * 最低基础库： `2.16.0` */
        info(
            /** 日志的 key */
            key: string,
            /** 日志的值，每次调用的参数的总大小不超过5Kb */
            value: IAnyObject | any[] | number | string,
        ): void;
        /** [RealtimeTagLogManager.setFilterMsg(string msg)](https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/RealtimeTagLogManager.setFilterMsg.html)
         *
         * 设置过滤关键字
         *
         * 最低基础库： `2.16.0` */
        setFilterMsg(
            /** 过滤关键字，最多不超过1Kb，可以在小程序管理后台根据设置的内容搜索得到对应的日志。 */
            msg: string,
        ): void;
        /** [RealtimeTagLogManager.warn(string key, Object|Array.&lt;any&gt;|number|string value)](https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/RealtimeTagLogManager.warn.html)
         *
         * 写 warn 日志
         *
         * 最低基础库： `2.16.0` */
        warn(
            /** 日志的 key */
            key: string,
            /** 日志的值，每次调用的参数的总大小不超过5Kb */
            value: IAnyObject | any[] | number | string,
        ): void;
    }
    interface RecorderManager {
        /** [RecorderManager.onError(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/RecorderManager.onError.html)
         *
         * 监听录音错误事件 */
        onError(
            /** 录音错误事件的回调函数 */
            callback: UDPSocketOnErrorCallback,
        ): void;
        /** [RecorderManager.onFrameRecorded(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/RecorderManager.onFrameRecorded.html)
         *
         * 监听已录制完指定帧大小的文件事件。如果设置了 frameSize，则会回调此事件。 */
        onFrameRecorded(
            /** 已录制完指定帧大小的文件事件的回调函数 */
            callback: OnFrameRecordedCallback,
        ): void;
        /** [RecorderManager.onInterruptionBegin(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/RecorderManager.onInterruptionBegin.html)
         *
         * 监听录音因为受到系统占用而被中断开始事件。以下场景会触发此事件：微信语音聊天、微信视频聊天。此事件触发后，录音会被暂停。pause 事件在此事件后触发
         *
         * 最低基础库： `2.3.0` */
        onInterruptionBegin(
            /** 录音因为受到系统占用而被中断开始事件的回调函数 */
            callback: OnInterruptionBeginCallback,
        ): void;
        /** [RecorderManager.onInterruptionEnd(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/RecorderManager.onInterruptionEnd.html)
         *
         * 监听录音中断结束事件。在收到 interruptionBegin 事件之后，小程序内所有录音会暂停，收到此事件之后才可再次录音成功。
         *
         * 最低基础库： `2.3.0` */
        onInterruptionEnd(
            /** 录音中断结束事件的回调函数 */
            callback: OnInterruptionEndCallback,
        ): void;
        /** [RecorderManager.onPause(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/RecorderManager.onPause.html)
         *
         * 监听录音暂停事件 */
        onPause(
            /** 录音暂停事件的回调函数 */
            callback: OnPauseCallback,
        ): void;
        /** [RecorderManager.onResume(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/RecorderManager.onResume.html)
         *
         * 监听录音继续事件 */
        onResume(
            /** 录音继续事件的回调函数 */
            callback: OnResumeCallback,
        ): void;
        /** [RecorderManager.onStart(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/RecorderManager.onStart.html)
         *
         * 监听录音开始事件 */
        onStart(
            /** 录音开始事件的回调函数 */
            callback: OnStartCallback,
        ): void;
        /** [RecorderManager.onStop(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/RecorderManager.onStop.html)
         *
         * 监听录音结束事件 */
        onStop(
            /** 录音结束事件的回调函数 */
            callback: RecorderManagerOnStopCallback,
        ): void;
        /** [RecorderManager.pause()](https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/RecorderManager.pause.html)
         *
         * 暂停录音 */
        pause(): void;
        /** [RecorderManager.resume()](https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/RecorderManager.resume.html)
         *
         * 继续录音 */
        resume(): void;
        /** [RecorderManager.start(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/RecorderManager.start.html)
         *
         * 开始录音
         *
         * **采样率与编码码率限制**
         *
         *  每种采样率有对应的编码码率范围有效值，设置不合法的采样率或编码码率会导致录音失败，具体对应关系如下表。
         *
         * | 采样率 | 编码码率       |
         * | ------ | -------------- |
         * | 8000   | 16000 ~ 48000  |
         * | 11025  | 16000 ~ 48000  |
         * | 12000  | 24000 ~ 64000  |
         * | 16000  | 24000 ~ 96000  |
         * | 22050  | 32000 ~ 128000 |
         * | 24000  | 32000 ~ 128000 |
         * | 32000  | 48000 ~ 192000 |
         * | 44100  | 64000 ~ 320000 |
         * | 48000  | 64000 ~ 320000 | */
        start(option: RecorderManagerStartOption): void;
        /** [RecorderManager.stop()](https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/RecorderManager.stop.html)
         *
         * 停止录音 */
        stop(): void;
    }
    interface RequestTask {
        /** [RequestTask.abort()](https://developers.weixin.qq.com/miniprogram/dev/api/network/request/RequestTask.abort.html)
         *
         * 中断请求任务
         *
         * 最低基础库： `1.4.0` */
        abort(): void;
        /** [RequestTask.offHeadersReceived(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/network/request/RequestTask.offHeadersReceived.html)
         *
         * 取消监听 HTTP Response Header 事件
         *
         * 最低基础库： `2.1.0` */
        offHeadersReceived(
            /** HTTP Response Header 事件的回调函数 */
            callback?: OffHeadersReceivedCallback,
        ): void;
        /** [RequestTask.onHeadersReceived(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/network/request/RequestTask.onHeadersReceived.html)
         *
         * 监听 HTTP Response Header 事件。会比请求完成事件更早
         *
         * 最低基础库： `2.1.0` */
        onHeadersReceived(
            /** HTTP Response Header 事件的回调函数 */
            callback: OnHeadersReceivedCallback,
        ): void;
    }
    interface RewardedVideoAd {
        /** [Promise RewardedVideoAd.load()](https://developers.weixin.qq.com/miniprogram/dev/api/ad/RewardedVideoAd.load.html)
         *
         * 加载激励视频广告。 */
        load(): Promise<any>;
        /** [Promise RewardedVideoAd.show()](https://developers.weixin.qq.com/miniprogram/dev/api/ad/RewardedVideoAd.show.html)
         *
         * 显示激励视频广告。激励视频广告将从屏幕下方推入。 */
        show(): Promise<any>;
        /** [RewardedVideoAd.destroy()](https://developers.weixin.qq.com/miniprogram/dev/api/ad/RewardedVideoAd.destroy.html)
         *
         * 销毁激励视频广告实例。
         *
         * 最低基础库： `2.8.0` */
        destroy(): void;
        /** [RewardedVideoAd.offClose(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/ad/RewardedVideoAd.offClose.html)
         *
         * 取消监听用户点击 `关闭广告` 按钮的事件 */
        offClose(
            /** 用户点击 `关闭广告` 按钮的事件的回调函数 */
            callback?: RewardedVideoAdOffCloseCallback,
        ): void;
        /** [RewardedVideoAd.offError(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/ad/RewardedVideoAd.offError.html)
         *
         * 取消监听激励视频错误事件 */
        offError(
            /** 激励视频错误事件的回调函数 */
            callback?: RewardedVideoAdOffErrorCallback,
        ): void;
        /** [RewardedVideoAd.offLoad(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/ad/RewardedVideoAd.offLoad.html)
         *
         * 取消监听激励视频广告加载事件 */
        offLoad(
            /** 激励视频广告加载事件的回调函数 */
            callback?: OffLoadCallback,
        ): void;
        /** [RewardedVideoAd.onClose(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/ad/RewardedVideoAd.onClose.html)
         *
         * 监听用户点击 `关闭广告` 按钮的事件。 */
        onClose(
            /** 用户点击 `关闭广告` 按钮的事件的回调函数 */
            callback: RewardedVideoAdOnCloseCallback,
        ): void;
        /** [RewardedVideoAd.onError(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/ad/RewardedVideoAd.onError.html)
         *
         * 监听激励视频错误事件。
         *
         * **错误码信息与解决方案表**
         *
         *  错误码是通过onError获取到的错误信息。调试期间，可以通过异常返回来捕获信息。
         *  在小程序发布上线之后，如果遇到异常问题，可以在[“运维中心“](https://mp.weixin.qq.com/)里面搜寻错误日志，还可以针对异常返回加上适当的监控信息。
         *
         * | 代码 | 异常情况 | 理由 | 解决方案 |
         * | ------ | -------------- | --------------- | -------------------------- |
         * | 1000  | 后端错误调用失败  | 该项错误不是开发者的异常情况 | 一般情况下忽略一段时间即可恢复。 |
         * | 1001  | 参数错误    | 使用方法错误 | 可以前往developers.weixin.qq.com确认具体教程（小程序和小游戏分别有各自的教程，可以在顶部选项中，“设计”一栏的右侧进行切换。|
         * | 1002  | 广告单元无效    | 可能是拼写错误、或者误用了其他APP的广告ID | 请重新前往mp.weixin.qq.com确认广告位ID。 |
         * | 1003  | 内部错误    | 该项错误不是开发者的异常情况 | 一般情况下忽略一段时间即可恢复。|
         * | 1004  | 无适合的广告   | 广告不是每一次都会出现，这次没有出现可能是由于该用户不适合浏览广告 | 属于正常情况，且开发者需要针对这种情况做形态上的兼容。 |
         * | 1005  | 广告组件审核中  | 你的广告正在被审核，无法展现广告 | 请前往mp.weixin.qq.com确认审核状态，且开发者需要针对这种情况做形态上的兼容。|
         * | 1006  | 广告组件被驳回  | 你的广告审核失败，无法展现广告 | 请前往mp.weixin.qq.com确认审核状态，且开发者需要针对这种情况做形态上的兼容。|
         * | 1007  | 广告组件被驳回  | 你的广告能力已经被封禁，封禁期间无法展现广告 | 请前往mp.weixin.qq.com确认小程序广告封禁状态。 |
         * | 1008  | 广告单元已关闭  | 该广告位的广告能力已经被关闭 | 请前往mp.weixin.qq.com重新打开对应广告位的展现。| */
        onError(
            /** 激励视频错误事件的回调函数 */
            callback: RewardedVideoAdOnErrorCallback,
        ): void;
        /** [RewardedVideoAd.onLoad(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/ad/RewardedVideoAd.onLoad.html)
         *
         * 监听激励视频广告加载事件。 */
        onLoad(
            /** 激励视频广告加载事件的回调函数 */
            callback: OnLoadCallback,
        ): void;
    }
    interface ScrollViewContext {
        /** [ScrollViewContext.scrollIntoView(string selector)](https://developers.weixin.qq.com/miniprogram/dev/api/ui/scroll/ScrollViewContext.scrollIntoView.html)
         *
         * 滚动至指定位置
         *
         * 最低基础库： `2.14.4` */
        scrollIntoView(
            /** 元素选择器 */
            selector: string,
        ): void;
        /** [ScrollViewContext.scrollTo(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/ui/scroll/ScrollViewContext.scrollTo.html)
         *
         * 滚动至指定位置
         *
         * 最低基础库： `2.14.4` */
        scrollTo(option: ScrollToOption): void;
    }
    interface SelectorQuery {
        /** [[NodesRef](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/NodesRef.html) SelectorQuery.exec(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/SelectorQuery.exec.html)
         *
         * 执行所有的请求。请求结果按请求次序构成数组，在callback的第一个参数中返回。 */
        exec(
            /** 回调函数 */
            callback?: (...args: any[]) => any,
        ): NodesRef;
        /** [[NodesRef](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/NodesRef.html) SelectorQuery.select(string selector)](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/SelectorQuery.select.html)
         *
         * 在当前页面下选择第一个匹配选择器 `selector` 的节点。返回一个 `NodesRef` 对象实例，可以用于获取节点信息。
         *
         * **selector 语法**
         *
         * selector类似于 CSS 的选择器，但仅支持下列语法。
         *
         * - ID选择器：#the-id
         * - class选择器（可以连续指定多个）：.a-class.another-class
         * - 子元素选择器：.the-parent > .the-child
         * - 后代选择器：.the-ancestor .the-descendant
         * - 跨自定义组件的后代选择器：.the-ancestor >>> .the-descendant
         * - 多选择器的并集：#a-node, .some-other-nodes */
        select(
            /** 选择器 */
            selector: string,
        ): NodesRef;
        /** [[NodesRef](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/NodesRef.html) SelectorQuery.selectAll(string selector)](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/SelectorQuery.selectAll.html)
         *
         * 在当前页面下选择匹配选择器 selector 的所有节点。
         *
         * **selector 语法**
         *
         * selector类似于 CSS 的选择器，但仅支持下列语法。
         *
         * - ID选择器：#the-id
         * - class选择器（可以连续指定多个）：.a-class.another-class
         * - 子元素选择器：.the-parent > .the-child
         * - 后代选择器：.the-ancestor .the-descendant
         * - 跨自定义组件的后代选择器：.the-ancestor >>> .the-descendant
         * - 多选择器的并集：#a-node, .some-other-nodes */
        selectAll(
            /** 选择器 */
            selector: string,
        ): NodesRef;
        /** [[NodesRef](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/NodesRef.html) SelectorQuery.selectViewport()](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/SelectorQuery.selectViewport.html)
         *
         * 选择显示区域。可用于获取显示区域的尺寸、滚动位置等信息。 */
        selectViewport(): NodesRef;
        /** [[SelectorQuery](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/SelectorQuery.html) SelectorQuery.in(Component component)](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/SelectorQuery.in.html)
*
* 将选择器的选取范围更改为自定义组件 `component` 内。（初始时，选择器仅选取页面范围的节点，不会选取任何自定义组件中的节点）。
*
* **示例代码**
*
*
* ```js
Component({
  queryMultipleNodes (){
    const query = wx.createSelectorQuery().in(this)
    query.select('#the-id').boundingClientRect(function(res){
      res.top // 这个组件内 #the-id 节点的上边界坐标
    }).exec()
  }
})
```
*
* 最低基础库： `1.6.0` */
        in(
            /** 自定义组件实例 */
            component: Component.TrivialInstance | Page.TrivialInstance,
        ): SelectorQuery;
    }
    interface SocketTask {
        /** [SocketTask.close(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/SocketTask.close.html)
         *
         * 关闭 WebSocket 连接 */
        close(option: SocketTaskCloseOption): void;
        /** [SocketTask.onClose(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/SocketTask.onClose.html)
         *
         * 监听 WebSocket 连接关闭事件 */
        onClose(
            /** WebSocket 连接关闭事件的回调函数 */
            callback: SocketTaskOnCloseCallback,
        ): void;
        /** [SocketTask.onError(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/SocketTask.onError.html)
         *
         * 监听 WebSocket 错误事件 */
        onError(
            /** WebSocket 错误事件的回调函数 */
            callback: UDPSocketOnErrorCallback,
        ): void;
        /** [SocketTask.onMessage(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/SocketTask.onMessage.html)
         *
         * 监听 WebSocket 接受到服务器的消息事件 */
        onMessage(
            /** WebSocket 接受到服务器的消息事件的回调函数 */
            callback: SocketTaskOnMessageCallback,
        ): void;
        /** [SocketTask.onOpen(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/SocketTask.onOpen.html)
         *
         * 监听 WebSocket 连接打开事件 */
        onOpen(
            /** WebSocket 连接打开事件的回调函数 */
            callback: OnOpenCallback,
        ): void;
        /** [SocketTask.send(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/SocketTask.send.html)
         *
         * 通过 WebSocket 连接发送数据 */
        send(option: SocketTaskSendOption): void;
    }
    interface Stats {
        /** [boolean Stats.isDirectory()](https://developers.weixin.qq.com/miniprogram/dev/api/file/Stats.isDirectory.html)
         *
         * 判断当前文件是否一个目录 */
        isDirectory(): boolean;
        /** [boolean Stats.isFile()](https://developers.weixin.qq.com/miniprogram/dev/api/file/Stats.isFile.html)
         *
         * 判断当前文件是否一个普通文件 */
        isFile(): boolean;
    }
    interface TCPSocket {
        /** [TCPSocket.close()](https://developers.weixin.qq.com/miniprogram/dev/api/network/tcp/TCPSocket.close.html)
         *
         * 关闭连接 */
        close(): void;
        /** [TCPSocket.connect(Object options)](https://developers.weixin.qq.com/miniprogram/dev/api/network/tcp/TCPSocket.connect.html)
         *
         * 在给定的套接字上启动连接 */
        connect(options: TCPSocketConnectOption): void;
        /** [TCPSocket.offClose(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/network/tcp/TCPSocket.offClose.html)
         *
         * 取消监听一旦 socket 完全关闭就发出该事件 */
        offClose(
            /** 一旦 socket 完全关闭就发出该事件的回调函数 */
            callback?: UDPSocketOffCloseCallback,
        ): void;
        /** [TCPSocket.offConnect(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/network/tcp/TCPSocket.offConnect.html)
         *
         * 取消监听当一个 socket 连接成功建立的时候触发该事件 */
        offConnect(
            /** 当一个 socket 连接成功建立的时候触发该事件的回调函数 */
            callback?: OffConnectCallback,
        ): void;
        /** [TCPSocket.offError(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/network/tcp/TCPSocket.offError.html)
         *
         * 取消监听当错误发生时触发 */
        offError(
            /** 的回调函数 */
            callback?: UDPSocketOffErrorCallback,
        ): void;
        /** [TCPSocket.offMessage(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/network/tcp/TCPSocket.offMessage.html)
         *
         * 取消监听当接收到数据的时触发该事件 */
        offMessage(
            /** 当接收到数据的时触发该事件的回调函数 */
            callback?: TCPSocketOffMessageCallback,
        ): void;
        /** [TCPSocket.onClose(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/network/tcp/TCPSocket.onClose.html)
         *
         * 监听一旦 socket 完全关闭就发出该事件 */
        onClose(
            /** 一旦 socket 完全关闭就发出该事件的回调函数 */
            callback: UDPSocketOnCloseCallback,
        ): void;
        /** [TCPSocket.onConnect(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/network/tcp/TCPSocket.onConnect.html)
         *
         * 监听当一个 socket 连接成功建立的时候触发该事件 */
        onConnect(
            /** 当一个 socket 连接成功建立的时候触发该事件的回调函数 */
            callback: OnConnectCallback,
        ): void;
        /** [TCPSocket.onError(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/network/tcp/TCPSocket.onError.html)
         *
         * 监听当错误发生时触发 */
        onError(
            /** 的回调函数 */
            callback: UDPSocketOnErrorCallback,
        ): void;
        /** [TCPSocket.onMessage(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/network/tcp/TCPSocket.onMessage.html)
         *
         * 监听当接收到数据的时触发该事件 */
        onMessage(
            /** 当接收到数据的时触发该事件的回调函数 */
            callback: TCPSocketOnMessageCallback,
        ): void;
        /** [TCPSocket.write(String | ArrayBuffer data)](https://developers.weixin.qq.com/miniprogram/dev/api/network/tcp/TCPSocket.write.html)
         *
         * 在 socket 上发送数据 */
        write(
            /** 要发送的数据 */
            data: string | ArrayBuffer,
        ): void;
    }
    interface TruncateSyncError {
        /** 错误信息
         *
         * | 错误信息 | 说明 |
         * | - | - |
         * | fail no such file or directory, open ${filePath} | 指定的 filePath 所在目录不存在 |
         * | fail illegal operation on a directory, open "${filePath}" | 指定的 filePath 是一个已经存在的目录 |
         * | fail permission denied, open ${dirPath} | 指定的 filePath 路径没有写权限 |
         * | fail the maximum size of the file storage limit is exceeded | 存储空间不足 |
         * | fail sdcard not mounted | android sdcard 挂载失败 | */ errMsg: string;
        /** 错误码
         *
         * | 错误信息 | 说明 |
         * | - | - |
         * | fail no such file or directory, open ${filePath} | 指定的 filePath 所在目录不存在 |
         * | fail illegal operation on a directory, open "${filePath}" | 指定的 filePath 是一个已经存在的目录 |
         * | fail permission denied, open ${dirPath} | 指定的 filePath 路径没有写权限 |
         * | fail the maximum size of the file storage limit is exceeded | 存储空间不足 |
         * | fail sdcard not mounted | android sdcard 挂载失败 | */ errCode: number;
    }
    interface UDPSocket {
        /** [UDPSocket.close()](https://developers.weixin.qq.com/miniprogram/dev/api/network/udp/UDPSocket.close.html)
         *
         * 关闭 UDP Socket 实例，相当于销毁。 在关闭之后，UDP Socket 实例不能再发送消息，每次调用 `UDPSocket.send` 将会触发错误事件，并且 message 事件回调函数也不会再也执行。在 `UDPSocket` 实例被创建后将被 Native 强引用，保证其不被 GC。在 `UDPSocket.close` 后将解除对其的强引用，让 UDPSocket 实例遵从 GC。 */
        close(): void;
        /** [UDPSocket.connect(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/network/udp/UDPSocket.connect.html)
         *
         * 预先连接到指定的 IP 和 port，需要配合 write 方法一起使用
         *
         * 最低基础库： `2.15.0` */
        connect(option: UDPSocketConnectOption): void;
        /** [UDPSocket.offClose(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/network/udp/UDPSocket.offClose.html)
         *
         * 取消监听关闭事件 */
        offClose(
            /** 关闭事件的回调函数 */
            callback?: UDPSocketOffCloseCallback,
        ): void;
        /** [UDPSocket.offError(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/network/udp/UDPSocket.offError.html)
         *
         * 取消监听错误事件 */
        offError(
            /** 错误事件的回调函数 */
            callback?: UDPSocketOffErrorCallback,
        ): void;
        /** [UDPSocket.offListening(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/network/udp/UDPSocket.offListening.html)
         *
         * 取消监听开始监听数据包消息的事件 */
        offListening(
            /** 开始监听数据包消息的事件的回调函数 */
            callback?: OffListeningCallback,
        ): void;
        /** [UDPSocket.offMessage(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/network/udp/UDPSocket.offMessage.html)
         *
         * 取消监听收到消息的事件 */
        offMessage(
            /** 收到消息的事件的回调函数 */
            callback?: UDPSocketOffMessageCallback,
        ): void;
        /** [UDPSocket.onClose(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/network/udp/UDPSocket.onClose.html)
         *
         * 监听关闭事件 */
        onClose(
            /** 关闭事件的回调函数 */
            callback: UDPSocketOnCloseCallback,
        ): void;
        /** [UDPSocket.onError(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/network/udp/UDPSocket.onError.html)
         *
         * 监听错误事件 */
        onError(
            /** 错误事件的回调函数 */
            callback: UDPSocketOnErrorCallback,
        ): void;
        /** [UDPSocket.onListening(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/network/udp/UDPSocket.onListening.html)
         *
         * 监听开始监听数据包消息的事件 */
        onListening(
            /** 开始监听数据包消息的事件的回调函数 */
            callback: OnListeningCallback,
        ): void;
        /** [UDPSocket.onMessage(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/network/udp/UDPSocket.onMessage.html)
         *
         * 监听收到消息的事件 */
        onMessage(
            /** 收到消息的事件的回调函数 */
            callback: UDPSocketOnMessageCallback,
        ): void;
        /** [UDPSocket.send(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/network/udp/UDPSocket.send.html)
         *
         * 向指定的 IP 和 port 发送消息 */
        send(option: UDPSocketSendOption): void;
        /** [UDPSocket.setTTL(number ttl)](https://developers.weixin.qq.com/miniprogram/dev/api/network/udp/UDPSocket.setTTL.html)
         *
         * 设置 IP_TTL 套接字选项，用于设置一个 IP 数据包传输时允许的最大跳步数
         *
         * 最低基础库： `2.18.0` */
        setTTL(
            /** ttl 参数可以是 0 到 255 之间 */
            ttl: number,
        ): void;
        /** [UDPSocket.write()](https://developers.weixin.qq.com/miniprogram/dev/api/network/udp/UDPSocket.write.html)
         *
         * 用法与 send 方法相同，如果没有预先调用 connect 则与 send 无差异（注意即使调用了 connect 也需要在本接口填入地址和端口参数）
         *
         * 最低基础库： `2.15.0` */
        write(): void;
        /** [number UDPSocket.bind(number port)](https://developers.weixin.qq.com/miniprogram/dev/api/network/udp/UDPSocket.bind.html)
         *
         * 绑定一个系统随机分配的可用端口，或绑定一个指定的端口号 */
        bind(
            /** 指定要绑定的端口号，不传则返回系统随机分配的可用端口
             *
             * 最低基础库： `2.9.0` */
            port?: number,
        ): number;
    }
    interface UpdateManager {
        /** [UpdateManager.applyUpdate()](https://developers.weixin.qq.com/miniprogram/dev/api/base/update/UpdateManager.applyUpdate.html)
         *
         * 强制小程序重启并使用新版本。在小程序新版本下载完成后（即收到 `onUpdateReady` 回调）调用。
         *
         * **示例代码**
         *
         * [示例代码]((UpdateManager#示例代码)) */
        applyUpdate(): void;
        /** [UpdateManager.onCheckForUpdate(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/base/update/UpdateManager.onCheckForUpdate.html)
         *
         * 监听向微信后台请求检查更新结果事件。微信在小程序冷启动时自动检查更新，不需由开发者主动触发。
         *
         * **示例代码**
         *
         * [示例代码]((UpdateManager#示例代码)) */
        onCheckForUpdate(
            /** 向微信后台请求检查更新结果事件的回调函数 */
            callback: OnCheckForUpdateCallback,
        ): void;
        /** [UpdateManager.onUpdateFailed(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/base/update/UpdateManager.onUpdateFailed.html)
         *
         * 监听小程序更新失败事件。小程序有新版本，客户端主动触发下载（无需开发者触发），下载失败（可能是网络原因等）后回调
         *
         * **示例代码**
         *
         * [示例代码]((UpdateManager#示例代码)) */
        onUpdateFailed(
            /** 小程序更新失败事件的回调函数 */
            callback: OnUpdateFailedCallback,
        ): void;
        /** [UpdateManager.onUpdateReady(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/base/update/UpdateManager.onUpdateReady.html)
         *
         * 监听小程序有版本更新事件。客户端主动触发下载（无需开发者触发），下载成功后回调
         *
         * **示例代码**
         *
         * [示例代码]((UpdateManager#示例代码)) */
        onUpdateReady(
            /** 小程序有版本更新事件的回调函数 */
            callback: OnUpdateReadyCallback,
        ): void;
    }
    interface UploadTask {
        /** [UploadTask.abort()](https://developers.weixin.qq.com/miniprogram/dev/api/network/upload/UploadTask.abort.html)
         *
         * 中断上传任务
         *
         * 最低基础库： `1.4.0` */
        abort(): void;
        /** [UploadTask.offHeadersReceived(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/network/upload/UploadTask.offHeadersReceived.html)
         *
         * 取消监听 HTTP Response Header 事件
         *
         * 最低基础库： `2.1.0` */
        offHeadersReceived(
            /** HTTP Response Header 事件的回调函数 */
            callback?: OffHeadersReceivedCallback,
        ): void;
        /** [UploadTask.offProgressUpdate(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/network/upload/UploadTask.offProgressUpdate.html)
         *
         * 取消监听上传进度变化事件
         *
         * 最低基础库： `2.1.0` */
        offProgressUpdate(
            /** 上传进度变化事件的回调函数 */
            callback?: UploadTaskOffProgressUpdateCallback,
        ): void;
        /** [UploadTask.onHeadersReceived(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/network/upload/UploadTask.onHeadersReceived.html)
         *
         * 监听 HTTP Response Header 事件。会比请求完成事件更早
         *
         * 最低基础库： `2.1.0` */
        onHeadersReceived(
            /** HTTP Response Header 事件的回调函数 */
            callback: OnHeadersReceivedCallback,
        ): void;
        /** [UploadTask.onProgressUpdate(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/network/upload/UploadTask.onProgressUpdate.html)
         *
         * 监听上传进度变化事件
         *
         * 最低基础库： `1.4.0` */
        onProgressUpdate(
            /** 上传进度变化事件的回调函数 */
            callback: UploadTaskOnProgressUpdateCallback,
        ): void;
    }
    interface UserCryptoManager {
        /** [UserCryptoManager.getLatestUserKey(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/base/crypto/UserCryptoManager.getLatestUserKey.html)
*
* 获取最新的用户加密密钥
*
* **示例代码**
*
*
* ```js
const userCryptoManager = wx.getUserCryptoManager()
userCryptoManager.getLatestUserKey({
  success: res => {
    const {encryptKey, iv, version, expireTime} = res
    console.log(encryptKey, iv, version, expireTime)
  }
})
```
*
* 最低基础库： `2.17.3` */
        getLatestUserKey(option?: GetLatestUserKeyOption): void;
        /** [UserCryptoManager.getRandomValues(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/base/crypto/UserCryptoManager.getRandomValues.html)
*
* 获取密码学安全随机数
*
* **示例代码**
*
*
* ```js
wx.getRandomValues({
  length: 6 // 生成 6 个字节长度的随机数,
  success: res => {
    console.log(wx.arrayBufferToBase64(res.randomValues)) // 转换为 base64 字符串后打印
  }
})
```
*
* 最低基础库： `2.17.3` */
        getRandomValues(option: GetRandomValuesOption): void;
    }
    interface VideoContext {
        /** [VideoContext.exitBackgroundPlayback()](https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.exitBackgroundPlayback.html)
         *
         * 退出后台音频播放模式。
         *
         * 最低基础库： `2.14.3` */
        exitBackgroundPlayback(): void;
        /** [VideoContext.exitFullScreen()](https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.exitFullScreen.html)
         *
         * 退出全屏
         *
         * 最低基础库： `1.4.0` */
        exitFullScreen(): void;
        /** [VideoContext.exitPictureInPicture(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.exitPictureInPicture.html)
         *
         * 退出小窗，该方法可在任意页面调用 */
        exitPictureInPicture(option?: ExitPictureInPictureOption): void;
        /** [VideoContext.hideStatusBar()](https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.hideStatusBar.html)
         *
         * 隐藏状态栏，仅在iOS全屏下有效
         *
         * 最低基础库： `2.1.0` */
        hideStatusBar(): void;
        /** [VideoContext.pause()](https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.pause.html)
         *
         * 暂停视频 */
        pause(): void;
        /** [VideoContext.play()](https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.play.html)
         *
         * 播放视频 */
        play(): void;
        /** [VideoContext.playbackRate(number rate)](https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.playbackRate.html)
         *
         * 设置倍速播放
         *
         * 最低基础库： `1.4.0` */
        playbackRate(
            /** 倍率，支持 0.5/0.8/1.0/1.25/1.5，2.6.3 起支持 2.0 倍速 */
            rate: number,
        ): void;
        /** [VideoContext.requestBackgroundPlayback()](https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.requestBackgroundPlayback.html)
         *
         * 进入后台音频播放模式。
         *
         * 最低基础库： `2.14.3` */
        requestBackgroundPlayback(): void;
        /** [VideoContext.requestFullScreen(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.requestFullScreen.html)
         *
         * 进入全屏。若有自定义内容需在全屏时展示，需将内容节点放置到 video 节点内。
         *
         * 最低基础库： `1.4.0` */
        requestFullScreen(option: VideoContextRequestFullScreenOption): void;
        /** [VideoContext.seek(number position)](https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.seek.html)
         *
         * 跳转到指定位置 */
        seek(
            /** 跳转到的位置，单位 s */
            position: number,
        ): void;
        /** [VideoContext.sendDanmu(Object data)](https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.sendDanmu.html)
         *
         * 发送弹幕 */
        sendDanmu(
            /** 弹幕内容 */
            data: Danmu,
        ): void;
        /** [VideoContext.showStatusBar()](https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.showStatusBar.html)
         *
         * 显示状态栏，仅在iOS全屏下有效
         *
         * 最低基础库： `2.1.0` */
        showStatusBar(): void;
        /** [VideoContext.stop()](https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.stop.html)
         *
         * 停止视频
         *
         * 最低基础库： `1.7.0` */
        stop(): void;
    }
    interface VideoDecoder {
        /** [Object VideoDecoder.getFrameData()](https://developers.weixin.qq.com/miniprogram/dev/api/media/video-decoder/VideoDecoder.getFrameData.html)
         *
         * 获取下一帧的解码数据
         *
         * 最低基础库： `2.11.0` */
        getFrameData(): FrameDataOptions;
        /** [Promise VideoDecoder.remove()](https://developers.weixin.qq.com/miniprogram/dev/api/media/video-decoder/VideoDecoder.remove.html)
         *
         * 移除解码器
         *
         * 最低基础库： `2.11.0` */
        remove(): Promise<any>;
        /** [Promise VideoDecoder.seek(number position)](https://developers.weixin.qq.com/miniprogram/dev/api/media/video-decoder/VideoDecoder.seek.html)
         *
         * 跳到某个时间点解码
         *
         * 最低基础库： `2.11.0` */
        seek(
            /** 跳转的解码位置，单位 ms */
            position: number,
        ): Promise<any>;
        /** [Promise VideoDecoder.start(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/media/video-decoder/VideoDecoder.start.html)
         *
         * 开始解码
         *
         * 最低基础库： `2.11.0` */
        start(option: VideoDecoderStartOption): Promise<any>;
        /** [Promise VideoDecoder.stop()](https://developers.weixin.qq.com/miniprogram/dev/api/media/video-decoder/VideoDecoder.stop.html)
         *
         * 停止解码
         *
         * 最低基础库： `2.11.0` */
        stop(): Promise<any>;
        /** [VideoDecoder.off(string eventName, function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/media/video-decoder/VideoDecoder.off.html)
         *
         * 取消监听录制事件。当对应事件触发时，该回调函数不再执行
         *
         * 最低基础库： `2.11.0` */
        off(
            /** 事件名 */
            eventName: string,
            /** 事件触发时执行的回调函数 */
            callback: (...args: any[]) => any,
        ): void;
        /** [VideoDecoder.on(string eventName, function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/media/video-decoder/VideoDecoder.on.html)
         *
         * 注册监听录制事件的回调函数。当对应事件触发时，回调函数会被执行
         *
         * 最低基础库： `2.11.0` */
        on(
            /** 事件名
             *
             * 参数 eventName 可选值：
             * - 'start': 开始事件。返回 {width, height};
             * - 'stop': 结束事件。;
             * - 'seek': seek 完成事件。;
             * - 'bufferchange': 缓冲区变化事件。;
             * - 'ended': 解码结束事件。; */
            eventName: "start" | "stop" | "seek" | "bufferchange" | "ended",
            /** 事件触发时执行的回调函数 */
            callback: (...args: any[]) => any,
        ): void;
    }
    interface WifiError {
        /** 错误信息
         *
         * | 错误码 | 错误信息 | 说明 |
         * | - | - | - |
         * | 0 | ok | 正常 |
         * | 12000 | not init | 未先调用 `startWifi` 接口 |
         * | 12001 | system not support | 当前系统不支持相关能力 |
         * | 12002 | password error Wi-Fi | 密码错误 |
         * | 12003 | connection timeout | 连接超时 |
         * | 12004 | duplicate request | 重复连接 Wi-Fi |
         * | 12005 | wifi not turned on | Android 特有，未打开 Wi-Fi 开关 |
         * | 12006 | gps not turned on | Android 特有，未打开 GPS 定位开关 |
         * | 12007 | user denied | 用户拒绝授权链接 Wi-Fi |
         * | 12008 | invalid SSID | 无效 SSID |
         * | 12009 | system config err | 系统运营商配置拒绝连接 Wi-Fi |
         * | 12010 | system internal error | 系统其他错误，需要在 errmsg 打印具体的错误原因 |
         * | 12011 | weapp in background | 应用在后台无法配置 Wi-Fi |
         * | 12013 | wifi config may be expired | 系统保存的 Wi-Fi 配置过期，建议忘记 Wi-Fi 后重试 | */ errMsg: string;
        /** 错误码
         *
         * | 错误码 | 错误信息 | 说明 |
         * | - | - | - |
         * | 0 | ok | 正常 |
         * | 12000 | not init | 未先调用 `startWifi` 接口 |
         * | 12001 | system not support | 当前系统不支持相关能力 |
         * | 12002 | password error Wi-Fi | 密码错误 |
         * | 12003 | connection timeout | 连接超时 |
         * | 12004 | duplicate request | 重复连接 Wi-Fi |
         * | 12005 | wifi not turned on | Android 特有，未打开 Wi-Fi 开关 |
         * | 12006 | gps not turned on | Android 特有，未打开 GPS 定位开关 |
         * | 12007 | user denied | 用户拒绝授权链接 Wi-Fi |
         * | 12008 | invalid SSID | 无效 SSID |
         * | 12009 | system config err | 系统运营商配置拒绝连接 Wi-Fi |
         * | 12010 | system internal error | 系统其他错误，需要在 errmsg 打印具体的错误原因 |
         * | 12011 | weapp in background | 应用在后台无法配置 Wi-Fi |
         * | 12013 | wifi config may be expired | 系统保存的 Wi-Fi 配置过期，建议忘记 Wi-Fi 后重试 | */ errCode: number;
    }
    interface Worker {
        /** [Worker.onMessage(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/worker/Worker.onMessage.html)
         *
         * 监听主线程/Worker 线程向当前线程发送的消息的事件。 */
        onMessage(
            /** 主线程/Worker 线程向当前线程发送的消息的事件的回调函数 */
            callback: WorkerOnMessageCallback,
        ): void;
        /** [Worker.onProcessKilled(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/worker/Worker.onProcessKilled.html)
         *
         * 监听 worker线程被系统回收事件（当iOS系统资源紧张时，worker线程存在被系统回收的可能，开发者可监听此事件并重新创建一个worker）。仅限在主线程 worker 对象上调用。 */
        onProcessKilled(
            /** worker线程被系统回收事件的回调函数 */
            callback: OnProcessKilledCallback,
        ): void;
        /** [Worker.postMessage(Object message)](https://developers.weixin.qq.com/miniprogram/dev/api/worker/Worker.postMessage.html)
*
* 向主线程/Worker 线程发送的消息。
*
* **示例代码**
*
*
* worker 线程中
* ```js
worker.postMessage({
  msg: 'hello from worker'
})
```
*
* 主线程中
* ```js
const worker = wx.createWorker('workers/request/index.js')

worker.postMessage({
  msg: 'hello from main'
})
``` */
        postMessage(
            /** 需要发送的消息，必须是一个可序列化的 JavaScript key-value 形式的对象。 */
            message: IAnyObject,
        ): void;
        /** [Worker.terminate()](https://developers.weixin.qq.com/miniprogram/dev/api/worker/Worker.terminate.html)
         *
         * 结束当前 Worker 线程。仅限在主线程 worker 对象上调用。 */
        terminate(): void;
    }
    interface WriteSyncError {
        /** 错误信息
         *
         * | 错误信息 | 说明 |
         * | - | - |
         * | bad file descriptor | 无效的文件描述符 |
         * | fail permission denied | 指定的 fd 路径没有写权限 |
         * | fail sdcard not mounted | android sdcard 挂载失败 | */ errMsg: string;
        /** 错误码
         *
         * | 错误信息 | 说明 |
         * | - | - |
         * | bad file descriptor | 无效的文件描述符 |
         * | fail permission denied | 指定的 fd 路径没有写权限 |
         * | fail sdcard not mounted | android sdcard 挂载失败 | */ errCode: number;
    }
    interface Wx {
        /** [ArrayBuffer wx.base64ToArrayBuffer(string base64)](https://developers.weixin.qq.com/miniprogram/dev/api/base/wx.base64ToArrayBuffer.html)
         *
         * 将 Base64 字符串转成 ArrayBuffer 对象
         *
         * 最低基础库： `1.1.0`
         * @deprecated 基础库版本 [2.4.0](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) 起已废弃
         */
        base64ToArrayBuffer(
            /** 要转化成 ArrayBuffer 对象的 Base64 字符串 */
            base64: string,
        ): ArrayBuffer;
        /** [Object wx.getAccountInfoSync()](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/account-info/wx.getAccountInfoSync.html)
*
* 获取当前帐号信息。线上小程序版本号仅支持在正式版小程序中获取，开发版和体验版中无法获取。
*
* **示例代码**
*
*
* ```js
const accountInfo = wx.getAccountInfoSync();
console.log(accountInfo.miniProgram.appId) // 小程序 appId
console.log(accountInfo.plugin.appId) // 插件 appId
console.log(accountInfo.plugin.version) // 插件版本号， 'a.b.c' 这样的形式
```
*
* 最低基础库： `2.2.2` */
        getAccountInfoSync(): AccountInfo;
        /** [Object wx.getBatteryInfoSync()](https://developers.weixin.qq.com/miniprogram/dev/api/device/battery/wx.getBatteryInfoSync.html)
         *
         * [wx.getBatteryInfo](https://developers.weixin.qq.com/miniprogram/dev/api/device/battery/wx.getBatteryInfo.html) 的同步版本 */
        getBatteryInfoSync(): GetBatteryInfoSyncResult;
        /** [Object wx.getEnterOptionsSync()](https://developers.weixin.qq.com/miniprogram/dev/api/base/app/life-cycle/wx.getEnterOptionsSync.html)
         *
         * 获取本次小程序启动时的参数。如果当前是冷启动，则返回值与 [`App.onLaunch`](https://developers.weixin.qq.com/miniprogram/dev/reference/api/App.html#onLaunch-Object-object) 的回调参数一致；如果当前是热启动，则返回值与 [`App.onShow`](https://developers.weixin.qq.com/miniprogram/dev/reference/api/App.html#onShow-Object-object) 一致。
         *
         * **返回有效 referrerInfo 的场景**
         *
         * | 场景值 | 场景                            | appId含义  |
         * | ------ | ------------------------------- | ---------- |
         * | 1020   | 公众号 profile 页相关小程序列表 | 来源公众号 |
         * | 1035   | 公众号自定义菜单                | 来源公众号 |
         * | 1036   | App 分享消息卡片                | 来源App    |
         * | 1037   | 小程序打开小程序                | 来源小程序 |
         * | 1038   | 从另一个小程序返回              | 来源小程序 |
         * | 1043   | 公众号模板消息                  | 来源公众号 |
         *
         * **注意**
         *
         * 部分版本在无 `referrerInfo` 的时候会返回 `undefined`，建议使用 `options.referrerInfo && options.referrerInfo.appId` 进行判断。
         *
         * 最低基础库： `2.9.4` */
        getEnterOptionsSync(): LaunchOptionsApp;
        /** [Object wx.getExptInfoSync(Array.&lt;string&gt; keys)](https://developers.weixin.qq.com/miniprogram/dev/api/data-analysis/wx.getExptInfoSync.html)
         *
         * 给定实验参数数组，获取对应的实验参数值
         *
         * **提示**
         *
         * 假设实验参数有 `color`, `size`
         * 调用 wx.getExptInfoSync() 会返回 `{color:'#fff',size:20}` 类似的结果
         * 而 wx.getExptInfoSync(['color']) 则只会返回 `{color:'#fff'}`
         *
         * 最低基础库： `2.14.4` */
        getExptInfoSync(
            /** 实验参数数组，不填则获取所有实验参数 */
            keys?: string[],
        ): IAnyObject;
        /** [Object wx.getExtConfigSync()](https://developers.weixin.qq.com/miniprogram/dev/api/ext/wx.getExtConfigSync.html)
*
* [wx.getExtConfig](https://developers.weixin.qq.com/miniprogram/dev/api/ext/wx.getExtConfig.html) 的同步版本。
*
* **Tips**
*
*
* 1. 本接口暂时无法通过 [wx.canIUse](https://developers.weixin.qq.com/miniprogram/dev/api/base/wx.canIUse.html) 判断是否兼容，开发者需要自行判断 [wx.getExtConfigSync](https://developers.weixin.qq.com/miniprogram/dev/api/ext/wx.getExtConfigSync.html) 是否存在来兼容
*
* ****
*
* ```js
let extConfig = wx.getExtConfigSync? wx.getExtConfigSync(): {}
console.log(extConfig)
```
*
* 最低基础库： `1.1.0` */
        getExtConfigSync(): IAnyObject;
        /** [Object wx.getLaunchOptionsSync()](https://developers.weixin.qq.com/miniprogram/dev/api/base/app/life-cycle/wx.getLaunchOptionsSync.html)
         *
         * 获取小程序启动时的参数。与 [`App.onLaunch`](https://developers.weixin.qq.com/miniprogram/dev/reference/api/App.html#onlaunchobject-object) 的回调参数一致。
         *
         * **返回有效 referrerInfo 的场景**
         *
         * | 场景值 | 场景                            | appId含义  |
         * | ------ | ------------------------------- | ---------- |
         * | 1020   | 公众号 profile 页相关小程序列表 | 来源公众号 |
         * | 1035   | 公众号自定义菜单                | 来源公众号 |
         * | 1036   | App 分享消息卡片                | 来源App    |
         * | 1037   | 小程序打开小程序                | 来源小程序 |
         * | 1038   | 从另一个小程序返回              | 来源小程序 |
         * | 1043   | 公众号模板消息                  | 来源公众号 |
         * | 1069   | 移动应用                    | 来源App |
         *
         * **注意**
         *
         * 部分版本在无`referrerInfo`的时候会返回 `undefined`，建议使用 `options.referrerInfo && options.referrerInfo.appId` 进行判断。
         *
         * 最低基础库： `2.1.2` */
        getLaunchOptionsSync(): LaunchOptionsApp;
        /** [Object wx.getMenuButtonBoundingClientRect()](https://developers.weixin.qq.com/miniprogram/dev/api/ui/menu/wx.getMenuButtonBoundingClientRect.html)
         *
         * 获取菜单按钮（右上角胶囊按钮）的布局位置信息。坐标信息以屏幕左上角为原点。
         *
         * 最低基础库： `2.1.0` */
        getMenuButtonBoundingClientRect(): Rect;
        /** [Object wx.getStorageInfoSync()](https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.getStorageInfoSync.html)
*
* [wx.getStorageInfo](https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.getStorageInfo.html) 的同步版本
*
* **示例代码**
*
*
* ```js
wx.getStorageInfo({
  success (res) {
    console.log(res.keys)
    console.log(res.currentSize)
    console.log(res.limitSize)
  }
})
```
*
* ```js
try {
  const res = wx.getStorageInfoSync()
  console.log(res.keys)
  console.log(res.currentSize)
  console.log(res.limitSize)
} catch (e) {
  // Do something when catch error
}
``` */
        getStorageInfoSync(): GetStorageInfoSyncOption;
        /** [Object wx.getSystemInfoSync()](https://developers.weixin.qq.com/miniprogram/dev/api/base/system/wx.getSystemInfoSync.html)
*
* [wx.getSystemInfo](https://developers.weixin.qq.com/miniprogram/dev/api/base/system/wx.getSystemInfo.html) 的同步版本
*
* **示例代码**
*
*
* [在微信开发者工具中查看示例](https://developers.weixin.qq.com/s/WkUCgXmS7mqO)
*
* ```js
wx.getSystemInfo({
  success (res) {
    console.log(res.model)
    console.log(res.pixelRatio)
    console.log(res.windowWidth)
    console.log(res.windowHeight)
    console.log(res.language)
    console.log(res.version)
    console.log(res.platform)
  }
})
```
*
* ```js
try {
  const res = wx.getSystemInfoSync()
  console.log(res.model)
  console.log(res.pixelRatio)
  console.log(res.windowWidth)
  console.log(res.windowHeight)
  console.log(res.language)
  console.log(res.version)
  console.log(res.platform)
} catch (e) {
  // Do something when catch error
}
``` */
        getSystemInfoSync(): SystemInfo;
        /** [[Animation](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.html) wx.createAnimation(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/wx.createAnimation.html)
         *
         * 创建一个动画实例 [animation](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.html)。调用实例的方法来描述动画。最后通过动画实例的 export 方法导出动画数据传递给组件的 animation 属性。 */
        createAnimation(option: StepOption): Animation;
        /** [[AudioContext](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/AudioContext.html) wx.createAudioContext(string id, Object this)](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/wx.createAudioContext.html)
         *
         * 创建 [audio](https://developers.weixin.qq.com/miniprogram/dev/component/audio.html) 上下文 [AudioContext](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/AudioContext.html) 对象。
         * @deprecated 基础库版本 [1.6.0](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) 起已废弃，请使用 [wx.createInnerAudioContext](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/wx.createInnerAudioContext.html) 替换
         */
        createAudioContext(
            /** [audio](https://developers.weixin.qq.com/miniprogram/dev/component/audio.html) 组件的 id */
            id: string,
            /** 在自定义组件下，当前组件实例的this，以操作组件内 [audio](https://developers.weixin.qq.com/miniprogram/dev/component/audio.html) 组件 */
            component?: Component.TrivialInstance | Page.TrivialInstance,
        ): AudioContext;
        /** [[BackgroundAudioManager](https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/BackgroundAudioManager.html) wx.getBackgroundAudioManager()](https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/wx.getBackgroundAudioManager.html)
         *
         * 获取**全局唯一**的背景音频管理器。
         * 小程序切入后台，如果音频处于播放状态，可以继续播放。但是后台状态不能通过调用API操纵音频的播放状态。
         *
         * 从微信客户端6.7.2版本开始，若需要在小程序切后台后继续播放音频，需要在 [app.json](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html) 中配置 `requiredBackgroundModes` 属性。开发版和体验版上可以直接生效，正式版还需通过审核。
         *
         * 最低基础库： `1.2.0` */
        getBackgroundAudioManager(): BackgroundAudioManager;
        /** [[CameraContext](https://developers.weixin.qq.com/miniprogram/dev/api/media/camera/CameraContext.html) wx.createCameraContext()](https://developers.weixin.qq.com/miniprogram/dev/api/media/camera/wx.createCameraContext.html)
         *
         * 创建 [camera](https://developers.weixin.qq.com/miniprogram/dev/component/camera.html) 上下文 [CameraContext](https://developers.weixin.qq.com/miniprogram/dev/api/media/camera/CameraContext.html) 对象。
         *
         * 最低基础库： `1.6.0` */
        createCameraContext(): CameraContext;
        /** [[CanvasContext](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.html) wx.createCanvasContext(string canvasId, Object this)](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/wx.createCanvasContext.html)
         *
         * 创建 canvas 的绘图上下文 [CanvasContext](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.html) 对象
         * @deprecated 基础库版本 [2.9.0](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) 起已废弃，请使用 [Canvas](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/Canvas.html) 替换
         */
        createCanvasContext(
            /** 要获取上下文的 [canvas](https://developers.weixin.qq.com/miniprogram/dev/component/canvas.html) 组件 canvas-id 属性 */
            canvasId: string,
            /** 在自定义组件下，当前组件实例的this，表示在这个自定义组件下查找拥有 canvas-id 的 [canvas](https://developers.weixin.qq.com/miniprogram/dev/component/canvas.html) ，如果省略则不在任何自定义组件内查找 */
            component?: Component.TrivialInstance | Page.TrivialInstance,
        ): CanvasContext;
        /** [[DownloadTask](https://developers.weixin.qq.com/miniprogram/dev/api/network/download/DownloadTask.html) wx.downloadFile(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/network/download/wx.downloadFile.html)
*
* 下载文件资源到本地。客户端直接发起一个 HTTPS GET 请求，返回文件的本地临时路径 (本地路径)，单次下载允许的最大文件为 200MB。使用前请注意阅读[相关说明](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/network.html)。
*
* 注意：请在服务端响应的 header 中指定合理的 `Content-Type` 字段，以保证客户端正确处理文件类型。
*
* **示例代码**
*
*
* ```js
wx.downloadFile({
  url: 'https://example.com/audio/123', //仅为示例，并非真实的资源
  success (res) {
    // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
    if (res.statusCode === 200) {
      wx.playVoice({
        filePath: res.tempFilePath
      })
    }
  }
})
``` */
        downloadFile(option: DownloadFileOption): DownloadTask;
        /** [[FileSystemManager](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.html) wx.getFileSystemManager()](https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.getFileSystemManager.html)
         *
         * 获取全局唯一的文件管理器
         *
         * 最低基础库： `1.9.9` */
        getFileSystemManager(): FileSystemManager;
        /** [[InnerAudioContext](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/InnerAudioContext.html) wx.createInnerAudioContext()](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/wx.createInnerAudioContext.html)
         *
         * 创建内部 [audio](https://developers.weixin.qq.com/miniprogram/dev/component/audio.html) 上下文 [InnerAudioContext](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/InnerAudioContext.html) 对象。
         *
         * 最低基础库： `1.6.0` */
        createInnerAudioContext(): InnerAudioContext;
        /** [[IntersectionObserver](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/IntersectionObserver.html) wx.createIntersectionObserver(Object component, Object options)](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/wx.createIntersectionObserver.html)
         *
         * 创建并返回一个 IntersectionObserver 对象实例。在自定义组件或包含自定义组件的页面中，应使用 `this.createIntersectionObserver([options])` 来代替。
         *
         * **示例代码**
         *
         * [在微信开发者工具中查看示例](https://developers.weixin.qq.com/s/LAbMxkmI7F2A)
         *
         * 最低基础库： `1.9.3` */
        createIntersectionObserver(
            /** 自定义组件实例 */
            component: IAnyObject,
            /** 选项 */
            options?: CreateIntersectionObserverOption,
        ): IntersectionObserver;
        /** [[InterstitialAd](https://developers.weixin.qq.com/miniprogram/dev/api/ad/InterstitialAd.html) wx.createInterstitialAd(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/ad/wx.createInterstitialAd.html)
         *
         * 创建插屏广告组件。请通过 [wx.getSystemInfoSync()](https://developers.weixin.qq.com/miniprogram/dev/api/base/system/wx.getSystemInfoSync.html) 返回对象的 SDKVersion 判断基础库版本号后再使用该 API。每次调用该方法创建插屏广告都会返回一个全新的实例（小程序端的插屏广告实例不允许跨页面使用）。
         *
         * 最低基础库： `2.6.0` */
        createInterstitialAd(option: CreateInterstitialAdOption): InterstitialAd;
        /** [[LivePlayerContext](https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePlayerContext.html) wx.createLivePlayerContext(string id, Object this)](https://developers.weixin.qq.com/miniprogram/dev/api/media/live/wx.createLivePlayerContext.html)
         *
         * 创建 [live-player](https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html) 上下文 [LivePlayerContext](https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePlayerContext.html) 对象。建议使用 [wx.createSelectorQuery](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/wx.createSelectorQuery.html) 获取 context 对象。
         *
         * 最低基础库： `1.7.0` */
        createLivePlayerContext(
            /** [live-player](https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html) 组件的 id */
            id: string,
            /** 在自定义组件下，当前组件实例的this，以操作组件内 [live-player](https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html) 组件 */
            component?: Component.TrivialInstance | Page.TrivialInstance,
        ): LivePlayerContext;
        /** [[LivePusherContext](https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePusherContext.html) wx.createLivePusherContext()](https://developers.weixin.qq.com/miniprogram/dev/api/media/live/wx.createLivePusherContext.html)
         *
         * 创建 [live-pusher](https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html) 上下文 [LivePusherContext](https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePusherContext.html) 对象。
         *
         * 最低基础库： `1.7.0` */
        createLivePusherContext(): LivePusherContext;
        /** [[LogManager](https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/LogManager.html) wx.getLogManager(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/wx.getLogManager.html)
*
* 获取日志管理器对象。
*
* **示例代码**
*
*
* ```js
const logger = wx.getLogManager({level: 1})
logger.log({str: 'hello world'}, 'basic log', 100, [1, 2, 3])
logger.info({str: 'hello world'}, 'info log', 100, [1, 2, 3])
logger.debug({str: 'hello world'}, 'debug log', 100, [1, 2, 3])
logger.warn({str: 'hello world'}, 'warn log', 100, [1, 2, 3])
```
*
* 最低基础库： `2.1.0` */
        getLogManager(option: GetLogManagerOption): LogManager;
        /** [[MapContext](https://developers.weixin.qq.com/miniprogram/dev/api/media/map/MapContext.html) wx.createMapContext(string mapId, Object this)](https://developers.weixin.qq.com/miniprogram/dev/api/media/map/wx.createMapContext.html)
         *
         * 创建 [map](https://developers.weixin.qq.com/miniprogram/dev/component/map.html) 上下文 [MapContext](https://developers.weixin.qq.com/miniprogram/dev/api/media/map/MapContext.html) 对象。建议使用 [wx.createSelectorQuery](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/wx.createSelectorQuery.html) 获取 context 对象。 */
        createMapContext(
            /** [map](https://developers.weixin.qq.com/miniprogram/dev/component/map.html) 组件的 id */
            mapId: string,
            /** 在自定义组件下，当前组件实例的this，以操作组件内 [map](https://developers.weixin.qq.com/miniprogram/dev/component/map.html) 组件 */
            component?: Component.TrivialInstance | Page.TrivialInstance,
        ): MapContext;
        /** [[MediaAudioPlayer](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/MediaAudioPlayer.html) wx.createMediaAudioPlayer()](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/wx.createMediaAudioPlayer.html)
*
* 创建媒体音频播放器对象 [MediaAudioPlayer](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/MediaAudioPlayer.html) 对象，可用于播放视频解码器 [VideoDecoder](https://developers.weixin.qq.com/miniprogram/dev/api/media/video-decoder/VideoDecoder.html) 输出的音频。
*
* **示例代码**
*
*
* ```js
  // 创建视频解码器，具体参数见 createVideoDecoder 文档
  const videoDecoder = wx.createVideoDecoder()
  // 创建媒体音频播放器
  const mediaAudioPlayer = wx.createMediaAudioPlayer()
  // 启动视频解码器
  videoDecoder.start()
  // 启动播放器
  mediaAudioPlayer.start().then(() => {
    // 添加播放器音频来源
    mediaAudioPlayer.addAudioSource(videoDecoder).then(res => {
      videoDecoder.getFrameData() // 建议在 requestAnimationFrame 里获取每一帧视频数据
      console.log(res)
    })

    // 移除播放器音频来源
    mediaAudioPlayer.removeAudioSource(videoDecoder).then()
    // 停止播放器
    mediaAudioPlayer.stop().then()
    // 销毁播放器
    mediaAudioPlayer.destroy().then()
    // 设置播放器音量
    mediaAudioPlayer.volume = 0.5
  })
```
*
* **完整demo（小游戏）**
*
*
* - https://developers.weixin.qq.com/s/SF2duHmb7MjI
*
* 最低基础库： `2.13.0` */
        createMediaAudioPlayer(): MediaAudioPlayer;
        /** [[MediaContainer](https://developers.weixin.qq.com/miniprogram/dev/api/media/video-processing/MediaContainer.html) wx.createMediaContainer()](https://developers.weixin.qq.com/miniprogram/dev/api/media/video-processing/wx.createMediaContainer.html)
         *
         * 创建音视频处理容器，最终可将容器中的轨道合成一个视频
         *
         * 最低基础库： `2.9.0` */
        createMediaContainer(): MediaContainer;
        /** [[MediaRecorder](https://developers.weixin.qq.com/miniprogram/dev/api/media/media-recorder/MediaRecorder.html) wx.createMediaRecorder(Object canvas, Object options)](https://developers.weixin.qq.com/miniprogram/dev/api/media/media-recorder/wx.createMediaRecorder.html)
*
* 创建 WebGL 画面录制器，可逐帧录制在 WebGL 上渲染的画面并导出视频文件
*
* **示例代码**
*
*
* [在微信开发者工具中查看示例](https://developers.weixin.qq.com/s/MCz3kPmC7zpa)
*
* **低版本异步接口兼容**
*
*
* 对基础库 2.16.1 版本前的 mediaRecorder，所有的接口都没有返回 Promise 对象，若需要兼容低版本，则可采用如下方式的写法：
* ```javascript
// 启动 mediaRecorder
await new Promise(resolve => {
  recorder.on('start', resolve)
  recorder.start()
})

// 逐帧绘制
while (frames--) {
  await new Promise(resolve => recorder.requestFrame(resolve))
  render()
}

// 绘制完成，生成视频
const {tempFilePath} = await new Promise(resolve => {
  recorder.on('stop', resolve)
  recorder.stop()
})
```
*
* 最低基础库： `2.11.0` */
        createMediaRecorder(
            /** WebGL 对象，通过 [SelectorQuery](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/SelectorQuery.html) 获取到的 node 对象或通过 [wx.createOffscreenCanvas](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/wx.createOffscreenCanvas.html) 创建的离屏 WebGL Canvas 对象 */
            canvas: IAnyObject,
            options: CreateMediaRecorderOption,
        ): MediaRecorder;
        /** [[NFCAdapter](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/NFCAdapter.html) wx.getNFCAdapter()](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/wx.getNFCAdapter.html)
         *
         * 获取 NFC 实例
         *
         * **示例代码**
         *
         * [在微信开发者工具中查看示例](https://developers.weixin.qq.com/s/1WsbDwmb75ig)
         *
         * 最低基础库： `2.11.2` */
        getNFCAdapter(): NFCAdapter;
        /** [[OffscreenCanvas](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/OffscreenCanvas.html) wx.createOffscreenCanvas(object object, number width, number height, Object this)](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/wx.createOffscreenCanvas.html)
         *
         * 创建离屏 canvas 实例
         *
         * **离屏 Canvas 类型不可混用**
         *
         * 由于 webgl canvas 和 2d canvas 的底层实现方式不同，因此必须要在调用 `wx.createOffscreenCanvas` 时提前指定类型。
         *
         * 指定类型后，离屏 canvas `getContext(type)` 调用不允许混用，如不能对 webgl canvas 调用 `getContext('2d')`。
         *
         * 同样的，不同类型 canvas 调用 `createImage` 创建的图片对象也不支持混用，使用时请注意尽量使用 canvas 自身的 `createImage` 创建图片对象。
         *
         * **与 MediaRecorder 结合**
         *
         * 离屏 webgl canvas 支持作为参数传递给 [`wx.createMediaRecorder`](https://developers.weixin.qq.com/miniprogram/dev/api/media/media-recorder/wx.createMediaRecorder.html), 离屏 2d canvas 暂不支持。
         *
         * **旧版 createOffscreenCanvas**
         *
         * 旧版函数签名为 `wx.createOffscreenCanvas(width: number, height: number, this: object): OffscreenCanvas`，从基础库 2.7.0 开始支持
         *
         * 从基础库 2.16.1 开始改为 `wx.createOffscreenCanvas(options: object): OffscreenCanvas`，向下兼容旧版入参。
         * 但需注意旧版入参只能创建 webgl 类型，如需创建 2d 类型则必须使用新版。
         *
         * 最低基础库： `2.16.1` */
        createOffscreenCanvas(
            /** 画布宽度 */
            width: number,
            /** 画布高度 */
            height: number,
            /** 在自定义组件下，当前组件实例的 this */
            component?: Component.TrivialInstance | Page.TrivialInstance,
        ): OffscreenCanvas;
        /** [[OffscreenCanvas](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/OffscreenCanvas.html) wx.createOffscreenCanvas(object object, number width, number height, Object this)](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/wx.createOffscreenCanvas.html)
         *
         * 创建离屏 canvas 实例
         *
         * **离屏 Canvas 类型不可混用**
         *
         * 由于 webgl canvas 和 2d canvas 的底层实现方式不同，因此必须要在调用 `wx.createOffscreenCanvas` 时提前指定类型。
         *
         * 指定类型后，离屏 canvas `getContext(type)` 调用不允许混用，如不能对 webgl canvas 调用 `getContext('2d')`。
         *
         * 同样的，不同类型 canvas 调用 `createImage` 创建的图片对象也不支持混用，使用时请注意尽量使用 canvas 自身的 `createImage` 创建图片对象。
         *
         * **与 MediaRecorder 结合**
         *
         * 离屏 webgl canvas 支持作为参数传递给 [`wx.createMediaRecorder`](https://developers.weixin.qq.com/miniprogram/dev/api/media/media-recorder/wx.createMediaRecorder.html), 离屏 2d canvas 暂不支持。
         *
         * **旧版 createOffscreenCanvas**
         *
         * 旧版函数签名为 `wx.createOffscreenCanvas(width: number, height: number, this: object): OffscreenCanvas`，从基础库 2.7.0 开始支持
         *
         * 从基础库 2.16.1 开始改为 `wx.createOffscreenCanvas(options: object): OffscreenCanvas`，向下兼容旧版入参。
         * 但需注意旧版入参只能创建 webgl 类型，如需创建 2d 类型则必须使用新版。
         *
         * 最低基础库： `2.16.1` */
        createOffscreenCanvas(
            option: CreateOffscreenCanvasOption,
        ): OffscreenCanvas;
        /** [[Performance](https://developers.weixin.qq.com/miniprogram/dev/api/base/performance/Performance.html) wx.getPerformance()](https://developers.weixin.qq.com/miniprogram/dev/api/base/performance/wx.getPerformance.html)
*
* 获取当前小程序性能相关的信息。
*
* ****
*
* 目前支持获取以下几类性能指标：
*
* | 指标类型（entryType） | 指标名称          |
* | ------------------- | ---------------- |
* | 路由（navigation）   | route: 路由性能；appLaunch: 小程序启动耗时  |
* | 渲染（render）       | firstRender: 页面首次渲染耗时      |
* | 脚本（script）       | evaluateScript: 注入脚本耗时   |
*
*  性能数据详情：
*
* | 属性 | 说明 |
* | ---- | ----- |
* | entryType | 指标类型 |
* | name | 指标名称 |
* | startTime | 指标调用开始时间；appLaunch为点击图标的时间 |
* | duration | 耗时 |
* | path | 路径 |
* | navigationStart | 路由真正响应开始时间 |
* | navigationType | 路由详细类型 |
*
* **示例代码**
*
*
* ```js
const performance = wx.getPerformance()
const observer = performance.createObserver((entryList) => {
  console.log(entryList.getEntries())
})
observer.observe({ entryTypes: ['render', 'script'] })
```
*
* 最低基础库： `2.11.0` */
        getPerformance(): Performance;
        /** [[RealtimeLogManager](https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/RealtimeLogManager.html) wx.getRealtimeLogManager()](https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/wx.getRealtimeLogManager.html)
*
* 获取实时日志管理器对象。
*
* **示例代码**
*
*
* ```js
// 小程序端
const logger = wx.getRealtimeLogManager()
logger.info({str: 'hello world'}, 'info log', 100, [1, 2, 3])
logger.error({str: 'hello world'}, 'error log', 100, [1, 2, 3])
logger.warn({str: 'hello world'}, 'warn log', 100, [1, 2, 3])

// 插件端，基础库 2.16.0 版本后支持，只允许采用 key-value 的新格式上报
const logManager = wx.getRealtimeLogManager()
const logger = logManager.tag('plugin-log1')
logger.info('key1', 'value1')
logger.error('key2', {str: 'value2'})
logger.warn('key3', 'value3')
```
*
* 最低基础库： `2.7.1` */
        getRealtimeLogManager(): RealtimeLogManager;
        /** [[RecorderManager](https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/RecorderManager.html) wx.getRecorderManager()](https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/wx.getRecorderManager.html)
         *
         * 获取**全局唯一**的录音管理器 RecorderManager
         *
         * 最低基础库： `1.6.0` */
        getRecorderManager(): RecorderManager;
        /** [[RequestTask](https://developers.weixin.qq.com/miniprogram/dev/api/network/request/RequestTask.html) wx.request(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/network/request/wx.request.html)
*
* 发起 HTTPS 网络请求。使用前请注意阅读[相关说明](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/network.html)。
*
* **data 参数说明**
*
*
* 最终发送给服务器的数据是 String 类型，如果传入的 data 不是 String 类型，会被转换成 String 。转换规则如下：
* - 对于 `GET` 方法的数据，会将数据转换成 query string（`encodeURIComponent(k)=encodeURIComponent(v)&encodeURIComponent(k)=encodeURIComponent(v)...`）
* - 对于 `POST` 方法且 `header['content-type']` 为 `application/json` 的数据，会对数据进行 JSON 序列化
* - 对于 `POST` 方法且 `header['content-type']` 为 `application/x-www-form-urlencoded` 的数据，会将数据转换成 query string `（encodeURIComponent(k)=encodeURIComponent(v)&encodeURIComponent(k)=encodeURIComponent(v)...）`
*
* **示例代码**
*
*
* ```js
wx.request({
  url: 'example.php', //仅为示例，并非真实的接口地址
  data: {
    x: '',
    y: ''
  },
  header: {
    'content-type': 'application/json' // 默认值
  },
  success (res) {
    console.log(res.data)
  }
})
``` */
        request<
            T extends string | IAnyObject | ArrayBuffer =
                | string
                | IAnyObject
                | ArrayBuffer,
        >(
            option: RequestOption<T>,
        ): RequestTask;
        /** [[RewardedVideoAd](https://developers.weixin.qq.com/miniprogram/dev/api/ad/RewardedVideoAd.html) wx.createRewardedVideoAd(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/ad/wx.createRewardedVideoAd.html)
         *
         * 创建激励视频广告组件。请通过 [wx.getSystemInfoSync()](https://developers.weixin.qq.com/miniprogram/dev/api/base/system/wx.getSystemInfoSync.html) 返回对象的 SDKVersion 判断基础库版本号后再使用该 API（小游戏端要求 >= 2.0.4， 小程序端要求 >= 2.6.0）。调用该方法创建的激励视频广告是一个单例（小游戏端是全局单例，小程序端是页面内单例，在小程序端的单例对象不允许跨页面使用）。
         *
         * 最低基础库： `2.0.4` */
        createRewardedVideoAd(
            option: CreateRewardedVideoAdOption,
        ): RewardedVideoAd;
        /** [[SelectorQuery](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/SelectorQuery.html) wx.createSelectorQuery()](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/wx.createSelectorQuery.html)
*
* 返回一个 SelectorQuery 对象实例。在自定义组件或包含自定义组件的页面中，应使用 `this.createSelectorQuery()` 来代替。
*
* **示例代码**
*
*
* ```js
const query = wx.createSelectorQuery()
query.select('#the-id').boundingClientRect()
query.selectViewport().scrollOffset()
query.exec(function(res){
  res[0].top       // #the-id节点的上边界坐标
  res[1].scrollTop // 显示区域的竖直滚动位置
})
```
*
* 最低基础库： `1.4.0` */
        createSelectorQuery(): SelectorQuery;
        /** [[SocketTask](https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/SocketTask.html) wx.connectSocket(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/wx.connectSocket.html)
*
* 创建一个 WebSocket 连接。使用前请注意阅读[相关说明](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/network.html)。**推荐使用 [SocketTask](https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/SocketTask.html) 的方式去管理 webSocket 链接，每一条链路的生命周期都更加可控。同时存在多个 webSocket 的链接的情况下使用 wx 前缀的方法可能会带来一些和预期不一致的情况。**
*
* **并发数**
*
*
* - 1.7.0 及以上版本，最多可以同时存在 5 个 WebSocket 连接。
* - 1.7.0 以下版本，一个小程序同时只能有一个 WebSocket 连接，如果当前已存在一个 WebSocket 连接，会自动关闭该连接，并重新创建一个 WebSocket 连接。
*
* **示例代码**
*
*
* ```js
wx.connectSocket({
  url: 'wss://example.qq.com',
  header:{
    'content-type': 'application/json'
  },
  protocols: ['protocol1']
})
``` */
        connectSocket(option: ConnectSocketOption): SocketTask;
        /** [[TCPSocket](https://developers.weixin.qq.com/miniprogram/dev/api/network/tcp/TCPSocket.html) wx.createTCPSocket()](https://developers.weixin.qq.com/miniprogram/dev/api/network/tcp/wx.createTCPSocket.html)
         *
         * 创建一个 TCP Socket 实例。使用前请注意阅读[相关说明](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/network.html)。
         *
         * **连接限制**
         *
         * - 允许与局域网的非本机 IP 通信
         * — 允许与配置过的服务器域名通信，详见[相关说明](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/network.html)
         * - 禁止与以下端口号连接：`1024 以下` `1099` `1433` `1521` `1719` `1720` `1723` `2049` `2375` `3128` `3306` `3389` `3659` `4045` `5060` `5061` `5432` `5984` `6379` `6000` `6566` `6665` `6666` `6667` `6668` `6669` `6697` `7001` `7002` `8000-8100` `8443` `8888` `9200` `9300` `10051` `10080` `11211` `27017` `27018` `27019`
         *
         * 最低基础库： `2.18.0` */
        createTCPSocket(): TCPSocket;
        /** [[UDPSocket](https://developers.weixin.qq.com/miniprogram/dev/api/network/udp/UDPSocket.html) wx.createUDPSocket()](https://developers.weixin.qq.com/miniprogram/dev/api/network/udp/wx.createUDPSocket.html)
         *
         * 创建一个 UDP Socket 实例。使用前请注意阅读[相关说明](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/network.html)。
         *
         * 最低基础库： `2.7.0` */
        createUDPSocket(): UDPSocket;
        /** [[UpdateManager](https://developers.weixin.qq.com/miniprogram/dev/api/base/update/UpdateManager.html) wx.getUpdateManager()](https://developers.weixin.qq.com/miniprogram/dev/api/base/update/wx.getUpdateManager.html)
         *
         * 获取**全局唯一**的版本更新管理器，用于管理小程序更新。关于小程序的更新机制，可以查看[运行机制](https://developers.weixin.qq.com/miniprogram/dev/framework/runtime/operating-mechanism.html)文档。
         *
         * **示例代码**
         *
         * [示例代码]((UpdateManager#示例代码))
         *
         * 最低基础库： `1.9.90` */
        getUpdateManager(): UpdateManager;
        /** [[UploadTask](https://developers.weixin.qq.com/miniprogram/dev/api/network/upload/UploadTask.html) wx.uploadFile(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/network/upload/wx.uploadFile.html)
*
* 将本地资源上传到服务器。客户端发起一个 HTTPS POST 请求，其中 `content-type` 为 `multipart/form-data`。使用前请注意阅读[相关说明](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/network.html)。
*
* **示例代码**
*
*
* ```js
wx.chooseImage({
  success (res) {
    const tempFilePaths = res.tempFilePaths
    wx.uploadFile({
      url: 'https://example.weixin.qq.com/upload', //仅为示例，非真实的接口地址
      filePath: tempFilePaths[0],
      name: 'file',
      formData: {
        'user': 'test'
      },
      success (res){
        const data = res.data
        //do something
      }
    })
  }
})
``` */
        uploadFile(option: UploadFileOption): UploadTask;
        /** [[UserCryptoManager](https://developers.weixin.qq.com/miniprogram/dev/api/base/crypto/UserCryptoManager.html) wx.getUserCryptoManager()](https://developers.weixin.qq.com/miniprogram/dev/api/base/crypto/wx.getUserCryptoManager.html)
         *
         * 获取用户加密模块
         *
         * 最低基础库： `2.17.3` */
        getUserCryptoManager(): UserCryptoManager;
        /** [[VideoContext](https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.html) wx.createVideoContext(string id, Object this)](https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.createVideoContext.html)
         *
         * 创建 [video](https://developers.weixin.qq.com/miniprogram/dev/component/video.html) 上下文 [VideoContext](https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.html) 对象。建议使用 [wx.createSelectorQuery](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/wx.createSelectorQuery.html) 获取 context 对象。 */
        createVideoContext(
            /** [video](https://developers.weixin.qq.com/miniprogram/dev/component/video.html) 组件的 id */
            id: string,
            /** 在自定义组件下，当前组件实例的this，以操作组件内 [video](https://developers.weixin.qq.com/miniprogram/dev/component/video.html) 组件 */
            component?: Component.TrivialInstance | Page.TrivialInstance,
        ): VideoContext;
        /** [[VideoDecoder](https://developers.weixin.qq.com/miniprogram/dev/api/media/video-decoder/VideoDecoder.html) wx.createVideoDecoder()](https://developers.weixin.qq.com/miniprogram/dev/api/media/video-decoder/wx.createVideoDecoder.html)
         *
         * 创建视频解码器，可逐帧获取解码后的数据
         *
         * 最低基础库： `2.11.0` */
        createVideoDecoder(): VideoDecoder;
        /** [[Worker](https://developers.weixin.qq.com/miniprogram/dev/api/worker/Worker.html) wx.createWorker(string scriptPath, object options)](https://developers.weixin.qq.com/miniprogram/dev/api/worker/wx.createWorker.html)
*
* 创建一个 Worker 线程
*
* **示例代码**
*
*
* ```js
// 创建普通worker
wx.createWorker('workers/index.js')
```
* ```js
// 创建实验worker
const worker = wx.createWorker('workers/index.js', {
  useExperimentalWorker: true
})
// 监听worker被系统回收事件
worker.onProcessKilled(() => {
  // 重新创建一个worker
  wx.createWorker('workers/index.js', {
    useExperimentalWorker: true
  })
})
```
*
* 最低基础库： `1.9.90` */
        createWorker(
            /** worker 入口文件的**绝对路径** */
            scriptPath: string,
            /** 可选参数 */
            options?: CreateWorkerOption,
        ): Worker;
        /** [any wx.getStorageSync(string key)](https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.getStorageSync.html)
*
* [wx.getStorage](https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.getStorage.html) 的同步版本
*
* **示例代码**
*
*
* ```js
wx.getStorage({
  key: 'key',
  success (res) {
    console.log(res.data)
  }
})
```
*
* ```js
try {
  var value = wx.getStorageSync('key')
  if (value) {
    // Do something with return value
  }
} catch (e) {
  // Do something when catch error
}
``` */
        getStorageSync<T = any>(
            /** 本地缓存中指定的 key */
            key: string,
        ): T;
        /** [boolean wx.canIUse(string schema)](https://developers.weixin.qq.com/miniprogram/dev/api/base/wx.canIUse.html)
*
* 判断小程序的API，回调，参数，组件等是否在当前版本可用。
*
* **参数说明**
*
*
* - `${API}` 代表 API 名字
* - `${method}` 代表调用方式，有效值为return, success, object, callback
* - `${param}` 代表参数或者返回值
* - `${option}` 代表参数的可选值或者返回值的属性
* - `${component}` 代表组件名字
* - `${attribute}` 代表组件属性
* - `${option}` 代表组件属性的可选值
*
* **示例代码**
*
*
* ```js
// 对象的属性或方法
wx.canIUse('console.log')
wx.canIUse('CameraContext.onCameraFrame')
wx.canIUse('CameraFrameListener.start')
wx.canIUse('Image.src')

// wx接口参数、回调或者返回值
wx.canIUse('openBluetoothAdapter')
wx.canIUse('getSystemInfoSync.return.safeArea.left')
wx.canIUse('getSystemInfo.success.screenWidth')
wx.canIUse('showToast.object.image')
wx.canIUse('onCompassChange.callback.direction')
wx.canIUse('request.object.method.GET')

// 组件的属性
wx.canIUse('live-player')
wx.canIUse('text.selectable')
wx.canIUse('button.open-type.contact')
```
*
* 最低基础库： `1.1.1` */
        canIUse(
            /** 使用 `${API}.${method}.${param}.${option}` 或者 `${component}.${attribute}.${option}` 方式来调用 */
            schema: string,
        ): boolean;
        /** [string wx.arrayBufferToBase64(ArrayBuffer arrayBuffer)](https://developers.weixin.qq.com/miniprogram/dev/api/base/wx.arrayBufferToBase64.html)
         *
         * 将 ArrayBuffer 对象转成 Base64 字符串
         *
         * 最低基础库： `1.1.0`
         * @deprecated 基础库版本 [2.4.0](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) 起已废弃
         */
        arrayBufferToBase64(
            /** 要转换成 Base64 字符串的 ArrayBuffer 对象 */
            arrayBuffer: ArrayBuffer,
        ): string;
        /** [wx.addCard(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/card/wx.addCard.html)
*
* 批量添加卡券。只有通过 [认证](https://developers.weixin.qq.com/miniprogram/product/renzheng.html) 的小程序或文化互动类目的小游戏才能使用。更多文档请参考 [微信卡券接口文档](https://mp.weixin.qq.com/cgi-bin/announce?action=getannouncement&key=1490190158&version=1&lang=zh_CN&platform=2)。
*
* **cardExt 说明**
*
*
* cardExt 是卡券的扩展参数，其值是一个 JSON 字符串。
*
* **示例代码**
*
*
* ```js
wx.addCard({
  cardList: [
    {
      cardId: '',
      cardExt: '{"code": "", "openid": "", "timestamp": "", "signature":""}'
    }, {
      cardId: '',
      cardExt: '{"code": "", "openid": "", "timestamp": "", "signature":""}'
    }
  ],
  success (res) {
    console.log(res.cardList) // 卡券添加结果
  }
})
```
*
* 最低基础库： `1.1.0` */
        addCard<T extends AddCardOption = AddCardOption>(
            option: T,
        ): PromisifySuccessResult<T, AddCardOption>;
        /** [wx.addFileToFavorites(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/favorites/wx.addFileToFavorites.html)
         *
         * 收藏文件
         *
         * 最低基础库： `2.16.1` */
        addFileToFavorites<
            T extends AddFileToFavoritesOption = AddFileToFavoritesOption,
        >(
            option: T,
        ): PromisifySuccessResult<T, AddFileToFavoritesOption>;
        /** [wx.addPhoneCalendar(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/calendar/wx.addPhoneCalendar.html)
         *
         * 向系统日历添加事件
         *
         * 最低基础库： `2.15.0` */
        addPhoneCalendar<
            T extends AddPhoneCalendarOption = AddPhoneCalendarOption,
        >(
            option: T,
        ): PromisifySuccessResult<T, AddPhoneCalendarOption>;
        /** [wx.addPhoneContact(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/contact/wx.addPhoneContact.html)
         *
         * 添加手机通讯录联系人。用户可以选择将该表单以「新增联系人」或「添加到已有联系人」的方式，写入手机系统通讯录。
         *
         * 最低基础库： `1.2.0` */
        addPhoneContact<
            T extends AddPhoneContactOption = AddPhoneContactOption,
        >(
            option: T,
        ): PromisifySuccessResult<T, AddPhoneContactOption>;
        /** [wx.addPhoneRepeatCalendar(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/calendar/wx.addPhoneRepeatCalendar.html)
         *
         * 向系统日历添加重复事件
         *
         * 最低基础库： `2.15.0` */
        addPhoneRepeatCalendar<
            T extends AddPhoneRepeatCalendarOption = AddPhoneRepeatCalendarOption,
        >(
            option: T,
        ): PromisifySuccessResult<T, AddPhoneRepeatCalendarOption>;
        /** [wx.addVideoToFavorites(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/favorites/wx.addVideoToFavorites.html)
         *
         * 收藏视频
         *
         * 最低基础库： `2.16.1` */
        addVideoToFavorites<
            T extends AddVideoToFavoritesOption = AddVideoToFavoritesOption,
        >(
            option: T,
        ): PromisifySuccessResult<T, AddVideoToFavoritesOption>;
        /** [wx.authPrivateMessage(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/share/wx.authPrivateMessage.html)
*
* 验证私密消息。用法详情见 [小程序私密消息使用指南](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/share/private-message.html)
*
* **示例代码**
*
*
* ```js
wx.authPrivateMessage({
  shareTicket: 'xxxxxx',
  success(res) {
    console.log('authPrivateMessage success', res)
    // res
    // {
    //   errMsg: 'authPrivateMessage:ok'
    //   valid: true
    //   iv: 'xxxx',
    //   encryptedData: 'xxxxxx'
    // }
  },
  fail(res) {
    console.log('authPrivateMessage fail', res)
  }
})
```
*
* 最低基础库： `2.13.0` */
        authPrivateMessage(option?: AuthPrivateMessageOption): void;
        /** [wx.authorize(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/authorize/wx.authorize.html)
*
* 提前向用户发起授权请求。调用后会立刻弹窗询问用户是否同意授权小程序使用某项功能或获取用户的某些数据，但不会实际调用对应接口。如果用户之前已经同意授权，则不会出现弹窗，直接返回成功。更多用法详见 [用户授权](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/authorize.html)。
* > 小程序插件可以使用 [wx.authorizeForMiniProgram](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/authorize/wx.authorizeForMiniProgram.html)
*
* **示例代码**
*
*
* ```js
// 可以通过 wx.getSetting 先查询一下用户是否授权了 "scope.record" 这个 scope
wx.getSetting({
  success(res) {
    if (!res.authSetting['scope.record']) {
      wx.authorize({
        scope: 'scope.record',
        success () {
          // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
          wx.startRecord()
        }
      })
    }
  }
})
```
*
* 最低基础库： `1.2.0` */
        authorize<T extends AuthorizeOption = AuthorizeOption>(
            option: T,
        ): PromisifySuccessResult<T, AuthorizeOption>;
        /** [wx.authorizeForMiniProgram(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/authorize/wx.authorizeForMiniProgram.html)
*
* **仅小程序插件中能调用该接口**，用法同 [wx.authorize](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/authorize/wx.authorize.html)。目前仅支持三种 scope（见下）
*
* **示例代码**
*
*
* ```js
wx.authorizeForMiniProgram({
  scope: 'scope.record',
  success () {
    // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
    wx.startRecord()
  }
})
```
*
* 最低基础库： `2.14.4` */
        authorizeForMiniProgram(option: AuthorizeForMiniProgramOption): void;
        /** [wx.canvasGetImageData(Object object, Object this)](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/wx.canvasGetImageData.html)
*
* 获取 canvas 区域隐含的像素数据。
*
* **示例代码**
*
*
* [在微信开发者工具中查看示例](https://developers.weixin.qq.com/s/yufmRjmZ7W8f)
*
* ```js
wx.canvasGetImageData({
  canvasId: 'myCanvas',
  x: 0,
  y: 0,
  width: 100,
  height: 100,
  success(res) {
    console.log(res.width) // 100
    console.log(res.height) // 100
    console.log(res.data instanceof Uint8ClampedArray) // true
    console.log(res.data.length) // 100 * 100 * 4
  }
})
```
*
* 最低基础库： `1.9.0` */
        canvasGetImageData<
            T extends CanvasGetImageDataOption = CanvasGetImageDataOption,
        >(
            option: T,
            /** 在自定义组件下，当前组件实例的this，以操作组件内 [canvas](https://developers.weixin.qq.com/miniprogram/dev/component/canvas.html) 组件 */
            component?: Component.TrivialInstance | Page.TrivialInstance,
        ): PromisifySuccessResult<T, CanvasGetImageDataOption>;
        /** [wx.canvasPutImageData(Object object, Object this)](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/wx.canvasPutImageData.html)
         *
         * 将像素数据绘制到画布。在自定义组件下，第二个参数传入自定义组件实例 this，以操作组件内 <canvas> 组件
         *
         * 最低基础库： `1.9.0` */
        canvasPutImageData<
            T extends CanvasPutImageDataOption = CanvasPutImageDataOption,
        >(
            option: T,
            /** 在自定义组件下，当前组件实例的this，以操作组件内 [canvas](https://developers.weixin.qq.com/miniprogram/dev/component/canvas.html) 组件 */
            component?: Component.TrivialInstance | Page.TrivialInstance,
        ): PromisifySuccessResult<T, CanvasPutImageDataOption>;
        /** [wx.canvasToTempFilePath(Object object, Object this)](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/wx.canvasToTempFilePath.html)
         *
         * 把当前画布指定区域的内容导出生成指定大小的图片。在 `draw()` 回调里调用该方法才能保证图片导出成功。 */
        canvasToTempFilePath<
            T extends CanvasToTempFilePathOption = CanvasToTempFilePathOption,
        >(
            option: T,
            /** 在自定义组件下，当前组件实例的this，以操作组件内 [canvas](https://developers.weixin.qq.com/miniprogram/dev/component/canvas.html) 组件 */
            component?: Component.TrivialInstance | Page.TrivialInstance,
        ): PromisifySuccessResult<T, CanvasToTempFilePathOption>;
        /** [wx.checkIsOpenAccessibility(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/accessibility/wx.checkIsOpenAccessibility.html)
         *
         * 检测是否开启视觉无障碍功能。
         *
         * 最低基础库： `2.13.0` */
        checkIsOpenAccessibility<
            T extends CheckIsOpenAccessibilityOption = CheckIsOpenAccessibilityOption,
        >(
            option?: T,
        ): PromisifySuccessResult<T, CheckIsOpenAccessibilityOption>;
        /** [wx.checkIsSoterEnrolledInDevice(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/soter/wx.checkIsSoterEnrolledInDevice.html)
*
* 获取设备内是否录入如指纹等生物信息的接口
*
* **示例代码**
*
*
* ```js
wx.checkIsSoterEnrolledInDevice({
  checkAuthMode: 'fingerPrint',
  success(res) {
    console.log(res.isEnrolled)
  }
})
```
*
* 最低基础库： `1.6.0` */
        checkIsSoterEnrolledInDevice<
            T extends CheckIsSoterEnrolledInDeviceOption = CheckIsSoterEnrolledInDeviceOption,
        >(
            option: T,
        ): PromisifySuccessResult<T, CheckIsSoterEnrolledInDeviceOption>;
        /** [wx.checkIsSupportSoterAuthentication(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/soter/wx.checkIsSupportSoterAuthentication.html)
*
* 获取本机支持的 SOTER 生物认证方式
*
* **示例代码**
*
*
* ```js
wx.checkIsSupportSoterAuthentication({
  success(res) {
    // res.supportMode = [] 不具备任何被SOTER支持的生物识别方式
    // res.supportMode = ['fingerPrint'] 只支持指纹识别
    // res.supportMode = ['fingerPrint', 'facial'] 支持指纹识别和人脸识别
  }
})
```
*
* 最低基础库： `1.5.0` */
        checkIsSupportSoterAuthentication<
            T extends CheckIsSupportSoterAuthenticationOption = CheckIsSupportSoterAuthenticationOption,
        >(
            option?: T,
        ): PromisifySuccessResult<T, CheckIsSupportSoterAuthenticationOption>;
        /** [wx.checkSession(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/login/wx.checkSession.html)
*
* 检查登录态是否过期。
* 通过 wx.login 接口获得的用户登录态拥有一定的时效性。用户越久未使用小程序，用户登录态越有可能失效。反之如果用户一直在使用小程序，则用户登录态一直保持有效。具体时效逻辑由微信维护，对开发者透明。开发者只需要调用 wx.checkSession 接口检测当前用户登录态是否有效。
*
* 登录态过期后开发者可以再调用 wx.login 获取新的用户登录态。调用成功说明当前 session_key 未过期，调用失败说明 session_key 已过期。更多使用方法详见 [小程序登录](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/login.html)。
*
* **示例代码**
*
*
* ```js
wx.checkSession({
  success () {
    //session_key 未过期，并且在本生命周期一直有效
  },
  fail () {
    // session_key 已经失效，需要重新执行登录流程
    wx.login() //重新登录
  }
})
``` */
        checkSession<T extends CheckSessionOption = CheckSessionOption>(
            option?: T,
        ): PromisifySuccessResult<T, CheckSessionOption>;
        /** [wx.chooseAddress(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/address/wx.chooseAddress.html)
*
* 获取用户收货地址。调起用户编辑收货地址原生界面，并在编辑完成后返回用户选择的地址。
*
* **示例代码**
*
*
* [在微信开发者工具中查看示例](https://developers.weixin.qq.com/s/024hHnmd772y)
* ```js
wx.chooseAddress({
  success (res) {
    console.log(res.userName)
    console.log(res.postalCode)
    console.log(res.provinceName)
    console.log(res.cityName)
    console.log(res.countyName)
    console.log(res.detailInfo)
    console.log(res.nationalCode)
    console.log(res.telNumber)
  }
})
```
*
* 最低基础库： `1.1.0` */
        chooseAddress<T extends ChooseAddressOption = ChooseAddressOption>(
            option?: T,
        ): PromisifySuccessResult<T, ChooseAddressOption>;
        /** [wx.chooseContact(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/contact/wx.chooseContact.html)
         *
         * 拉起手机通讯录，选择联系人。
         *
         * 最低基础库： `2.8.0` */
        chooseContact(option?: ChooseContactOption): void;
        /** [wx.chooseImage(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.chooseImage.html)
*
* 从本地相册选择图片或使用相机拍照。
*
* ****
*
* ```js
wx.chooseImage({
  count: 1,
  sizeType: ['original', 'compressed'],
  sourceType: ['album', 'camera'],
  success (res) {
    // tempFilePath可以作为img标签的src属性显示图片
    const tempFilePaths = res.tempFilePaths
  }
})
``` */
        chooseImage<T extends ChooseImageOption = ChooseImageOption>(
            option?: T,
        ): PromisifySuccessResult<T, ChooseImageOption>;
        /** [wx.chooseInvoice(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/invoice/wx.chooseInvoice.html)
         *
         * 选择用户已有的发票。
         *
         * **通过 cardId 和 encryptCode 获得报销发票的信息**
         *
         * 请参考[微信电子发票文档](https://mp.weixin.qq.com/wiki?t=resource/res_main&id=21517918939oae3U)中，「查询报销发票信息」部分。
         * 其中 `access_token` 的获取请参考[auth.getAccessToken](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/access-token/auth.getAccessToken.html)文档
         *
         * 最低基础库： `2.3.0` */
        chooseInvoice<T extends ChooseInvoiceOption = ChooseInvoiceOption>(
            option?: T,
        ): PromisifySuccessResult<T, ChooseInvoiceOption>;
        /** [wx.chooseInvoiceTitle(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/invoice/wx.chooseInvoiceTitle.html)
*
* 选择用户的发票抬头。当前小程序必须关联一个公众号，且这个公众号是完成了[微信认证](https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1496554031_RD4xe)的，才能调用 chooseInvoiceTitle。
*
* **示例代码**
*
*
* [在微信开发者工具中查看示例](https://developers.weixin.qq.com/s/GJ4S9nmQ7x2E)
*
* ```js
wx.chooseInvoiceTitle({
  success(res) {}
})
```
*
* 最低基础库： `1.5.0` */
        chooseInvoiceTitle<
            T extends ChooseInvoiceTitleOption = ChooseInvoiceTitleOption,
        >(
            option?: T,
        ): PromisifySuccessResult<T, ChooseInvoiceTitleOption>;
        /** [wx.chooseLocation(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.chooseLocation.html)
         *
         * 打开地图选择位置。 */
        chooseLocation<T extends ChooseLocationOption = ChooseLocationOption>(
            option: T,
        ): PromisifySuccessResult<T, ChooseLocationOption>;
        /** [wx.chooseMedia(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.chooseMedia.html)
*
* 拍摄或从手机相册中选择图片或视频。
*
* **示例代码**
*
*
* ```js
wx.chooseMedia({
  count: 9,
  mediaType: ['image','video'],
  sourceType: ['album', 'camera'],
  maxDuration: 30,
  camera: 'back',
  success(res) {
    console.log(res.tempFiles.tempFilePath)
    console.log(res.tempFiles.size)
  }
})
```
*
* 最低基础库： `2.10.0` */
        chooseMedia<T extends ChooseMediaOption = ChooseMediaOption>(
            option: T,
        ): PromisifySuccessResult<T, ChooseMediaOption>;
        /** [wx.chooseMessageFile(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.chooseMessageFile.html)
*
* 从客户端会话选择文件。
*
* ****
*
* ```js
wx.chooseMessageFile({
  count: 10,
  type: 'image',
  success (res) {
    // tempFilePath可以作为img标签的src属性显示图片
    const tempFilePaths = res.tempFiles
  }
})
```
*
* 最低基础库： `2.5.0` */
        chooseMessageFile<
            T extends ChooseMessageFileOption = ChooseMessageFileOption,
        >(
            option: T,
        ): PromisifySuccessResult<T, ChooseMessageFileOption>;
        /** [wx.choosePoi(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.choosePoi.html)
         *
         * 打开地图选择位置，支持模糊定位（精确到市）和精确定位混选。 */
        choosePoi<T extends ChoosePoiOption = ChoosePoiOption>(
            option: T,
        ): PromisifySuccessResult<T, ChoosePoiOption>;
        /** [wx.chooseVideo(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.chooseVideo.html)
*
* 拍摄视频或从手机相册中选视频。
*
* **示例代码**
*
*
* ```js
wx.chooseVideo({
  sourceType: ['album','camera'],
  maxDuration: 60,
  camera: 'back',
  success(res) {
    console.log(res.tempFilePath)
  }
})
``` */
        chooseVideo<T extends ChooseVideoOption = ChooseVideoOption>(
            option: T,
        ): PromisifySuccessResult<T, ChooseVideoOption>;
        /** [wx.clearStorage(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.clearStorage.html)
*
* 清理本地数据缓存。缓存相关策略请查看 [存储](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/storage.html)。
*
* **示例代码**
*
*
* ```js
wx.clearStorage()
```
*
* ```js
try {
  wx.clearStorageSync()
} catch(e) {
  // Do something when catch error
}
``` */
        clearStorage<T extends ClearStorageOption = ClearStorageOption>(
            option?: T,
        ): PromisifySuccessResult<T, ClearStorageOption>;
        /** [wx.clearStorageSync()](https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.clearStorageSync.html)
*
* [wx.clearStorage](https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.clearStorage.html) 的同步版本
*
* **示例代码**
*
*
* ```js
wx.clearStorage()
```
*
* ```js
try {
  wx.clearStorageSync()
} catch(e) {
  // Do something when catch error
}
``` */
        clearStorageSync(): void;
        /** [wx.closeBLEConnection(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.closeBLEConnection.html)
*
* 断开与低功耗蓝牙设备的连接。
*
* **示例代码**
*
*
* [在微信开发者工具中查看示例](https://developers.weixin.qq.com/s/pQU51zmz7a3K)
* ```js
wx.closeBLEConnection({
  deviceId,
  success (res) {
    console.log(res)
  }
})
```
*
* 最低基础库： `1.1.0` */
        closeBLEConnection<
            T extends CloseBLEConnectionOption = CloseBLEConnectionOption,
        >(
            option: T,
        ): PromisifySuccessResult<T, CloseBLEConnectionOption>;
        /** [wx.closeBluetoothAdapter(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.closeBluetoothAdapter.html)
*
* 关闭蓝牙模块。调用该方法将断开所有已建立的连接并释放系统资源。建议在使用蓝牙流程后，与 [wx.openBluetoothAdapter](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.openBluetoothAdapter.html) 成对调用。
*
* **示例代码**
*
*
* [在微信开发者工具中查看示例](https://developers.weixin.qq.com/s/pQU51zmz7a3K)
* ```js
wx.closeBluetoothAdapter({
  success (res) {
    console.log(res)
  }
})
```
*
* 最低基础库： `1.1.0` */
        closeBluetoothAdapter<
            T extends CloseBluetoothAdapterOption = CloseBluetoothAdapterOption,
        >(
            option?: T,
        ): PromisifySuccessResult<T, CloseBluetoothAdapterOption>;
        /** [wx.closeSocket(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/wx.closeSocket.html)
*
* 关闭 WebSocket 连接。**推荐使用 [SocketTask](https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/SocketTask.html) 的方式去管理 webSocket 链接，每一条链路的生命周期都更加可控。同时存在多个 webSocket 的链接的情况下使用 wx 前缀的方法可能会带来一些和预期不一致的情况。**
*
* **示例代码**
*
*
* ```js
wx.connectSocket({
  url: 'test.php'
})

//注意这里有时序问题，
//如果 wx.connectSocket 还没回调 wx.onSocketOpen，而先调用 wx.closeSocket，那么就做不到关闭 WebSocket 的目的。
//必须在 WebSocket 打开期间调用 wx.closeSocket 才能关闭。
wx.onSocketOpen(function() {
  wx.closeSocket()
})

wx.onSocketClose(function(res) {
  console.log('WebSocket 已关闭！')
})
``` */
        closeSocket<T extends CloseSocketOption = CloseSocketOption>(
            option?: T,
        ): PromisifySuccessResult<T, CloseSocketOption>;
        /** [wx.compressImage(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.compressImage.html)
*
* 压缩图片接口，可选压缩质量
*
* **示例代码**
*
*
* ```js
wx.compressImage({
  src: '', // 图片路径
  quality: 80 // 压缩质量
})
```
*
* 最低基础库： `2.4.0` */
        compressImage<T extends CompressImageOption = CompressImageOption>(
            option: T,
        ): PromisifySuccessResult<T, CompressImageOption>;
        /** [wx.compressVideo(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.compressVideo.html)
         *
         * 压缩视频接口。开发者可指定压缩质量 `quality` 进行压缩。当需要更精细的控制时，可指定 `bitrate`、`fps`、和 `resolution`，当 `quality` 传入时，这三个参数将被忽略。原视频的相关信息可通过 [getVideoInfo](https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.getVideoInfo.html) 获取。
         *
         * 最低基础库： `2.11.0` */
        compressVideo<T extends CompressVideoOption = CompressVideoOption>(
            option: T,
        ): PromisifySuccessResult<T, CompressVideoOption>;
        /** [wx.connectWifi(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/wifi/wx.connectWifi.html)
*
* 连接 Wi-Fi。若已知 Wi-Fi 信息，可以直接利用该接口连接。仅 Android 与 iOS 11 以上版本支持。
*
* **示例代码**
*
*
* ```js
wx.connectWifi({
  SSID: '',
  password: '',
  success (res) {
    console.log(res.errMsg)
  }
})
```
*
* **注意**
*
*
* Android 7.0.22 以上微信 connectWifi 的实现在Android 10及以上的手机无法生效，对于 Android 10 及以上手机 连接 wifi 之后，（受系统能力限制）其他进程无法使用当前连接的 wifi；配置 maunal 连上的 wifi 才是整个设备可用的。
*
* 最低基础库： `1.6.0` */
        connectWifi<T extends ConnectWifiOption = ConnectWifiOption>(
            option: T,
        ): PromisifySuccessResult<T, ConnectWifiOption>;
        /** [wx.createBLEConnection(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.createBLEConnection.html)
*
* 连接低功耗蓝牙设备。
*
* 若小程序在之前已有搜索过某个蓝牙设备，并成功建立连接，可直接传入之前搜索获取的 deviceId 直接尝试连接该设备，无需进行搜索操作。
*
* **注意**
*
*
* - 请保证尽量成对的调用 `createBLEConnection` 和 `closeBLEConnection` 接口。安卓如果多次调用 `createBLEConnection` 创建连接，有可能导致系统持有同一设备多个连接的实例，导致调用 `closeBLEConnection` 的时候并不能真正的断开与设备的连接。
* - 蓝牙连接随时可能断开，建议监听 [wx.onBLEConnectionStateChange](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.onBLEConnectionStateChange.html) 回调事件，当蓝牙设备断开时按需执行重连操作
* - 若对未连接的设备或已断开连接的设备调用数据读写操作的接口，会返回 10006 错误，建议进行重连操作。
*
* **示例代码**
*
*
* [在微信开发者工具中查看示例](https://developers.weixin.qq.com/s/pQU51zmz7a3K)
* ```js
wx.createBLEConnection({
  // 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接
  deviceId,
  success (res) {
    console.log(res)
  }
})
```
*
* 最低基础库： `1.1.0` */
        createBLEConnection<
            T extends CreateBLEConnectionOption = CreateBLEConnectionOption,
        >(
            option: T,
        ): PromisifySuccessResult<T, CreateBLEConnectionOption>;
        /** [wx.createBLEPeripheralServer(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-peripheral/wx.createBLEPeripheralServer.html)
         *
         * 建立本地作为外围设备的服务端，可创建多个。
         *
         * 最低基础库： `2.10.3` */
        createBLEPeripheralServer<
            T extends CreateBLEPeripheralServerOption = CreateBLEPeripheralServerOption,
        >(
            option?: T,
        ): PromisifySuccessResult<T, CreateBLEPeripheralServerOption>;
        /** [wx.createBufferURL(ArrayBuffer|TypedArray buffer)](https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.createBufferURL.html)
         *
         * 根据传入的 buffer 创建一个唯一的 URL 存在内存中
         *
         * 最低基础库： `2.14.0` */
        createBufferURL(
            /** 需要存入内存的二进制数据 */
            buffer:
                | ArrayBuffer
                | Int8Array
                | Uint8Array
                | Uint8ClampedArray
                | Int16Array
                | Uint16Array
                | Int32Array
                | Uint32Array
                | Float32Array
                | Float64Array,
        ): void;
        /** [wx.disableAlertBeforeUnload(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.disableAlertBeforeUnload.html)
         *
         * 关闭小程序页面返回询问对话框
         *
         * 最低基础库： `2.12.0` */
        disableAlertBeforeUnload(option?: DisableAlertBeforeUnloadOption): void;
        /** [wx.enableAlertBeforeUnload(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.enableAlertBeforeUnload.html)
         *
         * 开启小程序页面返回询问对话框
         *
         * 最低基础库： `2.12.0` */
        enableAlertBeforeUnload(option: EnableAlertBeforeUnloadOption): void;
        /** [wx.exitMiniProgram(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/navigate/wx.exitMiniProgram.html)
         *
         * 退出当前小程序。必须有点击行为才能调用成功。
         *
         * 最低基础库： `2.17.3` */
        exitMiniProgram<
            T extends ExitMiniProgramOption = ExitMiniProgramOption,
        >(
            option?: T,
        ): PromisifySuccessResult<T, ExitMiniProgramOption>;
        /** [wx.exitVoIPChat(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/media/voip/wx.exitVoIPChat.html)
         *
         * 退出（销毁）实时语音通话
         *
         * 最低基础库： `2.7.0` */
        exitVoIPChat<T extends ExitVoIPChatOption = ExitVoIPChatOption>(
            option?: T,
        ): PromisifySuccessResult<T, ExitVoIPChatOption>;
        /** [wx.getAvailableAudioSources(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/wx.getAvailableAudioSources.html)
         *
         * 获取当前支持的音频输入源
         *
         * 最低基础库： `2.1.0` */
        getAvailableAudioSources<
            T extends GetAvailableAudioSourcesOption = GetAvailableAudioSourcesOption,
        >(
            option?: T,
        ): PromisifySuccessResult<T, GetAvailableAudioSourcesOption>;
        /** [wx.getBLEDeviceCharacteristics(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.getBLEDeviceCharacteristics.html)
*
* 获取蓝牙设备某个服务中所有特征值(characteristic)。
*
* **示例代码**
*
*
* [在微信开发者工具中查看示例](https://developers.weixin.qq.com/s/pQU51zmz7a3K)
* ```js
wx.getBLEDeviceCharacteristics({
  // 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接
  deviceId,
  // 这里的 serviceId 需要在 getBLEDeviceServices 接口中获取
  serviceId,
  success (res) {
    console.log('device getBLEDeviceCharacteristics:', res.characteristics)
  }
})
```
*
* 最低基础库： `1.1.0` */
        getBLEDeviceCharacteristics<
            T extends GetBLEDeviceCharacteristicsOption = GetBLEDeviceCharacteristicsOption,
        >(
            option: T,
        ): PromisifySuccessResult<T, GetBLEDeviceCharacteristicsOption>;
        /** [wx.getBLEDeviceRSSI(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.getBLEDeviceRSSI.html)
         *
         * 获取蓝牙设备的信号强度。
         *
         * 最低基础库： `2.11.0` */
        getBLEDeviceRSSI<
            T extends GetBLEDeviceRSSIOption = GetBLEDeviceRSSIOption,
        >(
            option: T,
        ): PromisifySuccessResult<T, GetBLEDeviceRSSIOption>;
        /** [wx.getBLEDeviceServices(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.getBLEDeviceServices.html)
*
* 获取蓝牙设备所有服务(service)。
*
* **示例代码**
*
*
* [在微信开发者工具中查看示例](https://developers.weixin.qq.com/s/pQU51zmz7a3K)
* ```js
wx.getBLEDeviceServices({
  // 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接
  deviceId,
  success (res) {
    console.log('device services:', res.services)
  }
})
```
*
* 最低基础库： `1.1.0` */
        getBLEDeviceServices<
            T extends GetBLEDeviceServicesOption = GetBLEDeviceServicesOption,
        >(
            option: T,
        ): PromisifySuccessResult<T, GetBLEDeviceServicesOption>;
        /** [wx.getBackgroundAudioPlayerState(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/wx.getBackgroundAudioPlayerState.html)
*
* 获取后台音乐播放状态。
*
* **示例代码**
*
*
* ```js
wx.getBackgroundAudioPlayerState({
  success (res) {
    const status = res.status
    const dataUrl = res.dataUrl
    const currentPosition = res.currentPosition
    const duration = res.duration
    const downloadPercent = res.downloadPercent
  }
})
```
* @deprecated 基础库版本 [1.2.0](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) 起已废弃，请使用 [wx.getBackgroundAudioManager](https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/wx.getBackgroundAudioManager.html) 替换
*  */
        getBackgroundAudioPlayerState<
            T extends GetBackgroundAudioPlayerStateOption = GetBackgroundAudioPlayerStateOption,
        >(
            option?: T,
        ): PromisifySuccessResult<T, GetBackgroundAudioPlayerStateOption>;
        /** [wx.getBackgroundFetchData(object object)](https://developers.weixin.qq.com/miniprogram/dev/api/storage/background-fetch/wx.getBackgroundFetchData.html)
         *
         * 拉取 backgroundFetch 客户端缓存数据
         *
         * 最低基础库： `2.8.0` */
        getBackgroundFetchData<
            T extends GetBackgroundFetchDataOption = GetBackgroundFetchDataOption,
        >(
            option: T,
        ): PromisifySuccessResult<T, GetBackgroundFetchDataOption>;
        /** [wx.getBackgroundFetchToken(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/storage/background-fetch/wx.getBackgroundFetchToken.html)
         *
         * 获取设置过的自定义登录态。若无，则返回 fail。
         *
         * 最低基础库： `2.8.0` */
        getBackgroundFetchToken<
            T extends GetBackgroundFetchTokenOption = GetBackgroundFetchTokenOption,
        >(
            option?: T,
        ): PromisifySuccessResult<T, GetBackgroundFetchTokenOption>;
        /** [wx.getBatteryInfo(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/battery/wx.getBatteryInfo.html)
         *
         * 获取设备电量。同步 API [wx.getBatteryInfoSync](https://developers.weixin.qq.com/miniprogram/dev/api/device/battery/wx.getBatteryInfoSync.html) 在 iOS 上不可用。 */
        getBatteryInfo<T extends GetBatteryInfoOption = GetBatteryInfoOption>(
            option?: T,
        ): PromisifySuccessResult<T, GetBatteryInfoOption>;
        /** [wx.getBeacons(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/ibeacon/wx.getBeacons.html)
         *
         * 获取所有已搜索到的 iBeacon 设备
         *
         * 最低基础库： `1.2.0` */
        getBeacons<T extends GetBeaconsOption = GetBeaconsOption>(
            option?: T,
        ): PromisifySuccessResult<T, GetBeaconsOption>;
        /** [wx.getBluetoothAdapterState(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.getBluetoothAdapterState.html)
*
* 获取本机蓝牙适配器状态。
*
* **示例代码**
*
*
* [在微信开发者工具中查看示例](https://developers.weixin.qq.com/s/pQU51zmz7a3K)
* ```js
wx.getBluetoothAdapterState({
  success (res) {
    console.log(res)
  }
})
```
*
* 最低基础库： `1.1.0` */
        getBluetoothAdapterState<
            T extends GetBluetoothAdapterStateOption = GetBluetoothAdapterStateOption,
        >(
            option?: T,
        ): PromisifySuccessResult<T, GetBluetoothAdapterStateOption>;
        /** [wx.getBluetoothDevices(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.getBluetoothDevices.html)
*
* 获取在蓝牙模块生效期间所有已发现的蓝牙设备。包括已经和本机处于连接状态的设备。
*
* **示例代码**
*
*
* [在微信开发者工具中查看示例](https://developers.weixin.qq.com/s/pQU51zmz7a3K)
*
* ```js
// ArrayBuffer转16进度字符串示例
function ab2hex(buffer) {
  var hexArr = Array.prototype.map.call(
    new Uint8Array(buffer),
    function(bit) {
      return ('00' + bit.toString(16)).slice(-2)
    }
  )
  return hexArr.join('');
}
wx.getBluetoothDevices({
  success: function (res) {
    console.log(res)
    if (res.devices[0]) {
      console.log(ab2hex(res.devices[0].advertisData))
    }
  }
})
```
*
* **注意事项**
*
*
* - 该接口获取到的设备列表为**蓝牙模块生效期间所有搜索到的蓝牙设备**，若在蓝牙模块使用流程结束后未及时调用 [wx.closeBluetoothAdapter](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.closeBluetoothAdapter.html) 释放资源，会存在调用该接口会返回之前的蓝牙使用流程中搜索到的蓝牙设备，可能设备已经不在用户身边，无法连接。
* - 蓝牙设备在被搜索到时，系统返回的 name 字段一般为广播包中的 LocalName 字段中的设备名称，而如果与蓝牙设备建立连接，系统返回的 name 字段会改为从蓝牙设备上获取到的 `GattName`。若需要动态改变设备名称并展示，建议使用 `localName` 字段。
*
* 最低基础库： `1.1.0` */
        getBluetoothDevices<
            T extends GetBluetoothDevicesOption = GetBluetoothDevicesOption,
        >(
            option?: T,
        ): PromisifySuccessResult<T, GetBluetoothDevicesOption>;
        /** [wx.getChannelsLiveInfo(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/channels/wx.getChannelsLiveInfo.html)
         *
         * 获取视频号直播信息
         *
         * 最低基础库： `2.15.0` */
        getChannelsLiveInfo(option: GetChannelsLiveInfoOption): void;
        /** [wx.getClipboardData(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/clipboard/wx.getClipboardData.html)
*
* 获取系统剪贴板的内容
*
* **示例代码**
*
*
* ```js
wx.getClipboardData({
  success (res){
    console.log(res.data)
  }
})
```
*
* 最低基础库： `1.1.0` */
        getClipboardData<
            T extends GetClipboardDataOption = GetClipboardDataOption,
        >(
            option?: T,
        ): PromisifySuccessResult<T, GetClipboardDataOption>;
        /** [wx.getConnectedBluetoothDevices(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.getConnectedBluetoothDevices.html)
*
* 根据 uuid 获取处于已连接状态的设备。
*
* **示例代码**
*
*
* [在微信开发者工具中查看示例](https://developers.weixin.qq.com/s/pQU51zmz7a3K)
* ```js
wx.getConnectedBluetoothDevices({
  success (res) {
    console.log(res)
  }
})
```
*
* 最低基础库： `1.1.0` */
        getConnectedBluetoothDevices<
            T extends GetConnectedBluetoothDevicesOption = GetConnectedBluetoothDevicesOption,
        >(
            option: T,
        ): PromisifySuccessResult<T, GetConnectedBluetoothDevicesOption>;
        /** [wx.getConnectedWifi(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/wifi/wx.getConnectedWifi.html)
         *
         * 获取已连接中的 Wi-Fi 信息。
         *
         * 最低基础库： `1.6.0` */
        getConnectedWifi<
            T extends GetConnectedWifiOption = GetConnectedWifiOption,
        >(
            option?: T,
        ): PromisifySuccessResult<T, GetConnectedWifiOption>;
        /** [wx.getExtConfig(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/ext/wx.getExtConfig.html)
*
* 获取[第三方平台](https://developers.weixin.qq.com/miniprogram/dev/devtools/ext.html)自定义的数据字段。
*
* **Tips**
*
*
* 1. 本接口暂时无法通过 [wx.canIUse](https://developers.weixin.qq.com/miniprogram/dev/api/base/wx.canIUse.html) 判断是否兼容，开发者需要自行判断 [wx.getExtConfig](https://developers.weixin.qq.com/miniprogram/dev/api/ext/wx.getExtConfig.html) 是否存在来兼容
*
* ****
*
* ```js
if (wx.getExtConfig) {
  wx.getExtConfig({
    success (res) {
      console.log(res.extConfig)
    }
  })
}
```
*
* 最低基础库： `1.1.0` */
        getExtConfig<T extends GetExtConfigOption = GetExtConfigOption>(
            option?: T,
        ): PromisifySuccessResult<T, GetExtConfigOption>;
        /** [wx.getFileInfo(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.getFileInfo.html)
*
* 获取文件信息
*
* **示例代码**
*
*
* ```js
wx.getFileInfo({
  success (res) {
    console.log(res.size)
    console.log(res.digest)
  }
})
```
*
* 最低基础库： `1.4.0` */
        getFileInfo<T extends WxGetFileInfoOption = WxGetFileInfoOption>(
            option: T,
        ): PromisifySuccessResult<T, WxGetFileInfoOption>;
        /** [wx.getGroupEnterInfo(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/group/wx.getGroupEnterInfo.html)
*
* 获取微信群聊场景下的小程序启动信息。群聊场景包括群聊小程序消息卡片、群待办、群工具。可用于获取当前群的 opengid。
* ## 注意事项
*  - 基础库 v2.10.4 开始支持获取群工具小程序启动信息
*  - 基础库 v2.17.3 开始支持获取群聊小程序消息卡片、群待办小程序启动信息
*
* **示例代码**
*
*
* ```js
wx.getGroupEnterInfo({
  success(res) {
    // res
    {
      errMsg: 'getGroupEnterInfo:ok',
      encryptedData: '',
      iv: ''
    }
  },
  fail() {

  }
})
```
*
* 敏感数据有两种获取方式，一是使用 [加密数据解密算法]((open-ability/signature#加密数据解密算法)) 。
* 获取得到的开放数据为以下 json 结构（其中 opengid 为当前群的唯一标识）：
*
* ```json
{
 "opengid": "OPENGID"
}
```
*
* **Tips**
*
*
* - 如需要展示群名称，小程序可以使用[开放数据组件](https://developers.weixin.qq.com/miniprogram/dev/component/open-data.html)
* - 小游戏可以通过 `wx.getGroupInfo` 接口获取群名称
*
* 最低基础库： `2.10.4` */
        getGroupEnterInfo(option: GetGroupEnterInfoOption): void;
        /** [wx.getHCEState(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/wx.getHCEState.html)
*
* 判断当前设备是否支持 HCE 能力。
*
* **示例代码**
*
*
* ```js
wx.getHCEState({
  success (res) {
    console.log(res.errCode)
  }
})
```
*
* 最低基础库： `1.7.0` */
        getHCEState<T extends GetHCEStateOption = GetHCEStateOption>(
            option?: T,
        ): PromisifySuccessResult<T, GetHCEStateOption>;
        /** [wx.getImageInfo(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.getImageInfo.html)
*
* 获取图片信息。网络图片需先配置download域名才能生效。
*
* **示例代码**
*
*
* [在微信开发者工具中查看示例](https://developers.weixin.qq.com/s/Kd47Sbmr6yYu)
*
* ```js
wx.getImageInfo({
  src: 'images/a.jpg',
  success (res) {
    console.log(res.width)
    console.log(res.height)
  }
})

wx.chooseImage({
  success (res) {
    wx.getImageInfo({
      src: res.tempFilePaths[0],
      success (res) {
        console.log(res.width)
        console.log(res.height)
      }
    })
  }
})
``` */
        getImageInfo<T extends GetImageInfoOption = GetImageInfoOption>(
            option: T,
        ): PromisifySuccessResult<T, GetImageInfoOption>;
        /** [wx.getLocation(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.getLocation.html)
*
* 获取当前的地理位置、速度。当用户离开小程序后，此接口无法调用。开启高精度定位，接口耗时会增加，可指定 highAccuracyExpireTime 作为超时时间。地图相关使用的坐标格式应为 gcj02。高频率调用会导致耗电，如有需要可使用持续定位接口 `wx.onLocationChange`。基础库 `2.17.0` 版本起 `wx.getLocation` 增加调用频率限制，[相关公告](https://developers.weixin.qq.com/community/develop/doc/000aee91a98d206bc6dbe722b51801)。
*
* **示例代码**
*
*
*  ```js
 wx.getLocation({
  type: 'wgs84',
  success (res) {
    const latitude = res.latitude
    const longitude = res.longitude
    const speed = res.speed
    const accuracy = res.accuracy
  }
})
 ```
*
* **注意**
*
*
* - `2.17.0 起 `wx.getLocation` 增加调用频率限制，[相关公告](https://developers.weixin.qq.com/community/develop/doc/000aee91a98d206bc6dbe722b51801)
* - 工具中定位模拟使用IP定位，可能会有一定误差。且工具目前仅支持 gcj02 坐标。
* - 使用第三方服务进行逆地址解析时，请确认第三方服务默认的坐标系，正确进行坐标转换。 */
        getLocation<T extends GetLocationOption = GetLocationOption>(
            option: T,
        ): PromisifySuccessResult<T, GetLocationOption>;
        /** [wx.getNetworkType(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/network/wx.getNetworkType.html)
*
* 获取网络类型
*
* **示例代码**
*
*
* ```js
wx.getNetworkType({
  success (res) {
    const networkType = res.networkType
  }
})
``` */
        getNetworkType<T extends GetNetworkTypeOption = GetNetworkTypeOption>(
            option?: T,
        ): PromisifySuccessResult<T, GetNetworkTypeOption>;
        /** [wx.getRandomValues(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/crypto/wx.getRandomValues.html)
*
* 获取密码学安全随机数
*
* **示例代码**
*
*
* ```js
wx.getRandomValues({
  length: 6 // 生成 6 个字节长度的随机数,
  success: res => {
    console.log(wx.arrayBufferToBase64(res.randomValues)) // 转换为 base64 字符串后打印
  }
})
```
*
* 最低基础库： `2.15.0` */
        getRandomValues<
            T extends GetRandomValuesOption = GetRandomValuesOption,
        >(
            option: T,
        ): PromisifySuccessResult<T, GetRandomValuesOption>;
        /** [wx.getSavedFileInfo(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.getSavedFileInfo.html)
*
* 获取本地文件的文件信息。此接口只能用于获取已保存到本地的文件，若需要获取临时文件信息，请使用 [wx.getFileInfo()](https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.getFileInfo.html) 接口。
*
* **示例代码**
*
*
* ```js
wx.getSavedFileList({
  success (res) {
    console.log(res.fileList)
  }
})
``` */
        getSavedFileInfo<
            T extends GetSavedFileInfoOption = GetSavedFileInfoOption,
        >(
            option: T,
        ): PromisifySuccessResult<T, GetSavedFileInfoOption>;
        /** [wx.getSavedFileList(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.getSavedFileList.html)
*
* 获取该小程序下已保存的本地缓存文件列表
*
* **示例代码**
*
*
* ```js
wx.getSavedFileList({
  success (res) {
    console.log(res.fileList)
  }
})
``` */
        getSavedFileList<
            T extends WxGetSavedFileListOption = WxGetSavedFileListOption,
        >(
            option?: T,
        ): PromisifySuccessResult<T, WxGetSavedFileListOption>;
        /** [wx.getScreenBrightness(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/screen/wx.getScreenBrightness.html)
         *
         * 获取屏幕亮度
         *
         * **说明**
         *
         * - 若安卓系统设置中开启了自动调节亮度功能，则屏幕亮度会根据光线自动调整，该接口仅能获取自动调节亮度之前的值，而非实时的亮度值。
         *
         * 最低基础库： `1.2.0` */
        getScreenBrightness<
            T extends GetScreenBrightnessOption = GetScreenBrightnessOption,
        >(
            option?: T,
        ): PromisifySuccessResult<T, GetScreenBrightnessOption>;
        /** [wx.getSelectedTextRange(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/keyboard/wx.getSelectedTextRange.html)
*
* 在input、textarea等focus之后，获取输入框的光标位置。注意：只有在focus的时候调用此接口才有效。
*
* **示例代码**
*
*
* ```js
wx.getSelectedTextRange({
  complete: res => {
    console.log('getSelectedTextRange res', res.start, res.end)
  }
})
```
*
* 最低基础库： `2.7.0` */
        getSelectedTextRange<
            T extends GetSelectedTextRangeOption = GetSelectedTextRangeOption,
        >(
            option?: T,
        ): PromisifySuccessResult<T, GetSelectedTextRangeOption>;
        /** [wx.getSetting(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/setting/wx.getSetting.html)
*
* 获取用户的当前设置。**返回值中只会出现小程序已经向用户请求过的[权限](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/authorize.html)**。
*
* **示例代码**
*
*
* ```js
wx.getSetting({
  success (res) {
    console.log(res.authSetting)
    // res.authSetting = {
    //   "scope.userInfo": true,
    //   "scope.userLocation": true
    // }
  }
})
```
*
* ```js
wx.getSetting({
  withSubscriptions: true,
  success (res) {
    console.log(res.authSetting)
    // res.authSetting = {
    //   "scope.userInfo": true,
    //   "scope.userLocation": true
    // }
    console.log(res.subscriptionsSetting)
    // res.subscriptionsSetting = {
    //   mainSwitch: true, // 订阅消息总开关
    //   itemSettings: {   // 每一项开关
    //     SYS_MSG_TYPE_INTERACTIVE: 'accept', // 小游戏系统订阅消息
    //     SYS_MSG_TYPE_RANK: 'accept'
    //     zun-LzcQyW-edafCVvzPkK4de2Rllr1fFpw2A_x0oXE: 'reject', // 普通一次性订阅消息
    //     ke_OZC_66gZxALLcsuI7ilCJSP2OJ2vWo2ooUPpkWrw: 'ban',
    //   }
    // }
  }
})
```
*
* 最低基础库： `1.2.0` */
        getSetting<T extends GetSettingOption = GetSettingOption>(
            option?: T,
        ): PromisifySuccessResult<T, GetSettingOption>;
        /** [wx.getShareInfo(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/share/wx.getShareInfo.html)
*
* 获取转发详细信息
*
* **示例代码**
*
*
* 敏感数据获取方式 [加密数据解密算法]((open-ability/signature#加密数据解密算法)) 。
* 获取得到的开放数据为以下 json 结构（其中 openGId 为当前群的唯一标识）：
*
* ```json
{
 "openGId": "OPENGID"
}
```
*
* **Tips**
*
*
* - 如需要展示群名称，小程序可以使用 [开放数据组件](https://developers.weixin.qq.com/miniprogram/dev/component/open-data.html)
* - 小游戏可以通过 [`wx.getGroupInfo`](#) 接口获取群名称
*
* 最低基础库： `1.1.0` */
        getShareInfo<T extends GetShareInfoOption = GetShareInfoOption>(
            option: T,
        ): PromisifySuccessResult<T, GetShareInfoOption>;
        /** [wx.getStorage(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.getStorage.html)
*
* 从本地缓存中异步获取指定 key 的内容。缓存相关策略请查看 [存储](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/storage.html)。
*
* **示例代码**
*
*
* ```js
wx.getStorage({
  key: 'key',
  success (res) {
    console.log(res.data)
  }
})
```
*
* ```js
try {
  var value = wx.getStorageSync('key')
  if (value) {
    // Do something with return value
  }
} catch (e) {
  // Do something when catch error
}
``` */
        getStorage<
            T = any,
            U extends GetStorageOption<T> = GetStorageOption<T>,
        >(
            option: U,
        ): PromisifySuccessResult<U, GetStorageOption<T>>;
        /** [wx.getStorageInfo(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.getStorageInfo.html)
*
* 异步获取当前storage的相关信息。缓存相关策略请查看 [存储](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/storage.html)。
*
* **示例代码**
*
*
* ```js
wx.getStorageInfo({
  success (res) {
    console.log(res.keys)
    console.log(res.currentSize)
    console.log(res.limitSize)
  }
})
```
*
* ```js
try {
  const res = wx.getStorageInfoSync()
  console.log(res.keys)
  console.log(res.currentSize)
  console.log(res.limitSize)
} catch (e) {
  // Do something when catch error
}
``` */
        getStorageInfo<T extends GetStorageInfoOption = GetStorageInfoOption>(
            option?: T,
        ): PromisifySuccessResult<T, GetStorageInfoOption>;
        /** [wx.getSystemInfo(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/base/system/wx.getSystemInfo.html)
*
* 获取系统信息。**由于历史原因，wx.getSystemInfo 是异步的调用格式，但是是同步返回，需要异步获取系统信息请使用 [wx.getSystemInfoAsync](https://developers.weixin.qq.com/miniprogram/dev/api/base/system/wx.getSystemInfoAsync.html)。**
*
* **示例代码**
*
*
* [在微信开发者工具中查看示例](https://developers.weixin.qq.com/s/WkUCgXmS7mqO)
*
* ```js
wx.getSystemInfo({
  success (res) {
    console.log(res.model)
    console.log(res.pixelRatio)
    console.log(res.windowWidth)
    console.log(res.windowHeight)
    console.log(res.language)
    console.log(res.version)
    console.log(res.platform)
  }
})
```
*
* ```js
try {
  const res = wx.getSystemInfoSync()
  console.log(res.model)
  console.log(res.pixelRatio)
  console.log(res.windowWidth)
  console.log(res.windowHeight)
  console.log(res.language)
  console.log(res.version)
  console.log(res.platform)
} catch (e) {
  // Do something when catch error
}
``` */
        getSystemInfo<T extends GetSystemInfoOption = GetSystemInfoOption>(
            option?: T,
        ): PromisifySuccessResult<T, GetSystemInfoOption>;
        /** [wx.getSystemInfoAsync(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/base/system/wx.getSystemInfoAsync.html)
*
* 异步获取系统信息。需要一定的微信客户端版本支持，在不支持的客户端上，会使用同步实现来返回。
*
* **示例代码**
*
*
* [在微信开发者工具中查看示例](https://developers.weixin.qq.com/s/WkUCgXmS7mqO)
*
* ```js
wx.getSystemInfoAsync({
  success (res) {
    console.log(res.model)
    console.log(res.pixelRatio)
    console.log(res.windowWidth)
    console.log(res.windowHeight)
    console.log(res.language)
    console.log(res.version)
    console.log(res.platform)
  }
})
```
*
* 最低基础库： `2.14.1` */
        getSystemInfoAsync(option?: GetSystemInfoAsyncOption): void;
        /** [wx.getUserInfo(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/user-info/wx.getUserInfo.html)
*
* 获取用户信息。
*
* **接口调整说明**
*
*
* 为优化用户登录体验，该接口将进行调整，详见 [用户信息接口调整说明](https://developers.weixin.qq.com/community/develop/doc/000cacfa20ce88df04cb468bc52801)
*
* **示例代码**
*
*
*
* ```js
// 必须是在用户已经授权的情况下调用
wx.getUserInfo({
  success: function(res) {
    var userInfo = res.userInfo
    var nickName = userInfo.nickName
    var avatarUrl = userInfo.avatarUrl
    var gender = userInfo.gender //性别 0：未知、1：男、2：女
    var province = userInfo.province
    var city = userInfo.city
    var country = userInfo.country
  }
})
```
*
* 敏感数据有两种获取方式：
* 1. 使用 [加密数据解密算法]((open-ability/signature#加密数据解密算法))
* 2. 使用 [云调用直接获取开放数据]((open-ability/signature#云调用直接获取开放数据))
* 获取得到的开放数据为以下 json 结构：
*
* ```json
{
  "openId": "OPENID",
  "nickName": "NICKNAME",
  "gender": GENDER,
  "city": "CITY",
  "province": "PROVINCE",
  "country": "COUNTRY",
  "avatarUrl": "AVATARURL",
  "unionId": "UNIONID",
  "watermark": {
    "appid":"APPID",
    "timestamp":TIMESTAMP
  }
}
```
*
* **小程序用户信息组件示例代码**
*
*
* ```html
* <!-- 如果只是展示用户头像昵称，可以使用 <open-data /> 组件 -->
* <open-data type="userAvatarUrl"></open-data>
* <open-data type="userNickName"></open-data>
* <!-- 需要使用 button 来授权登录 -->
* <button wx:if="{{canIUse}}" open-type="getUserInfo" bindgetuserinfo="bindGetUserInfo">授权登录</button>
* <view wx:else>请升级微信版本</view>
* ```
*
* ```js
Page({
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onLoad: function() {
    // 查看是否授权
    wx.getSetting({
      success (res){
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function(res) {
              console.log(res.userInfo)
            }
          })
        }
      }
    })
  },
  bindGetUserInfo (e) {
    console.log(e.detail.userInfo)
  }
})
``` */
        getUserInfo<T extends GetUserInfoOption = GetUserInfoOption>(
            option: T,
        ): PromisifySuccessResult<T, GetUserInfoOption>;
        /** [wx.getUserProfile(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/user-info/wx.getUserProfile.html)
*
* 获取用户信息。页面产生点击事件（例如 `button` 上 `bindtap` 的回调中）后才可调用，每次请求都会弹出授权窗口，用户同意后返回 `userInfo`。该接口用于替换 `wx.getUserInfo`，详见 [用户信息接口调整说明](https://developers.weixin.qq.com/community/develop/doc/000cacfa20ce88df04cb468bc52801?highLine=login)。
*
* **示例代码**
*
*
* [在微信开发者工具中查看示例](https://developers.weixin.qq.com/s/tsJaq2mP7Mp4)
*
* **Bug & Tip**
*
*
* 1. `tip`：仅小程序中 `wx.getUserInfo` 接口进行调整，小游戏中不受影响；
* 2. `tip`：开发者工具中仅 2.10.4 及以上版本可访问 `wx.getUserProfile` 接口，在真机上可参考示例代码进行判断，无需根据版本号或者 `canIUse` 进行条件。
* 3. `tip`：`wx.getUserProfile` 返回的加密数据中不包含 `openId` 和 `unionId` 字段。
* 4. `bug`：开发者工具中 `2.10.4`~`2.16.1` 基础库版本通过 `<button open-type="getUserInfo">` 会返回真实数据，真机上此区间会按照公告返回匿名数据。
*
* ```html
* <view class="container">
*   <view class="userinfo">
*     <block wx:if="{{!hasUserInfo}}">
*       <button wx:if="{{canIUseGetUserProfile}}" bindtap="getUserProfile"> 获取头像昵称 </button>
*       <button wx:else open-type="getUserInfo" bindgetuserinfo="getUserInfo"> 获取头像昵称 </button>
*     </block>
*     <block wx:else>
*       <image bindtap="bindViewTap" class="userinfo-avatar" src="{{userInfo.avatarUrl}}" mode="cover"></image>
*       <text class="userinfo-nickname">{{userInfo.nickName}}</text>
*     </block>
*   </view>
* </view>
* ```
*
* ```js
Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUseGetUserProfile: false,
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认
    // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
})
```
*
* 最低基础库： `2.10.4` */
        getUserProfile<T extends GetUserProfileOption = GetUserProfileOption>(
            option: T,
        ): PromisifySuccessResult<T, GetUserProfileOption>;
        /** [wx.getVideoInfo(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.getVideoInfo.html)
         *
         * 获取视频详细信息。
         *
         * 最低基础库： `2.11.0` */
        getVideoInfo<T extends GetVideoInfoOption = GetVideoInfoOption>(
            option: T,
        ): PromisifySuccessResult<T, GetVideoInfoOption>;
        /** [wx.getWeRunData(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/werun/wx.getWeRunData.html)
*
* 获取用户过去三十天微信运动步数。需要先调用 [wx.login](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/login/wx.login.html) 接口。步数信息会在用户主动进入小程序时更新。
*
* **示例代码**
*
*
* ```js
wx.getWeRunData({
  success (res) {
    // 拿 encryptedData 到开发者后台解密开放数据
    const encryptedData = res.encryptedData
    // 或拿 cloudID 通过云调用直接获取开放数据
    const cloudID = res.cloudID
  }
})
```
*
* **开放数据 JSON 结构**
*
*
*
* 敏感数据有两种获取方式，一是使用 [加密数据解密算法]((open-ability/signature#加密数据解密算法)) 。
* 获取得到的开放数据为以下 json 结构：
*
* ```json
{
  "stepInfoList": [
    {
      "timestamp": 1445866601,
      "step": 100
    },
    {
      "timestamp": 1445876601,
      "step": 120
    }
  ]
}
```
*
* stepInfoList 中，每一项结构如下：
*
* | 属性 | 类型 | 说明 |
* | --- | ---- | --- |
* | timestamp | number | 时间戳，表示数据对应的时间 |
* | step | number | 微信运动步数 |
*
* 最低基础库： `1.2.0` */
        getWeRunData<T extends GetWeRunDataOption = GetWeRunDataOption>(
            option?: T,
        ): PromisifySuccessResult<T, GetWeRunDataOption>;
        /** [wx.getWifiList(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/wifi/wx.getWifiList.html)
         *
         * 请求获取 Wi-Fi 列表。在 `onGetWifiList` 注册的回调中返回 `wifiList` 数据。 **Android 调用前需要 [用户授权](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/authorize.html) scope.userLocation。**
         *
         * iOS 将跳转到系统的 Wi-Fi 界面，Android 不会跳转。 iOS 11.0 及 iOS 11.1 两个版本因系统问题，该方法失效。但在 iOS 11.2 中已修复。
         *
         * 最低基础库： `1.6.0` */
        getWifiList<T extends GetWifiListOption = GetWifiListOption>(
            option?: T,
        ): PromisifySuccessResult<T, GetWifiListOption>;
        /** [wx.hideHomeButton(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/ui/navigation-bar/wx.hideHomeButton.html)
         *
         * 隐藏返回首页按钮。微信7.0.7版本起，当用户打开的小程序最底层页面是非首页时，默认展示“返回首页”按钮，开发者可在页面 onShow 中调用 hideHomeButton 进行隐藏。
         *
         * 最低基础库： `2.8.3` */
        hideHomeButton<T extends HideHomeButtonOption = HideHomeButtonOption>(
            option?: T,
        ): PromisifySuccessResult<T, HideHomeButtonOption>;
        /** [wx.hideKeyboard(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/keyboard/wx.hideKeyboard.html)
*
* 在input、textarea等focus拉起键盘之后，手动调用此接口收起键盘
*
* **示例代码**
*
*
* ```js
wx.hideKeyboard({
  complete: res => {
    console.log('hideKeyboard res', res)
  }
})
```
*
* 最低基础库： `2.8.2` */
        hideKeyboard<T extends HideKeyboardOption = HideKeyboardOption>(
            option?: T,
        ): PromisifySuccessResult<T, HideKeyboardOption>;
        /** [wx.hideLoading(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.hideLoading.html)
         *
         * 隐藏 loading 提示框
         *
         * 最低基础库： `1.1.0` */
        hideLoading<T extends HideLoadingOption = HideLoadingOption>(
            option?: T,
        ): PromisifySuccessResult<T, HideLoadingOption>;
        /** [wx.hideNavigationBarLoading(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/ui/navigation-bar/wx.hideNavigationBarLoading.html)
         *
         * 在当前页面隐藏导航条加载动画 */
        hideNavigationBarLoading<
            T extends HideNavigationBarLoadingOption = HideNavigationBarLoadingOption,
        >(
            option?: T,
        ): PromisifySuccessResult<T, HideNavigationBarLoadingOption>;
        /** [wx.hideShareMenu(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/share/wx.hideShareMenu.html)
*
* 隐藏当前页面的转发按钮
*
* ****
*
* ## 注意事项
*  - "shareAppMessage"表示“发送给朋友”按钮，"shareTimeline"表示“分享到朋友圈”按钮
*  - 隐藏“发送给朋友”按钮时必须同时隐藏“分享到朋友圈”按钮，隐藏“分享到朋友圈”按钮时则允许不隐藏“发送给朋友”按钮
*
* **示例代码**
*
*
* ```js
wx.hideShareMenu({
  menus: ['shareAppMessage', 'shareTimeline']
})
```
*
* 最低基础库： `1.1.0` */
        hideShareMenu<T extends HideShareMenuOption = HideShareMenuOption>(
            option?: T,
        ): PromisifySuccessResult<T, HideShareMenuOption>;
        /** [wx.hideTabBar(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/ui/tab-bar/wx.hideTabBar.html)
         *
         * 隐藏 tabBar
         *
         * 最低基础库： `1.9.0` */
        hideTabBar<T extends HideTabBarOption = HideTabBarOption>(
            option: T,
        ): PromisifySuccessResult<T, HideTabBarOption>;
        /** [wx.hideTabBarRedDot(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/ui/tab-bar/wx.hideTabBarRedDot.html)
         *
         * 隐藏 tabBar 某一项的右上角的红点
         *
         * 最低基础库： `1.9.0` */
        hideTabBarRedDot<
            T extends HideTabBarRedDotOption = HideTabBarRedDotOption,
        >(
            option: T,
        ): PromisifySuccessResult<T, HideTabBarRedDotOption>;
        /** [wx.hideToast(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.hideToast.html)
         *
         * 隐藏消息提示框 */
        hideToast<T extends HideToastOption = HideToastOption>(
            option?: T,
        ): PromisifySuccessResult<T, HideToastOption>;
        /** [wx.joinVoIPChat(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/media/voip/wx.joinVoIPChat.html)
         *
         * 加入 (创建) 实时语音通话，更多信息可见 [实时语音指南](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/voip-chat.html)。调用前需要用户授权 `scope.record`，若房间类型为视频房间需要用户授权 `scope.camera`。
         *
         * 最低基础库： `2.7.0` */
        joinVoIPChat<T extends JoinVoIPChatOption = JoinVoIPChatOption>(
            option: T,
        ): PromisifySuccessResult<T, JoinVoIPChatOption>;
        /** [wx.loadFontFace(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/ui/font/wx.loadFontFace.html)
*
* 动态加载网络字体，文件地址需为下载类型。[2.10.0](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html)起支持全局生效，需在 `app.js` 中调用。
*
* 注意：
* 1. 字体文件返回的 contet-type 参考 [font](https://www.iana.org/assignments/media-types/media-types.xhtml#font)，格式不正确时会解析失败。
* 2. 字体链接必须是https（ios不支持http)
* 3. 字体链接必须是同源下的，或开启了cors支持，小程序的域名是`servicewechat.com`
* 4. 工具里提示 Faild to load font可以忽略
* 5. [2.10.0](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) 以前仅在调用页面生效。
*
* **示例代码**
*
*
* [在微信开发者工具中查看示例](https://developers.weixin.qq.com/s/b6Zrajm67R2x)
* ```js
wx.loadFontFace({
  family: 'Bitstream Vera Serif Bold',
  source: 'url("https://sungd.github.io/Pacifico.ttf")',
  success: console.log
})
```
*
* 最低基础库： `2.1.0` */
        loadFontFace<T extends LoadFontFaceOption = LoadFontFaceOption>(
            option: T,
        ): PromisifySuccessResult<T, LoadFontFaceOption>;
        /** [wx.login(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/login/wx.login.html)
*
* 调用接口获取登录凭证（code）。通过凭证进而换取用户登录态信息，包括用户在当前小程序的唯一标识（openid）、微信开放平台帐号下的唯一标识（unionid，若当前小程序已绑定到微信开放平台帐号）及本次登录的会话密钥（session_key）等。用户数据的加解密通讯需要依赖会话密钥完成。更多使用方法详见 [小程序登录](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/login.html)。
*
* **示例代码**
*
*
* ```js
wx.login({
  success (res) {
    if (res.code) {
      //发起网络请求
      wx.request({
        url: 'https://example.com/onLogin',
        data: {
          code: res.code
        }
      })
    } else {
      console.log('登录失败！' + res.errMsg)
    }
  }
})
``` */
        login<T extends LoginOption = LoginOption>(
            option?: T,
        ): PromisifySuccessResult<T, LoginOption>;
        /** [wx.makeBluetoothPair(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.makeBluetoothPair.html)
         *
         * 蓝牙配对接口，仅安卓支持。通常情况下（需要指定 `pin` 码或者密码时）系统会接管配对流程，直接使用 直接 `createBLEConnection` 即可；该接口只应当在开发者不想让用户手动输入`pin` 码且真机验证确认可以正常生效情况下用。
         *
         * 最低基础库： `2.12.0` */
        makeBluetoothPair<
            T extends MakeBluetoothPairOption = MakeBluetoothPairOption,
        >(
            option: T,
        ): PromisifySuccessResult<T, MakeBluetoothPairOption>;
        /** [wx.makePhoneCall(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/phone/wx.makePhoneCall.html)
*
* 拨打电话
*
* **示例代码**
*
*
* ```js
wx.makePhoneCall({
  phoneNumber: '1340000' //仅为示例，并非真实的电话号码
})
``` */
        makePhoneCall<T extends MakePhoneCallOption = MakePhoneCallOption>(
            option: T,
        ): PromisifySuccessResult<T, MakePhoneCallOption>;
        /** [wx.navigateBack(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.navigateBack.html)
         *
         * 关闭当前页面，返回上一页面或多级页面。可通过 [getCurrentPages](https://developers.weixin.qq.com/miniprogram/dev/reference/api/getCurrentPages.html) 获取当前的页面栈，决定需要返回几层。 */
        navigateBack<T extends NavigateBackOption = NavigateBackOption>(
            option?: T,
        ): PromisifySuccessResult<T, NavigateBackOption>;
        /** [wx.navigateBackMiniProgram(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/navigate/wx.navigateBackMiniProgram.html)
*
* 返回到上一个小程序。只有在当前小程序是被其他小程序打开时可以调用成功
*
* 注意：**微信客户端 iOS 6.5.9，Android 6.5.10 及以上版本支持**
*
* **示例代码**
*
*
* ```js
wx.navigateBackMiniProgram({
  extraData: {
    foo: 'bar'
  },
  success(res) {
    // 返回成功
  }
})
```
*
* 最低基础库： `1.3.0` */
        navigateBackMiniProgram<
            T extends NavigateBackMiniProgramOption = NavigateBackMiniProgramOption,
        >(
            option: T,
        ): PromisifySuccessResult<T, NavigateBackMiniProgramOption>;
        /** [wx.navigateTo(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.navigateTo.html)
*
* 保留当前页面，跳转到应用内的某个页面。但是不能跳到 tabbar 页面。使用 [wx.navigateBack](https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.navigateBack.html) 可以返回到原页面。小程序中页面栈最多十层。
*
* **示例代码**
*
*
*
* ```js
wx.navigateTo({
  url: 'test?id=1',
  events: {
    // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
    acceptDataFromOpenedPage: function(data) {
      console.log(data)
    },
    someEvent: function(data) {
      console.log(data)
    }
    ...
  },
  success: function(res) {
    // 通过eventChannel向被打开页面传送数据
    res.eventChannel.emit('acceptDataFromOpenerPage', { data: 'test' })
  }
})
```
*
* ```javascript
//test.js
Page({
  onLoad: function(option){
    console.log(option.query)
    const eventChannel = this.getOpenerEventChannel()
    eventChannel.emit('acceptDataFromOpenedPage', {data: 'test'});
    eventChannel.emit('someEvent', {data: 'test'});
    // 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
    eventChannel.on('acceptDataFromOpenerPage', function(data) {
      console.log(data)
    })
  }
})
``` */
        navigateTo<T extends NavigateToOption = NavigateToOption>(
            option: T,
        ): PromisifySuccessResult<T, NavigateToOption>;
        /** [wx.navigateToMiniProgram(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/navigate/wx.navigateToMiniProgram.html)
*
* 打开另一个小程序
*
* **使用限制**
*
*
*  ##### 需要用户触发跳转
*  从 2.3.0 版本开始，若用户未点击小程序页面任意位置，则开发者将无法调用此接口自动跳转至其他小程序。
*  ##### 需要用户确认跳转
*  从 2.3.0 版本开始，在跳转至其他小程序前，将统一增加弹窗，询问是否跳转，用户确认后才可以跳转其他小程序。如果用户点击取消，则回调 `fail cancel`。
*  ##### 无需声明跳转名单，不限跳转数量（众测中）
* 1. 从2020年4月24日起，使用跳转其他小程序功能将无需在全局配置中声明跳转名单，调用此接口时将不再校验所跳转的 AppID 是否在 navigateToMiniProgramAppIdList 中。
* 2. 从2020年4月24日起，跳转其他小程序将不再受数量限制，使用此功能时请注意遵守运营规范。
*
* **运营规范**
*
*
* 平台将坚决打击小程序盒子等互推行为，使用此功能时请严格遵守[《微信小程序平台运营规范》](https://developers.weixin.qq.com/miniprogram/product/#_5-10-%E4%BA%92%E6%8E%A8%E8%A1%8C%E4%B8%BA)，若发现小程序违反运营规范将被下架处理。
*
* **关于调试**
*
*
* - 在开发者工具上调用此 API 并不会真实的跳转到另外的小程序，但是开发者工具会校验本次调用跳转是否成功。[详情](https://developers.weixin.qq.com/miniprogram/dev/devtools/different.html#跳转小程序调试支持)
* - 开发者工具上支持被跳转的小程序处理接收参数的调试。[详情](https://developers.weixin.qq.com/miniprogram/dev/devtools/different.html#跳转小程序调试支持)
*
* **示例代码**
*
*
* ```js
wx.navigateToMiniProgram({
  appId: '',
  path: 'page/index/index?id=123',
  extraData: {
    foo: 'bar'
  },
  envVersion: 'develop',
  success(res) {
    // 打开成功
  }
})
```
*
* 最低基础库： `1.3.0` */
        navigateToMiniProgram<
            T extends NavigateToMiniProgramOption = NavigateToMiniProgramOption,
        >(
            option: T,
        ): PromisifySuccessResult<T, NavigateToMiniProgramOption>;
        /** [wx.nextTick(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/ui/custom-component/wx.nextTick.html)
*
* 延迟一部分操作到下一个时间片再执行。（类似于 setTimeout）
*
* **说明**
*
*
*
* 因为自定义组件中的 setData 和 triggerEvent 等接口本身是同步的操作，当这几个接口被连续调用时，都是在一个同步流程中执行完的，因此若逻辑不当可能会导致出错。
*
* 一个极端的案例：当父组件的 setData 引发了子组件的 triggerEvent，进而使得父组件又进行了一次 setData，期间有通过 wx:if 语句对子组件进行卸载，就有可能引发奇怪的错误，所以对于不需要在一个同步流程内完成的逻辑，可以使用此接口延迟到下一个时间片再执行。
*
* **示例代码**
*
*
* ```js
Component({
  doSth() {
    this.setData({ number: 1 }) // 直接在当前同步流程中执行

    wx.nextTick(() => {
      this.setData({ number: 3 }) // 在当前同步流程结束后，下一个时间片执行
    })

    this.setData({ number: 2 }) // 直接在当前同步流程中执行
  }
})
```
*
* 最低基础库： `2.2.3` */
        nextTick(callback: (...args: any[]) => any): void;
        /** [wx.notifyBLECharacteristicValueChange(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.notifyBLECharacteristicValueChange.html)
*
* 启用低功耗蓝牙设备特征值变化时的 notify 功能，订阅特征值。注意：必须设备的特征值支持 notify 或者 indicate 才可以成功调用。
*
* 另外，必须先启用 `notifyBLECharacteristicValueChange` 才能监听到设备 `characteristicValueChange` 事件
*
* **注意**
*
*
* - 订阅操作成功后需要设备主动更新特征值的 value，才会触发 [wx.onBLECharacteristicValueChange](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.onBLECharacteristicValueChange.html) 回调。
* - 安卓平台上，在调用 `notifyBLECharacteristicValueChange` 成功后立即调用 `writeBLECharacteristicValue` 接口，在部分机型上会发生 10008 系统错误
*
* **示例代码**
*
*
* [在微信开发者工具中查看示例](https://developers.weixin.qq.com/s/pQU51zmz7a3K)
* ```js
wx.notifyBLECharacteristicValueChange({
  state: true, // 启用 notify 功能
  // 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接
  deviceId,
  // 这里的 serviceId 需要在 getBLEDeviceServices 接口中获取
  serviceId,
  // 这里的 characteristicId 需要在 getBLEDeviceCharacteristics 接口中获取
  characteristicId,
  success (res) {
    console.log('notifyBLECharacteristicValueChange success', res.errMsg)
  }
})
```
*
* 最低基础库： `1.1.0` */
        notifyBLECharacteristicValueChange<
            T extends NotifyBLECharacteristicValueChangeOption = NotifyBLECharacteristicValueChangeOption,
        >(
            option: T,
        ): PromisifySuccessResult<T, NotifyBLECharacteristicValueChangeOption>;
        /** [wx.offAccelerometerChange(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/device/accelerometer/wx.offAccelerometerChange.html)
         *
         * 取消监听加速度数据事件，参数为空，则取消所有的事件监听。
         *
         * 最低基础库： `2.9.3` */
        offAccelerometerChange(
            /** 加速度数据事件的回调函数 */
            callback: (...args: any[]) => any,
        ): void;
        /** [wx.offAppHide(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.offAppHide.html)
         *
         * 取消监听小程序切后台事件
         *
         * 最低基础库： `2.1.2` */
        offAppHide(
            /** 小程序切后台事件的回调函数 */
            callback?: OffAppHideCallback,
        ): void;
        /** [wx.offAppShow(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.offAppShow.html)
         *
         * 取消监听小程序切前台事件
         *
         * 最低基础库： `2.1.2` */
        offAppShow(
            /** 小程序切前台事件的回调函数 */
            callback?: OffAppShowCallback,
        ): void;
        /** [wx.offAudioInterruptionBegin(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.offAudioInterruptionBegin.html)
         *
         * 取消监听音频因为受到系统占用而被中断开始事件
         *
         * 最低基础库： `2.6.2` */
        offAudioInterruptionBegin(
            /** 音频因为受到系统占用而被中断开始事件的回调函数 */
            callback?: OffAudioInterruptionBeginCallback,
        ): void;
        /** [wx.offAudioInterruptionEnd(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.offAudioInterruptionEnd.html)
         *
         * 取消监听音频中断结束事件
         *
         * 最低基础库： `2.6.2` */
        offAudioInterruptionEnd(
            /** 音频中断结束事件的回调函数 */
            callback?: OffAudioInterruptionEndCallback,
        ): void;
        /** [wx.offBLECharacteristicValueChange(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.offBLECharacteristicValueChange.html)
         *
         * 取消监听低功耗蓝牙设备的特征值变化事件。
         *
         * 最低基础库： `2.9.0` */
        offBLECharacteristicValueChange(
            /** 低功耗蓝牙设备的特征值变化事件的回调函数 */
            callback: (...args: any[]) => any,
        ): void;
        /** [wx.offBLEConnectionStateChange(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.offBLEConnectionStateChange.html)
         *
         * 取消监听低功耗蓝牙连接状态的改变事件
         *
         * 最低基础库： `2.9.0` */
        offBLEConnectionStateChange(
            /** 低功耗蓝牙连接状态的改变事件的回调函数 */
            callback: (...args: any[]) => any,
        ): void;
        /** [wx.offBLEPeripheralConnectionStateChanged(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-peripheral/wx.offBLEPeripheralConnectionStateChanged.html)
         *
         * 取消监听当前外围设备被连接或断开连接事件
         *
         * 最低基础库： `2.10.3` */
        offBLEPeripheralConnectionStateChanged(
            /** 当前外围设备被连接或断开连接事件的回调函数 */
            callback?: OffBLEPeripheralConnectionStateChangedCallback,
        ): void;
        /** [wx.offBeaconServiceChange(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/device/ibeacon/wx.offBeaconServiceChange.html)
         *
         * 取消监听 iBeacon 服务状态变化事件
         *
         * 最低基础库： `2.8.1` */
        offBeaconServiceChange(
            /** iBeacon 服务状态变化事件的回调函数 */
            callback?: OffBeaconServiceChangeCallback,
        ): void;
        /** [wx.offBeaconUpdate(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/device/ibeacon/wx.offBeaconUpdate.html)
         *
         * 取消监听 iBeacon 设备更新事件
         *
         * 最低基础库： `2.8.1` */
        offBeaconUpdate(
            /** iBeacon 设备更新事件的回调函数 */
            callback?: OffBeaconUpdateCallback,
        ): void;
        /** [wx.offBluetoothAdapterStateChange(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.offBluetoothAdapterStateChange.html)
         *
         * 取消监听蓝牙适配器状态变化事件。
         *
         * 最低基础库： `2.9.0` */
        offBluetoothAdapterStateChange(
            /** 蓝牙适配器状态变化事件的回调函数 */
            callback: (...args: any[]) => any,
        ): void;
        /** [wx.offBluetoothDeviceFound(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.offBluetoothDeviceFound.html)
         *
         * 取消监听寻找到新设备的事件。
         *
         * 最低基础库： `2.9.0` */
        offBluetoothDeviceFound(
            /** 寻找到新设备的事件的回调函数 */
            callback: (...args: any[]) => any,
        ): void;
        /** [wx.offCompassChange(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/device/compass/wx.offCompassChange.html)
         *
         * 取消监听罗盘数据变化事件，参数为空，则取消所有的事件监听。
         *
         * 最低基础库： `2.9.3` */
        offCompassChange(
            /** 罗盘数据变化事件的回调函数 */
            callback: (...args: any[]) => any,
        ): void;
        /** [wx.offCopyUrl(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/share/wx.offCopyUrl.html)
         *
         * 取消监听用户点击右上角菜单的「复制链接」按钮时触发的事件
         *
         * 最低基础库： `2.14.3` */
        offCopyUrl(
            /** 用户点击右上角菜单的「复制链接」按钮时触发的事件的回调函数 */
            callback?: OffCopyUrlCallback,
        ): void;
        /** [wx.offDeviceMotionChange(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/device/motion/wx.offDeviceMotionChange.html)
         *
         * 取消监听设备方向变化事件，参数为空，则取消所有的事件监听。
         *
         * 最低基础库： `2.9.3` */
        offDeviceMotionChange(
            /** 设备方向变化事件的回调函数 */
            callback: (...args: any[]) => any,
        ): void;
        /** [wx.offError(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.offError.html)
         *
         * 取消监听小程序错误事件。
         *
         * 最低基础库： `2.1.2` */
        offError(
            /** 小程序错误事件的回调函数 */
            callback: (...args: any[]) => any,
        ): void;
        /** [wx.offGetWifiList(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/device/wifi/wx.offGetWifiList.html)
         *
         * 取消监听获取到 Wi-Fi 列表数据事件。
         *
         * 最低基础库： `2.9.0` */
        offGetWifiList(
            /** 获取到 Wi-Fi 列表数据事件的回调函数 */
            callback: (...args: any[]) => any,
        ): void;
        /** [wx.offGyroscopeChange(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/device/gyroscope/wx.offGyroscopeChange.html)
         *
         * 取消监听陀螺仪数据变化事件。
         *
         * 最低基础库： `2.9.3` */
        offGyroscopeChange(
            /** 陀螺仪数据变化事件的回调函数 */
            callback: (...args: any[]) => any,
        ): void;
        /** [wx.offHCEMessage(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/wx.offHCEMessage.html)
         *
         * 接收 NFC 设备消息事件，取消事件监听。
         *
         * 最低基础库： `2.8.1` */
        offHCEMessage(
            /** 接收 NFC 设备消息事件的回调函数 */
            callback: (...args: any[]) => any,
        ): void;
        /** [wx.offKeyboardHeightChange(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/device/keyboard/wx.offKeyboardHeightChange.html)
         *
         * 取消监听键盘高度变化事件
         *
         * 最低基础库： `2.9.2` */
        offKeyboardHeightChange(
            /** 键盘高度变化事件的回调函数 */
            callback: (...args: any[]) => any,
        ): void;
        /** [wx.offLocalServiceDiscoveryStop(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/network/mdns/wx.offLocalServiceDiscoveryStop.html)
         *
         * 取消监听 mDNS 服务停止搜索的事件
         *
         * 最低基础库： `2.4.0` */
        offLocalServiceDiscoveryStop(
            /** mDNS 服务停止搜索的事件的回调函数 */
            callback?: OffLocalServiceDiscoveryStopCallback,
        ): void;
        /** [wx.offLocalServiceFound(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/network/mdns/wx.offLocalServiceFound.html)
         *
         * 取消监听 mDNS 服务发现的事件
         *
         * 最低基础库： `2.4.0` */
        offLocalServiceFound(
            /** mDNS 服务发现的事件的回调函数 */
            callback?: OffLocalServiceFoundCallback,
        ): void;
        /** [wx.offLocalServiceLost(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/network/mdns/wx.offLocalServiceLost.html)
         *
         * 取消监听 mDNS 服务离开的事件
         *
         * 最低基础库： `2.4.0` */
        offLocalServiceLost(
            /** mDNS 服务离开的事件的回调函数 */
            callback?: OffLocalServiceLostCallback,
        ): void;
        /** [wx.offLocalServiceResolveFail(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/network/mdns/wx.offLocalServiceResolveFail.html)
         *
         * 取消监听 mDNS 服务解析失败的事件
         *
         * 最低基础库： `2.4.0` */
        offLocalServiceResolveFail(
            /** mDNS 服务解析失败的事件的回调函数 */
            callback?: OffLocalServiceResolveFailCallback,
        ): void;
        /** [wx.offLocationChange(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.offLocationChange.html)
         *
         * 取消监听实时地理位置变化事件
         *
         * 最低基础库： `2.8.1` */
        offLocationChange(
            /** 实时地理位置变化事件的回调函数 */
            callback?: OffLocationChangeCallback,
        ): void;
        /** [wx.offMemoryWarning(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/device/memory/wx.offMemoryWarning.html)
         *
         * 取消监听内存不足告警事件。
         *
         * 最低基础库： `2.9.0` */
        offMemoryWarning(
            /** 内存不足告警事件的回调函数 */
            callback: (...args: any[]) => any,
        ): void;
        /** [wx.offNetworkStatusChange(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/device/network/wx.offNetworkStatusChange.html)
         *
         * 取消监听网络状态变化事件，参数为空，则取消所有的事件监听。
         *
         * 最低基础库： `2.9.3` */
        offNetworkStatusChange(
            /** 网络状态变化事件的回调函数 */
            callback: (...args: any[]) => any,
        ): void;
        /** [wx.offPageNotFound(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.offPageNotFound.html)
         *
         * 取消监听小程序要打开的页面不存在事件
         *
         * 最低基础库： `2.1.2` */
        offPageNotFound(
            /** 小程序要打开的页面不存在事件的回调函数 */
            callback?: OffPageNotFoundCallback,
        ): void;
        /** [wx.offThemeChange(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.offThemeChange.html)
         *
         * 取消监听系统主题改变事件
         *
         * 最低基础库： `2.11.0` */
        offThemeChange(
            /** 系统主题改变事件的回调函数 */
            callback?: OffThemeChangeCallback,
        ): void;
        /** [wx.offUnhandledRejection(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.offUnhandledRejection.html)
         *
         * 取消监听未处理的 Promise 拒绝事件
         *
         * 最低基础库： `2.10.0` */
        offUnhandledRejection(
            /** 未处理的 Promise 拒绝事件的回调函数 */
            callback?: OffUnhandledRejectionCallback,
        ): void;
        /** [wx.offUserCaptureScreen(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/device/screen/wx.offUserCaptureScreen.html)
         *
         * 用户主动截屏事件。取消事件监听。
         *
         * 最低基础库： `2.9.3` */
        offUserCaptureScreen(
            /** 用户主动截屏事件的回调函数 */
            callback?: (...args: any[]) => any,
        ): void;
        /** [wx.offVoIPChatInterrupted(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/media/voip/wx.offVoIPChatInterrupted.html)
         *
         * 取消监听被动断开实时语音通话事件。
         *
         * 最低基础库： `2.9.0` */
        offVoIPChatInterrupted(
            /** 被动断开实时语音通话事件的回调函数 */
            callback: (...args: any[]) => any,
        ): void;
        /** [wx.offVoIPChatMembersChanged(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/media/voip/wx.offVoIPChatMembersChanged.html)
         *
         * 取消监听实时语音通话成员在线状态变化事件。
         *
         * 最低基础库： `2.9.0` */
        offVoIPChatMembersChanged(
            /** 实时语音通话成员在线状态变化事件的回调函数 */
            callback: (...args: any[]) => any,
        ): void;
        /** [wx.offVoIPChatStateChanged(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/media/voip/wx.offVoIPChatStateChanged.html)
         *
         * 取消监听房间状态变化事件
         *
         * 最低基础库： `2.16.0` */
        offVoIPChatStateChanged(
            /** 房间状态变化事件的回调函数 */
            callback?: OffVoIPChatStateChangedCallback,
        ): void;
        /** [wx.offVoIPVideoMembersChanged(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/media/voip/wx.offVoIPVideoMembersChanged.html)
         *
         * 取消监听实时语音通话成员视频状态变化事件
         *
         * 最低基础库： `2.11.0` */
        offVoIPVideoMembersChanged(
            /** 实时语音通话成员视频状态变化事件的回调函数 */
            callback?: OffVoIPVideoMembersChangedCallback,
        ): void;
        /** [wx.offWifiConnected(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/device/wifi/wx.offWifiConnected.html)
         *
         * 取消监听连接上 Wi-Fi 的事件。
         *
         * 最低基础库： `2.9.0` */
        offWifiConnected(
            /** 连接上 Wi-Fi 的事件的回调函数 */
            callback: (...args: any[]) => any,
        ): void;
        /** [wx.offWindowResize(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/ui/window/wx.offWindowResize.html)
         *
         * 取消监听窗口尺寸变化事件
         *
         * 最低基础库： `2.3.0` */
        offWindowResize(
            /** 窗口尺寸变化事件的回调函数 */
            callback?: OffWindowResizeCallback,
        ): void;
        /** [wx.onAccelerometerChange(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/device/accelerometer/wx.onAccelerometerChange.html)
*
* 监听加速度数据事件。频率根据 [wx.startAccelerometer()](https://developers.weixin.qq.com/miniprogram/dev/api/device/accelerometer/wx.startAccelerometer.html) 的 interval 参数, 接口调用后会自动开始监听。
*
* **示例代码**
*
*
* ```js
wx.onAccelerometerChange(callback)
``` */
        onAccelerometerChange(
            /** 加速度数据事件的回调函数 */
            callback: OnAccelerometerChangeCallback,
        ): void;
        /** [wx.onAppHide(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onAppHide.html)
         *
         * 监听小程序切后台事件。该事件与 [`App.onHide`](https://developers.weixin.qq.com/miniprogram/dev/reference/api/App.html#onhide) 的回调时机一致。
         *
         * 最低基础库： `2.1.2` */
        onAppHide(
            /** 小程序切后台事件的回调函数 */
            callback: OnAppHideCallback,
        ): void;
        /** [wx.onAppShow(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onAppShow.html)
         *
         * 监听小程序切前台事件。该事件与 [`App.onShow`](https://developers.weixin.qq.com/miniprogram/dev/reference/api/App.html#onshowobject-object) 的回调参数一致。
         *
         * **返回有效 referrerInfo 的场景**
         *
         * | 场景值 | 场景                            | appId含义  |
         * | ------ | ------------------------------- | ---------- |
         * | 1020   | 公众号 profile 页相关小程序列表 | 来源公众号 |
         * | 1035   | 公众号自定义菜单                | 来源公众号 |
         * | 1036   | App 分享消息卡片                | 来源App    |
         * | 1037   | 小程序打开小程序                | 来源小程序 |
         * | 1038   | 从另一个小程序返回              | 来源小程序 |
         * | 1043   | 公众号模板消息                  | 来源公众号 |
         *
         * **注意**
         *
         * 部分版本在无`referrerInfo`的时候会返回 `undefined`，建议使用 `options.referrerInfo && options.referrerInfo.appId` 进行判断。
         *
         * 最低基础库： `2.1.2` */
        onAppShow(
            /** 小程序切前台事件的回调函数 */
            callback: OnAppShowCallback,
        ): void;
        /** [wx.onAudioInterruptionBegin(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onAudioInterruptionBegin.html)
         *
         * 监听音频因为受到系统占用而被中断开始事件。以下场景会触发此事件：闹钟、电话、FaceTime 通话、微信语音聊天、微信视频聊天。此事件触发后，小程序内所有音频会暂停。
         *
         * 最低基础库： `2.6.2` */
        onAudioInterruptionBegin(
            /** 音频因为受到系统占用而被中断开始事件的回调函数 */
            callback: OnAudioInterruptionBeginCallback,
        ): void;
        /** [wx.onAudioInterruptionEnd(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onAudioInterruptionEnd.html)
         *
         * 监听音频中断结束事件。在收到 onAudioInterruptionBegin 事件之后，小程序内所有音频会暂停，收到此事件之后才可再次播放成功
         *
         * 最低基础库： `2.6.2` */
        onAudioInterruptionEnd(
            /** 音频中断结束事件的回调函数 */
            callback: OnAudioInterruptionEndCallback,
        ): void;
        /** [wx.onBLECharacteristicValueChange(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.onBLECharacteristicValueChange.html)
*
* 监听低功耗蓝牙设备的特征值变化事件。必须先启用 `notifyBLECharacteristicValueChange` 接口才能接收到设备推送的 notification。
*
* **示例代码**
*
*
* [在微信开发者工具中查看示例](https://developers.weixin.qq.com/s/pQU51zmz7a3K)
*
* ```js
// ArrayBuffer转16进制字符串示例
function ab2hex(buffer) {
  let hexArr = Array.prototype.map.call(
    new Uint8Array(buffer),
    function(bit) {
      return ('00' + bit.toString(16)).slice(-2)
    }
  )
  return hexArr.join('');
}
wx.onBLECharacteristicValueChange(function(res) {
  console.log(`characteristic ${res.characteristicId} has changed, now is ${res.value}`)
  console.log(ab2hex(res.value))
})
```
*
* 最低基础库： `1.1.0` */
        onBLECharacteristicValueChange(
            /** 低功耗蓝牙设备的特征值变化事件的回调函数 */
            callback: OnBLECharacteristicValueChangeCallback,
        ): void;
        /** [wx.onBLEConnectionStateChange(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.onBLEConnectionStateChange.html)
*
* 监听低功耗蓝牙连接状态的改变事件。包括开发者主动连接或断开连接，设备丢失，连接异常断开等等
*
* **示例代码**
*
*
* [在微信开发者工具中查看示例](https://developers.weixin.qq.com/s/pQU51zmz7a3K)
* ```js
wx.onBLEConnectionStateChange(function(res) {
  // 该方法回调中可以用于处理连接意外断开等异常情况
  console.log(`device ${res.deviceId} state has changed, connected: ${res.connected}`)
})
```
*
* 最低基础库： `1.1.0` */
        onBLEConnectionStateChange(
            /** 低功耗蓝牙连接状态的改变事件的回调函数 */
            callback: OnBLEConnectionStateChangeCallback,
        ): void;
        /** [wx.onBLEPeripheralConnectionStateChanged(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-peripheral/wx.onBLEPeripheralConnectionStateChanged.html)
         *
         * 监听当前外围设备被连接或断开连接事件
         *
         * 最低基础库： `2.10.3` */
        onBLEPeripheralConnectionStateChanged(
            /** 当前外围设备被连接或断开连接事件的回调函数 */
            callback: OnBLEPeripheralConnectionStateChangedCallback,
        ): void;
        /** [wx.onBackgroundAudioPause(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/wx.onBackgroundAudioPause.html)
         *
         * 监听音乐暂停事件。
         * @deprecated 基础库版本 [1.2.0](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) 起已废弃，请使用 [wx.getBackgroundAudioManager](https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/wx.getBackgroundAudioManager.html) 替换
         */
        onBackgroundAudioPause(
            /** 音乐暂停事件的回调函数 */
            callback: OnBackgroundAudioPauseCallback,
        ): void;
        /** [wx.onBackgroundAudioPlay(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/wx.onBackgroundAudioPlay.html)
         *
         * 监听音乐播放事件。
         * @deprecated 基础库版本 [1.2.0](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) 起已废弃，请使用 [wx.getBackgroundAudioManager](https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/wx.getBackgroundAudioManager.html) 替换
         */
        onBackgroundAudioPlay(
            /** 音乐播放事件的回调函数 */
            callback: OnBackgroundAudioPlayCallback,
        ): void;
        /** [wx.onBackgroundAudioStop(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/wx.onBackgroundAudioStop.html)
         *
         * 监听音乐停止事件。
         * @deprecated 基础库版本 [1.2.0](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) 起已废弃，请使用 [wx.getBackgroundAudioManager](https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/wx.getBackgroundAudioManager.html) 替换
         */
        onBackgroundAudioStop(
            /** 音乐停止事件的回调函数 */
            callback: OnBackgroundAudioStopCallback,
        ): void;
        /** [wx.onBackgroundFetchData(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/storage/background-fetch/wx.onBackgroundFetchData.html)
         *
         * 监听收到 backgroundFetch 数据时的回调
         *
         * 最低基础库： `2.8.0` */
        onBackgroundFetchData(
            /** 的回调函数 */
            callback: OnBackgroundFetchDataCallback,
        ): void;
        /** [wx.onBeaconServiceChange(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/device/ibeacon/wx.onBeaconServiceChange.html)
         *
         * 监听 iBeacon 服务状态变化事件，仅能注册一个监听
         *
         * 最低基础库： `1.2.0` */
        onBeaconServiceChange(
            /** iBeacon 服务状态变化事件的回调函数 */
            callback: OnBeaconServiceChangeCallback,
        ): void;
        /** [wx.onBeaconUpdate(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/device/ibeacon/wx.onBeaconUpdate.html)
         *
         * 监听 iBeacon 设备更新事件，仅能注册一个监听
         *
         * 最低基础库： `1.2.0` */
        onBeaconUpdate(
            /** iBeacon 设备更新事件的回调函数 */
            callback: OnBeaconUpdateCallback,
        ): void;
        /** [wx.onBluetoothAdapterStateChange(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.onBluetoothAdapterStateChange.html)
*
* 监听蓝牙适配器状态变化事件
*
* **示例代码**
*
*
* [在微信开发者工具中查看示例](https://developers.weixin.qq.com/s/pQU51zmz7a3K)
* ```js
wx.onBluetoothAdapterStateChange(function (res) {
  console.log('adapterState changed, now is', res)
})
```
*
* 最低基础库： `1.1.0` */
        onBluetoothAdapterStateChange(
            /** 蓝牙适配器状态变化事件的回调函数 */
            callback: OnBluetoothAdapterStateChangeCallback,
        ): void;
        /** [wx.onBluetoothDeviceFound(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.onBluetoothDeviceFound.html)
*
* 监听寻找到新设备的事件
*
* **注意**
*
*
* - 若在 [wx.onBluetoothDeviceFound](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.onBluetoothDeviceFound.html) 回调了某个设备，则此设备会添加到 [wx.getBluetoothDevices](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.getBluetoothDevices.html) 接口获取到的数组中。
*
* **示例代码**
*
*
* [在微信开发者工具中查看示例](https://developers.weixin.qq.com/s/pQU51zmz7a3K)
*
* ```js
// ArrayBuffer转16进度字符串示例
function ab2hex(buffer) {
  var hexArr = Array.prototype.map.call(
    new Uint8Array(buffer),
    function(bit) {
      return ('00' + bit.toString(16)).slice(-2)
    }
  )
  return hexArr.join('');
}
wx.onBluetoothDeviceFound(function(res) {
  var devices = res.devices;
  console.log('new device list has founded')
  console.dir(devices)
  console.log(ab2hex(devices[0].advertisData))
})
```
*
* **注意**
*
*
* - 安卓下部分机型需要有位置权限才能搜索到设备，需留意是否开启了位置权限
*
* 最低基础库： `1.1.0` */
        onBluetoothDeviceFound(
            /** 寻找到新设备的事件的回调函数 */
            callback: OnBluetoothDeviceFoundCallback,
        ): void;
        /** [wx.onCompassChange(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/device/compass/wx.onCompassChange.html)
         *
         * 监听罗盘数据变化事件。频率：5 次/秒，接口调用后会自动开始监听，可使用 wx.stopCompass 停止监听。
         *
         * **accuracy 在 iOS/Android 的差异**
         *
         * 由于平台差异，accuracy 在 iOS/Android 的值不同。
         *
         * - iOS：accuracy 是一个 number 类型的值，表示相对于磁北极的偏差。0 表示设备指向磁北，90 表示指向东，180 表示指向南，依此类推。
         * - Android：accuracy 是一个 string 类型的枚举值。
         *
         * | 值              | 说明                                                                                   |
         * | --------------- | -------------------------------------------------------------------------------------- |
         * | high            | 高精度                                                                                 |
         * | medium          | 中等精度                                                                               |
         * | low             | 低精度                                                                                 |
         * | no-contact      | 不可信，传感器失去连接                                                                 |
         * | unreliable      | 不可信，原因未知                                                                       |
         * | unknow ${value} | 未知的精度枚举值，即该 Android 系统此时返回的表示精度的 value 不是一个标准的精度枚举值 | */
        onCompassChange(
            /** 罗盘数据变化事件的回调函数 */
            callback: OnCompassChangeCallback,
        ): void;
        /** [wx.onCopyUrl(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/share/wx.onCopyUrl.html)
         *
         * 监听用户点击右上角菜单的「复制链接」按钮时触发的事件。本接口为 Beta 版本，暂只在 Android 平台支持。
         *
         * 最低基础库： `2.14.3` */
        onCopyUrl(
            /** 用户点击右上角菜单的「复制链接」按钮时触发的事件的回调函数 */
            callback: OnCopyUrlCallback,
        ): void;
        /** [wx.onDeviceMotionChange(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/device/motion/wx.onDeviceMotionChange.html)
         *
         * 监听设备方向变化事件。频率根据 [wx.startDeviceMotionListening()](https://developers.weixin.qq.com/miniprogram/dev/api/device/motion/wx.startDeviceMotionListening.html) 的 interval 参数。可以使用 [wx.stopDeviceMotionListening()](https://developers.weixin.qq.com/miniprogram/dev/api/device/motion/wx.stopDeviceMotionListening.html) 停止监听。
         *
         * 最低基础库： `2.3.0` */
        onDeviceMotionChange(
            /** 设备方向变化事件的回调函数 */
            callback: OnDeviceMotionChangeCallback,
        ): void;
        /** [wx.onError(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onError.html)
         *
         * 监听小程序错误事件。如脚本错误或 API 调用报错等。该事件与 [`App.onError`](https://developers.weixin.qq.com/miniprogram/dev/reference/api/App.html#onerrorstring-error) 的回调时机与参数一致。
         *
         * 最低基础库： `2.1.2` */
        onError(
            /** 小程序错误事件的回调函数 */
            callback: OnAppErrorCallback,
        ): void;
        /** [wx.onGetWifiList(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/device/wifi/wx.onGetWifiList.html)
         *
         * 监听获取到 Wi-Fi 列表数据事件
         *
         * 最低基础库： `1.6.0` */
        onGetWifiList(
            /** 获取到 Wi-Fi 列表数据事件的回调函数 */
            callback: OnGetWifiListCallback,
        ): void;
        /** [wx.onGyroscopeChange(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/device/gyroscope/wx.onGyroscopeChange.html)
         *
         * 监听陀螺仪数据变化事件。频率根据 [wx.startGyroscope()](https://developers.weixin.qq.com/miniprogram/dev/api/device/gyroscope/wx.startGyroscope.html) 的 interval 参数。可以使用 [wx.stopGyroscope()](https://developers.weixin.qq.com/miniprogram/dev/api/device/gyroscope/wx.stopGyroscope.html) 停止监听。
         *
         * 最低基础库： `2.3.0` */
        onGyroscopeChange(
            /** 陀螺仪数据变化事件的回调函数 */
            callback: OnGyroscopeChangeCallback,
        ): void;
        /** [wx.onHCEMessage(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/wx.onHCEMessage.html)
         *
         * 监听接收 NFC 设备消息事件，仅能注册一个监听
         *
         * 最低基础库： `1.7.0` */
        onHCEMessage(
            /** 接收 NFC 设备消息事件的回调函数 */
            callback: OnHCEMessageCallback,
        ): void;
        /** [wx.onKeyboardHeightChange(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/device/keyboard/wx.onKeyboardHeightChange.html)
*
* 监听键盘高度变化
*
* **示例代码**
*
*
* ```js
wx.onKeyboardHeightChange(res => {
  console.log(res.height)
})
```
*
* 最低基础库： `2.7.0` */
        onKeyboardHeightChange(callback: OnKeyboardHeightChangeCallback): void;
        /** [wx.onLocalServiceDiscoveryStop(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/network/mdns/wx.onLocalServiceDiscoveryStop.html)
         *
         * 监听 mDNS 服务停止搜索的事件
         *
         * 最低基础库： `2.4.0` */
        onLocalServiceDiscoveryStop(
            /** mDNS 服务停止搜索的事件的回调函数 */
            callback: OnLocalServiceDiscoveryStopCallback,
        ): void;
        /** [wx.onLocalServiceFound(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/network/mdns/wx.onLocalServiceFound.html)
         *
         * 监听 mDNS 服务发现的事件
         *
         * 最低基础库： `2.4.0` */
        onLocalServiceFound(
            /** mDNS 服务发现的事件的回调函数 */
            callback: OnLocalServiceFoundCallback,
        ): void;
        /** [wx.onLocalServiceLost(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/network/mdns/wx.onLocalServiceLost.html)
         *
         * 监听 mDNS 服务离开的事件
         *
         * 最低基础库： `2.4.0` */
        onLocalServiceLost(
            /** mDNS 服务离开的事件的回调函数 */
            callback: OnLocalServiceLostCallback,
        ): void;
        /** [wx.onLocalServiceResolveFail(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/network/mdns/wx.onLocalServiceResolveFail.html)
         *
         * 监听 mDNS 服务解析失败的事件
         *
         * 最低基础库： `2.4.0` */
        onLocalServiceResolveFail(
            /** mDNS 服务解析失败的事件的回调函数 */
            callback: OnLocalServiceResolveFailCallback,
        ): void;
        /** [wx.onLocationChange(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.onLocationChange.html)
*
* 监听实时地理位置变化事件，需结合 [wx.startLocationUpdateBackground](https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.startLocationUpdateBackground.html)、[wx.startLocationUpdate](https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.startLocationUpdate.html)使用。
*
* **示例代码**
*
*
* ```js
 const _locationChangeFn = function(res) {
  console.log('location change', res)
 }
 wx.onLocationChange(_locationChangeFn)
 wx.offLocationChange(_locationChangeFn)
```
*
* 最低基础库： `2.8.1` */
        onLocationChange(
            /** 实时地理位置变化事件的回调函数 */
            callback: OnLocationChangeCallback,
        ): void;
        /** [wx.onMemoryWarning(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/device/memory/wx.onMemoryWarning.html)
         *
         * 监听内存不足告警事件。
         *
         * 当 iOS/Android 向小程序进程发出内存警告时，触发该事件。触发该事件不意味小程序被杀，大部分情况下仅仅是告警，开发者可在收到通知后回收一些不必要资源避免进一步加剧内存紧张。
         *
         * **示例代码**
         *
         * ```js
         * wx.onMemoryWarning(function () {
         *   console.log('onMemoryWarningReceive')
         * })
         * ``
         *
         * 最低基础库： `2.0.2` */
        onMemoryWarning(
            /** 内存不足告警事件的回调函数 */
            callback: OnMemoryWarningCallback,
        ): void;
        /** [wx.onNetworkStatusChange(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/device/network/wx.onNetworkStatusChange.html)
*
* 监听网络状态变化事件
*
* **示例代码**
*
*
* ```js
wx.onNetworkStatusChange(function (res) {
  console.log(res.isConnected)
  console.log(res.networkType)
})
```
*
* 最低基础库： `1.1.0` */
        onNetworkStatusChange(
            /** 网络状态变化事件的回调函数 */
            callback: OnNetworkStatusChangeCallback,
        ): void;
        /** [wx.onPageNotFound(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onPageNotFound.html)
         *
         * 监听小程序要打开的页面不存在事件。该事件与 [`App.onPageNotFound`](https://developers.weixin.qq.com/miniprogram/dev/reference/api/App.html#onpagenotfoundobject-object) 的回调时机一致。
         *
         * **注意**
         *
         * - 开发者可以在回调中进行页面重定向，但必须在回调中**同步**处理，异步处理（例如 `setTimeout` 异步执行）无效。
         * - 若开发者没有调用 [wx.onPageNotFound](https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onPageNotFound.html) 绑定监听，也没有声明 `App.onPageNotFound`，当跳转页面不存在时，将推入微信客户端原生的页面不存在提示页面。
         * - 如果回调中又重定向到另一个不存在的页面，将推入微信客户端原生的页面不存在提示页面，并且不再第二次回调。
         *
         * 最低基础库： `2.1.2` */
        onPageNotFound(
            /** 小程序要打开的页面不存在事件的回调函数 */
            callback: OnPageNotFoundCallback,
        ): void;
        /** [wx.onSocketClose(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/wx.onSocketClose.html)
         *
         * 监听 WebSocket 连接关闭事件。**推荐使用 [SocketTask](https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/SocketTask.html) 的方式去管理 webSocket 链接，每一条链路的生命周期都更加可控。同时存在多个 webSocket 的链接的情况下使用 wx 前缀的方法可能会带来一些和预期不一致的情况。** */
        onSocketClose(
            /** WebSocket 连接关闭事件的回调函数 */
            callback: OnSocketCloseCallback,
        ): void;
        /** [wx.onSocketError(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/wx.onSocketError.html)
         *
         * 监听 WebSocket 错误事件。**推荐使用 [SocketTask](https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/SocketTask.html) 的方式去管理 webSocket 链接，每一条链路的生命周期都更加可控。同时存在多个 webSocket 的链接的情况下使用 wx 前缀的方法可能会带来一些和预期不一致的情况。** */
        onSocketError(
            /** WebSocket 错误事件的回调函数 */
            callback: OnSocketErrorCallback,
        ): void;
        /** [wx.onSocketMessage(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/wx.onSocketMessage.html)
         *
         * 监听 WebSocket 接受到服务器的消息事件。**推荐使用 [SocketTask](https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/SocketTask.html) 的方式去管理 webSocket 链接，每一条链路的生命周期都更加可控。同时存在多个 webSocket 的链接的情况下使用 wx 前缀的方法可能会带来一些和预期不一致的情况。** */
        onSocketMessage(
            /** WebSocket 接受到服务器的消息事件的回调函数 */
            callback: OnSocketMessageCallback,
        ): void;
        /** [wx.onSocketOpen(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/wx.onSocketOpen.html)
         *
         * 监听 WebSocket 连接打开事件。**推荐使用 [SocketTask](https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/SocketTask.html) 的方式去管理 webSocket 链接，每一条链路的生命周期都更加可控。同时存在多个 webSocket 的链接的情况下使用 wx 前缀的方法可能会带来一些和预期不一致的情况。** */
        onSocketOpen(
            /** WebSocket 连接打开事件的回调函数 */
            callback: OnSocketOpenCallback,
        ): void;
        /** [wx.onThemeChange(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onThemeChange.html)
         *
         * 监听系统主题改变事件。该事件与 [`App.onThemeChange`](https://developers.weixin.qq.com/miniprogram/dev/reference/api/App.html#onThemeChange-Object-object) 的回调时机一致。
         *
         * **注意**
         *
         * - 只有在全局配置"darkmode": true时才会触发此事件。
         *
         * 最低基础库： `2.11.0` */
        onThemeChange(
            /** 系统主题改变事件的回调函数 */
            callback: OnThemeChangeCallback,
        ): void;
        /** [wx.onUnhandledRejection(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onUnhandledRejection.html)
         *
         * 监听未处理的 Promise 拒绝事件。该事件与 [ `App.onUnhandledRejection`](https://developers.weixin.qq.com/miniprogram/dev/reference/api/App.html#onUnhandledRejection-Object-object) 的回调时机与参数一致。
         *
         * **注意**
         *
         * - 安卓平台暂时不支持该事件
         * - 所有的 unhandledRejection 都可以被这一监听捕获，但只有 Error 类型的才会在小程序后台触发报警。
         *
         * 最低基础库： `2.10.0` */
        onUnhandledRejection(
            /** 未处理的 Promise 拒绝事件的回调函数 */
            callback: OnUnhandledRejectionCallback,
        ): void;
        /** [wx.onUserCaptureScreen(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/device/screen/wx.onUserCaptureScreen.html)
*
* 监听用户主动截屏事件。用户使用系统截屏按键截屏时触发，只能注册一个监听
*
* **示例代码**
*
*
* ```js
wx.onUserCaptureScreen(function (res) {
  console.log('用户截屏了')
})
```
*
* 最低基础库： `1.4.0` */
        onUserCaptureScreen(
            /** 用户主动截屏事件的回调函数 */
            callback: OnUserCaptureScreenCallback,
        ): void;
        /** [wx.onVoIPChatInterrupted(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/media/voip/wx.onVoIPChatInterrupted.html)
         *
         * 监听被动断开实时语音通话事件。包括小游戏切入后端时断开
         *
         * 最低基础库： `2.7.0` */
        onVoIPChatInterrupted(
            /** 被动断开实时语音通话事件的回调函数 */
            callback: OnVoIPChatInterruptedCallback,
        ): void;
        /** [wx.onVoIPChatMembersChanged(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/media/voip/wx.onVoIPChatMembersChanged.html)
         *
         * 监听实时语音通话成员在线状态变化事件。有成员加入/退出通话时触发回调
         *
         * 最低基础库： `2.7.0` */
        onVoIPChatMembersChanged(
            /** 实时语音通话成员在线状态变化事件的回调函数 */
            callback: OnVoIPChatMembersChangedCallback,
        ): void;
        /** [wx.onVoIPChatSpeakersChanged(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/media/voip/wx.onVoIPChatSpeakersChanged.html)
         *
         * 监听实时语音通话成员通话状态变化事件。有成员开始/停止说话时触发回调
         *
         * 最低基础库： `2.7.0` */
        onVoIPChatSpeakersChanged(
            /** 实时语音通话成员通话状态变化事件的回调函数 */
            callback: OnVoIPChatSpeakersChangedCallback,
        ): void;
        /** [wx.onVoIPChatStateChanged(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/media/voip/wx.onVoIPChatStateChanged.html)
         *
         * 监听房间状态变化事件。
         *
         * 最低基础库： `2.16.0` */
        onVoIPChatStateChanged(
            /** 房间状态变化事件的回调函数 */
            callback: OnVoIPChatStateChangedCallback,
        ): void;
        /** [wx.onVoIPVideoMembersChanged(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/media/voip/wx.onVoIPVideoMembersChanged.html)
         *
         * 监听实时语音通话成员视频状态变化事件。
         *
         * 最低基础库： `2.11.0` */
        onVoIPVideoMembersChanged(
            /** 实时语音通话成员视频状态变化事件的回调函数 */
            callback: OnVoIPVideoMembersChangedCallback,
        ): void;
        /** [wx.onWifiConnected(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/device/wifi/wx.onWifiConnected.html)
         *
         * 监听连接上 Wi-Fi 的事件
         *
         * 最低基础库： `1.6.0` */
        onWifiConnected(
            /** 连接上 Wi-Fi 的事件的回调函数 */
            callback: OnWifiConnectedCallback,
        ): void;
        /** [wx.onWindowResize(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/ui/window/wx.onWindowResize.html)
         *
         * 监听窗口尺寸变化事件
         *
         * 最低基础库： `2.3.0` */
        onWindowResize(
            /** 窗口尺寸变化事件的回调函数 */
            callback: OnWindowResizeCallback,
        ): void;
        /** [wx.openBluetoothAdapter(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.openBluetoothAdapter.html)
*
* 初始化蓝牙模块。iOS 上开启主机/从机模式时需分别调用一次，指定对应的 `mode`。
*
* **object.fail 回调函数返回的 state 参数（仅 iOS）**
*
*
* | 状态码 | 说明   |
* | ------ | ------ |
* | 0      | 未知   |
* | 1      | 重置中 |
* | 2      | 不支持 |
* | 3      | 未授权 |
* | 4      | 未开启 |
*
* **注意**
*
*
* - 其他蓝牙相关 API 必须在 [wx.openBluetoothAdapter](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.openBluetoothAdapter.html) 调用之后使用。否则 API 会返回错误（errCode=10000）。
* - 在用户蓝牙开关未开启或者手机不支持蓝牙功能的情况下，调用 [wx.openBluetoothAdapter](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.openBluetoothAdapter.html) 会返回错误（errCode=10001），表示手机蓝牙功能不可用。此时小程序蓝牙模块已经初始化完成，可通过 [wx.onBluetoothAdapterStateChange](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.onBluetoothAdapterStateChange.html) 监听手机蓝牙状态的改变，也可以调用蓝牙模块的所有API。
*
* **示例代码**
*
*
* [在微信开发者工具中查看示例](https://developers.weixin.qq.com/s/pQU51zmz7a3K)
* ```js
wx.openBluetoothAdapter({
  success (res) {
    console.log(res)
  }
})
```
*
* 最低基础库： `1.1.0` */
        openBluetoothAdapter<
            T extends OpenBluetoothAdapterOption = OpenBluetoothAdapterOption,
        >(
            option?: T,
        ): PromisifySuccessResult<T, OpenBluetoothAdapterOption>;
        /** [wx.openCard(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/card/wx.openCard.html)
*
* 查看微信卡包中的卡券。只有通过 [认证](https://developers.weixin.qq.com/miniprogram/product/renzheng.html) 的小程序或文化互动类目的小游戏才能使用。更多文档请参考 [微信卡券接口文档](https://mp.weixin.qq.com/cgi-bin/announce?action=getannouncement&key=1490190158&version=1&lang=zh_CN&platform=2)。
*
* **示例代码**
*
*
* ```js
wx.openCard({
  cardList: [{
    cardId: '',
    code: ''
  }, {
    cardId: '',
    code: ''
  }],
  success (res) { }
})
```
*
* 最低基础库： `1.1.0` */
        openCard<T extends OpenCardOption = OpenCardOption>(
            option: T,
        ): PromisifySuccessResult<T, OpenCardOption>;
        /** [wx.openChannelsLive(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/channels/wx.openChannelsLive.html)
         *
         * 打开视频号直播
         *
         * 最低基础库： `2.15.0` */
        openChannelsLive(option: OpenChannelsLiveOption): void;
        /** [wx.openDocument(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.openDocument.html)
         *
         * 新开页面打开文档。微信客户端 `7.0.12` 版本前默认显示右上角菜单按钮，之后的版本默认不显示，需主动传入 `showMenu`。 */
        openDocument<T extends OpenDocumentOption = OpenDocumentOption>(
            option: T,
        ): PromisifySuccessResult<T, OpenDocumentOption>;
        /** [wx.openLocation(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.openLocation.html)
*
* 使用微信内置地图查看位置
*
* **示例代码**
*
*
*  ```js
 wx.getLocation({
  type: 'gcj02', //返回可以用于wx.openLocation的经纬度
  success (res) {
    const latitude = res.latitude
    const longitude = res.longitude
    wx.openLocation({
      latitude,
      longitude,
      scale: 18
    })
  }
})
 ``` */
        openLocation<T extends OpenLocationOption = OpenLocationOption>(
            option: T,
        ): PromisifySuccessResult<T, OpenLocationOption>;
        /** [wx.openSetting(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/setting/wx.openSetting.html)
*
* 调起客户端小程序设置界面，返回用户设置的操作结果。**设置界面只会出现小程序已经向用户请求过的[权限](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/authorize.html)**。
*
* ****
*
* - 注意：[2.3.0](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) 版本开始，用户发生点击行为后，才可以跳转打开设置页，管理授权信息。[详情](https://developers.weixin.qq.com/community/develop/doc/000cea2305cc5047af5733de751008)
*
* **示例代码**
*
*
* ```js
wx.openSetting({
  success (res) {
    console.log(res.authSetting)
    // res.authSetting = {
    //   "scope.userInfo": true,
    //   "scope.userLocation": true
    // }
  }
})
```
*
* 最低基础库： `1.1.0` */
        openSetting<T extends OpenSettingOption = OpenSettingOption>(
            option?: T,
        ): PromisifySuccessResult<T, OpenSettingOption>;
        /** [wx.openVideoEditor(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.openVideoEditor.html)
         *
         * 打开视频编辑器
         *
         * 最低基础库： `2.12.0` */
        openVideoEditor(option: OpenVideoEditorOption): void;
        /** [wx.pageScrollTo(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/ui/scroll/wx.pageScrollTo.html)
*
* 将页面滚动到目标位置，支持选择器和滚动距离两种方式定位
*
* **selector 语法**
*
*
* selector类似于 CSS 的选择器，但仅支持下列语法。
*
* + ID选择器：#the-id
* + class选择器（可以连续指定多个）：.a-class.another-class
* + 子元素选择器：.the-parent > .the-child
* + 后代选择器：.the-ancestor .the-descendant
* + 跨自定义组件的后代选择器：.the-ancestor >>> .the-descendant
* + 多选择器的并集：#a-node, .some-other-nodes
*
* **示例代码**
*
*
* ```js
wx.pageScrollTo({
  scrollTop: 0,
  duration: 300
})
```
*
* 最低基础库： `1.4.0` */
        pageScrollTo<T extends PageScrollToOption = PageScrollToOption>(
            option: T,
        ): PromisifySuccessResult<T, PageScrollToOption>;
        /** [wx.pauseBackgroundAudio(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/wx.pauseBackgroundAudio.html)
*
* 暂停播放音乐。
*
* **示例代码**
*
*
* ```js
wx.pauseBackgroundAudio()
```
* @deprecated 基础库版本 [1.2.0](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) 起已废弃，请使用 [wx.getBackgroundAudioManager](https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/wx.getBackgroundAudioManager.html) 替换
*  */
        pauseBackgroundAudio<
            T extends PauseBackgroundAudioOption = PauseBackgroundAudioOption,
        >(
            option?: T,
        ): PromisifySuccessResult<T, PauseBackgroundAudioOption>;
        /** [wx.pauseVoice(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/wx.pauseVoice.html)
*
* 暂停正在播放的语音。再次调用 [wx.playVoice](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/wx.playVoice.html) 播放同一个文件时，会从暂停处开始播放。如果想从头开始播放，需要先调用 [wx.stopVoice](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/wx.stopVoice.html)。
*
* **示例代码**
*
*
* ```js
wx.startRecord({
  success (res) {
    const tempFilePath = res.tempFilePath
    wx.playVoice({
      filePath: tempFilePath
    })

    setTimeout(() => { wx.pauseVoice() }, 5000)
  }
})
```
* @deprecated 基础库版本 [1.6.0](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) 起已废弃，请使用 [wx.createInnerAudioContext](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/wx.createInnerAudioContext.html) 替换
*  */
        pauseVoice<T extends PauseVoiceOption = PauseVoiceOption>(
            option?: T,
        ): PromisifySuccessResult<T, PauseVoiceOption>;
        /** [wx.playBackgroundAudio(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/wx.playBackgroundAudio.html)
*
* 使用后台播放器播放音乐。对于微信客户端来说，只能同时有一个后台音乐在播放。当用户离开小程序后，音乐将暂停播放；当用户在其他小程序占用了音乐播放器，原有小程序内的音乐将停止播放。
*
* **示例代码**
*
*
* ```js
wx.playBackgroundAudio({
  dataUrl: '',
  title: '',
  coverImgUrl: ''
})
```
* @deprecated 基础库版本 [1.2.0](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) 起已废弃，请使用 [wx.getBackgroundAudioManager](https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/wx.getBackgroundAudioManager.html) 替换
*  */
        playBackgroundAudio<
            T extends PlayBackgroundAudioOption = PlayBackgroundAudioOption,
        >(
            option: T,
        ): PromisifySuccessResult<T, PlayBackgroundAudioOption>;
        /** [wx.playVoice(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/wx.playVoice.html)
*
* 开始播放语音。同时只允许一个语音文件正在播放，如果前一个语音文件还没播放完，将中断前一个语音播放。
*
* **示例代码**
*
*
* ```js
wx.startRecord({
  success (res) {
    const tempFilePath = res.tempFilePath
    wx.playVoice({
      filePath: tempFilePath,
      complete () { }
    })
  }
})
```
* @deprecated 基础库版本 [1.6.0](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) 起已废弃，请使用 [wx.createInnerAudioContext](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/wx.createInnerAudioContext.html) 替换
*  */
        playVoice<T extends PlayVoiceOption = PlayVoiceOption>(
            option: T,
        ): PromisifySuccessResult<T, PlayVoiceOption>;
        /** [wx.previewImage(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.previewImage.html)
*
* 在新页面中全屏预览图片。预览的过程中用户可以进行保存图片、发送给朋友等操作。
*
* **示例代码**
*
*
* ```js
wx.previewImage({
  current: '', // 当前显示图片的http链接
  urls: [] // 需要预览的图片http链接列表
})
``` */
        previewImage<T extends PreviewImageOption = PreviewImageOption>(
            option: T,
        ): PromisifySuccessResult<T, PreviewImageOption>;
        /** [wx.previewMedia(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.previewMedia.html)
         *
         * 预览图片和视频。
         *
         * 最低基础库： `2.12.0` */
        previewMedia<T extends PreviewMediaOption = PreviewMediaOption>(
            option: T,
        ): PromisifySuccessResult<T, PreviewMediaOption>;
        /** [wx.reLaunch(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.reLaunch.html)
*
* 关闭所有页面，打开到应用内的某个页面
*
* **示例代码**
*
*
* ```js
wx.reLaunch({
  url: 'test?id=1'
})
```
*
* ```html
* // test
* Page({
*   onLoad (option) {
*     console.log(option.query)
*   }
* })
* ```
*
* 最低基础库： `1.1.0` */
        reLaunch<T extends ReLaunchOption = ReLaunchOption>(
            option: T,
        ): PromisifySuccessResult<T, ReLaunchOption>;
        /** [wx.readBLECharacteristicValue(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.readBLECharacteristicValue.html)
*
* 读取低功耗蓝牙设备的特征值的二进制数据值。注意：必须设备的特征值支持 read 才可以成功调用。
*
* **注意**
*
*
* - 并行调用多次会存在读失败的可能性。
* - 接口读取到的信息需要在 `onBLECharacteristicValueChange` 方法注册的回调中获取。
*
* **示例代码**
*
*
* [在微信开发者工具中查看示例](https://developers.weixin.qq.com/s/pQU51zmz7a3K)
* ```js
// 必须在这里的回调才能获取
wx.onBLECharacteristicValueChange(function(characteristic) {
  console.log('characteristic value comed:', characteristic)
})

wx.readBLECharacteristicValue({
  // 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接
  deviceId,
  // 这里的 serviceId 需要在 getBLEDeviceServices 接口中获取
  serviceId,
  // 这里的 characteristicId 需要在 getBLEDeviceCharacteristics 接口中获取
  characteristicId,
  success (res) {
    console.log('readBLECharacteristicValue:', res.errCode)
  }
})
```
*
* 最低基础库： `1.1.0` */
        readBLECharacteristicValue<
            T extends ReadBLECharacteristicValueOption = ReadBLECharacteristicValueOption,
        >(
            option: T,
        ): PromisifySuccessResult<T, ReadBLECharacteristicValueOption>;
        /** [wx.redirectTo(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.redirectTo.html)
*
* 关闭当前页面，跳转到应用内的某个页面。但是不允许跳转到 tabbar 页面。
*
* **示例代码**
*
*
* ```js
wx.redirectTo({
  url: 'test?id=1'
})
``` */
        redirectTo<T extends RedirectToOption = RedirectToOption>(
            option: T,
        ): PromisifySuccessResult<T, RedirectToOption>;
        /** [wx.removeSavedFile(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.removeSavedFile.html)
*
* 删除本地缓存文件
*
* **示例代码**
*
*
* ```js
wx.getSavedFileList({
 success (res) {
   if (res.fileList.length > 0){
     wx.removeSavedFile({
       filePath: res.fileList[0].filePath,
       complete (res) {
         console.log(res)
       }
     })
   }
 }
})
``` */
        removeSavedFile<
            T extends WxRemoveSavedFileOption = WxRemoveSavedFileOption,
        >(
            option: T,
        ): PromisifySuccessResult<T, WxRemoveSavedFileOption>;
        /** [wx.removeStorage(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.removeStorage.html)
*
* 从本地缓存中移除指定 key。缓存相关策略请查看 [存储](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/storage.html)。
*
* **示例代码**
*
*
* ```js
wx.removeStorage({
  key: 'key',
  success (res) {
    console.log(res)
  }
})
```
*
* ```js
try {
  wx.removeStorageSync('key')
} catch (e) {
  // Do something when catch error
}
``` */
        removeStorage<T extends RemoveStorageOption = RemoveStorageOption>(
            option: T,
        ): PromisifySuccessResult<T, RemoveStorageOption>;
        /** [wx.removeStorageSync(string key)](https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.removeStorageSync.html)
*
* [wx.removeStorage](https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.removeStorage.html) 的同步版本
*
* **示例代码**
*
*
* ```js
wx.removeStorage({
  key: 'key',
  success (res) {
    console.log(res)
  }
})
```
*
* ```js
try {
  wx.removeStorageSync('key')
} catch (e) {
  // Do something when catch error
}
``` */
        removeStorageSync(
            /** 本地缓存中指定的 key */
            key: string,
        ): void;
        /** [wx.removeTabBarBadge(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/ui/tab-bar/wx.removeTabBarBadge.html)
         *
         * 移除 tabBar 某一项右上角的文本
         *
         * 最低基础库： `1.9.0` */
        removeTabBarBadge<
            T extends RemoveTabBarBadgeOption = RemoveTabBarBadgeOption,
        >(
            option: T,
        ): PromisifySuccessResult<T, RemoveTabBarBadgeOption>;
        /** [wx.reportAnalytics(string eventName, Object data)](https://developers.weixin.qq.com/miniprogram/dev/api/data-analysis/wx.reportAnalytics.html)
*
* 自定义分析数据上报接口。使用前，需要在小程序管理后台自定义分析中新建事件，配置好事件名与字段。
*
* **示例代码**
*
*
* ```js
wx.reportAnalytics('purchase', {
  price: 120,
  color: 'red'
})
``` */
        reportAnalytics(
            /** 事件名 */
            eventName: string,
            /** 上报的自定义数据，key 为配置中的字段名，value 为上报的数据。 */
            data: IAnyObject,
        ): void;
        /** [wx.reportEvent(string eventId, object data)](https://developers.weixin.qq.com/miniprogram/dev/api/data-analysis/wx.reportEvent.html)
         *
         * 事件上报
         *
         * 最低基础库： `2.14.4` */
        reportEvent(
            /** 在 mp 实验系统中设置的事件英文名 */
            eventId: string,
            /** 可被 JSON.stringily 的对象，将一起上报至系统 */
            data?: IAnyObject,
        ): void;
        /** [wx.reportMonitor(string name, number value)](https://developers.weixin.qq.com/miniprogram/dev/api/data-analysis/wx.reportMonitor.html)
*
* 自定义业务数据监控上报接口。
*
* **使用说明**
*
*
* 使用前，需要在「小程序管理后台-运维中心-性能监控-业务数据监控」中新建监控事件，配置监控描述与告警类型。每一个监控事件对应唯一的监控ID，开发者最多可以创建128个监控事件。
*
* **示例代码**
*
*
* ```js
wx.reportMonitor('1', 1)
```
*
* 最低基础库： `2.0.1` */
        reportMonitor(
            /** 监控ID，在「小程序管理后台」新建数据指标后获得 */
            name: string,
            /** 上报数值，经处理后会在「小程序管理后台」上展示每分钟的上报总量 */
            value: number,
        ): void;
        /** [wx.reportPerformance(Number id, Number value, String|Array dimensions)](https://developers.weixin.qq.com/miniprogram/dev/api/base/performance/wx.reportPerformance.html)
*
* 小程序测速上报。使用前，需要在小程序管理后台配置。 详情参见[小程序测速](https://developers.weixin.qq.com/miniprogram/dev/framework/performanceReport/index.html)指南。
*
* **示例代码**
*
*
* ```js
wx.reportPerformance(1101, 680)
wx.reportPerformance(1101, 680, 'custom')
```
*
* 最低基础库： `2.9.2` */
        reportPerformance(
            /** 指标 id */
            id: number,
            /** 需要上报的数值 */
            value: number,
            /** 自定义维度 (选填) */
            dimensions?: string | any[],
        ): void;
        /** [wx.requestOrderPayment(Object args)](https://developers.weixin.qq.com/miniprogram/dev/api/payment/wx.requestOrderPayment.html)
         *
         * 创建自定义版交易组件订单，并发起支付。
         * 仅接入了[自定义版交易组件](/miniprogram/dev/framework/ministore/minishopopencomponent2/Introduction2)的小程序需要使用，普通小程序可直接使用 [`wx.requestPayment`](./wx.requestPayment)。
         *
         * **前置检查**
         *
         * 接入自定义版交易组件之后，若要发起微信支付，请先查询[需要校验的场景](/miniprogram/dev/framework/ministore/minishopopencomponent2/API/order/check_scene)。
         * 在需要校验的场景中，发起微信支付时，必须使用该接口，需要按照要求传入相关的[订单信息](/miniprogram/dev/framework/ministore/minishopopencomponent2/API/order/add_order)进行校验，校验通过后用户才可以完成当前订单的支付，非需要校验的场景则可以按照商家要求自行选择传入订单信息或不传入。
         *
         * 最低基础库： `2.16.0` */
        requestOrderPayment<
            T extends RequestOrderPaymentOption = RequestOrderPaymentOption,
        >(
            args: T,
        ): PromisifySuccessResult<T, RequestOrderPaymentOption>;
        /** [wx.requestPayment(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/payment/wx.requestPayment.html)
*
* 发起微信支付。调用前需在[小程序微信公众平台](https://mp.weixin.qq.com/) -功能-微信支付入口申请接入微信支付。了解更多信息，可以参考 [微信支付开发文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/pages/api.shtml)：
* - [开发指引](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/pay/transactions/chapter2_3.shtml)
* - [下单接口](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/pay/transactions/chapter3_2.shtml)
* - [支付接口](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/pay/transactions/chapter3_12.shtml)
* - 旧版本 (v2)
*   - [开发指引](https://pay.weixin.qq.com/wiki/doc/api/wxa/wxa_api.php?chapter=7_3&index=1)
*   - [支付接口](https://pay.weixin.qq.com/wiki/doc/api/wxa/wxa_api.php?chapter=7_7&index=3)
*
* 如果使用[云开发](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html)，则 `wx.requestPayment` 所需参数可以通过云开发微信支付统一下单接口免鉴权获取、并可免证书、免签名的安全调用微信支付服务端接口、及接收异步支付结果回调，详见[云开发微信支付](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/guide/wechatpay.html)。
*
* **示例代码**
*
*
* ```js
wx.requestPayment({
  timeStamp: '',
  nonceStr: '',
  package: '',
  signType: 'MD5',
  paySign: '',
  success (res) { },
  fail (res) { }
})
```
*
* 注：如果服务端有使用云开发，可以通过云开发微信支付[统一下单](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/open/pay/CloudPay.unifiedOrder.html)接口免鉴权获取以上所需所有参数，示例：
*
*
* ```js
// 云函数代码
const cloud = require('wx-server-sdk')
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

exports.main = async (event, context) => {
  const res = await cloud.cloudPay.unifiedOrder({
    "body" : "小秋TIT店-超市",
    "outTradeNo" : "1217752501201407033233368018",
    "spbillCreateIp" : "127.0.0.1",
    "subMchId" : "1900009231",
    "totalFee" : 1,
    "envId": "test-f0b102",
    "functionName": "pay_cb"
  })
  return res
}

// 小程序代码
wx.cloud.callFunction({
  name: '函数名',
  data: {
    // ...
  },
  success: res => {
    const payment = res.result.payment
    wx.requestPayment({
      ...payment,
      success (res) {
        console.log('pay success', res)
      },
      fail (err) {
        console.error('pay fail', err)
      }
    })
  },
  fail: console.error,
})
``` */
        requestPayment<T extends RequestPaymentOption = RequestPaymentOption>(
            option: T,
        ): PromisifySuccessResult<T, RequestPaymentOption>;
        /** [wx.requestSubscribeMessage(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/subscribe-message/wx.requestSubscribeMessage.html)
*
* 调起客户端小程序订阅消息界面，返回用户订阅消息的操作结果。当用户勾选了订阅面板中的“总是保持以上选择，不再询问”时，模板消息会被添加到用户的小程序设置页，通过 [wx.getSetting](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/setting/wx.getSetting.html) 接口可获取用户对相关模板消息的订阅状态。
*
* ## 注意事项
*  - 一次性模板 id 和永久模板 id 不可同时使用。
*  - 低版本基础库2.4.4~2.8.3 已支持订阅消息接口调用，仅支持传入一个一次性 tmplId / 永久 tmplId。
*  - [2.8.2](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) 版本开始，用户发生点击行为或者发起支付回调后，才可以调起订阅消息界面。
*  - [2.10.0](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) 版本开始，开发版和体验版小程序将禁止使用模板消息 formId。
*  - 一次授权调用里，每个tmplId对应的模板标题不能存在相同的，若出现相同的，只保留一个。
*
* **错误码**
*
*
*
* | errCode | errMsg                                                 | 说明                                                           |
* | ------- | ------------------------------------------------------ | -------------------------------------------------------------- |
* | 10001   | TmplIds can't be empty                                 | 参数传空了                                                     |
* | 10002   | Request list fail                                       | 网络问题，请求消息列表失败                                     |
* | 10003   | Request subscribe fail                                 | 网络问题，订阅请求发送失败                                     |
* | 10004   | Invalid template id                                    | 参数类型错误                                                   |
* | 10005   | Cannot show subscribe message UI                       | 无法展示 UI，一般是小程序这个时候退后台了导致的                |
* | 20001   | No template data return, verify the template id exist  | 没有模板数据，一般是模板 ID 不存在 或者和模板类型不对应 导致的 |
* | 20002   | Templates type must be same                            | 模板消息类型 既有一次性的又有永久的                            |
* | 20003   | Templates count out of max bounds                      | 模板消息数量超过上限                                           |
* | 20004   | The main switch is switched off                        | 用户关闭了主开关，无法进行订阅                                 |
* | 20005   | This mini program was banned from subscribing messages | 小程序被禁封                                                   |
*
* **示例代码**
*
*
* ```js
wx.requestSubscribeMessage({
  tmplIds: [''],
  success (res) { }
})
```
*
* 最低基础库： `2.4.4` */
        requestSubscribeMessage<
            T extends RequestSubscribeMessageOption = RequestSubscribeMessageOption,
        >(
            option: T,
        ): PromisifySuccessResult<T, RequestSubscribeMessageOption>;
        /** [wx.revokeBufferURL(string url)](https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.revokeBufferURL.html)
         *
         * 根据 URL 销毁存在内存中的数据
         *
         * 最低基础库： `2.14.0` */
        revokeBufferURL(
            /** 需要销毁的二进制数据 URL */
            url: string,
        ): void;
        /** [wx.saveFile(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.saveFile.html)
*
* 保存文件到本地。注意：**saveFile 会把临时文件移动，因此调用成功后传入的 tempFilePath 将不可用**
*
* **示例代码**
*
*
* ```js
wx.chooseImage({
  success: function(res) {
    const tempFilePaths = res.tempFilePaths
    wx.saveFile({
      tempFilePath: tempFilePaths[0],
      success (res) {
        const savedFilePath = res.savedFilePath
      }
    })
  }
})
```
*
* **注意**
*
*
* 本地文件存储的大小限制为 10M */
        saveFile<T extends WxSaveFileOption = WxSaveFileOption>(
            option: T,
        ): PromisifySuccessResult<T, WxSaveFileOption>;
        /** [wx.saveFileToDisk(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.saveFileToDisk.html)
*
* 保存文件系统的文件到用户磁盘，仅在 PC 端支持
*
* **示例代码**
*
*
* ```js
wx.saveFileToDisk({
  filePath: `${wx.env.USER_DATA_PATH}/hello.txt`,
  success(res) {
    console.log(res)
  },
  fail(res) {
    console.error(res)
  }
})
```
*
* 最低基础库： `2.11.0` */
        saveFileToDisk(option: SaveFileToDiskOption): void;
        /** [wx.saveImageToPhotosAlbum(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.saveImageToPhotosAlbum.html)
*
* 保存图片到系统相册。
*
* **示例代码**
*
*
* ```js
wx.saveImageToPhotosAlbum({
  success(res) { }
})
```
*
* 最低基础库： `1.2.0` */
        saveImageToPhotosAlbum<
            T extends SaveImageToPhotosAlbumOption = SaveImageToPhotosAlbumOption,
        >(
            option: T,
        ): PromisifySuccessResult<T, SaveImageToPhotosAlbumOption>;
        /** [wx.saveVideoToPhotosAlbum(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.saveVideoToPhotosAlbum.html)
*
* 保存视频到系统相册。支持mp4视频格式。
*
* **示例代码**
*
*
* ```js
wx.saveVideoToPhotosAlbum({
  filePath: 'wxfile://xxx',
  success (res) {
    console.log(res.errMsg)
  }
})
```
*
* 最低基础库： `1.2.0` */
        saveVideoToPhotosAlbum<
            T extends SaveVideoToPhotosAlbumOption = SaveVideoToPhotosAlbumOption,
        >(
            option: T,
        ): PromisifySuccessResult<T, SaveVideoToPhotosAlbumOption>;
        /** [wx.scanCode(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/scan/wx.scanCode.html)
*
* 调起客户端扫码界面进行扫码
*
* **示例代码**
*
*
* ```js
// 允许从相机和相册扫码
wx.scanCode({
  success (res) {
    console.log(res)
  }
})

// 只允许从相机扫码
wx.scanCode({
  onlyFromCamera: true,
  success (res) {
    console.log(res)
  }
})
```
*
* 最低基础库： `1.0.0` */
        scanCode<T extends ScanCodeOption = ScanCodeOption>(
            option: T,
        ): PromisifySuccessResult<T, ScanCodeOption>;
        /** [wx.searchContacts(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/contact/wx.searchContacts.html)
         *
         * 查找通讯录，匹配相近的手机号
         *
         * 最低基础库： `2.16.1` */
        searchContacts<T extends SearchContactsOption = SearchContactsOption>(
            option: T,
        ): PromisifySuccessResult<T, SearchContactsOption>;
        /** [wx.seekBackgroundAudio(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/wx.seekBackgroundAudio.html)
*
* 控制音乐播放进度。
*
* **示例代码**
*
*
* ```js
wx.seekBackgroundAudio({
  position: 30
})
```
* @deprecated 基础库版本 [1.2.0](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) 起已废弃，请使用 [wx.getBackgroundAudioManager](https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/wx.getBackgroundAudioManager.html) 替换
*  */
        seekBackgroundAudio<
            T extends SeekBackgroundAudioOption = SeekBackgroundAudioOption,
        >(
            option: T,
        ): PromisifySuccessResult<T, SeekBackgroundAudioOption>;
        /** [wx.sendHCEMessage(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/wx.sendHCEMessage.html)
*
* 发送 NFC 消息。仅在安卓系统下有效。
*
* **示例代码**
*
*
* ```js
const buffer = new ArrayBuffer(1)
const dataView = new DataView(buffer)
dataView.setUint8(0, 0)

wx.startHCE({
  success (res) {
    wx.onHCEMessage(function(res) {
      if (res.messageType === 1) {
        wx.sendHCEMessage({data: buffer})
      }
    })
  }
})
```
*
* 最低基础库： `1.7.0` */
        sendHCEMessage<T extends SendHCEMessageOption = SendHCEMessageOption>(
            option: T,
        ): PromisifySuccessResult<T, SendHCEMessageOption>;
        /** [wx.sendSocketMessage(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/wx.sendSocketMessage.html)
*
* 通过 WebSocket 连接发送数据。需要先 wx.connectSocket，并在 wx.onSocketOpen 回调之后才能发送。**推荐使用 [SocketTask](https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/SocketTask.html) 的方式去管理 webSocket 链接，每一条链路的生命周期都更加可控。同时存在多个 webSocket 的链接的情况下使用 wx 前缀的方法可能会带来一些和预期不一致的情况。**
*
* **示例代码**
*
*
* ```js
let socketOpen = false
let socketMsgQueue = []
wx.connectSocket({
  url: 'test.php'
})

wx.onSocketOpen(function(res) {
  socketOpen = true
  for (let i = 0; i < socketMsgQueue.length; i++){
    sendSocketMessage(socketMsgQueue[i])
  }
  socketMsgQueue = []
})

function sendSocketMessage(msg) {
  if (socketOpen) {
    wx.sendSocketMessage({
      data:msg
    })
  } else {
    socketMsgQueue.push(msg)
  }
}
``` */
        sendSocketMessage<
            T extends SendSocketMessageOption = SendSocketMessageOption,
        >(
            option: T,
        ): PromisifySuccessResult<T, SendSocketMessageOption>;
        /** [wx.setBLEMTU(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.setBLEMTU.html)
         *
         * 设置蓝牙最大传输单元。需在 wx.createBLEConnection调用成功后调用，mtu 设置范围 (22,512)。安卓5.1以上有效。
         *
         * 最低基础库： `2.11.0` */
        setBLEMTU<T extends SetBLEMTUOption = SetBLEMTUOption>(
            option: T,
        ): PromisifySuccessResult<T, SetBLEMTUOption>;
        /** [wx.setBackgroundColor(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/ui/background/wx.setBackgroundColor.html)
*
* 动态设置窗口的背景色
*
* **示例代码**
*
*
* ```js
wx.setBackgroundColor({
  backgroundColor: '#ffffff', // 窗口的背景色为白色
})

wx.setBackgroundColor({
  backgroundColorTop: '#ffffff', // 顶部窗口的背景色为白色
  backgroundColorBottom: '#ffffff', // 底部窗口的背景色为白色
})
```
*
* 最低基础库： `2.1.0` */
        setBackgroundColor<
            T extends SetBackgroundColorOption = SetBackgroundColorOption,
        >(
            option: T,
        ): PromisifySuccessResult<T, SetBackgroundColorOption>;
        /** [wx.setBackgroundFetchToken(object object)](https://developers.weixin.qq.com/miniprogram/dev/api/storage/background-fetch/wx.setBackgroundFetchToken.html)
         *
         * 设置自定义登录态，在周期性拉取数据时带上，便于第三方服务器验证请求合法性
         *
         * 最低基础库： `2.8.0` */
        setBackgroundFetchToken<
            T extends SetBackgroundFetchTokenOption = SetBackgroundFetchTokenOption,
        >(
            option: T,
        ): PromisifySuccessResult<T, SetBackgroundFetchTokenOption>;
        /** [wx.setBackgroundTextStyle(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/ui/background/wx.setBackgroundTextStyle.html)
*
* 动态设置下拉背景字体、loading 图的样式
*
* **示例代码**
*
*
* ```js
wx.setBackgroundTextStyle({
  textStyle: 'dark' // 下拉背景字体、loading 图的样式为dark
})
```
*
* 最低基础库： `2.1.0` */
        setBackgroundTextStyle<
            T extends SetBackgroundTextStyleOption = SetBackgroundTextStyleOption,
        >(
            option: T,
        ): PromisifySuccessResult<T, SetBackgroundTextStyleOption>;
        /** [wx.setClipboardData(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/clipboard/wx.setClipboardData.html)
*
* 设置系统剪贴板的内容。调用成功后，会弹出 toast 提示"内容已复制"，持续 1.5s
*
* **示例代码**
*
*
* ```js
wx.setClipboardData({
  data: 'data',
  success (res) {
    wx.getClipboardData({
      success (res) {
        console.log(res.data) // data
      }
    })
  }
})
```
*
* 最低基础库： `1.1.0` */
        setClipboardData<
            T extends SetClipboardDataOption = SetClipboardDataOption,
        >(
            option: T,
        ): PromisifySuccessResult<T, SetClipboardDataOption>;
        /** [wx.setEnableDebug(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/wx.setEnableDebug.html)
*
* 设置是否打开调试开关。此开关对正式版也能生效。
*
* **示例代码**
*
*
* ```javascript
// 打开调试
wx.setEnableDebug({
  enableDebug: true
})

// 关闭调试
wx.setEnableDebug({
  enableDebug: false
})
```
*
* **Tips**
*
*
* - 在正式版打开调试还有一种方法，就是先在开发版或体验版打开调试，再切到正式版就能看到vConsole。
*
* 最低基础库： `1.4.0` */
        setEnableDebug<T extends SetEnableDebugOption = SetEnableDebugOption>(
            option: T,
        ): PromisifySuccessResult<T, SetEnableDebugOption>;
        /** [wx.setInnerAudioOption(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/wx.setInnerAudioOption.html)
         *
         * 设置 [InnerAudioContext](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/InnerAudioContext.html) 的播放选项。设置之后对当前小程序全局生效。
         *
         * **注意**
         *
         * 为保证微信整体体验，speakerOn 为 true 时，客户端会忽略 mixWithOthers 参数的内容，强制与其它音频互斥
         * 不支持在播放音频的过程中切换为扬声器播放，开发者如需切换可以先暂停当前播放的音频并记录下当前暂停的时间点，然后切换后重新从原来暂停的时间点开始播放音频
         *
         * 最低基础库： `2.3.0` */
        setInnerAudioOption<
            T extends SetInnerAudioOption = SetInnerAudioOption,
        >(
            option: T,
        ): PromisifySuccessResult<T, SetInnerAudioOption>;
        /** [wx.setKeepScreenOn(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/screen/wx.setKeepScreenOn.html)
*
* 设置是否保持常亮状态。仅在当前小程序生效，离开小程序后设置失效。
*
* **示例代码**
*
*
* ```js
wx.setKeepScreenOn({
  keepScreenOn: true
})
```
*
* 最低基础库： `1.4.0` */
        setKeepScreenOn<
            T extends SetKeepScreenOnOption = SetKeepScreenOnOption,
        >(
            option: T,
        ): PromisifySuccessResult<T, SetKeepScreenOnOption>;
        /** [wx.setNavigationBarColor(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/ui/navigation-bar/wx.setNavigationBarColor.html)
         *
         * 设置页面导航条颜色
         *
         * 最低基础库： `1.4.0` */
        setNavigationBarColor<
            T extends SetNavigationBarColorOption = SetNavigationBarColorOption,
        >(
            option: T,
        ): PromisifySuccessResult<T, SetNavigationBarColorOption>;
        /** [wx.setNavigationBarTitle(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/ui/navigation-bar/wx.setNavigationBarTitle.html)
*
* 动态设置当前页面的标题
*
* **示例代码**
*
*
* ```js
wx.setNavigationBarTitle({
  title: '当前页面'
})
``` */
        setNavigationBarTitle<
            T extends SetNavigationBarTitleOption = SetNavigationBarTitleOption,
        >(
            option: T,
        ): PromisifySuccessResult<T, SetNavigationBarTitleOption>;
        /** [wx.setScreenBrightness(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/screen/wx.setScreenBrightness.html)
         *
         * 设置屏幕亮度
         *
         * 最低基础库： `1.2.0` */
        setScreenBrightness<
            T extends SetScreenBrightnessOption = SetScreenBrightnessOption,
        >(
            option: T,
        ): PromisifySuccessResult<T, SetScreenBrightnessOption>;
        /** [wx.setStorage(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.setStorage.html)
*
* 将数据存储在本地缓存中指定的 key 中。会覆盖掉原来该 key 对应的内容。除非用户主动删除或因存储空间原因被系统清理，否则数据都一直可用。单个 key 允许存储的最大数据长度为 1MB，所有数据存储上限为 10MB。
*
* **示例代码**
*
*
* ```js
wx.setStorage({
  key:"key",
  data:"value"
})
```
* ```js
try {
  wx.setStorageSync('key', 'value')
} catch (e) { }
``` */
        setStorage<
            T = any,
            U extends SetStorageOption<T> = SetStorageOption<T>,
        >(
            option: U,
        ): PromisifySuccessResult<U, SetStorageOption<T>>;
        /** [wx.setStorageSync(string key, any data)](https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.setStorageSync.html)
*
* [wx.setStorage](https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.setStorage.html) 的同步版本
*
* **示例代码**
*
*
* ```js
wx.setStorage({
  key:"key",
  data:"value"
})
```
* ```js
try {
  wx.setStorageSync('key', 'value')
} catch (e) { }
``` */
        setStorageSync<T = any>(
            /** 本地缓存中指定的 key */
            key: string,
            /** 需要存储的内容。只支持原生类型、Date、及能够通过`JSON.stringify`序列化的对象。 */
            data: T,
        ): void;
        /** [wx.setTabBarBadge(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/ui/tab-bar/wx.setTabBarBadge.html)
*
* 为 tabBar 某一项的右上角添加文本
*
* **示例代码**
*
*
* ```js
wx.setTabBarBadge({
  index: 0,
  text: '1'
})
```
*
* 最低基础库： `1.9.0` */
        setTabBarBadge<T extends SetTabBarBadgeOption = SetTabBarBadgeOption>(
            option: T,
        ): PromisifySuccessResult<T, SetTabBarBadgeOption>;
        /** [wx.setTabBarItem(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/ui/tab-bar/wx.setTabBarItem.html)
*
* 动态设置 tabBar 某一项的内容，`2.7.0` 起图片支持临时文件和网络文件。
*
* **示例代码**
*
*
* ```js
wx.setTabBarItem({
  index: 0,
  text: 'text',
  iconPath: '/path/to/iconPath',
  selectedIconPath: '/path/to/selectedIconPath'
})
```
*
* 最低基础库： `1.9.0` */
        setTabBarItem<T extends SetTabBarItemOption = SetTabBarItemOption>(
            option: T,
        ): PromisifySuccessResult<T, SetTabBarItemOption>;
        /** [wx.setTabBarStyle(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/ui/tab-bar/wx.setTabBarStyle.html)
*
* 动态设置 tabBar 的整体样式
*
* **示例代码**
*
*
* ```js
wx.setTabBarStyle({
  color: '#FF0000',
  selectedColor: '#00FF00',
  backgroundColor: '#0000FF',
  borderStyle: 'white'
})
```
*
* 最低基础库： `1.9.0` */
        setTabBarStyle<T extends SetTabBarStyleOption = SetTabBarStyleOption>(
            option?: T,
        ): PromisifySuccessResult<T, SetTabBarStyleOption>;
        /** [wx.setTopBarText(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/ui/sticky/wx.setTopBarText.html)
*
* 动态设置置顶栏文字内容。只有当前小程序被置顶时能生效，如果当前小程序没有被置顶，也能调用成功，但是不会立即生效，只有在用户将这个小程序置顶后才换上设置的文字内容.
*
* **示例代码**
*
*
* ```js
wx.setTopBarText({
  text: 'hello, world!'
})
```
*
* **注意**
*
*
* - 调用成功后，需间隔 5s 才能再次调用此接口，如果在 5s 内再次调用此接口，会回调 fail，errMsg："setTopBarText: fail invoke too frequently"
*
* 最低基础库： `1.4.3`
* @deprecated 基础库版本 [1.9.9](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) 起已废弃
*  */
        setTopBarText<T extends SetTopBarTextOption = SetTopBarTextOption>(
            option: T,
        ): PromisifySuccessResult<T, SetTopBarTextOption>;
        /** [wx.setWifiList(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/wifi/wx.setWifiList.html)
*
* 设置 `wifiList` 中 AP 的相关信息。在 `onGetWifiList` 回调后调用，**iOS特有接口**。
*
* **注意**
*
*
* - 该接口只能在 `onGetWifiList` 回调之后才能调用。
* - 此时客户端会挂起，等待小程序设置 Wi-Fi 信息，请务必尽快调用该接口，若无数据请传入一个空数组。
* - 有可能随着周边 Wi-Fi 列表的刷新，单个流程内收到多次带有存在重复的 Wi-Fi 列表的回调。
*
* **示例代码**
*
*
* ```js
wx.onGetWifiList(function(res) {
  if (res.wifiList.length) {
    wx.setWifiList({
      wifiList: [{
        SSID: res.wifiList[0].SSID,
        BSSID: res.wifiList[0].BSSID,
        password: '123456'
      }]
    })
  } else {
    wx.setWifiList({
      wifiList: []
    })
  }
})
wx.getWifiList()
```
*
* 最低基础库： `1.6.0` */
        setWifiList<T extends SetWifiListOption = SetWifiListOption>(
            option: T,
        ): PromisifySuccessResult<T, SetWifiListOption>;
        /** [wx.setWindowSize(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/ui/window/wx.setWindowSize.html)
         *
         * 设置窗口大小，该接口仅适用于 PC 平台，使用细则请参见指南
         *
         * 最低基础库： `2.10.1`
         * @deprecated 基础库版本 [2.11.0](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) 起已废弃
         */
        setWindowSize(option: SetWindowSizeOption): void;
        /** [wx.shareFileMessage(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/share/wx.shareFileMessage.html)
         *
         * 转发文件到聊天
         *
         * 最低基础库： `2.16.1` */
        shareFileMessage<
            T extends ShareFileMessageOption = ShareFileMessageOption,
        >(
            option: T,
        ): PromisifySuccessResult<T, ShareFileMessageOption>;
        /** [wx.shareToWeRun(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/werun/wx.shareToWeRun.html)
         *
         * 分享数据到微信运动。 */
        shareToWeRun<T extends ShareToWeRunOption = ShareToWeRunOption>(
            option: T,
        ): PromisifySuccessResult<T, ShareToWeRunOption>;
        /** [wx.shareVideoMessage(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/share/wx.shareVideoMessage.html)
         *
         * 转发视频到聊天
         *
         * 最低基础库： `2.16.1` */
        shareVideoMessage<
            T extends ShareVideoMessageOption = ShareVideoMessageOption,
        >(
            option: T,
        ): PromisifySuccessResult<T, ShareVideoMessageOption>;
        /** [wx.showActionSheet(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showActionSheet.html)
*
* 显示操作菜单
*
* **示例代码**
*
*
* ```js
wx.showActionSheet({
  itemList: ['A', 'B', 'C'],
  success (res) {
    console.log(res.tapIndex)
  },
  fail (res) {
    console.log(res.errMsg)
  }
})
```
*
* **注意**
*
*
* - Android 6.7.2 以下版本，点击取消或蒙层时，回调 fail, errMsg 为 "fail cancel"；
* - Android 6.7.2 及以上版本 和 iOS 点击蒙层不会关闭模态弹窗，所以尽量避免使用「取消」分支中实现业务逻辑 */
        showActionSheet<
            T extends ShowActionSheetOption = ShowActionSheetOption,
        >(
            option: T,
        ): PromisifySuccessResult<T, ShowActionSheetOption>;
        /** [wx.showLoading(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showLoading.html)
*
* 显示 loading 提示框。需主动调用 wx.hideLoading 才能关闭提示框
*
* **示例代码**
*
*
* ```js
wx.showLoading({
  title: '加载中',
})

setTimeout(function () {
  wx.hideLoading()
}, 2000)
```
*
* **注意**
*
*
* - [wx.showLoading](https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showLoading.html) 和 [wx.showToast](https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showToast.html) 同时只能显示一个
* - [wx.showLoading](https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showLoading.html) 应与 [wx.hideLoading](https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.hideLoading.html) 配对使用
*
* 最低基础库： `1.1.0` */
        showLoading<T extends ShowLoadingOption = ShowLoadingOption>(
            option: T,
        ): PromisifySuccessResult<T, ShowLoadingOption>;
        /** [wx.showModal(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showModal.html)
*
* 显示模态对话框
*
* **示例代码**
*
*
* ```js
wx.showModal({
  title: '提示',
  content: '这是一个模态弹窗',
  success (res) {
    if (res.confirm) {
      console.log('用户点击确定')
    } else if (res.cancel) {
      console.log('用户点击取消')
    }
  }
})
```
*
* **注意**
*
*
* - Android 6.7.2 以下版本，点击取消或蒙层时，回调 fail, errMsg 为 "fail cancel"；
* - Android 6.7.2 及以上版本 和 iOS 点击蒙层不会关闭模态弹窗，所以尽量避免使用「取消」分支中实现业务逻辑 */
        showModal<T extends ShowModalOption = ShowModalOption>(
            option: T,
        ): PromisifySuccessResult<T, ShowModalOption>;
        /** [wx.showNavigationBarLoading(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/ui/navigation-bar/wx.showNavigationBarLoading.html)
         *
         * 在当前页面显示导航条加载动画 */
        showNavigationBarLoading<
            T extends ShowNavigationBarLoadingOption = ShowNavigationBarLoadingOption,
        >(
            option?: T,
        ): PromisifySuccessResult<T, ShowNavigationBarLoadingOption>;
        /** [wx.showRedPackage(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/redpackage/wx.showRedPackage.html)
         *
         * 拉取h5领取红包封面页。获取参考红包封面地址参考 [微信红包封面开发平台](https://cover.weixin.qq.com/cgi-bin/mmcover-bin/readtemplate?t=page%2Fdoc%2Fguide%2Fintroduce.html)。
         *
         * 最低基础库： `2.10.0` */
        showRedPackage<T extends ShowRedPackageOption = ShowRedPackageOption>(
            option: T,
        ): PromisifySuccessResult<T, ShowRedPackageOption>;
        /** [wx.showShareImageMenu(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/share/wx.showShareImageMenu.html)
         *
         * 打开分享图片弹窗，可以将图片发送给朋友、收藏或下载
         *
         * 最低基础库： `2.14.3` */
        showShareImageMenu<
            T extends ShowShareImageMenuOption = ShowShareImageMenuOption,
        >(
            option: T,
        ): PromisifySuccessResult<T, ShowShareImageMenuOption>;
        /** [wx.showShareMenu(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/share/wx.showShareMenu.html)
*
* 显示当前页面的转发按钮
*
* ****
*
* ## 注意事项
*  - "shareAppMessage"表示“发送给朋友”按钮，"shareTimeline"表示“分享到朋友圈”按钮
*  - 显示“分享到朋友圈”按钮时必须同时显示“发送给朋友”按钮，显示“发送给朋友”按钮时则允许不显示“分享到朋友圈”按钮
*
* **示例代码**
*
*
* ```js
wx.showShareMenu({
  withShareTicket: true,
  menus: ['shareAppMessage', 'shareTimeline']
})
```
*
* 最低基础库： `1.1.0` */
        showShareMenu<T extends ShowShareMenuOption = ShowShareMenuOption>(
            option: T,
        ): PromisifySuccessResult<T, ShowShareMenuOption>;
        /** [wx.showTabBar(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/ui/tab-bar/wx.showTabBar.html)
         *
         * 显示 tabBar
         *
         * 最低基础库： `1.9.0` */
        showTabBar<T extends ShowTabBarOption = ShowTabBarOption>(
            option: T,
        ): PromisifySuccessResult<T, ShowTabBarOption>;
        /** [wx.showTabBarRedDot(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/ui/tab-bar/wx.showTabBarRedDot.html)
         *
         * 显示 tabBar 某一项的右上角的红点
         *
         * 最低基础库： `1.9.0` */
        showTabBarRedDot<
            T extends ShowTabBarRedDotOption = ShowTabBarRedDotOption,
        >(
            option: T,
        ): PromisifySuccessResult<T, ShowTabBarRedDotOption>;
        /** [wx.showToast(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showToast.html)
*
* 显示消息提示框
*
* **示例代码**
*
*
* ```js
wx.showToast({
  title: '成功',
  icon: 'success',
  duration: 2000
})
```
*
* **注意**
*
*
* - [wx.showLoading](https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showLoading.html) 和 [wx.showToast](https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showToast.html) 同时只能显示一个
* - [wx.showToast](https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showToast.html) 应与 [wx.hideToast](https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.hideToast.html) 配对使用 */
        showToast<T extends ShowToastOption = ShowToastOption>(
            option: T,
        ): PromisifySuccessResult<T, ShowToastOption>;
        /** [wx.startAccelerometer(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/accelerometer/wx.startAccelerometer.html)
*
* 开始监听加速度数据。
*
* **示例代码**
*
*
* ```js
wx.startAccelerometer({
  interval: 'game'
})
```
*
* **注意**
*
*
* - 根据机型性能、当前 CPU 与内存的占用情况，`interval` 的设置与实际 `wx.onAccelerometerChange()` 回调函数的执行频率会有一些出入。
*
* 最低基础库： `1.1.0` */
        startAccelerometer<
            T extends StartAccelerometerOption = StartAccelerometerOption,
        >(
            option?: T,
        ): PromisifySuccessResult<T, StartAccelerometerOption>;
        /** [wx.startBeaconDiscovery(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/ibeacon/wx.startBeaconDiscovery.html)
*
* 开始搜索附近的 iBeacon 设备
*
* **示例代码**
*
*
* ```js
wx.startBeaconDiscovery({
  success(res) { }
})
```
*
* 最低基础库： `1.2.0` */
        startBeaconDiscovery<
            T extends StartBeaconDiscoveryOption = StartBeaconDiscoveryOption,
        >(
            option: T,
        ): PromisifySuccessResult<T, StartBeaconDiscoveryOption>;
        /** [wx.startBluetoothDevicesDiscovery(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.startBluetoothDevicesDiscovery.html)
*
* 开始搜寻附近的蓝牙外围设备。**此操作比较耗费系统资源，请在搜索并连接到设备后调用 [wx.stopBluetoothDevicesDiscovery](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.stopBluetoothDevicesDiscovery.html) 方法停止搜索。**
*
* **示例代码**
*
*
* [在微信开发者工具中查看示例](https://developers.weixin.qq.com/s/m7klFDmZ72i1)
*
* ```js
// 以微信硬件平台的蓝牙智能灯为例，主服务的 UUID 是 FEE7。传入这个参数，只搜索主服务 UUID 为 FEE7 的设备
wx.startBluetoothDevicesDiscovery({
  services: ['FEE7'],
  success (res) {
    console.log(res)
  }
})
```
*
* 最低基础库： `1.1.0` */
        startBluetoothDevicesDiscovery<
            T extends StartBluetoothDevicesDiscoveryOption = StartBluetoothDevicesDiscoveryOption,
        >(
            option: T,
        ): PromisifySuccessResult<T, StartBluetoothDevicesDiscoveryOption>;
        /** [wx.startCompass(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/compass/wx.startCompass.html)
*
* 开始监听罗盘数据
*
* **示例代码**
*
*
* ```js
wx.startCompass()
```
*
* 最低基础库： `1.1.0` */
        startCompass<T extends StartCompassOption = StartCompassOption>(
            option?: T,
        ): PromisifySuccessResult<T, StartCompassOption>;
        /** [wx.startDeviceMotionListening(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/motion/wx.startDeviceMotionListening.html)
         *
         * 开始监听设备方向的变化。
         *
         * 最低基础库： `2.3.0` */
        startDeviceMotionListening<
            T extends StartDeviceMotionListeningOption = StartDeviceMotionListeningOption,
        >(
            option?: T,
        ): PromisifySuccessResult<T, StartDeviceMotionListeningOption>;
        /** [wx.startGyroscope(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/gyroscope/wx.startGyroscope.html)
         *
         * 开始监听陀螺仪数据。
         *
         * 最低基础库： `2.3.0` */
        startGyroscope<T extends StartGyroscopeOption = StartGyroscopeOption>(
            option?: T,
        ): PromisifySuccessResult<T, StartGyroscopeOption>;
        /** [wx.startHCE(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/wx.startHCE.html)
*
* 初始化 NFC 模块。
*
* **示例代码**
*
*
* ```js
wx.startHCE({
  aid_list: ['F222222222'],
  success (res) {
    console.log(res.errMsg)
  }
})
```
*
* 最低基础库： `1.7.0` */
        startHCE<T extends StartHCEOption = StartHCEOption>(
            option: T,
        ): PromisifySuccessResult<T, StartHCEOption>;
        /** [wx.startLocalServiceDiscovery(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/network/mdns/wx.startLocalServiceDiscovery.html)
         *
         * 开始搜索局域网下的 mDNS 服务。搜索的结果会通过 wx.onLocalService* 事件返回。
         *
         * **注意**
         *
         * 1. wx.startLocalServiceDiscovery 是一个消耗性能的行为，开始 30 秒后会自动 stop 并执行 wx.onLocalServiceDiscoveryStop 注册的回调函数。
         * 2. 在调用 wx.startLocalServiceDiscovery 后，在这次搜索行为停止后才能发起下次 wx.startLocalServiceDiscovery。停止本次搜索行为的操作包括调用 wx.stopLocalServiceDiscovery 和 30 秒后系统自动 stop 本次搜索。
         *
         * 最低基础库： `2.4.0` */
        startLocalServiceDiscovery<
            T extends StartLocalServiceDiscoveryOption = StartLocalServiceDiscoveryOption,
        >(
            option: T,
        ): PromisifySuccessResult<T, StartLocalServiceDiscoveryOption>;
        /** [wx.startLocationUpdate(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.startLocationUpdate.html)
         *
         * 开启小程序进入前台时接收位置消息
         *
         * **注意**
         *
         * - 获取位置信息需配置[地理位置用途说明](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#permission)。
         *
         * 最低基础库： `2.8.0` */
        startLocationUpdate<
            T extends StartLocationUpdateOption = StartLocationUpdateOption,
        >(
            option?: T,
        ): PromisifySuccessResult<T, StartLocationUpdateOption>;
        /** [wx.startLocationUpdateBackground(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.startLocationUpdateBackground.html)
         *
         * 开启小程序进入前后台时均接收位置消息，需引导用户开启[授权]((open-ability/authorize#后台定位))。授权以后，小程序在运行中或进入后台均可接受位置消息变化。
         *
         * **注意**
         *
         * - 安卓微信7.0.6版本，iOS 7.0.5版本起支持该接口
         * - 需在app.json中配置requiredBackgroundModes: ['location']后使用
         * - 获取位置信息需配置[地理位置用途说明](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#permission)。
         *
         * 最低基础库： `2.8.0` */
        startLocationUpdateBackground<
            T extends StartLocationUpdateBackgroundOption = StartLocationUpdateBackgroundOption,
        >(
            option?: T,
        ): PromisifySuccessResult<T, StartLocationUpdateBackgroundOption>;
        /** [wx.startPullDownRefresh(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/ui/pull-down-refresh/wx.startPullDownRefresh.html)
*
* 开始下拉刷新。调用后触发下拉刷新动画，效果与用户手动下拉刷新一致。
*
* **示例代码**
*
*
* ```js
wx.startPullDownRefresh()
```
*
* 最低基础库： `1.5.0` */
        startPullDownRefresh<
            T extends StartPullDownRefreshOption = StartPullDownRefreshOption,
        >(
            option?: T,
        ): PromisifySuccessResult<T, StartPullDownRefreshOption>;
        /** [wx.startRecord(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/wx.startRecord.html)
*
* 开始录音。当主动调用 [wx.stopRecord](https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/wx.stopRecord.html)，或者录音超过1分钟时自动结束录音。当用户离开小程序时，此接口无法调用。
*
* **示例代码**
*
*
* ```js
wx.startRecord({
  success (res) {
    const tempFilePath = res.tempFilePath
  }
})
setTimeout(function () {
  wx.stopRecord() // 结束录音
}, 10000)
```
* @deprecated 基础库版本 [1.6.0](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) 起已废弃，请使用 [wx.getRecorderManager](https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/wx.getRecorderManager.html) 替换
*  */
        startRecord<T extends WxStartRecordOption = WxStartRecordOption>(
            option?: T,
        ): PromisifySuccessResult<T, WxStartRecordOption>;
        /** [wx.startSoterAuthentication(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/soter/wx.startSoterAuthentication.html)
*
* 开始 SOTER 生物认证。验证流程请参考[说明](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/bio-auth.html)。
*
* **resultJSON 说明**
*
*
* 此数据为设备TEE中，将传入的challenge和TEE内其他安全信息组成的数据进行组装而来的JSON，对下述字段的解释如下表。例子如下：
* | 字段名  | 说明                                                                                      |
* |---------|-------------------------------------------------------------------------------------------|
* | raw     | 调用者传入的challenge                                                                     |
* | fid     | （仅Android支持）本次生物识别认证的生物信息编号（如指纹识别则是指纹信息在本设备内部编号） |
* | counter | 防重放特征参数                                                                            |
* | tee_n   | TEE名称（如高通或者trustonic等）                                                          |
* | tee_v   | TEE版本号                                                                                 |
* | fp_n    | 指纹以及相关逻辑模块提供商（如FPC等）                                                     |
* | fp_v    | 指纹以及相关模块版本号                                                                    |
* | cpu_id  | 机器唯一识别ID                                                                            |
* | uid     | 概念同Android系统定义uid，即应用程序编号                                                  |
*
* ```json
{
  "raw":"msg",
  "fid":"2",
  "counter":123,
  "tee_n":"TEE Name",
  "tee_v":"TEE Version",
  "fp_n":"Fingerprint Sensor Name",
  "fp_v":"Fingerprint Sensor Version",
  "cpu_id":"CPU Id",
  "uid":"21"
}
```
*
* **示例代码**
*
*
* [在微信开发者工具中查看示例](https://developers.weixin.qq.com/s/q3tCKkmJ7g2e)
* ```js
wx.startSoterAuthentication({
   requestAuthModes: ['fingerPrint'],
   challenge: '123456',
   authContent: '请用指纹解锁',
   success(res) {
   }
})
```
*
* 最低基础库： `1.5.0` */
        startSoterAuthentication<
            T extends StartSoterAuthenticationOption = StartSoterAuthenticationOption,
        >(
            option: T,
        ): PromisifySuccessResult<T, StartSoterAuthenticationOption>;
        /** [wx.startWifi(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/wifi/wx.startWifi.html)
*
* 初始化 Wi-Fi 模块。
*
* **示例代码**
*
*
* [在微信开发者工具中查看示例](https://developers.weixin.qq.com/s/8P7zrkmd7r2n)
* ```js
wx.startWifi({
  success (res) {
    console.log(res.errMsg)
  }
})
```
*
* 最低基础库： `1.6.0` */
        startWifi<T extends StartWifiOption = StartWifiOption>(
            option?: T,
        ): PromisifySuccessResult<T, StartWifiOption>;
        /** [wx.stopAccelerometer(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/accelerometer/wx.stopAccelerometer.html)
*
* 停止监听加速度数据。
*
* **示例代码**
*
*
* ```js
wx.stopAccelerometer()
```
*
* 最低基础库： `1.1.0` */
        stopAccelerometer<
            T extends StopAccelerometerOption = StopAccelerometerOption,
        >(
            option?: T,
        ): PromisifySuccessResult<T, StopAccelerometerOption>;
        /** [wx.stopBackgroundAudio(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/wx.stopBackgroundAudio.html)
*
* 停止播放音乐。
*
* **示例代码**
*
*
* ```js
wx.stopBackgroundAudio()
```
* @deprecated 基础库版本 [1.2.0](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) 起已废弃，请使用 [wx.getBackgroundAudioManager](https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/wx.getBackgroundAudioManager.html) 替换
*  */
        stopBackgroundAudio<
            T extends StopBackgroundAudioOption = StopBackgroundAudioOption,
        >(
            option?: T,
        ): PromisifySuccessResult<T, StopBackgroundAudioOption>;
        /** [wx.stopBeaconDiscovery(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/ibeacon/wx.stopBeaconDiscovery.html)
         *
         * 停止搜索附近的 iBeacon 设备
         *
         * 最低基础库： `1.2.0` */
        stopBeaconDiscovery<
            T extends StopBeaconDiscoveryOption = StopBeaconDiscoveryOption,
        >(
            option?: T,
        ): PromisifySuccessResult<T, StopBeaconDiscoveryOption>;
        /** [wx.stopBluetoothDevicesDiscovery(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.stopBluetoothDevicesDiscovery.html)
*
* 停止搜寻附近的蓝牙外围设备。若已经找到需要的蓝牙设备并不需要继续搜索时，建议调用该接口停止蓝牙搜索。
*
* **示例代码**
*
*
* [在微信开发者工具中查看示例](https://developers.weixin.qq.com/s/pQU51zmz7a3K)
* ```js
wx.stopBluetoothDevicesDiscovery({
  success (res) {
    console.log(res)
  }
})
```
*
* 最低基础库： `1.1.0` */
        stopBluetoothDevicesDiscovery<
            T extends StopBluetoothDevicesDiscoveryOption = StopBluetoothDevicesDiscoveryOption,
        >(
            option?: T,
        ): PromisifySuccessResult<T, StopBluetoothDevicesDiscoveryOption>;
        /** [wx.stopCompass(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/compass/wx.stopCompass.html)
*
* 停止监听罗盘数据
*
* **示例代码**
*
*
* ```js
wx.stopCompass()
```
*
* 最低基础库： `1.1.0` */
        stopCompass<T extends StopCompassOption = StopCompassOption>(
            option?: T,
        ): PromisifySuccessResult<T, StopCompassOption>;
        /** [wx.stopDeviceMotionListening(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/motion/wx.stopDeviceMotionListening.html)
         *
         * 停止监听设备方向的变化。
         *
         * 最低基础库： `2.3.0` */
        stopDeviceMotionListening<
            T extends StopDeviceMotionListeningOption = StopDeviceMotionListeningOption,
        >(
            option?: T,
        ): PromisifySuccessResult<T, StopDeviceMotionListeningOption>;
        /** [wx.stopGyroscope(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/gyroscope/wx.stopGyroscope.html)
         *
         * 停止监听陀螺仪数据。
         *
         * 最低基础库： `2.3.0` */
        stopGyroscope<T extends StopGyroscopeOption = StopGyroscopeOption>(
            option?: T,
        ): PromisifySuccessResult<T, StopGyroscopeOption>;
        /** [wx.stopHCE(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/wx.stopHCE.html)
*
* 关闭 NFC 模块。仅在安卓系统下有效。
*
* **示例代码**
*
*
* ```js
wx.stopHCE({
  success (res) {
    console.log(res.errMsg)
  }
})
```
*
* 最低基础库： `1.7.0` */
        stopHCE<T extends StopHCEOption = StopHCEOption>(
            option?: T,
        ): PromisifySuccessResult<T, StopHCEOption>;
        /** [wx.stopLocalServiceDiscovery(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/network/mdns/wx.stopLocalServiceDiscovery.html)
         *
         * 停止搜索 mDNS 服务
         *
         * 最低基础库： `2.4.0` */
        stopLocalServiceDiscovery<
            T extends StopLocalServiceDiscoveryOption = StopLocalServiceDiscoveryOption,
        >(
            option?: T,
        ): PromisifySuccessResult<T, StopLocalServiceDiscoveryOption>;
        /** [wx.stopLocationUpdate(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.stopLocationUpdate.html)
         *
         * 关闭监听实时位置变化，前后台都停止消息接收
         *
         * 最低基础库： `2.8.0` */
        stopLocationUpdate<
            T extends StopLocationUpdateOption = StopLocationUpdateOption,
        >(
            option?: T,
        ): PromisifySuccessResult<T, StopLocationUpdateOption>;
        /** [wx.stopPullDownRefresh(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/ui/pull-down-refresh/wx.stopPullDownRefresh.html)
*
* 停止当前页面下拉刷新。
*
* **示例代码**
*
*
* ```js
Page({
  onPullDownRefresh () {
    wx.stopPullDownRefresh()
  }
})
```
*
* 最低基础库： `1.5.0` */
        stopPullDownRefresh<
            T extends StopPullDownRefreshOption = StopPullDownRefreshOption,
        >(
            option?: T,
        ): PromisifySuccessResult<T, StopPullDownRefreshOption>;
        /** [wx.stopRecord(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/wx.stopRecord.html)
*
* 停止录音。
*
* **示例代码**
*
*
* ```js
wx.startRecord({
  success (res) {
    const tempFilePath = res.tempFilePath
  }
})
setTimeout(function () {
  wx.stopRecord() // 结束录音
}, 10000)
```
* @deprecated 基础库版本 [1.6.0](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) 起已废弃，请使用 [wx.getRecorderManager](https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/wx.getRecorderManager.html) 替换
*  */
        stopRecord<T extends WxStopRecordOption = WxStopRecordOption>(
            option?: T,
        ): PromisifySuccessResult<T, WxStopRecordOption>;
        /** [wx.stopVoice(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/wx.stopVoice.html)
*
* 结束播放语音。
*
* **示例代码**
*
*
* ```js
wx.startRecord({
  success (res) {
    const tempFilePath = res.tempFilePath
    wx.playVoice({
      filePath: tempFilePath,
    })

    setTimeout(() => { wx.stopVoice() }, 5000)
  }
})
```
* @deprecated 基础库版本 [1.6.0](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) 起已废弃，请使用 [wx.createInnerAudioContext](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/wx.createInnerAudioContext.html) 替换
*  */
        stopVoice<T extends StopVoiceOption = StopVoiceOption>(
            option?: T,
        ): PromisifySuccessResult<T, StopVoiceOption>;
        /** [wx.stopWifi(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/wifi/wx.stopWifi.html)
*
* 关闭 Wi-Fi 模块。
*
* **示例代码**
*
*
* ```js
wx.stopWifi({
  success (res) {
    console.log(res.errMsg)
  }
})
```
*
* 最低基础库： `1.6.0` */
        stopWifi<T extends StopWifiOption = StopWifiOption>(
            option?: T,
        ): PromisifySuccessResult<T, StopWifiOption>;
        /** [wx.subscribeVoIPVideoMembers(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/media/voip/wx.subscribeVoIPVideoMembers.html)
         *
         * 订阅视频画面成员。对于视频房间，当成员超过两人时需进行订阅，否则只能看到最先加入房间的两人画面。
         *
         * 最低基础库： `2.11.0` */
        subscribeVoIPVideoMembers<
            T extends SubscribeVoIPVideoMembersOption = SubscribeVoIPVideoMembersOption,
        >(
            option: T,
        ): PromisifySuccessResult<T, SubscribeVoIPVideoMembersOption>;
        /** [wx.switchTab(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.switchTab.html)
*
* 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
*
* **示例代码**
*
*
* ```json
// app.json
{
  "tabBar": {
    "list": [{
      "pagePath": "index",
      "text": "首页"
    },{
      "pagePath": "other",
      "text": "其他"
    }]
  }
}
```
*
* ```js
wx.switchTab({
  url: '/index'
})
``` */
        switchTab<T extends SwitchTabOption = SwitchTabOption>(
            option: T,
        ): PromisifySuccessResult<T, SwitchTabOption>;
        /** [wx.updateShareMenu(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/share/wx.updateShareMenu.html)
*
* 更新转发属性
*
* **示例代码**
*
*
* ```js
wx.updateShareMenu({
  withShareTicket: true,
  success () { }
})
```
* ```js
// 转发私密消息
wx.updateShareMenu({
  isPrivateMessage: true,
  activityId: 'xxx',
  templateInfo: {},
  success () { },
  fail () {}
})
```
*
* 最低基础库： `1.2.0` */
        updateShareMenu<
            T extends UpdateShareMenuOption = UpdateShareMenuOption,
        >(
            option: T,
        ): PromisifySuccessResult<T, UpdateShareMenuOption>;
        /** [wx.updateVoIPChatMuteConfig(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/media/voip/wx.updateVoIPChatMuteConfig.html)
         *
         * 更新实时语音静音设置
         *
         * 最低基础库： `2.7.0` */
        updateVoIPChatMuteConfig<
            T extends UpdateVoIPChatMuteConfigOption = UpdateVoIPChatMuteConfigOption,
        >(
            option: T,
        ): PromisifySuccessResult<T, UpdateVoIPChatMuteConfigOption>;
        /** [wx.updateWeChatApp(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/base/update/wx.updateWeChatApp.html)
         *
         * 更新客户端版本。当判断用户小程序所在客户端版本过低时，可使用该接口跳转到更新微信页面。
         *
         * 最低基础库： `2.12.0` */
        updateWeChatApp<
            T extends UpdateWeChatAppOption = UpdateWeChatAppOption,
        >(
            option?: T,
        ): PromisifySuccessResult<T, UpdateWeChatAppOption>;
        /** [wx.vibrateLong(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/vibrate/wx.vibrateLong.html)
         *
         * 使手机发生较长时间的振动（400 ms)
         *
         * 最低基础库： `1.2.0` */
        vibrateLong<T extends VibrateLongOption = VibrateLongOption>(
            option?: T,
        ): PromisifySuccessResult<T, VibrateLongOption>;
        /** [wx.vibrateShort(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/vibrate/wx.vibrateShort.html)
         *
         * 使手机发生较短时间的振动（15 ms）。仅在 iPhone `7 / 7 Plus` 以上及 Android 机型生效
         *
         * 最低基础库： `1.2.0` */
        vibrateShort<T extends VibrateShortOption = VibrateShortOption>(
            option: T,
        ): PromisifySuccessResult<T, VibrateShortOption>;
        /** [wx.writeBLECharacteristicValue(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.writeBLECharacteristicValue.html)
*
* 向低功耗蓝牙设备特征值中写入二进制数据。注意：必须设备的特征值支持 write 才可以成功调用。
*
* **注意**
*
*
* - 并行调用多次会存在写失败的可能性。
* - 小程序不会对写入数据包大小做限制，但系统与蓝牙设备会限制蓝牙4.0单次传输的数据大小，超过最大字节数后会发生写入错误，建议每次写入不超过20字节。
* - 若单次写入数据过长，iOS 上存在系统不会有任何回调的情况（包括错误回调）。
* - 安卓平台上，在调用 `notifyBLECharacteristicValueChange` 成功后立即调用 `writeBLECharacteristicValue` 接口，在部分机型上会发生 10008 系统错误
*
* **示例代码**
*
*
* [在微信开发者工具中查看示例](https://developers.weixin.qq.com/s/pQU51zmz7a3K)
* ```js
// 向蓝牙设备发送一个0x00的16进制数据
let buffer = new ArrayBuffer(1)
let dataView = new DataView(buffer)
dataView.setUint8(0, 0)

wx.writeBLECharacteristicValue({
  // 这里的 deviceId 需要在 getBluetoothDevices 或 onBluetoothDeviceFound 接口中获取
  deviceId,
  // 这里的 serviceId 需要在 getBLEDeviceServices 接口中获取
  serviceId,
  // 这里的 characteristicId 需要在 getBLEDeviceCharacteristics 接口中获取
  characteristicId,
  // 这里的value是ArrayBuffer类型
  value: buffer,
  success (res) {
    console.log('writeBLECharacteristicValue success', res.errMsg)
  }
})
```
*
* 最低基础库： `1.1.0` */
        writeBLECharacteristicValue<
            T extends WriteBLECharacteristicValueOption = WriteBLECharacteristicValueOption,
        >(
            option: T,
        ): PromisifySuccessResult<T, WriteBLECharacteristicValueOption>;
        /** 小程序云开发 */
        cloud: WxCloud;
        /** 文件系统中的用户目录路径 */
        env: { USER_DATA_PATH: string };
    }

    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type AccessCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type AccessFailCallback = (result: AccessFailCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type AccessSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type AddCardCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type AddCardFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type AddCardSuccessCallback = (result: AddCardSuccessCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type AddCustomLayerCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type AddCustomLayerFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type AddCustomLayerSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type AddFileToFavoritesCompleteCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用失败的回调函数 */
    type AddFileToFavoritesFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type AddFileToFavoritesSuccessCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type AddGroundOverlayCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type AddGroundOverlayFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type AddGroundOverlaySuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type AddMarkersCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type AddMarkersFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type AddMarkersSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type AddPhoneCalendarCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type AddPhoneCalendarFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type AddPhoneCalendarSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type AddPhoneContactCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type AddPhoneContactFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type AddPhoneContactSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type AddPhoneRepeatCalendarCompleteCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用失败的回调函数 */
    type AddPhoneRepeatCalendarFailCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用成功的回调函数 */
    type AddPhoneRepeatCalendarSuccessCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type AddServiceCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type AddServiceFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type AddServiceSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type AddVideoToFavoritesCompleteCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用失败的回调函数 */
    type AddVideoToFavoritesFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type AddVideoToFavoritesSuccessCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type AppendFileCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type AppendFileFailCallback = (result: AppendFileFailCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type AppendFileSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type AuthPrivateMessageCompleteCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用失败的回调函数 */
    type AuthPrivateMessageFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type AuthPrivateMessageSuccessCallback = (
        result: AuthPrivateMessageSuccessCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type AuthorizeCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type AuthorizeFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type AuthorizeForMiniProgramCompleteCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用失败的回调函数 */
    type AuthorizeForMiniProgramFailCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用成功的回调函数 */
    type AuthorizeForMiniProgramSuccessCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用成功的回调函数 */
    type AuthorizeSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 背景音频播放错误事件的回调函数 */
    type BackgroundAudioManagerOnErrorCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type BlurCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type BlurFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type BlurSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 回调函数，在执行 `SelectorQuery.exec` 方法后，节点信息会在 `callback` 中返回。 */
    type BoundingClientRectCallback = (
        result: BoundingClientRectCallbackResult,
    ) => void;
    /** 接口调用成功的回调函数 */
    type CameraContextStartRecordSuccessCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用成功的回调函数 */
    type CameraContextStopRecordSuccessCallback = (
        result: StopRecordSuccessCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type CanvasGetImageDataCompleteCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用失败的回调函数 */
    type CanvasGetImageDataFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type CanvasGetImageDataSuccessCallback = (
        result: CanvasGetImageDataSuccessCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type CanvasPutImageDataCompleteCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用失败的回调函数 */
    type CanvasPutImageDataFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type CanvasPutImageDataSuccessCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type CanvasToTempFilePathCompleteCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用失败的回调函数 */
    type CanvasToTempFilePathFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type CanvasToTempFilePathSuccessCallback = (
        result: CanvasToTempFilePathSuccessCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type CheckIsOpenAccessibilityCompleteCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用失败的回调函数 */
    type CheckIsOpenAccessibilityFailCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用成功的回调函数 */
    type CheckIsOpenAccessibilitySuccessCallback = (
        option: CheckIsOpenAccessibilitySuccessCallbackOption,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type CheckIsSoterEnrolledInDeviceCompleteCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用失败的回调函数 */
    type CheckIsSoterEnrolledInDeviceFailCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用成功的回调函数 */
    type CheckIsSoterEnrolledInDeviceSuccessCallback = (
        result: CheckIsSoterEnrolledInDeviceSuccessCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type CheckIsSupportSoterAuthenticationCompleteCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用失败的回调函数 */
    type CheckIsSupportSoterAuthenticationFailCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用成功的回调函数 */
    type CheckIsSupportSoterAuthenticationSuccessCallback = (
        result: CheckIsSupportSoterAuthenticationSuccessCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type CheckSessionCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type CheckSessionFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type CheckSessionSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type ChooseAddressCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type ChooseAddressFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type ChooseAddressSuccessCallback = (
        result: ChooseAddressSuccessCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type ChooseContactCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type ChooseContactFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type ChooseContactSuccessCallback = (
        option: ChooseContactSuccessCallbackOption,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type ChooseImageCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type ChooseImageFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type ChooseImageSuccessCallback = (
        result: ChooseImageSuccessCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type ChooseInvoiceCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type ChooseInvoiceFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type ChooseInvoiceSuccessCallback = (
        result: ChooseInvoiceSuccessCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type ChooseInvoiceTitleCompleteCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用失败的回调函数 */
    type ChooseInvoiceTitleFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type ChooseInvoiceTitleSuccessCallback = (
        result: ChooseInvoiceTitleSuccessCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type ChooseLocationCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type ChooseLocationFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type ChooseLocationSuccessCallback = (
        result: ChooseLocationSuccessCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type ChooseMediaCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type ChooseMediaFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type ChooseMediaSuccessCallback = (
        result: ChooseMediaSuccessCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type ChooseMessageFileCompleteCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用失败的回调函数 */
    type ChooseMessageFileFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type ChooseMessageFileSuccessCallback = (
        result: ChooseMessageFileSuccessCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type ChoosePoiCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type ChoosePoiFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type ChoosePoiSuccessCallback = (
        result: ChoosePoiSuccessCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type ChooseVideoCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type ChooseVideoFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type ChooseVideoSuccessCallback = (
        result: ChooseVideoSuccessCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type ClearCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type ClearFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type ClearStorageCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type ClearStorageFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type ClearStorageSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type ClearSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type CloseBLEConnectionCompleteCallback = (res: BluetoothError) => void;
    /** 接口调用失败的回调函数 */
    type CloseBLEConnectionFailCallback = (res: BluetoothError) => void;
    /** 接口调用成功的回调函数 */
    type CloseBLEConnectionSuccessCallback = (res: BluetoothError) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type CloseBluetoothAdapterCompleteCallback = (res: BluetoothError) => void;
    /** 接口调用失败的回调函数 */
    type CloseBluetoothAdapterFailCallback = (res: BluetoothError) => void;
    /** 接口调用成功的回调函数 */
    type CloseBluetoothAdapterSuccessCallback = (res: BluetoothError) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type CloseSocketCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type CloseSocketFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type CloseSocketSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type CompressImageCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type CompressImageFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type CompressImageSuccessCallback = (
        result: CompressImageSuccessCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type CompressVideoCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type CompressVideoFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type CompressVideoSuccessCallback = (
        result: CompressVideoSuccessCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type ConnectCompleteCallback = (res: Nfcrwerror) => void;
    /** 接口调用失败的回调函数 */
    type ConnectFailCallback = (res: Nfcrwerror) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type ConnectSocketCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type ConnectSocketFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type ConnectSocketSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type ConnectSuccessCallback = (res: Nfcrwerror) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type ConnectWifiCompleteCallback = (res: WifiError) => void;
    /** 接口调用失败的回调函数 */
    type ConnectWifiFailCallback = (res: WifiError) => void;
    /** 接口调用成功的回调函数 */
    type ConnectWifiSuccessCallback = (res: WifiError) => void;
    /** 回调函数，在执行 `SelectorQuery.exec` 方法后，返回节点信息。 */
    type ContextCallback = (result: ContextCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type CopyFileCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type CopyFileFailCallback = (result: CopyFileFailCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type CopyFileSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type CreateBLEConnectionCompleteCallback = (res: BluetoothError) => void;
    /** 接口调用失败的回调函数 */
    type CreateBLEConnectionFailCallback = (res: BluetoothError) => void;
    /** 接口调用成功的回调函数 */
    type CreateBLEConnectionSuccessCallback = (res: BluetoothError) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type CreateBLEPeripheralServerCompleteCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用失败的回调函数 */
    type CreateBLEPeripheralServerFailCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用成功的回调函数 */
    type CreateBLEPeripheralServerSuccessCallback = (
        result: CreateBLEPeripheralServerSuccessCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type DisableAlertBeforeUnloadCompleteCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用失败的回调函数 */
    type DisableAlertBeforeUnloadFailCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用成功的回调函数 */
    type DisableAlertBeforeUnloadSuccessCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type DownloadFileCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type DownloadFileFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type DownloadFileSuccessCallback = (
        result: DownloadFileSuccessCallbackResult,
    ) => void;
    /** 下载进度变化事件的回调函数 */
    type DownloadTaskOffProgressUpdateCallback = (
        result: DownloadTaskOnProgressUpdateCallbackResult,
    ) => void;
    /** 下载进度变化事件的回调函数 */
    type DownloadTaskOnProgressUpdateCallback = (
        result: DownloadTaskOnProgressUpdateCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type EnableAlertBeforeUnloadCompleteCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用失败的回调函数 */
    type EnableAlertBeforeUnloadFailCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用成功的回调函数 */
    type EnableAlertBeforeUnloadSuccessCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 事件监听函数 */
    type EventCallback = (
        /** 触发事件参数 */
        ...args: any
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type ExitFullScreenCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type ExitFullScreenFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type ExitFullScreenSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type ExitMiniProgramCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type ExitMiniProgramFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type ExitMiniProgramSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type ExitPictureInPictureCompleteCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用失败的回调函数 */
    type ExitPictureInPictureFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type ExitPictureInPictureSuccessCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type ExitVoIPChatCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type ExitVoIPChatFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type ExitVoIPChatSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 回调函数 */
    type FieldsCallback = (
        /** 节点的相关信息 */
        res: IAnyObject,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type FileSystemManagerCloseCompleteCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用失败的回调函数 */
    type FileSystemManagerCloseFailCallback = (
        result: CloseFailCallbackResult,
    ) => void;
    /** 接口调用成功的回调函数 */
    type FileSystemManagerCloseSuccessCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用失败的回调函数 */
    type FileSystemManagerGetFileInfoFailCallback = (
        result: GetFileInfoFailCallbackResult,
    ) => void;
    /** 接口调用成功的回调函数 */
    type FileSystemManagerGetFileInfoSuccessCallback = (
        result: FileSystemManagerGetFileInfoSuccessCallbackResult,
    ) => void;
    /** 接口调用成功的回调函数 */
    type FileSystemManagerGetSavedFileListSuccessCallback = (
        result: FileSystemManagerGetSavedFileListSuccessCallbackResult,
    ) => void;
    /** 接口调用失败的回调函数 */
    type FileSystemManagerRemoveSavedFileFailCallback = (
        result: RemoveSavedFileFailCallbackResult,
    ) => void;
    /** 接口调用失败的回调函数 */
    type FileSystemManagerSaveFileFailCallback = (
        result: SaveFileFailCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type FromScreenLocationCompleteCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用失败的回调函数 */
    type FromScreenLocationFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type FromScreenLocationSuccessCallback = (
        result: GetCenterLocationSuccessCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type FstatCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type FstatFailCallback = (result: FstatFailCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type FstatSuccessCallback = (result: FstatSuccessCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type FtruncateCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type FtruncateFailCallback = (result: FtruncateFailCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type FtruncateSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetAtqaCompleteCallback = (res: Nfcrwerror) => void;
    /** 接口调用失败的回调函数 */
    type GetAtqaFailCallback = (res: Nfcrwerror) => void;
    /** 接口调用成功的回调函数 */
    type GetAtqaSuccessCallback = (result: GetAtqaSuccessCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetAvailableAudioSourcesCompleteCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用失败的回调函数 */
    type GetAvailableAudioSourcesFailCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用成功的回调函数 */
    type GetAvailableAudioSourcesSuccessCallback = (
        result: GetAvailableAudioSourcesSuccessCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetBLEDeviceCharacteristicsCompleteCallback = (
        res: BluetoothError,
    ) => void;
    /** 接口调用失败的回调函数 */
    type GetBLEDeviceCharacteristicsFailCallback = (res: BluetoothError) => void;
    /** 接口调用成功的回调函数 */
    type GetBLEDeviceCharacteristicsSuccessCallback = (
        result: GetBLEDeviceCharacteristicsSuccessCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetBLEDeviceRSSICompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type GetBLEDeviceRSSIFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type GetBLEDeviceRSSISuccessCallback = (
        result: GetBLEDeviceRSSISuccessCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetBLEDeviceServicesCompleteCallback = (res: BluetoothError) => void;
    /** 接口调用失败的回调函数 */
    type GetBLEDeviceServicesFailCallback = (res: BluetoothError) => void;
    /** 接口调用成功的回调函数 */
    type GetBLEDeviceServicesSuccessCallback = (
        result: GetBLEDeviceServicesSuccessCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetBackgroundAudioPlayerStateCompleteCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用失败的回调函数 */
    type GetBackgroundAudioPlayerStateFailCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用成功的回调函数 */
    type GetBackgroundAudioPlayerStateSuccessCallback = (
        result: GetBackgroundAudioPlayerStateSuccessCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetBackgroundFetchDataCompleteCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用失败的回调函数 */
    type GetBackgroundFetchDataFailCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用成功的回调函数 */
    type GetBackgroundFetchDataSuccessCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetBackgroundFetchTokenCompleteCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用失败的回调函数 */
    type GetBackgroundFetchTokenFailCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用成功的回调函数 */
    type GetBackgroundFetchTokenSuccessCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetBatteryInfoCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type GetBatteryInfoFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type GetBatteryInfoSuccessCallback = (
        result: GetBatteryInfoSuccessCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetBeaconsCompleteCallback = (res: IBeaconError) => void;
    /** 接口调用失败的回调函数 */
    type GetBeaconsFailCallback = (res: IBeaconError) => void;
    /** 接口调用成功的回调函数 */
    type GetBeaconsSuccessCallback = (
        result: GetBeaconsSuccessCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetBluetoothAdapterStateCompleteCallback = (
        res: BluetoothError,
    ) => void;
    /** 接口调用失败的回调函数 */
    type GetBluetoothAdapterStateFailCallback = (res: BluetoothError) => void;
    /** 接口调用成功的回调函数 */
    type GetBluetoothAdapterStateSuccessCallback = (
        result: GetBluetoothAdapterStateSuccessCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetBluetoothDevicesCompleteCallback = (res: BluetoothError) => void;
    /** 接口调用失败的回调函数 */
    type GetBluetoothDevicesFailCallback = (res: BluetoothError) => void;
    /** 接口调用成功的回调函数 */
    type GetBluetoothDevicesSuccessCallback = (
        result: GetBluetoothDevicesSuccessCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetCenterLocationCompleteCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用失败的回调函数 */
    type GetCenterLocationFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type GetCenterLocationSuccessCallback = (
        result: GetCenterLocationSuccessCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetChannelsLiveInfoCompleteCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用失败的回调函数 */
    type GetChannelsLiveInfoFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type GetChannelsLiveInfoSuccessCallback = (
        result: GetChannelsLiveInfoSuccessCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetClipboardDataCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type GetClipboardDataFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type GetClipboardDataSuccessCallback = (
        option: GetClipboardDataSuccessCallbackOption,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetConnectedBluetoothDevicesCompleteCallback = (
        res: BluetoothError,
    ) => void;
    /** 接口调用失败的回调函数 */
    type GetConnectedBluetoothDevicesFailCallback = (
        res: BluetoothError,
    ) => void;
    /** 接口调用成功的回调函数 */
    type GetConnectedBluetoothDevicesSuccessCallback = (
        result: GetConnectedBluetoothDevicesSuccessCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetConnectedWifiCompleteCallback = (res: WifiError) => void;
    /** 接口调用失败的回调函数 */
    type GetConnectedWifiFailCallback = (res: WifiError) => void;
    /** 接口调用成功的回调函数 */
    type GetConnectedWifiSuccessCallback = (
        result: GetConnectedWifiSuccessCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetContentsCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type GetContentsFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type GetContentsSuccessCallback = (
        result: GetContentsSuccessCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetExtConfigCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type GetExtConfigFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type GetExtConfigSuccessCallback = (
        result: GetExtConfigSuccessCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetFileInfoCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetGroupEnterInfoCompleteCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用失败的回调函数 */
    type GetGroupEnterInfoFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type GetGroupEnterInfoSuccessCallback = (
        result: GetGroupEnterInfoSuccessCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetHCEStateCompleteCallback = (res: NFCError) => void;
    /** 接口调用失败的回调函数 */
    type GetHCEStateFailCallback = (res: NFCError) => void;
    /** 接口调用成功的回调函数 */
    type GetHCEStateSuccessCallback = (res: NFCError) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetHistoricalBytesCompleteCallback = (res: Nfcrwerror) => void;
    /** 接口调用失败的回调函数 */
    type GetHistoricalBytesFailCallback = (res: Nfcrwerror) => void;
    /** 接口调用成功的回调函数 */
    type GetHistoricalBytesSuccessCallback = (
        result: GetHistoricalBytesSuccessCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetImageInfoCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type GetImageInfoFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type GetImageInfoSuccessCallback = (
        result: GetImageInfoSuccessCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetLatestUserKeyCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type GetLatestUserKeyFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type GetLatestUserKeySuccessCallback = (
        result: GetLatestUserKeySuccessCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetLocationCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type GetLocationFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type GetLocationSuccessCallback = (
        result: GetLocationSuccessCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetMaxTransceiveLengthCompleteCallback = (res: Nfcrwerror) => void;
    /** 接口调用失败的回调函数 */
    type GetMaxTransceiveLengthFailCallback = (res: Nfcrwerror) => void;
    /** 接口调用成功的回调函数 */
    type GetMaxTransceiveLengthSuccessCallback = (
        result: GetMaxTransceiveLengthSuccessCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetNetworkTypeCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type GetNetworkTypeFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type GetNetworkTypeSuccessCallback = (
        result: GetNetworkTypeSuccessCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetRandomValuesCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type GetRandomValuesFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type GetRandomValuesSuccessCallback = (
        result: GetRandomValuesSuccessCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetRegionCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type GetRegionFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type GetRegionSuccessCallback = (
        result: GetRegionSuccessCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetRotateCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type GetRotateFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type GetRotateSuccessCallback = (
        result: GetRotateSuccessCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetSakCompleteCallback = (res: Nfcrwerror) => void;
    /** 接口调用失败的回调函数 */
    type GetSakFailCallback = (res: Nfcrwerror) => void;
    /** 接口调用成功的回调函数 */
    type GetSakSuccessCallback = (result: GetSakSuccessCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetSavedFileInfoCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type GetSavedFileInfoFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type GetSavedFileInfoSuccessCallback = (
        result: GetSavedFileInfoSuccessCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetSavedFileListCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type GetSavedFileListFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetScaleCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type GetScaleFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type GetScaleSuccessCallback = (
        result: GetScaleSuccessCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetScreenBrightnessCompleteCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用失败的回调函数 */
    type GetScreenBrightnessFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type GetScreenBrightnessSuccessCallback = (
        option: GetScreenBrightnessSuccessCallbackOption,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetSelectedTextRangeCompleteCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用失败的回调函数 */
    type GetSelectedTextRangeFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type GetSelectedTextRangeSuccessCallback = (
        result: GetSelectedTextRangeSuccessCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetSelectionTextCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type GetSelectionTextFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type GetSelectionTextSuccessCallback = (
        result: GetSelectionTextSuccessCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetSettingCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type GetSettingFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type GetSettingSuccessCallback = (
        result: GetSettingSuccessCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetShareInfoCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type GetShareInfoFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type GetShareInfoSuccessCallback = (
        result: GetGroupEnterInfoSuccessCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetSkewCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type GetSkewFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type GetSkewSuccessCallback = (result: GetSkewSuccessCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetStorageCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type GetStorageFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetStorageInfoCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type GetStorageInfoFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type GetStorageInfoSuccessCallback = (
        option: GetStorageInfoSuccessCallbackOption,
    ) => void;
    /** 接口调用成功的回调函数 */
    type GetStorageSuccessCallback<T = any> = (
        result: GetStorageSuccessCallbackResult<T>,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetSystemInfoAsyncCompleteCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用失败的回调函数 */
    type GetSystemInfoAsyncFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type GetSystemInfoAsyncSuccessCallback = (result: SystemInfo) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetSystemInfoCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type GetSystemInfoFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type GetSystemInfoSuccessCallback = (result: SystemInfo) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetUserInfoCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type GetUserInfoFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type GetUserInfoSuccessCallback = (
        result: GetUserInfoSuccessCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetUserProfileCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type GetUserProfileFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type GetUserProfileSuccessCallback = (
        result: GetUserProfileSuccessCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetVideoInfoCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type GetVideoInfoFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type GetVideoInfoSuccessCallback = (
        result: GetVideoInfoSuccessCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetWeRunDataCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type GetWeRunDataFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type GetWeRunDataSuccessCallback = (
        result: GetWeRunDataSuccessCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetWifiListCompleteCallback = (res: WifiError) => void;
    /** 接口调用失败的回调函数 */
    type GetWifiListFailCallback = (res: WifiError) => void;
    /** 接口调用成功的回调函数 */
    type GetWifiListSuccessCallback = (res: WifiError) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type HideHomeButtonCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type HideHomeButtonFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type HideHomeButtonSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type HideKeyboardCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type HideKeyboardFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type HideKeyboardSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type HideLoadingCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type HideLoadingFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type HideLoadingSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type HideNavigationBarLoadingCompleteCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用失败的回调函数 */
    type HideNavigationBarLoadingFailCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用成功的回调函数 */
    type HideNavigationBarLoadingSuccessCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type HideShareMenuCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type HideShareMenuFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type HideShareMenuSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type HideTabBarCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type HideTabBarFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type HideTabBarRedDotCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type HideTabBarRedDotFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type HideTabBarRedDotSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type HideTabBarSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type HideToastCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type HideToastFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type HideToastSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type IncludePointsCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type IncludePointsFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type IncludePointsSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type InitMarkerClusterCompleteCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用失败的回调函数 */
    type InitMarkerClusterFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type InitMarkerClusterSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 音频播放错误事件的回调函数 */
    type InnerAudioContextOffErrorCallback = (
        result: InnerAudioContextOnErrorCallbackResult,
    ) => void;
    /** 音频播放错误事件的回调函数 */
    type InnerAudioContextOnErrorCallback = (
        result: InnerAudioContextOnErrorCallbackResult,
    ) => void;
    type InnerAudioContextOnStopCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type InsertDividerCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type InsertDividerFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type InsertDividerSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type InsertImageCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type InsertImageFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type InsertImageSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type InsertTextCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type InsertTextFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type InsertTextSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 监听相交状态变化的回调函数 */
    type IntersectionObserverObserveCallback = (
        result: IntersectionObserverObserveCallbackResult,
    ) => void;
    /** 插屏错误事件的回调函数 */
    type InterstitialAdOffErrorCallback = (
        result: InterstitialAdOnErrorCallbackResult,
    ) => void;
    /** 插屏错误事件的回调函数 */
    type InterstitialAdOnErrorCallback = (
        result: InterstitialAdOnErrorCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type IsConnectedCompleteCallback = (res: Nfcrwerror) => void;
    /** 接口调用失败的回调函数 */
    type IsConnectedFailCallback = (res: Nfcrwerror) => void;
    /** 接口调用成功的回调函数 */
    type IsConnectedSuccessCallback = (res: Nfcrwerror) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type JoinVoIPChatCompleteCallback = (res: JoinVoIPChatError) => void;
    /** 接口调用失败的回调函数 */
    type JoinVoIPChatFailCallback = (res: JoinVoIPChatError) => void;
    /** 接口调用成功的回调函数 */
    type JoinVoIPChatSuccessCallback = (
        result: JoinVoIPChatSuccessCallbackResult,
    ) => void;
    /** 接口调用成功的回调函数 */
    type LivePlayerContextSnapshotSuccessCallback = (
        result: LivePlayerContextSnapshotSuccessCallbackResult,
    ) => void;
    /** 接口调用成功的回调函数 */
    type LivePusherContextSnapshotSuccessCallback = (
        result: LivePusherContextSnapshotSuccessCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type LoadFontFaceCompleteCallback = (
        result: LoadFontFaceCompleteCallbackResult,
    ) => void;
    /** 接口调用失败的回调函数 */
    type LoadFontFaceFailCallback = (
        result: LoadFontFaceCompleteCallbackResult,
    ) => void;
    /** 接口调用成功的回调函数 */
    type LoadFontFaceSuccessCallback = (
        result: LoadFontFaceCompleteCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type LoginCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type LoginFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type LoginSuccessCallback = (result: LoginSuccessCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type MakeBluetoothPairCompleteCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用失败的回调函数 */
    type MakeBluetoothPairFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type MakeBluetoothPairSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type MakePhoneCallCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type MakePhoneCallFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type MakePhoneCallSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 监听 media query 状态变化的回调函数 */
    type MediaQueryObserverObserveCallback = (
        result: MediaQueryObserverObserveCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type MkdirCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type MkdirFailCallback = (result: MkdirFailCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type MkdirSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type MoveAlongCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type MoveAlongFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type MoveAlongSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type MoveToLocationCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type MoveToLocationFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type MoveToLocationSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type MuteCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type MuteFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type MuteSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type NavigateBackCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type NavigateBackFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type NavigateBackMiniProgramCompleteCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用失败的回调函数 */
    type NavigateBackMiniProgramFailCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用成功的回调函数 */
    type NavigateBackMiniProgramSuccessCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用成功的回调函数 */
    type NavigateBackSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type NavigateToCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type NavigateToFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type NavigateToMiniProgramCompleteCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用失败的回调函数 */
    type NavigateToMiniProgramFailCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用成功的回调函数 */
    type NavigateToMiniProgramSuccessCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用成功的回调函数 */
    type NavigateToSuccessCallback = (
        result: NavigateToSuccessCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type NdefCloseCompleteCallback = (res: Nfcrwerror) => void;
    /** 接口调用失败的回调函数 */
    type NdefCloseFailCallback = (res: Nfcrwerror) => void;
    /** 接口调用成功的回调函数 */
    type NdefCloseSuccessCallback = (res: Nfcrwerror) => void;
    /** 回调函数，在执行 `SelectorQuery.exec` 方法后，返回节点信息。 */
    type NodeCallback = (result: NodeCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type NotifyBLECharacteristicValueChangeCompleteCallback = (
        res: BluetoothError,
    ) => void;
    /** 接口调用失败的回调函数 */
    type NotifyBLECharacteristicValueChangeFailCallback = (
        res: BluetoothError,
    ) => void;
    /** 接口调用成功的回调函数 */
    type NotifyBLECharacteristicValueChangeSuccessCallback = (
        res: BluetoothError,
    ) => void;
    /** 小程序切后台事件的回调函数 */
    type OffAppHideCallback = (res: GeneralCallbackResult) => void;
    /** 小程序切前台事件的回调函数 */
    type OffAppShowCallback = (result: OnAppShowCallbackResult) => void;
    /** 音频因为受到系统占用而被中断开始事件的回调函数 */
    type OffAudioInterruptionBeginCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 音频中断结束事件的回调函数 */
    type OffAudioInterruptionEndCallback = (res: GeneralCallbackResult) => void;
    /** 当前外围设备被连接或断开连接事件的回调函数 */
    type OffBLEPeripheralConnectionStateChangedCallback = (
        result: OnBLEPeripheralConnectionStateChangedCallbackResult,
    ) => void;
    /** iBeacon 服务状态变化事件的回调函数 */
    type OffBeaconServiceChangeCallback = (res: GeneralCallbackResult) => void;
    /** iBeacon 设备更新事件的回调函数 */
    type OffBeaconUpdateCallback = (res: GeneralCallbackResult) => void;
    /** 音频进入可以播放状态的事件的回调函数 */
    type OffCanplayCallback = (res: GeneralCallbackResult) => void;
    /** 已连接的设备请求读当前外围设备的特征值事件的回调函数 */
    type OffCharacteristicReadRequestCallback = (
        result: OnCharacteristicReadRequestCallbackResult,
    ) => void;
    /** 特征值订阅事件的回调函数 */
    type OffCharacteristicSubscribedCallback = (
        result: OnCharacteristicSubscribedCallbackResult,
    ) => void;
    /** 取消特征值订阅事件的回调函数 */
    type OffCharacteristicUnsubscribedCallback = (
        result: OnCharacteristicSubscribedCallbackResult,
    ) => void;
    /** 已连接的设备请求写当前外围设备的特征值事件的回调函数 */
    type OffCharacteristicWriteRequestCallback = (
        result: OnCharacteristicWriteRequestCallbackResult,
    ) => void;
    /** 当一个 socket 连接成功建立的时候触发该事件的回调函数 */
    type OffConnectCallback = (res: GeneralCallbackResult) => void;
    /** 用户点击右上角菜单的「复制链接」按钮时触发的事件的回调函数 */
    type OffCopyUrlCallback = (result: OnCopyUrlCallbackResult) => void;
    /** 的回调函数 */
    type OffDiscoveredCallback = (result: OnDiscoveredCallbackResult) => void;
    /** 音频自然播放至结束的事件的回调函数 */
    type OffEndedCallback = (res: GeneralCallbackResult) => void;
    /** HTTP Response Header 事件的回调函数 */
    type OffHeadersReceivedCallback = (
        result: OnHeadersReceivedCallbackResult,
    ) => void;
    /** 开始监听数据包消息的事件的回调函数 */
    type OffListeningCallback = (res: GeneralCallbackResult) => void;
    type OffLoadCallback = (res: GeneralCallbackResult) => void;
    /** mDNS 服务停止搜索的事件的回调函数 */
    type OffLocalServiceDiscoveryStopCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** mDNS 服务发现的事件的回调函数 */
    type OffLocalServiceFoundCallback = (
        result: OnLocalServiceFoundCallbackResult,
    ) => void;
    /** mDNS 服务离开的事件的回调函数 */
    type OffLocalServiceLostCallback = (
        result: OnLocalServiceLostCallbackResult,
    ) => void;
    /** mDNS 服务解析失败的事件的回调函数 */
    type OffLocalServiceResolveFailCallback = (
        result: OnLocalServiceLostCallbackResult,
    ) => void;
    /** 实时地理位置变化事件的回调函数 */
    type OffLocationChangeCallback = (
        result: OnLocationChangeCallbackResult,
    ) => void;
    /** 小程序要打开的页面不存在事件的回调函数 */
    type OffPageNotFoundCallback = (
        result: OnPageNotFoundCallbackResult,
    ) => void;
    /** 音频暂停事件的回调函数 */
    type OffPauseCallback = (res: GeneralCallbackResult) => void;
    /** 音频播放事件的回调函数 */
    type OffPlayCallback = (res: GeneralCallbackResult) => void;
    /** 音频完成跳转操作的事件的回调函数 */
    type OffSeekedCallback = (res: GeneralCallbackResult) => void;
    /** 音频进行跳转操作的事件的回调函数 */
    type OffSeekingCallback = (res: GeneralCallbackResult) => void;
    /** 音频停止事件的回调函数 */
    type OffStopCallback = (res: GeneralCallbackResult) => void;
    /** 系统主题改变事件的回调函数 */
    type OffThemeChangeCallback = (result: OnThemeChangeCallbackResult) => void;
    /** 音频播放进度更新事件的回调函数 */
    type OffTimeUpdateCallback = (res: GeneralCallbackResult) => void;
    /** 未处理的 Promise 拒绝事件的回调函数 */
    type OffUnhandledRejectionCallback = (
        result: OnUnhandledRejectionCallbackResult,
    ) => void;
    /** 房间状态变化事件的回调函数 */
    type OffVoIPChatStateChangedCallback = (
        result: OnVoIPChatStateChangedCallbackResult,
    ) => void;
    /** 实时语音通话成员视频状态变化事件的回调函数 */
    type OffVoIPVideoMembersChangedCallback = (
        result: OnVoIPVideoMembersChangedCallbackResult,
    ) => void;
    /** 音频加载中事件的回调函数 */
    type OffWaitingCallback = (res: GeneralCallbackResult) => void;
    /** 窗口尺寸变化事件的回调函数 */
    type OffWindowResizeCallback = (
        result: OnWindowResizeCallbackResult,
    ) => void;
    /** 加速度数据事件的回调函数 */
    type OnAccelerometerChangeCallback = (
        result: OnAccelerometerChangeCallbackResult,
    ) => void;
    /** 小程序错误事件的回调函数 */
    type OnAppErrorCallback = (
        /** 错误信息，包含堆栈 */
        error: string,
    ) => void;
    /** 小程序切后台事件的回调函数 */
    type OnAppHideCallback = (res: GeneralCallbackResult) => void;
    /** 小程序切前台事件的回调函数 */
    type OnAppShowCallback = (result: OnAppShowCallbackResult) => void;
    /** 音频因为受到系统占用而被中断开始事件的回调函数 */
    type OnAudioInterruptionBeginCallback = (res: GeneralCallbackResult) => void;
    /** 音频中断结束事件的回调函数 */
    type OnAudioInterruptionEndCallback = (res: GeneralCallbackResult) => void;
    /** 低功耗蓝牙设备的特征值变化事件的回调函数 */
    type OnBLECharacteristicValueChangeCallback = (
        result: OnBLECharacteristicValueChangeCallbackResult,
    ) => void;
    /** 低功耗蓝牙连接状态的改变事件的回调函数 */
    type OnBLEConnectionStateChangeCallback = (
        result: OnBLEConnectionStateChangeCallbackResult,
    ) => void;
    /** 当前外围设备被连接或断开连接事件的回调函数 */
    type OnBLEPeripheralConnectionStateChangedCallback = (
        result: OnBLEPeripheralConnectionStateChangedCallbackResult,
    ) => void;
    /** 音乐暂停事件的回调函数 */
    type OnBackgroundAudioPauseCallback = (res: GeneralCallbackResult) => void;
    /** 音乐播放事件的回调函数 */
    type OnBackgroundAudioPlayCallback = (res: GeneralCallbackResult) => void;
    /** 音乐停止事件的回调函数 */
    type OnBackgroundAudioStopCallback = (res: GeneralCallbackResult) => void;
    /** 的回调函数 */
    type OnBackgroundFetchDataCallback = (
        result: OnBackgroundFetchDataCallbackResult,
    ) => void;
    /** iBeacon 服务状态变化事件的回调函数 */
    type OnBeaconServiceChangeCallback = (
        result: OnBeaconServiceChangeCallbackResult,
    ) => void;
    /** iBeacon 设备更新事件的回调函数 */
    type OnBeaconUpdateCallback = (result: OnBeaconUpdateCallbackResult) => void;
    /** 蓝牙适配器状态变化事件的回调函数 */
    type OnBluetoothAdapterStateChangeCallback = (
        result: OnBluetoothAdapterStateChangeCallbackResult,
    ) => void;
    /** 寻找到新设备的事件的回调函数 */
    type OnBluetoothDeviceFoundCallback = (
        result: OnBluetoothDeviceFoundCallbackResult,
    ) => void;
    /** 回调函数 */
    type OnCameraFrameCallback = (result: OnCameraFrameCallbackResult) => void;
    type OnCanplayCallback = (res: GeneralCallbackResult) => void;
    /** 已连接的设备请求读当前外围设备的特征值事件的回调函数 */
    type OnCharacteristicReadRequestCallback = (
        result: OnCharacteristicReadRequestCallbackResult,
    ) => void;
    /** 特征值订阅事件的回调函数 */
    type OnCharacteristicSubscribedCallback = (
        result: OnCharacteristicSubscribedCallbackResult,
    ) => void;
    /** 取消特征值订阅事件的回调函数 */
    type OnCharacteristicUnsubscribedCallback = (
        result: OnCharacteristicSubscribedCallbackResult,
    ) => void;
    /** 已连接的设备请求写当前外围设备的特征值事件的回调函数 */
    type OnCharacteristicWriteRequestCallback = (
        result: OnCharacteristicWriteRequestCallbackResult,
    ) => void;
    /** 向微信后台请求检查更新结果事件的回调函数 */
    type OnCheckForUpdateCallback = (
        result: OnCheckForUpdateCallbackResult,
    ) => void;
    /** 罗盘数据变化事件的回调函数 */
    type OnCompassChangeCallback = (
        result: OnCompassChangeCallbackResult,
    ) => void;
    /** 当一个 socket 连接成功建立的时候触发该事件的回调函数 */
    type OnConnectCallback = (res: GeneralCallbackResult) => void;
    /** 用户点击右上角菜单的「复制链接」按钮时触发的事件的回调函数 */
    type OnCopyUrlCallback = (result: OnCopyUrlCallbackResult) => void;
    /** 设备方向变化事件的回调函数 */
    type OnDeviceMotionChangeCallback = (
        result: OnDeviceMotionChangeCallbackResult,
    ) => void;
    /** 的回调函数 */
    type OnDiscoveredCallback = (result: OnDiscoveredCallbackResult) => void;
    type OnEndedCallback = (res: GeneralCallbackResult) => void;
    /** 已录制完指定帧大小的文件事件的回调函数 */
    type OnFrameRecordedCallback = (
        result: OnFrameRecordedCallbackResult,
    ) => void;
    /** 获取到 Wi-Fi 列表数据事件的回调函数 */
    type OnGetWifiListCallback = (result: OnGetWifiListCallbackResult) => void;
    /** 陀螺仪数据变化事件的回调函数 */
    type OnGyroscopeChangeCallback = (
        result: OnGyroscopeChangeCallbackResult,
    ) => void;
    /** 接收 NFC 设备消息事件的回调函数 */
    type OnHCEMessageCallback = (result: OnHCEMessageCallbackResult) => void;
    /** HTTP Response Header 事件的回调函数 */
    type OnHeadersReceivedCallback = (
        result: OnHeadersReceivedCallbackResult,
    ) => void;
    /** 录音因为受到系统占用而被中断开始事件的回调函数 */
    type OnInterruptionBeginCallback = (res: GeneralCallbackResult) => void;
    /** 录音中断结束事件的回调函数 */
    type OnInterruptionEndCallback = (res: GeneralCallbackResult) => void;
    type OnKeyboardHeightChangeCallback = (
        result: OnKeyboardHeightChangeCallbackResult,
    ) => void;
    /** 开始监听数据包消息的事件的回调函数 */
    type OnListeningCallback = (res: GeneralCallbackResult) => void;
    type OnLoadCallback = (res: GeneralCallbackResult) => void;
    /** mDNS 服务停止搜索的事件的回调函数 */
    type OnLocalServiceDiscoveryStopCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** mDNS 服务发现的事件的回调函数 */
    type OnLocalServiceFoundCallback = (
        result: OnLocalServiceFoundCallbackResult,
    ) => void;
    /** mDNS 服务离开的事件的回调函数 */
    type OnLocalServiceLostCallback = (
        result: OnLocalServiceLostCallbackResult,
    ) => void;
    /** mDNS 服务解析失败的事件的回调函数 */
    type OnLocalServiceResolveFailCallback = (
        result: OnLocalServiceLostCallbackResult,
    ) => void;
    /** 实时地理位置变化事件的回调函数 */
    type OnLocationChangeCallback = (
        result: OnLocationChangeCallbackResult,
    ) => void;
    /** 内存不足告警事件的回调函数 */
    type OnMemoryWarningCallback = (
        result: OnMemoryWarningCallbackResult,
    ) => void;
    /** 网络状态变化事件的回调函数 */
    type OnNetworkStatusChangeCallback = (
        result: OnNetworkStatusChangeCallbackResult,
    ) => void;
    /** 用户在系统音乐播放面板点击下一曲事件的回调函数 */
    type OnNextCallback = (res: GeneralCallbackResult) => void;
    /** WebSocket 连接打开事件的回调函数 */
    type OnOpenCallback = (result: OnOpenCallbackResult) => void;
    /** 小程序要打开的页面不存在事件的回调函数 */
    type OnPageNotFoundCallback = (result: OnPageNotFoundCallbackResult) => void;
    type OnPauseCallback = (res: GeneralCallbackResult) => void;
    type OnPlayCallback = (res: GeneralCallbackResult) => void;
    /** 用户在系统音乐播放面板点击上一曲事件的回调函数 */
    type OnPrevCallback = (res: GeneralCallbackResult) => void;
    /** worker线程被系统回收事件的回调函数 */
    type OnProcessKilledCallback = (res: GeneralCallbackResult) => void;
    /** 录音继续事件的回调函数 */
    type OnResumeCallback = (res: GeneralCallbackResult) => void;
    type OnSeekedCallback = (res: GeneralCallbackResult) => void;
    type OnSeekingCallback = (res: GeneralCallbackResult) => void;
    /** WebSocket 连接关闭事件的回调函数 */
    type OnSocketCloseCallback = (
        result: SocketTaskOnCloseCallbackResult,
    ) => void;
    /** WebSocket 错误事件的回调函数 */
    type OnSocketErrorCallback = (
        result: UDPSocketOnErrorCallbackResult,
    ) => void;
    /** WebSocket 接受到服务器的消息事件的回调函数 */
    type OnSocketMessageCallback = (
        result: SocketTaskOnMessageCallbackResult,
    ) => void;
    /** WebSocket 连接打开事件的回调函数 */
    type OnSocketOpenCallback = (result: OnSocketOpenCallbackResult) => void;
    /** 录音开始事件的回调函数 */
    type OnStartCallback = (res: GeneralCallbackResult) => void;
    /** 系统主题改变事件的回调函数 */
    type OnThemeChangeCallback = (result: OnThemeChangeCallbackResult) => void;
    type OnTimeUpdateCallback = (res: GeneralCallbackResult) => void;
    /** 未处理的 Promise 拒绝事件的回调函数 */
    type OnUnhandledRejectionCallback = (
        result: OnUnhandledRejectionCallbackResult,
    ) => void;
    /** 小程序更新失败事件的回调函数 */
    type OnUpdateFailedCallback = (res: GeneralCallbackResult) => void;
    /** 小程序有版本更新事件的回调函数 */
    type OnUpdateReadyCallback = (res: GeneralCallbackResult) => void;
    /** 用户主动截屏事件的回调函数 */
    type OnUserCaptureScreenCallback = (res: GeneralCallbackResult) => void;
    /** 被动断开实时语音通话事件的回调函数 */
    type OnVoIPChatInterruptedCallback = (
        result: OnVoIPChatInterruptedCallbackResult,
    ) => void;
    /** 实时语音通话成员在线状态变化事件的回调函数 */
    type OnVoIPChatMembersChangedCallback = (
        result: OnVoIPChatMembersChangedCallbackResult,
    ) => void;
    /** 实时语音通话成员通话状态变化事件的回调函数 */
    type OnVoIPChatSpeakersChangedCallback = (
        result: OnVoIPChatSpeakersChangedCallbackResult,
    ) => void;
    /** 房间状态变化事件的回调函数 */
    type OnVoIPChatStateChangedCallback = (
        result: OnVoIPChatStateChangedCallbackResult,
    ) => void;
    /** 实时语音通话成员视频状态变化事件的回调函数 */
    type OnVoIPVideoMembersChangedCallback = (
        result: OnVoIPVideoMembersChangedCallbackResult,
    ) => void;
    /** 音频加载中事件的回调函数 */
    type OnWaitingCallback = (res: GeneralCallbackResult) => void;
    /** 连接上 Wi-Fi 的事件的回调函数 */
    type OnWifiConnectedCallback = (
        result: OnWifiConnectedCallbackResult,
    ) => void;
    /** 窗口尺寸变化事件的回调函数 */
    type OnWindowResizeCallback = (result: OnWindowResizeCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type OpenBluetoothAdapterCompleteCallback = (res: BluetoothError) => void;
    /** 接口调用失败的回调函数 */
    type OpenBluetoothAdapterFailCallback = (res: BluetoothError) => void;
    /** 接口调用成功的回调函数 */
    type OpenBluetoothAdapterSuccessCallback = (res: BluetoothError) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type OpenCardCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type OpenCardFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type OpenCardSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type OpenCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type OpenDocumentCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type OpenDocumentFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type OpenDocumentSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type OpenFailCallback = (result: OpenFailCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type OpenLocationCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type OpenLocationFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type OpenLocationSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type OpenMapAppCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type OpenMapAppFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type OpenMapAppSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type OpenSettingCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type OpenSettingFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type OpenSettingSuccessCallback = (
        result: OpenSettingSuccessCallbackResult,
    ) => void;
    /** 接口调用成功的回调函数 */
    type OpenSuccessCallback = (result: OpenSuccessCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type OpenVideoEditorCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type OpenVideoEditorFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type OpenVideoEditorSuccessCallback = (
        result: OpenVideoEditorSuccessCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type PageScrollToCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type PageScrollToFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type PageScrollToSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type PauseBGMCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type PauseBGMFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type PauseBGMSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type PauseBackgroundAudioCompleteCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用失败的回调函数 */
    type PauseBackgroundAudioFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type PauseBackgroundAudioSuccessCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type PauseCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type PauseFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type PauseSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type PauseVoiceCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type PauseVoiceFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type PauseVoiceSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type PlayBGMCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type PlayBGMFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type PlayBGMSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type PlayBackgroundAudioCompleteCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用失败的回调函数 */
    type PlayBackgroundAudioFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type PlayBackgroundAudioSuccessCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type PlayCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type PlayFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type PlaySuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type PlayVoiceCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type PlayVoiceFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type PlayVoiceSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type PreviewImageCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type PreviewImageFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type PreviewImageSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type PreviewMediaCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type PreviewMediaFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type PreviewMediaSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type ReLaunchCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type ReLaunchFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type ReLaunchSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type ReadBLECharacteristicValueCompleteCallback = (
        res: BluetoothError,
    ) => void;
    /** 接口调用失败的回调函数 */
    type ReadBLECharacteristicValueFailCallback = (res: BluetoothError) => void;
    /** 接口调用成功的回调函数 */
    type ReadBLECharacteristicValueSuccessCallback = (
        res: BluetoothError,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type ReadCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type ReadFailCallback = (result: ReadFailCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type ReadFileCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type ReadFileFailCallback = (result: ReadFileFailCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type ReadFileSuccessCallback = (
        result: ReadFileSuccessCallbackResult,
    ) => void;
    /** 接口调用成功的回调函数 */
    type ReadSuccessCallback = (result: ReadSuccessCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type ReadZipEntryCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type ReadZipEntryFailCallback = (result: ReadFileFailCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type ReadZipEntrySuccessCallback = (
        result: ReadZipEntrySuccessCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type ReaddirCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type ReaddirFailCallback = (result: ReaddirFailCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type ReaddirSuccessCallback = (result: ReaddirSuccessCallbackResult) => void;
    /** 录音结束事件的回调函数 */
    type RecorderManagerOnStopCallback = (result: OnStopCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type RedirectToCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type RedirectToFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type RedirectToSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type RedoCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type RedoFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type RedoSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type RemoveCustomLayerCompleteCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用失败的回调函数 */
    type RemoveCustomLayerFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type RemoveCustomLayerSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type RemoveFormatCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type RemoveFormatFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type RemoveFormatSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type RemoveGroundOverlayCompleteCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用失败的回调函数 */
    type RemoveGroundOverlayFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type RemoveGroundOverlaySuccessCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type RemoveMarkersCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type RemoveMarkersFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type RemoveMarkersSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type RemoveSavedFileCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type RemoveSavedFileSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type RemoveServiceCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type RemoveServiceFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type RemoveServiceSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type RemoveStorageCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type RemoveStorageFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type RemoveStorageSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type RemoveTabBarBadgeCompleteCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用失败的回调函数 */
    type RemoveTabBarBadgeFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type RemoveTabBarBadgeSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type RenameCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type RenameFailCallback = (result: RenameFailCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type RenameSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type RequestCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type RequestFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type RequestFullScreenCompleteCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用失败的回调函数 */
    type RequestFullScreenFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type RequestFullScreenSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type RequestOrderPaymentCompleteCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用失败的回调函数 */
    type RequestOrderPaymentFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type RequestOrderPaymentSuccessCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type RequestPaymentCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type RequestPaymentFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type RequestPaymentSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type RequestPictureInPictureCompleteCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用失败的回调函数 */
    type RequestPictureInPictureFailCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用成功的回调函数 */
    type RequestPictureInPictureSuccessCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type RequestSubscribeMessageCompleteCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用失败的回调函数 */
    type RequestSubscribeMessageFailCallback = (
        result: RequestSubscribeMessageFailCallbackResult,
    ) => void;
    /** 接口调用成功的回调函数 */
    type RequestSubscribeMessageSuccessCallback = (
        result: RequestSubscribeMessageSuccessCallbackResult,
    ) => void;
    /** 接口调用成功的回调函数 */
    type RequestSuccessCallback<
        T extends string | IAnyObject | ArrayBuffer =
            | string
            | IAnyObject
            | ArrayBuffer,
    > = (result: RequestSuccessCallbackResult<T>) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type ResumeBGMCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type ResumeBGMFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type ResumeBGMSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type ResumeCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type ResumeFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type ResumeSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 用户点击 `关闭广告` 按钮的事件的回调函数 */
    type RewardedVideoAdOffCloseCallback = (
        result: RewardedVideoAdOnCloseCallbackResult,
    ) => void;
    /** 激励视频错误事件的回调函数 */
    type RewardedVideoAdOffErrorCallback = (
        result: RewardedVideoAdOnErrorCallbackResult,
    ) => void;
    /** 用户点击 `关闭广告` 按钮的事件的回调函数 */
    type RewardedVideoAdOnCloseCallback = (
        result: RewardedVideoAdOnCloseCallbackResult,
    ) => void;
    /** 激励视频错误事件的回调函数 */
    type RewardedVideoAdOnErrorCallback = (
        result: RewardedVideoAdOnErrorCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type RmdirCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type RmdirFailCallback = (result: RmdirFailCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type RmdirSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type SaveFileCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type SaveFileSuccessCallback = (
        result: SaveFileSuccessCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type SaveFileToDiskCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type SaveFileToDiskFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type SaveFileToDiskSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type SaveImageToPhotosAlbumCompleteCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用失败的回调函数 */
    type SaveImageToPhotosAlbumFailCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用成功的回调函数 */
    type SaveImageToPhotosAlbumSuccessCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type SaveVideoToPhotosAlbumCompleteCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用失败的回调函数 */
    type SaveVideoToPhotosAlbumFailCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用成功的回调函数 */
    type SaveVideoToPhotosAlbumSuccessCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type ScanCodeCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type ScanCodeFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type ScanCodeSuccessCallback = (
        result: ScanCodeSuccessCallbackResult,
    ) => void;
    /** 回调函数，在执行 `SelectorQuery.exec` 方法后，节点信息会在 `callback` 中返回。 */
    type ScrollOffsetCallback = (result: ScrollOffsetCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type SearchContactsCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type SearchContactsFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type SearchContactsSuccessCallback = (
        option: SearchContactsSuccessCallbackOption,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type SeekBackgroundAudioCompleteCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用失败的回调函数 */
    type SeekBackgroundAudioFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type SeekBackgroundAudioSuccessCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type SendCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type SendFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type SendHCEMessageCompleteCallback = (res: NFCError) => void;
    /** 接口调用失败的回调函数 */
    type SendHCEMessageFailCallback = (res: NFCError) => void;
    /** 接口调用成功的回调函数 */
    type SendHCEMessageSuccessCallback = (res: NFCError) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type SendMessageCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type SendMessageFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type SendMessageSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type SendSocketMessageCompleteCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用失败的回调函数 */
    type SendSocketMessageFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type SendSocketMessageSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type SendSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type SetBGMVolumeCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type SetBGMVolumeFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type SetBGMVolumeSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type SetBLEMTUCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type SetBLEMTUFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type SetBLEMTUSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type SetBackgroundColorCompleteCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用失败的回调函数 */
    type SetBackgroundColorFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type SetBackgroundColorSuccessCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type SetBackgroundFetchTokenCompleteCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用失败的回调函数 */
    type SetBackgroundFetchTokenFailCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用成功的回调函数 */
    type SetBackgroundFetchTokenSuccessCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type SetBackgroundTextStyleCompleteCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用失败的回调函数 */
    type SetBackgroundTextStyleFailCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用成功的回调函数 */
    type SetBackgroundTextStyleSuccessCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type SetCenterOffsetCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type SetCenterOffsetFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type SetCenterOffsetSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type SetClipboardDataCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type SetClipboardDataFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type SetClipboardDataSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type SetContentsCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type SetContentsFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type SetContentsSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type SetEnableDebugCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type SetEnableDebugFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type SetEnableDebugSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type SetInnerAudioOptionCompleteCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用失败的回调函数 */
    type SetInnerAudioOptionFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type SetInnerAudioOptionSuccessCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type SetKeepScreenOnCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type SetKeepScreenOnFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type SetKeepScreenOnSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type SetLocMarkerIconCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type SetLocMarkerIconFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type SetLocMarkerIconSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type SetMICVolumeCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type SetMICVolumeFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type SetMICVolumeSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type SetNavigationBarColorCompleteCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用失败的回调函数 */
    type SetNavigationBarColorFailCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用成功的回调函数 */
    type SetNavigationBarColorSuccessCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type SetNavigationBarTitleCompleteCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用失败的回调函数 */
    type SetNavigationBarTitleFailCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用成功的回调函数 */
    type SetNavigationBarTitleSuccessCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type SetScreenBrightnessCompleteCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用失败的回调函数 */
    type SetScreenBrightnessFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type SetScreenBrightnessSuccessCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type SetStorageCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type SetStorageFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type SetStorageSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type SetTabBarBadgeCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type SetTabBarBadgeFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type SetTabBarBadgeSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type SetTabBarItemCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type SetTabBarItemFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type SetTabBarItemSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type SetTabBarStyleCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type SetTabBarStyleFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type SetTabBarStyleSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type SetTimeoutCompleteCallback = (res: Nfcrwerror) => void;
    /** 接口调用失败的回调函数 */
    type SetTimeoutFailCallback = (res: Nfcrwerror) => void;
    /** 接口调用成功的回调函数 */
    type SetTimeoutSuccessCallback = (res: Nfcrwerror) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type SetTopBarTextCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type SetTopBarTextFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type SetTopBarTextSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type SetWifiListCompleteCallback = (res: WifiError) => void;
    /** 接口调用失败的回调函数 */
    type SetWifiListFailCallback = (res: WifiError) => void;
    /** 接口调用成功的回调函数 */
    type SetWifiListSuccessCallback = (res: WifiError) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type SetWindowSizeCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type SetWindowSizeFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type SetWindowSizeSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type SetZoomCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type SetZoomFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type SetZoomSuccessCallback = (result: SetZoomSuccessCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type ShareFileMessageCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type ShareFileMessageFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type ShareFileMessageSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type ShareToWeRunCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type ShareToWeRunFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type ShareToWeRunSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type ShareVideoMessageCompleteCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用失败的回调函数 */
    type ShareVideoMessageFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type ShareVideoMessageSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type ShowActionSheetCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type ShowActionSheetFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type ShowActionSheetSuccessCallback = (
        result: ShowActionSheetSuccessCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type ShowLoadingCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type ShowLoadingFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type ShowLoadingSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type ShowModalCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type ShowModalFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type ShowModalSuccessCallback = (
        result: ShowModalSuccessCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type ShowNavigationBarLoadingCompleteCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用失败的回调函数 */
    type ShowNavigationBarLoadingFailCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用成功的回调函数 */
    type ShowNavigationBarLoadingSuccessCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type ShowRedPackageCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type ShowRedPackageFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type ShowRedPackageSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type ShowShareImageMenuCompleteCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用失败的回调函数 */
    type ShowShareImageMenuFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type ShowShareImageMenuSuccessCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type ShowShareMenuCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type ShowShareMenuFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type ShowShareMenuSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type ShowTabBarCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type ShowTabBarFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type ShowTabBarRedDotCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type ShowTabBarRedDotFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type ShowTabBarRedDotSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type ShowTabBarSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type ShowToastCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type ShowToastFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type ShowToastSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type SnapshotCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type SnapshotFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type SocketTaskCloseFailCallback = (res: GeneralCallbackResult) => void;
    /** WebSocket 连接关闭事件的回调函数 */
    type SocketTaskOnCloseCallback = (
        result: SocketTaskOnCloseCallbackResult,
    ) => void;
    /** WebSocket 接受到服务器的消息事件的回调函数 */
    type SocketTaskOnMessageCallback = (
        result: SocketTaskOnMessageCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type StartAccelerometerCompleteCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用失败的回调函数 */
    type StartAccelerometerFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type StartAccelerometerSuccessCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type StartAdvertisingCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type StartAdvertisingFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type StartAdvertisingSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type StartBeaconDiscoveryCompleteCallback = (res: IBeaconError) => void;
    /** 接口调用失败的回调函数 */
    type StartBeaconDiscoveryFailCallback = (res: IBeaconError) => void;
    /** 接口调用成功的回调函数 */
    type StartBeaconDiscoverySuccessCallback = (res: IBeaconError) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type StartBluetoothDevicesDiscoveryCompleteCallback = (
        res: BluetoothError,
    ) => void;
    /** 接口调用失败的回调函数 */
    type StartBluetoothDevicesDiscoveryFailCallback = (
        res: BluetoothError,
    ) => void;
    /** 接口调用成功的回调函数 */
    type StartBluetoothDevicesDiscoverySuccessCallback = (
        res: BluetoothError,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type StartCompassCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type StartCompassFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type StartCompassSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type StartCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type StartDeviceMotionListeningCompleteCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用失败的回调函数 */
    type StartDeviceMotionListeningFailCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用成功的回调函数 */
    type StartDeviceMotionListeningSuccessCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type StartDiscoveryCompleteCallback = (res: Nfcrwerror) => void;
    /** 接口调用失败的回调函数 */
    type StartDiscoveryFailCallback = (res: Nfcrwerror) => void;
    /** 接口调用成功的回调函数 */
    type StartDiscoverySuccessCallback = (res: Nfcrwerror) => void;
    /** 接口调用失败的回调函数 */
    type StartFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type StartGyroscopeCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type StartGyroscopeFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type StartGyroscopeSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type StartHCECompleteCallback = (res: NFCError) => void;
    /** 接口调用失败的回调函数 */
    type StartHCEFailCallback = (res: NFCError) => void;
    /** 接口调用成功的回调函数 */
    type StartHCESuccessCallback = (res: NFCError) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type StartLocalServiceDiscoveryCompleteCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用失败的回调函数 */
    type StartLocalServiceDiscoveryFailCallback = (
        result: StartLocalServiceDiscoveryFailCallbackResult,
    ) => void;
    /** 接口调用成功的回调函数 */
    type StartLocalServiceDiscoverySuccessCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type StartLocationUpdateBackgroundCompleteCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用失败的回调函数 */
    type StartLocationUpdateBackgroundFailCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用成功的回调函数 */
    type StartLocationUpdateBackgroundSuccessCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type StartLocationUpdateCompleteCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用失败的回调函数 */
    type StartLocationUpdateFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type StartLocationUpdateSuccessCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type StartPreviewCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type StartPreviewFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type StartPreviewSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type StartPullDownRefreshCompleteCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用失败的回调函数 */
    type StartPullDownRefreshFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type StartPullDownRefreshSuccessCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type StartRecordCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type StartRecordFailCallback = (res: GeneralCallbackResult) => void;
    /** 超过30s或页面 `onHide` 时会结束录像 */
    type StartRecordTimeoutCallback = (
        result: StartRecordTimeoutCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type StartSoterAuthenticationCompleteCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用失败的回调函数 */
    type StartSoterAuthenticationFailCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用成功的回调函数 */
    type StartSoterAuthenticationSuccessCallback = (
        result: StartSoterAuthenticationSuccessCallbackResult,
    ) => void;
    /** 接口调用成功的回调函数 */
    type StartSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type StartWifiCompleteCallback = (res: WifiError) => void;
    /** 接口调用失败的回调函数 */
    type StartWifiFailCallback = (res: WifiError) => void;
    /** 接口调用成功的回调函数 */
    type StartWifiSuccessCallback = (res: WifiError) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type StatCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type StatFailCallback = (result: StatFailCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type StatSuccessCallback = (result: StatSuccessCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type StopAccelerometerCompleteCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用失败的回调函数 */
    type StopAccelerometerFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type StopAccelerometerSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type StopAdvertisingCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type StopAdvertisingFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type StopAdvertisingSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type StopBGMCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type StopBGMFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type StopBGMSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type StopBackgroundAudioCompleteCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用失败的回调函数 */
    type StopBackgroundAudioFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type StopBackgroundAudioSuccessCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type StopBeaconDiscoveryCompleteCallback = (res: IBeaconError) => void;
    /** 接口调用失败的回调函数 */
    type StopBeaconDiscoveryFailCallback = (res: IBeaconError) => void;
    /** 接口调用成功的回调函数 */
    type StopBeaconDiscoverySuccessCallback = (res: IBeaconError) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type StopBluetoothDevicesDiscoveryCompleteCallback = (
        res: BluetoothError,
    ) => void;
    /** 接口调用失败的回调函数 */
    type StopBluetoothDevicesDiscoveryFailCallback = (
        res: BluetoothError,
    ) => void;
    /** 接口调用成功的回调函数 */
    type StopBluetoothDevicesDiscoverySuccessCallback = (
        res: BluetoothError,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type StopCompassCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type StopCompassFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type StopCompassSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type StopCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type StopDeviceMotionListeningCompleteCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用失败的回调函数 */
    type StopDeviceMotionListeningFailCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用成功的回调函数 */
    type StopDeviceMotionListeningSuccessCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type StopDiscoveryCompleteCallback = (res: Nfcrwerror) => void;
    /** 接口调用失败的回调函数 */
    type StopDiscoveryFailCallback = (res: Nfcrwerror) => void;
    /** 接口调用成功的回调函数 */
    type StopDiscoverySuccessCallback = (res: Nfcrwerror) => void;
    /** 接口调用失败的回调函数 */
    type StopFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type StopGyroscopeCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type StopGyroscopeFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type StopGyroscopeSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type StopHCECompleteCallback = (res: NFCError) => void;
    /** 接口调用失败的回调函数 */
    type StopHCEFailCallback = (res: NFCError) => void;
    /** 接口调用成功的回调函数 */
    type StopHCESuccessCallback = (res: NFCError) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type StopLocalServiceDiscoveryCompleteCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用失败的回调函数 */
    type StopLocalServiceDiscoveryFailCallback = (
        result: StopLocalServiceDiscoveryFailCallbackResult,
    ) => void;
    /** 接口调用成功的回调函数 */
    type StopLocalServiceDiscoverySuccessCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type StopLocationUpdateCompleteCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用失败的回调函数 */
    type StopLocationUpdateFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type StopLocationUpdateSuccessCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type StopPreviewCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type StopPreviewFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type StopPreviewSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type StopPullDownRefreshCompleteCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用失败的回调函数 */
    type StopPullDownRefreshFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type StopPullDownRefreshSuccessCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type StopRecordCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type StopRecordFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type StopSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type StopVoiceCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type StopVoiceFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type StopVoiceSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type StopWifiCompleteCallback = (res: WifiError) => void;
    /** 接口调用失败的回调函数 */
    type StopWifiFailCallback = (res: WifiError) => void;
    /** 接口调用成功的回调函数 */
    type StopWifiSuccessCallback = (res: WifiError) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type SubscribeVoIPVideoMembersCompleteCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用失败的回调函数 */
    type SubscribeVoIPVideoMembersFailCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用成功的回调函数 */
    type SubscribeVoIPVideoMembersSuccessCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type SwitchCameraCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type SwitchCameraFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type SwitchCameraSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type SwitchTabCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type SwitchTabFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type SwitchTabSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 当接收到数据的时触发该事件的回调函数 */
    type TCPSocketOffMessageCallback = (
        result: TCPSocketOnMessageCallbackResult,
    ) => void;
    /** 当接收到数据的时触发该事件的回调函数 */
    type TCPSocketOnMessageCallback = (
        result: TCPSocketOnMessageCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type TakePhotoCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type TakePhotoFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type TakePhotoSuccessCallback = (
        result: TakePhotoSuccessCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type ToScreenLocationCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type ToScreenLocationFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type ToScreenLocationSuccessCallback = (
        result: ToScreenLocationSuccessCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type ToggleTorchCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type ToggleTorchFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type ToggleTorchSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type TransceiveCompleteCallback = (res: Nfcrwerror) => void;
    /** 接口调用失败的回调函数 */
    type TransceiveFailCallback = (res: Nfcrwerror) => void;
    /** 接口调用成功的回调函数 */
    type TransceiveSuccessCallback = (
        result: TransceiveSuccessCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type TranslateMarkerCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type TranslateMarkerFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type TranslateMarkerSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type TruncateCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type TruncateFailCallback = (result: TruncateFailCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type TruncateSuccessCallback = (res: GeneralCallbackResult) => void;
    type UDPSocketOffCloseCallback = (res: GeneralCallbackResult) => void;
    type UDPSocketOffErrorCallback = (
        result: UDPSocketOnErrorCallbackResult,
    ) => void;
    /** 收到消息的事件的回调函数 */
    type UDPSocketOffMessageCallback = (
        result: UDPSocketOnMessageCallbackResult,
    ) => void;
    type UDPSocketOnCloseCallback = (res: GeneralCallbackResult) => void;
    type UDPSocketOnErrorCallback = (
        result: UDPSocketOnErrorCallbackResult,
    ) => void;
    /** 收到消息的事件的回调函数 */
    type UDPSocketOnMessageCallback = (
        result: UDPSocketOnMessageCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type UndoCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type UndoFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type UndoSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type UnlinkCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type UnlinkFailCallback = (result: UnlinkFailCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type UnlinkSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type UnzipCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type UnzipFailCallback = (result: UnzipFailCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type UnzipSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type UpdateGroundOverlayCompleteCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用失败的回调函数 */
    type UpdateGroundOverlayFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type UpdateGroundOverlaySuccessCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type UpdateShareMenuCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type UpdateShareMenuFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type UpdateShareMenuSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type UpdateVoIPChatMuteConfigCompleteCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用失败的回调函数 */
    type UpdateVoIPChatMuteConfigFailCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用成功的回调函数 */
    type UpdateVoIPChatMuteConfigSuccessCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type UpdateWeChatAppCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type UpdateWeChatAppFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type UpdateWeChatAppSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type UploadFileCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type UploadFileFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type UploadFileSuccessCallback = (
        result: UploadFileSuccessCallbackResult,
    ) => void;
    /** 上传进度变化事件的回调函数 */
    type UploadTaskOffProgressUpdateCallback = (
        result: UploadTaskOnProgressUpdateCallbackResult,
    ) => void;
    /** 上传进度变化事件的回调函数 */
    type UploadTaskOnProgressUpdateCallback = (
        result: UploadTaskOnProgressUpdateCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type VibrateLongCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type VibrateLongFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type VibrateLongSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type VibrateShortCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type VibrateShortFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type VibrateShortSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 主线程/Worker 线程向当前线程发送的消息的事件的回调函数 */
    type WorkerOnMessageCallback = (
        result: WorkerOnMessageCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type WriteBLECharacteristicValueCompleteCallback = (
        res: BluetoothError,
    ) => void;
    /** 接口调用失败的回调函数 */
    type WriteBLECharacteristicValueFailCallback = (res: BluetoothError) => void;
    /** 接口调用成功的回调函数 */
    type WriteBLECharacteristicValueSuccessCallback = (
        res: BluetoothError,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type WriteCharacteristicValueCompleteCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用失败的回调函数 */
    type WriteCharacteristicValueFailCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用成功的回调函数 */
    type WriteCharacteristicValueSuccessCallback = (
        res: GeneralCallbackResult,
    ) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type WriteCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type WriteFailCallback = (result: WriteFailCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type WriteFileCompleteCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type WriteFileFailCallback = (result: WriteFileFailCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type WriteFileSuccessCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type WriteNdefMessageCompleteCallback = (res: Nfcrwerror) => void;
    /** 接口调用失败的回调函数 */
    type WriteNdefMessageFailCallback = (res: Nfcrwerror) => void;
    /** 接口调用成功的回调函数 */
    type WriteNdefMessageSuccessCallback = (res: Nfcrwerror) => void;
    /** 接口调用成功的回调函数 */
    type WriteSuccessCallback = (result: WriteSuccessCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type WxGetFileInfoFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type WxGetFileInfoSuccessCallback = (
        result: WxGetFileInfoSuccessCallbackResult,
    ) => void;
    /** 接口调用成功的回调函数 */
    type WxGetSavedFileListSuccessCallback = (
        result: WxGetSavedFileListSuccessCallbackResult,
    ) => void;
    /** 接口调用失败的回调函数 */
    type WxRemoveSavedFileFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用失败的回调函数 */
    type WxSaveFileFailCallback = (res: GeneralCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    type WxStartRecordSuccessCallback = (
        result: StartRecordSuccessCallbackResult,
    ) => void;
    /** 接口调用成功的回调函数 */
    type WxStopRecordSuccessCallback = (res: GeneralCallbackResult) => void;
}
