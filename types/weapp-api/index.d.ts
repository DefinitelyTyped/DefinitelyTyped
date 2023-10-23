declare namespace wx {
    // import startPullDownRefresh = swan.startPullDownRefresh;
    type NoneParamCallback = () => void;
    type OneParamCallback = (data: any) => void;
    type ResponseCallback = (res: any) => void;
    type DataResponseCallback = (res: DataResponse) => void;
    type TempFileResponseCallback = (res: TempFileResponse) => void;
    type ErrorCallback = (error: any) => void;
    type EventCallback = (event: any) => void;

    interface DataResponse {
        /** 回调函数返回的内容 */
        data: any;
    }
    interface TempFileResponse {
        /** 文件的临时路径 */
        tempFilePath: string;
    }

    interface PageOptions {
        /** 页面的初始数据 */
        data?: any;
        /** 生命周期函数--监听页面加载 */
        onLoad?: ((options: any) => void) | undefined;
        /** 生命周期函数--监听页面渲染完成 */
        onReady?: NoneParamCallback | undefined;
        /** 生命周期函数--监听页面显示 */
        onShow?: NoneParamCallback | undefined;
        /** 生命周期函数--监听页面隐藏 */
        onHide?: NoneParamCallback | undefined;
        /** 生命周期函数--监听页面卸载 */
        onUnload?: NoneParamCallback | undefined;
        [key: string]: any;
    }

    interface referrerInfo {
        /** 来源小程序、公众号或 App 的 appId */
        appId: string;
        /** 来源小程序传过来的数据，scene=1037或1038时支持 */
        extraData: Object;
    }

    interface onLaunchOptions {
        /** 启动小程序的路径 */
        path: string;
        /** 启动小程序的场景值 */
        scene: number;
        /** 启动小程序的query参数 */
        query: Object;
        shareTicket: string;
        /** 来源信息。从另一个小程序、公众号或App进入小程序时返回。范泽返回{} */
        referrerInfo: referrerInfo;
    }

    type onLaunchCallback = (options: onLaunchOptions) => void;
    type onShowOptions = onLaunchOptions;

    interface AppOptions {
        /**
         * 生命周期函数--监听小程序初始化
         * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
         */
        onLaunch?: onLaunchCallback | undefined;
        /**
         * 生命周期函数--监听小程序显示
         * 当小程序启动，或从后台进入前台显示，会触发 onShow
         */
        onShow?: ((options: onShowOptions) => void) | undefined;
        /**
         * 生命周期函数--监听小程序隐藏
         * 当小程序从前台进入后台，会触发 onHide
         */
        onHide?: NoneParamCallback | undefined;
        /** 小程序发生脚本错误或 API 调用报错时触发。也可以使用 wx.onError 绑定监听。*/
        onError?: ErrorCallback | undefined;
        /**
         * 小程序要打开的页面不存在时触发
         * 1. 开发者可以在回调中进行页面重定向，但必须在回调中同步处理，异步处理（例如 setTimeout 异步执行）无效。
         * 2. 若开发者没有调用 wx.onPageNotFound 绑定监听，也没有声明 App.onPageNotFound，当跳转页面不存在时，将推入微信客户端原生的页面不存在提示页面。
         * 3. 如果回调中又重定向到另一个不存在的页面，将推入微信客户端原生的页面不存在提示页面，并且不再第二次回调。
         */
        onPageNotFound?: NoneParamCallback | undefined;
        [key: string]: any;
    }

    //  网络
    //  发起请求
    interface RequestHeader {
        [key: string]: string;
    }
    interface RequestOptions {
        /** 开发者服务器接口地址 */
        url: string;
        /** 请求的参数 */
        data?: string | any | undefined;
        /** 设置请求的 header , header 中不能设置 Referer */
        header?: RequestHeader | undefined;
        /** 默认为 GET，有效值：OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT */
        method?: string | undefined;
        /** 收到开发者服务成功返回的回调函数，res = {data: '开发者服务器返回的内容'} */
        success?: DataResponseCallback | undefined;
        /** 接口调用失败的回调函数 */
        fail?: ResponseCallback | undefined;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: ResponseCallback | undefined;
    }
    /**
     * wx.request发起的是https请求。一个微信小程序，同时只能有5个网络请求连接。
     */
    function request(options: RequestOptions): RequestTask;
    /**
     * 网络请求任务对象
     */
    interface RequestTask {
        //  中断请求任务
        abort(): void;
        //  监听 HTTP Response Header 事件。会比请求完成事件更早
        onHeadersReceived(callback: DataResponseCallback): void;
        //  取消监听 HTTP Response Header 事件
        offHeadersReceived(callback: DataResponseCallback): void;
    }

    //  下载
    interface OnProgressCallbackOptions {
        //  下载进度百分比
        progress: number;
        //  已经下载的数据长度，单位 Bytes
        totalBytesWritten: number;
        //  预期需要下载的数据总长度，单位 Bytes
        totalBytesExpectedToWrite: number;
    }
    /**
     * 一个可以监听下载进度变化事件，以及取消下载任务的对象
     */
    interface DownloadTask {
        //  中断下载任务
        abort(): void;
        //  下载进度变化事件的回调函数
        onProgressUpdate(callback: (res: OnProgressCallbackOptions) => {}): void;
        //  取消监听下载进度变化事件
        offProgressUpdate(callback: (res: OnProgressCallbackOptions) => {}): void;
        //  监听 HTTP Response Header 事件。会比请求完成事件更早
        onHeadersReceived(callback: DataResponseCallback): void;
        //  取消监听 HTTP Response Header 事件
        offHeadersReceived(callback: DataResponseCallback): void;
    }
    interface DownloadFileOptions {
        /** 下载资源的 url */
        url: string;
        /** 下载资源的类型，用于客户端识别处理，有效值：image/audio/video */
        type?: string | undefined;
        /** HTTP 请求 Header */
        header?: RequestHeader | undefined;
        /** 下载成功后以 tempFilePath 的形式传给页面，res = {tempFilePath: '文件的临时路径'} */
        success?: TempFileResponseCallback | undefined;
        /** 接口调用失败的回调函数 */
        fail?: ResponseCallback | undefined;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: ResponseCallback | undefined;
    }
    /**
     * 下载文件资源到本地。客户端直接发起一个 HTTP GET 请求，
     * 把下载到的资源根据 type 进行处理，并返回文件的本地临时路径。
     */
    function downloadFile(options: DownloadFileOptions): DownloadTask;

    // 上传
    /**
     * 一个可以监听上传进度变化事件，以及取消上传任务的对象
     */
    interface UploadTask {
        //  中断上传任务
        abort(): void;
        //  上传进度变化事件的回调函数
        onProgressUpdate(callback: (res: OnProgressCallbackOptions) => {}): void;
        //  取消监听上传进度变化事件
        offProgressUpdate(callback: (res: OnProgressCallbackOptions) => {}): void;
        //  监听 HTTP Response Header 事件。会比请求完成事件更早
        onHeadersReceived(callback: DataResponseCallback): void;
        //  取消监听 HTTP Response Header 事件
        offHeadersReceived(callback: DataResponseCallback): void;
    }
    interface UploadFileOptions {
        /** 开发者服务器 url */
        url: string;
        /** 要上传文件资源的路径 */
        filePath: string;
        /** 文件对应的 key , 开发者在服务器端通过这个 key 可以获取到文件二进制内容 */
        name: string;
        /** HTTP 请求 Header , header 中不能设置 Referer */
        header?: RequestHeader | undefined;
        /** HTTP 请求中其他额外的 form data */
        formData?: any;
        /** 接口调用成功的回调函数 */
        success?: ResponseCallback | undefined;
        /** 接口调用失败的回调函数 */
        fail?: ResponseCallback | undefined;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: ResponseCallback | undefined;
    }
    /**
     * 将本地资源上传到开发者服务器。
     * 如页面通过 wx.chooseImage 等接口获取到一个本地资源的临时文件路径后，
     * 可通过此接口将本地资源上传到指定服务器。
     * 客户端发起一个 HTTPS POST 请求，
     * 其中 Content-Type 为 multipart/form-data 。
     */
    function uploadFile(options: UploadFileOptions): UploadTask;

    //  WebSocket
    interface ConnectSocketOptions {
        /** 开发者服务器接口地址，必须是 HTTPS 协议，且域名必须是后台配置的合法域名 */
        url: string;
        /** 请求的数据 */
        data?: any;
        /** HTTP Header , header 中不能设置 Referer */
        header?: RequestHeader | undefined;
        /** 默认是GET，有效值为： OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT */
        method?: string | undefined;
        /** 接口调用成功的回调函数 */
        success?: ResponseCallback | undefined;
        /** 接口调用失败的回调函数 */
        fail?: ResponseCallback | undefined;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: ResponseCallback | undefined;
    }
    /**
     * 创建一个 WebSocket 连接；
     * 一个微信小程序同时只能有一个 WebSocket 连接，
     * 如果当前已存在一个 WebSocket 连接，
     * 会自动关闭该连接，并重新创建一个 WebSocket 连接。
     */
    function connectSocket(options: ConnectSocketOptions): void;

    /** 监听WebSocket连接打开事件。 */
    function onSocketOpen(callback: OneParamCallback): void;

    /** 监听WebSocket错误。 */
    function onSocketError(callback: ErrorCallback): void;

    interface SendSocketMessageOptions {
        /**    需要发送的内容 */
        data: string;
        /** 接口调用成功的回调函数 */
        success?: ResponseCallback | undefined;
        /** 接口调用失败的回调函数 */
        fail?: ResponseCallback | undefined;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: ResponseCallback | undefined;
    }
    /**
     * 通过 WebSocket 连接发送数据，需要先 wx.connectSocket，
     * 并在 wx.onSocketOpen 回调之后才能发送。
     */
    function sendSocketMessage(options: SendSocketMessageOptions): void;

    /**
     * 监听WebSocket接受到服务器的消息事件。
     */
    function onSocketMessage(callback: DataResponseCallback): void;

    /**
     * 关闭WebSocket连接。
     */
    function closeSocket(): void;

    /** 监听WebSocket关闭。 */
    function onSocketClose(callback: ResponseCallback): void;

    type ImageSizeType = "original" | "compressed";
    type ImageSourceType = "album" | "camera";
    type VideoSourceType = "album" | "camera";
    type CameraDevice = "front" | "back";

    interface TempFilesData {
        /** 文件的临时路径 */
        tempFilePaths: string;
    }
    interface ChooseImageOptions {
        /** 最多可以选择的图片张数，默认9 */
        count?: number | undefined;
        /** original 原图，compressed 压缩图，默认二者都有 */
        sizeType?: Array<ImageSizeType> | undefined;
        /** album 从相册选图，camera 使用相机，默认二者都有 */
        sourceType?: Array<ImageSourceType> | undefined;
        /** 成功则返回图片的本地文件路径列表 tempFilePaths */
        success: (res: TempFilesData) => void;
        /** 接口调用失败的回调函数 */
        fail?: ResponseCallback | undefined;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: ResponseCallback | undefined;
    }
    /**
     * 从本地相册选择图片或使用相机拍照。
     */
    function chooseImage(options: ChooseImageOptions): void;

    interface PreviewImageOptions {
        /** 当前显示图片的链接，不填则默认为 urls 的第一张 */
        current?: string | undefined;
        /** 需要预览的图片链接列表 */
        urls: Array<string>;
        /** 接口调用成功的回调函数 */
        success?: ResponseCallback | undefined;
        /** 接口调用失败的回调函数 */
        fail?: ResponseCallback | undefined;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: ResponseCallback | undefined;
    }
    /**
     * 预览图片。
     */
    function previewImage(options: PreviewImageOptions): void;

    interface StartRecordOptions {
        /** 录音成功后调用，返回录音文件的临时文件路径，res = {tempFilePath: '录音文件的临时路径'} */
        success?: TempFileResponseCallback | undefined;
        /** 接口调用失败的回调函数 */
        fail?: ResponseCallback | undefined;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: ResponseCallback | undefined;
    }
    /**
     * 开始录音。当主动调用wx.stopRecord，
     * 或者录音超过1分钟时自动结束录音，返回录音文件的临时文件路径。
     * 注：文件的临时路径，在小程序本次启动期间可以正常使用，
     * 如需持久保存，需在主动调用wx.saveFile，在小程序下次启动时才能访问得到。
     */
    function startRecord(options: StartRecordOptions): void;

    /**
     * ​ 主动调用停止录音。
     */
    function stopRecord(): void;

    interface PlayVoiceOptions {
        /** 需要播放的语音文件的文件路径 */
        filePath: string;
        /** 接口调用成功的回调函数 */
        success?: ResponseCallback | undefined;
        /** 接口调用失败的回调函数 */
        fail?: ResponseCallback | undefined;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: ResponseCallback | undefined;
    }
    /**
     * 开始播放语音，同时只允许一个语音文件正在播放，
     * 如果前一个语音文件还没播放完，将中断前一个语音播放。
     */
    function playVoice(options: PlayVoiceOptions): void;

    /**
     * 暂停正在播放的语音。
     * 再次调用wx.playVoice播放同一个文件时，会从暂停处开始播放。
     * 如果想从头开始播放，需要先调用 wx.stopVoice。
     */
    function pauseVoice(): void;

    /**
     * 结束播放语音。
     */
    function stopVoice(): void;

    interface BackgroundAudioPlayerState {
        /** 选定音频的长度（单位：s），只有在当前有音乐播放时返回 */
        duration?: number | undefined;
        /** 选定音频的播放位置（单位：s），只有在当前有音乐播放时返回 */
        currentPosition?: number | undefined;
        /** 播放状态（2：没有音乐在播放，1：播放中，0：暂停中） */
        status: number;
        /** 音频的下载进度（整数，80 代表 80%），只有在当前有音乐播放时返回 */
        downloadPercent?: number | undefined;
        /** 歌曲数据链接，只有在当前有音乐播放时返回 */
        dataUrl?: string | undefined;
    }
    type GetBackgroundAudioPlayerStateSuccessCallback = (state: BackgroundAudioPlayerState) => void;
    interface GetBackgroundAudioPlayerStateOptions {
        /** 接口调用成功的回调函数 */
        success?: GetBackgroundAudioPlayerStateSuccessCallback | undefined;
        /** 接口调用失败的回调函数 */
        fail?: NoneParamCallback | undefined;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: NoneParamCallback | undefined;
    }
    /** 获取音乐播放状态。 */
    function getBackgroundAudioPlayerState(options: GetBackgroundAudioPlayerStateOptions): void;

    interface PlayBackgroundAudioOptions {
        /** 音乐链接 */
        dataUrl: string;
        /** 音乐标题 */
        title?: string | undefined;
        /** 封面URL */
        coverImgUrl?: string | undefined;
        /** 接口调用成功的回调函数 */
        success?: ResponseCallback | undefined;
        /** 接口调用失败的回调函数 */
        fail?: ResponseCallback | undefined;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: ResponseCallback | undefined;
    }
    /** 播放音乐，同时只能有一首音乐正在播放。 */
    function playBackgroundAudio(options: PlayBackgroundAudioOptions): void;

    /** 暂停播放音乐。 */
    function pauseBackgroundAudio(): void;

    interface SeekBackgroundAudioOptions {
        /** 音乐位置，单位：秒 */
        position: number;
        /** 接口调用成功的回调函数 */
        success?: ResponseCallback | undefined;
        /** 接口调用失败的回调函数 */
        fail?: ResponseCallback | undefined;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: ResponseCallback | undefined;
    }
    /**
     * 控制音乐播放进度。
     */
    function seekBackgroundAudio(options: SeekBackgroundAudioOptions): void;

    /**
     * 停止播放音乐。
     */
    function stopBackgroundAudio(): void;

    /** 监听音乐播放。 */
    function onBackgroundAudioPlay(callback: NoneParamCallback): void;

    /** 监听音乐暂停。 */
    function onBackgroundAudioPause(callback: NoneParamCallback): void;

    /** 监听音乐停止。 */
    function onBackgroundAudioStop(callback: NoneParamCallback): void;

    interface SavedFileData {
        /** 文件的保存路径 */
        savedFilePath: string;
    }
    interface SaveFileOptions {
        /** 需要保存的文件的临时路径 */
        tempFilePath: string;
        /** 返回文件的保存路径，res = {savedFilePath: '文件的保存路径'} */
        success?: ((res: SavedFileData) => void) | undefined;
        /** 接口调用失败的回调函数 */
        fail?: ResponseCallback | undefined;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: ResponseCallback | undefined;
    }
    /**
     * 保存文件到本地。
     */
    function saveFile(options: SaveFileOptions): void;

    interface VideoData {
        /** 选定视频的临时文件路径 */
        tempFilePath: string;
        /** 选定视频的时间长度 */
        duration: number;
        /** 选定视频的数据量大小 */
        size: number;
        /** 返回选定视频的长 */
        height: number;
        /** 返回选定视频的宽 */
        width: number;
    }
    interface ChooseVideoOptions {
        /** album 从相册选视频，camera 使用相机拍摄，默认为：['album', 'camera'] */
        sourceType?: Array<VideoSourceType> | undefined;
        /** 拍摄视频最长拍摄时间，单位秒。最长支持60秒 */
        maxDuration?: number | undefined;
        /** 前置或者后置摄像头，默认为前后都有，即：['front', 'back'] */
        camera?: Array<CameraDevice> | undefined;
        /** 接口调用成功，返回视频文件的临时文件路径，详见返回参数说明 */
        success?: ((res: VideoData) => void) | undefined;
        /** 接口调用失败的回调函数 */
        fail?: ResponseCallback | undefined;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: ResponseCallback | undefined;
    }
    /**
     * 拍摄视频或从手机相册中选视频，返回视频的临时文件路径。
     */
    function chooseVideo(options: ChooseVideoOptions): void;

    // 数据缓存
    interface StorageInfo {
        //  当前 storage 中所有的 key
        keys: Array<string>;
        //  当前占用的空间大小, 单位 KB
        currentSize: number;
        //  限制的空间大小，单位 KB
        limitSize: number;
    }
    type StorageInfoCallback = (res: StorageInfoOptions) => void;
    interface StorageInfoOptions extends CommonCallbackOptions {
        success?: StorageInfoCallback | undefined;
    }
    /**
     * getStorageInfo的同步版本
     */
    function getStorageInfoSync(): StorageInfo;
    /**
     * 异步获取当前storage的相关信息
     * @param options
     */
    function getStorageInfo(options: StorageInfoOptions): void;

    interface SetStorageOptions {
        /** 本地缓存中的指定的 key */
        key: string;
        /** 需要存储的内容 */
        data: any | string;
        /** 接口调用成功的回调函数 */
        success?: ResponseCallback | undefined;
        /** 接口调用失败的回调函数 */
        fail?: ResponseCallback | undefined;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: ResponseCallback | undefined;
    }
    /**
     * 将数据存储在本地缓存中指定的 key 中，
     * 会覆盖掉原来该 key 对应的内容，这是一个异步接口。
     */
    function setStorage(options: SetStorageOptions): void;
    /**
     * 将 data 存储在本地缓存中指定的 key 中，
     * 会覆盖掉原来该 key 对应的内容，这是一个同步接口。
     *
     * @param {string} key 本地缓存中的指定的 key
     * @param {(Object | string)} data 需要存储的内容
     */
    function setStorageSync(key: string, data: any | string): void;

    interface GetStorageOptions {
        /** 本地缓存中的指定的 key */
        key: string;
        /** 接口调用的回调函数,res = {data: key对应的内容} */
        success: DataResponseCallback;
        /** 接口调用失败的回调函数 */
        fail?: ResponseCallback | undefined;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: ResponseCallback | undefined;
    }
    /**
     * 从本地缓存中异步获取指定 key 对应的内容。
     */
    function getStorage(options: GetStorageOptions): void;

    /**
     * 从本地缓存中同步获取指定 key 对应的内容。
     *
     * @param {string} key
     * @returns {(Object | string)}
     */
    function getStorageSync(key: string): any | string;

    /**
     * 清理本地数据缓存。
     */
    function clearStorage(): void;
    /**
     * 同步清理本地数据缓存
     */
    function clearStorageSync(): void;

    // 媒体
    //  地图
    interface LocationBaseOptions {
        //  纬度，浮点数，范围为-90~90，负数表示南纬
        latitude: number;
        //  经度，浮点数，范围为-180~180，负数表示西经
        longitude: number;
    }
    interface GetCenterLocationSuccCbOptions extends CommonCallbackOptions {
        success(res: LocationBaseOptions): void;
    }
    interface translateMarkerOptions extends CommonCallbackOptions {
        //  指定 marker
        markerId: number;
        //  指定 marker 移动到的目标点
        destination: LocationBaseOptions;
        //  移动过程中是否自动旋转 marker
        autoRotate: boolean;
        //  marker 的旋转角度
        rotate: number;
        //  动画持续时长，平移与旋转分别计算
        duration?: number | undefined;
        //  动画结束回调函数
        animationEnd?(): void;
    }
    interface zoomPointsOptions extends CommonCallbackOptions {
        //  要显示在可视区域内的坐标点列表
        points: Array<LocationBaseOptions>;
        //  坐标点形成的矩形边缘到地图边缘的距离，单位像素。格式为[上,右,下,左]，安卓上只能识别数组第一项，上下左右的padding一致。开发者工具暂不支持padding参数。
        padding?: Array<number> | undefined;
    }
    interface GetReginSuccessCallbackOptions {
        //  西南角经纬度
        southwest: number;
        //  东北角经纬度
        northeast: number;
    }
    interface GetReginOptions extends CommonCallbackOptions {
        success?(callback: (res: GetReginSuccessCallbackOptions) => void): void;
    }
    interface GetScaleOptions extends CommonCallbackOptions {
        success?(callback: (res: { scale: number }) => void): void;
    }
    interface MapContext {
        //  获取当前地图中心的经纬度。返回的是 gcj02 坐标系，可以用于 wx.openLocation()
        getCenterLocation(options: GetCenterLocationSuccCbOptions): void;
        //  将地图中心移动到当前定位点。需要配合map组件的show-location使用
        moveToLocation(): void;
        //  平移marker，带动画
        translateMarker(options: translateMarkerOptions): void;
        //  缩放视野展示所有经纬度
        includePoints(options: zoomPointsOptions): void;
        //  获取当前地图的视野范围
        getRegion(options: GetReginOptions): void;
        //  获取当前地图的缩放级别
        getScale(options: GetScaleOptions): void;
    }

    interface LocationData {
        /** 纬度，浮点数，范围为-90~90，负数表示南纬 */
        latitude: number;
        /** 经度，浮点数，范围为-180~180，负数表示西经 */
        longitude: number;
        /** 速度，浮点数，单位m/s */
        speed: number;
        /** 位置的精确度 */
        accuracy: number;
    }

    interface GetLocationOptions {
        /** 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于wx.openLocation的坐标 */
        type?: "wgs84" | "gcj02" | undefined;
        /** 接口调用成功的回调函数，返回内容详见返回参数说明。 */
        success: (res: LocationData) => void;
        /** 接口调用失败的回调函数 */
        fail?: ResponseCallback | undefined;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: ResponseCallback | undefined;
    }
    /**
     * 获取当前的地理位置、速度。
     */
    function getLocation(options: GetLocationOptions): void;

    interface OpenLocationOptions {
        /** 纬度，范围为-90~90，负数表示南纬 */
        latitude: number;
        /** 经度，范围为-180~180，负数表示西经 */
        longitude: number;
        /** 缩放比例，范围1~28，默认为28 */
        scale?: number | undefined;
        /** 位置名 */
        name?: string | undefined;
        /** 地址的详细说明 */
        address?: string | undefined;
        /** 接口调用成功的回调函数 */
        success?: ResponseCallback | undefined;
        /** 接口调用失败的回调函数 */
        fail?: ResponseCallback | undefined;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: ResponseCallback | undefined;
    }
    /**
     * 使用微信内置地图查看位置
     */
    function openLocation(options: OpenLocationOptions): void;

    interface NetworkTypeData {
        /** 返回网络类型2g，3g，4g，wifi */
        networkType: "2g" | "3g" | "4g" | "wifi";
    }
    interface GetNetworkTypeOptions {
        /** 接口调用成功，返回网络类型 networkType */
        success: (res: NetworkTypeData) => void;
        /** 接口调用失败的回调函数 */
        fail?: ResponseCallback | undefined;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: ResponseCallback | undefined;
    }
    /**
     * 获取网络类型。
     */
    function getNetworkType(options: GetNetworkTypeOptions): void;

    interface SystemInfo {
        /** 手机型号 */
        model: string;
        /** 设备像素比 */
        pixelRatio: number;
        /** 窗口宽度 */
        windowWidth: number;
        /** 窗口高度 */
        windowHeight: number;
        /** 微信设置的语言 */
        language: string;
        /** 微信版本号 */
        version: string;
    }
    interface GetSystemInfoOptions {
        /** 成功获取系统信息的回调 */
        success: (res: SystemInfo) => void;
        /** 接口调用失败的回调函数 */
        fail?: ResponseCallback | undefined;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: ResponseCallback | undefined;
    }
    /**
     * 获取系统信息。
     */
    function getSystemInfo(options: GetSystemInfoOptions): void;

    interface UpdateManager {
        /**
         * 强制小程序重启并使用新版本。在小程序新版本下载完成后（即收到 onUpdateReady 回调）调用。
         */
        applyUpdate(callback: DataResponseCallback): void;
        /**
         * 监听向微信后台请求检查更新结果事件。微信在小程序冷启动时自动检查更新，不需由开发者主动触发。
         */
        onCheckForUpdate(): void;
        /**
         * 监听小程序有版本更新事件。客户端主动触发下载（无需开发者触发），下载成功后回调
         */
        onUpdateReady(callback: NoneParamCallback): void;
        /**
         * 监听小程序更新失败事件。小程序有新版本，客户端主动触发下载（无需开发者触发），下载失败（可能是网络原因等）后回调
         */
        onUpdateFailed(callback: NoneParamCallback): void;
    }
    /**
     * 获取全局唯一的版本更新管理器，用于管理小程序更新。关于小程序的更新机制，可以查看运行机制文档。
     */
    function getUpdateManager(): UpdateManager;

    /**
     * 获取小程序启动时的参数。与 App.onLaunch 的回调参数一致。
     */
    function getLaunchOptionsSync(): onLaunchCallback;

    // 应用级事件
    /**
     * 取消监听小程序要打开的页面不存在事件
     */
    function offPageNotFound(): NoneParamCallback;
    /**
     * 监听小程序要打开的页面不存在事件。该事件与 App.onPageNotFound 的回调时机一致。
     */
    function onPageNotFound(): NoneParamCallback;
    /**
     * 取消监听小程序错误事件。
     */
    function offError(): NoneParamCallback;
    /**
     * 监听小程序错误事件。如脚本错误或 API 调用报错等。该事件与 App.onError 的回调时机与参数一致。
     */
    function onError(): ErrorCallback;
    /**
     *  取消监听小程序切前台事件
     */
    function offAppShow(): NoneParamCallback;
    /**
     * 监听小程序切前台事件。该事件与 App.onShow 的回调参数一致。
     * @param callback
     */
    function onAppShow(callback: onShowOptions): void;
    /**
     * 取消监听小程序切后台事件
     */
    function offAppHide(): NoneParamCallback;
    /**
     * 监听小程序切后台事件。该事件与 App.onHide 的回调时机一致。
     */
    function onAppHide(): NoneParamCallback;

    //  调试  TODO

    // 路由
    interface routerOptions extends CommonCallbackOptions {
        //  需要跳转的应用内非 tabBar 的页面的路径, 路径后可以带参数。参数与路径之间使用 ? 分隔，参数键与参数值用 = 相连，不同参数用 & 分隔；如 'path?key=value&key2=value2'
        url: string;
    }
    interface NavigateBackOptions extends CommonCallbackOptions {
        //  返回的页面数，如果 delta 大于现有页面数，则返回到首页。
        delta: number;
    }
    /**
     * 关闭当前页面，返回上一页面或多级页面。可通过 getCurrentPages() 获取当前的页面栈，决定需要返回几层。
     */
    function navigateBack(options: NavigateBackOptions): void;
    /**
     * 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
     * @param options
     */
    function switchTab(options: routerOptions): void;
    /**
     * 保留当前页面，跳转到应用内的某个页面。但是不能跳到 tabbar 页面。使用 wx.navigateBack 可以返回到原页面。
     * @param options
     */
    function navigateTo(options: routerOptions): void;
    /**
     * 关闭所有页面，打开到应用内的某个页面
     */
    function reLaunch(options: routerOptions): void;
    /**
     * 关闭当前页面，跳转到应用内的某个页面。但是不允许跳转到 tabbar 页面。
     */
    function redirectTo(options: routerOptions): void;

    // 界面
    // 交互
    // tapIndex为用户点击的按钮序号，从上到下的顺序，从0开始
    type ActionSheetSuccessCallback = (res: { tapIndex: number }) => void;

    interface ActionSheetOptions {
        // 必填，按钮的文字数组，数组长度最大为 6
        itemList: Array<string>;
        // 按钮的文字颜色
        itemColor?: string | undefined;
        success?: ActionSheetSuccessCallback | undefined;
        fail?: ResponseCallback | undefined;
        complete?: ResponseCallback | undefined;
    }

    /**
     * 公共回调函数
     */
    interface CommonCallbackOptions {
        //  接口调用成功回调函数
        success?: ResponseCallback | undefined;
        //  接口调用失败回调函数
        fail?: ResponseCallback | undefined;
        //  接口调用结束的回调函数
        complete?: ResponseCallback | undefined;
    }

    interface LoadingOptions extends CommonCallbackOptions {
        // must，提示的内容
        title: string;
        //  默认false。是否显示透明蒙层，防止触摸穿透
        mask: boolean;
    }

    type icon = "success" | "loading" | "none";
    interface ToastOptions extends CommonCallbackOptions {
        // 提示的内容
        title: string;
        // 图标，默认值'success'
        icon?: icon | undefined;
        //  自定义图标的本地路径，image 的优先级高于 icon
        imgage?: string | undefined;
        //  提示的延迟时间，默认值1500ms
        duration?: number | undefined;
        //  是否显示透明蒙层，防止触摸穿透，默认值false
        mask: boolean;
    }

    interface ModalOptions extends CommonCallbackOptions {
        // 提示的内容
        title: string;
        // 提示的内容
        content: string;
        //  是否显示取消按钮，默认值true
        showCancel?: boolean | undefined;
        //  取消按钮的文字，最多 4 个字符，默认值'取消'
        cancelText?: string | undefined;
        //  取消按钮的文字颜色，必须是 16 进制格式的颜色字符串，默认值'#000000'
        cancelColor?: string | undefined;
        //  确认按钮的文字，最多 4 个字符
        confirmText?: string | undefined;
        //  确认按钮的文字颜色，必须是 16 进制格式的颜色字符串，默认值'#3cc51f'
        confirmColor?: boolean | undefined;
    }
    /**
     * 显示操作菜单
     */
    function showActionSheet(options: ActionSheetOptions): void;
    /**
     * 隐藏 loading 提示框
     * @param options
     */
    function hideLoading(options?: CommonCallbackOptions): void;
    /**
     * 显示 loading 提示框。需主动调用 wx.hideLoading 才能关闭提示框
     * @param options
     */
    function showLoading(options: LoadingOptions): void;
    /**
     * 隐藏消息提示框
     * @param options
     */
    function hideToast(options?: CommonCallbackOptions): void;
    /**
     * 显示消息提示框
     * @param options
     */
    function showToast(options: ToastOptions): void;
    /**
     * 显示模态对话框
     * @param options
     */
    function showModal(options: ModalOptions): void;

    interface NavigationBarColorAnimationOptions {
        //  动画变化时间，单位 ms，默认0
        animation?: number | undefined;
        //  动画变化方式.动画从头到尾的速度是相同的,动画以低速开始,动画以低速结束,动画以低速开始和结束
        timingFunc?: "linear" | "easeIn" | "easeOut" | "easeInOut" | undefined;
    }
    interface NavigationBarColorOptions extends CommonCallbackOptions {
        // 前景颜色值，包括按钮、标题、状态栏的颜色，仅支持 #ffffff 和 #000000
        frontColor: string;
        // 背景颜色值，有效值为十六进制颜色
        backgroundColor: string;
        //  动画效果
        animation: NavigationBarColorAnimationOptions;
    }
    interface NavigationBarTitleOptions extends CommonCallbackOptions {
        //  动态设置当前页面的标题
        title: string;
    }
    // 导航栏
    function setNavigationBarColor(): void;
    /**
     * 在当前页面隐藏导航条加载动画
     */
    function hideNavigationBarLoading(options?: CommonCallbackOptions): void;
    /**
     * 在当前页面显示导航条加载动画
     */
    function showNavigationBarLoading(options: CommonCallbackOptions): void;
    /**
     * 动态设置当前页面的标题
     * @param options
     */
    function setNavigationBarTitle(options: NavigationBarTitleOptions): void;

    //  背景
    function setBackgroundTextStyle(): void;
    interface BackgroundColorOptions extends CommonCallbackOptions {
        // 窗口的背景色，必须为十六进制颜色值
        backgroundColor?: string | undefined;
        // 顶部窗口的背景色，必须为十六进制颜色值，仅 iOS 支持
        backgroundColorTop?: string | undefined;
        //  底部窗口的背景色，必须为十六进制颜色值，仅 iOS 支持
        backgroundColorBottom?: string | undefined;
    }
    function setBackgroundColor(): void;
    //  Tab Bar
    interface TabBarItemOptions extends CommonCallbackOptions {
        //  tabBar 的哪一项，从左边算起
        index: number;
        //  tab 上的按钮文字
        text?: string | undefined;
        //  图片路径，icon 大小限制为 40kb，建议尺寸为 81px * 81px，当 postion 为 top 时，此参数无效，不支持网络图片
        iconPath?: string | undefined;
        //  选中时的图片路径，icon 大小限制为 40kb，建议尺寸为 81px * 81px ，当 postion 为 top 时，此参数无效
        selectedIconPath?: string | undefined;
    }
    /**
     * 动态设置 tabBar 某一项的内容
     * @param options
     */
    function setTabBarItem(options: TabBarItemOptions): void;

    interface TabBarStyleOptions extends CommonCallbackOptions {
        //  tab 上的文字默认颜色，HexColor
        color: string;
        //  tab 上的文字选中时的颜色，HexColor
        selectedColor: string;
        //  tab 的背景色，HexColor
        backgroundColor: string;
        //  tabBar上边框的颜色， 仅支持 black/white
        borderStyle: string;
    }
    /**
     * 动态设置tabBar的整体样式
     */
    function setTabBarStyle(options: TabBarItemOptions): void;

    interface TabBarAnimationOptions extends CommonCallbackOptions {
        //  是否需要动画效果
        animation: boolean;
    }
    /**
     * 隐藏tabBar
     */
    function hideTabBar(options: TabBarAnimationOptions): void;
    /**
     * 显示tabBar
     */
    function showTabBar(options: TabBarAnimationOptions): void;

    interface TabBarRedDotOptions extends CommonCallbackOptions {
        //  tabBar 的哪一项，从左边算起
        index: number;
    }
    /**
     * 隐藏 tabBar 某一项的右上角的红点
     * @param options
     */
    function hideTabBarRedDot(options: TabBarBadgeOptions): void;
    /**
     * 显示 tabBar 某一项的右上角的红点
     * @param options
     */
    function showTabBarRedDot(options: TabBarRedDotOptions): void;

    interface TabBarBadgeOptions extends CommonCallbackOptions {
        //  tabBar 的哪一项，从左边算起
        index: number;
        //  显示的文本，超过 4 个字符则显示成 ...
        text: string;
    }
    /**
     * 移除 tabBar 某一项右上角的文本
     * @param options
     */
    function removeTabBarBadge(options: TabBarRedDotOptions): void;
    /**
     * 为 tabBar 某一项的右上角添加文本
     * @param options
     */
    function setTabBarBadge(options: TabBarBadgeOptions): void;

    interface FontDescOptions {
        //  字体样式，可选值为 normal / italic / oblique
        style?: string | undefined;
        //  字体粗细，可选值为 normal / bold / 100 / 200../ 900
        weight?: string | undefined;
        //  设置小型大写字母的字体显示文本，可选值为 normal / small-caps / inherit
        variant?: string | undefined;
    }
    //  字体
    interface FontFaceOptions extends CommonCallbackOptions {
        //  定义的字体名称
        family: string;
        //  字体资源的地址。建议格式为 TTF 和 WOFF，WOFF2 在低版本的iOS上会不兼容。
        source: string;
        //  可选的字体描述符
        desc?: FontDescOptions | undefined;
    }
    function loadFontFace(options: FontFaceOptions): void;

    //  下拉刷新
    /**
     * 停止当前页面下拉刷新。
     */
    function stopPullDownRefresh(options?: CommonCallbackOptions): void;

    /**
     * 开始下拉刷新。调用后触发下拉刷新动画，效果与用户手动下拉刷新一致。
     */
    function startPullDownRefresh(options?: CommonCallbackOptions): void;

    //  滚动
    interface PageScrollToOptions extends CommonCallbackOptions {
        //  滚动到页面的目标位置，单位 px
        scrollTop: number;
        //  滚动动画的时长，单位 ms。默认300
        duration: number;
    }
    /**
     * 将页面滚动到
     */
    function pageScrollTo(): void;

    interface AccelerometerData {
        /** X 轴 */
        x: number;
        /** Y 轴 */
        y: number;
        /** Z 轴 */
        z: number;
    }
    type AccelerometerChangeCallback = (res: AccelerometerData) => void;
    /**
     * 监听重力感应数据，频率：5次/秒
     */
    function onAccelerometerChange(callback: AccelerometerChangeCallback): void;

    interface CompassData {
        /** 面对的方向度数 */
        direction: number;
    }
    type CompassChangeCallback = (res: CompassData) => void;
    function onCompassChange(callback: CompassChangeCallback): void;

    interface SetNavigationBarTitleOptions {
        /** 页面标题 */
        title?: string | undefined;
        /** 成功获取系统信息的回调 */
        success?: ResponseCallback | undefined;
        /** 接口调用失败的回调函数 */
        fail?: ResponseCallback | undefined;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: ResponseCallback | undefined;
    }
    /**
     * 动态设置当前页面的标题。
     */
    function setNavigationBarTitle(options: SetNavigationBarTitleOptions): void;

    /**
     * 在当前页面显示导航条加载动画。
     */
    function showNavigationBarLoading(): void;
    /**
     * 隐藏导航条加载动画。
     */
    function hideNavigationBarLoading(): void;

    type TimingFunction = "linear" | "ease" | "ease-in" | "ease-in-out" | "ease-out" | "step-start" | "step-end";

    // 动画
    interface CreateAnimationOptions {
        /** 动画持续时间，单位ms，默认值 400 */
        duration?: number | undefined;
        /** 定义动画的效果，默认值"linear"，有效值："linear","ease","ease-in","ease-in-out","ease-out","step-start","step-end" */
        timingFunction?: TimingFunction | undefined;
        /** 动画持续时间，单位 ms，默认值 0 */
        delay?: number | undefined;
        /** 设置transform-origin，默认为"50% 50% 0" */
        transformOrigin?: string | undefined;
    }

    interface Animator {
        actions: Array<AnimationAction>;
    }
    interface AnimationAction {
        animates: Array<Animate>;
        option: AnimationActionOption;
    }
    interface AnimationActionOption {
        transformOrigin: string;
        transition: AnimationTransition;
    }
    interface AnimationTransition {
        delay: number;
        duration: number;
        timingFunction: TimingFunction;
    }
    interface Animate {
        type: string;
        args: Array<any>;
    }

    /**
     * 创建一个动画实例animation。调用实例的方法来描述动画。
     * 最后通过动画实例的export方法导出动画数据传递给组件的animation属性。
     *
     * 注意: export 方法每次调用后会清掉之前的动画操作
     */
    function createAnimation(options?: CreateAnimationOptions): Animation;
    /** 动画实例可以调用以下方法来描述动画，调用结束后会返回自身，支持链式调用的写法。 */
    interface Animation {
        /**
         * 调用动画操作方法后要调用 step() 来表示一组动画完成，
         * 可以在一组动画中调用任意多个动画方法，
         * 一组动画中的所有动画会同时开始，
         * 一组动画完成后才会进行下一组动画。
         * @param {CreateAnimationOptions} options 指定当前组动画的配置
         */
        step(options?: CreateAnimationOptions): void;
        /**
         * 导出动画操作
         *
         * 注意: export 方法每次调用后会清掉之前的动画操作
         */
        export(): Animator;

        /** 透明度，参数范围 0~1 */
        opacity(value: number): Animation;
        /** 颜色值 */
        backgroundColor(color: string): Animation;
        /** 长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值 */
        width(length: number): Animation;
        /** 长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值 */
        height(length: number): Animation;
        /** 长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值 */
        top(length: number): Animation;
        /** 长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值 */
        left(length: number): Animation;
        /** 长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值 */
        bottom(length: number): Animation;
        /** 长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值 */
        right(length: number): Animation;

        /** deg的范围-180~180，从原点顺时针旋转一个deg角度 */
        rotate(deg: number): Animation;
        /** deg的范围-180~180，在X轴旋转一个deg角度 */
        rotateX(deg: number): Animation;
        /** deg的范围-180~180，在Y轴旋转一个deg角度 */
        rotateY(deg: number): Animation;
        /** deg的范围-180~180，在Z轴旋转一个deg角度 */
        rotateZ(deg: number): Animation;
        /** 同transform-function rotate3d */
        rotate3d(x: number, y: number, z: number, deg: number): Animation;

        /**
         * 一个参数时，表示在X轴、Y轴同时缩放sx倍数；
         * 两个参数时表示在X轴缩放sx倍数，在Y轴缩放sy倍数
         */
        scale(sx: number, sy?: number): Animation;
        /** 在X轴缩放sx倍数 */
        scaleX(sx: number): Animation;
        /** 在Y轴缩放sy倍数 */
        scaleY(sy: number): Animation;
        /** 在Z轴缩放sy倍数 */
        scaleZ(sz: number): Animation;
        /** 在X轴缩放sx倍数，在Y轴缩放sy倍数，在Z轴缩放sz倍数 */
        scale3d(sx: number, sy: number, sz: number): Animation;

        /**
         * 一个参数时，表示在X轴偏移tx，单位px；
         * 两个参数时，表示在X轴偏移tx，在Y轴偏移ty，单位px。
         */
        translate(tx: number, ty?: number): Animation;
        /**
         * 在X轴偏移tx，单位px
         */
        translateX(tx: number): Animation;
        /**
         * 在Y轴偏移tx，单位px
         */
        translateY(ty: number): Animation;
        /**
         * 在Z轴偏移tx，单位px
         */
        translateZ(tz: number): Animation;
        /**
         * 在X轴偏移tx，在Y轴偏移ty，在Z轴偏移tz，单位px
         */
        translate3d(tx: number, ty: number, tz: number): Animation;

        /**
         * 参数范围-180~180；
         * 一个参数时，Y轴坐标不变，X轴坐标延顺时针倾斜ax度；
         * 两个参数时，分别在X轴倾斜ax度，在Y轴倾斜ay度
         */
        skew(ax: number, ay?: number): Animation;
        /** 参数范围-180~180；Y轴坐标不变，X轴坐标延顺时针倾斜ax度 */
        skewX(ax: number): Animation;
        /** 参数范围-180~180；X轴坐标不变，Y轴坐标延顺时针倾斜ay度 */
        skewY(ay: number): Animation;

        /**
         * 同transform-function matrix
         */
        matrix(a: number, b: number, c: number, d: number, tx: number, ty: number): Animation;
        /** 同transform-function matrix3d */
        matrix3d(
            a1: number,
            b1: number,
            c1: number,
            d1: number,
            a2: number,
            b2: number,
            c2: number,
            d2: number,
            a3: number,
            b3: number,
            c3: number,
            d3: number,
            a4: number,
            b4: number,
            c4: number,
            d4: number,
        ): Animation;
    }

    interface CanvasAction {
        method: string;
        data: Array<CanvasAction> | Array<number | string>;
    }
    type LineCapType = "butt" | "round" | "square";
    type LineJoinType = "bevel" | "round" | "miter";
    /**
     * context只是一个记录方法调用的容器，用于生成记录绘制行为的actions数组。context跟<canvas/>不存在对应关系，一个context生成画布的绘制动作数组可以应用于多个<canvas/>。
     */
    interface CanvasContext {
        /** 获取当前context上存储的绘图动作 */
        getActions(): Array<CanvasAction>;
        /** 清空当前的存储绘图动作 */
        clearActions(): void;
        /**
         * 对横纵坐标进行缩放
         * 在调用scale方法后，之后创建的路径其横纵坐标会被缩放。
         * 多次调用scale，倍数会相乘。
         *
         * @param {number} scaleWidth 横坐标缩放的倍数
         * @param {number} scaleHeight 纵坐标轴缩放的倍数
         */
        scale(scaleWidth: number, scaleHeight?: number): void;
        /**
         * 对坐标轴进行顺时针旋转
         * 以原点为中心，原点可以用 translate方法修改。
         * 顺时针旋转当前坐标轴。多次调用rotate，旋转的角度会叠加。
         *
         * @param {number} rotate 旋转角度，以弧度计。
         */
        rotate(rotate: number): void;
        /**
         * 对坐标原点进行缩放
         * 对当前坐标系的原点(0, 0)进行变换，默认的坐标系原点为页面左上角。
         *
         * @param {number} x 水平坐标平移量
         * @param {number} y 竖直坐标平移量
         */
        translate(x: number, y: number): void;
        /**
         * 保存当前坐标轴的缩放、旋转、平移信息
         */
        save(): void;
        /**
         * 恢复之前保存过的坐标轴的缩放、旋转、平移信息
         */
        restore(): void;
        /**
         * 在给定的矩形区域内，清除画布上的像素
         * 清除画布上在该矩形区域内的内容。
         *
         * @param {number} x 矩形区域左上角的x坐标
         * @param {number} y 矩形区域左上角的y坐标
         * @param {number} width 矩形区域的宽度
         * @param {number} height 矩形区域的高度
         */
        clearRect(x: number, y: number, width: number, height: number): void;
        /**
         * 在画布上绘制被填充的文本
         *
         * @param {string} text 在画布上输出的文本
         * @param {number} x 绘制文本的左上角x坐标位置
         * @param {number} y 绘制文本的左上角y坐标位置
         */
        fillText(text: string, x: number, y: number): void;
        /**
         * 在画布上绘制图像
         * 绘制图像，图像保持原始尺寸。
         *
         * @param {string} imageResource 所要绘制的图片资源。 通过chooseImage得到一个文件路径或者一个项目目录内的图片
         * @param {number} x 图像左上角的x坐标
         * @param {number} y 图像左上角的y坐标
         */
        drawImage(imageResource: string, x: number, y: number): void;
        /**
         * 对当前路径进行填充
         */
        fill(): void;
        /**
         * 对当前路径进行描边
         */
        stroke(): void;
        /**
         * 开始一个路径
         * 开始创建一个路径，需要调用fill或者stroke才会使用路径进行填充或描边。
         * 同一个路径内的多次setFillStyle、setStrokeStyle、setLineWidth等设置，
         * 以最后一次设置为准。
         */
        beginPath(): void;
        /**
         * 关闭一个路径
         */
        closePath(): void;
        /**
         * 把路径移动到画布中的指定点，但不创建线条。
         *
         * @param {number} x 目标位置的x坐标
         * @param {number} y 目标位置的y坐标
         */
        moveTo(x: number, y: number): void;
        /**
         * 在当前位置添加一个新点，然后在画布中创建从该点到最后指定点的路径。
         *
         * @param {number} x 目标位置的x坐标
         * @param {number} y 目标位置的y坐标
         */
        lineTo(x: number, y: number): void;
        /**
         * 添加一个矩形路径到当前路径。
         *
         * @param {number} x 矩形路径左上角的x坐标
         * @param {number} y 矩形路径左上角的y坐标
         * @param {number} width 矩形路径的宽度
         * @param {number} height 矩形路径的高度
         */
        rect(x: number, y: number, width: number, height: number): void;
        /**
         * 添加一个弧形路径到当前路径，顺时针绘制。
         *
         * @param {number} x 矩形路径左上角的x坐标
         * @param {number} y 矩形路径左上角的y坐标
         * @param {number} radius 矩形路径左上角的y坐标
         * @param {number} startAngle 起始弧度
         * @param {number} endAngle 结束弧度
         * @param {boolean} sweepAngle 从起始弧度开始，扫过的弧度
         */
        arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, sweepAngle: boolean): void;
        /**
         * 创建二次方贝塞尔曲线
         *
         * @param {number} cpx 贝塞尔控制点的x坐标
         * @param {number} cpy 贝塞尔控制点的y坐标
         * @param {number} x 结束点的x坐标
         * @param {number} y 结束点的y坐标
         */
        quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void;
        /**
         * 创建三次方贝塞尔曲线
         *
         * @param {number} cp1x 第一个贝塞尔控制点的 x 坐标
         * @param {number} cp1y 第一个贝塞尔控制点的 y 坐标
         * @param {number} cp2x 第二个贝塞尔控制点的 x 坐标
         * @param {number} cp2y 第二个贝塞尔控制点的 y 坐标
         * @param {number} x 结束点的x坐标
         * @param {number} y 结束点的y坐标
         */
        bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void;
        /**
         * 设置填充样式
         *
         * @param {string} color 设置为填充样式的颜色。'rgb(255, 0, 0)'或'rgba(255, 0, 0, 0.6)'或'#ff0000'格式的颜色字符串
         */
        setFillStyle(color: string): void;
        /**
         * 设置线条样式
         *
         * @param {string} color 设置为填充样式的颜色。'rgb(255, 0, 0)'或'rgba(255, 0, 0, 0.6)'或'#ff0000'格式的颜色字符串
         */
        setStrokeStyle(color: string): void;
        /**
         * 设置阴影
         *
         * @param {number} offsetX 阴影相对于形状在水平方向的偏移
         * @param {number} offsetY 阴影相对于形状在竖直方向的偏移
         * @param {number} blur 阴影的模糊级别，数值越大越模糊 0~100
         * @param {string} color 阴影的颜色。 'rgb(255, 0, 0)'或'rgba(255, 0, 0, 0.6)'或'#ff0000'格式的颜色字符串
         */
        setShadow(offsetX: number, offsetY: number, blur: number, color: string): void;
        /**
         * 设置字体大小
         *
         * @param {number} fontSize 字体的字号
         */
        setFontSize(fontSize: number): void;
        /**
         * 设置线条端点的样式
         *
         * @param {LineCapType} lineCap 线条的结束端点样式。 'butt'、'round'、'square'
         */
        setLineCap(lineCap: LineCapType): void;
        /**
         * 设置两线相交处的样式
         *  @param {LineJoinType} lineJoin 两条线相交时，所创建的拐角类型
         */
        setLineJoin(lineJoin: LineJoinType): void;
        /**
         * 设置线条宽度
         *
         * @param {number} lineWidth 线条的宽度
         */
        setLineWidth(lineWidth: number): void;
        /** 设置最大斜接长度，斜接长度指的是在两条线交汇处内角和外角之间的距离。
         * 当 setLineJoin为 miter 时才有效。
         * 超过最大倾斜长度的，连接处将以 lineJoin 为 bevel 来显示
         *
         * @param {number} miterLimit 最大斜接长度
         */
        setMiterLimit(miterLimit: number): void;
    }
    /**
     * 创建并返回绘图上下文context对象。
     * context只是一个记录方法调用的容器，
     * 用于生成记录绘制行为的actions数组。c
     * ontext跟<canvas/>不存在对应关系，
     * 一个context生成画布的绘制动作数组可以应用于多个<canvas/>。
     */
    function createContext(): CanvasContext;

    interface DrawCanvasOptions {
        /** 画布标识，传入 <canvas/> 的 cavas-id */
        canvasId: number | string;
        /**
         * 绘图动作数组，由 wx.createContext 创建的 context，
         * 调用 getActions 方法导出绘图动作数组。
         */
        actions: Array<CanvasAction>;
    }
    /**
     * 绘制画布
     */
    function drawCanvas(options: DrawCanvasOptions): void;

    /**
     * 收起键盘。
     */
    function hideKeyboard(): void;

    //  开放接口
    //  登录
    interface LoginResponse {
        /** 调用结果 */
        errMsg: string;
        /** 用户允许登录后，回调内容会带上 code（有效期五分钟），
         * 开发者需要将 code 发送到开发者服务器后台，
         * 使用code 换取 session_key api，
         * 将 code 换成 openid 和 session_key */
        code: string;
    }
    interface LoginOptions {
        /** 接口调用成功的回调函数 */
        success?: ((res: LoginResponse) => void) | undefined;
        /** 接口调用失败的回调函数 */
        fail?: ResponseCallback | undefined;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: ResponseCallback | undefined;
    }

    /**
     *  检查登录态是否过期。
     */
    function checkSession(options: CommonCallbackOptions): void;
    /**
     * 调用接口获取登录凭证（code）进而换取用户登录态信息，
     * 包括用户的唯一标识（openid） 及本次登录的 会话密钥（session_key）。
     * 用户数据的加解密通讯需要依赖会话密钥完成。
     */
    function login(option: LoginOptions): void;

    type envVersion = "develop" | "trial" | "release";
    interface NavigateToMiniProgramOptions extends CommonCallbackOptions {
        //  要打开的小程序 appId
        appId: string;
        //  打开的页面路径，如果为空则打开首页
        path?: string | undefined;
        //  需要传递给目标小程序的数据，目标小程序可在 App.onLaunch，App.onShow 中获取到这份数据。
        extraData?: object | undefined;
        //  要打开的小程序版本。仅在当前小程序为开发版或体验版时此参数有效。如果当前小程序是正式版，则打开的小程序必定是正式版。
        envVersion?: envVersion | undefined;
    }
    /**
     * 打开另一个小程序
     */
    function navigateToMiniProgram(options: NavigateToMiniProgramOptions): void;
    interface NavigateBackMiniProgramOptions extends CommonCallbackOptions {
        //  需要返回给上一个小程序的数据，上一个小程序可在 App.onShow 中获取到这份数据。
        extraData: object;
    }
    /**
     * 返回到上一个小程序。只有在当前小程序是被其他小程序打开时可以调用成功
     */
    function navigateBackMiniProgram(options: NavigateBackMiniProgramOptions): void;

    // 帐号信息
    interface AccountInfo {
        //  小程序帐号信息
        miniProgram: {
            //  小程序appId
            appId: string;
        };
        //  插件帐号信息（仅在插件中调用时包含这一项）
        Plugin: {
            //  插件appId
            appId: string;
            //  插件版本号
            vetsion: string;
        };
    }
    /**
     * 获取当前账号信息
     */
    function getAccountInfoSync(): AccountInfo;

    //  帐号信息
    interface UserInfo {
        nickName: string;
        avatarUrl: string;
        gender: number;
        province: string;
        city: string;
        country: string;
    }
    interface UserInfoResponse {
        /** 用户信息对象，不包含 openid 等敏感信息 */
        userInfo: UserInfo;
        /** 不包括敏感信息的原始数据字符串，用于计算签名。 */
        rawData: string;
        /** 使用 sha1( rawData + sessionkey ) 得到字符串，用于校验用户信息。 */
        signature: string;
        /** 包括敏感数据在内的完整用户信息的加密数据，详细见加密数据解密算法 */
        encryptData: string;
    }
    interface GetUserInfoOptions {
        /** 接口调用成功的回调函数 */
        success?: ((res: UserInfoResponse) => void) | undefined;
        /** 接口调用失败的回调函数 */
        fail?: ResponseCallback | undefined;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: ResponseCallback | undefined;
    }
    /**
     * 获取用户信息，需要先调用 wx.login 接口。
     */
    function getUserInfo(options: GetUserInfoOptions): void;

    type PaymentSignType = "MD5";
    interface RequestPaymentOptions {
        /** 时间戳从1970年1月1日00:00:00至今的秒数,即当前的时间 */
        timeStamp: string | number;
        /** 随机字符串，长度为32个字符以下。 */
        nonceStr: string;
        /** 统一下单接口返回的 prepay_id 参数值，提交格式如：prepay_id=* */
        package: string;
        /** 签名算法，暂支持 MD5 */
        signType: PaymentSignType;
        /** 签名,具体签名方案参见微信公众号支付帮助文档; */
        paySign: string;
        /** 接口调用成功的回调函数 */
        success?: ResponseCallback | undefined;
        /** 接口调用失败的回调函数 */
        fail?: ResponseCallback | undefined;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: ResponseCallback | undefined;
    }
    //  支付
    /**
     * 发起微信支付。
     */
    function requestPayment(options: RequestPaymentOptions): void;

    //  授权
    /**
     * https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/authorize.html
     * 用户信息 wx.getUserInfo、
     * 地理位置 wx.getLocation,wx.chooseLocation、
     * 通讯地址 wx.chooseAddress、
     * 发票抬头 wx.chooseInvoiceTitle、
     * 获取发票 wx.chooseInvoice、
     * 微信运动步数 wx.getWeRunData、
     * 录音功能 wx.startRecord、
     * 保存到相册 wx.saveImageToPhotosAlbum, wx.saveVideoToPhotosAlbum、
     * 摄像头 <camera />组件
     */
    type Scope =
        | "userInfo"
        | "userLocation"
        | "address"
        | "invoiceTitle"
        | "invoice"
        | "werun"
        | "record"
        | "writePhotosAlbum"
        | "camera";
    interface AuthorizeOptions extends CommonCallbackOptions {
        //  需要获取权限的 scope，详见 scope 列表
        scope: Scope;
    }
    /**
     * 提前向用户发起授权请求。调用后会立刻弹窗询问用户是否同意授权小程序使用某项功能或获取用户的某些数据，但不会实际调用对应接口。如果用户之前已经同意授权，则不会出现弹窗，直接返回成功。
     */
    function authorize(options: AuthorizeOptions): void;

    // 设置
    interface SettingOptions extends CommonCallbackOptions {
        success?(res: AuthSetting): void;
    }
    /**
     * 调起客户端小程序设置界面，返回用户设置的操作结果。设置界面只会出现小程序已经向用户请求过的权限。
     */
    function openSetting(options: SettingOptions): void;
    /**
     * 获取用户的当前设置。返回值中只会出现小程序已经向用户请求过的权限。
     */
    function getSetting(options: SettingOptions): void;
    /**
     * 用户授权结果，参考 type Scope
     */
    interface AuthSetting {
        "scope.userInfo": boolean;
        "scope.userLocation": boolean;
        "scope.address": boolean;
        "scope.invoiceTitle": boolean;
        "scope.invoice": boolean;
        "scope.werun": boolean;
        "scope.record": boolean;
        "scope.writePhotosAlbum": boolean;
        "scope.camera": boolean;
    }
}
//  end of wx namespace

interface Page {
    /**
     * setData 函数用于将数据从逻辑层发送到视图层，
     * 同时改变对应的 this.data 的值。
     * 注意：
     *    1. 直接修改 this.data 无效，无法改变页面的状态，还会造成数据不一致。
     *    2. 单次设置的数据不能超过1024kB，请尽量避免一次设置过多的数据。
     */
    setData(data: any): void;
}
interface PageConstructor {
    /**
     * Page() 函数用来注册一个页面。
     * 接受一个 object 参数，其指定页面的初始数据、生命周期函数、事件处理函数等。
     */
    (options: wx.PageOptions): void;
}
declare var Page: PageConstructor;

interface App {
    /**
     * getCurrentPage() 函数用户获取当前页面的实例。
     */
    getCurrentPage(): Page;
}
interface AppConstructor {
    /**
     * App() 函数用来注册一个小程序。
     * 接受一个 object 参数，其指定小程序的生命周期函数等。
     */
    (options: wx.AppOptions): void;
}
declare var App: AppConstructor;

/**
 * 我们提供了全局的 getApp() 函数，可以获取到小程序实例。
 */
declare function getApp(): App;

// 定时器
/**
 * 设定一个定时器。在定时到期以后执行注册的回调函数
 * @param callback
 * @param delay 延迟的时间，函数的调用会在该延迟之后发生，单位 ms。
 * @param rest  param1, param2, ..., paramN 等附加参数，它们会作为参数传递给回调函数。
 */
declare function setTimeout(callback: any, delay: number, rest?: any): number;

/**
 * 取消由 setTimeout 设置的定时器。
 * @param timeoutID 要取消的定时器的ID
 */
declare function clearTimeout(timeoutID: number): number;

/**
 * 设定一个定时器。按照指定的周期（以毫秒计）来执行注册的回调函数
 * @param callback
 * @param delay 延迟的时间，函数的调用会在该延迟之后发生，单位 ms。
 * @param rest  param1, param2, ..., paramN 等附加参数，它们会作为参数传递给回调函数。
 */
declare function setInterval(callback: any, delay: number, rest: any): number;

/**
 * 取消由 setInterval 设置的定时器。
 * @param timeoutID 要取消的定时器的ID
 */
declare function clearInterval(timeoutID: number): number;

export { App, clearInterval, clearTimeout, getApp, Page, setInterval, setTimeout, wx };
