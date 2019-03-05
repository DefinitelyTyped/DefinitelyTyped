// Type definitions for non-npm package html5plus 1.0
// Project: https://www.html5plus.org/doc/
// Definitions by: Dcloud <https://github.com/dcloudio>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * HTML5+接口，统一浏览器自定义扩展，提供增强的功能、性能扩展规范，使得开发者可开发出跨平台的app，并接近原生的功能和性能。
 * 
 * 参考: [http://www.html5plus.org/doc/h5p.html](http://www.html5plus.org/doc/h5p.html)
 */
declare const plus: Plus;

/**
 * HTML5+接口，统一浏览器自定义扩展，提供增强的功能、性能扩展规范，使得开发者可开发出跨平台的app，并接近原生的功能和性能。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/accelerometer.html](http://www.html5plus.org/doc/zh_cn/accelerometer.html)
 */
interface Plus {
    /**
     * Accelerometer模块管理设备加速度传感器，用于获取设备加速度信息，包括x（屏幕水平方向）、y（垂直屏幕水平方向）、z（垂直屏幕平面方向）三个方向的加速度信息。通过plus.accelerometer获取设备加速度传感器管理对象。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/accelerometer.html](http://www.html5plus.org/doc/zh_cn/accelerometer.html)
     */
    accelerometer: PlusAccelerometer;
    /**
     * Native.js for Android封装一条通过JS语法直接调用Native Java接口通道，通过plus.android可调用几乎所有的系统API。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/android.html](http://www.html5plus.org/doc/zh_cn/android.html)
     */
    android: PlusAndroid;
    /**
     * Audio模块用于提供音频的录制和播放功能，可调用系统的麦克风设备进行录音操作，也可调用系统的扬声器设备播放音频文件。通过plus.audio获取音频管理对象。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/audio.html](http://www.html5plus.org/doc/zh_cn/audio.html)
     */
    audio: PlusAudio;
    /**
     * Bluetooth模块用于管理蓝牙设备，搜索附近蓝牙设备、连接实现数据通信等。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/bluetooth.html](http://www.html5plus.org/doc/zh_cn/bluetooth.html)
     */
    bluetooth: PlusBluetooth;
    /**
     * Camera模块管理设备的摄像头，可用于拍照、摄像操作，通过plus.camera获取摄像头管理对象。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/camera.html](http://www.html5plus.org/doc/zh_cn/camera.html)
     */
    camera: PlusCamera;
    /**
     * Contacts模块管理系统通讯录，用于可对系统通讯录进行增、删、改、查等操作。通过plus.contacts获取系统通讯录管理对象。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/contacts.html](http://www.html5plus.org/doc/zh_cn/contacts.html)
     */
    contacts: PlusContacts;
    /**
     * Device模块管理设备信息，用于获取手机设备的相关信息，如IMEI、IMSI、型号、厂商等。通过plus.device获取设备信息管理对象。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/device.html](http://www.html5plus.org/doc/zh_cn/device.html)
     */
    device: PlusDevice;
    /**
     * Screen模块管理设备屏幕信息
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/device.html](http://www.html5plus.org/doc/zh_cn/device.html)
     */
    screen: PlusScreen;
    /**
     * Display模块管理应用可使用的显示区域信息
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/device.html](http://www.html5plus.org/doc/zh_cn/device.html)
     */
    display: PlusDisplay;
    /**
     * networkinfo模块用于获取网络信息
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/device.html](http://www.html5plus.org/doc/zh_cn/device.html)
     */
    networkinfo: PlusNetworkinfo;
    /**
     * OS模块管理操作系统信息
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/device.html](http://www.html5plus.org/doc/zh_cn/device.html)
     */
    os: PlusOs;
    /**
     * Downloader模块管理网络文件下载任务，用于从服务器下载各种文件，并支持跨域访问操作。通过plus.downloader获取下载管理对象。Downloader下载使用HTTP的GET/POST方式请求下载文件，符合标准HTTP/HTTPS传输协议。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/downloader.html](http://www.html5plus.org/doc/zh_cn/downloader.html)
     */
    downloader: PlusDownloader;
    /**
     * Fingerprint模块管理指纹识别。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/fingerprint.html](http://www.html5plus.org/doc/zh_cn/fingerprint.html)
     */
    fingerprint: PlusFingerprint;
    /**
     * Gallery模块管理系统相册，支持从相册中选择图片或视频文件、保存图片或视频文件到相册等功能。通过plus.gallery获取相册管理对象。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/gallery.html](http://www.html5plus.org/doc/zh_cn/gallery.html)
     */
    gallery: PlusGallery;
    /**
     * Geolocation模块管理设备位置信息，用于获取地理位置信息，如经度、纬度等。通过plus.geolocation可获取设备位置管理对象。虽然W3C已经提供标准API获取位置信息，但在某些平台存在差异或未实现，为了保持各平台的统一性，定义此规范接口获取位置信息。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/geolocation.html](http://www.html5plus.org/doc/zh_cn/geolocation.html)
     */
    geolocation: PlusGeolocation;
    /**
     * iBeacon模块用于搜索附件的iBeacon设备（*请使用HBuilderX并更新到最新版本*）。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/ibeacon.html](http://www.html5plus.org/doc/zh_cn/ibeacon.html)
     */
    ibeacon: PlusIbeacon;
    /**
     * IO模块管理本地文件系统，用于对文件系统的目录浏览、文件的读取、文件的写入等操作。通过plus.io可获取文件系统管理对象。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    io: PlusIo;
    /**
     * Native.js for iOS封装一条通过JS语法直接调用Native Objective-C接口通道，通过plus.ios可调用几乎所有的系统API。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/ios.html](http://www.html5plus.org/doc/zh_cn/ios.html)
     */
    ios: PlusIos;
    /**
     * Key管理设备按键事件
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/key.html](http://www.html5plus.org/doc/zh_cn/key.html)
     */
    key: PlusKey;
    /**
     * Messaging模块管理设备通讯功能，可用于短信、彩信、邮件发送等。通过plus.messaging可获取设备通讯管理对象。另外也可以直接通过html中的href直接快速发送短信、拨打电话、发送邮件等。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/messaging.html](http://www.html5plus.org/doc/zh_cn/messaging.html)
     */
    messaging: PlusMessaging;
    /**
     * nativeObj管理系统原生对象。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    nativeObj: PlusNativeObj;
    /**
     * nativeUI管理系统原生界面，可用于弹出系统原生提示对话框窗口、时间日期选择对话框、等待对话框等。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeui.html](http://www.html5plus.org/doc/zh_cn/nativeui.html)
     */
    nativeUI: PlusNativeUI;
    /**
     * navigator用于管理浏览器运行环境信息
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/navigator.html](http://www.html5plus.org/doc/zh_cn/navigator.html)
     */
    navigator: PlusNavigator;
    /**
     * Orientation模块管理设备的方向信息，包括alpha、beta、gamma三个方向信息，通过plus.orientation可获取设备方向管理对象。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/orientation.html](http://www.html5plus.org/doc/zh_cn/orientation.html)
     */
    orientation: PlusOrientation;
    /**
     * Proximity模块管理设备距离传感器，可获取当前设备的接近距离信息，通过plus.proximity可获取设备距离传感管理对象。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/proximity.html](http://www.html5plus.org/doc/zh_cn/proximity.html)
     */
    proximity: PlusProximity;
    /**
     * Runtime模块管理运行环境，可用于获取当前运行环境信息、与其它程序进行通讯等。通过plus.runtime可获取运行环境管理对象。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/runtime.html](http://www.html5plus.org/doc/zh_cn/runtime.html)
     */
    runtime: PlusRuntime;
    /**
     * Storage模块管理应用本地数据存储区，用于应用数据的保存和读取。应用本地数据与localStorage、sessionStorage的区别在于数据有效域不同，前者可在应用内跨域操作，数据存储期是持久化的，并且没有容量限制。通过plus.storage可获取应用本地数据管理对象。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/storage.html](http://www.html5plus.org/doc/zh_cn/storage.html)
     */
    storage: PlusStorage;
    /**
     * Stream模块操作流应用。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/stream.html](http://www.html5plus.org/doc/zh_cn/stream.html)
     */
    stream: PlusStream;
    /**
     * Uploader模块管理网络上传任务，用于从本地上传各种文件到服务器，并支持跨域访问操作。通过plus.uploader可获取上传管理对象。Uploader上传使用HTTP的POST方式提交数据，数据格式符合Multipart/form-data规范，即rfc1867（Form-based File Upload in HTML）协议。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/uploader.html](http://www.html5plus.org/doc/zh_cn/uploader.html)
     */
    uploader: PlusUploader;
    /**
     * Video模块管理多媒体视频相关能力，可用创建视频播放控件，直播推流控件等。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/video.html](http://www.html5plus.org/doc/zh_cn/video.html)
     */
    video: PlusVideo;
    /**
     * Webview模块管理应用窗口界面，实现多窗口的逻辑控制管理操作。通过plus.webview可获取应用界面管理对象。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    webview: PlusWebview;
    /**
     * XMLHttpRequest模块管理网络请求，与标准HTML中的XMLHttpRequest用途一致，差别在于前者可以进行跨域访问。通过plus.net可获取网络请求管理对象。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/net.html](http://www.html5plus.org/doc/zh_cn/net.html)
     */
    net: PlusNet;
    /**
     * Zip模块管理文件压缩和解压，通过plus.zip可获取压缩管理对象。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/zip.html](http://www.html5plus.org/doc/zh_cn/zip.html)
     */
    zip: PlusZip;
    /**
     * Barcode模块管理条码扫描，支持常见的条码（一维码及二维码）的扫描识别功能。可调用设备的摄像头对条码图片扫描进行数据输入，解码后返回码数据及码类型。通过plus.barcode可获取条码码管理对象。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/barcode.html](http://www.html5plus.org/doc/zh_cn/barcode.html)
     */
    barcode: PlusBarcode;
    /**
     * Maps模块管理地图控件，用于在web页面中显示地图控件，提供各种接口操作地图控件，如添加标点、路线等。通过plus.maps可获取地图管理对象。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    maps: PlusMaps;
    /**
     * OAuth模块管理客户端的用户登录授权验证功能，允许应用访问第三方平台的资源。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/oauth.html](http://www.html5plus.org/doc/zh_cn/oauth.html)
     */
    oauth: PlusOauth;
    /**
     * Payment模块管理支付功能，用于提供网页安全支付能力，支持通过Web接口进行支付操作。通过plus.payment可获取支付管理对象。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/payment.html](http://www.html5plus.org/doc/zh_cn/payment.html)
     */
    payment: PlusPayment;
    /**
     * Push模块管理推送消息功能，可以实现在线、离线的消息推送，通过plus.push可获取推送消息管理对象。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/push.html](http://www.html5plus.org/doc/zh_cn/push.html)
     */
    push: PlusPush;
    /**
     * Share模块管理客户端的社交分享功能，提供调用终端社交软件的分享能力。通过plus.share可获取社交分享管理对象。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/share.html](http://www.html5plus.org/doc/zh_cn/share.html)
     */
    share: PlusShare;
    /**
     * Speech模块管理语音输入功能，提供语音识别功能，可支持用户通过麦克风设备进行语音输入内容。通过plus.speech可获取语音输入管理对象。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/speech.html](http://www.html5plus.org/doc/zh_cn/speech.html)
     */
    speech: PlusSpeech;
    /**
     * Statistic模块管理统计功能，用于提供应用内统计的能力，支持统计和分析用户属性和用户行为数据。通过plus.statistic可获取统计管理对象。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/statistic.html](http://www.html5plus.org/doc/zh_cn/statistic.html)
     */
    statistic: PlusStatistic;
}

/**
 * Accelerometer模块管理设备加速度传感器，用于获取设备加速度信息，包括x（屏幕水平方向）、y（垂直屏幕水平方向）、z（垂直屏幕平面方向）三个方向的加速度信息。通过plus.accelerometer获取设备加速度传感器管理对象。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/accelerometer.html](http://www.html5plus.org/doc/zh_cn/accelerometer.html)
 */
interface PlusAccelerometer {
    /**
     * 设备加速度信息对象
     * JSON对象，保存获取设备的加速度信息，包括x、y、z三个方向的加速度信息。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/accelerometer.html](http://www.html5plus.org/doc/zh_cn/accelerometer.html)
     */
    Acceleration?: PlusAccelerometerAcceleration;
    /**
     * 监听设备加速度感应器参数
     * JSON对象，用于设置获取设备加速度信息的参数。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/accelerometer.html](http://www.html5plus.org/doc/zh_cn/accelerometer.html)
     */
    AccelerometerOption?: PlusAccelerometerAccelerometerOption;
    /**
     * 获取当前设备的加速度信息
     * 加速度是设备在当前方向上所做相对运动变化（增、减量）的运动传感器。加速度信息包括x、y、z三个方向的信息。
     * 	加速度信息可通过successCB回调函数返回。加速度信息获取失败则调用回调函数errorCB。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/accelerometer.html](http://www.html5plus.org/doc/zh_cn/accelerometer.html)
     */
    getCurrentAcceleration(successCB?: (result: PlusAccelerometerAcceleration) => void, errorCB?: (result: any) => void): void;
    /**
     * 监听设备加速度变化信息
     * 加速度是设备在当前方向上所做相对运动变化（增、减量）的运动传感器。加速度信息包括x、y、z三个方向的信息。
     * watchAcceleration每隔固定时间就获取一次设备的加速度信息，通过successCB回调函数返回。可通过option的frequency参数设定获取设备加速度信息的时间间隔。
     * 加速度信息获取失败则调用回调函数errorCB。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/accelerometer.html](http://www.html5plus.org/doc/zh_cn/accelerometer.html)
     */
    watchAcceleration(successCB?: (result: PlusAccelerometerAcceleration) => void, errorCB?: (result: any) => void, options?: PlusAccelerometerAccelerometerOption): number;
    /**
     * 关闭监听设备加速度信息
     * 关闭监听设备加速度信息，应用关闭调用watchAcceleration方法的开启的监听操作。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/accelerometer.html](http://www.html5plus.org/doc/zh_cn/accelerometer.html)
     */
    clearWatch(watchId?: number): void;
}

/**
 * 设备加速度信息对象
 * JSON对象，保存获取设备的加速度信息，包括x、y、z三个方向的加速度信息。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/accelerometer.html](http://www.html5plus.org/doc/zh_cn/accelerometer.html)
 */
interface PlusAccelerometerAcceleration {
    /**
     * x轴方向的加速度
     * 获取当前设备x轴方向的加速度，浮点型数据，与物理学中的加速度值一致。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/accelerometer.html](http://www.html5plus.org/doc/zh_cn/accelerometer.html)
     */
    xAxis?: number;
    /**
     * y轴方向的加速度
     * 获取当前设备y轴方向的加速度，浮点型数据，与物理学中的加速度值一致。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/accelerometer.html](http://www.html5plus.org/doc/zh_cn/accelerometer.html)
     */
    yAxis?: number;
    /**
     * z轴方向的加速度
     * 获取当前设备z轴方向的加速度，浮点型数据，与物理学中的加速度值一致。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/accelerometer.html](http://www.html5plus.org/doc/zh_cn/accelerometer.html)
     */
    zAxis?: number;
}

/**
 * 监听设备加速度感应器参数
 * JSON对象，用于设置获取设备加速度信息的参数。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/accelerometer.html](http://www.html5plus.org/doc/zh_cn/accelerometer.html)
 */
interface PlusAccelerometerAccelerometerOption {
    /**
     * 更新加速度信息间隔时间
     * 监听器获取加速度信息的时间间隔，单位为ms，默认值为500ms
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/accelerometer.html](http://www.html5plus.org/doc/zh_cn/accelerometer.html)
     */
    frequency?: number;
}

/**
 * Native.js for Android封装一条通过JS语法直接调用Native Java接口通道，通过plus.android可调用几乎所有的系统API。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/android.html](http://www.html5plus.org/doc/zh_cn/android.html)
 */
interface PlusAndroid {
    /**
     * Java类对象
     * Java类对象，可通过其属性获取类的常量，可通过方法来操作类的静态变量和方法，也通过new方法来创建类的实例对象。
     * 	对于类的常量，则直接通过.后面跟随常量名称调用即可。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/android.html](http://www.html5plus.org/doc/zh_cn/android.html)
     */
    ClassObject?: PlusAndroidClassObject;
    /**
     * Java实例对象
     * Java实例对象，可通过其方法来操作实例的变量和方法。
     * 	注意：必须通过plusGetAttribute()方法读取实例对象的属性值，通过plusSetAttribute()方法设置实例对象的属性值。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/android.html](http://www.html5plus.org/doc/zh_cn/android.html)
     */
    InstanceObject?: PlusAndroidInstanceObject;
    /**
     * 导入Java类对象
     * 导入类对象后，就可以通过.操作符直接调用对象（类对象/实例对象）的方法。
     * 	注意：导入类对象将会消耗较多的系统资源，通常不应该导入过多的类对象，可以使用plus.android.invoke()来调用未导入类实例对象的方法。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/android.html](http://www.html5plus.org/doc/zh_cn/android.html)
     */
    importClass(classname?: string): PlusAndroidClassObject;
    /**
     * 创建实例对象
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/android.html](http://www.html5plus.org/doc/zh_cn/android.html)
     */
    newObject(classname?: string, args?: any): PlusAndroidInstanceObject;
    /**
     * 获取对象（类对象/实例对象）的属性值
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/android.html](http://www.html5plus.org/doc/zh_cn/android.html)
     */
    getAttribute(obj?: PlusAndroidInstanceObject, name?: string): any;
    /**
     * 设置对象（类对象/实例对象）的属性值
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/android.html](http://www.html5plus.org/doc/zh_cn/android.html)
     */
    setAttribute(obj?: PlusAndroidInstanceObject, name?: string, value?: any): void;
    /**
     * 调用对象（类对象/实例对象）的方法
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/android.html](http://www.html5plus.org/doc/zh_cn/android.html)
     */
    invoke(obj?: PlusAndroidInstanceObject, name?: string, args?: any): any;
    /**
     * 实现Interface的方法
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/android.html](http://www.html5plus.org/doc/zh_cn/android.html)
     */
    implements(name?: string, obj?: any): PlusAndroidInstanceObject;
    /**
     * 获取应用主Activity实例对象
     * Android平台完整Java类名为android.app.Activity，完整API请参考Android开发文档
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/android.html](http://www.html5plus.org/doc/zh_cn/android.html)
     */
    runtimeMainActivity(): PlusAndroidInstanceObject;
    /**
     * 获取当前Webview窗口对象的native层实例对象
     * Android平台完整Java类名为android.webkit.Webview，完整API请参考Android开发文档
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/android.html](http://www.html5plus.org/doc/zh_cn/android.html)
     */
    currentWebview(): PlusAndroidInstanceObject;
}

/**
 * Java类对象
 * Java类对象，可通过其属性获取类的常量，可通过方法来操作类的静态变量和方法，也通过new方法来创建类的实例对象。
 * 	对于类的常量，则直接通过.后面跟随常量名称调用即可。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/android.html](http://www.html5plus.org/doc/zh_cn/android.html)
 */
interface PlusAndroidClassObject {
    /**
     * 获取Java类对象的静态属性
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/android.html](http://www.html5plus.org/doc/zh_cn/android.html)
     */
    plusGetAttribute(name?: string): any;
    /**
     * 设置Java类对象的静态属性
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/android.html](http://www.html5plus.org/doc/zh_cn/android.html)
     */
    plusSetAttribute(name?: string, value?: any): void;
}

/**
 * Java实例对象
 * Java实例对象，可通过其方法来操作实例的变量和方法。
 * 	注意：必须通过plusGetAttribute()方法读取实例对象的属性值，通过plusSetAttribute()方法设置实例对象的属性值。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/android.html](http://www.html5plus.org/doc/zh_cn/android.html)
 */
interface PlusAndroidInstanceObject {
    /**
     * 获取Java实例对象的属性
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/android.html](http://www.html5plus.org/doc/zh_cn/android.html)
     */
    plusGetAttribute(name?: string): any;
    /**
     * 设置Java实例对象的属性
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/android.html](http://www.html5plus.org/doc/zh_cn/android.html)
     */
    plusSetAttribute(name?: string, value?: any): void;
}

/**
 * Audio模块用于提供音频的录制和播放功能，可调用系统的麦克风设备进行录音操作，也可调用系统的扬声器设备播放音频文件。通过plus.audio获取音频管理对象。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/audio.html](http://www.html5plus.org/doc/zh_cn/audio.html)
 */
interface PlusAudio {
    /**
     * 录音对象
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/audio.html](http://www.html5plus.org/doc/zh_cn/audio.html)
     */
    AudioRecorder?: PlusAudioAudioRecorder;
    /**
     * 音频播放对象
     * 音频播放对象，用于音频文件的播放。不能通过new方法直接创建，只能通过audio.createPlayer方法创建。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/audio.html](http://www.html5plus.org/doc/zh_cn/audio.html)
     */
    AudioPlayer?: PlusAudioAudioPlayer;
    /**
     * JSON对象，调用麦克风设备进行录音的参数
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/audio.html](http://www.html5plus.org/doc/zh_cn/audio.html)
     */
    RecordOptions?: PlusAudioRecordOptions;
    /**
     * 设备的扬声器音频输出线路
     * 音频输出线路常量，值为0。音频播放时在设备的扬声器输出。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/audio.html](http://www.html5plus.org/doc/zh_cn/audio.html)
     */
    ROUTE_SPEAKER?: number;
    /**
     * 设备听筒音频输出线路
     * 音频输出线路常量，值为1。音频播放时在设备的听筒输出。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/audio.html](http://www.html5plus.org/doc/zh_cn/audio.html)
     */
    ROUTE_EARPIECE?: number;
    /**
     * 获取当前设备的录音对象
     * 获取当前设备的录音对象，进行录音操作，录音对象是设备的独占资源，在同一时间仅可执行一个录音操作，否则可能会导致操作失败。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/audio.html](http://www.html5plus.org/doc/zh_cn/audio.html)
     */
    getRecorder(): PlusAudioAudioRecorder;
    /**
     * 创建音频播放对象
     * 创建一个音频文件播放对象，用于打开音频文件并播放。
     * 	可通过path参数指定要播放的音频文件。创建后返回播放对象，通过Audio.play方法开始播放。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/audio.html](http://www.html5plus.org/doc/zh_cn/audio.html)
     */
    createPlayer(path?: string): PlusAudioAudioPlayer;
}

/**
 * 录音对象
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/audio.html](http://www.html5plus.org/doc/zh_cn/audio.html)
 */
interface PlusAudioAudioRecorder {
    /**
     * 数组，设备录音支持的采用率
     * 属性类型为Array(String)，若不支持此属性则返回空数组对象。支持的录音采样率，字符串格式为“采样频率”，如“8000”；其单位为Hz。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/audio.html](http://www.html5plus.org/doc/zh_cn/audio.html)
     */
    supportedSamplerates?: string;
    /**
     * 数组，设备录音支持的文件格式
     * 属性类型为Array(String)，若不支持此属性则返回空数组对象。支持的录音文件的格式，字符串格式为文件格式后缀名，如"mp3"、"aac"、"wav"等。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/audio.html](http://www.html5plus.org/doc/zh_cn/audio.html)
     */
    supportedFormats?: string;
    /**
     * 调用设备麦克风进行录音操作
     * 调用设备麦克风开始录音操作，录音完成需调用stop方法停止。录音完成后将通过successCB回调返回录音后的文件数据。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/audio.html](http://www.html5plus.org/doc/zh_cn/audio.html)
     */
    record(option?: PlusAudioRecordOptions, successCB?: (result: string) => void, errorCB?: (result: any) => void): void;
    /**
     * 结束录音操作
     * 结束录音操作，通知设备完成录音操作。录音完成后将调用record方法中传入的successCB回调返回录音文件。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/audio.html](http://www.html5plus.org/doc/zh_cn/audio.html)
     */
    stop(): void;
}

/**
 * 音频播放对象
 * 音频播放对象，用于音频文件的播放。不能通过new方法直接创建，只能通过audio.createPlayer方法创建。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/audio.html](http://www.html5plus.org/doc/zh_cn/audio.html)
 */
interface PlusAudioAudioPlayer {
    /**
     * 开始播放音频
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/audio.html](http://www.html5plus.org/doc/zh_cn/audio.html)
     */
    play(successCB?: () => void, errorCB?: (result: any) => void): void;
    /**
     * 暂停播放音频
     * 需先调用createPlayer方法创建音频播放对象，并开始播放。音频播放对象在播放状态才能暂停，在其它状态调用此方法无任何作用。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/audio.html](http://www.html5plus.org/doc/zh_cn/audio.html)
     */
    pause(): void;
    /**
     * 恢复播放音频
     * 音频播放对象在暂停状态才能恢复播放，在其它状态调用此方法无任何作用。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/audio.html](http://www.html5plus.org/doc/zh_cn/audio.html)
     */
    resume(): void;
    /**
     * 停止播放音频
     * 停止播放音频，音频播放对象在播放或暂停状态才能停止播放，在其它状态调用此方法无任何作用。
     * 	停止播放后如果需要继续播放，则需调用play方法重新开始播放。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/audio.html](http://www.html5plus.org/doc/zh_cn/audio.html)
     */
    stop(): void;
    /**
     * 跳到指定位置播放音频
     * 跳到指定位置播放音频，音频播放对象在播放或暂停状态才能跳到指定播放音频，在其它状态调用此方法无任何作用。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/audio.html](http://www.html5plus.org/doc/zh_cn/audio.html)
     */
    seekTo(position?: number): void;
    /**
     * 获取音频流的总长度
     * 获取音频流的总长度，单位为秒，若长度未知则返回-1。如果还未获取到音频流信息则返回NaN，此时需要延迟获取此信息。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/audio.html](http://www.html5plus.org/doc/zh_cn/audio.html)
     */
    getDuration(): number;
    /**
     * 获取音频流当前播放的位置
     * 获取音频流当前播放的位置（已播放的长度），单位为s。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/audio.html](http://www.html5plus.org/doc/zh_cn/audio.html)
     */
    getPosition(): number;
    /**
     * 设置音频输出线路
     * 可在音频文件开始播放前或播放的过程中改变音频输出线路，默认使用扬声器（plus.audio.ROUTE_SPEAKER）输出线路。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/audio.html](http://www.html5plus.org/doc/zh_cn/audio.html)
     */
    setRoute(route?: number): void;
}

/**
 * JSON对象，调用麦克风设备进行录音的参数
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/audio.html](http://www.html5plus.org/doc/zh_cn/audio.html)
 */
interface PlusAudioRecordOptions {
    /**
     * 录音声道
     * 可取值：
     * 		"mono" - 单声道录音；
     * 		"stereo" - 立体声道录音。
     * 	默认值为"mono"。
     * - mono: 单声道录音
     * - stereo: 立体声录音
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/audio.html](http://www.html5plus.org/doc/zh_cn/audio.html)
     */
    channels?: 'mono' | 'stereo';
    /**
     * 保存录音文件的路径
     * 可设置具体文件名，也可只设置路径，如果以“/”结尾则表明是路径，文件名由录音程序自动生成。
     * 	如未设置则使用默认目录生成随机文件名称，默认目录为应用%APPID%下的documents目录。
     * - _www/: 应用资源目录
     * - _doc/: 应用私有文档目录
     * - _documents/: 共享文档目录
     * - _downloads/: 共享下载目录
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/audio.html](http://www.html5plus.org/doc/zh_cn/audio.html)
     */
    filename?: '_www/' | '_doc/' | '_documents/' | '_downloads/';
    /**
     * 录音文件的采样率
     * 需通过supportedSamplerates属性获取设备支持的采样率，若设置无效的值，则使用系统默认的采样率。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/audio.html](http://www.html5plus.org/doc/zh_cn/audio.html)
     */
    samplerate?: string;
    /**
     * 录音文件的格式
     * 需通过supportedFormats属性获取设备支持的录音格式，若设置无效的值，则使用系统默认的录音格式。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/audio.html](http://www.html5plus.org/doc/zh_cn/audio.html)
     */
    format?: string;
}

/**
 * Bluetooth模块用于管理蓝牙设备，搜索附近蓝牙设备、连接实现数据通信等。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/bluetooth.html](http://www.html5plus.org/doc/zh_cn/bluetooth.html)
 */
interface PlusBluetooth {
    /**
     * 蓝牙设备信息
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/bluetooth.html](http://www.html5plus.org/doc/zh_cn/bluetooth.html)
     */
    BluetoothDeviceInfo?: PlusBluetoothBluetoothDeviceInfo;
    /**
     * 蓝牙设备服务信息
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/bluetooth.html](http://www.html5plus.org/doc/zh_cn/bluetooth.html)
     */
    BluetoothService?: PlusBluetoothBluetoothService;
    /**
     * 蓝牙设备特征值
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/bluetooth.html](http://www.html5plus.org/doc/zh_cn/bluetooth.html)
     */
    Bluetoothcharacteristic?: PlusBluetoothBluetoothcharacteristic;
    /**
     * 蓝牙设备特征值支持的操作类型
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/bluetooth.html](http://www.html5plus.org/doc/zh_cn/bluetooth.html)
     */
    BluetoothcharacteristicProperties?: PlusBluetoothBluetoothcharacteristicProperties;
    /**
     * 关闭蓝牙模块
     * 断开所有已经建立的连接，释放系统资源，要求在蓝牙功能使用完成后调用（于openBluetoothAdapter成对使用）。
     * 	关闭成功后触发options参数中的success回调，失败触发options参数中的fail回调。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/bluetooth.html](http://www.html5plus.org/doc/zh_cn/bluetooth.html)
     */
    closeBluetoothAdapter(success?: (result: any) => void, fail?: (result: any) => void, complete?: (result: any) => void): void;
    /**
     * 获取本机蓝牙适配器状态
     * 获取成功后触发options参数中的success回调，失败触发options参数中的fail回调。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/bluetooth.html](http://www.html5plus.org/doc/zh_cn/bluetooth.html)
     */
    getBluetoothAdapterState(success?: (result: any) => void, fail?: (result: any) => void, complete?: (result: any) => void): void;
    /**
     * 获取已搜索到的蓝牙设备
     * 包括已经和本机处于连接状态的设备。
     * 	获取成功后触发options参数中的success回调，失败触发options参数中的fail回调。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/bluetooth.html](http://www.html5plus.org/doc/zh_cn/bluetooth.html)
     */
    getBluetoothDevices(success?: (result: any) => void, fail?: (result: any) => void, complete?: (result: any) => void): void;
    /**
     * 根据uuid获取处于已连接的设备
     * 获取成功后触发options参数中的success回调，失败触发options参数中的fail回调。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/bluetooth.html](http://www.html5plus.org/doc/zh_cn/bluetooth.html)
     */
    getConnectedBluetoothDevices(services?: any [], success?: (result: any) => void, fail?: (result: any) => void, complete?: (result: any) => void): void;
    /**
     * 监听蓝牙适配器状态变化事件
     * 蓝牙适配器状态发生变化时触发回调。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/bluetooth.html](http://www.html5plus.org/doc/zh_cn/bluetooth.html)
     */
    onBluetoothAdapterStateChange(changeCB?: (result: any) => void): void;
    /**
     * 监听搜索到新设备的事件
     * 搜索到新设备时触发回调。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/bluetooth.html](http://www.html5plus.org/doc/zh_cn/bluetooth.html)
     */
    onBluetoothDeviceFound(callback?: (result: any) => void): void;
    /**
     * 初始化蓝牙模块
     * 初始化成功后触发options参数中的success回调，失败触发options参数中的fail回调。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/bluetooth.html](http://www.html5plus.org/doc/zh_cn/bluetooth.html)
     */
    openBluetoothAdapter(success?: (result: any) => void, fail?: (result: any) => void, complete?: (result: any) => void): void;
    /**
     * 开始搜索附近的蓝牙设备
     * 此操作比较耗费系统资源，请在搜索并连接到设备后调用stopBluetoothDevicesDiscovery方法停止搜索。
     * 	搜索成功后触发options参数中的success回调，失败触发options参数中的fail回调。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/bluetooth.html](http://www.html5plus.org/doc/zh_cn/bluetooth.html)
     */
    startBluetoothDevicesDiscovery(services?: any [], allowDuplicatesKey?: boolean, interval?: number, success?: (result: any) => void, fail?: (result: any) => void, complete?: (result: any) => void): void;
    /**
     * 停止搜寻附近的蓝牙外围设备
     * 若已经找到需要的蓝牙设备并不需要继续搜索时，应该调用该接口停止蓝牙搜索。
     * 	停止成功后触发options参数中的success回调，失败触发options参数中的fail回调。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/bluetooth.html](http://www.html5plus.org/doc/zh_cn/bluetooth.html)
     */
    stopBluetoothDevicesDiscovery(success?: (result: any) => void, fail?: (result: any) => void, complete?: (result: any) => void): void;
    /**
     * 断开与低功耗蓝牙设备的连接
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/bluetooth.html](http://www.html5plus.org/doc/zh_cn/bluetooth.html)
     */
    closeBLEConnection(deviceId?: string, success?: (result: any) => void, fail?: (result: any) => void, complete?: (result: any) => void): void;
    /**
     * 连接低功耗蓝牙设备
     * 若之前已有搜索过某个蓝牙设备，并成功建立连接，可直接传入之前搜索获取的deviceId尝试连接该设备，无需进行搜索操作。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/bluetooth.html](http://www.html5plus.org/doc/zh_cn/bluetooth.html)
     */
    createBLEConnection(deviceId?: string, timeout?: number, success?: (result: any) => void, fail?: (result: any) => void, complete?: (result: any) => void): void;
    /**
     * 获取蓝牙设备指定服务中所有特征值(characteristic)
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/bluetooth.html](http://www.html5plus.org/doc/zh_cn/bluetooth.html)
     */
    getBLEDeviceCharacteristics(deviceId?: string, serviceId?: string, success?: (result: any) => void, fail?: (result: any) => void, complete?: (result: any) => void): void;
    /**
     * 获取蓝牙设备的所有服务(service)
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/bluetooth.html](http://www.html5plus.org/doc/zh_cn/bluetooth.html)
     */
    getBLEDeviceServices(deviceId?: string, success?: (result: any) => void, fail?: (result: any) => void, complete?: (result: any) => void): void;
    /**
     * 启用低功耗蓝牙设备特征值变化时的notify功能，订阅特征值
     * 蓝牙设备服务的特征值必须支持notify或indicate才可以成功调用。
     * 另外，必须先启用notifyBLECharacteristicValueChange才能监听到设备characteristicValueChange事件,即特征值发生变化时通过onBLECharacteristicValueChange注册的事件回调。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/bluetooth.html](http://www.html5plus.org/doc/zh_cn/bluetooth.html)
     */
    notifyBLECharacteristicValueChange(deviceId?: string, serviceId?: string, characteristicId?: string, state?: boolean, success?: (result: any) => void, fail?: (result: any) => void, complete?: (result: any) => void): void;
    /**
     * 监听低功耗蓝牙设备的特征值变化事件
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/bluetooth.html](http://www.html5plus.org/doc/zh_cn/bluetooth.html)
     */
    onBLECharacteristicValueChange(callback?: (result: any) => void): void;
    /**
     * 监听低功耗蓝牙设备连接状态变化事件
     * 包括开发者主动连接或断开连接，设备丢失，连接异常断开等。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/bluetooth.html](http://www.html5plus.org/doc/zh_cn/bluetooth.html)
     */
    onBLEConnectionStateChange(callback?: (result: any) => void): void;
    /**
     * 读取低功耗蓝牙设备指定特征值的二进制数据值
     * 指定的特征值需支持read操作才可以成功调用。
     * 	并行调用多次可能导致读取失败，读取的数据需要在onBLECharacteristicValueChange方法注册的回调中获取。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/bluetooth.html](http://www.html5plus.org/doc/zh_cn/bluetooth.html)
     */
    readBLECharacteristicValue(deviceId?: string, serviceId?: string, characteristicId?: string, success?: (result: any) => void, fail?: (result: any) => void, complete?: (result: any) => void): void;
    /**
     * 向低功耗蓝牙设备指定特征值写入二进制数据
     * 指定的特征值需支持write操作才可以成功调用。
     * 	并行调用多次可能导致读取失败，系统可能会限制单次传输的数据大小，超过最大字节数后可能会发生写入错误，建议每次写入不超过20字节。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/bluetooth.html](http://www.html5plus.org/doc/zh_cn/bluetooth.html)
     */
    writeBLECharacteristicValue(deviceId?: string, serviceId?: string, characteristicId?: string, value?: ArrayBuffer, success?: (result: any) => void, fail?: (result: any) => void, complete?: (result: any) => void): void;
}

/**
 * 蓝牙设备信息
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/bluetooth.html](http://www.html5plus.org/doc/zh_cn/bluetooth.html)
 */
interface PlusBluetoothBluetoothDeviceInfo {
    /**
     * 蓝牙设备名称
     * 某些设备可能没有此字段值。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/bluetooth.html](http://www.html5plus.org/doc/zh_cn/bluetooth.html)
     */
    name?: string;
    /**
     * 蓝牙设备的id
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/bluetooth.html](http://www.html5plus.org/doc/zh_cn/bluetooth.html)
     */
    deviceId?: string;
    /**
     * 蓝牙设备的信号强度
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/bluetooth.html](http://www.html5plus.org/doc/zh_cn/bluetooth.html)
     */
    RSSI?: string;
    /**
     * 蓝牙设备的广播数据段中的ManufacturerData数据段
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/bluetooth.html](http://www.html5plus.org/doc/zh_cn/bluetooth.html)
     */
    advertisData?: ArrayBuffer;
    /**
     * 蓝牙设备的广播数据段中的ServiceUUIDs数据段
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/bluetooth.html](http://www.html5plus.org/doc/zh_cn/bluetooth.html)
     */
    advertisServiceUUIDs?: any [];
    /**
     * 蓝牙设备的广播数据段中的LocalName数据段
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/bluetooth.html](http://www.html5plus.org/doc/zh_cn/bluetooth.html)
     */
    localName?: string;
    /**
     * 蓝牙设备的广播数据段中的ServiceData数据段
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/bluetooth.html](http://www.html5plus.org/doc/zh_cn/bluetooth.html)
     */
    serviceData?: any;
}

/**
 * 蓝牙设备服务信息
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/bluetooth.html](http://www.html5plus.org/doc/zh_cn/bluetooth.html)
 */
interface PlusBluetoothBluetoothService {
    /**
     * 蓝牙设备服务的uuid
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/bluetooth.html](http://www.html5plus.org/doc/zh_cn/bluetooth.html)
     */
    uuid?: string;
    /**
     * 是否为设备的主服务
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/bluetooth.html](http://www.html5plus.org/doc/zh_cn/bluetooth.html)
     */
    isPrimary?: boolean;
}

/**
 * 蓝牙设备特征值
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/bluetooth.html](http://www.html5plus.org/doc/zh_cn/bluetooth.html)
 */
interface PlusBluetoothBluetoothcharacteristic {
    /**
     * 蓝牙设备特征值的uuid
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/bluetooth.html](http://www.html5plus.org/doc/zh_cn/bluetooth.html)
     */
    uuid?: string;
    /**
     * 设备特征值支持的操作类型
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/bluetooth.html](http://www.html5plus.org/doc/zh_cn/bluetooth.html)
     */
    properties?: PlusBluetoothBluetoothcharacteristicProperties;
}

/**
 * 蓝牙设备特征值支持的操作类型
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/bluetooth.html](http://www.html5plus.org/doc/zh_cn/bluetooth.html)
 */
interface PlusBluetoothBluetoothcharacteristicProperties {
    /**
     * 特征值是否支持read操作
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/bluetooth.html](http://www.html5plus.org/doc/zh_cn/bluetooth.html)
     */
    read?: boolean;
    /**
     * 特征值是否支持write操作
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/bluetooth.html](http://www.html5plus.org/doc/zh_cn/bluetooth.html)
     */
    write?: boolean;
    /**
     * 特征值是否支持notify操作
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/bluetooth.html](http://www.html5plus.org/doc/zh_cn/bluetooth.html)
     */
    notify?: boolean;
    /**
     * 特征值是否支持indicate操作
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/bluetooth.html](http://www.html5plus.org/doc/zh_cn/bluetooth.html)
     */
    indicate?: boolean;
}

/**
 * Camera模块管理设备的摄像头，可用于拍照、摄像操作，通过plus.camera获取摄像头管理对象。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/camera.html](http://www.html5plus.org/doc/zh_cn/camera.html)
 */
interface PlusCamera {
    /**
     * 摄像头对象
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/camera.html](http://www.html5plus.org/doc/zh_cn/camera.html)
     */
    Camera?: PlusCameraCamera;
    /**
     * JSON对象，调用摄像头的参数
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/camera.html](http://www.html5plus.org/doc/zh_cn/camera.html)
     */
    CameraOptions?: PlusCameraCameraOptions;
    /**
     * JSON对象，弹出拍照或摄像界面指示位置
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/camera.html](http://www.html5plus.org/doc/zh_cn/camera.html)
     */
    PopPosition?: PlusCameraPopPosition;
    /**
     * 获取摄像头管理对象
     * 获取需要操作的摄像头对象，如果要进行拍照或摄像操作，需先通过此方法获取摄像头对象。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/camera.html](http://www.html5plus.org/doc/zh_cn/camera.html)
     */
    getCamera(index?: number): PlusCameraCamera;
}

/**
 * 摄像头对象
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/camera.html](http://www.html5plus.org/doc/zh_cn/camera.html)
 */
interface PlusCameraCamera {
    /**
     * 字符串数组，摄像头支持的拍照分辨率
     * 属性类型为String[]，若不支持此属性则返回空数组对象。
     * 	摄像头支持的拍照图片分辨率字符串形式“WIDTH*Height”，如“400*800”；如果支持任意自定义分辨率则“*”。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/camera.html](http://www.html5plus.org/doc/zh_cn/camera.html)
     */
    supportedImageResolutions?: any [];
    /**
     * 字符串数组，摄像头支持的摄像分辨率
     * 属性类型为String[]，若不支持此属性则返回空数组对象。
     * 	摄像头支持的视频分辨率字符串形式为“WIDTH*Height”，如“400*800”；如果支持任意自定义分辨率则“*”。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/camera.html](http://www.html5plus.org/doc/zh_cn/camera.html)
     */
    supportedVideoResolutions?: any [];
    /**
     * 字符串数组，摄像头支持的拍照文件格式
     * 属性类型为String[]，若不支持此属性则返回空数组对象。
     * 	摄像头支持的图片文件格式字符串形式为文件格式后缀名，如“jpg”、“png”、“bmp”。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/camera.html](http://www.html5plus.org/doc/zh_cn/camera.html)
     */
    supportedImageFormats?: any [];
    /**
     * 字符串数组，摄像头支持的摄像文件格式
     * 属性类型为String[]，若不支持此属性则返回空数组对象。
     * 	摄像头支持的视频文件格式字符串形式为文件格式后缀名，如“3gp”、“mp4”、“avi”。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/camera.html](http://www.html5plus.org/doc/zh_cn/camera.html)
     */
    supportedVideoFormats?: any [];
    /**
     * 进行拍照操作
     * 摄像头资源为独占资源，如果其它程序或页面已经占用摄像头，再次操作则失败。
     * 	拍照操作成功将通过successCB返回拍照获取的图片路径。
     * 	可通过option设置摄像头的各种属性参数。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/camera.html](http://www.html5plus.org/doc/zh_cn/camera.html)
     */
    captureImage(successCB?: (result: string) => void, errorCB?: (result: any) => void, options?: PlusCameraCameraOptions): void;
    /**
     * 调用摄像头进行摄像操作
     * 摄像头资源为独占资源，如果其它程序或页面已经占用摄像头，再次操作则失败。
     * 	拍照操作成功将通过successCB返回摄像获取的视频文件路径。
     * 	可通过option设置摄像头的各种属性参数。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/camera.html](http://www.html5plus.org/doc/zh_cn/camera.html)
     */
    startVideoCapture(successCB?: (result: string) => void, errorCB?: (result: any) => void, option?: PlusCameraCameraOptions): void;
    /**
     * 结束摄像操作
     * 开始调用摄像头进行摄像操作后，可在后台结束摄像操作，与用户在界面结束操作效果一致。
     * 	摄像操作成功将通过startVideoCapture函数中的successCB返回拍照获取的图片路径。
     * 	用户如果没有进行摄像操作关闭摄像头页面则调用失败回调函数。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/camera.html](http://www.html5plus.org/doc/zh_cn/camera.html)
     */
    stopVideoCapture(): void;
}

/**
 * JSON对象，调用摄像头的参数
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/camera.html](http://www.html5plus.org/doc/zh_cn/camera.html)
 */
interface PlusCameraCameraOptions {
    /**
     * 拍照或摄像文件保存的路径
     * 可设置具体文件名（如"_doc/camera/a.jpg"）；也可只设置路径，以"/"结尾则表明是路径（如"_doc/camera/"）。
     * 	如未设置文件名称或设置的文件名冲突则文件名由程序程序自动生成。
     * - _doc/: 应用私有文档目录
     * - _documents/: 共享文档目录
     * - _downloads/: 共享下载目录
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/camera.html](http://www.html5plus.org/doc/zh_cn/camera.html)
     */
    filename?: '_doc/' | '_documents/' | '_downloads/';
    /**
     * 拍照或摄像的文件格式
     * 可通过Camera对象的supportedImageFormats或supportedVideoFormats获取，如果设置的参数无效则使用系统默认值。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/camera.html](http://www.html5plus.org/doc/zh_cn/camera.html)
     */
    format?: string;
    /**
     * 拍照或摄像默认使用的摄像头
     * 拍照或摄像界面默认使用的摄像头编号，1表示主摄像头，2表示辅摄像头。
     * - 1: 使用设备主摄像头
     * - 2: 使用设备辅摄像头
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/camera.html](http://www.html5plus.org/doc/zh_cn/camera.html)
     */
    index?: '1' | '2';
    /**
     * 视频长度
     * 单位为秒（s），小于等于0表示不限定视频长度。
     * 	默认值为0（不限定视频长度）。
     * 	注意：仅在调用拍摄视频（startVideoCapture）时有效。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/camera.html](http://www.html5plus.org/doc/zh_cn/camera.html)
     */
    videoMaximumDuration?: number;
    /**
     * 是否优化图片
     * 自动调整图片的方向，在部分设备上可能出现图片方向不正确的问题，此参数将配置是否自动调整图片方向。
     * 	可取值：
     * 		true - 自动调整图片方向；
     * 		false - 不调整。
     * 	默认值为true。
     * 	注意：自动调整图片方向将消耗部分系统资源，可能会导致拍照后回调触发时机延迟，将此值设置为false则可避免延迟问题。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/camera.html](http://www.html5plus.org/doc/zh_cn/camera.html)
     */
    optimize?: boolean;
    /**
     * 拍照或摄像使用的分辨率
     * 可通过Camera对象的supportedImageResolutions或supportedVideoResolutions获取，如果设置的参数无效则使用系统默认值。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/camera.html](http://www.html5plus.org/doc/zh_cn/camera.html)
     */
    resolution?: string;
    /**
     * 拍照或摄像界面弹出指示区域
     * 对于大屏幕设备如iPad，拍照或摄像界面为弹出窗口，此时可通过此参数设置弹出窗口位置，其为JSON对象，格式如{top:"10px",left:"10px",width:"200px",height:"200px"}，默认弹出位置为屏幕居中。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/camera.html](http://www.html5plus.org/doc/zh_cn/camera.html)
     */
    popover?: PlusCameraPopPosition;
}

/**
 * JSON对象，弹出拍照或摄像界面指示位置
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/camera.html](http://www.html5plus.org/doc/zh_cn/camera.html)
 */
interface PlusCameraPopPosition {
    /**
     * 指示区域距离容器顶部的距离
     * 弹出拍照或摄像窗口指示区域距离容器顶部的距离，支持像素值（如"100px"）和百分比（如"50%"）。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/camera.html](http://www.html5plus.org/doc/zh_cn/camera.html)
     */
    top?: string;
    /**
     * 指示区域距离容器左侧的距离
     * 弹出拍照或摄像窗口指示区域距离容器左侧的距离，支持像素值（如"100px"）和百分比（如"50%"）。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/camera.html](http://www.html5plus.org/doc/zh_cn/camera.html)
     */
    left?: string;
    /**
     * 指示区域的宽度
     * 弹出拍照或摄像窗口指示区域的宽度，支持像素值（如"100px"）和百分比（如"50%"）。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/camera.html](http://www.html5plus.org/doc/zh_cn/camera.html)
     */
    width?: string;
    /**
     * 指示区域的高度
     * 弹出拍照或摄像窗口指示区域的高度，支持像素值（如"100px"）和百分比（如"50%"）。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/camera.html](http://www.html5plus.org/doc/zh_cn/camera.html)
     */
    height?: string;
}

/**
 * Contacts模块管理系统通讯录，用于可对系统通讯录进行增、删、改、查等操作。通过plus.contacts获取系统通讯录管理对象。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/contacts.html](http://www.html5plus.org/doc/zh_cn/contacts.html)
 */
interface PlusContacts {
    /**
     * 通讯录对象
     * 通讯录管理对象，可对系统通讯录进行联系人的增、删、改、查操作。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/contacts.html](http://www.html5plus.org/doc/zh_cn/contacts.html)
     */
    AddressBook?: PlusContactsAddressBook;
    /**
     * 联系人对象
     * 联系人对象，包括联系人的各种信息，如名称、电话号码、地址等。也包括新增、删除联系人的操作方法。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/contacts.html](http://www.html5plus.org/doc/zh_cn/contacts.html)
     */
    Contact?: PlusContactsContact;
    /**
     * JSON对象，联系人域数据对象
     * 联系人域数据对象，保存联系人特定域信息。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/contacts.html](http://www.html5plus.org/doc/zh_cn/contacts.html)
     */
    ContactField?: PlusContactsContactField;
    /**
     * JSON对象，联系人名称对象
     * 联系人名称对象，保存联系人名称信息，如姓、名等。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/contacts.html](http://www.html5plus.org/doc/zh_cn/contacts.html)
     */
    ContactName?: PlusContactsContactName;
    /**
     * JSON对象，联系人地址对象
     * 联系人地址对象，保存联系人地址信息，如国家、省份、城市等。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/contacts.html](http://www.html5plus.org/doc/zh_cn/contacts.html)
     */
    ContactAddress?: PlusContactsContactAddress;
    /**
     * JSON对象，联系人所属组织信息
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/contacts.html](http://www.html5plus.org/doc/zh_cn/contacts.html)
     */
    ContactOrganization?: PlusContactsContactOrganization;
    /**
     * JSON对象，查找联系人参数
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/contacts.html](http://www.html5plus.org/doc/zh_cn/contacts.html)
     */
    ContactFindOption?: PlusContactsContactFindOption;
    /**
     * JSON对象，联系人查找过滤器
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/contacts.html](http://www.html5plus.org/doc/zh_cn/contacts.html)
     */
    ContactFindFilter?: PlusContactsContactFindFilter;
    /**
     * 手机通讯录
     * 通讯录类型常量，数值类型，固定值为0，用于获取系统的联系人信息。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/contacts.html](http://www.html5plus.org/doc/zh_cn/contacts.html)
     */
    ADDRESSBOOK_PHONE?: number;
    /**
     * SIM卡通讯录
     * 通讯录类型常量，数值类型，固定值为1，用于获取SIM卡上的联系人信息。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/contacts.html](http://www.html5plus.org/doc/zh_cn/contacts.html)
     */
    ADDRESSBOOK_SIM?: number;
    /**
     * 获取通讯录对象
     * 根据指定通讯录类型获取通讯录对象，获取通讯录对象后可对其进行增、删、改操作。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/contacts.html](http://www.html5plus.org/doc/zh_cn/contacts.html)
     */
    getAddressBook(type?: number, successCB?: (result: PlusContactsAddressBook) => void, errorCB?: (result: any) => void): void;
}

/**
 * 通讯录对象
 * 通讯录管理对象，可对系统通讯录进行联系人的增、删、改、查操作。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/contacts.html](http://www.html5plus.org/doc/zh_cn/contacts.html)
 */
interface PlusContactsAddressBook {
    /**
     * 创建联系人
     * 创建一个系统联系人，并返回联系人对象，可对联系人对象进行操作设置联系人信息，如名称、地址、电话等。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/contacts.html](http://www.html5plus.org/doc/zh_cn/contacts.html)
     */
    create(): PlusContactsContact;
    /**
     * 在通讯录中查找联系人
     * 在通讯录中安装指定的规则查找联系人，contactFields可设定查找返回的联系人中包含的字段值，查找联系人成功时通过successCB回调返回，查找联系人失败则通过errorCB回调返回。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/contacts.html](http://www.html5plus.org/doc/zh_cn/contacts.html)
     */
    find(contactFields?: string [], successCB?: (result: PlusContactsContact) => void, errorCB?: (result: any) => void, findOptions?: PlusContactsContactFindOption): void;
}

/**
 * 联系人对象
 * 联系人对象，包括联系人的各种信息，如名称、电话号码、地址等。也包括新增、删除联系人的操作方法。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/contacts.html](http://www.html5plus.org/doc/zh_cn/contacts.html)
 */
interface PlusContactsContact {
    /**
     * 联系人的id
     * 联系人id由系统分配维护，从系统获取联系人时自动赋值，再次查询时可使用此id值进行检索。
     * 	注意：此值为只读属性，改写此值可能会导致无法预期的错误。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/contacts.html](http://www.html5plus.org/doc/zh_cn/contacts.html)
     */
    id?: string;
    /**
     * 联系人显示的名字
     * 联系人显示的名字通常由其姓和名组合而成。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/contacts.html](http://www.html5plus.org/doc/zh_cn/contacts.html)
     */
    displayName?: string;
    /**
     * 联系人的名称
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/contacts.html](http://www.html5plus.org/doc/zh_cn/contacts.html)
     */
    name?: PlusContactsContactName;
    /**
     * 联系人的昵称
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/contacts.html](http://www.html5plus.org/doc/zh_cn/contacts.html)
     */
    nickname?: string;
    /**
     * 数组，联系人的电话
     * 如果联系人中未保存电话信息，则返回空数组。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/contacts.html](http://www.html5plus.org/doc/zh_cn/contacts.html)
     */
    phoneNumbers?: PlusContactsContactField;
    /**
     * 数组，联系人的邮箱
     * 如果联系人中未保存邮箱信息，则返回空数组。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/contacts.html](http://www.html5plus.org/doc/zh_cn/contacts.html)
     */
    emails?: PlusContactsContactField;
    /**
     * 数组，联系人的地址
     * 如果联系人中未保存地址信息，则返回空数组。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/contacts.html](http://www.html5plus.org/doc/zh_cn/contacts.html)
     */
    addresses?: PlusContactsContactAddress;
    /**
     * 数组，联系人的即时通讯地址
     * 如果联系人中未保存即时通讯地址信息，则返回空数组。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/contacts.html](http://www.html5plus.org/doc/zh_cn/contacts.html)
     */
    ims?: PlusContactsContactField;
    /**
     * 数组，联系人所属组织信息
     * 如果联系人中未保存所属组织信息，则返回空数组。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/contacts.html](http://www.html5plus.org/doc/zh_cn/contacts.html)
     */
    organizations?: PlusContactsContactOrganization;
    /**
     * 联系人的生日
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/contacts.html](http://www.html5plus.org/doc/zh_cn/contacts.html)
     */
    birthday?: Date;
    /**
     * 联系人的备注
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/contacts.html](http://www.html5plus.org/doc/zh_cn/contacts.html)
     */
    note?: string;
    /**
     * 数组，联系人的头像
     * 其值为头像图片url地址或图片数据：
     * 	url地址：仅支持本地图片地址，可以是绝对路径或相对路径，如“_doc/a.png”；
     * 	图片数据：必须符合Data URI scheme（RFC2397）格式的数据，如“image/png;base64,XXXX”，其中XXXX为base64编码的图片数据。在获取联系人时默认返回此类型的数据。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/contacts.html](http://www.html5plus.org/doc/zh_cn/contacts.html)
     */
    photos?: PlusContactsContactField;
    /**
     * 数组，联系人的组名
     * 如果联系人中未保存组名信息，则返回空数组。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/contacts.html](http://www.html5plus.org/doc/zh_cn/contacts.html)
     */
    categories?: PlusContactsContactField;
    /**
     * 数组，联系人的网址
     * 如果联系人中未保存网址信息，则返回空数组。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/contacts.html](http://www.html5plus.org/doc/zh_cn/contacts.html)
     */
    urls?: PlusContactsContactField;
    /**
     * 克隆联系人
     * 克隆联系人，创建出一个新的联系人对象。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/contacts.html](http://www.html5plus.org/doc/zh_cn/contacts.html)
     */
    clone(): PlusContactsContact;
    /**
     * 删除联系人
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/contacts.html](http://www.html5plus.org/doc/zh_cn/contacts.html)
     */
    remove(successCB?: () => void, errorCB?: (result: any) => void): void;
    /**
     * 保存联系人
     * 将联系人数据保存到通讯录中，操作成功将通过successCB回调函数返回保存结果，操作失败将通过通过errorCB回调函数返回错误信息。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/contacts.html](http://www.html5plus.org/doc/zh_cn/contacts.html)
     */
    save(successCB?: () => void, errorCB?: (result: any) => void): void;
}

/**
 * JSON对象，联系人域数据对象
 * 联系人域数据对象，保存联系人特定域信息。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/contacts.html](http://www.html5plus.org/doc/zh_cn/contacts.html)
 */
interface PlusContactsContactField {
    /**
     * 联系人域类型，如电话号码中的“mobile”、“home”、“company”
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/contacts.html](http://www.html5plus.org/doc/zh_cn/contacts.html)
     */
    type?: string;
    /**
     * 联系人域值
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/contacts.html](http://www.html5plus.org/doc/zh_cn/contacts.html)
     */
    value?: string;
    /**
     * 是否为首选项
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/contacts.html](http://www.html5plus.org/doc/zh_cn/contacts.html)
     */
    preferred?: boolean;
}

/**
 * JSON对象，联系人名称对象
 * 联系人名称对象，保存联系人名称信息，如姓、名等。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/contacts.html](http://www.html5plus.org/doc/zh_cn/contacts.html)
 */
interface PlusContactsContactName {
    /**
     * 联系人的完整名称，由其它字段组合生成
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/contacts.html](http://www.html5plus.org/doc/zh_cn/contacts.html)
     */
    formatted?: string;
    /**
     * 联系人的姓
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/contacts.html](http://www.html5plus.org/doc/zh_cn/contacts.html)
     */
    familyName?: string;
    /**
     * 联系人的名
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/contacts.html](http://www.html5plus.org/doc/zh_cn/contacts.html)
     */
    givenName?: string;
    /**
     * 联系人的中间名
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/contacts.html](http://www.html5plus.org/doc/zh_cn/contacts.html)
     */
    middleName?: string;
    /**
     * 联系人的前缀（如Mr.或Dr.）
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/contacts.html](http://www.html5plus.org/doc/zh_cn/contacts.html)
     */
    honorificPrefix?: string;
    /**
     * 联系人的后缀
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/contacts.html](http://www.html5plus.org/doc/zh_cn/contacts.html)
     */
    honorificSuffix?: string;
}

/**
 * JSON对象，联系人地址对象
 * 联系人地址对象，保存联系人地址信息，如国家、省份、城市等。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/contacts.html](http://www.html5plus.org/doc/zh_cn/contacts.html)
 */
interface PlusContactsContactAddress {
    /**
     * 联系人地址类型，如“home”表示家庭地址、“company”表示单位地址
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/contacts.html](http://www.html5plus.org/doc/zh_cn/contacts.html)
     */
    type?: string;
    /**
     * 完整地址，由其它字段组合而成
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/contacts.html](http://www.html5plus.org/doc/zh_cn/contacts.html)
     */
    formatted?: string;
    /**
     * 完整的街道地址
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/contacts.html](http://www.html5plus.org/doc/zh_cn/contacts.html)
     */
    streetAddress?: string;
    /**
     * 城市或地区
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/contacts.html](http://www.html5plus.org/doc/zh_cn/contacts.html)
     */
    locality?: string;
    /**
     * 省或地区
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/contacts.html](http://www.html5plus.org/doc/zh_cn/contacts.html)
     */
    region?: string;
    /**
     * 国家
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/contacts.html](http://www.html5plus.org/doc/zh_cn/contacts.html)
     */
    country?: string;
    /**
     * 邮政编码
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/contacts.html](http://www.html5plus.org/doc/zh_cn/contacts.html)
     */
    postalCode?: string;
    /**
     * 是否为首选项
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/contacts.html](http://www.html5plus.org/doc/zh_cn/contacts.html)
     */
    preferred?: boolean;
}

/**
 * JSON对象，联系人所属组织信息
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/contacts.html](http://www.html5plus.org/doc/zh_cn/contacts.html)
 */
interface PlusContactsContactOrganization {
    /**
     * 联系人所属组织类型，如"company"
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/contacts.html](http://www.html5plus.org/doc/zh_cn/contacts.html)
     */
    type?: string;
    /**
     * 联系人所属组织名称
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/contacts.html](http://www.html5plus.org/doc/zh_cn/contacts.html)
     */
    name?: string;
    /**
     * 联系人所属组织部门
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/contacts.html](http://www.html5plus.org/doc/zh_cn/contacts.html)
     */
    department?: string;
    /**
     * 联系人在组织中的职位
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/contacts.html](http://www.html5plus.org/doc/zh_cn/contacts.html)
     */
    title?: string;
    /**
     * 是否为首选项
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/contacts.html](http://www.html5plus.org/doc/zh_cn/contacts.html)
     */
    preferred?: boolean;
}

/**
 * JSON对象，查找联系人参数
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/contacts.html](http://www.html5plus.org/doc/zh_cn/contacts.html)
 */
interface PlusContactsContactFindOption {
    /**
     * 数组，查找时的过滤器
     * 可设置为空，表示不过滤。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/contacts.html](http://www.html5plus.org/doc/zh_cn/contacts.html)
     */
    filter?: PlusContactsContactFindFilter;
    /**
     * 是否查找多个联系人，默认值为true
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/contacts.html](http://www.html5plus.org/doc/zh_cn/contacts.html)
     */
    multiple?: boolean;
}

/**
 * JSON对象，联系人查找过滤器
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/contacts.html](http://www.html5plus.org/doc/zh_cn/contacts.html)
 */
interface PlusContactsContactFindFilter {
    /**
     * 区配的逻辑
     * 可取“and”、“or”、“not”，默认值为“and”。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/contacts.html](http://www.html5plus.org/doc/zh_cn/contacts.html)
     */
    logic?: string;
    /**
     * 区配的联系人域，可取联系人的属性名称
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/contacts.html](http://www.html5plus.org/doc/zh_cn/contacts.html)
     */
    field?: string;
    /**
     * 区配的联系人值，可使用区配符号“?”和“*”
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/contacts.html](http://www.html5plus.org/doc/zh_cn/contacts.html)
     */
    value?: string;
}

/**
 * Device模块管理设备信息，用于获取手机设备的相关信息，如IMEI、IMSI、型号、厂商等。通过plus.device获取设备信息管理对象。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/device.html](http://www.html5plus.org/doc/zh_cn/device.html)
 */
interface PlusDevice {
    /**
     * 设备的国际移动设备身份码
     * 调用此属性获取设备的国际移动设备身份码。
     * 	如果设备不支持则返回空字符串。
     * 	如果设备存在多个身份码，则以“,”字符分割拼接，如“862470039452950,862470039452943”。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/device.html](http://www.html5plus.org/doc/zh_cn/device.html)
     */
    imei?: string;
    /**
     * 设备的国际移动用户识别码
     * 字符串数组类型，获取设备上插入SIM的国际移动设备身份码。
     * 	如果设备支持多卡模式则返回所有SIM身份码。
     * 	如果设备不支持或没有插入SIM卡则返回空数组。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/device.html](http://www.html5plus.org/doc/zh_cn/device.html)
     */
    imsi?: any [];
    /**
     * 设备的型号
     * 调用此属性获取设备的型号信息。
     * 	如果设备不支持则返回空字符串。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/device.html](http://www.html5plus.org/doc/zh_cn/device.html)
     */
    model?: string;
    /**
     * 设备的生产厂商
     * 调用此属性获取设备的生产厂商信息。
     * 	如果设备不支持则返回空字符串。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/device.html](http://www.html5plus.org/doc/zh_cn/device.html)
     */
    vendor?: string;
    /**
     * 设备的唯一标识
     * 调用此属性获取设备的唯一标识号。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/device.html](http://www.html5plus.org/doc/zh_cn/device.html)
     */
    uuid?: string;
    /**
     * 拨打电话
     * 调用系统程序拨打电话。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/device.html](http://www.html5plus.org/doc/zh_cn/device.html)
     */
    dial(number?: string, confirm?: boolean): void;
    /**
     * 发出蜂鸣声
     * 调用此方法使得设备发出蜂鸣声。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/device.html](http://www.html5plus.org/doc/zh_cn/device.html)
     */
    beep(times?: number): void;
    /**
     * 设备振动
     * 调用此方法使得设备振动。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/device.html](http://www.html5plus.org/doc/zh_cn/device.html)
     */
    vibrate(milliseconds?: number): void;
    /**
     * 设置应用是否保持唤醒（屏幕常亮）状态
     * 调用此方法设置应用是否一直保持唤醒状态，保持唤醒状态将会导致程序屏幕常亮、系统不会自动锁屏，从而导致消耗更多的电量。若未设置一直保持唤醒状态则会根据系统设置自动锁定屏幕。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/device.html](http://www.html5plus.org/doc/zh_cn/device.html)
     */
    setWakelock(lock?: boolean): void;
    /**
     * 获取程序是否一直保持唤醒（屏幕常亮）状态
     * 调用此方法获取程序是否一致保持唤醒状态。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/device.html](http://www.html5plus.org/doc/zh_cn/device.html)
     */
    isWakelock(): boolean;
    /**
     * 设置设备的系统音量
     * 调用此方法调节设备的系统音量。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/device.html](http://www.html5plus.org/doc/zh_cn/device.html)
     */
    setVolume(volume?: number): void;
    /**
     * 获取设备的系统音量
     * 系统音量值范围为0到1，0表示静音，1表示最大音量值。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/device.html](http://www.html5plus.org/doc/zh_cn/device.html)
     */
    getVolume(): number;
}

/**
 * Screen模块管理设备屏幕信息
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/device.html](http://www.html5plus.org/doc/zh_cn/device.html)
 */
interface PlusScreen {
    /**
     * 设备屏幕高度分辨率
     * 设备屏幕区域包括系统状态栏显示区域和应用显示区域，screen获取的是设备屏幕总区域的逻辑分辨率，单位为px。
     * 	如果需要获取实际分辨率则需要乘以比例值scale。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/device.html](http://www.html5plus.org/doc/zh_cn/device.html)
     */
    resolutionHeight?: number;
    /**
     * 设备屏幕宽度分辨率
     * 设备屏幕区域包括系统状态栏显示区域和应用显示区域，screen获取的是设备屏幕总区域的分辨率，单位为px。
     * 	如果需要获取实际分辨率则需要乘以比例值scale。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/device.html](http://www.html5plus.org/doc/zh_cn/device.html)
     */
    resolutionWidth?: number;
    /**
     * 逻辑分辨率与实际分辨率的比例
     * 屏幕分辨率分逻辑分辨率率和实际分辨率，在html页面中使用的像素值都是相对于逻辑分辨率，此值就是逻辑分辨率和实际分辨率的比例，实际分辨率=逻辑分辨率*比例。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/device.html](http://www.html5plus.org/doc/zh_cn/device.html)
     */
    scale?: number;
    /**
     * 设备屏幕水平方向的密度
     * 设备屏幕的密度为每英寸所显示的像素点数，密度越高显示清晰度越高，单位为dpi。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/device.html](http://www.html5plus.org/doc/zh_cn/device.html)
     */
    dpiX?: number;
    /**
     * 设备屏幕垂直方向的密度
     * 设备屏幕的密度为每英寸所显示的像素点数，密度越高显示清晰度越高，单位为dpi。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/device.html](http://www.html5plus.org/doc/zh_cn/device.html)
     */
    dpiY?: number;
    /**
     * 设置屏幕亮度
     * 调用此方法调节设备屏幕亮度。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/device.html](http://www.html5plus.org/doc/zh_cn/device.html)
     */
    setBrightness(brightness?: number): void;
    /**
     * 获取屏幕亮度值
     * 屏幕亮度值范围为0到1，0表示最低亮度值，1表示最高亮度值。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/device.html](http://www.html5plus.org/doc/zh_cn/device.html)
     */
    getBrightness(): number;
    /**
     * 锁定屏幕方向
     * 锁定屏幕方向后屏幕只能按锁定的屏幕方向显示，关闭当前页面后仍然有效。
     * 	可再次调用此方法修改屏幕锁定方向或调用unlockOrientation()方法恢复到应用的默认值。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/device.html](http://www.html5plus.org/doc/zh_cn/device.html)
     */
    lockOrientation(orientation?: string): void;
    /**
     * 解除锁定屏幕方向
     * 解除锁定屏幕方向后将恢复应用默认的屏幕显示方向（通常为应用打包发布时设置的方向）。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/device.html](http://www.html5plus.org/doc/zh_cn/device.html)
     */
    unlockOrientation(): void;
}

/**
 * Display模块管理应用可使用的显示区域信息
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/device.html](http://www.html5plus.org/doc/zh_cn/device.html)
 */
interface PlusDisplay {
    /**
     * 应用可使用的屏幕高度逻辑分辨率
     * 设备屏幕区域包括系统状态栏显示区域和应用显示区域，display获取的是应用显示区域的逻辑分辨率，单位为px。
     * 	如果需要获取实际分辨率则需要乘以比例值scale。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/device.html](http://www.html5plus.org/doc/zh_cn/device.html)
     */
    resolutionHeight?: number;
    /**
     * 应用可使用的屏幕宽度逻辑分辨率
     * 设备屏幕区域包括系统状态栏显示区域和应用显示区域，display获取的是应用显示区域的逻辑分辨率，单位为px。
     * 	如果需要获取实际分辨率则需要乘以比例值scale。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/device.html](http://www.html5plus.org/doc/zh_cn/device.html)
     */
    resolutionWidth?: number;
}

/**
 * networkinfo模块用于获取网络信息
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/device.html](http://www.html5plus.org/doc/zh_cn/device.html)
 */
interface PlusNetworkinfo {
    /**
     * 网络连接状态未知
     * 网络状态常量，表示当前设备网络状态未知，固定值为0。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/device.html](http://www.html5plus.org/doc/zh_cn/device.html)
     */
    CONNECTION_UNKNOW?: number;
    /**
     * 未连接网络
     * 网络状态常量，当前设备网络未连接网络，固定值为1。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/device.html](http://www.html5plus.org/doc/zh_cn/device.html)
     */
    CONNECTION_NONE?: number;
    /**
     * 有线网络
     * 网络状态常量，当前设备连接到有线网络，固定值为2。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/device.html](http://www.html5plus.org/doc/zh_cn/device.html)
     */
    CONNECTION_ETHERNET?: number;
    /**
     * 无线WIFI网络
     * 网络状态常量，当前设备连接到无线WIFI网络，固定值为3。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/device.html](http://www.html5plus.org/doc/zh_cn/device.html)
     */
    CONNECTION_WIFI?: number;
    /**
     * 蜂窝移动2G网络
     * 网络状态常量，当前设备连接到蜂窝移动2G网络，固定值为4。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/device.html](http://www.html5plus.org/doc/zh_cn/device.html)
     */
    CONNECTION_CELL2G?: number;
    /**
     * 蜂窝移动3G网络
     * 网络状态常量，当前设备连接到蜂窝移动3G网络，固定值为5。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/device.html](http://www.html5plus.org/doc/zh_cn/device.html)
     */
    CONNECTION_CELL3G?: number;
    /**
     * 蜂窝移动4G网络
     * 网络状态常量，当前设备连接到蜂窝移动4G网络，固定值为6。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/device.html](http://www.html5plus.org/doc/zh_cn/device.html)
     */
    CONNECTION_CELL4G?: number;
    /**
     * 获取设备当前连接的网络类型
     * 获取当前设备连接的网络类型，返回值为网络类型常量，可取值CONNECTION_*常量。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/device.html](http://www.html5plus.org/doc/zh_cn/device.html)
     */
    getCurrentType(): number;
}

/**
 * OS模块管理操作系统信息
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/device.html](http://www.html5plus.org/doc/zh_cn/device.html)
 */
interface PlusOs {
    /**
     * 系统语言信息
     * 获取当前操作系统设置的系统语言，字符串类型数据。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/device.html](http://www.html5plus.org/doc/zh_cn/device.html)
     */
    language?: string;
    /**
     * 系统版本信息
     * 获取当前操作系统的版本信息，字符串类型数据。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/device.html](http://www.html5plus.org/doc/zh_cn/device.html)
     */
    version?: string;
    /**
     * 系统的名称
     * 获取当前操作系统的名称，字符串类型数据。
     * - iOS: 
     * 	iOS系统。
     * 								
     * - Android: 
     * 	Android系统。
     * 								
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/device.html](http://www.html5plus.org/doc/zh_cn/device.html)
     */
    name?: 'iOS' | 'Android';
    /**
     * 系统的供应商信息
     * 获取当前操作系统的供应商名称，字符串类型数据。
     * - Apple: 
     * 	iOS设备，包括iPhone、iPad、iTouch。
     * 								
     * - Google: 
     * 	Android设备。
     * 								
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/device.html](http://www.html5plus.org/doc/zh_cn/device.html)
     */
    vendor?: 'Apple' | 'Google';
}

/**
 * Downloader模块管理网络文件下载任务，用于从服务器下载各种文件，并支持跨域访问操作。通过plus.downloader获取下载管理对象。Downloader下载使用HTTP的GET/POST方式请求下载文件，符合标准HTTP/HTTPS传输协议。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/downloader.html](http://www.html5plus.org/doc/zh_cn/downloader.html)
 */
interface PlusDownloader {
    /**
     * Download对象管理一个下载任务
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/downloader.html](http://www.html5plus.org/doc/zh_cn/downloader.html)
     */
    Download?: PlusDownloaderDownload;
    /**
     * 下载任务事件类型
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/downloader.html](http://www.html5plus.org/doc/zh_cn/downloader.html)
     */
    DownloadEvent?: PlusDownloaderDownloadEvent;
    /**
     * 下载任务状态
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/downloader.html](http://www.html5plus.org/doc/zh_cn/downloader.html)
     */
    DownloadState?: PlusDownloaderDownloadState;
    /**
     * 下载任务参数
     * 在创建下载任务时设置的参数，如设置下载任务使用的HTTP协议类型、优先级等。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/downloader.html](http://www.html5plus.org/doc/zh_cn/downloader.html)
     */
    DownloadOptions?: PlusDownloaderDownloadOptions;
    /**
     * 新建下载任务
     * 请求下载管理创建新的下载任务，创建成功则返回Download对象，用于管理下载任务。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/downloader.html](http://www.html5plus.org/doc/zh_cn/downloader.html)
     */
    createDownload(url?: string, options?: PlusDownloaderDownloadOptions, completedCB?: (result0: PlusDownloaderDownload, result1: number) => void): PlusDownloaderDownload;
    /**
     * 枚举下载任务
     * 枚举指定状态的下载任务列表，通过enumCB回调函数返回结果。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/downloader.html](http://www.html5plus.org/doc/zh_cn/downloader.html)
     */
    enumerate(enumCB?: (result: any []) => void, state?: PlusDownloaderDownloadState): void;
    /**
     * 清除下载任务
     * 清除指定状态的下载任务。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/downloader.html](http://www.html5plus.org/doc/zh_cn/downloader.html)
     */
    clear(state?: PlusDownloaderDownloadState): void;
    /**
     * 开始所有下载任务
     * 开始所有处于为开始调度或暂停状态的下载任务。
     * 	若下载任务数超过可并发处理的总数，超出的任务处于调度状态（等待下载），当有任务完成时根据调度状态任务的优先级选择任务开始下载。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/downloader.html](http://www.html5plus.org/doc/zh_cn/downloader.html)
     */
    startAll(): void;
}

/**
 * Download对象管理一个下载任务
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/downloader.html](http://www.html5plus.org/doc/zh_cn/downloader.html)
 */
interface PlusDownloaderDownload {
    /**
     * 下载任务的标识
     * 在创建任务时系统自动分配，用于标识下载任务的唯一性。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/downloader.html](http://www.html5plus.org/doc/zh_cn/downloader.html)
     */
    id?: string;
    /**
     * 下载文件的地址
     * 调用plus.donwloader.createDownload()方法创建下载任务时设置的值。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/downloader.html](http://www.html5plus.org/doc/zh_cn/downloader.html)
     */
    url?: string;
    /**
     * 任务的状态
     * 表示当前下载任务的状态，可通过addEventListener()方法监听statechanged事件监听任务状态的变化。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/downloader.html](http://www.html5plus.org/doc/zh_cn/downloader.html)
     */
    state?: PlusDownloaderDownloadState;
    /**
     * 下载任务的参数
     * 调用plus.donwloader.createDownload()方法创建下载任务时设置的参数。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/downloader.html](http://www.html5plus.org/doc/zh_cn/downloader.html)
     */
    options?: PlusDownloaderDownloadOptions;
    /**
     * 下载的文件名称
     * 下载任务在本地保存的文件路径，下载任务完成时更新，可通过此值访问下载的文件。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/downloader.html](http://www.html5plus.org/doc/zh_cn/downloader.html)
     */
    filename?: string;
    /**
     * 已完成下载文件的大小
     * 整数类型，单位为字节（byte），下载任务开始传输数据时，每次触发statechanged事件或下载任务完成时更新。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/downloader.html](http://www.html5plus.org/doc/zh_cn/downloader.html)
     */
    downloadedSize?: number;
    /**
     * 下载任务文件的总大小
     * 整数类型，单位为字节（byte），下载任务开始传输数据时更新，在此之前其值为0。
     * 	此值是从HTTP请求头中获取，如果服务器未返回则此值始终为0。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/downloader.html](http://www.html5plus.org/doc/zh_cn/downloader.html)
     */
    totalSize?: number;
    /**
     * 取消下载任务
     * 如果任务未完成，则终止下载，并从任务列表中删除。
     * 	如下载未完成，将删除已下载的临时文件，如果下载已完成，将不删除已下载的文件。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/downloader.html](http://www.html5plus.org/doc/zh_cn/downloader.html)
     */
    abort(): void;
    /**
     * 添加下载任务事件监听器
     * 下载任务添加事件监听器后，当监听的事件发生时触发listener回调。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/downloader.html](http://www.html5plus.org/doc/zh_cn/downloader.html)
     */
    addEventListener(type?: string, listener?: (result0: PlusDownloaderDownload, result1: number) => void, capture?: boolean): void;
    /**
     * 获取下载请求HTTP响应头部信息
     * HTTP响应头部全部内容作为未解析的字符串返回，如果没有接收到这个HTTP响应头数据或者下载请求未完成则为空字符串。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/downloader.html](http://www.html5plus.org/doc/zh_cn/downloader.html)
     */
    getAllResponseHeaders(): string;
    /**
     * 获取下载请求指定的HTTP响应头部的值
     * 其参数是要返回的HTTP响应头部的名称，可以使用任何大小写来制定这个头部名字，和响应头部的比较是不区分大小写的。
     * 	如果没有接收到这个头部或者下载请求未完成则为空字符串；如果接收到多个有指定名称的头部，这个头部的值被连接起来并返回，使用逗号和空格分隔开各个头部的值。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/downloader.html](http://www.html5plus.org/doc/zh_cn/downloader.html)
     */
    getResponseHeader(headerName?: string): string;
    /**
     * 暂停下载任务
     * 暂停下载任务，如果任务已经处于初始状态或暂停状态则无任何响应。
     * 	通常在任务已开始后暂停任务。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/downloader.html](http://www.html5plus.org/doc/zh_cn/downloader.html)
     */
    pause(): void;
    /**
     * 恢复暂停的下载任务
     * 继续暂停的下载任务，如果任务处于非暂停状态则无任何响应。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/downloader.html](http://www.html5plus.org/doc/zh_cn/downloader.html)
     */
    resume(): void;
    /**
     * 设置下载请求的HTTP头数据
     * Http的Header应该包含在通过后续start()调用而发起的请求中，此方法必需在调用start()之前设置才能生效。
     * 	如果带有指定名称的头部已经被指定了，这个头部的新值就是：之前指定的值，加上逗号、以及这个调用指定的值（形成一个数组）。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/downloader.html](http://www.html5plus.org/doc/zh_cn/downloader.html)
     */
    setRequestHeader(headerName?: string, headerValue?: string): void;
    /**
     * 开始下载任务
     * 开始下载任务，如果任务已经处于开始状态则无任何响应。
     * 	在创建任务或任务下载失败后调用可重新开始下载。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/downloader.html](http://www.html5plus.org/doc/zh_cn/downloader.html)
     */
    start(): void;
}

/**
 * 下载任务事件类型
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/downloader.html](http://www.html5plus.org/doc/zh_cn/downloader.html)
 */
interface PlusDownloaderDownloadEvent {
    /**
     * 下载任务状态变化事件
     * 当下载任务状态发生变化时触发此事件，事件原型参考DownloadStateChangedCallback。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/downloader.html](http://www.html5plus.org/doc/zh_cn/downloader.html)
     */
    statechanged?: string;
}

/**
 * 下载任务状态
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/downloader.html](http://www.html5plus.org/doc/zh_cn/downloader.html)
 */
type PlusDownloaderDownloadState = undefined | 0 | 1 | 2 | 3 | 4 | 5 | -1;

/**
 * 下载任务参数
 * 在创建下载任务时设置的参数，如设置下载任务使用的HTTP协议类型、优先级等。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/downloader.html](http://www.html5plus.org/doc/zh_cn/downloader.html)
 */
interface PlusDownloaderDownloadOptions {
    /**
     * 网络请求类型
     * 支持http协议的“GET”、“POST”，默认为“GET”请求。
     * - GET: GET请求
     * - POST: POST请求
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/downloader.html](http://www.html5plus.org/doc/zh_cn/downloader.html)
     */
    method?: 'GET' | 'POST';
    /**
     * POST请求时提交的数据
     * 仅在网络请求类型method设置为"POST"时有效，"GET"请求时忽略此数据。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/downloader.html](http://www.html5plus.org/doc/zh_cn/downloader.html)
     */
    data?: string;
    /**
     * 下载文件保存的路径
     * 保存文件路径仅支持以"_downloads/"、"_doc/"、"_documents/"开头的字符串。
     * 	文件路径以文件后缀名结尾（如"_doc/download/a.doc"）表明指定保存文件目录及名称，以“/”结尾则认为指定保存文件的目录（此时程序自动生成文件名）。
     * 	如果指定的文件已经存在，则自动在文件名后面加"(i)"，其中i为数字，如果文件名称后面已经是此格式，则数字i递增，如"download(1).doc"。
     * 	默认保存目录为（"_downloads"），并自动生成文件名称。
     * - _doc/: 应用私有文档目录
     * - _documents/: 共享文档目录
     * - _downloads/: 共享下载目录
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/downloader.html](http://www.html5plus.org/doc/zh_cn/downloader.html)
     */
    filename?: '_doc/' | '_documents/' | '_downloads/';
    /**
     * 下载任务的优先级
     * 数值类型，数值越大优先级越高，默认优先级值为0。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/downloader.html](http://www.html5plus.org/doc/zh_cn/downloader.html)
     */
    priority?: number;
    /**
     * 下载任务超时时间
     * 数值类型，单位为s(秒)，默认值为120s。
     * 	超时时间为服务器响应请求的时间（不是下载任务完成的总时间），如果设置为0则表示永远不超时。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/downloader.html](http://www.html5plus.org/doc/zh_cn/downloader.html)
     */
    timeout?: number;
    /**
     * 下载任务重试次数
     * 数值类型，默认为重试3次。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/downloader.html](http://www.html5plus.org/doc/zh_cn/downloader.html)
     */
    retry?: number;
    /**
     * 下载任务重试间隔时间
     * 数值类型，单位为s(秒)，默认值为30s。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/downloader.html](http://www.html5plus.org/doc/zh_cn/downloader.html)
     */
    retryInterval?: number;
}

/**
 * Fingerprint模块管理指纹识别。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/fingerprint.html](http://www.html5plus.org/doc/zh_cn/fingerprint.html)
 */
interface PlusFingerprint {
    /**
     * JSON对象，指纹识别认证参数
     * 用于设置指纹识别认证界面显示的提示信息等。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/fingerprint.html](http://www.html5plus.org/doc/zh_cn/fingerprint.html)
     */
    AuthenticateOptions?: PlusFingerprintAuthenticateOptions;
    /**
     * JSON对象，指纹识别错误信息
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/fingerprint.html](http://www.html5plus.org/doc/zh_cn/fingerprint.html)
     */
    FingerprintError?: PlusFingerprintFingerprintError;
    /**
     * 当前设备环境是否支持指纹识别
     * 目前还有很多设备没有指纹识别模块，需要调用此方法判断是否可使用指纹识别功能。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/fingerprint.html](http://www.html5plus.org/doc/zh_cn/fingerprint.html)
     */
    isSupport(): boolean;
    /**
     * 当前设备是否设置密码锁屏
     * 如果设备没有设置密码锁屏，则无法使用指纹识别功能，建议调用指纹识别前先使用此接口检查。
     * 	调用plus.fingerprint.authenticate会返回失败。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/fingerprint.html](http://www.html5plus.org/doc/zh_cn/fingerprint.html)
     */
    isKeyguardSecure(): boolean;
    /**
     * 当前设备是否已经录入指纹
     * 如果设备没有录入指纹，则无法使用指纹识别功能，建议调用指纹识别前先使用此接口检查。
     * 	调用plus.fingerprint.authenticate会返回失败。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/fingerprint.html](http://www.html5plus.org/doc/zh_cn/fingerprint.html)
     */
    isEnrolledFingerprints(): boolean;
    /**
     * 指纹识别认证
     * 用户可以开始输入指纹进行识别，如果认证成功则触发successCB回调，识别失败则触发errorCB回调返回错误信息。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/fingerprint.html](http://www.html5plus.org/doc/zh_cn/fingerprint.html)
     */
    authenticate(successCB?: () => void, errorCB?: (result: PlusFingerprintFingerprintError) => void, options?: PlusFingerprintAuthenticateOptions): void;
    /**
     * 取消指纹识别认证
     * 取消当前正在处理的指纹识别认证操作。
     * 	如果当前没有进行指纹识别则不进行任何操作；如果当前正在进行指纹识别则触发错误回调（错误码为“CANCEL”）。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/fingerprint.html](http://www.html5plus.org/doc/zh_cn/fingerprint.html)
     */
    cancel(): void;
}

/**
 * JSON对象，指纹识别认证参数
 * 用于设置指纹识别认证界面显示的提示信息等。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/fingerprint.html](http://www.html5plus.org/doc/zh_cn/fingerprint.html)
 */
interface PlusFingerprintAuthenticateOptions {
    /**
     * 在指纹识别过程中显示在界面上的提示信息
     * 如果指纹识别认证过程中不显示提示框，则不显示此信息。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/fingerprint.html](http://www.html5plus.org/doc/zh_cn/fingerprint.html)
     */
    message?: string;
}

/**
 * JSON对象，指纹识别错误信息
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/fingerprint.html](http://www.html5plus.org/doc/zh_cn/fingerprint.html)
 */
interface PlusFingerprintFingerprintError {
    /**
     * 不支持指纹识别
     * 当前设备不支持指纹识别功能时返回此错误，错误代码常量值为1。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/fingerprint.html](http://www.html5plus.org/doc/zh_cn/fingerprint.html)
     */
    UNSUPPORT?: number;
    /**
     * 设备未设置密码锁屏
     * 当前设备为设置密码锁屏导致无法使用指纹识别功能时返回此错误，错误代码常量值为2。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/fingerprint.html](http://www.html5plus.org/doc/zh_cn/fingerprint.html)
     */
    KEYGUARD_INSECURE?: number;
    /**
     * 未录入指纹识别
     * 当前设备未录入指纹导致无法使用指纹识别功能时返回此错误，错误代码常量值为3。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/fingerprint.html](http://www.html5plus.org/doc/zh_cn/fingerprint.html)
     */
    FINGERPRINT_UNENROLLED?: number;
    /**
     * 指纹识别不匹配
     * 用户指纹识别认证不通过时返回此错误，错误代码常量值为4。
     * 	用户每次尝试指纹识别认证未通过都会触发此错误，此时还可以继续识别认证。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/fingerprint.html](http://www.html5plus.org/doc/zh_cn/fingerprint.html)
     */
    AUTHENTICATE_MISMATCH?: number;
    /**
     * 指纹识别次数超过限制
     * 用户多次指纹识别认证不通过时返回此错误，错误代码常量值为5。
     * 	通常出现此错误后系统会锁定一段时间禁止使用指纹识别，如果再次调用指纹识别认证会立即返回此错误，因此出现此错误时应该提示用户使用其它方式进行认证。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/fingerprint.html](http://www.html5plus.org/doc/zh_cn/fingerprint.html)
     */
    AUTHENTICATE_OVERLIMIT?: number;
    /**
     * 取消指纹识别
     * 用户取消指纹识别认证时返回此错误，错误代码常量值为6。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/fingerprint.html](http://www.html5plus.org/doc/zh_cn/fingerprint.html)
     */
    CANCEL?: number;
    /**
     * 未知错误
     * 其它未知错误，错误代码常量值为7。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/fingerprint.html](http://www.html5plus.org/doc/zh_cn/fingerprint.html)
     */
    UNKNOWN_ERROR?: number;
    /**
     * 错误代码
     * 取值范围为FingerprintError对象的错误常量值。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/fingerprint.html](http://www.html5plus.org/doc/zh_cn/fingerprint.html)
     */
    code?: number;
    /**
     * 错误描述信息
     * 详细错误描述信息。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/fingerprint.html](http://www.html5plus.org/doc/zh_cn/fingerprint.html)
     */
    message?: string;
}

/**
 * Gallery模块管理系统相册，支持从相册中选择图片或视频文件、保存图片或视频文件到相册等功能。通过plus.gallery获取相册管理对象。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/gallery.html](http://www.html5plus.org/doc/zh_cn/gallery.html)
 */
interface PlusGallery {
    /**
     * JSON对象，从相册中选择文件的参数
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/gallery.html](http://www.html5plus.org/doc/zh_cn/gallery.html)
     */
    GalleryOptions?: PlusGalleryGalleryOptions;
    /**
     * 相册选择文件过滤类型
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/gallery.html](http://www.html5plus.org/doc/zh_cn/gallery.html)
     */
    GalleryFilter?: PlusGalleryGalleryFilter;
    /**
     * 保存图片到相册成功事件
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/gallery.html](http://www.html5plus.org/doc/zh_cn/gallery.html)
     */
    GallerySaveEvent?: PlusGalleryGallerySaveEvent;
    /**
     * JSON对象，弹出拍照或摄像界面指示位置
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/gallery.html](http://www.html5plus.org/doc/zh_cn/gallery.html)
     */
    PopPosition?: PlusGalleryPopPosition;
    /**
     * 从系统相册选择文件（图片或视频）
     * 从系统相册中选择图片或视频文件。每次仅能选择一个文件，选择后将返回选择的文件路径。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/gallery.html](http://www.html5plus.org/doc/zh_cn/gallery.html)
     */
    pick(succesCB?: (result: string) => void, errorCB?: (result: any) => void, options?: PlusGalleryGalleryOptions): void;
    /**
     * 保存文件到系统相册中
     * 保存文件到系统相册中。
     * 	每次仅能保存一个文件，支持图片类型（jpg/jpeg、png、bmp等格式）和视频文件（3gp、mov等格式）。
     * 	若保存的文件系统不支持，则通过errorCB返回错误信息。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/gallery.html](http://www.html5plus.org/doc/zh_cn/gallery.html)
     */
    save(path  ?: string, succesCB?: (result: PlusGalleryGallerySaveEvent) => void, errorCB?: (result: any) => void): void;
}

/**
 * JSON对象，从相册中选择文件的参数
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/gallery.html](http://www.html5plus.org/doc/zh_cn/gallery.html)
 */
interface PlusGalleryGalleryOptions {
    /**
     * 是否显示系统相册文件选择界面的动画
     * 可取值true、false，默认值为true。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/gallery.html](http://www.html5plus.org/doc/zh_cn/gallery.html)
     */
    animation?: boolean;
    /**
     * 选择文件保存的路径
     * 某些系统不能直接使用系统相册的路径，这时需要将选择的文件保存到应用可访问的目录中，可通过此参数设置保存文件的路径。
     * 	如果路径中包括文件后缀名称，则表明指定文件路径及名称，否则仅指定文件保存目录，文件名称自动生成。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/gallery.html](http://www.html5plus.org/doc/zh_cn/gallery.html)
     */
    filename?: string;
    /**
     * 相册中选择文件类型过滤器
     * 系统相册选择器中可选择的文件类型，可设置为仅选择图片文件（“image”）、视频文件（“video”）或所有文件（“none”），默认值为“image”。
     * - image: 仅可选择图片文件
     * - video: 仅可选择视频文件
     * - none: 可选择图片或视频文件
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/gallery.html](http://www.html5plus.org/doc/zh_cn/gallery.html)
     */
    filter?: 'image' | 'video' | 'none';
    /**
     * 最多选择的图片数量
     * 仅在支持多选时有效，取值范围为1到Infinity，默认值为Infinity，即不限制选择的图片数。
     * 	如果设置的值非法则使用默认值Infinity。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/gallery.html](http://www.html5plus.org/doc/zh_cn/gallery.html)
     */
    maximum?: number;
    /**
     * 是否支持多选图片
     * 可从系统相册中选择多张图片，选择图片后通过GalleryMultiplePickSuccessCallback回调返回选择的图片。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/gallery.html](http://www.html5plus.org/doc/zh_cn/gallery.html)
     */
    multiple?: boolean;
    /**
     * 超过最多选择图片数量事件
     * 使用相册多选图片时，可通过maximum属性设置最多选择的图片数量，当用户操作选择的数量大于此时触发此事件。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/gallery.html](http://www.html5plus.org/doc/zh_cn/gallery.html)
     */
    onmaxed?: () => void;
    /**
     * 相册选择界面弹出指示区域
     * 对于大屏幕设备如iPad，相册选择界面为弹出窗口，此时可通过此参数设置弹出窗口位置。
     * 	其为JSON对象，格式如{top:"10px",left:"10px",width:"200px",height:"200px"}，所有值为像素值，左上坐标相对于容器的位置，默认弹出位置为屏幕居中。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/gallery.html](http://www.html5plus.org/doc/zh_cn/gallery.html)
     */
    popover?: PlusGalleryPopPosition;
    /**
     * 已选择的图片路径列表
     * 仅在多图片选择时生效，相册选择界面将选中指定的图片路径列表。
     * 	如果指定的路径无效，则忽略此项；如果指定的路径数超过maximum属性指定的最大选择数目则超出的图片不选中。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/gallery.html](http://www.html5plus.org/doc/zh_cn/gallery.html)
     */
    selected?: any [];
    /**
     * 是否使用系统相册文件选择界面
     * multiple属性设置为true时，如果系统自带相册选择控件时则优先使用，否则使用5+统一相册选择控件；设置为false则不使用系统自带相册选择控件，直接使用5+统一相册选择界面。
     * 	默认值为true。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/gallery.html](http://www.html5plus.org/doc/zh_cn/gallery.html)
     */
    system?: boolean;
}

/**
 * 相册选择文件过滤类型
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/gallery.html](http://www.html5plus.org/doc/zh_cn/gallery.html)
 */
interface PlusGalleryGalleryFilter {
    /**
     * 仅可选择图片文件
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/gallery.html](http://www.html5plus.org/doc/zh_cn/gallery.html)
     */
    image?: string;
    /**
     * 仅可选择视频文件
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/gallery.html](http://www.html5plus.org/doc/zh_cn/gallery.html)
     */
    video?: string;
    /**
     * 不过滤，可选择图片或视频文件
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/gallery.html](http://www.html5plus.org/doc/zh_cn/gallery.html)
     */
    none?: string;
}

/**
 * 保存图片到相册成功事件
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/gallery.html](http://www.html5plus.org/doc/zh_cn/gallery.html)
 */
interface PlusGalleryGallerySaveEvent {
    /**
     * 保存到相册的图片路径
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/gallery.html](http://www.html5plus.org/doc/zh_cn/gallery.html)
     */
    path?: string;
}

/**
 * JSON对象，弹出拍照或摄像界面指示位置
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/gallery.html](http://www.html5plus.org/doc/zh_cn/gallery.html)
 */
interface PlusGalleryPopPosition {
    /**
     * 指示区域距离容器顶部的距离
     * 弹出拍照或摄像窗口指示区域距离容器顶部的距离，单位支持像素值（如"100px"）和百分比（如"50%"），如不写单位则为像素值值。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/gallery.html](http://www.html5plus.org/doc/zh_cn/gallery.html)
     */
    top?: string;
    /**
     * 指示区域距离容器左侧的距离
     * 弹出拍照或摄像窗口指示区域距离容器左侧的距离，单位支持像素值（如"100px"）和百分比（如"50%"），如不写单位则为像素值。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/gallery.html](http://www.html5plus.org/doc/zh_cn/gallery.html)
     */
    left?: string;
    /**
     * 指示区域的宽度
     * 弹出拍照或摄像窗口指示区域的宽度，单位支持像素值（如"100px"）和百分比（如"50%"），如不写单位则为像素值。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/gallery.html](http://www.html5plus.org/doc/zh_cn/gallery.html)
     */
    width?: string;
    /**
     * 指示区域的高度
     * 弹出拍照或摄像窗口指示区域的高度，单位支持像素值（如"100px"）和百分比（如"50%"），如不写单位则为像素值。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/gallery.html](http://www.html5plus.org/doc/zh_cn/gallery.html)
     */
    height?: string;
}

/**
 * Geolocation模块管理设备位置信息，用于获取地理位置信息，如经度、纬度等。通过plus.geolocation可获取设备位置管理对象。虽然W3C已经提供标准API获取位置信息，但在某些平台存在差异或未实现，为了保持各平台的统一性，定义此规范接口获取位置信息。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/geolocation.html](http://www.html5plus.org/doc/zh_cn/geolocation.html)
 */
interface PlusGeolocation {
    /**
     * JSON对象，设备位置信息数据
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/geolocation.html](http://www.html5plus.org/doc/zh_cn/geolocation.html)
     */
    Position?: PlusGeolocationPosition;
    /**
     * JSON对象，地址信息
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/geolocation.html](http://www.html5plus.org/doc/zh_cn/geolocation.html)
     */
    Address?: PlusGeolocationAddress;
    /**
     * JSON对象，地理坐标信息
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/geolocation.html](http://www.html5plus.org/doc/zh_cn/geolocation.html)
     */
    Coordinates?: PlusGeolocationCoordinates;
    /**
     * JSON对象，监听设备位置信息参数
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/geolocation.html](http://www.html5plus.org/doc/zh_cn/geolocation.html)
     */
    PositionOptions?: PlusGeolocationPositionOptions;
    /**
     * JSON对象，定位错误信息
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/geolocation.html](http://www.html5plus.org/doc/zh_cn/geolocation.html)
     */
    GeolocationError?: PlusGeolocationGeolocationError;
    /**
     * 获取当前设备位置信息
     * 位置信息将通过手机GPS设备或其它信息如IP地址、移动网络信号获取，由于获取位置信息可能需要较长的时间，当成功获取位置信息后将通过successCB回调函数返回。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/geolocation.html](http://www.html5plus.org/doc/zh_cn/geolocation.html)
     */
    getCurrentPosition(successCB?: (result: PlusGeolocationPosition) => void, errorCB?: (result: PlusGeolocationGeolocationError) => void, options?: PlusGeolocationPositionOptions): void;
    /**
     * 监听设备位置变化信息
     * 位置信息将通过手机GPS设备或其它信息如IP地址、移动网络信号获取。
     * 	当位置信息更新后将通过successCB回调函数返回。
     * 	位置信息获取失败则调用回调函数errorCB。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/geolocation.html](http://www.html5plus.org/doc/zh_cn/geolocation.html)
     */
    watchPosition(successCB?: (result: PlusGeolocationPosition) => void, errorCB?: (result: PlusGeolocationGeolocationError) => void, option?: PlusGeolocationPositionOptions): number;
    /**
     * 关闭监听设备位置信息
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/geolocation.html](http://www.html5plus.org/doc/zh_cn/geolocation.html)
     */
    clearWatch(watchId?: number): void;
}

/**
 * JSON对象，设备位置信息数据
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/geolocation.html](http://www.html5plus.org/doc/zh_cn/geolocation.html)
 */
interface PlusGeolocationPosition {
    /**
     * 地理坐标信息，包括经纬度、海拔、速度等信息
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/geolocation.html](http://www.html5plus.org/doc/zh_cn/geolocation.html)
     */
    coords?: PlusGeolocationCoordinates;
    /**
     * 获取到地理坐标信息的坐标系类型
     * 可取以下坐标系类型：
     * 	"gps"：表示WGS-84坐标系；
     * 	"gcj02"：表示国测局经纬度坐标系；
     * 	"bd09"：表示百度墨卡托坐标系；
     * 	"bd09ll"：表示百度经纬度坐标系。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/geolocation.html](http://www.html5plus.org/doc/zh_cn/geolocation.html)
     */
    coordsType?: string;
    /**
     * 获取到地理坐标的时间戳信息
     * 时间戳值为从1970年1月1日至今的毫秒数。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/geolocation.html](http://www.html5plus.org/doc/zh_cn/geolocation.html)
     */
    timestamp?: number;
    /**
     * 获取到地理位置对应的地址信息
     * 获取地址信息需要连接到服务器进行解析，所以会消耗更多的资源，如果不需要获取地址信息可通过设置PositionOptions参数的geocode属性值为false避免获取地址信息。
     * 	如果没有获取到地址信息则返回undefined。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/geolocation.html](http://www.html5plus.org/doc/zh_cn/geolocation.html)
     */
    address?: PlusGeolocationAddress;
    /**
     * 获取完整地址描述信息
     * 如果没有获取到地址信息则返回undefined。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/geolocation.html](http://www.html5plus.org/doc/zh_cn/geolocation.html)
     */
    addresses?: string;
}

/**
 * JSON对象，地址信息
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/geolocation.html](http://www.html5plus.org/doc/zh_cn/geolocation.html)
 */
interface PlusGeolocationAddress {
    /**
     * 国家
     * 如“中国”，如果无法获取此信息则返回undefined。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/geolocation.html](http://www.html5plus.org/doc/zh_cn/geolocation.html)
     */
    country?: string;
    /**
     * 省份名称
     * 如“北京市”，如果无法获取此信息则返回undefined。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/geolocation.html](http://www.html5plus.org/doc/zh_cn/geolocation.html)
     */
    province?: string;
    /**
     * 城市名称
     * 如“北京市”，如果无法获取此信息则返回undefined。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/geolocation.html](http://www.html5plus.org/doc/zh_cn/geolocation.html)
     */
    city?: string;
    /**
     * 区（县）名称
     * 如“朝阳区”，如果无法获取此信息则返回undefined。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/geolocation.html](http://www.html5plus.org/doc/zh_cn/geolocation.html)
     */
    district?: string;
    /**
     * 街道信息
     * 如“酒仙桥路”，如果无法获取此信息则返回undefined。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/geolocation.html](http://www.html5plus.org/doc/zh_cn/geolocation.html)
     */
    street?: string;
    /**
     * 获取街道门牌号信息
     * 如“3号”，如果无法获取此信息则返回undefined。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/geolocation.html](http://www.html5plus.org/doc/zh_cn/geolocation.html)
     */
    streetNum?: string;
    /**
     * POI信息
     * 如“电子城．国际电子总部”，如果无法获取此信息则返回undefined。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/geolocation.html](http://www.html5plus.org/doc/zh_cn/geolocation.html)
     */
    poiName?: string;
    /**
     * 邮政编码
     * 如“100016”，如果无法获取此信息则返回undefined。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/geolocation.html](http://www.html5plus.org/doc/zh_cn/geolocation.html)
     */
    postalCode?: string;
    /**
     * 城市代码
     * 如“010”，如果无法获取此信息则返回undefined。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/geolocation.html](http://www.html5plus.org/doc/zh_cn/geolocation.html)
     */
    cityCode?: string;
}

/**
 * JSON对象，地理坐标信息
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/geolocation.html](http://www.html5plus.org/doc/zh_cn/geolocation.html)
 */
interface PlusGeolocationCoordinates {
    /**
     * 坐标纬度值
     * 数据类型对象，地理坐标中的纬度值。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/geolocation.html](http://www.html5plus.org/doc/zh_cn/geolocation.html)
     */
    latitude?: number;
    /**
     * 坐标经度值
     * 数据类型对象，地理坐标中的经度值。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/geolocation.html](http://www.html5plus.org/doc/zh_cn/geolocation.html)
     */
    longitude?: number;
    /**
     * 海拔信息
     * 数据类型对象，如果无法获取此信息，则此值为空（null）。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/geolocation.html](http://www.html5plus.org/doc/zh_cn/geolocation.html)
     */
    altitude?: number;
    /**
     * 地理坐标信息的精确度信息
     * 数据类型对象，单位为米，其有效值必须大于0。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/geolocation.html](http://www.html5plus.org/doc/zh_cn/geolocation.html)
     */
    accuracy?: number;
    /**
     * 海拔的精确度信息
     * 数据类型对象，单位为米，其有效值必须大于0。如果无法获取海拔信息，则此值为空（null）。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/geolocation.html](http://www.html5plus.org/doc/zh_cn/geolocation.html)
     */
    altitudeAccuracy?: number;
    /**
     * 表示设备移动的方向
     * 数据类型对象，范围为0到360，表示相对于正北方向的角度。如果无法获取此信息，则此值为空（null）。如果设备没有移动则此值为NaN。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/geolocation.html](http://www.html5plus.org/doc/zh_cn/geolocation.html)
     */
    heading?: number;
    /**
     * 表示设备移动的速度
     * 数据类型对象，单位为米每秒（m/s），其有效值必须大于0。如果无法获取速度信息，则此值为空（null）。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/geolocation.html](http://www.html5plus.org/doc/zh_cn/geolocation.html)
     */
    speed?: number;
}

/**
 * JSON对象，监听设备位置信息参数
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/geolocation.html](http://www.html5plus.org/doc/zh_cn/geolocation.html)
 */
interface PlusGeolocationPositionOptions {
    /**
     * 是否高精确度获取位置信息
     * 高精度获取表示需要使用更多的系统资源，默认值为false。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/geolocation.html](http://www.html5plus.org/doc/zh_cn/geolocation.html)
     */
    enableHighAccuracy?: boolean;
    /**
     * 获取位置信息的超时时间
     * 单位为毫秒（ms），默认值为不超时。如果在指定的时间内没有获取到位置信息则触发错误回调函数。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/geolocation.html](http://www.html5plus.org/doc/zh_cn/geolocation.html)
     */
    timeout?: number;
    /**
     * 获取位置信息的间隔时间
     * 单位为毫秒（ms），默认值为5000（即5秒）。调用plus.geolocation.watchPosition时为更新位置信息的间隔时间。
     * 	注意：在不同定位模块下支持范围值可能不同，如百度定位模块的间隔范围为大于等于1秒，如果设置的值小于最小值则使用最小值。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/geolocation.html](http://www.html5plus.org/doc/zh_cn/geolocation.html)
     */
    maximumAge?: number;
    /**
     * 优先使用的定位模块
     * 可取以下供应者：
     * 	"system"：表示系统定位模块，支持wgs84坐标系；
     * 	"baidu"：表示百度定位模块，支持gcj02/bd09/bd09ll坐标系；
     * 	"amap"：表示高德定位模板，支持gcj02坐标系。
     * 	默认值按以下优先顺序获取（amap&gt;baidu&gt;system），若指定的provider不存在或无效则返回错误回调。
     * 	注意：百度/高德定位模块需要配置百度/高德地图相关参数才能正常使用。
     * - system: 优先使用系统定位模块
     * - baidu: 优先使用百度定位模块
     * - amap: 优先使用高德定位模块
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/geolocation.html](http://www.html5plus.org/doc/zh_cn/geolocation.html)
     */
    provider?: 'system' | 'baidu' | 'amap';
    /**
     * 指定获取的定位数据坐标系类型
     * 可取以下坐标系类型：
     * 	"wgs84"：表示WGS-84坐标系；
     * 	"gcj02"：表示国测局经纬度坐标系；
     * 	"bd09"：表示百度墨卡托坐标系；
     * 	"bd09ll"：表示百度经纬度坐标系；
     * 	provider为"system"时，默认使用"wgs84"坐标系；provider为"baidu"时，默认使用"gcj02"坐标系；provider为"amap"时，默认使用"gcj02"坐标系。
     * 	如果设置的坐标系类型provider不支持，则返回错误。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/geolocation.html](http://www.html5plus.org/doc/zh_cn/geolocation.html)
     */
    coordsType?: string;
    /**
     * 是否解析地址信息
     * 解析的地址信息保存到Position对象的address、addresses属性中，true表示解析地址信息，false表示不解析地址信息，返回的Position对象的address、addresses属性值为undefined，默认值为true。
     * 	如果解析地址信息失败则返回的Position对象的address、addresses属性值为null。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/geolocation.html](http://www.html5plus.org/doc/zh_cn/geolocation.html)
     */
    geocode?: boolean;
}

/**
 * JSON对象，定位错误信息
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/geolocation.html](http://www.html5plus.org/doc/zh_cn/geolocation.html)
 */
interface PlusGeolocationGeolocationError {
    /**
     * 访问权限被拒绝
     * 系统不允许程序获取定位功能，错误代码常量值为1。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/geolocation.html](http://www.html5plus.org/doc/zh_cn/geolocation.html)
     */
    PERMISSION_DENIED?: number;
    /**
     * 位置信息不可用
     * 无法获取有效的位置信息，错误代码常量值为2。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/geolocation.html](http://www.html5plus.org/doc/zh_cn/geolocation.html)
     */
    POSITION_UNAVAILABLE?: number;
    /**
     * 获取位置信息超时
     * 无法在指定的时间内获取位置信息，错误代码常量值为3。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/geolocation.html](http://www.html5plus.org/doc/zh_cn/geolocation.html)
     */
    TIMEOUT?: number;
    /**
     * 未知错误
     * 其它未知错误导致无法获取位置信息，错误代码常量值为4。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/geolocation.html](http://www.html5plus.org/doc/zh_cn/geolocation.html)
     */
    UNKNOWN_ERROR?: number;
    /**
     * 错误代码
     * 取值范围为GeolocationError对象的常量值。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/geolocation.html](http://www.html5plus.org/doc/zh_cn/geolocation.html)
     */
    code?: number;
    /**
     * 错误描述信息
     * 详细错误描述信息。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/geolocation.html](http://www.html5plus.org/doc/zh_cn/geolocation.html)
     */
    message?: string;
}

/**
 * iBeacon模块用于搜索附件的iBeacon设备（*请使用HBuilderX并更新到最新版本*）。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/ibeacon.html](http://www.html5plus.org/doc/zh_cn/ibeacon.html)
 */
interface PlusIbeacon {
    /**
     * iBeacon设备信息
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/ibeacon.html](http://www.html5plus.org/doc/zh_cn/ibeacon.html)
     */
    IBeaconInfo?: PlusIbeaconIBeaconInfo;
    /**
     * 开始搜索附近的iBeacon设备
     * 搜索成功后触发successCB回调，失败触发errorCB回调。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/ibeacon.html](http://www.html5plus.org/doc/zh_cn/ibeacon.html)
     */
    startBeaconDiscovery(uuids?: any [], ignoretoothAvailable?: boolean, success?: (result: any) => void, fail?: (result: any) => void, complete?: (result: any) => void): void;
    /**
     * 停止搜索附近的iBeacon设备
     * 取消成功后触发successCB回调，失败触发errorCB回调。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/ibeacon.html](http://www.html5plus.org/doc/zh_cn/ibeacon.html)
     */
    stopBeaconDiscovery(success?: (result: any) => void, fail?: (result: any) => void, complete?: (result: any) => void): void;
    /**
     * 获取已搜索到的iBeacon设备
     * 获取成功后触发successCB回调，失败触发errorCB回调。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/ibeacon.html](http://www.html5plus.org/doc/zh_cn/ibeacon.html)
     */
    getBeacons(success?: (result: any) => void, fail?: (result: any) => void, complete?: (result: any) => void): void;
    /**
     * 监听iBeacon设备更新
     * iBeacon设备更新后触发updateCB回调。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/ibeacon.html](http://www.html5plus.org/doc/zh_cn/ibeacon.html)
     */
    onBeaconUpdate(updateCB?: (result: any) => void): void;
    /**
     * 监听iBeacon服务状态变化
     * iBeacon服务状态变化时触发changeCB回调。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/ibeacon.html](http://www.html5plus.org/doc/zh_cn/ibeacon.html)
     */
    onBeaconServiceChange(changeCB?: (result: any) => void): void;
}

/**
 * iBeacon设备信息
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/ibeacon.html](http://www.html5plus.org/doc/zh_cn/ibeacon.html)
 */
interface PlusIbeaconIBeaconInfo {
    /**
     * iBeacon设备广播的uuid
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/ibeacon.html](http://www.html5plus.org/doc/zh_cn/ibeacon.html)
     */
    uuid?: string;
    /**
     * iBeacon设备的主id
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/ibeacon.html](http://www.html5plus.org/doc/zh_cn/ibeacon.html)
     */
    major?: string;
    /**
     * iBeacon设备的次id
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/ibeacon.html](http://www.html5plus.org/doc/zh_cn/ibeacon.html)
     */
    minor?: string;
    /**
     * iBeacon设备的距离
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/ibeacon.html](http://www.html5plus.org/doc/zh_cn/ibeacon.html)
     */
    proximity?: number;
    /**
     * iBeacon设备的距离精度信息
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/ibeacon.html](http://www.html5plus.org/doc/zh_cn/ibeacon.html)
     */
    accuracy?: number;
    /**
     * iBeacon设备的信号强度
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/ibeacon.html](http://www.html5plus.org/doc/zh_cn/ibeacon.html)
     */
    rssi?: string;
}

/**
 * IO模块管理本地文件系统，用于对文件系统的目录浏览、文件的读取、文件的写入等操作。通过plus.io可获取文件系统管理对象。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
 */
interface PlusIo {
    /**
     * 文件系统中的目录对象，用于管理特定的本地目录
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    DirectoryEntry?: PlusIoDirectoryEntry;
    /**
     * 读取目录信息对象，用于获取目录中包含的文件及子目录
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    DirectoryReader?: PlusIoDirectoryReader;
    /**
     * 文件系统中的文件数据对象，用于获取文件的数据
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    File?: PlusIoFile;
    /**
     * 文件系统中的文件对象，用于管理特定的本地文件
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    FileEntry?: PlusIoFileEntry;
    /**
     * 文件系统中的读取文件对象，用于获取文件的内容
     * FileReader对象是从设备文件系统读取文件FileReader对象是从设备文件系统读取文件的一种方式，文件以文本或者Base64编码的字符串形式读出来。
     * 	用户注册自己的事件监听器来接收loadstart、progress、load、loadend、error和abort事件。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    FileReader?: PlusIoFileReader;
    /**
     * 文件系统中的写文件对象，用于写入文件内容
     * FileWriter对象是从设备文件系统写入文件FileWriter对象是从设备文件系统写入文件的一种方式，用户注册自己的事件监听器来接收writestart、progress、write、writeend、error和abort事件。
     * 	一个FileWriter对象是为单个文件的操作而创建。你可以使用该对象多次对相应文件进行写入操作。FileWriter维护该文件的指针位置及长度属性，这样你就可以寻找和写入文件的任何地方。
     * 	默认情况下，FileWriter从文件的开头开始写入（将覆盖现有数据）。FileWriter对象的seek方法可设置文件操作指定位置，如fw.seek(fw.length-1)写入操作就会从文件的末尾开始。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    FileWriter?: PlusIoFileWriter;
    /**
     * 文件系统对象，用于管理特定本地文件目录
     * 文件系统对象表示一个应用可访问的根目录。name属性用于标识此根目录的名称，与LocalFileSystem中的文件系统类型一一对应。root属性为文件目录对象，用于实际操作文件系统，参考DirectoryEntry。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    FileSystem?: PlusIoFileSystem;
    /**
     * JSON对象，获取文件操作的参数
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    Flags?: PlusIoFlags;
    /**
     * JSON对象，保存文件或目录的状态信息对象
     * 可通过DirectoryEntry或FileEntry对象的getMetaData方法获取
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    Metadata?: PlusIoMetadata;
    /**
     * 文件或目录操作事件对象
     * 所有文件或目录操作事件回调函数中都创建该对象的实例。
     * 	该对象从DOMEvent继承而来，可通过该其target属性获取事件触发的文件或目录操作对象。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    FileEvent?: PlusIoFileEvent;
    /**
     * 文件路径类型
     * 在文件系统中的文件路径需转换成URL格式，已方便runtime快速加载。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    URLType?: PlusIoURLType;
    /**
     * 相对路径URL
     * 只能在扩展API中使用，相对于基座提供的特定目录，以“_”开头。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    RelativeURL?: PlusIoRelativeURL;
    /**
     * 本地路径URL
     * 可在html页面中直接访问本地资源，以“file:///”开头，后面跟随系统的绝对路径。
     * 	如示例：“file:///D:/res/hello.html”。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    LocalURL?: PlusIoLocalURL;
    /**
     * 网络路径URL
     * 可在html页面中以网络资源模式访问本地资源，以“http://”开头，后面跟随相对路径。
     * 	如示例：“http://localhost:13131/_www/res/icon.png”，其中“_www”字段可支持类型与相对路径URL一致。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    RemoteURL?: PlusIoRemoteURL;
    /**
     * 应用运行资源目录常量
     * 本地文件系统常量，Number类型，固定值1。应用运行资源目录，仅本应用可访问。
     * 	为了确保应用资源的安全性，此目录只可读。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    PRIVATE_WWW?: number;
    /**
     * 应用私有文档目录常量
     * 本地文件系统常量，Number类型，固定值2。应用私有文档目录，仅本应用可读写。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    PRIVATE_DOC?: number;
    /**
     * 程序公用文档目录常量
     * 本地文件系统常量，Number类型，固定值3。程序公用文档目录，所有应用可读写。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    PUBLIC_DOCUMENTS?: number;
    /**
     * 程序公用下载目录常量
     * 本地文件系统常量，Number类型，固定值4。程序公用下载目录，所有应用可读写。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    PUBLIC_DOWNLOADS?: number;
    /**
     * 请求本地文件系统对象
     * 获取指定的文件系统，可通过type指定获取文件系统的类型。
     * 	获取指定的文件系统对象成功通过succesCB回调返回，失败则通过errorCB返回。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    requestFileSystem(type?: number, succesCB?: (result: PlusIoFileSystem) => void, errorCB?: (result: any) => void): void;
    /**
     * 通过URL参数获取目录对象或文件对象
     * 快速获取指定的目录或文件操作对象，如通过URL值“_www/test.html”可直接获取文件操作对象。
     * 	url值可支持相对路径URL、本地路径URL。
     * 	获取指定的文件或目录操作对象成功通过succesCB回调返回，如果指定URL路径或文件不存在则失败通过errorCB回调返回。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    resolveLocalFileSystemURL(url ?: string, succesCB?: (result: PlusIoDirectoryEntry) => void, errorCB?: (result: any) => void): void;
    /**
     * 将本地URL路径转换成平台绝对路径
     * 绝对路径符合各平台文件路径格式，通常用于Native.JS调用系统原生文件操作API，也可以在前面添加“file://”后在html页面中直接使用。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    convertLocalFileSystemURL(url?: string): string;
    /**
     * 将平台绝对路径转换成本地URL路径
     * 绝对路径符合各平台文件路径格式，转换后变成RelativeURL类型格式。
     * 	功能与convertLocalFileSystemURL方法相反，将绝对路径转换成相对路径。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    convertAbsoluteFileSystem(path?: string): string;
}

/**
 * 文件系统中的目录对象，用于管理特定的本地目录
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
 */
interface PlusIoDirectoryEntry {
    /**
     * 操作对象的是否为文件，DirectoryEntry对象固定其值为false
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    isFile?: boolean;
    /**
     * 操作对象是否为目录，DirectoryEntry对象固定其值为true
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    isDirectory?: boolean;
    /**
     * 目录操作对象的名称，不包括路径
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    name?: string;
    /**
     * 目录操作对象的完整路径，文件系统的绝对路径
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    fullPath?: string;
    /**
     * 文件操作对象所属的文件系统对象，参考FileSystem
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    fileSystem?: PlusIoFileSystem;
    /**
     * 获取目录的属性
     * 用于获取文件或目录的属性信息。
     * 	获取属性信息成功通过succesCB回调返回，失败则通过errorCB返回。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    getMetadata(succesCB?: (result: PlusIoMetadata) => void, errorCB?: (result: any) => void, recursive?: boolean): void;
    /**
     * 移动目录
     * 以下情况移动目录将会导致失败：
     * 	将父目录移动到子目录中；
     * 	要移动到的目标目录无效；
     * 	要移动到的目标路径被文件占用；
     * 	要移动到的目标目录已经存在并且不为空。
     * 	移动目录成功通过succesCB回调返回，失败则通过errorCB返回。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    moveTo(parent?: PlusIoDirectoryEntry, newName?: string, succesCB?: (result: PlusIoDirectoryEntry) => void, errorCB?: (result: any) => void): void;
    /**
     * 拷贝目录
     * 以下情况拷贝目录将会导致失败：
     * 	将父目录拷贝到子目录中；
     * 	要拷贝到的目标目录无效；
     * 	要拷贝到的目标路径被文件占用；
     * 	要拷贝到的目标目录已经存在并且不为空。
     * 	拷贝目录成功通过succesCB回调返回，失败则通过errorCB返回。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    copyTo(parent?: PlusIoDirectoryEntry, newName?: string, succesCB?: (result: PlusIoDirectoryEntry) => void, errorCB?: (result: any) => void): void;
    /**
     * 获取目录路径转换为URL地址
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    toURL(): string;
    /**
     * 获取目录路径转换为本地路径URL地址
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    toLocalURL(): string;
    /**
     * 获取目录路径转换为网络路径URL地址
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    toRemoteURL(): string;
    /**
     * 删除目录
     * 以下情况删除目录将会导致失败：
     * 	目录中存在文件；
     * 	删除根目录；
     * 	删除目录成功通过succesCB回调返回，失败则通过errorCB返回。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    remove(succesCB?: (result: PlusIoDirectoryEntry) => void, errorCB?: (result: any) => void): void;
    /**
     * 获取目录所属的父目录
     * 获取父目录成功通过succesCB回调返回，失败则通过errorCB返回。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    getParent(succesCB?: (result: PlusIoDirectoryEntry) => void, errorCB?: (result: any) => void): void;
    /**
     * 创建目录读取对象
     * 创建一个目录读取对象，用户读取目下的文件及子目录。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    createReader(): PlusIoDirectoryReader;
    /**
     * 创建或打开子目录
     * 创建或打开当前目录指定的目录。
     * 	创建或打开目录操作成功通过succesCB回调返回，失败则通过errorCB返回。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    getDirectory(path?: string, flag?: PlusIoFlags, succesCB?: (result: PlusIoDirectoryEntry) => void, errorCB?: (result: any) => void): void;
    /**
     * 创建或打开文件
     * 创建或打开当前目录下指定的文件。
     * 	创建或打开文件操作对象成功通过succesCB回调返回，失败则通过errorCB返回。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    getFile(path?: string, flag?: PlusIoFlags, succesCB?: (result: PlusIoDirectoryEntry) => void, errorCB?: (result: any) => void): void;
    /**
     * 递归删除目录
     * 删除目录将会删除其下的所有文件及子目录
     * 	不能删除根目录，如果操作删除根目录将会删除目录下的文件及子目录，不会删除根目录自身。
     * 	删除目录成功通过succesCB回调返回，失败则通过errorCB返回。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    removeRecursively(succesCB?: (result: PlusIoDirectoryEntry) => void, errorCB?: (result: any) => void): void;
}

/**
 * 读取目录信息对象，用于获取目录中包含的文件及子目录
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
 */
interface PlusIoDirectoryReader {
    /**
     * 获取当前目录中的所有文件和子目录
     * 获取当前目录下的所有文件和子目录。
     * 	获取操作成功通过succesCB回调返回，失败则通过errorCB返回。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    readEntries(succesCB?: (result: PlusIoDirectoryEntry) => void, errorCB?: (result: any) => void): void;
}

/**
 * 文件系统中的文件数据对象，用于获取文件的数据
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
 */
interface PlusIoFile {
    /**
     * 文件数据对象的数据大小，单位为字节
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    size?: number;
    /**
     * 文件数据对象MIME类型
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    type?: string;
    /**
     * 文件数据对象的名称，不包括路径
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    name?: string;
    /**
     * 文件对象的最后修改时间
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    lastModifiedDate?: Date;
    /**
     * 获取文件指定的数据内容
     * 获取文件指定的数据内容，其中end必须大于start。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    slice(start?: number, end?: number): PlusIoFile;
    /**
     * 关闭文件数据对象
     * 当文件数据对象不再使用时，可通过此方法关闭，释放系统资源。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    close(): void;
}

/**
 * 文件系统中的文件对象，用于管理特定的本地文件
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
 */
interface PlusIoFileEntry {
    /**
     * 文件操作对象的是否为文件，FileEntry对象固定其值为true
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    isFile?: boolean;
    /**
     * 文件操作对象是否为目录，FileEntry对象固定其值为false
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    isDirectory?: boolean;
    /**
     * 文件操作对象的名称，不包括路径
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    name?: string;
    /**
     * 文件操作对象的完整路径，文件系统的绝对路径
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    fullPath?: string;
    /**
     * 文件操作对象所属的文件系统对象，参考FileSystem
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    fileSystem?: PlusIoFileSystem;
    /**
     * 获取文件的属性信息
     * 用于获取文件的属性信息。
     * 	获取属性信息成功通过succesCB回调返回，失败则通过errorCB返回。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    getMetadata(succesCB?: (result: PlusIoMetadata) => void, errorCB?: (result: any) => void): void;
    /**
     * 移动文件
     * 以下情况移动目录将会导致失败：
     * 	要移动到的目标目录无效；
     * 	要移动到的目标路径被其它文件占用；
     * 	移动文件成功通过succesCB回调返回，失败则通过errorCB返回。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    moveTo(parent?: PlusIoDirectoryEntry, newName?: string, succesCB?: (result: PlusIoDirectoryEntry) => void, errorCB?: (result: any) => void): void;
    /**
     * 拷贝文件
     * 以下情况拷贝文件将会导致失败：
     * 	要拷贝到的目标目录无效；
     * 	要拷贝到的目标路径被其它文件占用；
     * 	拷贝文件成功通过succesCB回调返回，失败则通过errorCB返回。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    copyTo(parent?: PlusIoDirectoryEntry, newName?: string, succesCB?: (result: PlusIoDirectoryEntry) => void, errorCB?: (result: any) => void): void;
    /**
     * 获取文件路径转换为URL地址
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    toURL(): string;
    /**
     * 获取文件路径转换为本地路径URL地址
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    toLocalURL(): string;
    /**
     * 获取文件路径转换为网络路径URL地址
     * URL地址格式为以“http://localhost:13131/”开头的网络路径。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    toRemoteURL(): string;
    /**
     * 删除文件
     * 删除文件成功通过succesCB回调返回，失败则通过errorCB返回。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    remove(succesCB?: (result: PlusIoDirectoryEntry) => void, errorCB?: (result: any) => void): void;
    /**
     * 获取文件所属的父目录
     * 获取父目录成功通过succesCB回调返回，失败则通过errorCB返回。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    getParent(succesCB?: (result: PlusIoDirectoryEntry) => void, errorCB?: (result: any) => void): void;
    /**
     * 获取文件关联的写文件操作对象FileWriter
     * 获取写文件操作对象成功通过succesCB回调返回，失败则通过errorCB返回。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    createWriter(succesCB?: (result: PlusIoFileWriter) => void, errorCB?: (result: any) => void): void;
    /**
     * 获取文件数据对象
     * 获取文件数据对象成功通过succesCB回调返回，失败则通过errorCB返回。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    file(succesCB?: (result: PlusIoFile) => void, errorCB?: (result: any) => void): void;
}

/**
 * 文件系统中的读取文件对象，用于获取文件的内容
 * FileReader对象是从设备文件系统读取文件FileReader对象是从设备文件系统读取文件的一种方式，文件以文本或者Base64编码的字符串形式读出来。
 * 	用户注册自己的事件监听器来接收loadstart、progress、load、loadend、error和abort事件。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
 */
interface PlusIoFileReader {
    /**
     * 值为0，开始读取文件状态
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    EMPTY?: number;
    /**
     * 值为1，正在读取文件状态
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    LOADING?: number;
    /**
     * 值为2，读文件操作完成状态
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    DONE?: number;
    /**
     * 当前读取文件所处的状态
     * 可取上面定义的常量值，EMPTY（0）、LOADING（1）、DONE（2）。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    readyState?: number;
    /**
     * 已读取文件的内容
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    result?: string;
    /**
     * 文件操作错误代码
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    error?: number;
    /**
     * 读取文件开始时的回调函数
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    onloadstart?: (result: PlusIoFileEvent) => void;
    /**
     * 读取文件过程中的回调函数
     * 用于获取文件读取进度。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    onprogress?: (result: PlusIoFileEvent) => void;
    /**
     * 读取文件成功完成的回调函数
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    onload?: (result: PlusIoFileEvent) => void;
    /**
     * 取消读取文件时的回调函数
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    onabort?: (result: PlusIoFileEvent) => void;
    /**
     * 文件读取操作失败时调用的回调函数
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    onerror?: (result: PlusIoFileEvent) => void;
    /**
     * 文件读取操作完成时的回调函数
     * 不管成功或失败都会触发。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    onloadend?: (result: PlusIoFileEvent) => void;
    /**
     * 终止文件读取操作
     * 读取文件操作开始后，可通过此方法取消读取文件。
     * 	调用此方法后将触发文件读取对象的onabort事件。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    abort(): void;
    /**
     * 以URL编码格式读取文件数据内容
     * 读取文件的数据内容，并将数据内容进行URL编码。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    readAsDataURL(file?: PlusIoFile, encoding ?: string): void;
    /**
     * 以文本格式读取文件数据内容
     * 读取文件的数据内容。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    readAsText(file?: PlusIoFile, encoding ?: string): void;
}

/**
 * 文件系统中的写文件对象，用于写入文件内容
 * FileWriter对象是从设备文件系统写入文件FileWriter对象是从设备文件系统写入文件的一种方式，用户注册自己的事件监听器来接收writestart、progress、write、writeend、error和abort事件。
 * 	一个FileWriter对象是为单个文件的操作而创建。你可以使用该对象多次对相应文件进行写入操作。FileWriter维护该文件的指针位置及长度属性，这样你就可以寻找和写入文件的任何地方。
 * 	默认情况下，FileWriter从文件的开头开始写入（将覆盖现有数据）。FileWriter对象的seek方法可设置文件操作指定位置，如fw.seek(fw.length-1)写入操作就会从文件的末尾开始。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
 */
interface PlusIoFileWriter {
    /**
     * 值为0，写文件初始化状态
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    INIT?: number;
    /**
     * 值为1，正在写入文件状态
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    WRITING?: number;
    /**
     * 值为2，写文件操作完成状态
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    DONE?: number;
    /**
     * 当前写入文件所处的状态
     * 可取上面定义的常量值，INIT(0)、WRITING（1）、DONE（2）。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    readyState?: number;
    /**
     * 文件当前的长度，单位为字节
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    length?: number;
    /**
     * 文件当前操作的指针位置
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    position?: number;
    /**
     * 文件写入操作错误代码
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    error?: number;
    /**
     * 写入文件开始时的回调函数
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    onwritestart?: (result: PlusIoFileEvent) => void;
    /**
     * 写入文件过程中的回调函数
     * 用于获取文件读取进度。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    onprogress?: (result: PlusIoFileEvent) => void;
    /**
     * 写入文件成功完成的回调函数
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    onwrite?: (result: PlusIoFileEvent) => void;
    /**
     * 取消写入文件时的回调函数
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    onabort?: (result: PlusIoFileEvent) => void;
    /**
     * 文件写入操作失败时调用的回调函数
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    onerror?: (result: PlusIoFileEvent) => void;
    /**
     * 文件写入操作完成时的回调函数
     * 不管成功或失败都会触发。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    onwriteend?: (result: PlusIoFileEvent) => void;
    /**
     * 终止文件写入操作
     * 写入文件数据操作开始后，可通过此方法取消写入文件数据操作。
     * 	调用此方法后将触发文件写入对象的onabort事件。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    abort(): void;
    /**
     * 定位文件操作位置
     * 定位文件的操作位置，有效值为0到文件的总长度减1。
     * 	0表示文件的起始位置。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    seek(position?: number): void;
    /**
     * 按照指定长度截断文件
     * 从文件当前定位的位置开始，按照指定长度截断文件。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    truncate(length ?: number): void;
    /**
     * 向文件中写入数据
     * 从文件当前定位的位置开始，写入数据到文件中。
     * 	如果文件中已经存在数据，新写入的数据将覆盖已有数据。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    write(data ?: string): void;
}

/**
 * 文件系统对象，用于管理特定本地文件目录
 * 文件系统对象表示一个应用可访问的根目录。name属性用于标识此根目录的名称，与LocalFileSystem中的文件系统类型一一对应。root属性为文件目录对象，用于实际操作文件系统，参考DirectoryEntry。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
 */
interface PlusIoFileSystem {
    /**
     * 文件系统的名称
     * 值为文件系统类型常量值字符串，如“PRIVATE_WWW”、“PRIVATE_DOCUMENTS”。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    name?: string;
    /**
     * 文件系统的根目录
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    root?: PlusIoDirectoryEntry;
}

/**
 * JSON对象，获取文件操作的参数
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
 */
interface PlusIoFlags {
    /**
     * 是否创建对象标记
     * 指示如果文件或目录不存在时是否进行创建，默认值为false。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    create?: boolean;
    /**
     * 反向操作标记
     * 其本身没有任何效果，需与create属性值设置为true时一起使用，如果目标文件或目录已经存在则会导致文件或目录打开失败，默认值为false。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    exclusive?: boolean;
}

/**
 * JSON对象，保存文件或目录的状态信息对象
 * 可通过DirectoryEntry或FileEntry对象的getMetaData方法获取
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
 */
interface PlusIoMetadata {
    /**
     * 文件或目录的最后修改时间
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    modificationTime?: Date;
    /**
     * 文件的大小
     * 若获取的是目录对象的属性则值为0。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    size?: number;
    /**
     * 包含的子目录数
     * 若自身是文件则其值为0。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    directoryCount?: number;
    /**
     * 目录的文件数
     * 若自身是文件则其值为0。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    fileCount?: number;
}

/**
 * 文件或目录操作事件对象
 * 所有文件或目录操作事件回调函数中都创建该对象的实例。
 * 	该对象从DOMEvent继承而来，可通过该其target属性获取事件触发的文件或目录操作对象。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
 */
interface PlusIoFileEvent {
    /**
     * 文件或目录操作对象
     * 在不同的回调中指向的对象不同，可指向的对象包括：FileEntry、DirectoryEntry、FileReader、FileWriter。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    target?: PlusIoDirectoryEntry;
}

/**
 * 文件路径类型
 * 在文件系统中的文件路径需转换成URL格式，已方便runtime快速加载。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
 */
interface PlusIoURLType {
    /**
     * 相对路径URL
     * 只能在扩展API中使用，相对于基座提供的特定目录，以“_”开头。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    RelativeURL?: PlusIoRelativeURL;
    /**
     * 本地路径URL
     * 可在html页面中直接访问本地资源，以“file:///”开头，后面跟随系统的绝对路径。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    LocalURL?: PlusIoLocalURL;
    /**
     * 网络路径URL
     * 可在html页面中以网络资源模式访问本地资源，以“http://”开头，后面跟随相对路径。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    RomoteURL?: string;
}

/**
 * 相对路径URL
 * 只能在扩展API中使用，相对于基座提供的特定目录，以“_”开头。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
 */
interface PlusIoRelativeURL {
    /**
     * 应用资源目录
     * 保存应用的所有html、css、js等资源文件，与文件系统中根目录PRIVATE_WWW一致，后面加相对路径如“_www/res/icon.png”。
     * 	注意：应用资源目录是只读目录，只能读取次目录下的文件，不能修改或新建。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    _www?: string;
    /**
     * 应用私有文档目录
     * 用于保存应用运行期业务逻辑数据，与文件系统中根目录PRIVATE_DOCUMENTS，如“_doc/userdata.xml”。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    _doc?: string;
    /**
     * 程序公用文档目录
     * 用于保存程序中各应用间可共享文件的目录，与文件系统中根目录PUBLIC_DOCUMENTS，如“_document/share.doc”。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    _documents?: string;
    /**
     * 程序公用下载目录
     * 用于保存程序下载文件的目录，与文件系统中根目录PUBLIC_DOWNLOADS，如“_download/mydoc.doc”。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
     */
    _downloads?: string;
}

/**
 * 本地路径URL
 * 可在html页面中直接访问本地资源，以“file:///”开头，后面跟随系统的绝对路径。
 * 	如示例：“file:///D:/res/hello.html”。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
 */
type PlusIoLocalURL = any;
/**
 * 网络路径URL
 * 可在html页面中以网络资源模式访问本地资源，以“http://”开头，后面跟随相对路径。
 * 	如示例：“http://localhost:13131/_www/res/icon.png”，其中“_www”字段可支持类型与相对路径URL一致。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/io.html](http://www.html5plus.org/doc/zh_cn/io.html)
 */
type PlusIoRemoteURL = any;

/**
 * Native.js for iOS封装一条通过JS语法直接调用Native Objective-C接口通道，通过plus.ios可调用几乎所有的系统API。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/ios.html](http://www.html5plus.org/doc/zh_cn/ios.html)
 */
interface PlusIos {
    /**
     * Objective-C类对象
     * Objective-C类对象，可通过其属性获取类的常量，可通过方法来操作类的静态方法，也通过new方法来创建类的实例对象。
     * 	对于类的静态方法，则直接通过.后面跟随方法名称调用。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/ios.html](http://www.html5plus.org/doc/zh_cn/ios.html)
     */
    ClassObject?: PlusIosClassObject;
    /**
     * Objective-C实例对象
     * Objective-C实例对象，可通过其方法来操作示例的变量和方法。
     * 	注意：必须通过plusGetAttribute()方法读取示例对象的属性值，通过plusSetAttribute()方法设置示例对象的属性值。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/ios.html](http://www.html5plus.org/doc/zh_cn/ios.html)
     */
    InstanceObject?: PlusIosInstanceObject;
    /**
     * 导入Objective-C类对象
     * 导入类对象后，就可以通过.操作符直接调用对象（类对象/实例对象）的方法。
     * 	通过.操作符号调用方法时，不需要使用":"来分割参数。
     * 	注意：导入类对象将会消耗较多的系统资源，不应该导入过多的类对象，可以使用plus.ios.invoke()来调用未导入类实例对象的方法。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/ios.html](http://www.html5plus.org/doc/zh_cn/ios.html)
     */
    importClass(classname?: string): PlusIosClassObject;
    /**
     * 创建实例对象
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/ios.html](http://www.html5plus.org/doc/zh_cn/ios.html)
     */
    newObject(classname?: string, args?: any): PlusIosInstanceObject;
    /**
     * 销毁实例对象
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/ios.html](http://www.html5plus.org/doc/zh_cn/ios.html)
     */
    deleteObject(obj?: any): void;
    /**
     * 调用对象（类对象/示例对象）的方法
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/ios.html](http://www.html5plus.org/doc/zh_cn/ios.html)
     */
    invoke(obj?: PlusIosInstanceObject, name?: string, args?: any): any;
    /**
     * 实现代理的方法
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/ios.html](http://www.html5plus.org/doc/zh_cn/ios.html)
     */
    implements(name?: string, obj?: any): PlusIosInstanceObject;
    /**
     * 获取当前Webview窗口对象的native层UIWebview实例对象
     * UIWebview对象的API请参考Apple开发文档
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/ios.html](http://www.html5plus.org/doc/zh_cn/ios.html)
     */
    currentWebview(): PlusIosInstanceObject;
}

/**
 * Objective-C类对象
 * Objective-C类对象，可通过其属性获取类的常量，可通过方法来操作类的静态方法，也通过new方法来创建类的实例对象。
 * 	对于类的静态方法，则直接通过.后面跟随方法名称调用。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/ios.html](http://www.html5plus.org/doc/zh_cn/ios.html)
 */
type PlusIosClassObject = any;

/**
 * Objective-C实例对象
 * Objective-C实例对象，可通过其方法来操作示例的变量和方法。
 * 	注意：必须通过plusGetAttribute()方法读取示例对象的属性值，通过plusSetAttribute()方法设置示例对象的属性值。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/ios.html](http://www.html5plus.org/doc/zh_cn/ios.html)
 */
interface PlusIosInstanceObject {
    /**
     * 获取Objective-C实例对象的属性
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/ios.html](http://www.html5plus.org/doc/zh_cn/ios.html)
     */
    plusGetAttribute(name?: string): any;
    /**
     * 设置Objective-C示例对象的属性
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/ios.html](http://www.html5plus.org/doc/zh_cn/ios.html)
     */
    plusSetAttribute(name?: string, value?: any): void;
}

/**
 * Key管理设备按键事件
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/key.html](http://www.html5plus.org/doc/zh_cn/key.html)
 */
interface PlusKey {
    /**
     * 按键类型
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/key.html](http://www.html5plus.org/doc/zh_cn/key.html)
     */
    KeyType?: PlusKeyKeyType;
    /**
     * 按键事件
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/key.html](http://www.html5plus.org/doc/zh_cn/key.html)
     */
    KeyEvent?: PlusKeyKeyEvent;
    /**
     * 添加按键事件监听器
     * 添加按键事件监听器，当指定的按键事件发生时，回调函数将触发。
     * 	应用中存在多个Webview窗口时，按照窗口的显示栈顺序从后往前查找，查找到添加按键事件监听器的窗口后停止（中断前面Webview窗口对按键事件的监听），并向窗口触发执行按键回调事件。
     * 	在同一Webview窗口中可多次调用此方法对同一事件添加多个监听器，触发时按照添加的顺序先后调用。
     * 	注意：此方法无法监听软键盘的按键事件。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/key.html](http://www.html5plus.org/doc/zh_cn/key.html)
     */
    addEventListener(event?: PlusKeyKeyType, listener?: (result: PlusKeyKeyEvent) => void, capture?: boolean): void;
    /**
     * 隐藏软键盘
     * 隐藏已经显示的软键盘，如果软键盘没有显示则不做任何操作。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/key.html](http://www.html5plus.org/doc/zh_cn/key.html)
     */
    hideSoftKeybord(): void;
    /**
     * 设置辅助输入类型
     * input的type类型为text获取焦点时，在软键盘上方显示辅助输入条方便用户快速输入。
     * 	在页面中input编辑框type类型不为"tel"、"email"时生效（type为tel类型时一定显示tel的辅助输入条，type为email时一定显示email的辅助输入条）。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/key.html](http://www.html5plus.org/doc/zh_cn/key.html)
     */
    setAssistantType(type?: string): void;
    /**
     * 显示软键盘
     * 强制显示系统软键盘，如果软键盘已经显示则不做任何操作。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/key.html](http://www.html5plus.org/doc/zh_cn/key.html)
     */
    showSoftKeybord(): void;
    /**
     * 移除按键事件监听器
     * 从窗口移除指定的事件监听器。若没有查找到对应的事件监听器，则无任何作用。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/key.html](http://www.html5plus.org/doc/zh_cn/key.html)
     */
    removeEventListener(event?: PlusKeyKeyType, listener?: (result: PlusKeyKeyEvent) => void): void;
}

/**
 * 按键类型
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/key.html](http://www.html5plus.org/doc/zh_cn/key.html)
 */
interface PlusKeyKeyType {
    /**
     * 设备“返回”按钮按键事件
     * 如果需要改变默认“返回”按钮的处理逻辑，则可通过plus.key.addEventListener来注册监听"backbutton"事件。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/key.html](http://www.html5plus.org/doc/zh_cn/key.html)
     */
    backbutton?: string;
    /**
     * 键按下事件
     * 如果需要改变默认键按下的处理逻辑，则可通过plus.key.addEventListener来注册监听"keydown"事件。
     * 	可通过回调函数中KeyEvent对象的keyCode来获取按下的键值。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/key.html](http://www.html5plus.org/doc/zh_cn/key.html)
     */
    keydown?: string;
    /**
     * 键松开事件
     * 如果需要改变默认键松开的处理逻辑，则可通过plus.key.addEventListener来注册监听"keyup"事件。
     * 	可通过回调函数中KeyEvent对象的keyCode来获取松开的键值。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/key.html](http://www.html5plus.org/doc/zh_cn/key.html)
     */
    keyup?: string;
    /**
     * 长按键事件
     * 如果需要改变默认长按键的处理逻辑，则可通过plus.key.addEventListener来注册监听"longpressed"事件。
     * 	长按键时会多次触发回调函数，通过回调函数中KeyEvent对象的keyCode来获取长按的键值。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/key.html](http://www.html5plus.org/doc/zh_cn/key.html)
     */
    longpressed?: string;
    /**
     * 设备“菜单”按钮按键事件
     * 如果需要改变默认“菜单”按钮的处理逻辑，则可通过plus.key.addEventListener来注册监听"menubutton"事件。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/key.html](http://www.html5plus.org/doc/zh_cn/key.html)
     */
    menubutton?: string;
    /**
     * 设备“搜索”按钮按键事件
     * 如果需要改变默认“搜索”按钮的处理逻辑，则可通过plus.key.addEventListener来注册监听"searchbutton"事件。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/key.html](http://www.html5plus.org/doc/zh_cn/key.html)
     */
    searchbutton?: string;
    /**
     * 设备“音量+”按钮按键事件
     * 如果需要改变默认“音量+”按钮的处理逻辑，则可通过plus.key.addEventListener来注册监听"volumeupbutton"事件。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/key.html](http://www.html5plus.org/doc/zh_cn/key.html)
     */
    volumeupbutton?: string;
    /**
     * 设备“音量-”按钮按键事件
     * 如果需要改变默认“音量-”按钮的处理逻辑，则可通过plus.key.addEventListener来注册监听"volumedownbutton"事件。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/key.html](http://www.html5plus.org/doc/zh_cn/key.html)
     */
    volumedownbutton?: string;
}

/**
 * 按键事件
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/key.html](http://www.html5plus.org/doc/zh_cn/key.html)
 */
interface PlusKeyKeyEvent {
    /**
     * 触发按键事件的键值
     * 键值由各系统平台定义，一些特殊按键在不同的设备上可能存在差异。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/key.html](http://www.html5plus.org/doc/zh_cn/key.html)
     */
    keyCode?: number;
    /**
     * 按键事件类型
     * 用于表明触发此按键事件的类型，值为KeyType中定义的值。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/key.html](http://www.html5plus.org/doc/zh_cn/key.html)
     */
    keyType?: PlusKeyKeyType;
}

/**
 * Messaging模块管理设备通讯功能，可用于短信、彩信、邮件发送等。通过plus.messaging可获取设备通讯管理对象。另外也可以直接通过html中的href直接快速发送短信、拨打电话、发送邮件等。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/messaging.html](http://www.html5plus.org/doc/zh_cn/messaging.html)
 */
interface PlusMessaging {
    /**
     * 消息对象
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/messaging.html](http://www.html5plus.org/doc/zh_cn/messaging.html)
     */
    Message?: PlusMessagingMessage;
    /**
     * 消息体内容类型
     * 用于设定消息的消息体内容。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/messaging.html](http://www.html5plus.org/doc/zh_cn/messaging.html)
     */
    BodyType?: PlusMessagingBodyType;
    /**
     * 简单短信类型常量
     * 消息类型常量，Number类型，固定值为1，用于创建并发送短信。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/messaging.html](http://www.html5plus.org/doc/zh_cn/messaging.html)
     */
    TYPE_SMS?: number;
    /**
     * 彩信类型常量
     * 消息类型常量，Number类型，固定值为2，用于创建并发送多媒体短信（彩信）。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/messaging.html](http://www.html5plus.org/doc/zh_cn/messaging.html)
     */
    TYPE_MMS?: number;
    /**
     * 邮件类型常量
     * 消息类型常量，Number类型，固定值为3，用于创建并发送邮件。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/messaging.html](http://www.html5plus.org/doc/zh_cn/messaging.html)
     */
    TYPE_EMAIL?: number;
    /**
     * 创建消息对象
     * 创建指定类型的消息，消息类型可取plus.messaging.TYPE_SMS、plus.messaging.TYPE_MMS、plus.messaging.TYPE_EMAIL。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/messaging.html](http://www.html5plus.org/doc/zh_cn/messaging.html)
     */
    createMessage(type ?: number): PlusMessagingMessage;
    /**
     * 发送消息
     * 发送消息，发送成功回调successCB函数，发送失败回调errorCB函数。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/messaging.html](http://www.html5plus.org/doc/zh_cn/messaging.html)
     */
    sendMessage(msg?: PlusMessagingMessage, successCB?: () => void, errorCB?: (result: any) => void): void;
}

/**
 * 消息对象
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/messaging.html](http://www.html5plus.org/doc/zh_cn/messaging.html)
 */
interface PlusMessagingMessage {
    /**
     * 收件人信息
     * 字符串数组类型，输入的地址收件人信息必须符合消息类型格式。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/messaging.html](http://www.html5plus.org/doc/zh_cn/messaging.html)
     */
    to?: any [];
    /**
     * 抄送人信息
     * 字符串数组类型，仅发送邮件时有效，输入的地址收件人信息必须符合消息类型格式。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/messaging.html](http://www.html5plus.org/doc/zh_cn/messaging.html)
     */
    cc?: any [];
    /**
     * 暗送人信息
     * 字符串数组类型，仅发送邮件时有效，输入的地址收件人信息必须符合消息类型格式。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/messaging.html](http://www.html5plus.org/doc/zh_cn/messaging.html)
     */
    bcc?: any [];
    /**
     * 发件人信息
     * 仅在监听接收到的信息时有效。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/messaging.html](http://www.html5plus.org/doc/zh_cn/messaging.html)
     */
    from?: string;
    /**
     * 发送消息主题
     * 字符串类型，仅发送邮件时有效。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/messaging.html](http://www.html5plus.org/doc/zh_cn/messaging.html)
     */
    subject?: string;
    /**
     * 发送消息内容
     * 字符串类型，要发送的消息体内容，其格式必须与bodyType指定的一致。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/messaging.html](http://www.html5plus.org/doc/zh_cn/messaging.html)
     */
    body?: string;
    /**
     * 发送消息内容类型
     * 要发送消息体内容的类型，可取值"text"表示文本内容，"html"表示为html页面，默认值为"text"。
     * - text/plain: 纯文本类型消息体内容
     * - text/html: 网页数据类型消息体内容(用于发送邮件)
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/messaging.html](http://www.html5plus.org/doc/zh_cn/messaging.html)
     */
    bodyType?: 'text/plain' | 'text/html';
    /**
     * 是否采用静默方式发送消息
     * 布尔类型，可取值为true或false，true表示静默方式发送，不弹出界面；false表示非静默方式发送。默认采用非静默方式。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/messaging.html](http://www.html5plus.org/doc/zh_cn/messaging.html)
     */
    silent?: boolean;
    /**
     * 添加附件
     * 向消息中添加附件，仅邮件类型消息支持，其它类型消息不支持。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/messaging.html](http://www.html5plus.org/doc/zh_cn/messaging.html)
     */
    addAttachment(url?: string): void;
}

/**
 * 消息体内容类型
 * 用于设定消息的消息体内容。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/messaging.html](http://www.html5plus.org/doc/zh_cn/messaging.html)
 */
interface PlusMessagingBodyType {
    /**
     * 文本类型
     * 纯文本类型消息体内容，默认消息体内容类型。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/messaging.html](http://www.html5plus.org/doc/zh_cn/messaging.html)
     */
    'text/plain'?: string;
    /**
     * Html类型
     * 网页数据类型消息体内容，可用于发送邮件。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/messaging.html](http://www.html5plus.org/doc/zh_cn/messaging.html)
     */
    'text/html'?: string;
}

/**
 * nativeObj管理系统原生对象。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
 */
interface PlusNativeObj {
    /**
     * 原生动画参数
     * 指定动画的类型、持续时间等信息。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    AnimationOptions?: PlusNativeObjAnimationOptions;
    /**
     * 原生动画窗口样式
     * 指定动画窗口的样式，如背景图片，绘制的文字等。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    AnimationViewStyles?: PlusNativeObjAnimationViewStyles;
    /**
     * 原生图片对象
     * 原生图片对象会占用较大的内存资源，在使用时需谨慎管理，当图片不再使用时应该及时调用clear方法进行销毁。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    Bitmap?: PlusNativeObjBitmap;
    /**
     * JSON对象，保存图片的参数
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    BitmapSaveOptions?: PlusNativeObjBitmapSaveOptions;
    /**
     * 原生图片轮播控件对象
     * 原生图片轮播控件对象从原生View控件（plus.nativeObj.View）继承而来，用于绘制图片轮播内容。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    ImageSlider?: PlusNativeObjImageSlider;
    /**
     * 图片轮播控件样式
     * 从ViewStyles继承而来，扩展支持轮播图片等配置。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    ImageSliderStyles?: PlusNativeObjImageSliderStyles;
    /**
     * 图片轮播控件中图片项配置参数
     * 用于指定图片地址等信息。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    ImageSliderImageStyles?: PlusNativeObjImageSliderImageStyles;
    /**
     * 输入框样式
     * 用于定义输入框的显示样式，如字体大小，提示内容等信息。
     * 	输入文本内容在指定区域水平居左，垂直居中显示。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    InputStyles?: PlusNativeObjInputStyles;
    /**
     * 区域信息对象
     * 包括位置、大小等信息。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    Rect?: PlusNativeObjRect;
    /**
     * 绘制区域样式对象
     * 用于定义矩形区域的显示样式，如空心/实心样式、圆角等信息。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    RectStyles?: PlusNativeObjRectStyles;
    /**
     * 富文本样式
     * 用于定义富文本使用的默认使用的字体名称、字体文件路径等信息。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    RichTextStyles?: PlusNativeObjRichTextStyles;
    /**
     * 区域信息对象
     * 包括位置、大小等信息。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    Position?: PlusNativeObjPosition;
    /**
     * 绘制文本样式对象
     * 用于定义文本的显示样式，如字体大小、字体颜色、字体粗细、字体样式、字体名称等信息。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    TextStyles?: PlusNativeObjTextStyles;
    /**
     * 原生控件对象
     * 原生控件对象可用于在屏幕上绘制图片或文本内容，当控件不再使用时需要调用close方法销毁控件。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    View?: PlusNativeObjView;
    /**
     * View控件动画参数
     * 指定动画的类型、持续时间等信息。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    ViewAnimationOptions?: PlusNativeObjViewAnimationOptions;
    /**
     * View控件绘制元素参数
     * 指定绘制图片、矩形区域、文本内容等信息。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    ViewDrawTagStyles?: PlusNativeObjViewDrawTagStyles;
    /**
     * View控件事件
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    ViewEvents?: PlusNativeObjViewEvents;
    /**
     * JSON对象，View控件的系统状态栏区域样式
     * 仅在应用设置为沉浸式状态栏样式下有效，非沉浸式状态栏样式下忽略此属性。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    ViewStatusbarStyles?: PlusNativeObjViewStatusbarStyles;
    /**
     * View控件样式
     * 包括位置、大小等信息等，其中位置信息相对于父容器控件进行计算。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    ViewStyles?: PlusNativeObjViewStyles;
}

/**
 * 原生动画参数
 * 指定动画的类型、持续时间等信息。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
 */
interface PlusNativeObjAnimationOptions {
    /**
     * 动画类型
     * 可取值：
     * 	"pop-in" - 从右侧平移入栈动画效果（副窗口从右侧向左平移滑出显示，主窗口从当前屏幕区域向左侧平移滑出被遮盖），如果仅传入一个View控件对象则自动降级为slide-in-right动画；
     * 	"pop-out" - 从右侧平移出栈动画效果（副窗口从当前屏幕区域向右侧平移出可视区域，主窗口从左侧向右平移滑出显示），如果仅出入一个View控件对象则自动降级为slide-out-right动画；
     * 	"slide-in-right" - 从右侧横向滑动效果（主窗口从当前屏幕右侧外向内横向滑动显示）；
     * 	"slide-out-right - 横向向右侧滑出屏幕动画（主窗口从屏幕中横向向右侧滑动到屏幕外）。
     * - pop-in: 
     * 	从右侧平移入栈动画效果（副窗口从右侧向左平移滑出显示，主窗口从当前屏幕区域向左侧平移滑出被遮盖）。
     * 								
     * - pop-out: 
     * 	从右侧平移出栈动画效果（副窗口从当前屏幕区域向右侧平移出可视区域，主窗口从左侧向右平移滑出显示）。
     * 								
     * - slide-in-right: 
     * 	从右侧横向滑动效果（主窗口从当前屏幕右侧外向内横向滑动显示）。
     * 								
     * - slide-out-right: 
     * 	横向向右侧滑出屏幕动画（主窗口从屏幕中横向向右侧滑动到屏幕外）。
     * 								
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    type?: 'pop-in' | 'pop-out' | 'slide-in-right' | 'slide-out-right';
    /**
     * 动画持续时间
     * 单位为毫秒，默认值为200ms。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    duration?: number;
}

/**
 * 原生动画窗口样式
 * 指定动画窗口的样式，如背景图片，绘制的文字等。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
 */
interface PlusNativeObjAnimationViewStyles {
    /**
     * 动画窗口上绘制的背景图片
     * 图片可以通过Webview对象的draw方法截图，也可以通过Bitmap的API从本地文件中加载。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    bitmap?: PlusNativeObjBitmap;
    /**
     * 动画窗口上绘制的文本内容
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    text?: string;
    /**
     * 动画窗口上绘制的文本样式
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    textStyles?: PlusNativeObjTextStyles;
    /**
     * 动画窗口上绘制的文本区域
     * 默认值为{top:'0px',left:'0px',width:'100%',height:'44px'}。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    textRect?: PlusNativeObjRect;
}

/**
 * 原生图片对象
 * 原生图片对象会占用较大的内存资源，在使用时需谨慎管理，当图片不再使用时应该及时调用clear方法进行销毁。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
 */
interface PlusNativeObjBitmap {
    /**
     * Bitmap对象的标识
     * 在创建Bitmap对象时设置，如果没有设置标识，此属性值为null。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    id?: string;
    /**
     * 静态方法，获取所有Bitmap图片对象
     * 获取应用运行期创建的所有Bitmap图片对象，包含所有空Bitmap对象，不包含已经销毁的Bitmap对象。返回的Bitmap对象在数组中按创建的属性排列，及数组中第一个是最先创建的Bitmap对象。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    getItems(): PlusNativeObj [];
    /**
     * 静态方法，获取指定标识的Bitmap图片对象
     * 在应用中已创建的图片对象中查找指定标识的Bitmap对象并返回。
     * 	若存在多个相同标识的Bitmap图片，则返回第一个创建的Bitmap图片。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    getBitmapById(id?: string): PlusNativeObjBitmap;
    /**
     * 销毁Bitmap图片
     * 释放Bitmap图片占用的内存资源，销毁后图片对象将不可使用，其id属性值为undefined，调用其所有方法操作都会失败。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    clear(): void;
    /**
     * 加载Bitmap图片
     * 从指定的路径（仅支持本地文件系统）中加载图片，此操作将覆盖之前的图片内容，
     * 	如果加载图片失败则保留之前的图片内容。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    load(path?: string, successCallback?: () => void, errorCallback?: (result: any) => void): void;
    /**
     * 加载Base64编码格式图片到Bitmap对象
     * 从Base64编码格式图片数据中加载图片，此操作将覆盖之前的图片内容，
     * 	如果加载图片失败则保留之前的图片内容。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    loadBase64Data(data?: string, successCallback?: () => void, errorCallback?: (result: any) => void): void;
    /**
     * 回收Bitmap图片内存
     * 释放Bitmap图片占用的内存资源，但不销毁图片对象，依然可以继续使用图片对象。
     * 	当图片对象再次被使用时会自动从设置的路径（构造函数或load/save方法设置）加载到内存中。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    recycle(): void;
    /**
     * 保存图片
     * 将图片保存到指定的路径（仅支持本地文件系统），如果图片为空或者指定的路径文件已经存在则返回失败。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    save(path?: string, options?: PlusNativeObjBitmapSaveOptions, successCallback?: (result: any) => void, errorCallback?: (result: any) => void): void;
    /**
     * 获取图片的Base64编码数据
     * 读取图片的数据内容，并转换为Base64编码格式字符串。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    toBase64Data(): string;
}

/**
 * JSON对象，保存图片的参数
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
 */
interface PlusNativeObjBitmapSaveOptions {
    /**
     * 覆盖保存图片文件
     * 仅在保存的图片路径文件存在时有效：
     * 	true表示覆盖存在的文件；
     * 	false表示不覆盖，如果文件存在，则返回失败。
     * 	默认值为false。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    overwrite?: boolean;
    /**
     * 保存图片的格式
     * 支持"jpg"、"png"，如果未指定则默认使用指定的保存路径后缀对应的文件格式，如果后缀文件格式无效则使用jpg格式。
     * - jpg: JPG格式图片
     * - png: PNG格式图片
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    format?: 'jpg' | 'png';
    /**
     * 保存图片的质量
     * 取值范围为1-100，1表示使用最低的图片质量（保存后的图片文件最小）、100表示使用最高的图片质量（保存后的图片文件最大）；
     * 	默认值为50。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    quality?: number;
    /**
     * 指定裁剪区域保存图片
     * 相对于图片的区域信息，默认值为{top:'0px',left:'0px',width:'100%',height:'100%'}。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    clip?: PlusNativeObjRect;
}

/**
 * 原生图片轮播控件对象
 * 原生图片轮播控件对象从原生View控件（plus.nativeObj.View）继承而来，用于绘制图片轮播内容。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
 */
interface PlusNativeObjImageSlider {
    /**
     * 添加图片轮播控件的图片
     * 动态添加图片轮播控件显示的图片。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    addImages(images?: PlusNativeObj []): void;
    /**
     * 获取当前图片轮播控件显示的图片索引值
     * 索引值从0开始，即0表示图片轮播控件当前显示第一张图片。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    currentImageIndex(): number;
    /**
     * 设置图片轮播控件的图片
     * 动态更新图片轮播控件显示的图片。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    setImages(images?: PlusNativeObj []): void;
}

/**
 * 图片轮播控件样式
 * 从ViewStyles继承而来，扩展支持轮播图片等配置。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
 */
interface PlusNativeObjImageSliderStyles {
    /**
     * 是否自动播放
     * 可取值：
     * 		"true" - 自动播放；
     * 		"false" - 不自动播放。
     * 	默认值为"false"。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    autoplay?: boolean;
    /**
     * 是否可全屏显示
     * 可取值：
     * 		"true" - 表示可全屏显示，用户点击轮播图片时全屏显示；
     * 		"false" - 表示不可全屏显示，用户点击轮播图片时无响应。
     * 	默认值为"true"。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    fullscreen?: boolean;
    /**
     * 是否可循环轮播
     * 可取值：
     * 		"true" - 支持循环轮播；
     * 		"false" - 不支持循环轮播。
     * 	默认值为"false"。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    loop?: boolean;
    /**
     * 轮播的图片
     * 至少必须设置一张图片的地址信息，否则可能导致图片轮播控件显示不正常。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    images?: PlusNativeObj [];
    /**
     * 自动播放切换时间
     * 当autoplay属性值为true时生效，单位为毫秒。默认值为3000（3秒）。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    interval?: number;
}

/**
 * 图片轮播控件中图片项配置参数
 * 用于指定图片地址等信息。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
 */
interface PlusNativeObjImageSliderImageStyles {
    /**
     * 图片地址
     * 支持本地地址（相对地址、绝对路径、RelativeURL、本地路径URL）；
     * 	也支持网络地址（http://或https://）。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    src?: string;
    /**
     * 图片水平对齐方式
     * 仅在图片显示的宽度与图片轮播控件宽度不一致时有效，可取值：
     * 		"left" - 图片在轮播控件中水平居左对齐；
     * 		"center" - 图片在轮播控件中水平居中对齐；
     * 		"right" - 图片在轮播控件中水平居右对齐。
     * 	默认值为"center"。
     * - left: 图片在轮播控件中水平居左对齐
     * - center: 图片在轮播控件中水平居中对齐
     * - right: 图片在轮播控件中水平居右对齐
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    align?: 'left' | 'center' | 'right';
    /**
     * 图片显示的高度
     * 可取值：
     * 		像素值，如"100px"；
     * 		百分比，如"10%"，现对于图片轮播控件的高度；
     * 		自动计算"auto"，如果指定图片宽度（width），则按图片实际大小等比缩放图片高度值，如果没有指定宽度（width值为"auto"）则自动缩放图片至可完整显示。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    height?: string;
    /**
     * 图片显示的宽度
     * 可取值：
     * 		像素值，如"100px"；
     * 		百分比，如"10%"，相对于图片轮播控件的宽度；
     * 		自动计算"auto"，如果指定图片高度（height），则按图片实际大小等比缩放图片宽度值，如果没有指定高度（height值为"auto"）则自动缩放图片至可完整显示。
     * 	默认值为"auto"。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    width?: string;
    /**
     * 图片垂直对齐方式
     * 仅在图片显示的高度与图片轮播控件宽度不一致时有效，可取值：
     * 		"top" - 图片在轮播控件中垂直居顶对齐；
     * 		"middle" - 图片在轮播控件中垂直居中对齐；
     * 		"bottom" - 图片在轮播控件中垂直居底对齐。
     * 	默认值为"middle"。
     * - top: 图片在轮播控件中垂直居顶对齐
     * - middle: 图片在轮播控件中垂直居中对齐
     * - bottom: 图片在轮播控件中垂直居底对齐
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    verticalAlign?: 'top' | 'middle' | 'bottom';
}

/**
 * 输入框样式
 * 用于定义输入框的显示样式，如字体大小，提示内容等信息。
 * 	输入文本内容在指定区域水平居左，垂直居中显示。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
 */
interface PlusNativeObjInputStyles {
    /**
     * 输入框类型
     * 可取值：
     * 		"email" - 邮箱地址输入框；
     * 		"number" - 数字输入框；
     * 		"search" - 搜索文本输入框；
     * 		"tel" - 电话号码输入框；
     * 		"text" - 普通文本输入框；
     * 		"url" - URL地址输入框。
     * 	默认为text（即普通文本输入框）。
     * - email: 邮箱地址输入框
     * - number: 数字输入框
     * - search: 搜索文本输入框
     * - tel: 电话号码输入框
     * - text: 普通文本输入框
     * - url: URL地址输入框
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    type?: 'email' | 'number' | 'search' | 'tel' | 'text' | 'url';
    /**
     * 输入框的提示文本
     * 当用户未输入内容时显示在编辑框中（灰色文字）。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    placeholder?: string;
    /**
     * 输入框的字体大小
     * 可取值：字体高度像素值，数字加"px"格式字符串，如"12px"。 
     * 	默认值为"16px"。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    fontSize?: string;
    /**
     * 输入框的边框颜色
     * 可取值： "#RRGGBB"格式字符串，如"#FF0000"表示红色边框。默认值为"#000000"（黑色）。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    borderColor?: string;
    /**
     * 输入框边框圆角半径
     * 可取值：圆角半径像素值，数字加"px"格式字符串，如"6px"。
     * 	默认值为"0px"（边框无圆角）。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    borderRadius?: string;
    /**
     * 输入框的边框宽度
     * 可取值：像素值，数字加"px"格式字符串，如"2px"。 默认值为"1px"。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    borderWidth?: string;
    /**
     * 输入框完成输入事件
     * 弹出软键盘完成输入后，点击软键盘上的“完成”、“前往”按钮时触发。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    onComplete?: (result: any) => void;
    /**
     * 输入框获取焦点事件
     * 当编辑框获取焦点时触发。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    onFocus?: (result: any) => void;
    /**
     * 输入框失去焦点事件
     * 当编辑框失去焦点时触发。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    onBlur?: (result: any) => void;
}

/**
 * 区域信息对象
 * 包括位置、大小等信息。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
 */
interface PlusNativeObjRect {
    /**
     * 区域左上角的垂直偏移量
     * 可取值：
     * 		像素值，如"100px"；
     * 		百分比，如"10%"，相对于作用对象的高度；
     * 		自动计算，如"auto",根据height值自动计算，相对于作用对象垂直居中。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    top?: string;
    /**
     * 区域左上角的水平偏移量
     * 可取值：
     * 		像素值，如"100px"；
     * 		百分比，如"10%"，相对于作用对象的宽度；
     * 		自动计算，如"auto",根据width值自动计算，相对于作用对象水平居中。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    left?: string;
    /**
     * 区域的宽度
     * 可取值：
     * 		像素值，如"100px"；
     * 		百分比，如"10%"，相对于作用对象的宽度。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    width?: string;
    /**
     * 区域的高度
     * 可取值：
     * 		像素值，如"100px"；
     * 		百分比，如"10%"，相对于作用对象的高度。
     * 		内容自适应，如"wrap_content"，根据内容计算高度（如调用drawText绘制文本时支持）。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    height?: string;
}

/**
 * 绘制区域样式对象
 * 用于定义矩形区域的显示样式，如空心/实心样式、圆角等信息。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
 */
interface PlusNativeObjRectStyles {
    /**
     * 绘制颜色
     * 矩形填充区域的颜色，可取值：
     * 	"#RRGGBB"格式字符串，如"#FF0000"表示绘制红色区域；
     * 	"rgba(R,G,B,A)"，其中R/G/B分别代表红色值/绿色值/蓝色值，正整数类型，取值范围为0-255，A为透明度，浮点数类型，取值范围为0-1（0为全透明，1为不透明），如"rgba(255,0,0,0.5)"，表示红色半透明。
     * 	默认值为"#FFFFFF"（白色）。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    color?: string;
    /**
     * 矩形区域的圆角半径
     * 可取值：圆角半径像素值，数字加"px"格式字符串，如"6px"。
     * 	默认值为"0px"（矩形无圆角）。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    radius?: string;
    /**
     * 矩形边框颜色
     * 绘制矩形边框的颜色，可取值：
     * 	"#RRGGBB"格式字符串，如"#FF0000"表示绘制红色区域；
     * 	"rgba(R,G,B,A)"，其中R/G/B分别代表红色值/绿色值/蓝色值，正整数类型，取值范围为0-255，A为透明度，浮点数类型，取值范围为0-1（0为全透明，1为不透明），如"rgba(255,0,0,0.5)"，表示红色半透明。
     * 	默认值为矩形填充区域颜色（color属性值）。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    borderColor?: string;
    /**
     * 矩形边框宽度
     * 可取值：像素值，数字加"px"格式字符串，如"2px"。
     * 	默认值为"0px"（无边框）。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    borderWidth?: string;
}

/**
 * 富文本样式
 * 用于定义富文本使用的默认使用的字体名称、字体文件路径等信息。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
 */
interface PlusNativeObjRichTextStyles {
    /**
     * 富文本内容的水平对齐方式
     * 对整体内容有效，无法单独控制每行的内容。
     * 	可取值：
     * 	"left"-字体在指定的区域中水平居左对齐；
     * 	"center"-字体在指定的区域中水平居中对齐；
     * 	"right"-字体在指定的区域中水平居右对齐。
     * 	默认值为"left"。
     * - left: 富文本内容水平居左对齐
     * - center: 富文本内容水平居中对齐
     * - right: 富文本内容水平居右对齐
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    align?: 'left' | 'center' | 'right';
    /**
     * 富文本默认使用的字体名称
     * 例如"Times New Roman"，	如果指定名称的字体不存在，则使用系统默认字体。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    family?: string;
    /**
     * 富文本默认使用的字体文件路径
     * 加载字体文件路径，必须为本地路径，如果指定的文件路径无效，则使用系统默认字体。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    fontSrc?: string;
    /**
     * 点击事件回调函数
     * 如果设置此属性，则表示拦截所有RichText上的点击事件（不透传事件）。
     * 	如果没有设置此属性，则仅拦截操作包含onclick属性的a/img标签的点击事件。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    onClick?: (result: any) => void;
}

/**
 * 区域信息对象
 * 包括位置、大小等信息。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
 */
interface PlusNativeObjPosition {
    /**
     * 区域顶部相对于作用对象（或容器）向下的偏移量
     * 可取值：像素值，如"100px"；百分比，如"10%"，相对于作用对象（或容器）的高度；
     * 	自动计算，如"auto",根据height值自动计算，相对于作用对象（或容器）垂直居中。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    top?: string;
    /**
     * 区域左侧相对于作用对象（或容器）向右的偏移量
     * 可取值：像素值，如"100px"；百分比，如"10%"，相对于作用对象（或容器）的宽度；
     * 	自动计算，如"auto",根据width值自动计算，相对于作用对象（或容器）水平居中。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    left?: string;
    /**
     * 区域的宽度
     * 可取值：像素值，如"100px";百分比，如"10%"，相对于作用对象（或容器）的宽度。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    width?: string;
    /**
     * 区域的高度
     * 可取值：像素值，如"100px";百分比，如"10%"，相对于作用对象（或容器）的高度。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    height?: string;
    /**
     * 区域底部相对于作用对象（或容器）向上的偏移量
     * 可取值：像素值，如"100px";百分比，如"10%"，相对于作用对象（或容器）的高度。
     * 	当设置了top和height值时，忽略此属性值；
     * 	当未设置top值时，可通过bottom属性值来确定区域的垂直位置；
     * 	当未设置height值时，可通过top和bottom属性值来确定区域的高度。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    bottom?: string;
    /**
     * 区域右侧相对于作用对象（或容器）向左的偏移量
     * 可取值：像素值，如"100px";百分比，如"10%"，相对于作用对象（或容器）的宽度。
     * 	当设置了left和width值时，忽略此属性值；
     * 	当未设置left值时，可通过right属性值来确定区域的水平位置；
     * 	当未设置width值时，可通过left和right属性值来确定区域的宽度。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    right?: string;
}

/**
 * 绘制文本样式对象
 * 用于定义文本的显示样式，如字体大小、字体颜色、字体粗细、字体样式、字体名称等信息。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
 */
interface PlusNativeObjTextStyles {
    /**
     * 水平对齐方式
     * 可取值：
     * 	"left"-字体在指定的区域中水平居左对齐；
     * 	"center"-字体在指定的区域中水平居中对齐；
     * 	"right"-字体在指定的区域中水平居右对齐。
     * 	默认值为"center"。
     * - left: 字体在指定的区域中水平居左对齐
     * - center: 字体在指定的区域中水平居中对齐
     * - right: 字体在指定的区域中水平居右对齐
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    align?: 'left' | 'center' | 'right';
    /**
     * 字体颜色
     * 可取值：
     * 	"#RRGGBB"格式字符串，如"#FF0000"表示绘制红色区域；
     * 	"rgba(R,G,B,A)"，其中R/G/B分别代表红色值/绿色值/蓝色值，正整数类型，取值范围为0-255，A为透明度，浮点数类型，取值范围为0-1（0为全透明，1为不透明），如"rgba(255,0,0,0.5)"，表示红色半透明。
     * 	默认值为"#000000"（黑色）。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    color?: string;
    /**
     * 文本装饰
     * 可取值：
     * 		"none" - 无装饰效果；
     * 		"underline" - 文本带下划线效果；
     * 		"line-through" - 文本带贯穿线（删除线）效果。
     * 	默认值为"none"。
     * - none: 
     * 	无装饰效果
     * 								
     * - underline: 
     * 	文本带下划线效果
     * 								
     * - line-through: 
     * 	文本带贯穿线（删除线）效果
     * 								
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    decoration?: 'none' | 'underline' | 'line-through';
    /**
     * 字体名称
     * 例如"Times New Roman"，	如果指定名称的字体不存在，则使用默认字体。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    family?: string;
    /**
     * 字体文件路径
     * 加载字体文件路径。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    fontSrc?: string;
    /**
     * 文本的行间距
     * 可取值：
     * 	像素值，如"100px"；百分比，如"10%"，相对于字体的高度（size属性）；
     * 	默认值为"20%"。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    lineSpacing?: string;
    /**
     * 字体的边距
     * 用于设置字体在绘制目标区域四个方向（top/right/bottom/left）的边距，可取值：像素值，如"10px"；百分比，相对于绘制目标区域，如"5%"；
     * 	默认值为"0px"。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    margin?: string;
    /**
     * 文本内容超出显示区域时处理方式
     * 可取值：
     * 		"clip" - 超出显示区域时内容裁剪；
     * 		"ellipsis" - 超出显示区域时尾部显示省略标记（...）。
     * 	默认值为"clip"。
     * - clip: 
     * 	
     * 								
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    overflow?: 'clip';
    /**
     * 字体大小
     * 可取值：字体高度像素值，数字加"px"格式字符串，如"12px"。
     * 	默认值为"16px"。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    size?: string;
    /**
     * 字体样式
     * 可取值："normal" - 正常字体样式；"italic" - 斜体样式。默认值为"normal"。
     * - normal: 正常字体样式
     * - italic: 斜体样式
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    style?: 'normal' | 'italic';
    /**
     * 垂直对齐方式
     * 文本内容在指定绘制区域中的垂直对齐方式，可取值：
     * 		"top" - 垂直居顶对齐；
     * 		"middle" - 垂直居中对齐；
     * 		"bottom" - 垂直居底对齐。
     * 	默认值为"middle"。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    verticalAlign?: string;
    /**
     * 字体粗细
     * 可取值："normal" - 普通字体；"bold" - 粗字体。默认值为"normal"。
     * - normal: 普通字体
     * - bold: 粗字体
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    weight?: 'normal' | 'bold';
    /**
     * 文本换行模式
     * 可取值：
     * 		"nowrap" - 不换行，将所有文本在一行中绘制，忽略换行符("\n")；
     * 		"normal" - 自动换行，当指定的宽度无法绘制所有文本时自动换行绘制，碰到'\n'字符时强制换行。
     * 	默认值为"nowrap"。
     * - nowrap: 
     * 	不换行，将所有文本在一行中绘制，忽略换行符("\n")
     * 								
     * - normal: 
     * 	自动换行，当指定的宽度无法绘制所有文本时自动换行绘制，碰到'\n'字符时强制换行
     * 								
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    whiteSpace?: 'nowrap' | 'normal';
}

/**
 * 原生控件对象
 * 原生控件对象可用于在屏幕上绘制图片或文本内容，当控件不再使用时需要调用close方法销毁控件。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
 */
interface PlusNativeObjView {
    /**
     * View对象的标识
     * 在创建原生控件View对象时设置，如果没有设置标识，此属性值为null。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    id?: string;
    /**
     * 静态方法，开始原生动画
     * 
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    startAnimation(options?: PlusNativeObjAnimationOptions, view?: PlusNativeObjAnimationViewStyles, otherview?: PlusNativeObjAnimationViewStyles, callback?: () => void): void;
    /**
     * 静态方法，关闭原生动画窗口
     * 通过plus.nativeObj.View.startAnimation方法开始原生动画后，不会自动关闭原生动画窗口对象，需要调用此方法关闭原生动画。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    clearAnimation(type?: string): void;
    /**
     * 静态方法，获取指定标识的View控件对象
     * 如果存在多个指定id标识的View对象，则返回第一个创建的View控件对象。
     * 	如果不存在指定id标识的View对象，则返回null。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    getViewById(id?: string): PlusNativeObjView;
    /**
     * 添加事件监听器
     * 向View控件添加事件监听器，当指定的事件发生时，将触发listener函数的执行。
     * 		可多次调用此方法向Webview添加多个监听器，当监听的事件发生时，将按照添加的先后顺序执行。
     * 		可通过setTouchEventRect方法指定监听触屏操作的区域。
     * 		注意：默认View控件拦截处理触屏事件，可调用view.interceptTouchEvent(false)改变为不拦截处理触屏事件（透传）。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    addEventListener(event?: PlusNativeObjViewEvents, listener?: (result: any) => void, capture?: boolean): void;
    /**
     * View控件内容动画
     * 动画后可能会导致View控件显示内容改变，可通过调用restore方法恢复。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    animate(options?: PlusNativeObjViewAnimationOptions, callback?: () => void): void;
    /**
     * 关闭View控件
     * 释放View控件资源，View对象不可再操作，如果View控件已经显示则自动隐藏。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    close(): void;
    /**
     * 清空矩形区域
     * 清除指定矩形区域内容，透明显示其后面的内容。
     * 	可多次调用设置多个区域透明。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    clearRect(position?: PlusNativeObjPosition, id?: string): void;
    /**
     * 绘制内容
     * 在当前View控件之上绘制指定的内容，可一次指定绘制多个元素，绘制元素可以是图片/矩形区域/文本，
     * 	即将多次调用drawBitmap/drawRect/drawText方法合并调用一次draw方法来实现，
     * 	推荐使用draw方法来替换多次调用drawBitmap/drawRect/drawText。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    draw(tags?: PlusNativeObj []): void;
    /**
     * 绘制图片
     * 在当前View控件之上绘制指定的图片，如果图片无效则不做任何操作。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    drawBitmap(src?: string, sprite?: PlusNativeObjPosition, position?: PlusNativeObjPosition, id?: string): void;
    /**
     * 绘制矩形区域
     * 在当前View控件之上绘制指定颜色的矩形区域。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    drawRect(styles?: PlusNativeObjRectStyles, position?: PlusNativeObjPosition, id?: string): void;
    /**
     * 绘制文本
     * 在当前View控件之上绘制指定的文本内容，如果文本为空则不做任何操作。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    drawText(text?: string, position?: PlusNativeObjPosition, styles?: PlusNativeObjTextStyles, id?: string): void;
    /**
     * 绘制富文本
     * 在当前View控件之上绘制指定的文本内容，如果文本为空则不做任何操作。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    drawRichText(text?: string, position?: PlusNativeObjPosition, styles?: PlusNativeObjRichTextStyles, id?: string): void;
    /**
     * 绘制输入框
     * 在当前View控件之上绘制输入框。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    drawInput(position?: PlusNativeObjPosition, styles?: PlusNativeObjInputStyles, id?: string): void;
    /**
     * 获取编辑框的焦点状态
     * 通过id查找到指定的编辑框，获取其焦点状态。
     * 	如果指定的id无效则返回null。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    getInputFocusById(id?: string): boolean;
    /**
     * 获取编辑框的内容
     * 通过id查找到指定的编辑框，获取其输入的字符串。
     * 	如果指定的id无效则返回null。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    getInputValueById(id?: string): string;
    /**
     * 重置view控件显示内容
     * 清除调用drawBitmap、drawText方法绘制的内容，将View控件重置为空内容（透明不可见）。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    reset(): void;
    /**
     * 恢复View控件显示内容
     * 恢复调用animate方法改变View控件的内容，更新至动画前的内容。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    restore(): void;
    /**
     * 显示View控件
     * 将View控件显示到屏幕，显示在所有Webview窗口之上。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    show(): void;
    /**
     * 设置编辑框的焦点状态
     * 通过id查找到指定的编辑框，并设置编辑框的焦点状态。
     * 	如果指定的id无效则操作无效。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    setInputFocusById(id?: string, focusable?: boolean): string;
    /**
     * 设置View控件的样式
     * 动态更新View控件样式。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    setStyle(styles?: PlusNativeObjViewStyles): void;
    /**
     * 指定监听触屏事件区域
     * 当调用addEventListener监听View控件事件时，可调用此方法限定监听事件的区域，仅当用户触屏操作在指定区域时才触发监听事件。
     * 	非限定监听事件的区域则不拦截，透传给其它窗口处理。
     * 	注意：此操作覆盖之前设置的区域。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    setTouchEventRect(rect?: PlusNativeObj []): void;
    /**
     * 隐藏View控件
     * 将View控件从屏幕隐藏，如果View控件未显示则不做任何操作。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    hide(): void;
    /**
     * 是否拦截View控件的触屏事件
     * 设置为拦截后View控件上的触屏事件不再传递（即不透传），否则触屏事件将继续传递给View控件下的其它窗口处理（即透传）。
     * 	注意：View控件默认拦截触屏事件（不透传）。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    interceptTouchEvent(intercept?: boolean): void;
    /**
     * 获取View控件的显示状态
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    isVisible(): boolean;
}

/**
 * View控件动画参数
 * 指定动画的类型、持续时间等信息。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
 */
interface PlusNativeObjViewAnimationOptions {
    /**
     * 动画类型
     * 可取值："shrink" - 从上到下分块收缩清除窗口动画。
     * - shrink: 从上到下分块清除动画
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    type?: 'shrink';
    /**
     * 动画持续时间
     * 单位为毫秒，默认值为200ms。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    duration?: number;
    /**
     * 动画帧数
     * 必须为大于0的整数，默认值为12。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    frames?: number;
    /**
     * 动画作用区域
     * 支持以下属性：
     * 	top - 区域距离控件顶部的偏移量，属性值可取像素值（如"100px"），百分比（如"10%"，相对于控件的高度）,默认值为'0px'；
     * 	bottom - 区域距离控件底部的偏移量，属性值可取像素值（如"100px"），百分比（如"10%"，相对于控件的高度）,默认值为'0px'；
     * 	left - 区域距离控件左侧的偏移量，属性值可取像素值（如"100px"），百分比（如"10%"，相对于控件的宽度）,默认值为'0px'；
     * 	right - 区域距离控件右侧的偏移量，属性值可取像素值（如"100px"），百分比（如"10%"，相对于控件的宽度）,默认值为'0px'。
     * 	如“{top:'44px',bottom:'48px'}”。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    region?: PlusNativeObjRect;
}

/**
 * View控件绘制元素参数
 * 指定绘制图片、矩形区域、文本内容等信息。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
 */
interface PlusNativeObjViewDrawTagStyles {
    /**
     * 绘制操作标识
     * 可通过view对象的drawBitmap/drawRect/drawText/clearRect方法进行更新。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    id?: string;
    /**
     * 绘制操作类型
     * 可取值：
     * 	"img" - 绘制图片，与drawBitmap操作一致，此时id、src、position、sprite属性值有效；
     * 	"rect" - 绘制矩形区域，与drawRect操作一致，此时id、color、position、rectStyles属性值有效；
     * 	"font" - 绘制文本内容，与drawText操作一致，此时id、position、text、textStyles属性值有效；
     * 	"richtext" - 绘制富文本内容，与drawRichText操作一致，此时id、position、text、richTextStyles属性值有效；
     * 	"input" - 绘制输入框内容，此时id、position、inputStyles属性值有效。
     * - img: 绘制图片
     * - rect: 绘制矩形区域
     * - font: 绘制文本内容
     * - richtext: 绘制富文本内容
     * - input: 绘制输入框内容
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    tag?: 'img' | 'rect' | 'font' | 'richtext' | 'input';
    /**
     * 矩形区域颜色
     * 不推荐使用（推荐使用rectStyles），可取值：
     * 	"#RRGGBB"格式字符串，如红色为"#FF0000"。
     * 	"rgba(R,G,B,A)"，其中R/G/B分别代表红色值/绿色值/蓝色值，正整数类型，取值范围为0-255，A为透明度，浮点数类型，取值范围为0-1（0为全透明，1为不透明），如"rgba(255,0,0,0.5)"，表示红色半透明。
     * 	当tag属性值为"rect"时有效，用于指定矩形区域颜色，默认值为"#FFFFFF"（白色）。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    color?: string;
    /**
     * 绘制输入框的样式
     * 当tag属性值为"input"时有效，用于指定绘制输入框的样式、大小位置等信息。，
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    inputStyles?: PlusNativeObjInputStyles;
    /**
     * 绘制内容区域
     * 当tag属性值为"img"时，用于指定绘制图片的目标区域；
     * 	当tag属性值为"rect"时，用于指定绘制的矩形区域；
     * 	当tag属性值为"font"时，用于指定绘制文本的目标区域，此时height属性值支持设置为"wrap_content"，表示文本高度根据内容自动计算，此时通过top来定位文本绘制的起始位置。
     * 	相对于View控件的区域信息，默认值为{top:'0px',left:'0px',width:'100%',height:'100%'}。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    position?: PlusNativeObjPosition;
    /**
     * 绘制区域的样式
     * 当tag属性值为"rect"时有效，用于指定绘制区域的样式、填充颜色、圆角大小等信息。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    rectStyles?: PlusNativeObjRectStyles;
    /**
     * 绘制的图片资源
     * 当tag属性值为"img"时有效，可以是图片资源路径（字符串类型）或者图片对象（plus.nativeObj.Bitmap对象）。
     * 	src路径支持gif图片，但设置的图片路径文件使用".gif"后缀时则认为是gif图片，如"_www/loading.gif"。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    src?: string;
    /**
     * 图片源的绘制区域
     * 当tag属性值为"img"时有效，用于指定图片源的绘制区域，相对于图片的区域信息，默认值为{top:'0px',left:'0px',width:'100%',height:'100%'}。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    sprite?: PlusNativeObjPosition;
    /**
     * 绘制的文本内容
     * 当tag属性值为"font"时有效，用于保存绘制的文本内容。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    text?: string;
    /**
     * 绘制文本的样式
     * 当tag属性值为"font"时有效，用于指定绘制文本内容的字体大小、字体颜色、字体类型等信息。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    textStyles?: PlusNativeObjTextStyles;
    /**
     * 绘制富文本的样式
     * 当tag属性值为"richtext"时有效，用于指定绘制富文本内容的默认字体颜色、字体类型等信息。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    richTextStyles?: PlusNativeObjRichTextStyles;
}

/**
 * View控件事件
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
 */
interface PlusNativeObjViewEvents {
    /**
     * 双击事件
     * 双击屏幕时触发。
     * 	注意：如果将View控件设置为不拦截触屏事件（view.interceptTouchEvent(false)）则不会触发此事件。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    doubleclick?: string;
    /**
     * 点击事件
     * 当手指点击屏幕时触发。
     * 	注意：如果将View控件设置为不拦截触屏事件（view.interceptTouchEvent(false)）则不会触发此事件。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    click?: string;
    /**
     * 开始触屏事件
     * 当手指触摸屏幕时候触发。
     * 	注意：如果将View控件设置为不拦截触屏事件（view.interceptTouchEvent(false)）则不会触发此事件。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    touchstart?: string;
    /**
     * 触摸滑屏事件
     * 当手指在屏幕上滑动的时候连续地触发。
     * 	注意：如果将View控件设置为不拦截触屏事件（view.interceptTouchEvent(false)）则不会触发此事件。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    touchmove?: string;
    /**
     * 结束触屏事件
     * 当手指从屏幕上离开的时候触发。
     * 	注意：如果将View控件设置为不拦截触屏事件（view.interceptTouchEvent(false)）则不会触发此事件。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    touchend?: string;
}

/**
 * JSON对象，View控件的系统状态栏区域样式
 * 仅在应用设置为沉浸式状态栏样式下有效，非沉浸式状态栏样式下忽略此属性。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
 */
interface PlusNativeObjViewStatusbarStyles {
    /**
     * 系统状态栏区域背景颜色
     * 颜色值格式为"#RRGGBB"，如"#FF0000"表示为红色背景，默认值为应用manifest.json中plus-&gt;statusbar-&gt;background属性配置的值。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    background?: string;
}

/**
 * View控件样式
 * 包括位置、大小等信息等，其中位置信息相对于父容器控件进行计算。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
 */
interface PlusNativeObjViewStyles {
    /**
     * 区域背景颜色
     * 可取值：
     * 	#RRGGBB"格式字符串，如"#FF0000"表示绘制红色区域；
     * 	"rgba(R,G,B,A)"，其中R/G/B分别代表红色值/绿色值/蓝色值，正整数类型，取值范围为0-255，A为透明度，浮点数类型，取值范围为0-1（0为全透明，1为不透明），如"rgba(255,0,0,0.5)"，表示红色半透明。 默认值为"#FFFFFF"（白色）。 "rgba(R,G,B,A)"，其中R/G/B分别代表红色值/绿色值/蓝色值，正整数类型，取值范围为0-255，A为透明度，浮点数类型，取值范围为0-1（0为全透明，1为不透明），如"rgba(255,0,0,0.5)"，表示红色半透明。 默认值为"#FFFFFF"（白色）。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    backgroundColor?: string;
    /**
     * View控件垂直向上的偏移量
     * 现对于父容器底部的距离，可取值：
     * 		像素值，如"100px"；
     * 		百分比，如"10%"，相对于父容器的高度，如果没有父容器则相对于屏幕高度。
     * 	当设置了top和height值时，忽略此属性值；
     * 	未设置height值时，可通过top和bottom属性值来确定View控件的高度。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    bottom?: string;
    /**
     * View控件的停靠方式
     * 仅当View控件添加到Webview窗口对象中并且position属性值设置为"dock"时才生效，此时View控件挤压Webview窗口的大小。
     * 	可取值：
     * 		"top"，控件停靠则页面顶部；
     * 		"bottom"，控件停靠在页面底部；
     * 		"right"，控件停靠在页面右侧；
     * 		"left"，控件停靠在页面左侧。
     * 	默认值为"top"。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    dock?: string;
    /**
     * 区域的高度
     * 可取值：
     * 		像素值，如"100px"；
     * 		百分比，如"10%"，相对于父容器的高度，如果没有父容器则相对于屏幕高度；
     * 		内容自适应，如"wrap_content"，根据内容计算控件的高度。
     * 	默认值为"100%"。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    height?: string;
    /**
     * 区域左上角的水平偏移量
     * 可取值：
     * 		像素值，如"100px"；
     * 		百分比，如"10%"，相对于父控件的宽度；
     * 		自动计算，如"auto"，根据width值自动计算，相对于父控件水平居中。
     * 	默认值为"0px"。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    left?: string;
    /**
     * View控件的不透明度
     * 取值范围为0-1，0为全透明，1为不透明，默认值为1，即不透明。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    opacity?: number;
    /**
     * View控件的排版方式
     * 仅当View控件添加到Webview窗口对象中时才生效。
     * 	可取值：
     * 	"static"，View控件在页面中正常定位，如果页面存在滚动条则随窗口内容滚动；
     * 	"absolute"，Veiw控件在页面中绝对定位，如果页面存在滚动条不随窗口内容滚动；
     * 	"dock"，View控件在页面中停靠，停靠的位置由dock属性值决定。
     * 	默认值为"absolute"。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    position?: string;
    /**
     * View控件的状态栏样式
     * 仅在应用设置为沉浸式状态栏样式下有效，设置此属性后将自动保留系统状态栏区域不被View控件占用（即View控件非沉浸式样式显示）。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    statusbar?: PlusNativeObjViewStatusbarStyles;
    /**
     * View控件左上角的垂直偏移量
     * 可取值：像素值，如"100px"；百分比，如"10%"，相对于父控件的高度；自动计算，如"auto",根据height值自动计算，相对于父控件垂直居中。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    top?: string;
    /**
     * 区域的宽度
     * 可取值：像素值，如"100px";百分比，如"10%"，相对于父控件的宽度。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeobj.html](http://www.html5plus.org/doc/zh_cn/nativeobj.html)
     */
    width?: string;
}

/**
 * nativeUI管理系统原生界面，可用于弹出系统原生提示对话框窗口、时间日期选择对话框、等待对话框等。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/nativeui.html](http://www.html5plus.org/doc/zh_cn/nativeui.html)
 */
interface PlusNativeUI {
    /**
     * JSON对象，原生选择按钮框上按钮的样式参数
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeui.html](http://www.html5plus.org/doc/zh_cn/nativeui.html)
     */
    ActionButtonStyles?: PlusNativeUIActionButtonStyles;
    /**
     * JSON对象，原生选择按钮框的样式参数
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeui.html](http://www.html5plus.org/doc/zh_cn/nativeui.html)
     */
    ActionSheetStyles?: PlusNativeUIActionSheetStyles;
    /**
     * 确认对话框的参数
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeui.html](http://www.html5plus.org/doc/zh_cn/nativeui.html)
     */
    ConfirmOptions?: PlusNativeUIConfirmOptions;
    /**
     * JSON对象，图片预览的参数
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeui.html](http://www.html5plus.org/doc/zh_cn/nativeui.html)
     */
    PreviewImageOptions?: PlusNativeUIPreviewImageOptions;
    /**
     * 日期选择对话框的参数
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeui.html](http://www.html5plus.org/doc/zh_cn/nativeui.html)
     */
    PickDateOption?: PlusNativeUIPickDateOption;
    /**
     * JSON对象，时间选择对话框的参数
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeui.html](http://www.html5plus.org/doc/zh_cn/nativeui.html)
     */
    PickTimeOption?: PlusNativeUIPickTimeOption;
    /**
     * 系统原生界面基类对象
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeui.html](http://www.html5plus.org/doc/zh_cn/nativeui.html)
     */
    NativeUIObj?: PlusNativeUINativeUIObj;
    /**
     * 系统等待对话框对象
     * 从NativeUIObj对象继承而来，通过plus.nativeUI.showWaiting方法创建时返回。
     * 	用于控制系统样式等待对话框的操作，如关闭、设置标题内容等。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeui.html](http://www.html5plus.org/doc/zh_cn/nativeui.html)
     */
    WaitingObj?: PlusNativeUIWaitingObj;
    /**
     * JSON对象，原生等待对话框的参数
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeui.html](http://www.html5plus.org/doc/zh_cn/nativeui.html)
     */
    WaitingOptions?: PlusNativeUIWaitingOptions;
    /**
     * JSON对象，原生等待对话框上loading图标自定义样式
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeui.html](http://www.html5plus.org/doc/zh_cn/nativeui.html)
     */
    WaitingLoadingOptions?: PlusNativeUIWaitingLoadingOptions;
    /**
     * JSON对象，系统提示消息框要设置的参数
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeui.html](http://www.html5plus.org/doc/zh_cn/nativeui.html)
     */
    ToastOptions?: PlusNativeUIToastOptions;
    /**
     * 弹出系统选择按钮框
     * 从底部动画弹出系统样式选择按钮框，可设置选择框的标题、按钮文字等。
     * 	弹出的提示框为非阻塞模式，用户点击选择框上的按钮后关闭，并通过actionsheetCallback回调函数通知用户选择的按钮。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeui.html](http://www.html5plus.org/doc/zh_cn/nativeui.html)
     */
    actionSheet(actionsheetStyle?: PlusNativeUIActionSheetStyles, actionsheetCallback?: (result: any) => void): PlusNativeUINativeUIObj;
    /**
     * 弹出系统提示对话框
     * 创建并显示系统样式提示对话框，可设置提示对话框的标题、内容、按钮文字等。
     * 	弹出的提示对话框为非阻塞模式，用户点击提示对话框上的按钮后关闭，并通过alertCB回调函数通知对话框已关闭。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeui.html](http://www.html5plus.org/doc/zh_cn/nativeui.html)
     */
    alert(message?: string, alertCB?: (result: any) => void, title?: string, buttonCapture?: string): void;
    /**
     * 弹出系统确认对话框
     * 创建并显示系统样式确认对话框，可设置确认对话框的标题、内容、按钮数目及其文字。
     * 	弹出的确认对话框为非阻塞模式，用户点击确认对话框上的按钮后关闭，并通过confirmCB回调函数通知用户点击的按钮索引值。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeui.html](http://www.html5plus.org/doc/zh_cn/nativeui.html)
     */
    confirm(message?: string, confirmCB?: (result: any) => void, options?: PlusNativeUIConfirmOptions, buttons?: any []): void;
    /**
     * 关闭系统等待对话框
     * 关闭已经显示的所有系统样式等待对话框，触发Waiting对象的onclose事件。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeui.html](http://www.html5plus.org/doc/zh_cn/nativeui.html)
     */
    closeWaiting(): void;
    /**
     * 关闭自动消失的提示消息
     * 关闭已经显示的所有自动消失的提示框。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeui.html](http://www.html5plus.org/doc/zh_cn/nativeui.html)
     */
    closeToast(): void;
    /**
     * 预览图片
     * 创建并显示全屏图片预览界面，用户点击图片或返回键退出预览界面。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeui.html](http://www.html5plus.org/doc/zh_cn/nativeui.html)
     */
    previewImage(urls?: any [], options?: PlusNativeUIPreviewImageOptions): void;
    /**
     * 显示系统等待对话框
     * 创建并显示系统样式等待对话框，并返回等待对话框对象Waiting，显示后需调用其close方法进行关闭。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeui.html](http://www.html5plus.org/doc/zh_cn/nativeui.html)
     */
    showWaiting(title?: string, options?: PlusNativeUIWaitingOptions): PlusNativeUIWaitingObj;
    /**
     * 弹出系统日期选择对话框
     * 创建并显示系统样式日期选择对话框，可进行日期的选择。
     * 	用户操作确认后通过successCB回调函数返回用户选择的日期，若用户取消选择则通过errorCB回调。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeui.html](http://www.html5plus.org/doc/zh_cn/nativeui.html)
     */
    pickDate(successCB?: (result: any) => void, errorCB?: (result: any) => void, options?: PlusNativeUIPickDateOption): void;
    /**
     * 弹出系统时间选择对话框
     * 创建并弹出系统样式时间选择对话框，可进行时间的选择。
     * 	用户操作确认后通过successCB回调函数返回用户选择的时间，若用户取消选择则通过errorCB回调。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeui.html](http://www.html5plus.org/doc/zh_cn/nativeui.html)
     */
    pickTime(successCB?: (result: any) => void, errorCB?: (result: any) => void, options?: PlusNativeUIPickTimeOption): void;
    /**
     * 弹出系统输入对话框
     * 创建并显示系统样式输入对话框，可设置输入对话框的标题、内容、提示输入信息、按钮数目及其文字。
     * 	弹出的输入对话框为非阻塞模式，其中包含编辑框供用户输入内容，用户点击输入对话框上的按钮后自动关闭，并通过promptCB回调函数返回用户点击的按钮及输入的内容。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeui.html](http://www.html5plus.org/doc/zh_cn/nativeui.html)
     */
    prompt(message?: string, promptCB?: (result: any) => void, title?: string, tip?: string, buttons?: any []): void;
    /**
     * 显示自动消失的提示消息
     * 创建并显示系统样式提示消息，弹出的提示消息为非阻塞模式，显示指定时间后自动消失。
     * 	提示消息显示时间可通过options的duration属性控制，长时间提示消息显示时间约为3.5s，短时间提示消息显示时间约为2s。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeui.html](http://www.html5plus.org/doc/zh_cn/nativeui.html)
     */
    toast(message?: string, options?: PlusNativeUIToastOptions): void;
}

/**
 * JSON对象，原生选择按钮框上按钮的样式参数
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/nativeui.html](http://www.html5plus.org/doc/zh_cn/nativeui.html)
 */
interface PlusNativeUIActionButtonStyles {
    /**
     * 按钮上显示的文字颜色
     * 可取值：
     * 	"#RRGGBB"格式字符串，如"#FF0000"表示文字颜色为红色；
     * 	"rgba(R,G,B,A)"，其中R/G/B分别代表红色值/绿色值/蓝色值，正整数类型，取值范围为0-255，A为透明度，浮点数类型，取值范围为0-1（0为全透明，1为不透明），如"rgba(255,0,0,0.5)"，表示红色半透明。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeui.html](http://www.html5plus.org/doc/zh_cn/nativeui.html)
     */
    color?: string;
    /**
     * 按钮上显示的文字内容
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeui.html](http://www.html5plus.org/doc/zh_cn/nativeui.html)
     */
    title?: string;
    /**
     * 按钮的样式
     * 可取值：
     * 	"destructive" - 表示警示按钮样式，默认文字颜色为红色；
     * 	"default" - 表示默认按钮样式。
     * 	默认值为"default"。
     * - destructive: 
     * 	警示按钮样式。
     * 								
     * - default: 
     * 	默认按钮样式。
     * 								
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeui.html](http://www.html5plus.org/doc/zh_cn/nativeui.html)
     */
    style?: 'destructive' | 'default';
}

/**
 * JSON对象，原生选择按钮框的样式参数
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/nativeui.html](http://www.html5plus.org/doc/zh_cn/nativeui.html)
 */
interface PlusNativeUIActionSheetStyles {
    /**
     * 选择按钮框的标题
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeui.html](http://www.html5plus.org/doc/zh_cn/nativeui.html)
     */
    title?: string;
    /**
     * 取消按钮上显示的文字内容
     * 不设置此属性，则不显示取消按钮。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeui.html](http://www.html5plus.org/doc/zh_cn/nativeui.html)
     */
    cancel?: string;
    /**
     * 选择框上的按钮，ActionButtonStyles对象数组
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeui.html](http://www.html5plus.org/doc/zh_cn/nativeui.html)
     */
    buttons?: PlusNativeUI [];
}

/**
 * 确认对话框的参数
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/nativeui.html](http://www.html5plus.org/doc/zh_cn/nativeui.html)
 */
interface PlusNativeUIConfirmOptions {
    /**
     * 确认对话框显示的标题
     * 如果不设置此属性值，则不显示标题。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeui.html](http://www.html5plus.org/doc/zh_cn/nativeui.html)
     */
    title?: string;
    /**
     * 确认对话框上显示的按钮
     * 字符串数组，每项对应在确认对话框上显示一个按钮，用户点击后通过confirmCB返回用户点击按钮的在数组中的索引值。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeui.html](http://www.html5plus.org/doc/zh_cn/nativeui.html)
     */
    buttons?: any [];
    /**
     * 对话框在屏幕中的垂直分享对齐方式
     * 可取值：
     * 		"top" - 表示垂直居顶对齐；
     * 		"center" - 表示垂直居中对齐；
     * 		"bottom" - 表示垂直居底对齐。
     * 	默认值为"center"（垂直居中对齐）。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeui.html](http://www.html5plus.org/doc/zh_cn/nativeui.html)
     */
    verticalAlign?: string;
}

/**
 * JSON对象，图片预览的参数
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/nativeui.html](http://www.html5plus.org/doc/zh_cn/nativeui.html)
 */
interface PlusNativeUIPreviewImageOptions {
    /**
     * 图片预览的背景颜色
     * 颜色值格式为"#RRGGBB"，如"#FF0000"表示为红色背景。
     * 	默认值为黑色（"#000000"）。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeui.html](http://www.html5plus.org/doc/zh_cn/nativeui.html)
     */
    background?: string;
    /**
     * 默认显示图片的索引值
     * 索引值从0开始，默认值为0。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeui.html](http://www.html5plus.org/doc/zh_cn/nativeui.html)
     */
    current?: number;
    /**
     * 图片指示器样式
     * 可取值：
     * 		"default" - 默认指示器（底部圆点样式）；
     * 		"number" - 顶部数字指示器（顶部居中显示，文字为%当前图片索引值（从1开始）%/%图片总数%）；
     * 		"none" - 不显示指示器。
     * 	默认值为"default"。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeui.html](http://www.html5plus.org/doc/zh_cn/nativeui.html)
     */
    indicator?: string;
    /**
     * 是否可循环预览
     * 可取值：
     * 		"true" - 支持循环预览；
     * 		"false" - 不支持循环预览。
     * 	默认值为"false"。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeui.html](http://www.html5plus.org/doc/zh_cn/nativeui.html)
     */
    loop?: boolean;
}

/**
 * 日期选择对话框的参数
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/nativeui.html](http://www.html5plus.org/doc/zh_cn/nativeui.html)
 */
interface PlusNativeUIPickDateOption {
    /**
     * 日期选择对话框显示的标题
     * 如果未设置标题，则默认显示标题为当前选择的日期。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeui.html](http://www.html5plus.org/doc/zh_cn/nativeui.html)
     */
    title?: string;
    /**
     * 日期选择对话框默认显示的日期
     * 如果未设置默认显示的日期，则显示当前的日期。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeui.html](http://www.html5plus.org/doc/zh_cn/nativeui.html)
     */
    date?: Date;
    /**
     * 日期选择对话框可选择的最小日期
     * Date类型对象，如果未设置可选择的最小日期，则使用系统默认可选择的最小日期值。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeui.html](http://www.html5plus.org/doc/zh_cn/nativeui.html)
     */
    minDate?: Date;
    /**
     * 日期选择对话框可选择的最大日期
     * Date类型对象，如果未设置可选择的最大日期，则使用系统默认可选择的最大日期值。
     * 	其值必须大于minDate设置的值，否则使用系统默认可选择的最大日期值。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeui.html](http://www.html5plus.org/doc/zh_cn/nativeui.html)
     */
    maxDate?: Date;
    /**
     * 时间选择对话框弹出指示区域
     * JSON类型对象，格式如{top:10;left:10;width:200;height:200;}，所有值为像素值，其值为相对于容器Webview的位置。
     * 	如未设置此值，默认在屏幕居中显示。仅在iPad上有效，其它设备忽略此值。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeui.html](http://www.html5plus.org/doc/zh_cn/nativeui.html)
     */
    popover?: any;
}

/**
 * JSON对象，时间选择对话框的参数
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/nativeui.html](http://www.html5plus.org/doc/zh_cn/nativeui.html)
 */
interface PlusNativeUIPickTimeOption {
    /**
     * 时间选择对话框默认显示的时间
     * 如果未设置标题，则默认显示标题为当前选择的时间。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeui.html](http://www.html5plus.org/doc/zh_cn/nativeui.html)
     */
    time?: Date;
    /**
     * 时间选择对话框显示的标题
     * 如果未设置标题，则默认显示标题为当前选择的时间。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeui.html](http://www.html5plus.org/doc/zh_cn/nativeui.html)
     */
    title?: string;
    /**
     * 是否24小时制模式
     * true表示使用24小时制模式显示，fale表示使用12小时制模式显示，默认值为true。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeui.html](http://www.html5plus.org/doc/zh_cn/nativeui.html)
     */
    is24Hour?: boolean;
    /**
     * 日期选择对话框弹出指示区域
     * JSON类型对象，格式如{top:10;left:10;width:200;height:200;}，所有值为像素值，其值相对于容器webview的位置。
     * 	如未设置此值，默认在屏幕居中显示。仅在iPad上有效，其它设备忽略此值。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeui.html](http://www.html5plus.org/doc/zh_cn/nativeui.html)
     */
    popover?: any;
}

/**
 * 系统原生界面基类对象
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/nativeui.html](http://www.html5plus.org/doc/zh_cn/nativeui.html)
 */
interface PlusNativeUINativeUIObj {
    /**
     * 关闭显示的系统原生界面
     * 调用plus.nativeUI.actionSheet方法创建并显示系统界面后，可通过其close方法将原生界面关闭。
     * 	此情况下触发界面关闭回调函数参数的index属性值为-1。
     * 	注意：一个系统原生界面只能关闭一次，多次调用将无任何作用。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeui.html](http://www.html5plus.org/doc/zh_cn/nativeui.html)
     */
    close(): void;
}

/**
 * 系统等待对话框对象
 * 从NativeUIObj对象继承而来，通过plus.nativeUI.showWaiting方法创建时返回。
 * 	用于控制系统样式等待对话框的操作，如关闭、设置标题内容等。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/nativeui.html](http://www.html5plus.org/doc/zh_cn/nativeui.html)
 */
interface PlusNativeUIWaitingObj {
    /**
     * 等待对话框关闭事件
     * 等待框关闭时触发，当调用close方法或用户点击返回按钮导致等待框关闭时触发。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeui.html](http://www.html5plus.org/doc/zh_cn/nativeui.html)
     */
    onclose?: () => void;
    /**
     * 设置等待对话框上显示的文字内容
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeui.html](http://www.html5plus.org/doc/zh_cn/nativeui.html)
     */
    setTitle(title?: string): void;
    /**
     * 关闭显示的系统等待对话框
     * 调用plus.nativeUI.showWaiting方法创建并显示系统等待界后，可通过其close方法将原生等待控件关闭。
     * 	一个系统等待对话框只能关闭一次，多次调用将无任何作用。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeui.html](http://www.html5plus.org/doc/zh_cn/nativeui.html)
     */
    close(): void;
}

/**
 * JSON对象，原生等待对话框的参数
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/nativeui.html](http://www.html5plus.org/doc/zh_cn/nativeui.html)
 */
interface PlusNativeUIWaitingOptions {
    /**
     * 等待框背景区域的宽度
     * 值支持像素值（"500px"）或百分比（"50%"），百分比相对于屏幕的宽计算，如果不设置则根据内容自动计算合适的宽度。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeui.html](http://www.html5plus.org/doc/zh_cn/nativeui.html)
     */
    width?: string;
    /**
     * 等待框背景区域的高度
     * 值支持像素绝对值（"500px"）或百分比（"50%"），如果不设置则根据内容自动计算合适的高度。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeui.html](http://www.html5plus.org/doc/zh_cn/nativeui.html)
     */
    height?: string;
    /**
     * 等待框中文字的颜色
     * 颜色值支持(参考CSS颜色规范)：颜色名称(参考CSS Color Names)/十六进制值/rgb值/rgba值，默认值为白色。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeui.html](http://www.html5plus.org/doc/zh_cn/nativeui.html)
     */
    color?: string;
    /**
     * 等待框中文字的字体大小
     * 如"14px"表示使用14像素高的文字，未设置则使用系统默认字体大小。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeui.html](http://www.html5plus.org/doc/zh_cn/nativeui.html)
     */
    size?: string;
    /**
     * 等待对话框中标题文字的水平对齐方式
     * 对齐方式可选值包括："left"：水平居左对齐显示，"center"：水平居中对齐显示，"right"：水平居右对齐显示。默认值为水平居中对齐显示，即"center"。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeui.html](http://www.html5plus.org/doc/zh_cn/nativeui.html)
     */
    textalign?: string;
    /**
     * 等待对话框的内边距
     * 值支持像素值（"10px"）和百分比（"5%"），百分比相对于屏幕的宽计算，默认值为"3%"。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeui.html](http://www.html5plus.org/doc/zh_cn/nativeui.html)
     */
    padding?: string;
    /**
     * 等待对话框显示区域的背景色
     * 背景色的值支持(参考CSS颜色规范)：颜色名称(参考CSS Color Names)/十六进制值/rgb值/rgba值，默认值为rgba(0,0,0,0.8)。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeui.html](http://www.html5plus.org/doc/zh_cn/nativeui.html)
     */
    background?: string;
    /**
     * 等待对话框样式
     * 可取值"black"、"white"，black表示等待框为黑色雪花样式，通常在背景主色为浅色时使用；white表示等待框为白色雪花样式，通常在背景主色为深色时使用。
     * 	仅在iOS平台有效，其它平台忽略此值，未设置时默认值为white。
     * - black: 黑色雪花样式，适合浅色界面使用
     * - white: 白色雪花样式，适合深色界面使用
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeui.html](http://www.html5plus.org/doc/zh_cn/nativeui.html)
     */
    style?: 'black' | 'white';
    /**
     * 等待框是否模态显示
     * 模态显示时用户不可操作直到等待对话框关闭，否则用户在等待对话框显示时也可操作下面的内容，未设置时默认为true。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeui.html](http://www.html5plus.org/doc/zh_cn/nativeui.html)
     */
    modal?: boolean;
    /**
     * 等待框显示区域的圆角
     * 值支持像素值（"10px"），未设置时使用默认值"10px"。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeui.html](http://www.html5plus.org/doc/zh_cn/nativeui.html)
     */
    round?: number;
    /**
     * 点击等待显示区域是否自动关闭
     * true表示点击等待对话框显示区域时自动关闭，false则不关闭，未设置时默认值为false。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeui.html](http://www.html5plus.org/doc/zh_cn/nativeui.html)
     */
    padlock?: boolean;
    /**
     * 返回键处理方式
     * 可取值"none"表示截获处理返回键，但不做任何响应；"close"表示截获处理返回键并关闭等待框；"transmit"表示不截获返回键，向后传递给Webview窗口继续处理（与未显示等待框的情况一致）。
     * - none: 截获返回键，不做任何响应
     * - close: 截获返回键并关闭等待框
     * - transmit: 不截获返回键，继续传递给Webview窗口
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeui.html](http://www.html5plus.org/doc/zh_cn/nativeui.html)
     */
    back?: 'none' | 'close' | 'transmit';
    /**
     * 自定义等待框上loading图标样式
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeui.html](http://www.html5plus.org/doc/zh_cn/nativeui.html)
     */
    loading?: PlusNativeUIWaitingLoadingOptions;
}

/**
 * JSON对象，原生等待对话框上loading图标自定义样式
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/nativeui.html](http://www.html5plus.org/doc/zh_cn/nativeui.html)
 */
interface PlusNativeUIWaitingLoadingOptions {
    /**
     * loading图标显示样式
     * 可取值：
     * 	"block"表示图标与文字分开两行显示，上面显示loading图标，下面显示文字；
     * 	"inline"表示loading图标与文字在同一行显示，左边显示loading图标，右边显示文字；
     * 	"none"表示不显示loading图标；
     * - block: 
     * 	loading图标与文字分开两行显示，上面显示loading图标，下面显示文字。
     * 								
     * - inline: 
     * 	loading图标与文字在同一行显示，左边显示loading图标，右边显示文字。
     * 								
     * - none: 
     * 	不显示loading图标。
     * 								
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeui.html](http://www.html5plus.org/doc/zh_cn/nativeui.html)
     */
    display?: 'block' | 'inline' | 'none';
    /**
     * loading图标高度
     * 设置loading图标的高度（宽度等比率缩放），取值类型：像素值，如"14px"表示14像素高。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeui.html](http://www.html5plus.org/doc/zh_cn/nativeui.html)
     */
    height?: string;
    /**
     * loading图标路径
     * 自定义loading图标的路径，png格式，并且必须是本地资源地址；
     * 	loading图要求宽是高的整数倍，显示等待框时按照图片的高横向截取每帧刷新。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeui.html](http://www.html5plus.org/doc/zh_cn/nativeui.html)
     */
    icon?: string;
    /**
     * loading图每帧刷新间隔
     * 单位为ms（毫秒），默认值为100ms。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeui.html](http://www.html5plus.org/doc/zh_cn/nativeui.html)
     */
    interval?: number;
}

/**
 * JSON对象，系统提示消息框要设置的参数
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/nativeui.html](http://www.html5plus.org/doc/zh_cn/nativeui.html)
 */
interface PlusNativeUIToastOptions {
    /**
     * 提示消息框在屏幕中的水平位置
     * 可选值为"left"、"center"、"right"，分别为水平居左、居中、居右，未设置时默认值为"center"。
     * - left: 水平居左对齐
     * - center: 水平居中对齐
     * - right: 水平居左对齐
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeui.html](http://www.html5plus.org/doc/zh_cn/nativeui.html)
     */
    align?: 'left' | 'center' | 'right';
    /**
     * 提示消息框显示的时间
     * 可选值为"long"、"short"，值为"long"时显示时间约为3.5s，值为"short"时显示时间约为2s，未设置时默认值为"short"。
     * - long: 长显示时间
     * - short: 短显示时间
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeui.html](http://www.html5plus.org/doc/zh_cn/nativeui.html)
     */
    duration?: 'long' | 'short';
    /**
     * 提示消息框上显示的图标
     * 仅支持本地图片路径。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeui.html](http://www.html5plus.org/doc/zh_cn/nativeui.html)
     */
    icon?: string;
    /**
     * 图标的宽度
     * 单位为px（逻辑像素值），默认值为图片的宽度。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeui.html](http://www.html5plus.org/doc/zh_cn/nativeui.html)
     */
    iconWidth?: string;
    /**
     * 图标的高度
     * 单位为px（逻辑像素值），默认值为图片的高度。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeui.html](http://www.html5plus.org/doc/zh_cn/nativeui.html)
     */
    iconHeight?: string;
    /**
     * 提示消息框上显示的样式
     * 可取值：
     * 	"block"表示图标与文字分两行显示，上面显示图标，下面显示文字；
     * 	"inline"表示图标与文字在同一行显示，左边显示图标，右边显示文字。
     * 	默认值为"block"。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeui.html](http://www.html5plus.org/doc/zh_cn/nativeui.html)
     */
    style?: string;
    /**
     * 提示消息框上显示的文本类型
     * 可取值：
     * 		"text" - 显示的消息内容为文本字符串；
     * 		"richtext" - 显示的消息内容为富文本内容。
     * 	默认值为"text"。
     * 	当type为"text"时，富文本使用html的部分标签，具体标签如下：
     * 	图片标签&lt;img src="图片资源url地址" width="图片显示的宽度" height="图片显示的高度" onclick="console.log('clicked img')"&gt;&lt;/img&gt;；
     * 	字体标签&lt;font color="字体颜色"&gt;&lt;/font&gt;，内容在一行显示不下时自动换行，行高默认为字体的1.2倍；
     * 	换行标签&lt;br/&gt;；
     * 	链接标签&lt;a onclick="console.log('clicked a')"&gt;链接地址&lt;/a&gt;。
     * 	如示例“&lt;img onclick="console.log('clicked img')" src="http://img-cdn-qiniu.dcloud.net.cn/icon2.png"/&gt;&lt;a onclick="console.log(clicked a)"&gt;链接地址&lt;/a&gt;”。
     * - text: 文本字符串
     * - richtext: 富文本内容
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeui.html](http://www.html5plus.org/doc/zh_cn/nativeui.html)
     */
    type?: 'text' | 'richtext';
    /**
     * 富文本样式
     * 当type属性值为"richtext"时有效，用于定义富文本的样式，如其文本对齐方式、使用的字体等。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeui.html](http://www.html5plus.org/doc/zh_cn/nativeui.html)
     */
    richTextStyle?: PlusNativeObjRichTextStyles;
    /**
     * 提示消息在屏幕中的垂直位置
     * 可选值为"top"、"center"、"bottom"，分别为垂直居顶、居中、居底，未设置时默认值为"bottom"。
     * - top: 垂直居顶对齐
     * - center: 垂直居中对齐
     * - bottom: 垂直居底对齐
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/nativeui.html](http://www.html5plus.org/doc/zh_cn/nativeui.html)
     */
    verticalAlign?: 'top' | 'center' | 'bottom';
}

/**
 * navigator用于管理浏览器运行环境信息
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/navigator.html](http://www.html5plus.org/doc/zh_cn/navigator.html)
 */
interface PlusNavigator {
    /**
     * 创建应用快捷方式要设置的参数
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/navigator.html](http://www.html5plus.org/doc/zh_cn/navigator.html)
     */
    ShortcutOptions?: PlusNavigatorShortcutOptions;
    /**
     * 更新应用启动界面要设置的参数
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/navigator.html](http://www.html5plus.org/doc/zh_cn/navigator.html)
     */
    SplashscreenOptions?: PlusNavigatorSplashscreenOptions;
    /**
     * 运行环境权限类型
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/navigator.html](http://www.html5plus.org/doc/zh_cn/navigator.html)
     */
    PermissionNames?: PlusNavigatorPermissionNames;
    /**
     * 检查运行环境的权限
     * 向系统检查当前程序的权限状态，不触发权限相对应的功能API的调用。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/navigator.html](http://www.html5plus.org/doc/zh_cn/navigator.html)
     */
    checkPermission(permission?: PlusNavigatorPermissionNames): string;
    /**
     * 关闭应用启动界面
     * 很多情况下，应用启动后需要一段时间加载数据，为了避免界面显示空白内容，提高用户体验效果，这时可显示启动界面。
     * 	等数据加载完成后再关闭启动界面进入应用，通常可在应用首界面加载数据完成并更新显示内容后调用此方法。
     * 	注意：HBuilder7.1版本后启动界面不调用此方法超过6秒后会自动关闭。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/navigator.html](http://www.html5plus.org/doc/zh_cn/navigator.html)
     */
    closeSplashscreen(): void;
    /**
     * 查询设备是否为刘海屏
     * 刘海屏返回true，否则返回false。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/navigator.html](http://www.html5plus.org/doc/zh_cn/navigator.html)
     */
    hasNotchInScreen(): boolean;
    /**
     * 查询应用启动界面是否已关闭
     * 如果启动界面显示返回true，否则返回false。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/navigator.html](http://www.html5plus.org/doc/zh_cn/navigator.html)
     */
    hasSplashscreen(): boolean;
    /**
     * 更新程序启动界面
     * 可设置启动界面显示的图片（仅支持本地文件路径，如果是网络资源可先通过plus.downloader.*下载到本地），
     * 	更新启动界面后程序下次启动时生效。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/navigator.html](http://www.html5plus.org/doc/zh_cn/navigator.html)
     */
    updateSplashscreen(options?: PlusNavigatorSplashscreenOptions): void;
    /**
     * 创建应用快捷方式
     * 在系统桌面创建应用的快捷方式，点击后可直接启动应用。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/navigator.html](http://www.html5plus.org/doc/zh_cn/navigator.html)
     */
    createShortcut(options?: PlusNavigatorShortcutOptions, successCallback?: (result: any) => void): void;
    /**
     * 查询是否存在应用快捷方式
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/navigator.html](http://www.html5plus.org/doc/zh_cn/navigator.html)
     */
    hasShortcut(options?: PlusNavigatorShortcutOptions, successCallback?: (result: any) => void): void;
    /**
     * 判断当前应用是否切换到后台
     * 在多应用运行环境（如流应用）中，启动一个新应用时，之前运行的应用将会自动切换到后台运行，此时plus.navigator.isBackground()返回状态只为true。
     * 	注意：此状态不是5+应用切换到系统后台的状态，而是在同一apk中同时运行多个应用时被切换到后台的状态。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/navigator.html](http://www.html5plus.org/doc/zh_cn/navigator.html)
     */
    isBackground(): boolean;
    /**
     * 判断应用当前是否全屏模式显示
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/navigator.html](http://www.html5plus.org/doc/zh_cn/navigator.html)
     */
    isFullscreen(): boolean;
    /**
     * 判断应用当前是否输出日志
     * 日志包括应用原生层内部跟踪日志（ADB、LogCat工具可获取的日志）及JS层跟踪日志（console.log输出的日志）。
     * 	开启日志在一定程度上会降低程序的性能，通常建议在正式发布时关闭日志输出，在调试时开启日志输出（此时可以通过工具ADB、LogCat获取分析日志）。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/navigator.html](http://www.html5plus.org/doc/zh_cn/navigator.html)
     */
    isLogs(): boolean;
    /**
     * 设置应用是否全屏显示
     * 设置应用在全屏模式显示时，将隐藏系统状态栏，通常游戏类应用才会设置为全屏模式显示。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/navigator.html](http://www.html5plus.org/doc/zh_cn/navigator.html)
     */
    setFullscreen(fullscreen?: boolean): void;
    /**
     * 设置应用是否输出日志
     * 设置应用是否输出日志信息，默认关闭输出日志功能。
     * 	日志包括应用原生层内部跟踪日志（ADB、LogCat工具可获取的日志）及JS层跟踪日志（console.log输出的日志）。
     * 	开启日志在一定程度上会降低程序的性能，通常建议在正式发布时关闭日志输出，在调试时开启日志输出（此时可以通过工具ADB、LogCat获取分析日志）。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/navigator.html](http://www.html5plus.org/doc/zh_cn/navigator.html)
     */
    setLogs(log?: boolean): void;
    /**
     * 设置系统状态栏背景颜色
     * 设置应用在前台运行时系统状态栏的背景颜色，默认使用系统状态栏默认背景色（有系统状态栏样式决定）。
     * 	注意：为了有更好的兼容性，避免设置接近白色或黑色的颜色值。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/navigator.html](http://www.html5plus.org/doc/zh_cn/navigator.html)
     */
    setStatusBarBackground(color?: string): void;
    /**
     * 获取系统状态栏背景颜色
     * 获取应用在前台运行时系统状态栏的背景颜色。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/navigator.html](http://www.html5plus.org/doc/zh_cn/navigator.html)
     */
    getStatusBarBackground(): string;
    /**
     * 设置系统状态栏样式
     * 设置应用在前台运行时系统状态栏的样式，默认值可通过manifest.json文件的plus-&gt;statusbar-&gt;style配置。
     * 	注意：此操作是应用全局配置，调用的Webview窗口关闭后仍然生效。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/navigator.html](http://www.html5plus.org/doc/zh_cn/navigator.html)
     */
    setStatusBarStyle(style?: string): void;
    /**
     * 获取系统状态栏样式
     * 获取应用运行时系统状态栏的样式。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/navigator.html](http://www.html5plus.org/doc/zh_cn/navigator.html)
     */
    getStatusBarStyle(): string;
    /**
     * 获取系统状态栏高度
     * 单位为像素（px），值为Webview中的逻辑高度单位，如果要获取真实高度则必须乘以plus.screen.scale。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/navigator.html](http://www.html5plus.org/doc/zh_cn/navigator.html)
     */
    getStatusbarHeight(): number;
    /**
     * 判断当前是否为沉浸式状态栏模式
     * 如果当前应用采用沉浸式状态栏则返回true，否则返回false。
     * 	注意：如果当前系统版本不支持沉浸式状态栏也返回false。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/navigator.html](http://www.html5plus.org/doc/zh_cn/navigator.html)
     */
    isImmersedStatusbar(): boolean;
    /**
     * 设置userAgent值
     * 设置应用通过navigator.userAgent获取的值，及所有发起Http请求时提交的userAgent值。
     * 	如果要设置启动页面的userAgent值则需要在manifest.json中进行配置。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/navigator.html](http://www.html5plus.org/doc/zh_cn/navigator.html)
     */
    setUserAgent(useragent?: string, checkplus?: boolean): void;
    /**
     * 获取userAgent值
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/navigator.html](http://www.html5plus.org/doc/zh_cn/navigator.html)
     */
    getUserAgent(): string;
    /**
     * 设置Cookie值
     * 设置应用发起Http请求时提交的cookie值，调用此接口后所有的请求都生效。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/navigator.html](http://www.html5plus.org/doc/zh_cn/navigator.html)
     */
    setCookie(url?: string, value?: string): void;
    /**
     * 获取Cookie值
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/navigator.html](http://www.html5plus.org/doc/zh_cn/navigator.html)
     */
    getCookie(url?: string): string;
    /**
     * 删除应用所有Cookie值
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/navigator.html](http://www.html5plus.org/doc/zh_cn/navigator.html)
     */
    removeAllCookie(): void;
    /**
     * 删除应用Cookie
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/navigator.html](http://www.html5plus.org/doc/zh_cn/navigator.html)
     */
    removeCookie(url?: string): void;
    /**
     * 删除应用所有会话期Cookie值
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/navigator.html](http://www.html5plus.org/doc/zh_cn/navigator.html)
     */
    removeSessionCookie(): void;
}

/**
 * 创建应用快捷方式要设置的参数
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/navigator.html](http://www.html5plus.org/doc/zh_cn/navigator.html)
 */
interface PlusNavigatorShortcutOptions {
    /**
     * 快捷方式名称
     * 如果未设置则使用应用的名称，manifest.json中name属性值。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/navigator.html](http://www.html5plus.org/doc/zh_cn/navigator.html)
     */
    name?: string;
    /**
     * 快捷方式的图标
     * 如果未设置则优先使用应用中指定的图标（manifest.json中icon节点下对应分辨率的图标），如未区配则使用应用的图标（仅在独立打包时），否则使用runtime提供的默认图标。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/navigator.html](http://www.html5plus.org/doc/zh_cn/navigator.html)
     */
    icon?: string;
    /**
     * 创建快捷方式后的提示信息
     * 快捷方式创建成功后显示，默认提示内容为“"XXXX"已创建桌面快捷方式”，其中"XXXX"为程序的名称，如果不需要提示则设置此值为空字符串。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/navigator.html](http://www.html5plus.org/doc/zh_cn/navigator.html)
     */
    toast?: string;
    /**
     * 快捷方式的扩展参数
     * 其中key和value值都必须是字符串类型。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/navigator.html](http://www.html5plus.org/doc/zh_cn/navigator.html)
     */
    extra?: any;
    /**
     * 要启动Activity类名
     * 通常情况下不需要指定此值，仅在5+SDK集成时自定义Activity才用到。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/navigator.html](http://www.html5plus.org/doc/zh_cn/navigator.html)
     */
    classname?: string;
    /**
     * 是否需要强制创建快捷方式
     * true表示强制创建，false表示不强制创建，默认值为true。
     * 	强制创建可能会导致在无法判断快捷方式是否存在的设备上重复创建，如果需要尽可能避免出现重复创建桌面快捷方式则应该设置force属性值为false。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/navigator.html](http://www.html5plus.org/doc/zh_cn/navigator.html)
     */
    force?: boolean;
}

/**
 * 更新应用启动界面要设置的参数
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/navigator.html](http://www.html5plus.org/doc/zh_cn/navigator.html)
 */
interface PlusNavigatorSplashscreenOptions {
    /**
     * 启动界面的图片路径
     * 仅支持本地文件路径，图片必须为png格式。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/navigator.html](http://www.html5plus.org/doc/zh_cn/navigator.html)
     */
    image?: string;
    /**
     * 是否自动关闭启动界面
     * true表示应用启动后自动关闭启动界面，false表示应用启动后不自动关闭启动界面，需要在应用调用plus.navigator.closeSplashscreen()方法关闭。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/navigator.html](http://www.html5plus.org/doc/zh_cn/navigator.html)
     */
    autoclose?: boolean;
    /**
     * 是否自动关闭启动界面（WAP2APP应用）
     * 与autoclose属性值作用一致，仅在WAP2APP应用中有效。
     * 	不推荐设置此值，如果未设置会自动使用autoclose属性值。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/navigator.html](http://www.html5plus.org/doc/zh_cn/navigator.html)
     */
    autoclose_w2a?: boolean;
    /**
     * 启动界面延时关闭时间
     * 仅在设置为自动关闭启动界面时有效。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/navigator.html](http://www.html5plus.org/doc/zh_cn/navigator.html)
     */
    delay?: number;
    /**
     * 启动界面延时关闭时间（WAP2APP应用）
     * 与delay属性值作用一致，仅在WAP2APP应用中有效。
     * 	不推荐设置此值，如果未设置会自动使用delay属性值。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/navigator.html](http://www.html5plus.org/doc/zh_cn/navigator.html)
     */
    delay_w2a?: number;
}

/**
 * 运行环境权限类型
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/navigator.html](http://www.html5plus.org/doc/zh_cn/navigator.html)
 */
interface PlusNavigatorPermissionNames {
    /**
     * 访问摄像头权限
     * 用于调用摄像头（plus.camera.*、plus.barcode.*）。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/navigator.html](http://www.html5plus.org/doc/zh_cn/navigator.html)
     */
    CAMERA?: string;
    /**
     * 访问系统联系人权限
     * 用于访问（读、写）系统通讯录（plus.gallery.*）。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/navigator.html](http://www.html5plus.org/doc/zh_cn/navigator.html)
     */
    CONTACTS?: string;
    /**
     * 访问系统相册权限
     * 用于访问（读、写）系统相册（plus.gallery.*）。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/navigator.html](http://www.html5plus.org/doc/zh_cn/navigator.html)
     */
    GALLERY?: string;
    /**
     * 定位权限
     * 用于获取当前用户位置信息（plus.geolocation.*）。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/navigator.html](http://www.html5plus.org/doc/zh_cn/navigator.html)
     */
    LOCATION?: string;
    /**
     * 消息通知权限
     * 用于接收系统消息通知（plus.push.*）。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/navigator.html](http://www.html5plus.org/doc/zh_cn/navigator.html)
     */
    NOTIFITION?: string;
    /**
     * 录音权限
     * 用于进行本地录音操作（plus.audio.AudioRecorder）。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/navigator.html](http://www.html5plus.org/doc/zh_cn/navigator.html)
     */
    RECORD?: string;
    /**
     * 创建桌面快捷方式权限
     * 用于在系统桌面创建快捷方式图标（plus.navigator.createShortcut）。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/navigator.html](http://www.html5plus.org/doc/zh_cn/navigator.html)
     */
    SHORTCUT?: string;
}

/**
 * Orientation模块管理设备的方向信息，包括alpha、beta、gamma三个方向信息，通过plus.orientation可获取设备方向管理对象。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/orientation.html](http://www.html5plus.org/doc/zh_cn/orientation.html)
 */
interface PlusOrientation {
    /**
     * JSON对象，监听设备方向感应器参数
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/orientation.html](http://www.html5plus.org/doc/zh_cn/orientation.html)
     */
    OrientationOption?: PlusOrientationOrientationOption;
    /**
     * JSON对象，设备方向信息数据
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/orientation.html](http://www.html5plus.org/doc/zh_cn/orientation.html)
     */
    Rotation?: PlusOrientationRotation;
    /**
     * 获取当前设备的方向信息，包括alpha、beta、gamma三个方向信息
     * 方向信息是设备相对于水平初始方向分别以z、x、y轴为轴心旋转的角度，对应值为alpha、beta、gamma三个方向的信息。 方向信息可通过successCB回调函数返回。方向信息获取失败则调用回调函数errorCB
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/orientation.html](http://www.html5plus.org/doc/zh_cn/orientation.html)
     */
    getCurrentOrientation(successCB?: (result: string) => void, errorCB?: (result: any) => void): void;
    /**
     * 监听设备方向信息的变化
     * 方向信息是设备相对于水平初始方向分别以z、x、y轴为轴心旋转的角度，对应值为alpha、beta、gamma三个方向的信息。watchOrientation每隔固定时间就获取一次设备的方向信息，通过successCB回调函数返回。可通过option的frequency参数设定获取设备方向信息的时间间隔。方向信息获取失败则调用回调函数errorCB。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/orientation.html](http://www.html5plus.org/doc/zh_cn/orientation.html)
     */
    watchOrientation(successCB?: (result: string) => void, errorCB?: (result: any) => void, option?: PlusOrientationOrientationOption): number;
    /**
     * 关闭监听设备方向信息
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/orientation.html](http://www.html5plus.org/doc/zh_cn/orientation.html)
     */
    clearWatch(watchId?: number): void;
}

/**
 * JSON对象，监听设备方向感应器参数
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/orientation.html](http://www.html5plus.org/doc/zh_cn/orientation.html)
 */
interface PlusOrientationOrientationOption {
    /**
     * 更新方向信息的时间间隔
     * 数值类型，单位为ms，默认值为500ms。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/orientation.html](http://www.html5plus.org/doc/zh_cn/orientation.html)
     */
    frequency?: number;
}

/**
 * JSON对象，设备方向信息数据
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/orientation.html](http://www.html5plus.org/doc/zh_cn/orientation.html)
 */
interface PlusOrientationRotation {
    /**
     * 以z方向为轴心的旋转角度
     * 浮点数类型，只读属性，取值范围为0到360（不等于360）。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/orientation.html](http://www.html5plus.org/doc/zh_cn/orientation.html)
     */
    alpha?: number;
    /**
     * 以x方向为轴心的旋转角度
     * 浮点数类型，只读属性，取值范围为-180到180（不等于180）。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/orientation.html](http://www.html5plus.org/doc/zh_cn/orientation.html)
     */
    beta?: number;
    /**
     * 以y方向为轴心的旋转角度
     * 浮点数类型，只读属性，取值范围为-180到180（不等于180）。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/orientation.html](http://www.html5plus.org/doc/zh_cn/orientation.html)
     */
    gamma?: number;
    /**
     * 设备方向与地球磁场北极方向的角度
     * 浮点数类型，只读属性，取值范围为0到360（不等于360）。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/orientation.html](http://www.html5plus.org/doc/zh_cn/orientation.html)
     */
    magneticHeading?: number;
    /**
     * 设备方向与地球真实北极方向的角度
     * 浮点数类型，只读属性，取值范围为0到360（不等于360）。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/orientation.html](http://www.html5plus.org/doc/zh_cn/orientation.html)
     */
    trueHeading?: number;
    /**
     * 设备方向值的误差值
     * 浮点数类型，只读属性，取值范围为0到360（不等于360）。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/orientation.html](http://www.html5plus.org/doc/zh_cn/orientation.html)
     */
    headingAccuracy?: number;
}

/**
 * Proximity模块管理设备距离传感器，可获取当前设备的接近距离信息，通过plus.proximity可获取设备距离传感管理对象。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/proximity.html](http://www.html5plus.org/doc/zh_cn/proximity.html)
 */
interface PlusProximity {
    /**
     * 获取当前设备的接近距离信息
     * 获取当前接近设备的距离信息，距离值单位为厘米。如果感应器无法获取准确的距离值，则在接近设备时返回0，否则返回Infinity。 获取成功则调用successCB回调函数返接近回距离值。获取失败则调用errorCB回调函数错误信息。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/proximity.html](http://www.html5plus.org/doc/zh_cn/proximity.html)
     */
    getCurrentProximity(successCB?: (result: number) => void, errorCB?: (result: any) => void): void;
    /**
     * 监听设备接近距离的变化
     * watchProximity将监听设备的接近距离信息变化事件，当接近距离发生变化时通过changeCB回调函数返回距离值。监听距离变化事件失败则通过errorCB回调函数返回错误信息。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/proximity.html](http://www.html5plus.org/doc/zh_cn/proximity.html)
     */
    watchProximity(changeCB?: (result: number) => void, errorCB?: (result: any) => void): number;
    /**
     * 关闭监听设备接近距离变化
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/proximity.html](http://www.html5plus.org/doc/zh_cn/proximity.html)
     */
    clearWatch(watchId?: number): void;
}

/**
 * Runtime模块管理运行环境，可用于获取当前运行环境信息、与其它程序进行通讯等。通过plus.runtime可获取运行环境管理对象。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/runtime.html](http://www.html5plus.org/doc/zh_cn/runtime.html)
 */
interface PlusRuntime {
    /**
     * JSON对象，打开第三方程序参数
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/runtime.html](http://www.html5plus.org/doc/zh_cn/runtime.html)
     */
    ApplicationInf?: PlusRuntimeApplicationInf;
    /**
     * JSON对象，应用角标显示需要的通知栏消息的参数
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/runtime.html](http://www.html5plus.org/doc/zh_cn/runtime.html)
     */
    BadgeOptions?: PlusRuntimeBadgeOptions;
    /**
     * JSON对象，打开文件参数
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/runtime.html](http://www.html5plus.org/doc/zh_cn/runtime.html)
     */
    OpenFileOptions?: PlusRuntimeOpenFileOptions;
    /**
     * JSON对象，应用信息
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/runtime.html](http://www.html5plus.org/doc/zh_cn/runtime.html)
     */
    WidgetInfo?: PlusRuntimeWidgetInfo;
    /**
     * JSON对象，应用安装参数
     * 可通过对象设置安装的应用是否进行appid校验、版本号校验等。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/runtime.html](http://www.html5plus.org/doc/zh_cn/runtime.html)
     */
    WidgetOptions?: PlusRuntimeWidgetOptions;
    /**
     * 当前应用的APPID
     * 当前应用的APPID，字符串类型。注意，如果是在HBuilder真机运行获取的是固定值"HBuilder"，需要提交App云端打包后运行才能获取真实的APPID值。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/runtime.html](http://www.html5plus.org/doc/zh_cn/runtime.html)
     */
    appid?: string;
    /**
     * 第三方程序调用时传递给程序的参数
     * 第三方程序传递过来的参数，字符串格式类型数据。
     * 	不是由第三方程序调用启动，则返回空字符串。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/runtime.html](http://www.html5plus.org/doc/zh_cn/runtime.html)
     */
    arguments?: string;
    /**
     * 应用的市场推广渠道标识
     * "qihoo:browser"标识360浏览器流应用，"qihoo:appstore "表示360手机助手流应用，"dcloud:streamapps"表示DCloud流应用基座。
     * 	注意：仅流应用环境中可用（如果没有特殊配置默认返回运行环境的包名），非流应用环境中返回空字符串。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/runtime.html](http://www.html5plus.org/doc/zh_cn/runtime.html)
     */
    channel?: string;
    /**
     * 应用启动来源
     * 5+ APP启动类型，可取以下值：
     * 	"default"：默认启动方式，通常表示应用列表启动（360手助中搜索启动）；
     * 	"scheme"：通过urlscheme方式触发启动；
     * 	"push"：通过点击系统通知方式触发启动；
     * 	"stream"：通过流应用api（plus.stream.open）启动；
     * 	"shortcut"：通过快捷方式启动，iOS平台表示通过3D Touch快捷方式，Android平台表示通过桌面快捷方式启动；
     * 	"barcode"：通过二维码扫描启动；
     * 	"myapp"：通过流应用"我的"应用列表或历史列表中触发启动；
     * 	"favorite"：通过流应用的"收藏"应用列表启动；
     * 	"browser"：通过流应用的内置浏览器导流启动的流应用（地址栏输入url启动应用、点击wap页面链接启动应用）；
     * 	"engines"：通过流应用的浏览器界面作为搜索引擎启动；
     * 	"search"：通过流应用的应用搜索启动应用（如iOS平台的T9键盘搜索）；
     * 	"speech"：通过流应用的语音识别启动应用；
     * 	"miniProgram"：通过微信小程序启动应用。
     * - default: 
     * 	默认启动方式，通常表示从系统桌面图标启动
     * 						
     * - scheme: 
     * 	通过urlscheme方式触发启动
     * 						
     * - push: 
     * 	通过点击系统通知方式触发启动
     * 						
     * - stream: 
     * 	通过流应用api（plus.stream.open）启动
     * 						
     * - shortcut: 
     * 	iOS平台表示通过3D Touch快捷方式，Android平台表示通过桌面快捷方式启动
     * 						
     * - barcode: 
     * 	通过二维码扫描启动
     * 						
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/runtime.html](http://www.html5plus.org/doc/zh_cn/runtime.html)
     */
    launcher?: 'default' | 'scheme' | 'push' | 'stream' | 'shortcut' | 'barcode';
    /**
     * 应用安装来源
     * 5+应用安装来源，可取以下值：
     * 	"default"：默认安装来源，apk/ipa安装包内置安装；
     * 	"stream"：通过流应用api（plus.stream.open）安装，仅流应用环境下支持；
     * 	"push"：通过点击系统通知方式触发安装，仅流应用环境下支持；
     * 	"scheme"：通过urlscheme方式触发安装，仅流应用环境下支持；
     * 	"barcode"：通过二维码扫描触发安装，仅流应用环境下支持；
     * 	"silent"：通过后台静默方式安装，仅流应用环境下支持；
     * 	"speech"：通过语音识别方式触发安装，仅流应用环境下支持；
     * 	"favorite"：通过收藏界面启动触发安装，仅流应用环境下支持。
     * - default: 
     * 	默认安装来源，apk/ipa安装包内置安装
     * 						
     * - stream: 
     * 	通过流应用api（plus.stream.open）安装
     * 						
     * - push: 
     * 	通过点击系统通知方式触发安装
     * 						
     * - scheme: 
     * 	通过urlscheme方式触发安装
     * 						
     * - barcode: 
     * 	通过二维码扫描触发安装
     * 						
     * - silent: 
     * 	通过后台静默方式安装
     * 						
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/runtime.html](http://www.html5plus.org/doc/zh_cn/runtime.html)
     */
    origin?: 'default' | 'stream' | 'push' | 'scheme' | 'barcode' | 'silent';
    /**
     * 客户端的版本号
     * 字符串类型，在编译环境中设置的apk/ipa版本号。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/runtime.html](http://www.html5plus.org/doc/zh_cn/runtime.html)
     */
    version?: string;
    /**
     * 客户端5+运行环境的版本号
     * 5+运行环境版本号，格式为：[主版本号].[次版本号].[修订版本号].[编译代号]。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/runtime.html](http://www.html5plus.org/doc/zh_cn/runtime.html)
     */
    innerVersion?: string;
    /**
     * 获取当前应用首页加载的时间
     * 应用加载首页面的总时间，从开始加载首页面到首页面加载完成，单位为ms。
     * 	注意，应用首页为网络地址则包括网络传输时间。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/runtime.html](http://www.html5plus.org/doc/zh_cn/runtime.html)
     */
    launchLoadedTime?: number;
    /**
     * 获取当前应用的进程标识
     * 当前应用所属系统进程标识。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/runtime.html](http://www.html5plus.org/doc/zh_cn/runtime.html)
     */
    processId?: string;
    /**
     * 获取当前应用的启动时间
     * 应用启动时间戳，距1970年1月1日之间的毫秒数。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/runtime.html](http://www.html5plus.org/doc/zh_cn/runtime.html)
     */
    startupTime?: number;
    /**
     * 获取指定APPID对应的应用信息
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/runtime.html](http://www.html5plus.org/doc/zh_cn/runtime.html)
     */
    getProperty(appid?: string, getPropertyCB?: (result: PlusRuntimeWidgetInfo) => void): void;
    /**
     * 安装应用
     * 支持以下类型安装包：
     * 	1. 应用资源安装包（wgt），扩展名为'.wgt'；
     * 	2. 应用资源差量升级包（wgtu），扩展名为'.wgtu'；
     * 	3. 系统程序安装包（apk），要求使用当前平台支持的安装包格式。
     * 	注意：仅支持本地地址，调用此方法前需把安装包从网络地址或其他位置放置到运行时环境可以访问的本地目录。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/runtime.html](http://www.html5plus.org/doc/zh_cn/runtime.html)
     */
    install(filePath?: string, options?: PlusRuntimeWidgetOptions, installSuccessCB?: (result: PlusRuntimeWidgetInfo) => void, installErrorCB?: (result: any) => void): void;
    /**
     * 退出客户端程序
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/runtime.html](http://www.html5plus.org/doc/zh_cn/runtime.html)
     */
    quit(): void;
    /**
     * 重启当前的应用
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/runtime.html](http://www.html5plus.org/doc/zh_cn/runtime.html)
     */
    restart(): void;
    /**
     * 设置程序快捷方式图标上显示的角标数字
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/runtime.html](http://www.html5plus.org/doc/zh_cn/runtime.html)
     */
    setBadgeNumber(number?: number, options?: PlusRuntimeBadgeOptions): void;
    /**
     * 调用第三方程序打开指定的URL
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/runtime.html](http://www.html5plus.org/doc/zh_cn/runtime.html)
     */
    openURL(url?: string, errorCB?: (result: any) => void, identity?: string): void;
    /**
     * 使用内置Webview窗口打开URL
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/runtime.html](http://www.html5plus.org/doc/zh_cn/runtime.html)
     */
    openWeb(url?: string): void;
    /**
     * 调用第三方程序打开指定的文件
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/runtime.html](http://www.html5plus.org/doc/zh_cn/runtime.html)
     */
    openFile(filepath?: string, options?: PlusRuntimeOpenFileOptions, errorCB?: (result: any) => void): void;
    /**
     * 处理直达页面链接参数
     * 通过URL Scheme启动时，可以在?后面添加__direct_page参数自定义直达页面地址，
     * 	如“streamapp://m3w.cn/s/HelloH5?__direct_page=http%3a%2f%2fm.weibo.cn%2fu%2f3196963860”；
     * 	在流应用SDK集成时也可以通过direct_page参数（原生调用Intent）设置。
     * 	注意：仅第一次调用此API时返回直达页面链接地址，再次调用将返回空字符串；如果应用重新被带直达页面链接参数的URL Scheme启动/激活时，可再次调用此方法获取。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/runtime.html](http://www.html5plus.org/doc/zh_cn/runtime.html)
     */
    processDirectPage(): string;
    /**
     * 调用第三方程序
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/runtime.html](http://www.html5plus.org/doc/zh_cn/runtime.html)
     */
    launchApplication(appInf?: PlusRuntimeApplicationInf, errorCB?: (result: any) => void): void;
    /**
     * 判断第三方程序是否已存在
     * 如果第三方程序已安装则返回true，未安装则返回false。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/runtime.html](http://www.html5plus.org/doc/zh_cn/runtime.html)
     */
    isApplicationExist(appInf?: PlusRuntimeApplicationInf): boolean;
    /**
     * 判断是否自定义应用启动页面加载地址
     * 通过URL Scheme启动时，可以在?后面添加__launch_path参数自定义应用启动首页加载的页面地址，
     * 	如“streamapp://m3w.cn/s/HelloH5?__launch_path=http%3a%2f%2fm.weibo.cn%2fu%2f3196963860”；
     * 	在流SDK集成时也可以通过launch_path参数（原生调用Intent）设置。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/runtime.html](http://www.html5plus.org/doc/zh_cn/runtime.html)
     */
    isCustomLaunchPath(): boolean;
}

/**
 * JSON对象，打开第三方程序参数
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/runtime.html](http://www.html5plus.org/doc/zh_cn/runtime.html)
 */
interface PlusRuntimeApplicationInf {
    /**
     * 第三方程序包名
     * 仅Android平台支持，表示程序的包名，其它平台忽略此属性值。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/runtime.html](http://www.html5plus.org/doc/zh_cn/runtime.html)
     */
    pname?: string;
    /**
     * 程序的操作行为
     * Android平台上与系统的action值一致；iOS平台为要调用程序的URLScheme格式字符串。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/runtime.html](http://www.html5plus.org/doc/zh_cn/runtime.html)
     */
    action?: string;
    /**
     * 新任务模式标记
     * 可取值：
     * 		true-使用新任务模式标记（FLAG_ACTIVITY_NEW_TASK）启动应用；
     * 		false-不使用新任务模式标记（FLAG_ACTIVITY_NEW_TASK）启动应用。
     * 	默认值为true。
     * 	注意：由于5+应用配置的launchMode为singleTask，所以另一个5+应用通过plus.runtime.launchApplication启动时如果应用已经在后台运行则不会触发newintent事件，为了避免此问题需要将newTask参数值设置为false。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/runtime.html](http://www.html5plus.org/doc/zh_cn/runtime.html)
     */
    newTask?: boolean;
    /**
     * 调用程序的参数
     * 仅Android平台支持，为JSON格式，用于传递给要调用程序的参数，如extra:{url:"http://www.html5plus.org"}。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/runtime.html](http://www.html5plus.org/doc/zh_cn/runtime.html)
     */
    extra?: any;
}

/**
 * JSON对象，应用角标显示需要的通知栏消息的参数
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/runtime.html](http://www.html5plus.org/doc/zh_cn/runtime.html)
 */
interface PlusRuntimeBadgeOptions {
    /**
     * 消息的标题
     * 默认值为应用的名称。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/runtime.html](http://www.html5plus.org/doc/zh_cn/runtime.html)
     */
    title?: string;
    /**
     * 消息的内容
     * 默认值为“您有x条未读消息"”，其中x未设置的角标数字值。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/runtime.html](http://www.html5plus.org/doc/zh_cn/runtime.html)
     */
    content?: string;
}

/**
 * JSON对象，打开文件参数
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/runtime.html](http://www.html5plus.org/doc/zh_cn/runtime.html)
 */
interface PlusRuntimeOpenFileOptions {
    /**
     * 优先使用的程序包名
     * 如果指定包名的程序已经安装，则调用其打开文件，若程序不支持打开文件则触发错误回调。
     * 	如果指定包名的程序未安装，则弹出系统支持打开此文件的列表，由用户选择程序打开。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/runtime.html](http://www.html5plus.org/doc/zh_cn/runtime.html)
     */
    pname?: string;
    /**
     * 弹出系统选择程序界面指示区域
     * JSON对象，格式如{top:10;left:10;width:200;height:200;}，所有值为像素值，左上坐标相对于容器webview的位置。仅在iPad设备平台有效。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/runtime.html](http://www.html5plus.org/doc/zh_cn/runtime.html)
     */
    popover?: any;
}

/**
 * JSON对象，应用信息
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/runtime.html](http://www.html5plus.org/doc/zh_cn/runtime.html)
 */
interface PlusRuntimeWidgetInfo {
    /**
     * 应用的APPID
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/runtime.html](http://www.html5plus.org/doc/zh_cn/runtime.html)
     */
    appid?: string;
    /**
     * 应用的版本号
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/runtime.html](http://www.html5plus.org/doc/zh_cn/runtime.html)
     */
    version?: string;
    /**
     * 应用的名称
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/runtime.html](http://www.html5plus.org/doc/zh_cn/runtime.html)
     */
    name?: string;
    /**
     * 应用描述信息
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/runtime.html](http://www.html5plus.org/doc/zh_cn/runtime.html)
     */
    description?: string;
    /**
     * 应用描述信息
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/runtime.html](http://www.html5plus.org/doc/zh_cn/runtime.html)
     */
    author?: string;
    /**
     * 开发者邮箱地址
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/runtime.html](http://www.html5plus.org/doc/zh_cn/runtime.html)
     */
    email?: string;
    /**
     * 应用授权描述信息
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/runtime.html](http://www.html5plus.org/doc/zh_cn/runtime.html)
     */
    license?: string;
    /**
     * 应用授权说明链接地址
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/runtime.html](http://www.html5plus.org/doc/zh_cn/runtime.html)
     */
    licensehref?: string;
    /**
     * 应用许可特性列表
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/runtime.html](http://www.html5plus.org/doc/zh_cn/runtime.html)
     */
    features?: string [];
}

/**
 * JSON对象，应用安装参数
 * 可通过对象设置安装的应用是否进行appid校验、版本号校验等。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/runtime.html](http://www.html5plus.org/doc/zh_cn/runtime.html)
 */
interface PlusRuntimeWidgetOptions {
    /**
     * 是否强制安装
     * true表示强制安装，不进行版本号的校验；false则需要版本号校验，如果将要安装应用的版本号不高于现有应用的版本号则终止安装，并返回安装失败。
     * 	仅安装wgt和wgtu时生效，默认值 false。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/runtime.html](http://www.html5plus.org/doc/zh_cn/runtime.html)
     */
    force?: boolean;
}

/**
 * Storage模块管理应用本地数据存储区，用于应用数据的保存和读取。应用本地数据与localStorage、sessionStorage的区别在于数据有效域不同，前者可在应用内跨域操作，数据存储期是持久化的，并且没有容量限制。通过plus.storage可获取应用本地数据管理对象。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/storage.html](http://www.html5plus.org/doc/zh_cn/storage.html)
 */
interface PlusStorage {
    /**
     * 获取应用存储区中保存的键值对的个数
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/storage.html](http://www.html5plus.org/doc/zh_cn/storage.html)
     */
    getLength(): number;
    /**
     * 通过键(key)检索获取应用存储的值
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/storage.html](http://www.html5plus.org/doc/zh_cn/storage.html)
     */
    getItem(key?: string): string;
    /**
     * 修改或添加键值(key-value)对数据到应用数据存储中
     * 如果设置的键在应用数据存储中已经存在，更新存储的键值。
     * 	存储的键和值没有容量限制，但过多的数据量会导致效率降低，建议单个键值数据不要超过10Kb。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/storage.html](http://www.html5plus.org/doc/zh_cn/storage.html)
     */
    setItem(key?: string, value?: string): void;
    /**
     * 通过key值删除键值对存储的数据
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/storage.html](http://www.html5plus.org/doc/zh_cn/storage.html)
     */
    removeItem(key?: string): void;
    /**
     * 清除应用所有的键值对存储数据
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/storage.html](http://www.html5plus.org/doc/zh_cn/storage.html)
     */
    clear(): void;
    /**
     * 获取键值对中指定索引值的key值
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/storage.html](http://www.html5plus.org/doc/zh_cn/storage.html)
     */
    key(index?: number): void;
}

/**
 * Stream模块操作流应用。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/stream.html](http://www.html5plus.org/doc/zh_cn/stream.html)
 */
interface PlusStream {
    /**
     * JSON对象，启动流应用参数
     * 指定要启动的流应用标识、名称、图标、参数等信息。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/stream.html](http://www.html5plus.org/doc/zh_cn/stream.html)
     */
    StreamOptions?: PlusStreamStreamOptions;
    /**
     * JSON对象，流应用恢复运行的参数
     * 设置流应用恢复运行时的参数、splash、首页等信息。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/stream.html](http://www.html5plus.org/doc/zh_cn/stream.html)
     */
    StreamRestoreOptions?: PlusStreamStreamRestoreOptions;
    /**
     * 流应用恢复运行时启动界面配置参数
     * 设置流应用恢复运行时启动界面，如是否自动关闭、延时关闭时间、超时时间等。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/stream.html](http://www.html5plus.org/doc/zh_cn/stream.html)
     */
    StreamRestoreSplashscreenOptions?: PlusStreamStreamRestoreSplashscreenOptions;
    /**
     * JSON对象，启动流应用的首页窗口属性
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/stream.html](http://www.html5plus.org/doc/zh_cn/stream.html)
     */
    LaunchWebviewStyles?: PlusStreamLaunchWebviewStyles;
    /**
     * JSON对象，流应用信息
     * 流应用标识、图标、是否下载完成等信息。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/stream.html](http://www.html5plus.org/doc/zh_cn/stream.html)
     */
    StreamInfo?: PlusStreamStreamInfo;
    /**
     * JSON对象，免流量操作参数
     * 包含电话号码、验证码等信息。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/stream.html](http://www.html5plus.org/doc/zh_cn/stream.html)
     */
    FreetrafficOptions?: PlusStreamFreetrafficOptions;
    /**
     * 免流量状态变化事件
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/stream.html](http://www.html5plus.org/doc/zh_cn/stream.html)
     */
    onfreetrafficStateChange?: any;
    /**
     * 启动流应用
     * 打开指定的流应用，在流应用中通过plus.runtime.launcher获取的值为"stream"。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/stream.html](http://www.html5plus.org/doc/zh_cn/stream.html)
     */
    open(options?: PlusStreamStreamOptions, successCallback?: (result: any) => void, errorCallback?: (result: any) => void): void;
    /**
     * 流应用激活统计
     * 提交统计数据到流应用服务器，表明业务系统激活成功。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/stream.html](http://www.html5plus.org/doc/zh_cn/stream.html)
     */
    activate(): void;
    /**
     * 已下载流应用列表
     * 获取当前设备上已安装的所有流应用。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/stream.html](http://www.html5plus.org/doc/zh_cn/stream.html)
     */
    list(options?: any, successCallback?: any, errorCallback?: any): void;
    /**
     * 预加载流应用
     * 预加载指定的流应用资源，下载应用资源等，并不运行流应用。
     * 	如果应用资源已经下载，则不做任何操作。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/stream.html](http://www.html5plus.org/doc/zh_cn/stream.html)
     */
    preload(appid?: string): void;
    /**
     * 删除流应用
     * 删除已下载的流应用，清空应用相关运行期保存的资源（如缓存、配置文件等）。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/stream.html](http://www.html5plus.org/doc/zh_cn/stream.html)
     */
    remove(appid?: string): void;
    /**
     * 设置流应用恢复运行的参数
     * 当流应用运行数目超过限制（通常最多运行2个流应用），会自动关闭之前切换到后台运行的应用。
     * 	可通过此方法设置应用被自动关闭后再次被唤醒恢复运行时的参数，流应用恢复运行流程与第一次启动一致（差别是会使用StreamRestoreOptions中配置的参数）。
     * 	如果没有调用setRestoreState方法，则恢复运行时使用启动时（调用plus.stream.open方法）传入的参数。
     * 	注意：如果通过plus.stream.open方法启动应用，则忽略此方法设置的参数。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/stream.html](http://www.html5plus.org/doc/zh_cn/stream.html)
     */
    setRestoreState(options?: PlusStreamStreamRestoreOptions): void;
    /**
     * 请求免流量验证码
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/stream.html](http://www.html5plus.org/doc/zh_cn/stream.html)
     */
    freetrafficRequest(options?: PlusStreamFreetrafficOptions, successCallback?: () => void, errorCallback?: (result: any) => void): void;
    /**
     * 免流量绑定手机号
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/stream.html](http://www.html5plus.org/doc/zh_cn/stream.html)
     */
    freetrafficBind(options?: PlusStreamFreetrafficOptions, successCallback?: () => void, errorCallback?: (result: any) => void): void;
    /**
     * 解除免流量绑定
     * 解除当前设备绑定的手机号，如果设备未绑定则不执行操作。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/stream.html](http://www.html5plus.org/doc/zh_cn/stream.html)
     */
    freetrafficRelease(): void;
    /**
     * 获取免流量状态信息
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/stream.html](http://www.html5plus.org/doc/zh_cn/stream.html)
     */
    freetrafficInfo(successCallback?: (result: any) => void, errorCallback?: (result: any) => void): void;
    /**
     * 免流量是否生效
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/stream.html](http://www.html5plus.org/doc/zh_cn/stream.html)
     */
    freetrafficIsValid(): boolean;
}

/**
 * JSON对象，启动流应用参数
 * 指定要启动的流应用标识、名称、图标、参数等信息。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/stream.html](http://www.html5plus.org/doc/zh_cn/stream.html)
 */
interface PlusStreamStreamOptions {
    /**
     * 流应用运行模式
     * 可取值："test"表示测试版模式运行，其它值则为正式版本模式。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/stream.html](http://www.html5plus.org/doc/zh_cn/stream.html)
     */
    appmode?: string;
    /**
     * 流应用标识
     * 流应用唯一字符串标识。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/stream.html](http://www.html5plus.org/doc/zh_cn/stream.html)
     */
    appid?: string;
    /**
     * 启动流应用的直达页面链接地址
     * 可在应用中通过plus.runtime.processDirectPage()方法获取。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/stream.html](http://www.html5plus.org/doc/zh_cn/stream.html)
     */
    direct_page?: string;
    /**
     * 流应用运行参数
     * 启动流应用的扩展参数，可在流应用中通过plus.runtime.arguments获取。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/stream.html](http://www.html5plus.org/doc/zh_cn/stream.html)
     */
    extras?: any;
    /**
     * 流应用图标
     * 流应用显示的图标路径（仅支持本地路径），在启动提示界面中显示。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/stream.html](http://www.html5plus.org/doc/zh_cn/stream.html)
     */
    icon?: string;
    /**
     * 流应用启动类型
     * 流应用的启动类型，可在流应用中通过plus.runtime.launcher获取，默认值为“stream”。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/stream.html](http://www.html5plus.org/doc/zh_cn/stream.html)
     */
    launcher?: string;
    /**
     * 应用启动界面样式
     * 可取值：
     * 	"auto"：自动选择启动界面，如果splash图片已经下载则显示splash图片，否则使用默认加载流应用界面；
     * 	"default"：使用默认加载流应用界面（如在360浏览器环境中在标题栏下显示加载进度条）。
     * 	默认值为"auto"。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/stream.html](http://www.html5plus.org/doc/zh_cn/stream.html)
     */
    splash?: string;
    /**
     * 流应用首页窗口对象样式
     * 如果流应用已经运行，从后台激活到前台时忽略此属性。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/stream.html](http://www.html5plus.org/doc/zh_cn/stream.html)
     */
    styles?: PlusStreamLaunchWebviewStyles;
    /**
     * 流应用名称
     * 流应用显示的标题，在启动提示界面中显示。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/stream.html](http://www.html5plus.org/doc/zh_cn/stream.html)
     */
    title?: string;
    /**
     * 启动流应用的快捷方式逻辑
     * 可取值：
     * 		"auto" - 检查并引导用户打开快捷方式权限，自动创建桌面快捷方式，在不支持快捷方式滤重的系统上仅创建一次；
     *         "force" - 检查并引导用户打开快捷方式权限，自动创建桌面快捷方式，在不支持快捷方式滤重的系统上每次都尝试创建；
     *         "none" - 不检查快捷方式权限，不创建桌面快捷方式（与从桌面快捷方式启动的流程一致）；
     *         "query" - 弹出询问提示框（底部显示），用户点击确定后创建桌面快捷方式（检查并引导用户打开快捷方式权限）；
     *         "tipOnce" - 业务逻辑与"auto"类似，差别是只会引导用户打开快捷方式权限一次、toast提示一次。
     * 	默认值为"force"。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/stream.html](http://www.html5plus.org/doc/zh_cn/stream.html)
     */
    shortcut?: string;
    /**
     * 退出流应用的快捷方式逻辑
     * 可取值：
     * 		"query" - 应用退出时检查是否创建桌面快捷方式，如果查询到没有创建则弹出询问框，用户点击确定后创建桌面快捷方式（检查并引导用户打开快捷方式权限）；
     *         "queryOnce" - 仅应用第一次退出检查，检查逻辑同query；
     *         "none" - 应用退出时不检查是否创建桌面快捷方式。
     * 	默认值为"none"。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/stream.html](http://www.html5plus.org/doc/zh_cn/stream.html)
     */
    shortcutQuit?: string;
}

/**
 * JSON对象，流应用恢复运行的参数
 * 设置流应用恢复运行时的参数、splash、首页等信息。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/stream.html](http://www.html5plus.org/doc/zh_cn/stream.html)
 */
interface PlusStreamStreamRestoreOptions {
    /**
     * 流应用运行参数
     * 启动流应用的扩展参数，可在流应用中通过plus.runtime.arguments获取。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/stream.html](http://www.html5plus.org/doc/zh_cn/stream.html)
     */
    extras?: any;
    /**
     * 应用启动界面样式
     * 可取值：
     * 	"auto"：自动选择启动界面，如果流应用自动关闭时截图成功则使用截图，如果splash图片已经下载则显示splash图片，否则使用默认加载流应用界面；
     * 	"default"：使用默认加载流应用界面（如在360浏览器环境中在标题栏下显示加载进度条）。
     * 	默认值为"auto"。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/stream.html](http://www.html5plus.org/doc/zh_cn/stream.html)
     */
    splash?: string;
    /**
     * 流应用首页窗口对象样式
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/stream.html](http://www.html5plus.org/doc/zh_cn/stream.html)
     */
    styles?: PlusStreamLaunchWebviewStyles;
    /**
     * 流应用恢复运行时启动界面配置参数
     * 用于流应用自动关闭后恢复运行时调整启动界面配置参数，如将自动关闭splash调整为手动关闭，以便恢复上次运行状态后再进入应用。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/stream.html](http://www.html5plus.org/doc/zh_cn/stream.html)
     */
    splashscreen?: PlusStreamStreamRestoreSplashscreenOptions;
}

/**
 * 流应用恢复运行时启动界面配置参数
 * 设置流应用恢复运行时启动界面，如是否自动关闭、延时关闭时间、超时时间等。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/stream.html](http://www.html5plus.org/doc/zh_cn/stream.html)
 */
interface PlusStreamStreamRestoreSplashscreenOptions {
    /**
     * 是否自动关闭启动界面
     * true表示应用启动后自动关闭启动界面，false表示应用启动后不自动关闭启动界面，需要在应用调用plus.navigator.closeSplashscreen()方法关闭。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/stream.html](http://www.html5plus.org/doc/zh_cn/stream.html)
     */
    autoclose?: boolean;
    /**
     * 启动界面超时时间
     * 单位为毫秒（ms），当启动界面超过此时间仍然未关闭时（不管autoclose值设置true还是false），应用将自动关闭启动界面。
     * 	默认值为6000（即6秒）。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/stream.html](http://www.html5plus.org/doc/zh_cn/stream.html)
     */
    timeout?: number;
}

/**
 * JSON对象，启动流应用的首页窗口属性
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/stream.html](http://www.html5plus.org/doc/zh_cn/stream.html)
 */
interface PlusStreamLaunchWebviewStyles {
    /**
     * 流应用首页是否阻塞网络图片的加载
     * true表示阻塞网络图片的加载，false表示不阻塞网络图片的加载。默认值为false。
     * 	设置后可通过Webview窗口对象的setBlockNetworkImage(false)方法修改设置来继续加载网络图片。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/stream.html](http://www.html5plus.org/doc/zh_cn/stream.html)
     */
    blockNetworkImage?: boolean;
    /**
     * 指定流应用首页地址
     * 可使用网络地址（http://或https://开头），也可使用本地地址（相对应用资源路径）。
     * 	也可使用特定地址：
     * 	about:blank - 使用空白首页，仅加载内置注入的脚本（如all.js、wap2app.js、config.js等）。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/stream.html](http://www.html5plus.org/doc/zh_cn/stream.html)
     */
    launch_path?: string;
    /**
     * 指定首页Webview的id
     * 如果未指定id，则使用应用的appid作为首页Webview的id。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/stream.html](http://www.html5plus.org/doc/zh_cn/stream.html)
     */
    id?: string;
    /**
     * 流应用首页是否显示
     * true表示显示，false表示不显示。默认值为true。
     * 	注意：流应用首页隐藏后，需要调用首页的setVisible方法显示，如plus.webview.getLaunchWebview().setVisible(true)。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/stream.html](http://www.html5plus.org/doc/zh_cn/stream.html)
     */
    visible?: boolean;
}

/**
 * JSON对象，流应用信息
 * 流应用标识、图标、是否下载完成等信息。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/stream.html](http://www.html5plus.org/doc/zh_cn/stream.html)
 */
interface PlusStreamStreamInfo {
    /**
     * 流应用标识
     * 流应用唯一字符串标识。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/stream.html](http://www.html5plus.org/doc/zh_cn/stream.html)
     */
    id?: string;
    /**
     * 流应用的图标
     * 流应用下载的图标路径（本地路径），如果未下载完成则返回空。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/stream.html](http://www.html5plus.org/doc/zh_cn/stream.html)
     */
    icon?: string;
    /**
     * 流应用是否下载完成
     * true表示流应用下载完成，false表示流应用未下载完成。
     * 	注意，流应用未下载完成以让可以正常启动运行，启动后会自动下载。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/stream.html](http://www.html5plus.org/doc/zh_cn/stream.html)
     */
    complete?: boolean;
}

/**
 * JSON对象，免流量操作参数
 * 包含电话号码、验证码等信息。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/stream.html](http://www.html5plus.org/doc/zh_cn/stream.html)
 */
interface PlusStreamFreetrafficOptions {
    /**
     * 电话号码
     * 免流量请求验证码、绑定设备使用的电话号码。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/stream.html](http://www.html5plus.org/doc/zh_cn/stream.html)
     */
    phone?: string;
    /**
     * 验证码
     * 免流量绑定设备使用的验证码。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/stream.html](http://www.html5plus.org/doc/zh_cn/stream.html)
     */
    code?: string;
}

/**
 * Uploader模块管理网络上传任务，用于从本地上传各种文件到服务器，并支持跨域访问操作。通过plus.uploader可获取上传管理对象。Uploader上传使用HTTP的POST方式提交数据，数据格式符合Multipart/form-data规范，即rfc1867（Form-based File Upload in HTML）协议。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/uploader.html](http://www.html5plus.org/doc/zh_cn/uploader.html)
 */
interface PlusUploader {
    /**
     * Upload对象管理一个上传任务
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/uploader.html](http://www.html5plus.org/doc/zh_cn/uploader.html)
     */
    Upload?: PlusUploaderUpload;
    /**
     * 上传任务事件类型
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/uploader.html](http://www.html5plus.org/doc/zh_cn/uploader.html)
     */
    UploadEvent?: PlusUploaderUploadEvent;
    /**
     * 上传任务的状态，Number类型
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/uploader.html](http://www.html5plus.org/doc/zh_cn/uploader.html)
     */
    UploadState?: PlusUploaderUploadState;
    /**
     * JSON对象，创建上传任务的参数
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/uploader.html](http://www.html5plus.org/doc/zh_cn/uploader.html)
     */
    UploadOptions?: PlusUploaderUploadOptions;
    /**
     * JSON对象，添加上传文件的参数
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/uploader.html](http://www.html5plus.org/doc/zh_cn/uploader.html)
     */
    UploadFileOptions?: PlusUploaderUploadFileOptions;
    /**
     * 新建上传任务
     * 请求上传管理创建新的上传任务，创建成功则返回Upload对象，用于管理上传任务。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/uploader.html](http://www.html5plus.org/doc/zh_cn/uploader.html)
     */
    createUpload(url?: string, options?: PlusUploaderUploadOptions, completedCB?: (result0: PlusUploaderUpload, result1: number) => void): PlusUploaderUpload;
    /**
     * 枚举上传任务
     * 枚举指定状态的上传任务列表，通过enumCB回调函数返回结果。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/uploader.html](http://www.html5plus.org/doc/zh_cn/uploader.html)
     */
    enumerate(enumCB?: (result: PlusUploader []) => void, state?: PlusUploaderUploadState): void;
    /**
     * 清除上传任务
     * 清除指定状态的上传任务。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/uploader.html](http://www.html5plus.org/doc/zh_cn/uploader.html)
     */
    clear(state?: PlusUploaderUploadState): void;
    /**
     * 开始所有上传任务
     * 开始所有处于未开始调度或暂停状态的上传任务。
     * 	若上传任务数超过可并发处理的总数，超出的任务处于调度状态（等待上传），当有任务完成时根据调度状态任务的优先级选择任务开始上传。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/uploader.html](http://www.html5plus.org/doc/zh_cn/uploader.html)
     */
    startAll(): void;
}

/**
 * Upload对象管理一个上传任务
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/uploader.html](http://www.html5plus.org/doc/zh_cn/uploader.html)
 */
interface PlusUploaderUpload {
    /**
     * 上传任务的标识
     * 在创建任务时系统自动分配，用于标识上传任务的唯一性。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/uploader.html](http://www.html5plus.org/doc/zh_cn/uploader.html)
     */
    id?: string;
    /**
     * 上传文件的服务器地址
     * 调用plus.uploader.createUpload()方法创建上传任务时设置的值。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/uploader.html](http://www.html5plus.org/doc/zh_cn/uploader.html)
     */
    url?: string;
    /**
     * 任务的状态
     * 上传任务的状态，参考UploadState，在UploadCompleteCallback事件和UploadStateChangedCallback事件触发时更新。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/uploader.html](http://www.html5plus.org/doc/zh_cn/uploader.html)
     */
    state?: number;
    /**
     * 上传任务的参数
     * 上传任务配置的参数，参考UploadOptions。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/uploader.html](http://www.html5plus.org/doc/zh_cn/uploader.html)
     */
    options?: PlusUploaderUploadOptions;
    /**
     * 上传任务完成后服务器返回的数据
     * 表示当前上传任务的状态，可通过addEventListener()方法监听statechanged事件监听任务状态的变化。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/uploader.html](http://www.html5plus.org/doc/zh_cn/uploader.html)
     */
    responseText?: string;
    /**
     * 已完成上传数据的大小）
     * 整数类型，单位为字节（byte），上传任务开始传输数据时，每次触发statechanged事件或上传任务完成更新。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/uploader.html](http://www.html5plus.org/doc/zh_cn/uploader.html)
     */
    uploadedSize?: number;
    /**
     * 上传数据的总大小
     * 整数类型，单位为字节（byte），上传任务开始传输数据时更新。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/uploader.html](http://www.html5plus.org/doc/zh_cn/uploader.html)
     */
    totalSize?: number;
    /**
     * 添加上传文件
     * 向上传任务中添加文件，必须在任务开始上传前调用。
     * 	以下情况会导致添加上传文件失败：
     * 	1. options参数中指定的key在任务中已经存在，则添加失败返回false；
     * 	2. path参数指定的文件路径不合法或文件不存在，则添加失败返回false；
     * 	3. 上传任务已经开始调度，调用此方法则添加失败返回false。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/uploader.html](http://www.html5plus.org/doc/zh_cn/uploader.html)
     */
    addFile(path?: string, options?: PlusUploaderUploadFileOptions): boolean;
    /**
     * 添加上传数据
     * 向上传任务中添加数据，必须在任务开始上传前调用。
     * 	以下情况会导致添加上传文件失败：
     * 	1. key参数中指定的键名在任务中已经存在，则添加失败返回false；
     * 	2. 上传任务已经开始调度，调用此方法则添加失败返回false。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/uploader.html](http://www.html5plus.org/doc/zh_cn/uploader.html)
     */
    addData(key?: string, value?: string): boolean;
    /**
     * 开始上传任务
     * 开始调度上传任务，如果任务已经处于开始状态则无任何响应。
     * 	在创建任务或任务上传失败后调用可重新开始上传。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/uploader.html](http://www.html5plus.org/doc/zh_cn/uploader.html)
     */
    start(): void;
    /**
     * 暂停上传任务
     * 暂停上传任务，如果任务已经处于初始状态或暂停状态则无任何响应。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/uploader.html](http://www.html5plus.org/doc/zh_cn/uploader.html)
     */
    pause(): void;
    /**
     * 恢复暂停的上传任务
     * 继续暂停的上传任务，如果任务处于非暂停状态则无任何响应。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/uploader.html](http://www.html5plus.org/doc/zh_cn/uploader.html)
     */
    resume(): void;
    /**
     * 取消上传任务
     * 如果任务未完成，则终止上传，并从任务列表中删除。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/uploader.html](http://www.html5plus.org/doc/zh_cn/uploader.html)
     */
    abort(): void;
    /**
     * 添加上传任务事件监听器
     * 上传任务添加事件监听器后，当监听的事件发生时触发listener回调。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/uploader.html](http://www.html5plus.org/doc/zh_cn/uploader.html)
     */
    addEventListener(type?: string, listener?: (result0: PlusUploaderUpload, result1: number) => void, capture?: boolean): void;
    /**
     * 获取上传请求HTTP响应头部信息
     * HTTP响应头部全部内容作为未解析的字符串返回，如果没有接收到这个HTTP响应头数据或者上传请求未完成则为空字符串。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/uploader.html](http://www.html5plus.org/doc/zh_cn/uploader.html)
     */
    getAllResponseHeaders(): string;
    /**
     * 获取上传请求指定的HTTP响应头部的值
     * 其参数是要返回的HTTP响应头部的名称，可以使用任何大小写来制定这个头部名字，和响应头部的比较是不区分大小写的。
     * 	如果没有接收到这个头部或者伤处请求未完成则为空字符串；如果接收到多个有指定名称的头部，这个头部的值被连接起来并返回，使用逗号和空格分隔开各个头部的值。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/uploader.html](http://www.html5plus.org/doc/zh_cn/uploader.html)
     */
    getResponseHeader(headerName?: string): string;
    /**
     * 设置上传请求的HTTP头数据
     * Http的Header应该包含在通过后续start()调用而发起的请求中，此方法必需在调用start()之前设置才能生效。
     * 	如果带有指定名称的头部已经被指定了，这个头部的新值就是：之前指定的值，加上逗号、以及这个调用指定的值（形成一个数组）。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/uploader.html](http://www.html5plus.org/doc/zh_cn/uploader.html)
     */
    setRequestHeader(headerName?: string, headerValue?: string): void;
}

/**
 * 上传任务事件类型
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/uploader.html](http://www.html5plus.org/doc/zh_cn/uploader.html)
 */
interface PlusUploaderUploadEvent {
    /**
     * 上传任务状态变化事件
     * 当上传任务状态发生变化时触发此事件，事件原型参考UploadStateChangedCallback。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/uploader.html](http://www.html5plus.org/doc/zh_cn/uploader.html)
     */
    statechanged?: string;
}

/**
 * 上传任务的状态，Number类型
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/uploader.html](http://www.html5plus.org/doc/zh_cn/uploader.html)
 */
type PlusUploaderUploadState = undefined | 0 | 1 | 2 | 3 | 4 | 5 | -1;

/**
 * JSON对象，创建上传任务的参数
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/uploader.html](http://www.html5plus.org/doc/zh_cn/uploader.html)
 */
interface PlusUploaderUploadOptions {
    /**
     * 网络请求类型
     * 仅支持http协议的“POST”请求。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/uploader.html](http://www.html5plus.org/doc/zh_cn/uploader.html)
     */
    method?: string;
    /**
     * 上传任务每次上传的文件块大小（仅在支持断点续传的服务有效）
     * 数值类型，单位为Byte（字节），默认值为102400，若设置值小于等于0则表示不分块上传。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/uploader.html](http://www.html5plus.org/doc/zh_cn/uploader.html)
     */
    blocksize?: number;
    /**
     * 上传任务的优先级
     * 数值类型，数值越大优先级越高，默认优先级值为0。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/uploader.html](http://www.html5plus.org/doc/zh_cn/uploader.html)
     */
    priority?: number;
    /**
     * 上传任务超时时间
     * 数值类型，单位为s(秒)，默认值为120s。
     * 	超时时间为服务器响应请求的时间（不是上传任务完成的总时间），如果设置为0则表示永远不超时。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/uploader.html](http://www.html5plus.org/doc/zh_cn/uploader.html)
     */
    timeout?: number;
    /**
     * 上传任务重试次数
     * 数值类型，默认为重试3次。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/uploader.html](http://www.html5plus.org/doc/zh_cn/uploader.html)
     */
    retry?: number;
    /**
     * 上传任务重试间隔时间
     * 数值类型，单位为s(秒)，默认值为30s。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/uploader.html](http://www.html5plus.org/doc/zh_cn/uploader.html)
     */
    retryInterval?: number;
}

/**
 * JSON对象，添加上传文件的参数
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/uploader.html](http://www.html5plus.org/doc/zh_cn/uploader.html)
 */
interface PlusUploaderUploadFileOptions {
    /**
     * 文件键名
     * 上传文件在上传任务中的键名，默认值为为文件名称。
     * 	上传任务中如果已经存在相同key的上传文件或数据将导致添加文件失败。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/uploader.html](http://www.html5plus.org/doc/zh_cn/uploader.html)
     */
    key?: string;
    /**
     * 文件名称
     * 上传文件的名称，默认值为上传文件路径中的名称。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/uploader.html](http://www.html5plus.org/doc/zh_cn/uploader.html)
     */
    name?: string;
    /**
     * 文件类型
     * 上传文件的类型（如图片文件为“image/jpeg”），默认值自动根据文件后缀名称生成。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/uploader.html](http://www.html5plus.org/doc/zh_cn/uploader.html)
     */
    mime?: string;
}

/**
 * Video模块管理多媒体视频相关能力，可用创建视频播放控件，直播推流控件等。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/video.html](http://www.html5plus.org/doc/zh_cn/video.html)
 */
interface PlusVideo {
    /**
     * 视频播放控件对象
     * VideoPlayer对象表示视频播放控件对象，在窗口中播放视频，可支持本地视频(mp4/flv)，网络视频地址（mp4/flv/m3u8）及流媒体（rtmp/hls/rtsp）。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/video.html](http://www.html5plus.org/doc/zh_cn/video.html)
     */
    VideoPlayer?: PlusVideoVideoPlayer;
    /**
     * 视频播放控件参数
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/video.html](http://www.html5plus.org/doc/zh_cn/video.html)
     */
    VideoPlayerStyles?: PlusVideoVideoPlayerStyles;
    /**
     * 视频播放控件事件类型
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/video.html](http://www.html5plus.org/doc/zh_cn/video.html)
     */
    VideoPlayerEvents?: PlusVideoVideoPlayerEvents;
    /**
     * 直播推流控件对象
     * LivePusher对象表示直播推流控件对象，在窗口中显示捕获视频，实时推送到流媒体（RTMP）服务器。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/video.html](http://www.html5plus.org/doc/zh_cn/video.html)
     */
    LivePusher?: PlusVideoLivePusher;
    /**
     * 直播推流控件配置选项
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/video.html](http://www.html5plus.org/doc/zh_cn/video.html)
     */
    LivePusherStyles?: PlusVideoLivePusherStyles;
    /**
     * 直播推流控件事件类型
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/video.html](http://www.html5plus.org/doc/zh_cn/video.html)
     */
    LivePusherEvents?: PlusVideoLivePusherEvents;
    /**
     * 创建VideoPlayer对象
     * 调用此方法创建后并不会显示，需要调用Webview窗口的append方法将其添加到Webview窗口后才能显示。
     * 	注意：此时需要通过styles参数的top/left/width/height属性设置控件的位置及大小。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/video.html](http://www.html5plus.org/doc/zh_cn/video.html)
     */
    createVideoPlayer(id?: string, styles?: PlusVideoVideoPlayerStyles): PlusVideoVideoPlayer;
    /**
     * 创建LivePusher对象
     * 调用此方法创建后并不会显示，需要调用Webview窗口的append方法将其添加到Webview窗口后才能显示。
     * 	注意：此时需要通过styles参数的top/left/width/height属性设置控件的位置及大小。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/video.html](http://www.html5plus.org/doc/zh_cn/video.html)
     */
    createLivePusher(id?: string, styles?: PlusVideoLivePusherStyles): PlusVideoLivePusher;
    /**
     * 查找已经创建的VideoPlayer对象
     * 查找指定id的VideoPlayer对象，如果不存在则返回null。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/video.html](http://www.html5plus.org/doc/zh_cn/video.html)
     */
    getVideoPlayerById(id?: string): PlusVideoVideoPlayer;
    /**
     * 查找已经创建的LivePusher对象
     * 查找指定id的LivePusher对象，如果不存在则返回null。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/video.html](http://www.html5plus.org/doc/zh_cn/video.html)
     */
    getLivePusherById(id?: string): PlusVideoLivePusher;
}

/**
 * 视频播放控件对象
 * VideoPlayer对象表示视频播放控件对象，在窗口中播放视频，可支持本地视频(mp4/flv)，网络视频地址（mp4/flv/m3u8）及流媒体（rtmp/hls/rtsp）。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/video.html](http://www.html5plus.org/doc/zh_cn/video.html)
 */
interface PlusVideoVideoPlayer {
    /**
     * 监听视频播放控件事件
     * 向视频播放控件添加事件监听器，当指定的事件发生时，将触发listener函数的执行。 
     * 	可多次调用此方法向视频播放控件添加多个监听器，当监听的事件发生时，将按照添加的先后顺序执行。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/video.html](http://www.html5plus.org/doc/zh_cn/video.html)
     */
    addEventListener(event?: PlusVideoVideoPlayerEvents, listener?: (result: any) => void, capture?: boolean): void;
    /**
     * 设置视频播放控件参数
     * 用于动态更新视频播放控件的配置参数。
     * 	注意：有些选项无法动态更新，只能创建时进行设置，详情参考VideoPlayerStyles。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/video.html](http://www.html5plus.org/doc/zh_cn/video.html)
     */
    setStyles(styles?: PlusVideoVideoPlayerStyles): void;
    /**
     * 设置视频播放控件参数（将废弃，使用setStyles）
     * 用于动态更新视频播放控件的配置选项。
     * 	注意：有些选项无法动态更新，只能创建时进行设置，详情参考VideoPlayerStyles。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/video.html](http://www.html5plus.org/doc/zh_cn/video.html)
     */
    setOptions(options?: PlusVideoVideoPlayerStyles): void;
    /**
     * 播放视频
     * 如果视频已经处于播放状态，则操作无效。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/video.html](http://www.html5plus.org/doc/zh_cn/video.html)
     */
    play(): void;
    /**
     * 暂停视频
     * 如果视频未处于播放状态，则操作无效。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/video.html](http://www.html5plus.org/doc/zh_cn/video.html)
     */
    pause(): void;
    /**
     * 跳转到指定位置
     * 如果视频未处于播放状态，则操作无效。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/video.html](http://www.html5plus.org/doc/zh_cn/video.html)
     */
    seek(position?: number): void;
    /**
     * 切换到全屏
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/video.html](http://www.html5plus.org/doc/zh_cn/video.html)
     */
    requestFullScreen(direction?: number): void;
    /**
     * 退出全屏
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/video.html](http://www.html5plus.org/doc/zh_cn/video.html)
     */
    exitFullScreen(): void;
    /**
     * 停止播放视频
     * 如果视频未处于播放或暂停状态，则操作无效。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/video.html](http://www.html5plus.org/doc/zh_cn/video.html)
     */
    stop(): void;
    /**
     * 隐藏视频播放控件
     * 隐藏只是控件不可见，控件依然存在并且不改变播放状态。
     * 	如果控件已经隐藏，则操作无效。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/video.html](http://www.html5plus.org/doc/zh_cn/video.html)
     */
    hide(): void;
    /**
     * 显示视频播放控件
     * 将隐藏的控件显示出来（回复到隐藏前的状态）。
     * 	如果控件已经显示，则操作无效。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/video.html](http://www.html5plus.org/doc/zh_cn/video.html)
     */
    show(): void;
    /**
     * 关闭视频播放控件
     * 关闭操作将释放控件所有资源，不再可用。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/video.html](http://www.html5plus.org/doc/zh_cn/video.html)
     */
    close(): void;
    /**
     * 发送弹幕
     * 如果视频未处于播放状态，则操作无效。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/video.html](http://www.html5plus.org/doc/zh_cn/video.html)
     */
    sendDanmu(danmu?: any): void;
    /**
     * 设置倍速播放
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/video.html](http://www.html5plus.org/doc/zh_cn/video.html)
     */
    playbackRate(rate?: number): void;
}

/**
 * 视频播放控件参数
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/video.html](http://www.html5plus.org/doc/zh_cn/video.html)
 */
interface PlusVideoVideoPlayerStyles {
    /**
     * 视频资源地址
     * 支持本地地址，也支持网络地址及直播流（RTMP）。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/video.html](http://www.html5plus.org/doc/zh_cn/video.html)
     */
    src?: string;
    /**
     * 视频初始播放位置
     * 单位为秒（s）。
     * 	注意：仅在视频开始播放前设置有效。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/video.html](http://www.html5plus.org/doc/zh_cn/video.html)
     */
    'initial-time'?: number;
    /**
     * 视频长度
     * 单位为秒（s）。
     * 	注意：仅在视频开始播放前设置有效。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/video.html](http://www.html5plus.org/doc/zh_cn/video.html)
     */
    duration?: number;
    /**
     * 是否显示默认播放控件
     * 默认值为true。
     * 	包括播放/暂停按钮、播放进度、时间等。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/video.html](http://www.html5plus.org/doc/zh_cn/video.html)
     */
    controls?: boolean;
    /**
     * 弹幕列表
     * 弹幕JSON对象包括属性：text（String类型，弹幕文本类容），color（String类型，弹幕颜色，格式为#RRGGBB），time（Number类型，弹幕出现的时间，单位为秒）。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/video.html](http://www.html5plus.org/doc/zh_cn/video.html)
     */
    'danmu-list'?: any [];
    /**
     * 是否显示弹幕按钮
     * 默认值为false。
     * 	注意：仅在控件构造时设置有效，不能动态更新。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/video.html](http://www.html5plus.org/doc/zh_cn/video.html)
     */
    'danmu-btn'?: boolean;
    /**
     * 是否展示弹幕
     * 默认值为false。
     * 	注意：仅在控件构造时设置有效，不能动态更新。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/video.html](http://www.html5plus.org/doc/zh_cn/video.html)
     */
    'enable-danmu'?: boolean;
    /**
     * 是否自动播放
     * 默认值为false。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/video.html](http://www.html5plus.org/doc/zh_cn/video.html)
     */
    autoplay?: boolean;
    /**
     * 是否循环播放
     * 默认值为false。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/video.html](http://www.html5plus.org/doc/zh_cn/video.html)
     */
    loop?: boolean;
    /**
     * 是否静音播放
     * 默认值为false。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/video.html](http://www.html5plus.org/doc/zh_cn/video.html)
     */
    muted?: boolean;
    /**
     * 设置全屏时视频的方向
     * 不指定则根据宽高比自动判断。
     * 	有效值为： 0（正常竖向）, 90（屏幕逆时针90度）, -90（屏幕顺时针90度）。
     * 	默认值为-90。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/video.html](http://www.html5plus.org/doc/zh_cn/video.html)
     */
    direction?: number;
    /**
     * 是否显示播放进度
     * 默认值为true。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/video.html](http://www.html5plus.org/doc/zh_cn/video.html)
     */
    'show-progress'?: boolean;
    /**
     * 是否显示全屏按钮
     * 默认值为true。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/video.html](http://www.html5plus.org/doc/zh_cn/video.html)
     */
    'show-fullscreen-btn'?: boolean;
    /**
     * 是否显示视频底部控制栏的播放按钮
     * 默认值为true。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/video.html](http://www.html5plus.org/doc/zh_cn/video.html)
     */
    'show-play-btn'?: boolean;
    /**
     * 是否显示视频中间的播放按钮
     * 默认值为true。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/video.html](http://www.html5plus.org/doc/zh_cn/video.html)
     */
    'show-center-play-btn'?: boolean;
    /**
     * 是否开启控制进度的手势
     * 默认值为true。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/video.html](http://www.html5plus.org/doc/zh_cn/video.html)
     */
    'enable-progress-gesture'?: boolean;
    /**
     * 当视频大小与 video 容器大小不一致时，视频的表现形式
     * 有效值为：contain（包含），fill（填充），cover（覆盖）。
     * 	默认值为contain。
     * 	仅Android平台支持。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/video.html](http://www.html5plus.org/doc/zh_cn/video.html)
     */
    objectFit?: string;
    /**
     * 视频封面的图片网络资源地址
     * 如果 controls 属性值为 false 则设置 poster 无效。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/video.html](http://www.html5plus.org/doc/zh_cn/video.html)
     */
    poster?: string;
    /**
     * VideoPlayer控件左上角的垂直偏移量
     * 可取值：
     * 		像素值，如"100px"；
     * 		百分比，如"10%"，相对于父Webview窗口的高度；
     * 		自动计算，如"auto",根据height值自动计算，相对于父Webview窗口垂直居中。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/video.html](http://www.html5plus.org/doc/zh_cn/video.html)
     */
    top?: string;
    /**
     * VideoPlayer控件左上角的水平偏移量
     * 可取值：
     * 		像素值，如"100px"；
     * 		百分比，如"10%"，相对于父Webview窗口的宽度；
     * 		自动计算，如"auto"，根据width值自动计算，相对于父Webview窗口水平居中。
     * 	默认值为"0px"。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/video.html](http://www.html5plus.org/doc/zh_cn/video.html)
     */
    left?: string;
    /**
     * VideoPlayer控件的宽度
     * 可取值：
     * 		像素值，如"100px"；
     * 		百分比，如"10%"，相对于父Webview窗口的宽度。
     * 	默认值为"100%"。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/video.html](http://www.html5plus.org/doc/zh_cn/video.html)
     */
    width?: string;
    /**
     * VideoPlayer控件的高度
     * 可取值：
     * 		像素值，如"100px"；
     * 		百分比，如"10%"，相对于父Webview窗口的高度。
     * 	默认值为"100%"。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/video.html](http://www.html5plus.org/doc/zh_cn/video.html)
     */
    height?: string;
    /**
     * VideoPlayer控件在Webview窗口的布局模式
     * 可取值：
     * 		"static" - 静态布局模式，如果页面存在滚动条则随窗口内容滚动；
     * 		"absolute" - 绝对布局模式，如果页面存在滚动条不随窗口内容滚动；
     * 	默认值为"static"。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/video.html](http://www.html5plus.org/doc/zh_cn/video.html)
     */
    position?: string;
}

/**
 * 视频播放控件事件类型
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/video.html](http://www.html5plus.org/doc/zh_cn/video.html)
 */
interface PlusVideoVideoPlayerEvents {
    /**
     * 视频播放事件
     * 当视频开始/继续播放时触发。
     * 	无事件回调函数参数。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/video.html](http://www.html5plus.org/doc/zh_cn/video.html)
     */
    play?: string;
    /**
     * 视频暂停事件
     * 当视频暂停播放时触发。
     * 	无事件回调函数参数。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/video.html](http://www.html5plus.org/doc/zh_cn/video.html)
     */
    pause?: string;
    /**
     * 视频结束事件
     * 当视频播放到末尾时触发。
     * 	无事件回调函数参数。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/video.html](http://www.html5plus.org/doc/zh_cn/video.html)
     */
    ended?: string;
    /**
     * 视频播放进度更新事件
     * 当视频播放进度变化时触发，触发频率250ms一次。
     * 	事件回调函数参数event.detail = {currentTime:"Number类型，当前播放时间（单位为秒）",duration:"Number类型，视频总长度（单位为秒）"}。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/video.html](http://www.html5plus.org/doc/zh_cn/video.html)
     */
    timeupdate?: string;
    /**
     * 视频播放全屏播放状态变化事件
     * 当视频播放进入或退出全屏时触发。
     * 	事件回调函数参数event.detail = {fullScreen:"Boolean类型，当前状态是否为全屏", direction:"String类型，vertical或horizontal"}。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/video.html](http://www.html5plus.org/doc/zh_cn/video.html)
     */
    fullscreenchange?: string;
    /**
     * 视频缓冲事件
     * 当视频播放出现缓冲时触发。
     * 	无事件回调函数参数。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/video.html](http://www.html5plus.org/doc/zh_cn/video.html)
     */
    waiting?: string;
    /**
     * 视频错误事件
     * 当视频播放出错时触发。
     * 	无事件回调函数参数。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/video.html](http://www.html5plus.org/doc/zh_cn/video.html)
     */
    error?: string;
}

/**
 * 直播推流控件对象
 * LivePusher对象表示直播推流控件对象，在窗口中显示捕获视频，实时推送到流媒体（RTMP）服务器。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/video.html](http://www.html5plus.org/doc/zh_cn/video.html)
 */
interface PlusVideoLivePusher {
    /**
     * 监听直播推流控件事件
     * 向直播推流控件添加事件监听器，当指定的事件发生时，将触发listener函数的执行。 
     * 	可多次调用此方法向直播推流控件添加多个监听器，当监听的事件发生时，将按照添加的先后顺序执行。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/video.html](http://www.html5plus.org/doc/zh_cn/video.html)
     */
    addEventListener(event?: PlusVideoLivePusherEvents, listener?: (result: any) => void, capture?: boolean): void;
    /**
     * 设置直播推流控件参数
     * 用于动态更新直播推流控件的配置参数。
     * 	注意：有些选项无法动态更新，只能创建时进行设置，详情参考LivePusherStyles。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/video.html](http://www.html5plus.org/doc/zh_cn/video.html)
     */
    setStyles(styles?: PlusVideoLivePusherStyles): void;
    /**
     * 设置直播推流控件参数（将废弃，使用setStyles）
     * 用于动态更新直播推流控件的配置选项。
     * 	注意：有些选项无法动态更新，只能创建时进行设置，详情参考LivePusherStyles。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/video.html](http://www.html5plus.org/doc/zh_cn/video.html)
     */
    setOptions(options?: PlusVideoLivePusherStyles): void;
    /**
     * 预览摄像头采集数据
     * 调用摄像头采集图像数据，并在推流控件中预览（此时不会向服务器推流，需调用start方法才开始推流）。
     * 	注意：为了确保预览窗口大小正确，应该在创建控件后延时一定的时间（如500ms）进行预览。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/video.html](http://www.html5plus.org/doc/zh_cn/video.html)
     */
    preview(): void;
    /**
     * 开始推流
     * 如果已经处于推流状态，则操作无效。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/video.html](http://www.html5plus.org/doc/zh_cn/video.html)
     */
    start(successCB?: () => void, errorCB?: () => void): void;
    /**
     * 停止推流
     * 如果未处于推流状态，则操作无效。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/video.html](http://www.html5plus.org/doc/zh_cn/video.html)
     */
    stop(options?: any): void;
    /**
     * 暂停推流
     * 如果未处于推流状态，则操作无效。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/video.html](http://www.html5plus.org/doc/zh_cn/video.html)
     */
    pause(): void;
    /**
     * 恢复推流
     * 如果未处于暂停状态，则操作无效。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/video.html](http://www.html5plus.org/doc/zh_cn/video.html)
     */
    resume(): void;
    /**
     * 切换前后摄像头
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/video.html](http://www.html5plus.org/doc/zh_cn/video.html)
     */
    switchCamera(): void;
    /**
     * 快照
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/video.html](http://www.html5plus.org/doc/zh_cn/video.html)
     */
    snapshot(successCB?: () => void, errorCB?: () => void): void;
    /**
     * 关闭直播推流控件
     * 关闭操作将释放控件所有资源，不再可用。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/video.html](http://www.html5plus.org/doc/zh_cn/video.html)
     */
    close(): void;
}

/**
 * 直播推流控件配置选项
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/video.html](http://www.html5plus.org/doc/zh_cn/video.html)
 */
interface PlusVideoLivePusherStyles {
    /**
     * 推流地址
     * 支持RTMP协议。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/video.html](http://www.html5plus.org/doc/zh_cn/video.html)
     */
    url?: string;
    /**
     * 推流视频模式
     * 可取值：SD（标清）, HD（高清）, FHD（超清）。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/video.html](http://www.html5plus.org/doc/zh_cn/video.html)
     */
    mode?: string;
    /**
     * 是否静音
     * 默认值为false。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/video.html](http://www.html5plus.org/doc/zh_cn/video.html)
     */
    muted?: boolean;
    /**
     * 开启摄像头
     * 默认值为true。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/video.html](http://www.html5plus.org/doc/zh_cn/video.html)
     */
    'enable-camera'?: boolean;
    /**
     * 自动聚集
     * 默认值为true。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/video.html](http://www.html5plus.org/doc/zh_cn/video.html)
     */
    'auto-focus'?: boolean;
    /**
     * 是否美颜
     * 可取值0、1，其中0表示不使用美颜，1表示不使用美颜。
     * 	默认值为0(不使用美颜)。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/video.html](http://www.html5plus.org/doc/zh_cn/video.html)
     */
    beauty?: number;
    /**
     * 是否美白
     * 可取值0、1、2、3、4、5，其中0表示不使用美白，其余值分别表示美白的程度，值越大美白程度越大。
     * 	默认值为0（不使用美白）。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/video.html](http://www.html5plus.org/doc/zh_cn/video.html)
     */
    whiteness?: number;
    /**
     * 宽高比
     * 可取值：3:4, 9:16。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/video.html](http://www.html5plus.org/doc/zh_cn/video.html)
     */
    aspect?: string;
    /**
     * LivePusher控件左上角的垂直偏移量
     * 可取值：
     * 		像素值，如"100px"；
     * 		百分比，如"10%"，相对于父Webview窗口的高度；
     * 		自动计算，如"auto",根据height值自动计算，相对于父Webview窗口垂直居中。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/video.html](http://www.html5plus.org/doc/zh_cn/video.html)
     */
    top?: string;
    /**
     * LivePusher控件左上角的水平偏移量
     * 可取值：
     * 		像素值，如"100px"；
     * 		百分比，如"10%"，相对于父Webview窗口的宽度；
     * 		自动计算，如"auto"，根据width值自动计算，相对于父Webview窗口水平居中。
     * 	默认值为"0px"。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/video.html](http://www.html5plus.org/doc/zh_cn/video.html)
     */
    left?: string;
    /**
     * LivePusher控件的宽度
     * 可取值：
     * 		像素值，如"100px"；
     * 		百分比，如"10%"，相对于父Webview窗口的宽度。
     * 	默认值为"100%"。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/video.html](http://www.html5plus.org/doc/zh_cn/video.html)
     */
    width?: string;
    /**
     * LivePusher控件的高度
     * 可取值：
     * 		像素值，如"100px"；
     * 		百分比，如"10%"，相对于父Webview窗口的高度。
     * 	默认值为"100%"。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/video.html](http://www.html5plus.org/doc/zh_cn/video.html)
     */
    height?: string;
    /**
     * LivePusher控件在Webview窗口的布局模式
     * 可取值：
     * 		"static" - 静态布局模式，如果页面存在滚动条则随窗口内容滚动；
     * 		"absolute" - 绝对布局模式，如果页面存在滚动条不随窗口内容滚动；
     * 	默认值为"static"。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/video.html](http://www.html5plus.org/doc/zh_cn/video.html)
     */
    position?: string;
}

/**
 * 直播推流控件事件类型
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/video.html](http://www.html5plus.org/doc/zh_cn/video.html)
 */
interface PlusVideoLivePusherEvents {
    /**
     * 状态变化事件
     * 当推流连接服务器状态变化时触发。
     * 	事件回调函数参数event={type:"事件类型，此时为statechange",target:"触发此事件的直播推流控件对象",detail:{code:"状态码，参考后面状态码说明",message:"描述信息"}}。
     * 	其中code状态码：
     * 	1001 - 已经连接推流服务器；
     * 	1002 - 已经与服务器握手完毕,开始推流；
     * 	1003 - 打开摄像头成功；
     * 	1004 - 录屏启动成功；
     * 	1005 - 推流动态调整分辨率；
     * 	1006 - 推流动态调整码率；
     * 	1007 - 首帧画面采集完成；
     * 	1008 - 编码器启动；
     * 	-1301 - 打开摄像头失败；
     * 	-1302 - 打开麦克风失败；
     * 	-1303 - 视频编码失败；
     * 	-1304 - 音频编码失败；
     * 	-1305 - 不支持的视频分辨率；
     * 	-1306 - 不支持的音频采样率；
     * 	-1307 - 网络断连，且经多次重连抢救无效，更多重试请自行重启推流；
     * 	-1308 - 开始录屏失败，可能是被用户拒绝；
     * 	-1309 - 录屏失败，不支持的Android系统版本，需要5.0以上的系统；
     * 	-1310 - 录屏被其他应用打断了；
     * 	-1311 - Android Mic打开成功，但是录不到音频数据；
     * 	-1312 - 录屏动态切横竖屏失败；
     * 	1101 - 网络状况不佳：上行带宽太小，上传数据受阻；
     * 	1102 - 网络断连, 已启动自动重连；
     * 	1103 - 硬编码启动失败,采用软编码；
     * 	1104 - 视频编码失败；
     * 	1105 - 新美颜软编码启动失败，采用老的软编码；
     * 	1106 - 新美颜软编码启动失败，采用老的软编码；
     * 	3001 - RTMP -DNS解析失败；
     * 	3002 - RTMP服务器连接失败；
     * 	3003 - RTMP服务器握手失败；
     * 	3004 - RTMP服务器主动断开，请检查推流地址的合法性或防盗链有效期；
     * 	3005 - RTMP 读/写失败。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/video.html](http://www.html5plus.org/doc/zh_cn/video.html)
     */
    statechange?: string;
    /**
     * 网络状态通知事件
     * 当推流的网络状态发生变化时触发。
     * 	事件回调函数参数event={type:"事件类型，此时为netstatus",target:"触发此事件的直播推流控件对象",detail:{videoBitrate:"视频码率",audioBitrate:"音频码率",videoFPS:"视频帧率",netSpeed:"推流网速",videoWidth:"视频宽度",videoHeight:"视频高度"}}。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/video.html](http://www.html5plus.org/doc/zh_cn/video.html)
     */
    netstatus?: string;
    /**
     * 渲染错误事件
     * 当推流发生错误是触发。
     * 	事件回调函数参数event={type:"事件类型，此时为error",target:"触发此事件的直播推流控件对象",detail:{code:"错误编码，参考后面错误码说明",message:"描述信息"}}。
     * 	其中code错误码：
     * 	1001 - 用户禁止使用摄像头；
     * 	1002 - 用户禁止使用录音。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/video.html](http://www.html5plus.org/doc/zh_cn/video.html)
     */
    error?: string;
}

/**
 * Webview模块管理应用窗口界面，实现多窗口的逻辑控制管理操作。通过plus.webview可获取应用界面管理对象。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
 */
interface PlusWebview {
    /**
     * 一组用于定义页面或控件显示动画效果
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    AnimationTypeShow?: PlusWebviewAnimationTypeShow;
    /**
     * 一组用于定义页面或控件关闭的动画效果
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    AnimationTypeClose?: PlusWebviewAnimationTypeClose;
    /**
     * Webview窗口对象，用于操作加载HTML页面的窗口
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    WebviewObject?: PlusWebviewWebviewObject;
    /**
     * Webview窗口动画参数
     * 用于指定动画目标窗口，起始位置、目标位置等信息。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    WebviewAnimationOptions?: PlusWebviewWebviewAnimationOptions;
    /**
     * Webview窗口动画样式
     * 用于指定动画窗口的起始位置、目标位置等信息。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    WebviewAnimationStyles?: PlusWebviewWebviewAnimationStyles;
    /**
     * Webview窗口回弹样式
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    WebviewBounceStyle?: PlusWebviewWebviewBounceStyle;
    /**
     * Webview窗口内容动画参数
     * 指定动画的类型、持续时间等信息。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    WebviewContentAnimationOptions?: PlusWebviewWebviewContentAnimationOptions;
    /**
     * 原生控件在窗口中停靠的方式
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    WebviewDock?: PlusWebviewWebviewDock;
    /**
     * Webview窗口滑动事件数据
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    WebviewDragEvent?: PlusWebviewWebviewDragEvent;
    /**
     * 窗口手势操作参数
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    WebviewDragOptions?: PlusWebviewWebviewDragOptions;
    /**
     * 手势操作关联对象参数
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    WebviewDragOtherViewOptions?: PlusWebviewWebviewDragOtherViewOptions;
    /**
     * 截屏绘制操作参数
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    WebviewDrawOptions?: PlusWebviewWebviewDrawOptions;
    /**
     * 窗口收藏参数
     * 在流应用环境中调用收藏功能时使用的参数。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    WebviewFavoriteOptions?: PlusWebviewWebviewFavoriteOptions;
    /**
     * 创建加载HTML数据参数
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    WebviewLoadDataOptions?: PlusWebviewWebviewLoadDataOptions;
    /**
     * 窗口的分享参数
     * 在流应用环境中调用分享功能时使用的参数。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    WebviewShareOptions?: PlusWebviewWebviewShareOptions;
    /**
     * 窗口原生子View控件样式
     * 可设置原生控件的标识、大小、位置以及绘制的内容等。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    WebviewSubNViewStyles?: PlusWebviewWebviewSubNViewStyles;
    /**
     * 窗口标题栏控件样式
     * 标题栏控件固定高度为44px,可通过Webview窗口对象的getTitleNView方法获取标题栏原生控件对象动态绘制内容。
     * 	可以通过WebviewObject对象的getTitleNView()获取标题栏的NView对象，然后调用其setStyle方法更新样式。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    WebviewTitleNViewStyles?: PlusWebviewWebviewTitleNViewStyles;
    /**
     * 窗口标题栏自定义按钮样式
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    WebviewTitleNViewButtonStyles?: PlusWebviewWebviewTitleNViewButtonStyles;
    /**
     * 标题栏控件的进度条样式
     * 显示在标题栏控件底部。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    WebviewProgressStyles?: PlusWebviewWebviewProgressStyles;
    /**
     * 窗口标题栏控件的分割线样式
     * 显示在标题栏控件底部。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    WebviewSplitLineStyles?: PlusWebviewWebviewSplitLineStyles;
    /**
     * Webview窗口事件
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    WebviewEvent?: PlusWebviewWebviewEvent;
    /**
     * JSON对象，原生窗口扩展参数
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    WebviewExtraOptions?: PlusWebviewWebviewExtraOptions;
    /**
     * 原生控件在窗口中显示的位置
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    WebviewPosition?: PlusWebviewWebviewPosition;
    /**
     * Webview窗口下拉刷新样式
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    WebviewPullToRefreshStyles?: PlusWebviewWebviewPullToRefreshStyles;
    /**
     * Webview窗口rendered事件参数
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    WebviewRenderedEventOptions?: PlusWebviewWebviewRenderedEventOptions;
    /**
     * 替换H5标准API配置信息
     * 目前仅支持替换H5标准定位接口
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    WebviewReplaceWebApiOptions?: PlusWebviewWebviewReplaceWebApiOptions;
    /**
     * JSON对象，Webview窗口的系统状态栏区域样式
     * 仅在应用设置为沉浸式状态栏样式下有效，非沉浸式状态栏样式下忽略此属性。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    WebviewStatusbarStyles?: PlusWebviewWebviewStatusbarStyles;
    /**
     * JSON对象，Webview窗口对象的样式
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    WebviewStyles?: PlusWebviewWebviewStyles;
    /**
     * 一组用于定义页面或控件变形的属性
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    WebviewTransform?: PlusWebviewWebviewTransform;
    /**
     * 一组用于定义页面或控件转换效果的属性
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    WebviewTransition?: PlusWebviewWebviewTransition;
    /**
     * 拦截Webview窗口资源请求的参数
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    WebviewOverrideResourceOptions?: PlusWebviewWebviewOverrideResourceOptions;
    /**
     * 拦截Webview窗口URL请求的属性
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    WebviewOverrideUrlOptions?: PlusWebviewWebviewOverrideUrlOptions;
    /**
     * 监听Webview窗口资源加载的属性
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    WebviewListenResourceOptions?: PlusWebviewWebviewListenResourceOptions;
    /**
     * 获取所有Webview窗口
     * 获取应用中已创建的所有Webview窗口，包括所有未显示的Webview窗口。
     * 	返回WebviewObject对象在数组中按创建的先后顺序排列，即数组中第一个WebviewObject对象用是加载应用的入口页面。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    all(): PlusWebview [];
    /**
     * 关闭Webview窗口
     * 关闭已经打开的Webview窗口，需先获取窗口对象或窗口id，并可指定关闭窗口的动画及动画持续时间。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    close(id_wvobj?: string, aniClose?: string, duration?: number, extras?: PlusWebviewWebviewExtraOptions): void;
    /**
     * 创建新的Webview窗口
     * 创建Webview窗口，用于加载新的HTML页面，可通过styles设置Webview窗口的样式，创建完成后需要调用show方法才能将Webview窗口显示出来。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    create(url?: string, id?: string, styles?: PlusWebviewWebviewStyles, extras?: any): PlusWebviewWebviewObject;
    /**
     * 获取当前窗口的WebviewObject对象
     * 获取当前页面所属的Webview窗口对象。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    currentWebview(): PlusWebviewWebviewObject;
    /**
     * 获取屏幕所有可视的Webview窗口
     * 仅在屏幕区域显示的Webview窗口，如果Webview窗口显示了但被其它Webview窗口盖住则认为不可视。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    getDisplayWebview(): PlusWebview [];
    /**
     * 查找指定标识的WebviewObject窗口
     * 在已创建的窗口列表中查找指定标识的Webview窗口并返回。
     * 	若没有查找到指定标识的窗口则返回null，若存在多个相同标识的Webview窗口，则返回第一个创建的Webview窗口。
     * 	如果要获取应用入口页面所属的Webview窗口，其标识为应用的%APPID%，可通过plus.runtime.appid获取。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    getWebviewById(id?: string): PlusWebviewWebviewObject;
    /**
     * 获取应用首页WebviewObject窗口对象
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    getLaunchWebview(): PlusWebviewWebviewObject;
    /**
     * 获取应用第二个首页WebviewObject窗口对象
     * 在双首页模式下（在manifest.json的plus-&gt;secondwebview节点下配置），应用会自动创建两个首页Webview，通过getLaunchWebview()可获取第一个首页窗口对象，通过getSecondWebview()可获取第二个首页窗口对象。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    getSecondWebview(): PlusWebviewWebviewObject;
    /**
     * 获取应用显示栈顶的WebviewObject窗口对象
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    getTopWebview(): PlusWebviewWebviewObject;
    /**
     * 隐藏Webview窗口
     * 根据指定的WebviewObject对象或id隐藏Webview窗口，使得窗口不可见。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    hide(id_wvobj?: string, aniHide?: string, duration?: number, extras?: PlusWebviewWebviewExtraOptions): void;
    /**
     * 创建并打开Webview窗口
     * 创建并显示Webview窗口，用于加载新的HTML页面，可通过styles设置Webview窗口的样式，创建完成后自动将Webview窗口显示出来。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    open(url?: string, id?: string, styles?: PlusWebviewWebviewStyles, aniShow?: string, duration?: number, showedCB?: () => void): PlusWebviewWebviewObject;
    /**
     * 预载网络页面
     * 预载网络页面会向服务器发起http/https请求获取html页面内容，
     * 	待Webview窗口加载此url页面时会则根据缓存机制优先使用预载的页面内容(加快页面显示速度)。
     * 	注意：预载网络页面仅在运行期生效，为了节省内存仅保留最后5个预载页面数据。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    prefetchURL(url?: string): void;
    /**
     * 预载网络页面（多个地址）
     * 预载网络页面会向服务器发起http/https请求获取html页面内容，
     * 	待Webview窗口加载此url页面时会则根据缓存机制优先使用预载的页面内容(加快页面显示速度)。
     * 	注意：预载网络页面仅在运行期生效，为了节省内存仅保留最后5个预载页面数据。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    prefetchURLs(urls?: any []): void;
    /**
     * 显示Webview窗口
     * 显示已创建或隐藏的Webview窗口，需先获取窗口对象或窗口id，并可指定显示窗口的动画及动画持续时间。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    show(id_wvobj?: string, aniShow?: string, duration?: number, showedCB?: () => void, extras?: PlusWebviewWebviewExtraOptions): PlusWebviewWebviewObject;
    /**
     * Webview窗口组合动画
     * 同步组合两个Webview窗口动画，动画完成后窗口的位置会发生变化，一次需要在动画属性参数中设置动画起始位置、结束位置等。
     * 	注意：此动画操作会改变窗口位置（如left值等），再次调用show方法时需要确保其位置是否在可视区域，如果不在可视区域则需要调用窗口的setStyle方法设置其位置到可视区域内，如setStyle({left:'0px'});。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    startAnimation(options?: PlusWebviewWebviewAnimationOptions, otherOptions?: PlusWebviewWebviewAnimationOptions, callback?: (result: any) => void): void;
    /**
     * 获取Webview默认是否开启硬件加速
     * 由于不同设备对硬件加速的支持情况存在差异，开启硬件加速能加速HTML页面的渲染，但也会消耗更多的系统资源，从而导致在部分设备上可能出现闪屏、发虚、分块渲染等问题，	因此5+ Runtime会根据设备实际支持情况自动选择是否开启硬件加速。
     * 	关闭硬件加速则可能会导致Webview页面无法支持Video标签播放视频等问题，如果在特定情况下需要调整修改默认开启硬件加速的行为，则可通过plus.webview.defaultHardwareAccelerated()方法获取当前设备默认是否开启硬件加速状态，从而决定是否需要显式开启或关闭指定Webview的硬件加速功能（通过WebviewStyles的hardwareAccelerated属性设置）。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    defaultHardwareAccelerated(): boolean;
}

/**
 * 一组用于定义页面或控件显示动画效果
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
 */
interface PlusWebviewAnimationTypeShow {
    /**
     * 自动选择动画效果
     * 自动选择动画效果，使用上次显示窗口设置的动画效果，如果是第一次显示则默认动画效果“none”。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    auto?: string;
    /**
     * 无动画效果
     * 立即显示页面，无任何动画效果，页面显示默认的动画效果。
     * 	此效果忽略动画时间参数，立即显示。
     * 	对应关闭动画"none"。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    none?: string;
    /**
     * 从右侧横向滑动效果
     * 页面从屏幕右侧外向内横向滑动显示。
     * 	对应关闭动画"slide-out-right"。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    'slide-in-right'?: string;
    /**
     * 从左侧横向滑动效果
     * 页面从屏幕左侧向右横向滑动显示。
     * 	对应关闭动画"slide-out-left"。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    'slide-in-left'?: string;
    /**
     * 从上侧竖向滑动效果
     * 页面从屏幕上侧向下竖向滑动显示。
     * 	对应关闭动画"slide-out-top"。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    'slide-in-top'?: string;
    /**
     * 从下侧竖向滑动效果
     * 页面从屏幕下侧向上竖向滑动显示。
     * 	对应关闭动画"slide-out-bottom"。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    'slide-in-bottom'?: string;
    /**
     * 从透明到不透明逐渐显示效果
     * 页面从完全透明到不透明逐渐显示。
     * 	对应关闭动画"fade-out"。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    'fade-in'?: string;
    /**
     * 从小到大逐渐放大显示效果
     * 页面在屏幕中间从小到大逐渐放大显示。
     * 	对应关闭动画"zoom-in"。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    'zoom-out'?: string;
    /**
     * 从小到大逐渐放大并且从透明到不透明逐渐显示效果
     * 页面在屏幕中间从小到大逐渐放大并且从透明到不透明逐渐显示。
     * 	对应关闭动画"zoom-fade-in"。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    'zoom-fade-out'?: string;
    /**
     * 从右侧平移入栈动画效果
     * 页面从屏幕右侧滑入显示，同时上一个页面带阴影效果从屏幕左侧滑出隐藏。
     * 	对应关闭动画"pop-out"。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    'pop-in'?: string;
}

/**
 * 一组用于定义页面或控件关闭的动画效果
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
 */
interface PlusWebviewAnimationTypeClose {
    /**
     * 自动选择动画效果
     * 自动选择显示窗口相对于的动画效果。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    auto?: string;
    /**
     * 无动画
     * 立即关闭页面，无任何动画效果。
     * 	此效果忽略动画时间参数，立即关闭。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    none?: string;
    /**
     * 横向向右侧滑出屏幕动画
     * 页面从屏幕中横向向右侧滑动到屏幕外关闭。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    'slide-out-right'?: string;
    /**
     * 横向向左侧滑出屏幕动画
     * 页面从屏幕中横向向左侧滑动到屏幕外关闭。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    'slide-out-left'?: string;
    /**
     * 竖向向上侧滑出屏幕动画
     * 页面从屏幕中竖向向上侧滑动到屏幕外关闭。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    'slide-out-top'?: string;
    /**
     * 竖向向下侧滑出屏幕动画
     * 页面从屏幕中竖向向下侧滑动到屏幕外关闭。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    'slide-out-bottom'?: string;
    /**
     * 从不透明到透明逐渐隐藏动画
     * 页面从不透明到透明逐渐隐藏关闭。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    'fade-out'?: string;
    /**
     * 从大逐渐缩小关闭动画
     * 页面逐渐向页面中心缩小关闭。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    'zoom-in'?: string;
    /**
     * 从大逐渐缩小并且从不透明到透明逐渐隐藏关闭动画
     * 页面逐渐向页面中心缩小并且从不透明到透明逐渐隐藏关闭。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    'zoom-fade-in'?: string;
    /**
     * 从右侧平移出栈动画效果
     * 页面从屏幕右侧滑出消失，同时上一个页面带阴影效果从屏幕左侧滑入显示。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    'pop-out'?: string;
}

/**
 * Webview窗口对象，用于操作加载HTML页面的窗口
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
 */
interface PlusWebviewWebviewObject {
    /**
     * Webview窗口的标识
     * 在打开或创建Webview窗口时设置，如果没有设置窗口标识，此属性值为undefined。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    id?: string;
    /**
     * Webview窗口关闭事件
     * 当Webview窗口关闭时触发此事件，类型为EventCallback。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    onclose?: (result: any) => void;
    /**
     * Webview窗口错误事件
     * 当Webview窗口加载错误时触发此事件，类型为EventCallback。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    onerror?: PlusWebviewWebviewEvent;
    /**
     * Webview窗口页面加载完成事件
     * 当Webview窗口页面加载完成时触发此事件，类型为EventCallback。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    onloaded?: PlusWebviewWebviewEvent;
    /**
     * Webview窗口页面开始加载事件
     * 当Webview窗口开始加载新页面时触发此事件，类型为EventCallback。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    onloading?: PlusWebviewWebviewEvent;
    /**
     * 添加事件监听器
     * 向Webview窗口添加事件监听器，当指定的事件发生时，将触发listener函数的执行。
     * 		可多次调用此方法向Webview添加多个监听器，当监听的事件发生时，将按照添加的先后顺序执行。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    addEventListener(event?: PlusWebviewWebviewEvent, listener?: (result: any) => void, capture?: boolean): void;
    /**
     * 在Webview窗口中添加子窗口
     * 将另一个Webview窗口作为子窗口添加到当前Webview窗口中，添加后其所有权归父Webview窗口，当父窗口关闭时子窗口自动关闭。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    append(webview?: PlusNativeObjView): void;
    /**
     * 添加Webview窗口预加载js文件
     * 对于一些网络HTML页面，在无法修改HTML页面时可通过此方法自动加载本地js文件。
     * 	当Webview窗口跳转到新页面时也会自动加载指定的js执行，添加多个js文件将按照添加的先后顺序执行。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    appendJsFile(file?: string): void;
    /**
     * Webview窗口内容动画
     * 动画后可能会导致Webview窗口显示内容改变，可通过调用restore方法恢复。
     * 	当Webview窗口内容动画引起内容不可见（透明），将显示此窗口后面的内容。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    animate(options?: PlusWebviewWebviewContentAnimationOptions, callback?: () => void): void;
    /**
     * 后退到上次加载的页面
     * Webview窗口历史记录操作，后退到窗口上次加载的HTML页面。
     * 	如果窗口历史记录中没有可后退的页面则不触发任何操作。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    back(): void;
    /**
     * 开始Webview窗口的下拉刷新
     * 开始触发下拉刷新效果，与用户操作下拉刷新行为一致（有动画效果）。
     * 	触发setPullTorefresh方法设置的下拉刷新事件回调。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    beginPullToRefresh(): void;
    /**
     * 查询Webview窗口是否可后退
     * Webview窗口历史记录查询操作，获取Webview是否可后退到历史加载的页面，结果通过queryCallback回调方法返回。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    canBack(queryCallback?: (result: any) => void): void;
    /**
     * 查询Webview窗口是否可前进
     * Webview窗口历史记录查询操作，获取Webview是否可前进到历史加载的页面，结果通过queryCallback回调方法返回。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    canForward(queryCallback?: (result: any) => void): void;
    /**
     * 检测Webview窗口是否渲染完成
     * 检测方式为判断的Webview窗口内容是否为白屏，如果非白屏则认为渲染完成，否则认为渲染未完成。
     * 	通过successCallback回调函数返回结果，如果检测过程中发生错误则触发errorCallback回调函数。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    checkRenderedContent(options?: PlusWebviewWebviewRenderedEventOptions, successCallback?: () => void, errorCallback?: (result: any) => void): void;
    /**
     * 获取Webview窗口的所有子Webview窗口
     * 获取添加到Webview窗口中的所有子Webview窗口，如果没有子Webview窗口则返回空数组。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    children(): PlusWebview [];
    /**
     * 清空原生Webview窗口加载的内容
     * 清除原生窗口的内容，用于重置原生窗口加载的内容，清除其加载的历史记录等内容。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    clear(): void;
    /**
     * 关闭Webview窗口
     * 关闭并销毁Webview窗口，可设置关闭动画和动画持续时间。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    close(aniClose?: PlusWebviewAnimationTypeClose, duration?: number, extras?: PlusWebviewWebviewExtraOptions): void;
    /**
     * 设置Webview窗口的滑屏操作手势
     * 将Webview窗口的左右滑动手势关联到其它Webview窗口，可实现滑动切换显示Webview的动画效果（如Tab页面切换效果）。
     * 	注意：滑屏操作会改变窗口位置（如left值等），如果不在可视区域则需要调用窗口的setStyle方法设置其位置到可视区域内，如setStyle({left:'0px'});。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    drag(options?: PlusWebviewWebviewDragOptions, otherView?: PlusWebviewWebviewDragOtherViewOptions, callback?: (result: PlusWebviewWebviewDragEvent) => void): void;
    /**
     * 截屏绘制
     * 将Webview窗口的可视区域截屏并绘制到Bitmap图片对象中。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    draw(bitmap?: PlusNativeObjBitmap, successCallback?: () => void, errorCallback?: (result: any) => void, options?: PlusWebviewWebviewDrawOptions): void;
    /**
     * 结束Webview窗口的下拉刷新
     * 关闭下拉刷新效果，恢复到开始下拉刷新之前的效果。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    endPullToRefresh(): void;
    /**
     * 在Webview窗口中执行JS脚本
     * 将JS脚本发送到Webview窗口中运行，可用于实现Webview窗口间的数据通讯。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    evalJS(js?: string): void;
    /**
     * 前进到上次加载的页面
     * Webview窗口历史记录操作，前进到窗口上次加载的HTML页面。
     * 	如果窗口历史记录中没有可前进的页面则不触发任何操作。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    forward(): void;
    /**
     * 获取Webview窗口的收藏参数
     * 获取Webview窗口的收藏参数，如收藏页面的标题、图标、地址等。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    getFavoriteOptions(): PlusWebviewWebviewFavoriteOptions;
    /**
     * 获取Webview窗口的分享参数
     * 获取Webview窗口的分享参数，如分享的标题、图标、链接地址等。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    getShareOptions(): PlusWebviewWebviewShareOptions;
    /**
     * 获取Webview窗口的样式
     * 获取Webview窗口的样式属性，如窗口位置、大小等信息。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    getStyle(): PlusWebviewWebviewStyles;
    /**
     * 获取Webview窗口的原生子View控件对象
     * 创建Webview窗口的所有原生子View控件。
     * 	可以在创建窗口时设置其subNViews属性自动创建（应用首页可通过manfest.json中的plus-&gt;launchwebview-&gt;subNNViews节点配置创建）；
     * 	也可以通过Webview窗口的append方法将已经创建的原生View控件添加为其子。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    getSubNViews(): any [];
    /**
     * 获取Webview窗口加载HTML页面的标题
     * 标题为HTML页面head节点下title节点中的文本内容，当窗口内容发生页面内跳转时可通过窗口触发的“loaded”事件中调用此方法来获取跳转后页面的标题。
     * 	如果HTML页面没有使用title节点来设置标题，则返回空字符串。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    getTitle(): string;
    /**
     * 获取Webview窗口的标题栏控件对象
     * 创建Webview窗口时设置其titleNView属性时则自动创建标题栏控件，应用首页可通过manfest.json中的plus-&gt;launchwebview-&gt;titleNView节点配置创建标题栏控件。
     * 	可通过此方法获取Webview窗口创建的标题栏控件，对象类型为plus.nativeObj.View，可通过调用其drawBitmap/drawRect/drawText方法绘制更新内容来实现自定义样式。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    getTitleNView(): PlusNativeObjView;
    /**
     * 获取Webview窗口加载HTML页面的地址
     * 当窗口内容发生页面内跳转时可通过窗口触发的“loaded”事件中调用此方法来获取跳转后页面的地址。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    getURL(): string;
    /**
     * 隐藏Webview窗口
     * 隐藏Webview窗口可保存已加载HTML页面的上下文数据，能降低应用使用的系统资源，通过show方法可将隐藏的Webview窗口显示出来。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    hide(aniHide?: PlusWebviewAnimationTypeClose, duration?: number, extras?: PlusWebviewWebviewExtraOptions): void;
    /**
     * 隐藏标题栏上按钮的红点
     * 仅在窗口使用原生标题栏（titleNView）时生效，未显示原生标题栏时操作此接口无任何效果。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    hideTitleNViewButtonRedDot(index?: number): void;
    /**
     * 是否拦截Webview窗口的触屏事件
     * 拦截后触屏事件不再传递，否则传递给View控件下的其它窗口处理。
     * 	Webview窗口默认拦截所有触屏事件。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    interceptTouchEvent(intercept?: boolean): void;
    /**
     * 查询Webview窗口是否开启硬件加速
     * 若Webview窗口已经开启硬件加速则返回true，否则返回false。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    isHardwareAccelerated(): boolean;
    /**
     * 查询Webview窗口是否可见
     * 若Webview窗口已经显示（调用过show方法，即使被其它窗口挡住了也认为已显示）则返回true，若Webview窗口被隐藏则返回false。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    isVisible(): boolean;
    /**
     * 监听页面开始加载资源
     * Webview加载资源时，如果满足options参数中定义的条件，则触发callback回调。
     * 	此方法仅触发回调事件，不会阻止资源的加载。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    listenResourceLoading(options?: PlusWebviewWebviewListenResourceOptions, callback?: (result: any) => void): void;
    /**
     * 加载新HTML数据
     * 触发Webview窗口加载HTML页面数据，如果HTML数据无效将导致页面加载失败。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    loadData(data?: string, options?: PlusWebviewWebviewLoadDataOptions): void;
    /**
     * 加载新URL页面
     * 触发Webview窗口从新的URL地址加载页面，如果url地址无效将导致页面显示失败。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    loadURL(url?: string, additionalHttpHeaders?: any): void;
    /**
     * 获取Webview窗口对象的原生（Native.JS）实例对象
     * Android平台返回Webview窗口对象的android.webkit.Webview实例对象，
     * 	iOS平台返回Webview窗口对象的UIWebview实例对象。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    nativeInstanceObject(): PlusAndroidInstanceObject | PlusIosInstanceObject;
    /**
     * 获取在当前Webview窗口中创建的所有窗口
     * 返回从当前Webview中调用plus.webview.open或plus.webview.create创建的所有Webview窗口数组。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    opened(): PlusWebview [];
    /**
     * 获取当前Webview窗口的创建者
     * 创建者为调用plus.webview.open或plus.webview.create方法创建当前窗口的Webview窗口。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    opener(): PlusWebviewWebviewObject;
    /**
     * 拦截Webview窗口的资源加载
     * 根据区配规则拦截Webview窗口加载资源的URL地址，重定向到其它资源地址（暂仅支持本地地址）。
     * 	注意：多次调用overrideResourceRequest时仅以最后一次调用设置的参数值生效。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    overrideResourceRequest(options?: PlusWebview []): void;
    /**
     * 拦截Webview窗口的URL请求
     * 拦截URL请求后，Webview窗口将不会跳转到新的URL地址，此时将通过callback回调方法返回拦截的URL地址（可新开Webview窗口加载URL页面等）。
     * 	此方法只能拦截窗口的网络超链接跳转（包括调用loadURL方法触发的跳转），不可拦截页面请求资源请求（如加载css/js/png等资源的请求）。
     * 	注意：多次调用overrideUrlLoading时仅以最后一次调用设置的参数值生效。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    overrideUrlLoading(options?: PlusWebviewWebviewOverrideUrlOptions, callback?: (result: any) => void): void;
    /**
     * 获取当前Webview窗口的父窗口
     * Webview窗口作为子窗口添加（Webview.append）到其它Webview窗口中时有效，这时其它Webview窗口为父窗口。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    parent(): PlusWebviewWebviewObject;
    /**
     * 重新加载Webview窗口显示的HTML页面
     * 触发Webview窗口重新加载当前显示的页面内容。
     * 	如果当前HTML页面未加载完则停止并重新加载，如果当前Webview窗口没有加载任何页面则无响应。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    reload(force?: boolean): void;
    /**
     * 重置Webview窗口的回弹位置
     * 开启窗口回弹效果后，当窗口中展现的内容滚动到头（顶部或底部）时，再拖拽时窗口整体内容将跟随移动，松开后自动回弹到停靠位置。
     * 	这时需要调用此方法来重置窗口的回弹位置，窗口将采用动画方式回弹到其初始显示的位置。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    resetBounce(): void;
    /**
     * 恢复Webview控件显示内容
     * 恢复调用animate方法改变Webview控件的内容，更新至动画前显示的内容。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    restore(): void;
    /**
     * 移除子Webview窗口
     * 从当前Webview窗口移除指定的子Webview窗口，若指定的webview对象不是当前窗口的子窗口则无任何作用。
     * 	移除后子Webview窗口不会关闭，需要调用其close方法才能真正关闭并销毁。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    remove(webview?: PlusNativeObjView): void;
    /**
     * 移除Webview窗口事件监听器
     * 从Webview窗口移除通过addEventListener方法添加的事件监听器，若没有查找到对应的事件监听器，则无任何作用。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    removeEventListener(event?: PlusWebviewWebviewEvent, listener?: (result: any) => void): void;
    /**
     * 从父窗口中移除
     * 从所属的父Webview窗口移除，如果没有父窗口，则无任何作用。
     * 	从父窗口中移除后子Webview窗口不会关闭，需要调用其close方法才能真正关闭并销毁。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    removeFromParent(): void;
    /**
     * 移除标题栏上按钮的角标
     * 仅在窗口使用原生标题栏（titleNView）时生效，未显示原生标题栏时操作此接口无任何效果。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    removeTitleNViewButtonBadge(index?: number): void;
    /**
     * 设置Webview窗口的回弹效果
     * 开启窗口回弹效果后，当窗口中展现的内容滚动到头（顶部或底部）时，再拖拽时窗口整体内容将跟随移动，松开后自动回弹到停靠位置（可通过style设置）。
     * 	拖拽窗口内容时页面显示Webview窗口的背景色，默认为透明，此时显示Webview下面的内容，利用这个特点可以实现自定下拉刷新特效。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    setBounce(style?: PlusWebviewWebviewBounceStyle): void;
    /**
     * 设置Webview窗口是否阻塞加载页面中使用的网络图片
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    setBlockNetworkImage(block?: boolean): void;
    /**
     * 设置HTML内容是否可见
     * 设置HTML内容不可见后，将显示Webview窗口的背景色。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    setContentVisible(visible?: boolean): void;
    /**
     * 设置预加载的CSS文件
     * 预加载CSS文件不需要在HTML页面中显式引用，在Webview窗口加载HTML页面时自动加载，在页面跳转时也会自动加载。
     * 	设置新的CSS文件后将清空之前设置的值（包括调用setCssText设置的值）。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    setCssFile(file?: string): void;
    /**
     * 设置预加载的CSS内容
     * 预加载CSS内容不需要在HTML页面中显式引用，在Webview窗口加载HTML页面时自动加载，在页面跳转时也会自动加载。
     * 	设置新的CSS内容后将清空之前设置的值（包括调用setCssFile设置的值）。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    setCssText(text?: string): void;
    /**
     * 设置Webview窗口的收藏参数
     * 仅在流应用环境（流应用/5+浏览器）中有效：用户点击流应用环境的收藏按钮时使用的参数，如设置收藏页面标题，图标、页面地址等。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    setFavoriteOptions(options?: PlusWebviewWebviewFavoriteOptions): void;
    /**
     * 设置Webview窗口底部修复区域高度
     * 如果Webview加载页面中存在底部停靠区域（如“蘑菇街”WAP页面的底部Tab栏），在页面滚动时动态改变Webview高度可能会出现底部停靠区域抖动的现象（如360浏览器中向上滑顶部标题栏自动消失引起Webview变高）。
     * 	此时可以调用此方法来指定底部停靠区域（通常是底部Tab栏）进行优化修复抖动效果，高度值为底部停靠区域的高度。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    setFixBottom(height?: number): void;
    /**
     * 设置预加载的JS文件
     * 预加载JS文件不需要在HTML页面中显式引用，在Webview窗口加载HTML页面时自动加载，在页面跳转时也会自动加载。
     * 	设置新的JS文件后将清空之前设置的值。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    setJsFile(file?: string): void;
    /**
     * 设置Webview窗口的下拉刷新效果
     * 开启Webview窗口的下拉刷新功能，显示窗口内置的下拉刷新控件样式。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    setPullToRefresh(style?: PlusWebviewWebviewPullToRefreshStyles, refreshCB?: () => void): void;
    /**
     * 设置Webview窗口rendered事件参数
     * 可设置页面渲染完成的判断标准，如判断页面顶部区域、中间区域、或底部区域。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    setRenderedEventOptions(options?: PlusWebviewWebviewRenderedEventOptions): void;
    /**
     * 设置Webview窗口的样式
     * 更新Webview窗口的样式，如窗口位置、大小、背景色等。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    setStyle(styles?: PlusWebviewWebviewStyles): void;
    /**
     * 设置Webview窗口的分享参数
     * 仅在流应用环境（流应用/5+浏览器）中有效：用户点击流应用环境的分享按钮时使用的参数，如设置分享的标题、链接地址等。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    setShareOptions(options?: PlusWebviewWebviewShareOptions): void;
    /**
     * 设置标题栏上按钮的角标
     * 仅在窗口使用原生标题栏（titleNView）时生效，未显示原生标题栏时操作此接口无任何效果。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    setTitleNViewButtonBadge(index?: number, text?: string): void;
    /**
     * 设置Webview窗口是否可见
     * 修改窗口是否可见并不影响窗口的显示栈顺序，窗口显示与隐藏也不会有动画效果。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    setVisible(visible?: boolean): void;
    /**
     * 显示Webview窗口
     * 当调用plus.webview.create方法创建Webview窗口后，需要调用其show方法才能显示，并可设置窗口显示动画及动画时间。
     * 	Webview窗口被隐藏后也可调用此方法来重新显示。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    show(aniShow?: PlusWebviewAnimationTypeShow, duration?: number, showedCB?: () => void, extras?: PlusWebviewWebviewExtraOptions): void;
    /**
     * 在指定Webview窗口后显示
     * 当调用plus.webview.create方法创建Webview窗口后，可调用其showBehind方法显示在指定Webview窗口之后。
     * 	这种显示方式不会出现动画效果，当指定的Webview窗口关闭后，则自身窗口自动显示出来。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    showBehind(webview?: PlusWebviewWebviewObject): void;
    /**
     * 设置标题栏上按钮的红点
     * 仅在窗口使用原生标题栏（titleNView）时生效，未显示原生标题栏时操作此接口无任何效果。
     * 	注意：设置显示按钮的角标后红点不显示。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    showTitleNViewButtonRedDot(index?: number): void;
    /**
     * 停止加载HTML页面内容
     * 触发Webview窗口停止加载页面内容，如果已经加载部分内容则显示部分内容，如果加载完成则显示全部内容。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    stop(): void;
    /**
     * 更新Webview窗口的原生子View控件对象
     * 通过WebviewSubNViewStyles中的id属性值匹配子View控件更新绘制内容，如果没有查找到对应id的子View控件则忽略。
     * 	此操作仅更新子View控件上绘制的内容，不会添加或删除原生子View控件对象。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    updateSubNViews(styles?: PlusWebview []): void;
}

/**
 * Webview窗口动画参数
 * 用于指定动画目标窗口，起始位置、目标位置等信息。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
 */
interface PlusWebviewWebviewAnimationOptions {
    /**
     * 执行动画的窗口对象
     * 可取值Webview窗口对象、Webview窗口的id（String类型）、原生View窗口对象（plus.nativeObj.View）。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    view?: PlusWebviewWebviewObject;
    /**
     * 动画样式
     * 用于指定动画窗口的起始位置，目标位置等。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    styles?: PlusWebviewWebviewAnimationStyles;
    /**
     * 窗口动画完成后的行为
     * 可取值：
     * 	"none" - 动画完成后不做任何操作；
     * 	"hide" - 动画完成后隐藏窗口；
     * 	"close" - 动画完成后关闭窗口。
     * 	默认值为"none"。
     * - none: 动画完成后不做任何操作
     * - hide: 动画完成后隐藏窗口
     * - close: 动画完成后关闭窗口
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    action?: 'none' | 'hide' | 'close';
}

/**
 * Webview窗口动画样式
 * 用于指定动画窗口的起始位置、目标位置等信息。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
 */
interface PlusWebviewWebviewAnimationStyles {
    /**
     * 画窗口的起始左侧位置
     * 支持百分比、像素值，默认值为当前窗口的位置。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    fromLeft?: string;
    /**
     * 画窗口的目标左侧位置
     * 持百分比、像素值。
     * 	注意：如果设置的位置与起始位置一直，则无动画效果。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    toLeft?: string;
}

/**
 * Webview窗口回弹样式
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
 */
interface PlusWebviewWebviewBounceStyle {
    /**
     * Webview窗口支持回弹效果的方向
     * 可通过此参数设置开启Webview哪个方向支持回弹效果。
     * 	支持以下属性：
     * 	top：表示窗口顶部支持回弹效果；
     * 	left：表示窗口左侧支持回弹效果；
     * 	right：表示窗口右侧支持回弹效果；
     * 	bottom：表示窗口底部支持回弹效果。
     * 	**目前仅支持top属性**
     * 	属性值：用于指定可拖拽的范围，可取百分比，如"10%"；像素值，如"100px"；自动计算值，如"auto"；无回弹效果值，如"none"；
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    position?: any;
    /**
     * Webview窗口回弹时停靠的位置
     * 开启窗口回弹效果后，当窗口中展现的内容滚动到头（顶部或底部）时，再拖拽时窗口整体内容将跟随移动，拖拽过程中将触发"dragBounce"事件，松开后自动回弹到停靠位置。
     * 	支持以下属性：
     * 	top：表示窗口顶部回弹时停靠的位置。
     * 	属性值：用于指定窗口回弹的位置，可取百分比，如"5%"；像素值，如"100px"；自动计算值，如"auto"，默认为可拖拽的范围值的一半；
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    changeoffset?: any;
    /**
     * Webview窗口侧滑时停靠的位置
     * 开启窗口回弹效果后，当窗口中展现的内容滚动到头（左侧或右侧）时，在拖拽时窗口整体内容将跟随移动，松开后自动停靠的侧滑位置，并触发"slideBounce"事件。
     * 	支持以下属性：
     * 	left：表示窗口左侧侧滑的位置；
     * 	right：表示窗口右侧侧滑的位置。
     * 	属性值：用于指定滑动后停靠的距离，可取百分比（left/right相对于窗口的宽度，top/bottom相对于窗口的高度），如"30%"；像素值，如"100px"；自动计算值，为可拖拽范围，如"auto"。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    slideoffset?: any;
    /**
     * Webview窗口拖拽偏移的位置
     * 开启窗口回弹效果后，可以通过此属性值来主动设置拖拽的偏移位置，与手动操作拖拽至此偏移位置松开后的逻辑一致。
     * 	支持以下属性：
     * 	top：表示窗口顶部偏移的位置；
     * 	left：表示窗口左侧偏移的位置；
     * 	right：表示窗口右侧偏移的位置；
     * 	bottom：表示窗口底部偏移的位置。
     * 	属性值：用于指定偏移的位置，可取百分比，如"5%"；像素值，如"100px"；有效值范围为0到position属性定义的位置。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    offset?: any;
    /**
     * Webview窗口是否阻止touch事件传递给DOM元素
     * 设置为true表示阻止touch事件，设置为false表示不阻止touch事件。当开启侧滑功能（左侧滑和右侧滑）时默认值为true，否则为false。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    preventTouchEvent?: boolean;
}

/**
 * Webview窗口内容动画参数
 * 指定动画的类型、持续时间等信息。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
 */
interface PlusWebviewWebviewContentAnimationOptions {
    /**
     * 动画类型
     * 可取值："shrink" - 从上到下分块收缩清除窗口动画。
     * - shrink: 从上到下分块清除动画
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    type?: 'shrink';
    /**
     * 动画持续时间
     * 单位为毫秒，默认值为200ms。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    duration?: number;
    /**
     * 动画帧数
     * 必须为大于0的整数，默认值为12。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    frames?: number;
    /**
     * 动画作用区域
     * 支持以下属性：
     * 	top - 区域距离控件顶部的偏移量，属性值可取像素值（如"100px"），百分比（如"10%"，相对于控件的高度）,默认值为'0px'；
     * 	bottom - 区域距离控件底部的偏移量，属性值可取像素值（如"100px"），百分比（如"10%"，相对于控件的高度）,默认值为'0px'；
     * 	left - 区域距离控件左侧的偏移量，属性值可取像素值（如"100px"），百分比（如"10%"，相对于控件的宽度）,默认值为'0px'；
     * 	right - 区域距离控件右侧的偏移量，属性值可取像素值（如"100px"），百分比（如"10%"，相对于控件的宽度）,默认值为'0px'。
     * 	如“{top:'44px',bottom:'48px'}”。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    region?: any;
}

/**
 * 原生控件在窗口中停靠的方式
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
 */
interface PlusWebviewWebviewDock {
    /**
     * 控件停靠则页面顶部
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    top?: string;
    /**
     * 控件停靠在页面底部
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    bottom?: string;
    /**
     * 控件停靠在页面右侧
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    right?: string;
    /**
     * 控件停靠在页面左侧
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    left?: string;
}

/**
 * Webview窗口滑动事件数据
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
 */
interface PlusWebviewWebviewDragEvent {
    /**
     * 手势类型
     * 可取值：
     * 	"rtl" - 从右向左滑动手势；
     * 	"left" - 向左滑动手势，与rtl一致；
     * 	"ltr" - 从左向右滑动手势；
     * 	"right" - 向右滑动手势，与ltr一致。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    direction?: string;
    /**
     * 窗口滑动类型
     * 可取值：
     * 	"start" - 表示开始滑动操作；
     * 	"move" - 表示正在滑动；
     * 	"end" - 表示滑动操作结束。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    type?: string;
    /**
     * 窗口滑动结果
     * 可取值：
     * 	"true" - 表示滑动操作成功；
     * 	"false" - 表示滑动操作失败（恢复到滑动前的状态）；
     * 	"undefined" - 无状态值（当type值为"end"时返回此值）。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    result?: string;
    /**
     * 当前操作窗口标识
     * 当type值为"start"/"move"时，保存当前操作窗口（或View控件）的标识；
     * 	当type值为"end"时保存滑动操作后显示窗口（或View控件）的标识（即result值为"true"则认为关联窗口显示，result值为false则认为主窗口显示）。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    id?: string;
    /**
     * 关联窗口标识
     * 滑动操作关联窗口（或View控件）的标识。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    otherId?: string;
    /**
     * 主窗口标识
     * 滑动操作主窗口（或View控件）的标识。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    targetId?: string;
    /**
     * 滑动进度
     * 滑动进度位置信息，取值范围为0-100，如20表示滑动了总距离的20%：
     * 	当type值为"start"时progress值为0；
     * 	当type值为"end"时如果result为true则progress值为0，如果result为false则progress值为100；
     * 	当type值为"move"时，保存当前滑动的进度信息（注：多次触发move事件）。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    progress?: number;
}

/**
 * 窗口手势操作参数
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
 */
interface PlusWebviewWebviewDragOptions {
    /**
     * 滑屏操作回调事件触发步长
     * 用于设置滑屏回调事件触发频率，取值范围为1-100，值越小触发频率越高，值越大触发频率越小，默认值为20。
     * 	如设置值为20，则表示滑屏操作移动距离超过可移动范围的20%则触发一次回调事件，可通过回调函数参数（WebviewDragEvent）的progress属性获取。
     * 	注意：触发频率过大会影响效率，开发者需谨慎设置此值。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    callbackStep?: number;
    /**
     * 设置的手势类型
     * 可取值：
     * 	可取值：
     * 	"rtl" - 从右向左滑动手势；
     * 	"left" - 向左滑动手势，与rtl一致；
     * 	"ltr" - 从左向右滑动手势；
     * 	"right" - 向右滑动手势，与ltr一致。
     * - rtl: 从右向左滑动手势
     * - left: 向左滑动手势，与rtl一致
     * - ltr: 从左向右滑动手势
     * - right: 向右滑动手势，与ltr一致
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    direction?: 'rtl' | 'left' | 'ltr' | 'right';
    /**
     * 滑动手势模式
     * 可取值：
     * 	"followFinger" - 当前Webview窗口跟随手指滑动；
     * 	"silent" - 当前Webview窗口不跟随手指滑动；
     * 	"bounce" - 当前Webview窗口自动回弹（松手后窗口恢复到拖动前的位置）,通常可通过设置此模式来实现Tab项无法继续滑动切换自动回弹效果。
     * - followFinger: 当前Webview窗口跟随手指滑动
     * - silent: 当前Webview窗口不跟随手指滑动
     * - bounce: 当前Webview窗口自动回弹
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    moveMode?: 'followFinger' | 'silent' | 'bounce';
}

/**
 * 手势操作关联对象参数
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
 */
interface PlusWebviewWebviewDragOtherViewOptions {
    /**
     * 手势关联对象
     * 可取值Webview窗口的id（String类型）、Webview窗口对象、原生View窗口对象（plus.nativeObj.View）。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    view?: string;
    /**
     * 滑动模式
     * 可取值：
     * 	"follow" - 同步跟随主Webview窗口滑动；
     * 	"silent" - 不跟随主Webview窗口滑动。
     * - follow: 同步跟随主Webview窗口滑动
     * - silent: 不跟随主Webview窗口滑动
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    moveMode?: 'follow' | 'silent';
}

/**
 * 截屏绘制操作参数
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
 */
interface PlusWebviewWebviewDrawOptions {
    /**
     * 截屏图片的位深
     * 可取值：
     * 		"RGB565" - RGB565彩色模式,一个像素占两个字节；
     * 		"ARGB" - ARGB彩色模式,保存透明度信息。
     * - RGB565: 
     * 	RGB565彩色模式,一个像素占两个字节。
     * 								
     * - ARGB: 
     * 	ARGB彩色模式,保存透明度信息。
     * 								
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    bit?: 'RGB565' | 'ARGB';
    /**
     * 是否检测截屏图片是否为空白
     * 可取值：
     * 		true - 表示检测到截屏到空白图片时认为操作失败（触发错误回调函数）；
     * 		false - 表示不检测，即使为空白图片仍然返回成功。
     * 	默认值为false。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    check?: boolean;
    /**
     * 设置截屏区域
     * 相对于Webview窗口的区域信息，默认值为{top:'0px',left:'0px',width:'100%',height:'100%'}。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    clip?: PlusNativeObj;
    /**
     * 是否检测当前是否弹出软键盘
     * 可取值：
     * 		true - 表示检测到弹出软键盘是认为截屏操作失败（触发错误回调函数）；
     * 		false - 表示不检测软键盘状态，直接截屏。
     * 	默认值为false。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    checkKeyboard?: boolean;
}

/**
 * 窗口收藏参数
 * 在流应用环境中调用收藏功能时使用的参数。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
 */
interface PlusWebviewWebviewFavoriteOptions {
    /**
     * 收藏时显示的图标
     * 在收藏列表中显示的图标，默认使用应用图标。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    icon?: string;
    /**
     * 收藏时显示的标题
     * 在收藏列表中显示的标题字符串。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    title?: string;
    /**
     * 收藏的页面地址
     * 必须是网络地址。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    href?: string;
}

/**
 * 创建加载HTML数据参数
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
 */
interface PlusWebviewWebviewLoadDataOptions {
    /**
     * 页面的Base URL
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    baseURL?: string;
    /**
     * HTML数据的数据类型
     * 默认值为"text/html"。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    mimeType?: string;
    /**
     * HTML数据的编码类型
     * 默认值为"utf-8"。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    encoding?: string;
}

/**
 * 窗口的分享参数
 * 在流应用环境中调用分享功能时使用的参数。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
 */
interface PlusWebviewWebviewShareOptions {
    /**
     * 分享时使用的图标
     * 默认使用应用图标。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    icon?: string;
    /**
     * 分享时使用的标题
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    title?: string;
    /**
     * 分享时使用的链接地址
     * 必须是网络地址。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    href?: string;
}

/**
 * 窗口原生子View控件样式
 * 可设置原生控件的标识、大小、位置以及绘制的内容等。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
 */
interface PlusWebviewWebviewSubNViewStyles {
    /**
     * 原生子View控件的标识
     * 可通过plus.nativeObj.View.getViewById(id)方法传入此标识来获取子View控件对象。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    id?: string;
    /**
     * 原生子View控件类型
     * 可取值：
     * 		"NView" - 原生子View控件（plus.nativeObj.NView）；
     * 		"ImageSlider" - 原生图片轮播控件（plus.nativeObj.ImageSlider）。
     * 	默认值为"NView"。
     * - NView: 
     * 	原生子View控件（plus.nativeObj.NView）
     * 								
     * - ImageSlider: 
     * 	原生图片轮播控件（plus.nativeObj.ImageSlider）							
     * 								
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    type?: 'NView' | 'ImageSlider';
    /**
     * 原生子View控件的样式
     * 可设置原生控件的位置、大小等信息。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    styles?: PlusNativeObjViewStyles;
    /**
     * 原生子View控件初始绘制内容
     * 可设置绘制图片、矩形区域、文本等内容。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    tags?: any [];
}

/**
 * 窗口标题栏控件样式
 * 标题栏控件固定高度为44px,可通过Webview窗口对象的getTitleNView方法获取标题栏原生控件对象动态绘制内容。
 * 	可以通过WebviewObject对象的getTitleNView()获取标题栏的NView对象，然后调用其setStyle方法更新样式。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
 */
interface PlusWebviewWebviewTitleNViewStyles {
    /**
     * 标题栏控件是否显示左侧返回按钮
     * 可取值：
     * 		"true" - 显示返回按钮；
     * 		"false" - 不显示返回按钮。
     * 	默认值为"false"。
     * 	返回按钮的颜色为窗口标题文字颜色，按下时颜色自动调整透明度为0.3。
     * 	点击返回按钮的逻辑与按下系统返回键逻辑一致。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    autoBackButton?: boolean;
    /**
     * 标题栏控件的背景颜色
     * 颜色值格式为"#RRGGBB"，如"#FF0000"表示为红色背景，默认值为"#F7F7F7"。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    backgroundColor?: string;
    /**
     * 标题栏上的自定义按钮
     * 创建的自定义按钮数目不限制，实际应用中建议最多设置4个按钮（包括左侧返回按钮）。
     * 	注意：此属性不支持动态修改，仅在创建titleNView时设置有效。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    buttons?: PlusWebview [];
    /**
     * 标题栏控件变化作用范围
     * 仅在type值为transparent时有效，页面滚动时标题栏背景透明度将发生变化。
     * 	当页面滚动到指定偏移量时标题栏背景变为完全不透明。
     * 	支持百分比、像素值，默认为'132px'。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    coverage?: string;
    /**
     * 标题栏控件是否显示Home按钮
     * 可取值：
     * 		"true" - 显示Home按钮；
     * 		"false" - 不显示Home按钮。
     * 	默认值为"false"。
     * 	Home按钮的颜色为窗口标题文字颜色，按下时颜色自动调整透明度为0.3。
     * 	点击Home按钮的逻辑为关闭所有非首页窗口，显示首页窗口。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    homeButton?: boolean;
    /**
     * 内边距
     * 标题栏左右的内边距，单位为px（逻辑像素值），如"10px"表示10逻辑像素值。
     * 	默认值为"0px"。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    padding?: string;
    /**
     * 右内边距
     * 标题栏右侧内边距，单位为px（逻辑像素值），如"10px"表示10逻辑像素值。
     * 	默认值为"0px"，优先级padding-right &gt; padding。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    'padding-right'?: string;
    /**
     * 左内边距
     * 标题栏左侧内边距，单位为px（逻辑像素值），如"10px"表示10逻辑像素值。
     * 	默认值为"0px"，优先级padding-left &gt; padding。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    'padding-left'?: string;
    /**
     * 标题栏控件的进度条样式
     * 设置此属性则在标题栏控件的底部显示进度条，可配置进度条颜色值即高度。
     * 	设置此属性值为undefined或null则隐藏进度条。
     * 	默认不显示底部进度条。
     * 	注意：此属性将废弃，推荐使用WebviewStyles的progress。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    progress?: PlusWebviewWebviewProgressStyles;
    /**
     * 标题栏控件的底部分割线
     * 设置此属性则在标题栏控件的底部显示分割线，可配置颜色值及高度。
     * 	设置此属性值为undefined或null则隐藏分割线。
     * 	默认不显示底部分割线。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    splitLine?: PlusWebviewWebviewSplitLineStyles;
    /**
     * 标题栏上初始自定义绘制内容
     * 可用于设置自定义绘制图片、矩形区域、文本等内容。
     * 	注意：此属性不支持动态修改，仅在创建titleNView时设置有效，如果需要更新绘制内容可根据tags的id调用draw方法操作。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    tags?: any [];
    /**
     * 标题栏控件的标题文字颜色
     * 颜色值格式为"#RRGGBB"，如"#FF0000"表示标题文字颜色为红色，默认值为"#000000"。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    titleColor?: string;
    /**
     * 标题栏控件的标题文字超出显示区域时处理方式
     * 可取值：
     * 		"clip" - 超出显示区域时内容裁剪；
     * 		"ellipsis" - 超出显示区域时尾部显示省略标记（...）。
     * 	默认值为"ellipsis"。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    titleOverflow?: string;
    /**
     * 标题栏控件的标题文字内容
     * 在标题栏控件居中（水平和垂直）显示，左右边距为88px，如果文本过长则尾部裁剪（加三个点"..."）显示。
     * 	当不设置titleText属性或属性值为undefined/null时，使用当前Webview窗口加载页面的标题，并自动同步更新页面的标题。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    titleText?: string;
    /**
     * 标题栏控件的标题文字字体大小
     * 字体大小单位为像素，如"20px"表示字体大小为20像素，默认值为17像素。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    titleSize?: string;
    /**
     * 标题栏控件样式
     * 可取值：
     * 		"default" - 默认样式，顶部停靠显示，挤压Webview页面内容显示区域；
     * 		"transparent" - 透明样式，顶部沉浸式显示覆盖Webview页面内容，标题栏上内容（除按钮外）全部透明，当页面滚动时透明度逐渐变化，直到不透明显示。
     * 	默认值为"default"。
     * 	注意：此属性不支持动态更新。
     * - default: 
     * 	默认样式，顶部停靠显示，挤压Webview页面内容显示区域
     * 								
     * - transparent: 
     * 	透明样式，顶部沉浸式显示覆盖Webview页面内容，标题栏上内容（除按钮外）全部透明，当页面滚动时透明度逐渐变化，直到不透明显示							
     * 								
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    type?: 'default' | 'transparent';
}

/**
 * 窗口标题栏自定义按钮样式
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
 */
interface PlusWebviewWebviewTitleNViewButtonStyles {
    /**
     * 按钮样式
     * 运行环境中内置按钮样式直接使用，内置样式忽略fontSrc和text属性。
     * 	可取值：
     * 		"forward" - 前进按钮；
     * 		"back" - 后退按钮；
     * 		"share" - 分享按钮；
     * 		"favorite" - 收藏按钮；
     * 		"home" - 主页按钮；
     * 		"menu" - 菜单按钮；
     * 		"close" - 关闭按钮；
     * 		"none" - 无样式。
     * 	默认值为无样式（"none"），需通过text属性设置按钮上显示的内容、通过fontSrc属性设置使用的字体库。
     * - forward: 前进按钮
     * - back: 后退按钮
     * - share: 分享按钮
     * - favorite: 收藏按钮
     * - home: 主页按钮
     * - menu: 菜单按钮
     * - close: 关闭按钮
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    type?: 'forward' | 'back' | 'share' | 'favorite' | 'home' | 'menu' | 'close';
    /**
     * 按钮的背景颜色
     * 仅在标题栏type=transparent时生效，当标题栏透明时按钮显示的背景颜色。
     * 	可取值#RRGGBB和rgba格式颜色字符串，默认值为灰色半透明。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    background?: string;
    /**
     * 按钮上显示的角标文本
     * 最多显示3个字符，超过则显示为...。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    badgeText?: string;
    /**
     * 按钮上文字颜色
     * 可取值： "#RRGGBB"格式字符串，如"#FF0000"表示绘制红色返回键；
     * 	"rgba(R,G,B,A)"，其中R/G/B分别代表红色值/绿色值/蓝色值，正整数类型，取值范围为0-255，A为透明度，浮点数类型，取值范围为0-1（0为全透明，1为不透明），如"rgba(255,0,0,0.5)"，表示红色半透明。
     * 	默认值为窗口标题栏控件的标题文字颜色。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    color?: string;
    /**
     * 按下状态按钮文字颜色
     * 可取值： "#RRGGBB"格式字符串，如"#FF0000"表示绘制红色返回键；
     * 	"rgba(R,G,B,A)"，其中R/G/B分别代表红色值/绿色值/蓝色值，正整数类型，取值范围为0-255，A为透明度，浮点数类型，取值范围为0-1（0为全透明，1为不透明），如"rgba(255,0,0,0.5)"，表示红色半透明。
     * 	默认值为color属性值自动调整透明度为0.3。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    colorPressed?: string;
    /**
     * 按钮在标题栏上的显示位置
     * 可取值：
     * 		"right" - 在标题栏中靠右排列显示；
     * 		"left" - 在标题栏中靠左侧排列显示（在返回键后）。
     * 		默认值为"right"。
     * - right: 
     * 	在标题栏中靠右排列显示
     * 								
     * - left: 
     * 	在标题栏中靠左侧排列显示（在返回键后）
     * 								
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    float?: 'right' | 'left';
    /**
     * 按钮上文字的粗细
     * 可取值：
     * 		"normal" - 标准字体；
     * 		"bold" - 加粗字体。
     * 	默认值为"normal"。
     * - normal: 
     * 	标准字体
     * 								
     * - bold: 
     * 	加粗字体
     * 								
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    fontWeight?: 'normal' | 'bold';
    /**
     * 按钮上文字大小
     * 可取值：字体高度像素值，数字加"px"格式字符串，如"22px"。 
     * 	窗口标题栏为透明样式（type="transparent"）时，默认值为"22px"；
     * 	窗口标题栏为默认样式（type="default"）时，默认值为"27px"。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    fontSize?: string;
    /**
     * 按钮上文字使用的字体文件路径
     * 字体文件路径支持以下类型：
     * 		相对路径 - 相对于当前页面的host位置，如"a.ttf"，注意当前页面为网络地址则不支持；
     * 		绝对路径 - 系统绝对路径，如Android平台"/sdcard/a.ttf"，此类路径通常通过其它5+ API获取的；
     * 		扩展相对路径URL(RelativeURL) - 以"_"开头的相对路径，如"_www/a.ttf"；
     * 		本地路径URL - 以“file://”开头，后面跟随系统绝对路径。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    fontSrc?: string;
    /**
     * 按钮点击后触发的回调函数
     * 回调函数中将返回此JSON对象。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    onclick?: (result: any) => void;
    /**
     * 按钮上是否显示红点
     * 设置为true则显示红点，false则不显示红点。默认值为false。
     * 	注意：当设置了角标文本时红点不显示。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    redDot?: boolean;
    /**
     * 是否显示选择指示图标
     * 设置为true则显示选择指示图标（向下箭头），颜色与文字颜色一致；
     * 	false则不显示。默认值为false。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    select?: boolean;
    /**
     * 按钮上显示的文字
     * 推荐使用一个字符，超过一个字符可能无法正常显示，使用字体图标时unicode字符表示必须'\u'开头，如"\ue123"（注意不能写成"\e123"）。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    text?: string;
    /**
     * 按钮的宽度
     * 可取值：
     * 		"*px" - 逻辑像素值，如"10px"表示10逻辑像素值，按钮的内容居中显示；
     * 		"auto" - 自定计算宽度，根据内容自动调整按钮宽度。
     * 	默认值为"44px"（适合字体图标）。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    width?: string;
}

/**
 * 标题栏控件的进度条样式
 * 显示在标题栏控件底部。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
 */
interface PlusWebviewWebviewProgressStyles {
    /**
     * 进度条颜色
     * 可取值： "#RRGGBB"格式字符串，如"#FF0000"表示绘制红色分割线；
     * 	"rgba(R,G,B,A)"，其中R/G/B分别代表红色值/绿色值/蓝色值，正整数类型，取值范围为0-255，A为透明度，浮点数类型，取值范围为0-1（0为全透明，1为不透明），如"rgba(255,0,0,0.5)"，表示红色半透明。
     * 	默认值为"#00FF00"。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    color?: string;
    /**
     * 进度条高度
     * 可取值：像素值（逻辑像素），支持小数点，如"1px"表示1像素高；百分比，如"1%"，相对于标题栏控件的高度。
     * 	默认值为"2px"。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    height?: string;
}

/**
 * 窗口标题栏控件的分割线样式
 * 显示在标题栏控件底部。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
 */
interface PlusWebviewWebviewSplitLineStyles {
    /**
     * 底部分割线颜色
     * 可取值： "#RRGGBB"格式字符串，如"#FF0000"表示绘制红色分割线；
     * 	"rgba(R,G,B,A)"，其中R/G/B分别代表红色值/绿色值/蓝色值，正整数类型，取值范围为0-255，A为透明度，浮点数类型，取值范围为0-1（0为全透明，1为不透明），如"rgba(255,0,0,0.5)"，表示红色半透明。
     * 	默认值为"#CCCCCC"。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    color?: string;
    /**
     * 底部分割线高度
     * 可取值：像素值（逻辑像素），支持小数点，如"1px"表示1像素高；百分比，如"1%"，相对于标题栏控件的高度。
     * 	默认值为"1px"。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    height?: string;
}

/**
 * Webview窗口事件
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
 */
interface PlusWebviewWebviewEvent {
    /**
     * Webview窗口关闭事件
     * 通过WebviewObject对象的addEventListener方法添加事件监听函数，当Webview窗口关闭时触发此事件，回调函数类型为EventCallback。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    close?: string;
    /**
     * Webview窗口回弹事件
     * 通过WebviewObject对象的setBounce方法开启回弹效果设置顶部下拉回弹changeoffset属性后，当用户向下拖拽窗口时触发发此事件，回调函数类型为BounceEventCallback。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    dragBounce?: string;
    /**
     * Webview窗口回弹事件
     * 通过WebviewObject对象的setBounce方法开启回弹效果设置左右侧侧滑slideoffset属性后，当用户向左右侧拖拽窗口侧滑时触发发此事件，回调函数类型为BounceEventCallback。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    slideBounce?: string;
    /**
     * Webview窗口加载错误事件
     * 通过WebviewObject对象的addEventListener方法添加事件监听函数，当Webview窗口加载错误时触发此事件，回调函数类型为EventCallback。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    error?: string;
    /**
     * Webview窗口隐藏事件
     * 通过WebviewObject对象的addEventListener方法添加事件监听函数，当Webview窗口隐藏（窗口动画完成后）时触发此事件，回调函数类型为EventCallback。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    hide?: string;
    /**
     * Webview窗口页面开始加载事件
     * 通过WebviewObject对象的addEventListener方法添加事件监听函数，当Webview窗口开始加载新页面时触发此事件，回调函数类型为EventCallback。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    loading?: string;
    /**
     * Webview窗口页面加载完成事件
     * 通过WebviewObject对象的addEventListener方法添加事件监听函数，当Webview窗口页面加载完成时触发此事件，回调函数类型为EventCallback。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    loaded?: string;
    /**
     * Webview窗口显示遮罩层时点击事件
     * 通过WebviewObject对象的addEventListener方法添加事件监听函数，当Webview窗口通过mask属性设置显示遮罩层并且点击时触发此事件，回调函数类型为EventCallback。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    maskClick?: string;
    /**
     * Webview窗口开始渲染事件
     * 通过WebviewObject对象的addEventListener方法添加事件监听函数，当Webview窗口开始渲染内容时触发此事件，回调函数类型为EventCallback。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    rendering?: string;
    /**
     * Webview窗口渲染完成事件
     * 通过WebviewObject对象的addEventListener方法添加事件监听函数，当Webview窗口渲染完成时触发此事件，回调函数类型为EventCallback。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    rendered?: string;
    /**
     * Webview窗口显示事件
     * 通过WebviewObject对象的addEventListener方法添加事件监听函数，当Webview窗口显示（窗口动画完成后）时触发此事件，回调函数类型为EventCallback。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    show?: string;
    /**
     * Webview加载页面标题更新事件
     * 通过WebviewObject对象的addEventListener方法添加事件监听函数，当Webview窗口加载新页面更新标题时触发此事件，回调函数类型为SuccessCallback。
     * 	注意：此事件会先于loaded事件触发，通常在加载网络页面时通过此事件可更快获取到页面的标题。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    titleUpdate?: string;
    /**
     * Webview窗口接收到触屏事件
     * 通过WebviewObject对象的addEventListener方法添加事件监听函数，当用户操作按下到Webview窗口时触发此事件，回调函数类型为SuccessCallback。
     * 	注意：每按下屏幕触发一次此事件。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    touchstart?: string;
    /**
     * Webview窗口侧滑返回事件
     * 通过WebviewObject对象的addEventListener方法添加事件监听函数，当Webview窗口侧滑返回时触发此事件，回调函数类型为PopGestureCallback。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    popGesture?: string;
    /**
     * Webview窗口加载进度变化事件
     * 通过WebviewObject对象的addEventListener方法添加事件监听函数，当Webview窗口加载页面进度变化时触发此事件。
     * 	回调函数原型为void PorgressCandedCallback(Event e),可通过e.progress获取窗口加载进度，取值范围为0-100。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    progressChanged?: string;
    /**
     * Webview窗口下拉刷新事件
     * Webview窗口打开下拉刷新功能后，用户操作下拉刷新时或调用beginPullToRefresh方法时触发，用于通知业务逻辑可以开始执行刷新操作。
     * 	更新操作完成后调用窗口的endPullToRefresh方法结束下拉刷新。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    pullToRefresh?: string;
}

/**
 * JSON对象，原生窗口扩展参数
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
 */
interface PlusWebviewWebviewExtraOptions {
    /**
     * 窗口动画加速
     * 开启窗口动画加速功能可优化窗口动画效果，提升动画流程度，可避免部分设备上打开（关闭）窗口闪屏的问题。
     * 	可取值：
     * 	"auto" - 自动优化窗口动画；
     * 	"none" - 关闭窗口动画加速功能；
     * 	"capture" - 使用截屏方式加速窗口动画。
     * 	默认值为"auto"。
     * - auto: 
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    acceleration?: 'auto';
    /**
     * 窗口动画加速时使用的图片
     * 当使用截屏方式加速窗口动画时，可设置已经创建好的截屏图片，此时不会进行实时截屏操作，加速窗口动画响应时间，提升用户体验。
     * 	如果未指定截屏图片，则实时截取当前Webview窗口对象的图片进行动画操作。
     * 	如果窗口未使用截屏方式加速动画，则忽略此参数。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    capture?: PlusNativeObjBitmap;
    /**
     * 关联窗口动画使用的图片
     * 当使用截屏方式加速窗口动画时，可设置已经创建好的截屏图片，此时不会进行实时截屏操作，加速关联窗口动画响应时间，提升用户体验。
     * 	如果未指定截屏图片，则实时截取关联Webview窗口对象的图片进行动画操作。
     * 	如果窗口未使用截屏方式加速动画，则忽略此参数。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    otherCapture?: PlusNativeObjBitmap;
}

/**
 * 原生控件在窗口中显示的位置
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
 */
interface PlusWebviewWebviewPosition {
    /**
     * 控件在页面中正常定位，如果页面存在滚动条则随窗口内容滚动
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    static?: string;
    /**
     * 控件在页面中绝对定位，如果页面存在滚动条不随窗口内容滚动
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    absolute?: string;
    /**
     * 控件在页面中停靠，停靠的位置通过dock属性进行定义
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    dock?: string;
}

/**
 * Webview窗口下拉刷新样式
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
 */
interface PlusWebviewWebviewPullToRefreshStyles {
    /**
     * 是否开启Webview窗口的下拉刷新功能
     * true表示开启窗口的下拉刷新功能；
     * 	false表示关闭窗口的下拉刷新功能。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    support?: boolean;
    /**
     * 下拉刷新控件颜色
     * 颜色值格式为"#RRGGBB"，如"#FF0000"为设置下拉属性控件为红色，默认值为"#2BD009"。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    color?: string;
    /**
     * 下拉刷新样式
     * 用于定义下拉刷新风格样式，可取值：
     * 	"default" - 经典下拉刷新样式（下拉拖动时页面内容跟随）；
     * 	"circle" - 圆圈样式下拉刷新控件样式（下拉拖动时仅刷新控件跟随）。
     * 	默认值为"default"。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    style?: string;
    /**
     * 窗口的下拉刷新控件进入刷新状态的拉拽高度
     * 支持百分比，如"10%"；像素值，如"50px"。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    height?: string;
    /**
     * 窗口可下拉拖拽的范围
     * 支持百分比，如"10%"；像素值，如"50px"。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    range?: string;
    /**
     * 下拉刷新控件的起始位置
     * 仅对"circle"样式下拉刷新控件有效，用于定义刷新控件下拉时的起始位置。
     * 	相对于Webview的顶部偏移量，支持百分比，如"10%"；像素值，如"50px"。
     * 	默认值为"0px"。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    offset?: string;
    /**
     * 在下拉可刷新状态时显示的内容
     * 支持以下属性：
     * 	caption：在下拉可刷新状态时下拉刷新控件上显示的标题内容。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    contentdown?: any;
    /**
     * 在释放可刷新状态时显示的内容
     * 支持以下属性：
     * 	caption：在释放可刷新状态时下拉刷新控件上显示的标题内容。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    contentover?: any;
    /**
     * 在正在刷新状态时显示的内容
     * 支持以下属性：
     * 	caption：在正在刷新状态时下拉刷新控件上显示的标题内容。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    contentrefresh?: any;
}

/**
 * Webview窗口rendered事件参数
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
 */
interface PlusWebviewWebviewRenderedEventOptions {
    /**
     * 判断窗口渲染完成类型
     * 可取值：
     * 	"top"-从顶部向下偏移22px横线截屏检测渲染是否完成；
     * 	"bottom"-从底部向上偏移25px横线检测渲染是否完成；
     * 	"center"-从中间横线检测渲染是否完成；
     * 	"auto"为全屏检测（左、中、右三条竖线）。
     * 	默认值为"auto"。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    type?: string;
    /**
     * 判断窗口渲染完成间隔时间
     * 单位为ms（毫秒），默认值为150ms。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    interval?: number;
}

/**
 * 替换H5标准API配置信息
 * 目前仅支持替换H5标准定位接口
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
 */
interface PlusWebviewWebviewReplaceWebApiOptions {
    /**
     * 替换H5标准定位接口(navigator.geolocation.*)
     * 由于网络原因，在部分手机上可能无法调用标准H5定位接口(navigator.geolocation.*)获取定位数据，此时可以通过此属性配置使用原生定位模块替换标准H5定位接口，可取值：
     * 		"alldevice" - 在所有设备上替换标准H5定位接口(navigator.geolocation.*)；
     * 		"auto" - 自动替换H5标准定位接口，仅在调用标准H5定位接口无法获取数据的设备上替换；
     * 		"none" - 不替换H5标准定位接口(navigator.geolocation.*)。
     * 	默认值为"none"。
     * 	注意：替换H5标准定位接口，会导致页面加载速度延迟100ms左右，推荐使用"auto"模式。
     * - alldevice: 
     * 	强制替换H5标准定位接口(navigator.geolocation.*)		
     * 								
     * - auto: 
     * 	自动替换标准H5定位接口，仅在调用标准H5定位接口无法获取数据的设备上替换
     * 								
     * - none: 
     * 	不替换标准H5定位接口(navigator.geolocation.*)
     * 								
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    geolocation?: 'alldevice' | 'auto' | 'none';
}

/**
 * JSON对象，Webview窗口的系统状态栏区域样式
 * 仅在应用设置为沉浸式状态栏样式下有效，非沉浸式状态栏样式下忽略此属性。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
 */
interface PlusWebviewWebviewStatusbarStyles {
    /**
     * 系统状态栏区域背景颜色
     * 颜色值格式为"#RRGGBB"，如"#FF0000"表示为红色背景。
     * 	默认值为应用manifest.json中plus-&gt;statusbar-&gt;background属性配置的值，如果未配置此属性值，则使用系统默认状态栏的背景颜色。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    background?: string;
}

/**
 * JSON对象，Webview窗口对象的样式
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
 */
interface PlusWebviewWebviewStyles {
    /**
     * 窗口加载页面时额外添加的HTTP请求头数据
     * 仅在Webview窗口第一次加载页面时使用，如用户点击的触发的链接跳转则不再添加此额外请求头数据。
     * 	如果Webview窗口非第一次加载页面时也需要额外添加HTTP请求头数据，可通过loadURL()方法的参数设置。
     * 	如果HTTP请求头中已经包含需要额外添加的头数据，则添加的请求数据覆盖默认值。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    additionalHttpHeaders?: any;
    /**
     * 窗口动画优化方式
     * 可取值：
     * 		"auto" - 如果窗口中存在titleNView或subNViews，窗口动画时真实Webview控件从动画窗口中移除加速（避免真实Webview渲染影响动画效率）；
     * 		"none" - 窗口动画不使用优化。
     * 	默认值为"auto"。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    animationOptimization?: string;
    /**
     * 窗口的缓存模式
     * 可取值：
     * 	"default" - 根据cache-control决定是否使用缓存数据，如果存在缓存并且没有过期则使用本地缓存资源，否则从网络获取；
     * 	"cacheElseNetwork" - 只要存在缓存（即使过期）数据则使用，否则从网络获取；
     * 	"noCache" - 不使用缓存数据，全部从网络获取；
     * 	"cacheOnly" - 仅使用缓存数据，不从网络获取（注：如果没有缓存数据则会导致加载失败）。
     * 	默认使用"default"。
     * - default: 
     * 	根据cache-control决定是否使用缓存数据，如果存在缓存并且没有过期则使用本地缓存资源，否则从网络获取。
     * 								
     * - cacheElseNetwork: 
     * 	只要存在缓存（即使过期）数据则使用，否则从网络获取。
     * 								
     * - noCache: 
     * 	不使用缓存数据，全部从网络获取。
     * 								
     * - cacheOnly: 
     * 	仅使用缓存数据，不从网络获取（注：如果没有缓存数据则会导致加载失败）。
     * 								
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    cachemode?: 'default' | 'cacheElseNetwork' | 'noCache' | 'cacheOnly';
    /**
     * Webview窗口自动处理返回键逻辑
     * 当Webview窗口在显示栈顶，并且Webview窗口中没有调用JS监听返回键（plus.key.addEventListener('backbutton',...)）时按下返回键响应行为。
     * 	可取值：
     * 		"hide" - 隐藏Webview窗口，隐藏动画与上一次调用显示时设置的动画类型相对应（如“slide-in-right”对应的关闭动画为“slid-out-right”）；
     * 		"close" - 关闭Webview窗口，关闭动画与上一次调用显示时设置的动画类型相对应（如“slide-in-right”对应的关闭动画为“slid-out-right”） ；
     * 		"none" - 不做操作，将返回键传递给下一Webview窗口处理；
     * 		"quit" - 退出应用。
     * - hide: 
     * 	隐藏Webview窗口，隐藏动画与上一次调用显示时设置的动画类型相对应（如“slide-in-right”对应的关闭动画为“slid-out-right”）。
     * 								
     * - close: 
     * 	关闭Webview窗口，关闭动画与上一次调用显示时设置的动画类型相对应（如“slide-in-right”对应的关闭动画为“slid-out-right”）。
     * 								
     * - none: 
     * 	不做操作，将返回键传递给下一Webview窗口处理。
     * 								
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    backButtonAutoControl?: 'hide' | 'close' | 'none';
    /**
     * 窗口的背景颜色
     * 窗口空白区域的背景模式，设置background为颜色值(参考CSS Color Names，可取值/十六进制值/rgb值/rgba值)，窗口为独占模式显示（占整个屏幕区域）；
     * 	设置background为“transparent”，则表示窗口背景透明，为非独占模式。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    background?: string;
    /**
     * 窗口顶部背景颜色值
     * 窗口内容滚动到顶部下拉时可见。
     * 	可取值：
     * 		"#RRGGBB"格式字符串，如"#FF0000"表示红色；
     * 		"rgba(R,G,B,A)"，其中R/G/B分别代表红色值/绿色值/蓝色值，正整数类型，取值范围为0-255，A为透明度，浮点数类型，取值范围为0-1（0为全透明，1为不透明），如"rgba(255,0,0,0.5)"，表示红色半透明。
     * 	默认值为透明。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    backgroundColorTop?: string;
    /**
     * 窗口底部背景颜色
     * 窗口内容滚动到底部上拉时可见。
     * 	可取值：
     * 		"#RRGGBB"格式字符串，如"#FF0000"表示红色；
     * 		"rgba(R,G,B,A)"，其中R/G/B分别代表红色值/绿色值/蓝色值，正整数类型，取值范围为0-255，A为透明度，浮点数类型，取值范围为0-1（0为全透明，1为不透明），如"rgba(255,0,0,0.5)"，表示红色半透明。
     * 	默认值为透明。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    backgroundColorBottom?: string;
    /**
     * 是否阻塞网络图片的加载
     * 布尔类型，true表示阻塞，false表示不阻塞，默认值为false。
     * 	阻塞后Webview窗口将不加载页面中使用的所有网络图片，可通过Webview窗口对象的setBlockNetWorkImage()方法动态修改此状态。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    blockNetworkImage?: boolean;
    /**
     * 窗口垂直向上的偏移量
     * 支持百分比、像素值，默认值无值（根据top和height属性值来自动计算）。
     * 	当同时设置了top和height值时，忽略此属性值；
     * 	当未设置height值时，可通过top和bottom属性值来确定窗口的高度。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    bottom?: string;
    /**
     * 窗口遇到边框是否有反弹效果
     * 可取值：
     * 		"none" - 表示没有反弹效果；
     * 		"vertical" - 表示垂直方向有反弹效果；
     * 		"horizontal" - 表示水平方向有反弹效果；
     * 		"all" - 表示垂直和水平方向都有反弹效果。
     * 	默认值为"none"。
     * - none: 没有反弹效果
     * - vertical: 垂直方向有反弹效果
     * - horizontal: 水平方向有反弹效果
     * - all: 垂直和水平方向都有反弹效果
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    bounce?: 'none' | 'vertical' | 'horizontal' | 'all';
    /**
     * 窗口回弹效果区域的背景
     * 窗口回弹效果区域背景可支持颜色值或图片：
     * 		颜色值格式为"#RRGGBB"，如"#FFFFFF"为设置白色背景；
     * 		背景图为"url(%image path%)"，如"url(./icon.png)"为设置icon.png为背景图，图片采用平铺模式绘制。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    bounceBackground?: string;
    /**
     * 窗口内容停止滑动的减速度
     * 当Webview加载的内容超过其高度时，可以拖拽滑动内容，decelerationRate属性控制手指松开后页面滑动的速度。
     * 	设置值越大手指松开后的滑动速度越快（滑动距离越长），其值域范围为0.0-1.0，默认值为0.989。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    decelerationRate?: number;
    /**
     * 窗口的停靠方式
     * 当Webview窗口添加到另外一个窗口中时，停靠方式才会生效，采用停靠方式添加会导致原Webview窗口自动调整其大小避免其内容被子窗口盖住。
     * 	可取值："top"，控件停靠则页面顶部；"bottom"，控件停靠在页面底部；"right"，控件停靠在页面右侧；"left"，控件停靠在页面左侧。
     * 	默认值为"bottom"。
     * - top: 控件停靠则页面顶部
     * - bottom: 控件停靠在页面底部
     * - right: 控件停靠在页面右侧
     * - left: 控件停靠在页面左侧
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    dock?: 'top' | 'bottom' | 'right' | 'left';
    /**
     * 窗口加载错误时跳转的页面地址
     * 当Webview窗口无法加载指定的url地址时（如本地页面不存在，或者无法访问的网络地址），此时会自动跳转到指定的错误页面地址（仅支持本地页面地址）。
     * 	设置为“none”则关闭跳转到错误页面功能，此时页面显示Webview默认的错误页面内容。默认使用5+ Runtime内置的错误页面。
     * - none: 关闭加载页面错误自动跳转功能
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    errorPage?: 'none';
    /**
     * 替换H5标准API
     * 用于解决在部分设备上调用H5标准定位接口可能无法获取定位数据的问题。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    replacewebapi?: PlusWebviewWebviewReplaceWebApiOptions;
    /**
     * 窗口是否开启硬件加速
     * 布尔类型，true表示开启硬件加速，false表示不开启硬件加速，默认情况5+ Runtime会根据设备实际支持情况自动选择是否开启硬件加速，可以通过plus.webview.defaultHardwareAccelerated()方法获取默认Webview是否开启硬件加速。
     * 	由于不同设备对硬件加速的支持情况存在差异，开启硬件加速能加速HTML页面的渲染，但也会消耗更多的系统资源，从而导致在部分设备上可能出现闪屏、发虚、分块渲染等问题，因此在特定设备的特定页面如果出现以上问题需要手动设置关闭硬件加速来避免。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    hardwareAccelerated?: boolean;
    /**
     * 窗口的高度
     * 支持百分比、像素值，默认为100%。
     * 	当未设置height属性值时，优先通过top和bottom属性值来计算窗口的高度。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    height?: string;
    /**
     * 窗口使用的内核
     * 可取值：
     * 	"WKWebview" - 在iOS8.0及以上系统使用WKWebview内核，低版本下仍然使用UIWebview内核；
     *     "UIWebview" - 在所有版本上都使用UIWebview内核。
     *     默认值为"UIWebview"。
     *     WKWebview内核的优势是：
     * 		1. 滚动时懒加载的图片也可以实时渲染，UIWebview在滚动停止后才能渲染；
     * 		2. WKWebview的video支持AirPlay。
     * 	但WKWebview也有些限制和不足，目前已知的问题有：
     * 		1. 不支持跨域设置cookie，即plus.navigator.setCookie()API无法使用；
     * 		2. 本地的HTML页面中的XHR不支持跨域访问，需使用plus.net.XMLHttpRequest来替换；
     * 		3. 不支持使用WebSQL，需使用indexDB来替换；
     * 		4. 不支持js原生混淆功能，需使用前端js混淆来替换；
     * 		5. 内存不足时会白屏。
     * 	首页的Webview的kernel在manifest中配置（plus-&gt;kernel-&gt;ios）。
     * - WKWebview: 
     * 	使用"WKWebview"内核。
     * 								
     * - UIWebview: 
     * 	使用"UIWebview"内核。
     * 								
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    kernel?: 'WKWebview' | 'UIWebview';
    /**
     * 窗口水平向右的偏移量
     * 支持百分比、像素值，默认值为0px。
     * 	未设置left属性值时，优先通过right和width属性值来计算窗口的left位置。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    left?: string;
    /**
     * 窗口的边距
     * 用于定位窗口的位置，支持auto，auto表示居中。若设置了left、right、top、bottom则对应的边距值失效。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    margin?: string;
    /**
     * 窗口的遮罩
     * 用于设置Webview窗口的遮罩层样式，遮罩层会覆盖Webview中所有内容，包括子webview，并且截获webview的所有触屏事件，此时Webview窗口的点击操作会触发maskClick事件。
     * 	字符串类型，可取值：
     * 	rgba格式字符串，定义纯色遮罩层样式，如"rgba(0,0,0,0.5)"，表示黑色半透明；
     * 	"none"，表示不使用遮罩层；
     * 	默认值为"none"，即无遮罩层。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    mask?: string;
    /**
     * 窗口的不透明度
     * 0为全透明，1为不透明，默认值为1，即不透明。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    opacity?: number;
    /**
     * 控制Webview注入5+ API时机
     * 可取值：
     *         "ahead" - 尽量提前，拦截页面中网络js请求实现提前注入，如果没有拦截到js请求则在页面loaded时注入；
     *         "normal" - 页面loaded时注入；
     *         "later" - 较晚在注入，在loaded事件发生后2s再注入，plusready事件同样延迟；
     *         "none" - 不注入，页面无法调用5+ API，不触发plusready事件。
     *         默认值为"normal"。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    plusrequire?: string;
    /**
     * 窗口的进度条样式
     * 设置此属性则在Webview窗口的顶部显示进度条，可配置进度条颜色及高度。
     * 	设置此属性值为undefined或null则隐藏进度条。
     * 	默认不显示进度条。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    progress?: PlusWebviewWebviewProgressStyles;
    /**
     * 窗口的侧滑返回功能
     * 可取值：
     * 		"none"-无侧滑返回功能；
     * 		"close"-侧滑返回关闭Webview窗口；
     * 		"hide"-侧滑返回隐藏webview窗口。
     * - none: 无侧滑返回功能
     * - close: 侧滑返回关闭Webview窗口
     * - hide: 侧滑返回隐藏webview窗口
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    popGesture?: 'none' | 'close' | 'hide';
    /**
     * 窗口下拉刷新配置
     * 设置窗口是否开启下拉刷新功能及样式。
     * 	开启下拉刷新后可通过监听窗口的"pullToRefresh"事件处理下拉刷新业务逻辑，更新操作完成后调用窗口的endPullToRefresh方法结束下拉刷新。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    pullToRefresh?: PlusWebviewWebviewPullToRefreshStyles;
    /**
     * 窗口渲染模式
     * 支持以下属性值：
     * 		"onscreen" - Webview窗口在屏幕区可见时渲染，不可见时不进行渲染，此时能减少内存使用量；
     * 		"always" - Webview在任何时候都渲染，在内存较大的设备上使用，被遮挡的窗口在此中模式下显示的时候会有更流畅的效果。
     * 	默认值为"onscreen"。
     * 	仅Android平台支持。
     * - onscreen: Webview窗口在屏幕区可见时渲染，不可见时不进行渲染，此时能减少内存使用量
     * - always: Webview在任何时候都渲染，在内存较大的设备上使用，被遮挡的窗口在此中模式下显示的时候会有更流畅的效果
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    render?: 'onscreen' | 'always';
    /**
     * 窗口水平向左的偏移量
     * 支持百分比、像素值，默认无值（根据left和width属性值来自动计算）。
     * 	当设置了left和width值时，忽略此属性值；
     * 	当未设置width值时，可通过left和bottom属性值来确定窗口的宽度。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    right?: string;
    /**
     * 窗口是否可缩放
     * 窗口设置为可缩放（scalable:true）时，用户可通过双指操作放大或缩小页面，此时html页面可通过meta节点设置“name="viewport" content="user-scalable=no"”来限制页面不可缩放。
     * 	窗口设置为不可缩放（scalable:false）时，用户不可通过双指操作放大或缩小页面，即使页面中的meta节点也无法开启可缩放功能。
     * 	默认值为false，即不可缩放。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    scalable?: boolean;
    /**
     * 窗口是否显示滚动条
     * 用于控制窗口滚动条样式，可取值：
     * 	"all"：垂直和水平滚动条都显示；
     * 	"vertical"：仅显示垂直滚动条；
     * 	"horizontal"：仅显示水平滚动条；
     * 	"none"：垂直和水平滚动条都不显示。
     * 	默认值为"all"，即垂直和水平滚动条都显示。
     * 	注意：显示滚动条的前提条件是窗口中的内容超过窗口显示的宽或高。
     * - all: 垂直和水平滚动条都显示
     * - vertical: 仅显示垂直滚动条
     * - horizontal: 仅显示水平滚动条
     * - none: 垂直和水平滚动条都不显示
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    scrollIndicator?: 'all' | 'vertical' | 'horizontal' | 'none';
    /**
     * 点击设备的状态栏时是否滚动返回至顶部
     * true表示点击设备的状态栏可以滚动返回至顶部，false表示点击设备的状态栏不可以，默认值为true。
     * 	此功能仅iOS平台支持，在iPhone上有且只有一个Webview窗口的scrollsToTop属性值为true时才生效，所以在显示和关闭Webview窗口时需动态更新所有Webview的scrollsToTop值，已确保此功能生效。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    scrollsToTop?: boolean;
    /**
     * 是否可分享窗口加载的链接地址
     * 在流应用环境（流应用/5+浏览器）中可通过分享按钮分享页面链接地址，
     * 	可取值：
     * 		true - 可分享窗口加载页面链接地址；
     * 		false - 不可分享窗口加载的页面链接地址，此时分享的是应用。
     * 	默认值值为true。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    shareable?: boolean;
    /**
     * 弹出系统软键盘模式
     * 可选值：“adjustPan”- 弹出软键盘时Webview窗口自动上移，以保证当前输入框可见；“adjustResize”- 自动调整Webview窗口大小（屏幕区域减去软键盘区域），同时自动滚动Webview保证输入框可见。
     * 	默认值为“adjustPan”。
     * - adjustPan: 弹出软键盘时Webview窗口自动上移，以保证当前输入框可见
     * - adjustResize: 自动调整Webview窗口大小（屏幕区域减去软键盘区域），同时自动滚动Webview保证输入框可见
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    softinputMode?: 'adjustPan' | 'adjustResize';
    /**
     * 窗口状态栏样式
     * 仅在应用设置为沉浸式状态栏样式下有效，设置此属性后将自动保留系统状态栏区域不被Webview窗口占用（即Webview窗口非沉浸式样式显示）。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    statusbar?: PlusWebviewWebviewStatusbarStyles;
    /**
     * 定义窗口的原生子View控件
     * 数组类型，可通过配置项设置原生子View控件，每个配置项对应添加一个原生子View控件。
     * 	通过Webview窗口的getSubNViews()方法可获取原生子View控件对象数组。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    subNViews?: PlusWebview [];
    /**
     * 定义窗口的标题栏控件样式
     * 设置此属性值则表明创建Webview窗口的标题栏控件，并可通过其属性值设置背景颜色、文本内容、文本颜色等。
     * 	通过Webview窗口的getTitleNView()方法可获取标题栏控件对象。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    titleNView?: PlusWebviewWebviewTitleNViewStyles;
    /**
     * 窗口垂直向下的偏移量
     * 支持百分比、像素值，默认值为0px。
     * 	未设置top属性值时，优先通过bottom和height属性值来计算窗口的top位置。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    top?: string;
    /**
     * 窗口定义窗口变换的动画效果
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    transition?: PlusWebviewWebviewTransition;
    /**
     * 窗口定义窗口变形效果
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    transform?: PlusWebviewWebviewTransform;
    /**
     * Webview窗口的排版位置
     * 当Webview窗口添加到另外一个窗口中时，排版位置才会生效，排版位置决定子窗口在父窗口中的定位方式。
     * 	可取值："static"，控件在页面中正常定位，如果页面存在滚动条则随窗口内容滚动；"absolute"，控件在页面中绝对定位，如果页面存在滚动条不随窗口内容滚动；"dock"，控件在页面中停靠，停靠的位置由dock属性值决定。
     * 	默认值为"absolute"。
     * - static: 控件在页面中正常定位，如果页面存在滚动条则随窗口内容滚动
     * - absolute: 控件在页面中绝对定位，如果页面存在滚动条不随窗口内容滚动
     * - dock: 控件在页面中停靠，停靠的位置由dock属性值决定
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    position?: 'static' | 'absolute' | 'dock';
    /**
     * 用户是否可选择内容
     * 可取值：
     * 	true - 表示可选择内容，用户可通过长按来选择页面内容，如文本内容选择后可以弹出系统复制粘贴菜单；
     * 	false - 表示不可选择内容，用户不可通过长按来选择页面内容。
     * 	默认值为true。
     * 	注意：在Web页面中可通过CSS的user-select对单个页面元素进行控制，前提是Webview对象的userSelect设置为true，否则CSS设置的user-select失效。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    userSelect?: boolean;
    /**
     * 视频全屏播放时的显示方向
     * 可取值：
     * 	"auto": 自动适配，如果当前页面竖屏，则竖屏显示；如果当前页面横盘显示，则横屏；如果当前页面自动感应，则自动感应横竖屏切换。
     * 	"portrait-primary": 竖屏正方向； 
     * 	"portrait-secondary": 竖屏反方向，屏幕正方向按顺时针旋转180°； 
     * 	"landscape-primary": 横屏正方向，屏幕正方向按顺时针旋转90°； 
     * 	"landscape-secondary": 横屏方向，屏幕正方向按顺时针旋转270°； 
     * 	"landscape": 横屏正方向或反方向，根据设备重力感应器自动调整；
     * 	默认值为“auto”。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    videoFullscreen?: string;
    /**
     * 窗口的宽度
     * 支持百分比、像素值，默认为100%。未设置width属性值时，可同时设置left和right属性值改变窗口的默认宽度。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    width?: string;
    /**
     * 窗口的堆叠顺序值
     * 拥有更高堆叠顺序的窗口总是会处于堆叠顺序较低的窗口的前面，拥有相同堆叠顺序的窗口后调用show方法则在前面。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    zindex?: number;
}

/**
 * 一组用于定义页面或控件变形的属性
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
 */
interface PlusWebviewWebviewTransform {
    /**
     * 暂不支持
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    rotate?: string;
    /**
     * 暂不支持
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    translate?: string;
    /**
     * 暂不支持
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    scale?: string;
    /**
     * 暂不支持
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    skew?: string;
    /**
     * 暂不支持
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    matrix?: string;
}

/**
 * 一组用于定义页面或控件转换效果的属性
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
 */
interface PlusWebviewWebviewTransition {
    /**
     * 产生变换效果的属性
     * 默认值为"all"，暂不支持其它值。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    property?: string;
    /**
     * 变换持续的时间
     * 默认值为0，即无动画效果。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    duration?: string;
    /**
     * 窗口变换效果
     * 可取值：
     * 	"linear"：匀速变化，匀速动画效果；
     * 	"ease-in"：匀加速变化，逐渐变快的动画效果；
     * 	"ease-out"：匀减速变化，逐渐变慢的动画效果；
     * 	"ease-in-out"：先加速后减速变化，先变快后变慢的动画效果。
     * 	默认值为"ease-in-out"。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    timingfunction?: string;
}

/**
 * 拦截Webview窗口资源请求的参数
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
 */
interface PlusWebviewWebviewOverrideResourceOptions {
    /**
     * 区配需要拦截请求资源的URL地址
     * 支持正则表达式，默认值为空字符串（即不拦截）。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    match?: string;
    /**
     * 拦截重定向的资源地址
     * 仅支持本地资源地址，如"_www"、"_doc"、"_downloads"、"_documents"等开头的路径。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    redirect?: string;
    /**
     * 重定向的资源数据类型
     * RFC2045/RFC2046/RFC2047/RFC2048/RFC2049规范中定义的数据类型。
     * 	如普通文本（text/plain）、PNG图像(image/png)、GIF图形(image/gif)、JPEG图形(image/jpeg)。
     * 	如果未指定mime类型，则根据重定向资源路径自动区配。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    mime?: string;
    /**
     * 重定向的资源数据编码
     * 如未设置，则使用默认值"UTF-8"。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    encoding?: string;
    /**
     * 设置重定向资源数据的http头数据
     * 可设置标注http头数据（如Content-type）,也可设置自定义数据。
     * 	通常可通过此属性来设置拦截资源的缓存策略（如Cache-control）。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    header?: any;
}

/**
 * 拦截Webview窗口URL请求的属性
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
 */
interface PlusWebviewWebviewOverrideUrlOptions {
    /**
     * 拦截URL请求生效时机
     * 可取值：
     * 		"instant" - 表示立即生效，即调用overrideUrlLoading方法后立即生效；
     * 		"touchstart" - 表示用户操作Webview窗口（触发touchstart事件）后生效，如果用户没有操作Webview窗口则不对URL请求操作进行拦截处理。
     * 	默认值为"instant"。
     * - instant: 
     * 	立即生效，即调用overrideUrlLoading方法后立即生效。
     * 								
     * - : 
     * 	表示用户操作Webview窗口（触发touchstart事件）后生效。
     * 								
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    effect?: 'instant' | '';
    /**
     * 拦截模式
     * 可取值：
     * 	"allow"表示满足match属性定义的条件时不拦截url继续加载，不满足match属性定义的条件时拦截url跳转并触发callback回调；
     * 	"reject"表示满足match属性定义的提交时拦截url跳转并触发callback回调，不满足match属性定义的条件时不拦截url继续加载。
     * 	默认值为"reject"。
     * - allow: 
     * 	满足match属性定义的条件时不拦截url继续加载，不满足match属性定义的条件时拦截url跳转并触发callback回调。
     * 								
     * - reject: 
     * 	满足match属性定义的提交时拦截url跳转并触发callback回调，不满足match属性定义的条件时不拦截url继续加载。
     * 								
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    mode?: 'allow' | 'reject';
    /**
     * 区配是否需要处理的URL请求
     * 支持正则表达式，默认值为对所有URL地址生效（相当于正则表达式“.*”）。
     * 	如果mode值为"allow"则允许区配的URL请求跳转，mode值为"reject"则拦截区配的URL请求。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    match?: string;
    /**
     * 排除拦截处理请求类型
     * 不拦截处理指定类型的URL请求，直接使用系统默认处理逻辑。
     * 	可取值：
     * 	"none"表示不排除任何URL请求（即拦截处理所有URL请求）；
     * 	"redirect"表示排除拦截处理301/302跳转的请求（谨慎使用，非a标签的href触发的URL请求可能会误判断为302跳转）。
     * 	默认值为"none"。
     * - none: 
     * 	不排除任何URL请求（即拦截处理所有URL请求）。
     * 								
     * - redirect: 
     * 	排除拦截处理301/302跳转的请求（谨慎使用，非a标签的href触发的URL请求可能会误判断为302跳转）。
     * 								
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    exclude?: 'none' | 'redirect';
}

/**
 * 监听Webview窗口资源加载的属性
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
 */
interface PlusWebviewWebviewListenResourceOptions {
    /**
     * 区配是否需要处理的URL资源
     * 支持正则表达式，默认值为对所有URL资源请求生效（相当于正则表达式“.*”）。
     * 	如果Webview加载的资源区配条件，则触发回调事件。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/webview.html](http://www.html5plus.org/doc/zh_cn/webview.html)
     */
    match?: string;
}

/**
 * XMLHttpRequest模块管理网络请求，与标准HTML中的XMLHttpRequest用途一致，差别在于前者可以进行跨域访问。通过plus.net可获取网络请求管理对象。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/net.html](http://www.html5plus.org/doc/zh_cn/net.html)
 */
interface PlusNet {
    /**
     * 跨域网络请求对象
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/net.html](http://www.html5plus.org/doc/zh_cn/net.html)
     */
    XMLHttpRequest?: PlusNetXMLHttpRequest;
    /**
     * HTTP请求进度事件
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/net.html](http://www.html5plus.org/doc/zh_cn/net.html)
     */
    ProgressEvent?: PlusNetProgressEvent;
}

/**
 * 跨域网络请求对象
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/net.html](http://www.html5plus.org/doc/zh_cn/net.html)
 */
interface PlusNetXMLHttpRequest {
    /**
     * HTTP 请求的状态
     * 当一个 XMLHttpRequest 初次创建时，这个属性的值从 0 开始，直到接收到完整的 HTTP 响应，这个值增加到 4。
     * 	5 个状态中每一个都有一个相关联的非正式的名称，下表列出了状态、名称和含义：
     * 		0 Uninitialized，未初始化状态。XMLHttpRequest对象已创建或已被abort()方法重置。
     * 		1 Open，open()方法已调用，但是send()方法未调用。请求还没有被发送。
     * 		2 Sent，send()方法已调用，HTTP 请求已发送到Web服务器。未接收到响应。
     * 		3 Receiving，所有响应头部都已经接收到。响应体开始接收但未完成。
     * 		4 Loaded，HTTP响应已经完全接收。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/net.html](http://www.html5plus.org/doc/zh_cn/net.html)
     */
    readyState?: number;
    /**
     * 请求从服务器接收到的响应数据
     * 如果没有从服务器接收到数据，则为null；
     * 	否则根据responseType类型决定：
     * 		如果responseType设置为空字符串或"text"，则返回空字符串；
     * 		如果responseType设置为"document"，则返回Document对象；
     * 		如果responseType设置为"json"，则返回JSON对象；
     * 	若服务器返回的数据与设置的responseType类型不区配，则返回null。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/net.html](http://www.html5plus.org/doc/zh_cn/net.html)
     */
    response?: string;
    /**
     * 请求从服务器接收到的响应数据（字符串数据）
     * 如果还没有接收到数据的话，此属性值为空字符串；
     * 	如果readyState小于3，此属性值为空字符串；
     * 	如果readyState为3，此属性值返回目前已经接收的HTTP响应部分数据值；
     * 	如果readyState为4，此属性值保存了完整的HTTP响应数据体。
     * 	如果HTTP请求返回的数据头中包含了Content-Type值中指定字符编码，就使用该编码，否则，使用UTF-8字符集。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/net.html](http://www.html5plus.org/doc/zh_cn/net.html)
     */
    responseText?: string;
    /**
     * 请求响应数据response的类型
     * 默认值为空字符串，即reponse为String，类型可设置："document"表示Document对象，"json"表示JSON对象，"text"表示字符串。
     * 	此值必须在调用send方法之前设置，否则设置的值不生效，仍使用之前设置的值。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/net.html](http://www.html5plus.org/doc/zh_cn/net.html)
     */
    responseType?: string;
    /**
     * 请求响应的Document对象
     * 对请求的响应，解析为 XML 并作为 Document 对象返回。
     * 	如果请求未成功，或响应的数据无法被解析为XML，则返回null。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/net.html](http://www.html5plus.org/doc/zh_cn/net.html)
     */
    responseXML?: string;
    /**
     * 服务器返回的HTTP状态代码
     * 服务器返回的HTTP状态代码，如200表示成功，而404表示"Not Found"错误；
     * 	当readyState小于3的时候此属性值为0。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/net.html](http://www.html5plus.org/doc/zh_cn/net.html)
     */
    status?: number;
    /**
     * 服务器返回的HTTP状态描述
     * 此属性值用名称而不是数字指定了请求的HTTP的状态代码。
     * 	也就是说，当状态为200的时候它是"OK"；当状态为404的时候它是"Not Found"。
     * 	和status属性类似，当readyState小于3的时候读取这一属性会返回空字符串。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/net.html](http://www.html5plus.org/doc/zh_cn/net.html)
     */
    statusText?: string;
    /**
     * 请求服务器的超时时间，单位为毫秒（ms）
     * 数值类型，单位为ms，其默认值为120秒。
     * 	超时时间为服务器响应请求的时间（不是Http请求完成的总时间），如果设置为0则表示永远不超时。
     * 	必须在请求发起前设置，否则当前请求将不生效，在当前请求完成后重新发起新请求时生效。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/net.html](http://www.html5plus.org/doc/zh_cn/net.html)
     */
    timeout?: number;
    /**
     * 是否支持跨域请求
     * 此对象创建的HTTP请求都支持跨域，所以永远返回true。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/net.html](http://www.html5plus.org/doc/zh_cn/net.html)
     */
    withCredentials?: boolean;
    /**
     * 网络请求状态发生变化事件
     * 网络请求状态发生变化时触发，通常在函数中判断对象的state属性值来获取当前请求的状态。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/net.html](http://www.html5plus.org/doc/zh_cn/net.html)
     */
    onreadystatechange?: () => void;
    /**
     * 网络请求开始事件
     * 通常在调用send方法开始发起HTTP请求时触发。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/net.html](http://www.html5plus.org/doc/zh_cn/net.html)
     */
    onloadstart?: (result: PlusNetProgressEvent) => void;
    /**
     * 网络请求传输数据事件
     * 通常在HTTP请求链接已经建立，开始传输数据时触发，在数据传输的过程中可能多次触发，此事件与onreadystatechange事件触发状态3类似。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/net.html](http://www.html5plus.org/doc/zh_cn/net.html)
     */
    onprogress?: (result: PlusNetProgressEvent) => void;
    /**
     * 网络请求取消事件
     * 通常在调用abort方法取消HTTP请求时触发。
     * 	此事件在onreadystatechange事件触发状态4事件之后。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/net.html](http://www.html5plus.org/doc/zh_cn/net.html)
     */
    onabort?: (result: PlusNetProgressEvent) => void;
    /**
     * 网络请求错误事件
     * 通常在HTTP请求发生错误时触发，如无法连接到服务器等各种错误都触发此事件。
     * 	此事件在onreadystatechange事件触发状态4事件之后。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/net.html](http://www.html5plus.org/doc/zh_cn/net.html)
     */
    onerror?: (result: PlusNetProgressEvent) => void;
    /**
     * 网络请求成功事件
     * 通常在HTTP请求成功完成时触发，如果HTTP请求发生错误则不触发此事件。
     * 	此事件在onreadystatechange事件触发状态4事件之后。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/net.html](http://www.html5plus.org/doc/zh_cn/net.html)
     */
    onload?: (result: PlusNetProgressEvent) => void;
    /**
     * 网络请求超时事件
     * 通常在HTTP请求超时时触发，此时不会触发onerror事件。
     * 	此事件在onreadystatechange事件触发状态4事件之后。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/net.html](http://www.html5plus.org/doc/zh_cn/net.html)
     */
    ontimeout?: (result: PlusNetProgressEvent) => void;
    /**
     * 网络请求结束事件
     * 通常在HTTP请求结束时触发，不管是HTTP请求失败、成功、或超时之后都会触发此事件。
     * 	此事件在onreadystatechange事件触发状态4事件之后。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/net.html](http://www.html5plus.org/doc/zh_cn/net.html)
     */
    onloadend?: (result: PlusNetProgressEvent) => void;
    /**
     * 取消当前响应，关闭连接并且结束任何未决的网络活动
     * 此方法把XMLHttpRequest对象重置为readyState为0的状态，并且取消所有未决的网络活动。
     * 	调用此方法后将停止触发XMLHttpRequest对象的所有事件。
     * 	例如，如果请求用了太长时间，而且响应不再必要的时候，可以调用这个方法。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/net.html](http://www.html5plus.org/doc/zh_cn/net.html)
     */
    abort(): void;
    /**
     * 获取HTTP响应头部信息
     * 把HTTP响应头部作为未解析的字符串返回。 如果readyState小于3，这个方法返回null。
     * 	否则，它返回服务器发送的所有 HTTP 响应的头部。头部作为单个的字符串返回，一行一个头部。每行用换行符"\r\n"隔开。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/net.html](http://www.html5plus.org/doc/zh_cn/net.html)
     */
    getAllResponseHeaders(): string;
    /**
     * 获取指定的HTTP响应头部的值
     * 其参数是要返回的 HTTP 响应头部的名称。可以使用任何大小写来制定这个头部名字，和响应头部的比较是不区分大小写的。
     * 	该方法的返回值是指定的 HTTP 响应头部的值，如果没有接收到这个头部或者readyState小于3则为空字符串。
     * 	如果接收到多个有指定名称的头部，这个头部的值被连接起来并返回，使用逗号和空格分隔开各个头部的值。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/net.html](http://www.html5plus.org/doc/zh_cn/net.html)
     */
    getResponseHeader(headerName?: string): string;
    /**
     * 初始化HTTP请求参数，例如URL和HTTP方法，但是并不发送请求
     * 这个方法初始化请求参数以供 send() 方法稍后使用。它把readyState设置为1，删除之前指定的所有请求头部，以及之前接收的所有响应头部，并且把responseText、responseXML、status 以及 statusText 参数设置为它们的默认值。
     * 	当readyState为0的时候（当XMLHttpRequest对象刚创建或者abort()方法调用后）以及当readyState为4时（已经接收响应时），调用这个方法是安全的。
     * 	当针对任何其他状态调用的时候，open()方法的行为是为指定的。
     * 	除了保存供send()方法使用的请求参数，以及重置 XMLHttpRequest 对象以便复用，open()方法没有其他的行为。
     * 	要特别注意，当这个方法调用的时候，实现通常不会打开一个到Web服务器的网络连接。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/net.html](http://www.html5plus.org/doc/zh_cn/net.html)
     */
    open(method?: string, url?: string, username?: string, password?: string): void;
    /**
     * 重写服务器返回的MIME类型
     * 此方法覆盖HTTP请求返回数据头"Content-Type"字段值中包含的IMIE类型，如果设置的MIME类型无效则继续使用"Content-Type"字段值中包含的IMIE类型。
     * 	如果MIME类型中指定了字符集类型（charset），则需按照指定的字符集类型对接收到的数据体（respose）进行处理，否则默认为UTF-8字符集。
     * 	注意：此方法需在send方法前调用。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/net.html](http://www.html5plus.org/doc/zh_cn/net.html)
     */
    overrideMimeType(mime?: string): void;
    /**
     * 发送HTTP请求
     * 此方法触发HTTP请求发送，如果之前没有调用open()，或者更具体地说，如果readyState不是1，send()抛出一个异常。否则，将发送HTTP请求，该请求由以下几部分组成：	
     * 	之前调用open()时指定的HTTP方法、URL；
     * 	之前调用setRequestHeader()时指定的请求头部（如果有的话）；
     * 	传递给这个方法的body参数。
     * 	一旦请求发送了，send()把readyState设置为2，并触发onreadystatechange事件；
     * 	如果服务器响应带有一个HTTP重定向，send()方法在后台线程自动遵从重定向；
     * 	当所有的HTTP响应头部已经接收，send()或后台线程把readyState设置为3并触发onreadystatechange事件；
     * 	如果响应较长，send()或后台线程可能在状态3中触发多次onreadystatechange事件；
     * 	最后，当响应完成，send()或后台线程把readyState设置为4，并最后一次触发onreadystatechange事件。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/net.html](http://www.html5plus.org/doc/zh_cn/net.html)
     */
    send(body?: string): void;
    /**
     * 指定一个HTTP请求的Header
     * Http的Header应该包含在通过后续send()调用而发起的请求中。
     * 	此方法只有当readyState为1的时候才能调用，例如，在调用了open()之后，但在调用send()之前。
     * 	如果带有指定名称的头部已经被指定了，这个头部的新值就是：之前指定的值，加上逗号、以及这个调用指定的值（形成一个数组）。
     * 	如果Web服务器已经保存了和传递给open()的URL相关联的cookie，适当的Cookie或Cookie2头部也自动地包含到请求中，可以通过调用setRequestHeader()来把这些cookie添加到头部。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/net.html](http://www.html5plus.org/doc/zh_cn/net.html)
     */
    setRequestHeader(headerName?: string, headerValue?: string): void;
}

/**
 * HTTP请求进度事件
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/net.html](http://www.html5plus.org/doc/zh_cn/net.html)
 */
interface PlusNetProgressEvent {
    /**
     * 事件的目标对象
     * 通知HTTP请求进度事件的XMLHttpRequest对象。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/net.html](http://www.html5plus.org/doc/zh_cn/net.html)
     */
    target?: PlusNetXMLHttpRequest;
    /**
     * 进度信息是否可计算
     * HTTP请求进度信息是否有效，如果HTTP请求头中包含Content-Length头信息则为true，否则为false。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/net.html](http://www.html5plus.org/doc/zh_cn/net.html)
     */
    lengthComputable?: number;
    /**
     * 当前已经接收到的数据长度
     * HTTP请求接收到的数据长度，单位为字节。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/net.html](http://www.html5plus.org/doc/zh_cn/net.html)
     */
    loaded?: number;
    /**
     * 总数据长度
     * HTTP请求返回的总数据长度，单位为字节。
     * 	如果无法获取则设置为0。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/net.html](http://www.html5plus.org/doc/zh_cn/net.html)
     */
    total?: number;
}

/**
 * Zip模块管理文件压缩和解压，通过plus.zip可获取压缩管理对象。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/zip.html](http://www.html5plus.org/doc/zh_cn/zip.html)
 */
interface PlusZip {
    /**
     * JSON对象，配置图片压缩转换的参数
     * 设置width/height属性则表示需对图片进行缩放转换操作；
     * 	设置rotate属性则表示需对图片进行旋转转换操作；
     * 	设置clip属性则表示需对图片进行裁剪转换操作；
     * 	如同时设置了多个转换操作，则按缩放、旋转、裁剪顺序进行操作。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/zip.html](http://www.html5plus.org/doc/zh_cn/zip.html)
     */
    CompressImageOptions?: PlusZipCompressImageOptions;
    /**
     * JSON对象，图片裁剪区域的参数
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/zip.html](http://www.html5plus.org/doc/zh_cn/zip.html)
     */
    ClipImageOptions?: PlusZipClipImageOptions;
    /**
     * 压缩生成Zip文件
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/zip.html](http://www.html5plus.org/doc/zh_cn/zip.html)
     */
    compress(src?: string, zipfile?: string, successCB?: () => void, errorCB?: (result: any) => void): void;
    /**
     * 解压缩Zip文件
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/zip.html](http://www.html5plus.org/doc/zh_cn/zip.html)
     */
    decompress(zipfile?: string, target?: string, successCB?: () => void, errorCB?: (result: any) => void): void;
    /**
     * 图片压缩转换
     * 可用于图片的质量压缩、大小缩放、方向旋转、区域裁剪、格式转换等。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/zip.html](http://www.html5plus.org/doc/zh_cn/zip.html)
     */
    compressImage(options?: PlusZipCompressImageOptions, successCB?: (result: any) => void, errorCB?: (result: any) => void): void;
}

/**
 * JSON对象，配置图片压缩转换的参数
 * 设置width/height属性则表示需对图片进行缩放转换操作；
 * 	设置rotate属性则表示需对图片进行旋转转换操作；
 * 	设置clip属性则表示需对图片进行裁剪转换操作；
 * 	如同时设置了多个转换操作，则按缩放、旋转、裁剪顺序进行操作。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/zip.html](http://www.html5plus.org/doc/zh_cn/zip.html)
 */
interface PlusZipCompressImageOptions {
    /**
     * 压缩转换原始图片的路径
     * 支持以下图片路径：
     * 	相对路径 - 相对于当前页面的host位置，如"a.jpg"，注意当前页面为网络地址则不支持；
     * 	绝对路径 - 系统绝对路径，如Android平台"/storage/sdcard0/Android/data/io.dcloud.HBuilder/.HBuilder/apps/HBuilder/www/ａ.jpg"，iOS平台"/var/mobile/Containers/Data/Application/757966CF-345C-4348-B07F-EEF83CF9A369/Library/Pandora/apps/HBuilder/www/a.png"；
     * 	相对路径URL(RelativeURL) - 以"_"开头的相对路径，如"_www/a.jpg"、"_doc/b.jpg"、"_documents/c.jpg"、"_downloads/d.jpg"；
     * 	本地路径URL - 以“file://”开头，后面跟随系统绝对路径。
     * - _www/: 应用资源目录
     * - _doc/: 应用私有文档目录
     * - _documents/: 共享文档目录
     * - _downloads/: 共享下载目录
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/zip.html](http://www.html5plus.org/doc/zh_cn/zip.html)
     */
    src?: '_www/' | '_doc/' | '_documents/' | '_downloads/';
    /**
     * 压缩转换目标图片的路径
     * 支持以下图片路径：
     * 	绝对路径 - 系统绝对路径，如Android平台"/storage/sdcard0/Android/data/io.dcloud.HBuilder/.HBuilder/apps/HBuilder/doc/ａ.jpg"，iOS平台"/var/mobile/Containers/Data/Application/757966CF-345C-4348-B07F-EEF83CF9A369/Library/Pandora/apps/HBuilder/doc/a.png"；
     * 	相对路径URL(RelativeURL) - 以"_"开头的相对路径，如"_doc/b.jpg"、"_documents/c.jpg"、"_downloads/d.jpg"，注意不支持"_www"开头的路径；
     * 	本地路径URL - 以“file://”开头，后面跟随系统绝对路径。
     * 	注意：如果设置的路径无权限访问，则返回失败。
     * - _doc/: 应用私有文档目录
     * - _documents/: 共享文档目录
     * - _downloads/: 共享下载目录
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/zip.html](http://www.html5plus.org/doc/zh_cn/zip.html)
     */
    dst?: '_doc/' | '_documents/' | '_downloads/';
    /**
     * 覆盖生成新文件
     * 仅在dst制定的路径文件存在时有效：
     * 	true表示覆盖存在的文件；
     * 	false表示不覆盖，如果文件存在，则返回失败。
     * 	默认值为false。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/zip.html](http://www.html5plus.org/doc/zh_cn/zip.html)
     */
    overwrite?: boolean;
    /**
     * 压缩转换后的图片格式
     * 支持"jpg"、"png",如果未指定则使用源图片的格式。
     * - jpg: JPG格式图片
     * - png: PNG格式图片
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/zip.html](http://www.html5plus.org/doc/zh_cn/zip.html)
     */
    format?: 'jpg' | 'png';
    /**
     * 压缩图片的质量
     * 取值范围为1-100，1表示使用最低的图片质量（转换后的图片文件最小）、100表示使用最高的图片质量（转换后的图片文件最大）；
     * 	默认值为50。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/zip.html](http://www.html5plus.org/doc/zh_cn/zip.html)
     */
    quality?: number;
    /**
     * 缩放图片的宽度
     * 支持像素值（如"100px"）、百分比（如"50%"）、自动计算（如"auto"，即根据height与源图高的缩放比例计算，若未设置height则使用源图高度）；
     * 	默认值为"auto"。
     * 	注意：若设置了width属性值不合法（如"0px"），则不对图片进行缩放操作。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/zip.html](http://www.html5plus.org/doc/zh_cn/zip.html)
     */
    width?: string;
    /**
     * 缩放图片的高度
     * 支持像素值（如"100px"）、百分比（如"50%"）、自动计算（如"auto"，即根据width与源图宽的缩放比例计算，若未设置width则使用源图高度）；
     * 	默认值为"auto"。
     * 	注意：若设置了height属性值不合法（如"0px"），则不对图片进行缩放操作。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/zip.html](http://www.html5plus.org/doc/zh_cn/zip.html)
     */
    height?: string;
    /**
     * 旋转图片的角度
     * 支持值：90-表示旋转90度；180-表示旋转180度；270-表示旋转270度。
     * 	注意：若设置rotate属性值不合法，则不对图片进行旋转操作。
     * - 90: 旋转90度
     * - 180: 旋转180度
     * - 270: 旋转270度
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/zip.html](http://www.html5plus.org/doc/zh_cn/zip.html)
     */
    rotate?: '90' | '180' | '270';
    /**
     * 裁剪图片的区域
     * 值参考ClipImageOptions定义，若设置clip属性值不合法，则不对图片进行裁剪操作。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/zip.html](http://www.html5plus.org/doc/zh_cn/zip.html)
     */
    clip?: PlusZipClipImageOptions;
}

/**
 * JSON对象，图片裁剪区域的参数
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/zip.html](http://www.html5plus.org/doc/zh_cn/zip.html)
 */
interface PlusZipClipImageOptions {
    /**
     * 图片裁剪区域与原图片上边界的偏移距离
     * 支持像素值（如"10px"）、百分比（如"10%"）；默认值为"0px"。
     * 	注意：如果top值超出原图片高度，则图片裁剪失败。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/zip.html](http://www.html5plus.org/doc/zh_cn/zip.html)
     */
    top?: string;
    /**
     * 图片裁剪区域与原图片左边界的偏移距离
     * 支持像素值（如"10px"）、百分比（如"10%"）；默认值为"0px"。
     * 	注意：如果left值超出原图片宽度，则图片裁剪失败。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/zip.html](http://www.html5plus.org/doc/zh_cn/zip.html)
     */
    left?: string;
    /**
     * 图片裁剪区域的宽度
     * 支持像素值（如"100px"）、百分比（如"50%"）、自动计算（如"auto"，即从left位置到图片右边界的宽度）；默认值为"auto"。
     * 	注意：如果left值加width值超出原图片宽度，则使用"auto"值进行裁剪。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/zip.html](http://www.html5plus.org/doc/zh_cn/zip.html)
     */
    width?: string;
    /**
     * 图片裁剪区域的高度
     * 支持像素值（如"100px"）、百分比（如"50%"）、自动计算（如"auto"，即从top位置到图片下边界的高度）；默认值为"auto"。
     * 	注意：如果top值加height值超出原图片高度，则使用"auto"值进行裁剪。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/zip.html](http://www.html5plus.org/doc/zh_cn/zip.html)
     */
    height?: string;
}

/**
 * Barcode模块管理条码扫描，支持常见的条码（一维码及二维码）的扫描识别功能。可调用设备的摄像头对条码图片扫描进行数据输入，解码后返回码数据及码类型。通过plus.barcode可获取条码码管理对象。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/barcode.html](http://www.html5plus.org/doc/zh_cn/barcode.html)
 */
interface PlusBarcode {
    /**
     * Barcode扫码控件对象
     * Barcode对象表示条码识别控件对象，在窗口中显示条码识别控件，使用此对象可自定义条码识别界面。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/barcode.html](http://www.html5plus.org/doc/zh_cn/barcode.html)
     */
    Barcode?: PlusBarcodeBarcode;
    /**
     * Barcode扫码控件样式
     * 设置Barcode扫码控件的样式，如扫码框、扫码条的颜色等。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/barcode.html](http://www.html5plus.org/doc/zh_cn/barcode.html)
     */
    BarcodeStyles?: PlusBarcodeBarcodeStyles;
    /**
     * 条码识别控件扫描参数
     * 设置Barcode扫码控件的扫码识别参数，如是否保存扫码功时的截图等。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/barcode.html](http://www.html5plus.org/doc/zh_cn/barcode.html)
     */
    BarcodeOptions?: PlusBarcodeBarcodeOptions;
    /**
     * QR二维码，数值为0
     * 1994年由日本Denso-Wave公司发明，QR来自英文Quick Response的缩写，即快速反应的意思，源自发明者希望QR码可让其内容快速被解码。
     * 	目前使用最广泛的二维码。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/barcode.html](http://www.html5plus.org/doc/zh_cn/barcode.html)
     */
    QR?: number;
    /**
     * EAN条形码标准版，数值为1
     * 国际物品编码协会在全球推广应用的商品条码，是由13位数字组成。
     * 	目前使用最广泛的一维条形码。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/barcode.html](http://www.html5plus.org/doc/zh_cn/barcode.html)
     */
    EAN13?: number;
    /**
     * ENA条形码简版，数值为2
     * 国际物品编码协会在全球推广应用的商品条码，是由8位数字组成。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/barcode.html](http://www.html5plus.org/doc/zh_cn/barcode.html)
     */
    EAN8?: number;
    /**
     * Aztec二维码，数值为3
     * Andrew Longacre发明于1995年，该代码是用于国际出版。最小的Aztec码符号编码13个数字或12个英文字母。最大的Aztec码符号编码3832数字或3067英文字母或1914字节的数据。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/barcode.html](http://www.html5plus.org/doc/zh_cn/barcode.html)
     */
    AZTEC?: number;
    /**
     * Data Matrix二维码，数值为4
     * Data Matrix原名Data code，由美国国际资料公司(International Data Matrix, 简称IDMatrix)于1989年发明。可编码字元集包括全部的ASCII字元及扩充ASCII字元，容量可包含2235个英文数字资料、1556个8位元资料，3116个数字资料。由于Data Matrix二维条码只需要读取资料的20%即可精确辨读，因此很适合应用在条码容易受损的场所。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/barcode.html](http://www.html5plus.org/doc/zh_cn/barcode.html)
     */
    DATAMATRIX?: number;
    /**
     * UPC条形码标准版，数值为5
     * UPC码是美国统一代码委员会制定的一种商品用条码，主要用于美国和加拿大地区，常在美国进口的商品上可以看到。UPC码标准版由12位数字构成，故其字码集为数字0~9。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/barcode.html](http://www.html5plus.org/doc/zh_cn/barcode.html)
     */
    UPCA?: number;
    /**
     * UPC条形码缩短版，数值为6
     * UPC码是美国统一代码委员会制定的一种商品用条码，主要用于美国和加拿大地区，常在美国进口的商品上可以看到。UPC码缩短版由8位数字构成，故其字码集为数字0~9。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/barcode.html](http://www.html5plus.org/doc/zh_cn/barcode.html)
     */
    UPCE?: number;
    /**
     * Codabar条形码，数值为7
     * Codabar码最初是为零售价格标签系统而研制开发的。1975年，National Retail Merchants Association（NRMA）选择了其它符号类型作为标准后，Codabar开始在多个方面用于非零售应用领域，如图书馆、货运和医药业。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/barcode.html](http://www.html5plus.org/doc/zh_cn/barcode.html)
     */
    CODABAR?: number;
    /**
     * Code39条形码，数值为8
     * Code 39码是Intermec公司于1975年推出的一维条码， 39码是一种可供使用者双向扫瞄的分散式条码，也就是说相临两资料码之间，39码必须包含一个不具任何意义的空白(或细白，其逻辑值为0)，且 39码具有支援文数字的能力，编码规则简单、误码率低、所能表示字符个数多等特点，39码在各个领域有着极为广泛的应用。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/barcode.html](http://www.html5plus.org/doc/zh_cn/barcode.html)
     */
    CODE39?: number;
    /**
     * Code93条形码，数值为9
     * Code 93码的条码符号是由Intermec公司于1982年设计的 提供更高的密度和数据安全增强code39 。它是一个字母，长度可变符号。代码93主要用于由加拿大邮政编码补充提供的资料。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/barcode.html](http://www.html5plus.org/doc/zh_cn/barcode.html)
     */
    CODE93?: number;
    /**
     * Code128条形码，数值为10
     * CODE128码是1981年引入的一种高密度条码，CODE128 码可表示从 ASCII 0 到ASCII 127 共128个字符，故称128码。CODE128码是广泛应用在企业内部管理、生产流程、物流控制系统方面的条码码制，由于其优良的特性在管理信息系统的设计中被广泛使用。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/barcode.html](http://www.html5plus.org/doc/zh_cn/barcode.html)
     */
    CODE128?: number;
    /**
     * ITF条形码，数值为11
     * ITF条码，又称交叉二五条码，由14位数字字符代表组成。主要用于运输包装，是印刷条件较差，不允许印刷EAN-13和UPC-A条码时应选用的一种条码。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/barcode.html](http://www.html5plus.org/doc/zh_cn/barcode.html)
     */
    ITF?: number;
    /**
     * MaxiCode二维码，数值为12
     * 1996年时，美国自动辨识协会（AIMUSA）制定统一的符号规格，称为Maxicode二维条码，也有人称USS-Maxicode二维条码（Uniform Symbology Specification-Maxicode）。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/barcode.html](http://www.html5plus.org/doc/zh_cn/barcode.html)
     */
    MAXICODE?: number;
    /**
     * PDF 417二维条码，数值为13
     * PDF417条码是由美国SYMBOL公司发明的，PDF（Portable Data File）意思是“便携数据文件”。组成条码的每一个条码字符由4个条和4个空共17个模块构成，故称为PDF417条码。PDF417条码最大的优势在于其庞大的数据容量和极强的纠错能力。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/barcode.html](http://www.html5plus.org/doc/zh_cn/barcode.html)
     */
    PDF417?: number;
    /**
     * RSS 14条形组合码，数值为14
     * RSS条码是有国际物品编码协会EAN和美国统一代码委员会UCC开发的RSS（Reduced Space Symbology）条码符号。它是一种一维码和二维码的组合码。和其它线性条码相比，RSS系列码制具有更高的密度，因为它可以表示更多的字符。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/barcode.html](http://www.html5plus.org/doc/zh_cn/barcode.html)
     */
    RSS14?: number;
    /**
     * 扩展式RSS条形组合码，数值为15
     * RSS条码是有国际物品编码协会EAN和美国统一代码委员会UCC开发的RSS（Reduced Space Symbology）条码符号。它是一种一维码和二维码的组合码。和其它线性条码相比，RSS系列码制具有更高的密度，因为它可以表示更多的字符。扩展式RSS码是长度可以变化的线性码制，能够对74个数字字符或41个字母字符的AI单元数据传数据进行编码。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/barcode.html](http://www.html5plus.org/doc/zh_cn/barcode.html)
     */
    RSSEXPANDED?: number;
    /**
     * 通过图片扫码识别
     * 直接输入图片扫码识别，成功扫描到条码数据后通过successCallback回调返回，失败则通过errorCallback回调返回。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/barcode.html](http://www.html5plus.org/doc/zh_cn/barcode.html)
     */
    scan(path?: string, successCB?: (result0: number, result1: string, result2: string) => void, errorCB?: (result: any) => void, filters?: any []): void;
    /**
     * 创建Barcode对象
     * 调用此方法创建后并不会显示，需要调用Webview窗口的append方法将其添加到Webview窗口后才能显示。
     * 	注意：此时需要通过styles参数的top/left/width/height属性设置控件的位置及大小。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/barcode.html](http://www.html5plus.org/doc/zh_cn/barcode.html)
     */
    create(id?: string, filters?: any [], styles?: PlusBarcodeBarcodeStyles): PlusBarcodeBarcode;
    /**
     * 查找已经创建的Barcode对象
     * 调用此方法查找指定id的Barcode对象，如果不存在则返回null。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/barcode.html](http://www.html5plus.org/doc/zh_cn/barcode.html)
     */
    getBarcodeById(id?: string): PlusBarcodeBarcode;
}

/**
 * Barcode扫码控件对象
 * Barcode对象表示条码识别控件对象，在窗口中显示条码识别控件，使用此对象可自定义条码识别界面。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/barcode.html](http://www.html5plus.org/doc/zh_cn/barcode.html)
 */
interface PlusBarcodeBarcode {
    /**
     * 条码识别成功事件
     * Barcode扫码控件识别到有效的条码数据时触发的成功事件，并返回扫码结果。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/barcode.html](http://www.html5plus.org/doc/zh_cn/barcode.html)
     */
    onmarked?: (result0: number, result1: string, result2: string) => void;
    /**
     * 条码识别错误事件
     * 描控件识别过程中发生错误时触发的失败事件，并返回错误信息。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/barcode.html](http://www.html5plus.org/doc/zh_cn/barcode.html)
     */
    onerror?: (result: any) => void;
    /**
     * 开始条码识别
     * 开始调用系统摄像头获取图片数据进行扫码识别，当识别出条码数据时通过onmarked回调函数返回。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/barcode.html](http://www.html5plus.org/doc/zh_cn/barcode.html)
     */
    start(optons?: PlusBarcodeBarcodeOptions): void;
    /**
     * 结束条码识别
     * 结束对摄像头获取图片数据进行条码识别操作，同时关闭摄像头的视频捕获。
     * 	结束后可调用start方法重新开始识别。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/barcode.html](http://www.html5plus.org/doc/zh_cn/barcode.html)
     */
    cancel(): void;
    /**
     * 关闭条码识别控件
     * 释放控件占用系统资源，调用close方法后控件对象将不可使用。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/barcode.html](http://www.html5plus.org/doc/zh_cn/barcode.html)
     */
    close(): void;
    /**
     * 是否开启闪光灯
     * 设置Barcode扫码控件在扫码时是否开启摄像头的闪光灯，默认值为不开启闪光灯。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/barcode.html](http://www.html5plus.org/doc/zh_cn/barcode.html)
     */
    setFlash(open?: boolean): void;
    /**
     * 设置Barcode扫码控件的配置参数
     * 用于动态更新Barcode扫码控件的参数。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/barcode.html](http://www.html5plus.org/doc/zh_cn/barcode.html)
     */
    setStyles(styles?: PlusBarcodeBarcodeStyles): void;
}

/**
 * Barcode扫码控件样式
 * 设置Barcode扫码控件的样式，如扫码框、扫码条的颜色等。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/barcode.html](http://www.html5plus.org/doc/zh_cn/barcode.html)
 */
interface PlusBarcodeBarcodeStyles {
    /**
     * 条码识别控件背景颜色
     * 颜色值支持(参考CSS颜色规范)：颜色名称(参考CSS Color Names)/十六进制值/rgb值，默认值为红色。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/barcode.html](http://www.html5plus.org/doc/zh_cn/barcode.html)
     */
    background?: string;
    /**
     * 扫码框颜色
     * 颜色值支持(参考CSS颜色规范)：颜色名称(参考CSS Color Names)/十六进制值/rgb值/rgba值，默认值为红色。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/barcode.html](http://www.html5plus.org/doc/zh_cn/barcode.html)
     */
    frameColor?: string;
    /**
     * 扫码条颜色
     * 颜色值支持(参考CSS颜色规范)：颜色名称(参考CSS Color Names)/十六进制值/rgb值/rgba值，默认值为红色。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/barcode.html](http://www.html5plus.org/doc/zh_cn/barcode.html)
     */
    scanbarColor?: string;
    /**
     * Barcode扫码控件左上角的垂直偏移量
     * 可取值：
     * 		像素值，如"100px"；
     * 		百分比，如"10%"，相对于父Webview窗口的高度；
     * 		自动计算，如"auto",根据height值自动计算，相对于父Webview窗口垂直居中。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/barcode.html](http://www.html5plus.org/doc/zh_cn/barcode.html)
     */
    top?: string;
    /**
     * Barcode扫码控件左上角的水平偏移量
     * 可取值：
     * 		像素值，如"100px"；
     * 		百分比，如"10%"，相对于父Webview窗口的宽度；
     * 		自动计算，如"auto"，根据width值自动计算，相对于父Webview窗口水平居中。
     * 	默认值为"0px"。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/barcode.html](http://www.html5plus.org/doc/zh_cn/barcode.html)
     */
    left?: string;
    /**
     * Barcode扫码控件的宽度
     * 可取值：
     * 		像素值，如"100px"；
     * 		百分比，如"10%"，相对于父Webview窗口的宽度。
     * 	默认值为"100%"。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/barcode.html](http://www.html5plus.org/doc/zh_cn/barcode.html)
     */
    width?: string;
    /**
     * Barcode扫码控件的高度
     * 可取值：
     * 		像素值，如"100px"；
     * 		百分比，如"10%"，相对于父Webview窗口的高度。
     * 	默认值为"100%"。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/barcode.html](http://www.html5plus.org/doc/zh_cn/barcode.html)
     */
    height?: string;
    /**
     * Barcode扫码控件在Webview窗口的布局模式
     * 可取值：
     * 		"static" - 静态布局模式，如果页面存在滚动条则随窗口内容滚动；
     * 		"absolute" - 绝对布局模式，如果页面存在滚动条不随窗口内容滚动；
     * 	默认值为"static"。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/barcode.html](http://www.html5plus.org/doc/zh_cn/barcode.html)
     */
    position?: string;
}

/**
 * 条码识别控件扫描参数
 * 设置Barcode扫码控件的扫码识别参数，如是否保存扫码功时的截图等。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/barcode.html](http://www.html5plus.org/doc/zh_cn/barcode.html)
 */
interface PlusBarcodeBarcodeOptions {
    /**
     * 是否保存扫码成功时的截图
     * 如果设置为true则在扫码成功时将图片保存，并通过onmarked回调函数的file参数返回保存文件的路径。
     * 	默认值为false，不保存截图。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/barcode.html](http://www.html5plus.org/doc/zh_cn/barcode.html)
     */
    conserve?: boolean;
    /**
     * 保存扫码成功时图片保存路径
     * 可通过此参数设置保存截图的路径和名称，如果设置图片文件名称则必须指定文件的后缀名（必须是.png），否则认为是指定目录，文件名称则自动生成。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/barcode.html](http://www.html5plus.org/doc/zh_cn/barcode.html)
     */
    filename?: string;
    /**
     * 扫码成功时是否需要震动提醒
     * 如果设置为true则在扫码成功时震动设备，false则不震动。
     * 	默认值为true。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/barcode.html](http://www.html5plus.org/doc/zh_cn/barcode.html)
     */
    vibrate?: boolean;
    /**
     * 扫码成功时播放的提示音
     * 可取值：
     * 	"none" - 不播放提示音；
     * 	"default" - 播放默认提示音（5+引擎内置）。
     * 	默认值为"default"。
     * - none: 扫码成功时不播放提示音
     * - default: 扫码成功时播放默认提示音
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/barcode.html](http://www.html5plus.org/doc/zh_cn/barcode.html)
     */
    sound?: 'none' | 'default';
}

/**
 * Maps模块管理地图控件，用于在web页面中显示地图控件，提供各种接口操作地图控件，如添加标点、路线等。通过plus.maps可获取地图管理对象。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
 */
interface PlusMaps {
    /**
     * 地图控件对象
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    Map?: PlusMapsMap;
    /**
     * 地图控件对象的参数
     * 设置地图对象显示时使用的参数，如地图的中心位置、缩放级别等。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    MapStyles?: PlusMapsMapStyles;
    /**
     * 地理编码转换的参数
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    GeocodeOptions?: PlusMapsGeocodeOptions;
    /**
     * 地图坐标转换的参数
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    CoordinateConvertOptions?: PlusMapsCoordinateConvertOptions;
    /**
     * Point对象用于表示地图元素的坐标
     * 常用语对地图上元素进行定位时使用。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    Point?: PlusMapsPoint;
    /**
     * 地理区域
     * 有西南及东北坐标点数据组成的矩形区域。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    Bounds?: PlusMapsBounds;
    /**
     * 地图视图类型
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    MapType?: PlusMapsMapType;
    /**
     * 地图覆盖物基类对象
     * Overlay是地图上显示元素的基类，用于抽象地图元素，不用于实例化。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    Overlay?: PlusMapsOverlay;
    /**
     * 地图上显示的标点对象
     * 从Overlay对象继承而来，可通过Map对象的addOverlay()方法将对象添加地图中。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    Marker?: PlusMapsMarker;
    /**
     * 地图上显示的气泡对象
     * 此对象不能直接添加到地图上显示，只可关联到地图标点覆盖物上，用户点击标点时弹出显示。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    Bubble?: PlusMapsBubble;
    /**
     * 地图上显示的圆圈对象
     * 从Overlay对象继承而来，可通过Map对象的addOverlay()方法将对象添加地图中。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    Circle?: PlusMapsCircle;
    /**
     * 地图上显示的折线对象
     * 从Overlay对象继承而来，可通过Map对象的addOverlay()方法将对象添加地图中。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    Polyline?: PlusMapsPolyline;
    /**
     * 地图上显示的多边形对象
     * 从Overlay对象继承而来，可通过Map对象的addOverlay()方法将对象添加地图中。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    Polygon?: PlusMapsPolygon;
    /**
     * 地图检索对象
     * Search对象用于管理地图上的检索功能，包括位置检索、周边检索和范围检索。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    Search?: PlusMapsSearch;
    /**
     * 检索策略类型
     * 在线路检索时设置检索策略时使用。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    SearchPolicy?: PlusMapsSearchPolicy;
    /**
     * 保存位置检索、周边检索和范围检索返回的结果
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    SearchPoiResult?: PlusMapsSearchPoiResult;
    /**
     * 保存位置检索、周边检索和范围检索返回的结果
     * 不可通过new操作符创建SearchRouteResult对象，在触发onRouteSearchComplete()时自动创建。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    SearchRouteResult?: PlusMapsSearchRouteResult;
    /**
     * 检索结果的位置点
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    Position?: PlusMapsPosition;
    /**
     * 地图中的路线对象
     * 从Overlay对象继承而来，可通过Map对象的addOverlay()方法将对象添加地图中。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    Route?: PlusMapsRoute;
    /**
     * 调用系统第三方程序进行导航
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    openSysMap(dst?: PlusMapsPoint, des?: string, src?: PlusMapsPoint): void;
    /**
     * 创建Map对象
     * 调用此方法创建后并不会显示，需要调用Webview窗口的append方法将其添加到Webview窗口后才能显示。
     * 	注意：此时需要通过styles参数的top/left/width/height属性设置控件的位置及大小。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    create(id?: string, styles?: PlusMapsMapStyles): PlusMapsMap;
    /**
     * 查找已经创建的Map对象
     * 调用此方法查找指定id的Map对象，如果不存在则返回null。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    getMapById(id?: string): PlusMapsMap;
}

/**
 * 地图控件对象
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
 */
interface PlusMapsMap {
    /**
     * 用户点击地图事件
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    onclick?: (result: PlusMapsPoint) => void;
    /**
     * 地图状态改变事件
     * 用户拖动、缩放地图等操作完成后触发。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    onstatuschanged?: (result: any) => void;
    /**
     * 静态方法，计算面积
     * 计算指定地理区域的面积，单位为平方米。
     * 	注：此功能仅百度地图支持，高德地图暂不支持此功能。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    calculateArea(bounds?: PlusMapsBounds, successCallback?: (result: any) => void, errorCallback?: (result: any) => void): void;
    /**
     * 静态方法，计算距离
     * 计算从pointStart坐标点到pointEnd坐标的实际直线距离，单位为米（m）。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    calculateDistance(pointStart?: PlusMapsPoint, pointEnd?: PlusMapsPoint, successCallback?: (result: any) => void, errorCallback?: (result: any) => void): void;
    /**
     * 静态方法，坐标转换
     * 将第三方坐标系坐标转换成当前地图的坐标系坐标。
     * 	转换成功通过successCallback返回，转换失败则通过errorCallback返回。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    convertCoordinates(point?: PlusMapsPoint, options?: PlusMapsCoordinateConvertOptions, successCallback?: (result: any) => void, errorCallback?: (result: any) => void): void;
    /**
     * 静态方法，地理编码
     * 将地理位置信息转换为坐标点。
     * 	转换成功通过successCallback返回，转换失败则通过errorCallback返回。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    geocode(address?: string, options?: PlusMapsGeocodeOptions, successCallback?: (result: any) => void, errorCallback?: (result: any) => void): void;
    /**
     * 静态方法，反向地理编码
     * 将坐标点转换为地理位置信息。
     * 	转换成功通过successCallback返回，转换失败则通过errorCallback返回。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    reverseGeocode(point?: PlusMapsPoint, options?: PlusMapsGeocodeOptions, successCallback?: (result: any) => void, errorCallback?: (result: any) => void): void;
    /**
     * 向地图中添加覆盖物
     * 此方法用于向地图中添加覆盖物。
     * 	支持各种从maps.Overlay对象继承的各种覆盖物对象；
     * 	如果添加不支持的对象则直接返回false；
     * 	同一覆盖物对象只能添加到地图中一次，已在地图中的覆盖物再次添加时则返回false。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    addOverlay(overlay?: PlusMapsOverlay): boolean;
    /**
     * 设置地图初始中心点和缩放级别
     * 用于设置地图的初始中心点和缩放级别，通常在创建地图后立即调用。
     * 	默认中心点为天安门，默认缩放级别为12；
     * 	该方法设置的中心点和缩放级别可通过reset()方法恢复；
     * 	如果在地图显示后调用将改变地图的中心点和缩放级别并立即更新，并将初始值更新。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    centerAndZoom(center?: PlusMapsPoint, zoom?: number): void;
    /**
     * 清除地图中所有覆盖物对象
     * 此方法用于清除地图中所有覆盖物对象。
     * 	清除地图中的覆盖物对象后会自动更新地图视图。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    clearOverlays(): void;
    /**
     * 关闭地图控件
     * 关闭地图控件将会销毁地图使用的资源，不可再使用。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    close(): void;
    /**
     * 获取当前地图可视范围的地理区域
     * 当旋转或俯视时，是当前地图可视范围的最大外接矩形地理区域。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    getBounds(): PlusMapsBounds;
    /**
     * 获取地图中心点位置
     * 此方法用于获取设置的地图中心点位置（centerAndZoom/setCenter）。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    getCenter(): PlusMapsPoint;
    /**
     * 获取当前地图显示的地图中心点位置
     * 此方法用于获取当前地图显示的地图中心点位置，获取成功后通过callback回调返回。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    getCurrentCenter(callback?: (result0: number, result1: PlusMapsPoint) => void): boolean;
    /**
     * 获取地图的显示类型
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    getMapType(): PlusMapsMapType;
    /**
     * 获取用户的当前位置信息
     * 此方法用于获取用户的当前位置信息，获取成功后通过callback回调返回。
     * 	获取用户当前位置信息将打开定位设备。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    getUserLocation(callback?: (result0: number, result1: PlusMapsPoint) => void): boolean;
    /**
     * 获取地图的缩放级别
     * 此方法用于设置地图的缩放级别，用于切换当前显示地图缩放级别。
     * 	该方法改变缩放级别后地图显示内容将立即更新；
     * 	该方法不会改变地图显示区域，以当前地图显示的中心点位置来缩放地图。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    getZoom(): number;
    /**
     * 隐藏地图控件
     * 此方法用于隐藏地图控件，通常在显示后调用此方法来隐藏。
     * 	如果地图已经隐藏再调用此方法将无效果。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    hide(): void;
    /**
     * 获取是否显示用户位置
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    isShowUserLocation(): boolean;
    /**
     * 获取是否显示地图内置缩放控件
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    isShowZoomControls(): boolean;
    /**
     * 获取是否打开地图交通信息图层
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    isTraffic(): boolean;
    /**
     * 从地图中删除覆盖物对象
     * 此方法用于从地图中删除覆盖物对象。
     * 	支持各种从maps.Overlay对象继承的各种覆盖物对象。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    removeOverlay(overlay?: PlusMapsOverlay): void;
    /**
     * 重置地图
     * 此方法用于重新设置地图，恢复地图的初始化时的中心点和缩放级别。
     * 	该方法将导致显示内容将立即更新。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    reset(): void;
    /**
     * 重设地图控件大小
     * 此方法用于重新计算地图控件大小，保持与构造时传入DOM元素的大小及位置一致。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    resize(): void;
    /**
     * 设置地图的中心点
     * 此方法用于设置地图的中心点，用于切换当前显示地图位置。
     * 	该方法改变中心点后地图显示内容将立即更新；
     * 	该方法不会改变地图显示的缩放级别。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    setCenter(center?: PlusMapsPoint): void;
    /**
     * 设置地图的视图类型
     * 此方法用于设置地图类型，默认为普通街道视图。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    setMapType(type?: PlusMapsMapType): void;
    /**
     * 设置地图控件的配置参数
     * 用于动态更新地图控件的参数。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    setStyles(styles?: PlusMapsMapStyles): void;
    /**
     * 是否打开地图交通信息图层
     * 此方法用于设置是否打开地图交通信息图层，默认不显示。
     * 	该方法改变是否显示交通图层后地图显示内容将立即更新。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    setTraffic(traffic?: boolean): void;
    /**
     * 设置地图的缩放级别
     * 此方法用于设置地图的缩放级别，用于切换当前显示地图缩放级别。
     * 	该方法改变缩放级别后地图显示内容将立即更新；
     * 	该方法不会改变地图显示区域，以当前地图显示的中心点位置来缩放地图。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    setZoom(zoom?: number): void;
    /**
     * 显示地图控件
     * 此方法用于显示地图控件，通常在隐藏后调用此方法来显示。
     * 	如果地图已经显示再调用此方法将无效果。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    show(): void;
    /**
     * 显示用户位置
     * 此方法将在地图上显示用户位置信息。
     * 	显示用户位置将打开定位设备。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    showUserLocation(display?: boolean): void;
    /**
     * 设置是否显示地图内置缩放控件
     * 此方法将在地图上显示内置缩放控件。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    showZoomControls(display?: boolean): void;
}

/**
 * 地图控件对象的参数
 * 设置地图对象显示时使用的参数，如地图的中心位置、缩放级别等。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
 */
interface PlusMapsMapStyles {
    /**
     * 地图的中心位置
     * 未设置则使用地图的默认中心点（由地图供应商确定）。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    center?: PlusMapsPoint;
    /**
     * 地图的缩放级别
     * 有效范围为1-22，默认值为12，设置无效的值则使用默认值。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    zoom?: number;
    /**
     * 地图的视图类型
     * 可设置普通街道视图、卫星视图，默认值为普通街道视图。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    type?: PlusMapsMapType;
    /**
     * 地图的是否显示交通信息
     * true表示显示地图的交通信息图层，false则不显示，默认值为false。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    traffic?: boolean;
    /**
     * 是否显示地图的内置缩放控件
     * true表示显示地图的内置缩放控件，false则不显示，默认值为false。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    zoomControls?: boolean;
    /**
     * 地图控件左上角的垂直偏移量
     * 可取值：
     * 		像素值，如"100px"；
     * 		百分比，如"10%"，相对于父Webview窗口的高度；
     * 		自动计算，如"auto",根据height值自动计算，相对于父Webview窗口垂直居中。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    top?: string;
    /**
     * 地图控件左上角的水平偏移量
     * 可取值：
     * 		像素值，如"100px"；
     * 		百分比，如"10%"，相对于父Webview窗口的宽度；
     * 		自动计算，如"auto"，根据width值自动计算，相对于父Webview窗口水平居中。
     * 	默认值为"0px"。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    left?: string;
    /**
     * 地图控件的宽度
     * 可取值：
     * 		像素值，如"100px"；
     * 		百分比，如"10%"，相对于父Webview窗口的宽度。
     * 	默认值为"100%"。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    width?: string;
    /**
     * 地图控件的高度
     * 可取值：
     * 		像素值，如"100px"；
     * 		百分比，如"10%"，相对于父Webview窗口的高度。
     * 	默认值为"100%"。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    height?: string;
    /**
     * 地图控件在Webview窗口的布局模式
     * 可取值：
     * 		"static" - 静态布局模式，如果页面存在滚动条则随窗口内容滚动；
     * 		"absolute" - 绝对布局模式，如果页面存在滚动条不随窗口内容滚动；
     * 	默认值为"static"。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    position?: string;
}

/**
 * 地理编码转换的参数
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
 */
interface PlusMapsGeocodeOptions {
    /**
     * 源数据的坐标系类型
     * 仅在反向地理编码转换时生效。
     * 	“wgs84”：表示WGS-84坐标系； “gcj02”：表示国测局经纬度坐标系； “bd09”：表示百度墨卡托坐标系； “bd09ll”：表示百度经纬度坐标系；
     * 	默认使用wgs84坐标系。
     * - wgs84: WGS-84坐标系，即GPS设备采集的原始GPS坐标
     * - gcj02: 国测局经纬度坐标系，soso地图、aliyun地图、mapabc地图和amap地图所用的坐标系
     * - bd09: 百度墨卡托坐标系
     * - bd09ll: 百度经纬度坐标系
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    coordType?: 'wgs84' | 'gcj02' | 'bd09' | 'bd09ll';
    /**
     * 源地址所属的城市
     * 仅在地理编码转换时生效，如果不指定则在全国范围内区配转换。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    city?: string;
}

/**
 * 地图坐标转换的参数
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
 */
interface PlusMapsCoordinateConvertOptions {
    /**
     * 源数据的坐标系类型
     * “wgs84”：表示WGS-84坐标系； “gcj02”：表示国测局经纬度坐标系； “bd09”：表示百度墨卡托坐标系； “bd09ll”：表示百度经纬度坐标系；
     * 	默认使用wgs84坐标系。
     * - wgs84: WGS-84坐标系，即GPS设备采集的原始GPS坐标
     * - gcj02: 国测局经纬度坐标系，soso地图、aliyun地图、mapabc地图和amap地图所用的坐标系
     * - bd09: 百度墨卡托坐标系
     * - bd09ll: 百度经纬度坐标系
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    coordType?: 'wgs84' | 'gcj02' | 'bd09' | 'bd09ll';
}

/**
 * Point对象用于表示地图元素的坐标
 * 常用语对地图上元素进行定位时使用。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
 */
interface PlusMapsPoint {
    /**
     * 设置坐标点的经度
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    setLng(lng?: number): void;
    /**
     * 获取坐标的经度
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    getLng(): number;
    /**
     * 设置坐标的纬度
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    setLat(): void;
    /**
     * 获取坐标的纬度
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    getLat(): number;
    /**
     * 判断两个坐标点是否相等
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    equals(pt?: PlusMapsPoint): boolean;
}

/**
 * 地理区域
 * 有西南及东北坐标点数据组成的矩形区域。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
 */
interface PlusMapsBounds {
    /**
     * 设置地理区域的东北坐标点
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    setNorthEase(point?: PlusMapsPoint): void;
    /**
     * 地理区域的东北坐标点
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    getNorthEase(): PlusMapsPoint;
    /**
     * 设置地理区域的西南坐标点
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    setSouthWest(point?: PlusMapsPoint): void;
    /**
     * 地理区域的西南坐标点
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    getSouthWest(): PlusMapsPoint;
    /**
     * 判断制定的坐标是否在地理区域中
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    contains(point?: PlusMapsPoint): boolean;
    /**
     * 判断两个地理区域是否相等
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    equals(bounds?: PlusMapsBounds): boolean;
    /**
     * 获取地理区域的中心点坐标
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    getCenter(): PlusMapsPoint;
}

/**
 * 地图视图类型
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
 */
interface PlusMapsMapType {
    /**
     * 普通街道视图类型
     * 地图视图类型常量，普通街道视图。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    MAPTYPE_NORMAL?: number;
    /**
     * 卫星视图
     * 地图视图类型常量，卫星视图。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    MAPTYPE_SATELLITE?: number;
}

/**
 * 地图覆盖物基类对象
 * Overlay是地图上显示元素的基类，用于抽象地图元素，不用于实例化。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
 */
interface PlusMapsOverlay {
    /**
     * 判断地图覆盖物是否可见
     * 地图覆盖物对象默认为可见；地图覆盖物对象是否可见由其自身状态决定，不管其是否被添加到地图层中。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    isVisible(): boolean;
    /**
     * 显示地图上的覆盖物
     * 常用于地图覆盖物在隐藏后调用此方法来显示。
     * 	只有添加到地图上的覆盖物才能看到效果；
     * 	如果覆盖物对象已经在地图上显示再调用此方法将无效果。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    show(): void;
    /**
     * 隐藏地图上的覆盖物
     * 常用于地图覆盖物在显示后调用此方法来隐藏。
     * 		只有添加到地图上的覆盖物才能看到效果；
     * 		如果覆盖物对象已经在地图上隐藏再调用此方法将无效果。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    hide(): void;
}

/**
 * 地图上显示的标点对象
 * 从Overlay对象继承而来，可通过Map对象的addOverlay()方法将对象添加地图中。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
 */
interface PlusMapsMarker {
    /**
     * 用户点击地图标点事件
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    onclick?: (result: PlusMapsOverlay) => void;
    /**
     * 用户拖拽标点事件
     * 可调用标点对象的markObj.setDraggable(true)方法设置标点允许拖拽，当用户拖拽标点对象时触发此事件。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    onDrag?: (result: any) => void;
    /**
     * 覆盖物显示到最上层
     * 常用于覆盖物相互覆盖时调整覆盖物的显示顺序。
     * 	只有添加到地图上的覆盖物才能看到效果；
     * 	如果覆盖物对象已经在地图上隐藏再调用此方法将无效果。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    bringToTop(): void;
    /**
     * 设置标点对象的坐标
     * 标点在设置新坐标后将在地图上立即更新标点位置。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    setPoint(point?: PlusMapsPoint): void;
    /**
     * 获取标点的坐标
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    getPoint(): PlusMapsPoint;
    /**
     * 设置标点上显示的图标
     * 若未设置则显示默认标点图标，已添加的标点在设置新值后将在地图上立即更新标点内容。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    setIcon(icon?: string): void;
    /**
     * 设置标点上显示的图标数组
     * 设置图标数组后则按照指定的间隔时间轮播数组中图标。
     * 	设置图标数组后将忽略setIcon方法设置的图标，未设置则显示setIcon设置的图标。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    setIcons(icons?: any []): void;
    /**
     * 设置标点上显示的文本标注
     * 若未设置则不显示标注（默认为空字符串），已添加的标点在设置新值后将在地图上立即更新标点内容。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    setLabel(label?: string): void;
    /**
     * 获取标点上显示的文本标注
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    getLabel(): string;
    /**
     * 设置标点的气泡内容
     * 设置气泡内容后，用户点击标点时弹出则弹出气泡。
     * 	注意：用户点击标点时先弹出标点关联的气泡，再响应标点的onclick事件。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    setBubble(buuble?: PlusMapsBubble, pop?: boolean): void;
    /**
     * 获取标点上显示的文本标注
     * 如果没有设置关联的气泡对象则返回null。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    getBubble(): PlusMapsBubble;
    /**
     * 隐藏标点上显示的气泡
     * 如果没有设置关联的气泡对象或者气泡对象没有弹出显示，则不做任何操作。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    hideBubble(): void;
    /**
     * 设置标点的是否允许拖拽
     * 设置标点可拖拽后，用户按住标点后拖动，标点会跟随手的拖拽而移动。
     * 	拖拽后会更新标点的坐标信息。
     * 	注：拖动前需要先在标点上长按。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    setDraggable(draggable?: boolean): void;
    /**
     * 获取标点是否允许拖拽
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    isDraggable(): boolean;
}

/**
 * 地图上显示的气泡对象
 * 此对象不能直接添加到地图上显示，只可关联到地图标点覆盖物上，用户点击标点时弹出显示。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
 */
interface PlusMapsBubble {
    /**
     * 用户点击气泡事件
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    onclick?: (result: PlusMapsOverlay) => void;
    /**
     * 设置气泡上显示的图标
     * 若为设置则无默认图标，已添加的显示的气泡在设置新值后将在地图上立即更新内容。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    setIcon(icon?: string): void;
    /**
     * 设置气泡上显示的文字内容
     * 若未设置则不显示文字（默认为空字符串），已添加的显示的气泡在设置新值后将在地图上立即更新内容。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    setLabel(label?: string): void;
    /**
     * 获取气泡上显示的文字内容
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    getLabel(): string;
    /**
     * 获取气泡所属的标点对象
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    belongMarker(): PlusMapsMarker;
    /**
     * 从图片加载气泡显示的内容
     * 通过加载图片来自定义气泡显示的内容，加载图片后将清空气泡使用的图标及文字内容。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    loadImage(path?: string): void;
    /**
     * 从图片数据加载气泡显示的内容
     * 通过加载图片数据来自定义气泡显示的内容，加载图片后将清空气泡使用的图标及文字内容。
     * 	图片数据可通过Canvas自定义绘制后调用toDataURL来获取。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    loadImageDataURL(data?: string): void;
}

/**
 * 地图上显示的圆圈对象
 * 从Overlay对象继承而来，可通过Map对象的addOverlay()方法将对象添加地图中。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
 */
interface PlusMapsCircle {
    /**
     * 设置圆圈中心点的经纬度坐标
     * 该方法设置将导致地图中的圆圈立即更新。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    setCenter(point?: PlusMapsPoint): void;
    /**
     * 获取圆圈中心点的坐标
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    getCenter(): PlusMapsPoint;
    /**
     * 设置圆圈的半径，单位为米
     * 该方法设置将导致地图中的圆圈立即更新。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    setRadius(radius?: number): void;
    /**
     * 获取圆圈的半径
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    getRadius(): number;
    /**
     * 设置圆圈的边框颜色
     * 圆圈默认的圆圈边框颜色为黑色"#000000"，该方法设置将导致地图中的圆圈立即更新。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    setStrokeColor(color?: string): void;
    /**
     * 获取圆圈的边框颜色
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    getStrokeColor(): string;
    /**
     * 设置圆圈的边框颜色
     * 圆圈默认值为不透明。
     * 	如果设置的值不合法则保持原有的透明度；该方法设置将导致地图中的圆圈立即更新。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    setStrokeOpacity(opacity?: number): void;
    /**
     * 获取圆圈边框的透明度
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    getStrokeOpacity(): number;
    /**
     * 设置圆圈的填充颜色
     * 圆圈默认的圆圈填充颜色为无色，该方法设置将导致地图中的圆圈立即更新。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    setFillColor(color?: string): void;
    /**
     * 获取圆圈的填充颜色
     * 如果填充颜色为无色，则返回空字符串。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    getFillColor(): string;
    /**
     * 设置圆圈填充颜色的透明度
     * 圆圈默认值为不透明。
     * 	如果设置的值不合法则保持原有的透明度；该方法设置将导致地图中的圆圈立即更新。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    setFillOpacity(opacity?: number): void;
    /**
     * 获取圆圈填充色的透明度
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    getFillOpacity(): number;
    /**
     * 设置圆圈边框的线条宽度
     * 圆圈边框的默认值为5。
     * 	如果设置的值不合法则保持原有的宽度；该方法设置将导致地图中的圆圈立即更新。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    setLineWidth(width?: number): void;
    /**
     * 获取圆圈边框的线条宽度
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    getLineWidth(): number;
}

/**
 * 地图上显示的折线对象
 * 从Overlay对象继承而来，可通过Map对象的addOverlay()方法将对象添加地图中。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
 */
interface PlusMapsPolyline {
    /**
     * 设置折线的顶点坐标
     * 该方法设置将导致地图中的折线立即更新。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    setPath(points?: any []): void;
    /**
     * 获取折线的顶点坐标
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    getPath(): any [];
    /**
     * 设置折线的颜色
     * 折线默认的颜色为黑色"#000000"，该方法设置将导致地图中的折线立即更新。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    setStrokeColor(color?: string): void;
    /**
     * 获取折线的颜色
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    getStrokeColor(): string;
    /**
     * 设设置折线的透明度
     * 折线默认值为不透明。
     * 	如果设置的值不合法则保持原有的透明度；该方法设置将导致地图中的折线立即更新。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    setStrokeOpacity(opacity?: number): void;
    /**
     * 获取折线的透明度
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    getStrokeOpacity(): number;
    /**
     * 设置折线的线条宽度
     * 折线线条的宽度默认值为5。
     * 	如果设置的值不合法则保持原有的宽度；该方法设置将导致地图中的折线立即更新。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    setLineWidth(width?: number): void;
    /**
     * 获取折线的线条宽度
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    getLineWidth(): number;
}

/**
 * 地图上显示的多边形对象
 * 从Overlay对象继承而来，可通过Map对象的addOverlay()方法将对象添加地图中。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
 */
interface PlusMapsPolygon {
    /**
     * 设置多边形的顶点坐标
     * 该方法设置将导致地图中的多边形立即更新。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    setPath(points?: any []): void;
    /**
     * 获取多边形的顶点坐标
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    getPath(): any [];
    /**
     * 设置多边形的颜色
     * 多边形边框默认的颜色为黑色"#000000"，该方法设置将导致地图中的多边形立即更新。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    setStrokeColor(color?: string): void;
    /**
     * 获取多边形边框的颜色
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    getStrokeColor(): string;
    /**
     * 设置多边形的透明度
     * 多边形边框默认值为不透明。
     * 	如果设置的值不合法则保持原有的透明度；该方法设置将导致地图中的多边形立即更新。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    setStrokeOpacity(opacity?: number): void;
    /**
     * 获取多边形边框的透明度
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    getStrokeOpacity(): number;
    /**
     * 设置多边形的填充颜色
     * 多边形默认填充颜色为无色，该方法设置将导致地图中的多边形立即更新。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    setFillColor(color?: string): void;
    /**
     * 获取多边形的填充色
     * 如果填充色为无色，则返回空字符串。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    getFillColor(): string;
    /**
     * 设置多边形填充色的透明度
     * 多边形填充色默认值为不透明。
     * 	如果设置的值不合法则保持原有的透明度；该方法设置将导致地图中的多边形立即更新。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    setFillOpacity(opacity?: number): void;
    /**
     * 获取多边形填充色的透明度
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    getFillOpacity(): number;
    /**
     * 设置多边形的边框宽度
     * 多边形边框的宽度默认值为5。
     * 	如果设置的值不合法则保持原有的宽度；该方法设置将导致地图中的多边形立即更新。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    setLineWidth(width?: number): void;
    /**
     * 获取多边形边框的宽度
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    getLineWidth(): number;
}

/**
 * 地图检索对象
 * Search对象用于管理地图上的检索功能，包括位置检索、周边检索和范围检索。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
 */
interface PlusMapsSearch {
    /**
     * 兴趣点检索完成事件
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    onPoiSearchComplete?: (result0: number, result1: PlusMapsSearchPoiResult) => void;
    /**
     * 线路检索完成事件
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    onRouteSearchComplete?: (result0: number, result1: PlusMapsSearchRouteResult) => void;
    /**
     * 设置检索返回结果每页的信息数目
     * 地图检索结果是按页返回的，默认检索每页返回10条信息。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    setPageCapacity(capacity?: number): void;
    /**
     * 获取检索返回结果每页的信息数目
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    getPageCapacity(): number;
    /**
     * 城市兴趣点检索
     * 检索结果将通过onPoiSearchComplete事件返回。
     * 	如果调用此方法时已经处于POI检索操作中，则终止上次检索操作，重新开始新的检索。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    poiSearchInCity(city?: string, key?: string, index?: number): boolean;
    /**
     * 周边检索
     * 周边检索根据中心点、半径与检索词进行检索，检索完成后触发onPoiSearchComplete()事件。
     * 	若调用此方法时对象处于POI检索操作中，则终止上次检索操作，重新开始新的检索。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    poiSearchNearBy(key?: string, pt?: PlusMapsPoint, radius?: number, index?: number): boolean;
    /**
     * 指定范围检索
     * 根据范围和检索词进行检索，检索完成后触发onPoiSearchComplete()事件。
     * 	若调用此方法时对象处于POI检索操作中，则终止上次检索操作，重新开始新的检索。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    poiSearchInbounds(): boolean;
    /**
     * 设置公交路线检索策略
     * 默认采用maps.SearchPolicy.TRANSIT_TIME_FIRST策略。
     * 	需在调用transitSearch()方法前设置的策略才生效；
     * 	如果设置非法值则认为设置失败，采用上次设置的检索策略并返回false。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    setTransitPolicy(policy?: PlusMapsSearchPolicy): boolean;
    /**
     * 公交路线检索
     * 检索完成后触发onRouteSearchComplete()事件。
     * 	若调用此方法时对象处于检索操作中，则终止上次检索操作，重新开始新的检索。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    transitSearch(start?: string, end?: string, city?: string): boolean;
    /**
     * 设置驾车路线检索策略
     * 设置驾车路线检索策略，默认采用maps.SearchPolicy.DRIVING_TIME_FIRST策略。
     * 	如果设置非法值则认为设置失败，采用上次设置的检索策略并返回false；需在调用drivingSearch()方法前设置的策略才生效。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    setDrivingPolicy(policy?: PlusMapsSearchPolicy): boolean;
    /**
     * 驾车路线检索
     * 用于驾车路线检索，检索完成后触发onRouteSearchComplete()事件。
     * 	调用此方法时对象处于检索操作中，则终止上次检索操作，重新开始新的检索。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    drivingSearch(start?: string, startCity?: string, end?: string, endCity?: string): boolean;
    /**
     * 步行路线检索
     * 用于步行路线检索，检索完成后触发onRouteSearchComplete()事件。
     * 	调用此方法时对象处于检索操作中，则终止上次检索操作，重新开始新的检索。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    walkingSearch(start?: string, startCity?: string, end?: string, endCity?: string): boolean;
}

/**
 * 检索策略类型
 * 在线路检索时设置检索策略时使用。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
 */
interface PlusMapsSearchPolicy {
    /**
     * 时间优先
     * 检索策略类型常量，用于公交检索策略
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    TRANSIT_TIME_FIRST?: number;
    /**
     * 最少换乘优先
     * 检索策略类型常量，用于公交检索策略
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    TRANSIT_TRANSFER_FIRST?: number;
    /**
     * 最少步行距离优先
     * 检索策略类型常量，用于公交检索策略
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    TRANSIT_WALK_FIRST?: number;
    /**
     * 选择车票花销最少优先
     * 检索策略类型常量，用于公交检索策略
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    TRANSIT_FEE_FIRST?: number;
    /**
     * 最短距离优先
     * 检索策略类型常量，用于驾车检索策略
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    DRIVING_DIS_FIRST?: number;
    /**
     * 无高速公路线路
     * 检索策略类型常量，用于驾车检索策略
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    DRIVING_NO_EXPRESSWAY?: number;
    /**
     * 最少费用优先
     * 检索策略类型常量，用于驾车检索策略
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    DRIVING_FEE_FIRST?: number;
}

/**
 * 保存位置检索、周边检索和范围检索返回的结果
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
 */
interface PlusMapsSearchPoiResult {
    /**
     * POI检索总结果数
     * POI检索总结果数，若没有检索到则返回0。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    totalNumber?: number;
    /**
     * 当前页的POI检索结果数
     * 当前页POI检索结果数，若没有检索到则返回0。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    currentNumber?: number;
    /**
     * 本次POI检索的总页数
     * 本次POI检索的总页数，若没有检索到则返回0。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    pageNumber?: number;
    /**
     * 获取当前页的索引
     * 当前页的索引值，从0开始，即0表示第一页。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    pageIndex?: number;
    /**
     * 本次POI检索结果数组
     * POI检索结果数组，Array数组对象，数组内容为Position对象。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    poiList?: any [];
    /**
     * 获取指定索引的检索结果
     * 如果index值超出范围则返回null对象。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    getPosition(): PlusMapsPosition;
}

/**
 * 保存位置检索、周边检索和范围检索返回的结果
 * 不可通过new操作符创建SearchRouteResult对象，在触发onRouteSearchComplete()时自动创建。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
 */
interface PlusMapsSearchRouteResult {
    /**
     * 线路的起点位置
     * 线路检索结果的起始位置点对象。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    startPosition?: PlusMapsPosition;
    /**
     * 线路的终点位置
     * 线路检索结果的终点位置点对象。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    endPosition?: PlusMapsPosition;
    /**
     * 本次线路检索的总方案数
     * 线路检索结果的方案数目，若未检索到有效结果则返回0。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    routeNumber?: number;
    /**
     * 线路检索结果数组
     * 线路检索结果数组，Array数组对象，数组内容为Route对象。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    routeList?: any [];
    /**
     * 获取指定索引的线路方案
     * 如果index值超出范围则返回null对象。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    getRoute(index?: number): PlusMapsRoute;
}

/**
 * 检索结果的位置点
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
 */
interface PlusMapsPosition {
    /**
     * 位置点的经纬度坐标
     * 如果没有经纬度坐标信息（如果公交、地铁路线数据等），则其值为undefined。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    point?: PlusMapsPoint;
    /**
     * 位置点的地址信息
     * 如果没有位置点的地址信息则返回空字符串。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    address?: string;
    /**
     * 位置点的所属城市信息
     * 如果没有位置点的所属城市信息则返回空字符串。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    city?: string;
    /**
     * 位置点的名称
     * 如果没有位置点的名称则返回空字符串。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    name?: string;
    /**
     * 位置点的电话信息
     * 如果没有位置点的电话信息则返回空字符串。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    phone?: string;
    /**
     * 位置点的邮编信息
     * 如果没有位置点的邮编信息则返回空字符串。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    postcode?: string;
}

/**
 * 地图中的路线对象
 * 从Overlay对象继承而来，可通过Map对象的addOverlay()方法将对象添加地图中。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
 */
interface PlusMapsRoute {
    /**
     * 路线起点地理坐标点
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    startPoint?: PlusMapsPoint;
    /**
     * 路线终点地理坐标点
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    endPoint?: PlusMapsPoint;
    /**
     * 路线坐标点段数
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    pointCount?: PlusMapsPoint;
    /**
     * 路线的地理坐标点数组
     * 路线的地理坐标点数组，数组中保存Point对象。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    pointList?: any [];
    /**
     * 路线总距离
     * 路线从起始点到终点的距离，单位为米。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    distance?: number;
    /**
     * 线路的提示信息
     * 线路提示信息，没有提示信息则返回空字符串。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/maps.html](http://www.html5plus.org/doc/zh_cn/maps.html)
     */
    routeTip?: string;
}

/**
 * OAuth模块管理客户端的用户登录授权验证功能，允许应用访问第三方平台的资源。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/oauth.html](http://www.html5plus.org/doc/zh_cn/oauth.html)
 */
interface PlusOauth {
    /**
     * 登录授权认证服务对象
     * AuthService对象用于表示登录授权认证服务，在JS中为对象，用于向系统进行登录授权认证操作。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/oauth.html](http://www.html5plus.org/doc/zh_cn/oauth.html)
     */
    AuthService?: PlusOauthAuthService;
    /**
     * JSON对象，授权认证参数选项
     * 此对象支持的属性值由登录授权认证服务定义。
     * 	例如“微信”，则可配置以下参数：
     * 	scope - 应用授权作用域；
     * 	state - 用于保持请求和回调的状态参数。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/oauth.html](http://www.html5plus.org/doc/zh_cn/oauth.html)
     */
    AuthOptions?: PlusOauthAuthOptions;
    /**
     * 登录授权认证信息
     * 此对象仅定义标准属性，登录授权认证服务可扩展自定义数据。
     * 	例如“微信”登录授权服务，则包括以下数据：
     * 	unionid - 用户统一标识，针对一个微信开放平台帐号下的应用，同一用户的unionid是唯一的。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/oauth.html](http://www.html5plus.org/doc/zh_cn/oauth.html)
     */
    AuthInfo?: PlusOauthAuthInfo;
    /**
     * 登录授权用户信息
     * 用于保存登录授权用户的信息。
     * 	此对象仅定义标准属性，登录授权认证服务可扩展自定义数据。
     * 	例如“微信”登录授权服务，可能包括以下自定义数据：
     * 	privilege - 用户特权信息，json数组，如微信沃卡用户为（chinaunicom）；
     * 	unionid - 用户统一标识，针对一个微信开放平台帐号下的应用，同一用户的unionid是唯一的。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/oauth.html](http://www.html5plus.org/doc/zh_cn/oauth.html)
     */
    UserInfo?: PlusOauthUserInfo;
    /**
     * 获取登录授权认证服务列表
     * 获取终端支持的权登录认证服务列表，可用于提示用户进行登录平台的选择。获取登录授权认证服务成功后通过successCB回调返回支持的所有服务列表，获取服务失败则通过errorCB回调返回失败信息。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/oauth.html](http://www.html5plus.org/doc/zh_cn/oauth.html)
     */
    getServices(successCB?: (result: PlusOauth []) => void, errorCB?: (result: any) => void): void;
}

/**
 * 登录授权认证服务对象
 * AuthService对象用于表示登录授权认证服务，在JS中为对象，用于向系统进行登录授权认证操作。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/oauth.html](http://www.html5plus.org/doc/zh_cn/oauth.html)
 */
interface PlusOauthAuthService {
    /**
     * 登录授权认证服务标识
     * 用于表示登录授权认证服务标识：
     * 		"weixin" - 表示微信登录授权；
     * 		"qq" - 表示QQ登录授权；
     * 		"sinaweibo" - 表示新浪微博登录授权；
     * 		"qihoo" - 表示360账号登录（仅360手助流应用环境下支持）。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/oauth.html](http://www.html5plus.org/doc/zh_cn/oauth.html)
     */
    id?: string;
    /**
     * 登录授权认证服务描述
     * 用于描述登录授权认证服务的信息：
     * 		"微信" - 表示微信登录授权；
     * 		"QQ" - 表示QQ登录授权；
     * 		"新浪微博" - 表示新浪微博登录授权；
     * 		"360账号" - 表示360账号登录（仅360手助流应用环境下支持）。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/oauth.html](http://www.html5plus.org/doc/zh_cn/oauth.html)
     */
    description?: string;
    /**
     * 授权认证结果数据
     * 用于保存登录授权认证获取的认证信息，如果值为"undefined"则表示未进行授权认证或者是授权认证失败。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/oauth.html](http://www.html5plus.org/doc/zh_cn/oauth.html)
     */
    authResult?: PlusOauthAuthInfo;
    /**
     * 登录授权认证用户信息
     * 用于保存登录授权认证获取的用户信息，如果值为"undefined"则表示未获取过用户信息。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/oauth.html](http://www.html5plus.org/doc/zh_cn/oauth.html)
     */
    userInfo?: PlusOauthUserInfo;
    /**
     * 登录授权认证扩展信息
     * 用于保存登录授权认证服务返回的扩展信息，具体内容由各登录平台决定，如果没有扩展信息则为undefined。
     * 	例如“微信”，则可保存以下数据：
     * 	state - 用于保持请求和回调的状态参数。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/oauth.html](http://www.html5plus.org/doc/zh_cn/oauth.html)
     */
    extra?: any;
    /**
     * 请求授权认证
     * 向开放平台请求进行授权认证，需提供授权域（scope），用户在终端确认后通过成功回调返回授权临时票据（code）。
     * 	开发者可以将授权临时票据（code）提交到业务服务器，又业务服务器从微信开放平台获取授权登录等相关信息，避免将appsecret等信息保存在客户端可能引起泄露的问题。
     * 	注意：目前仅微信平台支持请求授权认证，其它平台调用此方法将返回错误回调。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/oauth.html](http://www.html5plus.org/doc/zh_cn/oauth.html)
     */
    authorize(successCallback?: (result: any) => void, errorCallback?: (result: any) => void, options?: PlusOauthAuthOptions): void;
    /**
     * 请求登录授权认证操作
     * 对指定的登录授权认证服务进行登录认证操作，在登录前可通过对象的authResult属性判断是否已经登录认证过，通常只需要对没有进行过登录认证的服务进行登录认证操作。
     * 	授权认证操作成功后通过successCB回调函数通知，失败则通过errorCB回调函数通知。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/oauth.html](http://www.html5plus.org/doc/zh_cn/oauth.html)
     */
    login(successCallback?: (result: any) => void, errorCallback?: (result: any) => void, options?: PlusOauthAuthOptions): void;
    /**
     * 注销登录授权认证
     * 对指定的登录授权认证服务注销登录认证操作，注销授权认证后，再次操作时需重新进行登录认证操作。
     * 	如果第三方平台不需要注销操作，则情况保存的相关登录认证等信息。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/oauth.html](http://www.html5plus.org/doc/zh_cn/oauth.html)
     */
    logout(successCallback?: (result: any) => void, errorCallback?: (result: any) => void): void;
    /**
     * 获取登录授权用户信息
     * 获取登录授权认证的用户信息，在获取前可通过对象的userInfo属性判断是否已经获取过，通常只需要对没有获取过用户信息的服务进行操作。
     * 	获取用户信息操作成功后通过successCallback回调函数通知，失败则通过errorCallback回调函数通知。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/oauth.html](http://www.html5plus.org/doc/zh_cn/oauth.html)
     */
    getUserInfo(successCallback?: (result: any) => void, errorCallback?: (result: any) => void): void;
    /**
     * 添加用户手机号信息
     * 打开登录授权服务的添加用户手机号界面进行操作，添加用户手机号操作成功后通过successCallback回调函数通知，否则通过errorCallback回调函数通知。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/oauth.html](http://www.html5plus.org/doc/zh_cn/oauth.html)
     */
    addPhoneNumber(successCallback?: (result: any) => void, errorCallback?: (result: any) => void): void;
}

/**
 * JSON对象，授权认证参数选项
 * 此对象支持的属性值由登录授权认证服务定义。
 * 	例如“微信”，则可配置以下参数：
 * 	scope - 应用授权作用域；
 * 	state - 用于保持请求和回调的状态参数。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/oauth.html](http://www.html5plus.org/doc/zh_cn/oauth.html)
 */
interface PlusOauthAuthOptions {
    /**
     * 申请的权限作用范围
     * 如果存在多个权限，则以","符号分割。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/oauth.html](http://www.html5plus.org/doc/zh_cn/oauth.html)
     */
    scope?: string;
    /**
     * 客户端的当前状态，可以指定任意值，登录认证后原封不动的返回保存到AuthService对象的extra中
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/oauth.html](http://www.html5plus.org/doc/zh_cn/oauth.html)
     */
    state?: string;
    /**
     * 登录授权认证服务平台申请的appid
     * 动态设置登录授权服务中需要使用的appid，仅需要此参数的登录授权服务（如“微信登录”、“QQ登录”）支持。
     * 	如果未设置则使用运行环境中内置的appid值（如在HBuilder中可在manifest.json的SDK配置项中进行设置）。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/oauth.html](http://www.html5plus.org/doc/zh_cn/oauth.html)
     */
    appid?: string;
    /**
     * 登录授权认证服务平台申请的appkey
     * 动态设置登录授权服务中需要使用的appkey，仅需要此参数的登录授权服务（如“新浪微博登录”、“360登录”）支持。
     * 	如果未设置则使用运行环境中内置的appkey值（如在HBuilder中可在manifest.json的SDK配置项中进行设置）。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/oauth.html](http://www.html5plus.org/doc/zh_cn/oauth.html)
     */
    appkey?: string;
    /**
     * 登录授权认证服务平台申请的appsecret
     * 动态设置登录授权服务中需要使用的appsecret，仅需要此参数的登录授权服务（如“微信登录”、“新浪微博登录”）支持。
     * 	如果未设置则使用运行环境中内置的appkey值（如在HBuilder中可在manifest.json的SDK配置项中进行设置）；当开放平台申请的appsecret值涉及到安全问题时，可在应用运行时从服务器获取，然后通过此api动态设置。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/oauth.html](http://www.html5plus.org/doc/zh_cn/oauth.html)
     */
    appsecret?: string;
    /**
     * 登录授权认证服务平台申请的redirect_url
     * 动态设置登录授权服务中需要使用的redirect_url，仅需要此参数的登录授权服务（如“新浪微博登录”）支持。
     * 	如果未设置则使用运行环境中内置的redirect_url值（如在HBuilder中可在manifest.json的SDK配置项中进行设置）。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/oauth.html](http://www.html5plus.org/doc/zh_cn/oauth.html)
     */
    redirect_url?: string;
}

/**
 * 登录授权认证信息
 * 此对象仅定义标准属性，登录授权认证服务可扩展自定义数据。
 * 	例如“微信”登录授权服务，则包括以下数据：
 * 	unionid - 用户统一标识，针对一个微信开放平台帐号下的应用，同一用户的unionid是唯一的。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/oauth.html](http://www.html5plus.org/doc/zh_cn/oauth.html)
 */
interface PlusOauthAuthInfo {
    /**
     * 登录授权的访问令牌
     * 如果登录授权服务不支持此属性，则返回"undefined"。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/oauth.html](http://www.html5plus.org/doc/zh_cn/oauth.html)
     */
    access_token?: string;
    /**
     * 登录授权用户的唯一标识
     * 如果登录授权服务不支持此属性，则返回"undefined"。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/oauth.html](http://www.html5plus.org/doc/zh_cn/oauth.html)
     */
    openid?: string;
    /**
     * 登录授权访问令牌过期时间
     * 单位为秒，如果登录授权服务不支持此属性，则返回"undefined"。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/oauth.html](http://www.html5plus.org/doc/zh_cn/oauth.html)
     */
    expires_in?: string;
    /**
     * 登录授权的更新令牌
     * 用来获取下一次的访问令牌，如果登录授权服务不支持此属性，则返回"undefined"。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/oauth.html](http://www.html5plus.org/doc/zh_cn/oauth.html)
     */
    refresh_token?: string;
    /**
     * 登录授权的权限范围
     * 如果存在多个权限，则以","符号分割。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/oauth.html](http://www.html5plus.org/doc/zh_cn/oauth.html)
     */
    scope?: string;
}

/**
 * 登录授权用户信息
 * 用于保存登录授权用户的信息。
 * 	此对象仅定义标准属性，登录授权认证服务可扩展自定义数据。
 * 	例如“微信”登录授权服务，可能包括以下自定义数据：
 * 	privilege - 用户特权信息，json数组，如微信沃卡用户为（chinaunicom）；
 * 	unionid - 用户统一标识，针对一个微信开放平台帐号下的应用，同一用户的unionid是唯一的。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/oauth.html](http://www.html5plus.org/doc/zh_cn/oauth.html)
 */
interface PlusOauthUserInfo {
    /**
     * 登录授权用户的唯一标识
     * 如果登录授权服务不支持此属性，则返回"undefined"。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/oauth.html](http://www.html5plus.org/doc/zh_cn/oauth.html)
     */
    openid?: string;
    /**
     * 登录授权用户的头像图片地址
     * 要求为"http://"或"https://"开头的地址，如果登录授权服务不支持此属性，则返回"undefined"。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/oauth.html](http://www.html5plus.org/doc/zh_cn/oauth.html)
     */
    headimgurl?: string;
    /**
     * 登录授权用户的昵称
     * 如果登录授权服务不支持此属性，则返回"undefined"。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/oauth.html](http://www.html5plus.org/doc/zh_cn/oauth.html)
     */
    nickname?: string;
    /**
     * 登录授权用户的邮箱地址
     * 如果登录授权服务不支持此属性，则返回"undefined"。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/oauth.html](http://www.html5plus.org/doc/zh_cn/oauth.html)
     */
    email?: string;
    /**
     * 登录授权用户的电话号码
     * 如果登录授权服务不支持此属性，则返回"undefined"。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/oauth.html](http://www.html5plus.org/doc/zh_cn/oauth.html)
     */
    phonenumber?: string;
    /**
     * 登录授权用户的性别
     * 1为男性，2为女性。
     * 	如果登录授权服务不支持此属性，则返回"undefined"。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/oauth.html](http://www.html5plus.org/doc/zh_cn/oauth.html)
     */
    sex?: string;
    /**
     * 登录授权用户注册的省份信息
     * 如果登录授权服务不支持此属性，则返回"undefined"。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/oauth.html](http://www.html5plus.org/doc/zh_cn/oauth.html)
     */
    province?: string;
    /**
     * 登录授权用户注册的城市信息
     * 如果登录授权服务不支持此属性，则返回"undefined"。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/oauth.html](http://www.html5plus.org/doc/zh_cn/oauth.html)
     */
    city?: string;
    /**
     * 登录授权用户注册的国家信息
     * 如果登录授权服务不支持此属性，则返回"undefined"。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/oauth.html](http://www.html5plus.org/doc/zh_cn/oauth.html)
     */
    country?: string;
}

/**
 * Payment模块管理支付功能，用于提供网页安全支付能力，支持通过Web接口进行支付操作。通过plus.payment可获取支付管理对象。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/payment.html](http://www.html5plus.org/doc/zh_cn/payment.html)
 */
interface PlusPayment {
    /**
     * 支付通道对象
     * PaymentChannel对象表示特定的支付通道，用于向系统请求支付操作。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/payment.html](http://www.html5plus.org/doc/zh_cn/payment.html)
     */
    PaymentChannel?: PlusPaymentPaymentChannel;
    /**
     * IAP订单数据对象
     * 描述IAP商品订单信息，如标识、数量等。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/payment.html](http://www.html5plus.org/doc/zh_cn/payment.html)
     */
    OrderStatementIAP?: PlusPaymentOrderStatementIAP;
    /**
     * 支付操作结果对象
     * PaymentResult对象表示支付操作返回结果，用于确认支付操作成功。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/payment.html](http://www.html5plus.org/doc/zh_cn/payment.html)
     */
    PaymentResult?: PlusPaymentPaymentResult;
    /**
     * IAP商品对象
     * 描述IAP商品详细信息，如标识、价格、标题、描述信息等。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/payment.html](http://www.html5plus.org/doc/zh_cn/payment.html)
     */
    IAPProduct?: PlusPaymentIAPProduct;
    /**
     * 购买IAP商品对象
     * 描述购买的IAP商品详细信息，如标识、数量等。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/payment.html](http://www.html5plus.org/doc/zh_cn/payment.html)
     */
    IAPProductInfo?: PlusPaymentIAPProductInfo;
    /**
     * 购买IAP商品交易信息对象
     * 描述购买的IAP商品交易详细信息，如购买商品信息、交易日期、订单标识等。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/payment.html](http://www.html5plus.org/doc/zh_cn/payment.html)
     */
    IAPTransaction?: PlusPaymentIAPTransaction;
    /**
     * 获取支付通道
     * 在进行支付操作前需获取终端支持的支付通道列表，用于提示用户进行选择。
     * 	获取支付通道成功后通过successCB回调返回支持的所有通道列表，获取支付通道列表失败则通过errorCB回调返回。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/payment.html](http://www.html5plus.org/doc/zh_cn/payment.html)
     */
    getChannels(successCB?: (result: PlusPayment []) => void, errorCB?: (result: any) => void): void;
    /**
     * 请求支付操作
     * 调用指定的支付通道进行支付操作，其中statement包含支付操作的相关信息，支付模块将弹出支付界面供用户进行支付信息的输入确认操作。
     * 	用户支付操作成功后通过successCB回调返回支付操作结果，支付操作失败则通过errorCB回调返回。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/payment.html](http://www.html5plus.org/doc/zh_cn/payment.html)
     */
    request(channel?: PlusPaymentPaymentChannel, statement?: string, successCB?: (result: PlusPaymentPaymentResult) => void, errorCB?: (result: any) => void): void;
}

/**
 * 支付通道对象
 * PaymentChannel对象表示特定的支付通道，用于向系统请求支付操作。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/payment.html](http://www.html5plus.org/doc/zh_cn/payment.html)
 */
interface PlusPaymentPaymentChannel {
    /**
     * 支付通道标识
     * 用于标识支付通道：
     * 		"alipay" - 表示支付宝；
     * 		"wxpay" - 表示微信支付；
     * 		"appleiap" - 表示苹果应用内支付；
     * 		"qhpay" - 表示360聚合支付（仅360手助流应用环境下支持）。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/payment.html](http://www.html5plus.org/doc/zh_cn/payment.html)
     */
    id?: string;
    /**
     * 支付通道描述
     * 支付通道的描述信息，如“支付宝”、“微信”、“In-App Purchase”。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/payment.html](http://www.html5plus.org/doc/zh_cn/payment.html)
     */
    description?: string;
    /**
     * 支付通道服务是否安装
     * 通常特定的支付通道依赖系统安装相关的服务，此属性用于标识其服务是否安装，如果没有安装则为false，否则为true。
     * 	若系统环境中没有安装相关的服务，则可能导致调用支付操作失败，这时可以调用installService方法进行安装。
     * 	注意：如果支付通道不需要依赖系统安装服务，则永远返回true。例如支付宝，如果设备上未安装支付宝客户端则调用Wap页面进行支付，因此值固定返回true；
     * 	而微信支付则依赖微信客户端，如果设备上未安装微信客户端则serviceReady值为false，此时应该提示用户安装微信客户端才能进行支付操作。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/payment.html](http://www.html5plus.org/doc/zh_cn/payment.html)
     */
    serviceReady?: boolean;
    /**
     * 安装支付通道依赖的服务
     * 对于某些支付通道，通常特定的支付通道依赖系统安装相关的服务，调用此方法将安装其依赖的支付服务。
     * 	如支付宝，则在系统中安装支付宝客户端程序。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/payment.html](http://www.html5plus.org/doc/zh_cn/payment.html)
     */
    installService(): void;
    /**
     * 向IAP服务器请求支付订单
     * IAP支付在调用plus.payment.request方法支付前须先向服务器请求获取商品的详细信息，否则会支付失败。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/payment.html](http://www.html5plus.org/doc/zh_cn/payment.html)
     */
    requestOrder(ids?: any [], successCB?: (result: PlusPayment []) => void, errorCB?: (result: any) => void): void;
    /**
     * 向IAP服务器请求已经购买的非消耗性商品和订阅商品
     * 注意：不能获取已购买的消耗性商品。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/payment.html](http://www.html5plus.org/doc/zh_cn/payment.html)
     */
    restoreComplateRequest(options?: any, successCB?: (result: PlusPayment []) => void): void;
}

/**
 * IAP订单数据对象
 * 描述IAP商品订单信息，如标识、数量等。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/payment.html](http://www.html5plus.org/doc/zh_cn/payment.html)
 */
interface PlusPaymentOrderStatementIAP {
    /**
     * 商品的标识
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/payment.html](http://www.html5plus.org/doc/zh_cn/payment.html)
     */
    productid?: string;
    /**
     * 购买用户名称
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/payment.html](http://www.html5plus.org/doc/zh_cn/payment.html)
     */
    username?: string;
    /**
     * 商品数量
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/payment.html](http://www.html5plus.org/doc/zh_cn/payment.html)
     */
    quantity?: string;
}

/**
 * 支付操作结果对象
 * PaymentResult对象表示支付操作返回结果，用于确认支付操作成功。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/payment.html](http://www.html5plus.org/doc/zh_cn/payment.html)
 */
interface PlusPaymentPaymentResult {
    /**
     * 支付通道对象
     * 用于发起支付操作的支付通道对象。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/payment.html](http://www.html5plus.org/doc/zh_cn/payment.html)
     */
    channel?: PlusPaymentPaymentChannel;
    /**
     * 交易编号信息
     * 如果支付平台不支持此数据则返回undefined。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/payment.html](http://www.html5plus.org/doc/zh_cn/payment.html)
     */
    tradeno?: string;
    /**
     * 交易描述信息
     * 如果支付平台不支持此数据则返回undefined。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/payment.html](http://www.html5plus.org/doc/zh_cn/payment.html)
     */
    description?: boolean;
    /**
     * 查找支付交易信息地址
     * 用于向支付平台查询交易信息，如果支付平台不支持此数据则返回undefined。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/payment.html](http://www.html5plus.org/doc/zh_cn/payment.html)
     */
    url?: boolean;
    /**
     * 支付操作指纹信息
     * 用于向支付平台查询支付订单信息，如果支付平台不支持此数据则返回undefined。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/payment.html](http://www.html5plus.org/doc/zh_cn/payment.html)
     */
    signature?: string;
    /**
     * 支付平台返回的原始数据
     * 如果支付平台返回key-value类型字符串，则组合成符合JSON格式的字符串。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/payment.html](http://www.html5plus.org/doc/zh_cn/payment.html)
     */
    rawdata?: string;
}

/**
 * IAP商品对象
 * 描述IAP商品详细信息，如标识、价格、标题、描述信息等。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/payment.html](http://www.html5plus.org/doc/zh_cn/payment.html)
 */
interface PlusPaymentIAPProduct {
    /**
     * 商品的标识
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/payment.html](http://www.html5plus.org/doc/zh_cn/payment.html)
     */
    productid?: string;
    /**
     * 商品的价格
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/payment.html](http://www.html5plus.org/doc/zh_cn/payment.html)
     */
    price?: string;
    /**
     * 商品标题
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/payment.html](http://www.html5plus.org/doc/zh_cn/payment.html)
     */
    title?: string;
    /**
     * 商品的描述信息
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/payment.html](http://www.html5plus.org/doc/zh_cn/payment.html)
     */
    description?: string;
}

/**
 * 购买IAP商品对象
 * 描述购买的IAP商品详细信息，如标识、数量等。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/payment.html](http://www.html5plus.org/doc/zh_cn/payment.html)
 */
interface PlusPaymentIAPProductInfo {
    /**
     * 商品的标识
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/payment.html](http://www.html5plus.org/doc/zh_cn/payment.html)
     */
    productIdentifier?: string;
    /**
     * 商品的数量
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/payment.html](http://www.html5plus.org/doc/zh_cn/payment.html)
     */
    quantity?: string;
}

/**
 * 购买IAP商品交易信息对象
 * 描述购买的IAP商品交易详细信息，如购买商品信息、交易日期、订单标识等。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/payment.html](http://www.html5plus.org/doc/zh_cn/payment.html)
 */
interface PlusPaymentIAPTransaction {
    /**
     * 购买商品的信息
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/payment.html](http://www.html5plus.org/doc/zh_cn/payment.html)
     */
    payment?: string;
    /**
     * 购买商品的交易日期
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/payment.html](http://www.html5plus.org/doc/zh_cn/payment.html)
     */
    transactionDate?: string;
    /**
     * 购买商品的交易订单标识
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/payment.html](http://www.html5plus.org/doc/zh_cn/payment.html)
     */
    transactionIdentifier?: string;
    /**
     * 购买商品的交易收据
     * base64编码格式字符串数据。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/payment.html](http://www.html5plus.org/doc/zh_cn/payment.html)
     */
    transactionReceipt?: string;
    /**
     * 购买商品的交易状态
     * 可取值："1"为支付成功；"2"为支付失败；"3"为支付已恢复。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/payment.html](http://www.html5plus.org/doc/zh_cn/payment.html)
     */
    transactionState?: string;
}

/**
 * Push模块管理推送消息功能，可以实现在线、离线的消息推送，通过plus.push可获取推送消息管理对象。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/push.html](http://www.html5plus.org/doc/zh_cn/push.html)
 */
interface PlusPush {
    /**
     * JSON对象，获取的客户端标识信息
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/push.html](http://www.html5plus.org/doc/zh_cn/push.html)
     */
    ClientInfo?: PlusPushClientInfo;
    /**
     * JSON对象，推送消息对象
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/push.html](http://www.html5plus.org/doc/zh_cn/push.html)
     */
    PushMessage?: PlusPushPushMessage;
    /**
     * JSON对象，获客户端创建本地消息的参数
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/push.html](http://www.html5plus.org/doc/zh_cn/push.html)
     */
    MessageOptions?: PlusPushMessageOptions;
    /**
     * 添加推送消息事件监听器
     * 添加推送消息事件监听器，当指定推送事件发出时触发。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/push.html](http://www.html5plus.org/doc/zh_cn/push.html)
     */
    addEventListener(type?: string, listener?: (result: string) => void, capture?: boolean): void;
    /**
     * 清空所有推送消息
     * 清空系统消息中心所有的推送消息。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/push.html](http://www.html5plus.org/doc/zh_cn/push.html)
     */
    clear(): void;
    /**
     * 创建本地消息
     * 在本地直接创建推送消息，并添加到系统消息中心。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/push.html](http://www.html5plus.org/doc/zh_cn/push.html)
     */
    createMessage(content?: string, payload?: string, options?: PlusPushMessageOptions): void;
    /**
     * 获取所有推送消息
     * 获取客户端接收到的所有推送消息。
     * 	仅包括在系统消息中心显示的推送消息，不包括调用setAutoNotification(false)方法设置不显示推送消息后接收到的消息。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/push.html](http://www.html5plus.org/doc/zh_cn/push.html)
     */
    getAllMessage(): PlusPushPushMessage;
    /**
     * 获取客户端推送标识信息
     * 客户端标识信息用于业务服务器下发推送消息时提交给推送服务器的数据，用于说明下发推送消息的接收者（客户端）。需要客户端在第一次运行时提交到业务服务器保存。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/push.html](http://www.html5plus.org/doc/zh_cn/push.html)
     */
    getClientInfo(): PlusPushClientInfo;
    /**
     * 设置程序是否将消息显示在系统消息中心
     * 默认情况下程序在接收到推送消息后将会在系统消息中心显示，通过此方法可关闭默认行为，接收到推送消息后不在系统消息中心显示，通过addEventListener方法的“receive”事件监听处理接收到的消息。
     * 	在这种模式下可通过createMessage方法创建在系统消息中心显示的消息。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/push.html](http://www.html5plus.org/doc/zh_cn/push.html)
     */
    setAutoNotification(notify?: boolean): void;
    /**
     * 删除推送消息
     * 删除系统消息中心指定的推送消息，可通过getAllMessage方法获取所有的消息后进行操作。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/push.html](http://www.html5plus.org/doc/zh_cn/push.html)
     */
    remove(message?: PlusPushPushMessage): void;
}

/**
 * JSON对象，获取的客户端标识信息
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/push.html](http://www.html5plus.org/doc/zh_cn/push.html)
 */
interface PlusPushClientInfo {
    /**
     * 设备令牌（iOS设备唯一标识），用于APNS服务推送中标识设备的身份
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/push.html](http://www.html5plus.org/doc/zh_cn/push.html)
     */
    token?: string;
    /**
     * 推送服务令牌（设备唯一标识），用于标识推送信息接收者身份
     * 第三方推送服务器管理的设备唯一标识，在iOS平台此值通常与token不同；在其它平台此值通常与token值一致。
     * 	此值与设备及应用都相关，即不同的apk/ipa安装到同一台设备上的值都不相同。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/push.html](http://www.html5plus.org/doc/zh_cn/push.html)
     */
    clientid?: string;
    /**
     * 第三方推送服务的应用标识
     * 第三方推送服务器管理的应用标识，通常需要在第三方推送服务器平台进行注册获取。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/push.html](http://www.html5plus.org/doc/zh_cn/push.html)
     */
    appid?: string;
    /**
     * 第三方推送服务器的应用键值
     * 第三方推送服务器管理的应用键值，通常需要在第三方推送服务器平台进行注册获取。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/push.html](http://www.html5plus.org/doc/zh_cn/push.html)
     */
    appkey?: string;
}

/**
 * JSON对象，推送消息对象
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/push.html](http://www.html5plus.org/doc/zh_cn/push.html)
 */
interface PlusPushPushMessage {
    /**
     * 推送消息显示的标题
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/push.html](http://www.html5plus.org/doc/zh_cn/push.html)
     */
    title?: string;
    /**
     * 推送消息显示的内容
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/push.html](http://www.html5plus.org/doc/zh_cn/push.html)
     */
    content?: string;
    /**
     * 推送消息承载的数据
     * 如果推送消息中传输的数据不符合JSON格式，则作为String类型数据保存。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/push.html](http://www.html5plus.org/doc/zh_cn/push.html)
     */
    payload?: any;
    /**
     * Apple APNS推送协议数据
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/push.html](http://www.html5plus.org/doc/zh_cn/push.html)
     */
    aps?: any;
}

/**
 * JSON对象，获客户端创建本地消息的参数
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/push.html](http://www.html5plus.org/doc/zh_cn/push.html)
 */
interface PlusPushMessageOptions {
    /**
     * 要启动流应用的appid
     * 默认值为当前流应用的appid。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/push.html](http://www.html5plus.org/doc/zh_cn/push.html)
     */
    appid?: string;
    /**
     * 是否覆盖上一次提示的消息
     * 可取值true或false，true为覆盖，false不覆盖，默认为permission中设置的cover值。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/push.html](http://www.html5plus.org/doc/zh_cn/push.html)
     */
    cover?: boolean;
    /**
     * 提示消息延迟显示的时间
     * 当设备接收到推送消息后，可不立即显示，而是延迟一段时间显示，延迟时间单位为s，默认为0s，立即显示。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/push.html](http://www.html5plus.org/doc/zh_cn/push.html)
     */
    delay?: number;
    /**
     * 推送消息的图标
     * 本地图片地址，相对路径 - 相对于当前页面的host位置，如"a.jpg"，注意当前页面为网络地址则不支持； 绝对路径 - 系统绝对路径，如Android平台"/sdcard/logo.png"，此类路径通常通过其它5+ API获取的； 扩展相对路径URL(RelativeURL) - 以"_"开头的相对路径，如"_www/a.jpg"； 本地路径URL - 以“file://”开头，后面跟随系统绝对路径。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/push.html](http://www.html5plus.org/doc/zh_cn/push.html)
     */
    icon?: string;
    /**
     * 推送消息的提示音
     * 显示消息时的播放的提示音，可取值：
     * 	“system”-表示使用系统通知提示音；
     * 	“none”-表示不使用提示音；
     * 	默认值为“system”。
     * - system: 使用系统通知提示音
     * - none: 不使用提示音
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/push.html](http://www.html5plus.org/doc/zh_cn/push.html)
     */
    sound?: 'system' | 'none';
    /**
     * 推送消息的标题
     * 在系统消息中心显示的通知消息标题，默认值为程序的名称。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/push.html](http://www.html5plus.org/doc/zh_cn/push.html)
     */
    title?: string;
    /**
     * 消息上显示的提示时间
     * 默认为当前时间，如果延迟显示则使用延时后显示消息的时间。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/push.html](http://www.html5plus.org/doc/zh_cn/push.html)
     */
    when?: Date;
}

/**
 * Share模块管理客户端的社交分享功能，提供调用终端社交软件的分享能力。通过plus.share可获取社交分享管理对象。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/share.html](http://www.html5plus.org/doc/zh_cn/share.html)
 */
interface PlusShare {
    /**
     * JSON对象，分享授权认证参数选项
     * 此对象支持的属性值由分享服务的授权认证模块定义。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/share.html](http://www.html5plus.org/doc/zh_cn/share.html)
     */
    AuthOptions?: PlusShareAuthOptions;
    /**
     * 分享授权控件对象
     * Authorize对象表示分享控件对象，用于在窗口中显示分享控件，使用此对象可自定义分享授权界面。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/share.html](http://www.html5plus.org/doc/zh_cn/share.html)
     */
    Authorize?: PlusShareAuthorize;
    /**
     * JSON对象，用户位置信息
     * GeoPosition对象用于表示用户分享消息时的位置信息。用于标识分享操作时用户的位置信息。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/share.html](http://www.html5plus.org/doc/zh_cn/share.html)
     */
    GeoPosition?: PlusShareGeoPosition;
    /**
     * 分享服务对象
     * ShareService对象用于表示分享服务，在JS中为对象，用于向系统请求分享操作。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/share.html](http://www.html5plus.org/doc/zh_cn/share.html)
     */
    ShareService?: PlusShareShareService;
    /**
     * 分享服务标识
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/share.html](http://www.html5plus.org/doc/zh_cn/share.html)
     */
    ShareServerIdentity?: PlusShareShareServerIdentity;
    /**
     * JSON对象，分享消息对象
     * ShareMessage对象用于表示分享消息内容，在JS中为JSON对象，用于向系统发送分享信息操作。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/share.html](http://www.html5plus.org/doc/zh_cn/share.html)
     */
    ShareMessage?: PlusShareShareMessage;
    /**
     * JSON对象，保存分享消息扩展信息
     * ShareMessageExtra对象用于保存各分享平台扩展的参数，用于自定义分享功能。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/share.html](http://www.html5plus.org/doc/zh_cn/share.html)
     */
    ShareMessageExtra?: PlusShareShareMessageExtra;
    /**
     * JSON对象，微信小程序信息
     * 用于配置分享小程序的参数，如小程序标识、页面路径等。
     * 	注意：分享的小程序需要在微信开放平台关联的开发者账号下，否则会分享失败。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/share.html](http://www.html5plus.org/doc/zh_cn/share.html)
     */
    WeixinMiniProgramOptions?: PlusShareWeixinMiniProgramOptions;
    /**
     * 获取分享服务
     * 获取终端支持的分享通道列表，可用于提示用户进行分享服务器的选择。获取分享服务成功后通过successCB回调返回支持的所有服务列表，获取服务失败则通过errorCB回调返回。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/share.html](http://www.html5plus.org/doc/zh_cn/share.html)
     */
    getServices(successCB?: (result: PlusShare []) => void, errorCB?: (result: any) => void): void;
    /**
     * 使用系统组件发送分享
     * 调用系统分享组件分享消息，通过msg参数设置分享内容。
     * 	发送成功后通过successCB回调函数通知操作完成，发送失败则通过errorCB回调返回。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/share.html](http://www.html5plus.org/doc/zh_cn/share.html)
     */
    sendWithSystem(msg?: PlusShareShareMessage, successCB?: () => void, errorCB?: (result: any) => void): void;
}

/**
 * JSON对象，分享授权认证参数选项
 * 此对象支持的属性值由分享服务的授权认证模块定义。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/share.html](http://www.html5plus.org/doc/zh_cn/share.html)
 */
interface PlusShareAuthOptions {
    /**
     * 分享服务平台申请的appid
     * 动态设置分享服务授权认证时需要使用的appid，仅需要此参数的分享服务（如“微信”、“QQ”）支持。
     * 	如果未设置则使用运行环境中内置的appid值（如在HBuilder中可在manifest.json的“SDK配置”项中进行设置）。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/share.html](http://www.html5plus.org/doc/zh_cn/share.html)
     */
    appid?: string;
    /**
     * 分享服务平台申请的appkey
     * 动态设置分享服务授权认证时需要使用的appkey，仅需要此参数的分享服务（如“新浪微博”）支持。
     * 	如果未设置则使用运行环境中内置的appkey值（如在HBuilder中可在manifest.json的“SDK配置”项中进行设置）。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/share.html](http://www.html5plus.org/doc/zh_cn/share.html)
     */
    appkey?: string;
    /**
     * 分享服务平台申请的appsecret
     * 动态设置分享服务中需要使用的appsecret，仅需要此参数的分享服务（如“微信”、“新浪微博”）支持。
     * 	如果未设置则使用运行环境中内置的appsecret值（如在HBuilder中可在manifest.json的“SDK配置”项中进行设置）；当开放平台申请的appsecret值涉及到安全问题时，可在应用运行时从服务器获取，然后通过此api动态设置。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/share.html](http://www.html5plus.org/doc/zh_cn/share.html)
     */
    appsecret?: string;
    /**
     * 分享服务平台申请的redirect_url
     * 动态设置分享服务中需要使用的redirect_url，仅需要此参数的登录授权服务（如“新浪微博登录”）支持。
     * 	如果未设置则使用运行环境中内置的redirect_url值（如在HBuilder中可在manifest.json的SDK配置项中进行设置）。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/share.html](http://www.html5plus.org/doc/zh_cn/share.html)
     */
    redirect_url?: string;
}

/**
 * 分享授权控件对象
 * Authorize对象表示分享控件对象，用于在窗口中显示分享控件，使用此对象可自定义分享授权界面。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/share.html](http://www.html5plus.org/doc/zh_cn/share.html)
 */
interface PlusShareAuthorize {
    /**
     * 分享控件加载完成事件
     * 分享授权控件内容加载完成事件，通过调用load方法加载分享授权控件内容，当内容加载完成时触发。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/share.html](http://www.html5plus.org/doc/zh_cn/share.html)
     */
    onloaded?: (result: any) => void;
    /**
     * 分享授权认证成功事件
     * 用户在分享授权控件上输入操作授权成功时触发，事件方法格式参考ShareSuccessCallback回调函数。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/share.html](http://www.html5plus.org/doc/zh_cn/share.html)
     */
    onauthenticated?: () => void;
    /**
     * 分享授权认证失败事件
     * 用户在分享授权控件上输入操作授权认证错误时触发，事件方法格式参考ShareErrorCallback回调函数。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/share.html](http://www.html5plus.org/doc/zh_cn/share.html)
     */
    onerror?: (result: any) => void;
    /**
     * 加载分享授权页面
     * 创建分享授权页面后，需要调用此方法指定分享服务标识来加载授权页面数据，此标识可使用ShareService对象的id属性。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/share.html](http://www.html5plus.org/doc/zh_cn/share.html)
     */
    load(id?: string): void;
    /**
     * 设置分享授权控件是否可见
     * 创建分享授权页面后，调用此方法设置分享授权控件在页面中是否可见。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/share.html](http://www.html5plus.org/doc/zh_cn/share.html)
     */
    setVisible(visible?: boolean): void;
}

/**
 * JSON对象，用户位置信息
 * GeoPosition对象用于表示用户分享消息时的位置信息。用于标识分享操作时用户的位置信息。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/share.html](http://www.html5plus.org/doc/zh_cn/share.html)
 */
interface PlusShareGeoPosition {
    /**
     * 用户位置的纬度坐标信息
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/share.html](http://www.html5plus.org/doc/zh_cn/share.html)
     */
    latitude?: number;
    /**
     * 用户位置的经度坐标信息
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/share.html](http://www.html5plus.org/doc/zh_cn/share.html)
     */
    longitude?: number;
}

/**
 * 分享服务对象
 * ShareService对象用于表示分享服务，在JS中为对象，用于向系统请求分享操作。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/share.html](http://www.html5plus.org/doc/zh_cn/share.html)
 */
interface PlusShareShareService {
    /**
     * 分享服务标识
     * 用于表示分享服务标识：
     * 	"sinaweibo" - 表示新浪微博；
     * 	"tencentweibo" - 表示腾讯微博；
     * 	"weixin" - 表示微信；
     * 	"qq" - 表示腾讯QQ。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/share.html](http://www.html5plus.org/doc/zh_cn/share.html)
     */
    id?: PlusShareShareServerIdentity;
    /**
     * 分享服务描述
     * 用于描述分享服务的信息：
     * 	如“新浪微博”、“腾讯微博”、“微信”、“QQ”。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/share.html](http://www.html5plus.org/doc/zh_cn/share.html)
     */
    description?: string;
    /**
     * 是否授权认证
     * 用于标识此分享是否已经授权认证过，true表示已完成授权认证；false表示未完成授权认证。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/share.html](http://www.html5plus.org/doc/zh_cn/share.html)
     */
    authenticated?: boolean;
    /**
     * 授权认证信息
     * 仅在authenticated为true时有效，标识客户认证标识信息，用于发送分享信息。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/share.html](http://www.html5plus.org/doc/zh_cn/share.html)
     */
    accessToken?: string;
    /**
     * 是否存在对应的分享客户端
     * 对于某些分享服务，可直接调用本地客户端程序进行授权认证，此属性即可提供此相关信息，若没有安装本地客户端则可能调用其它方式进行分享操作，如WAP方式等。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/share.html](http://www.html5plus.org/doc/zh_cn/share.html)
     */
    nativeClient?: boolean;
    /**
     * 授权认证操作
     * 对指定的分享服务进行授权认证操作，在授权前可通过ShareService.authenticated属性判断是否已经授权过，通常只需要对没有进行过授权认证的服务进行授权认证操作。
     * 	授权认证操作成功后通过successCB回调函数通知操作完成，操作失败则通过errorCB回调返回。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/share.html](http://www.html5plus.org/doc/zh_cn/share.html)
     */
    authorize(successCallback?: (result: PlusShareShareService) => void, errorCallback?: (result: any) => void, options?: PlusShareAuthOptions): void;
    /**
     * 取消授权认证
     * 对指定的分享服务取消授权认证操作，取消授权认证后，再次分享时需重新进行授权操作。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/share.html](http://www.html5plus.org/doc/zh_cn/share.html)
     */
    forbid(): void;
    /**
     * 发送分享
     * 发送分享消息，分享消息的内容通过msg设置。
     * 	发送成功后通过successCB回调函数通知操作完成，发送失败则通过errorCB回调返回。若分享服务没有进行授权认证或授权认证失效则触发失败回调函数。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/share.html](http://www.html5plus.org/doc/zh_cn/share.html)
     */
    send(msg?: PlusShareShareMessage, successCB?: () => void, errorCB?: (result: any) => void): void;
    /**
     * 调用微信小程序
     * 注意：需在微信开放平台将应用关联小程序才能正常调用。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/share.html](http://www.html5plus.org/doc/zh_cn/share.html)
     */
    launchMiniProgram(options?: PlusShareWeixinMiniProgramOptions): void;
}

/**
 * 分享服务标识
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/share.html](http://www.html5plus.org/doc/zh_cn/share.html)
 */
interface PlusShareShareServerIdentity {
    /**
     * 新浪微博
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/share.html](http://www.html5plus.org/doc/zh_cn/share.html)
     */
    sinaweibo?: string;
    /**
     * 腾讯微博
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/share.html](http://www.html5plus.org/doc/zh_cn/share.html)
     */
    tencentweibo?: string;
    /**
     * 微信
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/share.html](http://www.html5plus.org/doc/zh_cn/share.html)
     */
    weixin?: string;
}

/**
 * JSON对象，分享消息对象
 * ShareMessage对象用于表示分享消息内容，在JS中为JSON对象，用于向系统发送分享信息操作。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/share.html](http://www.html5plus.org/doc/zh_cn/share.html)
 */
interface PlusShareShareMessage {
    /**
     * 分享消息的类型
     * 
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/share.html](http://www.html5plus.org/doc/zh_cn/share.html)
     */
    type?: string;
    /**
     * 分享消息的文字内容
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/share.html](http://www.html5plus.org/doc/zh_cn/share.html)
     */
    content?: string;
    /**
     * 分享消息的图片
     * 分享消息中包含的图片路径，仅支持本地路径。
     * 	若分享平台仅支持提交一张图片，传入多张图片则仅提交第一张图片。
     * 	如果未指定type类型，优先级顺序为：pictures&gt;content（即设置了pictures则认为分享图片类型）。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/share.html](http://www.html5plus.org/doc/zh_cn/share.html)
     */
    pictures?: any [];
    /**
     * 分享消息的缩略图
     * 分享消息中包含的缩略图路径，支持本地路径及网络路径。
     * 	若分享平台仅支持提交一张图片，传入多张图片则仅提交第一张图片。
     * 	如果分享平台的信息不支持缩略图，若没有设置消息的图片（pictures）则使用缩略图，否则忽略其属性值。
     * 	注意：图片有大小限制，推荐图片小于20Kb。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/share.html](http://www.html5plus.org/doc/zh_cn/share.html)
     */
    thumbs?: any [];
    /**
     * 分享的多媒体资源
     * 分享的多媒体资源地址，当type值为"music"、"video"时有效。
     * 	注意：
     * 		微信分享平台支持音乐、视频类型，仅支持网络地址（以http://或https://开头）；
     * 		QQ分享平台支持音乐类型，仅支持网络路径（以http://或https://开头）；
     * 		新浪微博分享平台支持视频类型，仅支持本地文件路径。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/share.html](http://www.html5plus.org/doc/zh_cn/share.html)
     */
    media?: string;
    /**
     * 分享独立的链接
     * 分享资源地址，仅支持网络地址（以http://或https://开头）。
     * 	如果未指定type类型，优先级顺序为：href&gt;pictures&gt;content（即设置了href则认为分享网页类型）。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/share.html](http://www.html5plus.org/doc/zh_cn/share.html)
     */
    href?: string;
    /**
     * 分享消息的标题
     * 仅微信分享网页、音频、视频、小程序类型时支持。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/share.html](http://www.html5plus.org/doc/zh_cn/share.html)
     */
    title?: string;
    /**
     * 分享消息中包含的用户地理信息数据
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/share.html](http://www.html5plus.org/doc/zh_cn/share.html)
     */
    geo?: PlusShareGeoPosition;
    /**
     * 分享消息扩展参数
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/share.html](http://www.html5plus.org/doc/zh_cn/share.html)
     */
    extra?: PlusShareShareMessageExtra;
    /**
     * 分享微信小程序参数
     * 仅微信分享小程序类型时支持。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/share.html](http://www.html5plus.org/doc/zh_cn/share.html)
     */
    miniProgram?: PlusShareWeixinMiniProgramOptions;
    /**
     * 分享消息的模式
     * 可取值：
     *     "auto" - 自动选择，如果已经安装微博客户端则采用编辑界面进行分享，否则采用无界面分享；
     *     "slient" - 静默分享，采用无界面模式进行分享；
     *     "editable" - 进入编辑界面，用户确认分享内容后发送，如果当前未安装微博客户端则触发错误回调。
     *     默认值为"auto"。
     *     （仅新浪微博分享时生效）
     * - auto: 
     * 	自动选择，如果已经安装微博客户端则采用编辑界面进行分享，否则采用无界面分享
     * 								
     * - slient: 
     * 	静默分享，采用无界面模式进行分享
     * 								
     * - editable: 
     * 	进入编辑界面，用户确认分享内容后发送，如果当前未安装微博客户端则触发错误回调
     * 								
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/share.html](http://www.html5plus.org/doc/zh_cn/share.html)
     */
    interface?: 'auto' | 'slient' | 'editable';
}

/**
 * JSON对象，保存分享消息扩展信息
 * ShareMessageExtra对象用于保存各分享平台扩展的参数，用于自定义分享功能。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/share.html](http://www.html5plus.org/doc/zh_cn/share.html)
 */
interface PlusShareShareMessageExtra {
    /**
     * 微信分享场景，仅微信分享平台有效
     * 可取值：
     * 	"WXSceneSession"分享到微信的“我的好友”；
     * 	"WXSceneTimeline"分享到微信的“朋友圈”中；
     * 	"WXSceneFavorite"分享到微信的“我的收藏”中。
     * 	默认值为"WXSceneSession"。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/share.html](http://www.html5plus.org/doc/zh_cn/share.html)
     */
    scene?: string;
}

/**
 * JSON对象，微信小程序信息
 * 用于配置分享小程序的参数，如小程序标识、页面路径等。
 * 	注意：分享的小程序需要在微信开放平台关联的开发者账号下，否则会分享失败。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/share.html](http://www.html5plus.org/doc/zh_cn/share.html)
 */
interface PlusShareWeixinMiniProgramOptions {
    /**
     * 微信小程序ID
     * 注意：是微信小程序的原始ID（"g_"开头的字符串）。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/share.html](http://www.html5plus.org/doc/zh_cn/share.html)
     */
    id?: string;
    /**
     * 微信小程序打开的页面路径
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/share.html](http://www.html5plus.org/doc/zh_cn/share.html)
     */
    path?: string;
    /**
     * 微信小程序版本类型
     * 可取值：
     * 	0-正式版；
     * 	1-测试版；
     * 	2-体验版。
     * 	默认值为0。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/share.html](http://www.html5plus.org/doc/zh_cn/share.html)
     */
    type?: number;
    /**
     * 兼容低版本的网页链接
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/share.html](http://www.html5plus.org/doc/zh_cn/share.html)
     */
    webUrl?: string;
}

/**
 * Speech模块管理语音输入功能，提供语音识别功能，可支持用户通过麦克风设备进行语音输入内容。通过plus.speech可获取语音输入管理对象。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/speech.html](http://www.html5plus.org/doc/zh_cn/speech.html)
 */
interface PlusSpeech {
    /**
     * JSON对象，语音识别参数
     * 控制语音识别引擎内部参数，在JS中为JSON对象，在启动语音识别时使用。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/speech.html](http://www.html5plus.org/doc/zh_cn/speech.html)
     */
    SpeechRecognizeOptions?: PlusSpeechSpeechRecognizeOptions;
    /**
     * 语音识别事件类型
     * 描述语音过程的触发事件列表，可以通过调用plus.sppech.addEventListener方法进行注册监听。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/speech.html](http://www.html5plus.org/doc/zh_cn/speech.html)
     */
    SpeechRecoginzeEvents?: PlusSpeechSpeechRecoginzeEvents;
    /**
     * 启动语音识别
     * 启动语音识别时调用，当语音识别成功后通过successCallback回调返回识别出文本内容，调用语音识别失败则通过errorCallback回调返回。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/speech.html](http://www.html5plus.org/doc/zh_cn/speech.html)
     */
    startRecognize(options?: PlusSpeechSpeechRecognizeOptions, successCB?: (result: string) => void, errorCB?: (result: any) => void): void;
    /**
     * 停止语音识别
     * 当语音识别完成时或用户取消语音识别时调用，调用此方法将导致errorCallback回调函数的调用。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/speech.html](http://www.html5plus.org/doc/zh_cn/speech.html)
     */
    stopRecognize(): void;
    /**
     * 监听语音识别事件
     * 向语音识别模块添加事件监听器，当指定的事件发生时，将触发listener函数的执行。 
     * 	可多次调用此方法添加多个监听器，当监听的事件发生时，将按照添加的先后顺序触发执行。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/speech.html](http://www.html5plus.org/doc/zh_cn/speech.html)
     */
    addEventListener(event?: PlusSpeechSpeechRecoginzeEvents, listener?: (result: any) => void, capture?: boolean): void;
}

/**
 * JSON对象，语音识别参数
 * 控制语音识别引擎内部参数，在JS中为JSON对象，在启动语音识别时使用。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/speech.html](http://www.html5plus.org/doc/zh_cn/speech.html)
 */
interface PlusSpeechSpeechRecognizeOptions {
    /**
     * 语音识别是否采用持续模式
     * 设置为true表示语音引擎不会根据语音输入自动结束，识别到文本内容将多次调用successCallback函数返回，如果需要结束语音识别则必须调用stopRecognize接口，默认值为false。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/speech.html](http://www.html5plus.org/doc/zh_cn/speech.html)
     */
    continue?: boolean;
    /**
     * 语音识别引擎标识
     * 用于兼容多语音识别引擎的浏览器，使用语音识别厂商的产品名称，如未设置或设置不正确则使用运行环境默认的语音识别引擎。
     * 	支持以下语音识别引擎：
     * 		"baidu"-百度语音识别；
     * 		"iFly"-讯飞语音识别。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/speech.html](http://www.html5plus.org/doc/zh_cn/speech.html)
     */
    engine?: string;
    /**
     * 语音识别引擎的语言
     * 用于定义语音识别引擎的语言，其取值需符合W3C的Language codes规范。
     * 	目前讯飞语音支持以下语言：
     * 		"zh-cn"-中文，普通话；
     * 		"en-us"-英语；
     * 		"zh-cantonese"-中文，粤语；
     * 		"zh-henanese"-中文，河南话（百度语音识别不支持此语言）。
     * 		默认值为"zh-cn"。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/speech.html](http://www.html5plus.org/doc/zh_cn/speech.html)
     */
    lang?: string;
    /**
     * 指定识别结果识别包括多候选结果
     * 用于指定识别结果识别包括多候选结果。如nbest:3，识别返回3个候选结果，默认值为1。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/speech.html](http://www.html5plus.org/doc/zh_cn/speech.html)
     */
    nbest?: number;
    /**
     * 识别结果中是否包含标点符号
     * true表示识别结果文本中包含标点符号，false表示识别结果文本中不包含标点符号。
     * 	默认值为true。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/speech.html](http://www.html5plus.org/doc/zh_cn/speech.html)
     */
    punctuation?: boolean;
    /**
     * 语音识别超时时间
     * 语音识别超时的时间，单位为ms，默认值为1000（即10秒）。
     * 	注：百度语音识别不支持此参数。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/speech.html](http://www.html5plus.org/doc/zh_cn/speech.html)
     */
    timeout?: number;
    /**
     * 识别时是否显示用户界面
     * 用于指定识别时是否显示用户界面，设置为true表示显示浏览器内置语音识别界面；设置为false表示不显示浏览器内置语音识别界面。默认值为true。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/speech.html](http://www.html5plus.org/doc/zh_cn/speech.html)
     */
    userInterface?: boolean;
    /**
     * 语音识别开始事件（已废弃，使用start事件）
     * 事件函数，语音识别开始启动，在调用startRecognize方法后触发，与onend事件成对触发。
     * 	注：iOS平台未支持
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/speech.html](http://www.html5plus.org/doc/zh_cn/speech.html)
     */
    onstart?: (result: any) => void;
    /**
     * 语音识别结束事件（已废弃，使用end事件）
     * 事件函数，语音识别结束，在调用stopRecognize方法后触发，或者在引擎内部自动完成语音识别后触发，与onstart事件成对触发。
     * 	注：iOS平台未支持
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/speech.html](http://www.html5plus.org/doc/zh_cn/speech.html)
     */
    onend?: (result: any) => void;
}

/**
 * 语音识别事件类型
 * 描述语音过程的触发事件列表，可以通过调用plus.sppech.addEventListener方法进行注册监听。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/speech.html](http://www.html5plus.org/doc/zh_cn/speech.html)
 */
interface PlusSpeechSpeechRecoginzeEvents {
    /**
     * 开始语音识别
     * 调用plus.speech.startRecognize方法开始语音识别时触发。
     * 	无回调函数参数。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/speech.html](http://www.html5plus.org/doc/zh_cn/speech.html)
     */
    start?: string;
    /**
     * 音量变化
     * 开始语音识别后，麦克风录制到的语音音量变化时触发。
     * 	回调函数参数event={volume:"Number类型，取值范围0-1"}。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/speech.html](http://www.html5plus.org/doc/zh_cn/speech.html)
     */
    volumeChange?: string;
    /**
     * 临时语音识别结果
     * 返回临时语音识别结果时触发。
     * 	回调函数参数event={partialResult:"String类型，临时识别结果"}。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/speech.html](http://www.html5plus.org/doc/zh_cn/speech.html)
     */
    recognizing?: string;
    /**
     * 最终语音识别
     * 返回最终语音识别结果。
     * 	回调函数参数event={result:"String类型，最佳识别结果",results:"String数组类型，所有候选结果"}。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/speech.html](http://www.html5plus.org/doc/zh_cn/speech.html)
     */
    recognition?: string;
    /**
     * 结束语音识别
     * 调用plus.speech.stopRecognize方法结束语音识别或语音识别完成后自动结束时触发。
     * 	无回调函数参数。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/speech.html](http://www.html5plus.org/doc/zh_cn/speech.html)
     */
    end?: string;
    /**
     * 语音识别错误
     * 语音识别发生错误时触发。
     * 	回调函数参数event={code:"Number类型，错误编码",message:"String类型，错误描述信息"}。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/speech.html](http://www.html5plus.org/doc/zh_cn/speech.html)
     */
    error?: string;
}

/**
 * Statistic模块管理统计功能，用于提供应用内统计的能力，支持统计和分析用户属性和用户行为数据。通过plus.statistic可获取统计管理对象。
 * 
 * 参考: [http://www.html5plus.org/doc/zh_cn/statistic.html](http://www.html5plus.org/doc/zh_cn/statistic.html)
 */
interface PlusStatistic {
    /**
     * 触发事件
     * 触发指定的统计事件，触发的事件必须要先在统计网站上注册事件ID。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/statistic.html](http://www.html5plus.org/doc/zh_cn/statistic.html)
     */
    eventTrig(id?: string, value?: any): void;
    /**
     * 精确持续事件
     * 精确时长的持续事件统计，触发的事件必须要先在统计网站上注册事件ID。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/statistic.html](http://www.html5plus.org/doc/zh_cn/statistic.html)
     */
    eventDuration(id?: string, duration?: number, value?: any): void;
    /**
     * 开始持续事件（过期API，不推荐使用）
     * 开始指定的持续事件统计，当事件结束时调用eventEnd方法，，触发的事件必须要先在统计网站上注册事件ID。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/statistic.html](http://www.html5plus.org/doc/zh_cn/statistic.html)
     */
    eventStart(id?: string, value?: string): void;
    /**
     * 结束持续事件（过期API，不推荐使用）
     * 结束指定的持续事件统计，需先调用eventStart方法开始持续事件统计，触发的事件必须要先在统计网站上注册事件ID。
     * 
     * 参考: [http://www.html5plus.org/doc/zh_cn/statistic.html](http://www.html5plus.org/doc/zh_cn/statistic.html)
     */
    eventEnd(id?: string, label?: string): void;
}
