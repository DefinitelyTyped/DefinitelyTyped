/*! *****************************************************************************
Copyright (c) 2018 Tencent, Inc. All rights reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
***************************************************************************** */

declare namespace wx {
  interface AccessFailCallbackResult {
    /** 错误信息
     *
     * 可选值：
     * - 'fail no such file or directory ${path}': 文件/目录不存在; */
    errMsg: string;
  }
  interface AccessOption {
    /** 要判断是否存在的文件/目录路径 */
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
    cardList: AddCardRequestInfo;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: AddCardCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: AddCardFailCallback;
    /** 接口调用成功的回调函数 */
    success?: AddCardSuccessCallback;
  }
  /** 需要添加的卡券列表 */
  interface AddCardRequestInfo {
    /** 卡券的扩展参数。需进行 JSON 序列化为**字符串**传入 */
    cardExt: CardExt;
    /** 卡券 ID */
    cardId: string;
  }
  /** 卡券添加结果列表 */
  interface AddCardResponseInfo {
    /** 卡券的扩展参数，结构请参考前文 */
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
    cardList: AddCardResponseInfo;
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
    timingFunc?: 'linear' | 'easeIn' | 'easeOut' | 'easeInOut';
  }
  interface AppendFileFailCallbackResult {
    /** 错误信息
     *
     * 可选值：
     * - 'fail no such file or directory, open ${filePath}': 指定的 filePath 文件不存在;
     * - 'fail illegal operation on a directory, open "${filePath}" ': 指定的 filePath 是一个已经存在的目录;
     * - 'fail permission denied, open ${dirPath}': 指定的 filePath 路径没有写权限;
     * - 'fail sdcard not mounted ': 指定的 filePath 是一个已经存在的目录; */
    errMsg: string;
  }
  interface AppendFileOption {
    /** 要追加的文本或二进制数据 */
    data: string | ArrayBuffer;
    /** 要追加内容的文件路径 */
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
     * - 'ucs2/ucs-2/utf16le/utf-16le': 以小端序读取;
     * - 'utf-8/utf8': ;
     * - 'latin1': ; */
    encoding?:
      | 'ascii'
      | 'base64'
      | 'binary'
      | 'hex'
      | 'ucs2/ucs-2/utf16le/utf-16le'
      | 'utf-8/utf8'
      | 'latin1';
    /** 接口调用失败的回调函数 */
    fail?: AppendFileFailCallback;
    /** 接口调用成功的回调函数 */
    success?: AppendFileSuccessCallback;
  }
  /** 用户授权设置信息，详情参考[权限](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/authorize/wx.authorize.html) */
  interface AuthSetting {
    /** 是否授权通讯地址，对应接口 [wx.chooseAddress](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/address/wx.chooseAddress.html) */
    'scope.address': boolean;
    /** 是否授权摄像头，对应[`<camera />`]((camera)) 组件 */
    'scope.camera': boolean;
    /** 是否授权获取发票，对应接口 [wx.chooseInvoice](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/invoice/wx.chooseInvoice.html) */
    'scope.invoice': boolean;
    /** 是否授权发票抬头，对应接口 [wx.chooseInvoiceTitle](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/invoice/wx.chooseInvoiceTitle.html) */
    'scope.invoiceTitle': boolean;
    /** 是否授权录音功能，对应接口 [wx.startRecord](https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/wx.startRecord.html) */
    'scope.record': boolean;
    /** 是否授权用户信息，对应接口 [wx.getUserInfo](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/user-info/wx.getUserInfo.html) */
    'scope.userInfo': boolean;
    /** 是否授权地理位置，对应接口 [wx.getLocation](https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.getLocation.html), [wx.chooseLocation](https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.chooseLocation.html) */
    'scope.userLocation': boolean;
    /** 是否授权微信运动步数，对应接口 [wx.getWeRunData](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/werun/wx.getWeRunData.html) */
    'scope.werun': boolean;
    /** 是否授权保存到相册 [wx.saveImageToPhotosAlbum](https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.saveImageToPhotosAlbum.html), [wx.saveVideoToPhotosAlbum](https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.saveVideoToPhotosAlbum.html) */
    'scope.writePhotosAlbum': boolean;
  }
  interface AuthorizeOption {
    /** 需要获取权限的 scope，详见 [scope 列表]((授权#scope-列表)) */
    scope: string;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: AuthorizeCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: AuthorizeFailCallback;
    /** 接口调用成功的回调函数 */
    success?: AuthorizeSuccessCallback;
  }
  /** 设备服务列表 */
  interface BLECharacteristic {
    /** 该特征值支持的操作类型 */
    properties: Properties;
    /** 蓝牙设备特征值的 uuid */
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
    /** 音频协议。默认值为 'http'，设置 'hls' 可以支持播放 HLS 协议的直播音频。
     *
     * 最低基础库： `1.9.94` */
    protocol: string;
    /** 歌手名，原生音频播放器中的分享功能，分享出去的卡片简介，也将使用该值。 */
    singer: string;
    /** 音频的数据源（{% version('2.2.3') %} 开始支持云文件ID）。默认为空字符串，**当设置了新的 src 时，会自动开始播放**，目前支持的格式有 m4a, aac, mp3, wav。 */
    src: string;
    /** 音频开始播放的位置（单位：s）。 */
    startTime: number;
    /** 音频标题，用于原生音频播放器音频标题（必填）。原生音频播放器中的分享功能，分享出去的卡片标题，也将使用该值。 */
    title: string;
    /** 页面链接，原生音频播放器中的分享功能，分享出去的卡片简介，也将使用该值。 */
    webUrl: string;
  }
  /** 搜索到的设备列表 */
  interface BluetoothDeviceInfo {
    /** 用于区分设备的 id */
    deviceId: string;
    /** 蓝牙设备名称，某些设备可能没有 */
    name: string;
  }
  interface BoundingClientRectCallbackResult {
    /** 节点的下边界坐标 */
    bottom: number;
    /** 节点的 dataset */
    dataset: object;
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
    /** 左边界 */
    left: number;
    /** 右边界 */
    right: number;
    /** 上边界 */
    top: number;
  }
  /** 新搜索到的设备列表 */
  interface CallbackResultBlueToothDevice {
    /** 当前蓝牙设备的信号强度 */
    RSSI: number;
    /** 当前蓝牙设备的广播数据段中的 ManufacturerData 数据段。 */
    advertisData: ArrayBuffer;
    /** 当前蓝牙设备的广播数据段中的 ServiceUUIDs 数据段 */
    advertisServiceUUIDs: Array<string>;
    /** 用于区分设备的 id */
    deviceId: string;
    /** 当前蓝牙设备的广播数据段中的 LocalName 数据段 */
    localName: string;
    /** 蓝牙设备名称，某些设备可能没有 */
    name: string;
    /** 当前蓝牙设备的广播数据段中的 ServiceData 数据段 */
    serviceData: object;
  }
  interface CameraContextStartRecordOption {
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: CameraContextStartRecordCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: CameraContextStartRecordFailCallback;
    /** 接口调用成功的回调函数 */
    success?: CameraContextStartRecordSuccessCallback;
    /** 超过30s或页面 `onHide` 时会结束录像 */
    timeoutCallback?: StartRecordTimeoutCallback;
  }
  /** canvas 组件的绘图上下文 */
  interface CanvasContext {
    /** 填充颜色。用法同 [CanvasContext.setFillStyle()](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.setFillStyle.html)。
     *
     * 最低基础库： `1.9.90` */
    fillStyle: string;
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
    lineCap: number;
    /** 虚线偏移量，初始值为0
     *
     * 最低基础库： `1.9.90` */
    lineDashOffset: number;
    /** 线条的交点样式。用法同 [CanvasContext.setLineJoin()](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.setLineJoin.html)。
     *
     * 最低基础库： `1.9.90` */
    lineJoin: number;
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
    /** 边框颜色。用法同 [CanvasContext.setFillStyle()](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.setStrokeStyle.html)。
     *
     * 最低基础库： `1.9.90` */
    strokeStyle: string;
  }
  interface CanvasGetImageDataOption {
    /** 画布标识，传入 `<canvas>` 组件的 `canvas-id` 属性。 */
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
    /** 图像数据矩形的高度 */
    height: number;
    /** 图像数据矩形的宽度 */
    width: number;
  }
  interface CanvasPutImageDataOption {
    /** 画布标识，传入 `<canvas>` 组件的 canvas-id 属性。 */
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
    /** 画布标识，传入 `<canvas>` 组件的 canvas-id */
    canvasId: string;
    /** 图片的质量，目前仅对 jpg 有效。取值范围为 (0, 1]，不在范围内时当作 1.0 处理。
     *
     * 最低基础库： `1.7.0` */
    quality: number;
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
    fileType?: 'jpg' | 'png';
    /** 指定的画布区域的高度
     *
     * 最低基础库： `1.2.0` */
    height?: number;
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
    /** 生成文件的临时路径 */
    tempFilePath: string;
  }
  /** 卡券的扩展参数。需进行 JSON 序列化为**字符串**传入 */
  interface CardExt {
    /** 签名，商户将接口列表中的参数按照指定方式进行签名,签名方式使用 SHA1，具体签名方案参见：[卡券签名](https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1499332673_Unm7V) */
    signature: string;
    /** 时间戳，东八区时间,UTC+8，单位为秒 */
    timestamp: number;
    /** 用户领取的 code，仅自定义 code 模式的卡券须填写，非自定义 code 模式卡券不可填写，[详情](https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1451025056) */
    code?: string;
    /** 卡券在第三方系统的实际领取时间，为东八区时间戳（UTC+8,精确到秒）。当卡券的有效期类为 DATE_TYPE_FIX_TERM 时专用，标识卡券的实际生效时间，用于解决商户系统内起始时间和领取微信卡券时间不同步的问题。 */
    fixed_begintimestamp?: number;
    /** 随机字符串，由开发者设置传入，加强安全性（若不填写可能被重放请求）。随机字符串，不长于 32 位。推荐使用大小写字母和数字，不同添加请求的 nonce_str 须动态生成，若重复将会导致领取失败。 */
    nonce_str?: string;
    /** 指定领取者的 openid，只有该用户能领取。 bind_openid 字段为 true 的卡券必须填写，bind_openid 字段为 false 不可填写。 */
    openid?: string;
    /** 领取渠道参数，用于标识本次领取的渠道值。 */
    outer_str?: string;
  }
  interface CheckIsSoterEnrolledInDeviceOption {
    /** 认证方式
     *
     * 可选值：
     * - 'fingerPrint': 指纹识别;
     * - 'facial': 人脸识别（暂未支持）;
     * - 'speech': 声纹识别（暂未支持）; */
    checkAuthMode: ('fingerPrint' | 'facial' | 'speech')[];
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: CheckIsSoterEnrolledInDeviceCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: CheckIsSoterEnrolledInDeviceFailCallback;
    /** 接口调用成功的回调函数 */
    success?: CheckIsSoterEnrolledInDeviceSuccessCallback;
  }
  interface CheckIsSoterEnrolledInDeviceSuccessCallbackResult {
    /** 错误信息 */
    errMs: string;
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
     * - 'facial': 人脸识别（暂未支持）;
     * - 'speech': 声纹识别（暂未支持）; */
    supportMode: ('fingerPrint' | 'facial' | 'speech')[];
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
    /** 国标收货地址第一级地址 */
    cityName: string;
    /** 国标收货地址第一级地址 */
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
    sizeType?: ('original' | 'compressed')[];
    /** 选择图片的来源
     *
     * 可选值：
     * - 'album': 从相册选图;
     * - 'camera': 使用相机; */
    sourceType?: ('album' | 'camera')[];
    /** 接口调用成功的回调函数 */
    success?: ChooseImageSuccessCallback;
  }
  interface ChooseImageSuccessCallbackResult {
    /** 图片的本地临时文件路径列表 */
    tempFilePaths: Array<string>;
    /** 图片的本地临时文件列表
     *
     * 最低基础库： `1.2.0` */
    tempFiles: Array<ImageFile>;
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
    /** 用户选中的发票列表 */
    invoiceInfo: InvoiceInfo;
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
    /** 接口调用成功的回调函数 */
    success?: ChooseLocationSuccessCallback;
  }
  interface ChooseLocationSuccessCallbackResult {
    /** 详细地址 */
    address: string;
    /** 纬度，浮点数，范围为-90~90，负数表示南纬。使用 gcj02 国测局坐标系 */
    latitude: string;
    /** 经度，浮点数，范围为-180~180，负数表示西经。使用 gcj02 国测局坐标系 */
    longitude: string;
    /** 位置名称 */
    name: string;
  }
  interface ChooseVideoOption {
    /** 默认拉起的是前置或者后置摄像头。部分 Android 手机下由于系统 ROM 不支持无法生效
     *
     * 可选值：
     * - 'back': 默认拉起后置摄像头;
     * - 'front': 默认拉起前置摄像头; */
    camera?: 'back' | 'front';
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
    sourceType?: ('album' | 'camera')[];
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
    /** 选定视频的临时文件路径 */
    tempFilePath: string;
    /** 返回选定视频的宽度 */
    width: number;
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
  interface CloseOption {
    /** 一个数字值表示关闭连接的状态号，表示连接被关闭的原因。 */
    code?: number;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: CloseCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: CloseFailCallback;
    /** 一个可读的字符串，表示连接被关闭的原因。这个字符串必须是不长于 123 字节的 UTF-8 文本（不是字符）。 */
    reason?: string;
    /** 接口调用成功的回调函数 */
    success?: CloseSuccessCallback;
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
    /** 图片路径，图片的路径，可以是相对路径、临时文件路径、存储文件路径 */
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
  interface ConnectSocketOption {
    /** 开发者服务器 wss 接口地址 */
    url: string;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: ConnectSocketCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: ConnectSocketFailCallback;
    /** HTTP Header，Header 中不能设置 Referer */
    header?: object;
    /** 子协议数组
     *
     * 最低基础库： `1.4.0` */
    protocols?: Array<string>;
    /** 接口调用成功的回调函数 */
    success?: ConnectSocketSuccessCallback;
  }
  interface ConnectWifiOption {
    /** Wi-Fi 设备 BSSID */
    BSSID: string;
    /** Wi-Fi 设备 SSID */
    SSID: string;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: ConnectWifiCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: ConnectWifiFailCallback;
    /** Wi-Fi 设备密码 */
    password?: string;
    /** 接口调用成功的回调函数 */
    success?: ConnectWifiSuccessCallback;
  }
  interface ContextCallbackResult {
    /** 节点对应的 Context 对象 */
    context: object;
  }
  interface CopyFileFailCallbackResult {
    /** 错误信息
     *
     * 可选值：
     * - 'fail permission denied, copyFile ${srcPath} -> ${destPath}': 指定目标文件路径没有写权限;
     * - 'fail no such file or directory, copyFile ${srcPath} -> ${destPath}': 源文件不存在，或目标文件路径的上层目录不存在; */
    errMsg: string;
  }
  interface CopyFileOption {
    /** 目标文件路径 */
    destPath: string;
    /** 源文件路径，只可以是普通文件 */
    srcPath: string;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: CopyFileCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: CopyFileFailCallback;
    /** 接口调用成功的回调函数 */
    success?: CopyFileSuccessCallback;
  }
  interface CreateAnimationOption {
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
      | 'linear'
      | 'ease'
      | 'ease-in'
      | 'ease-in-out'
      | 'ease-out'
      | 'step-start'
      | 'step-end';
    transformOrigin?: string;
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
  /** 选项 */
  interface CreateIntersectionObserverOption {
    /** 初始的相交比例，如果调用时检测到的相交比例与这个值不相等且达到阈值，则会触发一次监听器的回调函数。 */
    initialRatio?: number;
    /** 是否同时观测多个目标节点（而非一个），如果设为 true ，observe 的 targetSelector 将选中多个节点（注意：同时选中过多节点将影响渲染性能）
     *
     * 最低基础库： `2.0.0` */
    observeAll?: boolean;
    /** 一个数值数组，包含所有阈值。 */
    thresholds?: Array<number>;
  }
  /** 弹幕内容 */
  interface Danmu {
    /** 弹幕文字 */
    text: string;
    /** 弹幕颜色 */
    color?: string;
  }
  /** 上报的自定义数据。 */
  interface Data {
    /** 配置中的字段名 */
    key: string;
    /** 上报的数据 */
    value: any;
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
  /** 指定 marker 移动到的目标点 */
  interface DestinationOption {
    /** 纬度 */
    latitude: number;
    /** 经度 */
    longitude: number;
  }
  interface DownloadFileOption {
    /** 下载资源的 url */
    url: string;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: DownloadFileCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: DownloadFileFailCallback;
    /** 指定文件下载后存储的路径
     *
     * 最低基础库： `1.8.0` */
    filePath?: string;
    /** HTTP 请求的 Header，Header 中不能设置 Referer */
    header?: object;
    /** 接口调用成功的回调函数 */
    success?: DownloadFileSuccessCallback;
  }
  interface DownloadFileSuccessCallbackResult {
    /** 开发者服务器返回的 HTTP 状态码 */
    statusCode: number;
    /** 临时文件路径。如果没传入 filePath 指定文件存储路径，则下载后的文件会存储到一个临时文件 */
    tempFilePath: string;
  }
  interface DownloadTaskOnHeadersReceivedCallbackResult {
    /** 开发者服务器返回的 HTTP Response Header */
    header: object;
  }
  interface DownloadTaskOnProgressUpdateCallbackResult {
    /** 下载进度百分比 */
    progress: number;
    /** 预期需要下载的数据总长度，单位 Bytes */
    totalBytesExpectedToWrite: number;
    /** 已经下载的数据长度，单位 Bytes */
    totalBytesWritten: number;
  }
  interface ExitFullScreenOption {
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: ExitFullScreenCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: ExitFullScreenFailCallback;
    /** 接口调用成功的回调函数 */
    success?: ExitFullScreenSuccessCallback;
  }
  interface ExtInfo {
    /** 第三方平台自定义的数据 */
    extConfig: object;
  }
  interface Fields {
    /** 指定样式名列表，返回节点对应样式名的当前值
     *
     * 最低基础库： `2.1.0` */
    computedStyle?: Array<string>;
    /** 是否返回节点对应的 Context 对象
     *
     * 最低基础库： `2.4.2` */
    context?: boolean;
    /** 是否返回节点 dataset */
    dataset?: boolean;
    /** 是否返回节点 id */
    id?: boolean;
    /** 指定属性名列表，返回节点对应属性名的当前属性值（只能获得组件文档中标注的常规属性值，id class style 和事件绑定的属性值不可获取） */
    properties?: Array<string>;
    /** 是否返回节点布局位置（`left` `right` `top` `bottom`） */
    rect?: boolean;
    /** 否 是否返回节点的 `scrollLeft` `scrollTop`，节点必须是 `scroll-view` 或者 `viewport` */
    scrollOffset?: boolean;
    /** 是否返回节点尺寸（`width` `height`） */
    size?: boolean;
  }
  interface FileSystemManagerGetFileInfoOption {
    /** 要读取的文件路径 */
    filePath: string;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: FileSystemManagerGetFileInfoCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: FileSystemManagerGetFileInfoFailCallback;
    /** 接口调用成功的回调函数 */
    success?: FileSystemManagerGetFileInfoSuccessCallback;
  }
  interface FileSystemManagerGetFileInfoSuccessCallbackResult {
    /** 文件大小，以字节为单位 */
    size: number;
  }
  interface FileSystemManagerGetSavedFileListOption {
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: FileSystemManagerGetSavedFileListCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: FileSystemManagerGetSavedFileListFailCallback;
    /** 接口调用成功的回调函数 */
    success?: FileSystemManagerGetSavedFileListSuccessCallback;
  }
  interface FileSystemManagerGetSavedFileListSuccessCallbackResult {
    /** 文件数组 */
    fileList: FileSystemManagerGetSavedFileListSuccessCallbackResultFileItem;
  }
  /** 文件数组 */
  interface FileSystemManagerGetSavedFileListSuccessCallbackResultFileItem {
    /** 文件保存时的时间戳，从1970/01/01 08:00:00 到当前时间的秒数 */
    createTime: number;
    /** 本地路径 */
    filePath: string;
    /** 本地文件大小，以字节为单位 */
    size: number;
  }
  interface FileSystemManagerRemoveSavedFileOption {
    /** 需要删除的文件路径 */
    filePath: string;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: FileSystemManagerRemoveSavedFileCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: FileSystemManagerRemoveSavedFileFailCallback;
    /** 接口调用成功的回调函数 */
    success?: FileSystemManagerRemoveSavedFileSuccessCallback;
  }
  interface FileSystemManagerSaveFileOption {
    /** 临时存储文件路径 */
    tempFilePath: string;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: FileSystemManagerSaveFileCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: FileSystemManagerSaveFileFailCallback;
    /** 要存储的文件路径 */
    filePath?: string;
    /** 接口调用成功的回调函数 */
    success?: FileSystemManagerSaveFileSuccessCallback;
  }
  interface FileSystemManagerSaveFileSuccessCallbackResult {
    /** 存储后的文件路径 */
    savedFilePath: number;
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
    audioSources: (
      | 'auto'
      | 'buildInMic'
      | 'headsetMic'
      | 'mic'
      | 'camcorder'
      | 'voice_communication'
      | 'voice_recognition')[];
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
    /** 设备服务列表 */
    characteristics: BLECharacteristic;
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
    services: BLEService;
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
    beacons: Array<IBeaconInfo>;
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
    devices: GetBluetoothDevicesSuccessCallbackResultBlueToothDevice;
  }
  /** uuid 对应的的已连接设备列表 */
  interface GetBluetoothDevicesSuccessCallbackResultBlueToothDevice {
    /** 当前蓝牙设备的信号强度 */
    RSSI: number;
    /** 当前蓝牙设备的广播数据段中的 ManufacturerData 数据段。 */
    advertisData: ArrayBuffer;
    /** 当前蓝牙设备的广播数据段中的 ServiceUUIDs 数据段 */
    advertisServiceUUIDs: Array<string>;
    /** 用于区分设备的 id */
    deviceId: string;
    /** 当前蓝牙设备的广播数据段中的 LocalName 数据段 */
    localName: string;
    /** 蓝牙设备名称，某些设备可能没有 */
    name: string;
    /** 当前蓝牙设备的广播数据段中的 ServiceData 数据段 */
    serviceData: object;
  }
  interface GetCenterLocationOption {
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: GetCenterLocationCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: GetCenterLocationFailCallback;
    /** 接口调用成功的回调函数 */
    success?: GetCenterLocationSuccessCallback;
  }
  interface GetCenterLocationSuccessCallbackResult {
    /** 纬度 */
    latitude: number;
    /** 经度 */
    longitude: number;
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
    services: Array<string>;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: GetConnectedBluetoothDevicesCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: GetConnectedBluetoothDevicesFailCallback;
    /** 接口调用成功的回调函数 */
    success?: GetConnectedBluetoothDevicesSuccessCallback;
  }
  interface GetConnectedBluetoothDevicesSuccessCallbackResult {
    /** 搜索到的设备列表 */
    devices: BluetoothDeviceInfo;
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
    extConfig: object;
  }
  interface GetFileInfoFailCallbackResult {
    /** 错误信息
     *
     * 可选值：
     * - 'fail file not exist': 指定的 filePath 找不到文件; */
    errMsg: string;
  }
  interface GetHCEStateOption {
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: GetHCEStateCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: GetHCEStateFailCallback;
    /** 接口调用成功的回调函数 */
    success?: GetHCEStateSuccessCallback;
  }
  interface GetImageInfoOption {
    /** 图片的路径，可以是相对路径、临时文件路径、存储文件路径、网络图片路径 */
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
      | 'up'
      | 'up-mirrored'
      | 'down'
      | 'down-mirrored'
      | 'left-mirrored'
      | 'right'
      | 'right-mirrored'
      | 'left';
    /** 图片的本地路径 */
    path: string;
    /** 图片格式
     *
     * 最低基础库： `1.9.90` */
    type: string;
    /** 图片原始宽度，单位px。不考虑旋转。 */
    width: number;
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
     * - 'unknown': Android 下不常见的网络类型;
     * - 'none': 无网络; */
    networkType: 'wifi' | '2g' | '3g' | '4g' | 'unknown' | 'none';
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
    northeast: number;
    /** 西南角经纬度 */
    southwest: number;
  }
  interface GetSavedFileInfoOption {
    /** 文件路径 */
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
  interface GetSettingOption {
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: GetSettingCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: GetSettingFailCallback;
    /** 接口调用成功的回调函数 */
    success?: GetSettingSuccessCallback;
  }
  interface GetSettingSuccessCallbackResult {
    /** [AuthSetting](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/setting/AuthSetting.html)
     *
     * 用户授权结果 */
    authSetting: AuthSetting;
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
  interface GetShareInfoSuccessCallbackResult {
    /** 包括敏感数据在内的完整转发信息的加密数据，详细见[加密数据解密算法]((开放数据校验与解密)) */
    encryptedData: string;
    /** 错误信息 */
    errMsg: string;
    /** 加密算法的初始向量，详细见[加密数据解密算法]((开放数据校验与解密)) */
    iv: string;
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
    keys: Array<string>;
    /** 限制的空间大小，单位 KB */
    limitSize: number;
  }
  interface GetStorageInfoSyncOption {
    /** 当前占用的空间大小, 单位 KB */
    currentSize: number;
    /** 当前 storage 中所有的 key */
    keys: Array<string>;
    /** 限制的空间大小，单位 KB */
    limitSize: number;
  }
  interface GetStorageOption {
    /** 本地缓存中指定的 key */
    key: string;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: GetStorageCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: GetStorageFailCallback;
    /** 接口调用成功的回调函数 */
    success?: GetStorageSuccessCallback;
  }
  interface GetStorageSuccessCallbackResult {
    /** key对应的内容 */
    data: any;
  }
  interface GetSystemInfoOption {
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: GetSystemInfoCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: GetSystemInfoFailCallback;
    /** 接口调用成功的回调函数 */
    success?: GetSystemInfoSuccessCallback;
  }
  interface GetSystemInfoSuccessCallbackResult {
    /** 客户端基础库版本
     *
     * 最低基础库： `1.1.0` */
    SDKVersion: string;
    /** (仅Android小游戏) 性能等级，-2 或 0：该设备无法运行小游戏，-1：性能未知，>=1 设备性能值，该值越高，设备性能越好 (目前设备最高不到50)
     *
     * 最低基础库： `1.8.0` */
    benchmarkLevel: number;
    /** 手机品牌
     *
     * 最低基础库： `1.5.0` */
    brand: string;
    /** 用户字体大小设置。以“我-设置-通用-字体大小”中的设置为准，单位 px。
     *
     * 最低基础库： `1.5.0` */
    fontSizeSetting: number;
    /** 微信设置的语言 */
    language: string;
    /** 手机型号 */
    model: string;
    /** 设备像素比 */
    pixelRatio: number;
    /** 客户端平台 */
    platform: string;
    /** 屏幕高度
     *
     * 最低基础库： `1.1.0` */
    screenHeight: number;
    /** 屏幕宽度
     *
     * 最低基础库： `1.1.0` */
    screenWidth: number;
    /** 状态栏的高度
     *
     * 最低基础库： `1.9.0` */
    statusBarHeight: number;
    /** 操作系统版本 */
    system: string;
    /** 微信版本号 */
    version: string;
    /** 可使用窗口高度 */
    windowHeight: number;
    /** 可使用窗口宽度 */
    windowWidth: number;
  }
  interface GetSystemInfoSyncResult {
    /** 客户端基础库版本
     *
     * 最低基础库： `1.1.0` */
    SDKVersion: string;
    /** (仅Android小游戏) 性能等级，-2 或 0：该设备无法运行小游戏，-1：性能未知，>=1 设备性能值，该值越高，设备性能越好 (目前设备最高不到50)
     *
     * 最低基础库： `1.8.0` */
    benchmarkLevel: number;
    /** 手机品牌
     *
     * 最低基础库： `1.5.0` */
    brand: string;
    /** 用户字体大小设置。以“我-设置-通用-字体大小”中的设置为准，单位 px。
     *
     * 最低基础库： `1.5.0` */
    fontSizeSetting: number;
    /** 微信设置的语言 */
    language: string;
    /** 手机型号 */
    model: string;
    /** 设备像素比 */
    pixelRatio: number;
    /** 客户端平台 */
    platform: string;
    /** 屏幕高度
     *
     * 最低基础库： `1.1.0` */
    screenHeight: number;
    /** 屏幕宽度
     *
     * 最低基础库： `1.1.0` */
    screenWidth: number;
    /** 状态栏的高度
     *
     * 最低基础库： `1.9.0` */
    statusBarHeight: number;
    /** 操作系统版本 */
    system: string;
    /** 微信版本号 */
    version: string;
    /** 可使用窗口高度 */
    windowHeight: number;
    /** 可使用窗口宽度 */
    windowWidth: number;
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
    lang?: 'en' | 'zh_CN' | 'zh_TW';
    /** 接口调用成功的回调函数 */
    success?: GetUserInfoSuccessCallback;
    /** 是否带上登录态信息。当 withCredentials 为 true 时，要求此前有调用过 wx.login 且登录态尚未过期，此时返回的数据会包含 encryptedData, iv 等敏感信息；当 withCredentials 为 false 时，不要求有登录态，返回的数据不包含 encryptedData, iv 等敏感信息。 */
    withCredentials?: boolean;
  }
  interface GetUserInfoSuccessCallbackResult {
    /** 包括敏感数据在内的完整用户信息的加密数据，详见 [用户数据的签名验证和加解密]((signature#加密数据解密算法)) */
    encryptedData: string;
    /** 加密算法的初始向量，详见 [用户数据的签名验证和加解密]((signature#加密数据解密算法)) */
    iv: string;
    /** 不包括敏感信息的原始数据字符串，用于计算签名 */
    rawData: string;
    /** 使用 sha1( rawData + sessionkey ) 得到字符串，用于校验用户信息，详见 [用户数据的签名验证和加解密]((signature)) */
    signature: string;
    /** [UserInfo](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/user-info/UserInfo.html)
     *
     * 用户信息对象，不包含 openid 等敏感信息 */
    userInfo: UserInfo;
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
    /** 包括敏感数据在内的完整用户信息的加密数据，详细见[加密数据解密算法]((signature))。解密后得到的数据结构见后文 */
    encryptedData: string;
    /** 加密算法的初始向量，详细见[加密数据解密算法]((signature)) */
    iv: string;
  }
  interface GetWifiListOption {
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: GetWifiListCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: GetWifiListFailCallback;
    /** 接口调用成功的回调函数 */
    success?: GetWifiListSuccessCallback;
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
  /** 图片的本地临时文件列表
   *
   * 最低基础库： `1.2.0` */
  interface ImageFile {
    /** 本地临时文件路径 */
    path: string;
    /** 本地临时文件大小，单位 B */
    size: number;
  }
  interface IncludePointsOption {
    /** 要显示在可视区域内的坐标点列表 */
    points: MapPostion;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: IncludePointsCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: IncludePointsFailCallback;
    /** 坐标点形成的矩形边缘到地图边缘的距离，单位像素。格式为[上,右,下,左]，安卓上只能识别数组第一项，上下左右的padding一致。开发者工具暂不支持padding参数。 */
    padding?: Array<number>;
    /** 接口调用成功的回调函数 */
    success?: IncludePointsSuccessCallback;
  }
  /** InnerAudioContext 实例，可通过 [wx.createInnerAudioContext](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/wx.createInnerAudioContext.html) 接口获取实例。
*
* **支持格式**
*
*
* | 格式 | iOS  | Android |
* | ---- | ---- | ------- |
* | flac | x    | √       |
* | m4a  | x    | √       |
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
    /** 是否遵循系统静音开关，默认为 `true`。当此参数为 `false` 时，即使用户打开了静音开关，也能继续发出声音 */
    obeyMuteSwitch: boolean;
    /** 当前是是否暂停或停止状态（只读） */
    paused: boolean;
    /** 音频资源的地址，用于直接播放。{% version('2.2.3') %} 开始支持云文件ID */
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
     *
     * 可选值：
     * - 10001: 系统错误;
     * - 10002: 网络错误;
     * - 10003: 文件错误;
     * - 10004: 格式错误;
     * - -1: 未知错误; */
    errCode: 10001 | 10002 | 10003 | 10004 | -1;
  }
  /** 相交区域的边界 */
  interface IntersectionRectResult {
    /** 下边界 */
    bottom: number;
    /** 左边界 */
    left: number;
    /** 右边界 */
    right: number;
    /** 上边界 */
    top: number;
  }
  /** 用户选中的发票列表 */
  interface InvoiceInfo {
    /** 所选发票卡券的 cardId */
    cardId: string;
    /** 所选发票卡券的加密 code，报销方可以通过 cardId 和 encryptCode 获得报销发票的信息。 */
    encryptCode: string;
    /** 发票方的 appId */
    publisherAppId: string;
  }
  /** 启动参数 */
  interface LaunchOptionsApp {
    /** 启动小程序的路径 */
    path: string;
    /** 启动小程序的 query 参数 */
    query: object;
    /** 来源信息。从另一个小程序、公众号或 App 进入小程序时返回。否则返回 `{}`。(参见后文注意) */
    referrerInfo: ReferrerInfo;
    /** 启动小程序的[场景值]((scene)) */
    scene: number;
    /** shareTicket，详见[获取更多转发信息]((转发#获取更多转发信息)) */
    shareTicket: string;
  }
  interface LivePlayerContextPauseOption {
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: LivePlayerContextPauseCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: LivePlayerContextPauseFailCallback;
    /** 接口调用成功的回调函数 */
    success?: LivePlayerContextPauseSuccessCallback;
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
  interface LivePlayerContextResumeOption {
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: LivePlayerContextResumeCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: LivePlayerContextResumeFailCallback;
    /** 接口调用成功的回调函数 */
    success?: LivePlayerContextResumeSuccessCallback;
  }
  interface LivePlayerContextStopOption {
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: LivePlayerContextStopCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: LivePlayerContextStopFailCallback;
    /** 接口调用成功的回调函数 */
    success?: LivePlayerContextStopSuccessCallback;
  }
  interface LivePusherContextPauseOption {
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: LivePusherContextPauseCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: LivePusherContextPauseFailCallback;
    /** 接口调用成功的回调函数 */
    success?: LivePusherContextPauseSuccessCallback;
  }
  interface LivePusherContextResumeOption {
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: LivePusherContextResumeCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: LivePusherContextResumeFailCallback;
    /** 接口调用成功的回调函数 */
    success?: LivePusherContextResumeSuccessCallback;
  }
  interface LivePusherContextStartOption {
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: StartCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: StartFailCallback;
    /** 接口调用成功的回调函数 */
    success?: StartSuccessCallback;
  }
  interface LivePusherContextStopOption {
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: LivePusherContextStopCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: LivePusherContextStopFailCallback;
    /** 接口调用成功的回调函数 */
    success?: LivePusherContextStopSuccessCallback;
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
    /** 接口调用成功的回调函数 */
    success?: LoadFontFaceSuccessCallback;
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
    /** 用户登录凭证（有效期五分钟）。开发者需要在开发者服务器后台调用 [code2Session]((code2Session))，使用 code 换取 openid 和 session_key 等信息 */
    code: string;
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
  /** 要显示在可视区域内的坐标点列表 */
  interface MapPostion {
    /** 纬度 */
    latitude: number;
    /** 经度 */
    longitude: number;
  }
  /** 小程序帐号信息 */
  interface MiniProgram {
    /** 小程序 appId */
    appId: string;
  }
  interface MkdirFailCallbackResult {
    /** 错误信息
     *
     * 可选值：
     * - 'fail no such file or directory ${dirPath}': 上级目录不存在;
     * - 'fail permission denied, open ${dirPath}': 指定的 filePath 路径没有写权限;
     * - 'fail file already exists ${dirPath}': 有同名文件或目录; */
    errMsg: string;
  }
  interface MkdirOption {
    /** 创建的目录路径 */
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
  interface MuteOption {
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: MuteCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: MuteFailCallback;
    /** 接口调用成功的回调函数 */
    success?: MuteSuccessCallback;
  }
  interface NavigateBackMiniProgramOption {
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: NavigateBackMiniProgramCompleteCallback;
    /** 需要返回给上一个小程序的数据，上一个小程序可在 `App.onShow` 中获取到这份数据。 [详情]((小程序 App))。 */
    extraData?: object;
    /** 接口调用失败的回调函数 */
    fail?: NavigateBackMiniProgramFailCallback;
    /** 接口调用成功的回调函数 */
    success?: NavigateBackMiniProgramSuccessCallback;
  }
  interface NavigateBackOption {
    /** 返回的页面数，如果 delta 大于现有页面数，则返回到首页。 */
    delta: number;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: NavigateBackCompleteCallback;
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
    envVersion?: 'develop' | 'trial' | 'release';
    /** 需要传递给目标小程序的数据，目标小程序可在 `App.onLaunch`，`App.onShow` 中获取到这份数据。 */
    extraData?: object;
    /** 接口调用失败的回调函数 */
    fail?: NavigateToMiniProgramFailCallback;
    /** 打开的页面路径，如果为空则打开首页 */
    path?: string;
    /** 接口调用成功的回调函数 */
    success?: NavigateToMiniProgramSuccessCallback;
  }
  interface NavigateToOption {
    /** 需要跳转的应用内非 tabBar 的页面的路径, 路径后可以带参数。参数与路径之间使用 `?` 分隔，参数键与参数值用 `=` 相连，不同参数用 `&` 分隔；如 'path?key=value&key2=value2' */
    url: string;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: NavigateToCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: NavigateToFailCallback;
    /** 接口调用成功的回调函数 */
    success?: NavigateToSuccessCallback;
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
  interface ObserveCallbackResult {
    /** 目标边界 */
    boundingClientRect: BoundingClientRectResult;
    /** 相交比例 */
    intersectionRatio: number;
    /** 相交区域的边界 */
    intersectionRect: IntersectionRectResult;
    /** 参照区域的边界 */
    relativeRect: RelativeRectResult;
    /** 相交检测时的时间戳 */
    time: number;
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
    object: ResultOption;
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
  interface OnBeaconServiceChangeCallbackResult {
    /** 服务目前是否可用 */
    available: boolean;
    /** 目前是否处于搜索状态 */
    discovering: boolean;
  }
  interface OnBeaconUpdateCallbackResult {
    /** 当前搜寻到的所有 iBeacon 设备列表 */
    beacons: Array<IBeaconInfo>;
  }
  interface OnBluetoothAdapterStateChangeCallbackResult {
    /** 蓝牙适配器是否可用 */
    available: boolean;
    /** 蓝牙适配器是否处于搜索状态 */
    discovering: boolean;
  }
  interface OnBluetoothDeviceFoundCallbackResult {
    /** 新搜索到的设备列表 */
    devices: CallbackResultBlueToothDevice;
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
  interface OnDeviceMotionChangeCallbackResult {
    /** 当 手机坐标 X/Y 和 地球 X/Y 重合时，绕着 Z 轴转动的夹角为 alpha，范围值为 [0, 2*PI)。逆时针转动为正。 */
    alpha: number;
    /** 当手机坐标 Y/Z 和地球 Y/Z 重合时，绕着 X 轴转动的夹角为 beta。范围值为 [-1*PI, PI) 。顶部朝着地球表面转动为正。也有可能朝着用户为正。 */
    beta: number;
    /** 当手机 X/Z 和地球 X/Z 重合时，绕着 Y 轴转动的夹角为 gamma。范围值为 [-1*PI/2, PI/2)。右边朝着地球表面转动为正。 */
    gamma: number;
  }
  interface OnFrameRecordedCallbackResult {
    /** 录音分片数据 */
    frameBuffer: ArrayBuffer;
    /** 当前帧是否正常录音结束前的最后一帧 */
    isLastFrame: boolean;
  }
  interface OnGetWifiListCallbackResult {
    /** Wi-Fi 列表数据 */
    wifiList: Array<WifiInfo>;
  }
  interface OnGyroscopeChangeCallbackResult {
    res: Result;
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
  interface OnLocalServiceResolveFailCallbackResult {
    /** 服务的名称 */
    serviceName: string;
    /** 服务的类型 */
    serviceType: string;
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
    /** 当前是否有网络链接 */
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
    networkType: 'wifi' | '2g' | '3g' | '4g' | 'unknown' | 'none';
  }
  interface OnOpenCallbackResult {
    /** 连接成功的 HTTP 响应 Header
     *
     * 最低基础库： `2.0.0` */
    header: object;
  }
  interface OnSocketMessageCallbackResult {
    /** 服务器返回的消息 */
    data: string | ArrayBuffer;
  }
  interface OnSocketOpenCallbackResult {
    /** 连接成功的 HTTP 响应 Header
     *
     * 最低基础库： `2.0.0` */
    header: object;
  }
  interface OnStopCallbackResult {
    /** 录音文件的临时路径 */
    tempFilePath: string;
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
    /** 接口调用成功的回调函数 */
    success?: OpenBluetoothAdapterSuccessCallback;
  }
  interface OpenCardOption {
    /** 需要打开的卡券列表 */
    cardList: OpenCardRequestInfo;
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
  interface OpenDocumentOption {
    /** 文件路径，可通过 downloadFile 获得 */
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
    fileType?: 'doc' | 'docx' | 'xls' | 'xlsx' | 'ppt' | 'pptx' | 'pdf';
    /** 接口调用成功的回调函数 */
    success?: OpenDocumentSuccessCallback;
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
  interface OpenSettingOption {
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: OpenSettingCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: OpenSettingFailCallback;
    /** 接口调用成功的回调函数 */
    success?: OpenSettingSuccessCallback;
  }
  interface OpenSettingSuccessCallbackResult {
    /** [AuthSetting](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/setting/AuthSetting.html)
     *
     * 用户授权结果 */
    authSetting: AuthSetting;
  }
  interface PageScrollToOption {
    /** 滚动到页面的目标位置，单位 px */
    scrollTop: number;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: PageScrollToCompleteCallback;
    /** 滚动动画的时长，单位 ms */
    duration?: number;
    /** 接口调用失败的回调函数 */
    fail?: PageScrollToFailCallback;
    /** 接口调用成功的回调函数 */
    success?: PageScrollToSuccessCallback;
  }
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
  interface PauseVoiceOption {
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: PauseVoiceCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: PauseVoiceFailCallback;
    /** 接口调用成功的回调函数 */
    success?: PauseVoiceSuccessCallback;
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
    /** 需要播放的语音文件的文件路径 */
    filePath: string;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: PlayVoiceCompleteCallback;
    /** 指定录音时长，到达指定的录音时长后会自动停止录音，单位：秒
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
    /** 需要预览的图片链接列表。{% version('2.2.3') %} 起支持云文件ID。 */
    urls: Array<string>;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: PreviewImageCompleteCallback;
    /** 当前显示图片的链接 */
    current?: string;
    /** 接口调用失败的回调函数 */
    fail?: PreviewImageFailCallback;
    /** 接口调用成功的回调函数 */
    success?: PreviewImageSuccessCallback;
  }
  /** 该特征值支持的操作类型 */
  interface Properties {
    /** 该特征值是否支持 indicate 操作 */
    indicate: boolean;
    /** 该特征值是否支持 notify 操作 */
    notify: boolean;
    /** 该特征值是否支持 read 操作 */
    read: boolean;
    /** 该特征值是否支持 write 操作 */
    write: boolean;
  }
  interface ReLaunchOption {
    /** 需要跳转的应用内页面路径，路径后可以带参数。参数与路径之间使用?分隔，参数键与参数值用=相连，不同参数用&分隔；如 'path?key=value&key2=value2'，如果跳转的页面路径是 tabBar 页面则不能带参数 */
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
  interface ReadFileFailCallbackResult {
    /** 错误信息
     *
     * 可选值：
     * - 'fail no such file or directory, open ${filePath}': 指定的 filePath 所在目录不存在;
     * - 'fail permission denied, open ${dirPath}': 指定的 filePath 路径没有读权限; */
    errMsg: string;
  }
  interface ReadFileOption {
    /** 要读取的文件的路径 */
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
     * - 'ucs2/ucs-2/utf16le/utf-16le': 以小端序读取;
     * - 'utf-8/utf8': ;
     * - 'latin1': ; */
    encoding?:
      | 'ascii'
      | 'base64'
      | 'binary'
      | 'hex'
      | 'ucs2/ucs-2/utf16le/utf-16le'
      | 'utf-8/utf8'
      | 'latin1';
    /** 接口调用失败的回调函数 */
    fail?: ReadFileFailCallback;
    /** 接口调用成功的回调函数 */
    success?: ReadFileSuccessCallback;
  }
  interface ReadFileSuccessCallbackResult {
    /** 文件内容 */
    data: string | ArrayBuffer;
  }
  interface ReaddirFailCallbackResult {
    /** 错误信息
     *
     * 可选值：
     * - 'fail no such file or directory ${dirPath}': 目录不存在;
     * - 'fail not a directory ${dirPath}': dirPath 不是目录;
     * - 'fail permission denied, open ${dirPath}': 指定的 filePath 路径没有读权限; */
    errMsg: string;
  }
  interface ReaddirOption {
    /** 要读取的目录路径 */
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
    files: Array<string>;
  }
  interface RecorderManagerOnErrorCallbackResult {
    /** 错误信息 */
    errMsg: string;
  }
  interface RecorderManagerStartOption {
    /** 指定录音的音频输入源，可通过 [wx.getAvailableAudioSources()](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/wx.getAvailableAudioSources.html) 获取当前可用的音频源
     *
     * 可选值：
     * - 'auto': 自动设置，默认使用手机麦克风，插上耳麦后自动切换使用耳机麦克风，所有平台适用;
     * - 'buildInMic': 手机麦克风，仅限 iOS;
     * - 'headsetMic': 耳机麦克风，仅限 iOS;
     * - 'mic': 麦克风（没插耳麦时是手机麦克风，插耳麦时是耳机麦克风），仅限 Android;
     * - 'camcorder': 同 mic，适用于录制音视频内容，仅限 Android;
     * - 'voice_communication': 同 mic，适用于实时沟通，仅限 Android;
     * - 'voice_recognition': 同 mic，适用于语音识别，仅限 Android;
     *
     * 最低基础库： `2.1.0` */
    audioSource?:
      | 'auto'
      | 'buildInMic'
      | 'headsetMic'
      | 'mic'
      | 'camcorder'
      | 'voice_communication'
      | 'voice_recognition';
    /** 录音的时长，单位 ms，最大值 600000（10 分钟） */
    duration?: number;
    /** 编码码率，有效值见下表格 */
    encodeBitRate?: number;
    /** 音频格式
     *
     * 可选值：
     * - 'mp3': mp3 格式;
     * - 'aac': aac 格式; */
    format?: 'mp3' | 'aac';
    /** 指定帧大小，单位 KB。传入 frameSize 后，每录制指定帧大小的内容后，会回调录制的文件内容，不指定则不会回调。暂仅支持 mp3 格式。 */
    frameSize?: number;
    /** 录音通道数
     *
     * 可选值：
     * - 1: 1 个通道;
     * - 2: 2 个通道; */
    numberOfChannels?: 1 | 2;
    /** 采样率
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
    /** 需要跳转的应用内非 tabBar 的页面的路径, 路径后可以带参数。参数与路径之间使用 `?` 分隔，参数键与参数值用 `=` 相连，不同参数用 `&` 分隔；如 'path?key=value&key2=value2' */
    url: string;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: RedirectToCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: RedirectToFailCallback;
    /** 接口调用成功的回调函数 */
    success?: RedirectToSuccessCallback;
  }
  /** 来源信息。从另一个小程序、公众号或 App 进入小程序时返回。否则返回 `{}`。(参见后文注意) */
  interface ReferrerInfo {
    /** 来源小程序、公众号或 App 的 appId */
    appId: string;
    /** 来源小程序传过来的数据，scene=1037或1038时支持 */
    extraData: object;
  }
  /** 来源信息。从另一个小程序、公众号或 App 进入小程序时返回。否则返回 `{}`。(参见后文注意) */
  interface ReferrerInfoOption {
    /** 来源小程序、公众号或 App 的 appId */
    appId: string;
    /** 来源小程序传过来的数据，scene=1037或1038时支持 */
    extraData: object;
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
  /** 用来扩展（或收缩）参照节点布局区域的边界 */
  interface RelativeToMargins {
    /** 节点布局区域的下边界 */
    bottom?: number;
    /** 节点布局区域的左边界 */
    left?: number;
    /** 节点布局区域的右边界 */
    right?: number;
    /** 节点布局区域的上边界 */
    top?: number;
  }
  /** 用来扩展（或收缩）参照节点布局区域的边界 */
  interface RelativeToViewportMargins {
    /** 节点布局区域的下边界 */
    bottom?: number;
    /** 节点布局区域的左边界 */
    left?: number;
    /** 节点布局区域的右边界 */
    right?: number;
    /** 节点布局区域的上边界 */
    top?: number;
  }
  interface RemoveSavedFileFailCallbackResult {
    /** 错误信息
     *
     * 可选值：
     * - 'fail file not exist': 指定的 tempFilePath 找不到文件; */
    errMsg: string;
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
    /** 新文件路径 */
    newPath: string;
    /** 源文件路径，可以是普通文件或目录 */
    oldPath: string;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: RenameCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: RenameFailCallback;
    /** 接口调用成功的回调函数 */
    success?: RenameSuccessCallback;
  }
  interface RequestOption {
    /** 开发者服务器接口地址 */
    url: string;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: RequestCompleteCallback;
    /** 请求的参数 */
    data?: string | object | ArrayBuffer;
    /** 返回的数据格式
     *
     * 可选值：
     * - 'json': 返回的数据为 JSON，返回后会对返回的数据进行一次 JSON.parse;
     * - '其他': 不对返回的内容进行 JSON.parse; */
    dataType?: 'json' | '其他';
    /** 接口调用失败的回调函数 */
    fail?: RequestFailCallback;
    /** 设置请求的 header，header 中不能设置 Referer。
     *
     * `content-type` 默认为 `application/json` */
    header?: object;
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
      | 'OPTIONS'
      | 'GET'
      | 'HEAD'
      | 'POST'
      | 'PUT'
      | 'DELETE'
      | 'TRACE'
      | 'CONNECT';
    /** 响应的数据类型
     *
     * 可选值：
     * - 'text': 响应的数据为文本;
     * - 'arraybuffer': 响应的数据为 ArrayBuffer;
     *
     * 最低基础库： `1.7.0` */
    responseType?: 'text' | 'arraybuffer';
    /** 接口调用成功的回调函数 */
    success?: RequestSuccessCallback;
  }
  interface RequestPaymentOption {
    /** 随机字符串，长度为32个字符以下 */
    nonceStr: string;
    /** 统一下单接口返回的 prepay_id 参数值，提交格式如：prepay_id=*** */
    package: string;
    /** 签名，具体签名方案参见 [小程序支付接口文档](https://pay.weixin.qq.com/wiki/doc/api/wxa/wxa_api.php?chapter=7_7&index=3) */
    paySign: string;
    /** 时间戳，从 1970 年 1 月 1 日 00:00:00 至今的秒数，即当前的时间 */
    timeStamp: string;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: RequestPaymentCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: RequestPaymentFailCallback;
    /** 签名算法
     *
     * 可选值：
     * - 'MD5': MD5;
     * - 'HMAC-SHA256': HMAC-SHA256; */
    signType?: 'MD5' | 'HMAC-SHA256';
    /** 接口调用成功的回调函数 */
    success?: RequestPaymentSuccessCallback;
  }
  interface RequestSuccessCallbackResult {
    /** 开发者服务器返回的数据 */
    data: string | object | ArrayBuffer;
    /** 开发者服务器返回的 HTTP Response Header
     *
     * 最低基础库： `1.2.0` */
    header: object;
    /** 开发者服务器返回的 HTTP 状态码 */
    statusCode: number;
  }
  interface RequestTaskOnHeadersReceivedCallbackResult {
    /** 开发者服务器返回的 HTTP Response Header */
    header: object;
  }
  interface Result {
    /** x 轴的角速度 */
    x: number;
    /** y 轴的角速度 */
    y: number;
    /** z 轴的角速度 */
    z: number;
  }
  interface ResultOption {
    /** 小程序切前台的路径 */
    path: string;
    /** 小程序切前台的 query 参数 */
    query: object;
    /** 来源信息。从另一个小程序、公众号或 App 进入小程序时返回。否则返回 `{}`。(参见后文注意) */
    referrerInfo: ReferrerInfoOption;
    /** 小程序切前台的[场景值]((scene)) */
    scene: number;
    /** shareTicket，详见[获取更多转发信息]((转发#获取更多转发信息)) */
    shareTicket: string;
  }
  interface ResumeBGMOption {
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: ResumeBGMCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: ResumeBGMFailCallback;
    /** 接口调用成功的回调函数 */
    success?: ResumeBGMSuccessCallback;
  }
  interface RmdirFailCallbackResult {
    /** 错误信息
     *
     * 可选值：
     * - 'fail no such file or directory ${dirPath}': 目录不存在;
     * - 'fail directory not empty': 目录不为空;
     * - 'fail permission denied, open ${dirPath}': 指定的 dirPath 路径没有写权限; */
    errMsg: string;
  }
  interface RmdirOption {
    /** 要删除的目录路径 */
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
  interface SaveFileFailCallbackResult {
    /** 错误信息
     *
     * 可选值：
     * - 'fail tempFilePath file not exist': 指定的 tempFilePath 找不到文件;
     * - 'fail permission denied, open "${filePath}"': 指定的 filePath 路径没有写权限;
     * - 'fail no such file or directory "${dirPath}"': 上级目录不存在; */
    errMsg: string;
  }
  interface SaveImageToPhotosAlbumOption {
    /** 图片文件路径，可以是临时文件路径或永久文件路径，不支持网络图片路径 */
    filePath: string;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: SaveImageToPhotosAlbumCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: SaveImageToPhotosAlbumFailCallback;
    /** 接口调用成功的回调函数 */
    success?: SaveImageToPhotosAlbumSuccessCallback;
  }
  interface SaveVideoToPhotosAlbumOption {
    /** 视频文件路径，可以是临时文件路径也可以是永久文件路径 */
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
    scanType?: ('barCode' | 'qrCode' | 'datamatrix' | 'pdf417')[];
    /** 接口调用成功的回调函数 */
    success?: ScanCodeSuccessCallback;
  }
  interface ScanCodeSuccessCallbackResult {
    /** 所扫码的字符集 */
    charSet: string;
    /** 当所扫的码为当前小程序的合法二维码时，会返回此字段，内容为二维码携带的 path */
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
      | 'QR_CODE'
      | 'AZTEC'
      | 'CODABAR'
      | 'CODE_39'
      | 'CODE_93'
      | 'CODE_128'
      | 'DATA_MATRIX'
      | 'EAN_8'
      | 'EAN_13'
      | 'ITF'
      | 'MAXICODE'
      | 'PDF_417'
      | 'RSS_14'
      | 'RSS_EXPANDED'
      | 'UPC_A'
      | 'UPC_E'
      | 'UPC_EAN_EXTENSION'
      | 'WX_CODE'
      | 'CODE_25';
  }
  interface ScrollOffsetCallbackResult {
    /** 节点的 dataset */
    dataset: object;
    /** 节点的 ID */
    id: string;
    /** 节点的水平滚动位置 */
    scrollLeft: number;
    /** 节点的竖直滚动位置 */
    scrollTop: number;
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
  interface SendOption {
    /** 需要发送的内容 */
    data: string | ArrayBuffer;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: SendCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: SendFailCallback;
    /** 接口调用成功的回调函数 */
    success?: SendSuccessCallback;
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
    /** 音量大小 */
    volume: string;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: SetBGMVolumeCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: SetBGMVolumeFailCallback;
    /** 接口调用成功的回调函数 */
    success?: SetBGMVolumeSuccessCallback;
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
  interface SetBackgroundTextStyleOption {
    /** 下拉背景字体、loading 图的样式。
     *
     * 可选值：
     * - 'dark': dark 样式;
     * - 'light': light 样式; */
    textStyle: 'dark' | 'light';
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: SetBackgroundTextStyleCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: SetBackgroundTextStyleFailCallback;
    /** 接口调用成功的回调函数 */
    success?: SetBackgroundTextStyleSuccessCallback;
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
  interface SetNavigationBarColorOption {
    /** 动画效果 */
    animation: AnimationOption;
    /** 背景颜色值，有效值为十六进制颜色 */
    backgroundColor: string;
    /** 前景颜色值，包括按钮、标题、状态栏的颜色，仅支持 #ffffff 和 #000000 */
    frontColor: string;
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
  interface SetStorageOption {
    /** 需要存储的内容。只支持原生类型、Date、及能够通过`JSON.stringify`序列化的对象。 */
    data: any;
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
    /** 图片路径，icon 大小限制为 40kb，建议尺寸为 81px * 81px，当 postion 为 top 时，此参数无效，不支持网络图片 */
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
    backgroundColor: string;
    /** tabBar上边框的颜色， 仅支持 black/white */
    borderStyle: string;
    /** tab 上的文字默认颜色，HexColor */
    color: string;
    /** tab 上的文字选中时的颜色，HexColor */
    selectedColor: string;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: SetTabBarStyleCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: SetTabBarStyleFailCallback;
    /** 接口调用成功的回调函数 */
    success?: SetTabBarStyleSuccessCallback;
  }
  interface SetTopBarTextOption {
    /** 置顶栏文字 */
    text: object;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: SetTopBarTextCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: SetTopBarTextFailCallback;
    /** 接口调用成功的回调函数 */
    success?: SetTopBarTextSuccessCallback;
  }
  interface SetWifiListOption {
    /** 提供预设的 Wi-Fi 信息列表 */
    wifiList: WifiData;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: SetWifiListCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: SetWifiListFailCallback;
    /** 接口调用成功的回调函数 */
    success?: SetWifiListSuccessCallback;
  }
  interface ShowActionSheetOption {
    /** 按钮的文字数组，数组长度最大为 6 */
    itemList: Array<string>;
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
    /** 提示的内容 */
    content: string;
    /** 提示的标题 */
    title: string;
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
    /** 接口调用失败的回调函数 */
    fail?: ShowModalFailCallback;
    /** 是否显示取消按钮 */
    showCancel?: boolean;
    /** 接口调用成功的回调函数 */
    success?: ShowModalSuccessCallback;
  }
  interface ShowModalSuccessCallbackResult {
    /** 为 true 时，表示用户点击了取消（用于 Android 系统区分点击蒙层关闭还是点击取消按钮关闭）
     *
     * 最低基础库： `1.1.0` */
    cancel: boolean;
    /** 为 true 时，表示用户点击了确定按钮 */
    confirm: boolean;
  }
  interface ShowNavigationBarLoadingOption {
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: ShowNavigationBarLoadingCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: ShowNavigationBarLoadingFailCallback;
    /** 接口调用成功的回调函数 */
    success?: ShowNavigationBarLoadingSuccessCallback;
  }
  interface ShowShareMenuOption {
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: ShowShareMenuCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: ShowShareMenuFailCallback;
    /** 接口调用成功的回调函数 */
    success?: ShowShareMenuSuccessCallback;
    /** 是否使用带 shareTicket 的转发[详情]((转发#获取更多转发信息)) */
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
     * - 'loading': 显示加载图标，此时 title 文本最多显示 7 个汉字长度;
     * - 'none': 不显示图标，此时 title 文本最多可显示两行，{% version('1.9.0') %}及以上版本支持; */
    icon?: 'success' | 'loading' | 'none';
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
  interface SnapshotOption {
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: SnapshotCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: SnapshotFailCallback;
    /** 接口调用成功的回调函数 */
    success?: SnapshotSuccessCallback;
  }
  interface SocketTaskOnErrorCallbackResult {
    /** 错误信息 */
    errMsg: string;
  }
  interface SocketTaskOnMessageCallbackResult {
    /** 服务器返回的消息 */
    data: string | ArrayBuffer;
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
    interval?: 'game' | 'ui' | 'normal';
    /** 接口调用成功的回调函数 */
    success?: StartAccelerometerSuccessCallback;
  }
  interface StartBeaconDiscoveryOption {
    /** iBeacon 设备广播的 uuid 列表 */
    uuids: Array<string>;
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
    /** 是否允许重复上报同一设备。如果允许重复上报，则 `wx.onBlueToothDeviceFound` 方法会多次上报同一设备，但是 RSSI 值会有不同。 */
    allowDuplicatesKey?: boolean;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: StartBluetoothDevicesDiscoveryCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: StartBluetoothDevicesDiscoveryFailCallback;
    /** 上报设备的间隔。0 表示找到新设备立即上报，其他数值根据传入的间隔上报。 */
    interval?: number;
    /** 要搜索但蓝牙设备主 service 的 uuid 列表。某些蓝牙设备会广播自己的主 service 的 uuid。如果设置此参数，则只搜索广播包有对应 uuid 的主服务的蓝牙设备。建议主要通过该参数过滤掉周边不需要处理的其他蓝牙设备。 */
    services?: Array<string>;
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
    interval?: 'game' | 'ui' | 'normal';
    /** 接口调用成功的回调函数 */
    success?: StartDeviceMotionListeningSuccessCallback;
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
    interval?: 'game' | 'ui' | 'normal';
    /** 接口调用成功的回调函数 */
    success?: StartGyroscopeSuccessCallback;
  }
  interface StartHCEOption {
    /** 需要注册到系统的 AID 列表 */
    aid_list: Array<string>;
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
  interface StartPullDownRefreshOption {
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: StartPullDownRefreshCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: StartPullDownRefreshFailCallback;
    /** 接口调用成功的回调函数 */
    success?: StartPullDownRefreshSuccessCallback;
  }
  interface StartRecordSuccessCallbackResult {
    /** 录音文件的临时路径 */
    tempFilePath: string;
  }
  interface StartRecordTimeoutCallbackResult {
    /** 封面图片文件的临时路径 */
    tempThumbPath: string;
    /** 视频的文件的临时路径 */
    tempVideoPath: string;
  }
  interface StartSoterAuthenticationOption {
    /** 挑战因子。挑战因子为调用者为此次生物鉴权准备的用于签名的字符串关键识别信息，将作为 `resultJSON` 的一部分，供调用者识别本次请求。例如：如果场景为请求用户对某订单进行授权确认，则可以将订单号填入此参数。 */
    challenge: string;
    /** 请求使用的可接受的生物认证方式
     *
     * 可选值：
     * - 'fingerPrint': 指纹识别;
     * - 'facial': 人脸识别（暂未支持）;
     * - 'speech': 声纹识别（暂未支持）; */
    requestAuthModes: ('fingerPrint' | 'facial' | 'speech')[];
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
     * - 'fail no such file or directory ${path}': 文件不存在; */
    errMsg: string;
  }
  interface StatOption {
    /** 文件/目录路径 */
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
    /** [Stats](https://developers.weixin.qq.com/miniprogram/dev/api/file/Stats.html)|Object
     *
     * 当 recursive 为 false 时，res.stats 是一个 Stats 对象。当 recursive 为 true 且 path 是一个目录的路径时，res.stats 是一个 Object，key 以 path 为根路径的相对路径，value 是该路径对应的 Stats 对象。 */
    stats: Stats | object;
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
      | 'linear'
      | 'ease'
      | 'ease-in'
      | 'ease-in-out'
      | 'ease-out'
      | 'step-start'
      | 'step-end';
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
  interface StopPullDownRefreshOption {
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: StopPullDownRefreshCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: StopPullDownRefreshFailCallback;
    /** 接口调用成功的回调函数 */
    success?: StopPullDownRefreshSuccessCallback;
  }
  interface StopRecordOption {
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: StopRecordCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: StopRecordFailCallback;
    /** 接口调用成功的回调函数 */
    success?: StopRecordSuccessCallback;
  }
  interface StopRecordSuccessCallbackResult {
    /** 封面图片文件的临时路径 */
    tempThumbPath: string;
    /** 视频的文件的临时路径 */
    tempVideoPath: string;
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
  interface SwitchCameraOption {
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: SwitchCameraCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: SwitchCameraFailCallback;
    /** 接口调用成功的回调函数 */
    success?: SwitchCameraSuccessCallback;
  }
  interface SwitchTabOption {
    /** 需要跳转的 tabBar 页面的路径（需在 app.json 的 [tabBar]((config#tabbar)) 字段定义的页面），路径后不能带参数。 */
    url: string;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: SwitchTabCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: SwitchTabFailCallback;
    /** 接口调用成功的回调函数 */
    success?: SwitchTabSuccessCallback;
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
    quality?: 'high' | 'normal' | 'low';
    /** 接口调用成功的回调函数 */
    success?: TakePhotoSuccessCallback;
  }
  interface TakePhotoSuccessCallbackResult {
    /** 照片文件的临时路径 */
    tempImagePath: string;
  }
  interface TextMetrics {
    /** 文本的宽度 */
    width: number;
  }
  interface ToggleTorchOption {
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: ToggleTorchCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: ToggleTorchFailCallback;
    /** 接口调用成功的回调函数 */
    success?: ToggleTorchSuccessCallback;
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
    animationEnd?: Function;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: TranslateMarkerCompleteCallback;
    /** 动画持续时长，平移与旋转分别计算 */
    duration?: number;
    /** 接口调用失败的回调函数 */
    fail?: TranslateMarkerFailCallback;
    /** 接口调用成功的回调函数 */
    success?: TranslateMarkerSuccessCallback;
  }
  interface UnlinkFailCallbackResult {
    /** 错误信息
     *
     * 可选值：
     * - 'fail permission denied, open ${path}': 指定的 path 路径没有读权限;
     * - 'fail no such file or directory ${path}': 文件不存在;
     * - 'fail operation not permitted, unlink ${filePath}': 传入的 filePath 是一个目录; */
    errMsg: string;
  }
  interface UnlinkOption {
    /** 要删除的文件路径 */
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
    /** 目标目录路径 */
    targetPath: string;
    /** 源文件路径，只可以是 zip 压缩文件 */
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
    parameterList: UpdatableMessageFrontEndParameter;
  }
  interface UpdateShareMenuOption {
    /** 动态消息的 activityId。通过 [createActivityId]((createActivityId)) 接口获取
     *
     * 最低基础库： `2.4.0` */
    activityId?: string;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: UpdateShareMenuCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: UpdateShareMenuFailCallback;
    /** 是否是动态消息，详见[动态消息]((updatable-message))
     *
     * 最低基础库： `2.4.0` */
    isUpdatableMessage?: boolean;
    /** 接口调用成功的回调函数 */
    success?: UpdateShareMenuSuccessCallback;
    /** 动态消息的模板信息
     *
     * 最低基础库： `2.4.0` */
    templateInfo?: UpdatableMessageFrontEndTemplateInfo;
    /** 是否使用带 shareTicket 的转发[详情]((转发#获取更多转发信息)) */
    withShareTicket?: boolean;
  }
  interface UploadFileOption {
    /** 要上传文件资源的路径 */
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
    formData?: object;
    /** HTTP 请求 Header，Header 中不能设置 Referer */
    header?: object;
    /** 接口调用成功的回调函数 */
    success?: UploadFileSuccessCallback;
  }
  interface UploadFileSuccessCallbackResult {
    /** 开发者服务器返回的数据 */
    data: string;
    /** 开发者服务器返回的 HTTP 状态码 */
    statusCode: number;
  }
  interface UploadTaskOnHeadersReceivedCallbackResult {
    /** 开发者服务器返回的 HTTP Response Header */
    header: object;
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
    language: 'en' | 'zh_CN' | 'zh_TW';
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
    /** Wi-Fi 是否安全 */
    secure: boolean;
    /** Wi-Fi 信号强度 */
    signalStrength: number;
  }
  interface WorkerOnMessageCallbackResult {
    /** 主线程/Worker 线程向当前线程发送的消息 */
    message: object;
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
  interface WriteFileFailCallbackResult {
    /** 错误信息
     *
     * 可选值：
     * - 'fail no such file or directory, open ${filePath}': 指定的 filePath 所在目录不存在;
     * - 'fail permission denied, open ${dirPath}': 指定的 filePath 路径没有写权限; */
    errMsg: string;
  }
  interface WriteFileOption {
    /** 要写入的文本或二进制数据 */
    data: string | ArrayBuffer;
    /** 要写入的文件路径 */
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
     * - 'ucs2/ucs-2/utf16le/utf-16le': 以小端序读取;
     * - 'utf-8/utf8': ;
     * - 'latin1': ; */
    encoding?:
      | 'ascii'
      | 'base64'
      | 'binary'
      | 'hex'
      | 'ucs2/ucs-2/utf16le/utf-16le'
      | 'utf-8/utf8'
      | 'latin1';
    /** 接口调用失败的回调函数 */
    fail?: WriteFileFailCallback;
    /** 接口调用成功的回调函数 */
    success?: WriteFileSuccessCallback;
  }
  interface WxGetFileInfoOption {
    /** 本地文件路径 */
    filePath: string;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: WxGetFileInfoCompleteCallback;
    /** 计算文件摘要的算法
     *
     * 可选值：
     * - 'md5': md5 算法;
     * - 'sha1': sha1 算法; */
    digestAlgorithm?: 'md5' | 'sha1';
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
  }
  interface WxGetSavedFileListOption {
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: WxGetSavedFileListCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: WxGetSavedFileListFailCallback;
    /** 接口调用成功的回调函数 */
    success?: WxGetSavedFileListSuccessCallback;
  }
  interface WxGetSavedFileListSuccessCallbackResult {
    /** 文件数组，每一项是一个 FileItem */
    fileList: WxGetSavedFileListSuccessCallbackResultFileItem;
  }
  /** 文件数组，每一项是一个 FileItem */
  interface WxGetSavedFileListSuccessCallbackResultFileItem {
    /** 文件保存时的时间戳，从1970/01/01 08:00:00 到当前时间的秒数 */
    createTime: number;
    /** 本地路径 */
    filePath: string;
    /** 本地文件大小，以字节为单位 */
    size: number;
  }
  interface WxRemoveSavedFileOption {
    /** 需要删除的文件路径 */
    filePath: string;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: WxRemoveSavedFileCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: WxRemoveSavedFileFailCallback;
    /** 接口调用成功的回调函数 */
    success?: WxRemoveSavedFileSuccessCallback;
  }
  interface WxSaveFileOption {
    /** 需要保存的文件的临时路径 */
    tempFilePath: string;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: WxSaveFileCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: WxSaveFileFailCallback;
    /** 接口调用成功的回调函数 */
    success?: WxSaveFileSuccessCallback;
  }
  interface WxSaveFileSuccessCallbackResult {
    /** 存储后的文件路径 */
    savedFilePath: number;
  }
  interface WxStartRecordOption {
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: WxStartRecordCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: WxStartRecordFailCallback;
    /** 接口调用成功的回调函数 */
    success?: WxStartRecordSuccessCallback;
  }
  interface Animation {
    /** [Array.<Object> Animation.export()](Animation.export.md)
     *
     * 导出动画队列。**export 方法每次调用后会清掉之前的动画操作。** */
    export(): Array<Object>;
    /** [[Animation](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.html) Animation.backgroundColor(string value)](Animation.backgroundColor.md)
     *
     * 设置背景色 */
    backgroundColor(
      /** 颜色值 */
      value: string,
    ): Animation;
    /** [[Animation](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.html) Animation.bottom(number|string value)](Animation.bottom.md)
     *
     * 设置 bottom 值 */
    bottom(
      /** 长度值，如果传入 number 则默认使用 px，可传入其他自定义单位的长度值 */
      value: number | string,
    ): Animation;
    /** [[Animation](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.html) Animation.height(number|string value)](Animation.height.md)
     *
     * 设置高度 */
    height(
      /** 长度值，如果传入 number 则默认使用 px，可传入其他自定义单位的长度值 */
      value: number | string,
    ): Animation;
    /** [[Animation](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.html) Animation.left(number|string value)](Animation.left.md)
     *
     * 设置 left 值 */
    left(
      /** 长度值，如果传入 number 则默认使用 px，可传入其他自定义单位的长度值 */
      value: number | string,
    ): Animation;
    /** [[Animation](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.html) Animation.matrix()](Animation.matrix.md)
     *
     * 同 [transform-function matrix](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/matrix) */
    matrix(): Animation;
    /** [[Animation](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.html) Animation.matrix3d()](Animation.matrix3d.md)
     *
     * 同 [transform-function matrix3d](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/matrix3d) */
    matrix3d(): Animation;
    /** [[Animation](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.html) Animation.opacity(number value)](Animation.opacity.md)
     *
     * 设置透明度 */
    opacity(
      /** 透明度，范围 0-1 */
      value: number,
    ): Animation;
    /** [[Animation](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.html) Animation.right(number|string value)](Animation.right.md)
     *
     * 设置 right 值 */
    right(
      /** 长度值，如果传入 number 则默认使用 px，可传入其他自定义单位的长度值 */
      value: number | string,
    ): Animation;
    /** [[Animation](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.html) Animation.rotate(number angle)](Animation.rotate.md)
     *
     * 从原点顺时针旋转一个角度 */
    rotate(
      /** 旋转的角度。范围 [-180, 180] */
      angle: number,
    ): Animation;
    /** [[Animation](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.html) Animation.rotate3d(number x, number y, number z, number angle)](Animation.rotate3d.md)
     *
     * 从 X 轴顺时针旋转一个角度 */
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
    /** [[Animation](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.html) Animation.rotateX(number angle)](Animation.rotateX.md)
     *
     * 从 X 轴顺时针旋转一个角度 */
    rotateX(
      /** 旋转的角度。范围 [-180, 180] */
      angle: number,
    ): Animation;
    /** [[Animation](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.html) Animation.rotateY(number angle)](Animation.rotateY.md)
     *
     * 从 Y 轴顺时针旋转一个角度 */
    rotateY(
      /** 旋转的角度。范围 [-180, 180] */
      angle: number,
    ): Animation;
    /** [[Animation](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.html) Animation.rotateZ(number angle)](Animation.rotateZ.md)
     *
     * 从 Z 轴顺时针旋转一个角度 */
    rotateZ(
      /** 旋转的角度。范围 [-180, 180] */
      angle: number,
    ): Animation;
    /** [[Animation](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.html) Animation.scale(number sx, number sy)](Animation.scale.md)
     *
     * 缩放 */
    scale(
      /** 当仅有 sx 参数时，表示在 X 轴、Y 轴同时缩放sx倍数 */
      sx: number,
      /** 在 Y 轴缩放 sy 倍数 */
      sy?: number,
    ): Animation;
    /** [[Animation](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.html) Animation.scale3d(number sx, number sy, number sz)](Animation.scale3d.md)
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
    /** [[Animation](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.html) Animation.scaleX(number scale)](Animation.scaleX.md)
     *
     * 缩放 X 轴 */
    scaleX(
      /** X 轴的缩放倍数 */
      scale: number,
    ): Animation;
    /** [[Animation](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.html) Animation.scaleY(number scale)](Animation.scaleY.md)
     *
     * 缩放 Y 轴 */
    scaleY(
      /** Y 轴的缩放倍数 */
      scale: number,
    ): Animation;
    /** [[Animation](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.html) Animation.scaleZ(number scale)](Animation.scaleZ.md)
     *
     * 缩放 Z 轴 */
    scaleZ(
      /** Z 轴的缩放倍数 */
      scale: number,
    ): Animation;
    /** [[Animation](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.html) Animation.skew(number ax, number ay)](Animation.skew.md)
     *
     * 对 X、Y 轴坐标进行倾斜 */
    skew(
      /** 对 X 轴坐标倾斜的角度，范围 [-180, 180] */
      ax: number,
      /** 对 Y 轴坐标倾斜的角度，范围 [-180, 180] */
      ay: number,
    ): Animation;
    /** [[Animation](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.html) Animation.skewX(number angle)](Animation.skewX.md)
     *
     * 对 X 轴坐标进行倾斜 */
    skewX(
      /** 倾斜的角度，范围 [-180, 180] */
      angle: number,
    ): Animation;
    /** [[Animation](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.html) Animation.skewY(number angle)](Animation.skewY.md)
     *
     * 对 Y 轴坐标进行倾斜 */
    skewY(
      /** 倾斜的角度，范围 [-180, 180] */
      angle: number,
    ): Animation;
    /** [[Animation](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.html) Animation.step(Object object)](Animation.step.md)
     *
     * 表示一组动画完成。可以在一组动画中调用任意多个动画方法，一组动画中的所有动画会同时开始，一组动画完成后才会进行下一组动画。 */
    step(option?: StepOption): Animation;
    /** [[Animation](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.html) Animation.top(number|string value)](Animation.top.md)
     *
     * 设置 top 值 */
    top(
      /** 长度值，如果传入 number 则默认使用 px，可传入其他自定义单位的长度值 */
      value: number | string,
    ): Animation;
    /** [[Animation](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.html) Animation.translate(number tx, number ty)](Animation.translate.md)
     *
     * 平移变换 */
    translate(
      /** 当仅有该参数时表示在 X 轴偏移 tx，单位 px */
      tx?: number,
      /** 在 Y 轴平移的距离，单位为 px */
      ty?: number,
    ): Animation;
    /** [[Animation](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.html) Animation.translate3d(number tx, number ty, number tz)](Animation.translate3d.md)
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
    /** [[Animation](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.html) Animation.translateX(number translation)](Animation.translateX.md)
     *
     * 对 X 轴平移 */
    translateX(
      /** 在 X 轴平移的距离，单位为 px */
      translation: number,
    ): Animation;
    /** [[Animation](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.html) Animation.translateY(number translation)](Animation.translateY.md)
     *
     * 对 Y 轴平移 */
    translateY(
      /** 在 Y 轴平移的距离，单位为 px */
      translation: number,
    ): Animation;
    /** [[Animation](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.html) Animation.translateZ(number translation)](Animation.translateZ.md)
     *
     * 对 Z 轴平移 */
    translateZ(
      /** 在 Z 轴平移的距离，单位为 px */
      translation: number,
    ): Animation;
    /** [[Animation](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.html) Animation.width(number|string value)](Animation.width.md)
     *
     * 设置宽度 */
    width(
      /** 长度值，如果传入 number 则默认使用 px，可传入其他自定义单位的长度值 */
      value: number | string,
    ): Animation;
  }
  interface AudioContext {
    /** [AudioContext.pause()](AudioContext.pause.md)
     *
     * 暂停音频。 */
    pause(): void;
    /** [AudioContext.play()](AudioContext.play.md)
     *
     * 播放音频。 */
    play(): void;
    /** [AudioContext.seek(number position)](AudioContext.seek.md)
     *
     * 跳转到指定位置。 */
    seek(
      /** 跳转位置，单位 s */
      position: number,
    ): void;
    /** [AudioContext.setSrc(string src)](AudioContext.setSrc.md)
     *
     * 设置音频地址 */
    setSrc(
      /** 音频地址 */
      src: string,
    ): void;
  }
  interface BackgroundAudioManager {
    /** [BackgroundAudioManager.onCanplay(function callback)](BackgroundAudioManager.onCanplay.md)
     *
     * 监听背景音频进入可播放状态事件。但不保证后面可以流畅播放 */
    onCanplay(
      /** 背景音频进入可播放状态事件的回调函数 */
      callback: BackgroundAudioManagerOnCanplayCallback,
    ): void;
    /** [BackgroundAudioManager.onEnded(function callback)](BackgroundAudioManager.onEnded.md)
     *
     * 监听背景音频自然播放结束事件 */
    onEnded(
      /** 背景音频自然播放结束事件的回调函数 */
      callback: BackgroundAudioManagerOnEndedCallback,
    ): void;
    /** [BackgroundAudioManager.onError(function callback)](BackgroundAudioManager.onError.md)
     *
     * 监听背景音频播放错误事件 */
    onError(
      /** 背景音频播放错误事件的回调函数 */
      callback: BackgroundAudioManagerOnErrorCallback,
    ): void;
    /** [BackgroundAudioManager.onNext(function callback)](BackgroundAudioManager.onNext.md)
     *
     * 监听用户在系统音乐播放面板点击下一曲事件（仅iOS） */
    onNext(
      /** 用户在系统音乐播放面板点击下一曲事件的回调函数 */
      callback: OnNextCallback,
    ): void;
    /** [BackgroundAudioManager.onPause(function callback)](BackgroundAudioManager.onPause.md)
     *
     * 监听背景音频暂停事件 */
    onPause(
      /** 背景音频暂停事件的回调函数 */
      callback: BackgroundAudioManagerOnPauseCallback,
    ): void;
    /** [BackgroundAudioManager.onPlay(function callback)](BackgroundAudioManager.onPlay.md)
     *
     * 监听背景音频播放事件 */
    onPlay(
      /** 背景音频播放事件的回调函数 */
      callback: BackgroundAudioManagerOnPlayCallback,
    ): void;
    /** [BackgroundAudioManager.onPrev(function callback)](BackgroundAudioManager.onPrev.md)
     *
     * 监听用户在系统音乐播放面板点击上一曲事件（仅iOS） */
    onPrev(
      /** 用户在系统音乐播放面板点击上一曲事件的回调函数 */
      callback: OnPrevCallback,
    ): void;
    /** [BackgroundAudioManager.onSeeked(function callback)](BackgroundAudioManager.onSeeked.md)
     *
     * 监听背景音频完成跳转操作事件 */
    onSeeked(
      /** 背景音频完成跳转操作事件的回调函数 */
      callback: BackgroundAudioManagerOnSeekedCallback,
    ): void;
    /** [BackgroundAudioManager.onSeeking(function callback)](BackgroundAudioManager.onSeeking.md)
     *
     * 监听背景音频开始跳转操作事件 */
    onSeeking(
      /** 背景音频开始跳转操作事件的回调函数 */
      callback: BackgroundAudioManagerOnSeekingCallback,
    ): void;
    /** [BackgroundAudioManager.onStop(function callback)](BackgroundAudioManager.onStop.md)
     *
     * 监听背景音频停止事件 */
    onStop(
      /** 背景音频停止事件的回调函数 */
      callback: BackgroundAudioManagerOnStopCallback,
    ): void;
    /** [BackgroundAudioManager.onTimeUpdate(function callback)](BackgroundAudioManager.onTimeUpdate.md)
     *
     * 监听背景音频播放进度更新事件 */
    onTimeUpdate(
      /** 背景音频播放进度更新事件的回调函数 */
      callback: BackgroundAudioManagerOnTimeUpdateCallback,
    ): void;
    /** [BackgroundAudioManager.onWaiting(function callback)](BackgroundAudioManager.onWaiting.md)
     *
     * 监听音频加载中事件。当音频因为数据不足，需要停下来加载时会触发 */
    onWaiting(
      /** 音频加载中事件的回调函数 */
      callback: BackgroundAudioManagerOnWaitingCallback,
    ): void;
    /** [BackgroundAudioManager.pause()](BackgroundAudioManager.pause.md)
     *
     * 暂停音乐 */
    pause(): void;
    /** [BackgroundAudioManager.play()](BackgroundAudioManager.play.md)
     *
     * 播放音乐 */
    play(): void;
    /** [BackgroundAudioManager.seek(number currentTime)](BackgroundAudioManager.seek.md)
     *
     * 跳转到指定位置 */
    seek(
      /** 跳转的位置，单位 s。精确到小数点后 3 位，即支持 ms 级别精确度 */
      currentTime: number,
    ): void;
    /** [BackgroundAudioManager.stop()](BackgroundAudioManager.stop.md)
     *
     * 停止音乐 */
    stop(): void;
  }
  interface CameraContext {
    /** [CameraContext.startRecord(Object object)](CameraContext.startRecord.md)
     *
     * 开始录像 */
    startRecord(option: CameraContextStartRecordOption): void;
    /** [CameraContext.stopRecord(Object object)](CameraContext.stopRecord.md)
     *
     * 结束录像 */
    stopRecord(option?: StopRecordOption): void;
    /** [CameraContext.takePhoto(Object object)](CameraContext.takePhoto.md)
     *
     * 拍摄照片 */
    takePhoto(option: TakePhotoOption): void;
  }
  interface CanvasContext {
    /** [CanvasContext.arc(number x, number y, number r, number sAngle, number eAngle, number counterclockwise)](CanvasContext.arc.md)
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
* ![]((canvas/arc.png))
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
      counterclockwise?: number,
    ): void;
    /** [CanvasContext.arcTo(number x1, number y1, number x2, number y2, number radius)](CanvasContext.arcTo.md)
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
    /** [CanvasContext.beginPath()](CanvasContext.beginPath.md)
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
* ![]((canvas/fill-path.png)) */
    beginPath(): void;
    /** [CanvasContext.bezierCurveTo()](CanvasContext.bezierCurveTo.md)
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
* ![]((canvas/bezier-curve.png))
*
* 针对 moveTo(20, 20) bezierCurveTo(20, 100, 200, 100, 200, 20) 的三个关键坐标如下：
*
* - 红色：起始点(20, 20)
* - 蓝色：两个控制点(20, 100) (200, 100)
* - 绿色：终止点(200, 20) */
    bezierCurveTo(): void;
    /** [CanvasContext.clearRect(number x, number y, number width, number height)](CanvasContext.clearRect.md)
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
* ![]((canvas/clear-rect.png)) */
    clearRect(
      /** 矩形路径左上角的横坐标 */
      x: number,
      /** 矩形路径左上角的横坐标 */
      y: number,
      /** 矩形路径的宽度 */
      width: number,
      /** 矩形路径的高度 */
      height: number,
    ): void;
    /** [CanvasContext.clip()](CanvasContext.clip.md)
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
* ![]((canvas/clip.png))
*
* 最低基础库： `1.6.0` */
    clip(): void;
    /** [CanvasContext.closePath()](CanvasContext.closePath.md)
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
* ![]((canvas/close-line.png))
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
* ![]((canvas/close-path.png)) */
    closePath(): void;
    /** [CanvasContext.createPattern(string image, string repetition)](CanvasContext.createPattern.md)
     *
     * 对指定的图像创建模式的方法，可在指定的方向上重复元图像
     *
     * 最低基础库： `1.9.90` */
    createPattern(
      /** 重复的图像源，仅支持包内路径和临时路径 */
      image: string,
      /** 如何重复图像 */
      repetition: string,
    ): void;
    /** [CanvasContext.draw(boolean reserve, function callback)](CanvasContext.draw.md)
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
* ![]((canvas/reserve.png))
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
* ![]((canvas/un-reserve.png)) */
    draw(
      /** 本次绘制是否接着上一次绘制。即 reserve 参数为 false，则在本次调用绘制之前 native 层会先清空画布再继续绘制；若 reserve 参数为 true，则保留当前画布上的内容，本次调用 drawCanvas 绘制的内容覆盖在上面，默认 false。 */
      reserve: boolean,
      /** 绘制完成后执行的回调函数 */
      callback: Function,
    ): void;
    /** [CanvasContext.draw(boolean reserve, function callback)](CanvasContext.draw.md)
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
* ![]((canvas/reserve.png))
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
* ![]((canvas/un-reserve.png)) */
    draw(
      /** 绘制完成后执行的回调函数 */
      callback: Function,
    ): void;
    /** [CanvasContext.drawImage(string imageResource, number dx, number dy, number dWidth, number dHeight, number sx, number sy, number sWidth, number sHeight)](CanvasContext.drawImage.md)
*
* 绘制图像到画布
*
* **示例代码**
*
*
*
* 有三个版本的写法：
*
* - drawImage(dx, dy)
* - drawImage(dx, dy, dWidth, dHeight)
* - drawImage(sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight) 从 1.9.0 起支持
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
* ![]((canvas/draw-image.png)) */
    drawImage(
      /** 所要绘制的图片资源 */
      imageResource: string,
      /** 图像的左上角在目标 canvas 上 x 轴的位置 */
      dx: number,
      /** 图像的左上角在目标 canvas 上 y 轴的位置 */
      dy: number,
      /** 在目标画布上绘制图像的宽度，允许对绘制的图像进行缩放 */
      dWidth: number,
      /** 在目标画布上绘制图像的高度，允许对绘制的图像进行缩放 */
      dHeight: number,
      /** 源图像的矩形选择框的左上角 x 坐标 */
      sx: number,
      /** 源图像的矩形选择框的左上角 y 坐标 */
      sy: number,
      /** 源图像的矩形选择框的宽度 */
      sWidth: number,
      /** 源图像的矩形选择框的高度 */
      sHeight: number,
    ): void;
    /** [CanvasContext.fill()](CanvasContext.fill.md)
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
* ![]((canvas/fill-line.png))
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
* ![]((canvas/fill-path.png)) */
    fill(): void;
    /** [CanvasContext.fillRect(number x, number y, number width, number height)](CanvasContext.fillRect.md)
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
* ![]((canvas/fill-rect.png)) */
    fillRect(
      /** 矩形路径左上角的横坐标 */
      x: number,
      /** 矩形路径左上角的横坐标 */
      y: number,
      /** 矩形路径的宽度 */
      width: number,
      /** 矩形路径的高度 */
      height: number,
    ): void;
    /** [CanvasContext.fillText(string text, number x, number y, number maxWidth)](CanvasContext.fillText.md)
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
* ![]((canvas/text.png)) */
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
    /** [CanvasContext.lineTo(number x, number y)](CanvasContext.lineTo.md)
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
* ![]((canvas/line-to.png)) */
    lineTo(
      /** 目标位置的 x 坐标 */
      x: number,
      /** 目标位置的 y 坐标 */
      y: number,
    ): void;
    /** [CanvasContext.moveTo(number x, number y)](CanvasContext.moveTo.md)
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
* ![]((canvas/move-to.png)) */
    moveTo(
      /** 目标位置的 x 坐标 */
      x: number,
      /** 目标位置的 y 坐标 */
      y: number,
    ): void;
    /** [CanvasContext.quadraticCurveTo(number cpx, number cpy, number x, number y)](CanvasContext.quadraticCurveTo.md)
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
* ![]((canvas/quadratic-curve-to.png))
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
    /** [CanvasContext.rect(number x, number y, number width, number height)](CanvasContext.rect.md)
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
* ![]((canvas/fill-rect.png)) */
    rect(
      /** 矩形路径左上角的横坐标 */
      x: number,
      /** 矩形路径左上角的横坐标 */
      y: number,
      /** 矩形路径的宽度 */
      width: number,
      /** 矩形路径的高度 */
      height: number,
    ): void;
    /** [CanvasContext.restore()](CanvasContext.restore.md)
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
* ![]((canvas/save-restore.png)) */
    restore(): void;
    /** [CanvasContext.rotate(number rotate)](CanvasContext.rotate.md)
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
* ![]((canvas/rotate.png)) */
    rotate(
      /** 旋转角度，以弧度计 degrees * Math.PI/180；degrees 范围为 0-360 */
      rotate: number,
    ): void;
    /** [CanvasContext.save()](CanvasContext.save.md)
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
* ![]((canvas/save-restore.png)) */
    save(): void;
    /** [CanvasContext.scale(number scaleWidth, number scaleHeight)](CanvasContext.scale.md)
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
* ![]((canvas/scale.png)) */
    scale(
      /** 横坐标缩放的倍数 (1 = 100%，0.5 = 50%，2 = 200%) */
      scaleWidth: number,
      /** 纵坐标轴缩放的倍数 (1 = 100%，0.5 = 50%，2 = 200%) */
      scaleHeight: number,
    ): void;
    /** [CanvasContext.setFillStyle([Color](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/Color.html) color)](CanvasContext.setFillStyle.md)
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
* ![]((canvas/fill-rect.png)) */
    setFillStyle(
      /** [Color](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/Color.html)
       *
       * 填充的颜色，默认颜色为 black。 */
      color: Color,
    ): void;
    /** [CanvasContext.setFontSize(number fontSize)](CanvasContext.setFontSize.md)
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
* ![]((canvas/font-size.png)) */
    setFontSize(
      /** 字体的字号 */
      fontSize: number,
    ): void;
    /** [CanvasContext.setGlobalAlpha(number alpha)](CanvasContext.setGlobalAlpha.md)
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
* ![]((canvas/global-alpha.png)) */
    setGlobalAlpha(
      /** 透明度。范围 0-1，0 表示完全透明，1 表示完全不透明。 */
      alpha: number,
    ): void;
    /** [CanvasContext.setLineCap(string lineCap)](CanvasContext.setLineCap.md)
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
* ![]((canvas/line-cap.png)) */
    setLineCap(
      /** 线条的结束端点样式 */
      lineCap: string,
    ): void;
    /** [CanvasContext.setLineDash(Array.<number> pattern, number offset)](CanvasContext.setLineDash.md)
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
* ![]((canvas/set-line-dash.png))
*
* 最低基础库： `1.6.0` */
    setLineDash(
      /** 一组描述交替绘制线段和间距（坐标空间单位）长度的数字 */
      pattern: Array<number>,
      /** 虚线偏移量 */
      offset: number,
    ): void;
    /** [CanvasContext.setLineJoin(string lineJoin)](CanvasContext.setLineJoin.md)
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
* ![]((canvas/line-join.png)) */
    setLineJoin(
      /** 线条的结束交点样式 */
      lineJoin: string,
    ): void;
    /** [CanvasContext.setLineWidth(number lineWidth)](CanvasContext.setLineWidth.md)
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
* ![]((canvas/line-width.png)) */
    setLineWidth(
      /** 线条的宽度，单位px */
      lineWidth: number,
    ): void;
    /** [CanvasContext.setMiterLimit(number miterLimit)](CanvasContext.setMiterLimit.md)
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
* ![]((canvas/miter-limit.png)) */
    setMiterLimit(
      /** 最大斜接长度 */
      miterLimit: number,
    ): void;
    /** [CanvasContext.setShadow(number offsetX, number offsetY, number blur, string color)](CanvasContext.setShadow.md)
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
* ![]((canvas/shadow.png)) */
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
    /** [CanvasContext.setStrokeStyle([Color](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/Color.html) color)](CanvasContext.setStrokeStyle.md)
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
* ![]((canvas/stroke-rect.png)) */
    setStrokeStyle(
      /** [Color](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/Color.html)
       *
       * 描边的颜色，默认颜色为 black。 */
      color: Color,
    ): void;
    /** [CanvasContext.setTextAlign(string align)](CanvasContext.setTextAlign.md)
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
* ![]((canvas/set-text-align.png))
*
* 最低基础库： `1.1.0` */
    setTextAlign(
      /** 文字的对齐方式 */
      align: string,
    ): void;
    /** [CanvasContext.setTextBaseline(string textBaseline)](CanvasContext.setTextBaseline.md)
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
* ![]((canvas/set-text-baseline.png))
*
* 最低基础库： `1.4.0` */
    setTextBaseline(
      /** 文字的竖直对齐方式 */
      textBaseline: string,
    ): void;
    /** [CanvasContext.setTransform(number scaleX, number scaleY, number skewX, number skewY, number translateX, number translateY)](CanvasContext.setTransform.md)
     *
     * 使用矩阵重新设置（覆盖）当前变换的方法
     *
     * 最低基础库： `1.9.90` */
    setTransform(
      /** 水平缩放 */
      scaleX: number,
      /** 垂直缩放 */
      scaleY: number,
      /** 水平倾斜 */
      skewX: number,
      /** 垂直倾斜 */
      skewY: number,
      /** 水平移动 */
      translateX: number,
      /** 垂直移动 */
      translateY: number,
    ): void;
    /** [CanvasContext.stroke()](CanvasContext.stroke.md)
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
* ![]((canvas/stroke-line.png))
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
* ![]((canvas/stroke-path.png)) */
    stroke(): void;
    /** [CanvasContext.strokeRect(number x, number y, number width, number height)](CanvasContext.strokeRect.md)
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
* ![]((canvas/stroke-rect.png)) */
    strokeRect(
      /** 矩形路径左上角的横坐标 */
      x: number,
      /** 矩形路径左上角的横坐标 */
      y: number,
      /** 矩形路径的宽度 */
      width: number,
      /** 矩形路径的高度 */
      height: number,
    ): void;
    /** [CanvasContext.strokeText(string text, number x, number y, number maxWidth)](CanvasContext.strokeText.md)
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
    /** [CanvasContext.transform(number scaleX, number scaleY, number skewX, number skewY, number translateX, number translateY)](CanvasContext.transform.md)
     *
     * 使用矩阵多次叠加当前变换的方法
     *
     * 最低基础库： `1.9.90` */
    transform(
      /** 水平缩放 */
      scaleX: number,
      /** 垂直缩放 */
      scaleY: number,
      /** 水平倾斜 */
      skewX: number,
      /** 垂直倾斜 */
      skewY: number,
      /** 水平移动 */
      translateX: number,
      /** 垂直移动 */
      translateY: number,
    ): void;
    /** [CanvasContext.translate(number x, number y)](CanvasContext.translate.md)
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
* ![]((canvas/translate.png)) */
    translate(
      /** 水平坐标平移量 */
      x: number,
      /** 竖直坐标平移量 */
      y: number,
    ): void;
    /** [Object CanvasContext.measureText(string text)](CanvasContext.measureText.md)
     *
     * 测量文本尺寸信息。目前仅返回文本宽度。同步接口。
     *
     * 最低基础库： `1.9.90` */
    measureText(
      /** 要测量的文本 */
      text: string,
    ): TextMetrics;
    /** [[CanvasGradient](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasGradient.html) CanvasContext.createCircularGradient(number x, number y, number r)](CanvasContext.createCircularGradient.md)
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
* ![]((canvas/circular-gradient.png)) */
    createCircularGradient(
      /** 圆心的 x 坐标 */
      x: number,
      /** 圆心的 y 坐标 */
      y: number,
      /** 圆的半径 */
      r: number,
    ): CanvasGradient;
    /** [[CanvasGradient](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasGradient.html) CanvasContext.createLinearGradient(number x0, number y0, number x1, number y1)](CanvasContext.createLinearGradient.md)
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
* ![]((canvas/linear-gradient.png)) */
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
    /** [CanvasGradient.addColorStop(number stop, [Color](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/Color.html) color)](CanvasGradient.addColorStop.md)
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
* ![]((canvas/color-stop.png)) */
    addColorStop(
      /** 表示渐变中开始与结束之间的位置，范围 0-1。 */
      stop: number,
      /** [Color](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/Color.html)
       *
       * 渐变点的颜色。 */
      color: Color,
    ): void;
  }
  interface Console {
    /** [console.debug()](console.debug.md)
     *
     * 向调试面板中打印 debug 日志 */
    debug(
      /** 日志内容，可以有任意多个。 */
      ...args: any[]
    ): void;
    /** [console.error()](console.error.md)
     *
     * 向调试面板中打印 error 日志 */
    error(
      /** 日志内容，可以有任意多个。 */
      ...args: any[]
    ): void;
    /** [console.group(string label)](console.group.md)
     *
     * 在调试面板中创建一个新的分组。随后输出的内容都会被添加一个缩进，表示该内容属于当前分组。调用 [console.groupEnd](https://developers.weixin.qq.com/miniprogram/dev/api/debug/console.groupEnd.html)之后分组结束。
     *
     * **注意**
     *
     *
     * 仅在工具中有效，在 vConsole 中为空函数实现。 */
    group(
      /** 分组标记，可选。 */
      label?: string,
    ): void;
    /** [console.groupEnd()](console.groupEnd.md)
     *
     * 结束由 [console.group](https://developers.weixin.qq.com/miniprogram/dev/api/debug/console.group.html) 创建的分组
     *
     * **注意**
     *
     *
     * 仅在工具中有效，在 vConsole 中为空函数实现。 */
    groupEnd(): void;
    /** [console.info()](console.info.md)
     *
     * 向调试面板中打印 info 日志 */
    info(
      /** 日志内容，可以有任意多个。 */
      ...args: any[]
    ): void;
    /** [console.log()](console.log.md)
     *
     * 向调试面板中打印 log 日志 */
    log(
      /** 日志内容，可以有任意多个。 */
      ...args: any[]
    ): void;
    /** [console.warn()](console.warn.md)
     *
     * 向调试面板中打印 warn 日志 */
    warn(
      /** 日志内容，可以有任意多个。 */
      ...args: any[]
    ): void;
  }
  interface DownloadTask {
    /** [DownloadTask.abort()](DownloadTask.abort.md)
     *
     * 中断下载任务
     *
     * 最低基础库： `1.4.0` */
    abort(): void;
    /** [DownloadTask.offHeadersReceived(function callback)](DownloadTask.offHeadersReceived.md)
     *
     * 取消监听 HTTP Response Header 事件
     *
     * 最低基础库： `2.1.0` */
    offHeadersReceived(
      /** HTTP Response Header 事件的回调函数 */
      callback: DownloadTaskOffHeadersReceivedCallback,
    ): void;
    /** [DownloadTask.offProgressUpdate(function callback)](DownloadTask.offProgressUpdate.md)
     *
     * 取消监听下载进度变化事件
     *
     * 最低基础库： `2.1.0` */
    offProgressUpdate(
      /** 下载进度变化事件的回调函数 */
      callback: DownloadTaskOffProgressUpdateCallback,
    ): void;
    /** [DownloadTask.onHeadersReceived(function callback)](DownloadTask.onHeadersReceived.md)
     *
     * 监听 HTTP Response Header 事件。会比请求完成事件更早
     *
     * 最低基础库： `2.1.0` */
    onHeadersReceived(
      /** HTTP Response Header 事件的回调函数 */
      callback: DownloadTaskOnHeadersReceivedCallback,
    ): void;
    /** [DownloadTask.onProgressUpdate(function callback)](DownloadTask.onProgressUpdate.md)
     *
     * 监听下载进度变化事件
     *
     * 最低基础库： `1.4.0` */
    onProgressUpdate(
      /** 下载进度变化事件的回调函数 */
      callback: DownloadTaskOnProgressUpdateCallback,
    ): void;
  }
  interface FileSystemManager {
    /** [Array.<string> FileSystemManager.readdirSync(string dirPath)](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.readdirSync.html)
     *
     * [FileSystemManager.readdir](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.readdir.html) 的同步版本 */
    readdirSync(
      /** 要读取的目录路径 */
      dirPath: string,
    ): Array<string>;
    /** [FileSystemManager.access(Object object)](FileSystemManager.access.md)
     *
     * 判断文件/目录是否存在 */
    access(option: AccessOption): void;
    /** [FileSystemManager.accessSync(string path)](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.accessSync.html)
     *
     * [FileSystemManager.access](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.access.html) 的同步版本 */
    accessSync(
      /** 要判断是否存在的文件/目录路径 */
      path: string,
    ): void;
    /** [FileSystemManager.appendFile(Object object)](FileSystemManager.appendFile.md)
     *
     * 在文件结尾追加内容
     *
     * 最低基础库： `2.1.0` */
    appendFile(option: AppendFileOption): void;
    /** [FileSystemManager.appendFileSync(string filePath, string|ArrayBuffer data, string encoding)](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.appendFileSync.html)
     *
     * [FileSystemManager.appendFile](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.appendFile.html) 的同步版本
     *
     * 最低基础库： `2.1.0` */
    appendFileSync(
      /** 要追加内容的文件路径 */
      filePath: string,
      /** 要追加的文本或二进制数据 */
      data: string | ArrayBuffer,
      /** 指定写入文件的字符编码 */
      encoding?: string,
    ): void;
    /** [FileSystemManager.copyFile(Object object)](FileSystemManager.copyFile.md)
     *
     * 复制文件 */
    copyFile(option: CopyFileOption): void;
    /** [FileSystemManager.copyFileSync(string srcPath, string destPath)](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.copyFileSync.html)
     *
     * [FileSystemManager.copyFile](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.copyFile.html) 的同步版本 */
    copyFileSync(
      /** 源文件路径，只可以是普通文件 */
      srcPath: string,
      /** 目标文件路径 */
      destPath: string,
    ): void;
    /** [FileSystemManager.getFileInfo(Object object)](FileSystemManager.getFileInfo.md)
     *
     * 获取该小程序下的 本地临时文件 或 本地缓存文件 信息 */
    getFileInfo(option: FileSystemManagerGetFileInfoOption): void;
    /** [FileSystemManager.getSavedFileList(Object object)](FileSystemManager.getSavedFileList.md)
     *
     * 获取该小程序下已保存的本地缓存文件列表 */
    getSavedFileList(option?: FileSystemManagerGetSavedFileListOption): void;
    /** [FileSystemManager.mkdir(Object object)](FileSystemManager.mkdir.md)
     *
     * 创建目录 */
    mkdir(option: MkdirOption): void;
    /** [FileSystemManager.mkdirSync(string dirPath, boolean recursive)](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.mkdirSync.html)
     *
     * [FileSystemManager.mkdir](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.mkdir.html) 的同步版本 */
    mkdirSync(
      /** 创建的目录路径 */
      dirPath: string,
      /** 是否在递归创建该目录的上级目录后再创建该目录。如果对应的上级目录已经存在，则不创建该上级目录。如 dirPath 为 a/b/c/d 且 recursive 为 true，将创建 a 目录，再在 a 目录下创建 b 目录，以此类推直至创建 a/b/c 目录下的 d 目录。
       *
       * 最低基础库： `2.3.0` */
      recursive?: boolean,
    ): void;
    /** [FileSystemManager.readFile(Object object)](FileSystemManager.readFile.md)
     *
     * 读取本地文件内容 */
    readFile(option: ReadFileOption): void;
    /** [FileSystemManager.readdir(Object object)](FileSystemManager.readdir.md)
     *
     * 读取目录内文件列表 */
    readdir(option: ReaddirOption): void;
    /** [FileSystemManager.removeSavedFile(Object object)](FileSystemManager.removeSavedFile.md)
     *
     * 删除该小程序下已保存的本地缓存文件 */
    removeSavedFile(option: FileSystemManagerRemoveSavedFileOption): void;
    /** [FileSystemManager.rename(Object object)](FileSystemManager.rename.md)
     *
     * 重命名文件。可以把文件从 oldPath 移动到 newPath */
    rename(option: RenameOption): void;
    /** [FileSystemManager.renameSync(string oldPath, string newPath)](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.renameSync.html)
     *
     * [FileSystemManager.rename](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.rename.html) 的同步版本 */
    renameSync(
      /** 源文件路径，可以是普通文件或目录 */
      oldPath: string,
      /** 新文件路径 */
      newPath: string,
    ): void;
    /** [FileSystemManager.rmdir(Object object)](FileSystemManager.rmdir.md)
     *
     * 删除目录 */
    rmdir(option: RmdirOption): void;
    /** [FileSystemManager.rmdirSync(string dirPath, boolean recursive)](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.rmdirSync.html)
     *
     * [FileSystemManager.rmdir](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.rmdir.html) 的同步版本 */
    rmdirSync(
      /** 要删除的目录路径 */
      dirPath: string,
      /** 是否递归删除目录。如果为 true，则删除该目录和该目录下的所有子目录以及文件。
       *
       * 最低基础库： `2.3.0` */
      recursive?: boolean,
    ): void;
    /** [FileSystemManager.saveFile(Object object)](FileSystemManager.saveFile.md)
     *
     * 保存临时文件到本地。此接口会移动临时文件，因此调用成功后，tempFilePath 将不可用。 */
    saveFile(option: FileSystemManagerSaveFileOption): void;
    /** [FileSystemManager.stat(Object object)](FileSystemManager.stat.md)
     *
     * 获取文件 Stats 对象 */
    stat(option: StatOption): void;
    /** [FileSystemManager.unlink(Object object)](FileSystemManager.unlink.md)
     *
     * 删除文件 */
    unlink(option: UnlinkOption): void;
    /** [FileSystemManager.unlinkSync(string filePath)](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.unlinkSync.html)
     *
     * [FileSystemManager.unlink](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.unlink.html) 的同步版本 */
    unlinkSync(
      /** 要删除的文件路径 */
      filePath: string,
    ): void;
    /** [FileSystemManager.unzip(Object object)](FileSystemManager.unzip.md)
     *
     * 解压文件 */
    unzip(option: UnzipOption): void;
    /** [FileSystemManager.writeFile(Object object)](FileSystemManager.writeFile.md)
     *
     * 写文件 */
    writeFile(option: WriteFileOption): void;
    /** [FileSystemManager.writeFileSync(string filePath, string|ArrayBuffer data, string encoding)](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.writeFileSync.html)
     *
     * [FileSystemManager.writeFile](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.writeFile.html) 的同步版本 */
    writeFileSync(
      /** 要写入的文件路径 */
      filePath: string,
      /** 要写入的文本或二进制数据 */
      data: string | ArrayBuffer,
      /** 指定写入文件的字符编码 */
      encoding?: string,
    ): void;
    /** [[Stats](https://developers.weixin.qq.com/miniprogram/dev/api/file/Stats.html)|Object FileSystemManager.statSync(string path, boolean recursive)](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.statSync.html)
     *
     * [FileSystemManager.stat](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.stat.html) 的同步版本 */
    statSync(
      /** 文件/目录路径 */
      path: string,
      /** 是否递归获取目录下的每个文件的 Stats 信息
       *
       * 最低基础库： `2.3.0` */
      recursive?: boolean,
    ): Stats;
    /** [number FileSystemManager.saveFileSync(string tempFilePath, string filePath)](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.saveFileSync.html)
     *
     * [FileSystemManager.saveFile](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.saveFile.html) 的同步版本 */
    saveFileSync(
      /** 临时存储文件路径 */
      tempFilePath: string,
      /** 要存储的文件路径 */
      filePath?: string,
    ): number;
    /** [string|ArrayBuffer FileSystemManager.readFileSync(string filePath, string encoding)](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.readFileSync.html)
     *
     * [FileSystemManager.readFile](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.readFile.html) 的同步版本 */
    readFileSync(
      /** 要读取的文件的路径 */
      filePath: string,
      /** 指定读取文件的字符编码，如果不传 encoding，则以 ArrayBuffer 格式读取文件的二进制内容 */
      encoding?: string,
    ): string;
  }
  interface GeneralCallbackResult {
    errMsg: string;
  }
  interface InnerAudioContext {
    /** [InnerAudioContext.destroy()](InnerAudioContext.destroy.md)
     *
     * 销毁当前实例 */
    destroy(): void;
    /** [InnerAudioContext.offCanplay(function callback)](InnerAudioContext.offCanplay.md)
     *
     * 取消监听音频进入可以播放状态的事件
     *
     * 最低基础库： `1.9.0` */
    offCanplay(
      /** 音频进入可以播放状态的事件的回调函数 */
      callback: OffCanplayCallback,
    ): void;
    /** [InnerAudioContext.offEnded(function callback)](InnerAudioContext.offEnded.md)
     *
     * 取消监听音频自然播放至结束的事件
     *
     * 最低基础库： `1.9.0` */
    offEnded(
      /** 音频自然播放至结束的事件的回调函数 */
      callback: OffEndedCallback,
    ): void;
    /** [InnerAudioContext.offError(function callback)](InnerAudioContext.offError.md)
     *
     * 取消监听音频播放错误事件
     *
     * 最低基础库： `1.9.0` */
    offError(
      /** 音频播放错误事件的回调函数 */
      callback: OffErrorCallback,
    ): void;
    /** [InnerAudioContext.offPause(function callback)](InnerAudioContext.offPause.md)
     *
     * 取消监听音频暂停事件
     *
     * 最低基础库： `1.9.0` */
    offPause(
      /** 音频暂停事件的回调函数 */
      callback: OffPauseCallback,
    ): void;
    /** [InnerAudioContext.offPlay(function callback)](InnerAudioContext.offPlay.md)
     *
     * 取消监听音频播放事件
     *
     * 最低基础库： `1.9.0` */
    offPlay(
      /** 音频播放事件的回调函数 */
      callback: OffPlayCallback,
    ): void;
    /** [InnerAudioContext.offSeeked(function callback)](InnerAudioContext.offSeeked.md)
     *
     * 取消监听音频完成跳转操作的事件
     *
     * 最低基础库： `1.9.0` */
    offSeeked(
      /** 音频完成跳转操作的事件的回调函数 */
      callback: OffSeekedCallback,
    ): void;
    /** [InnerAudioContext.offSeeking(function callback)](InnerAudioContext.offSeeking.md)
     *
     * 取消监听音频进行跳转操作的事件
     *
     * 最低基础库： `1.9.0` */
    offSeeking(
      /** 音频进行跳转操作的事件的回调函数 */
      callback: OffSeekingCallback,
    ): void;
    /** [InnerAudioContext.offStop(function callback)](InnerAudioContext.offStop.md)
     *
     * 取消监听音频停止事件
     *
     * 最低基础库： `1.9.0` */
    offStop(
      /** 音频停止事件的回调函数 */
      callback: OffStopCallback,
    ): void;
    /** [InnerAudioContext.offTimeUpdate(function callback)](InnerAudioContext.offTimeUpdate.md)
     *
     * 取消监听音频播放进度更新事件
     *
     * 最低基础库： `1.9.0` */
    offTimeUpdate(
      /** 音频播放进度更新事件的回调函数 */
      callback: OffTimeUpdateCallback,
    ): void;
    /** [InnerAudioContext.offWaiting(function callback)](InnerAudioContext.offWaiting.md)
     *
     * 取消监听音频加载中事件
     *
     * 最低基础库： `1.9.0` */
    offWaiting(
      /** 音频加载中事件的回调函数 */
      callback: OffWaitingCallback,
    ): void;
    /** [InnerAudioContext.onCanplay(function callback)](InnerAudioContext.onCanplay.md)
     *
     * 监听音频进入可以播放状态的事件。但不保证后面可以流畅播放 */
    onCanplay(
      /** 音频进入可以播放状态的事件的回调函数 */
      callback: InnerAudioContextOnCanplayCallback,
    ): void;
    /** [InnerAudioContext.onEnded(function callback)](InnerAudioContext.onEnded.md)
     *
     * 监听音频自然播放至结束的事件 */
    onEnded(
      /** 音频自然播放至结束的事件的回调函数 */
      callback: InnerAudioContextOnEndedCallback,
    ): void;
    /** [InnerAudioContext.onError(function callback)](InnerAudioContext.onError.md)
     *
     * 监听音频播放错误事件 */
    onError(
      /** 音频播放错误事件的回调函数 */
      callback: InnerAudioContextOnErrorCallback,
    ): void;
    /** [InnerAudioContext.onPause(function callback)](InnerAudioContext.onPause.md)
     *
     * 监听音频暂停事件 */
    onPause(
      /** 音频暂停事件的回调函数 */
      callback: InnerAudioContextOnPauseCallback,
    ): void;
    /** [InnerAudioContext.onPlay(function callback)](InnerAudioContext.onPlay.md)
     *
     * 监听音频播放事件 */
    onPlay(
      /** 音频播放事件的回调函数 */
      callback: InnerAudioContextOnPlayCallback,
    ): void;
    /** [InnerAudioContext.onSeeked(function callback)](InnerAudioContext.onSeeked.md)
     *
     * 监听音频完成跳转操作的事件 */
    onSeeked(
      /** 音频完成跳转操作的事件的回调函数 */
      callback: InnerAudioContextOnSeekedCallback,
    ): void;
    /** [InnerAudioContext.onSeeking(function callback)](InnerAudioContext.onSeeking.md)
     *
     * 监听音频进行跳转操作的事件 */
    onSeeking(
      /** 音频进行跳转操作的事件的回调函数 */
      callback: InnerAudioContextOnSeekingCallback,
    ): void;
    /** [InnerAudioContext.onStop(function callback)](InnerAudioContext.onStop.md)
     *
     * 监听音频停止事件 */
    onStop(
      /** 音频停止事件的回调函数 */
      callback: InnerAudioContextOnStopCallback,
    ): void;
    /** [InnerAudioContext.onTimeUpdate(function callback)](InnerAudioContext.onTimeUpdate.md)
     *
     * 监听音频播放进度更新事件 */
    onTimeUpdate(
      /** 音频播放进度更新事件的回调函数 */
      callback: InnerAudioContextOnTimeUpdateCallback,
    ): void;
    /** [InnerAudioContext.onWaiting(function callback)](InnerAudioContext.onWaiting.md)
     *
     * 监听音频加载中事件。当音频因为数据不足，需要停下来加载时会触发 */
    onWaiting(
      /** 音频加载中事件的回调函数 */
      callback: InnerAudioContextOnWaitingCallback,
    ): void;
    /** [InnerAudioContext.pause()](InnerAudioContext.pause.md)
     *
     * 暂停。暂停后的音频再播放会从暂停处开始播放 */
    pause(): void;
    /** [InnerAudioContext.play()](InnerAudioContext.play.md)
     *
     * 播放 */
    play(): void;
    /** [InnerAudioContext.seek(number position)](InnerAudioContext.seek.md)
     *
     * 跳转到指定位置 */
    seek(
      /** 跳转的时间，单位 s。精确到小数点后 3 位，即支持 ms 级别精确度 */
      position: number,
    ): void;
    /** [InnerAudioContext.stop()](InnerAudioContext.stop.md)
     *
     * 停止。停止后的音频再播放会从头开始播放。 */
    stop(): void;
  }
  interface IntersectionObserver {
    /** [IntersectionObserver.disconnect()](IntersectionObserver.disconnect.md)
     *
     * 停止监听。回调函数将不再触发
     *
     * **注意**
     *
     *
     * 与页面显示区域的相交区域并不准确代表用户可见的区域，因为参与计算的区域是“布局区域”，布局区域可能会在绘制时被其他节点裁剪隐藏（如遇祖先节点中 overflow 样式为 hidden 的节点）或遮盖（如遇 fixed 定位的节点）。 */
    disconnect(): void;
    /** [IntersectionObserver.observe(string targetSelector, function callback)](IntersectionObserver.observe.md)
     *
     * 指定目标节点并开始监听相交状态变化情况 */
    observe(
      /** 选择器 */
      targetSelector: string,
      /** 监听相交状态变化的回调函数 */
      callback: ObserveCallback,
    ): void;
    /** [IntersectionObserver.relativeTo(string selector, Object margins)](IntersectionObserver.relativeTo.md)
     *
     * 使用选择器指定一个节点，作为参照区域之一。 */
    relativeTo(
      /** 选择器 */
      selector: string,
      /** 用来扩展（或收缩）参照节点布局区域的边界 */
      margins?: RelativeToMargins,
    ): void;
    /** [IntersectionObserver.relativeToViewport(Object margins)](IntersectionObserver.relativeToViewport.md)
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
      margins?: RelativeToViewportMargins,
    ): void;
  }
  interface LivePlayerContext {
    /** [LivePlayerContext.exitFullScreen(Object object)](LivePlayerContext.exitFullScreen.md)
     *
     * 退出全屏 */
    exitFullScreen(option?: ExitFullScreenOption): void;
    /** [LivePlayerContext.mute(Object object)](LivePlayerContext.mute.md)
     *
     * 静音 */
    mute(option?: MuteOption): void;
    /** [LivePlayerContext.pause(Object object)](LivePlayerContext.pause.md)
     *
     * 暂停
     *
     * 最低基础库： `1.9.90` */
    pause(option?: LivePlayerContextPauseOption): void;
    /** [LivePlayerContext.play(Object object)](LivePlayerContext.play.md)
     *
     * 播放 */
    play(option?: PlayOption): void;
    /** [LivePlayerContext.requestFullScreen(Object object)](LivePlayerContext.requestFullScreen.md)
     *
     * 进入全屏 */
    requestFullScreen(option: LivePlayerContextRequestFullScreenOption): void;
    /** [LivePlayerContext.resume(Object object)](LivePlayerContext.resume.md)
     *
     * 恢复
     *
     * 最低基础库： `1.9.90` */
    resume(option?: LivePlayerContextResumeOption): void;
    /** [LivePlayerContext.stop(Object object)](LivePlayerContext.stop.md)
     *
     * 停止 */
    stop(option?: LivePlayerContextStopOption): void;
  }
  interface LivePusherContext {
    /** [LivePusherContext.pause(Object object)](LivePusherContext.pause.md)
     *
     * 暂停推流 */
    pause(option?: LivePusherContextPauseOption): void;
    /** [LivePusherContext.pauseBGM(Object object)](LivePusherContext.pauseBGM.md)
     *
     * 暂停背景音
     *
     * 最低基础库： `2.4.0` */
    pauseBGM(option?: PauseBGMOption): void;
    /** [LivePusherContext.playBGM(Object object)](LivePusherContext.playBGM.md)
     *
     * 播放背景音
     *
     * 最低基础库： `2.4.0` */
    playBGM(option: PlayBGMOption): void;
    /** [LivePusherContext.resume(Object object)](LivePusherContext.resume.md)
     *
     * 恢复推流 */
    resume(option?: LivePusherContextResumeOption): void;
    /** [LivePusherContext.resumeBGM(Object object)](LivePusherContext.resumeBGM.md)
     *
     * 恢复背景音
     *
     * 最低基础库： `2.4.0` */
    resumeBGM(option?: ResumeBGMOption): void;
    /** [LivePusherContext.setBGMVolume(Object object)](LivePusherContext.setBGMVolume.md)
     *
     * 设置背景音音量
     *
     * 最低基础库： `2.4.0` */
    setBGMVolume(option: SetBGMVolumeOption): void;
    /** [LivePusherContext.snapshot(Object object)](LivePusherContext.snapshot.md)
     *
     * 快照
     *
     * 最低基础库： `1.9.90` */
    snapshot(option?: SnapshotOption): void;
    /** [LivePusherContext.start(Object object)](LivePusherContext.start.md)
     *
     * 播放推流 */
    start(option?: LivePusherContextStartOption): void;
    /** [LivePusherContext.stop(Object object)](LivePusherContext.stop.md)
     *
     * 停止推流 */
    stop(option?: LivePusherContextStopOption): void;
    /** [LivePusherContext.stopBGM(Object object)](LivePusherContext.stopBGM.md)
     *
     * 停止背景音
     *
     * 最低基础库： `2.4.0` */
    stopBGM(option?: StopBGMOption): void;
    /** [LivePusherContext.switchCamera(Object object)](LivePusherContext.switchCamera.md)
     *
     * 切换前后摄像头 */
    switchCamera(option?: SwitchCameraOption): void;
    /** [LivePusherContext.toggleTorch(Object object)](LivePusherContext.toggleTorch.md)
     *
     * 切换
     *
     * 最低基础库： `2.1.0` */
    toggleTorch(option?: ToggleTorchOption): void;
  }
  interface LogManager {
    /** [LogManager.debug()](LogManager.debug.md)
     *
     * 写 debug 日志 */
    debug(
      /** 日志内容，可以有任意多个。每次调用的参数的总大小不超过100Kb */
      ...args: any[]
    ): void;
    /** [LogManager.info()](LogManager.info.md)
     *
     * 写 info 日志 */
    info(
      /** 日志内容，可以有任意多个。每次调用的参数的总大小不超过100Kb */
      ...args: any[]
    ): void;
    /** [LogManager.log()](LogManager.log.md)
     *
     * 写 log 日志 */
    log(
      /** 日志内容，可以有任意多个。每次调用的参数的总大小不超过100Kb */
      ...args: any[]
    ): void;
    /** [LogManager.warn()](LogManager.warn.md)
     *
     * 写 warn 日志 */
    warn(
      /** 日志内容，可以有任意多个。每次调用的参数的总大小不超过100Kb */
      ...args: any[]
    ): void;
  }
  interface MapContext {
    /** [MapContext.getCenterLocation(Object object)](MapContext.getCenterLocation.md)
     *
     * 获取当前地图中心的经纬度。返回的是 gcj02 坐标系，可以用于 [wx.openLocation()](https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.openLocation.html) */
    getCenterLocation(option?: GetCenterLocationOption): void;
    /** [MapContext.getRegion(Object object)](MapContext.getRegion.md)
     *
     * 获取当前地图的视野范围
     *
     * 最低基础库： `1.4.0` */
    getRegion(option?: GetRegionOption): void;
    /** [MapContext.getScale(Object object)](MapContext.getScale.md)
     *
     * 获取当前地图的缩放级别
     *
     * 最低基础库： `1.4.0` */
    getScale(option?: GetScaleOption): void;
    /** [MapContext.includePoints(Object object)](MapContext.includePoints.md)
     *
     * 缩放视野展示所有经纬度
     *
     * 最低基础库： `1.2.0` */
    includePoints(option: IncludePointsOption): void;
    /** [MapContext.moveToLocation()](MapContext.moveToLocation.md)
     *
     * 将地图中心移动到当前定位点。需要配合map组件的show-location使用 */
    moveToLocation(): void;
    /** [MapContext.translateMarker(Object object)](MapContext.translateMarker.md)
     *
     * 平移marker，带动画
     *
     * 最低基础库： `1.2.0` */
    translateMarker(option: TranslateMarkerOption): void;
  }
  interface NodesRef {
    /** [NodesRef.fields(Object fields)](NodesRef.fields.md)
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
    fields(fields: Fields): void;
    /** [[SelectorQuery](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/SelectorQuery.html) NodesRef.boundingClientRect(function callback)](NodesRef.boundingClientRect.md)
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
    /** [[SelectorQuery](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/SelectorQuery.html) NodesRef.context(function callback)](NodesRef.context.md)
*
* 添加节点的 Context 对象查询请求。目前支持 `VideoContext`、`CanvasContext`、`LivePlayerContext` 和 `MapContext` 的获取。
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
    /** [[SelectorQuery](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/SelectorQuery.html) NodesRef.scrollOffset(function callback)](NodesRef.scrollOffset.md)
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
  interface RecorderManager {
    /** [RecorderManager.onError(function callback)](RecorderManager.onError.md)
     *
     * 监听录音错误事件 */
    onError(
      /** 录音错误事件的回调函数 */
      callback: RecorderManagerOnErrorCallback,
    ): void;
    /** [RecorderManager.onFrameRecorded(function callback)](RecorderManager.onFrameRecorded.md)
     *
     * 监听已录制完指定帧大小的文件事件。如果设置了 frameSize，则会回调此事件。 */
    onFrameRecorded(
      /** 已录制完指定帧大小的文件事件的回调函数 */
      callback: OnFrameRecordedCallback,
    ): void;
    /** [RecorderManager.onInterruptionBegin(function callback)](RecorderManager.onInterruptionBegin.md)
     *
     * 监听录音因为受到系统占用而被中断开始事件。以下场景会触发此事件：微信语音聊天、微信视频聊天。此事件触发后，录音会被暂停。pause 事件在此事件后触发
     *
     * 最低基础库： `2.3.0` */
    onInterruptionBegin(
      /** 录音因为受到系统占用而被中断开始事件的回调函数 */
      callback: OnInterruptionBeginCallback,
    ): void;
    /** [RecorderManager.onInterruptionEnd(function callback)](RecorderManager.onInterruptionEnd.md)
     *
     * 监听录音中断结束事件。在收到 interruptionBegin 事件之后，小程序内所有录音会暂停，收到此事件之后才可再次录音成功。
     *
     * 最低基础库： `2.3.0` */
    onInterruptionEnd(
      /** 录音中断结束事件的回调函数 */
      callback: OnInterruptionEndCallback,
    ): void;
    /** [RecorderManager.onPause(function callback)](RecorderManager.onPause.md)
     *
     * 监听录音暂停事件 */
    onPause(
      /** 录音暂停事件的回调函数 */
      callback: RecorderManagerOnPauseCallback,
    ): void;
    /** [RecorderManager.onResume(function callback)](RecorderManager.onResume.md)
     *
     * 监听录音继续事件 */
    onResume(
      /** 录音继续事件的回调函数 */
      callback: OnResumeCallback,
    ): void;
    /** [RecorderManager.onStart(function callback)](RecorderManager.onStart.md)
     *
     * 监听录音开始事件 */
    onStart(
      /** 录音开始事件的回调函数 */
      callback: OnStartCallback,
    ): void;
    /** [RecorderManager.onStop(function callback)](RecorderManager.onStop.md)
     *
     * 监听录音结束事件 */
    onStop(
      /** 录音结束事件的回调函数 */
      callback: RecorderManagerOnStopCallback,
    ): void;
    /** [RecorderManager.pause()](RecorderManager.pause.md)
     *
     * 暂停录音 */
    pause(): void;
    /** [RecorderManager.resume()](RecorderManager.resume.md)
     *
     * 继续录音 */
    resume(): void;
    /** [RecorderManager.start(Object object)](RecorderManager.start.md)
     *
     * 开始录音
     *
     * **采样率与编码码率限制**
     *
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
    /** [RecorderManager.stop()](RecorderManager.stop.md)
     *
     * 停止录音 */
    stop(): void;
  }
  interface RequestTask {
    /** [RequestTask.abort()](RequestTask.abort.md)
     *
     * 中断请求任务
     *
     * 最低基础库： `1.4.0` */
    abort(): void;
    /** [RequestTask.offHeadersReceived(function callback)](RequestTask.offHeadersReceived.md)
     *
     * 取消监听 HTTP Response Header 事件
     *
     * 最低基础库： `2.1.0` */
    offHeadersReceived(
      /** HTTP Response Header 事件的回调函数 */
      callback: RequestTaskOffHeadersReceivedCallback,
    ): void;
    /** [RequestTask.onHeadersReceived(function callback)](RequestTask.onHeadersReceived.md)
     *
     * 监听 HTTP Response Header 事件。会比请求完成事件更早
     *
     * 最低基础库： `2.1.0` */
    onHeadersReceived(
      /** HTTP Response Header 事件的回调函数 */
      callback: RequestTaskOnHeadersReceivedCallback,
    ): void;
  }
  interface SelectorQuery {
    /** [[NodesRef](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/NodesRef.html) SelectorQuery.exec(function callback)](SelectorQuery.exec.md)
     *
     * 执行所有的请求。请求结果按请求次序构成数组，在callback的第一个参数中返回。 */
    exec(
      /** 回调函数 */
      callback?: Function,
    ): NodesRef;
    /** [[NodesRef](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/NodesRef.html) SelectorQuery.select(string selector)](SelectorQuery.select.md)
     *
     * 在当前页面下选择第一个匹配选择器 `selector` 的节点。返回一个 `NodesRef` 对象实例，可以用于获取节点信息。
     *
     * **selector 语法**
     *
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
    /** [[NodesRef](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/NodesRef.html) SelectorQuery.selectAll(string selector)](SelectorQuery.selectAll.md)
     *
     * 在当前页面下选择匹配选择器 selector 的所有节点。
     *
     * **selector 语法**
     *
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
    /** [[NodesRef](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/NodesRef.html) SelectorQuery.selectViewport()](SelectorQuery.selectViewport.md)
     *
     * 选择显示区域。可用于获取显示区域的尺寸、滚动位置等信息。 */
    selectViewport(): NodesRef;
    /** [[SelectorQuery](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/SelectorQuery.html) SelectorQuery.in(Component component)](SelectorQuery.in.md)
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
      component: any,
    ): SelectorQuery;
  }
  interface SocketTask {
    /** [SocketTask.close(Object object)](SocketTask.close.md)
     *
     * 关闭 WebSocket 连接 */
    close(option: CloseOption): void;
    /** [SocketTask.onClose(function callback)](SocketTask.onClose.md)
     *
     * 监听 WebSocket 连接关闭事件 */
    onClose(
      /** WebSocket 连接关闭事件的回调函数 */
      callback: OnCloseCallback,
    ): void;
    /** [SocketTask.onError(function callback)](SocketTask.onError.md)
     *
     * 监听 WebSocket 错误事件 */
    onError(
      /** WebSocket 错误事件的回调函数 */
      callback: SocketTaskOnErrorCallback,
    ): void;
    /** [SocketTask.onMessage(function callback)](SocketTask.onMessage.md)
     *
     * 监听 WebSocket 接受到服务器的消息事件 */
    onMessage(
      /** WebSocket 接受到服务器的消息事件的回调函数 */
      callback: SocketTaskOnMessageCallback,
    ): void;
    /** [SocketTask.onOpen(function callback)](SocketTask.onOpen.md)
     *
     * 监听 WebSocket 连接打开事件 */
    onOpen(
      /** WebSocket 连接打开事件的回调函数 */
      callback: OnOpenCallback,
    ): void;
    /** [SocketTask.send(Object object)](SocketTask.send.md)
     *
     * 通过 WebSocket 连接发送数据 */
    send(option: SendOption): void;
  }
  interface Stats {
    /** [boolean Stats.isDirectory()](Stats.isDirectory.md)
     *
     * 判断当前文件是否一个目录 */
    isDirectory(): boolean;
    /** [boolean Stats.isFile()](Stats.isFile.md)
     *
     * 判断当前文件是否一个普通文件 */
    isFile(): boolean;
  }
  interface UpdateManager {
    /** [UpdateManager.applyUpdate()](UpdateManager.applyUpdate.md)
     *
     * 强制小程序重启并使用新版本。在小程序新版本下载完成后（即收到 `onUpdateReady` 回调）调用。 */
    applyUpdate(): void;
    /** [UpdateManager.onCheckForUpdate(function callback)](UpdateManager.onCheckForUpdate.md)
     *
     * 监听向微信后台请求检查更新结果事件。微信在小程序冷启动时自动检查更新，不需由开发者主动触发。 */
    onCheckForUpdate(
      /** 向微信后台请求检查更新结果事件的回调函数 */
      callback: OnCheckForUpdateCallback,
    ): void;
    /** [UpdateManager.onUpdateFailed(function callback)](UpdateManager.onUpdateFailed.md)
     *
     * 监听小程序更新失败事件。小程序有新版本，客户端主动触发下载（无需开发者触发），下载失败（可能是网络原因等）后回调 */
    onUpdateFailed(
      /** 小程序更新失败事件的回调函数 */
      callback: OnUpdateFailedCallback,
    ): void;
    /** [UpdateManager.onUpdateReady(function callback)](UpdateManager.onUpdateReady.md)
     *
     * 监听小程序有版本更新事件。客户端主动触发下载（无需开发者触发），下载成功后回调 */
    onUpdateReady(
      /** 小程序有版本更新事件的回调函数 */
      callback: OnUpdateReadyCallback,
    ): void;
  }
  interface UploadTask {
    /** [UploadTask.abort()](UploadTask.abort.md)
     *
     * 中断上传任务
     *
     * 最低基础库： `1.4.0` */
    abort(): void;
    /** [UploadTask.offHeadersReceived(function callback)](UploadTask.offHeadersReceived.md)
     *
     * 取消监听 HTTP Response Header 事件
     *
     * 最低基础库： `2.1.0` */
    offHeadersReceived(
      /** HTTP Response Header 事件的回调函数 */
      callback: UploadTaskOffHeadersReceivedCallback,
    ): void;
    /** [UploadTask.offProgressUpdate(function callback)](UploadTask.offProgressUpdate.md)
     *
     * 取消监听上传进度变化事件
     *
     * 最低基础库： `2.1.0` */
    offProgressUpdate(
      /** 上传进度变化事件的回调函数 */
      callback: UploadTaskOffProgressUpdateCallback,
    ): void;
    /** [UploadTask.onHeadersReceived(function callback)](UploadTask.onHeadersReceived.md)
     *
     * 监听 HTTP Response Header 事件。会比请求完成事件更早
     *
     * 最低基础库： `2.1.0` */
    onHeadersReceived(
      /** HTTP Response Header 事件的回调函数 */
      callback: UploadTaskOnHeadersReceivedCallback,
    ): void;
    /** [UploadTask.onProgressUpdate(function callback)](UploadTask.onProgressUpdate.md)
     *
     * 监听上传进度变化事件
     *
     * 最低基础库： `1.4.0` */
    onProgressUpdate(
      /** 上传进度变化事件的回调函数 */
      callback: UploadTaskOnProgressUpdateCallback,
    ): void;
  }
  interface VideoContext {
    /** [VideoContext.exitFullScreen()](VideoContext.exitFullScreen.md)
     *
     * 退出全屏
     *
     * 最低基础库： `1.4.0` */
    exitFullScreen(): void;
    /** [VideoContext.hideStatusBar()](VideoContext.hideStatusBar.md)
     *
     * 隐藏状态栏，仅在iOS全屏下有效
     *
     * 最低基础库： `2.1.0` */
    hideStatusBar(): void;
    /** [VideoContext.pause()](VideoContext.pause.md)
     *
     * 暂停视频 */
    pause(): void;
    /** [VideoContext.play()](VideoContext.play.md)
     *
     * 播放视频 */
    play(): void;
    /** [VideoContext.playbackRate(number rate)](VideoContext.playbackRate.md)
     *
     * 设置倍速播放
     *
     * 最低基础库： `1.4.0` */
    playbackRate(
      /** 倍率，支持 0.5/0.8/1.0/1.25/1.5 */
      rate: number,
    ): void;
    /** [VideoContext.requestFullScreen(Object object)](VideoContext.requestFullScreen.md)
     *
     * 进入全屏
     *
     * 最低基础库： `1.4.0` */
    requestFullScreen(option: VideoContextRequestFullScreenOption): void;
    /** [VideoContext.seek(number position)](VideoContext.seek.md)
     *
     * 跳转到指定位置 */
    seek(
      /** 跳转到的位置，单位 s */
      position: number,
    ): void;
    /** [VideoContext.sendDanmu(Object data)](VideoContext.sendDanmu.md)
     *
     * 发送弹幕 */
    sendDanmu(
      /** 弹幕内容 */
      data: Danmu,
    ): void;
    /** [VideoContext.showStatusBar()](VideoContext.showStatusBar.md)
     *
     * 显示状态栏，仅在iOS全屏下有效
     *
     * 最低基础库： `2.1.0` */
    showStatusBar(): void;
    /** [VideoContext.stop()](VideoContext.stop.md)
     *
     * 停止视频
     *
     * 最低基础库： `1.7.0` */
    stop(): void;
  }
  interface Worker {
    /** [Worker.onMessage(function callback)](Worker.onMessage.md)
     *
     * 监听主线程/Worker 线程向当前线程发送的消息的事件。 */
    onMessage(
      /** 主线程/Worker 线程向当前线程发送的消息的事件的回调函数 */
      callback: WorkerOnMessageCallback,
    ): void;
    /** [Worker.postMessage(Object message)](Worker.postMessage.md)
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
      message: object,
    ): void;
    /** [Worker.terminate()](Worker.terminate.md)
     *
     * 结束当前 Worker 线程。仅限在主线程 worker 对象上调用。 */
    terminate(): void;
  }
  interface Wx {
    /** [Object wx.getAccountInfoSync()](wx.getAccountInfoSync.md)
*
* 获取当前帐号信息
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
    /** [Object wx.getExtConfigSync()](wx.getExtConfigSync.md)
*
* [wx.getExtConfig](https://developers.weixin.qq.com/miniprogram/dev/api/ext/wx.getExtConfig.html) 的同步版本。
*
* **Tips**
*
*
* 1. 本接口暂时无法通过 `wx.canIUse` 判断是否兼容，开发者需要自行判断 `wx.getExtConfigSync` 是否存在来兼容
*
* **示例代码**
*
* ```js
let extConfig = wx.getExtConfigSync? wx.getExtConfigSync(): {}
console.log(extConfig)
```
*
* 最低基础库： `1.1.0` */
    getExtConfigSync(): ExtInfo;
    /** [Object wx.getLaunchOptionsSync()](wx.getLaunchOptionsSync.md)
     *
     * 获取小程序启动时的参数。与 [`App.onLaunch`]((app-service/app#onlaunchobject)) 的回调参数一致。
     *
     * **返回有效 referrerInfo 的场景**
     *
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
     *
     * 部分版本在无`referrerInfo`的时候会返回 `undefined`，建议使用 `options.referrerInfo && options.referrerInfo.appId` 进行判断。
     *
     * 最低基础库： `2.1.2` */
    getLaunchOptionsSync(): LaunchOptionsApp;
    /** [Object wx.getMenuButtonBoundingClientRect()](wx.getMenuButtonBoundingClientRect.md)
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
    /** [Object wx.getSystemInfoSync()](https://developers.weixin.qq.com/miniprogram/dev/api/system/system-info/wx.getSystemInfoSync.html)
*
* [wx.getSystemInfo](https://developers.weixin.qq.com/miniprogram/dev/api/system/system-info/wx.getSystemInfo.html) 的同步版本
*
* **示例代码**
*
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
    getSystemInfoSync(): GetSystemInfoSyncResult;
    /** [[Animation](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.html) wx.createAnimation(Object object)](wx.createAnimation.md)
     *
     * 创建一个动画实例 [animation](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.html)。调用实例的方法来描述动画。最后通过动画实例的 export 方法导出动画数据传递给组件的 animation 属性。 */
    createAnimation(option: CreateAnimationOption): Animation;
    /** [[AudioContext](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/AudioContext.html) wx.createAudioContext(string id, Object this)](wx.createAudioContext.md)
     *
     * 创建 `audio` 上下文 `AudioContext` 对象。 */
    createAudioContext(
      /** `<audio/>` 组件的 id */
      id: string,
      /** 在自定义组件下，当前组件实例的this，以操作组件内 `<audio/>` 组件 */
      component?: any,
    ): AudioContext;
    /** [[BackgroundAudioManager](https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/BackgroundAudioManager.html) wx.getBackgroundAudioManager()](wx.getBackgroundAudioManager.md)
     *
     * 获取**全局唯一**的背景音频管理器。
     * 小程序切入后台，如果音频处于播放状态，可以继续播放。但是后台状态不能通过调用API操纵音频的播放状态。
     *
     * 从微信客户端6.7.2版本开始，若需要在小程序切后台后继续播放音频，需要在 [app.json]((全局配置)) 中配置 `requiredBackgroundModes` 属性。开发版和体验版上可以直接生效，正式版还需通过审核。
     *
     * 最低基础库： `1.2.0` */
    getBackgroundAudioManager(): BackgroundAudioManager;
    /** [[CameraContext](https://developers.weixin.qq.com/miniprogram/dev/api/media/camera/CameraContext.html) wx.createCameraContext()](wx.createCameraContext.md)
     *
     * 创建 `camera` 上下文 `CameraContext` 对象。
     *
     * 最低基础库： `1.6.0` */
    createCameraContext(): CameraContext;
    /** [[CanvasContext](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.html) wx.createCanvasContext(string canvasId, Object this)](wx.createCanvasContext.md)
     *
     * 创建 canvas 的绘图上下文 `CanvasContext` 对象 */
    createCanvasContext(
      /** 要获取上下文的 `<canvas>` 组件 canvas-id 属性 */
      canvasId: string,
      /** 在自定义组件下，当前组件实例的this，表示在这个自定义组件下查找拥有 canvas-id 的 `<canvas/>` ，如果省略则不在任何自定义组件内查找 */
      component?: any,
    ): CanvasContext;
    /** [[DownloadTask](https://developers.weixin.qq.com/miniprogram/dev/api/network/download/DownloadTask.html) wx.downloadFile(Object object)](wx.downloadFile.md)
*
* 下载文件资源到本地。客户端直接发起一个 HTTPS GET 请求，返回文件的本地临时路径。使用前请注意阅读[相关说明]((network))。
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
    /** [[FileSystemManager](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.html) wx.getFileSystemManager()](wx.getFileSystemManager.md)
     *
     * 获取全局唯一的文件管理器
     *
     * 最低基础库： `1.9.9` */
    getFileSystemManager(): FileSystemManager;
    /** [[InnerAudioContext](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/InnerAudioContext.html) wx.createInnerAudioContext()](wx.createInnerAudioContext.md)
     *
     * 创建内部 `audio` 上下文 `InnerAudioContext` 对象。
     *
     * 最低基础库： `1.6.0` */
    createInnerAudioContext(): InnerAudioContext;
    /** [[IntersectionObserver](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/IntersectionObserver.html) wx.createIntersectionObserver(Object this, Object options)](wx.createIntersectionObserver.md)
     *
     * 创建并返回一个 IntersectionObserver 对象实例。在自定义组件中，可以使用 `this.createIntersectionObserver([options])` 来代替。
     *
     * **示例代码**
     *
     *
     * {% minicode('LAbMxkmI7F2A') %}
     *
     * 最低基础库： `1.9.3` */
    createIntersectionObserver(
      /** 自定义组件实例 */
      component: any,
      /** 选项 */
      options: CreateIntersectionObserverOption,
    ): IntersectionObserver;
    /** [[IntersectionObserver](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/IntersectionObserver.html) wx.createIntersectionObserver(Object this, Object options)](wx.createIntersectionObserver.md)
     *
     * 创建并返回一个 IntersectionObserver 对象实例。在自定义组件中，可以使用 `this.createIntersectionObserver([options])` 来代替。
     *
     * **示例代码**
     *
     *
     * {% minicode('LAbMxkmI7F2A') %}
     *
     * 最低基础库： `1.9.3` */
    createIntersectionObserver(
      /** 选项 */
      options: CreateIntersectionObserverOption,
    ): IntersectionObserver;
    /** [[LivePlayerContext](https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePlayerContext.html) wx.createLivePlayerContext(string id, Object this)](wx.createLivePlayerContext.md)
     *
     * 创建 `live-player` 上下文 `LivePlayerContext` 对象。
     *
     * 最低基础库： `1.7.0` */
    createLivePlayerContext(
      /** `<live-player/>` 组件的 id */
      id: string,
      /** 在自定义组件下，当前组件实例的this，以操作组件内 `<live-player/>` 组件 */
      component?: any,
    ): LivePlayerContext;
    /** [[LivePusherContext](https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePusherContext.html) wx.createLivePusherContext()](wx.createLivePusherContext.md)
     *
     * 创建 `live-pusher` 上下文 `LivePusherContext` 对象。
     *
     * 最低基础库： `1.7.0` */
    createLivePusherContext(): LivePusherContext;
    /** [[LogManager](https://developers.weixin.qq.com/miniprogram/dev/api/debug/LogManager.html) wx.getLogManager(number level)](wx.getLogManager.md)
*
* 获取日志管理器对象。
*
* **示例代码**
*
*
* ```js
const logger = wx.getLogManager()
logger.log({str: 'hello world'}, 'basic log', 100, [1, 2, 3])
logger.info({str: 'hello world'}, 'info log', 100, [1, 2, 3])
logger.debug({str: 'hello world'}, 'debug log', 100, [1, 2, 3])
logger.warn({str: 'hello world'}, 'warn log', 100, [1, 2, 3])
```
*
* 最低基础库： `2.1.0` */
    getLogManager(
      /** 取值为0/1，取值为0表示是否会把 `App`、`Page` 的生命周期函数和 `wx` 命名空间下的函数调用写入日志，取值为1则不会。默认值是 0
       *
       * 最低基础库： `2.3.2` */
      level?: number,
    ): LogManager;
    /** [[MapContext](https://developers.weixin.qq.com/miniprogram/dev/api/map/MapContext.html) wx.createMapContext(string mapId, Object this)](wx.createMapContext.md)
     *
     * 创建 `map` 上下文 `MapContext` 对象。 */
    createMapContext(
      /** `<map/>` 组件的 id */
      mapId: string,
      /** 在自定义组件下，当前组件实例的this，以操作组件内 `<map/>` 组件 */
      component?: any,
    ): MapContext;
    /** [[RecorderManager](https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/RecorderManager.html) wx.getRecorderManager()](wx.getRecorderManager.md)
     *
     * 获取**全局唯一**的录音管理器 RecorderManager
     *
     * 最低基础库： `1.6.0` */
    getRecorderManager(): RecorderManager;
    /** [[RequestTask](https://developers.weixin.qq.com/miniprogram/dev/api/network/request/RequestTask.html) wx.request(Object object)](wx.request.md)
*
* 发起 HTTPS 网络请求。使用前请注意阅读[相关说明]((network))。
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
  url: 'test.php', //仅为示例，并非真实的接口地址
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
    request(option: RequestOption): RequestTask;
    /** [[SelectorQuery](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/SelectorQuery.html) wx.createSelectorQuery()](wx.createSelectorQuery.md)
*
* 返回一个 SelectorQuery 对象实例。
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
    /** [[SocketTask](https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/SocketTask.html) wx.connectSocket(Object object)](wx.connectSocket.md)
*
* 创建一个 WebSocket 连接。使用前请注意阅读[相关说明]((network))。
*
* **并发数**
*
*
* - 1.7.0 及以上版本，最多可以同时存在 5（小游戏）/2（小程序）个 WebSocket 连接。
* - 1.7.0 以下版本，一个小程序同时只能有一个 WebSocket 连接，如果当前已存在一个 WebSocket 连接，会自动关闭该连接，并重新创建一个 WebSocket 连接。
*
* **示例代码**
*
*
* ```js
wx.connectSocket({
  url: 'wss://example.qq.com',
  data:{
    x: '',
    y: ''
  },
  header:{
    'content-type': 'application/json'
  },
  protocols: ['protocol1'],
  method:"GET"
})
``` */
    connectSocket(option: ConnectSocketOption): SocketTask;
    /** [[UpdateManager](https://developers.weixin.qq.com/miniprogram/dev/api/update/UpdateManager.html) wx.getUpdateManager()](wx.getUpdateManager.md)
     *
     * 获取**全局唯一**的版本更新管理器，用于管理小程序更新。关于小程序的更新机制，可以查看[运行机制]((operating-mechanism))文档。
     *
     * 最低基础库： `1.9.90` */
    getUpdateManager(): UpdateManager;
    /** [[UploadTask](https://developers.weixin.qq.com/miniprogram/dev/api/network/upload/UploadTask.html) wx.uploadFile(Object object)](wx.uploadFile.md)
*
* 将本地资源上传到服务器。客户端发起一个 HTTPS POST 请求，其中 `content-type` 为 `multipart/form-data`。使用前请注意阅读[相关说明]((network))。
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
    /** [[VideoContext](https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.html) wx.createVideoContext(string id, Object this)](wx.createVideoContext.md)
     *
     * 创建 `video` 上下文 `VideoContext` 对象。 */
    createVideoContext(
      /** `<video/>` 组件的 id */
      id: string,
      /** 在自定义组件下，当前组件实例的this，以操作组件内 `<video/>` 组件 */
      component?: any,
    ): VideoContext;
    /** [[Worker](https://developers.weixin.qq.com/miniprogram/dev/api/worker/wx.createWorker.html) wx.createWorker(string scriptPath)](wx.createWorker.md)
     *
     * 创建一个 [Worker 线程]((多线程 Worker))。目前限制最多只能创建一个 Worker，创建下一个 Worker 前请先调用 [Worker.terminate](https://developers.weixin.qq.com/miniprogram/dev/api/worker/Worker.terminate.html)
     *
     * 最低基础库： `1.9.90` */
    createWorker(
      /** worker 入口文件的**绝对路径** */
      scriptPath: string,
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
    getStorageSync(
      /** 本地缓存中指定的 key */
      key: string,
    ): any;
    /** [boolean wx.canIUse(string schema)](wx.canIUse.md)
*
* 判断小程序的API，回调，参数，组件等是否在当前版本可用。
*
* **参数说明**
*
*
* - `${API}` 代表 API 名字
* - `${method}` 代表调用方式，有效值为return, success, object, callback
* - `${param}` 代表参数或者返回值
* - `${options}` 代表参数的可选值
* - `${component}` 代表组件名字
* - `${attribute}` 代表组件属性
* - `${option}` 代表组件属性的可选值
*
* **示例代码**
*
*
* ```js
wx.canIUse('openBluetoothAdapter')
wx.canIUse('getSystemInfoSync.return.screenWidth')
wx.canIUse('getSystemInfo.success.screenWidth')
wx.canIUse('showToast.object.image')
wx.canIUse('onCompassChange.callback.direction')
wx.canIUse('request.object.method.GET')

wx.canIUse('live-player')
wx.canIUse('text.selectable')
wx.canIUse('button.open-type.contact')
```
*
* 最低基础库： `1.1.1` */
    canIUse(
      /** 使用 `${API}.${method}.${param}.${options}` 或者 `${component}.${attribute}.${option}` 方式来调用 */
      schema: string,
    ): boolean;
    /** [wx.addCard(Object object)](wx.addCard.md)
*
* 批量添加卡券。只有通过 [认证](https://developers.weixin.qq.com/miniprogram/product/renzheng.html) 的小程序才能使用。更多文档请参考 [微信卡券接口文档](https://mp.weixin.qq.com/cgi-bin/announce?action=getannouncement&key=1490190158&version=1&lang=zh_CN&platform=2)。
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
    addCard(option: AddCardOption): void;
    /** [wx.addPhoneContact(Object object)](wx.addPhoneContact.md)
     *
     * 添加手机通讯录联系人。用户可以选择将该表单以「新增联系人」或「添加到已有联系人」的方式，写入手机系统通讯录。
     *
     * 最低基础库： `1.2.0` */
    addPhoneContact(option: AddPhoneContactOption): void;
    /** [wx.authorize(Object object)](wx.authorize.md)
*
* 提前向用户发起授权请求。调用后会立刻弹窗询问用户是否同意授权小程序使用某项功能或获取用户的某些数据，但不会实际调用对应接口。如果用户之前已经同意授权，则不会出现弹窗，直接返回成功。更多用法详见 [用户授权]((authorize))。
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
    authorize(option: AuthorizeOption): void;
    /** [wx.canvasGetImageData(Object object, Object this)](wx.canvasGetImageData.md)
*
* 获取 canvas 区域隐含的像素数据。
*
* **示例代码**
*
*
* {% minicode('GlCRTlmS7n27') %}
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
    canvasGetImageData(
      option: CanvasGetImageDataOption,
      /** 在自定义组件下，当前组件实例的this，以操作组件内 `<canvas/>` 组件 */
      component?: any,
    ): void;
    /** [wx.canvasPutImageData(Object object, Object this)](wx.canvasPutImageData.md)
     *
     * 将像素数据绘制到画布。在自定义组件下，第二个参数传入自定义组件实例 this，以操作组件内 <canvas> 组件
     *
     * 最低基础库： `1.9.0` */
    canvasPutImageData(
      option: CanvasPutImageDataOption,
      /** 在自定义组件下，当前组件实例的this，以操作组件内 `<canvas/>` 组件 */
      component?: any,
    ): void;
    /** [wx.canvasToTempFilePath(Object object, Object this)](wx.canvasToTempFilePath.md)
     *
     * 把当前画布指定区域的内容导出生成指定大小的图片。在 `draw()` 回调里调用该方法才能保证图片导出成功。 */
    canvasToTempFilePath(
      option: CanvasToTempFilePathOption,
      /** 在自定义组件下，当前组件实例的this，以操作组件内 `<canvas/>` 组件 */
      component?: any,
    ): void;
    /** [wx.checkIsSoterEnrolledInDevice(Object object)](wx.checkIsSoterEnrolledInDevice.md)
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
    checkIsSoterEnrolledInDevice(
      option: CheckIsSoterEnrolledInDeviceOption,
    ): void;
    /** [wx.checkIsSupportSoterAuthentication(Object object)](wx.checkIsSupportSoterAuthentication.md)
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
    checkIsSupportSoterAuthentication(
      option?: CheckIsSupportSoterAuthenticationOption,
    ): void;
    /** [wx.checkSession(Object object)](wx.checkSession.md)
*
* 检查登录态是否过期。
*
* 通过 wx.login 接口获得的用户登录态拥有一定的时效性。用户越久未使用小程序，用户登录态越有可能失效。反之如果用户一直在使用小程序，则用户登录态一直保持有效。具体时效逻辑由微信维护，对开发者透明。开发者只需要调用 wx.checkSession 接口检测当前用户登录态是否有效。
*
* 登录态过期后开发者可以再调用 wx.login 获取新的用户登录态。调用成功说明当前 session_key 未过期，调用失败说明 session_key 已过期。更多使用方法详见 [小程序登录]((login))。
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
    checkSession(option?: CheckSessionOption): void;
    /** [wx.chooseAddress(Object object)](wx.chooseAddress.md)
*
* 获取用户收货地址。调起用户编辑收货地址原生界面，并在编辑完成后返回用户选择的地址。
*
* **示例代码**
*
*
* {% minicode('024hHnmd772y') %}
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
    chooseAddress(option?: ChooseAddressOption): void;
    /** [wx.chooseImage(Object object)](wx.chooseImage.md)
*
* 从本地相册选择图片或使用相机拍照。
*
* **示例代码**
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
    chooseImage(option: ChooseImageOption): void;
    /** [wx.chooseInvoice(Object object)](wx.chooseInvoice.md)
     *
     * 选择用户已有的发票
     *
     * **通过 cardId 和 encryptCode 获得报销发票的信息**
     *
     *
     * 请参考[微信电子发票文档](https://mp.weixin.qq.com/wiki?t=resource/res_main&id=21517918939oae3U)中，「查询报销发票信息」部分。
     * 其中 `access_token` 的获取请参考[getAccessToken]((getAccessToken))文档
     *
     * 最低基础库： `2.3.0` */
    chooseInvoice(option?: ChooseInvoiceOption): void;
    /** [wx.chooseInvoiceTitle(Object object)](wx.chooseInvoiceTitle.md)
*
* 选择用户的发票抬头
*
* **示例代码**
*
*
* {% minicode('GJ4S9nmQ7x2E') %}
*
* ```js
wx.chooseInvoiceTitle({
  success(res) {}
})
```
*
* 最低基础库： `1.5.0` */
    chooseInvoiceTitle(option?: ChooseInvoiceTitleOption): void;
    /** [wx.chooseLocation(Object object)](wx.chooseLocation.md)
     *
     * 打开地图选择位置。 */
    chooseLocation(option?: ChooseLocationOption): void;
    /** [wx.chooseVideo(Object object)](wx.chooseVideo.md)
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
    chooseVideo(option: ChooseVideoOption): void;
    /** [wx.clearStorage(Object object)](wx.clearStorage.md)
*
* 清理本地数据缓存
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
    clearStorage(option?: ClearStorageOption): void;
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
    /** [wx.closeBLEConnection(Object object)](wx.closeBLEConnection.md)
*
* 断开与低功耗蓝牙设备的连接。
*
* **示例代码**
*
*
* {% minicode('pQU51zmz7a3K') %}
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
    closeBLEConnection(option: CloseBLEConnectionOption): void;
    /** [wx.closeBluetoothAdapter(Object object)](wx.closeBluetoothAdapter.md)
*
* 关闭蓝牙模块。调用该方法将断开所有已建立的连接并释放系统资源。建议在使用蓝牙流程后，与 `wx.openBluetoothAdapter` 成对调用。
*
* **示例代码**
*
*
* {% minicode('pQU51zmz7a3K') %}
* ```js
wx.closeBluetoothAdapter({
  success (res) {
    console.log(res)
  }
})
```
*
* 最低基础库： `1.1.0` */
    closeBluetoothAdapter(option?: CloseBluetoothAdapterOption): void;
    /** [wx.closeSocket(Object object)](wx.closeSocket.md)
*
* 关闭 WebSocket 连接
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
    closeSocket(option: CloseSocketOption): void;
    /** [wx.compressImage(Object object)](wx.compressImage.md)
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
    compressImage(option: CompressImageOption): void;
    /** [wx.connectWifi(Object object)](wx.connectWifi.md)
*
* 连接 Wi-Fi。若已知 Wi-Fi 信息，可以直接利用该接口连接。仅 Android 与 iOS 11 以上版本支持。
*
* **示例代码**
*
*
* ```js
wx.connectWifi({
  SSID: '',
  BSSID: '',
  success (res) {
    console.log(res.errMsg)
  }
})
```
*
* 最低基础库： `1.6.0` */
    connectWifi(option: ConnectWifiOption): void;
    /** [wx.createBLEConnection(Object object)](wx.createBLEConnection.md)
*
* 连接低功耗蓝牙设备。
*
* 若小程序在之前已有搜索过某个蓝牙设备，并成功建立连接，可直接传入之前搜索获取的 deviceId 直接尝试连接该设备，无需进行搜索操作。
*
* **注意**
*
*
* - 请保证尽量成对的调用 `createBLEConnection` 和 `closeBLEConnection` 接口。安卓如果多次调用 `createBLEConnection` 创建连接，有可能导致系统持有同一设备多个连接的实例，导致调用 `closeBLEConnection` 的时候并不能真正的断开与设备的连接。
* - 蓝牙连接随时可能断开，建议监听 `wx.onBLEConnectionStateChange` 回调事件，当蓝牙设备断开时按需执行重连操作
* - 若对未连接的设备或已断开连接的设备调用数据读写操作的接口，会返回 10006 错误，建议进行重连操作。
*
* **示例代码**
*
*
* {% minicode('pQU51zmz7a3K') %}
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
    createBLEConnection(option: CreateBLEConnectionOption): void;
    /** [wx.getAvailableAudioSources(Object object)](wx.getAvailableAudioSources.md)
     *
     * 获取当前支持的音频输入源
     *
     * 最低基础库： `2.1.0` */
    getAvailableAudioSources(option?: GetAvailableAudioSourcesOption): void;
    /** [wx.getBLEDeviceCharacteristics(Object object)](wx.getBLEDeviceCharacteristics.md)
*
* 获取蓝牙设备某个服务中所有特征值(characteristic)。
*
* **示例代码**
*
*
* {% minicode('pQU51zmz7a3K') %}
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
    getBLEDeviceCharacteristics(
      option: GetBLEDeviceCharacteristicsOption,
    ): void;
    /** [wx.getBLEDeviceServices(Object object)](wx.getBLEDeviceServices.md)
*
* 获取蓝牙设备所有服务(service)。
*
* **示例代码**
*
*
* {% minicode('pQU51zmz7a3K') %}
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
    getBLEDeviceServices(option: GetBLEDeviceServicesOption): void;
    /** [wx.getBackgroundAudioPlayerState(Object object)](wx.getBackgroundAudioPlayerState.md)
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
``` */
    getBackgroundAudioPlayerState(
      option?: GetBackgroundAudioPlayerStateOption,
    ): void;
    /** [wx.getBatteryInfo(Object object)](wx.getBatteryInfo.md)
     *
     * 获取设备电量。同步 API [wx.getBatteryInfoSync](https://developers.weixin.qq.com/miniprogram/dev/api/device/battery/wx.getBatteryInfoSync.html) 在 iOS 上不可用。 */
    getBatteryInfo(option?: GetBatteryInfoOption): void;
    /** [wx.getBeacons(Object object)](wx.getBeacons.md)
     *
     * 获取所有已搜索到的 iBeacon 设备
     *
     * 最低基础库： `1.2.0` */
    getBeacons(option?: GetBeaconsOption): void;
    /** [wx.getBluetoothAdapterState(Object object)](wx.getBluetoothAdapterState.md)
*
* 获取本机蓝牙适配器状态。
*
* **示例代码**
*
*
* {% minicode('pQU51zmz7a3K') %}
* ```js
wx.getBluetoothAdapterState({
  success (res) {
    console.log(res)
  }
})
```
*
* 最低基础库： `1.1.0` */
    getBluetoothAdapterState(option?: GetBluetoothAdapterStateOption): void;
    /** [wx.getBluetoothDevices(Object object)](wx.getBluetoothDevices.md)
*
* 获取在蓝牙模块生效期间所有已发现的蓝牙设备。包括已经和本机处于连接状态的设备。
*
* **示例代码**
*
*
* {% minicode('pQU51zmz7a3K') %}
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
* - 该接口获取到的设备列表为**蓝牙模块生效期间所有搜索到的蓝牙设备**，若在蓝牙模块使用流程结束后未及时调用 `wx.closeBluetoothAdapter` 释放资源，会存在调用该接口会返回之前的蓝牙使用流程中搜索到的蓝牙设备，可能设备已经不在用户身边，无法连接。
* - 蓝牙设备在被搜索到时，系统返回的 name 字段一般为广播包中的 LocalName 字段中的设备名称，而如果与蓝牙设备建立连接，系统返回的 name 字段会改为从蓝牙设备上获取到的 `GattName`。若需要动态改变设备名称并展示，建议使用 `localName` 字段。
*
* 最低基础库： `1.1.0` */
    getBluetoothDevices(option?: GetBluetoothDevicesOption): void;
    /** [wx.getClipboardData(Object object)](wx.getClipboardData.md)
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
    getClipboardData(option?: GetClipboardDataOption): void;
    /** [wx.getConnectedBluetoothDevices(Object object)](wx.getConnectedBluetoothDevices.md)
*
* 根据 uuid 获取处于已连接状态的设备。
*
* **示例代码**
*
*
* {% minicode('pQU51zmz7a3K') %}
* ```js
wx.getConnectedBluetoothDevices({
  success (res) {
    console.log(res)
  }
})
```
*
* 最低基础库： `1.1.0` */
    getConnectedBluetoothDevices(
      option: GetConnectedBluetoothDevicesOption,
    ): void;
    /** [wx.getConnectedWifi(Object object)](wx.getConnectedWifi.md)
     *
     * 获取已连接中的 Wi-Fi 信息。
     *
     * 最低基础库： `1.6.0` */
    getConnectedWifi(option?: GetConnectedWifiOption): void;
    /** [wx.getExtConfig(Object object)](wx.getExtConfig.md)
*
* 获取[第三方平台]((devtools/ext))自定义的数据字段。
*
* **Tips**
*
*
* 1. 本接口暂时无法通过 `wx.canIUse` 判断是否兼容，开发者需要自行判断 `wx.getExtConfig` 是否存在来兼容
*
* **示例代码**
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
    getExtConfig(option?: GetExtConfigOption): void;
    /** [wx.getFileInfo(Object object)](wx.getFileInfo.md)
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
    getFileInfo(option: WxGetFileInfoOption): void;
    /** [wx.getHCEState(Object object)](wx.getHCEState.md)
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
    getHCEState(option?: GetHCEStateOption): void;
    /** [wx.getImageInfo(Object object)](wx.getImageInfo.md)
*
* 获取图片信息。网络图片需先配置download域名才能生效。
*
* **示例代码**
*
*
* {% minicode('Kd47Sbmr6yYu') %}
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
    getImageInfo(option: GetImageInfoOption): void;
    /** [wx.getLocation(Object object)](wx.getLocation.md)
*
* 获取当前的地理位置、速度。当用户离开小程序后，此接口无法调用。
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
* - 工具中定位模拟使用IP定位，可能会有一定误差。且工具目前仅支持 gcj02 坐标。
* - 使用第三方服务进行逆地址解析时，请确认第三方服务默认的坐标系，正确进行坐标转换。 */
    getLocation(option: GetLocationOption): void;
    /** [wx.getNetworkType(Object object)](wx.getNetworkType.md)
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
    getNetworkType(option?: GetNetworkTypeOption): void;
    /** [wx.getSavedFileInfo(Object object)](wx.getSavedFileInfo.md)
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
    getSavedFileInfo(option: GetSavedFileInfoOption): void;
    /** [wx.getSavedFileList(Object object)](wx.getSavedFileList.md)
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
    getSavedFileList(option?: WxGetSavedFileListOption): void;
    /** [wx.getScreenBrightness(Object object)](wx.getScreenBrightness.md)
     *
     * 获取屏幕亮度
     *
     * **说明**
     *
     *
     * - 若安卓系统设置中开启了自动调节亮度功能，则屏幕亮度会根据光线自动调整，该接口仅能获取自动调节亮度之前的值，而非实时的亮度值。
     *
     * 最低基础库： `1.2.0` */
    getScreenBrightness(option?: GetScreenBrightnessOption): void;
    /** [wx.getSetting(Object object)](wx.getSetting.md)
*
* 获取用户的当前设置。**返回值中只会出现小程序已经向用户请求过的[权限](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/authorize/wx.authorize.html)**。
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
* 最低基础库： `1.2.0` */
    getSetting(option?: GetSettingOption): void;
    /** [wx.getShareInfo(Object object)](wx.getShareInfo.md)
*
* 获取转发详细信息
*
* **示例代码**
*
*
* encryptedData 解密后为以下 json 结构，详见[加密数据解密算法]((开放数据校验与解密))。其中 openGId 为当前群的唯一标识
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
* - 如需要展示群名称，可以使用[开放数据组件]((open-data))
*
* 最低基础库： `1.1.0` */
    getShareInfo(option: GetShareInfoOption): void;
    /** [wx.getStorage(Object object)](wx.getStorage.md)
*
* 从本地缓存中异步获取指定 key 的内容
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
    getStorage(option: GetStorageOption): void;
    /** [wx.getStorageInfo(Object object)](wx.getStorageInfo.md)
*
* 异步获取当前storage的相关信息
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
    getStorageInfo(option?: GetStorageInfoOption): void;
    /** [wx.getSystemInfo(Object object)](wx.getSystemInfo.md)
*
* 获取系统信息
*
* **示例代码**
*
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
    getSystemInfo(option?: GetSystemInfoOption): void;
    /** [wx.getUserInfo(Object object)](wx.getUserInfo.md)
*
* 获取用户信息。
*
* **接口调整说明**
*
*
* 在用户未授权过的情况下调用此接口，将不再出现授权弹窗，会直接进入 fail 回调（详见[《公告》]({% postUrl(0000a26e1aca6012e896a517556c01) %}))。在用户已授权的情况下调用此接口，可成功获取用户信息。
*
* **示例代码**
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
    getUserInfo(option: GetUserInfoOption): void;
    /** [wx.getWeRunData(Object object)](wx.getWeRunData.md)
*
* 获取用户过去三十天微信运动步数。需要先调用 [wx.login](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/login/wx.login.html) 接口。步数信息会在用户主动进入小程序时更新。
*
* **示例代码**
*
*
* ```js
wx.getWeRunData({
  success (res) {
    const encryptedData = res.encryptedData
  }
})
```
*
* **encryptedData 解密后 JSON 结构**
*
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
    getWeRunData(option?: GetWeRunDataOption): void;
    /** [wx.getWifiList(Object object)](wx.getWifiList.md)
     *
     * 请求获取 Wi-Fi 列表。在 `onGetWifiList` 注册的回调中返回 `wifiList` 数据。
     *
     * iOS 将跳转到系统的 Wi-Fi 界面，Android 不会跳转。 iOS 11.0 及 iOS 11.1 两个版本因系统问题，该方法失效。但在 iOS 11.2 中已修复。
     *
     * 最低基础库： `1.6.0` */
    getWifiList(option?: GetWifiListOption): void;
    /** [wx.hideLoading(Object object)](wx.hideLoading.md)
     *
     * 隐藏 loading 提示框
     *
     * 最低基础库： `1.1.0` */
    hideLoading(option?: HideLoadingOption): void;
    /** [wx.hideNavigationBarLoading(Object object)](wx.hideNavigationBarLoading.md)
     *
     * 在当前页面隐藏导航条加载动画 */
    hideNavigationBarLoading(option?: HideNavigationBarLoadingOption): void;
    /** [wx.hideShareMenu(Object object)](wx.hideShareMenu.md)
*
* 隐藏转发按钮
*
* **示例代码**
*
*
* ```js
wx.hideShareMenu()
```
*
* 最低基础库： `1.1.0` */
    hideShareMenu(option?: HideShareMenuOption): void;
    /** [wx.hideTabBar(Object object)](wx.hideTabBar.md)
     *
     * 隐藏 tabBar
     *
     * 最低基础库： `1.9.0` */
    hideTabBar(option: HideTabBarOption): void;
    /** [wx.hideTabBarRedDot(Object object)](wx.hideTabBarRedDot.md)
     *
     * 隐藏 tabBar 某一项的右上角的红点
     *
     * 最低基础库： `1.9.0` */
    hideTabBarRedDot(option: HideTabBarRedDotOption): void;
    /** [wx.hideToast(Object object)](wx.hideToast.md)
     *
     * 隐藏消息提示框 */
    hideToast(option?: HideToastOption): void;
    /** [wx.loadFontFace(Object object)](wx.loadFontFace.md)
*
* 动态加载网络字体。文件地址需为下载类型。iOS 仅支持 https 格式文件地址。
*
* 注意：
* 1. 引入中文字体，体积过大时会发生错误，建议抽离出部分中文，减少体积，或者用图片替代
* 2. 字体链接必须是https（ios不支持http)
* 3. 字体链接必须是同源下的，或开启了cors支持，小程序的域名是`servicewechat.com`
* 4. canvas等原生组件不支持使用接口添加的字体
* 5. 工具里提示 Faild to load font可以忽略
*
* **示例代码**
*
*
* {% minicode('b6Zrajm67R2x') %}
* ```js
wx.loadFontFace({
  family: 'Bitstream Vera Serif Bold',
  source: 'url("https://sungd.github.io/Pacifico.ttf")',
  success: console.log
})
```
*
* 最低基础库： `2.1.0` */
    loadFontFace(option: LoadFontFaceOption): void;
    /** [wx.login(Object object)](wx.login.md)
*
* 调用接口获取登录凭证（code）。通过凭证进而换取用户登录态信息，包括用户的唯一标识（openid）及本次登录的会话密钥（session_key）等。用户数据的加解密通讯需要依赖会话密钥完成。更多使用方法详见 [小程序登录]((login))。
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
        url: 'https://test.com/onLogin',
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
    login(option: LoginOption): void;
    /** [wx.makePhoneCall(Object object)](wx.makePhoneCall.md)
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
    makePhoneCall(option: MakePhoneCallOption): void;
    /** [wx.navigateBack(Object object)](wx.navigateBack.md)
     *
     * 关闭当前页面，返回上一页面或多级页面。可通过 [getCurrentPages()]((页面路由#getcurrentpages)) 获取当前的页面栈，决定需要返回几层。 */
    navigateBack(option: NavigateBackOption): void;
    /** [wx.navigateBackMiniProgram(Object object)](wx.navigateBackMiniProgram.md)
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
    navigateBackMiniProgram(option: NavigateBackMiniProgramOption): void;
    /** [wx.navigateTo(Object object)](wx.navigateTo.md)
*
* 保留当前页面，跳转到应用内的某个页面。但是不能跳到 tabbar 页面。使用 [wx.navigateBack](https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.navigateBack.html) 可以返回到原页面。
*
* **示例代码**
*
*
*
* ```js
wx.navigateTo({
  url: 'test?id=1'
})
```
*
* ```javascript
//test.js
Page({
  onLoad: function(option){
    console.log(option.query)
  }
})
``` */
    navigateTo(option: NavigateToOption): void;
    /** [wx.navigateToMiniProgram(Object object)](wx.navigateToMiniProgram.md)
*
* 打开另一个小程序
*
* **使用限制**
*
*
* ##### 需要用户触发跳转
* 从 2.3.0 版本开始，若用户未点击小程序页面任意位置，则开发者将无法调用此接口自动跳转至其他小程序。
* ##### 需要用户确认跳转
* 从 2.3.0 版本开始，在跳转至其他小程序前，将统一增加弹窗，询问是否跳转，用户确认后才可以跳转其他小程序。如果用户点击取消，则回调 `fail cancel`。
* ##### 每个小程序可跳转的其他小程序数量限制为不超过 10 个
* 从 2.4.0 版本以及指定日期（具体待定）开始，开发者提交新版小程序代码时，如使用了跳转其他小程序功能，则需要在代码配置中声明将要跳转的小程序名单，限定不超过 10 个，否则将无法通过审核。该名单可在发布新版时更新，不支持动态修改。配置方法详见 [配置]((config))。调用此接口时，所跳转的 appId 必须在配置列表中，否则回调 `fail appId "${appId}" is not in navigateToMiniProgramAppIdList`。
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
* 最低基础库： `[object Object]` */
    navigateToMiniProgram(option: NavigateToMiniProgramOption): void;
    /** [wx.nextTick(function callback)](wx.nextTick.md)
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
     * 最低基础库： `2.2.3` */
    nextTick(callback: Function): void;
    /** [wx.notifyBLECharacteristicValueChange(Object object)](wx.notifyBLECharacteristicValueChange.md)
*
* 启用低功耗蓝牙设备特征值变化时的 notify 功能，订阅特征值。注意：必须设备的特征值支持 notify 或者 indicate 才可以成功调用。
*
* 另外，必须先启用 `notifyBLECharacteristicValueChange` 才能监听到设备 `characteristicValueChange` 事件
*
* **注意**
*
*
* - 订阅操作成功后需要设备主动更新特征值的 value，才会触发 `wx.onBLECharacteristicValueChange` 回调。
* - 安卓平台上，在调用 `notifyBLECharacteristicValueChange` 成功后立即调用 `writeBLECharacteristicValue` 接口，在部分机型上会发生 10008 系统错误
*
* **示例代码**
*
*
* {% minicode('pQU51zmz7a3K') %}
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
    notifyBLECharacteristicValueChange(
      option: NotifyBLECharacteristicValueChangeOption,
    ): void;
    /** [wx.offAppHide(function callback)](wx.offAppHide.md)
     *
     * 取消监听小程序切后台事件
     *
     * 最低基础库： `2.1.2` */
    offAppHide(
      /** 小程序切后台事件的回调函数 */
      callback: OffAppHideCallback,
    ): void;
    /** [wx.offAppShow(function callback)](wx.offAppShow.md)
     *
     * 取消监听小程序切前台事件
     *
     * 最低基础库： `2.1.2` */
    offAppShow(
      /** 小程序切前台事件的回调函数 */
      callback: OffAppShowCallback,
    ): void;
    /** [wx.offError(function callback)](wx.offError.md)
     *
     * 取消监听小程序错误事件。
     *
     * 最低基础库： `2.1.2` */
    offError(
      /** 小程序错误事件的回调函数 */
      callback: Function,
    ): void;
    /** [wx.offLocalServiceDiscoveryStop(function callback)](wx.offLocalServiceDiscoveryStop.md)
     *
     * 取消监听 mDNS 服务停止搜索的事件
     *
     * 最低基础库： `2.4.0` */
    offLocalServiceDiscoveryStop(
      /** mDNS 服务停止搜索的事件的回调函数 */
      callback: OffLocalServiceDiscoveryStopCallback,
    ): void;
    /** [wx.offLocalServiceFound(function callback)](wx.offLocalServiceFound.md)
     *
     * 取消监听 mDNS 服务发现的事件
     *
     * 最低基础库： `2.4.0` */
    offLocalServiceFound(
      /** mDNS 服务发现的事件的回调函数 */
      callback: OffLocalServiceFoundCallback,
    ): void;
    /** [wx.offLocalServiceLost(function callback)](wx.offLocalServiceLost.md)
     *
     * 取消监听 mDNS 服务离开的事件
     *
     * 最低基础库： `2.4.0` */
    offLocalServiceLost(
      /** mDNS 服务离开的事件的回调函数 */
      callback: OffLocalServiceLostCallback,
    ): void;
    /** [wx.offLocalServiceResolveFail(function callback)](wx.offLocalServiceResolveFail.md)
     *
     * 取消监听 mDNS 服务解析失败的事件
     *
     * 最低基础库： `2.4.0` */
    offLocalServiceResolveFail(
      /** mDNS 服务解析失败的事件的回调函数 */
      callback: OffLocalServiceResolveFailCallback,
    ): void;
    /** [wx.offPageNotFound(function callback)](wx.offPageNotFound.md)
     *
     * 取消监听小程序要打开的页面不存在事件
     *
     * 最低基础库： `2.1.2` */
    offPageNotFound(
      /** 小程序要打开的页面不存在事件的回调函数 */
      callback: OffPageNotFoundCallback,
    ): void;
    /** [wx.offWindowResize(function callback)](wx.offWindowResize.md)
     *
     * 取消监听窗口尺寸变化事件
     *
     * 最低基础库： `2.3.0` */
    offWindowResize(
      /** 窗口尺寸变化事件的回调函数 */
      callback: OffWindowResizeCallback,
    ): void;
    /** [wx.onAccelerometerChange(function callback)](wx.onAccelerometerChange.md)
*
* 监听加速度数据事件。频率根据 [wx.startAccelerometer()](https://developers.weixin.qq.com/miniprogram/dev/api/device/accelerometer/wx.startAccelerometer.html) 的 interval 参数。可使用 [wx.stopAccelerometer()](https://developers.weixin.qq.com/miniprogram/dev/api/device/accelerometer/wx.stopAccelerometer.html) 停止监听。
*
* **示例代码**
*
*
* ```js
wx.onAccelerometerChange(function (res) {
  console.log(res.x)
  console.log(res.y)
  console.log(res.z)
})
``` */
    onAccelerometerChange(
      /** 加速度数据事件的回调函数 */
      callback: OnAccelerometerChangeCallback,
    ): void;
    /** [wx.onAppHide(function callback)](wx.onAppHide.md)
     *
     * 监听小程序切后台事件。该事件与 [`App.onHide`]((app-service/app#onhide)) 的回调时机一致。
     *
     * 最低基础库： `2.1.2` */
    onAppHide(
      /** 小程序切后台事件的回调函数 */
      callback: OnAppHideCallback,
    ): void;
    /** [wx.onAppShow(function callback)](wx.onAppShow.md)
     *
     * 监听小程序切前台事件。该事件与 [`App.onShow`]((app-service/app#onshowobject)) 的回调参数一致。
     *
     * **返回有效 referrerInfo 的场景**
     *
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
     *
     * 部分版本在无`referrerInfo`的时候会返回 `undefined`，建议使用 `options.referrerInfo && options.referrerInfo.appId` 进行判断。
     *
     * 最低基础库： `2.1.2` */
    onAppShow(
      /** 小程序切前台事件的回调函数 */
      callback: OnAppShowCallback,
    ): void;
    /** [wx.onBLECharacteristicValueChange(function callback)](wx.onBLECharacteristicValueChange.md)
*
* 监听低功耗蓝牙设备的特征值变化事件。必须先启用 `notifyBLECharacteristicValueChange` 接口才能接收到设备推送的 notification。
*
* **示例代码**
*
*
* {% minicode('pQU51zmz7a3K') %}
*
* ```js
// ArrayBuffer转16进度字符串示例
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
    /** [wx.onBLEConnectionStateChange(function callback)](wx.onBLEConnectionStateChange.md)
*
* 监听低功耗蓝牙连接状态的改变事件。包括开发者主动连接或断开连接，设备丢失，连接异常断开等等
*
* **示例代码**
*
*
* {% minicode('pQU51zmz7a3K') %}
* ```js
wx.onBLEConnectionStateChange(function(res) {
  // 该方法回调中可以用于处理连接意外断开等异常情况
  console.log(`device ${res.deviceId} state has changed, connected: ${res.connected}`)
})
```
*
* 最低基础库： `1.1.1` */
    onBLEConnectionStateChange(
      /** 低功耗蓝牙连接状态的改变事件的回调函数 */
      callback: OnBLEConnectionStateChangeCallback,
    ): void;
    /** [wx.onBackgroundAudioPause(function callback)](wx.onBackgroundAudioPause.md)
     *
     * 监听音乐暂停事件。 */
    onBackgroundAudioPause(
      /** 音乐暂停事件的回调函数 */
      callback: OnBackgroundAudioPauseCallback,
    ): void;
    /** [wx.onBackgroundAudioPlay(function callback)](wx.onBackgroundAudioPlay.md)
     *
     * 监听音乐播放事件。 */
    onBackgroundAudioPlay(
      /** 音乐播放事件的回调函数 */
      callback: OnBackgroundAudioPlayCallback,
    ): void;
    /** [wx.onBackgroundAudioStop(function callback)](wx.onBackgroundAudioStop.md)
     *
     * 监听音乐停止事件。 */
    onBackgroundAudioStop(
      /** 音乐停止事件的回调函数 */
      callback: OnBackgroundAudioStopCallback,
    ): void;
    /** [wx.onBeaconServiceChange(function callback)](wx.onBeaconServiceChange.md)
     *
     * 监听 iBeacon 服务状态变化事件
     *
     * 最低基础库： `1.2.0` */
    onBeaconServiceChange(
      /** iBeacon 服务状态变化事件的回调函数 */
      callback: OnBeaconServiceChangeCallback,
    ): void;
    /** [wx.onBeaconUpdate(function callback)](wx.onBeaconUpdate.md)
     *
     * 监听 iBeacon 设备更新事件
     *
     * 最低基础库： `1.2.0` */
    onBeaconUpdate(
      /** iBeacon 设备更新事件的回调函数 */
      callback: OnBeaconUpdateCallback,
    ): void;
    /** [wx.onBluetoothAdapterStateChange(function callback)](wx.onBluetoothAdapterStateChange.md)
*
* 监听蓝牙适配器状态变化事件
*
* **示例代码**
*
*
* {% minicode('pQU51zmz7a3K') %}
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
    /** [wx.onBluetoothDeviceFound(function callback)](wx.onBluetoothDeviceFound.md)
*
* 监听寻找到新设备的事件
*
* **注意**
*
*
* - 若在 `wx.onBluetoothDeviceFound` 回调了某个设备，则此设备会添加到 `wx.getBluetoothDevices` 接口获取到的数组中。
*
* **示例代码**
*
*
* {% minicode('pQU51zmz7a3K') %}
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
wx.onBluetoothDeviceFound(function(devices) {
  console.log('new device list has founded')
  console.dir(devices)
  console.log(ab2hex(devices[0].advertisData))
})
```
*
* 最低基础库： `1.1.0` */
    onBluetoothDeviceFound(
      /** 寻找到新设备的事件的回调函数 */
      callback: OnBluetoothDeviceFoundCallback,
    ): void;
    /** [wx.onCompassChange(function callback)](wx.onCompassChange.md)
     *
     * 监听罗盘数据变化事件。频率：5 次/秒，接口调用后会自动开始监听，可使用 wx.stopCompass 停止监听。
     *
     * **accuracy 在 iOS/Android 的差异**
     *
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
    /** [wx.onDeviceMotionChange(function callback)](wx.onDeviceMotionChange.md)
     *
     * 监听设备方向变化事件。频率根据 [wx.startDeviceMotionListening()](https://developers.weixin.qq.com/miniprogram/dev/api/device/motion/wx.startDeviceMotionListening.html) 的 interval 参数。可以使用 [wx.stopDeviceMotionListening()](https://developers.weixin.qq.com/miniprogram/dev/api/device/motion/wx.stopDeviceMotionListening.html) 停止监听。
     *
     * 最低基础库： `2.3.0` */
    onDeviceMotionChange(
      /** 设备方向变化事件的回调函数 */
      callback: OnDeviceMotionChangeCallback,
    ): void;
    /** [wx.onError(function callback)](wx.onError.md)
     *
     * 监听小程序错误事件。如脚本错误或 API 调用报错等。该事件与 [`App.onError`]((app-service/app#onerrorstring-error)) 的回调时机与参数一致。
     *
     * 最低基础库： `2.1.2` */
    onError(
      /** 小程序错误事件的回调函数 */
      callback: OnAppErrorCallback,
    ): void;
    /** [wx.onGetWifiList(function callback)](wx.onGetWifiList.md)
     *
     * 监听获取到 Wi-Fi 列表数据事件
     *
     * 最低基础库： `1.6.0` */
    onGetWifiList(
      /** 获取到 Wi-Fi 列表数据事件的回调函数 */
      callback: OnGetWifiListCallback,
    ): void;
    /** [wx.onGyroscopeChange(function callback)](wx.onGyroscopeChange.md)
     *
     * 监听陀螺仪数据变化事件。频率根据 [wx.startGyroscope()](https://developers.weixin.qq.com/miniprogram/dev/api/device/gyroscope/wx.startGyroscope.html) 的 interval 参数。可以使用 [wx.stopGyroscope()](https://developers.weixin.qq.com/miniprogram/dev/api/device/gyroscope/wx.stopGyroscope.html) 停止监听。
     *
     * 最低基础库： `2.3.0` */
    onGyroscopeChange(
      /** 陀螺仪数据变化事件的回调函数 */
      callback: OnGyroscopeChangeCallback,
    ): void;
    /** [wx.onHCEMessage(function callback)](wx.onHCEMessage.md)
     *
     * 监听接收 NFC 设备消息事件
     *
     * 最低基础库： `1.7.0` */
    onHCEMessage(
      /** 接收 NFC 设备消息事件的回调函数 */
      callback: OnHCEMessageCallback,
    ): void;
    /** [wx.onLocalServiceDiscoveryStop(function callback)](wx.onLocalServiceDiscoveryStop.md)
     *
     * 监听 mDNS 服务停止搜索的事件
     *
     * 最低基础库： `2.4.0` */
    onLocalServiceDiscoveryStop(
      /** mDNS 服务停止搜索的事件的回调函数 */
      callback: OnLocalServiceDiscoveryStopCallback,
    ): void;
    /** [wx.onLocalServiceFound(function callback)](wx.onLocalServiceFound.md)
     *
     * 监听 mDNS 服务发现的事件
     *
     * 最低基础库： `2.4.0` */
    onLocalServiceFound(
      /** mDNS 服务发现的事件的回调函数 */
      callback: OnLocalServiceFoundCallback,
    ): void;
    /** [wx.onLocalServiceLost(function callback)](wx.onLocalServiceLost.md)
     *
     * 监听 mDNS 服务离开的事件
     *
     * 最低基础库： `2.4.0` */
    onLocalServiceLost(
      /** mDNS 服务离开的事件的回调函数 */
      callback: OnLocalServiceLostCallback,
    ): void;
    /** [wx.onLocalServiceResolveFail(function callback)](wx.onLocalServiceResolveFail.md)
     *
     * 监听 mDNS 服务解析失败的事件
     *
     * 最低基础库： `2.4.0` */
    onLocalServiceResolveFail(
      /** mDNS 服务解析失败的事件的回调函数 */
      callback: OnLocalServiceResolveFailCallback,
    ): void;
    /** [wx.onMemoryWarning(function callback)](wx.onMemoryWarning.md)
     *
     * 监听内存不足告警事件。
     *
     * 当 iOS/Android 向小程序进程发出内存警告时，触发该事件。触发该事件不意味小程序被杀，大部分情况下仅仅是告警，开发者可在收到通知后回收一些不必要资源避免进一步加剧内存紧张。
     *
     * **示例代码**
     *
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
    /** [wx.onNetworkStatusChange(function callback)](wx.onNetworkStatusChange.md)
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
    /** [wx.onPageNotFound(function callback)](wx.onPageNotFound.md)
     *
     * 监听小程序要打开的页面不存在事件。该事件与 [`App.onPageNotFound`]((app-service/app#onpagenotfoundobject)) 的回调时机一致。
     *
     * **注意**
     *
     *
     * - 开发者可以在回调中进行页面重定向，但必须在回调中**同步**处理，异步处理（例如 `setTimeout` 异步执行）无效。
     * - 若开发者没有调用 `wx.onPageNotFound` 绑定监听，也没有声明 `App.onPageNotFound`，当跳转页面不存在时，将推入微信客户端原生的页面不存在提示页面。
     * - 如果回调中又重定向到另一个不存在的页面，将推入微信客户端原生的页面不存在提示页面，并且不再第二次回调。
     *
     * 最低基础库： `2.1.2` */
    onPageNotFound(
      /** 小程序要打开的页面不存在事件的回调函数 */
      callback: OnPageNotFoundCallback,
    ): void;
    /** [wx.onSocketClose(function callback)](wx.onSocketClose.md)
     *
     * 监听 WebSocket 连接关闭事件 */
    onSocketClose(
      /** WebSocket 连接关闭事件的回调函数 */
      callback: OnSocketCloseCallback,
    ): void;
    /** [wx.onSocketError(function callback)](wx.onSocketError.md)
     *
     * 监听 WebSocket 错误事件 */
    onSocketError(
      /** WebSocket 错误事件的回调函数 */
      callback: OnSocketErrorCallback,
    ): void;
    /** [wx.onSocketMessage(function callback)](wx.onSocketMessage.md)
     *
     * 监听 WebSocket 接受到服务器的消息事件 */
    onSocketMessage(
      /** WebSocket 接受到服务器的消息事件的回调函数 */
      callback: OnSocketMessageCallback,
    ): void;
    /** [wx.onSocketOpen(function callback)](wx.onSocketOpen.md)
     *
     * 监听 WebSocket 连接打开事件 */
    onSocketOpen(
      /** WebSocket 连接打开事件的回调函数 */
      callback: OnSocketOpenCallback,
    ): void;
    /** [wx.onUserCaptureScreen(function callback)](wx.onUserCaptureScreen.md)
*
* 监听用户主动截屏事件。用户使用系统截屏按键截屏时触发
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
    /** [wx.onWifiConnected(function callback)](wx.onWifiConnected.md)
     *
     * 监听连接上 Wi-Fi 的事件
     *
     * 最低基础库： `1.6.0` */
    onWifiConnected(
      /** 连接上 Wi-Fi 的事件的回调函数 */
      callback: OnWifiConnectedCallback,
    ): void;
    /** [wx.onWindowResize(function callback)](wx.onWindowResize.md)
     *
     * 监听窗口尺寸变化事件
     *
     * 最低基础库： `2.3.0` */
    onWindowResize(
      /** 窗口尺寸变化事件的回调函数 */
      callback: OnWindowResizeCallback,
    ): void;
    /** [wx.openBluetoothAdapter(Object object)](wx.openBluetoothAdapter.md)
*
* 初始化蓝牙模块
*
* **注意**
*
*
* - 其他蓝牙相关 API 必须在 `wx.openBluetoothAdapter` 调用之后使用。否则 API 会返回错误（errCode=10000）。
* - 在用户蓝牙开关未开启或者手机不支持蓝牙功能的情况下，调用 `wx.openBluetoothAdapter` 会返回错误（errCode=10001），表示手机蓝牙功能不可用。此时小程序蓝牙模块已经初始化完成，可通过 `wx.onBluetoothAdapterStateChange` 监听手机蓝牙状态的改变，也可以调用蓝牙模块的所有API。
*
* **示例代码**
*
*
* {% minicode('pQU51zmz7a3K') %}
* ```js
wx.openBluetoothAdapter({
  success (res) {
    console.log(res)
  }
})
```
*
* 最低基础库： `1.1.0` */
    openBluetoothAdapter(option?: OpenBluetoothAdapterOption): void;
    /** [wx.openCard(Object object)](wx.openCard.md)
*
* 查看微信卡包中的卡券。只有通过 [认证](https://developers.weixin.qq.com/miniprogram/product/renzheng.html) 的小程序才能使用。更多文档请参考 [微信卡券接口文档](https://mp.weixin.qq.com/cgi-bin/announce?action=getannouncement&key=1490190158&version=1&lang=zh_CN&platform=2)。
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
    openCard(option: OpenCardOption): void;
    /** [wx.openDocument(Object object)](wx.openDocument.md)
     *
     * 新开页面打开文档 */
    openDocument(option: OpenDocumentOption): void;
    /** [wx.openLocation(Object object)](wx.openLocation.md)
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
    openLocation(option: OpenLocationOption): void;
    /** [wx.openSetting(Object object)](wx.openSetting.md)
*
* 调起客户端小程序设置界面，返回用户设置的操作结果。**设置界面只会出现小程序已经向用户请求过的[权限](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/authorize/wx.authorize.html)**。
*
*
* 注意：{% version(2.3.0) %} 版本开始，用户发生点击行为后，才可以跳转打开设置页，管理授权信息。[详情]({% postUrl(000cea2305cc5047af5733de751008) %})
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
    openSetting(option?: OpenSettingOption): void;
    /** [wx.pageScrollTo(Object object)](wx.pageScrollTo.md)
*
* 将页面滚动到目标位置
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
    pageScrollTo(option: PageScrollToOption): void;
    /** [wx.pauseBackgroundAudio(Object object)](wx.pauseBackgroundAudio.md)
*
* 暂停播放音乐。
*
* **示例代码**
*
*
* ```js
wx.pauseBackgroundAudio()
``` */
    pauseBackgroundAudio(option?: PauseBackgroundAudioOption): void;
    /** [wx.pauseVoice(Object object)](wx.pauseVoice.md)
*
* 暂停正在播放的语音。再次调用 [`wx.playVoice`](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/wx.playVoice.html) 播放同一个文件时，会从暂停处开始播放。如果想从头开始播放，需要先调用 [`wx.stopVoice`](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/wx.stopVoice.html)。
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
``` */
    pauseVoice(option?: PauseVoiceOption): void;
    /** [wx.playBackgroundAudio(Object object)](wx.playBackgroundAudio.md)
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
``` */
    playBackgroundAudio(option: PlayBackgroundAudioOption): void;
    /** [wx.playVoice(Object object)](wx.playVoice.md)
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
``` */
    playVoice(option: PlayVoiceOption): void;
    /** [wx.previewImage(Object object)](wx.previewImage.md)
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
    previewImage(option: PreviewImageOption): void;
    /** [wx.reLaunch(Object object)](wx.reLaunch.md)
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
    reLaunch(option: ReLaunchOption): void;
    /** [wx.readBLECharacteristicValue(Object object)](wx.readBLECharacteristicValue.md)
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
* {% minicode('pQU51zmz7a3K') %}
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
    readBLECharacteristicValue(option: ReadBLECharacteristicValueOption): void;
    /** [wx.redirectTo(Object object)](wx.redirectTo.md)
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
    redirectTo(option: RedirectToOption): void;
    /** [wx.removeSavedFile(Object object)](wx.removeSavedFile.md)
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
    removeSavedFile(option: WxRemoveSavedFileOption): void;
    /** [wx.removeStorage(Object object)](wx.removeStorage.md)
*
* 从本地缓存中移除指定 key
*
* **示例代码**
*
*
* ```js
wx.removeStorage({
  key: 'key',
  success (res) {
    console.log(res.data)
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
    removeStorage(option: RemoveStorageOption): void;
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
    console.log(res.data)
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
    /** [wx.removeTabBarBadge(Object object)](wx.removeTabBarBadge.md)
     *
     * 移除 tabBar 某一项右上角的文本
     *
     * 最低基础库： `1.9.0` */
    removeTabBarBadge(option: RemoveTabBarBadgeOption): void;
    /** [wx.reportAnalytics(string eventName, Object data)](wx.reportAnalytics.md)
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
      /** 上报的自定义数据。 */
      data: Data,
    ): void;
    /** [wx.reportMonitor(string name, number value)](wx.reportMonitor.md)
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
    /** [wx.requestPayment(Object object)](wx.requestPayment.md)
*
* 发起微信支付。了解更多信息，请查看[微信支付接口文档](https://pay.weixin.qq.com/wiki/doc/api/wxa/wxa_api.php?chapter=7_3&index=1)
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
``` */
    requestPayment(option: RequestPaymentOption): void;
    /** [wx.saveFile(Object object)](wx.saveFile.md)
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
    saveFile(option: WxSaveFileOption): void;
    /** [wx.saveImageToPhotosAlbum(Object object)](wx.saveImageToPhotosAlbum.md)
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
    saveImageToPhotosAlbum(option: SaveImageToPhotosAlbumOption): void;
    /** [wx.saveVideoToPhotosAlbum(Object object)](wx.saveVideoToPhotosAlbum.md)
*
* 保存视频到系统相册
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
    saveVideoToPhotosAlbum(option: SaveVideoToPhotosAlbumOption): void;
    /** [wx.scanCode(Object object)](wx.scanCode.md)
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
``` */
    scanCode(option: ScanCodeOption): void;
    /** [wx.seekBackgroundAudio(Object object)](wx.seekBackgroundAudio.md)
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
``` */
    seekBackgroundAudio(option: SeekBackgroundAudioOption): void;
    /** [wx.sendHCEMessage(Object object)](wx.sendHCEMessage.md)
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
    sendHCEMessage(option: SendHCEMessageOption): void;
    /** [wx.sendSocketMessage(Object object)](wx.sendSocketMessage.md)
*
* 通过 WebSocket 连接发送数据。需要先 wx.connectSocket，并在 wx.onSocketOpen 回调之后才能发送。
*
* **示例代码**
*
*
* ```js
const socketOpen = false
const socketMsgQueue = []
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
    sendSocketMessage(option: SendSocketMessageOption): void;
    /** [wx.setBackgroundColor(Object object)](wx.setBackgroundColor.md)
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
    setBackgroundColor(option: SetBackgroundColorOption): void;
    /** [wx.setBackgroundTextStyle(Object object)](wx.setBackgroundTextStyle.md)
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
    setBackgroundTextStyle(option: SetBackgroundTextStyleOption): void;
    /** [wx.setClipboardData(Object object)](wx.setClipboardData.md)
*
* 设置系统剪贴板的内容
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
    setClipboardData(option: SetClipboardDataOption): void;
    /** [wx.setEnableDebug(Object object)](wx.setEnableDebug.md)
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
    setEnableDebug(option: SetEnableDebugOption): void;
    /** [wx.setInnerAudioOption(Object object)](wx.setInnerAudioOption.md)
     *
     * 设置 [InnerAudioContext](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/InnerAudioContext.html) 的播放选项。设置之后对当前小程序全局生效。
     *
     * 最低基础库： `2.3.0` */
    setInnerAudioOption(option: SetInnerAudioOption): void;
    /** [wx.setKeepScreenOn(Object object)](wx.setKeepScreenOn.md)
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
    setKeepScreenOn(option: SetKeepScreenOnOption): void;
    /** [wx.setNavigationBarColor(Object object)](wx.setNavigationBarColor.md)
     *
     * 设置页面导航条颜色
     *
     * 最低基础库： `1.4.0` */
    setNavigationBarColor(option: SetNavigationBarColorOption): void;
    /** [wx.setNavigationBarTitle(Object object)](wx.setNavigationBarTitle.md)
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
    setNavigationBarTitle(option: SetNavigationBarTitleOption): void;
    /** [wx.setScreenBrightness(Object object)](wx.setScreenBrightness.md)
     *
     * 设置屏幕亮度
     *
     * 最低基础库： `1.2.0` */
    setScreenBrightness(option: SetScreenBrightnessOption): void;
    /** [wx.setStorage(Object object)](wx.setStorage.md)
*
* 将数据存储在本地缓存中指定的 key 中。会覆盖掉原来该 key 对应的内容。数据存储生命周期跟小程序本身一致，即除用户主动删除或超过一定时间被自动清理，否则数据都一直可用。单个 key 允许存储的最大数据长度为 1MB，所有数据存储上限为 10MB。
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
    setStorage(option: SetStorageOption): void;
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
    setStorageSync(
      /** 本地缓存中指定的 key */
      key: string,
      /** 需要存储的内容。只支持原生类型、Date、及能够通过`JSON.stringify`序列化的对象。 */
      data: any,
    ): void;
    /** [wx.setTabBarBadge(Object object)](wx.setTabBarBadge.md)
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
    setTabBarBadge(option: SetTabBarBadgeOption): void;
    /** [wx.setTabBarItem(Object object)](wx.setTabBarItem.md)
*
* 动态设置 tabBar 某一项的内容
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
    setTabBarItem(option: SetTabBarItemOption): void;
    /** [wx.setTabBarStyle(Object object)](wx.setTabBarStyle.md)
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
    setTabBarStyle(option: SetTabBarStyleOption): void;
    /** [wx.setTopBarText(Object object)](wx.setTopBarText.md)
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
* 最低基础库： `1.4.3` */
    setTopBarText(option: SetTopBarTextOption): void;
    /** [wx.setWifiList(Object object)](wx.setWifiList.md)
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
    setWifiList(option: SetWifiListOption): void;
    /** [wx.showActionSheet(Object object)](wx.showActionSheet.md)
*
* ​显示操作菜单
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
    showActionSheet(option: ShowActionSheetOption): void;
    /** [wx.showLoading(Object object)](wx.showLoading.md)
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
* - `wx.showLoading` 和 `wx.showToast` 同时只能显示一个
* - `wx.showLoading` 应与 `wx.hideLoading` 配对使用
*
* 最低基础库： `1.1.0` */
    showLoading(option: ShowLoadingOption): void;
    /** [wx.showModal(Object object)](wx.showModal.md)
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
    showModal(option: ShowModalOption): void;
    /** [wx.showNavigationBarLoading(Object object)](wx.showNavigationBarLoading.md)
     *
     * 在当前页面显示导航条加载动画 */
    showNavigationBarLoading(option?: ShowNavigationBarLoadingOption): void;
    /** [wx.showShareMenu(Object object)](wx.showShareMenu.md)
*
* 显示当前页面的转发按钮
*
* **示例代码**
*
*
* ```js
wx.showShareMenu({
  withShareTicket: true
})
```
*
* 最低基础库： `1.1.0` */
    showShareMenu(option: ShowShareMenuOption): void;
    /** [wx.showTabBar(Object object)](wx.showTabBar.md)
     *
     * 显示 tabBar
     *
     * 最低基础库： `1.9.0` */
    showTabBar(option: ShowTabBarOption): void;
    /** [wx.showTabBarRedDot(Object object)](wx.showTabBarRedDot.md)
     *
     * 显示 tabBar 某一项的右上角的红点
     *
     * 最低基础库： `1.9.0` */
    showTabBarRedDot(option: ShowTabBarRedDotOption): void;
    /** [wx.showToast(Object object)](wx.showToast.md)
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
* - `wx.showLoading` 和 `wx.showToast` 同时只能显示一个
* - `wx.showToast` 应与 `wx.hideToast` 配对使用 */
    showToast(option: ShowToastOption): void;
    /** [wx.startAccelerometer(Object object)](wx.startAccelerometer.md)
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
    startAccelerometer(option: StartAccelerometerOption): void;
    /** [wx.startBeaconDiscovery(Object object)](wx.startBeaconDiscovery.md)
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
    startBeaconDiscovery(option: StartBeaconDiscoveryOption): void;
    /** [wx.startBluetoothDevicesDiscovery(Object object)](wx.startBluetoothDevicesDiscovery.md)
*
* 开始搜寻附近的蓝牙外围设备。**此操作比较耗费系统资源，请在搜索并连接到设备后调用 `wx.stopBluetoothDevicesDiscovery` 方法停止搜索。**
*
* **示例代码**
*
*
* {% minicode('pQU51zmz7a3K') %}
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
    startBluetoothDevicesDiscovery(
      option: StartBluetoothDevicesDiscoveryOption,
    ): void;
    /** [wx.startCompass(Object object)](wx.startCompass.md)
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
    startCompass(option?: StartCompassOption): void;
    /** [wx.startDeviceMotionListening(Object object)](wx.startDeviceMotionListening.md)
     *
     * 开始监听设备方向的变化。
     *
     * 最低基础库： `2.3.0` */
    startDeviceMotionListening(option: StartDeviceMotionListeningOption): void;
    /** [wx.startGyroscope(Object object)](wx.startGyroscope.md)
     *
     * 开始监听陀螺仪数据。
     *
     * 最低基础库： `2.3.0` */
    startGyroscope(option: StartGyroscopeOption): void;
    /** [wx.startHCE(Object object)](wx.startHCE.md)
*
* 初始化 NFC 模块。
*
* **示例代码**
*
*
* ```js
wx.startHCE({
  aid_list: ['F222222222']
  success (res) {
    console.log(res.errMsg)
  }
})
```
*
* 最低基础库： `1.7.0` */
    startHCE(option: StartHCEOption): void;
    /** [wx.startLocalServiceDiscovery(Object object)](wx.startLocalServiceDiscovery.md)
     *
     * 开始搜索局域网下的 mDNS 服务。搜索的结果会通过 wx.onLocalService* 事件返回。
     *
     * **注意**
     *
     *
     * 1. wx.startLocalServiceDiscovery 是一个消耗性能的行为，开始 30 秒后会自动 stop 并执行 wx.onLocalServiceDiscoveryStop 注册的回调函数。
     * 2. 在调用 wx.startLocalServiceDiscovery 后，在这次搜索行为停止后才能发起下次 wx.startLocalServiceDiscovery。停止本次搜索行为的操作包括调用 wx.stopLocalServiceDiscovery 和 30 秒后系统自动 stop 本次搜索。
     *
     * 最低基础库： `2.4.0` */
    startLocalServiceDiscovery(option: StartLocalServiceDiscoveryOption): void;
    /** [wx.startPullDownRefresh(Object object)](wx.startPullDownRefresh.md)
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
    startPullDownRefresh(option?: StartPullDownRefreshOption): void;
    /** [wx.startRecord(Object object)](wx.startRecord.md)
*
* 开始录音。当主动调用 [`wx.stopRecord`](https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/wx.stopRecord.html)，或者录音超过1分钟时自动结束录音。当用户离开小程序时，此接口无法调用。
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
``` */
    startRecord(option: WxStartRecordOption): void;
    /** [wx.startSoterAuthentication(Object object)](wx.startSoterAuthentication.md)
*
* 开始 SOTER 生物认证。验证流程请参考[说明](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/soter/wx.startSoterAuthentication.html)。
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
* {% minicode('q3tCKkmJ7g2e') %}
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
    startSoterAuthentication(option: StartSoterAuthenticationOption): void;
    /** [wx.startWifi(Object object)](wx.startWifi.md)
*
* 初始化 Wi-Fi 模块。
*
* **示例代码**
*
*
* {% minicode('8P7zrkmd7r2n') %}
* ```js
wx.startWifi({
  success (res) {
    console.log(res.errMsg)
  }
})
```
*
* 最低基础库： `1.6.0` */
    startWifi(option?: StartWifiOption): void;
    /** [wx.stopAccelerometer(Object object)](wx.stopAccelerometer.md)
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
    stopAccelerometer(option?: StopAccelerometerOption): void;
    /** [wx.stopBackgroundAudio(Object object)](wx.stopBackgroundAudio.md)
*
* 停止播放音乐。
*
* **示例代码**
*
*
* ```js
wx.stopBackgroundAudio()
``` */
    stopBackgroundAudio(option?: StopBackgroundAudioOption): void;
    /** [wx.stopBeaconDiscovery(Object object)](wx.stopBeaconDiscovery.md)
     *
     * 停止搜索附近的 iBeacon 设备
     *
     * 最低基础库： `1.2.0` */
    stopBeaconDiscovery(option?: StopBeaconDiscoveryOption): void;
    /** [wx.stopBluetoothDevicesDiscovery(Object object)](wx.stopBluetoothDevicesDiscovery.md)
*
* 停止搜寻附近的蓝牙外围设备。若已经找到需要的蓝牙设备并不需要继续搜索时，建议调用该接口停止蓝牙搜索。
*
* **示例代码**
*
*
* {% minicode('pQU51zmz7a3K') %}
* ```js
wx.stopBluetoothDevicesDiscovery({
  success (res) {
    console.log(res)
  }
})
```
*
* 最低基础库： `1.1.0` */
    stopBluetoothDevicesDiscovery(
      option?: StopBluetoothDevicesDiscoveryOption,
    ): void;
    /** [wx.stopCompass(Object object)](wx.stopCompass.md)
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
    stopCompass(option?: StopCompassOption): void;
    /** [wx.stopDeviceMotionListening(Object object)](wx.stopDeviceMotionListening.md)
     *
     * 停止监听设备方向的变化。
     *
     * 最低基础库： `2.3.0` */
    stopDeviceMotionListening(option?: StopDeviceMotionListeningOption): void;
    /** [wx.stopGyroscope(Object object)](wx.stopGyroscope.md)
     *
     * 停止监听陀螺仪数据。
     *
     * 最低基础库： `2.3.0` */
    stopGyroscope(option?: StopGyroscopeOption): void;
    /** [wx.stopHCE(Object object)](wx.stopHCE.md)
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
    stopHCE(option?: StopHCEOption): void;
    /** [wx.stopLocalServiceDiscovery(Object object)](wx.stopLocalServiceDiscovery.md)
     *
     * 停止搜索 mDNS 服务
     *
     * 最低基础库： `2.4.0` */
    stopLocalServiceDiscovery(option?: StopLocalServiceDiscoveryOption): void;
    /** [wx.stopPullDownRefresh(Object object)](wx.stopPullDownRefresh.md)
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
    stopPullDownRefresh(option?: StopPullDownRefreshOption): void;
    /** [wx.stopRecord()](wx.stopRecord.md)
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
``` */
    stopRecord(): void;
    /** [wx.stopVoice(Object object)](wx.stopVoice.md)
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
``` */
    stopVoice(option?: StopVoiceOption): void;
    /** [wx.stopWifi(Object object)](wx.stopWifi.md)
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
    stopWifi(option?: StopWifiOption): void;
    /** [wx.switchTab(Object object)](wx.switchTab.md)
*
* 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
*
* **示例代码**
*
*
* ```json
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
    switchTab(option: SwitchTabOption): void;
    /** [wx.updateShareMenu(Object object)](wx.updateShareMenu.md)
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
*
* 最低基础库： `1.2.0` */
    updateShareMenu(option: UpdateShareMenuOption): void;
    /** [wx.vibrateLong(Object object)](wx.vibrateLong.md)
     *
     * 使手机发生较长时间的振动（400 ms)
     *
     * 最低基础库： `1.2.0` */
    vibrateLong(option?: VibrateLongOption): void;
    /** [wx.vibrateShort(Object object)](wx.vibrateShort.md)
     *
     * 使手机发生较短时间的振动（15 ms）。仅在 iPhone `7 / 7 Plus` 以上及 Android 机型生效
     *
     * 最低基础库： `1.2.0` */
    vibrateShort(option?: VibrateShortOption): void;
    /** [wx.writeBLECharacteristicValue(Object object)](wx.writeBLECharacteristicValue.md)
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
* {% minicode('pQU51zmz7a3K') %}
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
    writeBLECharacteristicValue(
      option: WriteBLECharacteristicValueOption,
    ): void;
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
  type AddPhoneContactCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type AddPhoneContactFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type AddPhoneContactSuccessCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type AppendFileCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type AppendFileFailCallback = (result: AppendFileFailCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type AppendFileSuccessCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type AuthorizeCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type AuthorizeFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type AuthorizeSuccessCallback = (res: GeneralCallbackResult) => void;
  /** 背景音频进入可播放状态事件的回调函数 */
  type BackgroundAudioManagerOnCanplayCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 背景音频自然播放结束事件的回调函数 */
  type BackgroundAudioManagerOnEndedCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 背景音频播放错误事件的回调函数 */
  type BackgroundAudioManagerOnErrorCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 背景音频暂停事件的回调函数 */
  type BackgroundAudioManagerOnPauseCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 背景音频播放事件的回调函数 */
  type BackgroundAudioManagerOnPlayCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 背景音频完成跳转操作事件的回调函数 */
  type BackgroundAudioManagerOnSeekedCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 背景音频开始跳转操作事件的回调函数 */
  type BackgroundAudioManagerOnSeekingCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 背景音频停止事件的回调函数 */
  type BackgroundAudioManagerOnStopCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 背景音频播放进度更新事件的回调函数 */
  type BackgroundAudioManagerOnTimeUpdateCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 音频加载中事件的回调函数 */
  type BackgroundAudioManagerOnWaitingCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 回调函数，在执行 `SelectorQuery.exec` 方法后，节点信息会在 `callback` 中返回。 */
  type BoundingClientRectCallback = (
    result: BoundingClientRectCallbackResult,
  ) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type CameraContextStartRecordCompleteCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 接口调用失败的回调函数 */
  type CameraContextStartRecordFailCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 接口调用成功的回调函数 */
  type CameraContextStartRecordSuccessCallback = (
    res: GeneralCallbackResult,
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
    /** 图像像素点数据，一维数组，每四项表示一个像素点的 rgba */
    data: Uint8ClampedArray,
  ) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type CanvasPutImageDataCompleteCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 接口调用失败的回调函数 */
  type CanvasPutImageDataFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type CanvasPutImageDataSuccessCallback = (res: GeneralCallbackResult) => void;
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
  type ChooseVideoCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type ChooseVideoFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type ChooseVideoSuccessCallback = (
    result: ChooseVideoSuccessCallbackResult,
  ) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type ClearStorageCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type ClearStorageFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type ClearStorageSuccessCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type CloseBLEConnectionCompleteCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 接口调用失败的回调函数 */
  type CloseBLEConnectionFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type CloseBLEConnectionSuccessCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type CloseBluetoothAdapterCompleteCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 接口调用失败的回调函数 */
  type CloseBluetoothAdapterFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type CloseBluetoothAdapterSuccessCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type CloseCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type CloseFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type CloseSocketCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type CloseSocketFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type CloseSocketSuccessCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type CloseSuccessCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type CompressImageCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type CompressImageFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type CompressImageSuccessCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type ConnectSocketCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type ConnectSocketFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type ConnectSocketSuccessCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type ConnectWifiCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type ConnectWifiFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type ConnectWifiSuccessCallback = (res: GeneralCallbackResult) => void;
  /** 回调函数，在执行 `SelectorQuery.exec` 方法后，返回节点信息。 */
  type ContextCallback = (result: ContextCallbackResult) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type CopyFileCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type CopyFileFailCallback = (result: CopyFileFailCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type CopyFileSuccessCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type CreateBLEConnectionCompleteCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 接口调用失败的回调函数 */
  type CreateBLEConnectionFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type CreateBLEConnectionSuccessCallback = (
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
  /** HTTP Response Header 事件的回调函数 */
  type DownloadTaskOffHeadersReceivedCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 下载进度变化事件的回调函数 */
  type DownloadTaskOffProgressUpdateCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** HTTP Response Header 事件的回调函数 */
  type DownloadTaskOnHeadersReceivedCallback = (
    result: DownloadTaskOnHeadersReceivedCallbackResult,
  ) => void;
  /** 下载进度变化事件的回调函数 */
  type DownloadTaskOnProgressUpdateCallback = (
    result: DownloadTaskOnProgressUpdateCallbackResult,
  ) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type ExitFullScreenCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type ExitFullScreenFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type ExitFullScreenSuccessCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type FileSystemManagerGetFileInfoCompleteCallback = (
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
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type FileSystemManagerGetSavedFileListCompleteCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 接口调用失败的回调函数 */
  type FileSystemManagerGetSavedFileListFailCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 接口调用成功的回调函数 */
  type FileSystemManagerGetSavedFileListSuccessCallback = (
    result: FileSystemManagerGetSavedFileListSuccessCallbackResult,
  ) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type FileSystemManagerRemoveSavedFileCompleteCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 接口调用失败的回调函数 */
  type FileSystemManagerRemoveSavedFileFailCallback = (
    result: RemoveSavedFileFailCallbackResult,
  ) => void;
  /** 接口调用成功的回调函数 */
  type FileSystemManagerRemoveSavedFileSuccessCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type FileSystemManagerSaveFileCompleteCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 接口调用失败的回调函数 */
  type FileSystemManagerSaveFileFailCallback = (
    result: SaveFileFailCallbackResult,
  ) => void;
  /** 接口调用成功的回调函数 */
  type FileSystemManagerSaveFileSuccessCallback = (
    result: FileSystemManagerSaveFileSuccessCallbackResult,
  ) => void;
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
    res: GeneralCallbackResult,
  ) => void;
  /** 接口调用失败的回调函数 */
  type GetBLEDeviceCharacteristicsFailCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 接口调用成功的回调函数 */
  type GetBLEDeviceCharacteristicsSuccessCallback = (
    result: GetBLEDeviceCharacteristicsSuccessCallbackResult,
  ) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type GetBLEDeviceServicesCompleteCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 接口调用失败的回调函数 */
  type GetBLEDeviceServicesFailCallback = (res: GeneralCallbackResult) => void;
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
  type GetBatteryInfoCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type GetBatteryInfoFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type GetBatteryInfoSuccessCallback = (
    result: GetBatteryInfoSuccessCallbackResult,
  ) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type GetBeaconsCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type GetBeaconsFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type GetBeaconsSuccessCallback = (
    result: GetBeaconsSuccessCallbackResult,
  ) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type GetBluetoothAdapterStateCompleteCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 接口调用失败的回调函数 */
  type GetBluetoothAdapterStateFailCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 接口调用成功的回调函数 */
  type GetBluetoothAdapterStateSuccessCallback = (
    result: GetBluetoothAdapterStateSuccessCallbackResult,
  ) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type GetBluetoothDevicesCompleteCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 接口调用失败的回调函数 */
  type GetBluetoothDevicesFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type GetBluetoothDevicesSuccessCallback = (
    result: GetBluetoothDevicesSuccessCallbackResult,
  ) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type GetCenterLocationCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type GetCenterLocationFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type GetCenterLocationSuccessCallback = (
    result: GetCenterLocationSuccessCallbackResult,
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
    res: GeneralCallbackResult,
  ) => void;
  /** 接口调用失败的回调函数 */
  type GetConnectedBluetoothDevicesFailCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 接口调用成功的回调函数 */
  type GetConnectedBluetoothDevicesSuccessCallback = (
    result: GetConnectedBluetoothDevicesSuccessCallbackResult,
  ) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type GetConnectedWifiCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type GetConnectedWifiFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type GetConnectedWifiSuccessCallback = (
    result: GetConnectedWifiSuccessCallbackResult,
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
  type GetHCEStateCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type GetHCEStateFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type GetHCEStateSuccessCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type GetImageInfoCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type GetImageInfoFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type GetImageInfoSuccessCallback = (
    result: GetImageInfoSuccessCallbackResult,
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
  type GetNetworkTypeCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type GetNetworkTypeFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type GetNetworkTypeSuccessCallback = (
    result: GetNetworkTypeSuccessCallbackResult,
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
  type GetSavedFileInfoCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type GetSavedFileInfoFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type GetSavedFileInfoSuccessCallback = (
    result: GetSavedFileInfoSuccessCallbackResult,
  ) => void;
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
    result: GetShareInfoSuccessCallbackResult,
  ) => void;
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
  type GetStorageSuccessCallback = (
    result: GetStorageSuccessCallbackResult,
  ) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type GetSystemInfoCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type GetSystemInfoFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type GetSystemInfoSuccessCallback = (
    result: GetSystemInfoSuccessCallbackResult,
  ) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type GetUserInfoCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type GetUserInfoFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type GetUserInfoSuccessCallback = (
    result: GetUserInfoSuccessCallbackResult,
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
  type GetWifiListCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type GetWifiListFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type GetWifiListSuccessCallback = (res: GeneralCallbackResult) => void;
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
  /** 音频进入可以播放状态的事件的回调函数 */
  type InnerAudioContextOnCanplayCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 音频自然播放至结束的事件的回调函数 */
  type InnerAudioContextOnEndedCallback = (res: GeneralCallbackResult) => void;
  /** 音频播放错误事件的回调函数 */
  type InnerAudioContextOnErrorCallback = (
    result: InnerAudioContextOnErrorCallbackResult,
  ) => void;
  /** 音频暂停事件的回调函数 */
  type InnerAudioContextOnPauseCallback = (res: GeneralCallbackResult) => void;
  /** 音频播放事件的回调函数 */
  type InnerAudioContextOnPlayCallback = (res: GeneralCallbackResult) => void;
  /** 音频完成跳转操作的事件的回调函数 */
  type InnerAudioContextOnSeekedCallback = (res: GeneralCallbackResult) => void;
  /** 音频进行跳转操作的事件的回调函数 */
  type InnerAudioContextOnSeekingCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 音频停止事件的回调函数 */
  type InnerAudioContextOnStopCallback = (res: GeneralCallbackResult) => void;
  /** 音频播放进度更新事件的回调函数 */
  type InnerAudioContextOnTimeUpdateCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 音频加载中事件的回调函数 */
  type InnerAudioContextOnWaitingCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type LivePlayerContextPauseCompleteCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 接口调用失败的回调函数 */
  type LivePlayerContextPauseFailCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 接口调用成功的回调函数 */
  type LivePlayerContextPauseSuccessCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type LivePlayerContextResumeCompleteCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 接口调用失败的回调函数 */
  type LivePlayerContextResumeFailCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 接口调用成功的回调函数 */
  type LivePlayerContextResumeSuccessCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type LivePlayerContextStopCompleteCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 接口调用失败的回调函数 */
  type LivePlayerContextStopFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type LivePlayerContextStopSuccessCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type LivePusherContextPauseCompleteCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 接口调用失败的回调函数 */
  type LivePusherContextPauseFailCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 接口调用成功的回调函数 */
  type LivePusherContextPauseSuccessCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type LivePusherContextResumeCompleteCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 接口调用失败的回调函数 */
  type LivePusherContextResumeFailCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 接口调用成功的回调函数 */
  type LivePusherContextResumeSuccessCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type LivePusherContextStopCompleteCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 接口调用失败的回调函数 */
  type LivePusherContextStopFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type LivePusherContextStopSuccessCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type LoadFontFaceCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type LoadFontFaceFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type LoadFontFaceSuccessCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type LoginCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type LoginFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type LoginSuccessCallback = (result: LoginSuccessCallbackResult) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type MakePhoneCallCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type MakePhoneCallFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type MakePhoneCallSuccessCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type MkdirCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type MkdirFailCallback = (result: MkdirFailCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type MkdirSuccessCallback = (res: GeneralCallbackResult) => void;
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
  type NavigateToMiniProgramFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type NavigateToMiniProgramSuccessCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 接口调用成功的回调函数 */
  type NavigateToSuccessCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type NotifyBLECharacteristicValueChangeCompleteCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 接口调用失败的回调函数 */
  type NotifyBLECharacteristicValueChangeFailCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 接口调用成功的回调函数 */
  type NotifyBLECharacteristicValueChangeSuccessCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 监听相交状态变化的回调函数 */
  type ObserveCallback = (result: ObserveCallbackResult) => void;
  /** 小程序切后台事件的回调函数 */
  type OffAppHideCallback = (res: GeneralCallbackResult) => void;
  /** 小程序切前台事件的回调函数 */
  type OffAppShowCallback = (res: GeneralCallbackResult) => void;
  /** 音频进入可以播放状态的事件的回调函数 */
  type OffCanplayCallback = (res: GeneralCallbackResult) => void;
  /** 音频自然播放至结束的事件的回调函数 */
  type OffEndedCallback = (res: GeneralCallbackResult) => void;
  /** 音频播放错误事件的回调函数 */
  type OffErrorCallback = (res: GeneralCallbackResult) => void;
  /** mDNS 服务停止搜索的事件的回调函数 */
  type OffLocalServiceDiscoveryStopCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** mDNS 服务发现的事件的回调函数 */
  type OffLocalServiceFoundCallback = (res: GeneralCallbackResult) => void;
  /** mDNS 服务离开的事件的回调函数 */
  type OffLocalServiceLostCallback = (res: GeneralCallbackResult) => void;
  /** mDNS 服务解析失败的事件的回调函数 */
  type OffLocalServiceResolveFailCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 小程序要打开的页面不存在事件的回调函数 */
  type OffPageNotFoundCallback = (res: GeneralCallbackResult) => void;
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
  /** 音频播放进度更新事件的回调函数 */
  type OffTimeUpdateCallback = (res: GeneralCallbackResult) => void;
  /** 音频加载中事件的回调函数 */
  type OffWaitingCallback = (res: GeneralCallbackResult) => void;
  /** 窗口尺寸变化事件的回调函数 */
  type OffWindowResizeCallback = (res: GeneralCallbackResult) => void;
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
  /** 低功耗蓝牙设备的特征值变化事件的回调函数 */
  type OnBLECharacteristicValueChangeCallback = (
    result: OnBLECharacteristicValueChangeCallbackResult,
  ) => void;
  /** 低功耗蓝牙连接状态的改变事件的回调函数 */
  type OnBLEConnectionStateChangeCallback = (
    result: OnBLEConnectionStateChangeCallbackResult,
  ) => void;
  /** 音乐暂停事件的回调函数 */
  type OnBackgroundAudioPauseCallback = (res: GeneralCallbackResult) => void;
  /** 音乐播放事件的回调函数 */
  type OnBackgroundAudioPlayCallback = (res: GeneralCallbackResult) => void;
  /** 音乐停止事件的回调函数 */
  type OnBackgroundAudioStopCallback = (res: GeneralCallbackResult) => void;
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
  /** 向微信后台请求检查更新结果事件的回调函数 */
  type OnCheckForUpdateCallback = (
    result: OnCheckForUpdateCallbackResult,
  ) => void;
  /** WebSocket 连接关闭事件的回调函数 */
  type OnCloseCallback = (res: GeneralCallbackResult) => void;
  /** 罗盘数据变化事件的回调函数 */
  type OnCompassChangeCallback = (
    result: OnCompassChangeCallbackResult,
  ) => void;
  /** 设备方向变化事件的回调函数 */
  type OnDeviceMotionChangeCallback = (
    result: OnDeviceMotionChangeCallbackResult,
  ) => void;
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
  /** 录音因为受到系统占用而被中断开始事件的回调函数 */
  type OnInterruptionBeginCallback = (res: GeneralCallbackResult) => void;
  /** 录音中断结束事件的回调函数 */
  type OnInterruptionEndCallback = (res: GeneralCallbackResult) => void;
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
    result: OnLocalServiceResolveFailCallbackResult,
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
  type OnPageNotFoundCallback = (res: GeneralCallbackResult) => void;
  /** 用户在系统音乐播放面板点击上一曲事件的回调函数 */
  type OnPrevCallback = (res: GeneralCallbackResult) => void;
  /** 录音继续事件的回调函数 */
  type OnResumeCallback = (res: GeneralCallbackResult) => void;
  /** WebSocket 连接关闭事件的回调函数 */
  type OnSocketCloseCallback = (res: GeneralCallbackResult) => void;
  /** WebSocket 错误事件的回调函数 */
  type OnSocketErrorCallback = (res: GeneralCallbackResult) => void;
  /** WebSocket 接受到服务器的消息事件的回调函数 */
  type OnSocketMessageCallback = (
    result: OnSocketMessageCallbackResult,
  ) => void;
  /** WebSocket 连接打开事件的回调函数 */
  type OnSocketOpenCallback = (result: OnSocketOpenCallbackResult) => void;
  /** 录音开始事件的回调函数 */
  type OnStartCallback = (res: GeneralCallbackResult) => void;
  /** 小程序更新失败事件的回调函数 */
  type OnUpdateFailedCallback = (res: GeneralCallbackResult) => void;
  /** 小程序有版本更新事件的回调函数 */
  type OnUpdateReadyCallback = (res: GeneralCallbackResult) => void;
  /** 用户主动截屏事件的回调函数 */
  type OnUserCaptureScreenCallback = (res: GeneralCallbackResult) => void;
  /** 连接上 Wi-Fi 的事件的回调函数 */
  type OnWifiConnectedCallback = (
    result: OnWifiConnectedCallbackResult,
  ) => void;
  /** 窗口尺寸变化事件的回调函数 */
  type OnWindowResizeCallback = (result: OnWindowResizeCallbackResult) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type OpenBluetoothAdapterCompleteCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 接口调用失败的回调函数 */
  type OpenBluetoothAdapterFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type OpenBluetoothAdapterSuccessCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type OpenCardCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type OpenCardFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type OpenCardSuccessCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type OpenDocumentCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type OpenDocumentFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type OpenDocumentSuccessCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type OpenLocationCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type OpenLocationFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type OpenLocationSuccessCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type OpenSettingCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type OpenSettingFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type OpenSettingSuccessCallback = (
    result: OpenSettingSuccessCallbackResult,
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
  type ReLaunchCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type ReLaunchFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type ReLaunchSuccessCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type ReadBLECharacteristicValueCompleteCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 接口调用失败的回调函数 */
  type ReadBLECharacteristicValueFailCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 接口调用成功的回调函数 */
  type ReadBLECharacteristicValueSuccessCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type ReadFileCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type ReadFileFailCallback = (result: ReadFileFailCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type ReadFileSuccessCallback = (
    result: ReadFileSuccessCallbackResult,
  ) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type ReaddirCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type ReaddirFailCallback = (result: ReaddirFailCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type ReaddirSuccessCallback = (result: ReaddirSuccessCallbackResult) => void;
  /** 录音错误事件的回调函数 */
  type RecorderManagerOnErrorCallback = (
    result: RecorderManagerOnErrorCallbackResult,
  ) => void;
  /** 录音暂停事件的回调函数 */
  type RecorderManagerOnPauseCallback = (res: GeneralCallbackResult) => void;
  /** 录音结束事件的回调函数 */
  type RecorderManagerOnStopCallback = (result: OnStopCallbackResult) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type RedirectToCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type RedirectToFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type RedirectToSuccessCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type RemoveStorageCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type RemoveStorageFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type RemoveStorageSuccessCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type RemoveTabBarBadgeCompleteCallback = (res: GeneralCallbackResult) => void;
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
  type RequestFullScreenCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type RequestFullScreenFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type RequestFullScreenSuccessCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type RequestPaymentCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type RequestPaymentFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type RequestPaymentSuccessCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type RequestSuccessCallback = (result: RequestSuccessCallbackResult) => void;
  /** HTTP Response Header 事件的回调函数 */
  type RequestTaskOffHeadersReceivedCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** HTTP Response Header 事件的回调函数 */
  type RequestTaskOnHeadersReceivedCallback = (
    result: RequestTaskOnHeadersReceivedCallbackResult,
  ) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type ResumeBGMCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type ResumeBGMFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type ResumeBGMSuccessCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type RmdirCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type RmdirFailCallback = (result: RmdirFailCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type RmdirSuccessCallback = (res: GeneralCallbackResult) => void;
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
  type SendHCEMessageCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type SendHCEMessageFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type SendHCEMessageSuccessCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type SendSocketMessageCompleteCallback = (res: GeneralCallbackResult) => void;
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
  type SetBackgroundColorCompleteCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 接口调用失败的回调函数 */
  type SetBackgroundColorFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type SetBackgroundColorSuccessCallback = (res: GeneralCallbackResult) => void;
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
  type SetClipboardDataCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type SetClipboardDataFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type SetClipboardDataSuccessCallback = (res: GeneralCallbackResult) => void;
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
  type SetNavigationBarColorCompleteCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 接口调用失败的回调函数 */
  type SetNavigationBarColorFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type SetNavigationBarColorSuccessCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type SetNavigationBarTitleCompleteCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 接口调用失败的回调函数 */
  type SetNavigationBarTitleFailCallback = (res: GeneralCallbackResult) => void;
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
  type SetTopBarTextCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type SetTopBarTextFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type SetTopBarTextSuccessCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type SetWifiListCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type SetWifiListFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type SetWifiListSuccessCallback = (res: GeneralCallbackResult) => void;
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
  /** 接口调用成功的回调函数 */
  type SnapshotSuccessCallback = (res: GeneralCallbackResult) => void;
  /** WebSocket 错误事件的回调函数 */
  type SocketTaskOnErrorCallback = (
    result: SocketTaskOnErrorCallbackResult,
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
  type StartAccelerometerSuccessCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type StartBeaconDiscoveryCompleteCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 接口调用失败的回调函数 */
  type StartBeaconDiscoveryFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type StartBeaconDiscoverySuccessCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type StartBluetoothDevicesDiscoveryCompleteCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 接口调用失败的回调函数 */
  type StartBluetoothDevicesDiscoveryFailCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 接口调用成功的回调函数 */
  type StartBluetoothDevicesDiscoverySuccessCallback = (
    res: GeneralCallbackResult,
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
  /** 接口调用失败的回调函数 */
  type StartFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type StartGyroscopeCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type StartGyroscopeFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type StartGyroscopeSuccessCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type StartHCECompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type StartHCEFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type StartHCESuccessCallback = (res: GeneralCallbackResult) => void;
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
  type StartPullDownRefreshCompleteCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 接口调用失败的回调函数 */
  type StartPullDownRefreshFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type StartPullDownRefreshSuccessCallback = (
    res: GeneralCallbackResult,
  ) => void;
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
  type StartWifiCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type StartWifiFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type StartWifiSuccessCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type StatCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type StatFailCallback = (result: StatFailCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type StatSuccessCallback = (result: StatSuccessCallbackResult) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type StopAccelerometerCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type StopAccelerometerFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type StopAccelerometerSuccessCallback = (res: GeneralCallbackResult) => void;
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
  type StopBeaconDiscoveryCompleteCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 接口调用失败的回调函数 */
  type StopBeaconDiscoveryFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type StopBeaconDiscoverySuccessCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type StopBluetoothDevicesDiscoveryCompleteCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 接口调用失败的回调函数 */
  type StopBluetoothDevicesDiscoveryFailCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 接口调用成功的回调函数 */
  type StopBluetoothDevicesDiscoverySuccessCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type StopCompassCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type StopCompassFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type StopCompassSuccessCallback = (res: GeneralCallbackResult) => void;
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
  type StopGyroscopeCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type StopGyroscopeFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type StopGyroscopeSuccessCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type StopHCECompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type StopHCEFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type StopHCESuccessCallback = (res: GeneralCallbackResult) => void;
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
  type StopRecordSuccessCallback = (
    result: StopRecordSuccessCallbackResult,
  ) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type StopVoiceCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type StopVoiceFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type StopVoiceSuccessCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type StopWifiCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type StopWifiFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type StopWifiSuccessCallback = (res: GeneralCallbackResult) => void;
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
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type TakePhotoCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type TakePhotoFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type TakePhotoSuccessCallback = (
    result: TakePhotoSuccessCallbackResult,
  ) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type ToggleTorchCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type ToggleTorchFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type ToggleTorchSuccessCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type TranslateMarkerCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type TranslateMarkerFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type TranslateMarkerSuccessCallback = (res: GeneralCallbackResult) => void;
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
  type UpdateShareMenuCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type UpdateShareMenuFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type UpdateShareMenuSuccessCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type UploadFileCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type UploadFileFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type UploadFileSuccessCallback = (
    result: UploadFileSuccessCallbackResult,
  ) => void;
  /** HTTP Response Header 事件的回调函数 */
  type UploadTaskOffHeadersReceivedCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 上传进度变化事件的回调函数 */
  type UploadTaskOffProgressUpdateCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** HTTP Response Header 事件的回调函数 */
  type UploadTaskOnHeadersReceivedCallback = (
    result: UploadTaskOnHeadersReceivedCallbackResult,
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
    res: GeneralCallbackResult,
  ) => void;
  /** 接口调用失败的回调函数 */
  type WriteBLECharacteristicValueFailCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 接口调用成功的回调函数 */
  type WriteBLECharacteristicValueSuccessCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type WriteFileCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type WriteFileFailCallback = (result: WriteFileFailCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type WriteFileSuccessCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type WxGetFileInfoCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type WxGetFileInfoFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type WxGetFileInfoSuccessCallback = (
    result: WxGetFileInfoSuccessCallbackResult,
  ) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type WxGetSavedFileListCompleteCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 接口调用失败的回调函数 */
  type WxGetSavedFileListFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type WxGetSavedFileListSuccessCallback = (
    result: WxGetSavedFileListSuccessCallbackResult,
  ) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type WxRemoveSavedFileCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type WxRemoveSavedFileFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type WxRemoveSavedFileSuccessCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type WxSaveFileCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type WxSaveFileFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type WxSaveFileSuccessCallback = (
    result: WxSaveFileSuccessCallbackResult,
  ) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type WxStartRecordCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type WxStartRecordFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type WxStartRecordSuccessCallback = (
    result: StartRecordSuccessCallbackResult,
  ) => void;
}
declare const wx: wx.Wx;
